import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Sparkles, Image, Heart, Calendar } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Inicio', icon: Home },
    { path: '/servicios', label: 'Servicios', icon: Sparkles },
    { path: '/galeria', label: 'Galería', icon: Image },
    { path: '/nosotras', label: 'Nosotras', icon: Heart },
    { path: '/contacto', label: 'Contacto', icon: Calendar },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 glass-nav border-t border-[#E2AFAF]/30 shadow-lg px-2 py-1.5 backdrop-blur-lg">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'text-[#F43F5E] bg-rose-50/80 font-medium scale-105'
                  : 'text-[#2D2424]/60 hover:text-[#F43F5E]'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.2px]' : 'stroke-[1.75px]'}`} />
              <span className="text-[10px] mt-0.5 tracking-tight">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
