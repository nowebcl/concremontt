import React from 'react';

export default function CounterStrip() {
  const stats = [
    { value: '150+', label: 'Proyectos Ejecutados', sub: 'Sur de Chile' },
    { value: '100%', label: 'Cumplimiento de Plazos', sub: 'Garantizado' },
    { value: '140+', label: 'Km/h Resistencia Viento', sub: 'Cálculo NCh' },
    { value: 'H25-H30', label: 'Hormigones Certificados', sub: 'Laboratorio' }
  ];

  return (
    <section className="bg-[#151921] text-white py-14 sm:py-16 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Heading */}
          <div className="lg:col-span-4 space-y-2">
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#fbbd08]">
              Datos Clave
            </h4>
            <h2 className="text-2xl sm:text-3xl font-black leading-tight">
              Cumpliendo Metas de <br className="hidden sm:inline" />
              Alta <span className="text-[#fbbd08]">Innovación!</span>
            </h2>
          </div>

          {/* 4 Stats Items */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
            {stats.map((item, idx) => (
              <div key={idx} className="border-l-2 border-[#fbbd08] pl-4 sm:pl-5 space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs font-bold text-slate-300 leading-tight">
                  {item.label}
                </div>
                <div className="text-[10px] text-slate-500 font-medium">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
