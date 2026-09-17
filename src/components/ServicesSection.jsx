import React, { useState } from 'react';
import { companyData, concreteResistances } from '../data/concremonttData';
import { 
  Truck, 
  Layers, 
  Warehouse, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Gauge, 
  ShieldCheck, 
  Sparkles,
  MessageCircle,
  Construction
} from 'lucide-react';

export default function ServicesSection({ onSelectDetail, onSelectQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedGrade, setSelectedGrade] = useState('H25');

  const categories = [
    { id: 'all', label: 'Todos los Servicios' },
    { id: 'hormigon', label: 'Hormigón Preparado & Mixer' },
    { id: 'estructuras', label: 'Galpones Modulares' },
    { id: 'obras', label: 'Cierres & Obras Civiles' }
  ];

  const serviceIcons = {
    'hormigon-preparado-premezclado': Layers,
    'camion-mixer-despacho': Truck,
    'bombeo-hormigon-obra': Construction,
    'radieres-fundaciones': Layers,
    'galpones-modulares': Warehouse,
    'panderetas-hormigon': Building2
  };

  const filteredServices = activeCategory === 'all' 
    ? companyData.services 
    : companyData.services.filter(s => s.category === activeCategory);

  const activeResistance = concreteResistances.find(r => r.grade === selectedGrade) || concreteResistances[1];

  const getWhatsAppResistanceLink = (resistance) => {
    const phone = companyData.phoneRaw;
    const msg = `¡Hola Inversiones Concremontt! Me gustaría cotizar *${resistance.name}* (${resistance.strength}) para mi proyecto en Puerto Montt / Región de Los Lagos. ¿Tienen disponibilidad de camión mixer?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="servicios" className="py-14 sm:py-20 bg-[#f8f9fa] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-14">
        
        {/* Semantic Section Heading with Core SEO Target */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-[11px] font-black tracking-wider uppercase">
            <span>Suministro y Transporte de Hormigón</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 leading-tight tracking-tight">
            Venta de Hormigón Preparado y <br className="hidden sm:inline" />
            Servicio de Bombeo en <span className="text-[#d97706]">Puerto Montt</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Dosificación computarizada en planta bajo norma NCh170. Flota de camiones mixer de 8 m³ y bomba pluma con cobertura en Puerto Varas, Llanquihue y Los Lagos.
          </p>

          {/* Filter Tabs */}
          <div className="inline-flex flex-wrap items-center justify-center p-1 bg-white border border-slate-200 rounded-xl shadow-2xs mt-4 gap-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-black transition-all duration-150 touch-press cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0f172a] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredServices.map((service) => {
            const Icon = serviceIcons[service.id] || Building2;
            return (
              <article
                key={service.id}
                className="bg-white rounded-[22px] overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg hover:border-amber-300 transition-all duration-300 flex flex-col group justify-between"
              >
                <div>
                  {/* Image Banner */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={companyData.media.galponImg}
                      onError={(e) => { e.currentTarget.src = companyData.media.galponImgFallback; }}
                      alt={`Servicio de ${service.title} en Puerto Montt - CONCREMONTT`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {service.categoryLabel}
                    </div>
                  </div>

                  {/* Floating Square Icon */}
                  <div className="relative -mt-6 ml-5 w-12 h-12 rounded-xl bg-[#fbbd08] text-slate-950 flex items-center justify-center font-bold shadow-md border-2 border-white z-10 group-hover:bg-slate-950 group-hover:text-[#fbbd08] transition-colors duration-200">
                    <Icon className="w-5 h-5 stroke-[2.5]" />
                  </div>

                  {/* Body Content */}
                  <div className="p-5 pt-2 space-y-2 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#d97706]">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#d97706] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                      {service.summary}
                    </p>

                    {/* Quick bullet points */}
                    <div className="pt-2 space-y-1.5 border-t border-slate-100">
                      {service.specs.slice(0, 2).map((spec, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onSelectDetail(service)}
                      className="text-xs font-bold text-slate-600 hover:text-slate-950 flex items-center gap-1 group/btn cursor-pointer"
                    >
                      <span>Ficha Técnica</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onSelectQuote(service.title, 'Servicio')}
                      className="text-xs font-black text-[#d97706] hover:text-amber-800 uppercase tracking-wider cursor-pointer"
                    >
                      Cotizar →
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Technical Specification Table / Interactive Resistances Selector (H20 / H25 / H30) */}
        <div className="bg-white border border-slate-200/90 rounded-[26px] p-5 sm:p-7 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[#d97706] text-[11px] font-black uppercase tracking-wider mb-1">
                <Gauge className="w-3.5 h-3.5" />
                <span>Norma NCh170 · Control de Calidad</span>
              </div>
              <h3 className="text-base sm:text-xl font-black text-slate-950 tracking-tight">
                Tabla Técnica de Resistencias de Hormigón Preparado
              </h3>
              <p className="text-slate-500 text-xs mt-0.5">
                Selecciona la resistencia requerida para ver su especificación de cono y aplicación en obra.
              </p>
            </div>

            {/* Resistance Grade Selector Chips */}
            <div className="inline-flex items-center p-1 bg-slate-100 rounded-xl gap-1">
              {concreteResistances.map((item) => (
                <button
                  key={item.grade}
                  onClick={() => setSelectedGrade(item.grade)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                    selectedGrade === item.grade
                      ? 'bg-[#0f172a] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.grade}
                </button>
              ))}
            </div>
          </div>

          {/* Active Resistance Spec Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            
            {/* Grade Info */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-left space-y-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Resistencia Cilíndrica</span>
              <div className="text-base font-black text-slate-900">{activeResistance.strength}</div>
              <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-100 text-amber-900">
                {activeResistance.badge}
              </span>
            </div>

            {/* Slump / Cono */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-left space-y-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Asentamiento de Cono</span>
              <div className="text-base font-black text-slate-900">{activeResistance.slump}</div>
              <span className="text-[11px] text-slate-500 block">Alta trabajabilidad para bomba o descarga directa</span>
            </div>

            {/* Application */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-left space-y-1 md:col-span-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Uso Recomendado</span>
              <p className="text-xs font-semibold text-slate-800 leading-snug">
                {activeResistance.application}
              </p>
            </div>

            {/* Action CTA */}
            <div className="flex flex-col gap-2">
              <a
                href={getWhatsAppResistanceLink(activeResistance)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs py-3 px-4 rounded-xl shadow-xs transition-all touch-press"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                <span>Cotizar {activeResistance.grade} por m³</span>
              </a>

              <button
                onClick={() => onSelectQuote(`Hormigón ${activeResistance.grade}`, 'Hormigón')}
                className="text-[11px] font-bold text-slate-600 hover:text-slate-950 transition-colors text-center cursor-pointer"
              >
                Solicitar cubicación en obra →
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

