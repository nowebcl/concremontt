import React, { useState, useEffect } from 'react';
import { companyData } from '../data/concremonttData';
import { X } from 'lucide-react';

export default function Header({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Catálogo', href: '#productos' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Hormigón & Servicios', href: '#servicios' },
    { label: 'Cobertura', href: '#cobertura' },
    { label: 'Trabajos', href: '#trabajos' },
    { label: 'Preguntas', href: '#faq' },
    { label: 'Contacto', href: '#contacto' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-md py-3 border-b border-white/10 shadow-lg' 
            : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent pt-3.5 pb-3 md:pt-7 md:pb-5 lg:pt-8 lg:pb-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          
          {/* Brand Logo: Más grande en PC (md:h-12 lg:h-14) y destacado en móvil (h-10 sm:h-11) */}
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
          >
            <img 
              src={companyData.media.logo} 
              onError={(e) => { e.currentTarget.src = companyData.media.logoFallback; }}
              alt="Inversiones Concremontt Construcción e Ingeniería" 
              className="h-10 sm:h-11 md:h-12 lg:h-14 w-auto object-contain transition-all duration-200"
            />
          </a>

          {/* Desktop Nav Links - Centrados verticalmente con el logo y un poco más abajo */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs sm:text-sm font-medium text-slate-200 hover:text-white transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-3">
            {/* Botón Cotizar Ahora - Exclusivo en PC con proporción armónica */}
            <button
              onClick={() => onOpenQuote()}
              className="hidden md:inline-flex px-5 sm:px-6 py-2 rounded-full border border-[#fbbd08] hover:border-amber-300 bg-black/30 hover:bg-[#fbbd08]/15 text-[#fbbd08] text-xs font-bold tracking-wider uppercase transition-all duration-200 touch-press shadow-xs"
            >
              COTIZAR AHORA
            </button>

            {/* Menú Hamburguesa Móvil - 3 líneas asimétricas */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú de navegación"
              className="md:hidden p-2 rounded-xl text-slate-200 hover:text-white flex flex-col items-end justify-center focus:outline-none touch-press w-10 h-10"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <div className="flex flex-col items-end gap-1.5 w-6">
                  <span className="w-6 h-[2px] bg-white rounded-full transition-all duration-200" />
                  <span className="w-3.5 h-[2px] bg-[#fbbd08] rounded-full transition-all duration-200" />
                  <span className="w-5 h-[2px] bg-white rounded-full transition-all duration-200" />
                </div>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative bg-[#0c1219] border-t border-white/10 rounded-t-2xl p-5 pb-24 shadow-2xl z-10 animate-in slide-in-from-bottom duration-200">
            <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-4" />
            <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-3">
              <img 
                src={companyData.media.logo} 
                onError={(e) => { e.currentTarget.src = companyData.media.logoFallback; }}
                alt="Logo" 
                className="h-9 w-auto" 
              />
              <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400 p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-1 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/5 font-medium text-xs"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 rounded-full border border-[#fbbd08] bg-[#fbbd08]/10 text-[#fbbd08] font-bold text-[11px] tracking-wider uppercase text-center"
            >
              COTIZAR AHORA
            </button>
          </div>
        </div>
      )}
    </>
  );
}
