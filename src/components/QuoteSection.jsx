import React, { useState, useEffect } from 'react';
import { companyData, generateWhatsAppUrl } from '../data/concremonttData';
import { MessageSquare, Send, Building, PackageCheck, MapPin, Clock, Phone, Mail, ShieldCheck } from 'lucide-react';

export default function QuoteSection({ initialItem = null, initialType = 'Servicio' }) {
  const [quoteType, setQuoteType] = useState('Servicio');
  const [clientName, setClientName] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [details, setDetails] = useState('');

  useEffect(() => {
    if (initialItem) {
      setSelectedItem(initialItem);
      if (initialType) setQuoteType(initialType);
    } else if (companyData.services.length > 0 && !selectedItem) {
      setSelectedItem(companyData.services[0].title);
    }
  }, [initialItem, initialType]);

  const serviceOptions = [
    ...companyData.services.map(s => s.title),
    'Ingeniería y Construcción General',
    'Inspección Técnica de Obra (ITO)',
    'Sistemas Fotovoltaicos para Parcelas',
    'Otro requerimiento de obra'
  ];

  const productOptions = [
    ...companyData.products.map(p => p.name),
    'Lote mixto de prefabricados',
    'Otro producto a medida'
  ];

  const currentOptions = quoteType === 'Servicio' ? serviceOptions : productOptions;

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = generateWhatsAppUrl({
      name: clientName,
      type: quoteType,
      item: selectedItem,
      details: details
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="cotizar" className="py-16 sm:py-24 bg-[#f8f9fa] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Form Box (Industrus Contact Form Style) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            
            <div className="mb-6 space-y-2">
              <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#d97706]">
                Planifica tu Obra
              </h4>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 leading-tight">
                Genera tu Orden Técnica <br className="hidden sm:inline" />
                Directa a <span className="text-[#fbbd08]">WhatsApp!</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Selecciona tu requerimiento y nuestro motor generará una orden técnica directa al WhatsApp corporativo.
              </p>
            </div>

            {/* Switcher Buttons */}
            <div className="flex p-1 bg-slate-100 rounded-xl mb-6 border border-slate-200">
              <button
                type="button"
                onClick={() => {
                  setQuoteType('Servicio');
                  setSelectedItem(serviceOptions[0]);
                }}
                className={`flex-1 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all touch-press ${
                  quoteType === 'Servicio'
                    ? 'bg-[#fbbd08] text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Building className="w-4 h-4" />
                <span>Servicio de Ingeniería</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setQuoteType('Producto');
                  setSelectedItem(productOptions[0]);
                }}
                className={`flex-1 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all touch-press ${
                  quoteType === 'Producto'
                    ? 'bg-[#fbbd08] text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <PackageCheck className="w-4 h-4" />
                <span>Producto Prefabricado</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Nombre del Cliente o Empresa
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Andrés Morales / Constructora Los Lagos"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#fbbd08] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  {quoteType === 'Servicio' ? 'Servicio a Cotizar' : 'Producto Prefabricado'}
                </label>
                <select
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#fbbd08] focus:bg-white transition-colors"
                >
                  {currentOptions.map((opt, i) => (
                    <option key={i} value={opt} className="bg-white text-slate-900">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Detalles de la Obra o Cantidad
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe dimensiones estimadas, m2 requeridos, ubicación del terreno o plazos..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#fbbd08] focus:bg-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all touch-press"
              >
                <Send className="w-4 h-4 stroke-[3]" />
                <span>Enviar Orden Técnica a WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-slate-500 font-medium">
                Atención técnica directa &bull; Número oficial: +56 9 3713 8495
              </p>
            </form>

          </div>

          {/* Right Info Cards (Industrus Style) */}
          <div id="contacto" className="lg:col-span-5 space-y-4">
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-black text-slate-950 pb-3 border-b border-slate-100 flex items-center gap-2">
                <Building className="w-4 h-4 text-[#d97706]" />
                <span>Información Corporativa</span>
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200/60 text-[#d97706] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 font-bold uppercase text-[10px]">Dirección Base</div>
                    <div className="text-slate-900 font-bold">{companyData.location}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200/60 text-[#d97706] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 font-bold uppercase text-[10px]">Horario Operativo</div>
                    <div className="text-slate-900 font-bold">{companyData.hours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200/60 text-[#d97706] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 font-bold uppercase text-[10px]">Línea Directa / WhatsApp</div>
                    <a href={`tel:${companyData.phoneRaw}`} className="text-[#d97706] font-black hover:underline">
                      {companyData.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200/60 text-[#d97706] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 font-bold uppercase text-[10px]">Correo Electrónico</div>
                    <a href={`mailto:${companyData.email}`} className="text-slate-800 font-bold hover:text-slate-950">
                      {companyData.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Guarantee Box */}
            <div className="bg-[#151921] text-white p-6 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#fbbd08] font-black text-xs uppercase tracking-wider">
                <ShieldCheck className="w-5 h-5" />
                <span>Garantía Estructural Austral</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Calculamos bajo normativa chilena sísmica NCh433 y sobrecargas de viento para toda la Región de Los Lagos.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
