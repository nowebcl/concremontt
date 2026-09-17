import React from 'react';
import { companyData } from '../data/concremonttData';
import { SunMedium, BatteryCharging, Zap, ArrowRight, Sparkles } from 'lucide-react';

export default function SolarSection({ onSelectQuote }) {
  const { solar } = companyData;
  const icons = [Zap, BatteryCharging, SunMedium];

  return (
    <section id="solar" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Industrus Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#d97706] mb-2">
            Energía Renovable
          </h4>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 leading-tight mb-3">
            Soluciones Fotovoltaicas Para <br className="hidden sm:inline" />
            Parcelas y <span className="text-[#fbbd08]">Faenas Australes!</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {solar.subtitle}
          </p>
        </div>

        {/* 3 Solar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {solar.items.map((item, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div
                key={index}
                className="bg-[#f8f9fa] rounded-xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#fbbd08] text-slate-950 flex items-center justify-center font-bold shadow-sm mb-5 group-hover:bg-slate-950 group-hover:text-[#fbbd08] transition-colors">
                    <IconComponent className="w-6 h-6 stroke-[2.5]" />
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#d97706] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-800 bg-amber-100/60 p-2.5 rounded-lg">
                    <Sparkles className="w-4 h-4 text-[#d97706] flex-shrink-0" />
                    <span>{item.benefit}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button
            onClick={() => onSelectQuote('Sistemas Fotovoltaicos para Parcelas', 'Servicio')}
            className="inline-flex items-center gap-2 bg-[#fbbd08] hover:bg-[#eab308] text-slate-950 font-black text-xs uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-sm transition-all touch-press"
          >
            <span>Cotizar Instalación Solar</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

      </div>
    </section>
  );
}
