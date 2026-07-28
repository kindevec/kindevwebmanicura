import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Eye, Calendar } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';

interface GalleryPageProps {
  onOpenLightbox: (item: GalleryItem) => void;
  onBookDesign: (title: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onOpenLightbox,
  onBookDesign,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos los Diseños' },
    { id: 'clasico', label: 'Clásico Elegante' },
    { id: 'nail-art', label: 'Nail Art' },
    { id: 'extensiones', label: 'Extensiones' },
    { id: 'temporada', label: 'Diseños de Temporada' },
  ];

  const filteredItems =
    activeCategory === 'todos'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-24 md:pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#F43F5E] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
          Inspiración & Tendencias
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#2D2424]">
          Galería de Diseños Velvet
        </h1>
        <p className="text-sm text-[#2D2424]/75 font-light leading-relaxed">
          Explora nuestro portafolio de creaciones reales hechas a mano alzada. Haz clic en cualquiera para ampliarlo o reservarlo.
        </p>
      </div>

      {/* Categories Filter */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-[#F43F5E] text-white shadow-md shadow-rose-500/20'
                : 'bg-white text-[#2D2424]/70 border border-[#E2AFAF]/40 hover:bg-rose-50 hover:text-[#F43F5E]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white rounded-3xl overflow-hidden border border-[#E2AFAF]/30 shadow-rose-soft hover:shadow-rose-hover transition-all duration-300 flex flex-col justify-between group"
          >
            {/* Image Container with Hover Overlay */}
            <div
              onClick={() => onOpenLightbox(item)}
              className="relative aspect-square overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Badge */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white p-4">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                  <Eye className="w-6 h-6" />
                </div>
              </div>

              {/* Top Tag */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#F43F5E] shadow-sm">
                {item.categoryLabel}
              </div>
            </div>

            {/* Info Footer */}
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-base font-bold text-[#2D2424] truncate">
                  {item.title}
                </h3>
                <span className="flex items-center gap-1 text-xs text-[#F43F5E] font-medium shrink-0 ml-2">
                  <Heart className="w-3.5 h-3.5 fill-[#F43F5E]" />
                  <span>{item.likes}</span>
                </span>
              </div>

              <p className="text-xs text-[#2D2424]/70 line-clamp-2 leading-relaxed">
                {item.description}
              </p>

              <button
                onClick={() => onBookDesign(item.title)}
                className="w-full bg-rose-50 hover:bg-[#F43F5E] text-[#F43F5E] hover:text-white py-2 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>¿Te gusta? Resérvalo</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
