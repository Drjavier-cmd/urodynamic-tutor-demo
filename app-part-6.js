function renderChallenge() {
  const challenges = chapterChallenges[state.chapter];
  if (!challenges) {
    els.challengeLab.hidden = true;
    els.challengeLab.innerHTML = "";
    return;
  }

  els.challengeLab.hidden = false;
  const chapterId = state.chapter;
  const index = clamp(state.challengeIndex[chapterId] || 0, 0, challenges.length - 1);
  const challenge = challenges[index];
  const savedAnswers = state.challengeAnswers[chapterId] || {};
  const selectedIndex = Number(savedAnswers[index]);
  const hasSelection = Number.isInteger(selectedIndex) && Boolean(challenge.answers[selectedIndex]);
  const selectedAnswer = hasSelection ? challenge.answers[selectedIndex] : null;
  const answeredCount = Object.entries(savedAnswers).filter(([answerIndex, answer]) => {
    const challengeIndex = Number(answerIndex);
    return challenges[challengeIndex] && challenges[challengeIndex].answers[Number(answer)];
  }).length;

  state.challengeIndex[chapterId] = index;

  const evidenceMarkup = challenge.evidence
    .map((item) => `<span>${escapeHtml(item)}</span>`)
    .join("");
  const answerOffset = challengeAnswerOffsets[chapterId]?.[index] || 0;
  const presentedAnswers = orderedAnswers(challenge.answers, answerOffset);
  const answersMarkup = presentedAnswers
    .map(({ answer: [label, correct], originalIndex }, displayIndex) => {
      const isSelected = hasSelection && originalIndex === selectedIndex;
      const classes = [
        isSelected ? "selected" : "",
        isSelected ? (correct ? "good" : "warn") : ""
      ]
        .filter(Boolean)
        .join(" ");

      return `<button type="button" class="${classes}" data-challenge-answer="${originalIndex}" aria-pressed="${isSelected}"><span>${String.fromCharCode(65 + displayIndex)}</span>${escapeHtml(label)}</button>`;
    })
    .join("");
  const dotsMarkup = challenges
    .map((_, challengeIndex) => {
      const answered = savedAnswers[challengeIndex] !== undefined;
      return `<button type="button" class="${challengeIndex === index ? "active" : ""} ${answered ? "answered" : ""}" data-challenge-index="${challengeIndex}" aria-label="Abrir ejemplo ${challengeIndex + 1}" aria-current="${challengeIndex === index ? "step" : "false"}">${challengeIndex + 1}</button>`;
    })
    .join("");

  els.challengeLab.innerHTML = `
    <header class="challenge-head">
      <div>
        <p class="overline">Ejemplo interactivo · ${escapeHtml(challenge.tag)}</p>
        <h4>${escapeHtml(challenge.title)}</h4>
      </div>
      <span>${answeredCount} de ${challenges.length} resueltos</span>
    </header>
    <div class="challenge-evidence" aria-label="Datos del ejemplo">${evidenceMarkup}</div>
    <p class="challenge-prompt">${escapeHtml(challenge.prompt)}</p>
    <div class="challenge-answers">${answersMarkup}</div>
    <div class="challenge-feedback-row">
      <div class="challenge-feedback ${hasSelection ? (selectedAnswer[1] ? "good" : "warn") : ""}" aria-live="polite">
        ${hasSelection ? escapeHtml(selectedAnswer[2]) : "Elige la lectura más prudente. Recibirás retroalimentación inmediata."}
      </div>
      ${hasSelection ? '<button type="button" class="secondary-action challenge-reset" data-challenge-reset>Reiniciar respuesta</button>' : ""}
    </div>
    <footer class="challenge-nav">
      <button type="button" class="challenge-arrow" data-challenge-nav="previous" aria-label="Ejemplo anterior" title="Ejemplo anterior">‹</button>
      <div class="challenge-dots" aria-label="Navegación de ejemplos">${dotsMarkup}</div>
      <span>Ejemplo ${index + 1} de ${challenges.length}</span>
      <button type="button" class="challenge-arrow" data-challenge-nav="next" aria-label="Ejemplo siguiente" title="Ejemplo siguiente">›</button>
    </footer>
  `;

  els.challengeLab.querySelectorAll("[data-challenge-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      state.challengeAnswers[chapterId][index] = Number(button.dataset.challengeAnswer);
      renderChallenge();
      saveState();
    });
  });

  const resetChallenge = els.challengeLab.querySelector("[data-challenge-reset]");
  if (resetChallenge) {
    resetChallenge.addEventListener("click", () => {
      delete state.challengeAnswers[chapterId][index];
      renderChallenge();
      saveState();
    });
  }

  els.challengeLab.querySelectorAll("[data-challenge-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.challengeIndex[chapterId] = Number(button.dataset.challengeIndex);
      renderChallenge();
      saveState();
    });
  });

  els.challengeLab.querySelectorAll("[data-challenge-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.challengeNav === "next" ? 1 : -1;
      state.challengeIndex[chapterId] = (index + direction + challenges.length) % challenges.length;
      renderChallenge();
      saveState();
    });
  });
}

function eventFigure(type) {
  const figures = {
    storage: `
      <svg viewBox="0 0 120 92" aria-hidden="true">
        <path class="event-organ" d="M46 23 C29 31 25 55 37 70 C48 85 74 85 84 69 C96 50 87 30 69 23 C62 19 54 19 46 23 Z" />
        <path class="event-line" d="M40 55 C52 48 68 48 82 55" />
        <path class="event-arrow" d="M23 25 H42" />
        <path class="event-arrow" d="M78 25 H97" />
      </svg>`,
    cough: `
      <svg viewBox="0 0 120 92" aria-hidden="true">
        <circle class="event-head" cx="37" cy="25" r="11" />
        <path class="event-body" d="M36 38 C31 50 29 62 27 78" />
        <path class="event-burst" d="M55 25 H86 M58 37 L93 50 M57 14 L88 4" />
      </svg>`,
    valsalva: `
      <svg viewBox="0 0 120 92" aria-hidden="true">
        <circle class="event-head" cx="40" cy="20" r="10" />
        <path class="event-body" d="M42 33 C47 48 48 61 42 78" />
        <path class="event-line" d="M62 32 C76 45 78 62 66 76" />
        <path class="event-arrow" d="M86 20 V70" />
      </svg>`,
    voiding: `
      <svg viewBox="0 0 120 92" aria-hidden="true">
        <path class="event-organ" d="M33 22 C55 8 82 18 82 43 C82 63 65 76 48 70 C33 65 23 45 33 22 Z" />
        <path class="event-arrow" d="M72 58 C88 62 98 68 105 78" />
        <path class="event-line" d="M42 42 H76" />
      </svg>`,
    signal: `
      <svg viewBox="0 0 120 92" aria-hidden="true">
        <path class="event-line" d="M16 55 C30 25 44 78 58 45 C70 17 83 72 102 32" />
        <path class="event-burst" d="M80 21 L102 43 M102 21 L80 43" />
      </svg>`,
    detrusor: `
      <svg viewBox="0 0 120 92" aria-hidden="true">
        <path class="event-organ" d="M35 20 C55 8 84 19 83 45 C82 68 60 80 42 68 C29 59 25 36 35 20 Z" />
        <path class="event-burst" d="M42 42 C50 31 62 31 72 43 M42 55 C52 66 65 66 75 53" />
      </svg>`,
    compliance: `
      <svg viewBox="0 0 120 92" aria-hidden="true">
        <rect class="event-box" x="35" y="20" width="42" height="54" rx="8" />
        <path class="event-arrow" d="M88 70 V20" />
        <path class="event-line" d="M43 62 H69 M43 48 H69 M43 34 H69" />
      </svg>`,
    leak: `
      <svg viewBox="0 0 120 92" aria-hidden="true">
        <path class="event-organ" d="M35 18 C55 8 82 18 82 43 C82 62 66 74 48 69 C34 65 25 41 35 18 Z" />
        <path class="event-arrow" d="M78 56 C91 60 98 66 103 76" />
        <path class="event-drop" d="M100 72 C94 79 91 84 91 88 C91 94 97 98 102 94 C108 90 107 83 100 72 Z" />
      </svg>`
  };

  return figures[type] || figures.storage;
}

function activePracticeCase() {
  const cases = chapterPracticeCases[state.chapter] || [];
  const active = practiceCaseMap[state.scenario];
  if (active && cases.some((practiceCase) => practiceCase.id === active.id)) return active;
  state.scenario = cases[0].id;
  return cases[0];
}

function renderTraceEventCard() {
  const scenario = activePracticeCase();
  const event = scenario.event;
  els.traceEventCard.innerHTML = `
    <div class="trace-event-figure ${event.type}">
      ${eventFigure(event.type)}
    </div>
    <div class="trace-event-copy">
      <p class="overline">${event.label}</p>
      <h4>${event.title}</h4>
      <p>${event.reading}</p>
      <small>${event.timing}. ${event.caution}</small>
    </div>
  `;
}

function pathFromPoints(points) {
  return points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");
}

function activeTraceProfile() {
  const scenario = activePracticeCase();
  return practiceTraceProfiles[scenario.id] || {
    start: 0.4,
    end: 0.6,
    fillSlope: 13,
    pressureAmplitude: 46,
    flowAmplitude: 64
  };
}

function eventPulse(t, start, end, amplitude) {
  if (t <= start || t >= end || end <= start) return 0;
  return Math.sin(((t - start) / (end - start)) * Math.PI) * amplitude;
}

function eventRamp(t, start, amplitude) {
  if (t <= start) return 0;
  return ((t - start) / (1 - start)) * amplitude;
}

function makeData() {
  const scenario = activePracticeCase();
  const pattern = scenario.pattern;
  const profile = activeTraceProfile();
  const points = [];
  for (let i = 0; i <= 150; i += 1) {
    const t = i / 150;
    const x = 78 + t * 900;
    const fillTrend = t * profile.fillSlope;
    const pressureAmplitude = profile.pressureAmplitude || 0;
    const flowAmplitude = profile.flowAmplitude || 0;
    const event = eventPulse(t, profile.start, profile.end, pressureAmplitude);
    const cough = pattern === "cough" ? event : 0;
    const flatPabdCough = pattern === "flatPabd" ? event : 0;
    const abdominal = pattern === "abdominal" ? event : 0;
    const voiding = pattern === "voiding" ? event : 0;
    const flowStart = Math.min(profile.start + 0.035, profile.end - 0.02);
    const flowRise = pattern === "voiding" ? eventPulse(t, flowStart, profile.end, flowAmplitude) : 0;
    const signalDrift = pattern === "signal" ? eventRamp(t, profile.start, profile.driftAmplitude || 70) : 0;
    const signalDrop = pattern === "signal" ? eventPulse(t, Math.max(profile.start, profile.end - 0.2), profile.end, 46) : 0;
    const baselineShift = pattern === "baselineShift" && t > profile.start ? profile.baselineAmplitude || 42 : 0;
    const detrusorStorage = pattern === "detrusorStorage" ? eventPulse(t, profile.start, profile.end, profile.detrusorAmplitude || 58) : 0;
    const lowCompliance = pattern === "lowCompliance" ? eventRamp(t, profile.start, profile.complianceAmplitude || 82) : 0;
    const leakFlow = pattern === "leak" ? eventPulse(t, profile.start, profile.end, flowAmplitude) : 0;
    const leakAbdominal = pattern === "leak"
      ? eventPulse(t, Math.max(0, profile.start - 0.035), Math.max(profile.start + 0.01, profile.end - 0.025), pressureAmplitude)
      : 0;

    points.push({
      x,
      pves: 214 - fillTrend - cough - flatPabdCough - abdominal - voiding - signalDrift + signalDrop - baselineShift - detrusorStorage - lowCompliance - leakAbdominal,
      pabd: 270 - cough - abdominal - leakAbdominal,
      pdet: 330 - flatPabdCough - voiding - baselineShift - detrusorStorage - lowCompliance - (pattern === "signal" ? signalDrift * 0.55 - signalDrop : 0),
      flow: 398 - flowRise - leakFlow,
      volume: 426 - t * 78 + (pattern === "voiding" && t > 0.72 ? (t - 0.72) * 150 : 0)
    });
  }

  return {
    pves: points.map((p) => ({ x: p.x, y: p.pves })),
    pabd: points.map((p) => ({ x: p.x, y: p.pabd })),
    pdet: points.map((p) => ({ x: p.x, y: p.pdet })),
    flow: points.map((p) => ({ x: p.x, y: p.flow })),
    volume: points.map((p) => ({ x: p.x, y: p.volume }))
  };
}

function eventMarkup() {
  const challengePending = traceChallengeIsCurrent() && state.traceChallenge.verdict === null;
  if (!state.layers.events || challengePending) return "";
  const scenario = activePracticeCase();
  const pattern = scenario.pattern;
  const profile = activeTraceProfile();
  const startX = Math.round(78 + profile.start * 900);
  const endX = Math.round(78 + profile.end * 900);
  const width = Math.max(56, endX - startX);
  const labelX = startX + 6;
  if (pattern === "cough" || pattern === "flatPabd") {
    return `
      <rect class="event-band warn" x="${startX}" y="74" width="${width}" height="340" rx="8" />
      <text class="event-label" x="${labelX}" y="63">${scenario.eventLabel}</text>
    `;
  }

  if (pattern === "voiding") {
    return `
      <rect class="event-band" x="${startX}" y="74" width="${width}" height="340" rx="8" />
      <text class="event-label" x="${labelX}" y="63">${scenario.eventLabel}</text>
    `;
  }

  if (pattern === "abdominal") {
    return `
      <rect class="event-band warn" x="${startX}" y="74" width="${width}" height="340" rx="8" />
      <text class="event-label" x="${labelX}" y="63">${scenario.eventLabel}</text>
    `;
  }

  if (pattern === "signal") {
    return `
      <rect class="event-band warn" x="${startX}" y="74" width="${width}" height="340" rx="8" />
      <text class="event-label" x="${labelX}" y="63">${scenario.eventLabel}</text>
    `;
  }

  if (pattern === "baselineShift") {
    return `
      <rect class="event-band warn" x="${startX}" y="74" width="${width}" height="340" rx="8" />
      <text class="event-label" x="${labelX}" y="63">${scenario.eventLabel}</text>
    `;
  }

  if (pattern === "detrusorStorage") {
    return `
      <rect class="event-band warn" x="${startX}" y="74" width="${width}" height="340" rx="8" />
      <text class="event-label" x="${labelX}" y="63">${scenario.eventLabel}</text>
    `;
  }

  if (pattern === "lowCompliance") {
    return `
      <rect class="event-band warn" x="${startX}" y="74" width="${width}" height="340" rx="8" />
      <text class="event-label" x="${labelX}" y="63">${scenario.eventLabel}</text>
    `;
  }

  if (pattern === "leak") {
    const dropX = Math.round(startX + width * 0.62);
    return `
      <rect class="event-band warn" x="${startX}" y="74" width="${width}" height="340" rx="8" />
      <text class="event-label" x="${labelX}" y="63">${scenario.eventLabel}</text>
      <path class="leak-drop" d="M${dropX} 355 C${dropX - 12} 369 ${dropX - 18} 380 ${dropX - 18} 391 C${dropX - 18} 409 ${dropX - 3} 420 ${dropX + 12} 410 C${dropX + 29} 398 ${dropX + 23} 377 ${dropX} 355 Z" />
      <text class="event-label leak-text" x="${dropX + 25}" y="390">fuga observada</text>
    `;
  }

  return `
    <rect class="event-band" x="${startX}" y="74" width="${width}" height="340" rx="8" />
    <text class="event-label" x="${labelX}" y="63">${scenario.eventLabel}</text>
  `;
}

function traceChallengeMarkerMarkup() {
  if (!traceChallengeIsCurrent() || !Number.isFinite(state.traceChallenge.position)) return "";
  const markerX = Math.round(78 + state.traceChallenge.position * 900);
  const verdict = state.traceChallenge.verdict === "good" ? "good" : "warn";
  return `
    <line class="user-event-marker ${verdict}" x1="${markerX}" y1="72" x2="${markerX}" y2="432" />
    <circle class="user-event-point ${verdict}" cx="${markerX}" cy="72" r="8" />
    <text class="user-event-label ${verdict}" x="${Math.min(markerX + 10, 914)}" y="92">tu marca</text>
  `;
}

function renderTrace() {
  const scenario = activePracticeCase();
  const profile = activeTraceProfile();
  const data = makeData();
  const grids = [92, 156, 220, 284, 348, 412]
    .map((y) => `<line class="grid-line" x1="72" y1="${y}" x2="982" y2="${y}" />`)
    .join("");
  const labels = [
    ["Pves", 26, 218],
    ["Pabd", 23, 272],
    ["Pdet", 24, 331],
    ["Flujo", 21, 402],
    ["Vol", 34, 434]
  ]
    .map(([text, x, y]) => `<text class="axis-label" x="${x}" y="${y}">${text}</text>`)
    .join("");
  const layerPaths = ["pves", "pabd", "pdet", "flow", "volume"]
    .filter((layer) => layer === "volume" || state.layers[layer])
    .map((layer) => `<path class="trace-path ${layer}" d="${pathFromPoints(data[layer])}" />`)
    .join("");

  const transitionX = scenario.pattern === "voiding" ? Math.round(78 + profile.start * 900) : 678;
  els.traceSvg.dataset.traceProfile = scenario.id;
  els.traceSvg.setAttribute("aria-label", `Trazado sintético: ${scenario.title}`);
  els.traceSvg.classList.toggle("challenge-active", traceChallengeIsCurrent() && state.traceChallenge.verdict === null);
  els.traceSvg.innerHTML = `
    <rect x="0" y="0" width="1060" height="470" fill="transparent" />
    ${eventMarkup()}
    ${grids}
    ${labels}
    ${layerPaths}
    ${traceChallengeMarkerMarkup()}
    <line class="time-marker" x1="${transitionX}" y1="74" x2="${transitionX}" y2="432" />
    <text class="phase-label" x="82" y="452">llenado</text>
    <text class="phase-label" x="486" y="452">decisión / cambio de programa</text>
    <text class="phase-label" x="842" y="452">vaciado</text>
  `;
}

function renderTraceChallenge() {
  const scenario = activePracticeCase();
  const active = traceChallengeIsCurrent();
  const answered = active && state.traceChallenge.verdict !== null;
  const hasFocalEvent = scenario.pattern !== "storage";

  els.traceChallenge.classList.toggle("active", active);
  els.traceChallenge.classList.toggle("answered", answered);
  els.startTraceChallenge.textContent = active ? "Salir del reto" : "Iniciar reto";
  els.noFocalEvent.hidden = !active || answered;
  els.resetTraceChallenge.hidden = !answered;

  if (!active) {
    els.traceChallengePrompt.textContent = "Encuentra el evento antes de ver la guía.";
    els.traceChallengeInstructions.textContent = "Activa el reto y marca directamente sobre el trazado.";
    els.traceChallengeFeedback.className = "trace-challenge-feedback";
    els.traceChallengeFeedback.textContent = "La guía permanece visible hasta que inicies el reto.";
    return;
  }

  els.traceChallengePrompt.textContent = hasFocalEvent
    ? `Marca el inicio de “${scenario.eventLabel}”.`
    : "Decide si este registro contiene un evento focal que debas marcar.";
  els.traceChallengeInstructions.textContent = hasFocalEvent
    ? "Pulsa sobre la curva donde consideres que comienza el evento. La guía aparecerá después de responder."
    : "Observa el trazado completo. Puedes marcar una zona o declarar que no existe un evento focal.";

  if (!answered) {
    els.traceChallengeFeedback.className = "trace-challenge-feedback active";
    els.traceChallengeFeedback.textContent = "Guía oculta. Razona primero desde la forma y la relación entre canales.";
    return;
  }

  const correct = state.traceChallenge.verdict === "good";
  els.traceChallengeFeedback.className = `trace-challenge-feedback ${correct ? "good" : "warn"}`;
  if (state.traceChallenge.noEvent) {
    els.traceChallengeFeedback.textContent = correct
      ? "Correcto. Este escenario exige reconocer un comportamiento global, no inventar un evento focal."
      : "Aquí sí existe un evento focal. Compara la banda revelada con los cambios simultáneos entre canales.";
    return;
  }

  els.traceChallengeFeedback.textContent = correct
    ? "Ubicación coherente. La banda revelada permite comparar tu marca con el inicio esperado del evento sintético."
    : "La marca no coincide con el inicio esperado. Revisa dónde comienza el primer cambio concordante entre los canales relevantes.";
}

function answerTraceChallengeAt(clientX) {
  if (!traceChallengeIsCurrent() || state.traceChallenge.verdict !== null) return;
  const rect = els.traceSvg.getBoundingClientRect();
  if (!rect.width) return;
  const svgX = ((clientX - rect.left) / rect.width) * 1060;
  const position = clamp((svgX - 78) / 900, 0, 1);
  const scenario = activePracticeCase();
  const profile = activeTraceProfile();
  const correct = scenario.pattern !== "storage" && Math.abs(position - profile.start) <= 0.08;
  state.traceChallenge.position = position;
  state.traceChallenge.noEvent = false;
  state.traceChallenge.verdict = correct ? "good" : "warn";
  renderTrace();
  renderTraceChallenge();
  saveState();
}

function renderChapter() {
  const chapter = chapters[state.chapter];
  const screen = chapter.screens[state.screen];
  const total = chapter.screens.length;

  els.chapterTitle.textContent = chapter.title;
  els.stageBlock.textContent = chapter.block;
  els.screenKicker.textContent = chapter.number;
  els.screenTitle.textContent = screen.title;
  els.screenText.textContent = screen.text;
  els.lessonPrompt.textContent = screen.prompt || "";
  els.lessonPrompt.hidden = !screen.prompt;
  els.keyIdea.textContent = screen.key;
  els.mentalModelTitle.textContent = chapter.mentalModelTitle;
  els.mentalModelText.textContent = chapter.mentalModelText;
  els.notThis.textContent = chapter.notThis;
  els.isThis.textContent = chapter.isThis;
  els.labChapterTitle.textContent = `${chapter.number} · ${chapter.title}`;
  els.labChapterDescription.textContent = chapter.labDescription;
  els.progressLabel.textContent = `Lección ${state.screen + 1} de ${total}`;
  els.progressFill.style.width = `${((state.screen + 1) / total) * 100}%`;
  els.prevScreen.disabled = state.screen === 0;
  els.nextScreen.disabled = state.screen === total - 1;
  els.openLab.hidden = state.screen !== total - 1;

  els.screenDots.innerHTML = chapter.screens
    .map(
      (item, index) => `<button type="button" class="${index === state.screen ? "active" : ""}" aria-label="Lección ${index + 1}: ${item.title}" aria-current="${index === state.screen ? "step" : "false"}" data-screen="${index}">${index + 1}</button>`
    )
    .join("");

  els.screenDots.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.screen = Number(button.dataset.screen);
      render();
    });
  });

  document.querySelectorAll(".course-item[data-chapter]").forEach((button) => {
    const active = button.dataset.chapter === state.chapter;
    button.classList.toggle("active", active);
    button.setAttribute("aria-current", active ? "page" : "false");
  });

  renderVisualDemo();
}

function renderView() {
  const view = ["lesson", "lab", "practice"].includes(state.view) ? state.view : "lesson";
  state.view = view;

  document.querySelectorAll("[data-view]").forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll("[data-view-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.viewPanel !== view;
  });
}

function setView(view) {
  if (!["lesson", "lab", "practice"].includes(view)) return;
  state.view = view;
  renderView();
  saveState();
}

function closeCourseNav() {
  els.sideRail.classList.remove("nav-open");
  els.courseNavToggle.setAttribute("aria-expanded", "false");
  els.courseNavToggle.title = "Mostrar capítulos";
}

function renderRoutine() {
  const activeStep = activePracticeCase().focus || chapterFocus[state.chapter] || "phase";
  els.routineSteps.innerHTML = readingRoutine
    .map(
      (step, index) => `
        <li class="${step.id === activeStep ? "active" : ""}">
          <span>${index + 1}</span>
          <div>
            <strong>${step.label}</strong>
            <p>${step.text}</p>
          </div>
        </li>
      `
    )
    .join("");
}

function renderLayerControls() {
  document.querySelectorAll("[data-layer]").forEach((input) => {
    input.checked = Boolean(state.layers[input.dataset.layer]);
  });
}

function renderCoach() {
  const scenario = activePracticeCase();
  const chapterCases = chapterPracticeCases[state.chapter];
  els.practiceChapterLabel.textContent = `${chapters[state.chapter].number} · trazados propios del capítulo`;
  els.scenarioTabs.innerHTML = chapterCases
    .map((practiceCase) => `<button type="button" class="scenario-tab ${practiceCase.id === scenario.id ? "active" : ""}" data-scenario="${practiceCase.id}" role="tab" aria-selected="${practiceCase.id === scenario.id}">${practiceCase.tabLabel}</button>`)
    .join("");
  els.traceTitle.textContent = scenario.title;
  renderTraceEventCard();
  els.coachQuestion.textContent = scenario.question;
  els.coachFeedback.className = "coach-feedback";
  els.coachFeedback.textContent = "Elige una respuesta. Puedes pulsarla nuevamente para dejar el ejercicio sin marcar.";
  const presentedAnswers = orderedAnswers(scenario.answers, scenario.answerOffset || 0);
  els.answerGrid.innerHTML = presentedAnswers
    .map(
      ({ answer: [label], originalIndex }, displayIndex) =>
        `<button type="button" data-answer="${originalIndex}"><span class="answer-letter">${String.fromCharCode(65 + displayIndex)}</span><span>${label}</span></button>`
    )
    .join("");

  els.answerGrid.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("selected")) {
        renderCoach();
        return;
      }
      const [, correct, feedback] = scenario.answers[Number(button.dataset.answer)];
      els.answerGrid.querySelectorAll("button").forEach((candidate) => {
        candidate.classList.remove("selected", "good", "warn");
      });
      button.classList.add("selected", correct ? "good" : "warn");
      els.coachFeedback.className = `coach-feedback ${correct ? "good" : "warn"}`;
      els.coachFeedback.textContent = feedback;
    });
  });

  els.scenarioTabs.querySelectorAll("[data-scenario]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!chapterCases.some((practiceCase) => practiceCase.id === button.dataset.scenario)) return;
      state.scenario = button.dataset.scenario;
      resetTraceChallengeState();
      render();
    });
  });
}

function bindEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  els.openLab.addEventListener("click", () => setView("lab"));
  els.openPractice.addEventListener("click", () => setView("practice"));

  els.themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme();
    saveState();
  });

  els.courseNavToggle.addEventListener("click", () => {
    const open = !els.sideRail.classList.contains("nav-open");
    els.sideRail.classList.toggle("nav-open", open);
    els.courseNavToggle.setAttribute("aria-expanded", String(open));
    els.courseNavToggle.title = open ? "Ocultar capítulos" : "Mostrar capítulos";
  });

  document.querySelectorAll(".course-item[data-chapter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.chapter = button.dataset.chapter;
      state.screen = 0;
      state.scenario = chapterScenarioDefaults[state.chapter] || state.scenario;
      resetTraceChallengeState();
      closeCourseNav();
      render();
    });
  });

  els.prevScreen.addEventListener("click", () => {
    if (state.screen === 0) return;
    state.screen -= 1;
    render();
  });

  els.nextScreen.addEventListener("click", () => {
    const total = chapters[state.chapter].screens.length;
    if (state.screen >= total - 1) return;
    state.screen += 1;
    render();
  });

  document.querySelectorAll("[data-layer]").forEach((input) => {
    input.addEventListener("change", () => {
      state.layers[input.dataset.layer] = input.checked;
      renderTrace();
    });
  });

  els.startTraceChallenge.addEventListener("click", () => {
    if (traceChallengeIsCurrent()) {
      resetTraceChallengeState();
    } else {
      resetTraceChallengeState(true);
      state.layers.events = true;
    }
    renderLayerControls();
    renderTrace();
    renderTraceChallenge();
    saveState();
  });

  els.noFocalEvent.addEventListener("click", () => {
    if (!traceChallengeIsCurrent() || state.traceChallenge.verdict !== null) return;
    state.traceChallenge.position = null;
    state.traceChallenge.noEvent = true;
    state.traceChallenge.verdict = activePracticeCase().pattern === "storage" ? "good" : "warn";
    renderTrace();
    renderTraceChallenge();
    saveState();
  });

  els.resetTraceChallenge.addEventListener("click", () => {
    resetTraceChallengeState(true);
    renderTrace();
    renderTraceChallenge();
    saveState();
  });

  els.traceSvg.addEventListener("click", (event) => answerTraceChallengeAt(event.clientX));

  els.resetProgress.addEventListener("click", () => {
    resetState();
    render();
  });

  document.addEventListener("keydown", (event) => {
    if (["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName)) return;
    if (event.key === "ArrowLeft") {
      els.prevScreen.click();
    }
    if (event.key === "ArrowRight") {
      els.nextScreen.click();
    }
  });
}

function render() {
  applyTheme();
  renderChapter();
  renderChallenge();
  renderView();
  renderRoutine();
  renderLayerControls();
  renderCoach();
  renderTrace();
  renderTraceChallenge();
  saveState();
}

bindEvents();
render();

