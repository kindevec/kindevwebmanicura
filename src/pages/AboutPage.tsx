import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Award, ShieldCheck, Heart, CheckCircle2, Star } from 'lucide-react';
import { ARTIST_PROFILE, BRANDS } from '../data/mockData';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* 1. HERO ARTIST PROFILE */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#F43F5E]/30 to-[#FDA4AF]/30 blur-2xl opacity-70" />
            <div className="relative rounded-3xl overflow-hidden border-2 border-white shadow-2xl">
              <img
                src={ARTIST_PROFILE.image}
                alt={ARTIST_PROFILE.name}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-rose-100 shadow-lg text-center">
                <p className="font-serif text-lg font-bold text-[#2D2424]">
                  {ARTIST_PROFILE.name}
                </p>
                <p className="text-xs text-[#F43F5E] font-medium">
                  {ARTIST_PROFILE.role}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-7 space-y-6"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F43F5E] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            Detrás de la Marca
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#2D2424] leading-tight">
            Pasión por la Estética & la Salud Ungueal
          </h1>

          <p className="text-sm text-[#2D2424]/80 leading-relaxed font-light">
            {ARTIST_PROFILE.bio}
          </p>

          <blockquote className="bg-rose-gold-gradient p-6 rounded-2xl border-l-4 border-[#F43F5E] italic font-serif text-sm text-[#2D2424]/90">
            {ARTIST_PROFILE.quote}
          </blockquote>

          <div className="space-y-3 pt-2">
            <h3 className="font-serif text-base font-bold text-[#2D2424] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#F43F5E]" />
              <span>Certificaciones & Credenciales</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ARTIST_PROFILE.certificates.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#2D2424]/80">
                  <CheckCircle2 className="w-4 h-4 text-[#F43F5E] shrink-0 mt-0.5" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. PHILOSOPHY & VALUES */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2AFAF]/30 shadow-rose-soft space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F43F5E]">
            Nuestra Filosofía
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#2D2424]">
            Tres Pilares Innegociables
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#F43F5E] flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2D2424]">1. Cero Riesgos</h3>
            <p className="text-xs text-[#2D2424]/70 leading-relaxed">
              No escatimamos en bioseguridad. El proceso de esterilización por calor seco garantiza la máxima protección médica para tu piel.
            </p>
          </div>

          <div className="space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#F43F5E] flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2D2424]">2. Arte Sin Límites</h3>
            <p className="text-xs text-[#2D2424]/70 leading-relaxed">
              Nos mantenemos a la vanguardia de las tendencias europeas y coreanas en nail art, adaptando cada diseño a la personalidad de la clienta.
            </p>
          </div>

          <div className="space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#F43F5E] flex items-center justify-center mx-auto">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2D2424]">3. Salud Ungueal</h3>
            <p className="text-xs text-[#2D2424]/70 leading-relaxed">
              Priorizamos que tus uñas naturales se fortalezcan sesión tras sesión mediante niveladores kapping y remoción suave libre de desgaste.
            </p>
          </div>
        </div>
      </section>

      {/* 3. BRANDS WE USE */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F43F5E]">
            Calidad Garantizada
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#2D2424]">
            Marcas & Productos Oficiales
          </h2>
          <p className="text-xs text-[#2D2424]/70">
            Formulaciones internacionales libres de químicos agresivos y aprobadas dermatológicamente.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-[#E2AFAF]/30 shadow-rose-soft flex flex-col justify-between space-y-4 text-center hover:border-[#F43F5E]/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="h-24 rounded-2xl overflow-hidden bg-rose-50">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[10px] font-bold text-[#F43F5E] bg-rose-50 px-2.5 py-1 rounded-full inline-block">
                  {brand.tag}
                </span>
                <h3 className="font-serif text-base font-bold text-[#2D2424]">
                  {brand.name}
                </h3>
                <p className="text-xs text-[#2D2424]/70 leading-relaxed">
                  {brand.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
