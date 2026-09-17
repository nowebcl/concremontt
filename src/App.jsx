import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CounterStrip from './components/CounterStrip';
import CoverageSection from './components/CoverageSection';
import TrabajosSection from './components/TrabajosSection';
import ProductsSection from './components/ProductsSection';
import EngineeringSection from './components/EngineeringSection';
import SolarSection from './components/SolarSection';
import FaqSection from './components/FaqSection';
import QuoteSection from './components/QuoteSection';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import DetailSheet from './components/DetailSheet';
import { MessageCircle } from 'lucide-react';
import { companyData } from './data/concremonttData';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [quoteSelection, setQuoteSelection] = useState({ item: null, type: 'Servicio' });

  // Intersection Observer to detect current active section
  useEffect(() => {
    const sections = ['inicio', 'productos', 'nosotros', 'servicios', 'cobertura', 'trabajos', 'ingenieria', 'solar', 'faq', 'cotizar', 'contacto'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenQuote = (itemName = null, type = 'Servicio') => {
    setQuoteSelection({ item: itemName, type });
    const quoteElement = document.getElementById('cotizar');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDetail = (item) => {
    setSelectedDetail(item);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-[#fbbd08] selection:text-black">
      
      {/* Header */}
      <Header 
        onOpenQuote={() => handleOpenQuote()} 
        activeSection={activeSection} 
      />

      {/* Main Content Sections: Exact Industrus structure following the Hero */}
      <main className="flex-1">
        {/* Hero Section: Dark, exact video background, no bottom gradient */}
        <HeroSection onOpenQuote={(item, type) => handleOpenQuote(item, type)} />

        {/* 1. Precast Catalog Grid with Live Search & Filters (Immediately after Hero) */}
        <ProductsSection 
          onSelectDetail={handleSelectDetail} 
          onSelectQuote={(title, type) => handleOpenQuote(title, type)} 
        />

        {/* 2. Industrus About Section with Mission, Vision & Experience Box */}
        <AboutSection onOpenQuote={() => handleOpenQuote()} />

        {/* 3. Industrus Services Section with Floating Square Icons & Technical Specs Selector */}
        <ServicesSection 
          onSelectDetail={handleSelectDetail} 
          onSelectQuote={(title, type) => handleOpenQuote(title, type)} 
        />

        {/* 4. Industrus Key Facts & Counters Strip */}
        <CounterStrip />

        {/* 5. Geographic Coverage & Panderetas Installation in Los Lagos Region */}
        <CoverageSection 
          onSelectQuote={(title, type) => handleOpenQuote(title, type)} 
        />

        {/* 6. Finished Projects Dynamic Gallery (Trabajos Terminados) */}
        <TrabajosSection 
          onSelectQuote={(title, type) => handleOpenQuote(title, type)} 
        />

        {/* 7. Industrus Technical Capabilities & Engineering Tabs */}
        <EngineeringSection 
          onSelectQuote={(title, type) => handleOpenQuote(title, type)} 
        />

        {/* 7. Solar Solutions for Parcels */}
        <SolarSection 
          onSelectQuote={(title, type) => handleOpenQuote(title, type)} 
        />

        {/* 8. Semantic FAQ Section with Rich Schema FAQPage Alignment */}
        <FaqSection 
          onSelectQuote={(title, type) => handleOpenQuote(title, type)} 
        />

        {/* 9. Industrus Consultation & Dynamic WhatsApp Order Form */}
        <QuoteSection 
          initialItem={quoteSelection.item} 
          initialType={quoteSelection.type} 
        />
      </main>

      {/* 8. Industrus 4-Column Footer */}
      <Footer />

      {/* Mobile Bottom Navigation Dock */}
      <MobileBottomNav 
        activeSection={activeSection} 
        onOpenQuote={() => handleOpenQuote()} 
      />

      {/* Detail Bottom Sheet / Modal */}
      <DetailSheet
        isOpen={!!selectedDetail}
        item={selectedDetail}
        onClose={() => setSelectedDetail(null)}
        onQuote={(title, type) => handleOpenQuote(title, type)}
      />

      {/* Botón WhatsApp Flotante Redondo - Lado Izquierdo Abajo */}
      <a
        href={`https://wa.me/${companyData.phoneRaw}?text=${encodeURIComponent('¡Hola, Inversiones Concremontt! Me gustaría cotizar panderetas y prefabricados de hormigón.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp con Inversiones Concremontt"
        className="fixed bottom-20 md:bottom-6 left-4 sm:left-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/25 group cursor-pointer"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white stroke-[#25D366]" />

        {/* Indicador de estado en línea */}
        <span className="absolute top-1 right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
        </span>

        {/* Tooltip flotante en hover para desktop */}
        <span className="hidden md:group-hover:block absolute left-full ml-3 px-3 py-1.5 bg-slate-950 text-white text-xs font-bold rounded-xl whitespace-nowrap shadow-xl pointer-events-none transition-all">
          WhatsApp Directo
        </span>
      </a>

    </div>
  );
}
