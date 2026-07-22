const BUILD_REVISION = "20260722-cover-principles-v1";

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
  waterColumn: {
    title: "De presión a altura de agua",
    subtitle: "Manómetro cualitativo: 1 cmH2O corresponde a 1 cm de columna de agua"
  },
  zeroAndLevel: {
    title: "Cero atmosférico y nivelación",
    subtitle: "Sistema externo lleno de líquido; referencia anatómica en el borde superior de la sínfisis del pubis"
  },
  pressureTransmission: {
    title: "Fidelidad de la transmisión",
    subtitle: "Compara una línea continua con aire, acodamiento o desconexión"
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
  pressurePhysics: [
    { id: "waterColumn", label: "Columna de agua" },
    { id: "zeroAndLevel", label: "Cero y nivel" },
    { id: "pressureTransmission", label: "Transmisión" }
  ],
  instrument: [
    { id: "signalMap", label: "Mapa de señales" },
    { id: "pressureEquation", label: "Pdet derivada" },
    { id: "artifactDetective", label: "Pabd defectuosa" }
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
    },
    {
      tag: "Cinco niveles",
      title: "Del relato al diagnóstico",
      prompt: "¿Cuál opción corresponde estrictamente a una medición del instrumento?",
      evidence: ["Síntoma: pérdida al toser", "Evento: tos", "Curvas multicanal"],
      answers: [
        ["Aumento simultáneo de Pves y Pabd", true, "Correcto. Describe señales registradas sin convertirlas todavía en hallazgo o diagnóstico."],
        ["Incontinencia urodinámica de esfuerzo", false, "Eso es un hallazgo interpretado a partir de señal, evento y fuga."],
        ["Trastorno clínico del mecanismo de cierre", false, "Eso exige integrar historia, examen y contexto más allá de la medición."]
      ]
    },
    {
      tag: "Representatividad",
      title: "«Yo nunca orino de esta forma»",
      prompt: "¿Cómo debe incorporarse esta observación al informe?",
      evidence: ["Micción registrada", "Catéteres presentes", "Paciente no la reconoce como habitual"],
      answers: [
        ["Como límite de representatividad que condiciona la interpretación del vaciado", true, "Correcto. Una micción registrada puede no reproducir la función cotidiana."],
        ["Debe ignorarse porque existe una curva", false, "La curva no sustituye la valoración contemporánea del paciente."],
        ["Demuestra por sí sola una enfermedad funcional", false, "La falta de representatividad limita conclusiones; no crea un diagnóstico alternativo."]
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
  pressurePhysics: [
    {
      tag: "Presión",
      title: "El catéter está rodeado por líquido",
      prompt: "¿Qué mide directamente el sistema?",
      evidence: ["Extremo del catéter en vejiga", "Fluido en contacto", "Señal de presión"],
      answers: [
        ["La presión del fluido en el extremo del catéter", true, "Correcto. La fuerza muscular se infiere por sus consecuencias; no se mide directamente con este catéter."],
        ["La fuerza del detrusor de manera directa", false, "El catéter no es un dinamómetro muscular; responde a presión dentro del fluido."],
        ["La apertura anatómica de la uretra", false, "La apertura requiere otras señales o imagen; no está contenida directamente en una presión."]
      ]
    },
    {
      tag: "Cero atmosférico",
      title: "El transductor está abierto a la atmósfera",
      prompt: "¿Qué significa asignar 0 cmH2O en este momento?",
      evidence: ["Abierto a atmósfera", "Cerrado hacia paciente", "Comando de cero"],
      answers: [
        ["Usar la presión atmosférica como referencia", true, "Correcto. La presión atmosférica sigue existiendo; el equipo expresa diferencias respecto de ella."],
        ["Eliminar físicamente toda presión del sistema", false, "El procedimiento cambia la referencia electrónica, no elimina presión física."],
        ["Corregir automáticamente cualquier error de altura", false, "Cero y nivelación resuelven problemas distintos."]
      ]
    },
    {
      tag: "Nivelación",
      title: "El transductor queda por debajo de la referencia",
      prompt: "¿Qué efecto físico debe esperarse primero?",
      evidence: ["Sistema lleno de líquido", "Transductor externo", "Mayor columna vertical"],
      answers: [
        ["Una lectura artificialmente mayor por presión hidrostática", true, "Correcto. La altura de la columna añade presión aunque el paciente no haya cambiado."],
        ["Una contracción detrusoriana obligatoria", false, "El error nace en la referencia física del sistema, no necesariamente en el paciente."],
        ["Una desaparición de Pabd", false, "La altura puede desplazar la línea de base, no borrar por definición el canal."]
      ]
    },
    {
      tag: "Transmisión",
      title: "La tos llega más pequeña y lenta a Pabd",
      prompt: "¿Cuál es la explicación técnica prioritaria?",
      evidence: ["Tos breve", "Pves responde rápido", "Pabd amortiguada"],
      answers: [
        ["Aire, acodamiento u otra alteración de la línea abdominal", true, "Correcto. La transmisión dinámica desigual puede fabricar una diferencia falsa en Pdet."],
        ["Hiperactividad detrusoriana confirmada", false, "Primero debe corregirse la discordancia técnica revelada por la tos."],
        ["Una propiedad normal de Pdet", false, "Pdet hereda las diferencias entre Pves y Pabd; no valida sus entradas."]
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
  thinking: [1, 2, 0, 2, 1],
  physiology: [2, 1, 2],
  tracing: [1, 2, 1],
  pressurePhysics: [1, 2, 1, 2],
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
    neuroLesionLab: true,
    eightStepClinicalReasoning: true,
    foundationsRewriteV1: true,
    pressurePhysicsLab: true,
    courseCoverV2: true,
    pressureVocabularyIntro: true
  },
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
  }
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
  progressFill: document.getElementById("progressFill"),
  screenKicker: document.getElementById("screenKicker"),
  screenTitle: document.getElementById("screenTitle"),
  lessonView: document.getElementById("lessonView"),
  lessonPanel: document.getElementById("lessonPanel"),
  chapterOpeningMarker: document.getElementById("chapterOpeningMarker"),
  chapterNumberLarge: document.getElementById("chapterNumberLarge"),
  screenText: document.getElementById("screenText"),
  lessonPrompt: document.getElementById("lessonPrompt"),
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
      view: ["cover", "lesson", "lab", "practice"].includes(saved.view) ? saved.view : "cover",
      resumeView: ["lesson", "lab", "practice"].includes(saved.resumeView)
        ? saved.resumeView
        : (["lesson", "lab", "practice"].includes(saved.view) ? saved.view : "lesson"),
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
    baseState.view = "lesson";
    baseState.resumeView = "lesson";
  }

  if (Number.isInteger(screen)) {
    baseState.screen = clamp(screen - 1, 0, chapters[baseState.chapter].screens.length - 1);
  }

  if (scenario && chapterPracticeCases[baseState.chapter].some((practiceCase) => practiceCase.id === scenario)) {
    baseState.scenario = scenario;
  }

  if (["cover", "lesson", "lab", "practice"].includes(view)) {
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
  els.progressLabel.textContent = `Lección ${state.screen + 1} de ${total}`;
  els.progressFill.style.width = `${((state.screen + 1) / total) * 100}%`;
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
  const view = ["cover", "lesson", "lab", "practice"].includes(state.view) ? state.view : "cover";
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
  if (!["cover", "lesson", "lab", "practice"].includes(view)) return;
  state.view = view;
  if (view !== "cover") state.resumeView = view;
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
  renderCover();
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
