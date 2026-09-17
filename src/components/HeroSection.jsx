import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, FileText, MessageSquare } from 'lucide-react';
import { companyData } from '../data/concremonttData';

export default function HeroSection({ onOpenQuote }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const videoRefs = useRef([]);

  const slides = [
    {
      id: 'slide-1',
      type: 'video',
      src: '/hero.mp4',
      badge: 'PLANTA PUERTO MONTT · DESPACHO REGIONAL',
      titleLine1: 'HORMIGÓN PREPARADO',
      titleLine2: 'EN PUERTO MONTT',
      titleHighlight: true,
      titleLine3: '& CAMIÓN MIXER',
      subtitle: 'Venta y despacho de hormigón premezclado H20, H25 y H30 con control de cono. Flota mixer y bombeo para radieres en Puerto Montt, Puerto Varas y Los Lagos.',
      btnPrimary: 'COTIZAR PRECIO M³',
      btnSecondary: 'VER RESISTENCIAS H20/H25/H30',
      target: 'servicios',
      quoteItem: 'Hormigón Preparado por m³',
      quoteType: 'Hormigón'
    },
    {
      id: 'slide-2',
      type: 'video',
      src: '/hero2.mp4',
      badge: 'LOGÍSTICA MIXER & BOMBEO EN OBRA',
      titleLine1: 'BOMBEO Y DESPACHO',
      titleLine2: 'DE HORMIGÓN',
      titleHighlight: true,
      titleLine3: 'DIRECTO A TERRENO',
      subtitle: 'Flota de camiones mixer de 8 m³ y servicio de bomba pluma para radieres, fundaciones y parcelaciones de difícil acceso con entregas cronometradas.',
      btnPrimary: 'SOLICITAR MIXER',
      btnSecondary: 'COBERTURA LOS LAGOS',
      target: 'cobertura',
      quoteItem: 'Camión Mixer y Bombeo',
      quoteType: 'Transporte'
    },
    {
      id: 'slide-3',
      type: 'video',
      src: '/hero3.mp4',
      badge: 'OBRAS CIVILES & RADIERES INDUSTRIALES',
      titleLine1: 'RADIERES Y PISOS',
      titleLine2: 'DE HORMIGÓN',
      titleHighlight: true,
      titleLine3: 'AFINADO HELICÓPTERO',
      subtitle: 'Hormigonado de radieres de alto tonelaje para galpones y viviendas. Nivelación láser, corte de juntas y certificación bajo norma NCh170.',
      btnPrimary: 'COTIZAR RADIER',
      btnSecondary: 'PREGUNTAS FRECUENTES',
      target: 'faq',
      quoteItem: 'Hormigón para Radier',
      quoteType: 'Obras'
    }
  ];

  // Auto-advance slides every 4.5 seconds continuously
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Restart active video when slide changes
  useEffect(() => {
    const activeVideo = videoRefs.current[currentSlide];
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch(() => {});
    }
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const active = slides[currentSlide];

  return (
    <section 
      id="inicio"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-start overflow-hidden bg-black select-none"
    >
      {/* Slides Background Containers */}
      {slides.map((slide, index) => {
        const isCurrent = currentSlide === index;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isCurrent ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
            }`}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              key={slide.src}
              src={slide.src}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover object-center"
            />

            {/* Industrus Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none" />
          </div>
        );
      })}

      {/* Hero Content (Left Aligned - Industrus Slider Typography) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-24">
        <div className="max-w-2xl text-left">
          
          {/* Subtitle / Caption Medium with Slide Counter */}
          <div 
            key={`badge-${currentSlide}`}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#fbbd08]/50 backdrop-blur-sm mb-4 animate-title-slide"
          >
            <span className="text-[10px] font-black text-slate-950 bg-[#fbbd08] px-1.5 py-0.2 rounded-full">
              0{currentSlide + 1} / 0{slides.length}
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#fbbd08]">
              {active.badge}
            </span>
          </div>

          {/* Caption Big (Changes smoothly with each slide change) */}
          <h1 
            key={`title-${currentSlide}`}
            className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white leading-[1.1] tracking-tight uppercase mb-4 animate-title-slide"
          >
            {active.titleLine1}<br />
            <span className="text-[#fbbd08]">{active.titleLine2}</span><br />
            {active.titleLine3}
          </h1>

          {/* Caption Small */}
          <p 
            key={`sub-${currentSlide}`}
            className="text-slate-200 text-xs sm:text-sm font-normal leading-relaxed mb-8 max-w-lg animate-title-slide"
          >
            {active.subtitle}
          </p>

          {/* Slider Buttons Group (Industrus Slider Buttons) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            
            {/* Primary Button */}
            <button
              onClick={() => onOpenQuote(active.quoteItem, active.quoteType)}
              aria-label={`Cotizar ${active.quoteItem || 'Hormigón'}`}
              className="flex items-center gap-2.5 bg-[#fbbd08] hover:bg-white text-slate-950 font-black text-xs sm:text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-md transition-all duration-200 touch-press group cursor-pointer"
            >
              <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-[#fbbd08] group-hover:bg-[#fbbd08] group-hover:text-black transition-colors">
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
              </span>
              <span>{active.btnPrimary}</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => scrollToSection(active.target)}
              className="flex items-center gap-2 bg-black/40 hover:bg-black/70 border border-slate-400/80 text-white font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-lg backdrop-blur-sm transition-all duration-200 touch-press cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-white" />
              <span>{active.btnSecondary}</span>
            </button>

          </div>

          {/* Bottom Line Tagline */}
          <div className="flex items-start gap-3 text-slate-400">
            <div className="w-8 h-[1px] bg-slate-500 mt-2 flex-shrink-0" />
            <div className="text-[10px] sm:text-[11px] font-medium tracking-[0.25em] uppercase leading-snug">
              PROYECTOS SÓLIDOS<br />
              PARA UN MEJOR SUR
            </div>
          </div>

        </div>
      </div>

      {/* Industrus Side Arrows (Left & Right Slick Navigation) */}
      <button
        onClick={prevSlide}
        aria-label="Diapositiva anterior"
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-16 rounded-r-2xl bg-[#fbbd08] hover:bg-slate-950 text-slate-950 hover:text-white items-center justify-center transition-all duration-200 shadow-lg z-30 touch-press cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 stroke-[3]" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Siguiente diapositiva"
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-16 rounded-l-2xl bg-[#fbbd08] hover:bg-slate-950 text-slate-950 hover:text-white items-center justify-center transition-all duration-200 shadow-lg z-30 touch-press cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 stroke-[3]" />
      </button>

      {/* Industrus Slider Bottom Bullets / Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Ir a diapositiva ${idx + 1}`}
            className={`transition-all duration-300 cursor-pointer ${
              currentSlide === idx
                ? 'w-7 h-2 bg-[#fbbd08] rounded-full'
                : 'w-2 h-2 bg-white/60 hover:bg-white rounded-full'
            }`}
          />
        ))}
      </div>

      {/* Dynamic Slide Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30 overflow-hidden pointer-events-none">
        <div 
          key={currentSlide}
          className="h-full bg-[#fbbd08] animate-hero-progress"
        />
      </div>

    </section>
  );
}
