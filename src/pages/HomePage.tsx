import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, Calendar, ArrowRight, Star, ShieldCheck, Heart, Award, CheckCircle2 } from 'lucide-react';
import { SERVICES, GALLERY_ITEMS, TESTIMONIALS, WHATSAPP_BASE_URL } from '../data/mockData';

interface HomePageProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenDesign: (title: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking, onOpenDesign }) => {
  const popularServices = SERVICES.filter((s) => s.popular).slice(0, 4);
  const featuredGallery = GALLERY_ITEMS.slice(0, 4);

  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-28 overflow-hidden bg-rose-gold-gradient">
        {/* Soft Background Accents */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#F43F5E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FDA4AF]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text & CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#E2AFAF]/40 shadow-sm text-xs font-semibold text-[#F43F5E]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Estudio de Manicura Rusa & Nail Art de Alta Gama</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D2424] leading-[1.15]">
                Tus Manos Merecen <br className="hidden sm:block" />
                <span className="font-script text-[#F43F5E] text-5xl sm:text-6xl lg:text-7xl block mt-1 font-normal">
                  lo Mejor
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#2D2424]/80 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                Especialistas en manicura rusa sin imperfecciones, salud de la uña natural, extensiones Soft Gel y diseños hechos a mano alzada. Sumérgete en una experiencia de lujo y bienestar.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full sm:w-auto bg-[#F43F5E] hover:bg-[#E11D48] text-white px-8 py-4 rounded-full text-base font-semibold shadow-xl shadow-rose-500/25 hover:shadow-rose-500/35 transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Reserva tu Cita</span>
                </button>

                <Link
                  to="/servicios"
                  className="w-full sm:w-auto bg-white/90 hover:bg-white text-[#2D2424] border border-[#E2AFAF]/60 px-7 py-4 rounded-full text-base font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Explorar Servicios</span>
                  <ArrowRight className="w-4 h-4 text-[#F43F5E]" />
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#E2AFAF]/30 max-w-md mx-auto lg:mx-0 text-left">
                <div>
                  <p className="text-xl font-bold font-serif text-[#F43F5E]">100%</p>
                  <p className="text-xs text-[#2D2424]/70">Esterilización Médica</p>
                </div>
                <div>
                  <p className="text-xl font-bold font-serif text-[#F43F5E]">21+ Días</p>
                  <p className="text-xs text-[#2D2424]/70">Duración Impecable</p>
                </div>
                <div>
                  <p className="text-xl font-bold font-serif text-[#F43F5E]">4.9 ★</p>
                  <p className="text-xs text-[#2D2424]/70">Clientas Felices</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Visual Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative Rose Gold Frame */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#F43F5E]/30 to-[#FDA4AF]/30 blur-xl opacity-70" />
                
                <div className="relative rounded-3xl overflow-hidden border-2 border-white shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop"
                    alt="Manicura Rusa Velvet Rose"
                    className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-rose-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-[#F43F5E] shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#2D2424]">Especialistas en Técnica Rusa</p>
                      <p className="text-[11px] text-[#2D2424]/70">Limpieza perfecta de cutícula al seco</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. POPULAR SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F43F5E]">
            Nuestros Favoritos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2424]">
            Servicios Más Solicitados
          </h2>
          <p className="text-sm text-[#2D2424]/70">
            Diseñados para devolverle la elegancia, vitalidad y brillo a tus manos y pies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-rose-soft hover:shadow-rose-hover transition-all duration-300 border border-[#E2AFAF]/30 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#F43F5E] shadow-sm">
                    ${service.price} USD
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full text-[11px]">
                    ⏱️ {service.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F43F5E] bg-rose-50 px-2.5 py-1 rounded-md inline-block">
                    {service.categoryLabel}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#2D2424] leading-snug group-hover:text-[#F43F5E] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#2D2424]/75 line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenBooking(service.id)}
                  className="w-full bg-rose-50 hover:bg-[#F43F5E] text-[#F43F5E] hover:text-white py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reservar este Servicio</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F43F5E] hover:text-[#E11D48] transition-colors group"
          >
            <span>Ver Catálogo Completo de Servicios</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 3. INSTAGRAM FEED / FEATURED GALLERY */}
      <section className="bg-rose-gold-gradient py-16 border-y border-[#E2AFAF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#F43F5E]">
                Portafolio de Arte
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#2D2424]">
                Diseños Destacados de la Galería
              </h2>
            </div>
            <Link
              to="/galeria"
              className="bg-white px-5 py-2.5 rounded-full text-xs font-semibold text-[#2D2424] border border-[#E2AFAF]/50 shadow-sm hover:shadow-md transition-all"
            >
              Ver Galería Completa
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenDesign(item.title)}
                className="relative rounded-2xl overflow-hidden aspect-square group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
                  <span className="text-[10px] uppercase font-bold text-[#FDA4AF]">
                    {item.categoryLabel}
                  </span>
                  <p className="font-serif text-sm font-bold">{item.title}</p>
                  <p className="text-[11px] text-white/80 mt-1">Ver detalles & Reservar →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE VELVET ROSE (VALUES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-[#E2AFAF]/30 shadow-rose-soft text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#F43F5E] flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2D2424]">
              Bioseguridad & Autoclave
            </h3>
            <p className="text-xs text-[#2D2424]/70 leading-relaxed">
              Herramientas 100% esterilizadas en autoclave médico de grado hospitalario. Kits desechables individuales para cada clienta.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#E2AFAF]/30 shadow-rose-soft text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#F43F5E] flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2D2424]">
              Técnica Rusa de Precisión
            </h3>
            <p className="text-xs text-[#2D2424]/70 leading-relaxed">
              Uso de torno y fresas diamantadas para una preparación pulida y limpia que retrasa la visibilidad del crecimiento de la uña.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#E2AFAF]/30 shadow-rose-soft text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#F43F5E] flex items-center justify-center mx-auto">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2D2424]">
              Productos Hipoalergénicos
            </h3>
            <p className="text-xs text-[#2D2424]/70 leading-relaxed">
              Trabajamos únicamente con marcas internacionales líderes libres de componentes tóxicos (9-Free & 10-Free).
            </p>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F43F5E]">
            Opiniones de nuestras clientas
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#2D2424]">
            Lo que Dicen de Velvet Rose
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-3xl border border-[#E2AFAF]/30 shadow-rose-soft flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-[#2D2424]/80 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-stone-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-9 h-9 rounded-full object-cover border border-rose-200"
                />
                <div>
                  <p className="text-xs font-bold text-[#2D2424]">{t.name}</p>
                  <p className="text-[10px] text-[#F43F5E]">{t.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WHATSAPP CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#2D2424] to-[#423232] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FDA4AF]">
              ¿Lista para lucir manos espectaculares?
            </span>
            <h3 className="font-serif text-3xl font-bold">
              Reserva tu Cita Fácilmente por WhatsApp
            </h3>
            <p className="text-xs text-stone-300 font-light">
              Respuestas rápidas, asesoría personalizada de diseños y horarios flexibles.
            </p>
          </div>

          <a
            href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
              'Hola Velvet Rose ✨, quisiera reservar una cita para esta semana.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-sm font-bold shadow-lg shadow-emerald-500/30 flex items-center gap-2 transition-all transform hover:scale-105 shrink-0"
          >
            <span>Enviar mensaje por WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};
