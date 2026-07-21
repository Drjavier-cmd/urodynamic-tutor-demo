const BUILD_REVISION = "20260720-course-flow-v4";

const chapters = {
  thinking: {
    block: "Bloque I · Fundamentos antes de interpretar curvas",
    number: "Capítulo 1",
    title: "Cómo pensar una urodinamia",
    mentalModelTitle: "Tecnología dentro de la clínica",
    mentalModelText:
      "La urodinamia agrega una medición funcional a la historia y al examen. Su valor depende de la pregunta, la técnica y el juicio con que se interpretan sus límites.",
    notThis: "Una máquina que descubre por sí sola qué tiene el paciente",
    isThis: "Una medición funcional interpretada dentro de la clínica",
    labId: "clinicalReasoning",
    labDescription:
      "Construye una respuesta útil desde un caso sintético. En cada paso verás qué información entra, qué puedes afirmar y qué límite debes conservar.",
    screens: [
      {
        title: "La tecnología necesita una pregunta",
        text:
          "La urodinamia intenta observar y registrar un ciclo miccional en condiciones controladas. No se pide para mirar qué aparece: se utiliza para responder una pregunta clínica-funcional concreta.",
        key: "Una buena urodinamia empieza antes del trazado.",
        prompt: "¿Qué pregunta clínica-funcional intentas responder?"
      },
      {
        title: "Controlado no significa natural",
        text:
          "El paciente está con catéter vesical, catéter rectal, sensores, infusión artificial, instrucciones externas y atención aumentada sobre sus sensaciones. Ese contexto modifica el fenómeno que se intenta estudiar.",
        key: "Una urodinamia no es una copia perfecta de la micción cotidiana.",
        prompt: "¿Qué parte del contexto podría modificar el fenómeno observado?"
      },
      {
        title: "Medir no es explicar",
        text:
          "El equipo registra presión, volumen, flujo y eventos. No sabe qué sintió el paciente, por qué se pidió el estudio ni bajo qué condiciones apareció cada señal. Esa integración sigue siendo clínica.",
        key: "La señal es un dato; su significado es una inferencia.",
        prompt: "¿Qué es dato medido y qué todavía requiere inferencia?"
      },
      {
        title: "Primero proteger, luego interpretar",
        text:
          "La urodinamia no reemplaza la evaluación clínica ni las puertas de seguridad. Antes de explicar una alteración funcional, deben haberse considerado las causas graves o estructurales que correspondan a la historia del paciente.",
        key: "La interpretación funcional comienza después de una evaluación clínica responsable.",
        prompt: "¿Qué debe haberse considerado antes de explicar la función?"
      },
      {
        title: "La ausencia de hallazgo también tiene límites",
        text:
          "Un estudio sin hallazgos concluyentes no invalida los síntomas ni demuestra que el paciente esté sano. Tampoco prueba por sí solo otra fisiopatología: delimita lo que pudo observarse para esa pregunta y en esas condiciones.",
        key: "No demostrar un fenómeno no equivale a explicar el caso completo.",
        prompt: "¿Qué no pudo demostrar este estudio y bajo qué condiciones?"
      },
      {
        title: "Artefacto no es patología",
        text:
          "Un cambio de presión puede corresponder a actividad detrusoriana, pero también a tos, movimiento, actividad abdominal, desplazamiento del catéter o mala transmisión. La calidad técnica define hasta dónde se puede concluir.",
        key: "Antes de interpretar fisiología, hay que confiar en la señal.",
        prompt: "¿La señal es confiable para responder esta pregunta?"
      },
      {
        title: "La conclusión debe ser clínicamente útil",
        text:
          "Una buena conclusión no enumera canales ni busca producir un examen bonito. Responde la pregunta original, distingue dato de inferencia, explica el patrón funcional y declara con honestidad lo que el estudio no permite concluir.",
        key: "El objetivo es orientar una decisión clínica, no decorar un informe.",
        prompt: "¿La conclusión responde la pregunta original y declara sus límites?"
      }
    ]
  },
  physiology: {
    block: "Bloque I · Fundamentos antes de interpretar curvas",
    number: "Capítulo 2",
    title: "Fisiología normal del tracto urinario inferior",
    mentalModelTitle: "Dos programas funcionales",
    mentalModelText:
      "Detrusor, tracto de salida, piso pélvico, sensibilidad y control neurológico forman un sistema. Su coordinación permite alternar almacenamiento y vaciado.",
    notThis: "Una vejiga que se vacía solo porque está llena",
    isThis: "Un sistema que cambia de programa de manera coordinada",
    labId: "accommodation",
    labDescription:
      "Compara el mismo llenado en una vejiga con acomodación conservada y en un reservorio que gana presión. Observa también el riesgo conceptual para la vía urinaria superior.",
    screens: [
      {
        title: "La micción no es un reflejo simple",
        text:
          "La vejiga envía información, pero los centros superiores integran volumen, sensación, seguridad, oportunidad y conducta. En condiciones normales, la vejiga no decide sola.",
        key: "La micción normal es neurológica, funcional y conductual.",
        prompt: "¿Qué autoriza el paso desde almacenar hacia vaciar?"
      },
      {
        title: "Orinar requiere autorización",
        text:
          "El organismo debe poder inhibir la micción cuando no corresponde e iniciarla cuando el contexto lo permite. Esto incluye amenaza, actividad, privacidad y norma social.",
        key: "Los centros superiores pueden autorizar o negar el paso a vaciado.",
        prompt: "¿El contexto permite cambiar de programa?"
      },
      {
        title: "Fase de almacenamiento",
        text:
          "Durante el almacenamiento, el detrusor debe mantenerse relajado y la vejiga debe acomodar volumen a baja presión, mientras la salida permanece cerrada.",
        key: "Almacenar exige reservorio de baja presión con salida cerrada.",
        prompt: "¿La vejiga está ganando volumen sin pagar presión?",
        visualDemoId: "accommodation"
      },
      {
        title: "Fase de vaciado",
        text:
          "Durante el vaciado, el sistema cambia de programa: el detrusor se contrae, el mecanismo de salida se relaja y aparece flujo urinario coordinado.",
        key: "Vaciar exige bomba coordinada con salida abierta.",
        prompt: "¿La bomba y la salida están trabajando a favor del flujo?",
        visualDemoId: "flowResistance"
      },
      {
        title: "Coordinación",
        text:
          "No basta con que el detrusor se contraiga ni con que la salida se relaje de forma aislada. El comportamiento útil nace de la relación entre reservorio, mecanismo de salida, piso pélvico y control neurológico en cada fase.",
        key: "El fenómeno pertenece al sistema coordinado; después se identifica qué relación falló.",
        prompt: "¿El problema parece de fuerza, de salida o de coordinación?",
        visualDemoId: "flowResistance"
      },
      {
        title: "Traducción hacia la curva",
        text:
          "El trazado permite observar señales indirectas del comportamiento del sistema. Primero se entiende la función; después se interpreta la curva dentro de las limitaciones del examen.",
        key: "Primero entender la función; después interpretar la curva.",
        prompt: "¿Qué esperabas ver antes de mirar la curva?"
      }
    ]
  },
  tracing: {
    block: "Bloque I · Fundamentos antes de interpretar curvas",
    number: "Capítulo 3",
    title: "Del ciclo miccional al trazado",
    mentalModelTitle: "Una película temporal",
    mentalModelText:
      "El trazado no es una foto aislada. Es una secuencia: llenado, sensaciones, maniobras, eventos, decisión de vaciar, flujo y recuperación.",
    notThis: "Mirar un pico y ponerle nombre",
    isThis: "Seguir una historia por fases",
    labId: "curveTimeline",
    labDescription:
      "Recorre la secuencia temporal y comprueba cómo fase, evento y contexto cambian la lectura de una misma señal.",
    screens: [
      {
        title: "El trazado ocurre en el tiempo",
        text:
          "Una curva urodinámica no se interpreta como una imagen estática. Cada punto depende de lo que venía ocurriendo antes: volumen, fase, maniobra, sensación, instrucción y contexto técnico.",
        key: "Primero ubica el momento; después interpreta el cambio.",
        prompt: "¿En qué momento de la historia estás mirando la señal?",
        visualDemoId: "curveTimeline"
      },
      {
        title: "Identificar la fase",
        text:
          "Antes de nombrar un hallazgo, pregunta en qué fase estás mirando: almacenamiento, maniobra provocativa, transición a vaciado o vaciado. El mismo cambio de presión puede tener significados distintos según la fase.",
        key: "La fase manda la expectativa fisiológica.",
        prompt: "¿Qué debería estar ocurriendo en esta fase?"
      },
      {
        title: "El volumen da contexto",
        text:
          "No es lo mismo un cambio al inicio del llenado que cerca de capacidad. El volumen permite relacionar presión, sensación, complacencia, deseo miccional y eventos de fuga.",
        key: "Sin volumen, la curva pierde parte de su historia.",
        prompt: "¿Con qué volumen apareció el cambio y qué antecedía?"
      },
      {
        title: "Los eventos son parte del trazado",
        text:
          "Tos, valsalva, cambio de posición, primer deseo, deseo fuerte, fuga, orden miccional y fin de flujo no son adornos. Son anclas clínicas para interpretar las señales.",
        key: "Una curva sin eventos es una conversación incompleta.",
        prompt: "¿Qué evento coincide con la señal que estás mirando?"
      },
      {
        title: "Presión y flujo se leen juntos",
        text:
          "Durante vaciado, el flujo no debe leerse aislado y la presión tampoco. La pregunta es funcional: si hay contracción, ¿la salida se abrió? Si hay flujo bajo, ¿qué presión lo acompaña?",
        key: "El vaciado se entiende por relación, no por un canal aislado.",
        prompt: "¿Qué relación existe entre presión y flujo en este momento?"
      },
      {
        title: "Del ciclo a la hipótesis",
        text:
          "La rutina inicial es simple: fase, calidad, señal, evento, inferencia y límite. Solo después de esa secuencia tiene sentido proponer un patrón funcional docente.",
        key: "La interpretación ordenada evita etiquetas prematuras.",
        prompt: "¿Qué inferencia permite la secuencia y cuál es su límite?"
      }
    ]
  },
  instrument: {
    block: "Bloque I · Fundamentos antes de interpretar curvas",
    number: "Capítulo 4",
    title: "Qué mide el equipo: Pves, Pabd, Pdet, flujo y volumen",
    mentalModelTitle: "El equipo mide señales",
    mentalModelText:
      "El aparato no ve directamente la fisiología. Registra presiones, flujo, volumen y eventos. El urodinamista convierte esas señales en inferencias prudentes.",
    notThis: "El equipo dice el diagnóstico",
    isThis: "El equipo entrega mediciones interpretables",
    labId: "signalMap",
    labDescription:
      "Selecciona cada canal para separar lo medido, lo derivado y el contexto que todavía debe aportar el operador.",
    screens: [
      {
        title: "El instrumento no ve la vejiga completa",
        text:
          "La urodinamia registra señales indirectas. El equipo no sabe si el paciente tosió, se movió, hizo fuerza, se angustió o si el catéter transmitió mal la presión. Eso lo integra el operador.",
        key: "Medir no es lo mismo que comprender.",
        prompt: "¿Qué parte del contexto no puede conocer el equipo?"
      },
      {
        title: "Pves: presión vesical medida",
        text:
          "Pves es la presión registrada dentro de la vejiga. Incluye efectos del detrusor, de la presión abdominal transmitida y de posibles problemas técnicos. Por eso Pves aislada puede engañar.",
        key: "Pves no equivale automáticamente a detrusor.",
        prompt: "¿Qué contribuciones pueden estar contenidas en Pves?"
      },
      {
        title: "Pabd: el abdomen también habla",
        text:
          "Pabd estima la presión abdominal, habitualmente mediante catéter rectal o vaginal según técnica. Su utilidad es separar aumentos de presión abdominal de actividad detrusoriana real.",
        key: "Pabd no es ruido: es el control que evita sobreinterpretar.",
        prompt: "¿Pabd acompaña el cambio observado en Pves?"
      },
      {
        title: "Pdet: una presión derivada",
        text:
          "Pdet no es una señal mágica ni independiente. Es el resultado de restar Pabd a Pves. Si Pves y Pabd suben juntas, Pdet puede permanecer estable; eso cambia completamente la lectura.",
        key: "Pdet = Pves - Pabd.",
        prompt: "¿Qué cambió en las señales medidas antes de mirar Pdet?",
        visualDemoId: "pressureEquation"
      },
      {
        title: "Flujo y volumen: consecuencias y contexto",
        text:
          "El flujo muestra la salida de orina en el tiempo. El volumen ayuda a ubicar cuánto se ha llenado o vaciado el sistema. Ambos deben relacionarse con presión, eventos y fase.",
        key: "Flujo sin presión es incompleto; presión sin flujo también.",
        prompt: "¿Qué presión, fase y evento acompañan este flujo?"
      },
      {
        title: "Dato, inferencia y conclusión",
        text:
          "El dato es la señal medida. La inferencia es lo que crees que esa señal representa. La conclusión debe reconocer límites. Confundir esos tres niveles es una fuente frecuente de errores.",
        key: "El equipo mide; el urodinamista razona.",
        prompt: "¿Estás describiendo un dato, proponiendo una inferencia o cerrando una conclusión?"
      }
    ]
  },
  artifacts: {
    block: "Bloque I · Fundamentos antes de interpretar curvas",
    number: "Capítulo 5",
    title: "Artefactos y errores técnicos frecuentes",
    mentalModelTitle: "Primero calidad, después patología",
    mentalModelText:
      "Un estudio técnicamente malo puede producir una conclusión falsa. La calidad de señal no es un detalle operativo: es parte de la interpretación.",
    notThis: "Toda curva rara es enfermedad",
    isThis: "Toda curva rara exige control técnico",
    labId: "artifactDetective",
    labDescription:
      "Compara canales, identifica la incoherencia y decide qué debe verificarse antes de interpretar fisiología.",
    screens: [
      {
        title: "Antes de patología: calidad técnica",
        text:
          "La primera pregunta ante una curva extraña no debe ser qué enfermedad tiene el paciente, sino si la señal es confiable para responder la pregunta clínica.",
        key: "No interpretes fisiología sobre una señal dudosa.",
        prompt: "¿Este segmento es técnicamente confiable para la pregunta?"
      },
      {
        title: "La tos como control",
        text:
          "Una tos bien registrada debería elevar Pves y Pabd de forma semejante, con Pdet relativamente estable. Esto verifica transmisión de presión y ayuda a reconocer eventos abdominales.",
        key: "La tos enseña cómo se comporta el sistema de medición.",
        prompt: "¿Los dos canales transmiten el mismo evento abdominal?",
        visualDemoId: "artifactDetective"
      },
      {
        title: "Movimiento y esfuerzo abdominal",
        text:
          "Cambios posturales, contracción abdominal, valsalva o incomodidad pueden modificar Pves y Pabd. Si no se anotan como eventos, pueden confundirse con actividad vesical.",
        key: "No todo aumento de presión nace en el detrusor.",
        prompt: "¿Qué canal cambió primero y qué evento lo acompaña?",
        visualDemoId: "artifactDetective"
      },
      {
        title: "Catéter, cero y línea base",
        text:
          "Un catéter doblado, desplazado, mal purgado o con mala transmisión puede deformar la curva. El cero, la calibración y la estabilidad de línea base condicionan toda la lectura.",
        key: "Un canal mal instalado puede fabricar una historia falsa.",
        prompt: "¿La forma extraña pertenece al paciente o al sistema de medición?",
        visualDemoId: "artifactDetective"
      },
      {
        title: "Señal mala no es caso difícil",
        text:
          "A veces el problema no es que el caso sea complejo, sino que el segmento no permite concluir. Reconocer límites es mejor que producir una interpretación elegante pero falsa.",
        key: "No interpretable también es una conclusión válida.",
        prompt: "¿Este segmento permite responder realmente la pregunta?",
        visualDemoId: "artifactDetective"
      },
      {
        title: "Clasificar antes de concluir",
        text:
          "Cada tramo puede ser interpretable, parcialmente interpretable o no interpretable para una pregunta específica. Esa clasificación debe preceder cualquier discusión diagnóstica.",
        key: "La calidad técnica define el techo de la interpretación.",
        prompt: "¿Hasta dónde permite concluir la calidad de este tramo?"
      }
    ]
  },
  storageDisorders: {
    block: "Bloque II · Interpretación funcional",
    number: "Capítulo 6",
    title: "Trastornos de almacenamiento",
    mentalModelTitle: "Almacenar es una tarea coordinada",
    mentalModelText:
      "La lectura práctica se organiza en tres dimensiones relacionadas: sensibilidad, acomodación vesical y competencia del mecanismo de salida.",
    notThis: "Separar vejiga y salida como compartimentos independientes",
    isThis: "Preguntar qué relación dejó de cumplir el objetivo de almacenar",
    labId: "accommodation",
    labDescription:
      "Explora la relación cualitativa entre volumen, capacidad de distensión y presión antes de pasar a patrones de almacenamiento.",
    screens: [
      {
        title: "El almacenamiento tiene objetivos",
        text:
          "Antes de nombrar un trastorno, recuerda qué debería lograr esta fase: almacenar volumen progresivo a baja presión, sin contracciones involuntarias, sin fuga y con sensibilidad útil.",
        key: "La patología se entiende mejor como falla de un objetivo normal."
      },
      {
        title: "Cuatro preguntas iniciales",
        text:
          "En almacenamiento conviene preguntar: ¿la presión se mantiene baja?, ¿el detrusor permanece estable?, ¿la salida contiene?, ¿la sensibilidad progresa de manera coherente con el llenado?",
        key: "Presión, estabilidad, salida y sensibilidad ordenan el capítulo."
      },
      {
        title: "Contracción durante llenado",
        text:
          "Una elevación de Pdet durante llenado puede representar actividad detrusoriana si la señal es confiable y Pabd no explica el cambio. Primero se verifica técnica y fase; después se discute el fenómeno docente.",
        key: "No toda subida de Pves es detrusor; Pdet y Pabd deciden la prudencia."
      },
      {
        title: "Baja complacencia",
        text:
          "La baja complacencia no se enseña como un pico aislado, sino como una relación anómala entre volumen y presión detrusoriana. El problema es que el reservorio deja de mantenerse a baja presión.",
        key: "Complacencia es relación presión-volumen, no un dibujo bonito."
      },
      {
        title: "Fuga durante almacenamiento",
        text:
          "Una fuga en llenado no significa automáticamente hiperactividad detrusoriana. Puede relacionarse con incompetencia del mecanismo de cierre, esfuerzo abdominal, baja resistencia de salida o una combinación.",
        key: "La fuga obliga a preguntar por salida, presión y evento."
      },
      {
        title: "Patrón docente, no diagnóstico final",
        text:
          "Una conclusión útil responde qué dimensión del almacenamiento parece alterada, en qué condiciones apareció y qué límites tiene la observación. El diagnóstico clínico requiere integrar historia, examen, técnica y contexto.",
        key: "Describir el patrón sirve solo si ayuda a comprender el problema clínico."
      }
    ]
  }
};

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

