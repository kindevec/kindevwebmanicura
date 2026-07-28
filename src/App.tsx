import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFAB } from './components/WhatsAppFAB';
import { MobileBottomNav } from './components/MobileBottomNav';
import { BookingModal } from './components/BookingModal';
import { LightboxModal } from './components/LightboxModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { SERVICES } from './data/mockData';
import { GalleryItem } from './types';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedDesignNote, setSelectedDesignNote] = useState<string | undefined>(undefined);

  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const handleOpenBooking = (serviceId?: string, note?: string) => {
    setSelectedServiceId(serviceId);
    setSelectedDesignNote(note);
    setBookingOpen(true);
  };

  const handleOpenDesignBooking = (designTitle: string) => {
    // Find matching service if any, or default to nail art
    const match = SERVICES.find((s) => s.category === 'nail-art') || SERVICES[0];
    handleOpenBooking(match.id, `Diseño solicitado de la galería: "${designTitle}"`);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF5F0] text-[#2D2424] font-sans antialiased selection:bg-[#fecdd3]">
        {/* Persistent Header */}
        <Header onOpenBooking={() => handleOpenBooking()} />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenBooking={(sId) => handleOpenBooking(sId)}
                  onOpenDesign={(title) => handleOpenDesignBooking(title)}
                />
              }
            />
            <Route
              path="/servicios"
              element={<ServicesPage onOpenBooking={(sId) => handleOpenBooking(sId)} />}
            />
            <Route
              path="/galeria"
              element={
                <GalleryPage
                  onOpenLightbox={(item) => setActiveLightboxItem(item)}
                  onBookDesign={(title) => handleOpenDesignBooking(title)}
                />
              }
            />
            <Route path="/nosotras" element={<AboutPage />} />
            <Route
              path="/contacto"
              element={<ContactPage onOpenBooking={() => handleOpenBooking()} />}
            />
            <Route
              path="*"
              element={
                <HomePage
                  onOpenBooking={(sId) => handleOpenBooking(sId)}
                  onOpenDesign={(title) => handleOpenDesignBooking(title)}
                />
              }
            />
          </Routes>
        </main>

        {/* Persistent Footer */}
        <Footer />

        {/* Permanent WhatsApp Floating Action Button */}
        <WhatsAppFAB />

        {/* Translucent Bottom Navigation for Mobile Devices */}
        <MobileBottomNav />

        {/* Interactive Booking Modal */}
        <BookingModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
          preSelectedServiceId={selectedServiceId}
          preSelectedNote={selectedDesignNote}
        />

        {/* Lightbox Modal for Gallery */}
        <LightboxModal
          item={activeLightboxItem}
          onClose={() => setActiveLightboxItem(null)}
          onBookDesign={(title) => handleOpenDesignBooking(title)}
        />
      </div>
    </Router>
  );
}
