# CONCREMONTT - Web & Mobile-App Mode (React)

Réplica minimalista de alta gama y experiencia de aplicación móvil para **INVERSIONES CONCREMONTT SPA** (https://concremontt.cl/).

## Características Principales

- **Diseño Minimalista & Industrial**: Paleta profunda carbón/grafito con acentos dorados (`#fbbd08`), tipografía precisa y bordes sutiles con efectos *glassmorphism*.
- **Experiencia de App Móvil Nativa en Pantallas Móviles**:
  - **Bottom Navigation Bar**: Barra de pestañas inferior fija al estilo iOS/Android (Inicio, Servicios, Solar, Catálogo y botón destacado de Cotizar).
  - **Top App Header**: Encabezado táctil con badge en tiempo real de operatividad (`● Puerto Montt`), logo y llamada directa.
  - **Bottom Sheets Deslizables**: Fichas técnicas emergentes para servicios y productos que se abren desde la parte inferior sin perder contexto.
  - **Carruseles con Snap Horizontal**: Navegación táctil fluida para portafolio de ingeniería y catálogo de prefabricados.
- **Recursos Originales Preservados**:
  - Video aéreo cinemático de fondo en el Hero (`hero-video.mp4`).
  - Logotipo corporativo oficial (`logo.png`).
  - Fotografía 4K de alta calidad de galpones industriales (`galpon-industrial.jpg`).
- **Cotizador Dinámico a WhatsApp**:
  - Selector interactivo entre **Servicio** y **Producto**.
  - Generación de mensaje estructurado directo al WhatsApp corporativo: `+56 9 3713 8495`.
- **Módulo de Ingeniería y Fiscalización**:
  - Pestañas magnéticas para alternar entre *Ingeniería y Construcción* e *Inspección Técnica de Obra (ITO)*.

## Comandos Rápidos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (http://localhost:3000)
npm run dev

# Compilar para producción
npm run build

# Previsualizar compilación de producción
npm run preview
```

## Estructura del Proyecto

```text
├── public/
│   └── assets/
│       ├── logo.png               # Logotipo oficial Concremontt
│       ├── galpon-industrial.jpg  # Imagen 4K de galpones y faenas
│       └── hero-video.mp4         # Video aéreo corporativo
├── src/
│   ├── components/
│   │   ├── Header.jsx             # Barra superior responsive (desktop / app status)
│   │   ├── MobileBottomNav.jsx    # Barra inferior fija de navegación tipo app
│   │   ├── HeroSection.jsx        # Hero con video cinemático y métricas
│   │   ├── AboutSection.jsx       # Misión, Visión y Valores corporativos
│   │   ├── ServicesSection.jsx    # Portafolio con filtros y carrusel snap
│   │   ├── EngineeringSection.jsx # Módulo interactivo Ingeniería & ITO
│   │   ├── SolarSection.jsx       # Soluciones fotovoltaicas para parcelas
│   │   ├── ProductsSection.jsx    # Catálogo de prefabricados de hormigón
│   │   ├── QuoteSection.jsx       # Cotizador dinámico directo a WhatsApp
│   │   ├── DetailSheet.jsx        # Bottom Sheet deslizable en móvil / modal
│   │   └── Footer.jsx             # Pie de página y datos de contacto
│   ├── data/
│   │   └── concremonttData.js     # Datos estructurados y generador WhatsApp
│   ├── App.jsx                    # Componente principal
│   ├── main.jsx                   # Entrada React
│   └── index.css                  # Tailwind y estilos de safe-area
├── tailwind.config.js
├── vite.config.js
└── package.json
```
