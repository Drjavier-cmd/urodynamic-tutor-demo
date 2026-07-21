function activeResistancePreset() {
  return resistancePresets[state.demoControls.resistancePattern]
    ? state.demoControls.resistancePattern
    : "manual";
}

function renderClinicalReasoningDemo(demo) {
  const stageKey = clinicalReasoningStages[state.demoControls.clinicalStage]
    ? state.demoControls.clinicalStage
    : "question";
  const stage = clinicalReasoningStages[stageKey];
  const stageEntries = Object.entries(clinicalReasoningStages);
  const activeIndex = stageEntries.findIndex(([key]) => key === stageKey);

  return `
    <div class="visual-demo-head">
      <div>
        <p class="overline">Laboratorio de razonamiento</p>
        <h4>${demo.title}</h4>
      </div>
      <span>${demo.subtitle}</span>
    </div>
    <div class="reasoning-case-banner">
      <span>Caso sintético</span>
      <strong>La paciente refiere pérdida de orina al toser.</strong>
      <p>El objetivo no es adivinar un diagnóstico, sino construir una respuesta desde una pregunta verificable.</p>
    </div>
    <div class="reasoning-path" aria-label="Etapas del razonamiento clínico">
      ${stageEntries
        .map(
          ([key, item], index) => `
            <button type="button" class="${key === stageKey ? "active" : ""}" aria-pressed="${key === stageKey}" data-clinical-stage="${key}">
              <span>${index + 1}</span>
              <strong>${item.label}</strong>
            </button>
          `
        )
        .join("")}
    </div>
    <div class="reasoning-progress" aria-hidden="true">
      <span style="width:${((activeIndex + 1) / stageEntries.length) * 100}%"></span>
    </div>
    <div class="reasoning-focus" aria-live="polite">
      <div class="reasoning-index">${activeIndex + 1}</div>
      <div class="reasoning-case-detail">
        <span>${stage.label}</span>
        <h5>${stage.title}</h5>
        <p>${stage.text}</p>
        <div class="reasoning-evidence">
          ${stage.evidence.map((item) => `<span>${item}</span>`).join("")}
        </div>
        <div class="reasoning-result">
          <span>Resultado de esta etapa</span>
          <strong>${stage.result}</strong>
        </div>
      </div>
      <aside>
        <span>Límite que debemos conservar</span>
        <strong>${stage.boundary}</strong>
      </aside>
    </div>
  `;
}

function renderProgramSwitchDemo(demo) {
  const programKey = functionalPrograms[state.demoControls.functionalProgram]
    ? state.demoControls.functionalProgram
    : "storage";
  const program = functionalPrograms[programKey];

  return `
    <div class="visual-demo-head">
      <div>
        <p class="overline">Laboratorio de fisiología</p>
        <h4>${demo.title}</h4>
      </div>
      <span>${demo.subtitle}</span>
    </div>
    <div class="demo-tabs program-tabs" aria-label="Programa funcional">
      ${Object.entries(functionalPrograms)
        .map(
          ([key, item]) => `<button type="button" class="${key === programKey ? "active" : ""}" aria-pressed="${key === programKey}" data-functional-program="${key}">${item.label}</button>`
        )
        .join("")}
    </div>
    <div class="program-diagram ${programKey}" aria-live="polite">
      <div class="control-center">
        <span>Control neurológico</span>
        <strong>${programKey === "storage" ? "Mantiene almacenamiento" : "Autoriza vaciado"}</strong>
      </div>
      <div class="program-arrow"><span></span></div>
      <div class="urinary-program">
        <div class="program-bladder"><span>${program.system}</span></div>
        <div class="program-outlet"><i></i><span>Salida ${program.outlet}</span></div>
      </div>
      <div class="program-readouts">
        <div><span>Detrusor</span><strong>${program.detrusor}</strong></div>
        <div><span>Salida</span><strong>${program.outlet}</strong></div>
      </div>
    </div>
    <div class="demo-reading program-reading">
      <strong>${program.goal}</strong>
      <p>${program.prompt}</p>
    </div>
  `;
}

function renderSignalMapDemo(demo) {
  const channelKey = signalChannels[state.demoControls.signalChannel]
    ? state.demoControls.signalChannel
    : "pves";
  const channel = signalChannels[channelKey];

  return `
    <div class="visual-demo-head">
      <div>
        <p class="overline">Mapa del instrumento</p>
        <h4>${demo.title}</h4>
      </div>
      <span>${demo.subtitle}</span>
    </div>
    <div class="demo-tabs signal-tabs" aria-label="Canales del estudio">
      ${Object.entries(signalChannels)
        .map(
          ([key, item]) => `<button type="button" class="${key === channelKey ? "active" : ""}" aria-pressed="${key === channelKey}" data-signal-channel="${key}">${item.label}</button>`
        )
        .join("")}
    </div>
    <div class="signal-map-demo" aria-live="polite">
      <div class="signal-source">
        <span>Origen del dato</span>
        <strong>${channel.source}</strong>
      </div>
      <div class="signal-transfer" aria-hidden="true"><span></span></div>
      <div class="signal-monitor ${channelKey}">
        <span>${channel.kind}</span>
        <strong>${channel.label}</strong>
        <i></i>
      </div>
      <div class="signal-interpretation">
        <span>Lectura</span>
        <p>${channel.reading}</p>
      </div>
    </div>
    <div class="demo-reading">
      <strong>Límite interpretativo</strong>
      <p>${channel.limit}</p>
    </div>
  `;
}

function renderAccommodationDemo(demo) {
  const stageKey = accommodationStages[state.demoControls.accommodationStage]
    ? state.demoControls.accommodationStage
    : "progressive";
  const stage = accommodationStages[stageKey];

  const tractFigure = (mode) => {
    const altered = mode === "altered";
    const bladderScale = altered ? stage.alteredScale : stage.normalScale;
    const ureterWidth = altered ? stage.ureterWidth : 4;
    const pelvisScale = altered ? stage.pelvisScale : 1;
    const pressure = altered ? stage.alteredPressure : stage.normalPressure;

    return `
      <svg class="urinary-tract-figure ${mode}" viewBox="0 0 260 300" role="img" aria-label="${altered ? "Vejiga con acomodación alterada y representación del riesgo para la vía urinaria superior" : "Vejiga con acomodación conservada y vía urinaria superior preservada"}">
        <g class="kidneys">
          <path d="M44 50 C26 62 28 98 49 108 C64 115 77 101 75 82 C73 62 60 45 44 50 Z" />
          <path d="M216 50 C234 62 232 98 211 108 C196 115 183 101 185 82 C187 62 200 45 216 50 Z" />
        </g>
        <g class="renal-pelvis">
          <ellipse cx="64" cy="84" rx="${(10 * pelvisScale).toFixed(1)}" ry="${(14 * pelvisScale).toFixed(1)}" />
          <ellipse cx="196" cy="84" rx="${(10 * pelvisScale).toFixed(1)}" ry="${(14 * pelvisScale).toFixed(1)}" />
        </g>
        <g class="ureters" style="--ureter-width:${ureterWidth}px;">
          <path d="M64 97 C72 130 88 156 104 204" />
          <path d="M196 97 C188 130 172 156 156 204" />
        </g>
        <g class="bladder-group" transform="translate(130 230) scale(${bladderScale}) translate(-130 -230)">
          <path class="bladder-shape" d="M82 196 C69 221 72 259 95 276 C113 290 147 290 165 276 C188 259 191 221 178 196 C166 173 151 164 130 164 C109 164 94 173 82 196 Z" />
          <path class="bladder-highlight" d="M99 202 C112 184 147 181 164 207" />
        </g>
        ${altered && stageKey !== "initial" ? '<path class="pressure-arrows" d="M110 188 L91 161 M150 188 L169 161 M130 179 L130 145" />' : ""}
      </svg>
      <div class="tract-readout">
        <span>Presión de almacenamiento</span>
        <strong>${pressure}</strong>
      </div>
    `;
  };

  return `
    <div class="visual-demo-head">
      <div>
        <p class="overline">Laboratorio visual</p>
        <h4>${demo.title}</h4>
      </div>
      <span>${demo.subtitle}</span>
    </div>
    <div class="demo-tabs accommodation-stages" aria-label="Etapa de llenado">
      ${Object.entries(accommodationStages)
        .map(([key, item]) => `<button type="button" class="${key === stageKey ? "active" : ""}" aria-pressed="${key === stageKey}" data-accommodation-stage="${key}">${item.label}</button>`)
        .join("")}
    </div>
    <div class="accommodation-comparison" aria-live="polite">
      <article class="urinary-tract-card normal">
        <header><span>Acomodación conservada</span><strong>Vejiga distensible</strong></header>
        ${tractFigure("normal")}
        <p>El reservorio aumenta su volumen manteniendo una presión contenida. La vía urinaria superior se representa preservada.</p>
      </article>
      <article class="urinary-tract-card altered">
        <header><span>Acomodación alterada</span><strong>El volumen cuesta presión</strong></header>
        ${tractFigure("altered")}
        <p>La vejiga gana menos volumen y la presión aumenta. Vía superior: ${stage.upperTract}.</p>
      </article>
    </div>
    <div class="accommodation-caution">
      <strong>Lectura correcta del esquema</strong>
      <p>La dilatación no es una consecuencia obligatoria. Representa el riesgo que debe considerarse cuando el almacenamiento deja de mantenerse a baja presión.</p>
    </div>
  `;
}

function renderFlowResistanceDemo(demo) {
  const diameter = state.demoControls.outletDiameter;
  const compression = state.demoControls.outletCompression;
  const stiffness = state.demoControls.outletStiffness;
  const presetKey = activeResistancePreset();
  const preset = resistancePresets[presetKey];
  const effectiveOutlet = clamp(diameter - compression * 0.58 - stiffness * 0.16, 8, 92);
  const stream = clamp(effectiveOutlet * 0.92, 8, 86);
  const upstreamPressure = clamp(92 - effectiveOutlet + compression * 0.28 + stiffness * 0.22, 12, 96);
  const hoseHeight = clamp(16 + effectiveOutlet * 0.32, 18, 46);
  const pinch = clamp(100 - compression, 18, 100);

  return `
    <div class="visual-demo-head">
      <div>
        <p class="overline">Laboratorio visual</p>
        <h4>${demo.title}</h4>
      </div>
      <span>${demo.subtitle}</span>
    </div>
    <div class="flow-demo">
      <div class="pump" style="--pressure: ${upstreamPressure}%;">
        <span></span>
        <strong>Bomba</strong>
        <p>Presión proximal ${pressureLabel(upstreamPressure)}</p>
      </div>
      <div class="hose-stage" style="--hose-height: ${hoseHeight}px; --pinch: ${pinch}%; --stream: ${stream}%;">
        <div class="hose">
          <span class="pinch"></span>
        </div>
        <div class="water-stream"></div>
      </div>
      <div class="flow-readout">
        <strong>${stream > 60 ? "Flujo amplio" : stream > 32 ? "Flujo limitado" : "Flujo pobre"}</strong>
        <p>El flujo no depende solo de la bomba: la salida también decide.</p>
      </div>
    </div>
    <div class="resistance-concepts" aria-label="Conceptos de resistencia del tracto de salida">
      <article>
        <span>Extrínseca</span>
        <strong>Algo aprieta desde fuera.</strong>
        <p>En la analogía, una pinza comprime la manguera. En clínica, piensa en fuerzas externas al lumen que estrechan o angulan la salida.</p>
      </article>
      <article>
        <span>Intrínseca</span>
        <strong>La salida ofrece resistencia por sí misma.</strong>
        <p>En la analogía, el conducto es más estrecho, rígido o poco deformable. No requiere una fuerza externa para limitar el flujo.</p>
      </article>
    </div>
    <div class="resistance-presets" aria-label="Patrones docentes de resistencia">
      <div>
        <p class="overline">Ejercicio rápido</p>
        <strong>¿Qué mecanismo está dominando?</strong>
      </div>
      <div class="preset-buttons">
        ${Object.entries(resistancePresets)
          .filter(([key]) => key !== "manual")
          .map(([key, item]) => `<button type="button" class="${key === presetKey ? "active" : ""}" data-resistance-preset="${key}">${item.label}</button>`)
          .join("")}
      </div>
      <p><b>${preset.title}</b> ${preset.text}</p>
    </div>
    <div class="demo-controls">
      ${demo.controls.map(([id, label]) => controlMarkup(id, label)).join("")}
    </div>
  `;
}

function renderCurveTimelineDemo(demo) {
  const position = clamp(state.demoControls.tracePosition, 0, 100);
  const moment = traceMoments.find((item) => position <= item.until) || traceMoments[traceMoments.length - 1];
  const cursorX = 58 + position * 6.04;

  return `
    <div class="visual-demo-head">
      <div>
        <p class="overline">Laboratorio de lectura</p>
        <h4>${demo.title}</h4>
      </div>
      <span>${demo.subtitle}</span>
    </div>
    <div class="curve-timeline-demo">
      <svg viewBox="0 0 720 190" role="img" aria-labelledby="timelineTitle timelineDesc">
        <title id="timelineTitle">Trazado sintético recorrido por un cursor temporal</title>
        <desc id="timelineDesc">Tres canales docentes muestran un evento de tos durante llenado, una transición y presión con flujo durante vaciado.</desc>
        <rect class="timeline-phase storage" x="48" y="12" width="430" height="162" />
        <rect class="timeline-phase transition" x="478" y="12" width="82" height="162" />
        <rect class="timeline-phase voiding" x="560" y="12" width="120" height="162" />
        <text class="timeline-channel-label p-abd" x="8" y="51">Pabd</text>
        <text class="timeline-channel-label p-det" x="8" y="106">Pdet</text>
        <text class="timeline-channel-label flow" x="8" y="161">Flujo</text>
        <path class="timeline-path pabd" d="M55 48 L198 48 L210 48 L220 19 L231 48 L680 48" />
        <path class="timeline-path pdet" d="M55 103 L500 103 C520 103 535 58 565 55 C600 57 615 103 650 103 L680 103" />
        <path class="timeline-path flow" d="M55 158 L555 158 C572 158 582 124 612 121 C642 123 654 158 680 158" />
        <line class="timeline-event" x1="220" y1="12" x2="220" y2="174" />
        <line class="timeline-event" x1="430" y1="12" x2="430" y2="174" />
        <line class="timeline-event" x1="520" y1="12" x2="520" y2="174" />
        <text class="timeline-event-label" x="204" y="185">tos</text>
        <text class="timeline-event-label" x="397" y="185">deseo</text>
        <text class="timeline-event-label" x="486" y="185">orden</text>
        <line class="timeline-cursor" x1="${cursorX}" y1="8" x2="${cursorX}" y2="174" />
        <circle class="timeline-cursor-dot" cx="${cursorX}" cy="8" r="5" />
      </svg>
    </div>
    <div class="timeline-moments" aria-label="Momentos del estudio">
      ${traceMoments
        .map(
          (item) => `<button type="button" class="${item === moment ? "active" : ""}" aria-pressed="${item === moment}" data-trace-position="${item.position}">${item.title}</button>`
        )
        .join("")}
    </div>
    <label class="timeline-control">
      <span>Recorre el estudio <b>${position}%</b></span>
      <input type="range" min="0" max="100" value="${position}" data-demo-control="tracePosition" />
    </label>
    <div class="demo-reading" aria-live="polite">
      <div><span>${moment.phase}</span><strong>${moment.title}</strong></div>
      <p><b>${moment.event}.</b> ${moment.reading}</p>
    </div>
  `;
}

function renderPressureEquationDemo(demo) {
  const patternKey = pressurePatterns[state.demoControls.pressurePattern] ? state.demoControls.pressurePattern : "cough";
  const pattern = pressurePatterns[patternKey];
  const pdet = pattern.pves - pattern.pabd;
  const widthFor = (value) => clamp(Math.abs(value) * 2.2, 5, 100);

  return `
    <div class="visual-demo-head">
      <div>
        <p class="overline">Laboratorio de señales</p>
        <h4>${demo.title}</h4>
      </div>
      <span>${demo.subtitle}</span>
    </div>
    <div class="demo-tabs" aria-label="Escenarios sintéticos de presión">
      ${Object.entries(pressurePatterns)
        .map(([key, item]) => `<button type="button" class="${key === patternKey ? "active" : ""}" aria-pressed="${key === patternKey}" data-pressure-pattern="${key}">${item.label}</button>`)
        .join("")}
    </div>
    <div class="pressure-equation-demo" aria-label="Cálculo de Pdet">
      <div class="pressure-channel pves">
        <span>Pves · medida</span>
        <strong>${pattern.pves} <small>cmH2O</small></strong>
        <i style="--bar:${widthFor(pattern.pves)}%"></i>
      </div>
      <b class="equation-operator">−</b>
      <div class="pressure-channel pabd">
        <span>Pabd · medida</span>
        <strong>${pattern.pabd} <small>cmH2O</small></strong>
        <i style="--bar:${widthFor(pattern.pabd)}%"></i>
      </div>
      <b class="equation-operator">=</b>
      <div class="pressure-channel pdet ${pdet < 0 ? "negative" : ""}">
        <span>Pdet · derivada</span>
        <strong>${pdet} <small>cmH2O</small></strong>
        <i style="--bar:${widthFor(pdet)}%"></i>
      </div>
    </div>
    <div class="measurement-legend" aria-label="Tipo de señal">
      <span><i class="measured"></i><b>Pves y Pabd</b> son señales medidas</span>
      <span><i class="derived"></i><b>Pdet</b> se calcula a partir de ambas</span>
    </div>
    <div class="demo-reading" aria-live="polite">
      <strong>${pattern.title}</strong>
      <p>${pattern.reading}</p>
    </div>
  `;
}

function renderArtifactDetectiveDemo(demo) {
  const patternKey = artifactPatterns[state.demoControls.artifactPattern] ? state.demoControls.artifactPattern : "cough";
  const pattern = artifactPatterns[patternKey];

  return `
    <div class="visual-demo-head">
      <div>
        <p class="overline">Laboratorio técnico</p>
        <h4>${demo.title}</h4>
      </div>
      <span>${demo.subtitle}</span>
    </div>
    <div class="demo-tabs" aria-label="Patrones técnicos docentes">
      ${Object.entries(artifactPatterns)
        .map(([key, item]) => `<button type="button" class="${key === patternKey ? "active" : ""}" aria-pressed="${key === patternKey}" data-artifact-pattern="${key}">${item.label}</button>`)
        .join("")}
    </div>
    <div class="artifact-detective-demo">
      <svg viewBox="0 0 620 202" role="img" aria-labelledby="artifactTitle artifactDesc">
        <title id="artifactTitle">Comparación sintética de coherencia entre canales</title>
        <desc id="artifactDesc">Pves, Pabd y Pdet cambian según el patrón técnico seleccionado.</desc>
        <line class="artifact-grid" x1="82" y1="48" x2="598" y2="48" />
        <line class="artifact-grid" x1="82" y1="103" x2="598" y2="103" />
        <line class="artifact-grid" x1="82" y1="158" x2="598" y2="158" />
        <text class="artifact-channel-label pves" x="12" y="53">Pves</text>
        <text class="artifact-channel-label pabd" x="12" y="108">Pabd</text>
        <text class="artifact-channel-label pdet" x="12" y="163">Pdet</text>
        <path class="artifact-path pves" d="${pattern.pves}" />
        <path class="artifact-path pabd" d="${pattern.pabd}" />
        <path class="artifact-path pdet" d="${pattern.pdet}" />
      </svg>
    </div>
    <div class="artifact-route" aria-label="Secuencia de control técnico">
      <span><b>1</b> Comparar canales</span>
      <span><b>2</b> Relacionar el evento</span>
      <span><b>3</b> Verificar antes de concluir</span>
    </div>
    <div class="artifact-analysis" aria-live="polite">
      <div><span>Lectura de señal</span><strong class="artifact-status">${pattern.status}</strong><p>${pattern.clue}</p></div>
      <div><span>Primero verificar</span><p>${pattern.check}</p></div>
      <div><span>Límite</span><p>${pattern.limit}</p></div>
    </div>
  `;
}

function bindDemoControls() {
  els.visualDemo.querySelectorAll("[data-lab-demo]").forEach((button) => {
    button.addEventListener("click", () => {
      const demoId = button.dataset.labDemo;
      if (!chapterLabDemos[state.chapter].some((demo) => demo.id === demoId)) return;
      state.labDemo[state.chapter] = demoId;
      renderVisualDemo(demoId);
      saveState();
    });
  });

  els.visualDemo.querySelectorAll("[data-demo-control]").forEach((input) => {
    input.addEventListener("input", () => {
      state.demoControls[input.dataset.demoControl] = Number(input.value);
      if (input.dataset.demoControl.startsWith("outlet")) {
        state.demoControls.resistancePattern = "manual";
      }
      renderVisualDemo();
      saveState();
    });
  });

  els.visualDemo.querySelectorAll("[data-accommodation-stage]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!accommodationStages[button.dataset.accommodationStage]) return;
      state.demoControls.accommodationStage = button.dataset.accommodationStage;
      renderVisualDemo("accommodation");
      saveState();
    });
  });

  els.visualDemo.querySelectorAll("[data-resistance-preset]").forEach((button) => {
    button.addEventListener("click", () => {
      const presetKey = button.dataset.resistancePreset;
      const preset = resistancePresets[presetKey];
      if (!preset) return;
      Object.assign(state.demoControls, preset.values, { resistancePattern: presetKey });
      renderVisualDemo("flowResistance");
      saveState();
    });
  });

  els.visualDemo.querySelectorAll("[data-pressure-pattern]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!pressurePatterns[button.dataset.pressurePattern]) return;
      state.demoControls.pressurePattern = button.dataset.pressurePattern;
      renderVisualDemo("pressureEquation");
      saveState();
    });
  });

  els.visualDemo.querySelectorAll("[data-artifact-pattern]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!artifactPatterns[button.dataset.artifactPattern]) return;
      state.demoControls.artifactPattern = button.dataset.artifactPattern;
      renderVisualDemo("artifactDetective");
      saveState();
    });
  });

  els.visualDemo.querySelectorAll("[data-clinical-stage]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!clinicalReasoningStages[button.dataset.clinicalStage]) return;
      state.demoControls.clinicalStage = button.dataset.clinicalStage;
      renderVisualDemo("clinicalReasoning");
      saveState();
    });
  });

  els.visualDemo.querySelectorAll("[data-functional-program]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!functionalPrograms[button.dataset.functionalProgram]) return;
      state.demoControls.functionalProgram = button.dataset.functionalProgram;
      renderVisualDemo("programSwitch");
      saveState();
    });
  });

  els.visualDemo.querySelectorAll("[data-signal-channel]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!signalChannels[button.dataset.signalChannel]) return;
      state.demoControls.signalChannel = button.dataset.signalChannel;
      renderVisualDemo("signalMap");
      saveState();
    });
  });

  els.visualDemo.querySelectorAll("[data-trace-position]").forEach((button) => {
    button.addEventListener("click", () => {
      state.demoControls.tracePosition = Number(button.dataset.tracePosition);
      renderVisualDemo("curveTimeline");
      saveState();
    });
  });
}

function activeLabDemoId() {
  const options = chapterLabDemos[state.chapter] || [{ id: chapters[state.chapter].labId, label: "Laboratorio" }];
  const selected = state.labDemo[state.chapter];
  return options.some((option) => option.id === selected) ? selected : options[0].id;
}

function renderVisualDemo(demoId = activeLabDemoId()) {
  const demo = interactiveDemos[demoId];
  if (!demo) {
    els.visualDemo.hidden = true;
    els.visualDemo.innerHTML = "";
    return;
  }

  els.visualDemo.hidden = false;
  const renderers = {
    clinicalReasoning: renderClinicalReasoningDemo,
    programSwitch: renderProgramSwitchDemo,
    accommodation: renderAccommodationDemo,
    flowResistance: renderFlowResistanceDemo,
    curveTimeline: renderCurveTimelineDemo,
    pressureEquation: renderPressureEquationDemo,
    signalMap: renderSignalMapDemo,
    artifactDetective: renderArtifactDetectiveDemo
  };
  const labOptions = chapterLabDemos[state.chapter] || [];
  state.labDemo[state.chapter] = demoId;
  const labSelector = labOptions.length > 1
    ? `<div class="lab-concept-tabs" role="tablist" aria-label="Conceptos interactivos del capítulo">
        ${labOptions
          .map((option) => `<button type="button" class="${option.id === demoId ? "active" : ""}" aria-selected="${option.id === demoId}" data-lab-demo="${option.id}">${option.label}</button>`)
          .join("")}
      </div>`
    : "";
  els.visualDemo.innerHTML = `${labSelector}${renderers[demoId](demo)}`;
  bindDemoControls();
}


