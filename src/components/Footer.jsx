import React from 'react';
import { companyData } from '../data/concremonttData';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#10131a] border-t border-slate-800 text-slate-400 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Industrus 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Logo & About */}
          <div className="lg:col-span-4 space-y-4">
            <img 
              src={companyData.media.logo} 
              onError={(e) => { e.currentTarget.src = companyData.media.logoFallback; }}
              alt={companyData.name} 
              className="h-10 w-auto"
            />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Ingeniería, galpones modulares y obras civiles diseñadas con precisión técnica para resistir las condiciones climáticas de la zona sur austral de Chile.
            </p>
            <div className="text-xs font-bold text-[#fbbd08]">
              Puerto Montt &bull; Región de Los Lagos
            </div>
          </div>

          {/* Column 2: Servicios */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] border-l-2 border-[#fbbd08] pl-2.5">
              Servicios
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#servicios" className="hover:text-[#fbbd08] transition-colors">Panderetas de Hormigón</a></li>
              <li><a href="#servicios" className="hover:text-[#fbbd08] transition-colors">Cierres Perimetrales de Parcela</a></li>
              <li><a href="#productos" className="hover:text-[#fbbd08] transition-colors">Prefabricados de Hormigón</a></li>
              <li><a href="#servicios" className="hover:text-[#fbbd08] transition-colors">Galpones Modulares</a></li>
              <li><a href="#solar" className="hover:text-[#fbbd08] transition-colors">Sistemas Solares para Parcelas</a></li>
            </ul>
          </div>

          {/* Column 3: Navegación */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] border-l-2 border-[#fbbd08] pl-2.5">
              Empresa
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-[#fbbd08] transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-[#fbbd08] transition-colors">Sobre Nosotros</a></li>
              <li><a href="#ingenieria" className="hover:text-[#fbbd08] transition-colors">Inspección ITO</a></li>
              <li><a href="#productos" className="hover:text-[#fbbd08] transition-colors">Catálogo Prefabricados</a></li>
              <li><a href="#cotizar" className="hover:text-[#fbbd08] transition-colors">Cotizar Obra</a></li>
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] border-l-2 border-[#fbbd08] pl-2.5">
              Contacto Central
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#fbbd08] flex-shrink-0" />
                <span>{companyData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#fbbd08] flex-shrink-0" />
                <a href={`tel:${companyData.phoneRaw}`} className="hover:text-white font-bold transition-colors">
                  {companyData.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#fbbd08] flex-shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-white transition-colors">
                  {companyData.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] text-slate-300 transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Volver al inicio</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} INVERSIONES CONCREMONTT SPA. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Puerto Montt, Chile</span>
            <span>&bull;</span>
            <span className="text-[#fbbd08]">Ingeniería & Obras Civiles</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
