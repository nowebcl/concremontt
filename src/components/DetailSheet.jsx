import React, { useEffect } from 'react';
import { X, CheckCircle2, MessageSquare, ArrowRight, MessageCircle } from 'lucide-react';
import { companyData } from '../data/concremonttData';

export default function DetailSheet({ item, isOpen, onClose, onQuote }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const isService = !item.price && !!item.points;
  const title = item.title || item.name;
  const description = item.description || item.desc;
  const badge = item.categoryLabel || item.format;
  const itemImage = item.image || companyData.media.galponImg;

  const getProductWhatsAppOrder = () => {
    const phone = companyData.phoneRaw;
    const msg = `¡Hola Inversiones Concremontt! Me gustaría pedir el siguiente producto:\n\n• *Producto:* ${title}\n• *Precio:* ${item.price} ${item.priceUnit || 'c/u'}\n• *Formato:* ${item.format || ''}\n\n¿Tienen stock disponible y despacho en Puerto Montt?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end md:justify-center md:items-center p-0 md:p-4 animate-in fade-in duration-150">
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs"
        onClick={onClose}
      />

      {/* Sheet Modal Container (Clean Light) */}
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-t-2xl md:rounded-2xl p-5 sm:p-6 max-h-[88vh] overflow-y-auto no-scrollbar shadow-xl z-10 animate-in slide-in-from-bottom duration-200">
        
        {/* Mobile Drag Indicator */}
        <div className="md:hidden w-10 h-1 bg-slate-300 rounded-full mx-auto mb-3.5" />

        {/* Top Header & Close */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-[10px] font-bold uppercase tracking-wider inline-block mb-1.5">
              {badge}
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              {title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar detalles"
            className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Image Banner */}
        <div className="relative h-44 sm:h-52 rounded-xl overflow-hidden mb-3.5 bg-slate-100 border border-slate-200 flex items-center justify-center">
          <img
            src={itemImage}
            onError={(e) => { e.currentTarget.src = companyData.media.galponImgFallback; }}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Price Strip if product */}
        {item.price && (
          <div className="flex items-baseline justify-between p-3 mb-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Precio Unitario</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-slate-950">{item.price}</span>
                <span className="text-xs text-slate-500 font-bold">{item.priceUnit || 'c/u'}</span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300">
              Stock Inmediato
            </span>
          </div>
        )}

        {/* Description */}
        <div className="space-y-3 mb-4">
          <p className="text-slate-600 text-xs leading-relaxed">
            {description}
          </p>

          {item.specs && (
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Especificaciones Técnicas
              </h3>
              <div className="space-y-1.5">
                {item.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {item.useCase && (
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Aplicaciones y Formato
              </h3>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 space-y-1 text-xs text-slate-700">
                <div><span className="font-semibold text-slate-900">Uso:</span> {item.useCase}</div>
                {item.highlight && <div><span className="font-semibold text-slate-900">Destacado:</span> {item.highlight}</div>}
              </div>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-1">
          {item.price ? (
            <a
              href={getProductWhatsAppOrder()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all touch-press cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 stroke-[#25D366]" />
              <span>Pedir por WhatsApp</span>
            </a>
          ) : (
            <button
              onClick={() => {
                onClose();
                onQuote(title, isService ? 'Servicio' : 'Producto');
              }}
              className="w-full py-2.5 rounded-xl bg-[#fbbd08] hover:bg-[#eab308] text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all touch-press"
            >
              <MessageSquare className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Cotizar este {isService ? 'Servicio' : 'Producto'}</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          )}
        </div>

      </div>

    </div>
  );
}
