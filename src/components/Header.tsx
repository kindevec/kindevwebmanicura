import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, Calendar, MessageCircle, Phone } from 'lucide-react';
import { STUDIO_INFO, WHATSAPP_BASE_URL } from '../data/mockData';

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/galeria', label: 'Galería' },
    { path: '/nosotras', label: 'Nosotras' },
    { path: '/contacto', label: 'Contacto' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-nav shadow-rose-soft border-b border-[#E2AFAF]/20 py-3'
            : 'bg-[#FAF5F0]/90 backdrop-blur-sm py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F43F5E] to-[#FDA4AF] flex items-center justify-center text-white shadow-md shadow-rose-300/40 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-script text-2xl md:text-3xl font-bold text-[#2D2424] leading-none tracking-wide group-hover:text-[#F43F5E] transition-colors">
                Velvet Rose
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-sans font-semibold text-[#F43F5E]">
                Estudio de Uñas & Beauty
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#F43F5E] font-semibold'
                      : 'text-[#2D2424]/80 hover:text-[#F43F5E]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F43F5E] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
                'Hola Velvet Rose ✨, quisiera información sobre los servicios.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-[#2D2424]/80 hover:text-[#F43F5E] hover:bg-rose-50 rounded-full transition-colors"
              title="Contacto directo por WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="bg-[#F43F5E] hover:bg-[#E11D48] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md shadow-rose-500/20 hover:shadow-rose-500/30 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserva tu Cita</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#F43F5E] text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Cita</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#2D2424] hover:bg-rose-100/50 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[65px] left-0 right-0 z-30 bg-[#FAF5F0] border-b border-rose-200/50 shadow-xl md:hidden overflow-hidden"
          >
            <div className="px-5 py-6 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block text-base font-medium py-2 px-3 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-rose-100/70 text-[#F43F5E] font-semibold'
                        : 'text-[#2D2424]/80 hover:bg-rose-50 hover:text-[#F43F5E]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <div className="pt-4 border-t border-rose-200/40 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-[#F43F5E] text-white py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reservar Cita por WhatsApp</span>
                </button>

                <a
                  href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
                    'Hola Velvet Rose ✨, quisiera hacer una consulta.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-500 text-white py-2.5 rounded-full text-sm font-medium flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Directo WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
