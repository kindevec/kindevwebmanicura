import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Calendar, Sparkles, MessageCircle, Gift, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { STUDIO_INFO, WHATSAPP_BASE_URL, FACEBOOK_URL, INSTAGRAM_URL } from '../data/mockData';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Manicura Rusa + Gel');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 70,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#F43F5E', '#FDA4AF', '#FAF5F0'],
      });
    } catch {
      // ignore
    }

    setSent(true);

    const fullMsg = `Hola Velvet Rose ✨, mi nombre es ${name}. Quisiera consultar por el servicio *${service}* (Aprovechando la promo de primera vez).\n📱 Teléfono: ${phone}\n💬 Mensaje: ${message}`;
    const waUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(fullMsg)}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
      setSent(false);
    }, 1000);
  };

  const directWaUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    'Hola Velvet Rose ✨, quisiera consultar disponibilidad de citas.'
  )}`;

  return (
    <div className="pt-24 md:pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#F43F5E] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
          Ubicación & Reservas
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#2D2424]">
          Contacto & Citas
        </h1>
        <p className="text-sm text-[#2D2424]/75 font-light leading-relaxed">
          Estamos listas para atenderte. Puedes agendar directamente por formulario o enviarnos un mensaje instantáneo a WhatsApp.
        </p>
      </div>

      {/* Discount Banner for 1st Time Clients */}
      <div className="bg-gradient-to-r from-[#F43F5E] to-[#FDA4AF] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center shrink-0">
            <Gift className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest bg-white/20 px-2.5 py-0.5 rounded-full font-bold">
              Promoción de Bienvenida
            </span>
            <h3 className="font-serif text-2xl font-bold mt-1">
              15% OFF en tu Primera Visita
            </h3>
            <p className="text-xs text-white/90 font-light">
              Menciona el código <strong className="font-semibold underline">#VELVETFIRST</strong> al reservar por WhatsApp.
            </p>
          </div>
        </div>

        <button
          onClick={onOpenBooking}
          className="bg-white hover:bg-rose-50 text-[#F43F5E] px-7 py-3 rounded-full text-xs font-bold shadow-md transition-all shrink-0"
        >
          Aprovechar Descuento
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Col: Contact Form */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#E2AFAF]/40 shadow-rose-soft space-y-6">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold text-[#2D2424]">
              Envíanos una Consulta
            </h3>
            <p className="text-xs text-[#2D2424]/70">
              Completa el formulario y te responderemos por WhatsApp de inmediato.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D2424] mb-1.5">
                Nombre y Apellido
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Camila Argüello"
                className="w-full bg-[#FAF5F0] border border-[#E2AFAF]/40 rounded-2xl p-3 text-sm text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#F43F5E]"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D2424] mb-1.5">
                  WhatsApp / Celular
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ej. +593 99 123 4567"
                  className="w-full bg-[#FAF5F0] border border-[#E2AFAF]/40 rounded-2xl p-3 text-sm text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#F43F5E]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D2424] mb-1.5">
                  Servicio de Interés
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#FAF5F0] border border-[#E2AFAF]/40 rounded-2xl p-3 text-sm text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#F43F5E]"
                >
                  <option value="Manicura Rusa + Gel">Manicura Rusa + Gel ($32)</option>
                  <option value="Extensiones Soft Gel">Extensiones Soft Gel ($48)</option>
                  <option value="Nail Art Velvet Rose">Nail Art Custom ($42)</option>
                  <option value="Pedicura Spa Rose">Pedicura Spa Rose ($38)</option>
                  <option value="Kapping Gel">Kapping Rubber Base ($28)</option>
                  <option value="Otro Servicio">Consulta General</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D2424] mb-1.5">
                Mensaje o Pregunta
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe aquí si tienes dudas sobre alergias, horarios especiales o cotización de nail art..."
                rows={3}
                className="w-full bg-[#FAF5F0] border border-[#E2AFAF]/40 rounded-2xl p-3 text-sm text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#F43F5E] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="w-full bg-[#F43F5E] hover:bg-[#E11D48] text-white py-3.5 rounded-2xl text-sm font-semibold shadow-lg shadow-rose-500/20 flex items-center justify-center gap-2 transition-all"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="w-5 h-5 animate-spin" />
                  <span>Redirigiendo a WhatsApp...</span>
                </>
              ) : (
                <>
                  <MessageCircle className="w-5 h-5" />
                  <span>Enviar Consulta por WhatsApp</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Col: Studio Info & Location */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-[#E2AFAF]/40 shadow-rose-soft space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#2D2424]">
              Información del Estudio
            </h3>

            <div className="space-y-4 text-xs text-[#2D2424]/80">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-rose-50 rounded-xl text-[#F43F5E]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm text-[#2D2424]">Dirección</p>
                  <p className="mt-0.5">{STUDIO_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-rose-50 rounded-xl text-[#F43F5E]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm text-[#2D2424]">Teléfono & WhatsApp</p>
                  <a
                    href={directWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F43F5E] font-medium hover:underline block mt-0.5"
                  >
                    {STUDIO_INFO.phone} (Clic para chatear)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-rose-50 rounded-xl text-[#F43F5E]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm text-[#2D2424]">Horarios de Atención</p>
                  {STUDIO_INFO.hours.map((h, i) => (
                    <div key={i} className="mt-1">
                      <span className="font-medium text-[#2D2424]">{h.days}:</span>{' '}
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Cards */}
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-[#2D2424]">Síguenos en Redes:</span>
              <div className="flex items-center space-x-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-rose-50 text-[#F43F5E] rounded-full font-medium hover:bg-rose-100 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-rose-50 text-[#F43F5E] rounded-full font-medium hover:bg-rose-100 transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map Visual Mockup */}
          <div className="bg-white p-4 rounded-3xl border border-[#E2AFAF]/40 shadow-rose-soft relative overflow-hidden group">
            <div className="h-48 rounded-2xl overflow-hidden bg-stone-100 relative">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
                alt="Ambiente Velvet Rose"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center p-4">
                <MapPin className="w-8 h-8 text-[#F43F5E] animate-bounce" />
                <p className="font-serif font-bold text-sm mt-1">Velvet Rose Estudio</p>
                <p className="text-[11px] text-white/80">Estacionamiento privado disponible</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
