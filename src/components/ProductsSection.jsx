import React, { useState, useMemo } from 'react';
import { companyData } from '../data/concremonttData';
import { 
  Search, 
  X, 
  Filter, 
  LayoutGrid, 
  Layers, 
  Box, 
  ShieldCheck, 
  Columns, 
  CircleDot, 
  Boxes, 
  MessageCircle, 
  Eye, 
  ArrowRight, 
  SearchX, 
  PhoneCall, 
  RotateCcw 
} from 'lucide-react';

const iconMap = {
  LayoutGrid,
  Layers,
  Box,
  ShieldCheck,
  Columns,
  CircleDot
};

export default function ProductsSection({ onSelectDetail, onSelectQuote }) {
  const { products, productCategories } = companyData;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Compute product count per category
  const categoryCounts = useMemo(() => {
    const counts = { all: products.length };
    products.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [products]);

  // Filter products by category and search term
  const filteredProducts = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!term) return true;

      const nameMatch = product.name.toLowerCase().includes(term);
      const catMatch = (product.categoryName || '').toLowerCase().includes(term);
      const formatMatch = (product.format || '').toLowerCase().includes(term);
      const descMatch = (product.desc || '').toLowerCase().includes(term);
      const useMatch = (product.useCase || '').toLowerCase().includes(term);

      return nameMatch || catMatch || formatMatch || descMatch || useMatch;
    });
  }, [products, selectedCategory, searchTerm]);

  const activeCategoryObj = productCategories ? productCategories.find(c => c.id === selectedCategory) : null;
  const activeCategoryName = activeCategoryObj ? activeCategoryObj.name : 'Todos los Productos';

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('all');
  };

  const getWhatsAppLink = (product) => {
    const phone = companyData.phoneRaw;
    const msg = `¡Hola Inversiones Concremontt! Me gustaría pedir el siguiente producto:\n\n• *Producto:* ${product.name}\n• *Precio:* ${product.price} ${product.priceUnit || 'c/u'}\n• *Medidas:* ${product.format}\n\n¿Tienen stock disponible y despacho a terreno en Puerto Montt / Región de Los Lagos?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="productos" className="py-12 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Header (Ice Austral style: centered, badge, product count & decorative divider) */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-[11px] font-black tracking-wider uppercase">
            <span>Planta de Prefabricados en Puerto Montt</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
            Catálogo de Productos y Prefabricados
          </h2>

          <p className="text-slate-600 font-bold text-xs sm:text-sm">
            {products.length} productos con precio unitario y entrega inmediata en Puerto Montt
          </p>

          {/* Ice Austral subtle icon divider */}
          <div className="flex items-center justify-center gap-3 text-amber-500 pt-1">
            <span className="w-12 sm:w-16 h-[1.5px] bg-amber-200"></span>
            <Boxes className="w-4 h-4 text-[#d97706]" />
            <span className="w-12 sm:w-16 h-[1.5px] bg-amber-200"></span>
          </div>
        </div>

        {/* Prominent Search Bar (Ice Austral Search Input) */}
        <div className="max-w-2xl mx-auto w-full">
          <div className="relative shadow-xs rounded-2xl">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#b45309] absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="product-search-input"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar productos (ej. Pastelón, Solerilla, Canaleta, Rejilla)..."
              aria-label="Buscar productos técnicos y prefabricados"
              className="w-full pl-10 sm:pl-12 pr-10 py-3 sm:py-3.5 bg-white border border-slate-200 focus:border-[#b45309] rounded-2xl text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-3 focus:ring-amber-100 transition-all placeholder:text-slate-400 shadow-xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                aria-label="Limpiar búsqueda de productos"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Category Horizontal Scroll (Ice Austral Mobile Category Strip) */}
        {productCategories && (
          <div className="lg:hidden space-y-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 px-1">
              <span className="flex items-center gap-1.5 text-slate-900 font-extrabold">
                <Filter className="w-3.5 h-3.5 text-[#d97706]" />
                Categorías
              </span>
              <span className="flex items-center gap-1 text-[#d97706] font-extrabold animate-pulse">
                Desliza 👉
              </span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 no-scrollbar">
              {productCategories.map((cat) => {
                const IconComponent = iconMap[cat.icon] || LayoutGrid;
                const isSelected = selectedCategory === cat.id;
                const count = categoryCounts[cat.id] || 0;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-black whitespace-nowrap transition-all flex-shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-[#0f172a] text-white shadow-xs scale-[0.99]'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isSelected ? 'text-[#fbbd08]' : 'text-slate-500'}`} />
                    <span>{cat.name}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Main Grid: Desktop Left Sidebar + Right Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Left Sidebar (Ice Austral Categories Sidebar) */}
          {productCategories && (
            <div className="hidden lg:block lg:col-span-4 xl:col-span-3.5 space-y-4 sticky top-24">
              <div className="bg-white border border-slate-200/90 rounded-[24px] p-5 shadow-xs">
                <div className="flex items-center gap-2.5 mb-4 text-slate-900 font-extrabold text-base border-b border-slate-100 pb-3">
                  <Filter className="w-5 h-5 text-[#d97706]" />
                  <span>Categorías de Planta</span>
                </div>

                <div className="space-y-1.5">
                  {productCategories.map((cat) => {
                    const IconComponent = iconMap[cat.icon] || LayoutGrid;
                    const isSelected = selectedCategory === cat.id;
                    const count = categoryCounts[cat.id] || 0;

                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-[#0f172a] text-white shadow-md border border-slate-800 scale-[1.01]'
                            : 'bg-slate-50/70 text-slate-700 hover:bg-slate-100 hover:text-slate-950 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className={`p-1.5 rounded-lg flex items-center justify-center ${
                            isSelected ? 'bg-white/15 text-[#fbbd08]' : 'bg-white text-slate-500 border border-slate-200 shadow-2xs'
                          }`}>
                            <IconComponent className="w-4 h-4 stroke-[2.2]" />
                          </div>
                          <span className="text-left font-black truncate">{cat.name}</span>
                        </div>

                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-black ml-2 ${
                            isSelected
                              ? 'bg-white text-[#0f172a]'
                              : 'bg-white text-slate-500 border border-slate-200'
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Technical Quotation & Logistics Help Card */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 rounded-[22px] p-4 text-left space-y-3">
                <div className="flex items-center gap-2 text-[#d97706] font-black text-xs uppercase tracking-wider">
                  <PhoneCall className="w-4 h-4" />
                  <span>Despacho a Faena</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  ¿Necesitas cubicación técnica por pallet o despacho con camión pluma en Puerto Montt y alrededores?
                </p>
                <a
                  href={`https://wa.me/${companyData.phoneRaw}?text=${encodeURIComponent("¡Hola Concremontt! Necesito asesoría técnica y cotización de despacho a obra.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0f172a] hover:bg-slate-800 text-white font-black text-xs py-2.5 px-3 rounded-xl transition-all shadow-xs"
                >
                  <span>Hablar con Especialista</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#fbbd08]" />
                </a>
              </div>
            </div>
          )}

          {/* Right Area: Results Counter + Product Grid or Empty State */}
          <div className="lg:col-span-8 xl:col-span-8.5 space-y-4">
            
            {/* Filter Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white border border-slate-200/90 rounded-2xl px-4 py-3 shadow-2xs">
              <div className="text-xs sm:text-sm font-bold text-slate-700">
                Mostrando <span className="font-black text-slate-950">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'producto' : 'productos'}
                {selectedCategory !== 'all' && (
                  <span className="text-slate-500 font-medium"> en <span className="text-amber-700 font-bold">{activeCategoryName}</span></span>
                )}
                {searchTerm && (
                  <span className="text-slate-500 font-medium"> para "<span className="text-slate-900 font-bold">{searchTerm}</span>"</span>
                )}
              </div>

              {(selectedCategory !== 'all' || searchTerm.trim() !== '') && (
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#d97706] hover:text-amber-800 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restablecer filtros</span>
                </button>
              )}
            </div>

            {/* Product Cards Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-[22px] border border-slate-200/90 p-3.5 sm:p-4 text-center shadow-xs hover:shadow-md hover:border-amber-300 transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Product Thumbnail with Format Badge & Zoom */}
                      <div className="relative w-full aspect-[4/3] bg-slate-100 rounded-[16px] overflow-hidden mb-3 flex items-center justify-center">
                        <img
                          src={product.image || companyData.media.galponImg}
                          onError={(e) => { e.currentTarget.src = companyData.media.galponImgFallback; }}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        
                        {/* Top floating badge */}
                        <div className="absolute top-2 left-2 z-10">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/95 backdrop-blur-xs text-slate-800 shadow-xs border border-slate-200/80">
                            {product.badge || product.categoryName}
                          </span>
                        </div>

                        {/* Quick View Overlay Button */}
                        <button
                          onClick={() => onSelectDetail(product)}
                          aria-label={`Ver especificaciones de ${product.name}`}
                          className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                        >
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-slate-900 text-xs font-black shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                            <Eye className="w-3.5 h-3.5 text-[#d97706]" />
                            <span>Ver Ficha</span>
                          </span>
                        </button>
                      </div>

                      {/* Content */}
                      <div className="text-left space-y-1">
                        <span className="text-[10px] font-black text-amber-700 uppercase tracking-wider block">
                          {product.format}
                        </span>
                        <h3 className="font-black text-slate-900 text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-[#d97706] transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed pt-0.5">
                          {product.desc}
                        </p>
                        
                        {/* Application / Use-case badge */}
                        <div className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded-xl border border-slate-100 mt-2">
                          <span className="font-black text-slate-800">Uso:</span> {product.useCase}
                        </div>

                        {/* Official Price Display */}
                        <div className="flex items-baseline justify-between pt-2.5 mt-2.5 border-t border-slate-100">
                          <div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                              Precio Unitario
                            </span>
                            <div className="flex items-baseline gap-1">
                              <span className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                                {product.price}
                              </span>
                              <span className="text-xs text-slate-500 font-bold">
                                {product.priceUnit || 'c/u'}
                              </span>
                            </div>
                          </div>
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                            Entrega Inmediata
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Actions: Pedir por WhatsApp */}
                    <div className="pt-3 border-t border-slate-100 mt-3">
                      <a
                        href={getWhatsAppLink(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-xs sm:text-sm py-2.5 px-3 rounded-xl transition-all shadow-xs hover:shadow-md touch-press cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4 fill-slate-950 stroke-[#25D366]" />
                        <span>Pedir por WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty Search State */
              <div className="bg-white rounded-[24px] border border-slate-200 p-8 sm:p-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-[#d97706] mx-auto flex items-center justify-center border border-amber-200">
                  <SearchX className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-black text-slate-900">
                    No encontramos productos
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                    {searchTerm 
                      ? `No hay coincidencias para "${searchTerm}" en ${activeCategoryName.toLowerCase()}.` 
                      : `No hay productos registrados en esta categoría.`}
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 bg-[#0f172a] hover:bg-slate-800 text-white font-black text-xs px-5 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#fbbd08]" />
                  <span>Ver todos los productos</span>
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

