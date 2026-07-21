const BUILD_REVISION = "20260721-neuro-v1";

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
    mentalModelTitle: "Cuatro objetivos y un resultado",
    mentalModelText:
      "Presión baja, detrusor estable, salida competente y sensibilidad útil permiten almacenar. La capacidad resulta de la interacción entre esas dimensiones.",
    notThis: "Convertir una capacidad o una curva llamativa en diagnóstico",
    isThis: "Identificar qué objetivo del reservorio falló y en qué condiciones",
    labId: "storageMap",
    labDescription:
      "Compara patrones sintéticos de sensibilidad, actividad detrusoriana, presión-volumen y fuga; observa cómo curvas parecidas exigen preguntas diferentes.",
    screens: [
      {
        title: "Almacenar no es simplemente no orinar",
        text:
          "La vejiga debe ganar volumen con poca presión, el detrusor permanecer estable, la salida conservar continencia y la sensibilidad informar el llenado de forma gradual. La cistometría estudia esas relaciones y las circunstancias de una eventual fuga.",
        key: "Almacenar exige ganar volumen sin pagar presión, sin contracciones involuntarias, sin fuga y con sensibilidad útil.",
        prompt: "¿Qué objetivo del reservorio dejó de cumplirse?"
      },
      {
        title: "Cuatro preguntas iniciales",
        text:
          "Pregunta si la presión se mantiene baja, si el detrusor permanece estable, si la salida contiene y si la sensibilidad progresa coherentemente. La capacidad aparece como resultado de la interacción entre esas cuatro dimensiones.",
        key: "Una capacidad reducida no explica por sí sola cuál dimensión está fallando.",
        prompt: "¿Por qué terminó realmente el llenado?"
      },
      {
        title: "Síntoma, signo y hallazgo no son sinónimos",
        text:
          "Urgencia, frecuencia o pérdida con esfuerzo pertenecen a la experiencia cotidiana. Hiperactividad detrusoriana, sensibilidad aumentada, baja complacencia e incontinencia urodinámica de esfuerzo son observaciones obtenidas bajo las condiciones del estudio.",
        key: "El síntoma plantea la pregunta; la urodinamia intenta reproducir y caracterizar el mecanismo.",
        prompt: "¿Estoy describiendo lo que el paciente vive o lo que el examen demostró?"
      },
      {
        title: "Vejiga hiperactiva no equivale a detrusor hiperactivo",
        text:
          "La vejiga hiperactiva es un síndrome clínico basado en urgencia, habitualmente con frecuencia y nocturia, con o sin incontinencia de urgencia. La hiperactividad detrusoriana es una contracción observada durante el llenado; puede aparecer con o sin sensación o fuga.",
        key: "No demostrar una contracción durante el examen no descarta el síndrome clínico.",
        prompt: "¿El síntoma habitual fue reproducido y qué ocurrió con Pdet?"
      },
      {
        title: "La sensibilidad es una secuencia",
        text:
          "Primera conciencia de llenado, deseos progresivos, deseo intenso, urgencia, dolor o sensaciones atípicas no son intercambiables. Los volúmenes ayudan, pero la señal proviene de lo que el paciente comunica, no de un sensor del equipo.",
        key: "La sensibilidad es un dato del paciente registrado dentro del examen.",
        prompt: "¿La sensación progresó y se parece a la experiencia cotidiana del paciente?"
      },
      {
        title: "Sensibilidad aumentada, reducida o ausente",
        text:
          "Sensaciones tempranas con deseo intenso a bajo volumen y Pdet estable orientan a sobresensibilidad. La percepción también puede ser tardía, disminuida, ausente o expresarse como presión, distensión o síntomas vegetativos. Comprensión, atención, neurología y velocidad de llenado modifican la interpretación.",
        key: "Urgencia sin aumento de Pdet orienta primero a un fenómeno sensitivo, no a una contracción demostrada.",
        prompt: "¿La sensación cambió sin que cambiara la presión detrusoriana?"
      },
      {
        title: "La referencia de 500 mL no es una meta universal",
        text:
          "La terminología ICS utiliza una capacidad esperable de aproximadamente 500 mL como referencia al definir sensación ausente durante cistometría. No debe transformarse en un umbral universal de normalidad ni forzar el llenado si la seguridad o el objetivo del estudio indican detenerlo.",
        key: "Una definición terminológica no reemplaza el contexto clínico ni la seguridad del paciente.",
        prompt: "¿Qué información permite afirmar ausencia sensitiva sin sobredistender la vejiga?"
      },
      {
        title: "Hiperactividad detrusoriana: demostrar el origen",
        text:
          "Una o más contracciones de Pdet durante el llenado pueden ser espontáneas o provocadas, fásicas o terminales, controlables o no. Antes de nombrarlas, confirma que Pabd no explica el cambio y descarta tos, Valsalva, movimiento, actividad rectal, deriva o desplazamiento del catéter.",
        key: "Primero se demuestra de dónde nace la presión; después se nombra el hallazgo.",
        prompt: "¿Pdet aumenta con una señal técnicamente coherente durante la fase de llenado?"
      },
      {
        title: "Describir la contracción, no solo etiquetarla",
        text:
          "Registra volumen de aparición, espontánea o provocada, forma, duración, percepción, urgencia, inhibición, fuga, presión asociada y reproducción del síntoma. La contracción visible y la experiencia del paciente son datos distintos.",
        key: "«Presenta hiperactividad» es menos útil que describir qué ocurrió, cuándo y con qué consecuencia.",
        prompt: "¿La contracción reprodujo el problema habitual y qué efecto tuvo?"
      },
      {
        title: "Contexto neurológico y presión segura",
        text:
          "La hiperactividad detrusoriana se denomina neurogénica cuando existe una alteración neurológica clínicamente relevante. En esos pacientes importa además si la contracción o la baja complacencia generan almacenamiento de alta presión y comprometen la protección de la vía urinaria superior.",
        key: "Una contracción no demuestra por sí sola origen neurológico ni resume el riesgo del reservorio.",
        prompt: "¿Qué presión alcanza y cómo se comporta el resto del almacenamiento?"
      },
      {
        title: "Complacencia: cuánto cuesta ganar volumen",
        text:
          "La complacencia expresa la relación ΔV / ΔPdet. La acomodación es la idea fisiológica de recibir volumen sin elevar demasiado la presión; la complacencia es la forma urodinámica de describir esa relación.",
        key: "Cuanto más volumen se incorpora con poco cambio de Pdet, mejor se comporta el reservorio.",
        prompt: "¿Cuánto volumen ganó la vejiga y cuánto cambió realmente Pdet?"
      },
      {
        title: "La baja complacencia no es un pico",
        text:
          "Se reconoce por elevación progresiva o sostenida de la presión basal con el volumen, no por una contracción aislada. Los puntos del cálculo deben excluir contracciones y segmentos con artefacto; velocidad alta de llenado, deriva o Pabd inestable pueden fabricar una falsa baja complacencia.",
        key: "Una cifra calculable no es fisiológicamente válida si las señales de entrada son defectuosas.",
        prompt: "¿El aumento persiste con el volumen y sobrevive al control técnico?"
      },
      {
        title: "Estable no significa seguro",
        text:
          "Una vejiga puede no presentar contracciones involuntarias y aun así almacenar con presión progresivamente elevada. En especial en neuro-urología, proteger la vía urinaria superior puede ser más importante que demostrar continencia.",
        key: "Una vejiga seca no es necesariamente una vejiga segura.",
        prompt: "¿La continencia se logró manteniendo un reservorio de baja presión?"
      },
      {
        title: "La capacidad es un resultado, no una explicación",
        text:
          "La capacidad puede quedar limitada por sensibilidad, urgencia, contracción, fuga, baja complacencia, dolor, velocidad de infusión, ansiedad o decisión técnica. También puede ser alta por sensibilidad reducida, conducta habitual o gran capacidad funcional.",
        key: "La capacidad dice dónde terminó el llenado; no siempre dice por qué terminó.",
        prompt: "¿Qué sensación, presión o evento determinó el final del llenado?"
      },
      {
        title: "La fuga se interpreta por su relación",
        text:
          "Relaciona toda pérdida con fase, evento, Pabd, Pves, Pdet, volumen y posición. Con aumento abdominal y Pdet estable orienta a incontinencia urodinámica de esfuerzo; con contracción de Pdet, a hiperactividad con fuga; con presión basal progresiva, a almacenamiento de alta presión.",
        key: "La fuga es un evento; el mecanismo se deduce de presión, fase y contexto.",
        prompt: "¿Qué cambió inmediatamente antes de la pérdida?"
      },
      {
        title: "La presión de fuga tiene condiciones",
        text:
          "La presión abdominal de fuga depende del volumen, posición, maniobra, catéter, detección y técnica. Describe las condiciones en que apareció una pérdida, pero no resume por sí sola la gravedad clínica ni determina automáticamente tratamiento.",
        key: "La presión de fuga no debe usarse aislada para graduar severidad.",
        prompt: "¿La cifra está acompañada por las condiciones que permiten interpretarla?"
      },
      {
        title: "Los mecanismos pueden coexistir",
        text:
          "Sensibilidad alterada, hiperactividad, baja complacencia e incompetencia de salida pueden combinarse. El examen puede reproducir solo una parte de una historia mixta; el hallazgo más llamativo no siempre explica el síntoma principal.",
        key: "Jerarquiza por reproducción del problema, condiciones y consecuencias funcionales.",
        prompt: "¿Qué hallazgo explica el problema principal y qué parte de la historia quedó abierta?"
      },
      {
        title: "Una lectura ordenada del almacenamiento",
        text:
          "Confirma calidad y pregunta clínica; revisa sensibilidad, relación presión-volumen, actividad detrusoriana, salida y motivo del final del llenado. Luego vuelve a la pregunta y declara qué dimensión falló, qué se reprodujo y qué no se demostró.",
        key: "Solo después de reconstruir la relación funcional corresponde nombrar el patrón.",
        prompt: "¿La conclusión explica qué objetivo del reservorio falló y conserva sus límites?"
      }
    ]
  },
  voidingDisorders: {
    block: "Bloque II · Interpretación funcional",
    number: "Capítulo 7",
    title: "Trastornos del vaciado",
    mentalModelTitle: "Bomba, salida y condiciones",
    mentalModelText:
      "El flujo resulta de la relación entre fuerza detrusoriana, resistencia de salida, coordinación y representatividad de la micción.",
    notThis: "Usar flujo bajo o residuo como diagnóstico",
    isThis: "Explicar qué relación limita el vaciamiento y con qué certeza",
    labId: "pressureFlowMatrix",
    labDescription:
      "Compara patrones cualitativos de presión-flujo y distingue fuerza, resistencia, prensa abdominal e inhibición sin convertirlos en diagnósticos automáticos.",
    screens: [
      {
        title: "El flujo bajo no es un diagnóstico",
        text:
          "El flujo depende de la fuerza que impulsa la orina y de la resistencia que se opone a su salida. Puede disminuir por poca fuerza, resistencia aumentada, coexistencia de ambas o una micción no habitual durante el examen.",
        key: "El flujo muestra cómo sale la orina; por sí solo no explica por qué.",
        prompt: "¿El problema parece estar en la bomba, en la salida, en ambas o en las condiciones del estudio?"
      },
      {
        title: "Qué debería ocurrir al vaciar",
        text:
          "El paciente reconoce el deseo y autoriza el cambio de programa. La salida se relaja y el detrusor genera una contracción suficiente y sostenida para producir flujo y completar el vaciamiento.",
        key: "Normal no significa mucha presión: significa la presión necesaria para la resistencia existente.",
        prompt: "¿La contracción produjo y sostuvo el flujo hasta completar el vaciamiento?"
      },
      {
        title: "Síntoma, medición y mecanismo",
        text:
          "Chorro débil o pujo son síntomas. Qmax bajo, curva prolongada o residuo elevado son observaciones. Obstrucción, hipoactividad y vaciado disfuncional son mecanismos o hallazgos que requieren integración.",
        key: "El residuo demuestra vaciamiento incompleto; no explica su causa.",
        prompt: "¿Estoy describiendo lo observado o ya atribuyendo un mecanismo?"
      },
      {
        title: "¿Esta micción fue representativa?",
        text:
          "Antes de interpretar, revisa deseo, volumen, posición, privacidad, catéteres, calidad de los canales, flujo libre, participación abdominal y residuo. La frase «yo nunca orino así» también es un dato del estudio.",
        key: "Una micción registrada puede no representar la micción habitual.",
        prompt: "¿Las condiciones permiten usar este vaciado para responder la pregunta clínica?"
      },
      {
        title: "Leer presión y flujo juntos",
        text:
          "Pdet alta con flujo bajo sugiere resistencia aumentada. Pdet baja o breve con flujo bajo sugiere fuerza o duración insuficiente. Pdet baja con buen flujo y vaciamiento completo puede ser normal si la salida ofrece poca resistencia.",
        key: "La presión detrusoriana y el flujo se interpretan como una relación, no como cifras aisladas.",
        prompt: "¿La presión observada fue suficiente para la salida contra la que trabajó?"
      },
      {
        title: "Obstrucción: resistencia aumentada",
        text:
          "El patrón presión-flujo clásico combina flujo reducido con presión detrusoriana aumentada. Puede existir resistencia anatómica o funcional, pero el trazado no siempre localiza por sí solo el sitio ni la causa.",
        key: "La urodinamia puede demostrar resistencia aumentada; la anatomía exige otras fuentes de información.",
        prompt: "¿El estudio apoya resistencia y qué evidencia adicional permitiría localizarla?"
      },
      {
        title: "Índices: útiles dentro de su contexto",
        text:
          "En varones, BOOI = PdetQmax − 2 × Qmax: mayor de 40 orienta a obstrucción, 20–40 es equívoco y menor de 20 no obstruido. BCI = PdetQmax + 5 × Qmax: mayor de 150 fuerte, 100–150 convencionalmente normal y menor de 100 débil.",
        key: "BOOI y BCI apoyan la lectura masculina; no reemplazan la curva ni se trasladan automáticamente a mujeres.",
        prompt: "¿El índice confirma el razonamiento o está intentando sustituirlo?"
      },
      {
        title: "Hipoactividad detrusoriana",
        text:
          "Puede expresarse como presión detrusoriana baja o contracción demasiado breve, generalmente asociada a flujo bajo, vaciamiento prolongado o incompleto. No se reduce a una presión máxima ni equivale al síndrome sintomático de vejiga hipoactiva.",
        key: "La contracción debe evaluarse por fuerza, duración y capacidad de completar el vaciamiento.",
        prompt: "¿La bomba fue débil, breve o insuficiente para esa resistencia?"
      },
      {
        title: "Acontractilidad o inhibición",
        text:
          "No observar una contracción durante una micción fallida no siempre demuestra incapacidad para contraerse fuera del laboratorio. Ansiedad, catéteres, posición y falta de privacidad pueden inhibir el vaciado.",
        key: "Ausencia de contracción registrada no siempre equivale a ausencia fisiológica.",
        prompt: "¿Qué ocurrió en la uroflujometría libre o después de retirar los catéteres?"
      },
      {
        title: "Prensa abdominal y salida activa",
        text:
          "Si Pabd y Pves aumentan con poco cambio real de Pdet, el flujo tiene participación abdominal. Si la salida no se relaja, el flujo puede ser intermitente. En ausencia de enfermedad neurológica se habla de vaciado disfuncional; la disinergia detrusor-esfínter exige contexto neurológico.",
        key: "Describir prensa o actividad de salida no autoriza por sí solo a diagnosticar hipoactividad o disinergia.",
        prompt: "¿Qué genera el flujo y cómo se comporta la salida durante el intento?"
      },
      {
        title: "Integrar antes de concluir",
        text:
          "Confirma interpretabilidad, identifica qué genera el flujo, evalúa la salida, mide eficiencia y vuelve a la pregunta clínica. Obstrucción, hipoactividad y mala coordinación pueden coexistir y producir patrones intermedios.",
        key: "El flujo bajo es el comienzo de la pregunta, no el final del informe.",
        prompt: "¿La dificultad depende de la bomba, la salida, su coordinación o las condiciones del examen?"
      }
    ]
  },
  coordinationDisorders: {
    block: "Bloque II · Interpretación funcional",
    number: "Capítulo 8",
    title: "Coordinación detrusor-salida",
    mentalModelTitle: "Reciprocidad, tiempo y contexto",
    mentalModelText:
      "Durante el vaciado, la contracción del detrusor solo se transforma en flujo si la salida reduce su resistencia en el momento adecuado.",
    notThis: "Nombrar disinergia por una curva irregular o un EMG alto",
    isThis: "Demostrar qué ocurrió, cuándo ocurrió y en qué contexto",
    labId: "coordinationTimeline",
    labDescription:
      "Compara relaciones temporales sintéticas entre Pdet, Pabd, flujo, actividad perineal y apertura de salida; primero describe el fenómeno y luego decide qué etiqueta permite la evidencia.",
    screens: [
      {
        title: "Cuando la vejiga empuja y la salida no cede",
        text:
          "Durante el vaciado, el detrusor debe contraerse mientras la salida disminuye su resistencia. Si la relajación es tardía, incompleta o variable, la vejiga trabaja contra una oposición que no debería estar presente.",
        key: "Un trastorno de coordinación puede ser un problema de tiempo, no el daño aislado de una estructura.",
        prompt: "¿La salida permitió que la contracción se transformara en flujo?"
      },
      {
        title: "Qué significa vaciar coordinadamente",
        text:
          "La salida reduce su resistencia, el detrusor genera la presión necesaria, aparece flujo y ambos fenómenos se sostienen hasta un vaciamiento adecuado. En mujeres, poco aumento de Pdet puede ser normal si la relajación uretral permite buen flujo y vaciamiento completo.",
        key: "Coordinación no exige mucha presión; exige una relación eficaz entre bomba y salida.",
        prompt: "¿La presión fue suficiente para la resistencia realmente presente?"
      },
      {
        title: "La coordinación es una relación temporal",
        text:
          "La salida puede abrir tarde, relajarse solo parcialmente o reactivarse durante la micción. Pero existe un retraso fisiológico entre el inicio de la presión y la llegada de orina al flujómetro: una separación breve no demuestra cierre esfinteriano.",
        key: "Para hablar de apertura tardía se necesita más que un pequeño desfase entre Pdet y flujo.",
        prompt: "¿El retraso es prolongado y está corroborado por EMG o imagen?"
      },
      {
        title: "La forma del flujo no demuestra el mecanismo",
        text:
          "Un flujo intermitente o fluctuante también puede aparecer por pujos abdominales, contracción detrusoriana débil o breve, poco volumen, dolor, movimiento o una micción no representativa.",
        key: "La curva describe cómo sale la orina; no identifica por sí sola qué estructura interrumpe el flujo.",
        prompt: "¿Los pulsos de flujo coinciden con Pdet, Pabd, actividad perineal o movimiento?"
      },
      {
        title: "Disinergia detrusor-esfínter",
        text:
          "La disinergia corresponde a contracción detrusoriana simultánea con activación inapropiada de la salida estriada en el contexto de una alteración neurológica relevante. El trazado puede mostrar presión elevada, flujo limitado o intermitente y actividad perineal concomitante.",
        key: "La palabra decisiva es neurológica: la forma de la curva no basta.",
        prompt: "¿Existe una enfermedad o lesión neurológica que haga válida esta etiqueta?"
      },
      {
        title: "La lesión orienta, pero no dicta el trazado",
        text:
          "Las lesiones suprapontinas suelen conservar la sinergia; las suprasacras pueden favorecer disinergia; y las sacras, de cauda equina o periféricas pueden asociarse a hipoactividad, acontractilidad o cambios de resistencia. Son asociaciones orientadoras, no reglas absolutas.",
        key: "La neurología anticipa posibilidades; la urodinamia muestra qué ocurre en ese paciente.",
        prompt: "¿El patrón observado coincide con el contexto sin haber sido supuesto a partir de él?"
      },
      {
        title: "Vaciado disfuncional",
        text:
          "En una persona sin enfermedad neurológica demostrada, una relajación inadecuada o variable del esfínter externo o del piso pélvico puede producir flujo intermitente. Puede parecerse a la disinergia, pero el contexto fisiopatológico es distinto.",
        key: "Trazados parecidos no autorizan etiquetas equivalentes.",
        prompt: "¿El registro demuestra mala relajación y qué contexto neurológico tiene el paciente?"
      },
      {
        title: "Describir cuando la evidencia no alcanza",
        text:
          "Si no es posible separar vaciado disfuncional, disinergia, cierre voluntario, obstrucción del cuello o artefacto, conviene describir la relación observada: contracción detrusoriana, flujo y persistencia o cambio de actividad perineal.",
        key: "La descripción puede ser precisa aunque la etiología permanezca abierta.",
        prompt: "¿Mi conclusión dice exactamente qué ocurrió sin adjudicar una causa no demostrada?"
      },
      {
        title: "Qué aporta realmente el EMG",
        text:
          "Los electrodos de superficie registran actividad eléctrica de músculos cercanos. Pueden recoger esfínter anal, piso pélvico, musculatura periuretral, glúteos, movimiento e interferencias; no miden presión uretral ni demuestran cierre por sí solos.",
        key: "Aumento de EMG significa actividad eléctrica, no obstrucción demostrada.",
        prompt: "¿La señal respondió a controles y coincide temporalmente con presión, flujo o imagen?"
      },
      {
        title: "EMG e imagen son complementarios",
        text:
          "La videourodinamia puede mostrar apertura del cuello, sitio de estrechamiento, dilatación proximal o reflujo. El EMG aporta actividad perineal. Como pueden existir discordancias, ninguno debe interpretarse como verdad aislada.",
        key: "La fuerza diagnóstica aparece al integrar señales concordantes, no al absolutizar una de ellas.",
        prompt: "¿Presión, flujo, EMG, imagen y contexto cuentan la misma historia?"
      },
      {
        title: "Coordinación no es toda obstrucción",
        text:
          "Pdet alta con flujo bajo sugiere resistencia aumentada, pero esa resistencia puede ser anatómica, del cuello vesical o funcional. Una próstata obstructiva o una estenosis no implican por sí mismas mala coordinación neuromuscular.",
        key: "Primero demuestra resistencia; después pregunta por su sitio y mecanismo.",
        prompt: "¿Qué dato permite separar estrechamiento fijo de activación variable de la salida?"
      },
      {
        title: "Prensa abdominal y falsa apariencia de disinergia",
        text:
          "Pujos repetidos elevan Pabd y Pves, producen pulsos de flujo y pueden activar el piso pélvico o mover los electrodos. Si Pdet no sostiene el vaciado, el patrón puede simular una alteración esfinteriana.",
        key: "Antes de culpar a la salida, identifica quién está generando el flujo.",
        prompt: "¿Cada pulso de flujo coincide con Pabd o con una contracción detrusoriana sostenida?"
      },
      {
        title: "Por qué importa reconocer la mala coordinación",
        text:
          "Una vejiga que trabaja contra una salida activa puede vaciar con presión elevada, flujo limitado y residuo. En neuro-urología, el riesgo para la vía urinaria superior se evalúa en todo el ciclo, especialmente con presión de almacenamiento y complacencia; no se deduce de la etiqueta aislada.",
        key: "La alteración importa por sus consecuencias funcionales, no solo por la forma de la curva.",
        prompt: "¿Qué presión, eficiencia y comportamiento de almacenamiento acompañan el hallazgo?"
      },
      {
        title: "Integrar antes de etiquetar",
        text:
          "Confirma representatividad y calidad; identifica qué inició el flujo; observa la apertura de salida y su relación temporal; revisa antecedentes neurológicos y anatómicos. Luego describe y, solo si la evidencia alcanza, nombra el mecanismo.",
        key: "Primero se describe lo que la salida hizo. Después, si corresponde, se le pone un nombre.",
        prompt: "¿La evidencia permite una etiqueta o exige conservar una descripción funcional prudente?"
      }
    ]
  },
  neuroUrology: {
    block: "Bloque III · Neuro-urología",
    number: "Capítulo 9",
    title: "Neuro-urología según el sitio de la lesión",
    mentalModelTitle: "Mapa neurológico, función demostrada",
    mentalModelText:
      "La localización permite formular una hipótesis. La urodinamia establece cómo almacena y vacía ese paciente, a qué presión y con qué coordinación.",
    notThis: "Asignar una vejiga fija a cada diagnóstico neurológico",
    isThis: "Comparar el patrón esperado con la función realmente medida",
    labId: "neuroLesionMap",
    labDescription:
      "Explora hipótesis funcionales por nivel de lesión y contrástalas con casos sintéticos. El mapa es una simplificación docente: orienta probabilidades, no predice individuos.",
    screens: [
      {
        title: "La lesión orienta; la urodinamia demuestra",
        text:
          "El control vesical depende de cerebro, puente, médula sacra y nervios periféricos. Una lesión en cada nivel cambia las probabilidades, pero no determina por sí sola el trazado.",
        key: "La lesión indica qué podríamos encontrar. La urodinamia muestra qué está ocurriendo realmente.",
        prompt: "¿Estoy usando la localización como hipótesis o como conclusión anticipada?"
      },
      {
        title: "Primero: ¿es realmente neurogénico?",
        text:
          "Una curva inusual, una contracción involuntaria o una retención no prueban origen neurológico. Debe existir una enfermedad o lesión relevante, descrita por nivel, extensión, evolución y completitud.",
        key: "La forma de una curva no la convierte en neurogénica.",
        prompt: "¿Cuál es el diagnóstico neurológico y qué vías podría comprometer?"
      },
      {
        title: "Un mapa de tres niveles",
        text:
          "El cerebro aporta percepción, inhibición y decisión; la región pontina coordina contracción y apertura; los circuitos sacros y nervios periféricos ejecutan sensibilidad, contracción y cierre.",
        key: "Este mapa es una simplificación útil de una red integrada y bilateral.",
        prompt: "¿La lesión afecta inhibición, coordinación, ejecución o más de una función?"
      },
      {
        title: "La regla general",
        text:
          "Suprapontino suele significar pérdida de inhibición con sinergia conservada. Suprasacro puede conservar contracción refleja y perder coordinación. Sacro o periférico puede alterar sensibilidad, contractilidad y competencia de salida.",
        key: "La localización genera probabilidades, no una sentencia urodinámica.",
        prompt: "¿Qué hallazgo esperado tendría que demostrar el estudio?"
      },
      {
        title: "Lesiones suprapontinas",
        text:
          "El patrón clásico es hiperactividad detrusoriana neurogénica durante almacenamiento y vaciado habitualmente coordinado. Puede haber urgencia, incontinencia y capacidad funcional reducida.",
        key: "La vejiga puede activarse antes de tiempo, pero la salida suele acompañarla.",
        prompt: "¿La contracción es involuntaria y el vaciado conserva coordinación?"
      },
      {
        title: "Suprapontino no significa simple",
        text:
          "Retención aguda, cognición, movilidad, medicamentos, obstrucción y enfermedades mixtas pueden modificar el patrón. Un residuo alto no debe atribuirse automáticamente a la lesión cerebral.",
        key: "El diagnóstico neurológico no elimina las causas urológicas concomitantes.",
        prompt: "¿Qué dato no queda explicado por el patrón suprapontino clásico?"
      },
      {
        title: "Lesiones pontinas o suprasacras",
        text:
          "Puede conservarse la contracción refleja del detrusor mientras se pierde coordinación descendente. Son posibles hiperactividad, baja complacencia, disinergia, presión elevada, flujo limitado y residuo.",
        key: "La vejiga puede contraerse y, aun así, encontrar una salida que no cede.",
        prompt: "¿La presión y el flujo demuestran contracción contra resistencia funcional?"
      },
      {
        title: "Continencia no equivale a seguridad",
        text:
          "Una salida muy resistente puede evitar la fuga y mantener presiones desfavorables. Otra persona puede ser incontinente y almacenar a baja presión. El riesgo se evalúa en todo el ciclo.",
        key: "Una vejiga seca no es necesariamente una vejiga segura.",
        prompt: "¿A qué presión almacena y vacía, aunque no exista fuga?"
      },
      {
        title: "Shock medular: una fase, no el resultado final",
        text:
          "Tras una lesión aguda puede existir pérdida temporal de actividad sensitiva, motora y refleja, con retención completa e indolora. Al reaparecer reflejos, el patrón puede cambiar.",
        key: "La primera urodinamia puede mostrar una etapa evolutiva.",
        prompt: "¿Cuánto tiempo ha pasado desde la lesión y qué función se ha recuperado?"
      },
      {
        title: "Lesiones sacras",
        text:
          "El compromiso de aferencias, salida parasimpática y motoneuronas somáticas puede producir sensibilidad reducida, hipoactividad o acontractilidad y debilidad esfinteriana.",
        key: "Retención e incontinencia pueden coexistir: fallan la bomba y el cierre.",
        prompt: "¿Están alteradas contractilidad, sensibilidad, competencia de salida o varias?"
      },
      {
        title: "Cauda equina y nervios periféricos",
        text:
          "Cuando se interrumpen vías aferentes o eferentes pueden aparecer gran capacidad, contracción débil o ausente, micción abdominal, residuo e incompetencia esfinteriana.",
        key: "La señal puede no llegar desde la vejiga, hacia ella o en ambas direcciones.",
        prompt: "¿El paciente siente el llenado y puede generar una contracción efectiva?"
      },
      {
        title: "La sensibilidad también informa",
        text:
          "Algunas personas reconocen llenado mediante plenitud abdominal, sudoración, sensación uretral, inquietud o aumento de espasticidad, sin un deseo miccional convencional.",
        key: "Ausencia de deseo normal no equivale a ausencia total de información aferente.",
        prompt: "¿Cómo reconoce habitualmente este paciente que su vejiga está llena?"
      },
      {
        title: "Lesiones mixtas y multifocales",
        text:
          "Esclerosis múltiple, cono medular, espina bífida, diabetes y enfermedades neurodegenerativas pueden combinar hiperactividad, mala coordinación, hipoactividad y alteraciones sensitivas.",
        key: "Cuando la lesión es mixta, el trazado también puede serlo.",
        prompt: "¿Estoy forzando un patrón complejo dentro de una sola etiqueta?"
      },
      {
        title: "Disreflexia autonómica: seguridad del estudio",
        text:
          "En lesiones medulares altas, especialmente T6 o superiores, la distensión vesical y la urodinamia pueden gatillar una respuesta autonómica peligrosa. Presión arterial y frecuencia cardíaca forman parte del examen seguro.",
        key: "En pacientes en riesgo, monitorizar no es opcional ni un dato accesorio.",
        prompt: "¿Existe un plan de monitorización y respuesta antes de comenzar?"
      },
      {
        title: "Qué debe responder la urodinamia",
        text:
          "Debe precisar sensibilidad, actividad detrusoriana, complacencia, continencia, contractilidad, coordinación, flujo, residuo y presiones. La videourodinamia añade anatomía dinámica y reflujo.",
        key: "No basta con escribir “vejiga neurogénica”: hay que describir qué falla, en qué fase y con qué consecuencia.",
        prompt: "¿El estudio define almacenamiento, vaciado y seguridad?"
      },
      {
        title: "No reducir el riesgo a un número",
        text:
          "El riesgo depende de presión de almacenamiento, complacencia, actividad detrusoriana, resistencia, coordinación, duración, reflujo y evolución. El detrusor leak point pressure no basta para estimarlo.",
        key: "Un valor contribuye al análisis; no reemplaza el comportamiento completo.",
        prompt: "¿Este sistema trabaja a presiones compatibles con seguridad a largo plazo?"
      },
      {
        title: "Los síntomas pueden callar el riesgo",
        text:
          "La sensibilidad reducida puede ocultar distensión, retención o presión alta. La intensidad del síntoma no siempre refleja la gravedad funcional y el patrón puede cambiar con el tiempo.",
        key: "Sentirse bien no garantiza que el tracto urinario superior esté protegido.",
        prompt: "¿Qué seguimiento objetivo necesita este patrón y su evolución?"
      },
      {
        title: "Razonar en orden",
        text:
          "Identifica nivel y etapa evolutiva; formula hipótesis de almacenamiento y vaciado; reconoce riesgos; compara con el trazado. Si no coincide, revisa lesión mixta, patología concomitante, técnica y representatividad.",
        key: "El diagnóstico neurológico entrega el mapa; la urodinamia muestra cómo funciona el sistema.",
        prompt: "¿Qué esperaba, qué observé y qué diferencia todavía debo explicar?"
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
  },
  storageOversensitivity: {
    title: "Sensaciones tempranas con Pdet estable",
    eventLabel: "urgencia precoz sin cambio de Pdet",
    event: {
      type: "storage",
      title: "El paciente siente antes de que la presión cambie",
      label: "sensibilidad durante llenado",
      timing: "a bajo volumen relativo",
      reading: "El paciente comunica deseo intenso o urgencia mientras Pdet permanece estable y no se demuestra una contracción.",
      caution: "El volumen aislado no diagnostica; importa la progresión, la experiencia habitual y la calidad del registro."
    },
    question: "¿Qué dimensión del almacenamiento debe analizarse primero?",
    answers: [
      ["Sensibilidad vesical aumentada durante este llenado", true, "Correcto. La sensación cambia sin una elevación anormal de Pdet."],
      ["Hiperactividad detrusoriana demostrada", false, "No se registró una contracción de Pdet."],
      ["Baja complacencia demostrada", false, "La presión basal no aumenta progresivamente con el volumen."],
      ["Incontinencia urodinámica de esfuerzo", false, "No existe una fuga asociada a aumento abdominal."]
    ]
  },
  detrusorLeak: {
    title: "Contracción detrusoriana asociada a fuga",
    eventLabel: "Pdet aumenta + fuga",
    event: {
      type: "leak",
      title: "La fuga aparece durante una contracción",
      label: "actividad detrusoriana con pérdida",
      timing: "durante el llenado",
      reading: "Pves y Pdet aumentan sin una elevación equivalente de Pabd; la fuga coincide temporalmente con la contracción.",
      caution: "Debe describirse sensación, volumen, presión, inhibición y reproducción del síntoma habitual."
    },
    question: "¿Qué relación explica mejor la fuga observada?",
    answers: [
      ["Fuga asociada a actividad detrusoriana durante el llenado", true, "Correcto. La pérdida coincide con una contracción de Pdet y no con un esfuerzo abdominal."],
      ["Incontinencia de esfuerzo porque toda fuga depende de la salida", false, "La secuencia no muestra un aumento abdominal como desencadenante."],
      ["Baja complacencia por un pico aislado", false, "La complacencia se evalúa como relación progresiva presión-volumen."],
      ["Diagnóstico clínico de vejiga hiperactiva confirmado", false, "El hallazgo urodinámico no reemplaza la definición sintomática ni la integración clínica."]
    ]
  },
  storagePressureLeak: {
    title: "Presión basal progresiva hasta la fuga",
    eventLabel: "Pdet progresa + fuga",
    event: {
      type: "leak",
      title: "El reservorio pierde mientras aumenta la presión",
      label: "almacenamiento de alta presión",
      timing: "al avanzar el llenado",
      reading: "Pdet asciende progresivamente con el volumen y la fuga aparece sin una contracción fásica ni una maniobra abdominal que la explique.",
      caution: "Debe diferenciarse de la presión abdominal de fuga y validarse contra velocidad de llenado y calidad técnica."
    },
    question: "¿Qué problema funcional tiene prioridad en este patrón?",
    answers: [
      ["La seguridad del almacenamiento y la relación presión-volumen", true, "Correcto. La continencia deja de ser la única pregunta cuando el reservorio gana presión de forma progresiva."],
      ["La severidad clínica calculada solo por la fuga", false, "La fuga no resume el riesgo ni la gravedad del caso."],
      ["Una tos no anotada como explicación obligatoria", false, "El patrón es progresivo y no se acompaña de Pabd."],
      ["Hiperactividad detrusoriana fásica", false, "No existe un pico o contracción transitoria; predomina la elevación basal progresiva."]
    ]
  },
  outletResistance: {
    title: "Presión sostenida con flujo limitado",
    eventLabel: "Pdet alta + flujo bajo",
    event: {
      type: "voiding",
      title: "La bomba trabaja contra resistencia",
      label: "patrón presión-flujo",
      timing: "durante el intento de vaciado",
      reading: "Pdet aumenta de forma sostenida, pero el flujo sigue limitado; el patrón sugiere resistencia de salida aumentada.",
      caution: "El patrón no localiza por sí solo la causa anatómica o funcional."
    },
    question: "¿Cuál es la interpretación inicial más prudente?",
    answers: [
      ["Patrón sugerente de resistencia de salida aumentada", true, "Correcto. La relación presión-flujo orienta a resistencia; la causa requiere integración adicional."],
      ["Obstrucción anatómica localizada y demostrada", false, "La curva puede apoyar resistencia aumentada, pero no siempre localiza el sitio ni su causa."],
      ["Hipoactividad detrusoriana aislada", false, "La presión sostenida no apoya una falla aislada de fuerza como primera lectura."],
      ["Resultado normal porque existe algo de flujo", false, "La existencia de flujo no normaliza una relación ineficiente entre presión y salida."]
    ]
  },
  detrusorUnderactivity: {
    title: "Contracción breve con vaciamiento ineficiente",
    eventLabel: "Pdet breve + flujo bajo",
    event: {
      type: "voiding",
      title: "La bomba no sostiene el vaciado",
      label: "fuerza o duración insuficiente",
      timing: "durante el intento de vaciado",
      reading: "La contracción aparece, pero es pequeña o demasiado breve para mantener el flujo y completar el vaciamiento.",
      caution: "La lectura depende de la resistencia contra la que trabaja el detrusor."
    },
    question: "¿Qué describe mejor este patrón sintético?",
    answers: [
      ["Fuerza o duración detrusoriana insuficiente para el vaciamiento observado", true, "Correcto. La lectura integra la contracción, el flujo y la eficiencia final."],
      ["Obstrucción demostrada solo por el flujo bajo", false, "El flujo bajo aislado no distingue resistencia de fuerza insuficiente."],
      ["Vaciado normal porque Pdet aumentó", false, "Iniciar una contracción no garantiza sostenerla ni completar el vaciamiento."],
      ["Acontractilidad absoluta", false, "Aquí sí existe una contracción; el problema docente es su suficiencia o duración."]
    ]
  },
  abdominalVoiding: {
    title: "Flujo con participación abdominal",
    eventLabel: "Pabd sube + flujo variable",
    event: {
      type: "valsalva",
      title: "La prensa abdominal impulsa el flujo",
      label: "Pves y Pabd ascienden juntas",
      timing: "esfuerzo sostenido durante vaciado",
      reading: "El flujo coincide con aumento de Pabd y Pves, mientras Pdet cambia poco.",
      caution: "Describir participación abdominal no equivale automáticamente a diagnosticar hipoactividad."
    },
    question: "¿Qué afirmación se sostiene directamente con estas señales?",
    answers: [
      ["El vaciado muestra participación relevante de la prensa abdominal", true, "Correcto. Eso describe el mecanismo observado sin atribuir todavía su causa."],
      ["Existe hipoactividad detrusoriana demostrada", false, "La prensa puede compensar mecanismos distintos o reflejar una estrategia habitual; falta integración."],
      ["Existe disinergia detrusor-esfínter", false, "Ese diagnóstico requiere actividad de salida y contexto neurológico, no solo Pabd elevada."],
      ["Pdet es alta porque Pves aumentó", false, "Si Pabd acompaña a Pves, la presión derivada puede cambiar poco."]
    ]
  },
  inhibitedVoiding: {
    title: "Intento de micción no representativo",
    eventLabel: "orden miccional sin respuesta",
    event: {
      type: "signal",
      title: "El paciente no logra orinar con catéteres",
      label: "sin contracción ni flujo",
      timing: "durante el intento registrado",
      reading: "No aparece contracción detrusoriana ni flujo durante el examen, pero el contexto puede haber inhibido la micción.",
      caution: "Comparar con flujo libre y micción posterior antes de informar acontractilidad."
    },
    question: "El paciente orina normalmente después de retirar los catéteres. ¿Qué conclusión es más rigurosa?",
    answers: [
      ["La fase instrumentada no fue representativa y no demuestra acontractilidad", true, "Correcto. La micción posterior obliga a considerar inhibición por las condiciones del estudio."],
      ["Acontractilidad detrusoriana confirmada", false, "Una micción fallida aislada, contradicha por el vaciado posterior, no basta para confirmarla."],
      ["Obstrucción de salida demostrada", false, "No hay una relación presión-flujo interpretable que sostenga esa conclusión."],
      ["El relato del paciente debe ignorarse", false, "La representatividad informada por el paciente forma parte de la interpretación."
      ]
    ]
  },
  delayedOutlet: {
    title: "Presión antes de apertura de la salida",
    eventLabel: "Pdet inicia antes del flujo",
    event: {
      type: "voiding",
      title: "La salida tarda en reducir su resistencia",
      label: "relación temporal",
      timing: "inicio del intento de vaciado",
      reading: "Pdet aumenta mientras la actividad perineal persiste; el flujo aparece cuando esa actividad disminuye.",
      caution: "Un desfase breve puede corresponder al retraso fisiológico del flujo. La apertura tardía exige un intervalo relevante y corroboración."
    },
    question: "¿Qué conclusión respeta mejor el alcance de este trazado sintético?",
    answers: [
      ["Existe una demora de apertura que debe compararse con el retraso fisiológico y corroborarse", true, "Correcto. La relación temporal orienta, pero el pequeño desfase presión-flujo no basta por sí solo."],
      ["Toda presión anterior al flujo demuestra disinergia", false, "No. Existe retraso fisiológico y la disinergia exige además contexto neurológico relevante."],
      ["El flujo tardío demuestra una estenosis uretral", false, "El registro no localiza ni demuestra por sí solo una causa anatómica."],
      ["El EMG elevado mide directamente el cierre uretral", false, "El EMG registra actividad eléctrica cercana, no presión ni apertura uretral directa."]
    ]
  },
  dysfunctionalOutlet: {
    title: "Salida variable sin enfermedad neurológica",
    eventLabel: "flujo y EMG fluctúan",
    event: {
      type: "voiding",
      title: "La salida se reactiva durante el vaciado",
      label: "relajación variable",
      timing: "durante una contracción detrusoriana",
      reading: "El flujo se interrumpe mientras reaparece actividad perineal en una persona sin enfermedad neurológica demostrada.",
      caution: "Primero se describe relajación inadecuada; el diagnóstico exige excluir prensa, artefacto y otras resistencias."
    },
    question: "Sin una alteración neurológica relevante, ¿qué término es más apropiado si el mecanismo se confirma?",
    answers: [
      ["Vaciado disfuncional", true, "Correcto. La falta de relajación en una persona neurológicamente normal se diferencia de la disinergia."],
      ["Disinergia detrusor-esfínter", false, "Ese término requiere una alteración neurológica relevante."],
      ["Obstrucción anatómica demostrada", false, "La actividad variable de salida no localiza una lesión anatómica fija."],
      ["Hipoactividad detrusoriana por definición", false, "La intermitencia no demuestra por sí sola una falla de la bomba."]
    ]
  },
  neurogenicDyssynergia: {
    title: "Contracción y salida activas en contexto neurológico",
    eventLabel: "Pdet + actividad de salida simultáneas",
    event: {
      type: "voiding",
      title: "La reciprocidad detrusor-salida se pierde",
      label: "contexto neurológico relevante",
      timing: "durante el intento de vaciado",
      reading: "Una contracción detrusoriana coincide con actividad perineal persistente y flujo limitado o intermitente.",
      caution: "El contexto neurológico permite plantear disinergia; la curva y el EMG aislados no la confirman automáticamente."
    },
    question: "¿Qué formulación conserva la relación entre evidencia y contexto?",
    answers: [
      ["Hallazgos compatibles con disinergia detrusor-esfínter en el contexto neurológico descrito", true, "Correcto. La conclusión integra simultaneidad, salida activa y enfermedad neurológica relevante."],
      ["Disinergia confirmada solo por el flujo intermitente", false, "La forma del flujo no identifica por sí sola el mecanismo."],
      ["Vaciado disfuncional porque ambos patrones se ven parecidos", false, "El contexto neurológico cambia la terminología y la fisiopatología."],
      ["El EMG demuestra directamente una uretra cerrada", false, "La actividad eléctrica es evidencia complementaria, no una medición directa de cierre."]
    ]
  },
  abdominalCoordinationMimic: {
    title: "Prensa abdominal que imita mala coordinación",
    eventLabel: "pulsos de Pabd + pulsos de flujo",
    event: {
      type: "valsalva",
      title: "El abdomen genera el patrón intermitente",
      label: "imitador funcional",
      timing: "durante pujos repetidos",
      reading: "Cada pulso de flujo coincide con Pabd y Pves, mientras Pdet no sostiene una contracción; el EMG también puede moverse con el esfuerzo.",
      caution: "Flujo y EMG intermitentes no demuestran disinergia si el motor principal es la prensa abdominal."
    },
    question: "¿Qué debe identificarse antes de atribuir la intermitencia a la salida?",
    answers: [
      ["Quién genera cada pulso de flujo: Pdet o Pabd", true, "Correcto. La relación temporal con Pabd puede revelar una micción abdominal que imita mala coordinación."],
      ["La etiqueta neurológica más específica", false, "Primero hay que demostrar el mecanismo observado y conocer el contexto neurológico."],
      ["El valor máximo aislado de Pves", false, "Pves incluye presión abdominal y no identifica por sí sola al generador del flujo."],
      ["La forma visual del flujo sin revisar otros canales", false, "La misma forma puede originarse por mecanismos distintos."]
    ]
  },
  fixedOutletResistance: {
    title: "Resistencia fija sin activación perineal demostrada",
    eventLabel: "Pdet alta + flujo bajo continuo",
    event: {
      type: "voiding",
      title: "La relación presión-flujo demuestra resistencia",
      label: "mecanismo aún no localizado",
      timing: "durante un vaciado representativo",
      reading: "Pdet se mantiene elevada y el flujo es bajo pero continuo, sin aumento concordante de actividad perineal.",
      caution: "El patrón orienta a resistencia aumentada; no demuestra que la causa sea mala coordinación ni identifica una lesión anatómica."
    },
    question: "¿Qué afirmación es defendible con estos datos?",
    answers: [
      ["Existe un patrón de resistencia aumentada, pero el mecanismo necesita localización adicional", true, "Correcto. Presión-flujo responde si hay resistencia; EMG, imagen y anatomía ayudan a explicar su causa."],
      ["Existe disinergia porque Pdet es alta", false, "La presión alta no demuestra activación esfinteriana ni aporta por sí sola contexto neurológico."],
      ["La ausencia de aumento del EMG excluye toda obstrucción", false, "Una resistencia anatómica puede existir sin activación perineal."],
      ["El flujo continuo demuestra coordinación normal", false, "Puede existir continuidad y, aun así, una relación presión-flujo de alta resistencia."]
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
  },
  storageMap: {
    title: "Mapa funcional del almacenamiento",
    subtitle: "Patrones sintéticos cualitativos: sensibilidad, estabilidad, presión-volumen y mecanismo de fuga"
  },
  pressureFlowMatrix: {
    title: "Presión y flujo: una relación, cinco lecturas",
    subtitle: "Patrones cualitativos sintéticos; no representan umbrales ni producen diagnósticos"
  },
  coordinationTimeline: {
    title: "Coordinación: quién actúa y cuándo",
    subtitle: "Relaciones temporales sintéticas; el mismo aspecto puede exigir conclusiones distintas según el contexto"
  },
  neuroLesionMap: {
    title: "Del sitio de la lesión a una hipótesis funcional",
    subtitle: "Mapa docente cualitativo: selecciona un nivel y contrástalo con la urodinamia"
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
  storageDisorders: [
    { id: "storageMap", label: "Mapa del almacenamiento" },
    { id: "accommodation", label: "Acomodación" }
  ],
  voidingDisorders: [
    { id: "pressureFlowMatrix", label: "Presión y flujo" },
    { id: "flowResistance", label: "Bomba y salida" }
  ],
  coordinationDisorders: [{ id: "coordinationTimeline", label: "Tiempo y salida" }],
  neuroUrology: [
    { id: "neuroLesionMap", label: "Mapa neurológico" },
    { id: "coordinationTimeline", label: "Coordinación" },
    { id: "storageMap", label: "Seguridad al almacenar" }
  ]
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
  ],
  storageDisorders: [
    {
      tag: "Síntoma y hallazgo",
      title: "Urgencia habitual sin contracción durante el estudio",
      prompt: "¿Qué conclusión mantiene separados el síndrome clínico y el hallazgo urodinámico?",
      evidence: ["Urgencia en la vida cotidiana", "Pdet estable durante este llenado", "Síntoma no reproducido"],
      answers: [
        ["No se observó hiperactividad detrusoriana; el estudio no descarta vejiga hiperactiva", true, "Correcto. Se informa lo que no se reprodujo sin invalidar un síndrome definido clínicamente."],
        ["La vejiga hiperactiva queda descartada", false, "La ausencia de contracciones durante un examen artificial no descarta el síndrome clínico."],
        ["La urgencia demuestra hiperactividad detrusoriana", false, "El síntoma no demuestra por sí solo una contracción de Pdet durante el llenado."]
      ]
    },
    {
      tag: "Sensibilidad",
      title: "Deseo intenso precoz con Pdet estable",
      prompt: "¿Qué dimensión del almacenamiento está alterada primero?",
      evidence: ["Sensación temprana", "Capacidad reducida por deseo", "Sin aumento anormal de Pdet"],
      answers: [
        ["La sensibilidad; el patrón orienta a sobresensibilidad vesical", true, "Correcto. La percepción aparece pronto sin una contracción detrusoriana demostrada."],
        ["La estabilidad; existe hiperactividad detrusoriana", false, "Sin elevación de Pdet no se ha demostrado una contracción detrusoriana."],
        ["La competencia de salida; existe incontinencia de esfuerzo", false, "No se ha descrito fuga ni una maniobra abdominal asociada."]
      ]
    },
    {
      tag: "Presión-volumen",
      title: "Pdet basal aumenta progresivamente con el volumen",
      prompt: "¿Qué lectura diferencia este patrón de un pico detrusoriano aislado?",
      evidence: ["Ascenso sostenido", "Relación con volumen", "Sin contracción fásica aislada"],
      answers: [
        ["Patrón compatible con complacencia reducida, si los canales y la velocidad de llenado son confiables", true, "Correcto. La interpretación depende de una relación presión-volumen progresiva y de señales técnicamente válidas."],
        ["Hiperactividad detrusoriana confirmada por cualquier aumento de Pdet", false, "Una contracción fásica y una elevación basal progresiva no representan el mismo fenómeno."],
        ["Capacidad vesical baja como diagnóstico definitivo", false, "La capacidad es un resultado; primero debe explicarse qué limitó el llenado."]
      ]
    },
    {
      tag: "Mecanismo de fuga",
      title: "Fuga observada durante una tos",
      prompt: "¿Qué secuencia sostiene incontinencia urodinámica de esfuerzo?",
      evidence: ["Pabd y Pves aumentan", "Pdet no muestra contracción", "Fuga temporalmente asociada"],
      answers: [
        ["Aumento abdominal con fuga y sin contracción detrusoriana", true, "Correcto. La relación entre maniobra, presiones y fuga define el hallazgo durante el estudio."],
        ["Cualquier señal en el canal de flujo después de toser", false, "La pérdida debe observarse o confirmarse y relacionarse de forma coherente con la maniobra."],
        ["Una elevación involuntaria de Pdet que precede la fuga", false, "Esa secuencia orientaría a fuga asociada a actividad detrusoriana, no a esfuerzo."]
      ]
    },
    {
      tag: "Capacidad",
      title: "El llenado termina a bajo volumen",
      prompt: "¿Qué pregunta debe responderse antes de convertir la capacidad en una etiqueta?",
      evidence: ["Volumen final reducido", "Fin del llenado", "Mecanismo aún no definido"],
      answers: [
        ["Por qué terminó: urgencia, dolor, presión, fuga, técnica o decisión del operador", true, "Correcto. La capacidad indica dónde terminó el llenado, no explica por sí sola su causa."],
        ["Qué diagnóstico corresponde automáticamente a ese volumen", false, "No existe una interpretación única sin conocer la razón del término y la representatividad."],
        ["Qué presión de fuga gradúa mejor la gravedad", false, "La presión de fuga depende de la técnica y no explica por sí sola una capacidad reducida."]
      ]
    }
  ],
  voidingDisorders: [
    {
      tag: "Relación presión-flujo",
      title: "Pdet elevada y flujo bajo",
      prompt: "¿Qué conclusión inicial conserva mejor la proporcionalidad de la evidencia?",
      evidence: ["Micción representativa", "Pdet sostenida", "Flujo reducido"],
      answers: [
        ["Patrón sugerente de resistencia de salida aumentada", true, "Correcto. La relación orienta a resistencia; localizar y explicar su causa requiere más información."],
        ["Obstrucción anatómica ya localizada", false, "El estudio presión-flujo no siempre identifica por sí solo el sitio anatómico."],
        ["Hipoactividad aislada demostrada", false, "Una presión sostenida y elevada no apoya una falla aislada de fuerza como primera lectura."]
      ]
    },
    {
      tag: "Presión baja no es falla",
      title: "Mujer con Pdet baja, buen flujo y vaciamiento completo",
      prompt: "¿Cuál es la lectura funcional más prudente?",
      evidence: ["Flujo adecuado", "Pdet baja", "Residuo no significativo"],
      answers: [
        ["Puede ser un vaciado eficiente frente a una salida de baja resistencia", true, "Correcto. La fisiología exige presión suficiente para la resistencia existente, no una presión alta por definición."],
        ["Hipoactividad detrusoriana obligatoria", false, "La baja presión aislada no es patológica si el flujo y la eficiencia son adecuados."],
        ["Obstrucción femenina confirmada", false, "El flujo adecuado y el vaciamiento completo no sostienen esa conclusión automática."]
      ]
    },
    {
      tag: "Representatividad",
      title: "No orina con catéteres, pero sí después de retirarlos",
      prompt: "¿Qué debe informar el alumno?",
      evidence: ["Sin flujo instrumentado", "Sin contracción registrada", "Micción posterior habitual"],
      answers: [
        ["La micción instrumentada no fue representativa; no se demostró acontractilidad", true, "Correcto. La contradicción obliga a considerar inhibición y a declarar el límite del estudio."],
        ["Acontractilidad confirmada por ausencia de Pdet", false, "Una sola micción fallida y no representativa no demuestra incapacidad fisiológica permanente."],
        ["Obstrucción confirmada por ausencia de flujo", false, "Sin una relación presión-flujo interpretable, la ausencia de flujo no distingue el mecanismo."]
      ]
    }
  ],
  coordinationDisorders: [
    {
      tag: "Terminología",
      title: "Flujo intermitente y actividad perineal, sin enfermedad neurológica",
      prompt: "Si se confirma una relajación variable de la salida, ¿qué formulación corresponde?",
      evidence: ["Pdet sostenida", "Flujo intermitente", "Sin alteración neurológica demostrada"],
      answers: [
        ["Compatible con vaciado disfuncional; primero describir la relajación inadecuada", true, "Correcto. El patrón debe describirse y el contexto no permite llamarlo disinergia."],
        ["Disinergia detrusor-esfínter confirmada", false, "La disinergia requiere una alteración neurológica relevante."],
        ["Estenosis uretral demostrada", false, "El patrón no localiza por sí solo una resistencia anatómica."]
      ]
    },
    {
      tag: "Contexto neurológico",
      title: "Contracción detrusoriana y salida activas en una lesión suprasacra",
      prompt: "¿Qué lectura integra mejor señal y contexto?",
      evidence: ["Lesión neurológica relevante", "Pdet activa", "Actividad perineal simultánea + flujo limitado"],
      answers: [
        ["Hallazgos compatibles con disinergia detrusor-esfínter", true, "Correcto. La conclusión integra la simultaneidad y el contexto neurológico; no depende solo de la forma del flujo."],
        ["Vaciado disfuncional por definición", false, "Ese término se usa cuando no existe enfermedad neurológica demostrada."],
        ["EMG aislado confirma cierre uretral", false, "El EMG aporta actividad eléctrica, no una medición directa de cierre."]
      ]
    },
    {
      tag: "Tiempo",
      title: "Pdet comienza poco antes de que el flujo llegue al flujómetro",
      prompt: "¿Qué precaución evita sobrediagnosticar apertura tardía?",
      evidence: ["Separación breve", "Canales técnicamente adecuados", "Sin evidencia adicional de cierre"],
      answers: [
        ["Considerar el retraso fisiológico y del sistema antes de atribuir cierre de salida", true, "Correcto. Una separación breve entre presión y flujo forma parte de la secuencia de apertura y tránsito."],
        ["Llamar disinergia por el orden temporal", false, "La secuencia aislada no demuestra activación esfinteriana ni aporta contexto neurológico."],
        ["Ignorar por completo la relación temporal", false, "El tiempo sí importa, pero debe interpretarse con magnitud, señales y contexto."]
      ]
    },
    {
      tag: "Imitador",
      title: "Cada pulso de flujo coincide con Pabd; Pdet no se sostiene",
      prompt: "¿Cuál es la descripción inicial más defendible?",
      evidence: ["Pujos abdominales repetidos", "Pves y Pabd ascienden juntas", "EMG variable con movimiento"],
      answers: [
        ["Micción con participación abdominal que puede imitar mala coordinación", true, "Correcto. Primero se identifica quién genera el flujo; después se evalúa la salida."],
        ["Disinergia demostrada por flujo y EMG intermitentes", false, "Pabd y movimiento ofrecen una explicación alternativa que debe resolverse."],
        ["Obstrucción anatómica localizada", false, "No existe información suficiente para localizar una causa anatómica."]
      ]
    }
  ],
  neuroUrology: [
    {
      tag: "Hipótesis",
      title: "Lesión suprapontina con urgencia y contracciones en llenado",
      prompt: "¿Qué papel cumple la localización en la conclusión?",
      evidence: ["Lesión cerebral conocida", "Pdet aumenta durante llenado", "Vaciado aún no evaluado"],
      answers: [
        ["Hace plausible pérdida de inhibición, pero el trazado demuestra el fenómeno funcional", true, "Correcto. La anatomía orienta y la urodinamia especifica."],
        ["Determina todo el patrón de almacenamiento y vaciado", false, "El patrón individual puede diferir y coexistir con enfermedad urológica."],
        ["Confirma disinergia sin estudiar la salida", false, "La coordinación debe evaluarse durante vaciado."]
      ]
    },
    {
      tag: "Seguridad",
      title: "Paciente con lesión T4 permanece continente a presión creciente",
      prompt: "¿Cuál es la prioridad interpretativa?",
      evidence: ["Sin fuga", "Pdet de almacenamiento aumenta", "Lesión medular suprasacra"],
      answers: [
        ["Evaluar almacenamiento de alta presión y riesgo para la vía urinaria superior", true, "Correcto. La continencia no neutraliza una presión desfavorable."],
        ["Considerar el reservorio seguro porque permanece seco", false, "Una salida resistente puede ocultar un almacenamiento peligroso."],
        ["Evaluar solo el residuo posmiccional", false, "El riesgo puede originarse durante el llenado antes del vaciado."]
      ]
    },
    {
      tag: "Evolución",
      title: "Retención indolora pocos días después de una lesión medular",
      prompt: "¿Qué error debe evitarse?",
      evidence: ["Lesión aguda", "Sin contracción", "Fase temprana"],
      answers: [
        ["Presentar el patrón como acontractilidad definitiva", false, "Durante shock medular la función puede cambiar al reaparecer los reflejos."],
        ["Describir la etapa y planificar reevaluación", true, "Correcto. El tiempo desde la lesión es parte de la interpretación."],
        ["Asumir disinergia por el nivel de lesión", false, "La disinergia debe demostrarse cuando exista contracción y vaciado evaluable."]
      ]
    },
    {
      tag: "Sensibilidad",
      title: "El paciente no refiere deseo, pero nota espasticidad con el llenado",
      prompt: "¿Cómo debe registrarse esa información?",
      evidence: ["Sin deseo convencional", "Espasticidad reproducible", "Coincide con llenado"],
      answers: [
        ["Como ausencia completa de aferencia", false, "Existe una señal reproducible asociada al llenado, aunque no sea deseo típico."],
        ["Como artefacto sin valor", false, "En neuro-urología estas manifestaciones pueden ser la forma habitual de reconocer plenitud."],
        ["Como conciencia vesical inespecífica", true, "Correcto. Debe describirse la manifestación que el paciente reconoce como llenado."]
      ]
    },
    {
      tag: "Disreflexia",
      title: "Durante el llenado aumenta la presión sistólica 24 mmHg",
      prompt: "¿Qué conducta conceptual corresponde en una lesión T6?",
      evidence: ["Lesión T6", "Ascenso sistólico >20 mmHg", "Estímulo vesical en curso"],
      answers: [
        ["Priorizar reconocimiento y manejo de posible disreflexia autonómica", true, "Correcto. La seguridad cardiovascular precede a completar el registro."],
        ["Esperar cefalea intensa antes de actuar", false, "La respuesta puede ser peligrosa y no requiere todos los síntomas clásicos."],
        ["Ignorar la presión arterial porque no es un canal urodinámico", false, "En pacientes en riesgo, monitorizar presión y frecuencia cardíaca forma parte del procedimiento."]
      ]
    }
  ]
};

const challengeAnswerOffsets = {
  thinking: [1, 2, 0],
  physiology: [2, 1, 2],
  tracing: [1, 2, 1],
  instrument: [2, 1, 0],
  artifacts: [1, 2, 1],
  storageDisorders: [2, 1, 2, 1, 2],
  voidingDisorders: [2, 1, 2],
  coordinationDisorders: [1, 2, 1, 2],
  neuroUrology: [2, 1, 0, 1, 2]
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
    syntheticChapterTraces: true,
    coordinationEmgLab: true,
    storageMapLab: true,
    neuroLesionLab: true
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
  view: "lesson",
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
    instrument: {},
    artifacts: {},
    storageDisorders: {},
    voidingDisorders: {},
    coordinationDisorders: {},
    neuroUrology: {}
  },
  labDemo: {
    thinking: "clinicalReasoning",
    physiology: "accommodation",
    tracing: "curveTimeline",
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
      pves: 214 - fillTrend - cough - flatPabdCough - abdominal - voiding - outletResistance - weakDetrusor - abdominalVoiding - coordinationDetrusor - coordinationAbdominal - signalDrift + signalDrop - baselineShift - detrusorStorage - lowCompliance - leakAbdominal,
      pabd: 270 - cough - abdominal - abdominalVoiding - coordinationAbdominal - leakAbdominal,
      pdet: 330 - flatPabdCough - voiding - outletResistance - weakDetrusor - coordinationDetrusor - baselineShift - detrusorStorage - lowCompliance - (pattern === "signal" ? signalDrift * 0.55 - signalDrop : 0),
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

function answerTraceChallengeAt(clientX) {
  if (!traceChallengeIsCurrent() || state.traceChallenge.verdict !== null) return;
  const rect = els.traceSvg.getBoundingClientRect();
  if (!rect.width) return;
  const svgX = ((clientX - rect.left) / rect.width) * 1060;
  const position = clamp((svgX - 78) / 900, 0, 1);
  const scenario = activePracticeCase();
  const profile = activeTraceProfile();
  const correct = scenarioHasFocalEvent(scenario) && Math.abs(position - profile.start) <= 0.08;
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
    state.traceChallenge.verdict = scenarioHasFocalEvent() ? "warn" : "good";
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
