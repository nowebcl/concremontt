import React, { useState } from 'react';
import { companyData } from '../data/concremonttData';
import { HardHat, ClipboardCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function EngineeringSection({ onSelectQuote }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const { engineering } = companyData;
  const currentTab = engineering.tabs[activeTabIndex];

  const technicalSkills = [
    { name: 'Cálculo de Galpones y Estructuras en Acero', percent: 95 },
    { name: 'Radieres Industriales y Hormigón H20-H30', percent: 90 },
    { name: 'Inspección Técnica ITO y Fiscalización NCh', percent: 100 },
    { name: 'Sistemas Fotovoltaicos para Faenas Australes', percent: 85 }
  ];

  return (
    <section id="ingenieria" className="py-16 sm:py-24 bg-[#f8f9fa] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Industrus Skills & Progress Bars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#d97706]">
                Capacidad Técnica
              </h4>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 leading-tight">
                Líderes en Ingeniería y <br className="hidden sm:inline" />
                Mercado <span className="text-[#fbbd08]">Industrial!</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Combinamos cálculo estructural certificado con tecnología constructiva de punta para asegurar infraestructuras duraderas en la zona sur austral.
              </p>
            </div>

            {/* Industrus Progress Bars */}
            <div className="space-y-4 pt-2">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-slate-800">
                    <span>{skill.name}</span>
                    <span className="text-[#d97706] font-black">{skill.percent}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#fbbd08] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Tabs & Checklist Box */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            
            {/* Tab Selector Buttons */}
            <div className="flex p-1 bg-slate-100 rounded-xl mb-6">
              {engineering.tabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabIndex(idx)}
                  className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all duration-150 touch-press ${
                    activeTabIndex === idx
                      ? 'bg-[#fbbd08] text-slate-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {idx === 0 ? <HardHat className="w-4 h-4" /> : <ClipboardCheck className="w-4 h-4" />}
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            {/* Tab Details */}
            <div className="space-y-4">
              <span className="text-[11px] font-bold text-[#d97706] uppercase tracking-wider block">
                {currentTab.tag}
              </span>
              <h3 className="text-xl font-black text-slate-950">
                {currentTab.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {currentTab.description}
              </p>

              {/* Checklist */}
              <div className="space-y-2.5 pt-2">
                {currentTab.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="p-0.5 rounded-full bg-amber-100 text-amber-800 mt-0.5 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                    </span>
                    <span className="text-xs text-slate-800 font-medium leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onSelectQuote(currentTab.title, 'Servicio')}
                  className="w-full py-3 rounded-lg bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors touch-press"
                >
                  <span>{currentTab.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-[#fbbd08]" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
