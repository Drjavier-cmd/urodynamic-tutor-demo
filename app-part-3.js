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
  features: {
    persistentTheme: true,
    traceLocalizationChallenge: true,
    syntheticChapterTraces: true
  },
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


