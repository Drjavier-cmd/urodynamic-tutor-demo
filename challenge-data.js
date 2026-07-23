(function registerUrodynamicChallengeData() {
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

  window.UroDynamicChallengeData = Object.freeze({ chapterChallenges, challengeAnswerOffsets });
})();
