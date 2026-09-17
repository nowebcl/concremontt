import React, { useState } from 'react';
import { coverageAreas, companyData } from '../data/concremonttData';
import { MapPin, Navigation, Clock, Truck, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';

export default function CoverageSection({ onSelectQuote }) {
  const [selectedCityId, setSelectedCityId] = useState('puerto-montt');

  const selectedArea = coverageAreas.find(a => a.id === selectedCityId) || coverageAreas[0];

  const getWhatsAppCoverageLink = (area) => {
    const phone = companyData.phoneRaw;
    const msg = `¡Hola Inversiones Concremontt! Quisiera cotizar despacho de camión mixer a la comuna de *${area.name}* (${area.distance} aprox). ¿Tienen disponibilidad en la fecha?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="cobertura" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10 sm:space-y-12">
        
        {/* Semantic Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-[11px] font-black tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Zona Sur Austral · Logística Integral</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 leading-tight tracking-tight">
            Cobertura Geográfica y Despacho Mixer en la <br className="hidden sm:inline" />
            <span className="text-[#d97706]">Región de Los Lagos</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Suministro de hormigón preparado en camiones mixer de 8 m³ y bomba pluma con tiempos de entrega coordinados desde nuestra base en Puerto Montt.
          </p>
        </div>

        {/* Interactive City Badges / Pills Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {coverageAreas.map((area) => {
            const isSelected = selectedCityId === area.id;
            return (
              <button
                key={area.id}
                onClick={() => setSelectedCityId(area.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0f172a] text-white shadow-md scale-102 border border-slate-800'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#fbbd08]' : 'bg-slate-400'}`} />
                <span>{area.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-white text-slate-500'
                }`}>
                  {area.distance}
                </span>
              </button>
            );
          })}
        </div>

        {/* Highlight Active Area Card (Fragmented Specs - Max 2 lines per cell) */}
        <div className="bg-gradient-to-br from-slate-50 to-amber-50/30 border border-slate-200 rounded-[26px] p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Area Header & Badge */}
            <div className="md:col-span-4 space-y-2 text-left border-b md:border-b-0 md:border-r border-slate-200 pb-4 md:pb-0 md:pr-6">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#d97706] text-white">
                {selectedArea.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                {selectedArea.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedArea.description}
              </p>
              <div className="pt-2">
                <span className="text-[11px] font-bold text-slate-500">Volumen de entrega:</span>
                <div className="text-xs font-black text-slate-900">{selectedArea.minVolume}</div>
              </div>
            </div>

            {/* Spec Metrics (Cards) */}
            <div className="md:col-span-5 grid grid-cols-2 gap-3 text-left">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
                <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>Tiempo en Ruta</span>
                </div>
                <div className="text-base font-black text-slate-900">{selectedArea.transitTime}</div>
                <div className="text-[10px] text-slate-500">Desde planta en Puerto Montt</div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
                <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                  <Navigation className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>Vía de Acceso</span>
                </div>
                <div className="text-xs font-black text-slate-900 truncate">{selectedArea.route}</div>
                <div className="text-[10px] text-slate-500">Apta camión tolva / mixer</div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs space-y-1 col-span-2">
                <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                  <Truck className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>Disponibilidad de Bomba Pluma</span>
                </div>
                <div className="text-xs font-black text-slate-900">
                  Servicio disponible para radieres y parcelaciones
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="md:col-span-3 flex flex-col gap-2.5">
              <a
                href={getWhatsAppCoverageLink(selectedArea)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs py-3.5 px-4 rounded-xl shadow-xs transition-all touch-press cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                <span>Despacho a {selectedArea.name}</span>
              </a>

              <button
                onClick={() => onSelectQuote(`Despacho Mixer a ${selectedArea.name}`, 'Transporte')}
                className="inline-flex items-center justify-center gap-1 text-xs font-bold text-slate-600 hover:text-slate-950 transition-colors cursor-pointer py-1"
              >
                <span>Cotizar por Formulario</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </div>
        </div>

        {/* Quick Grid of all 5 cities (Compact scannable list without paragraphs) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {coverageAreas.map((area) => (
            <div
              key={area.id}
              onClick={() => setSelectedCityId(area.id)}
              className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                selectedCityId === area.id
                  ? 'bg-amber-50 border-amber-300 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">
                {area.type}
              </span>
              <h4 className="font-black text-sm text-slate-900 mb-1">{area.name}</h4>
              <div className="text-xs font-bold text-[#d97706]">{area.transitTime}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
