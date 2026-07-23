(function registerUrodynamicAssessmentUI() {
  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function createDownload(filename, type, content) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function createAssessmentUI(options) {
    const {
      model,
      engine,
      state,
      revision,
      elements,
      courseContext,
      save,
      navigateToRemediation,
      onMasteryChange
    } = options;

    function mastery() {
      return engine.calculateMastery(model, state.assessment, courseContext());
    }

    function score(kind) {
      return engine.scoreExam(model[kind], state.assessment[kind]);
    }

    function setSection(section) {
      state.assessment.section = section;
      render();
      save();
    }

    function renderMastery() {
      const current = mastery();
      elements.masterySummary.innerHTML = `
        <span>Dominio global</span>
        <strong>${current.percent}%</strong>
        <p>${escapeHtml(current.level.label)} · ${current.correct} de ${current.attempted} evidencias correctas</p>
      `;
      elements.competencyGrid.innerHTML = current.competencies
        .map(
          (competency) => `
            <article class="competency-item level-${competency.level.id}">
              <header>
                <strong>${escapeHtml(competency.label)}</strong>
                <span>${competency.attempted ? `${competency.percent}%` : "Sin evidencia"}</span>
              </header>
              <div class="competency-meter" aria-label="${escapeHtml(competency.label)}: ${competency.percent}%">
                <i style="width:${competency.percent}%"></i>
              </div>
              <p>${escapeHtml(competency.description)}</p>
              <small>${escapeHtml(competency.level.label)} · ${competency.attempted} evidencias</small>
            </article>
          `
        )
        .join("");
      onMasteryChange(current);
    }

    function examStatusMarkup(kind, label) {
      const result = score(kind);
      const status = state.assessment[kind].submitted
        ? `${result.percent}% · ${result.correct}/${result.total}`
        : `${result.answered}/${result.total} respondidas`;
      return `
        <article class="assessment-status">
          <span>${label}</span>
          <strong>${status}</strong>
          <p>${state.assessment[kind].submitted ? "Evaluación completada" : "Evaluación pendiente"}</p>
        </article>
      `;
    }

    function renderOverview() {
      const pre = score("pretest");
      const post = score("posttest");
      const delta = state.assessment.pretest.submitted && state.assessment.posttest.submitted
        ? post.percent - pre.percent
        : null;
      const capstone = engine.scoreCapstone(model, state.assessment.capstone);

      elements.content.innerHTML = `
        <section class="assessment-section">
          <header class="assessment-section-head">
            <div>
              <p class="overline">Trayectoria evaluativa</p>
              <h4>Una misma rúbrica desde la línea base hasta la respuesta clínica</h4>
            </div>
            <p>El porcentaje refleja evidencia registrada. No equivale por sí solo a certificación clínica.</p>
          </header>
          <div class="assessment-status-grid">
            ${examStatusMarkup("pretest", "Pretest")}
            ${examStatusMarkup("posttest", "Postest")}
            <article class="assessment-status">
              <span>Caso final</span>
              <strong>${state.assessment.capstone.submitted ? `${capstone.percent}% automático` : "Pendiente"}</strong>
              <p>${capstone.requiresHumanReview ? "Texto libre pendiente de revisión humana" : "Sin respuesta final"}</p>
            </article>
            <article class="assessment-status">
              <span>Cambio pre/post</span>
              <strong>${delta === null ? "Sin comparación" : `${delta >= 0 ? "+" : ""}${delta} puntos`}</strong>
              <p>Comparable porque ambos exámenes cubren los mismos seis dominios.</p>
            </article>
          </div>
        </section>

        <section class="assessment-section assessment-actions-band">
          <div>
            <p class="overline">Siguiente evidencia</p>
            <h4>${!state.assessment.pretest.submitted ? "Establece tu línea base" : !state.assessment.posttest.submitted ? "Completa el recorrido antes del postest" : !state.assessment.capstone.submitted ? "Resuelve un caso desconocido" : "Compara tu informe con la rúbrica"}</h4>
          </div>
          <div class="assessment-action-row">
            <button type="button" class="primary-action" data-open-assessment="${!state.assessment.pretest.submitted ? "pretest" : !state.assessment.posttest.submitted ? "posttest" : !state.assessment.capstone.submitted ? "capstone" : "report"}">Continuar evaluación</button>
            <button type="button" class="secondary-action" data-export-results>Exportar resultados anónimos</button>
          </div>
        </section>

        <section class="assessment-section institutional-note">
          <strong>Modo docente local</strong>
          <p>La exportación no contiene nombre, correo, RUT ni datos clínicos. La gestión real de cohortes requiere posteriormente un backend autenticado.</p>
        </section>
      `;

      elements.content.querySelectorAll("[data-open-assessment]").forEach((button) => {
        button.addEventListener("click", () => setSection(button.dataset.openAssessment));
      });
      const exportButton = elements.content.querySelector("[data-export-results]");
      exportButton?.addEventListener("click", exportAnonymousResults);
    }

    function errorSummaryMarkup(result) {
      const errors = Object.entries(result.errorCounts).sort((a, b) => b[1] - a[1]);
      if (!errors.length) {
        return '<div class="adaptive-summary good"><strong>Sin errores clasificados</strong><p>Conservaste calidad, contexto y límites en las respuestas enviadas.</p></div>';
      }
      return `
        <div class="adaptive-summary warn">
          <strong>Patrones que requieren refuerzo</strong>
          <ul>
            ${errors
              .map(([errorId, count]) => {
                const error = model.errorTaxonomy[errorId];
                return `<li><b>${escapeHtml(error.label)}</b><span>${count} ${count === 1 ? "respuesta" : "respuestas"}</span><p>${escapeHtml(error.microLesson)}</p></li>`;
              })
              .join("")}
          </ul>
        </div>
      `;
    }

    function renderExam(kind) {
      const items = model[kind];
      const examState = state.assessment[kind];
      const result = score(kind);
      const title = kind === "pretest" ? "Pretest estructurado" : "Postest estructurado";
      const purpose = kind === "pretest"
        ? "Establece una línea base. Las respuestas correctas se muestran solamente después del envío."
        : "Mide los mismos seis dominios con situaciones distintas y permite comparar el cambio.";

      elements.content.innerHTML = `
        <section class="assessment-section exam-shell">
          <header class="assessment-section-head">
            <div>
              <p class="overline">${kind === "pretest" ? "Línea base" : "Medición posterior"}</p>
              <h4>${title}</h4>
            </div>
            <p>${purpose}</p>
          </header>
          ${examState.submitted ? errorSummaryMarkup(result) : ""}
          <ol class="exam-list">
            ${items
              .map((item, itemIndex) => {
                const selected = Number(examState.answers[item.id]);
                const answered = Number.isInteger(selected);
                const correct = answered && selected === item.correctIndex;
                return `
                  <li class="exam-item ${examState.submitted ? (correct ? "good" : "warn") : ""}">
                    <header>
                      <span>${String(itemIndex + 1).padStart(2, "0")}</span>
                      <div>
                        <small>${escapeHtml(model.domains.find((domain) => domain.id === item.domain)?.label || item.domain)} · ${escapeHtml(model.competencies.find((competency) => competency.id === item.competency)?.label || item.competency)}</small>
                        <strong>${escapeHtml(item.prompt)}</strong>
                      </div>
                    </header>
                    <div class="exam-options">
                      ${item.options
                        .map(
                          (option, optionIndex) => `
                            <label class="${examState.submitted && optionIndex === item.correctIndex ? "correct-option" : ""}">
                              <input type="radio" name="${item.id}" value="${optionIndex}" ${selected === optionIndex ? "checked" : ""} ${examState.submitted ? "disabled" : ""} />
                              <span>${String.fromCharCode(65 + optionIndex)}</span>
                              <b>${escapeHtml(option)}</b>
                            </label>
                          `
                        )
                        .join("")}
                    </div>
                    ${examState.submitted
                      ? `<div class="exam-feedback ${correct ? "good" : "warn"}"><strong>${correct ? "Lectura correcta" : escapeHtml(model.errorTaxonomy[item.errorType].label)}</strong><p>${escapeHtml(item.explanation)}</p>${correct ? "" : `<button type="button" class="text-action" data-remediation-chapter="${item.remediation.chapter}" data-remediation-scenario="${item.remediation.scenario}">Abrir caso equivalente</button>`}</div>`
                      : ""}
                  </li>
                `;
              })
              .join("")}
          </ol>
          <footer class="assessment-submit-row">
            <span>${result.answered} de ${result.total} respondidas</span>
            ${examState.submitted
              ? `<button type="button" class="secondary-action" data-reset-exam="${kind}">Reiniciar ${kind === "pretest" ? "pretest" : "postest"}</button>`
              : `<button type="button" class="primary-action" data-submit-exam="${kind}">Enviar evaluación</button>`}
          </footer>
          <div class="assessment-message" id="assessmentMessage"></div>
        </section>
      `;

      if (!examState.submitted) {
        elements.content.querySelectorAll('input[type="radio"]').forEach((input) => {
          input.addEventListener("change", () => {
            examState.answers[input.name] = Number(input.value);
            save();
            renderMastery();
            const message = elements.content.querySelector("#assessmentMessage");
            const updated = score(kind);
            if (message) message.textContent = `${updated.answered} de ${updated.total} respondidas.`;
          });
        });
      }

      elements.content.querySelector("[data-submit-exam]")?.addEventListener("click", () => {
        const current = score(kind);
        if (!current.complete) {
          elements.content.querySelector("#assessmentMessage").textContent = "Responde todos los reactivos antes de enviar.";
          return;
        }
        examState.submitted = true;
        examState.completedAt = new Date().toISOString();
        save();
        render();
      });

      elements.content.querySelector("[data-reset-exam]")?.addEventListener("click", () => {
        state.assessment[kind] = engine.createDefaultAssessmentState(model)[kind];
        save();
        render();
      });

      elements.content.querySelectorAll("[data-remediation-chapter]").forEach((button) => {
        button.addEventListener("click", () => {
          navigateToRemediation(button.dataset.remediationChapter, button.dataset.remediationScenario);
        });
      });
    }

    function capstoneTraceMarkup() {
      const position = state.assessment.capstone.eventPosition;
      const marker = Number.isFinite(position)
        ? `<line class="capstone-marker" x1="${70 + position * 820}" y1="42" x2="${70 + position * 820}" y2="294"></line>`
        : "";
      return `
        <svg id="capstoneTrace" class="capstone-trace" viewBox="0 0 960 330" role="img" tabindex="0" aria-label="Caso final sintético con cuatro señales y un cambio del canal abdominal">
          <title>Caso final sintético</title>
          <desc>Durante el llenado, la presión abdominal cambia de línea de base después de un cambio de posición mientras la presión vesical permanece relativamente estable.</desc>
          <g class="capstone-grid">
            <line x1="70" y1="82" x2="890" y2="82"></line>
            <line x1="70" y1="148" x2="890" y2="148"></line>
            <line x1="70" y1="214" x2="890" y2="214"></line>
            <line x1="70" y1="280" x2="890" y2="280"></line>
          </g>
          <g class="capstone-labels">
            <text x="12" y="86">Pves</text>
            <text x="12" y="152">Pabd</text>
            <text x="12" y="218">Pdet</text>
            <text x="12" y="284">Flujo</text>
          </g>
          <rect class="capstone-position-band" x="496" y="38" width="82" height="246"></rect>
          <path class="capstone-line pves" d="M70 82 C220 81 360 82 490 81 C620 82 750 81 890 80"></path>
          <path class="capstone-line pabd" d="M70 148 C220 147 360 149 500 148 L514 180 C630 181 760 180 890 180"></path>
          <path class="capstone-line pdet" d="M70 214 C220 214 360 213 500 214 L514 182 C630 181 760 181 890 180"></path>
          <path class="capstone-line flow" d="M70 280 L890 280"></path>
          ${marker}
        </svg>
      `;
    }

    function renderCapstone() {
      const capstoneState = state.assessment.capstone;
      const caseData = model.capstoneCase;
      const capstoneScore = engine.scoreCapstone(model, capstoneState);

      elements.content.innerHTML = `
        <section class="assessment-section capstone-shell">
          <header class="assessment-section-head">
            <div>
              <p class="overline">Evaluación auténtica</p>
              <h4>${escapeHtml(caseData.title)}</h4>
              <div class="trace-case-meta">
                <span>${caseData.synthetic ? "Caso sintético" : "Caso gobernado"}</span>
                <span>Nivel integrador</span>
              </div>
            </div>
            <p>Caso sintético desconocido. Los textos libres requieren revisión humana.</p>
          </header>
          <div class="capstone-context">
            <strong>Pregunta clínica</strong>
            <p>${escapeHtml(caseData.question)}</p>
            <strong>Contexto</strong>
            <p>${escapeHtml(caseData.context)}</p>
          </div>
          <div class="capstone-trace-wrap">
            ${capstoneTraceMarkup()}
            <p id="capstoneEventStatus">${Number.isFinite(capstoneState.eventPosition) ? `Marca registrada en ${Math.round(capstoneState.eventPosition * 100)}% del trazado.` : "Marca sobre el trazado el inicio del evento que limita la interpretación. También puedes usar las flechas y Enter."}</p>
          </div>
          <div class="capstone-questions">
            ${caseData.structuredQuestions
              .map(
                (question) => `
                  <fieldset>
                    <legend>${escapeHtml(question.prompt)}</legend>
                    ${question.options
                      .map(
                        (option, index) => `
                          <label>
                            <input type="radio" name="capstone-${question.id}" value="${index}" ${Number(capstoneState.answers[question.id]) === index ? "checked" : ""} ${capstoneState.submitted ? "disabled" : ""} />
                            <span>${String.fromCharCode(65 + index)}</span>
                            <b>${escapeHtml(option)}</b>
                          </label>
                        `
                      )
                      .join("")}
                  </fieldset>
                `
              )
              .join("")}
            ${["inference", "limit", "response"]
              .map((fieldId) => {
                const field = model.reportFields.find((item) => item.id === fieldId);
                return `
                  <label class="capstone-text-field">
                    <strong>${escapeHtml(field.label)}</strong>
                    <span>${escapeHtml(field.prompt)}</span>
                    <textarea data-capstone-text="${fieldId}" rows="4" ${capstoneState.submitted ? "disabled" : ""}>${escapeHtml(capstoneState.answers[fieldId] || "")}</textarea>
                  </label>
                `;
              })
              .join("")}
          </div>
          ${capstoneState.submitted
            ? `
              <section class="capstone-result">
                <header><strong>${capstoneScore.percent}% en componentes automáticos</strong><span>Texto libre: revisión humana requerida</span></header>
                <dl>
                  ${Object.entries(caseData.expertReport)
                    .map(([key, value]) => `<div><dt>${escapeHtml(model.competencies.find((item) => item.id === key)?.label || key)}</dt><dd>${escapeHtml(value)}</dd></div>`)
                    .join("")}
                </dl>
                <label class="review-check"><input type="checkbox" id="capstoneReviewed" ${capstoneState.reviewed ? "checked" : ""} /> Comparé mi respuesta con cada criterio de la rúbrica.</label>
              </section>
            `
            : ""}
          <footer class="assessment-submit-row">
            <span>${capstoneScore.attempted} de ${capstoneScore.total} componentes automáticos respondidos</span>
            ${capstoneState.submitted
              ? '<button type="button" class="secondary-action" data-reset-capstone>Reiniciar caso</button>'
              : '<button type="button" class="primary-action" data-submit-capstone>Comparar con la rúbrica</button>'}
          </footer>
          <div class="assessment-message" id="assessmentMessage"></div>
        </section>
      `;

      if (!capstoneState.submitted) {
        elements.content.querySelectorAll('input[name^="capstone-"]').forEach((input) => {
          input.addEventListener("change", () => {
            capstoneState.answers[input.name.replace("capstone-", "")] = Number(input.value);
            save();
          });
        });
        elements.content.querySelectorAll("[data-capstone-text]").forEach((textarea) => {
          textarea.addEventListener("input", () => {
            capstoneState.answers[textarea.dataset.capstoneText] = textarea.value;
            save();
          });
        });

        const trace = elements.content.querySelector("#capstoneTrace");
        let keyboardPosition = Number.isFinite(capstoneState.eventPosition) ? capstoneState.eventPosition : 0.5;
        function setEventPosition(position) {
          capstoneState.eventPosition = Math.max(0, Math.min(1, position));
          save();
          renderCapstone();
        }
        trace.addEventListener("click", (event) => {
          const rect = trace.getBoundingClientRect();
          setEventPosition((event.clientX - rect.left) / rect.width);
        });
        trace.addEventListener("keydown", (event) => {
          if (!["ArrowLeft", "ArrowRight", "Enter", " "].includes(event.key)) return;
          event.preventDefault();
          if (event.key === "ArrowLeft") keyboardPosition = Math.max(0, keyboardPosition - 0.02);
          if (event.key === "ArrowRight") keyboardPosition = Math.min(1, keyboardPosition + 0.02);
          if (event.key === "Enter" || event.key === " ") setEventPosition(keyboardPosition);
          const status = elements.content.querySelector("#capstoneEventStatus");
          if (status && !["Enter", " "].includes(event.key)) {
            status.textContent = `Cursor de teclado en ${Math.round(keyboardPosition * 100)}%. Presiona Enter para marcar.`;
          }
        });
      }

      elements.content.querySelector("[data-submit-capstone]")?.addEventListener("click", () => {
        const current = engine.scoreCapstone(model, capstoneState);
        if (!current.complete) {
          elements.content.querySelector("#assessmentMessage").textContent = "Completa las tres preguntas, marca el evento y redacta inferencia, límite y respuesta con al menos 20 caracteres.";
          return;
        }
        capstoneState.submitted = true;
        capstoneState.completedAt = new Date().toISOString();
        save();
        render();
      });
      elements.content.querySelector("[data-reset-capstone]")?.addEventListener("click", () => {
        state.assessment.capstone = engine.createDefaultAssessmentState(model).capstone;
        save();
        render();
      });
      elements.content.querySelector("#capstoneReviewed")?.addEventListener("change", (event) => {
        capstoneState.reviewed = event.target.checked;
        save();
        renderMastery();
      });
    }

    function reportCompleteness() {
      const fields = Object.values(state.assessment.report.fields);
      return fields.filter((value) => String(value).trim().length >= 20).length;
    }

    function reportAsText() {
      return [
        "UroDynaMic Tutor - Informe razonado",
        `Revisión: ${revision}`,
        "",
        ...model.reportFields.flatMap((field) => [
          field.label.toUpperCase(),
          String(state.assessment.report.fields[field.id] || "").trim() || "[Sin completar]",
          ""
        ]),
        "Material educativo. Requiere revisión humana antes de cualquier uso clínico."
      ].join("\r\n");
    }

    function renderReport() {
      const reportState = state.assessment.report;
      const complete = reportCompleteness();
      elements.content.innerHTML = `
        <section class="assessment-section report-builder">
          <header class="assessment-section-head">
            <div>
              <p class="overline">Constructor de informe razonado</p>
              <h4>Ocho pasos antes de redactar una conclusión</h4>
            </div>
            <p>${complete} de ${model.reportFields.length} campos suficientemente desarrollados.</p>
          </header>
          <div class="report-fields">
            ${model.reportFields
              .map(
                (field, index) => `
                  <label>
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>${escapeHtml(field.label)}</strong>
                      <small>${escapeHtml(field.prompt)}</small>
                      <textarea data-report-field="${field.id}" rows="4">${escapeHtml(reportState.fields[field.id])}</textarea>
                      ${reportState.compared ? `<aside><b>Rúbrica experta</b><p>${escapeHtml(model.capstoneCase.expertReport[field.id])}</p></aside>` : ""}
                    </div>
                  </label>
                `
              )
              .join("")}
          </div>
          <footer class="assessment-submit-row">
            <span>La plataforma mide completitud, no valida automáticamente el juicio clínico.</span>
            <div class="assessment-action-row">
              <button type="button" class="secondary-action" data-compare-report>${reportState.compared ? "Ocultar rúbrica" : "Comparar con rúbrica"}</button>
              <button type="button" class="primary-action" data-download-report>Descargar borrador</button>
            </div>
          </footer>
        </section>
      `;

      elements.content.querySelectorAll("[data-report-field]").forEach((textarea) => {
        textarea.addEventListener("input", () => {
          reportState.fields[textarea.dataset.reportField] = textarea.value;
          reportState.updatedAt = new Date().toISOString();
          save();
        });
      });
      elements.content.querySelector("[data-compare-report]")?.addEventListener("click", () => {
        reportState.compared = !reportState.compared;
        save();
        renderReport();
      });
      elements.content.querySelector("[data-download-report]")?.addEventListener("click", () => {
        createDownload("UroDynaMic_Tutor_informe_razonado.txt", "text/plain;charset=utf-8", reportAsText());
      });
    }

    function renderGovernance() {
      const governance = model.scientificGovernance;
      elements.content.innerHTML = `
        <section class="assessment-section governance-view">
          <header class="assessment-section-head">
            <div>
              <p class="overline">Gobernanza científica</p>
              <h4>Contenido versionado y cambios clínicos visibles</h4>
            </div>
            <p>${escapeHtml(governance.contentPolicy)}</p>
          </header>
          <dl class="governance-meta">
            <div><dt>Versión del producto</dt><dd>${escapeHtml(governance.productVersion)}</dd></div>
            <div><dt>Línea base</dt><dd>${escapeHtml(governance.contentBaseline)}</dd></div>
            <div><dt>Autor clínico</dt><dd>${escapeHtml(governance.author)}</dd></div>
            <div><dt>Revisor externo</dt><dd>${escapeHtml(governance.externalReviewer)}</dd></div>
          </dl>
          <div class="governance-table-wrap">
            <table>
              <thead><tr><th>Capítulo</th><th>Estado</th><th>Fuente</th><th>Revisión</th></tr></thead>
              <tbody>
                ${Object.entries(governance.chapters)
                  .map(([chapterId, metadata]) => `
                    <tr>
                      <td>${escapeHtml(courseContext().chapters[chapterId]?.title || chapterId)}</td>
                      <td><span class="status-tag ${metadata.status.includes("pendiente") ? "pending" : ""}">${escapeHtml(metadata.status)}</span></td>
                      <td>${escapeHtml(metadata.source)}</td>
                      <td>${escapeHtml(metadata.reviewedAt || "Pendiente")}</td>
                    </tr>
                  `)
                  .join("")}
              </tbody>
            </table>
          </div>
          <div class="governance-links">
            <a href="SCIENTIFIC_CHANGELOG.md" target="_blank" rel="noopener">Registro de cambios científicos</a>
            <a href="docs/SCIENTIFIC_GOVERNANCE.md" target="_blank" rel="noopener">Política de gobernanza</a>
            <a href="docs/COMPETENCY_MATRIX.md" target="_blank" rel="noopener">Matriz de competencias</a>
          </div>
        </section>
      `;
    }

    function renderInstructor() {
      const instructor = model.instructorMode;
      elements.content.innerHTML = `
        <section class="assessment-section instructor-view">
          <header class="assessment-section-head">
            <div>
              <p class="overline">Modo docente e institucional</p>
              <h4>Implementar el curso con objetivos y evidencia comparables</h4>
            </div>
            <p>${escapeHtml(instructor.cohortPolicy)}</p>
          </header>
          <dl class="instructor-meta">
            <div><dt>Audiencia</dt><dd>${escapeHtml(instructor.audience)}</dd></div>
            <div><dt>Duración sugerida</dt><dd>${escapeHtml(instructor.suggestedDuration)}</dd></div>
          </dl>
          <div class="instructor-columns">
            <section>
              <h5>Prerrequisitos</h5>
              <ul>${instructor.prerequisites.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </section>
            <section>
              <h5>Resultados de aprendizaje</h5>
              <ul>${instructor.objectives.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </section>
          </div>
          <section class="instructor-sequence">
            <h5>Secuencia recomendada</h5>
            <ol>
              <li><span>01</span><div><strong>Línea base</strong><p>Aplicar el pretest sin mostrar respuestas correctas.</p></div></li>
              <li><span>02</span><div><strong>Práctica progresiva</strong><p>Recorrer casos básicos y luego intermedios, usando remediación según el tipo de error.</p></div></li>
              <li><span>03</span><div><strong>Medición posterior</strong><p>Aplicar el postest con los mismos seis dominios y comparar el cambio.</p></div></li>
              <li><span>04</span><div><strong>Evaluación auténtica</strong><p>Revisar humanamente el caso final y el informe razonado con la rúbrica de ocho pasos.</p></div></li>
            </ol>
          </section>
          <footer class="assessment-submit-row">
            <a class="secondary-action instructor-guide-link" href="docs/INSTRUCTOR_GUIDE.md" target="_blank" rel="noopener">Abrir guía del facilitador</a>
            <button type="button" class="primary-action" data-export-results>Exportar resultado anónimo</button>
          </footer>
        </section>
      `;
      elements.content.querySelector("[data-export-results]")?.addEventListener("click", exportAnonymousResults);
    }

    function exportAnonymousResults() {
      const payload = engine.buildAnonymousExport(model, state.assessment, courseContext(), revision);
      createDownload(
        `urodynamic-tutor-resultados-anonimos-${new Date().toISOString().slice(0, 10)}.json`,
        "application/json;charset=utf-8",
        JSON.stringify(payload, null, 2)
      );
    }

    function renderChapterGovernance(chapterId) {
      const metadata = model.scientificGovernance.chapters[chapterId];
      if (!metadata) {
        elements.chapterGovernance.innerHTML = "";
        return;
      }
      elements.chapterGovernance.innerHTML = `
        <span>Estado científico</span>
        <strong>${escapeHtml(metadata.status)}</strong>
        <small>Fuente: ${escapeHtml(metadata.source)} · ${metadata.reviewedAt ? `revisión ${escapeHtml(metadata.reviewedAt)}` : "sin aprobación clínica final"}</small>
      `;
      elements.chapterGovernance.classList.toggle("pending", metadata.status.includes("pendiente"));
    }

    function render() {
      renderMastery();
      elements.tabs.forEach((button) => {
        const active = button.dataset.assessmentSection === state.assessment.section;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      const renderers = {
        overview: renderOverview,
        pretest: () => renderExam("pretest"),
        posttest: () => renderExam("posttest"),
        capstone: renderCapstone,
        report: renderReport,
        governance: renderGovernance,
        instructor: renderInstructor
      };
      (renderers[state.assessment.section] || renderOverview)();
    }

    elements.tabs.forEach((button) => {
      button.addEventListener("click", () => setSection(button.dataset.assessmentSection));
    });

    return {
      render,
      renderMastery,
      renderChapterGovernance,
      exportAnonymousResults
    };
  }

  window.UroDynamicAssessmentUI = Object.freeze({ createAssessmentUI });
})();
