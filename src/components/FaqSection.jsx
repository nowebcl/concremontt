import React, { useState } from 'react';
import { seoFaqs, companyData } from '../data/concremonttData';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';

export default function FaqSection({ onSelectQuote }) {
  // Default open the first question
  const [openFaqId, setOpenFaqId] = useState('faq-precio-m3');

  const toggleFaq = (id) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  const getWhatsAppFaqLink = (faq) => {
    const phone = companyData.phoneRaw;
    const msg = `¡Hola Inversiones Concremontt! Tengo una consulta sobre: *${faq.question}*. ¿Me podrían orientar con mi presupuesto?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-[#f8f9fa] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Semantic Section Heading */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-[11px] font-black tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Resolución de Dudas Frecuentes</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 leading-tight tracking-tight">
            Preguntas Frecuentes sobre Hormigón en <br className="hidden sm:inline" />
            <span className="text-[#d97706]">Puerto Montt y Los Lagos</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Información técnica sobre precios por m³, dosificación de resistencias y logística de camión mixer en obra.
          </p>
        </div>

        {/* Semantic Accordion List */}
        <div className="space-y-3.5" role="region" aria-label="Preguntas Frecuentes">
          {seoFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-2xs ${
                  isOpen ? 'border-amber-300 ring-2 ring-amber-100' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#d97706] flex-shrink-0" />
                    <h3 className="text-xs sm:text-sm md:text-base font-black text-slate-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-1.5 rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180 bg-amber-100 text-amber-900' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Body Content (Strictly <= 3 lines per paragraph) */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-left space-y-3 border-t border-slate-100 mt-1 animate-in fade-in duration-200">
                    <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed pt-3">
                      {faq.shortAnswer}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {faq.details}
                    </p>

                    {/* Quick Contextual CTA Button */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <a
                        href={getWhatsAppFaqLink(faq)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs py-2 px-3.5 rounded-xl shadow-2xs transition-all touch-press cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white stroke-[#25D366]" />
                        <span>{faq.cta}</span>
                      </a>

                      <button
                        onClick={() => onSelectQuote(faq.question, 'Consulta FAQ')}
                        className="text-xs font-bold text-slate-600 hover:text-slate-950 transition-colors inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Formulario Web</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Quotation Banner */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-xs font-black text-slate-900">¿Tienes un proyecto especial o necesitas cubicación en plano?</div>
            <div className="text-xs text-slate-500">Envíanos las medidas de tu radier o faena y calculamos los m³ exactos.</div>
          </div>

          <a
            href={`https://wa.me/${companyData.phoneRaw}?text=${encodeURIComponent("¡Hola Concremontt! Necesito cubicación técnica de hormigón para mi plano / proyecto.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0f172a] hover:bg-slate-800 text-white font-black text-xs px-4 py-2.5 rounded-xl transition-all shadow-xs flex-shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#fbbd08]" />
            <span>Hablar con un Ingeniero</span>
          </a>
        </div>

      </div>
    </section>
  );
}
