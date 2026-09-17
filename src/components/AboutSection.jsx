import React from 'react';
import { companyData } from '../data/concremonttData';
import { Target, Compass, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AboutSection({ onOpenQuote }) {
  const { about } = companyData;

  return (
    <section id="nosotros" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto bg-white border-b border-slate-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Industrus text content */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="space-y-2">
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#d97706]">
              Sobre Nosotros
            </h4>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 leading-tight">
              Construimos con la Mejor Calidad <br className="hidden sm:inline" />
              Que Tu Obra <span className="text-[#fbbd08]">Necesita!</span>
            </h2>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {about.description}
          </p>

          {/* Industrus 2 Feature Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            {/* Mission */}
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-lg bg-[#fbbd08] text-slate-950 flex items-center justify-center flex-shrink-0 font-bold shadow-xs">
                <Target className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-sm font-black text-slate-900 mb-1">
                  Misión Concremontt
                </h3>
                <p className="text-[11px] text-slate-600 leading-snug">
                  {about.mission}
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-lg bg-slate-950 text-[#fbbd08] flex items-center justify-center flex-shrink-0 font-bold shadow-xs">
                <Compass className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-sm font-black text-slate-900 mb-1">
                  Nuestra Visión
                </h3>
                <p className="text-[11px] text-slate-600 leading-snug">
                  {about.vision}
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Button and Badge row */}
          <div className="flex flex-wrap items-center gap-6 pt-3">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 bg-[#fbbd08] hover:bg-[#eab308] text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-sm transition-all touch-press"
            >
              <span>Cotizar Proyecto</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>

            <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
              <ShieldCheck className="w-5 h-5 text-[#d97706]" />
              <span>100% Norma Chilena NCh & ITO Certificada</span>
            </div>
          </div>

        </div>

        {/* Right Column: Industrus About Image with Floating Experience Badge */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
            <img
              src={companyData.media.galponImg}
              onError={(e) => { e.currentTarget.src = companyData.media.galponImgFallback; }}
              alt="Construcción Concremontt"
              className="w-full h-80 sm:h-[420px] object-cover"
            />
            
            {/* Floating Experience Box (Industrus signature badge) */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#fbbd08] text-slate-950 p-4 sm:p-5 rounded-xl shadow-xl max-w-[200px] border-2 border-white">
              <div className="text-2xl sm:text-3xl font-black leading-none mb-1">
                10+ Años
              </div>
              <div className="text-xs font-bold uppercase tracking-tight text-slate-900 leading-tight">
                De Experiencia en Obras del Sur Austral
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
