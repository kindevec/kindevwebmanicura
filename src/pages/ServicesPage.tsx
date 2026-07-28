import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Sparkles, CheckCircle2, Heart, Gift } from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { Service } from '../types';

interface ServicesPageProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos los Servicios' },
    { id: 'manicura', label: 'Manicura' },
    { id: 'extensiones', label: 'Extensiones' },
    { id: 'nail-art', label: 'Nail Art' },
    { id: 'pedicura', label: 'Pedicura' },
    { id: 'especiales', label: 'Combos Especiales' },
  ];

  const filteredServices =
    activeTab === 'todos'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeTab);

  return (
    <div className="pt-24 md:pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#F43F5E] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
          Experiencias & Tratamientos
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#2D2424]">
          Catálogo Exclusivo de Servicios
        </h1>
        <p className="text-sm text-[#2D2424]/75 font-light leading-relaxed">
          Cada procedimiento incluye diagnóstico de salud ungueal, productos de grado profesional y técnica de acabado impecable.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
              activeTab === cat.id
                ? 'bg-[#F43F5E] text-white shadow-md shadow-rose-500/20'
                : 'bg-white text-[#2D2424]/70 border border-[#E2AFAF]/40 hover:bg-rose-50 hover:text-[#F43F5E]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service: Service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white rounded-3xl overflow-hidden border border-[#E2AFAF]/30 shadow-rose-soft hover:shadow-rose-hover transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Image & Price */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-sm font-bold text-[#F43F5E] shadow-sm">
                  ${service.price} USD
                </div>
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#FDA4AF]" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Service Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F43F5E] bg-rose-50 px-2.5 py-1 rounded-md">
                    {service.categoryLabel}
                  </span>
                  {service.popular && (
                    <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Popular
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl font-bold text-[#2D2424] leading-snug group-hover:text-[#F43F5E] transition-colors">
                  {service.name}
                </h3>

                <p className="text-xs text-[#2D2424]/75 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 pt-2 border-t border-stone-100">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#2D2424]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F43F5E] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 pt-0">
              <button
                onClick={() => onOpenBooking(service.id)}
                className="w-full bg-[#F43F5E] hover:bg-[#E11D48] text-white py-3 rounded-2xl text-xs font-semibold shadow-md shadow-rose-500/20 flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                <span>Reservar este Servicio</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Special Gift / Combo Banner */}
      <div className="bg-gradient-to-r from-[#FAF5F0] via-[#FDF2F4] to-[#FCE7F3] rounded-3xl p-8 border border-[#E2AFAF]/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#F43F5E] text-white flex items-center justify-center shrink-0 shadow-md">
            <Gift className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-[#2D2424]">
              ¿Buscas un regalo especial?
            </h4>
            <p className="text-xs text-[#2D2424]/70">
              Pregunta por nuestros Gift Cards personalizados Velvet Rose por WhatsApp.
            </p>
          </div>
        </div>

        <button
          onClick={() => onOpenBooking('pack-duo-rose')}
          className="bg-[#2D2424] hover:bg-black text-white px-6 py-3 rounded-full text-xs font-semibold whitespace-nowrap transition-colors"
        >
          Solicitar Gift Card
        </button>
      </div>
    </div>
  );
};
