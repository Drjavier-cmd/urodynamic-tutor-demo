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

const interactiveDemos = {
  clinicalReasoning: {
    title: "Del síntoma referido a una conclusión defendible",
    subtitle: "Caso sintético: una paciente refiere pérdida al toser"
  },
  programSwitch: {
    title: "La vejiga cambia de programa",
    subtitle: "Almacenamiento y vaciado exigen conductas coordinadas opuestas"
  },
  accommodation: {
    title: "Acomodación: mismo llenado, distinta respuesta",
    subtitle: "Comparación anatómica cualitativa; no representa umbrales clínicos"
  },
  flowResistance: {
    title: "Flujo: bomba, salida y resistencia",
    subtitle: "Analogía docente: bomba + manguera para separar resistencia extrínseca e intrínseca",
    controls: [
      ["outletDiameter", "Diámetro de salida"],
      ["outletCompression", "Compresión extrínseca"],
      ["outletStiffness", "Resistencia intrínseca"]
    ]
  },
  curveTimeline: {
    title: "Recorre el trazado antes de interpretarlo",
    subtitle: "El mismo cambio adquiere significado por su fase, evento y secuencia"
  },
  pressureEquation: {
    title: "Dos señales medidas, una presión derivada",
    subtitle: "Valores sintéticos para comprender la relación; no son umbrales clínicos"
  },
  signalMap: {
    title: "Qué ve el equipo y qué debe inferir el operador",
    subtitle: "Selecciona un canal para seguir su origen y su límite"
  },
  artifactDetective: {
    title: "Detector de coherencia técnica",
    subtitle: "Primero describe qué canal cambió; después decide qué verificar"
  }
};

const chapterLabDemos = {
  thinking: [{ id: "clinicalReasoning", label: "Razonamiento" }],
  physiology: [
    { id: "accommodation", label: "Acomodación" },
    { id: "flowResistance", label: "Flujo y salida" },
    { id: "programSwitch", label: "Programas" }
  ],
  tracing: [{ id: "curveTimeline", label: "Secuencia temporal" }],
  instrument: [
    { id: "signalMap", label: "Mapa de señales" },
    { id: "pressureEquation", label: "Pdet derivada" }
  ],
  artifacts: [{ id: "artifactDetective", label: "Detector técnico" }],
  storageDisorders: [{ id: "accommodation", label: "Acomodación" }]
};

const chapterChallenges = {
  thinking: [
    {
      tag: "Dato vs inferencia",
      title: "Dos canales responden a una tos",
      prompt: "¿Cuál es la descripción más defendible antes de explicar el fenómeno?",
      evidence: ["Evento: tos", "Pves aumenta", "Pabd aumenta"],
      answers: [
        ["Pves y Pabd aumentaron durante el evento registrado", true, "Correcto. Eso describe lo observado sin transformar todavía la señal en una explicación."],
        ["Se demostró una contracción detrusoriana", false, "Eso ya es una inferencia y no se sostiene solo porque Pves aumentó."],
        ["La tos explica por completo los síntomas del paciente", false, "El evento ayuda a contextualizar la señal, pero no explica por sí solo el caso clínico."]
      ]
    },
    {
      tag: "Límite del estudio",
      title: "El síntoma no apareció durante el examen",
      prompt: "¿Qué conclusión conserva mejor la honestidad interpretativa?",
      evidence: ["Pregunta clínica definida", "Técnica aceptable", "Síntoma no reproducido"],
      answers: [
        ["No se demostró el fenómeno en las condiciones del estudio", true, "Correcto. Delimita lo observado sin invalidar el síntoma ni inventar una explicación alternativa."],
        ["El paciente no tiene el problema", false, "No reproducir un fenómeno en un entorno controlado no demuestra su ausencia en la vida cotidiana."],
        ["El examen demuestra otra fisiopatología", false, "La ausencia de un hallazgo no prueba automáticamente una hipótesis distinta."]
      ]
    },
    {
      tag: "Calidad antes de significado",
      title: "La tos no aparece en Pabd",
      prompt: "¿Cuál debe ser el siguiente paso antes de interpretar Pdet?",
      evidence: ["Evento: tos", "Pves responde", "Pabd permanece plana"],
      answers: [
        ["Verificar el canal abdominal y su transmisión", true, "Correcto. Si Pabd no representa bien el evento, la presión derivada pierde confiabilidad fisiológica."],
        ["Concluir actividad detrusoriana", false, "La discordancia durante una tos obliga primero a revisar la medición."],
        ["Ignorar Pabd y usar solo Pves", false, "Eso elimina justamente el control que permite separar presión abdominal de actividad vesical."]
      ]
    }
  ],
  physiology: [
    {
      tag: "Programa funcional",
      title: "El sistema está almacenando",
      prompt: "¿Qué relación funcional corresponde a esta fase?",
      evidence: ["Volumen aumenta", "Sin orden de vaciar", "Salida competente"],
      answers: [
        ["Detrusor relajado y salida cerrada", true, "Correcto. El sistema funciona como reservorio de baja presión con la salida cerrada."],
        ["Detrusor contráctil y salida abierta", false, "Esa relación corresponde al programa de vaciado."],
        ["Detrusor contráctil y salida cerrada", false, "Esa combinación no representa el programa coordinado de almacenamiento."]
      ]
    },
    {
      tag: "Cambio de programa",
      title: "Aparece la decisión de vaciar",
      prompt: "¿Qué cambio coordinado permite que aparezca flujo?",
      evidence: ["Orden miccional", "Inicio de vaciado", "Se espera flujo"],
      answers: [
        ["El detrusor se contrae y la salida se abre", true, "Correcto. Bomba y salida deben cambiar de programa de forma coordinada."],
        ["El detrusor se relaja y la salida se cierra", false, "Eso mantiene el programa de almacenamiento."],
        ["Solo aumenta la presión abdominal", false, "El aumento abdominal aislado no define el programa fisiológico coordinado de vaciado."]
      ]
    },
    {
      tag: "Coordinación",
      title: "La bomba actúa contra una salida cerrada",
      prompt: "Sin asignar todavía un diagnóstico, ¿qué relación funcional está fallando?",
      evidence: ["Detrusor contráctil", "Salida cerrada", "Flujo limitado"],
      answers: [
        ["La coordinación entre bomba y salida", true, "Correcto. Primero se reconoce la relación ineficiente; la etiqueta diagnóstica requiere más contexto."],
        ["La sensibilidad vesical necesariamente", false, "Los datos mostrados describen bomba y salida; no permiten concluir una alteración sensitiva."],
        ["La fase de almacenamiento normal", false, "El escenario describe un intento de vaciado, no un almacenamiento normal."]
      ]
    }
  ],
  tracing: [
    {
      tag: "Evento y curva",
      title: "Un pico coincide con una tos",
      prompt: "¿Qué lectura debe hacerse primero?",
      evidence: ["Fase: llenado", "Marcador: tos", "Pico de presión"],
      answers: [
        ["Comparar Pves y Pabd y relacionarlas con el marcador", true, "Correcto. El evento y la coherencia entre canales preceden a cualquier etiqueta fisiológica."],
        ["Nombrar el pico como contracción detrusoriana", false, "La forma aislada no basta, especialmente cuando existe un evento abdominal registrado."],
        ["Saltar directamente al diagnóstico clínico", false, "Antes faltan calidad, canales, evento e integración con la pregunta clínica."]
      ]
    },
    {
      tag: "Secuencia temporal",
      title: "Una presión cambia sin anotación",
      prompt: "¿Qué información debes reconstruir antes de interpretarla?",
      evidence: ["Cambio de presión", "Sin evento anotado", "Momento incierto"],
      answers: [
        ["Fase, calidad, canales y contexto inmediatamente anterior", true, "Correcto. Un trazado es una historia temporal; el cambio aislado no se interpreta solo."],
        ["Solo la altura máxima del pico", false, "La amplitud sin fase, canales y contexto ofrece una lectura incompleta."],
        ["El diagnóstico más frecuente", false, "La frecuencia clínica no sustituye la lectura ordenada del registro concreto."]
      ]
    },
    {
      tag: "Presión y flujo",
      title: "Comienza el flujo tras la orden miccional",
      prompt: "¿Qué combinación permite leer el vaciado como fenómeno funcional?",
      evidence: ["Orden de vaciar", "Cambio de presión", "Aparece flujo"],
      answers: [
        ["Presiones y flujo leídos juntos durante la fase", true, "Correcto. La relación entre contracción, salida y flujo es más informativa que cada canal aislado."],
        ["Solo el valor máximo de flujo", false, "El flujo aislado no explica qué presión ni qué mecanismo lo acompañó."],
        ["Solo Pves porque contiene toda la información", false, "Pves incluye componentes distintos y debe leerse con Pabd, Pdet, flujo y eventos."]
      ]
    }
  ],
  instrument: [
    {
      tag: "Cálculo sintético",
      title: "Pves y Pabd aumentan casi juntas",
      prompt: "Si Pves = 42 y Pabd = 40, ¿cuál es la Pdet derivada?",
      evidence: ["Pves: 42", "Pabd: 40", "Pdet = Pves - Pabd"],
      answers: [
        ["2 unidades de presión", true, "Correcto. 42 - 40 = 2. Son valores sintéticos para comprender la relación, no umbrales clínicos."],
        ["40 unidades de presión", false, "Ese es el valor de Pabd, no el resultado de la resta."],
        ["82 unidades de presión", false, "Pdet se deriva mediante una resta, no sumando ambos canales."]
      ]
    },
    {
      tag: "Cálculo sintético",
      title: "Pves aumenta más que Pabd",
      prompt: "Si Pves = 35 y Pabd = 10, ¿cuál es la Pdet derivada?",
      evidence: ["Pves: 35", "Pabd: 10", "Pdet = Pves - Pabd"],
      answers: [
        ["25 unidades de presión", true, "Correcto. 35 - 10 = 25. Después del cálculo todavía corresponde evaluar calidad, fase y evento."],
        ["45 unidades de presión", false, "Eso suma las señales; Pdet se obtiene restando Pabd a Pves."],
        ["10 unidades de presión", false, "Ese valor corresponde a Pabd, no a la presión derivada."]
      ]
    },
    {
      tag: "Señal derivada",
      title: "Pabd permanece plana durante una tos",
      prompt: "¿Qué ocurre con la confianza en Pdet, aunque el equipo pueda calcularla?",
      evidence: ["Tos registrada", "Pves responde", "Pabd no responde"],
      answers: [
        ["La cifra puede calcularse, pero su interpretación fisiológica no es confiable", true, "Correcto. Una resta exacta no corrige una señal de entrada que transmite mal."],
        ["Pdet se vuelve automáticamente diagnóstica", false, "El cálculo no convierte una medición dudosa en evidencia clínica."],
        ["Pabd deja de ser necesaria", false, "Sin una estimación abdominal confiable no puedes separar adecuadamente los componentes de Pves."]
      ]
    }
  ],
  artifacts: [
    {
      tag: "Prueba de transmisión",
      title: "La tos aparece solo en Pves",
      prompt: "¿Qué verificación tiene prioridad?",
      evidence: ["Evento: tos", "Pves: pico", "Pabd: sin respuesta"],
      answers: [
        ["Revisar posición, transmisión y funcionamiento del canal Pabd", true, "Correcto. Primero se explica la discordancia técnica; después se interpreta fisiología."],
        ["Diagnosticar una contracción detrusoriana", false, "Una tos con mala respuesta abdominal exige control técnico antes de esa inferencia."],
        ["Eliminar el evento del registro", false, "El marcador de tos es precisamente la referencia que revela la incoherencia."]
      ]
    },
    {
      tag: "Coherencia entre canales",
      title: "Pabd sube sola y Pdet se hace negativa",
      prompt: "¿Cuál es la conducta interpretativa más prudente?",
      evidence: ["Pves estable", "Pabd aumenta", "Pdet desciende"],
      answers: [
        ["Revisar un evento localizado o un problema de transmisión en Pabd", true, "Correcto. La discordancia orienta primero a revisar qué ocurrió en el canal abdominal."],
        ["Concluir presión vesical negativa real", false, "Pdet es una resta. Una alteración localizada de Pabd puede fabricar ese descenso derivado."],
        ["Usar solo Pdet porque ya corrige los otros canales", false, "Pdet hereda cualquier error de Pves o Pabd; no los corrige automáticamente."]
      ]
    },
    {
      tag: "Línea base",
      title: "Pves cambia bruscamente sin evento clínico",
      prompt: "¿Qué debe comprobarse antes de atribuir el cambio al paciente?",
      evidence: ["Salto de línea base", "Sin tos ni movimiento anotado", "Cambio abrupto"],
      answers: [
        ["Catéter, cero, conexión y transmisión del canal", true, "Correcto. Un salto abrupto sin contexto obliga a comprobar el sistema de medición."],
        ["Una enfermedad infrecuente", false, "Lo infrecuente no debe ser la primera explicación de una señal técnicamente sospechosa."],
        ["La conclusión final del informe", false, "Todavía no existe base suficiente para una conclusión fisiológica o clínica."]
      ]
    }
  ]
};

const challengeAnswerOffsets = {
  thinking: [1, 2, 0],
  physiology: [2, 1, 2],
  tracing: [1, 2, 1],
  instrument: [2, 1, 0],
  artifacts: [1, 2, 1]
};

function orderedAnswers(answers, offset = 0) {
  const withOrigin = answers.map((answer, originalIndex) => ({ answer, originalIndex }));
  const safeOffset = ((offset % answers.length) + answers.length) % answers.length;
  return [...withOrigin.slice(safeOffset), ...withOrigin.slice(0, safeOffset)];
}

function displayedCorrectLetter(answers, offset = 0) {
  const correctIndex = orderedAnswers(answers, offset).findIndex(({ answer }) => answer[1]);
  return correctIndex >= 0 ? String.fromCharCode(65 + correctIndex) : "?";
}

window.__urodynamicTutorDiagnostics = {
  buildRevision: BUILD_REVISION,
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

