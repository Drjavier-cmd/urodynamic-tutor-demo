const readingRoutine = [
  {
    id: "phase",
    label: "Fase",
    text: "Ubica almacenamiento, maniobra, transición o vaciado antes de interpretar."
  },
  {
    id: "quality",
    label: "Calidad",
    text: "Decide si el tramo es interpretable, parcial o no interpretable."
  },
  {
    id: "signal",
    label: "Señal",
    text: "Separa dato medido, canal afectado y coherencia entre presiones."
  },
  {
    id: "event",
    label: "Evento",
    text: "Relaciona tos, valsalva, posición, sensación, fuga, orden o fin de flujo."
  },
  {
    id: "inference",
    label: "Inferencia",
    text: "Propón qué representa la señal sin convertirla todavía en diagnóstico."
  },
  {
    id: "limit",
    label: "Límite",
    text: "Declara qué no se puede concluir con ese segmento o ese estudio."
  }
];

const chapterFocus = {
  thinking: "limit",
  physiology: "phase",
  tracing: "phase",
  instrument: "signal",
  artifacts: "quality",
  storageDisorders: "inference"
};

const chapterScenarioDefaults = Object.fromEntries(
  Object.entries(chapterPracticeCases).map(([chapterId, cases]) => [chapterId, cases[0].id])
);

const STORAGE_KEY = "urodynamicTutorState:v1";

const defaultState = {
  chapter: "thinking",
  screen: 0,
  view: "lesson",
  scenario: "thinkingQuestion",
  theme: "light",
  layers: {
    pves: true,
    pabd: true,
    pdet: true,
    flow: true,
    events: true
  },
  demoControls: {
    accommodationVolume: 62,
    accommodationStiffness: 28,
    accommodationStage: "progressive",
    outletDiameter: 78,
    outletCompression: 8,
    outletStiffness: 14,
    resistancePattern: "open",
    clinicalStage: "question",
    functionalProgram: "storage",
    signalChannel: "pves",
    tracePosition: 12,
    pressurePattern: "cough",
    artifactPattern: "cough"
  },
  challengeIndex: {
    thinking: 0,
    physiology: 0,
    tracing: 0,
    instrument: 0,
    artifacts: 0
  },
  challengeAnswers: {
    thinking: {},
    physiology: {},
    tracing: {},
    instrument: {},
    artifacts: {}
  },
  labDemo: {
    thinking: "clinicalReasoning",
    physiology: "accommodation",
    tracing: "curveTimeline",
    instrument: "signalMap",
    artifacts: "artifactDetective",
    storageDisorders: "accommodation"
  },
  traceChallenge: {
    active: false,
    scenario: null,
    position: null,
    verdict: null,
    noEvent: false
  }
};

const state = loadState();

const els = {
  sideRail: document.querySelector(".side-rail"),
  courseNavToggle: document.getElementById("courseNavToggle"),
  themeToggle: document.getElementById("themeToggle"),
  themeIcon: document.getElementById("themeIcon"),
  themeLabel: document.getElementById("themeLabel"),
  courseMap: document.getElementById("courseMap"),
  chapterTitle: document.getElementById("chapterTitle"),
  stageBlock: document.getElementById("stageBlock"),
  progressLabel: document.getElementById("progressLabel"),
  progressFill: document.getElementById("progressFill"),
  screenKicker: document.getElementById("screenKicker"),
  screenTitle: document.getElementById("screenTitle"),
  screenText: document.getElementById("screenText"),
  lessonPrompt: document.getElementById("lessonPrompt"),
  visualDemo: document.getElementById("visualDemo"),
  challengeLab: document.getElementById("challengeLab"),
  labChapterTitle: document.getElementById("labChapterTitle"),
  labChapterDescription: document.getElementById("labChapterDescription"),
  openLab: document.getElementById("openLab"),
  openPractice: document.getElementById("openPractice"),
  keyIdea: document.getElementById("keyIdea"),
  screenDots: document.getElementById("screenDots"),
  prevScreen: document.getElementById("prevScreen"),
  nextScreen: document.getElementById("nextScreen"),
  mentalModelTitle: document.getElementById("mentalModelTitle"),
  mentalModelText: document.getElementById("mentalModelText"),
  notThis: document.getElementById("notThis"),
  isThis: document.getElementById("isThis"),
  practiceChapterLabel: document.getElementById("practiceChapterLabel"),
  scenarioTabs: document.getElementById("scenarioTabs"),
  traceTitle: document.getElementById("traceTitle"),
  traceEventCard: document.getElementById("traceEventCard"),
  traceSvg: document.getElementById("traceSvg"),
  traceChallenge: document.getElementById("traceChallenge"),
  traceChallengePrompt: document.getElementById("traceChallengePrompt"),
  traceChallengeInstructions: document.getElementById("traceChallengeInstructions"),
  traceChallengeFeedback: document.getElementById("traceChallengeFeedback"),
  startTraceChallenge: document.getElementById("startTraceChallenge"),
  noFocalEvent: document.getElementById("noFocalEvent"),
  resetTraceChallenge: document.getElementById("resetTraceChallenge"),
  coachQuestion: document.getElementById("coachQuestion"),
  answerGrid: document.getElementById("answerGrid"),
  coachFeedback: document.getElementById("coachFeedback"),
  routineSteps: document.getElementById("routineSteps"),
  resetProgress: document.getElementById("resetProgress")
};

function cloneDefaultState() {
  return JSON.parse(JSON.stringify(defaultState));
}

function normalizeDemoControls(savedControls = {}) {
  const controls = {
    ...defaultState.demoControls,
    ...savedControls
  };

  if (!savedControls.resistancePattern && ["outletDiameter", "outletCompression", "outletStiffness"].some((key) => key in savedControls)) {
    controls.resistancePattern = "manual";
  }

  return controls;
}

function normalizeChallengeState(savedIndexes = {}, savedAnswers = {}) {
  const challengeIndex = {};
  const challengeAnswers = {};

  Object.entries(chapterChallenges).forEach(([chapterId, challenges]) => {
    const savedIndex = Number.isInteger(savedIndexes[chapterId]) ? savedIndexes[chapterId] : 0;
    challengeIndex[chapterId] = clamp(savedIndex, 0, challenges.length - 1);
    challengeAnswers[chapterId] =
      savedAnswers[chapterId] && typeof savedAnswers[chapterId] === "object" && !Array.isArray(savedAnswers[chapterId])
        ? { ...savedAnswers[chapterId] }
        : {};
  });

  return { challengeIndex, challengeAnswers };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved || !chapters[saved.chapter]) {
      return applyUrlState(cloneDefaultState());
    }

    const normalizedChallenges = normalizeChallengeState(saved.challengeIndex, saved.challengeAnswers);
    const savedScenario = chapterPracticeCases[saved.chapter].some((practiceCase) => practiceCase.id === saved.scenario)
      ? saved.scenario
      : chapterScenarioDefaults[saved.chapter];

    return applyUrlState({
      chapter: saved.chapter,
      screen: Number.isInteger(saved.screen) ? Math.max(0, Math.min(saved.screen, chapters[saved.chapter].screens.length - 1)) : 0,
      view: ["lesson", "lab", "practice"].includes(saved.view) ? saved.view : "lesson",
      scenario: savedScenario,
      theme: saved.theme === "dark" ? "dark" : "light",
      layers: {
        ...defaultState.layers,
        ...(saved.layers || {})
      },
      demoControls: normalizeDemoControls(saved.demoControls),
      labDemo: {
        ...defaultState.labDemo,
        ...(saved.labDemo || {})
      },
      traceChallenge: {
        ...defaultState.traceChallenge,
        ...(saved.traceChallenge || {}),
        active: false,
        scenario: null,
        position: null,
        verdict: null,
        noEvent: false
      },
      ...normalizedChallenges
    });
  } catch {
    return applyUrlState(cloneDefaultState());
  }
}

function applyUrlState(baseState) {
  const params = new URLSearchParams(window.location.search);
  const chapter = params.get("chapter");
  const scenario = params.get("scenario");
  const view = params.get("view");
  const screen = Number(params.get("screen"));

  if (chapter && chapters[chapter]) {
    baseState.chapter = chapter;
    baseState.screen = 0;
    baseState.scenario = chapterScenarioDefaults[chapter];
  }

  if (Number.isInteger(screen)) {
    baseState.screen = clamp(screen - 1, 0, chapters[baseState.chapter].screens.length - 1);
  }

  if (scenario && chapterPracticeCases[baseState.chapter].some((practiceCase) => practiceCase.id === scenario)) {
    baseState.scenario = scenario;
  }

  if (["lesson", "lab", "practice"].includes(view)) {
    baseState.view = view;
  }

  return baseState;
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // The app remains fully usable if a browser blocks local persistence.
  }
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function resetState() {
  const theme = state.theme;
  Object.assign(state, cloneDefaultState());
  state.theme = theme;
}

function applyTheme() {
  const dark = state.theme === "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  els.themeToggle.setAttribute("aria-pressed", String(dark));
  els.themeToggle.title = dark ? "Activar modo claro" : "Activar modo oscuro";
  els.themeIcon.textContent = dark ? "☀" : "☾";
  els.themeLabel.textContent = dark ? "Activar modo claro" : "Activar modo oscuro";
}

function resetTraceChallengeState(active = false) {
  state.traceChallenge = {
    active,
    scenario: active ? state.scenario : null,
    position: null,
    verdict: null,
    noEvent: false
  };
}

function traceChallengeIsCurrent() {
  return state.traceChallenge.active && state.traceChallenge.scenario === state.scenario;
}

function pressureLabel(value) {
  if (value < 36) return "baja";
  if (value < 66) return "intermedia";
  return "alta";
}

function controlMarkup(id, label) {
  const value = state.demoControls[id];
  return `
    <label class="demo-control">
      <span>${label}</span>
      <input type="range" min="0" max="100" value="${value}" data-demo-control="${id}" />
    </label>
  `;
}

const resistancePresets = {
  open: {
    label: "Salida abierta",
    values: { outletDiameter: 78, outletCompression: 8, outletStiffness: 14 },
    title: "La salida acompaña a la bomba.",
    text: "Diámetro amplio, poca compresión y baja resistencia propia permiten que la energía de la bomba se traduzca en flujo."
  },
  extrinsic: {
    label: "Extrínseca",
    values: { outletDiameter: 72, outletCompression: 78, outletStiffness: 18 },
    title: "La salida se estrecha desde fuera.",
    text: "La resistencia aparece porque algo externo comprime, angula o deforma el trayecto. La salida podría ser competente, pero está siendo apretada."
  },
  intrinsic: {
    label: "Intrínseca",
    values: { outletDiameter: 30, outletCompression: 8, outletStiffness: 78 },
    title: "La salida limita por su propia estructura.",
    text: "El problema está en el conducto: menor calibre, rigidez o baja deformabilidad. No necesitas una fuerza externa para que el flujo caiga."
  },
  mixed: {
    label: "Mixta",
    values: { outletDiameter: 38, outletCompression: 58, outletStiffness: 62 },
    title: "Dos mecanismos pueden sumarse.",
    text: "Una salida ya resistente puede empeorar si además recibe compresión externa. El trazado orienta, pero no adjudica causa anatómica por sí solo."
  },
  manual: {
    label: "Manual",
    values: {},
    title: "Patrón manual.",
    text: "Moviste los controles libremente. Interpreta el resultado como tendencia docente, no como medición clínica."
  }
};

const clinicalReasoningStages = {
  question: {
    label: "Pregunta",
    title: "¿Qué queremos observar?",
    text: "La paciente refiere pérdida de orina al toser. Antes de mirar curvas, la pregunta debe transformar ese relato en un fenómeno que el examen pueda intentar reproducir.",
    evidence: ["Síntoma referido: pérdida al toser", "Fenómeno buscado: fuga durante aumento abdominal registrado"],
    result: "Pregunta definida: ¿aparece fuga asociada a la tos durante el estudio?",
    boundary: "La pregunta orienta el examen; todavía no establece un diagnóstico."
  },
  conditions: {
    label: "Condiciones",
    title: "¿En qué condiciones se buscó?",
    text: "El resultado solo puede entenderse si sabemos en qué fase, posición y maniobra se intentó reproducir el síntoma y si los canales transmitían adecuadamente.",
    evidence: ["Fase de llenado", "Tos identificada como evento", "Pves y Pabd con transmisión coherente"],
    result: "Condiciones suficientes para relacionar la maniobra con lo observado.",
    boundary: "Un examen controlado no reproduce de manera perfecta la vida cotidiana."
  },
  signal: {
    label: "Señal",
    title: "¿Qué ocurrió en el registro?",
    text: "Ahora se describen solamente los datos: la tos fue anotada, Pves y Pabd aumentaron de manera concordante y se registró una fuga coincidente.",
    evidence: ["Evento: tos", "Pves y Pabd aumentan", "Fuga observada en el mismo momento"],
    result: "Dato observado: fuga coincidente con una maniobra abdominal registrada.",
    boundary: "El dato aún debe integrarse con la pregunta y las condiciones del estudio."
  },
  conclusion: {
    label: "Conclusión",
    title: "¿Qué podemos afirmar con prudencia?",
    text: "La conclusión responde la pregunta original con el fenómeno que efectivamente se observó, sin atribuir al trazado más información de la que contiene.",
    evidence: ["Pregunta respondida", "Fenómeno reproducido", "Límite declarado"],
    result: "Durante las condiciones del estudio se observó fuga asociada a la tos registrada.",
    boundary: "La conclusión no explica por sí sola toda la historia clínica ni reemplaza su integración."
  }
};

const functionalPrograms = {
  storage: {
    label: "Almacenamiento",
    system: "Reservorio",
    detrusor: "relajado",
    outlet: "cerrada",
    goal: "Ganar volumen a baja presión y sin fuga.",
    prompt: "¿El sistema conserva el programa de almacenamiento?"
  },
  voiding: {
    label: "Vaciado",
    system: "Bomba",
    detrusor: "contráctil",
    outlet: "abierta",
    goal: "Generar flujo mediante contracción y apertura coordinadas.",
    prompt: "¿La bomba y la salida trabajan a favor del flujo?"
  }
};

const accommodationStages = {
  initial: {
    label: "Llenado inicial",
    normalScale: 0.78,
    alteredScale: 0.72,
    normalPressure: "baja",
    alteredPressure: "baja",
    upperTract: "sin cambio visible",
    ureterWidth: 4,
    pelvisScale: 1
  },
  progressive: {
    label: "Llenado progresivo",
    normalScale: 0.98,
    alteredScale: 0.8,
    normalPressure: "se mantiene baja",
    alteredPressure: "aumenta",
    upperTract: "entra en zona de riesgo",
    ureterWidth: 6,
    pelvisScale: 1.16
  },
  high: {
    label: "Llenado avanzado",
    normalScale: 1.12,
    alteredScale: 0.86,
    normalPressure: "permanece contenida",
    alteredPressure: "elevada",
    upperTract: "dilatación representada como riesgo",
    ureterWidth: 10,
    pelvisScale: 1.34
  }
};

const signalChannels = {
  pves: {
    label: "Pves",
    kind: "Medida",
    source: "Presión registrada dentro de la vejiga.",
    reading: "Incluye la contribución vesical, la presión abdominal transmitida y posibles problemas técnicos.",
    limit: "Aislada no equivale automáticamente a actividad detrusoriana."
  },
  pabd: {
    label: "Pabd",
    kind: "Medida",
    source: "Estimación de la presión abdominal mediante el canal correspondiente.",
    reading: "Permite reconocer cuánto de un cambio vesical puede explicarse por transmisión abdominal.",
    limit: "Si el canal no transmite bien, la Pdet derivada también pierde confiabilidad."
  },
  pdet: {
    label: "Pdet",
    kind: "Derivada",
    source: "Resultado de restar Pabd a Pves.",
    reading: "Ayuda a separar la contribución abdominal de la presión vesical registrada.",
    limit: "No es una tercera presión medida ni corrige canales técnicamente inválidos."
  },
  flow: {
    label: "Flujo",
    kind: "Medida",
    source: "Salida de orina registrada en el tiempo.",
    reading: "Muestra una consecuencia funcional que debe relacionarse con presión y fase.",
    limit: "Flujo aislado no explica por sí solo cómo trabajaron bomba y salida."
  },
  volume: {
    label: "Volumen",
    kind: "Contexto",
    source: "Cantidad acumulada durante llenado o evacuada durante vaciado.",
    reading: "Ubica presiones, sensaciones y eventos dentro de la historia temporal.",
    limit: "El volumen contextualiza una señal; no la interpreta por sí mismo."
  }
};

const traceMoments = [
  {
    position: 12,
    until: 22,
    phase: "Almacenamiento",
    title: "Llenado inicial",
    event: "Sin maniobra",
    reading: "La presión se interpreta dentro de una fase de llenado y junto al volumen acumulado."
  },
  {
    position: 30,
    until: 38,
    phase: "Almacenamiento",
    title: "Tos",
    event: "Evento abdominal breve",
    reading: "Compara Pves y Pabd antes de atribuir el pico al detrusor."
  },
  {
    position: 52,
    until: 62,
    phase: "Almacenamiento",
    title: "Deseo miccional",
    event: "Sensación registrada",
    reading: "La sensación aporta contexto temporal, pero no reemplaza la lectura de presión y volumen."
  },
  {
    position: 70,
    until: 78,
    phase: "Transición",
    title: "Orden de orinar",
    event: "Cambio de programa",
    reading: "Distingue la instrucción de la respuesta fisiológica que realmente aparece después."
  },
  {
    position: 90,
    until: 100,
    phase: "Vaciado",
    title: "Presión y flujo",
    event: "Flujo presente",
    reading: "Durante vaciado, presión y flujo se leen como una relación, no como canales aislados."
  }
];

const pressurePatterns = {
  baseline: {
    label: "Basal",
    pves: 12,
    pabd: 10,
    title: "Dos mediciones cercanas producen una Pdet baja.",
    reading: "La cifra derivada refleja la diferencia entre ambos canales, no una tercera medición independiente."
  },
  cough: {
    label: "Tos",
    pves: 42,
    pabd: 40,
    title: "Pves y Pabd suben casi juntas.",
    reading: "La presión transmitida se cancela en gran parte al calcular Pdet. Esto es coherente con un evento abdominal bien transmitido."
  },
  vesicalRise: {
    label: "Pves asciende",
    pves: 35,
    pabd: 10,
    title: "Pves aumenta sin un cambio equivalente de Pabd.",
    reading: "Pdet aumenta por la resta. La fase, el evento y la calidad todavía deben confirmarse antes de nombrar el fenómeno."
  },
  isolatedPabd: {
    label: "Pabd aislada",
    pves: 12,
    pabd: 32,
    title: "Pabd cambia sin acompañamiento de Pves.",
    reading: "El cálculo genera una Pdet negativa. Eso obliga a revisar coherencia técnica o actividad rectal; no demuestra una presión vesical negativa."
  }
};

const artifactPatterns = {
  cough: {
    label: "Tos transmitida",
    status: "Control coherente",
    pves: "M90 48 L225 48 L242 48 L252 19 L263 48 L590 48",
    pabd: "M90 103 L225 103 L242 103 L252 75 L263 103 L590 103",
    pdet: "M90 158 L590 158",
    clue: "Pves y Pabd muestran picos semejantes; Pdet permanece cerca de su línea de base.",
    check: "Confirmar que la tos quedó registrada y que la transmisión es comparable en ambos canales.",
    limit: "Este control no diagnostica por sí solo continencia ni actividad detrusoriana."
  },
  rectal: {
    label: "Contracción rectal",
    status: "Evento abdominal localizado",
    pves: "M90 48 L590 48",
    pabd: "M90 103 L270 103 C286 103 292 72 315 72 C338 72 344 103 360 103 L590 103",
    pdet: "M90 158 L270 158 C286 158 292 188 315 188 C338 188 344 158 360 158 L590 158",
    clue: "Pabd asciende sin un cambio equivalente de Pves y Pdet se desvía hacia valores negativos.",
    check: "Relacionar el evento con actividad rectal y verificar la calidad y posición del canal abdominal.",
    limit: "No interpretar la deflexión negativa de Pdet como un fenómeno propio de la vejiga."
  },
  pvesShift: {
    label: "Salto de Pves",
    status: "Cambio de línea base",
    pves: "M90 48 L290 48 L300 29 L590 29",
    pabd: "M90 103 L590 103",
    pdet: "M90 158 L290 158 L300 139 L590 139",
    clue: "Pves cambia abruptamente de nivel; Pabd permanece estable y Pdet reproduce el salto.",
    check: "Revisar línea vesical, catéter, cero y transmisión antes de continuar interpretando.",
    limit: "El segmento posterior puede no ser comparable con la línea de base previa hasta corregir la causa."
  },
  flatPabd: {
    label: "Pabd plana",
    status: "Canal no confiable",
    pves: "M90 48 L225 48 L242 48 L252 19 L263 48 L590 48",
    pabd: "M90 103 L590 103",
    pdet: "M90 158 L225 158 L242 158 L252 129 L263 158 L590 158",
    clue: "Pabd no responde durante una tos mientras Pves sí cambia; Pdet hereda artificialmente el pico.",
    check: "Verificar conexión, posición, columna de líquido y transmisión del canal abdominal.",
    limit: "Pdet derivada desde una Pabd inválida no permite interpretar fisiología con seguridad."
  }
};


