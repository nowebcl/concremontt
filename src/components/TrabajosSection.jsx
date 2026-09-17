import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  MessageCircle, 
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { companyData } from '../data/concremonttData';

export const finishedProjects = [
  {
    id: 'cierre-cardonal',
    title: 'Cierre Perimetral con Pandereta y Portón',
    location: 'Puerto Montt · Sector Cardonal',
    category: 'Cierres',
    categoryLabel: 'Cierres Perimetrales',
    image: '/trabajos/trabajo-1.jpeg',
    description: 'Instalación de 45 metros lineales de pandereta prefabricada en hormigón H25 con postes ranurados reforzados y portón metálico.',
    specs: [
      'Altura útil de 2.00 metros libres',
      'Placas premoldeadas en hormigón H25 vibrado',
      'Fundación aislada de 60 cm en cada poste',
      'Remate superior con barda hidráulica'
    ],
    badge: 'Obra Entregada'
  },
  {
    id: 'cierre-parcela-puerto-varas',
    title: 'Cierre Continuo en Parcela Residencial',
    location: 'Puerto Varas · Ruta 5 Sur',
    category: 'Parcelas',
    categoryLabel: 'Parcelaciones',
    image: '/trabajos/trabajo-2.jpeg',
    description: 'Delimitación perimetral continua adaptada a pendiente suave y vegetación nativa con coronación de barda hidráulica corta-gotera.',
    specs: [
      'Extensión total de 120 metros lineales',
      'Bardas a dos aguas con lagrimal corta-gotera',
      'Cámara de inspección sanitaria prefabricada',
      'Cálculo contra empuje de viento austral'
    ],
    badge: 'Parcela Rural'
  },
  {
    id: 'cierre-esquina-alerce',
    title: 'Cierre Perimetral en Ángulo y Jardín',
    location: 'Alerce Norte · Los Lagos',
    category: 'Cierres',
    categoryLabel: 'Cierres Perimetrales',
    image: '/trabajos/trabajo-3.jpeg',
    description: 'Ensamble en ángulo recto de placas premoldeadas con postes dobles de esquina y nivelación uniforme sobre terreno consolidado.',
    specs: [
      'Ensamble en escuadra sin juntas abiertas',
      'Mallas electrosoldadas de acero interior',
      'Montaje rápido ejecutado en 48 horas',
      'Terminación lista para pintura o acabado rústico'
    ],
    badge: 'Cierre Urbano'
  }
];

export default function TrabajosSection({ onSelectQuote }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const filters = [
    { id: 'all', label: 'Todos los Trabajos' },
    { id: 'Cierres', label: 'Cierres Perimetrales' },
    { id: 'Parcelas', label: 'Parcelaciones' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? finishedProjects
    : finishedProjects.filter(p => p.category === activeFilter);

  // Keyboard controls for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev + 1) % finishedProjects.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev === 0 ? finishedProjects.length - 1 : prev - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex]);

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const currentProject = activeLightboxIndex !== null ? finishedProjects[activeLightboxIndex] : null;

  const getWhatsAppWorkLink = (project) => {
    const phone = companyData.phoneRaw;
    const msg = `¡Hola Inversiones Concremontt! Estuve revisando su galería de trabajos terminados y me interesa cotizar una obra similar a: *${project.title}* (${project.location}). ¿Podríamos coordinar una evaluación técnica?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="trabajos" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-[11px] font-black tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Obras Reales Ejecutadas</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 leading-tight tracking-tight">
            Galería de Trabajos <span className="text-[#d97706]">Terminados</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Fotografías directas de obras concluidas en terreno. Cierres perimetrales, panderetas reforzadas y proyectos entregados en Puerto Montt y alrededores.
          </p>

          {/* Filter Pills */}
          <div className="inline-flex items-center p-1 bg-slate-100 rounded-xl gap-1 mt-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#0f172a] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="bg-white rounded-[24px] overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo Thumbnail with Zoom & Lightbox Trigger */}
                <div 
                  onClick={() => openLightbox(idx)}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.location}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/75 backdrop-blur-xs text-white border border-white/20">
                      {project.badge}
                    </span>
                  </div>

                  {/* Lightbox Eye Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fbbd08] text-slate-950 text-xs font-black shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Ver Foto en Grande</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2.5 text-left">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold">
                    <MapPin className="w-3.5 h-3.5 text-[#d97706] flex-shrink-0" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#d97706] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Specs Bullets */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    {project.specs.slice(0, 3).map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => openLightbox(idx)}
                    className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                  >
                    Detalles →
                  </button>

                  <a
                    href={getWhatsAppWorkLink(project)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2 px-3 rounded-xl font-black text-xs transition-all shadow-xs touch-press cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white stroke-[#25D366]" />
                    <span>Cotizar Similar</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Modern Dynamic Lightbox Modal */}
      {currentProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-950 border border-white/15 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 text-white">
              <div className="flex items-center gap-2 min-w-0 pr-4">
                <MapPin className="w-4 h-4 text-[#fbbd08] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold truncate">{currentProject.title}</span>
                <span className="text-xs text-slate-400 hidden sm:inline">({currentProject.location})</span>
              </div>

              <button
                onClick={closeLightbox}
                aria-label="Cerrar modal"
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Stage */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[450px]">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="max-h-[65vh] w-auto max-w-full object-contain select-none"
              />

              {/* Prev / Next Arrows */}
              <button
                onClick={() => setActiveLightboxIndex((prev) => (prev === 0 ? finishedProjects.length - 1 : prev - 1))}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#fbbd08] text-white hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => setActiveLightboxIndex((prev) => (prev + 1) % finishedProjects.length)}
                aria-label="Foto siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#fbbd08] text-white hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Footer Information */}
            <div className="p-4 sm:p-5 bg-slate-900 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
              <div className="text-center sm:text-left space-y-0.5">
                <div className="text-xs font-black text-[#fbbd08]">{currentProject.location}</div>
                <div className="text-xs text-slate-300">{currentProject.description}</div>
              </div>

              <a
                href={getWhatsAppWorkLink(currentProject)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-4 rounded-xl font-black text-xs transition-all shadow-md touch-press cursor-pointer flex-shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                <span>Cotizar Proyecto Similar</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
