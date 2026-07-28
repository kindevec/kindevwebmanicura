import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar as CalendarIcon, Clock, User, Phone, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES, WHATSAPP_BASE_URL } from '../data/mockData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceId?: string;
  preSelectedNote?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedServiceId,
  preSelectedNote,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:00 AM');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preSelectedServiceId) {
      setSelectedServiceId(preSelectedServiceId);
    } else if (SERVICES.length > 0) {
      setSelectedServiceId(SERVICES[0].id);
    }
  }, [preSelectedServiceId, isOpen]);

  useEffect(() => {
    if (preSelectedNote) {
      setNotes(preSelectedNote);
    }
  }, [preSelectedNote]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setDate(dateStr);
  }, []);

  const selectedService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const timeSlots = [
    '09:30 AM',
    '11:00 AM',
    '01:00 PM',
    '03:00 PM',
    '04:30 PM',
    '06:00 PM',
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F43F5E', '#FDA4AF', '#FAF5F0', '#E2AFAF'],
      });
    } catch {
      // ignore
    }

    setIsSubmitted(true);

    // Build WhatsApp message
    const formattedDate = date ? new Date(date).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' }) : date;
    
    const message = `✨ *SOLICITUD DE RESERVA - VELVET ROSE* ✨\n\n` +
      `👤 *Cliente:* ${name.trim() || 'Cliente VIP'}\n` +
      `📱 *Teléfono:* ${phone.trim() || 'No especificado'}\n` +
      `💅 *Servicio:* ${selectedService.name} ($${selectedService.price} USD)\n` +
      `⏱️ *Duración est.:* ${selectedService.duration}\n` +
      `📅 *Fecha solicitada:* ${formattedDate}\n` +
      `⏰ *Hora solicitada:* ${time}\n` +
      (notes.trim() ? `📝 *Notas/Diseño:* ${notes.trim()}\n` : '') +
      `\nQuedo a la espera de la confirmación de mi cita. ¡Muchas gracias! 💕`;

    const waLink = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(waLink, '_blank');
      onClose();
      setIsSubmitted(false);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-[#FAF5F0] rounded-3xl shadow-2xl overflow-hidden border border-[#E2AFAF]/40 z-10 my-auto"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#F43F5E] to-[#FDA4AF] p-6 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-5 h-5 text-white/90" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/90">
                Reserva tu Momento Velvet
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Agendar Cita de Uñas
            </h3>
            <p className="text-xs text-white/80 mt-1 font-light">
              Selecciona tu servicio y horario preferido. Se abrirá WhatsApp para confirmar tu cupo.
            </p>
          </div>

          {/* Form Content */}
          <form onSubmit={handleBookingSubmit} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
            {/* Service Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D2424] mb-2">
                1. Elige tu Servicio o Tratamiento
              </label>
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full bg-white border border-[#E2AFAF]/50 rounded-2xl p-3 text-sm text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#F43F5E] shadow-sm font-medium"
                required
              >
                {SERVICES.map((srv) => (
                  <option key={srv.id} value={srv.id}>
                    {srv.name} — ${srv.price} USD ({srv.duration})
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Time Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D2424] mb-2">
                  2. Fecha Deseada
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-white border border-[#E2AFAF]/50 rounded-2xl p-3 text-sm text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#F43F5E] shadow-sm font-medium"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D2424] mb-2">
                  3. Horario Preferido
                </label>
                <div className="relative">
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-white border border-[#E2AFAF]/50 rounded-2xl p-3 text-sm text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#F43F5E] shadow-sm font-medium"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Client Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D2424] mb-2">
                  Tu Nombre Completo
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#2D2424]/40 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Sofia Larrea"
                    className="w-full pl-10 pr-3 py-3 bg-white border border-[#E2AFAF]/50 rounded-2xl text-sm text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#F43F5E] shadow-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D2424] mb-2">
                  Teléfono / WhatsApp
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#2D2424]/40 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej. +593 99 123 4567"
                    className="w-full pl-10 pr-3 py-3 bg-white border border-[#E2AFAF]/50 rounded-2xl text-sm text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#F43F5E] shadow-sm"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Notes or Design Details */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D2424] mb-2">
                Detalles del Diseño o Comentarios (Opcional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ej. Me gustaría un diseño francés con toques rose gold o efecto mármol cuarzo..."
                rows={2}
                className="w-full bg-white border border-[#E2AFAF]/50 rounded-2xl p-3 text-sm text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#F43F5E] shadow-sm resize-none"
              />
            </div>

            {/* Summary Card */}
            <div className="bg-rose-50/80 rounded-2xl p-4 border border-[#F43F5E]/20 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F43F5E] block">
                  Resumen de Inversión
                </span>
                <span className="text-sm font-semibold text-[#2D2424]">
                  {selectedService.name}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold font-serif text-[#F43F5E]">
                  ${selectedService.price} <span className="text-xs font-normal text-[#2D2424]/60">USD</span>
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full bg-[#F43F5E] hover:bg-[#E11D48] text-white py-3.5 rounded-2xl text-sm font-semibold shadow-lg shadow-rose-500/25 flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-75"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle2 className="w-5 h-5 animate-bounce" />
                  <span>Abriendo WhatsApp...</span>
                </>
              ) : (
                <>
                  <MessageCircle className="w-5 h-5" />
                  <span>Confirmar Reserva por WhatsApp</span>
                </>
              )}
            </button>

            <p className="text-[11px] text-center text-[#2D2424]/60 font-light">
              🔒 No solicitamos pagos por adelantado. La cita se confirma de inmediato vía chat.
            </p>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
