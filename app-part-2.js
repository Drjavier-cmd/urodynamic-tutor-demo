const scenarios = {
  storage: {
    title: "Llenado docente: baja presión",
    eventLabel: "almacenamiento: presión baja",
    event: {
      type: "storage",
      title: "Vida real: llenado silencioso",
      label: "sin maniobra provocativa",
      timing: "evento largo",
      reading: "La vejiga debería aceptar volumen con presión baja y salida cerrada.",
      caution: "Analogía docente: el trazado no reemplaza historia ni examen."
    },
    question: "Durante almacenamiento normal, ¿qué combinación esperas?",
    answers: [
      ["Detrusor relajado, salida cerrada y presión baja", true, "Correcto. Esa es la lógica funcional del almacenamiento."],
      ["Contracción detrusoriana y salida abierta", false, "Eso corresponde al programa de vaciado, no al almacenamiento."],
      ["Pves aislada como único dato relevante", false, "Pves sola no basta. Debes mirar Pabd, Pdet, eventos y contexto."],
      ["Conclusión automática por el aspecto de la curva", false, "No. La curva orienta, pero se interpreta con pregunta, técnica y contexto."]
    ]
  },
  cough: {
    title: "Tos: evento abdominal",
    eventLabel: "tos breve: Pves y Pabd suben",
    event: {
      type: "cough",
      title: "Vida real: tos",
      label: "pico breve y rápido",
      timing: "milisegundos a pocos segundos",
      reading: "Pabd y Pves suben casi juntas; Pdet no debe inventar detrusor si la transmisión es coherente.",
      caution: "La tos prueba transmisión y puede gatillar fuga de esfuerzo, pero no es Valsalva."
    },
    question: "Si Pves y Pabd suben juntas durante una tos, ¿qué lectura es más prudente?",
    answers: [
      ["Contracción detrusoriana segura", false, "No saltes. Si Pabd acompaña a Pves, primero piensa en evento abdominal."],
      ["Evento abdominal o artefacto fisiológico del examen", true, "Correcto. La tos ayuda a reconocer transmisión de presión y evita sobrerreaccionar."],
      ["Vaciado coordinado", false, "No hay flujo ni cambio voluntario de programa."],
      ["Baja acomodación vesical", false, "No se concluye por un pico breve asociado a Pabd."]
    ]
  },
  voiding: {
    title: "Vaciado: bomba y salida",
    eventLabel: "orden miccional + flujo",
    event: {
      type: "voiding",
      title: "Vida real: permiso para orinar",
      label: "cambio de programa",
      timing: "fase de vaciado",
      reading: "El flujo aparece cuando contracción detrusoriana y apertura de salida se alinean.",
      caution: "Flujo sin presión y presión sin flujo cuentan historias incompletas."
    },
    question: "¿Qué combinación apoya mejor un vaciado coordinado?",
    answers: [
      ["Pdet efectiva con aparición de flujo", true, "Bien. La curva sugiere contracción útil con salida abierta."],
      ["Pves aislada", false, "Pves aislada no permite separar abdomen, detrusor y contexto."],
      ["Flujo sin presión ni eventos", false, "El flujo ayuda, pero no explica por sí solo la coordinación."],
      ["Pabd subiendo como dato principal", false, "Eso puede ser esfuerzo abdominal, no necesariamente vaciado coordinado."]
    ]
  },
  abdominal: {
    title: "Esfuerzo abdominal: presión transmitida",
    eventLabel: "Valsalva/de pie: Pabd sostenida",
    event: {
      type: "valsalva",
      title: "Vida real: Valsalva / de pie",
      label: "presión sostenida",
      timing: "segundos, no pico instantáneo",
      reading: "Pabd sube de forma sostenida y puede arrastrar Pves; la lectura prudente depende de Pdet y del evento anotado.",
      caution: "Tos y Valsalva no son equivalentes: una es explosiva y breve; la otra puede sostenerse."
    },
    question: "Si Pabd sube de forma sostenida y Pves la acompaña, ¿qué debes hacer antes de hablar de detrusor?",
    answers: [
      ["Mirar Pdet y revisar si el evento fue abdominal", true, "Correcto. Si Pdet no sube proporcionalmente, la explicación abdominal gana fuerza."],
      ["Nombrar hiperactividad detrusoriana", false, "Prematuro. Primero separa abdomen de detrusor y revisa eventos."],
      ["Ignorar Pabd porque solo importa Pves", false, "Ese es un error central. Pabd existe precisamente para evitar esa confusión."],
      ["Concluir obstrucción", false, "Obstrucción se discute en vaciado con relación presión-flujo, no por Pabd aislada."]
    ]
  },
  signal: {
    title: "Señal deficiente: límite interpretativo",
    eventLabel: "señal inestable: revisar canal y línea base",
    event: {
      type: "signal",
      title: "Vida real: señal que no coopera",
      label: "línea base dudosa",
      timing: "tramo contaminado",
      reading: "Si el canal deriva o transmite mal, el segmento puede no responder la pregunta clínica.",
      caution: "No hay virtud docente en interpretar una señal que no merece confianza."
    },
    question: "Si la línea base deriva o un canal pierde transmisión, ¿cuál es la conclusión más rigurosa?",
    answers: [
      ["El tramo puede ser no interpretable para esa pregunta", true, "Correcto. Reconocer límite técnico es mejor que inventar una fisiología."],
      ["Mientras haya curva, siempre se interpreta", false, "No. Una señal puede existir y aun así no ser confiable."],
      ["Es una patología rara", false, "Primero descarta problema técnico. Lo raro no debe ser el refugio de una mala señal."],
      ["Usar solo el canal que se ve bonito", false, "No. La interpretación multicanal exige coherencia entre señales."]
    ]
  },
  detrusorStorage: {
    title: "Detrusor en llenado: actividad posible",
    eventLabel: "Pdet sube sin Pabd equivalente",
    event: {
      type: "detrusor",
      title: "Vida real: urgencia durante llenado",
      label: "Pdet sube sin Pabd equivalente",
      timing: "evento vesical posible",
      reading: "Si la calidad es buena y Pabd no explica el cambio, se discute actividad detrusoriana durante almacenamiento.",
      caution: "Primero calidad y fase; después patrón funcional."
    },
    question: "Durante llenado, Pves sube y Pabd no acompaña. ¿Cuál es la lectura docente más ordenada?",
    answers: [
      ["Revisar calidad y, si Pdet sube, discutir actividad detrusoriana durante almacenamiento", true, "Correcto. La señal sugiere falla de estabilidad, siempre con control técnico primero."],
      ["Concluir diagnóstico clínico definitivo", false, "No. El curso enseña patrón funcional docente, no diagnóstico final automático."],
      ["Ignorar Pabd porque el fenómeno está en Pves", false, "No. Pabd es el canal que permite separar abdomen de detrusor."],
      ["Llamarlo obstrucción", false, "Obstrucción se razona principalmente en vaciado con relación presión-flujo."]
    ]
  },
  lowCompliance: {
    title: "Complacencia baja: presión que sube con volumen",
    eventLabel: "Pdet sube con el volumen",
    event: {
      type: "compliance",
      title: "Vida real: reservorio rígido",
      label: "presión progresiva",
      timing: "durante el llenado",
      reading: "El problema docente no es un pico aislado, sino perder la relación volumen-presión de baja presión.",
      caution: "Complacencia es comportamiento del reservorio, no una etiqueta por forma bonita."
    },
    question: "Si Pdet aumenta progresivamente durante el llenado, ¿qué concepto debe aparecer primero?",
    answers: [
      ["Relación presión-volumen y complacencia", true, "Correcto. La pregunta no es solo si hay un pico, sino si el reservorio mantiene baja presión."],
      ["Tos no registrada", false, "Una tos suele ser breve y acompaña Pves/Pabd; aquí el patrón es progresivo."],
      ["Vaciado coordinado", false, "No hay fase de vaciado ni flujo miccional coordinado."],
      ["Conclusión terapéutica inmediata", false, "El curso debe declarar límites antes de sugerir consecuencias clínicas."]
    ]
  },
  leak: {
    title: "Fuga en almacenamiento: salida bajo prueba",
    eventLabel: "Fuga",
    event: {
      type: "leak",
      title: "Vida real: fuga con esfuerzo",
      label: "gota alineada al evento",
      timing: "durante maniobra o llenado",
      reading: "La fuga se interpreta con presión, evento y fase: puede hablar de salida, abdomen, detrusor o combinación.",
      caution: "Representa incontinencia de esfuerzo como posibilidad funcional, no como diagnóstico automático."
    },
    question: "Aparece fuga durante almacenamiento. ¿Qué pregunta evita una conclusión prematura?",
    answers: [
      ["Qué presión y qué evento acompañan la fuga", true, "Correcto. La fuga debe leerse junto a Pabd, Pdet, fase y maniobra."],
      ["Toda fuga es hiperactividad detrusoriana", false, "No. Puede ser mecanismo de cierre, evento abdominal u otra combinación."],
      ["La fuga no tiene valor docente", false, "Sí tiene valor, pero solo si se contextualiza con los canales y eventos."],
      ["Borrar el evento porque confunde", false, "Al contrario: el evento es una ancla de interpretación."]
    ]
  }
};

const chapterPracticeCases = {
  thinking: [
    {
      ...scenarios.leak,
      id: "thinkingQuestion",
      tabLabel: "Pregunta y fuga",
      pattern: "leak",
      focus: "limit",
      answerOffset: 1,
      title: "¿El trazado respondió la pregunta?",
      eventLabel: "tos registrada + fuga observada",
      event: {
        ...scenarios.leak.event,
        title: "Caso sintético: pérdida referida al toser",
        label: "pregunta antes del trazado",
        reading: "La maniobra, las presiones y la fuga solo son útiles si responden al fenómeno que se buscaba reproducir.",
        caution: "Primero pregunta; después condiciones, señal y límite."
      },
      question: "Antes de cerrar una conclusión, ¿qué relación debes comprobar?",
      answers: [
        ["Que la señal observada responda la pregunta original y conserve sus límites", true, "Correcto. El hallazgo adquiere sentido al responder una pregunta definida en condiciones conocidas."],
        ["Que exista el mayor número posible de curvas llamativas", false, "La cantidad de señales no reemplaza una pregunta clínica-funcional."],
        ["Que toda fuga reciba automáticamente una etiqueta diagnóstica", false, "El patrón observado todavía debe integrarse con historia, técnica y contexto."]
      ]
    },
    {
      ...scenarios.storage,
      id: "thinkingLimit",
      tabLabel: "No reproducido",
      pattern: "storage",
      focus: "limit",
      answerOffset: 2,
      title: "El síntoma no apareció durante el estudio",
      eventLabel: "registro sin reproducción del síntoma",
      event: {
        ...scenarios.storage.event,
        title: "Caso sintético: estudio sin el fenómeno buscado",
        label: "límite del examen",
        reading: "El registro muestra lo que ocurrió durante esas condiciones, no todo lo que sucede fuera del laboratorio.",
        caution: "No demostrar no equivale a negar el síntoma."
      },
      question: "¿Cuál es la conclusión más rigurosa?",
      answers: [
        ["El fenómeno no se demostró en las condiciones del estudio", true, "Correcto. Describe el alcance real del examen sin invalidar la historia."],
        ["El paciente no presenta el problema", false, "El entorno controlado puede no reproducir un fenómeno cotidiano."],
        ["La ausencia de hallazgo demuestra otra causa", false, "No observar un fenómeno no prueba automáticamente una explicación alternativa."]
      ]
    }
  ],
  physiology: [
    {
      ...scenarios.storage,
      id: "physiologyStorage",
      tabLabel: "Almacenamiento",
      pattern: "storage",
      focus: "phase",
      answerOffset: 2,
      title: "Reservorio de baja presión",
      question: "¿Qué relación funcional corresponde a este trazado de almacenamiento?"
    },
    {
      ...scenarios.voiding,
      id: "physiologyVoiding",
      tabLabel: "Vaciado",
      pattern: "voiding",
      focus: "inference",
      answerOffset: 1,
      title: "Cambio coordinado hacia vaciado"
    },
    {
      ...scenarios.lowCompliance,
      id: "physiologyAccommodation",
      tabLabel: "Acomodación",
      pattern: "lowCompliance",
      focus: "signal",
      answerOffset: 2,
      title: "Cuando el volumen comienza a costar presión",
      question: "¿Qué relación fisiológica debe evaluarse primero?"
    }
  ],
  tracing: [
    {
      ...scenarios.cough,
      id: "tracingCough",
      tabLabel: "Evento breve",
      pattern: "cough",
      focus: "event",
      answerOffset: 1,
      title: "Ubica la tos dentro de la historia",
      question: "¿Qué debes hacer antes de interpretar el pico?"
    },
    {
      ...scenarios.abdominal,
      id: "tracingSustained",
      tabLabel: "Evento sostenido",
      pattern: "abdominal",
      focus: "event",
      answerOffset: 2,
      title: "Un esfuerzo sostenido no es una tos",
      question: "¿Qué elemento temporal diferencia mejor este evento?",
      answers: [
        ["La presión se mantiene durante varios segundos en vez de formar un pico breve", true, "Correcto. La duración y la forma temporal ayudan a distinguir un esfuerzo sostenido de una tos."],
        ["Solo el color con que se dibuja la curva", false, "El color identifica canales; no define la naturaleza temporal del evento."],
        ["La presencia obligatoria de flujo", false, "Un esfuerzo abdominal puede ocurrir sin iniciar vaciado ni generar flujo."]
      ]
    },
    {
      ...scenarios.voiding,
      id: "tracingVoiding",
      tabLabel: "Secuencia de vaciado",
      pattern: "voiding",
      focus: "phase",
      answerOffset: 1,
      title: "Presión, orden y flujo en secuencia",
      question: "¿Qué conjunto cuenta mejor la fase de vaciado?"
    }
  ],
  instrument: [
    {
      ...scenarios.cough,
      id: "instrumentTransmission",
      tabLabel: "Transmisión",
      pattern: "cough",
      focus: "signal",
      answerOffset: 2,
      title: "Pves y Pabd transmiten la misma tos",
      question: "Si ambas señales suben juntas, ¿qué aporta Pdet?",
      answers: [
        ["Muestra que la contribución abdominal se resta y puede dejar Pdet relativamente estable", true, "Correcto. Pdet ayuda a no confundir presión transmitida con actividad detrusoriana."],
        ["Convierte la tos en una contracción detrusoriana", false, "La resta busca justamente separar la contribución abdominal."],
        ["Hace innecesario revisar Pves y Pabd", false, "Pdet solo es interpretable si ambas señales medidas son confiables."]
      ]
    },
    {
      ...scenarios.signal,
      id: "instrumentFlatPabd",
      tabLabel: "Pabd inválida",
      pattern: "flatPabd",
      focus: "quality",
      answerOffset: 1,
      title: "Una resta exacta con una señal defectuosa",
      eventLabel: "tos: Pves responde y Pabd permanece plana",
      event: {
        ...scenarios.signal.event,
        title: "Pabd no transmite el evento",
        label: "entrada inválida para Pdet",
        timing: "durante una tos registrada",
        reading: "El equipo puede calcular Pdet, pero la resta hereda la falla del canal abdominal.",
        caution: "Cálculo matemático correcto no significa interpretación fisiológica confiable."
      },
      question: "¿Qué conclusión es correcta sobre Pdet?",
      answers: [
        ["Puede calcularse, pero no interpretarse con confianza hasta corregir Pabd", true, "Correcto. Pdet depende de la calidad de ambas señales medidas."],
        ["Corrige automáticamente la falla de Pabd", false, "Pdet hereda el error; no repara el canal de entrada."],
        ["Demuestra actividad detrusoriana", false, "La discordancia técnica debe resolverse antes de una inferencia fisiológica."]
      ]
    },
    {
      ...scenarios.voiding,
      id: "instrumentFlow",
      tabLabel: "Presión y flujo",
      pattern: "voiding",
      focus: "signal",
      answerOffset: 2,
      title: "Dos mediciones que deben leerse juntas",
      question: "¿Por qué el flujo aislado es insuficiente?",
      answers: [
        ["Porque no muestra por sí solo qué presión ni qué evento acompañaron la salida de orina", true, "Correcto. Flujo, presión, fase y evento forman una relación funcional."],
        ["Porque el flujo nunca aporta información", false, "Sí aporta información, pero necesita contexto para explicar el vaciado."],
        ["Porque Pves aislada reemplaza todos los demás canales", false, "Pves tampoco separa por sí sola abdomen, detrusor y contexto."]
      ]
    }
  ],
  artifacts: [
    {
      ...scenarios.signal,
      id: "artifactDrift",
      tabLabel: "Deriva",
      pattern: "signal",
      focus: "quality",
      answerOffset: 1,
      title: "Deriva de señal durante el llenado"
    },
    {
      ...scenarios.signal,
      id: "artifactFlatPabd",
      tabLabel: "Canal plano",
      pattern: "flatPabd",
      focus: "quality",
      answerOffset: 2,
      title: "La tos revela un canal abdominal no confiable",
      eventLabel: "control de tos discordante",
      event: {
        ...scenarios.signal.event,
        title: "Pabd permanece plana durante la tos",
        label: "prueba de transmisión fallida",
        timing: "control técnico breve",
        reading: "Pves responde al evento, pero Pabd no lo registra; la coherencia multicanal está rota.",
        caution: "Primero corregir la señal, después interpretar."
      },
      question: "¿Cuál es el primer paso?",
      answers: [
        ["Revisar posición, conexión y transmisión de Pabd", true, "Correcto. La prueba de tos identifica el canal que debe corregirse."],
        ["Nombrar una contracción detrusoriana", false, "La discordancia técnica impide esa inferencia."],
        ["Ignorar Pabd y conservar Pdet", false, "Pdet depende de Pabd y también queda comprometida."]
      ]
    },
    {
      ...scenarios.signal,
      id: "artifactBaseline",
      tabLabel: "Salto de base",
      pattern: "baselineShift",
      focus: "quality",
      answerOffset: 1,
      title: "Cambio abrupto sin evento clínico",
      eventLabel: "salto de línea base en Pves",
      event: {
        ...scenarios.signal.event,
        title: "La línea base cambia de forma abrupta",
        label: "señal sin evento acompañante",
        timing: "mitad del registro",
        reading: "Un cambio escalonado sin maniobra anotada obliga a revisar el sistema de medición.",
        caution: "Una forma llamativa no convierte un artefacto en fisiología."
      },
      question: "¿Qué debe verificarse antes de interpretar?",
      answers: [
        ["Catéter, cero, conexión y transmisión del canal", true, "Correcto. La estabilidad técnica precede a la interpretación."],
        ["El diagnóstico más infrecuente", false, "La explicación técnica es prioritaria ante una discontinuidad abrupta."],
        ["Solo la forma de Pdet", false, "Pdet puede heredar el mismo cambio artificial de Pves."]
      ]
    }
  ],
  storageDisorders: [
    {
      ...scenarios.detrusorStorage,
      id: "storageDetrusor",
      tabLabel: "Actividad detrusoriana",
      pattern: "detrusorStorage",
      focus: "inference",
      answerOffset: 2
    },
    {
      ...scenarios.lowCompliance,
      id: "storageCompliance",
      tabLabel: "Acomodación",
      pattern: "lowCompliance",
      focus: "signal",
      answerOffset: 1
    },
    {
      ...scenarios.leak,
      id: "storageLeak",
      tabLabel: "Competencia de salida",
      pattern: "leak",
      focus: "event",
      answerOffset: 2
    }
  ]
};

const practiceTraceProfiles = {
  thinkingQuestion: { start: 0.43, end: 0.56, fillSlope: 10, pressureAmplitude: 40, flowAmplitude: 48 },
  thinkingLimit: { start: 0.1, end: 0.9, fillSlope: 7, pressureAmplitude: 0, flowAmplitude: 0 },
  physiologyStorage: { start: 0.08, end: 0.92, fillSlope: 12, pressureAmplitude: 0, flowAmplitude: 0 },
  physiologyVoiding: { start: 0.62, end: 0.91, fillSlope: 11, pressureAmplitude: 58, flowAmplitude: 72 },
  physiologyAccommodation: { start: 0.24, end: 0.9, fillSlope: 10, complianceAmplitude: 76 },
  tracingCough: { start: 0.32, end: 0.39, fillSlope: 13, pressureAmplitude: 52 },
  tracingSustained: { start: 0.45, end: 0.76, fillSlope: 13, pressureAmplitude: 43 },
  tracingVoiding: { start: 0.68, end: 0.94, fillSlope: 14, pressureAmplitude: 54, flowAmplitude: 65 },
  instrumentTransmission: { start: 0.24, end: 0.31, fillSlope: 9, pressureAmplitude: 44 },
  instrumentFlatPabd: { start: 0.46, end: 0.53, fillSlope: 9, pressureAmplitude: 48 },
  instrumentFlow: { start: 0.58, end: 0.88, fillSlope: 12, pressureAmplitude: 46, flowAmplitude: 60 },
  artifactDrift: { start: 0.25, end: 0.79, fillSlope: 8, driftAmplitude: 70 },
  artifactFlatPabd: { start: 0.6, end: 0.67, fillSlope: 10, pressureAmplitude: 56 },
  artifactBaseline: { start: 0.52, end: 0.58, fillSlope: 10, baselineAmplitude: 45 },
  storageDetrusor: { start: 0.39, end: 0.56, fillSlope: 12, detrusorAmplitude: 60 },
  storageCompliance: { start: 0.31, end: 0.91, fillSlope: 9, complianceAmplitude: 94 },
  storageLeak: { start: 0.58, end: 0.69, fillSlope: 14, pressureAmplitude: 45, flowAmplitude: 52 }
};

const practiceCaseMap = Object.fromEntries(
  Object.values(chapterPracticeCases)
    .flat()
    .map((practiceCase) => [practiceCase.id, practiceCase])
);


