import React from 'react';
import { Home, Layers, SunMedium, Package, MessageSquareText } from 'lucide-react';

export default function MobileBottomNav({ activeSection, onOpenQuote }) {
  const tabs = [
    { id: 'inicio', label: 'Inicio', icon: Home, href: '#inicio' },
    { id: 'productos', label: 'Catálogo', icon: Package, href: '#productos' },
    { id: 'servicios', label: 'Servicios', icon: Layers, href: '#servicios' },
    { id: 'solar', label: 'Solar', icon: SunMedium, href: '#solar' },
    { id: 'cotizar', label: 'Cotizar', icon: MessageSquareText, isSpecial: true, href: '#cotizar' }
  ];

  const handleTabClick = (e, tab) => {
    e.preventDefault();
    if (tab.isSpecial && onOpenQuote) {
      onOpenQuote();
      return;
    }
    const target = document.querySelector(tab.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      aria-label="Navegación móvil inferior"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-1.5 px-2 shadow-lg"
    >
      <div className="flex items-center justify-around max-w-sm mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;

          if (tab.isSpecial) {
            return (
              <button
                key={tab.id}
                onClick={(e) => handleTabClick(e, tab)}
                className="relative flex flex-col items-center justify-center -mt-3.5 touch-press group focus:outline-none"
              >
                <div className="w-9 h-9 rounded-full bg-[#fbbd08] text-slate-950 flex items-center justify-center shadow-md border-2 border-white transition-transform group-active:scale-95">
                  <Icon className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="text-[9px] font-bold text-amber-800 mt-0.5 tracking-tight">
                  {tab.label}
                </span>
              </button>
            );
          }

          return (
            <a
              key={tab.id}
              href={tab.href}
              onClick={(e) => handleTabClick(e, tab)}
              className={`flex flex-col items-center justify-center py-0.5 px-2 rounded-lg touch-press transition-all duration-150 ${
                isActive ? 'text-amber-700 font-bold' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <div className="relative">
                <Icon className={`w-4 h-4 transition-transform ${isActive ? 'scale-105 stroke-[2.5]' : 'scale-100'}`} />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-600 rounded-full" />
                )}
              </div>
              <span className="text-[9px] mt-0.5 tracking-tight">
                {tab.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
