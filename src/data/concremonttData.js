export const companyData = {
  name: "INVERSIONES CONCREMONTT SPA",
  shortName: "CONCREMONTT",
  slogan: "SOLUCIONES QUE IMPULSAN TU PROYECTO",
  tagline: "Ingeniería, galpones modulares y obras civiles diseñadas con precisión técnica para resistir las condiciones climáticas de la zona sur austral de Chile.",
  location: "Italia 1984, Puerto Montt, Chile",
  hours: "Lunes a Viernes: 08:00 a 18:00 hrs",
  phoneDisplay: "+56 9 3713 8495",
  phoneRaw: "56937138495",
  email: "contacto@concremontt.cl",
  media: {
    logo: "/assets/logo.png",
    logoFallback: "https://concremontt.cl/wp-content/uploads/2026/05/magnific_2994311078.png",
    video: "/hero.mp4",
    videoFallback: "/hero.mp4",
    galponImg: "/assets/galpon-industrial.jpg",
    galponImgFallback: "/assets/galpon-industrial.jpg",
    ogImage: "/social.jpg"
  },
  stats: [
    { label: "Ubicación Base", value: "Puerto Montt", sub: "Región de Los Lagos" },
    { label: "Ingeniería", value: "Sur Austral", sub: "Resistencia Viento & Nieve" },
    { label: "Modalidad", value: "Llave en Mano", sub: "Diseño, Fabricación y Montaje" },
    { label: "Normativas", value: "100% NCh", sub: "Cálculo y Fiscalización ITO" }
  ],
  about: {
    title: "CONSTRUIMOS EL FUTURO DEL SUR",
    description: "En CONCREMONTT somos un pilar estratégico en la Región de Los Lagos. Fusionamos precisión técnica de vanguardia con materiales de alta durabilidad, diseñados específicamente para dominar los desafíos climáticos del sur austral.",
    mission: "Entregar soluciones constructivas eficientes que impulsen el éxito de cada obra, garantizando infraestructuras seguras mediante ingeniería avanzada.",
    vision: "Consolidarnos como el referente definitivo en ingeniería modular y obras civiles en el sur de Chile, destacando por nuestra transparencia y calidad.",
    values: [
      { title: "Excelencia Constante", desc: "Rigurosidad en cada cálculo, hormigonado y estructura de acero." },
      { title: "Transparencia Comercial", desc: "Presupuestos claros, cubicaciones exactas y sin sobrecostos imprevistos." },
      { title: "Cumplimiento Riguroso", desc: "Compromiso absoluto con los plazos de entrega y normativas vigentes." }
    ]
  },
  services: [
    {
      id: "hormigon-preparado-premezclado",
      title: "Venta de Hormigón Preparado",
      category: "hormigon",
      categoryLabel: "Hormigón Premezclado",
      summary: "Dosificación en planta de hormigón preparado certificado bajo norma NCh170 para radieres, fundaciones, muros y pavimentos.",
      description: "Hormigón premezclado de alta trabajabilidad con control riguroso de cono de Abrams, áridos lavados y aditivos de fraguado adaptados al clima húmedo de Puerto Montt.",
      specs: [
        "Resistencias certificadas: H20 (20 MPa), H25 (25 MPa) y H30 (30 MPa)",
        "Dosificación computarizada en planta de alta precisión volumétrica",
        "Aditivos hidrófugos e impermeabilizantes para la zona sur",
        "Control de asentamiento (slump) y resistencia garantizada a 28 días"
      ],
      badge: "H20 · H25 · H30"
    },
    {
      id: "camion-mixer-despacho",
      title: "Despacho en Camión Mixer",
      category: "hormigon",
      categoryLabel: "Transporte Mixer",
      summary: "Flota moderna de camiones mixer de 8 m³ para entrega puntual y controlada de hormigón fresco directamente en su faena.",
      description: "Transporte en tambores mezcladores con agitación continua para evitar la segregación de áridos. Despacho coordinado por bloques horarios en Puerto Montt, Puerto Varas y comunas cercanas.",
      specs: [
        "Capacidad de carga: hasta 8 metros cúbicos (m³) por camión",
        "Canaletas extensibles de descarga directa hasta 4 metros",
        "Geolocalización en ruta y entrega programada para evitar fraguado prematuro",
        "Disponibilidad de pedidos por m³ parcial o volumen continuo"
      ],
      badge: "Mixer 8 m³"
    },
    {
      id: "bombeo-hormigon-obra",
      title: "Bombeo de Hormigón en Obra",
      category: "hormigon",
      categoryLabel: "Bombeo Técnico",
      summary: "Servicio de bomba pluma y bomba estacionaria para vaciado rápido y uniforme de hormigón en radieres y losas de difícil acceso.",
      description: "Solución técnica para faenas donde el camión mixer no puede posicionarse al borde de la obra. Distribución continua de hormigón que optimiza tiempos de fraguado y reduce cuadrilla.",
      specs: [
        "Pluma hidráulica articulada con alcance horizontal y vertical",
        "Línea de tuberías modulares para parcelas y terrenos en pendiente",
        "Caudal continuo que evita juntas frías en radieres de gran superficie",
        "Operadores certificados con estricto protocolo de seguridad"
      ],
      badge: "Bomba Pluma"
    },
    {
      id: "radieres-fundaciones",
      title: "Hormigón para Radieres y Pisos",
      category: "hormigon",
      categoryLabel: "Radieres y Pisos",
      summary: "Vaciado de hormigón H20/H25, nivelación óptica y afinado mecánico con helicóptero para pisos lisos de alto tránsito.",
      description: "Ejecución técnica integral de radieres con sub-base compactada, barrera de humedad de polietileno, mallas de refuerzo y endurecedores de cuarzo para soportar tránsito pesado.",
      specs: [
        "Hormigón H20 y H25 con fibras estructurales y aditivo impermeabilizante",
        "Acabado pulido o afinado mecánico con helicóptero para cero polvo",
        "Corte técnico de juntas de retracción y aplicación de membrana de curado",
        "Espesores desde 10 cm habitacional hasta 20 cm industrial"
      ],
      badge: "Alisado Mecánico"
    },
    {
      id: "galpones-modulares",
      title: "Galpones Modulares Industriales",
      category: "estructuras",
      categoryLabel: "Estructuras",
      summary: "Diseño, maestranza y montaje rápido de galpones industriales en acero pesado, calculados para vientos y nieve del sur.",
      description: "Nuestros galpones modulares están concebidos para ejecutarse en tiempos récord sin sacrificar resistencia. Calculados específicamente para resistir las inclemencias del clima patagónico.",
      specs: [
        "Montaje rápido y estructura modular ampliable",
        "Estructura en perfiles de acero pesado galvanizado",
        "Cálculo adaptado a vientos de 140+ km/h y carga de nieve",
        "Opción de aislamiento térmico panel sándwich o lana mineral"
      ],
      badge: "Montaje Rápido"
    },
    {
      id: "panderetas-hormigon",
      title: "Panderetas y Cierres Perimetrales",
      category: "obras",
      categoryLabel: "Cierres",
      summary: "Fabricación propia e instalación de cercos prefabricados con placas y postes de hormigón vibrado de alta resistencia.",
      description: "Cercos perimetrales con postes reforzados y placas de hormigón H25 de alta densidad. Ideales para parcelaciones, industrias, bodegas y colegios en la zona sur.",
      specs: [
        "Hormigón H25 vibrado de alta compactación y baja absorción",
        "Malla electro-soldada interior de acero de alta tracción",
        "Postes para empotrar con fundación de hormigón",
        "Alturas estándar de 1.80m, 2.00m y 2.50m libres"
      ],
      badge: "Fabricación Propia"
    }
  ],
  engineering: {
    title: "INGENIERÍA Y FISCALIZACIÓN",
    subtitle: "Garantizamos solvencia técnica y estricto control de cada etapa de inversión.",
    tabs: [
      {
        id: "construccion",
        name: "Ingeniería y Construcción",
        tag: "Obras Civiles",
        title: "Ingeniería y Construcción",
        description: "Desarrollo e implementación de infraestructura con altos estándares de cálculo estructural adaptados al clima sur.",
        points: [
          "Obras civiles, radieres industriales y naves comerciales.",
          "Mejoramiento técnico de suelos difíciles e instalaciones sanitarias.",
          "Estabilización de caminos de ingreso y proyectos eléctricos de potencia."
        ],
        ctaText: "Cotizar Especialidad"
      },
      {
        id: "ito",
        name: "Inspección Técnica ITO",
        tag: "Consultoría ITO",
        title: "Inspección Técnica de Obra",
        description: "Control técnico e institucional riguroso para salvaguardar la calidad y los plazos de su inversión.",
        points: [
          "Asesoría especializada e Inspección Técnica de Obra (ITO independiente).",
          "Fiscalización estricta de normativas chilenas y cubicación técnica de materiales.",
          "Gestión estratégica y control exhaustivo de plazos en proyectos llave en mano."
        ],
        ctaText: "Agendar Consultoría ITO"
      }
    ]
  },
  solar: {
    title: "SOLUCIONES FOTOVOLTAICAS PARA PARCELAS",
    subtitle: "Desarrollamos proyectos de energía solar limpia y autónoma, diseñados con ingeniería de precisión para superar los desafíos de conectividad en el sur de Chile.",
    items: [
      {
        title: "Sistemas On-Grid",
        desc: "Ahorro inteligente inyectando excedentes de energía directamente a la red bajo la Ley Net Billing.",
        benefit: "Retorno de inversión garantizado y reducción en facturas eléctricas."
      },
      {
        title: "Sistemas Off-Grid",
        desc: "Independencia energética total con almacenamiento en bancos de baterías de litio para zonas aisladas.",
        benefit: "Electricidad 24/7 sin depender del tendido eléctrico tradicional."
      },
      {
        title: "Casas y Faenas Aisladas",
        desc: "Suministro eléctrico continuo garantizado para viviendas rurales, bodegas y campamentos logísticos.",
        benefit: "Dimensionamiento profesional adaptado a la radiación del sur de Chile."
      }
    ]
  },
  productCategories: [
    { id: "all", name: "Todos los Productos", icon: "LayoutGrid" },
    { id: "pavimentos", name: "Pastelones & Pisos", icon: "Layers" },
    { id: "confinamiento", name: "Solerillas & Confinamiento", icon: "ShieldCheck" },
    { id: "drenaje", name: "Canaletas & Drenaje", icon: "CircleDot" }
  ],
  products: [
    {
      id: "pastelon-hormigon",
      name: "Pastelón de Hormigón",
      price: "$4.450",
      priceRaw: 4450,
      priceUnit: "c/u",
      category: "pavimentos",
      categoryName: "Pastelones & Pisos",
      desc: "Pastelón de hormigón vibrado de alta resistencia y terminación antideslizante. Diseñado especialmente para veredas y accesos en el clima lluvioso del sur.",
      format: "50 × 50 × 4 cm",
      useCase: "Veredas peatonales, accesos de parcelas, patios, terrazas y quinchos.",
      highlight: "Hormigón H25 vibrado de alta resistencia",
      specs: [
        "Dimensiones: 50 cm (ancho) × 50 cm (largo) × 4 cm (espesor)",
        "Rendimiento: 4 unidades por metro cuadrado (m²)",
        "Superficie antideslizante de alta adherencia bajo lluvia y escarcha",
        "Alta resistencia al desgaste por tránsito peatonal frecuente",
        "Peso unitario estimado: 22 kg para óptima estabilidad en suelo"
      ],
      badge: "Stock Disponible",
      image: "/productos/pastelon-hormigon.jpg"
    },
    {
      id: "solerilla-hormigon",
      name: "Solerilla de Hormigón",
      price: "$3.350",
      priceRaw: 3350,
      priceUnit: "c/u",
      category: "confinamiento",
      categoryName: "Solerillas & Confinamiento",
      desc: "Solerilla de hormigón recto con bisel superior para confinamiento perimetral, veredas peatonales y separación estética de jardines y pastelones.",
      format: "100 × 20 × 6 cm",
      useCase: "Confinamiento de veredas peatonales, jardines, entradas vehiculares y parcelas.",
      highlight: "Bisel suave de alta seguridad peatonal",
      specs: [
        "Dimensiones: 100 cm (largo) × 20 cm (alto) × 6 cm (ancho)",
        "Bisel superior redondeado para mayor estética y seguridad",
        "Fabricación en hormigón de alta compresión y baja absorción",
        "Fácil alineación y fijación sobre base estabilizada o mortero",
        "Peso estimado: 25 kg por unidad de 1 metro"
      ],
      badge: "Stock Disponible",
      image: "/productos/solerilla-hormigon.jpeg"
    },
    {
      id: "canaleta-piso-hormigon",
      name: "Canaleta a Piso de Hormigón",
      price: "$13.990",
      priceRaw: 13990,
      priceUnit: "c/u",
      category: "drenaje",
      categoryName: "Canaletas & Drenaje",
      desc: "Canaleta prefabricada de hormigón de 1 metro para evacuación de aguas lluvias a nivel de piso. Incluye rejilla metálica galvanizada de alta resistencia.",
      format: "1 m (largo) × 15 cm × 15 cm",
      useCase: "Evacuación de aguas lluvias en accesos vehiculares, patios, estacionamientos y radieres.",
      highlight: "Incluye Rejilla Galvanizada",
      specs: [
        "Dimensiones: 1 metro (largo) × 15 cm (ancho) × 15 cm (profundidad)",
        "Incluye rejilla metálica galvanizada desmontable para limpieza",
        "Apta para tránsito vehicular liviano y drenaje en accesos",
        "Hormigón impermeable resistente al arrastre de sedimentos",
        "Ensamble continuo y alineación rápida en zanjas de drenaje"
      ],
      badge: "+ Con Rejilla Galvanizada",
      image: "/productos/canaleta-piso-hormigon.jpg"
    }
  ]
};

// Generador oficial del enlace de WhatsApp con formato prolijo
export function generateWhatsAppUrl({ name, type, item, details }) {
  const phone = companyData.phoneRaw;
  const greeting = "¡Hola, Inversiones Concremontt! Me gustaría coordinar una cotización técnica:";
  const lines = [
    greeting,
    "",
    `• *Nombre del Cliente:* ${name || "Cliente interesado"}`,
    `• *Tipo:* ${type}`,
    `• *Requerimiento:* ${item || "Consulta General"}`,
    `• *Detalles de la Obra:* ${details || "Solicito asesoría y presupuesto"}`
  ];
  const message = lines.join("\n");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// Especificaciones técnicas de resistencias de hormigón para SEO y selector UI
export const concreteResistances = [
  {
    grade: "H20",
    name: "Hormigón H20",
    strength: "20 MPa (200 kgf/cm²)",
    slump: "8 - 10 cm",
    application: "Radieres habitacionales, veredas y soleras peatonales.",
    badge: "Uso Residencial",
    icon: "Home"
  },
  {
    grade: "H25",
    name: "Hormigón H25",
    strength: "25 MPa (250 kgf/cm²)",
    slump: "10 - 12 cm",
    application: "Galpones, accesos vehiculares, estacionamientos y fundaciones.",
    badge: "Más Solicitado",
    icon: "Truck"
  },
  {
    grade: "H30",
    name: "Hormigón H30",
    strength: "30 MPa (300 kgf/cm²)",
    slump: "10 - 14 cm",
    application: "Losas de alto tonelaje, pavimentos pesados y ambiente marino.",
    badge: "Alto Tránsito",
    icon: "ShieldAlert"
  }
];

// Áreas de cobertura geográfica y logística de mixer en la Región de Los Lagos
export const coverageAreas = [
  {
    id: "puerto-montt",
    name: "Puerto Montt",
    type: "Planta Base",
    distance: "0 - 25 km",
    transitTime: "20 - 35 min",
    route: "Ruta 5 / Cardonal / Chinquihue",
    badge: "Despacho Inmediato",
    description: "Suministro directo desde planta para obras urbanas e industriales.",
    minVolume: "Desde 1 m³ (Mixer 8 m³)"
  },
  {
    id: "puerto-varas",
    name: "Puerto Varas",
    type: "Cobertura Frecuente",
    distance: "22 km",
    transitTime: "30 - 45 min",
    route: "Ruta 5 Sur / Enlace Norte",
    badge: "Entrega Diaria",
    description: "Despacho a parcelaciones, condominios y proyectos inmobiliarios.",
    minVolume: "Mixer completo o parcial"
  },
  {
    id: "alerce",
    name: "Alerce",
    type: "Zona Prioritaria",
    distance: "12 km",
    transitTime: "25 - 35 min",
    route: "Ruta V-505 Alerce",
    badge: "Alta Disponibilidad",
    description: "Atención rápida a obras civiles, radieres y autoconstrucción.",
    minVolume: "Programación flexible"
  },
  {
    id: "llanquihue",
    name: "Llanquihue",
    type: "Ribera del Lago",
    distance: "32 km",
    transitTime: "40 - 55 min",
    route: "Ruta 5 Sur",
    badge: "Cobertura Total",
    description: "Abastecimiento de hormigón para faenas agrícolas e industriales.",
    minVolume: "Coordinación previa"
  },
  {
    id: "frutillar",
    name: "Frutillar",
    type: "Zona Lago Llanquihue",
    distance: "48 km",
    transitTime: "55 - 70 min",
    route: "Ruta 5 Sur / Frutillar Bajo-Alto",
    badge: "Rutas Programadas",
    description: "Despacho con aditivos retardadores para garantizar cono en obra.",
    minVolume: "Planificación semanal"
  }
];

// Preguntas frecuentes semánticas vinculadas al Schema FAQPage
export const seoFaqs = [
  {
    id: "faq-precio-m3",
    question: "¿Cuál es el precio del m³ de hormigón preparado en Puerto Montt y cómo cotizar?",
    shortAnswer: "El valor del m³ depende de la resistencia (H20, H25, H30), el volumen cubicado y la distancia de flete en camión mixer.",
    details: "En CONCREMONTT entregamos cotización técnica inmediata por WhatsApp con desglose transparente de m³, bombeo pluma y horario de entrega programada.",
    cta: "Cotizar Precio m³ por WhatsApp",
    badge: "Cotización Rápida"
  },
  {
    id: "faq-resistencias",
    question: "¿Qué resistencia de hormigón (H20, H25 o H30) necesito para mi radier o galpón?",
    shortAnswer: "H20 para radieres residenciales y veredas; H25 para galpones y tránsito vehicular; H30 para alto tonelaje y fundaciones pesadas.",
    details: "Nuestros asesores técnicos revisan el tipo de suelo y uso previsto en Puerto Montt y Los Lagos para recomendar la dosificación exacta sin sobrecostos.",
    cta: "Consultar Resistencia para mi Obra",
    badge: "Asesoría Técnica"
  },
  {
    id: "faq-mixer-bombeo",
    question: "¿Cuáles son las condiciones de acceso para el camión mixer y el servicio de bombeo?",
    shortAnswer: "Se requiere un acceso despejado de mínimo 3 metros de ancho y terreno firme para camiones de hasta 28 toneladas cargados.",
    details: "Para distancias superiores a 6 metros desde el camión o radieres interiores, disponemos de servicio de bombeo pluma y bomba estacionaria que agiliza el vaciado.",
    cta: "Coordinar Inspección de Acceso",
    badge: "Logística Segura"
  }
];

