import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO, FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_BASE_URL } from '../data/mockData';

export const Footer: React.FC = () => {
  const waUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    'Hola Velvet Rose ✨, quisiera reservar una cita'
  )}`;

  return (
    <footer className="bg-[#2D2424] text-[#FAF5F0] pt-16 pb-24 md:pb-12 border-t border-[#E2AFAF]/20 relative overflow-hidden">
      {/* Soft Rose Background Accent Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F43F5E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FDA4AF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#F43F5E] flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-script text-2xl font-bold text-white leading-none">
                  Velvet Rose
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase font-sans text-[#FDA4AF] font-semibold">
                  Estudio de Uñas & Beauty
                </span>
              </div>
            </div>

            <p className="text-xs text-[#FAF5F0]/70 leading-relaxed font-light">
              Estudio exclusivo de manicura rusa, pedicura spa, extensiones Soft Gel y diseños de alta gama. Elevamos el cuidado de tus manos a una experiencia estética inolvidable.
            </p>

            {/* Official Social Links */}
            <div className="pt-2 flex items-center space-x-3">
              {/* Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#F43F5E] text-white flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#F43F5E]"
                aria-label="Sabor en Instagram"
                title="Instagram oficial Kindev (@kindevx)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#F43F5E] text-white flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#F43F5E]"
                aria-label="Facebook oficial"
                title="Facebook oficial Kindev"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-500/20 hover:bg-emerald-500 text-emerald-400 hover:text-white flex items-center justify-center transition-all duration-300 border border-emerald-500/30"
                aria-label="WhatsApp oficial"
                title="WhatsApp directo"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#FDA4AF] font-sans">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF5F0]/80">
              <li>
                <Link to="/" className="hover:text-[#F43F5E] transition-colors flex items-center gap-1">
                  <span>› Inicio</span>
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-[#F43F5E] transition-colors flex items-center gap-1">
                  <span>› Catálogo de Servicios</span>
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="hover:text-[#F43F5E] transition-colors flex items-center gap-1">
                  <span>› Galería de Diseños</span>
                </Link>
              </li>
              <li>
                <Link to="/nosotras" className="hover:text-[#F43F5E] transition-colors flex items-center gap-1">
                  <span>› Sobre la Artista & Estudio</span>
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-[#F43F5E] transition-colors flex items-center gap-1">
                  <span>› Ubicación & Reservas</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#FDA4AF] font-sans">
              Especialidades
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF5F0]/80">
              <li>• Manicura Rusa Combinada</li>
              <li>• Extensiones Soft Gel (Gel-X)</li>
              <li>• Kapping Rubber Base Nivelador</li>
              <li>• Pedicura Spa Rose & Milk</li>
              <li>• Nail Art 3D & Mármol Cuarzo</li>
              <li>• Uñas Esculpidas en Poligel</li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#FDA4AF] font-sans">
              Visítanos
            </h4>
            <div className="space-y-2.5 text-xs text-[#FAF5F0]/80 font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F43F5E] shrink-0 mt-0.5" />
                <span>{STUDIO_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F43F5E] shrink-0" />
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {STUDIO_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F43F5E] shrink-0" />
                <span>{STUDIO_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2 pt-1 border-t border-white/10">
                <Clock className="w-4 h-4 text-[#F43F5E] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">{STUDIO_INFO.hours[0].days}</p>
                  <p className="text-[11px] text-[#FAF5F0]/60">{STUDIO_INFO.hours[0].time}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Bottom Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#FAF5F0]/50 gap-4">
          <p className="text-center md:text-left font-light tracking-wide">
            © 2026 Todos los derechos reservados. Desarrollado por Kindev
          </p>
          <div className="flex items-center space-x-6 text-[11px]">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#F43F5E] transition-colors">
              Reservar por WhatsApp
            </a>
            <span className="text-white/20">•</span>
            <span className="text-[#FDA4AF]/80 font-medium">Atención Personalizada</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
