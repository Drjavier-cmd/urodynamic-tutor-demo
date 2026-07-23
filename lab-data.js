(function registerUrodynamicLabData() {
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

  window.UroDynamicLabData = Object.freeze({ interactiveDemos, chapterLabDemos });
})();
