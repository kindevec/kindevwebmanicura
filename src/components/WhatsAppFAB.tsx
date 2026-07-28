import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_BASE_URL } from '../data/mockData';

export const WhatsAppFAB: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMsg = encodeURIComponent(
    'Hola Velvet Rose ✨, quisiera consultar disponibilidad y reservar una cita.'
  );
  const waUrl = `${WHATSAPP_BASE_URL}?text=${defaultMsg}`;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-5 z-40 flex flex-col items-end pointer-events-auto">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-rose-hover border border-[#F43F5E]/20 text-xs text-[#2D2424] max-w-[220px] relative flex items-center justify-between gap-2"
          >
            <div>
              <p className="font-semibold text-[#2D2424]">¿Necesitas ayuda o cita?</p>
              <p className="text-[#2D2424]/70 text-[11px]">Respuesta inmediata por WhatsApp 💬</p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#2D2424]/40 hover:text-[#2D2424] p-1 rounded-full hover:bg-rose-50 transition-colors"
              aria-label="Cerrar notificación"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-[#F43F5E]/20" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative group bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 md:p-4 rounded-full shadow-lg shadow-emerald-500/30 flex items-center justify-center transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping opacity-75" />
        
        {/* Icon */}
        <MessageCircle className="w-6 h-6 fill-current relative z-10" />
        <span className="hidden md:inline-block max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 whitespace-nowrap text-sm font-medium pr-1">
          WhatsApp Directo
        </span>
      </motion.a>
    </div>
  );
};
