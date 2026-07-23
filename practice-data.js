(function registerUrodynamicPracticeData() {
const { scenarios } = window.UroDynamicCourseContent || {};
if (!scenarios) throw new Error("No se pudo cargar el catálogo base de escenarios.");

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
    },
    {
      ...scenarios.inhibitedVoiding,
      id: "thinkingRepresentativeness",
      tabLabel: "Micción no habitual",
      pattern: "inhibitedVoiding",
      focus: "limit",
      answerOffset: 0,
      title: "El paciente no reconoce esta micción",
      eventLabel: "sin flujo con catéteres",
      event: {
        ...scenarios.inhibitedVoiding.event,
        title: "Caso sintético: micción inhibida durante el estudio",
        label: "representatividad",
        reading: "No aparece contracción ni flujo con los catéteres, pero el paciente orina normalmente después de retirarlos.",
        caution: "La fase instrumentada no permite demostrar acontractilidad."
      },
      question: "¿Qué conclusión respeta mejor la evidencia completa?",
      answers: [
        ["La micción instrumentada no fue representativa y no demuestra acontractilidad", true, "Correcto. La micción posterior obliga a incorporar inhibición y representatividad."],
        ["La ausencia de flujo confirma obstrucción", false, "Sin una relación presión-flujo interpretable no puede demostrarse obstrucción."],
        ["El relato posterior no modifica el trazado", false, "La experiencia del paciente y la micción posterior forman parte del contexto interpretativo."]
      ]
    },
    {
      ...scenarios.signal,
      id: "thinkingQuality",
      tabLabel: "Pabd defectuosa",
      pattern: "flatPabd",
      focus: "quality",
      answerOffset: 1,
      title: "La tos no se transmite en Pabd",
      eventLabel: "Pves responde; Pabd permanece plana",
      event: {
        ...scenarios.signal.event,
        title: "Caso sintético: una señal derivada engañosa",
        label: "calidad antes de fisiología",
        reading: "Durante una tos, Pves aumenta y Pabd permanece plana; Pdet hereda un pico artificial.",
        caution: "Primero se corrige o limita el canal abdominal; después se interpreta fisiología."
      },
      question: "¿Qué debe hacerse antes de interpretar Pdet?",
      answers: [
        ["Verificar posición, conexión y transmisión del canal abdominal", true, "Correcto. Pdet no es confiable si una de sus señales de entrada es defectuosa."],
        ["Informar una contracción detrusoriana", false, "La discordancia durante la tos exige primero resolver la calidad técnica."],
        ["Usar Pves como sustituto de Pdet", false, "Pves incluye la contribución abdominal y no reemplaza la resta multicanal."]
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
    },
    {
      ...scenarios.storageOversensitivity,
      id: "tracingUrgencyStable",
      tabLabel: "Urgencia",
      pattern: "storageOversensitivity",
      focus: "event",
      answerOffset: 0,
      title: "Urgencia con Pdet estable",
      question: "¿Qué demuestra este segmento y qué no demuestra?",
      answers: [
        ["Se reprodujo urgencia sin demostrar una contracción detrusoriana asociada", true, "Correcto. El síntoma ocurrió, pero Pdet permaneció estable."],
        ["La paciente no presentó urgencia", false, "La urgencia fue comunicada y debe registrarse aunque no exista contracción."],
        ["Se confirmó hiperactividad detrusoriana", false, "Ese hallazgo requiere una elevación real y confiable de Pdet durante el llenado."]
      ]
    },
    {
      ...scenarios.detrusorStorage,
      id: "tracingDetrusor",
      tabLabel: "Origen vesical",
      pattern: "detrusorStorage",
      focus: "signal",
      answerOffset: 2,
      title: "Pves asciende sin Pabd equivalente",
      question: "¿Cuál es el siguiente paso antes de nombrar el fenómeno?",
      answers: [
        ["Confirmar calidad, fase y contexto del aumento real de Pdet", true, "Correcto. La relación sugiere origen vesical, pero primero debe demostrarse que las señales son confiables."],
        ["Diagnosticar hiperactividad por la forma de Pves", false, "Pves aislada no basta y el nombre exige revisar Pabd, Pdet y contexto."],
        ["Ignorar la experiencia del paciente", false, "Sensación, urgencia y fuga ayudan a caracterizar el evento sin sustituir la señal."]
      ]
    },
    {
      ...scenarios.abdominalVoiding,
      id: "tracingAbdominalVoiding",
      tabLabel: "Prensa abdominal",
      pattern: "abdominalVoiding",
      focus: "event",
      answerOffset: 1,
      title: "Flujo por pulsos después de Pabd",
      question: "¿Qué relación temporal se observa?",
      answers: [
        ["Cada pulso de flujo coincide con esfuerzo abdominal, sin contracción sostenida de Pdet", true, "Correcto. Describe participación abdominal sin adjudicar todavía su causa."],
        ["El flujo intermitente demuestra obstrucción", false, "La forma del flujo no distingue por sí sola resistencia, fuerza o estrategia miccional."],
        ["Existe acontractilidad confirmada", false, "La participación abdominal no basta para demostrar incapacidad detrusoriana."]
      ]
    }
  ],
  pressurePhysics: [
    {
      ...scenarios.signal,
      id: "physicsLevelLow",
      tabLabel: "Transductor bajo",
      pattern: "hydrostaticShift",
      focus: "quality",
      answerOffset: 1,
      title: "Ambos canales cambian al descender el transductor",
      eventLabel: "transductores por debajo de la referencia",
      event: {
        ...scenarios.signal.event,
        title: "Cambio común de línea base por altura",
        label: "presión hidrostática añadida",
        timing: "después de modificar la altura del sistema externo",
        reading: "Pves y Pabd aumentan de forma semejante mientras Pdet cambia poco, porque ambos transductores recibieron un desplazamiento hidrostático común.",
        caution: "Que Pdet se conserve no vuelve correctas las presiones medidas ni reemplaza la nivelación."
      },
      question: "¿Qué explica mejor este cambio común?",
      answers: [
        ["El transductor quedó demasiado bajo y agregó una columna hidrostática", true, "Correcto. Un transductor externo más bajo que la referencia registra una presión adicional."],
        ["Se produjo una contracción detrusoriana", false, "Una contracción no elevaría Pabd de la misma manera."],
        ["La atmósfera dejó de ejercer presión", false, "La presión atmosférica no desaparece; se utiliza como referencia al hacer cero."]
      ]
    },
    {
      ...scenarios.signal,
      id: "physicsLevelHigh",
      tabLabel: "Transductor alto",
      pattern: "hydrostaticShift",
      focus: "quality",
      answerOffset: 2,
      title: "La altura reduce artificialmente las presiones medidas",
      eventLabel: "transductores por encima de la referencia",
      event: {
        ...scenarios.signal.event,
        title: "Desplazamiento común hacia una lectura menor",
        label: "referencia anatómica perdida",
        timing: "después de un cambio de posición",
        reading: "Pves y Pabd descienden juntas sin un evento clínico que lo explique, mientras la resta permanece casi estable.",
        caution: "Antes de interpretar una presión basal baja, debe comprobarse la altura de los transductores externos."
      },
      question: "¿Cuál es la primera verificación?",
      answers: [
        ["Revisar y corregir el nivel respecto del borde superior de la sínfisis del pubis", true, "Correcto. El cambio de posición obliga a reposicionar la referencia física."],
        ["Informar una caída de la actividad abdominal", false, "El cambio común y abrupto sin evento clínico orienta primero a la referencia del sistema."],
        ["Rehacer el diagnóstico con Pdet aislada", false, "Pdet puede ocultar un error común de ambos canales; las señales medidas siguen mal referenciadas."]
      ]
    },
    {
      ...scenarios.signal,
      id: "physicsBubbleDamping",
      tabLabel: "Burbuja",
      pattern: "bubbleDamping",
      focus: "quality",
      answerOffset: 1,
      title: "La tos llega amortiguada a Pabd",
      eventLabel: "tos con transmisión abdominal amortiguada",
      event: {
        ...scenarios.signal.event,
        title: "Una línea con aire deforma el evento",
        label: "respuesta lenta y de menor amplitud",
        timing: "durante una tos de control",
        reading: "Pves muestra un pico breve, pero Pabd responde más tarde y con menor amplitud; Pdet hereda una falsa diferencia.",
        caution: "Una burbuja o una línea complaciente modifica la respuesta dinámica y debe corregirse antes de interpretar."
      },
      question: "¿Qué conducta conserva la validez del estudio?",
      answers: [
        ["Purgar y revisar la línea abdominal, luego repetir la tos de control", true, "Correcto. Primero se restablece la transmisión y después se evalúa la señal derivada."],
        ["Aceptar Pdet porque la resta fue calculada", false, "La resta matemática hereda la diferencia artificial entre las entradas."],
        ["Diagnosticar una contracción vesical provocada por la tos", false, "La discordancia técnica debe resolverse antes de una inferencia fisiológica."]
      ]
    },
    {
      ...scenarios.signal,
      id: "physicsWrongZero",
      tabLabel: "Cero incorrecto",
      pattern: "zeroError",
      focus: "quality",
      answerOffset: 2,
      title: "Pves fue puesta a cero con presión aplicada",
      eventLabel: "referencia vesical incorrecta desde el inicio",
      event: {
        ...scenarios.signal.event,
        title: "Una entrada comienza con un desplazamiento artificial",
        label: "error de cero específico de canal",
        timing: "antes de iniciar el llenado",
        reading: "Pves conserva un desplazamiento respecto de Pabd y Pdet reproduce esa diferencia, aunque no exista un fenómeno fisiológico equivalente.",
        caution: "El cero debe realizarse abierto a la atmósfera y cerrado hacia el paciente."
      },
      question: "¿Qué afirma con precisión el cero atmosférico?",
      answers: [
        ["Define la atmósfera como referencia de 0 cmH2O para cada canal", true, "Correcto. No elimina la presión atmosférica; fija el punto desde el que se expresan las diferencias."],
        ["Elimina toda presión dentro de la vejiga", false, "El cero modifica la referencia del instrumento, no la presión física del paciente."],
        ["Compensa automáticamente cualquier error posterior de altura", false, "Cero y nivelación resuelven problemas distintos y ambos deben ser correctos."]
      ]
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
    },
    {
      ...scenarios.detrusorStorage,
      id: "instrumentDetrusor",
      tabLabel: "Pdet asciende",
      pattern: "detrusorStorage",
      focus: "signal",
      answerOffset: 0,
      title: "Pves cambia y Pabd permanece estable",
      question: "¿Qué enseña la resta en este evento?",
      answers: [
        ["Pdet aumenta y puede apoyar un origen vesical si ambas señales son confiables", true, "Correcto. La resta localiza la diferencia, pero fase y contexto siguen siendo necesarios."],
        ["Pves aislada confirma una contracción", false, "Pves contiene componentes abdominales y vesicales; debe compararse con Pabd."],
        ["Pdet mide directamente la contracción", false, "Pdet es una señal calculada, no un sensor de contracción."]
      ]
    },
    {
      ...scenarios.abdominalVoiding,
      id: "instrumentAbdominalVoiding",
      tabLabel: "Pujo y flujo",
      pattern: "abdominalVoiding",
      focus: "signal",
      answerOffset: 1,
      title: "Pves y Pabd aumentan con aparición de flujo",
      question: "¿Qué puede afirmarse directamente?",
      answers: [
        ["El vaciado registrado muestra participación de la prensa abdominal", true, "Correcto. La relación Pabd-Pves-flujo describe lo observado sin cerrar la etiología."],
        ["La prensa demuestra hipoactividad detrusoriana", false, "Puede ser compensación, estrategia habitual o respuesta al contexto; falta integración."],
        ["Pdet es alta porque Pves subió", false, "Si Pabd acompaña a Pves, la resta puede cambiar poco."]
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
      ...scenarios.storageOversensitivity,
      id: "storageSensitivity",
      tabLabel: "Sensibilidad precoz",
      pattern: "storageOversensitivity",
      focus: "inference",
      answerOffset: 1
    },
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
    },
    {
      ...scenarios.detrusorLeak,
      id: "storageDetrusorLeak",
      tabLabel: "Contracción + fuga",
      pattern: "detrusorLeak",
      focus: "event",
      answerOffset: 3
    },
    {
      ...scenarios.storagePressureLeak,
      id: "storagePressureLeak",
      tabLabel: "Presión + fuga",
      pattern: "pressureLeak",
      focus: "inference",
      answerOffset: 1
    },
    {
      ...scenarios.storage,
      id: "storageNotReproduced",
      tabLabel: "No reproducido",
      pattern: "storage",
      focus: "limit",
      answerOffset: 2,
      title: "Síntomas habituales sin hallazgo durante el examen",
      eventLabel: "llenado sin reproducción del síntoma",
      event: {
        ...scenarios.storage.event,
        title: "La cistometría no reproduce la urgencia habitual",
        label: "límite de representatividad",
        timing: "durante este llenado",
        reading: "Pdet permanece estable y el síntoma referido no aparece bajo las condiciones del estudio.",
        caution: "No demostrar una contracción ni urgencia no descarta el síndrome clínico."
      },
      question: "¿Cuál es la conclusión más rigurosa?",
      answers: [
        ["El fenómeno no fue reproducido en las condiciones de este estudio", true, "Correcto. Describe el alcance del examen sin negar la historia clínica."],
        ["La vejiga hiperactiva queda descartada", false, "Es un síndrome clínico y el entorno artificial puede no reproducirlo."],
        ["El paciente no presenta urgencia", false, "La ausencia durante el registro no invalida el síntoma habitual."],
        ["La normalidad del trazado explica todos los síntomas", false, "Un registro sin hallazgos no constituye una explicación completa."]
      ]
    }
  ],
  voidingDisorders: [
    {
      ...scenarios.outletResistance,
      id: "voidingResistance",
      tabLabel: "Resistencia",
      pattern: "outletResistance",
      focus: "inference",
      answerOffset: 1
    },
    {
      ...scenarios.detrusorUnderactivity,
      id: "voidingUnderactive",
      tabLabel: "Fuerza insuficiente",
      pattern: "weakDetrusor",
      focus: "inference",
      answerOffset: 2
    },
    {
      ...scenarios.abdominalVoiding,
      id: "voidingAbdominal",
      tabLabel: "Prensa abdominal",
      pattern: "abdominalVoiding",
      focus: "signal",
      answerOffset: 3
    },
    {
      ...scenarios.inhibitedVoiding,
      id: "voidingInhibited",
      tabLabel: "No representativa",
      pattern: "inhibitedVoiding",
      focus: "limit",
      answerOffset: 1
    }
  ],
  coordinationDisorders: [
    {
      ...scenarios.delayedOutlet,
      id: "coordinationDelayed",
      tabLabel: "Apertura tardía",
      pattern: "delayedOutlet",
      focus: "event",
      answerOffset: 1
    },
    {
      ...scenarios.dysfunctionalOutlet,
      id: "coordinationDysfunctional",
      tabLabel: "Sin lesión neurológica",
      pattern: "variableOutlet",
      focus: "inference",
      answerOffset: 2
    },
    {
      ...scenarios.neurogenicDyssynergia,
      id: "coordinationDyssynergia",
      tabLabel: "Con lesión neurológica",
      pattern: "neuroDyssynergia",
      focus: "inference",
      answerOffset: 3
    },
    {
      ...scenarios.abdominalCoordinationMimic,
      id: "coordinationAbdominalMimic",
      tabLabel: "Prensa imitadora",
      pattern: "abdominalMimic",
      focus: "signal",
      answerOffset: 1
    },
    {
      ...scenarios.fixedOutletResistance,
      id: "coordinationFixedResistance",
      tabLabel: "Resistencia fija",
      pattern: "fixedResistance",
      focus: "limit",
      answerOffset: 2
    }
  ],
  neuroUrology: [
    {
      ...scenarios.detrusorStorage,
      id: "neuroStroke",
      tabLabel: "Suprapontina",
      pattern: "detrusorStorage",
      focus: "inference",
      answerOffset: 1,
      title: "ACV: contracción durante el llenado",
      eventLabel: "contracción involuntaria en almacenamiento",
      event: {
        ...scenarios.detrusorStorage.event,
        title: "Lesión suprapontina con activación precoz",
        label: "caso sintético: ACV",
        timing: "fase de almacenamiento",
        reading: "Pdet aumenta durante el llenado; la localización hace plausible pérdida de inhibición, pero no reemplaza la demostración del mecanismo.",
        caution: "El vaciado y las causas urológicas concomitantes todavía deben evaluarse."
      },
      question: "¿Cuál es la lectura inicial más rigurosa?",
      answers: [
        ["Contracción detrusoriana durante almacenamiento, compatible con el contexto suprapontino", true, "Correcto. El trazado demuestra el fenómeno y el contexto orienta su origen."],
        ["Todo residuo futuro quedaría explicado por el ACV", false, "No. Obstrucción, hipoactividad, fármacos y representatividad siguen abiertos."],
        ["La localización cerebral demuestra por sí sola el patrón", false, "La lesión formula la hipótesis; el estudio debe demostrar la función."],
        ["El hallazgo confirma disinergia", false, "La contracción durante llenado no demuestra mala coordinación durante vaciado."]
      ]
    },
    {
      ...scenarios.neurogenicDyssynergia,
      id: "neuroT4",
      tabLabel: "Medular T4",
      pattern: "neuroDyssynergia",
      focus: "event",
      answerOffset: 2,
      title: "Lesión medular T4: presión y salida activa",
      eventLabel: "contracción con actividad de salida",
      event: {
        ...scenarios.neurogenicDyssynergia.event,
        title: "Contracción detrusoriana contra una salida activa",
        label: "caso sintético: lesión T4 crónica",
        timing: "intento de vaciado",
        reading: "Pdet se sostiene, el flujo es limitado y la actividad perineal persiste en un contexto neurológico suprasacro.",
        caution: "La seguridad también exige revisar presión de almacenamiento y vía urinaria superior."
      },
      question: "¿Qué conclusión integra mejor trazado y contexto?",
      answers: [
        ["Patrón compatible con disinergia detrusor-esfínter", true, "Correcto. Existe contracción, actividad de salida concomitante y una lesión neurológica relevante."],
        ["Flujo bajo aislado sin mecanismo demostrable", false, "Aquí la relación entre Pdet, flujo, EMG y contexto aporta un mecanismo plausible."],
        ["Vaciado disfuncional no neurogénico", false, "La lesión medular relevante cambia la terminología y la fisiopatología."],
        ["Continencia garantizada y sistema seguro", false, "La ausencia de fuga no informa por sí sola seguridad de almacenamiento o vaciado."]
      ]
    },
    {
      ...scenarios.inhibitedVoiding,
      id: "neuroSpinalShock",
      tabLabel: "Shock medular",
      pattern: "inhibitedVoiding",
      focus: "limit",
      answerOffset: 3,
      title: "Lesión aguda: ausencia de contracción",
      eventLabel: "sin evento focal de vaciado",
      event: {
        ...scenarios.inhibitedVoiding.event,
        title: "Retención durante la fase aguda",
        label: "caso sintético: shock medular",
        timing: "etapa evolutiva temprana",
        reading: "No aparece una contracción detrusoriana y no se genera flujo durante este registro.",
        caution: "El patrón puede ser transitorio y no debe presentarse como resultado neurológico definitivo."
      },
      question: "¿Qué límite debe conservar la conclusión?",
      answers: [
        ["Describe una fase potencialmente transitoria que requiere reevaluación evolutiva", true, "Correcto. El tiempo desde la lesión es parte del diagnóstico funcional."],
        ["Demuestra acontractilidad permanente", false, "Una evaluación durante shock medular no establece por sí sola el patrón definitivo."],
        ["Descarta recuperación de reflejos", false, "Los reflejos pueden reaparecer y cambiar el comportamiento vesical."],
        ["Permite omitir seguimiento urodinámico", false, "La evolución funcional requiere control."
        ]
      ]
    },
    {
      ...scenarios.detrusorUnderactivity,
      id: "neuroCauda",
      tabLabel: "Cauda equina",
      pattern: "weakDetrusor",
      focus: "inference",
      answerOffset: 1,
      title: "Cauda equina: contracción insuficiente",
      eventLabel: "intento de vaciado de baja fuerza",
      event: {
        ...scenarios.detrusorUnderactivity.event,
        title: "Señal aferente y respuesta eferente comprometidas",
        label: "caso sintético: cauda equina",
        timing: "fase de vaciado",
        reading: "Pdet aumenta poco, el flujo es bajo y el vaciamiento es limitado en un contexto compatible con lesión infrasacra.",
        caution: "También deben evaluarse sensibilidad y competencia esfinteriana."
      },
      question: "¿Qué patrón es más plausible sin exceder la evidencia?",
      answers: [
        ["Hipoactividad detrusoriana en un contexto infrasacro", true, "Correcto. La relación presión-flujo apoya una contracción insuficiente."],
        ["Obstrucción demostrada por flujo bajo", false, "El flujo bajo no identifica por sí solo resistencia aumentada."],
        ["Disinergia obligatoria", false, "Las lesiones infrasacras no obligan ese patrón y el trazado no lo demuestra."],
        ["Sensibilidad normal garantizada", false, "La sensibilidad debe interrogarse y registrarse por separado."]
      ]
    },
    {
      ...scenarios.neurogenicDyssynergia,
      id: "neuroMultipleSclerosis",
      tabLabel: "Esclerosis múltiple",
      pattern: "variableOutlet",
      focus: "limit",
      answerOffset: 2,
      title: "Enfermedad multifocal: patrón variable",
      eventLabel: "flujo intermitente y salida variable",
      event: {
        ...scenarios.neurogenicDyssynergia.event,
        title: "Una lesión multifocal no cabe en una sola regla",
        label: "caso sintético: esclerosis múltiple",
        timing: "intento de vaciado",
        reading: "La contracción se asocia a flujo intermitente y actividad perineal variable en un contexto neurológico multifocal.",
        caution: "Almacenamiento, contractilidad y evolución deben integrarse antes de resumir el caso."
      },
      question: "¿Cuál es la mejor forma de razonar este patrón?",
      answers: [
        ["Describir la relación observada y evaluar si coexisten mecanismos", true, "Correcto. Una enfermedad multifocal puede combinar almacenamiento, coordinación y vaciado."],
        ["Forzarlo dentro del patrón suprapontino clásico", false, "La multifocalidad impide esa simplificación."],
        ["Elegir una sola etiqueta por diagnóstico neurológico", false, "El diagnóstico orienta, pero el trazado puede ser mixto."],
        ["Ignorar la fase de almacenamiento", false, "La seguridad neuro-urológica exige revisar el ciclo completo."]
      ]
    },
    {
      ...scenarios.lowCompliance,
      id: "neuroAutonomicDysreflexia",
      tabLabel: "Seguridad T6+",
      pattern: "lowCompliance",
      focus: "event",
      answerOffset: 3,
      title: "Lesión alta: cambio cardiovascular durante el llenado",
      eventLabel: "aumento progresivo de presión vesical",
      event: {
        ...scenarios.lowCompliance.event,
        title: "El trazado vesical no muestra toda la emergencia",
        label: "caso sintético: lesión T6 o superior",
        timing: "llenado con monitorización",
        reading: "La presión de almacenamiento aumenta; en paralelo aparece un ascenso sistólico mayor de 20 mmHg respecto del basal.",
        caution: "La presión arterial y la frecuencia cardíaca son señales de seguridad externas a estas curvas."
      },
      question: "¿Cuál es la prioridad inmediata?",
      answers: [
        ["Reconocer posible disreflexia autonómica y aplicar el protocolo de seguridad", true, "Correcto. La respuesta cardiovascular tiene prioridad sobre completar el trazado docente."],
        ["Continuar hasta capacidad para obtener una curva más completa", false, "La seguridad del paciente precede a completar el estudio."],
        ["Interpretar solo Pdet porque es la señal urodinámica", false, "La monitorización cardiovascular forma parte obligatoria del examen en pacientes en riesgo."],
        ["Concluir bajo riesgo porque no hubo fuga", false, "Continencia no excluye presión desfavorable ni disreflexia."]
      ]
    }
  ]
};

const practiceTraceProfiles = {
  thinkingQuestion: { start: 0.43, end: 0.56, fillSlope: 10, pressureAmplitude: 40, flowAmplitude: 48 },
  thinkingLimit: { start: 0.1, end: 0.9, fillSlope: 7, pressureAmplitude: 0, flowAmplitude: 0 },
  thinkingRepresentativeness: { start: 0.61, end: 0.88, fillSlope: 10, pressureAmplitude: 0, flowAmplitude: 0, volumeDrop: 0 },
  thinkingQuality: { start: 0.47, end: 0.54, fillSlope: 9, pressureAmplitude: 52 },
  physiologyStorage: { start: 0.08, end: 0.92, fillSlope: 12, pressureAmplitude: 0, flowAmplitude: 0 },
  physiologyVoiding: { start: 0.62, end: 0.91, fillSlope: 11, pressureAmplitude: 58, flowAmplitude: 72 },
  physiologyAccommodation: { start: 0.24, end: 0.9, fillSlope: 10, complianceAmplitude: 76 },
  tracingCough: { start: 0.32, end: 0.39, fillSlope: 13, pressureAmplitude: 52 },
  tracingSustained: { start: 0.45, end: 0.76, fillSlope: 13, pressureAmplitude: 43 },
  tracingVoiding: { start: 0.68, end: 0.94, fillSlope: 14, pressureAmplitude: 54, flowAmplitude: 65 },
  tracingUrgencyStable: { start: 0.23, end: 0.37, fillSlope: 10, pressureAmplitude: 0, flowAmplitude: 0, sensationOnly: true },
  tracingDetrusor: { start: 0.41, end: 0.59, fillSlope: 12, detrusorAmplitude: 57 },
  tracingAbdominalVoiding: { start: 0.55, end: 0.9, fillSlope: 11, pressureAmplitude: 49, flowAmplitude: 29, volumeDrop: 37 },
  physicsLevelLow: { start: 0.28, end: 0.78, fillSlope: 7, baselineAmplitude: 44, levelDirection: "low" },
  physicsLevelHigh: { start: 0.36, end: 0.82, fillSlope: 8, baselineAmplitude: -36, levelDirection: "high" },
  physicsBubbleDamping: { start: 0.46, end: 0.54, fillSlope: 9, pressureAmplitude: 58, dampingRatio: 0.28, dampingDelay: 0.018 },
  physicsWrongZero: { start: 0.08, end: 0.18, fillSlope: 6, zeroAmplitude: 32, zeroChannel: "pves" },
  instrumentTransmission: { start: 0.24, end: 0.31, fillSlope: 9, pressureAmplitude: 44 },
  instrumentFlatPabd: { start: 0.46, end: 0.53, fillSlope: 9, pressureAmplitude: 48 },
  instrumentFlow: { start: 0.58, end: 0.88, fillSlope: 12, pressureAmplitude: 46, flowAmplitude: 60 },
  instrumentDetrusor: { start: 0.36, end: 0.51, fillSlope: 11, detrusorAmplitude: 51 },
  instrumentAbdominalVoiding: { start: 0.6, end: 0.92, fillSlope: 10, pressureAmplitude: 43, flowAmplitude: 27, volumeDrop: 33 },
  artifactDrift: { start: 0.25, end: 0.79, fillSlope: 8, driftAmplitude: 70 },
  artifactFlatPabd: { start: 0.6, end: 0.67, fillSlope: 10, pressureAmplitude: 56 },
  artifactBaseline: { start: 0.52, end: 0.58, fillSlope: 10, baselineAmplitude: 45 },
  storageSensitivity: { start: 0.22, end: 0.34, fillSlope: 11, pressureAmplitude: 0, flowAmplitude: 0, sensationOnly: true },
  storageDetrusor: { start: 0.39, end: 0.56, fillSlope: 12, detrusorAmplitude: 60 },
  storageCompliance: { start: 0.31, end: 0.91, fillSlope: 9, complianceAmplitude: 94 },
  storageLeak: { start: 0.58, end: 0.69, fillSlope: 14, pressureAmplitude: 45, flowAmplitude: 52 },
  storageDetrusorLeak: { start: 0.46, end: 0.64, fillSlope: 12, detrusorAmplitude: 64, flowAmplitude: 46, leakDelay: 0.09 },
  storagePressureLeak: { start: 0.28, end: 0.91, fillSlope: 9, complianceAmplitude: 90, flowAmplitude: 38, leakStart: 0.78 },
  storageNotReproduced: { start: 0.14, end: 0.87, fillSlope: 8, pressureAmplitude: 0, flowAmplitude: 0, noReproduction: true },
  voidingResistance: { start: 0.57, end: 0.92, fillSlope: 10, pressureAmplitude: 78, flowAmplitude: 18, volumeDrop: 44 },
  voidingUnderactive: { start: 0.61, end: 0.86, fillSlope: 10, pressureAmplitude: 20, flowAmplitude: 17, volumeDrop: 24 },
  voidingAbdominal: { start: 0.56, end: 0.91, fillSlope: 10, pressureAmplitude: 50, flowAmplitude: 25, volumeDrop: 38 },
  voidingInhibited: { start: 0.62, end: 0.88, fillSlope: 10, pressureAmplitude: 0, flowAmplitude: 0, volumeDrop: 0 },
  coordinationDelayed: { start: 0.48, end: 0.9, flowStart: 0.64, fillSlope: 9, pressureAmplitude: 54, flowAmplitude: 48, emgAmplitude: 34, volumeDrop: 88 },
  coordinationDysfunctional: { start: 0.5, end: 0.92, flowStart: 0.56, fillSlope: 9, pressureAmplitude: 61, flowAmplitude: 47, emgAmplitude: 32, cycles: 4, volumeDrop: 72 },
  coordinationDyssynergia: { start: 0.46, end: 0.91, flowStart: 0.53, fillSlope: 9, pressureAmplitude: 76, flowAmplitude: 29, emgAmplitude: 43, cycles: 5, volumeDrop: 48 },
  coordinationAbdominalMimic: { start: 0.52, end: 0.9, flowStart: 0.54, fillSlope: 9, pressureAmplitude: 45, flowAmplitude: 38, emgAmplitude: 26, cycles: 4, volumeDrop: 58 },
  coordinationFixedResistance: { start: 0.55, end: 0.93, flowStart: 0.59, fillSlope: 9, pressureAmplitude: 80, flowAmplitude: 20, emgAmplitude: 4, volumeDrop: 44 },
  neuroStroke: { start: 0.33, end: 0.51, fillSlope: 11, detrusorAmplitude: 58, neuroLevel: 1 },
  neuroT4: { start: 0.45, end: 0.92, flowStart: 0.52, fillSlope: 8, pressureAmplitude: 82, flowAmplitude: 25, emgAmplitude: 46, cycles: 6, volumeDrop: 42, neuroLevel: 2 },
  neuroSpinalShock: { start: 0.59, end: 0.89, fillSlope: 7, pressureAmplitude: 0, flowAmplitude: 0, volumeDrop: 0, acuteStage: true },
  neuroCauda: { start: 0.63, end: 0.9, fillSlope: 12, pressureAmplitude: 16, flowAmplitude: 13, volumeDrop: 18, neuroLevel: 4 },
  neuroMultipleSclerosis: { start: 0.49, end: 0.94, flowStart: 0.55, fillSlope: 10, pressureAmplitude: 57, flowAmplitude: 41, emgAmplitude: 29, cycles: 5, volumeDrop: 55, multifocal: true },
  neuroAutonomicDysreflexia: { start: 0.27, end: 0.93, fillSlope: 8, complianceAmplitude: 88, systolicRise: 24, neuroLevel: 6 }
};

const practiceDifficultyByChapter = {
  thinking: "basic",
  physiology: "basic",
  tracing: "basic",
  pressurePhysics: "basic",
  instrument: "basic",
  artifacts: "intermediate",
  storageDisorders: "intermediate",
  voidingDisorders: "intermediate",
  coordinationDisorders: "intermediate",
  neuroUrology: "intermediate"
};

Object.entries(chapterPracticeCases).forEach(([chapterId, cases]) => {
  cases.forEach((practiceCase) => {
    practiceCase.difficulty = practiceDifficultyByChapter[chapterId] || "intermediate";
    practiceCase.synthetic = true;
  });
});

const practiceCaseMap = Object.fromEntries(
  Object.values(chapterPracticeCases)
    .flat()
    .map((practiceCase) => [practiceCase.id, practiceCase])
);

  window.UroDynamicPracticeData = Object.freeze({
    chapterPracticeCases,
    practiceTraceProfiles,
    practiceCaseMap,
    practiceDifficultyByChapter
  });
})();
