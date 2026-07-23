(function registerUrodynamicCompetencyModel() {
  const competencies = [
    {
      id: "question",
      label: "Pregunta",
      prompt: "¿Qué intenta responder el estudio?",
      description: "Transforma el síntoma y la decisión clínica en una pregunta funcional verificable."
    },
    {
      id: "phase",
      label: "Fase",
      prompt: "¿En qué momento del ciclo ocurre?",
      description: "Distingue almacenamiento, maniobra, transición y vaciado antes de interpretar."
    },
    {
      id: "quality",
      label: "Calidad",
      prompt: "¿El segmento es interpretable?",
      description: "Comprueba transmisión, línea de base, coherencia y artefactos antes del significado."
    },
    {
      id: "signal",
      label: "Señal",
      prompt: "¿Qué canal cambió realmente?",
      description: "Separa presiones medidas, presión derivada, flujo y actividad registrada."
    },
    {
      id: "event",
      label: "Evento",
      prompt: "¿Qué ocurrió en ese instante?",
      description: "Relaciona la señal con tos, Valsalva, posición, sensación, fuga u orden miccional."
    },
    {
      id: "inference",
      label: "Inferencia",
      prompt: "¿Qué explicación funcional sostiene la evidencia?",
      description: "Propone un mecanismo proporcional sin saltar directamente al diagnóstico clínico."
    },
    {
      id: "limit",
      label: "Límite",
      prompt: "¿Qué no puede concluirse?",
      description: "Declara los límites técnicos, contextuales y de representatividad del estudio."
    },
    {
      id: "response",
      label: "Respuesta",
      prompt: "¿Cómo se traduce el estudio a una respuesta útil?",
      description: "Integra hallazgo, pregunta clínica y límites en una conclusión funcional breve."
    }
  ];

  const domains = [
    { id: "technicalQuality", label: "Calidad técnica" },
    { id: "storage", label: "Almacenamiento" },
    { id: "voiding", label: "Vaciado" },
    { id: "coordination", label: "Coordinación" },
    { id: "representativeness", label: "Representatividad" },
    { id: "limits", label: "Límites de interpretación" }
  ];

  const errorTaxonomy = {
    wrongPhase: {
      label: "Confusión de fase",
      microLesson: "Ubica primero almacenamiento, maniobra, transición o vaciado. La misma señal cambia de significado según el momento."
    },
    invalidSignal: {
      label: "Aceptó una señal inválida",
      microLesson: "Antes de interpretar, revisa transmisión, líneas de base, respuesta a la tos y coherencia entre canales."
    },
    isolatedPdet: {
      label: "Interpretó Pdet de forma aislada",
      microLesson: "Pdet es una resta. Revisa primero qué ocurrió con Pves y Pabd antes de atribuir el cambio al detrusor."
    },
    ignoredContext: {
      label: "Ignoró el contexto",
      microLesson: "Relaciona la curva con la maniobra, posición, sensación, fuga y condiciones en que se obtuvo."
    },
    ignoredRepresentativeness: {
      label: "Ignoró representatividad",
      microLesson: "Una micción registrada puede no reproducir la vida cotidiana. La opinión contemporánea del paciente condiciona la conclusión."
    },
    overinterpretation: {
      label: "Sobreinterpretó el hallazgo",
      microLesson: "Describe primero lo observado. Una medición o un patrón funcional no demuestra por sí solo etiología, anatomía ni tratamiento."
    }
  };

  const pretest = [
    {
      id: "pre-quality-cough",
      domain: "technicalQuality",
      competency: "quality",
      prompt: "Durante una tos, Pves aumenta y Pabd permanece plana. ¿Qué debe hacerse primero?",
      options: [
        "Informar una contracción detrusoriana",
        "Verificar la transmisión del canal abdominal",
        "Usar solamente Pves",
        "Calcular una presión de fuga"
      ],
      correctIndex: 1,
      explanation: "La tos debe transmitirse a ambos canales medidos. Si Pabd no responde, Pdet pierde confiabilidad.",
      errorType: "invalidSignal",
      remediation: { chapter: "artifacts", scenario: "artifactFlatPabd" }
    },
    {
      id: "pre-quality-drift",
      domain: "technicalQuality",
      competency: "signal",
      prompt: "Pabd cambia lentamente de línea de base sin un evento clínico. ¿Qué lectura es más prudente?",
      options: [
        "La vejiga perdió acomodación",
        "Se demostró actividad rectal fisiológica",
        "Hay que revisar deriva, posición y transmisión antes de interpretar Pdet",
        "El hallazgo confirma obstrucción"
      ],
      correctIndex: 2,
      explanation: "Una modificación sostenida de un canal medido puede fabricar cambios en la señal derivada.",
      errorType: "isolatedPdet",
      remediation: { chapter: "pressurePhysics", scenario: "physicsWrongZero" }
    },
    {
      id: "pre-storage-sensation",
      domain: "storage",
      competency: "phase",
      prompt: "Durante el llenado aparece urgencia con Pdet estable. ¿Qué puede afirmarse?",
      options: [
        "Existe una experiencia sensitiva sin contracción detrusoriana demostrada",
        "Se confirmó hiperactividad detrusoriana",
        "La urgencia no es real",
        "El estudio demuestra una causa psicológica"
      ],
      correctIndex: 0,
      explanation: "Sensación y presión son datos distintos. La urgencia puede existir sin una elevación demostrada de Pdet.",
      errorType: "overinterpretation",
      remediation: { chapter: "storageDisorders", scenario: "storageSensitivity" }
    },
    {
      id: "pre-storage-pressure",
      domain: "storage",
      competency: "inference",
      prompt: "¿Qué patrón orienta a un problema de acomodación y no a un pico aislado?",
      options: [
        "Una tos breve",
        "Un cambio de posición",
        "Una contracción transitoria",
        "Un aumento progresivo y sostenido de Pdet mientras aumenta el volumen"
      ],
      correctIndex: 3,
      explanation: "La acomodación se interpreta como una relación progresiva entre volumen y presión, excluyendo picos y artefactos.",
      errorType: "wrongPhase",
      remediation: { chapter: "storageDisorders", scenario: "storageCompliance" }
    },
    {
      id: "pre-voiding-flow",
      domain: "voiding",
      competency: "inference",
      prompt: "La uroflujometría muestra flujo bajo. ¿Cuál es la conclusión inicial correcta?",
      options: [
        "Existe obstrucción",
        "El flujo bajo inicia la pregunta, pero no identifica por sí solo el mecanismo",
        "Existe hipoactividad detrusoriana",
        "El vaciado es necesariamente no representativo"
      ],
      correctIndex: 1,
      explanation: "El flujo debe relacionarse con presión detrusoriana, presión abdominal, salida y residuo.",
      errorType: "overinterpretation",
      remediation: { chapter: "voidingDisorders", scenario: "voidingResistance" }
    },
    {
      id: "pre-voiding-abdominal",
      domain: "voiding",
      competency: "signal",
      prompt: "Cada pulso de flujo coincide con un aumento de Pabd, con escaso cambio real de Pdet. ¿Qué describe mejor el registro?",
      options: [
        "Contracción detrusoriana sostenida",
        "Disinergia demostrada",
        "Participación predominante de la prensa abdominal",
        "Vaciado normal demostrado"
      ],
      correctIndex: 2,
      explanation: "La relación temporal indica que el flujo se genera principalmente con presión abdominal.",
      errorType: "isolatedPdet",
      remediation: { chapter: "voidingDisorders", scenario: "voidingAbdominal" }
    },
    {
      id: "pre-coordination-neuro",
      domain: "coordination",
      competency: "event",
      prompt: "En un paciente con lesión neurológica relevante, el detrusor se contrae mientras aumenta la actividad de salida. ¿Qué hipótesis corresponde evaluar?",
      options: [
        "Posible disinergia detrusor-esfínter",
        "Incontinencia urodinámica de esfuerzo",
        "Hipersensibilidad aislada",
        "Acomodación normal"
      ],
      correctIndex: 0,
      explanation: "El contexto neurológico y la simultaneidad entre detrusor y salida hacen plausible una disinergia, que aún debe sostenerse con señales confiables.",
      errorType: "ignoredContext",
      remediation: { chapter: "coordinationDisorders", scenario: "coordinationDyssynergia" }
    },
    {
      id: "pre-coordination-nonneuro",
      domain: "coordination",
      competency: "limit",
      prompt: "Una persona sin enfermedad neurológica presenta flujo intermitente y actividad perineal variable. ¿Qué término debe evitarse como conclusión automática?",
      options: [
        "Relajación inadecuada de la salida",
        "Vaciado disfuncional posible",
        "Patrón que requiere integrar Pabd y EMG",
        "Disinergia detrusor-esfínter"
      ],
      correctIndex: 3,
      explanation: "La disinergia detrusor-esfínter requiere una alteración neurológica relevante.",
      errorType: "overinterpretation",
      remediation: { chapter: "coordinationDisorders", scenario: "coordinationDysfunctional" }
    },
    {
      id: "pre-representative-voiding",
      domain: "representativeness",
      competency: "limit",
      prompt: "El paciente afirma: «yo nunca orino así», aunque existe una curva registrada. ¿Cómo debe incorporarse?",
      options: [
        "Debe ignorarse porque el equipo registró flujo",
        "Como un límite de representatividad del vaciado",
        "Como prueba de enfermedad funcional",
        "Como evidencia de simulación"
      ],
      correctIndex: 1,
      explanation: "La representatividad forma parte del estudio y condiciona el alcance de la interpretación.",
      errorType: "ignoredRepresentativeness",
      remediation: { chapter: "thinking", scenario: "thinkingRepresentativeness" }
    },
    {
      id: "pre-representative-negative",
      domain: "representativeness",
      competency: "question",
      prompt: "No se reproduce la fuga referida por el paciente. ¿Qué conclusión conserva mejor la pregunta original?",
      options: [
        "El paciente no presenta incontinencia",
        "Se demostró otra fisiopatología",
        "La fuga no se demostró bajo las condiciones del estudio",
        "La historia clínica debe descartarse"
      ],
      correctIndex: 2,
      explanation: "Una respuesta negativa delimita lo observado, pero no invalida automáticamente el síntoma cotidiano.",
      errorType: "ignoredRepresentativeness",
      remediation: { chapter: "thinking", scenario: "thinkingLimit" }
    },
    {
      id: "pre-limit-obstruction",
      domain: "limits",
      competency: "inference",
      prompt: "Presión detrusoriana alta y flujo bajo orientan inicialmente a:",
      options: [
        "Aumento de la resistencia de salida, sin localizar todavía su causa",
        "Una estenosis uretral demostrada",
        "Crecimiento prostático demostrado",
        "Disinergia demostrada"
      ],
      correctIndex: 0,
      explanation: "El patrón presión-flujo orienta al mecanismo de resistencia, pero no demuestra por sí solo anatomía o etiología.",
      errorType: "overinterpretation",
      remediation: { chapter: "voidingDisorders", scenario: "voidingResistance" }
    },
    {
      id: "pre-limit-oab",
      domain: "limits",
      competency: "response",
      prompt: "Un estudio no muestra hiperactividad detrusoriana en un paciente con urgencia habitual. ¿Cómo debe responderse?",
      options: [
        "Se descarta vejiga hiperactiva",
        "La urgencia es necesariamente sensitiva",
        "La urgencia no tiene relevancia clínica",
        "No se observó hiperactividad durante este estudio; el síndrome clínico no queda descartado"
      ],
      correctIndex: 3,
      explanation: "Vejiga hiperactiva es un síndrome clínico; hiperactividad detrusoriana es un hallazgo urodinámico.",
      errorType: "overinterpretation",
      remediation: { chapter: "storageDisorders", scenario: "storageSensitivity" }
    }
  ];

  const posttest = [
    {
      id: "post-quality-derived",
      domain: "technicalQuality",
      competency: "signal",
      prompt: "Pves permanece estable y Pabd cae abruptamente tras un movimiento. Pdet asciende. ¿Qué explica mejor el cambio?",
      options: [
        "Contracción detrusoriana terminal",
        "Pérdida de acomodación",
        "Cambio artefactual de la presión derivada por alteración de Pabd",
        "Aumento de resistencia uretral"
      ],
      correctIndex: 2,
      explanation: "Pdet aumenta matemáticamente cuando Pabd cae, aunque Pves no cambie.",
      errorType: "isolatedPdet",
      remediation: { chapter: "artifacts", scenario: "artifactDrift" }
    },
    {
      id: "post-quality-cough",
      domain: "technicalQuality",
      competency: "quality",
      prompt: "¿Qué observación apoya que ambos canales de presión transmiten una tos?",
      options: [
        "Pves y Pabd muestran cambios concordantes durante el evento",
        "Solo Pdet presenta un pico",
        "El flujo aumenta",
        "El paciente refiere urgencia"
      ],
      correctIndex: 0,
      explanation: "La concordancia entre las dos presiones medidas permite evaluar la confiabilidad de la señal derivada.",
      errorType: "invalidSignal",
      remediation: { chapter: "instrument", scenario: "instrumentTransmission" }
    },
    {
      id: "post-storage-leak",
      domain: "storage",
      competency: "event",
      prompt: "Aparece fuga durante una tos, Pabd y Pves aumentan juntas y no existe elevación real de Pdet. ¿Qué relación se observó?",
      options: [
        "Fuga asociada a una contracción detrusoriana",
        "Fuga por presión progresiva de llenado",
        "Fuga sin evento identificable",
        "Fuga asociada a aumento abdominal sin contracción detrusoriana"
      ],
      correctIndex: 3,
      explanation: "La secuencia evento abdominal, transmisión y fuga define la relación observada.",
      errorType: "wrongPhase",
      remediation: { chapter: "storageDisorders", scenario: "storageLeak" }
    },
    {
      id: "post-storage-stable",
      domain: "storage",
      competency: "inference",
      prompt: "La vejiga no presenta contracciones involuntarias, pero Pdet aumenta progresivamente con el volumen. ¿Qué principio evita un falso «normal»?",
      options: [
        "La ausencia de fuga demuestra seguridad",
        "Una vejiga estable puede almacenar a presión inadecuada",
        "La capacidad explica por sí sola el mecanismo",
        "La presión final debe ignorarse"
      ],
      correctIndex: 1,
      explanation: "Estabilidad y acomodación son dimensiones diferentes del almacenamiento.",
      errorType: "overinterpretation",
      remediation: { chapter: "storageDisorders", scenario: "storageCompliance" }
    },
    {
      id: "post-voiding-low-pressure",
      domain: "voiding",
      competency: "inference",
      prompt: "Una persona vacía con buen flujo, residuo bajo y escasa elevación de Pdet. ¿Qué interpretación es más prudente?",
      options: [
        "Hipoactividad detrusoriana demostrada",
        "Acontractilidad",
        "La presión puede ser suficiente frente a una baja resistencia de salida",
        "Obstrucción funcional"
      ],
      correctIndex: 2,
      explanation: "La suficiencia de la presión depende de la resistencia que debe vencerse y de la eficiencia del vaciado.",
      errorType: "overinterpretation",
      remediation: { chapter: "physiology", scenario: "physiologyVoiding" }
    },
    {
      id: "post-voiding-failed",
      domain: "voiding",
      competency: "limit",
      prompt: "El paciente no logra iniciar la micción con catéteres, pero luego orina de manera habitual. ¿Qué debe considerarse primero?",
      options: [
        "Inhibición y falta de representatividad durante el estudio",
        "Acontractilidad definitiva",
        "Obstrucción anatómica",
        "Disinergia"
      ],
      correctIndex: 0,
      explanation: "Una micción fallida en condiciones artificiales no demuestra por sí sola incapacidad contráctil cotidiana.",
      errorType: "ignoredRepresentativeness",
      remediation: { chapter: "voidingDisorders", scenario: "voidingInhibited" }
    },
    {
      id: "post-coordination-emg",
      domain: "coordination",
      competency: "signal",
      prompt: "Aumenta el EMG perineal sin cambios concordantes de flujo, Pdet o imagen. ¿Qué conclusión corresponde?",
      options: [
        "Obstrucción funcional demostrada",
        "Disinergia demostrada",
        "Vaciado disfuncional demostrado",
        "Actividad eléctrica o artefacto que requiere correlación antes de adjudicar efecto obstructivo"
      ],
      correctIndex: 3,
      explanation: "El EMG registra actividad eléctrica de varias estructuras y no demuestra por sí solo cierre uretral.",
      errorType: "invalidSignal",
      remediation: { chapter: "coordinationDisorders", scenario: "coordinationAbdominalMimic" }
    },
    {
      id: "post-coordination-delay",
      domain: "coordination",
      competency: "event",
      prompt: "Existe un intervalo breve entre el inicio del aumento de presión y la llegada de orina al flujómetro. ¿Qué debe evitarse?",
      options: [
        "Registrar el inicio del flujo",
        "Llamarlo automáticamente relajación esfinteriana tardía",
        "Relacionarlo con la apertura uretral",
        "Revisar el contexto temporal"
      ],
      correctIndex: 1,
      explanation: "Existe un retraso fisiológico de flujo; para atribuir cierre de salida se requiere evidencia adicional.",
      errorType: "overinterpretation",
      remediation: { chapter: "coordinationDisorders", scenario: "coordinationDelayed" }
    },
    {
      id: "post-representative-position",
      domain: "representativeness",
      competency: "question",
      prompt: "Una paciente refiere pérdida únicamente de pie, pero el test se realiza solo acostada y resulta negativo. ¿Qué falta?",
      options: [
        "Un diagnóstico alternativo",
        "Una cifra de presión más alta",
        "Evaluar el fenómeno en condiciones que reproduzcan la pregunta clínica",
        "Ignorar la historia"
      ],
      correctIndex: 2,
      explanation: "La técnica debe adaptarse a la pregunta y a las circunstancias habituales del síntoma.",
      errorType: "ignoredContext",
      remediation: { chapter: "storageDisorders", scenario: "storageLeak" }
    },
    {
      id: "post-representative-volume",
      domain: "representativeness",
      competency: "limit",
      prompt: "El llenado termina precozmente por dolor no habitual causado por el procedimiento. ¿Cómo afecta la capacidad obtenida?",
      options: [
        "Debe interpretarse como capacidad reducida demostrada",
        "Queda condicionada por una limitación contextual no representativa",
        "Demuestra hipersensibilidad",
        "Demuestra baja acomodación"
      ],
      correctIndex: 1,
      explanation: "La capacidad es el punto donde terminó el llenado; el motivo del término define su significado.",
      errorType: "ignoredRepresentativeness",
      remediation: { chapter: "storageDisorders", scenario: "storageNotReproduced" }
    },
    {
      id: "post-limit-neuro",
      domain: "limits",
      competency: "inference",
      prompt: "Una lesión medular hace plausible un patrón clásico, pero el trazado no coincide. ¿Qué conducta es correcta?",
      options: [
        "Forzar el trazado dentro del patrón esperado",
        "Descartar la lesión",
        "Informar el patrón clásico aunque no se observe",
        "Revisar extensión, evolución, patología mixta, técnica y representatividad"
      ],
      correctIndex: 3,
      explanation: "La lesión orienta una hipótesis; la urodinamia muestra el comportamiento actual del paciente.",
      errorType: "ignoredContext",
      remediation: { chapter: "neuroUrology", scenario: "neuroMultipleSclerosis" }
    },
    {
      id: "post-limit-report",
      domain: "limits",
      competency: "response",
      prompt: "¿Qué estructura produce una conclusión clínicamente útil?",
      options: [
        "Lista de todas las cifras sin jerarquía",
        "Etiqueta diagnóstica sin límites",
        "Hallazgo observado, inferencia funcional, respuesta a la pregunta y límites",
        "Descripción del equipo utilizado"
      ],
      correctIndex: 2,
      explanation: "La conclusión debe traducir el registro en una respuesta proporcional y declarar lo que queda abierto.",
      errorType: "overinterpretation",
      remediation: { chapter: "thinking", scenario: "thinkingQuestion" }
    }
  ];

  const challengeCompetencyMap = {
    thinking: ["signal", "limit", "quality", "signal", "limit"],
    physiology: ["phase", "phase", "signal"],
    tracing: ["phase", "event", "signal"],
    pressurePhysics: ["quality", "quality", "quality", "signal"],
    instrument: ["signal", "quality", "signal"],
    artifacts: ["quality", "quality", "event"],
    storageDisorders: ["inference", "signal", "limit", "event", "response"],
    voidingDisorders: ["inference", "signal", "limit"],
    coordinationDisorders: ["event", "signal", "limit", "inference"],
    neuroUrology: ["inference", "phase", "limit", "quality", "response"]
  };

  const chapterCompetencies = {
    thinking: ["question", "quality", "signal", "limit", "response"],
    physiology: ["phase", "signal", "event"],
    tracing: ["phase", "signal", "event", "inference"],
    pressurePhysics: ["quality", "signal"],
    instrument: ["quality", "signal"],
    artifacts: ["quality", "signal", "event", "limit"],
    storageDisorders: ["phase", "signal", "event", "inference", "limit", "response"],
    voidingDisorders: ["phase", "signal", "inference", "limit", "response"],
    coordinationDisorders: ["phase", "signal", "event", "inference", "limit"],
    neuroUrology: ["question", "phase", "inference", "limit", "response"]
  };

  const capstoneCase = {
    id: "capstone-derived-pressure",
    difficulty: "capstone",
    synthetic: true,
    title: "Caso final sintético: cuando la señal derivada parece cambiar",
    question: "¿El aumento aparente de Pdet durante el llenado permite afirmar actividad detrusoriana?",
    context:
      "El estudio busca reproducir urgencia. La transmisión inicial es concordante. Después de un cambio de posición, Pabd desciende de forma abrupta y permanece en una nueva línea de base, mientras Pves cambia poco. La Pdet derivada asciende y el paciente comunica urgencia.",
    eventWindow: { start: 0.52, end: 0.61 },
    structuredQuestions: [
      {
        id: "segment",
        competency: "quality",
        prompt: "¿Qué segmento conserva mejor interpretabilidad inmediata?",
        options: [
          "El tramo anterior al cambio abrupto de Pabd",
          "Todo el registro sin restricciones",
          "Solo la Pdet posterior",
          "Ningún segmento del estudio"
        ],
        correctIndex: 0
      },
      {
        id: "phase",
        competency: "phase",
        prompt: "¿En qué fase ocurre el evento principal?",
        options: ["Vaciado", "Almacenamiento", "Después del estudio", "No puede ubicarse"],
        correctIndex: 1
      },
      {
        id: "relationship",
        competency: "signal",
        prompt: "¿Qué relación entre canales explica el aumento aparente de Pdet?",
        options: [
          "Pves y Pabd aumentan juntas",
          "Pves cae y Pabd permanece estable",
          "Pabd cae mientras Pves cambia poco",
          "El flujo aumenta antes de la presión"
        ],
        correctIndex: 2
      }
    ],
    expertReport: {
      question: "Determinar si la urgencia se acompaña de una elevación detrusoriana interpretable durante el llenado.",
      phase: "El evento ocurre durante almacenamiento, después de un cambio de posición.",
      quality: "La nueva línea de base de Pabd obliga a revisar transmisión y posición antes de interpretar la Pdet posterior.",
      signal: "Pabd desciende bruscamente, Pves cambia poco y la resta produce un ascenso aparente de Pdet.",
      event: "Cambio postural seguido de modificación sostenida del canal abdominal y urgencia referida.",
      inference: "La elevación posterior de Pdet no es confiable como demostración de actividad detrusoriana hasta corregir o validar Pabd.",
      limit: "Ese segmento no permite confirmar ni excluir el mecanismo de la urgencia habitual.",
      response: "Urgencia reproducida, pero sin demostración confiable de una contracción detrusoriana en el segmento afectado por pérdida de calidad del canal abdominal."
    }
  };

  const reportFields = competencies.map((competency) => ({
    id: competency.id,
    label: competency.label,
    prompt: competency.prompt,
    helper: competency.description
  }));

  const scientificGovernance = {
    productVersion: "0.2.0-assessment-alpha",
    contentBaseline: "v0.1.0-content-baseline",
    updatedAt: "2026-07-23",
    author: "Dr. Javier Alejandro Muñoz Quintana",
    externalReviewer: "Pendiente de designación",
    contentPolicy:
      "Ningún cambio fisiológico o interpretativo se considera aprobado sin registro en el cambio científico y validación clínica del autor.",
    chapters: {
      thinking: { status: "Vigente", source: "Documento maestro del curso", reviewedAt: "2026-07-22" },
      physiology: { status: "Revisión clínica pendiente", source: "cap1 cap 2.txt", reviewedAt: null },
      tracing: { status: "Vigente", source: "Documento maestro y trazados sintéticos", reviewedAt: "2026-07-21" },
      pressurePhysics: { status: "Vigente", source: "Principios físicos docentes del sistema de presión", reviewedAt: "2026-07-21" },
      instrument: { status: "Vigente", source: "Descripción funcional del instrumento", reviewedAt: "2026-07-21" },
      artifacts: { status: "Vigente", source: "Buena práctica y trazados sintéticos", reviewedAt: "2026-07-21" },
      storageDisorders: { status: "Versión docente; revisión externa pendiente", source: "Texto clínico del autor", reviewedAt: "2026-07-20" },
      voidingDisorders: { status: "Versión docente; revisión externa pendiente", source: "Texto clínico del autor", reviewedAt: "2026-07-20" },
      coordinationDisorders: { status: "Versión docente; revisión externa pendiente", source: "Texto clínico del autor", reviewedAt: "2026-07-20" },
      neuroUrology: { status: "Versión docente; revisión externa pendiente", source: "Texto clínico del autor", reviewedAt: "2026-07-20" }
    }
  };

  const instructorMode = {
    audience: "Becados de urología y urólogos que inician interpretación funcional",
    suggestedDuration: "6 a 8 horas, más revisión docente del caso final",
    prerequisites: [
      "Anatomía funcional básica del tracto urinario inferior",
      "Lectura clínica inicial de síntomas de almacenamiento y vaciado",
      "Acceso individual a un navegador moderno"
    ],
    objectives: [
      "Separar pregunta, fase, calidad, señal, evento, inferencia, límite y respuesta",
      "Reconocer cuándo una señal no permite una interpretación confiable",
      "Traducir un trazado sintético a una respuesta funcional prudente",
      "Comparar pretest, postest y caso final con una rúbrica común"
    ],
    cohortPolicy:
      "Esta versión estática exporta resultados anónimos por alumno. La gestión agregada de cohortes requiere autenticación, almacenamiento institucional y aprobación de gobernanza de datos."
  };

  window.UroDynamicCompetencyModel = Object.freeze({
    competencies,
    domains,
    errorTaxonomy,
    pretest,
    posttest,
    challengeCompetencyMap,
    chapterCompetencies,
    capstoneCase,
    reportFields,
    scientificGovernance,
    instructorMode
  });
})();
