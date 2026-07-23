(function registerUrodynamicCourseContent() {
const chapters = {
  thinking: {
    block: "Bloque I · Fundamentos antes de interpretar curvas",
    number: "Capítulo 1",
    title: "Cómo pensar una urodinamia",
    mentalModelTitle: "Una pregunta clínica convertida en señales",
    mentalModelText:
      "La urodinamia intenta reproducir síntomas y registrar la función del tracto urinario inferior. Su valor nace al interpretar esas señales dentro de una pregunta, una técnica y un contexto.",
    notThis: "Una colección de curvas que entrega el diagnóstico",
    isThis: "Una pregunta clínica transformada en señales interpretables",
    labId: "clinicalReasoning",
    labDescription:
      "Construye una respuesta desde el síntoma hasta la conclusión. Cada etapa separa lo observado, lo inferido y el límite que debe conservarse.",
    screens: [
      {
        title: "Una pregunta clínica convertida en señales",
        text:
          "La urodinamia intenta reproducir síntomas mientras mide presión, volumen, flujo y eventos. Esas señales solo adquieren significado dentro de la pregunta clínica que originó el estudio.",
        key: "La urodinamia produce señales; no entrega respuestas por sí sola.",
        prompt: "¿Qué mecanismo funcional intentas observar o descartar?"
      },
      {
        title: "Controlado no significa completamente natural",
        text:
          "Catéteres, infusión artificial, instrucciones, posición, presencia de personal y ansiedad pueden modificar la sensibilidad o el vaciado. El examen aproxima una función cotidiana bajo condiciones controladas.",
        key: "El estudio es funcional y controlado, pero no una copia perfecta de la vida diaria.",
        prompt: "¿Qué condición del examen pudo modificar lo observado?"
      },
      {
        title: "La representatividad también es un resultado",
        text:
          "Que el paciente haya llenado u orinado durante el estudio no garantiza que haya reproducido su experiencia habitual. Sensaciones, urgencia, fuga, posición y chorro deben compararse con su vida cotidiana.",
        key: "Una micción registrada puede ser fisiológicamente poco representativa.",
        prompt: "¿El paciente reconoció este llenado o esta micción como habitual?"
      },
      {
        title: "El operador registra el contexto",
        text:
          "El equipo registra señales. El operador debe documentar maniobras, posición, sensaciones, fuga, dolor, movimiento y problemas técnicos. Esa información permite reconstruir qué ocurrió.",
        key: "El equipo registra la señal; el operador registra el contexto.",
        prompt: "¿Qué evento clínico acompañó el cambio de la curva?"
      },
      {
        title: "Una buena urodinamia empieza con una pregunta",
        text:
          "No se solicita para ver qué aparece. La pregunta define qué fenómeno se busca, qué maniobras deben realizarse, qué variables importan y qué podría modificar una decisión clínica.",
        key: "La pregunta debe existir antes de comenzar el estudio.",
        prompt: "¿Qué resultado cambiaría una decisión clínica?"
      },
      {
        title: "Transformar el síntoma",
        text:
          "El paciente relata una experiencia: «pierdo al toser» o «no alcanzo a llegar». El urodinamista la convierte en una relación observable entre evento, presión, sensación, flujo y fuga.",
        key: "El síntoma plantea la pregunta; el examen intenta reproducir el mecanismo.",
        prompt: "¿Cómo convertirías este relato en una pregunta verificable?"
      },
      {
        title: "Cinco niveles de información",
        text:
          "Síntoma, signo, medición, hallazgo urodinámico y diagnóstico clínico se relacionan, pero no son equivalentes. Saltar entre niveles produce conclusiones más específicas que la evidencia.",
        key: "La señal es un dato; su significado es una inferencia.",
        prompt: "¿Estás describiendo un síntoma, un signo, una medición, un hallazgo o un diagnóstico?"
      },
      {
        title: "Dos presiones antes de una resta",
        text:
          "El sistema registra una presión dentro de la vejiga y una estimación de la presión abdominal. La primera se denomina presión vesical (Pves); la segunda, presión abdominal (Pabd). Al restarlas se obtiene la presión detrusoriana (Pdet), que no proviene de un tercer sensor.",
        key: "Primero entiende qué representa cada presión; después utiliza su abreviatura.",
        prompt: "¿Qué dos presiones se miden y cuál se obtiene mediante una resta?"
      },
      {
        title: "Qué no puede medir",
        text:
          "La máquina no conoce la pregunta clínica, la sensación exacta, la vergüenza, la inhibición, la representatividad ni la relevancia del hallazgo. Tampoco reconoce por sí sola un catéter desplazado.",
        key: "La máquina no reemplaza la historia ni el juicio clínico.",
        prompt: "¿Qué información esencial no está contenida en la curva?"
      },
      {
        title: "Calidad antes de fisiología",
        text:
          "Antes de atribuir un cambio al paciente, revisa línea de base, transmisión, respuesta a la tos, continuidad, amortiguación, catéteres, actividad rectal, movimiento y eventos registrados.",
        key: "La primera pregunta ante una curva extraña es si la señal es confiable.",
        prompt: "¿Este segmento permite responder la pregunta con seguridad?"
      },
      {
        title: "Tres explicaciones iniciales",
        text:
          "Un cambio puede ser fisiológico, representar una alteración funcional o deberse a un fenómeno técnico o contextual. La altura de la curva no permite distinguirlos por sí sola.",
        key: "Primero clasifica la naturaleza del cambio; después ponle nombre.",
        prompt: "¿Fisiología, alteración funcional o artefacto: qué evidencia sostiene cada opción?"
      },
      {
        title: "El trazado es una historia",
        text:
          "El significado depende de la fase, el volumen, la sensación, la posición, la maniobra, la fuga, la orden de orinar, el flujo y lo que ocurrió inmediatamente antes y después.",
        key: "Una curva aislada de su tiempo pierde buena parte de su significado.",
        prompt: "¿Dónde está este cambio dentro del ciclo miccional?"
      },
      {
        title: "No reproducir no es negar",
        text:
          "Un síntoma puede no aparecer bajo las condiciones artificiales del examen. La conclusión rigurosa describe que no se demostró en ese estudio, sin invalidar la experiencia cotidiana del paciente.",
        key: "No demostrar un fenómeno no equivale a demostrar que no existe.",
        prompt: "¿Qué no se reprodujo y bajo qué condiciones?"
      },
      {
        title: "No demostrar no autoriza a inventar",
        text:
          "La ausencia de hiperactividad, fuga o vaciado representativo tampoco demuestra automáticamente otra fisiopatología. El resultado delimita lo observado; no explica por sí solo el caso completo.",
        key: "La ausencia de un hallazgo no prueba una explicación alternativa.",
        prompt: "¿Qué hipótesis sigue abierta y cuál quedó realmente evaluada?"
      },
      {
        title: "No es una bola de cristal",
        text:
          "La urodinamia complementa historia, examen, diario miccional, uroflujometría, residuo, imágenes, endoscopia y evaluación neurológica. Aporta una pieza funcional, no toda la explicación clínica.",
        key: "La urodinamia no reemplaza la clínica; puede volverla funcionalmente más precisa.",
        prompt: "¿Qué información externa necesitas para interpretar este hallazgo?"
      },
      {
        title: "Cuatro elementos de una interpretación sólida",
        text:
          "Pregunta clínica, fisiología, instrumento y contexto deben converger. Si falta uno, aumenta el riesgo de confundir señal, artefacto y significado clínico.",
        key: "Pregunta + fisiología + instrumento + contexto.",
        prompt: "¿Cuál de los cuatro elementos falta antes de concluir?"
      },
      {
        title: "Una rutina antes de etiquetar",
        text:
          "Lee siempre en el mismo orden: pregunta, fase, calidad, señal, evento, inferencia, límite y respuesta. La rutina evita saltar desde una curva llamativa directamente hacia un diagnóstico.",
        key: "Ordenar el razonamiento reduce la sobreinterpretación.",
        prompt: "¿En qué etapa del razonamiento estás y cuál viene después?"
      },
      {
        title: "La conclusión útil",
        text:
          "Una buena conclusión responde la pregunta original, distingue lo observado de lo inferido y declara lo que el estudio no permite resolver. No enumera canales sin traducir su significado funcional.",
        key: "La tecnología registra señales. La clínica decide qué significan.",
        prompt: "¿Qué se observó, qué se infiere, qué se respondió y qué quedó abierto?"
      }
    ]
  },
  physiology: {
    block: "Bloque I · Fundamentos antes de interpretar curvas",
    number: "Capítulo 2",
    title: "Fisiología normal del tracto urinario inferior",
    mentalModelTitle: "Un sistema, dos programas",
    mentalModelText:
      "La función normal depende de que vejiga, salida, piso pélvico, sensibilidad y control neurológico alternen entre almacenamiento y vaciado en el momento apropiado.",
    notThis: "Una vejiga aislada que se llena y se contrae",
    isThis: "Un sistema que adopta dos comportamientos recíprocos",
    labId: "accommodation",
    labDescription:
      "Explora los dos programas funcionales, la acomodación y la relación entre bomba, salida y resistencia mediante analogías cualitativas.",
    screens: [
      {
        title: "Antes de buscar una alteración",
        text:
          "Almacenar y vaciar parecen funciones simples, pero requieren coordinación entre vejiga, uretra, esfínter, piso pélvico, vías sensitivas, control autonómico, somático y centros superiores.",
        key: "Antes de reconocer lo anormal, hay que comprender lo normal.",
        prompt: "¿Qué debería estar haciendo el sistema en esta fase?"
      },
      {
        title: "Un sistema, dos programas",
        text:
          "Durante el almacenamiento, el detrusor permanece relajado y la salida conserva continencia. Durante el vaciado, disminuye la resistencia de salida y el detrusor genera la contracción necesaria.",
        key: "Las mismas estructuras cumplen funciones distintas según el programa activo.",
        prompt: "¿El sistema está almacenando o vaciando?",
        visualDemoId: "programSwitch"
      },
      {
        title: "El momento cambia el significado",
        text:
          "Un esfínter contraído es apropiado al almacenar y puede ser inapropiado al vaciar. Una contracción detrusoriana es necesaria al orinar, pero no durante el llenado involuntario.",
        key: "La función depende de qué hace cada estructura y de cuándo lo hace.",
        prompt: "¿Este comportamiento es apropiado para la fase actual?"
      },
      {
        title: "Almacenamiento: cinco objetivos simultáneos",
        text:
          "La vejiga debe recibir volumen a baja presión, sin contracciones involuntarias, con sensación progresiva, sin fuga y manteniendo la posibilidad de postergar la micción.",
        key: "Almacenar no es solo contener orina: es contenerla de forma segura y útil.",
        prompt: "¿Cuál de los cinco objetivos dejó de cumplirse?"
      },
      {
        title: "Acomodación: ganar volumen sin pagar presión",
        text:
          "La compliance expresa la relación entre cambio de volumen y cambio de presión detrusoriana (Pdet). No es solo una fórmula: describe cuánto volumen acepta el reservorio antes de aumentar de forma desproporcionada su presión.",
        key: "Una vejiga complaciente incorpora volumen con poco cambio de presión detrusoriana.",
        prompt: "¿Cuánto volumen ganó y cuánto cambió la presión?",
        visualDemoId: "accommodation"
      },
      {
        title: "La salida también debe almacenar",
        text:
          "Cuello vesical, uretra, esfínter estriado y piso pélvico deben mantener resistencia suficiente en reposo y ante tos, esfuerzo o cambio de posición.",
        key: "La estabilidad del detrusor permite almacenar; la competencia de la salida permite contener.",
        prompt: "¿La salida conserva continencia frente al aumento abdominal?"
      },
      {
        title: "La sensación forma parte del almacenamiento",
        text:
          "La percepción debería progresar desde una conciencia inicial hasta un deseo más intenso. El deseo normal informa que sería apropiado orinar, pero todavía permite postergar la micción.",
        key: "Sentir la vejiga no obliga automáticamente a vaciarla.",
        prompt: "¿La sensación progresó y permitió postergar?"
      },
      {
        title: "Sensación no es presión",
        text:
          "Un paciente puede referir deseo intenso con Pdet estable, y una contracción puede aparecer con escasa percepción. La sensación se obtiene preguntando; ningún canal la mide directamente.",
        key: "Lo que el paciente siente y lo que muestra Pdet son datos diferentes.",
        prompt: "¿Cambió la experiencia, la presión o ambas?"
      },
      {
        title: "Continencia durante una tos",
        text:
          "La tos eleva Pabd y transmite presión hacia Pves. Si aparece fuga sin contracción detrusoriana, el fenómeno apunta al mecanismo de cierre; si la fuga acompaña un aumento real de Pdet, el mecanismo es distinto.",
        key: "La misma pérdida visible puede originarse por relaciones funcionales diferentes.",
        prompt: "¿Qué ocurrió con Pabd y Pdet inmediatamente antes de la fuga?"
      },
      {
        title: "Almacenamiento no significa inactividad",
        text:
          "El sistema recibe aferencias, inhibe el reflejo miccional, mantiene la salida, integra contexto y conserva la posibilidad de iniciar voluntariamente el vaciado.",
        key: "La vejiga informa; el sistema nervioso decide qué hacer con esa información.",
        prompt: "¿El contexto permite o impide cambiar de programa?"
      },
      {
        title: "La transición exige una secuencia",
        text:
          "El individuo reconoce el deseo, autoriza la micción, reduce actividad esfinteriana y resistencia uretral, inicia la contracción, supera la presión de apertura y genera flujo.",
        key: "Para transformar una contracción en flujo, la salida debe permitirlo.",
        prompt: "¿Qué parte de la secuencia ocurrió primero?",
        visualDemoId: "programSwitch"
      },
      {
        title: "Presión suficiente, no necesariamente alta",
        text:
          "Especialmente en mujeres, una salida bien relajada puede permitir vaciamiento con mínima elevación de Pdet. La presión necesaria depende de la resistencia que debe vencerse.",
        key: "Pdet baja no significa automáticamente mala contractilidad.",
        prompt: "¿La presión observada fue suficiente para esa resistencia?",
        visualDemoId: "flowResistance"
      },
      {
        title: "Vaciado: contracción útil y sostenida",
        text:
          "El vaciado requiere inicio de contracción, relajación de salida, flujo y vaciamiento adecuado. La suficiencia depende de fuerza, duración, resistencia, volumen eliminado y residuo.",
        key: "Pdet alta no equivale automáticamente a buena contractilidad.",
        prompt: "¿La contracción produjo y mantuvo el flujo hasta completar el vaciamiento?"
      },
      {
        title: "El flujo es el resultado",
        text:
          "Un flujo bajo puede reflejar fuerza insuficiente, resistencia elevada, falta de relajación, volumen pequeño, prensa abdominal, inhibición o una combinación.",
        key: "La uroflujometría muestra el resultado; presión-flujo intenta explicar cómo se produjo.",
        prompt: "¿Qué fuerza y qué resistencia acompañan este flujo?",
        visualDemoId: "flowResistance"
      },
      {
        title: "El vaciado debe ser coordinado",
        text:
          "Una vejiga puede contraerse con fuerza y vaciar mal si la salida no cede. También puede existir salida relajada y vaciamiento insuficiente si la contracción no se inicia o no se sostiene.",
        key: "Vejiga y salida se interpretan como relación, no como compartimentos independientes.",
        prompt: "¿La bomba y la salida trabajan a favor del mismo objetivo?"
      },
      {
        title: "Un ciclo fisiológico, no una curva perfecta",
        text:
          "Al almacenar esperamos volumen creciente, Pdet baja, sensibilidad progresiva y continencia. Al vaciar esperamos autorización, salida relajada, contracción suficiente, flujo y residuo clínicamente adecuado.",
        key: "El esquema es una referencia funcional, no una plantilla rígida.",
        prompt: "¿El sistema cumplió su objetivo de forma segura y coordinada?"
      },
      {
        title: "Normalidad no significa una cifra única",
        text:
          "Volúmenes, presiones, tiempos y formas varían con edad, sexo, posición, privacidad, ansiedad, velocidad de llenado, hábitos, fármacos y anatomía de salida.",
        key: "Una curva puede ser técnicamente correcta y no ser representativa.",
        prompt: "¿Este comportamiento se parece al habitual del paciente?"
      },
      {
        title: "De la fisiología a la señal",
        text:
          "El equipo registra presiones, volumen, flujo, eventos y a veces EMG o imágenes. Primero se identifica la fase, luego lo esperado, después lo observado y finalmente se compara antes de nombrar un hallazgo.",
        key: "La fisiología es el fenómeno; el trazado es una representación indirecta.",
        prompt: "¿En qué fase está el sistema y hace lo que debería hacer?"
      }
    ]
  },
  tracing: {
    block: "Bloque I · Fundamentos antes de interpretar curvas",
    number: "Capítulo 3",
    title: "Del ciclo miccional al trazado urodinámico",
    mentalModelTitle: "Reconstruir una historia fisiológica",
    mentalModelText:
      "La fisiología ocurre en el paciente y el equipo registra una representación parcial. Interpretar significa recorrer las señales en el tiempo e intentar reconstruir qué las produjo.",
    notThis: "Reconocer un dibujo y asignarle un diagnóstico",
    isThis: "Combinar secuencia temporal y comparación multicanal",
    labId: "curveTimeline",
    labDescription:
      "Recorre el ciclo de izquierda a derecha y compara verticalmente los canales para relacionar fase, evento, secuencia y significado.",
    screens: [
      {
        title: "La fisiología ocurre; el equipo registra",
        text:
          "El equipo no ve directamente al detrusor, al esfínter ni al sistema nervioso. Registra presiones, volumen, flujo, eventos, sensaciones comunicadas y, cuando se usa, actividad eléctrica.",
        key: "El trazado es una representación parcial de la fisiología a lo largo del tiempo.",
        prompt: "¿Qué fenómeno intentas reconstruir desde estas señales?",
        visualDemoId: "curveTimeline"
      },
      {
        title: "El trazado es una historia",
        text:
          "Cada cambio depende de cuándo ocurrió, la fase, lo que hacía el paciente, qué canales cambiaron, cuál cambió primero y si hubo sensación, flujo o fuga.",
        key: "Un punto aislado pierde la secuencia que le da significado.",
        prompt: "¿Qué ocurrió inmediatamente antes y después?"
      },
      {
        title: "Lectura horizontal y lectura vertical",
        text:
          "Horizontalmente seguimos llenado, sensación, maniobra, permiso, flujo y fin. Verticalmente preguntamos qué ocurrió simultáneamente en la presión vesical, la presión abdominal, la presión detrusoriana, el flujo, la actividad eléctrica y los eventos.",
        key: "Primero ubica el momento; después compara las señales.",
        prompt: "¿Qué muestra la secuencia y qué muestran los canales en ese instante?"
      },
      {
        title: "Dos fases y una transición",
        text:
          "La cistometría observa presión-volumen, sensibilidad y continencia durante el llenado. El estudio presión-flujo comienza con el permiso para orinar y analiza cómo se genera el vaciado.",
        key: "Deseo, permiso, contracción e inicio del flujo no son necesariamente el mismo momento.",
        prompt: "¿Estamos almacenando, transitando o vaciando?"
      },
      {
        title: "Cada canal tiene un origen",
        text:
          "La presión vesical (Pves) se registra dentro de la vejiga e incluye la presión propia del órgano y la que transmite el abdomen. La presión abdominal (Pabd), estimada habitualmente desde recto o vagina, sirve como referencia externa. La presión detrusoriana (Pdet) se calcula restando Pabd de Pves.",
        key: "Pves y Pabd se miden; Pdet se deriva de ambas y depende de su calidad.",
        prompt: "¿Qué señal fue medida, cuál fue derivada y qué contexto falta?"
      },
      {
        title: "Representar el almacenamiento normal",
        text:
          "Durante el llenado aumenta el volumen y Pdet debería mantenerse relativamente baja, sin una elevación involuntaria ni una pendiente inapropiada. Pequeñas oscilaciones no convierten la curva en patológica.",
        key: "Estabilidad no significa una línea perfectamente horizontal.",
        prompt: "¿El cambio pertenece al detrusor, al abdomen, al movimiento o a la técnica?"
      },
      {
        title: "La tos enseña lectura multicanal",
        text:
          "Una tos bien transmitida eleva Pves y Pabd en magnitud semejante y deja Pdet relativamente estable. También puede provocar una fuga y sirve como control de calidad.",
        key: "Antes de interpretar significado, comprueba que las señales sean confiables.",
        prompt: "¿Pves y Pabd registraron el mismo evento abdominal?",
        visualDemoId: "pressureEquation"
      },
      {
        title: "Un posible fenómeno detrusoriano",
        text:
          "Si Pves aumenta y Pabd no acompaña, Pdet se eleva. Antes de llamarlo contracción hay que verificar transmisión, catéteres, fase, provocación, síntomas y fuga.",
        key: "Primero demuestra un aumento real de Pdet; después interpreta qué representa.",
        prompt: "¿La calidad y el contexto sostienen un origen vesical?"
      },
      {
        title: "Pabd puede fabricar una falsa Pdet",
        text:
          "Una contracción rectal puede elevar Pabd sin modificar Pves y generar una caída artificial de Pdet. Una señal derivada puede parecer fisiológica aunque el evento se origine fuera de la vejiga.",
        key: "Toda alteración aislada de una entrada modifica la resta.",
        prompt: "¿El cambio de Pdet nació en Pves o en Pabd?"
      },
      {
        title: "Las sensaciones deben registrarse",
        text:
          "Primera sensación, deseo, urgencia y dolor no aparecen automáticamente en las curvas. Son experiencias comunicadas que el operador debe anotar y relacionar con volumen y presión.",
        key: "Urgencia no es hiperactividad detrusoriana; una es síntoma y la otra hallazgo.",
        prompt: "¿Qué sintió el paciente y qué ocurrió simultáneamente en Pdet?"
      },
      {
        title: "La fuga necesita contexto",
        text:
          "Una pérdida asociada a aumento abdominal y Pdet estable no representa el mismo mecanismo que una fuga durante una elevación real de Pdet. La sincronización del evento es indispensable.",
        key: "La fuga no es solo sí o no: debe ubicarse dentro de la secuencia.",
        prompt: "¿Qué presión y qué evento precedieron la pérdida?"
      },
      {
        title: "Del permiso al flujo existe un intervalo",
        text:
          "Entre autorizar la micción, relajar la salida, iniciar la contracción, abrir la uretra y registrar orina en el flujómetro puede existir un retraso fisiológico y técnico.",
        key: "No toda presión anterior al flujo demuestra obstrucción o mala relajación.",
        prompt: "¿El desfase excede lo esperable y está corroborado?"
      },
      {
        title: "Presión y flujo se leen juntos",
        text:
          "Una presión baja puede bastar ante poca resistencia y una presión alta puede reflejar la resistencia enfrentada. El flujo aislado tampoco identifica quién lo impulsó.",
        key: "El estudio presión-flujo existe para analizar una relación, no dos cifras independientes.",
        prompt: "¿Qué presión, resistencia y participación abdominal acompañan el flujo?"
      },
      {
        title: "Pregunta qué cambió primero",
        text:
          "Pabd primero orienta a tos, Valsalva, movimiento o pujo. Pves sin Pabd puede orientar a vejiga. Flujo tras Pabd sugiere prensa; un salto tras aplanarse un canal obliga a revisar técnica.",
        key: "La secuencia temporal ayuda a separar causa y consecuencia.",
        prompt: "¿Cuál fue la primera señal en cambiar?"
      },
      {
        title: "La misma forma puede tener varios significados",
        text:
          "Pves alta, Pdet alta, flujo bajo o una señal plana tienen explicaciones fisiológicas y técnicas diferentes. Reconocer la forma es solo el comienzo.",
        key: "El significado nace de fase, canales, eventos, calidad y contexto.",
        prompt: "¿Qué alternativas explican esta forma y cuál evidencia las separa?"
      },
      {
        title: "Ocho pasos para leer cualquier trazado",
        text:
          "Vuelve a la pregunta, identifica la fase, confirma la calidad, describe la señal, relaciónala con el evento, formula una inferencia, declara el límite y responde la pregunta inicial.",
        key: "Una conclusión prudente no debilita el informe: lo vuelve más exacto.",
        prompt: "¿Qué paso falta antes de nombrar el hallazgo?",
        visualDemoId: "curveTimeline"
      },
      {
        title: "Cuatro ejemplos que obligan a relacionar",
        text:
          "Urgencia con Pdet estable, tos con presiones concordantes, ascenso vesical sin Pabd y flujo por pulsos de prensa abdominal pueden parecer sencillos, pero exigen conclusiones distintas.",
        key: "Síntoma, señal y mecanismo no son intercambiables.",
        prompt: "¿Qué demuestra cada ejemplo y qué permanece abierto?"
      },
      {
        title: "Reconstruir antes de interpretar",
        text:
          "La lectura comienza con fase, evento, calidad, relación entre canales, secuencia y experiencia del paciente. Solo después se formula una inferencia proporcional.",
        key: "El trazado no es un dibujo que reconocer; es una historia fisiológica que reconstruir.",
        prompt: "¿Qué historia explican mejor las señales y cuál es su límite?"
      }
    ]
  },
  pressurePhysics: {
    block: "Bloque I · Fundamentos antes de interpretar curvas",
    number: "Capítulo 4",
    title: "Principios físicos de la medición de presión",
    mentalModelTitle: "Una presión convertida en señal",
    mentalModelText:
      "En un sistema externo lleno de líquido, la presión se transmite desde el paciente por una columna continua hasta un transductor. Cero, altura y fidelidad de transmisión determinan si la curva representa al paciente o al sistema de medición.",
    notThis: "Un catéter que observa directamente músculos o contracciones",
    isThis: "Un sistema físico que convierte presión de fluido en una señal eléctrica",
    labId: "waterColumn",
    labDescription:
      "Manipula una columna de agua, cambia el cero y la altura del transductor, y compara una transmisión continua con una línea que contiene aire o está acodada.",
    screens: [
      {
        title: "¿Cómo puede un equipo medir una presión?",
        text:
          "La pantalla no ve vejiga, detrusor, esfínter ni uretra. Recibe una señal producida por un transductor y la representa como presión a lo largo del tiempo.",
        key: "La tecnología registra presión; el mecanismo fisiológico se interpreta después.",
        prompt: "¿Qué parte de esta afirmación es medición y qué parte sería inferencia?",
        visualDemoId: "waterColumn"
      },
      {
        title: "Presión es fuerza distribuida sobre un área",
        text:
          "En términos físicos, presión es fuerza por unidad de área. El extremo del catéter responde a la presión del fluido que lo rodea; no mide directamente la fuerza del músculo detrusor.",
        key: "El catéter detecta presión en el líquido, no fuerza muscular de forma directa.",
        prompt: "¿Qué fenómenos distintos podrían producir la misma presión intravesical?"
      },
      {
        title: "Una columna líquida transmite presión",
        text:
          "En los sistemas externos llenos de líquido, vejiga, catéter, tubuladura y transductor deben formar una conexión hidráulica continua. Los cambios de presión se propagan por esa columna, aunque la fidelidad dinámica depende de la línea y sus conexiones.",
        key: "Continuidad permite transmisión; continuidad no garantiza por sí sola una señal perfecta.",
        prompt: "¿Dónde podría perderse fidelidad entre el paciente y el transductor?",
        visualDemoId: "waterColumn"
      },
      {
        title: "La solución actúa como conexión hidráulica",
        text:
          "En un sistema externo lleno de líquido, la solución de la línea conecta hidráulicamente al paciente con el transductor. Aire, conexiones flojas, acodamientos y obstrucciones pueden amortiguar, retrasar o interrumpir la respuesta.",
        key: "Una burbuja no crea fisiología: modifica la transmisión de la señal.",
        prompt: "¿Una respuesta amortiguada pertenece al paciente o a la línea?",
        visualDemoId: "pressureTransmission"
      },
      {
        title: "No todos los sistemas transmiten igual",
        text:
          "La columna líquida y la nivelación descritas aquí corresponden al sistema convencional con transductor externo lleno de líquido. Los catéteres con transductor en la punta y los sistemas cargados con aire tienen otras características físicas y de control.",
        key: "El principio debe aplicarse al sistema de medición realmente utilizado.",
        prompt: "¿Qué tipo de transductor utiliza este equipo antes de aplicar una regla técnica?"
      },
      {
        title: "¿Qué significa cmH2O?",
        text:
          "Un centímetro de agua expresa la presión capaz de sostener una columna de agua de esa altura. La unidad conserva una relación intuitiva con las presiones relativamente bajas del tracto urinario inferior.",
        key: "20 cmH2O representa una presión equivalente a una columna de agua de 20 cm.",
        prompt: "¿Qué cambia en el manómetro cuando aumenta la presión?",
        visualDemoId: "waterColumn"
      },
      {
        title: "El cero atmosférico define la referencia",
        text:
          "Antes de medir, el transductor externo se abre a la atmósfera y se cierra hacia el paciente. El equipo asigna cero a esa presión de referencia y luego registra diferencias respecto de ella.",
        key: "Cero atmosférico es un procedimiento de referencia, no una ausencia absoluta de presión.",
        prompt: "¿Qué presión está viendo el transductor en el instante de hacer cero?",
        visualDemoId: "zeroAndLevel"
      },
      {
        title: "Cero no significa ausencia de presión",
        text:
          "La atmósfera sigue ejerciendo presión sobre paciente, líquido y transductor. Al hacer cero eliminamos esa contribución común de la lectura para expresar cuánto se encuentra la señal por encima o por debajo de la referencia.",
        key: "0 cmH2O significa igual a la referencia atmosférica elegida.",
        prompt: "¿Qué ocurriría si el cero se realizara con una presión adicional aplicada?"
      },
      {
        title: "La altura también genera presión",
        text:
          "En una columna líquida, una diferencia vertical añade una presión hidrostática. En el sistema externo convencional, el transductor se nivela con el borde superior de la sínfisis del pubis para utilizar una referencia anatómica reproducible.",
        key: "Un error de altura modifica la línea de base aunque el paciente no cambie.",
        prompt: "¿Qué lectura artificial esperas si el transductor queda demasiado bajo?",
        visualDemoId: "zeroAndLevel"
      },
      {
        title: "Cambiar de posición obliga a revisar el nivel",
        text:
          "Al sentar o poner de pie al paciente cambia la relación vertical entre vejiga y transductor. Los transductores externos deben reposicionarse respecto de la referencia anatómica antes de atribuir un salto de presión a la fisiología.",
        key: "Un cambio postural puede mover al paciente y también mover la referencia física.",
        prompt: "¿El salto apareció en el paciente o porque la altura dejó de ser correcta?",
        visualDemoId: "zeroAndLevel"
      },
      {
        title: "El transductor convierte deformación en electricidad",
        text:
          "La presión deforma mínimamente un elemento sensible del transductor. Esa deformación se convierte en una señal eléctrica, luego en un valor digital y finalmente en una curva.",
        key: "La curva es el final de una cadena física y electrónica.",
        prompt: "¿En qué eslabón podría originarse una señal técnicamente falsa?"
      },
      {
        title: "La física precede a la fisiología",
        text:
          "Columna interrumpida, aire, acodamiento, cero incorrecto o altura inadecuada pueden fabricar curvas convincentes. Primero se comprueba la cadena de medición; solo después se interpreta el comportamiento vesical.",
        key: "Si falla la física de la medición, la curva no permite juzgar la fisiología.",
        prompt: "¿Qué condición física debes corregir antes de nombrar un hallazgo?",
        visualDemoId: "pressureTransmission"
      }
    ]
  },
  instrument: {
    block: "Bloque I · Fundamentos antes de interpretar curvas",
    number: "Capítulo 5",
    title: "Qué mide realmente el equipo",
    mentalModelTitle: "Medir no es explicar",
    mentalModelText:
      "El aparato registra presiones, volumen, flujo, tiempo y eventos. Los hallazgos funcionales se construyen relacionando esas señales con la fase, la calidad y el contexto.",
    notThis: "Una pantalla que muestra diagnósticos",
    isThis: "Un sistema de medición que produce señales directas y derivadas",
    labId: "signalMap",
    labDescription:
      "Sigue el origen de la presión vesical y abdominal, y observa cómo ambas construyen la presión detrusoriana derivada.",
    screens: [
      {
        title: "El puente entre fisiología y trazado",
        text:
          "El equipo no escribe hiperactividad, obstrucción, hipoactividad ni falta de coordinación. Mide variables desde las que el urodinamista construye una interpretación.",
        key: "El equipo no mide diagnósticos: mide presiones, volumen, flujo y eventos.",
        prompt: "¿Qué variable concreta respalda la afirmación que quieres hacer?"
      },
      {
        title: "Una representación indirecta",
        text:
          "El instrumento no observa directamente contracción, relajación esfinteriana ni sensación. Registra variables que permiten aproximarse a esos fenómenos.",
        key: "La fisiología es el fenómeno; el trazado es la manera de intentar observarlo.",
        prompt: "¿Cómo se obtuvo esta señal y qué fenómeno intenta representar?"
      },
      {
        title: "Presión vesical (Pves): dentro de la vejiga",
        text:
          "La presión vesical, abreviada Pves, se registra mediante el catéter intravesical. Incluye tanto la presión propia de la vejiga como la presión transmitida desde el abdomen; por eso, tos, pujo y movimiento pueden elevarla sin que exista una contracción detrusoriana.",
        key: "Un aumento de la presión vesical no demuestra por sí solo actividad del detrusor.",
        prompt: "¿La presión abdominal acompaña el cambio observado en la presión vesical?"
      },
      {
        title: "Presión abdominal (Pabd): la referencia externa",
        text:
          "La presión abdominal, abreviada Pabd, se estima habitualmente desde recto o vagina y registra cambios transmitidos hacia la vejiga. No mide perfectamente todo el abdomen, pero permite separar la contribución abdominal de la vesical.",
        key: "La presión abdominal evita convertir presión transmitida en falsa actividad detrusoriana.",
        prompt: "¿El canal abdominal representa de forma creíble el evento?"
      },
      {
        title: "Presión detrusoriana (Pdet): una resta",
        text:
          "La presión detrusoriana se abrevia Pdet y se calcula como Pves menos Pabd. Si ambas presiones medidas suben juntas durante una tos, la resta cambia poco; si Pves sube con Pabd estable, Pdet aumenta, siempre que los canales sean confiables.",
        key: "La calidad de Pdet depende por completo de sus dos señales de entrada.",
        prompt: "¿Qué cambió realmente en Pves y Pabd?",
        visualDemoId: "pressureEquation"
      },
      {
        title: "Volumen: lo infundido no siempre es lo contenido",
        text:
          "Diuresis, fuga, pérdida no cuantificada, vaciamiento parcial y residuo previo pueden separar volumen infundido, capacidad cistométrica y contenido vesical real.",
        key: "El volumen necesita relacionarse con presión, sensación, fuga, micción y residuo.",
        prompt: "¿Qué volumen representa realmente la cifra mostrada?"
      },
      {
        title: "Flujo: resultado visible del vaciado",
        text:
          "El flujómetro registra orina por unidad de tiempo. Un flujo bajo no distingue por sí solo resistencia aumentada, contracción insuficiente, mala relajación, volumen pequeño, pujo o inhibición.",
        key: "El flujo muestra cómo salió la orina, no por qué salió de esa manera.",
        prompt: "¿Qué Pdet, Pabd, volumen y residuo acompañan este flujo?"
      },
      {
        title: "Los eventos dan contexto",
        text:
          "Tos, esfuerzo, sensación, urgencia, fuga, posición, permiso, flujo, pujo y manipulación de catéteres deben quedar sincronizados con las señales.",
        key: "Una curva sin eventos es una curva sin contexto.",
        prompt: "¿Qué estaba ocurriendo cuando cambió la señal?"
      },
      {
        title: "Separar lo medido de lo inferido",
        text:
          "«Pves aumentó mientras Pabd permaneció estable» describe señales. «Se produjo una contracción detrusoriana» es una inferencia que exige canales confiables, fase y contexto compatibles.",
        key: "Una inferencia razonable sigue siendo distinta del dato que la sostiene.",
        prompt: "¿Estás describiendo una medición o explicando un fenómeno?"
      },
      {
        title: "El significado aparece en la relación",
        text:
          "Compara Pves con Pabd, Pdet con volumen y flujo, flujo con Pabd, señales con eventos y volumen miccionado con residuo. Ningún canal resume por sí solo el sistema.",
        key: "Primero entendemos la señal; después interpretamos el fenómeno.",
        prompt: "Cuando una curva cambia, ¿qué señal cambió realmente y qué podría explicarlo?",
        visualDemoId: "signalMap"
      }
    ]
  },
  artifacts: {
    block: "Bloque I · Fundamentos antes de interpretar curvas",
    number: "Capítulo 6",
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
    number: "Capítulo 7",
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
    number: "Capítulo 8",
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
    number: "Capítulo 9",
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
    number: "Capítulo 10",
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

  window.UroDynamicCourseContent = Object.freeze({ chapters, scenarios });
})();
