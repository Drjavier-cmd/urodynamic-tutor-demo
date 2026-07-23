const BUILD_REVISION = "20260723-competency-system-v1";
const competencyModel = window.UroDynamicCompetencyModel;
const assessmentEngine = window.UroDynamicAssessmentEngine;
const assessmentUIFactory = window.UroDynamicAssessmentUI;

if (!competencyModel || !assessmentEngine || !assessmentUIFactory) {
  throw new Error("No se pudieron cargar los módulos de competencias y evaluación.");
}

const { chapters } = window.UroDynamicCourseContent || {};
const {
  chapterPracticeCases,
  practiceTraceProfiles,
  practiceCaseMap
} = window.UroDynamicPracticeData || {};
const { interactiveDemos, chapterLabDemos } = window.UroDynamicLabData || {};
const { chapterChallenges, challengeAnswerOffsets } = window.UroDynamicChallengeData || {};

if (
  !chapters
  || !chapterPracticeCases
  || !practiceTraceProfiles
  || !practiceCaseMap
  || !interactiveDemos
  || !chapterLabDemos
  || !chapterChallenges
  || !challengeAnswerOffsets
) {
  throw new Error("No se pudieron cargar los módulos de contenido del curso.");
}

function orderedAnswers(answers, offset = 0) {
  const withOrigin = answers.map((answer, originalIndex) => ({ answer, originalIndex }));
  const safeOffset = ((offset % answers.length) + answers.length) % answers.length;
  return [...withOrigin.slice(safeOffset), ...withOrigin.slice(0, safeOffset)];
}

function displayedCorrectLetter(answers, offset = 0) {
  const correctIndex = orderedAnswers(answers, offset).findIndex(({ answer }) => answer[1]);
  return correctIndex >= 0 ? String.fromCharCode(65 + correctIndex) : "?";
}

const assessmentBlueprintValidation = assessmentEngine.validateBlueprint(competencyModel);

window.__urodynamicTutorDiagnostics = {
  buildRevision: BUILD_REVISION,
  features: {
    persistentTheme: true,
    traceLocalizationChallenge: true,
    syntheticChapterTraces: true,
    coordinationEmgLab: true,
    storageMapLab: true,
    neuroLesionLab: true,
    eightStepClinicalReasoning: true,
    foundationsRewriteV1: true,
    pressurePhysicsLab: true,
    courseCoverV2: true,
    pressureVocabularyIntro: true,
    competencyMastery: true,
    structuredPrePost: true,
    capstoneAssessment: true,
    reasonedReportBuilder: true,
    adaptiveFeedback: true,
    scientificGovernance: true,
    accessibleTraceTable: true
  },
  assessmentBlueprint: assessmentBlueprintValidation,
  chapterScreenCounts: Object.fromEntries(
    Object.entries(chapters).map(([chapterId, chapter]) => [chapterId, chapter.screens.length])
  ),
  challengeCorrectLetters: Object.fromEntries(
    Object.entries(chapterChallenges).map(([chapterId, challenges]) => [
      chapterId,
      challenges.map((challenge, index) => displayedCorrectLetter(challenge.answers, challengeAnswerOffsets[chapterId]?.[index] || 0))
    ])
  ),
  practiceCorrectLetters: Object.fromEntries(
    Object.entries(chapterPracticeCases).map(([chapterId, cases]) => [
      chapterId,
      cases.map((practiceCase) => displayedCorrectLetter(practiceCase.answers, practiceCase.answerOffset || 0))
    ])
  ),
  practiceTraceProfiles: Object.fromEntries(
    Object.entries(chapterPracticeCases).map(([chapterId, cases]) => [chapterId, cases.map((practiceCase) => practiceCase.id)])
  ),
  traceProfileSignatures: Object.fromEntries(
    Object.entries(practiceTraceProfiles).map(([caseId, profile]) => [caseId, JSON.stringify(profile)])
  )
};

const readingRoutine = [
  {
    id: "question",
    label: "Pregunta",
    text: "Recuerda qué fenómeno se intenta reproducir, explicar o descartar."
  },
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
  },
  {
    id: "response",
    label: "Respuesta",
    text: "Vuelve a la pregunta y formula una respuesta funcional, útil y proporcional."
  }
];

const chapterFocus = {
  thinking: "limit",
  physiology: "phase",
  tracing: "phase",
  pressurePhysics: "quality",
  instrument: "signal",
  artifacts: "quality",
  storageDisorders: "inference",
  voidingDisorders: "inference",
  coordinationDisorders: "event",
  neuroUrology: "inference"
};

const chapterScenarioDefaults = Object.fromEntries(
  Object.entries(chapterPracticeCases).map(([chapterId, cases]) => [chapterId, cases[0].id])
);

const STORAGE_KEY = "urodynamicTutorState:v1";

const defaultState = {
  chapter: "thinking",
  screen: 0,
  view: "cover",
  resumeView: "lesson",
  scenario: "thinkingQuestion",
  theme: "light",
  layers: {
    pves: true,
    pabd: true,
    pdet: true,
    flow: true,
    emg: true,
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
    waterPressure: 24,
    transducerHeight: 0,
    zeroOffset: 0,
    transmissionPattern: "continuous",
    pressurePattern: "cough",
    artifactPattern: "cough",
    storagePattern: "normal",
    voidingPattern: "efficient",
    coordinationPattern: "coordinated",
    neuroPattern: "suprapontine"
  },
  challengeIndex: {
    thinking: 0,
    physiology: 0,
    tracing: 0,
    pressurePhysics: 0,
    instrument: 0,
    artifacts: 0,
    storageDisorders: 0,
    voidingDisorders: 0,
    coordinationDisorders: 0,
    neuroUrology: 0
  },
  challengeAnswers: {
    thinking: {},
    physiology: {},
    tracing: {},
    pressurePhysics: {},
    instrument: {},
    artifacts: {},
    storageDisorders: {},
    voidingDisorders: {},
    coordinationDisorders: {},
    neuroUrology: {}
  },
  practiceAnswers: {},
  traceChallengeResults: {},
  labDemo: {
    thinking: "clinicalReasoning",
    physiology: "accommodation",
    tracing: "curveTimeline",
    pressurePhysics: "waterColumn",
    instrument: "signalMap",
    artifacts: "artifactDetective",
    storageDisorders: "storageMap",
    voidingDisorders: "pressureFlowMatrix",
    coordinationDisorders: "coordinationTimeline",
    neuroUrology: "neuroLesionMap"
  },
  traceChallenge: {
    active: false,
    scenario: null,
    position: null,
    verdict: null,
    noEvent: false
  },
  assessment: assessmentEngine.createDefaultAssessmentState(competencyModel)
};

const state = loadState();

const els = {
  mainStage: document.querySelector(".main-stage"),
  sideRail: document.querySelector(".side-rail"),
  openCover: document.getElementById("openCover"),
  courseCover: document.getElementById("courseCover"),
  startCourse: document.getElementById("startCourse"),
  coverStartLabel: document.getElementById("coverStartLabel"),
  coverResume: document.getElementById("coverResume"),
  browseChapters: document.getElementById("browseChapters"),
  stageHeader: document.getElementById("stageHeader"),
  workspaceTabs: document.getElementById("workspaceTabs"),
  courseNavToggle: document.getElementById("courseNavToggle"),
  themeToggle: document.getElementById("themeToggle"),
  themeIcon: document.getElementById("themeIcon"),
  themeLabel: document.getElementById("themeLabel"),
  courseMap: document.getElementById("courseMap"),
  chapterTitle: document.getElementById("chapterTitle"),
  stageBlock: document.getElementById("stageBlock"),
  progressLabel: document.getElementById("progressLabel"),
  progressDetail: document.getElementById("progressDetail"),
  progressFill: document.getElementById("progressFill"),
  screenKicker: document.getElementById("screenKicker"),
  screenTitle: document.getElementById("screenTitle"),
  lessonView: document.getElementById("lessonView"),
  lessonPanel: document.getElementById("lessonPanel"),
  chapterOpeningMarker: document.getElementById("chapterOpeningMarker"),
  chapterNumberLarge: document.getElementById("chapterNumberLarge"),
  screenText: document.getElementById("screenText"),
  lessonPrompt: document.getElementById("lessonPrompt"),
  chapterGovernance: document.getElementById("chapterGovernance"),
  visualDemo: document.getElementById("visualDemo"),
  challengeLab: document.getElementById("challengeLab"),
  labChapterTitle: document.getElementById("labChapterTitle"),
  labChapterDescription: document.getElementById("labChapterDescription"),
  openLab: document.getElementById("openLab"),
  openPractice: document.getElementById("openPractice"),
  keyIdeaLabel: document.getElementById("keyIdeaLabel"),
  keyIdea: document.getElementById("keyIdea"),
  screenDots: document.getElementById("screenDots"),
  prevScreen: document.getElementById("prevScreen"),
  nextScreen: document.getElementById("nextScreen"),
  mentalModelTitle: document.getElementById("mentalModelTitle"),
  contextPanel: document.getElementById("contextPanel"),
  mentalModelText: document.getElementById("mentalModelText"),
  notThis: document.getElementById("notThis"),
  isThis: document.getElementById("isThis"),
  practiceChapterLabel: document.getElementById("practiceChapterLabel"),
  scenarioTabs: document.getElementById("scenarioTabs"),
  traceTitle: document.getElementById("traceTitle"),
  traceEventCard: document.getElementById("traceEventCard"),
  traceSvg: document.getElementById("traceSvg"),
  traceTextSummary: document.getElementById("traceTextSummary"),
  traceDataTable: document.getElementById("traceDataTable"),
  emgLayerControl: document.getElementById("emgLayerControl"),
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
  resetProgress: document.getElementById("resetProgress"),
  assessmentView: document.getElementById("assessmentView"),
  masterySummary: document.getElementById("masterySummary"),
  competencyGrid: document.getElementById("competencyGrid"),
  assessmentContent: document.getElementById("assessmentContent"),
  assessmentTabs: document.querySelectorAll("[data-assessment-section]")
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
      view: ["cover", "lesson", "lab", "practice", "assessment"].includes(saved.view) ? saved.view : "cover",
      resumeView: ["lesson", "lab", "practice", "assessment"].includes(saved.resumeView)
        ? saved.resumeView
        : (["lesson", "lab", "practice", "assessment"].includes(saved.view) ? saved.view : "lesson"),
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
      practiceAnswers:
        saved.practiceAnswers && typeof saved.practiceAnswers === "object" && !Array.isArray(saved.practiceAnswers)
          ? { ...saved.practiceAnswers }
          : {},
      traceChallengeResults:
        saved.traceChallengeResults && typeof saved.traceChallengeResults === "object" && !Array.isArray(saved.traceChallengeResults)
          ? { ...saved.traceChallengeResults }
          : {},
      traceChallenge: {
        ...defaultState.traceChallenge,
        ...(saved.traceChallenge || {}),
        active: false,
        scenario: null,
        position: null,
        verdict: null,
        noEvent: false
      },
      assessment: assessmentEngine.normalizeAssessmentState(saved.assessment, competencyModel),
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
    baseState.view = "lesson";
    baseState.resumeView = "lesson";
  }

  if (Number.isInteger(screen)) {
    baseState.screen = clamp(screen - 1, 0, chapters[baseState.chapter].screens.length - 1);
  }

  if (scenario && chapterPracticeCases[baseState.chapter].some((practiceCase) => practiceCase.id === scenario)) {
    baseState.scenario = scenario;
  }

  if (["cover", "lesson", "lab", "practice", "assessment"].includes(view)) {
    baseState.view = view;
    if (view !== "cover") baseState.resumeView = view;
  } else if (!chapter && !scenario && !params.has("screen")) {
    baseState.view = "cover";
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

const pressureFlowPatterns = {
  efficient: {
    label: "Eficiente",
    headline: "Pdet baja o moderada + flujo adecuado",
    pump: "Suficiente",
    outlet: "Baja resistencia posible",
    emptying: "Eficiente",
    context: "El flujo es adecuado y el vaciamiento se completa.",
    reading: "Una presión detrusoriana baja puede ser normal si vence la resistencia existente y logra vaciar.",
    boundary: "No diagnosticar hipoactividad por la presión aislada, especialmente en mujeres.",
    pdet: "M90 52 L190 52 C220 52 235 31 275 31 L420 31 C458 31 470 52 505 52 L610 52",
    pabd: "M90 112 L610 112",
    flow: "M90 178 L205 178 C225 178 242 142 295 132 C355 120 432 142 462 178 L610 178"
  },
  resistance: {
    label: "Resistencia",
    headline: "Pdet alta + flujo bajo",
    pump: "Trabaja más",
    outlet: "Resistencia aumentada",
    emptying: "Limitado",
    context: "La presión aumenta de forma sostenida, pero se obtiene poco flujo.",
    reading: "El patrón sugiere aumento de resistencia de salida.",
    boundary: "No localiza automáticamente una causa anatómica ni reemplaza la integración clínica.",
    pdet: "M90 52 L190 52 C218 52 230 16 270 16 L455 16 C480 16 492 52 520 52 L610 52",
    pabd: "M90 112 L610 112",
    flow: "M90 178 L215 178 C238 178 250 161 290 158 L430 158 C468 160 480 178 510 178 L610 178"
  },
  underactive: {
    label: "Fuerza insuficiente",
    headline: "Pdet baja o breve + flujo bajo",
    pump: "Débil o breve",
    outlet: "No definida por este dato",
    emptying: "Prolongado o incompleto",
    context: "La contracción no logra producir o sostener un flujo eficiente.",
    reading: "El patrón sugiere fuerza o duración detrusoriana insuficiente para la resistencia presente.",
    boundary: "La presión máxima sola no resume la contractilidad.",
    pdet: "M90 52 L205 52 C225 52 232 39 260 39 L335 39 C360 39 372 52 395 52 L610 52",
    pabd: "M90 112 L610 112",
    flow: "M90 178 L222 178 C250 178 265 162 300 160 L390 160 C430 161 452 178 485 178 L610 178"
  },
  abdominal: {
    label: "Prensa abdominal",
    headline: "Pabd y Pves suben + poco cambio de Pdet",
    pump: "Participación detrusoriana incierta",
    outlet: "Debe evaluarse",
    emptying: "Impulsado por esfuerzo",
    context: "El flujo aparece mientras aumenta de forma sostenida la presión abdominal.",
    reading: "La observación defendible es participación relevante de la prensa abdominal.",
    boundary: "No convertirla automáticamente en hipoactividad, obstrucción o disinergia.",
    pdet: "M90 52 L210 52 C240 52 250 47 285 47 L440 47 C470 47 480 52 510 52 L610 52",
    pabd: "M90 112 L205 112 C230 112 242 78 275 78 L455 78 C478 78 490 112 518 112 L610 112",
    flow: "M90 178 L220 178 C238 178 247 151 270 157 C292 163 305 143 328 153 C352 164 366 145 389 154 C414 163 435 178 470 178 L610 178"
  },
  inhibited: {
    label: "No representativa",
    headline: "Sin contracción ni flujo durante el examen",
    pump: "No demostrada",
    outlet: "No evaluable",
    emptying: "No ocurrió",
    context: "El paciente refiere y demuestra una micción habitual tras retirar los catéteres.",
    reading: "La fase instrumentada no permite distinguir acontractilidad de inhibición.",
    boundary: "Declarar el límite y comparar con flujo libre, contexto y micción posterior.",
    pdet: "M90 52 L610 52",
    pabd: "M90 112 L610 112",
    flow: "M90 178 L610 178"
  }
};

const storagePatterns = {
  normal: {
    label: "Coordinado",
    headline: "Volumen progresivo con Pdet baja, sin fuga",
    dimension: "Objetivos conservados",
    observed: "El volumen aumenta, Pdet permanece baja y las sensaciones progresan sin urgencia ni pérdida.",
    allowed: "Patrón sintético compatible con almacenamiento coordinado en estas condiciones.",
    boundary: "La normalidad del registro no invalida síntomas que el estudio no reprodujo.",
    markers: [
      { x: 350, label: "deseo", tone: "calm" },
      { x: 515, label: "deseo intenso", tone: "calm" }
    ],
    pves: "M105 58 L680 52",
    pabd: "M105 116 L680 116",
    pdet: "M105 174 L680 174",
    volume: "M105 252 L680 214"
  },
  oversensitivity: {
    label: "Sensibilidad precoz",
    headline: "Sensaciones tempranas con Pdet estable",
    dimension: "Sensibilidad",
    observed: "Conciencia, deseo y urgencia aparecen temprano mientras Pdet no muestra una contracción ni una elevación progresiva.",
    allowed: "El patrón orienta primero a sobresensibilidad durante este llenado.",
    boundary: "Urgencia no equivale a hiperactividad detrusoriana; debe compararse con la experiencia habitual.",
    markers: [
      { x: 205, label: "conciencia", tone: "early" },
      { x: 285, label: "deseo", tone: "early" },
      { x: 380, label: "urgencia", tone: "warn" }
    ],
    pves: "M105 58 L680 52",
    pabd: "M105 116 L680 116",
    pdet: "M105 174 L680 174",
    volume: "M105 252 L680 214"
  },
  detrusorActivity: {
    label: "Contracción",
    headline: "Pdet aumenta durante el llenado",
    dimension: "Estabilidad detrusoriana",
    observed: "Pves y Pdet forman una contracción mientras Pabd permanece estable; el evento coincide con urgencia.",
    allowed: "Si la calidad es adecuada, el patrón demuestra actividad detrusoriana durante el llenado.",
    boundary: "La contracción puede aparecer con o sin sensación y no define por sí sola un síndrome clínico.",
    markers: [{ x: 435, label: "urgencia", tone: "warn" }],
    pves: "M105 58 L350 55 C375 55 390 22 425 22 L470 22 C500 22 512 54 540 54 L680 52",
    pabd: "M105 116 L680 116",
    pdet: "M105 174 L350 174 C375 174 390 137 425 137 L470 137 C500 137 512 174 540 174 L680 174",
    volume: "M105 252 L680 214"
  },
  lowCompliance: {
    label: "Presión progresiva",
    headline: "El volumen comienza a costar Pdet",
    dimension: "Complacencia",
    observed: "Pdet asciende de manera progresiva con el volumen, sin depender de un pico fásico aislado.",
    allowed: "El patrón obliga a evaluar complacencia y validez de los puntos presión-volumen.",
    boundary: "Velocidad de llenado, deriva y Pabd inestable pueden fabricar una falsa pendiente.",
    markers: [{ x: 500, label: "presión creciente", tone: "warn" }],
    pves: "M105 58 L215 58 C300 57 410 42 535 22 L680 18",
    pabd: "M105 116 L680 116",
    pdet: "M105 174 L215 174 C300 173 410 157 535 137 L680 132",
    volume: "M105 252 L680 214"
  },
  stressLeak: {
    label: "Fuga con esfuerzo",
    headline: "Pabd y Pves suben; Pdet permanece estable",
    dimension: "Competencia de salida",
    observed: "Una maniobra abdominal bien transmitida coincide con una fuga observada sin contracción detrusoriana.",
    allowed: "La secuencia es compatible con incontinencia urodinámica de esfuerzo en esas condiciones.",
    boundary: "La presión de fuga depende de volumen, posición, maniobra y técnica; no gradúa por sí sola la severidad.",
    markers: [{ x: 430, label: "tos + fuga", tone: "leak" }],
    leakX: 448,
    pves: "M105 58 L390 55 L420 20 L450 55 L680 52",
    pabd: "M105 116 L390 116 L420 80 L450 116 L680 116",
    pdet: "M105 174 L680 174",
    volume: "M105 252 L680 214"
  },
  pressureLeak: {
    label: "Fuga a presión basal",
    headline: "Pdet progresa con el volumen y luego aparece fuga",
    dimension: "Seguridad + salida",
    observed: "La presión basal aumenta gradualmente hasta que aparece pérdida, sin un esfuerzo abdominal ni una contracción fásica que la explique.",
    allowed: "El patrón orienta a almacenamiento de alta presión con fuga y exige valorar seguridad del reservorio.",
    boundary: "No debe confundirse con presión abdominal de fuga ni con una contracción detrusoriana aislada.",
    markers: [{ x: 545, label: "fuga", tone: "leak" }],
    leakX: 560,
    pves: "M105 58 L220 58 C315 58 425 42 540 20 L680 19",
    pabd: "M105 116 L680 116",
    pdet: "M105 174 L220 174 C315 174 425 157 540 136 L680 135",
    volume: "M105 252 L680 214"
  }
};

const coordinationPatterns = {
  coordinated: {
    label: "Coordinado",
    headline: "Pdet útil + salida relajada + flujo continuo",
    context: "Micción representativa sin enfermedad neurológica relevante.",
    outlet: "Se relaja antes del flujo y permanece abierta",
    outletClass: "open",
    observed: "La contracción detrusoriana se transforma en flujo sin reactivación perineal relevante.",
    allowed: "Vaciado coordinado en este registro sintético.",
    missing: "La eficiencia final todavía debe relacionarse con volumen y residuo.",
    pdet: "M100 58 L205 58 C225 58 238 32 270 32 L490 32 C520 32 530 58 560 58 L665 58",
    pabd: "M100 120 L665 120",
    flow: "M100 184 L220 184 C245 184 260 148 305 143 C365 136 450 146 485 184 L665 184",
    emg: "M100 246 L205 246 C220 246 230 253 250 253 L510 253 C530 253 540 246 560 246 L665 246"
  },
  delayed: {
    label: "Apertura tardía",
    headline: "Pdet comienza y la salida cede después",
    context: "La demora es mayor que un simple desfase técnico en este ejemplo docente.",
    outlet: "Permanece activa al inicio y luego se relaja",
    outletClass: "delayed",
    observed: "Pdet aumenta antes del flujo; el EMG desciende cuando finalmente aparece el flujo.",
    allowed: "Demora de apertura compatible con relajación tardía si las señales se corroboran.",
    missing: "Un retraso breve puede ser fisiológico; se necesita magnitud, calidad y apoyo de EMG o imagen.",
    pdet: "M100 58 L195 58 C218 58 230 29 265 29 L500 29 C525 29 535 58 565 58 L665 58",
    pabd: "M100 120 L665 120",
    flow: "M100 184 L305 184 C330 184 345 154 382 148 C430 142 475 156 500 184 L665 184",
    emg: "M100 246 L195 246 C210 246 220 215 245 215 L295 215 C315 215 325 250 350 250 L665 250"
  },
  dysfunctional: {
    label: "Relajación variable",
    headline: "Pdet sostenida + flujo y salida intermitentes",
    context: "No existe una enfermedad neurológica demostrada.",
    outlet: "Se abre y vuelve a activarse durante el vaciado",
    outletClass: "variable",
    observed: "Los cortes del flujo coinciden con reaparición de actividad perineal mientras Pdet continúa.",
    allowed: "Posible vaciado disfuncional si se excluyen prensa, artefacto y resistencia anatómica.",
    missing: "La curva intermitente sola no demuestra el mecanismo; primero debe describirse la relación.",
    pdet: "M100 58 L195 58 C220 58 230 31 265 31 L505 31 C530 31 540 58 565 58 L665 58",
    pabd: "M100 120 L665 120",
    flow: "M100 184 L225 184 Q245 143 270 184 Q292 143 317 184 Q339 143 364 184 Q386 143 411 184 Q433 147 458 184 L665 184",
    emg: "M100 246 L215 246 Q238 210 260 246 Q282 210 304 246 Q326 210 348 246 Q370 210 392 246 Q414 210 436 246 L665 246"
  },
  dyssynergia: {
    label: "Contexto neurológico",
    headline: "Pdet y salida activas de manera simultánea",
    context: "Existe una alteración neurológica relevante para el vaciado.",
    outlet: "Permanece activa mientras el detrusor intenta vaciar",
    outletClass: "closed",
    observed: "Pdet elevada coincide con actividad perineal persistente y flujo limitado o intermitente.",
    allowed: "Hallazgos compatibles con disinergia detrusor-esfínter en este contexto.",
    missing: "El EMG y la curva aislados no bastan; la imagen puede ayudar a localizar el cierre.",
    pdet: "M100 58 L190 58 C215 58 225 18 260 18 L510 18 C535 18 545 58 570 58 L665 58",
    pabd: "M100 120 L665 120",
    flow: "M100 184 L230 184 Q252 164 275 184 Q297 164 320 184 Q342 164 365 184 Q387 164 410 184 Q432 167 455 184 L665 184",
    emg: "M100 246 L205 246 Q225 203 245 230 Q265 203 285 230 Q305 203 325 230 Q345 203 365 230 Q385 203 405 230 Q425 203 445 230 L505 225 C530 225 545 246 570 246 L665 246"
  },
  abdominalMimic: {
    label: "Prensa imitadora",
    headline: "Pabd y flujo por pulsos + Pdet no sostenida",
    context: "El paciente realiza pujos repetidos durante el intento de vaciado.",
    outlet: "No puede inferirse solo por la forma del flujo",
    outletClass: "uncertain",
    observed: "Cada pulso de flujo coincide con Pabd; el EMG también cambia con esfuerzo o movimiento.",
    allowed: "Micción con participación abdominal que imita una alteración de coordinación.",
    missing: "Debe determinarse si la salida ofrece resistencia y si existe una contracción detrusoriana útil.",
    pdet: "M100 58 L225 58 Q248 51 270 58 Q292 51 314 58 Q336 51 358 58 Q380 51 402 58 Q424 51 446 58 L665 58",
    pabd: "M100 120 L220 120 Q243 83 266 120 Q289 83 312 120 Q335 83 358 120 Q381 83 404 120 Q427 83 450 120 L665 120",
    flow: "M100 184 L225 184 Q248 151 271 184 Q294 151 317 184 Q340 151 363 184 Q386 151 409 184 Q432 151 455 184 L665 184",
    emg: "M100 246 L220 246 Q243 222 266 246 Q289 222 312 246 Q335 222 358 246 Q381 222 404 246 Q427 222 450 246 L665 246"
  }
};

const neuroLesionPatterns = {
  suprapontine: {
    label: "Suprapontina",
    active: ["brain"],
    hypothesis: "Pérdida de inhibición con coordinación habitualmente conservada",
    storage: "Hiperactividad detrusoriana neurogénica, urgencia o incontinencia pueden aparecer.",
    voiding: "La salida suele acompañar la contracción, salvo causas concomitantes.",
    priority: "No atribuir residuo, retención o incontinencia funcional únicamente a la lesión cerebral.",
    caveat: "Patrón clásico, no regla individual. Cognición, movilidad, fármacos y obstrucción pueden modificarlo."
  },
  suprasacral: {
    label: "Pontina / suprasacra",
    active: ["pons", "cord"],
    hypothesis: "Contracción refleja conservada con posible pérdida de coordinación",
    storage: "Hiperactividad, baja complacencia y presión elevada son posibles.",
    voiding: "Puede existir disinergia, flujo limitado, presión alta y residuo.",
    priority: "Evaluar seguridad de almacenamiento y relación entre detrusor y salida.",
    caveat: "La disinergia debe demostrarse; no se deduce solo del nivel medular."
  },
  spinalShock: {
    label: "Shock medular",
    active: ["cord"],
    hypothesis: "Pérdida refleja transitoria después de una lesión aguda",
    storage: "Sensibilidad reducida o ausente y retención indolora son esperables en esta fase.",
    voiding: "Puede no observarse contracción ni flujo; el patrón puede cambiar al reaparecer reflejos.",
    priority: "Registrar el tiempo desde la lesión y planificar reevaluación.",
    caveat: "Una fase aguda no establece el comportamiento definitivo de la vejiga."
  },
  sacralPeripheral: {
    label: "Sacra / periférica",
    active: ["sacral", "nerves"],
    hypothesis: "Falla aferente o eferente con compromiso variable de bomba y cierre",
    storage: "Sensibilidad reducida, gran capacidad o incompetencia esfinteriana pueden coexistir.",
    voiding: "Hipoactividad, acontractilidad, micción abdominal, residuo o retención son posibles.",
    priority: "Evaluar sensibilidad, contractilidad y competencia de salida por separado.",
    caveat: "Retención e incontinencia no son contradictorias cuando fallan bomba y esfínter."
  },
  mixed: {
    label: "Mixta / multifocal",
    active: ["brain", "pons", "cord", "sacral", "nerves"],
    hypothesis: "Más de un circuito puede estar comprometido",
    storage: "Actividad detrusoriana, sensibilidad y complacencia pueden combinar alteraciones.",
    voiding: "Coordinación, contractilidad y resistencia pueden producir un patrón mixto.",
    priority: "Describir cada fase sin forzar una etiqueta única.",
    caveat: "Esclerosis múltiple, cono medular, diabetes y otras enfermedades pueden variar con el tiempo."
  }
};

const clinicalReasoningStages = {
  question: {
    label: "Pregunta",
    title: "¿Qué queremos observar?",
    text: "La paciente refiere pérdida de orina al toser. El relato debe convertirse en una relación que el examen pueda intentar reproducir.",
    evidence: ["Síntoma: pérdida al toser", "Fenómeno buscado: fuga asociada a aumento abdominal"],
    result: "Pregunta funcional: ¿aparece fuga durante una tos registrada sin contracción detrusoriana que la explique?",
    boundary: "La pregunta orienta el estudio; todavía no establece un diagnóstico."
  },
  phase: {
    label: "Fase",
    title: "¿Cuándo y en qué condiciones se buscó?",
    text: "La maniobra debe ubicarse dentro del ciclo y documentarse con volumen, posición y condiciones capaces de reproducir el síntoma.",
    evidence: ["Fase de llenado", "Volumen y posición registrados", "Tos indicada como maniobra"],
    result: "El fenómeno fue buscado durante almacenamiento bajo condiciones conocidas.",
    boundary: "Una condición controlada puede no reproducir la situación cotidiana."
  },
  quality: {
    label: "Calidad",
    title: "¿Podemos confiar en las señales?",
    text: "Antes de leer fisiología se comprueba que Pves y Pabd transmitan la tos y que las líneas de base sean coherentes.",
    evidence: ["Pves responde", "Pabd responde", "Pdet no fabrica un pico discordante"],
    result: "El segmento es técnicamente interpretable para relacionar maniobra y fuga.",
    boundary: "Si Pabd falla, Pdet también pierde confiabilidad."
  },
  signal: {
    label: "Señal",
    title: "¿Qué registró el instrumento?",
    text: "Se describen los datos antes de ponerles nombre: Pves y Pabd aumentan de manera concordante durante la tos y Pdet permanece relativamente estable.",
    evidence: ["Aumento de Pves", "Aumento de Pabd", "Pdet sin contracción independiente"],
    result: "La presión registrada corresponde a un evento abdominal transmitido.",
    boundary: "La presión por sí sola todavía no demuestra el mecanismo de la fuga."
  },
  event: {
    label: "Evento",
    title: "¿Qué ocurrió al mismo tiempo?",
    text: "La fuga debe ser observada y alinearse temporalmente con la maniobra. Una señal aislada en el canal de flujo no basta.",
    evidence: ["Marcador de tos", "Fuga observada", "Coincidencia temporal"],
    result: "La pérdida ocurrió durante el aumento abdominal registrado.",
    boundary: "Debe diferenciarse una fuga real de movimiento, goteo o registro espurio."
  },
  inference: {
    label: "Inferencia",
    title: "¿Qué relación funcional explica mejor los datos?",
    text: "La combinación de fuga, aumento abdominal y ausencia de contracción detrusoriana apoya una falla del mecanismo de cierre frente al esfuerzo.",
    evidence: ["Fuga con maniobra", "Pabd aumenta", "Sin aumento independiente de Pdet"],
    result: "Hallazgo compatible con incontinencia urodinámica de esfuerzo durante esa maniobra.",
    boundary: "El hallazgo funcional no explica por sí solo la anatomía ni toda la gravedad clínica."
  },
  limit: {
    label: "Límite",
    title: "¿Qué no permite afirmar este segmento?",
    text: "El trazado no resume la frecuencia cotidiana, la repercusión, la anatomía del soporte uretral ni todos los escenarios en que la paciente pierde.",
    evidence: ["Una condición de prueba", "Una maniobra reproducida", "Contexto clínico aún necesario"],
    result: "La conclusión queda limitada a lo demostrado bajo las condiciones registradas.",
    boundary: "No debe extrapolarse automáticamente a toda la historia ni al tratamiento."
  },
  response: {
    label: "Respuesta",
    title: "¿Cómo se responde la pregunta original?",
    text: "La conclusión traduce la secuencia completa a una respuesta funcional breve, útil y proporcional a la evidencia.",
    evidence: ["Pregunta respondida", "Señal confiable", "Inferencia y límite explícitos"],
    result: "Durante el llenado se observó fuga asociada a tos, con aumento abdominal transmitido y sin contracción detrusoriana concomitante.",
    boundary: "La integración clínica final sigue requiriendo historia, examen y objetivo terapéutico."
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

const transmissionPatterns = {
  continuous: {
    label: "Continua",
    status: "Transmisión fiel",
    response: "rápida y completa",
    issue: "Columna líquida continua y línea permeable.",
    reading: "El transductor reproduce el evento breve con una forma y amplitud coherentes.",
    path: "M8 72 L76 72 L88 20 L100 72 L272 72"
  },
  bubble: {
    label: "Burbuja",
    status: "Señal amortiguada",
    response: "menor y más lenta",
    issue: "El aire añade compresibilidad a la línea.",
    reading: "El mismo evento llega deformado; la diferencia entre canales puede fabricar una Pdet falsa.",
    path: "M8 72 L92 72 C104 72 110 46 128 45 C147 45 154 72 170 72 L272 72"
  },
  kink: {
    label: "Acodamiento",
    status: "Transmisión limitada",
    response: "pequeña y retrasada",
    issue: "Un estrechamiento aumenta la resistencia de la línea.",
    reading: "La respuesta puede retrasarse o casi desaparecer aunque la presión del paciente sí haya cambiado.",
    path: "M8 72 L124 72 C136 72 142 58 155 58 C168 58 176 72 190 72 L272 72"
  },
  disconnected: {
    label: "Desconectada",
    status: "Sin transmisión útil",
    response: "ausente",
    issue: "La continuidad hidráulica se perdió.",
    reading: "Una línea plana no demuestra estabilidad fisiológica si el canal está desconectado.",
    path: "M8 72 L272 72"
  }
};

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

function renderStorageMapDemo(demo) {
  const patternKey = storagePatterns[state.demoControls.storagePattern]
    ? state.demoControls.storagePattern
    : "normal";
  const pattern = storagePatterns[patternKey];
  const markerMarkup = pattern.markers
    .map(
      (marker) => `
        <line class="storage-event-line ${marker.tone}" x1="${marker.x}" y1="28" x2="${marker.x}" y2="263" />
        <text class="storage-event-label ${marker.tone}" x="${marker.x + 5}" y="20">${marker.label}</text>
      `
    )
    .join("");
  const leakMarkup = pattern.leakX
    ? `<path class="storage-leak-drop" d="M${pattern.leakX} 185 C${pattern.leakX - 9} 197 ${pattern.leakX - 13} 205 ${pattern.leakX - 13} 213 C${pattern.leakX - 13} 225 ${pattern.leakX - 2} 232 ${pattern.leakX + 8} 225 C${pattern.leakX + 19} 216 ${pattern.leakX + 15} 201 ${pattern.leakX} 185 Z" />`
    : "";

  return `
    <div class="visual-demo-head">
      <div>
        <p class="overline">Laboratorio de almacenamiento</p>
        <h4>${demo.title}</h4>
      </div>
      <span>${demo.subtitle}</span>
    </div>
    <div class="demo-tabs storage-map-tabs" aria-label="Patrones funcionales de almacenamiento">
      ${Object.entries(storagePatterns)
        .map(([key, item]) => `<button type="button" class="${key === patternKey ? "active" : ""}" aria-pressed="${key === patternKey}" data-storage-pattern="${key}">${item.label}</button>`)
        .join("")}
    </div>
    <div class="storage-map" aria-live="polite">
      <div class="storage-map-figure">
        <svg viewBox="0 0 720 282" role="img" aria-labelledby="storageMapTitle storageMapDesc">
          <title id="storageMapTitle">${pattern.headline}</title>
          <desc id="storageMapDesc">Trazado sintético cualitativo de Pves, Pabd, Pdet, volumen, sensaciones y fuga durante el llenado.</desc>
          <rect class="storage-map-window" x="175" y="30" width="485" height="234" rx="8" />
          ${markerMarkup}
          <line class="storage-map-grid" x1="96" y1="58" x2="688" y2="58" />
          <line class="storage-map-grid" x1="96" y1="116" x2="688" y2="116" />
          <line class="storage-map-grid" x1="96" y1="174" x2="688" y2="174" />
          <line class="storage-map-grid" x1="96" y1="242" x2="688" y2="242" />
          <text class="storage-map-label pves" x="16" y="63">Pves</text>
          <text class="storage-map-label pabd" x="16" y="121">Pabd</text>
          <text class="storage-map-label pdet" x="16" y="179">Pdet</text>
          <text class="storage-map-label volume" x="16" y="247">Volumen</text>
          <path class="storage-map-path pves" d="${pattern.pves}" />
          <path class="storage-map-path pabd" d="${pattern.pabd}" />
          <path class="storage-map-path pdet" d="${pattern.pdet}" />
          <path class="storage-map-path volume" d="${pattern.volume}" />
          ${leakMarkup}
          <text class="storage-map-phase" x="108" y="277">llenado progresivo</text>
        </svg>
      </div>
      <div class="storage-map-summary">
        <p class="overline">Dimensión principal</p>
        <span>${pattern.dimension}</span>
        <h5>${pattern.headline}</h5>
        <div><strong>Qué se observa</strong><p>${pattern.observed}</p></div>
        <div><strong>Qué permite decir</strong><p>${pattern.allowed}</p></div>
        <div><strong>Límite</strong><p>${pattern.boundary}</p></div>
      </div>
    </div>
    <div class="storage-map-rule">
      <span>Rutina de cuatro preguntas</span>
      <strong>¿Presión baja? · ¿Detrusor estable? · ¿Salida competente? · ¿Sensibilidad coherente?</strong>
      <p>La capacidad es el resultado de esta interacción; no la explicación automática del trastorno.</p>
    </div>
  `;
}

function renderPressureFlowMatrixDemo(demo) {
  const patternKey = pressureFlowPatterns[state.demoControls.voidingPattern]
    ? state.demoControls.voidingPattern
    : "efficient";
  const pattern = pressureFlowPatterns[patternKey];

  return `
    <div class="visual-demo-head">
      <div>
        <p class="overline">Laboratorio de vaciado</p>
        <h4>${demo.title}</h4>
      </div>
      <span>${demo.subtitle}</span>
    </div>
    <div class="demo-tabs pressure-flow-tabs" aria-label="Patrones cualitativos de presión y flujo">
      ${Object.entries(pressureFlowPatterns)
        .map(([key, item]) => `<button type="button" class="${key === patternKey ? "active" : ""}" aria-pressed="${key === patternKey}" data-voiding-pattern="${key}">${item.label}</button>`)
        .join("")}
    </div>
    <div class="pressure-flow-matrix" aria-live="polite">
      <div class="pressure-flow-figure">
        <svg viewBox="0 0 640 222" role="img" aria-labelledby="pressureFlowTitle pressureFlowDesc">
          <title id="pressureFlowTitle">${pattern.headline}</title>
          <desc id="pressureFlowDesc">Comparación sintética de presión detrusoriana, presión abdominal y flujo.</desc>
          <line class="pressure-flow-grid" x1="80" y1="52" x2="620" y2="52" />
          <line class="pressure-flow-grid" x1="80" y1="112" x2="620" y2="112" />
          <line class="pressure-flow-grid" x1="80" y1="178" x2="620" y2="178" />
          <rect class="pressure-flow-window" x="195" y="8" width="325" height="190" rx="8" />
          <text class="pressure-flow-label pdet" x="14" y="57">Pdet</text>
          <text class="pressure-flow-label pabd" x="14" y="117">Pabd</text>
          <text class="pressure-flow-label flow" x="14" y="183">Flujo</text>
          <path class="pressure-flow-path pdet" d="${pattern.pdet}" />
          <path class="pressure-flow-path pabd" d="${pattern.pabd}" />
          <path class="pressure-flow-path flow" d="${pattern.flow}" />
          <text class="pressure-flow-phase" x="206" y="216">intento de vaciado</text>
        </svg>
      </div>
      <div class="pressure-flow-summary">
        <p class="overline">Relación seleccionada</p>
        <h5>${pattern.headline}</h5>
        <dl>
          <div><dt>Bomba</dt><dd>${pattern.pump}</dd></div>
          <div><dt>Salida</dt><dd>${pattern.outlet}</dd></div>
          <div><dt>Eficiencia</dt><dd>${pattern.emptying}</dd></div>
        </dl>
      </div>
    </div>
    <div class="demo-reading pressure-flow-reading">
      <div><span>Contexto</span><strong>${pattern.context}</strong></div>
      <p>${pattern.reading}</p>
      <small>${pattern.boundary}</small>
    </div>
    <div class="male-index-note">
      <span>Índices convencionales en varones</span>
      <strong>BOOI = PdetQmax − 2 × Qmax · BCI = PdetQmax + 5 × Qmax</strong>
      <p>Son apoyos contextuales. No sustituyen la curva completa ni deben trasladarse automáticamente a mujeres.</p>
    </div>
  `;
}

function renderCoordinationTimelineDemo(demo) {
  const patternKey = coordinationPatterns[state.demoControls.coordinationPattern]
    ? state.demoControls.coordinationPattern
    : "coordinated";
  const pattern = coordinationPatterns[patternKey];

  return `
    <div class="visual-demo-head">
      <div>
        <p class="overline">Laboratorio de coordinación</p>
        <h4>${demo.title}</h4>
      </div>
      <span>${demo.subtitle}</span>
    </div>
    <div class="demo-tabs coordination-tabs" aria-label="Relaciones temporales entre detrusor y salida">
      ${Object.entries(coordinationPatterns)
        .map(([key, item]) => `<button type="button" class="${key === patternKey ? "active" : ""}" aria-pressed="${key === patternKey}" data-coordination-pattern="${key}">${item.label}</button>`)
        .join("")}
    </div>
    <div class="coordination-lab" aria-live="polite">
      <div class="coordination-figure">
        <div class="outlet-state ${pattern.outletClass}">
          <span>Mecanismo de salida</span>
          <strong>${pattern.outlet}</strong>
        </div>
        <svg viewBox="0 0 700 286" role="img" aria-labelledby="coordinationTitle coordinationDesc">
          <title id="coordinationTitle">${pattern.headline}</title>
          <desc id="coordinationDesc">Trazado sintético cualitativo de presión detrusoriana, presión abdominal, flujo y actividad electromiográfica perineal.</desc>
          <rect class="coordination-window" x="195" y="8" width="375" height="256" rx="8" />
          <line class="coordination-grid" x1="92" y1="58" x2="675" y2="58" />
          <line class="coordination-grid" x1="92" y1="120" x2="675" y2="120" />
          <line class="coordination-grid" x1="92" y1="184" x2="675" y2="184" />
          <line class="coordination-grid" x1="92" y1="246" x2="675" y2="246" />
          <text class="coordination-label pdet" x="14" y="63">Pdet</text>
          <text class="coordination-label pabd" x="14" y="125">Pabd</text>
          <text class="coordination-label flow" x="14" y="189">Flujo</text>
          <text class="coordination-label emg" x="14" y="251">EMG</text>
          <path class="coordination-path pdet" d="${pattern.pdet}" />
          <path class="coordination-path pabd" d="${pattern.pabd}" />
          <path class="coordination-path flow" d="${pattern.flow}" />
          <path class="coordination-path emg" d="${pattern.emg}" />
        </svg>
        <p class="coordination-context"><span>Contexto</span>${pattern.context}</p>
      </div>
      <div class="coordination-reasoning">
        <p class="overline">Relación seleccionada</p>
        <h5>${pattern.headline}</h5>
        <div><span>Qué se observa</span><p>${pattern.observed}</p></div>
        <div><span>Qué permite decir</span><p>${pattern.allowed}</p></div>
        <div><span>Qué todavía falta</span><p>${pattern.missing}</p></div>
      </div>
    </div>
    <div class="coordination-rule">
      <strong>Regla terminológica</strong>
      <p><b>Disinergia detrusor-esfínter:</b> alteración neurológica relevante. <b>Vaciado disfuncional:</b> relajación inadecuada sin enfermedad neurológica demostrada.</p>
      <small>El EMG registra actividad eléctrica cercana; no mide directamente el cierre uretral.</small>
    </div>
  `;
}

function renderNeuroLesionMapDemo(demo) {
  const patternKey = neuroLesionPatterns[state.demoControls.neuroPattern]
    ? state.demoControls.neuroPattern
    : "suprapontine";
  const pattern = neuroLesionPatterns[patternKey];
  const activeClass = (zone) => pattern.active.includes(zone) ? "active" : "";

  return `
    <div class="visual-demo-head">
      <div>
        <p class="overline">Mapa neuro-urológico</p>
        <h4>${demo.title}</h4>
      </div>
      <span>${demo.subtitle}</span>
    </div>
    <div class="demo-tabs neuro-map-tabs" aria-label="Nivel neurológico orientador">
      ${Object.entries(neuroLesionPatterns)
        .map(([key, item]) => `<button type="button" class="${key === patternKey ? "active" : ""}" aria-pressed="${key === patternKey}" data-neuro-pattern="${key}">${item.label}</button>`)
        .join("")}
    </div>
    <div class="neuro-map" aria-live="polite">
      <div class="neuro-map-figure">
        <svg viewBox="0 0 360 470" role="img" aria-labelledby="neuroMapTitle neuroMapDesc">
          <title id="neuroMapTitle">${pattern.label}: ${pattern.hypothesis}</title>
          <desc id="neuroMapDesc">Esquema docente de cerebro, puente, médula, segmentos sacros y nervios periféricos. Las zonas resaltadas corresponden a la localización seleccionada.</desc>
          <path class="neuro-body-outline" d="M180 24 C128 24 96 58 98 104 C99 135 115 153 127 169 L127 345 C127 375 143 401 164 414 L164 449 M180 24 C232 24 264 58 262 104 C261 135 245 153 233 169 L233 345 C233 375 217 401 196 414 L196 449" />
          <g class="neuro-zone brain ${activeClass("brain")}">
            <path d="M132 71 C138 46 171 39 187 53 C205 40 233 54 232 78 C249 90 241 119 219 123 C210 143 178 143 166 128 C143 135 120 116 128 96 C117 87 121 75 132 71 Z" />
            <text x="274" y="88">Cerebro</text>
            <line x1="230" y1="84" x2="266" y2="84" />
          </g>
          <g class="neuro-zone pons ${activeClass("pons")}">
            <rect x="166" y="141" width="29" height="24" rx="10" />
            <text x="274" y="158">Puente</text>
            <line x1="195" y1="153" x2="266" y2="153" />
          </g>
          <g class="neuro-zone cord ${activeClass("cord")}">
            <path d="M172 166 C169 213 170 274 173 332 L188 332 C191 274 191 213 188 166 Z" />
            <line class="t6-marker" x1="153" y1="222" x2="205" y2="222" />
            <text class="t6-label" x="213" y="226">T6</text>
            <text x="274" y="266">Médula</text>
            <line x1="190" y1="261" x2="266" y2="261" />
          </g>
          <g class="neuro-zone sacral ${activeClass("sacral")}">
            <path d="M158 332 Q180 350 202 332 L196 378 Q180 394 164 378 Z" />
            <text x="274" y="360">Sacro</text>
            <line x1="202" y1="356" x2="266" y2="356" />
          </g>
          <g class="neuro-zone nerves ${activeClass("nerves")}">
            <path d="M172 378 C155 399 142 416 128 446 M180 382 L180 451 M189 378 C205 399 219 416 233 446" />
            <text x="274" y="428">Nervios</text>
            <line x1="232" y1="424" x2="266" y2="424" />
          </g>
        </svg>
        <div class="neuro-map-legend">
          <span><i></i> Zona orientadora</span>
          <small>Esquema funcional, no neuroanatomía a escala.</small>
        </div>
      </div>
      <div class="neuro-map-reasoning">
        <p class="overline">Hipótesis seleccionada</p>
        <h5>${pattern.hypothesis}</h5>
        <div><span>Almacenamiento</span><p>${pattern.storage}</p></div>
        <div><span>Vaciado</span><p>${pattern.voiding}</p></div>
        <div class="priority"><span>Qué no olvidar</span><p>${pattern.priority}</p></div>
        <small>${pattern.caveat}</small>
      </div>
    </div>
    <div class="neuro-safety-strip">
      <div><span>Lesión T6 o superior</span><strong>Riesgo de disreflexia autonómica</strong></div>
      <p>En pacientes en riesgo, presión arterial y frecuencia cardíaca deben monitorizarse durante urodinamia y otros procedimientos invasivos.</p>
    </div>
    <div class="neuro-map-rule">
      <strong>Regla docente</strong>
      <p>Primero predice con el nivel. Después compara almacenamiento, vaciado, presión y coordinación con el registro real.</p>
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

function renderWaterColumnDemo(demo) {
  const pressure = clamp(state.demoControls.waterPressure, 0, 50);
  const columnHeight = 8 + pressure * 1.62;
  const ticks = [50, 40, 30, 20, 10, 0]
    .map((tick) => `<span style="--tick-y:${100 - tick * 2}%"><b>${tick}</b><i></i></span>`)
    .join("");

  return `
    <div class="visual-demo-head">
      <div>
        <p class="overline">Laboratorio de física</p>
        <h4>${demo.title}</h4>
      </div>
      <span>${demo.subtitle}</span>
    </div>
    <div class="water-column-lab" aria-live="polite">
      <div class="pressure-vessel">
        <span>Presión aplicada</span>
        <div class="vessel-shape" style="--vessel-pressure:${pressure / 50}">
          <i></i>
        </div>
        <strong>${pressure} cmH2O</strong>
      </div>
      <div class="hydraulic-link" aria-hidden="true">
        <span></span>
        <i></i>
        <small>columna líquida continua</small>
      </div>
      <div class="manometer-assembly">
        <div class="manometer-scale">${ticks}</div>
        <div class="manometer-tube">
          <i style="height:${columnHeight}%"></i>
        </div>
        <div class="manometer-reading">
          <span>Altura equivalente</span>
          <strong>${pressure} cm</strong>
        </div>
      </div>
    </div>
    <label class="physics-range">
      <span>Presión aplicada <b>${pressure} cmH2O</b></span>
      <input type="range" min="0" max="50" value="${pressure}" data-demo-control="waterPressure" />
    </label>
    <div class="physics-principle">
      <strong>Relación docente</strong>
      <p>Una presión de ${pressure} cmH2O puede sostener una columna de agua de ${pressure} cm. El transductor moderno convierte esa presión en señal eléctrica, pero conserva la misma unidad.</p>
    </div>
  `;
}

function renderZeroAndLevelDemo(demo) {
  const height = clamp(state.demoControls.transducerHeight, -30, 30);
  const zeroOffset = clamp(state.demoControls.zeroOffset, -15, 15);
  const hydrostaticOffset = -height;
  const measuredOffset = hydrostaticOffset + zeroOffset;
  const sensorTop = clamp(50 - height * 1.15, 12, 88);
  const heightDescription = height === 0
    ? "al nivel de la referencia"
    : `${Math.abs(height)} cm ${height > 0 ? "por encima" : "por debajo"}`;
  const status = Math.abs(height) <= 1 && zeroOffset === 0
    ? "Referencia correcta"
    : measuredOffset > 0
      ? `Lectura artificial +${measuredOffset} cmH2O`
      : measuredOffset < 0
        ? `Lectura artificial ${measuredOffset} cmH2O`
        : "Los errores se cancelan por azar";

  return `
    <div class="visual-demo-head">
      <div>
        <p class="overline">Laboratorio de referencia</p>
        <h4>${demo.title}</h4>
      </div>
      <span>${demo.subtitle}</span>
    </div>
    <div class="leveling-lab" aria-live="polite">
      <div class="leveling-stage" style="--sensor-top:${sensorTop}%">
        <div class="body-reference" aria-hidden="true">
          <div class="bladder-symbol"><i></i></div>
          <span class="pubic-reference">borde superior de la sínfisis del pubis</span>
          <span class="reference-line"></span>
        </div>
        <div class="transducer-symbol">
          <i></i>
          <strong>Transductor</strong>
          <span>${heightDescription}</span>
        </div>
        <span class="level-connector" aria-hidden="true"></span>
      </div>
      <div class="leveling-readout">
        <span>Desplazamiento por altura</span>
        <strong>${hydrostaticOffset > 0 ? "+" : ""}${hydrostaticOffset} cmH2O</strong>
        <span>Error añadido al hacer cero</span>
        <strong>${zeroOffset > 0 ? "+" : ""}${zeroOffset} cmH2O</strong>
        <div><span>Resultado cualitativo</span><b>${status}</b></div>
      </div>
    </div>
    <div class="physics-controls">
      <label class="physics-range">
        <span>Altura del transductor <b>${heightDescription}</b></span>
        <input type="range" min="-30" max="30" value="${height}" data-demo-control="transducerHeight" />
      </label>
      <label class="physics-range">
        <span>Error de cero <b>${zeroOffset > 0 ? "+" : ""}${zeroOffset} cmH2O</b></span>
        <input type="range" min="-15" max="15" value="${zeroOffset}" data-demo-control="zeroOffset" />
      </label>
    </div>
    <div class="physics-principle warning">
      <strong>Cero y nivel no son lo mismo</strong>
      <p>El cero define la referencia atmosférica. La nivelación controla la presión hidrostática añadida por la altura. Deben verificarse por separado.</p>
    </div>
  `;
}

function renderPressureTransmissionDemo(demo) {
  const patternKey = transmissionPatterns[state.demoControls.transmissionPattern]
    ? state.demoControls.transmissionPattern
    : "continuous";
  const pattern = transmissionPatterns[patternKey];

  return `
    <div class="visual-demo-head">
      <div>
        <p class="overline">Laboratorio de transmisión</p>
        <h4>${demo.title}</h4>
      </div>
      <span>${demo.subtitle}</span>
    </div>
    <div class="demo-tabs" aria-label="Condición de la línea">
      ${Object.entries(transmissionPatterns)
        .map(([key, item]) => `<button type="button" class="${key === patternKey ? "active" : ""}" aria-pressed="${key === patternKey}" data-transmission-pattern="${key}">${item.label}</button>`)
        .join("")}
    </div>
    <div class="transmission-lab ${patternKey}" aria-live="polite">
      <div class="transmission-source">
        <span>Evento en el paciente</span>
        <strong>Tos breve</strong>
        <i></i>
      </div>
      <div class="transmission-line">
        <span></span>
        <i class="bubble"></i>
        <i class="kink"></i>
        <b class="break"></b>
        <small>${pattern.issue}</small>
      </div>
      <div class="transducer-box">
        <span>Transductor</span>
        <i></i>
      </div>
      <div class="transmission-monitor">
        <span>Señal recibida</span>
        <svg viewBox="0 0 280 92" role="img" aria-label="${pattern.status}">
          <line x1="8" y1="72" x2="272" y2="72"></line>
          <path d="${pattern.path}"></path>
        </svg>
      </div>
    </div>
    <div class="transmission-reading">
      <div><span>Estado</span><strong>${pattern.status}</strong></div>
      <div><span>Respuesta</span><strong>${pattern.response}</strong></div>
      <p>${pattern.reading}</p>
    </div>
    <div class="physics-principle">
      <strong>Regla de control</strong>
      <p>Una señal plana, pequeña o lenta solo puede interpretarse después de demostrar que el canal transmite correctamente.</p>
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

  els.visualDemo.querySelectorAll("[data-transmission-pattern]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!transmissionPatterns[button.dataset.transmissionPattern]) return;
      state.demoControls.transmissionPattern = button.dataset.transmissionPattern;
      renderVisualDemo("pressureTransmission");
      saveState();
    });
  });

  els.visualDemo.querySelectorAll("[data-storage-pattern]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!storagePatterns[button.dataset.storagePattern]) return;
      state.demoControls.storagePattern = button.dataset.storagePattern;
      renderVisualDemo("storageMap");
      saveState();
    });
  });

  els.visualDemo.querySelectorAll("[data-voiding-pattern]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!pressureFlowPatterns[button.dataset.voidingPattern]) return;
      state.demoControls.voidingPattern = button.dataset.voidingPattern;
      renderVisualDemo("pressureFlowMatrix");
      saveState();
    });
  });

  els.visualDemo.querySelectorAll("[data-coordination-pattern]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!coordinationPatterns[button.dataset.coordinationPattern]) return;
      state.demoControls.coordinationPattern = button.dataset.coordinationPattern;
      renderVisualDemo("coordinationTimeline");
      saveState();
    });
  });

  els.visualDemo.querySelectorAll("[data-neuro-pattern]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!neuroLesionPatterns[button.dataset.neuroPattern]) return;
      state.demoControls.neuroPattern = button.dataset.neuroPattern;
      renderVisualDemo("neuroLesionMap");
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
    waterColumn: renderWaterColumnDemo,
    zeroAndLevel: renderZeroAndLevelDemo,
    pressureTransmission: renderPressureTransmissionDemo,
    pressureEquation: renderPressureEquationDemo,
    signalMap: renderSignalMapDemo,
    artifactDetective: renderArtifactDetectiveDemo,
    storageMap: renderStorageMapDemo,
    pressureFlowMatrix: renderPressureFlowMatrixDemo,
    coordinationTimeline: renderCoordinationTimelineDemo,
    neuroLesionMap: renderNeuroLesionMapDemo
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
      assessmentUI.renderMastery();
      saveState();
    });
  });

  const resetChallenge = els.challengeLab.querySelector("[data-challenge-reset]");
  if (resetChallenge) {
    resetChallenge.addEventListener("click", () => {
      delete state.challengeAnswers[chapterId][index];
      renderChallenge();
      assessmentUI.renderMastery();
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
  const difficultyLabel = scenario.difficulty === "basic" ? "Nivel básico" : "Nivel intermedio";
  els.traceEventCard.innerHTML = `
    <div class="trace-event-figure ${event.type}">
      ${eventFigure(event.type)}
    </div>
    <div class="trace-event-copy">
      <div class="trace-case-meta">
        <span>${scenario.synthetic ? "Caso sintético" : "Caso clínico gobernado"}</span>
        <span>${difficultyLabel}</span>
      </div>
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

function eventPlateau(t, start, end, amplitude) {
  if (t <= start || t >= end || end <= start) return 0;
  const edge = Math.min(0.045, (end - start) / 4);
  if (t < start + edge) return Math.sin(((t - start) / edge) * (Math.PI / 2)) * amplitude;
  if (t > end - edge) return Math.sin(((end - t) / edge) * (Math.PI / 2)) * amplitude;
  return amplitude;
}

function eventTrain(t, start, end, amplitude, cycles = 4) {
  if (t <= start || t >= end || end <= start) return 0;
  const progress = (t - start) / (end - start);
  return Math.pow(Math.sin(progress * Math.PI * cycles), 2) * amplitude;
}

function isCoordinationPattern(pattern) {
  return ["delayedOutlet", "variableOutlet", "neuroDyssynergia", "abdominalMimic", "fixedResistance"].includes(pattern);
}

function isVoidingPattern(pattern) {
  return ["voiding", "outletResistance", "weakDetrusor", "abdominalVoiding", "inhibitedVoiding"].includes(pattern)
    || isCoordinationPattern(pattern);
}

function scenarioHasFocalEvent(scenario = activePracticeCase()) {
  return !["storage", "inhibitedVoiding"].includes(scenario.pattern);
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
    const outletResistance = pattern === "outletResistance" ? event : 0;
    const weakDetrusor = pattern === "weakDetrusor" ? event : 0;
    const abdominalVoiding = pattern === "abdominalVoiding" ? event : 0;
    const flowStart = profile.flowStart ?? Math.min(profile.start + 0.035, profile.end - 0.02);
    const flowRise = isVoidingPattern(pattern) && !isCoordinationPattern(pattern) && pattern !== "inhibitedVoiding"
      ? eventPulse(t, flowStart, profile.end, flowAmplitude)
      : 0;
    const coordinationWindow = isCoordinationPattern(pattern)
      ? eventPlateau(t, profile.start, profile.end, 1)
      : 0;
    const coordinationTrain = isCoordinationPattern(pattern)
      ? eventTrain(t, flowStart, profile.end, 1, profile.cycles || 4)
      : 0;
    const coordinationDetrusor = ["delayedOutlet", "variableOutlet", "neuroDyssynergia", "fixedResistance"].includes(pattern)
      ? eventPlateau(t, profile.start, profile.end, pressureAmplitude)
      : 0;
    const coordinationAbdominal = pattern === "abdominalMimic"
      ? eventTrain(t, profile.start, profile.end, pressureAmplitude, profile.cycles || 4)
      : 0;
    const coordinationFlow = pattern === "delayedOutlet"
      ? eventPulse(t, flowStart, profile.end, flowAmplitude)
      : pattern === "variableOutlet"
        ? coordinationWindow * flowAmplitude * (0.12 + 0.88 * (1 - coordinationTrain))
        : pattern === "neuroDyssynergia"
          ? coordinationWindow * flowAmplitude * (0.2 + 0.45 * (1 - coordinationTrain))
          : pattern === "abdominalMimic"
            ? coordinationTrain * flowAmplitude
            : pattern === "fixedResistance"
              ? eventPulse(t, flowStart, profile.end, flowAmplitude)
              : 0;
    const coordinationEmg = pattern === "delayedOutlet"
      ? eventPlateau(t, profile.start, flowStart, profile.emgAmplitude || 30)
      : pattern === "variableOutlet"
        ? coordinationTrain * (profile.emgAmplitude || 30)
        : pattern === "neuroDyssynergia"
          ? coordinationWindow * (profile.emgAmplitude || 38) * 0.65
            + coordinationTrain * (profile.emgAmplitude || 38) * 0.35
          : pattern === "abdominalMimic"
            ? coordinationTrain * (profile.emgAmplitude || 24)
            : 0;
    const signalDrift = pattern === "signal" ? eventRamp(t, profile.start, profile.driftAmplitude || 70) : 0;
    const signalDrop = pattern === "signal" ? eventPulse(t, Math.max(profile.start, profile.end - 0.2), profile.end, 46) : 0;
    const baselineShift = pattern === "baselineShift" && t > profile.start ? profile.baselineAmplitude || 42 : 0;
    const hydrostaticShift = pattern === "hydrostaticShift" && t > profile.start
      ? profile.baselineAmplitude || 0
      : 0;
    const zeroError = pattern === "zeroError" ? profile.zeroAmplitude || 32 : 0;
    const bubbleSource = pattern === "bubbleDamping"
      ? eventPulse(t, profile.start, profile.end, pressureAmplitude)
      : 0;
    const bubbleDelay = profile.dampingDelay || 0;
    const bubbleDamped = pattern === "bubbleDamping"
      ? eventPulse(t, profile.start + bubbleDelay, profile.end + bubbleDelay, pressureAmplitude * (profile.dampingRatio || 0.3))
      : 0;
    const detrusorStorage = ["detrusorStorage", "detrusorLeak"].includes(pattern)
      ? eventPulse(t, profile.start, profile.end, profile.detrusorAmplitude || 58)
      : 0;
    const lowCompliance = ["lowCompliance", "pressureLeak"].includes(pattern)
      ? eventRamp(t, profile.start, profile.complianceAmplitude || 82)
      : 0;
    const detrusorLeakFlow = pattern === "detrusorLeak"
      ? eventPulse(t, profile.start + (profile.leakDelay || 0.07), profile.end, flowAmplitude)
      : 0;
    const pressureLeakFlow = pattern === "pressureLeak"
      ? eventPulse(t, profile.leakStart || 0.78, Math.min((profile.leakStart || 0.78) + 0.11, 0.96), flowAmplitude)
      : 0;
    const leakFlow = pattern === "leak" ? eventPulse(t, profile.start, profile.end, flowAmplitude) : detrusorLeakFlow + pressureLeakFlow;
    const leakAbdominal = pattern === "leak"
      ? eventPulse(t, Math.max(0, profile.start - 0.035), Math.max(profile.start + 0.01, profile.end - 0.025), pressureAmplitude)
      : 0;
    const volumeDrop = profile.volumeDrop ?? (pattern === "voiding" ? 150 : 0);
    const voidingVolumeChange = isVoidingPattern(pattern) && pattern !== "inhibitedVoiding" && t > flowStart
      ? (t - flowStart) * volumeDrop
      : 0;

    points.push({
      x,
      pves: 214 - fillTrend - cough - flatPabdCough - abdominal - voiding - outletResistance - weakDetrusor - abdominalVoiding - coordinationDetrusor - coordinationAbdominal - signalDrift + signalDrop - baselineShift - hydrostaticShift - zeroError - bubbleSource - detrusorStorage - lowCompliance - leakAbdominal,
      pabd: 270 - cough - abdominal - abdominalVoiding - coordinationAbdominal - hydrostaticShift - bubbleDamped - leakAbdominal,
      pdet: 330 - flatPabdCough - voiding - outletResistance - weakDetrusor - coordinationDetrusor - baselineShift - zeroError - (bubbleSource - bubbleDamped) - detrusorStorage - lowCompliance - (pattern === "signal" ? signalDrift * 0.55 - signalDrop : 0),
      flow: 398 - flowRise - coordinationFlow - leakFlow,
      volume: 426 - t * 78 + voidingVolumeChange,
      emg: 430 - coordinationEmg
    });
  }

  return {
    pves: points.map((p) => ({ x: p.x, y: p.pves })),
    pabd: points.map((p) => ({ x: p.x, y: p.pabd })),
    pdet: points.map((p) => ({ x: p.x, y: p.pdet })),
    flow: points.map((p) => ({ x: p.x, y: p.flow })),
    volume: points.map((p) => ({ x: p.x, y: p.volume })),
    emg: points.map((p) => ({ x: p.x, y: p.emg }))
  };
}

function renderTraceAccessibility(data, scenario, profile) {
  if (!els.traceTextSummary || !els.traceDataTable) return;
  const eventDescription = scenarioHasFocalEvent(scenario)
    ? `El evento docente “${scenario.eventLabel}” ocupa aproximadamente del ${Math.round(profile.start * 100)}% al ${Math.round(profile.end * 100)}% del registro.`
    : "Este caso presenta un comportamiento global y no exige inventar un evento focal.";
  els.traceTextSummary.textContent =
    `Trazado sintético, no perteneciente a un paciente. ${scenario.event.reading} ${eventDescription} `
    + "Pves usa línea continua, Pabd línea discontinua, Pdet punto-raya y flujo línea punteada. "
    + "La tabla expresa desviaciones visuales relativas respecto de la línea de base; no son valores clínicos.";

  const sampleIndexes = [0, 30, 60, 90, 120, 150];
  els.traceDataTable.innerHTML = sampleIndexes
    .map((index) => {
      const t = index / 150;
      const inEvent = scenarioHasFocalEvent(scenario) && t >= profile.start && t <= profile.end;
      const relative = {
        pves: Math.round(214 - data.pves[index].y),
        pabd: Math.round(270 - data.pabd[index].y),
        pdet: Math.round(330 - data.pdet[index].y),
        flow: Math.round(398 - data.flow[index].y)
      };
      return `
        <tr>
          <th scope="row">${Math.round(t * 100)}%</th>
          <td>${relative.pves}</td>
          <td>${relative.pabd}</td>
          <td>${relative.pdet}</td>
          <td>${relative.flow}</td>
          <td>${inEvent ? escapeHtml(scenario.eventLabel) : "—"}</td>
        </tr>
      `;
    })
    .join("");
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
  if (pattern === "inhibitedVoiding") {
    return `<text class="event-label" x="${labelX}" y="63">${scenario.eventLabel}</text>`;
  }

  if (pattern === "cough" || pattern === "flatPabd") {
    return `
      <rect class="event-band warn" x="${startX}" y="74" width="${width}" height="340" rx="8" />
      <text class="event-label" x="${labelX}" y="63">${scenario.eventLabel}</text>
    `;
  }

  if (isVoidingPattern(pattern)) {
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

  if (["signal", "hydrostaticShift", "bubbleDamping", "zeroError"].includes(pattern)) {
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

  if (["leak", "detrusorLeak", "pressureLeak"].includes(pattern)) {
    const dropX = pattern === "pressureLeak"
      ? Math.round(78 + (profile.leakStart || 0.78) * 900)
      : pattern === "detrusorLeak"
        ? Math.round(78 + (profile.start + (profile.leakDelay || 0.07)) * 900)
        : Math.round(startX + width * 0.62);
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
  const verdict = state.traceChallenge.verdict === null
    ? "pending"
    : (state.traceChallenge.verdict === "good" ? "good" : "warn");
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
  const showEmg = ["coordinationDisorders", "neuroUrology"].includes(state.chapter);
  const grids = [92, 156, 220, 284, 348, 412]
    .map((y) => `<line class="grid-line" x1="72" y1="${y}" x2="982" y2="${y}" />`)
    .join("");
  const labels = [
    ["Pves", 26, 218],
    ["Pabd", 23, 272],
    ["Pdet", 24, 331],
    ["Flujo", 21, 402],
    [showEmg ? "EMG" : "Vol", showEmg ? 23 : 34, 434]
  ]
    .map(([text, x, y]) => `<text class="axis-label" x="${x}" y="${y}">${text}</text>`)
    .join("");
  const traceLayers = showEmg ? ["pves", "pabd", "pdet", "flow", "emg"] : ["pves", "pabd", "pdet", "flow", "volume"];
  const layerPaths = traceLayers
    .filter((layer) => layer === "volume" || state.layers[layer])
    .map((layer) => `<path class="trace-path ${layer}" d="${pathFromPoints(data[layer])}" />`)
    .join("");

  const transitionX = isVoidingPattern(scenario.pattern) ? Math.round(78 + profile.start * 900) : 678;
  els.traceSvg.dataset.traceProfile = scenario.id;
  els.traceSvg.setAttribute("aria-label", `Trazado sintético: ${scenario.title}`);
  els.traceSvg.classList.toggle("challenge-active", traceChallengeIsCurrent() && state.traceChallenge.verdict === null);
  els.traceSvg.innerHTML = `
    <title>${escapeHtml(scenario.title)}</title>
    <desc>${escapeHtml(scenario.event.reading)} Trazado sintético docente; no corresponde a un paciente.</desc>
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
  renderTraceAccessibility(data, scenario, profile);
}

function renderTraceChallenge() {
  const scenario = activePracticeCase();
  const active = traceChallengeIsCurrent();
  const answered = active && state.traceChallenge.verdict !== null;
  const hasFocalEvent = scenarioHasFocalEvent(scenario);

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

function answerTraceChallengeAtPosition(position) {
  if (!traceChallengeIsCurrent() || state.traceChallenge.verdict !== null) return;
  const scenario = activePracticeCase();
  const profile = activeTraceProfile();
  const correct = scenarioHasFocalEvent(scenario) && Math.abs(position - profile.start) <= 0.08;
  state.traceChallenge.position = position;
  state.traceChallenge.noEvent = false;
  state.traceChallenge.verdict = correct ? "good" : "warn";
  state.traceChallengeResults[scenario.id] = {
    correct,
    noEvent: false
  };
  renderTrace();
  renderTraceChallenge();
  assessmentUI?.renderMastery();
  saveState();
}

function answerTraceChallengeAt(clientX) {
  if (!traceChallengeIsCurrent() || state.traceChallenge.verdict !== null) return;
  const rect = els.traceSvg.getBoundingClientRect();
  if (!rect.width) return;
  const svgX = ((clientX - rect.left) / rect.width) * 1060;
  answerTraceChallengeAtPosition(clamp((svgX - 78) / 900, 0, 1));
}

function renderChapter() {
  const chapter = chapters[state.chapter];
  const screen = chapter.screens[state.screen];
  const total = chapter.screens.length;

  els.chapterTitle.textContent = chapter.title;
  els.stageBlock.textContent = chapter.block;
  const chapterOpening = state.screen === 0;
  const chapterNumber = chapter.number.match(/\d+/)?.[0] || "1";

  els.lessonView.classList.toggle("chapter-opening", chapterOpening);
  els.lessonPanel.classList.toggle("chapter-opening-panel", chapterOpening);
  els.chapterOpeningMarker.hidden = !chapterOpening;
  els.chapterNumberLarge.textContent = chapterNumber.padStart(2, "0");
  els.screenKicker.textContent = chapterOpening
    ? `${chapter.number} · Principio de entrada`
    : `${chapter.number} · Lección ${state.screen + 1}`;
  els.screenTitle.textContent = screen.title;
  els.screenText.textContent = screen.text;
  els.lessonPrompt.textContent = screen.prompt || "";
  els.lessonPrompt.hidden = !screen.prompt;
  els.keyIdea.textContent = screen.key;
  els.keyIdeaLabel.textContent = chapterOpening ? "Principio rector" : "Idea clave";
  els.mentalModelTitle.textContent = chapter.mentalModelTitle;
  els.mentalModelText.textContent = chapter.mentalModelText;
  els.notThis.textContent = chapter.notThis;
  els.isThis.textContent = chapter.isThis;
  els.labChapterTitle.textContent = `${chapter.number} · ${chapter.title}`;
  els.labChapterDescription.textContent = chapter.labDescription;
  els.progressDetail.textContent = `Lección ${state.screen + 1} de ${total}`;
  els.prevScreen.disabled = state.screen === 0;
  els.nextScreen.disabled = state.screen === total - 1;
  els.openLab.hidden = state.screen !== total - 1;

  const contextKey = `${state.chapter}:${state.screen}`;
  if (els.contextPanel.dataset.screenKey !== contextKey) {
    els.contextPanel.open = false;
    els.contextPanel.dataset.screenKey = contextKey;
  }

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
  assessmentUI.renderChapterGovernance(state.chapter);
}

function renderCover() {
  const chapter = chapters[state.chapter];
  const atBeginning = state.chapter === "thinking" && state.screen === 0;
  els.coverStartLabel.textContent = atBeginning ? "Comenzar el curso" : `Continuar · ${chapter.number}`;
  els.coverResume.textContent = atBeginning
    ? "10 capítulos · 47 casos · 3 modos de aprendizaje"
    : `${chapter.title} · lección ${state.screen + 1} de ${chapter.screens.length}`;
}

function renderView() {
  const view = ["cover", "lesson", "lab", "practice", "assessment"].includes(state.view) ? state.view : "cover";
  state.view = view;
  const coverActive = view === "cover";

  els.mainStage.classList.toggle("cover-mode", coverActive);
  els.stageHeader.hidden = coverActive;
  els.workspaceTabs.hidden = coverActive;
  els.openCover.classList.toggle("active", coverActive);

  document.querySelectorAll("[data-view]").forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll("[data-view-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.viewPanel !== view;
  });

  document.querySelectorAll(".course-item[data-chapter]").forEach((button) => {
    button.classList.toggle("active", !coverActive && button.dataset.chapter === state.chapter);
  });
}

function setView(view) {
  if (!["cover", "lesson", "lab", "practice", "assessment"].includes(view)) return;
  state.view = view;
  if (view !== "cover") state.resumeView = view;
  renderView();
  if (view === "assessment") assessmentUI.render();
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
  els.emgLayerControl.hidden = !["coordinationDisorders", "neuroUrology"].includes(state.chapter);
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
  const selectedIndex = Number(state.practiceAnswers[scenario.id]);
  const hasSelection = Number.isInteger(selectedIndex) && Boolean(scenario.answers[selectedIndex]);
  const selectedAnswer = hasSelection ? scenario.answers[selectedIndex] : null;
  els.coachFeedback.className = `coach-feedback ${selectedAnswer ? (selectedAnswer[1] ? "good" : "warn") : ""}`;
  els.coachFeedback.textContent = selectedAnswer
    ? selectedAnswer[2]
    : "Elige una respuesta. Puedes pulsarla nuevamente para dejar el ejercicio sin marcar.";
  const presentedAnswers = orderedAnswers(scenario.answers, scenario.answerOffset || 0);
  els.answerGrid.innerHTML = presentedAnswers
    .map(
      ({ answer: [label], originalIndex }, displayIndex) =>
        `<button type="button" class="${selectedIndex === originalIndex ? `selected ${scenario.answers[originalIndex][1] ? "good" : "warn"}` : ""}" data-answer="${originalIndex}"><span class="answer-letter">${String.fromCharCode(65 + displayIndex)}</span><span>${label}</span></button>`
    )
    .join("");

  els.answerGrid.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const answerIndex = Number(button.dataset.answer);
      if (Number(state.practiceAnswers[scenario.id]) === answerIndex) {
        delete state.practiceAnswers[scenario.id];
      } else {
        state.practiceAnswers[scenario.id] = answerIndex;
      }
      saveState();
      renderCoach();
      assessmentUI.renderMastery();
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

function courseAssessmentContext() {
  return {
    challengeAnswers: state.challengeAnswers,
    practiceAnswers: state.practiceAnswers,
    traceChallengeResults: state.traceChallengeResults,
    chapterChallenges,
    chapterPracticeCases,
    practiceCaseMap,
    chapterFocus,
    chapters
  };
}

function navigateToRemediation(chapterId, scenarioId) {
  if (!chapters[chapterId]) return;
  state.chapter = chapterId;
  state.screen = 0;
  state.scenario = practiceCaseMap[scenarioId] ? scenarioId : chapterScenarioDefaults[chapterId];
  state.view = "practice";
  state.resumeView = "practice";
  resetTraceChallengeState();
  closeCourseNav();
  render();
}

const assessmentUI = assessmentUIFactory.createAssessmentUI({
  model: competencyModel,
  engine: assessmentEngine,
  state,
  revision: BUILD_REVISION,
  elements: {
    masterySummary: els.masterySummary,
    competencyGrid: els.competencyGrid,
    content: els.assessmentContent,
    tabs: els.assessmentTabs,
    chapterGovernance: els.chapterGovernance
  },
  courseContext: courseAssessmentContext,
  save: saveState,
  navigateToRemediation,
  onMasteryChange(current) {
    els.progressLabel.textContent = current.attempted
      ? `Dominio ${current.percent}% · ${current.level.label}`
      : "Dominio · sin evidencia";
    els.progressFill.style.width = `${current.percent}%`;
  }
});

function bindEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  els.openLab.addEventListener("click", () => setView("lab"));
  els.openPractice.addEventListener("click", () => setView("practice"));
  els.openCover.addEventListener("click", () => {
    closeCourseNav();
    setView("cover");
  });
  els.startCourse.addEventListener("click", () => setView(state.resumeView || "lesson"));
  els.browseChapters.addEventListener("click", () => {
    els.sideRail.classList.add("nav-open");
    els.courseNavToggle.setAttribute("aria-expanded", "true");
    els.courseNavToggle.title = "Ocultar capítulos";
  });

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
      state.view = "lesson";
      state.resumeView = "lesson";
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
    const scenario = activePracticeCase();
    const correct = !scenarioHasFocalEvent(scenario);
    state.traceChallenge.position = null;
    state.traceChallenge.noEvent = true;
    state.traceChallenge.verdict = correct ? "good" : "warn";
    state.traceChallengeResults[scenario.id] = {
      correct,
      noEvent: true
    };
    renderTrace();
    renderTraceChallenge();
    assessmentUI.renderMastery();
    saveState();
  });

  els.resetTraceChallenge.addEventListener("click", () => {
    resetTraceChallengeState(true);
    renderTrace();
    renderTraceChallenge();
    saveState();
  });

  els.traceSvg.addEventListener("click", (event) => answerTraceChallengeAt(event.clientX));
  els.traceSvg.addEventListener("keydown", (event) => {
    if (!traceChallengeIsCurrent() || state.traceChallenge.verdict !== null) return;
    if (!["ArrowLeft", "ArrowRight", "Enter", " "].includes(event.key)) return;
    event.preventDefault();
    event.stopPropagation();
    const currentPosition = Number.isFinite(state.traceChallenge.position)
      ? state.traceChallenge.position
      : 0.5;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      state.traceChallenge.position = clamp(
        currentPosition + (event.key === "ArrowLeft" ? -0.02 : 0.02),
        0,
        1
      );
      renderTrace();
      renderTraceChallenge();
      els.traceChallengeInstructions.textContent =
        `Cursor en ${Math.round(state.traceChallenge.position * 100)}% del trazado. Presiona Enter para marcar.`;
      return;
    }
    answerTraceChallengeAtPosition(currentPosition);
  });

  els.resetProgress.addEventListener("click", () => {
    resetState();
    render();
  });

  document.addEventListener("keydown", (event) => {
    if (event.defaultPrevented) return;
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
  renderCover();
  renderChallenge();
  renderView();
  renderRoutine();
  renderLayerControls();
  renderCoach();
  renderTrace();
  renderTraceChallenge();
  if (state.view === "assessment") {
    assessmentUI.render();
  } else {
    assessmentUI.renderMastery();
  }
  saveState();
}

bindEvents();
render();
