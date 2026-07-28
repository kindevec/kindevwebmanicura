import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Sparkles, MessageCircle, Calendar } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onBookDesign: (designTitle: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onBookDesign,
}) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState<number>(item?.likes || 0);

  if (!item) return null;

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikesCount((prev) => prev + 1);
    } else {
      setLiked(false);
      setLikesCount((prev) => prev - 1);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-[#FAF5F0] rounded-3xl shadow-2xl overflow-hidden border border-white/20 z-10 my-auto flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Image View */}
          <div className="md:w-3/5 bg-black relative flex items-center justify-center min-h-[300px] md:min-h-[480px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover max-h-[70vh] md:max-h-[90vh]"
            />
            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
              <span className="bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/10 font-medium">
                {item.categoryLabel}
              </span>
            </div>
          </div>

          {/* Right: Info & Actions */}
          <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-[#FAF5F0]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#F43F5E] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Nail Art exclusivo
                </span>

                <button
                  onClick={handleLike}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    liked
                      ? 'bg-rose-100 text-[#F43F5E]'
                      : 'bg-stone-200/60 text-[#2D2424]/70 hover:bg-rose-50 hover:text-[#F43F5E]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${liked ? 'fill-[#F43F5E] text-[#F43F5E]' : ''}`} />
                  <span>{likesCount}</span>
                </button>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#2D2424]">
                {item.title}
              </h3>

              <p className="text-xs text-[#2D2424]/80 leading-relaxed">
                {item.description}
              </p>

              {item.artistNote && (
                <div className="bg-rose-50/80 p-4 rounded-2xl border border-[#F43F5E]/20 space-y-1">
                  <p className="text-[11px] font-semibold text-[#F43F5E] uppercase tracking-wider">
                    Nota de la Artista:
                  </p>
                  <p className="text-xs text-[#2D2424]/90 italic font-serif">
                    "{item.artistNote}"
                  </p>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="pt-6 space-y-3">
              <button
                onClick={() => {
                  onClose();
                  onBookDesign(item.title);
                }}
                className="w-full bg-[#F43F5E] hover:bg-[#E11D48] text-white py-3 rounded-2xl text-sm font-semibold shadow-md shadow-rose-500/20 flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                <span>¿Te gusta? Reserva este Diseño</span>
              </button>

              <p className="text-[10px] text-center text-[#2D2424]/50">
                Pide este diseño exacto en tu próxima sesión de uñas.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
