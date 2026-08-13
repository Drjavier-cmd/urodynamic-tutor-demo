(function registerUrodynamicLabData() {
const interactiveDemos = {
  clinicalReasoning: {
    title: "Del relato a una pregunta que el estudio pueda responder",
    subtitle: "Caso sintético: una paciente refiere pérdida al toser",
    question: "¿Cómo estudiar el problema sin anticipar el diagnóstico?",
    action: "Avanza desde el relato hasta una respuesta prudente.",
    observe: "Separa lo referido, lo observado y lo que permanece abierto."
  },
  programSwitch: {
    title: "La vejiga cambia de programa",
    subtitle: "Almacenamiento y vaciado exigen conductas coordinadas opuestas",
    question: "¿Qué debe cambiar cuando el sistema pasa de almacenar a vaciar?",
    action: "Alterna entre ambos programas.",
    observe: "Compara detrusor, salida y objetivo funcional."
  },
  accommodation: {
    title: "Acomodación: ganar volumen manteniendo baja la presión",
    subtitle: "Representación cualitativa; no expresa umbrales clínicos",
    question: "¿Cómo cambia el reservorio mientras recibe volumen?",
    action: "Recorre las etapas del llenado.",
    observe: "Relaciona distensión, volumen y presión cualitativa."
  },
  flowResistance: {
    title: "Flujo: bomba, salida y resistencia",
    subtitle: "Analogía docente: bomba + manguera para separar resistencia extrínseca e intrínseca",
    question: "¿La limitación nace fuera del conducto, en su propia estructura o en ambos?",
    action: "Prueba patrones y mueve cada control.",
    observe: "Relaciona salida efectiva, presión proximal y flujo.",
    controls: [
      ["outletDiameter", "Diámetro de salida"],
      ["outletCompression", "Compresión extrínseca"],
      ["outletStiffness", "Resistencia intrínseca"]
    ]
  },
  curveTimeline: {
    title: "Recorre el trazado antes de interpretarlo",
    subtitle: "El mismo cambio adquiere significado por su fase, evento y secuencia",
    question: "¿En qué momento del ciclo ocurre el cambio?",
    action: "Desplázate por la línea temporal.",
    observe: "Ubica fase, evento y relación entre canales."
  },
  waterColumn: {
    title: "De presión a altura de agua",
    subtitle: "Manómetro cualitativo: 1 cmH2O corresponde a 1 cm de columna de agua",
    question: "¿Cómo se traduce una presión en una diferencia de altura?",
    action: "Modifica la presión aplicada.",
    observe: "Sigue el desplazamiento de la columna de agua."
  },
  zeroAndLevel: {
    title: "Cero atmosférico y nivelación",
    subtitle: "Sistema externo lleno de líquido; referencia anatómica en el borde superior de la sínfisis del pubis",
    question: "¿La referencia técnica coincide con el nivel anatómico?",
    action: "Cambia altura y cero por separado.",
    observe: "Distingue desplazamiento hidrostático de error de referencia."
  },
  pressureTransmission: {
    title: "Fidelidad de la transmisión",
    subtitle: "Compara una línea continua con aire, acodamiento o desconexión",
    question: "¿La señal conserva la forma del evento original?",
    action: "Selecciona una condición de la línea.",
    observe: "Compara amplitud, forma, demora y continuidad."
  },
  pressureEquation: {
    title: "Dos señales medidas, una presión derivada",
    subtitle: "Valores sintéticos para comprender la relación; no son umbrales clínicos",
    question: "¿El cambio de Pdet nace del detrusor o de la relación entre canales?",
    action: "Compara los patrones sintéticos.",
    observe: "Sigue Pves, Pabd y la resta derivada."
  },
  signalMap: {
    title: "Qué ve el equipo y qué debe inferir el operador",
    subtitle: "Selecciona un canal para seguir su origen y su límite",
    question: "¿Qué mide realmente este canal?",
    action: "Enfoca una señal a la vez.",
    observe: "Distingue origen, lectura posible y límite."
  },
  artifactDetective: {
    title: "Detector de coherencia técnica",
    subtitle: "Primero describe qué canal cambió; después decide qué verificar",
    question: "¿La diferencia entre canales es fisiológica o exige control técnico?",
    action: "Compara la referencia con el patrón alterado.",
    observe: "Busca coherencia temporal y transmisión compartida."
  },
  storageMap: {
    title: "Mapa funcional del almacenamiento",
    subtitle: "Patrones sintéticos cualitativos: sensibilidad, estabilidad, presión-volumen y mecanismo de fuga",
    question: "¿Qué objetivo del almacenamiento deja de cumplirse?",
    action: "Cambia entre patrones funcionales.",
    observe: "Revisa sensibilidad, estabilidad, presión-volumen y continencia."
  },
  pressureFlowMatrix: {
    title: "Presión y flujo: una relación, cinco lecturas",
    subtitle: "Patrones cualitativos sintéticos; no representan umbrales ni producen diagnósticos",
    question: "¿Cómo se relacionan la fuerza impulsora y la resistencia de salida?",
    action: "Contrasta los cinco patrones.",
    observe: "No interpretes presión ni flujo de forma aislada."
  },
  coordinationTimeline: {
    title: "Coordinación: quién actúa y cuándo",
    subtitle: "Relaciones temporales sintéticas; el mismo aspecto puede exigir conclusiones distintas según el contexto",
    question: "¿La salida cede cuando el detrusor intenta generar flujo?",
    action: "Compara las secuencias temporales.",
    observe: "Relaciona detrusor, salida, abdomen, flujo y contexto neurológico."
  },
  neuroLesionMap: {
    title: "Del sitio de la lesión a una hipótesis funcional",
    subtitle: "Mapa docente cualitativo: selecciona un nivel y contrástalo con la urodinamia",
    question: "¿Qué patrón sería esperable y qué debe demostrar el estudio?",
    action: "Selecciona un nivel neurológico.",
    observe: "Usa la lesión como hipótesis, no como conclusión automática."
  }
};

const chapterLabDemos = {
  thinking: [{ id: "clinicalReasoning", label: "Razonamiento" }],
  physiology: [
    { id: "accommodation", label: "Acomodación" },
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

  window.UroDynamicLabData = Object.freeze({ interactiveDemos, chapterLabDemos });
})();
