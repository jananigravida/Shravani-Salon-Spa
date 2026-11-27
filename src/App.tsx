import { useState, useEffect } from 'react';
import { PageId } from './data/salonData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { GoogleMapSection } from './components/GoogleMapSection';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';

const VALID_PAGES: PageId[] = ['home', 'about', 'services', 'gallery', 'testimonials', 'contact'];

function getInitialPage(): PageId {
  const hash = window.location.hash.replace('#', '') as PageId;
  return VALID_PAGES.includes(hash) ? hash : 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(getInitialPage);
  const [serviceGroupFilter, setServiceGroupFilter] = useState<string | undefined>(undefined);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState<string | undefined>(undefined);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (VALID_PAGES.includes(hash)) {
        setActivePage(hash);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = (page: PageId, serviceGroup?: string) => {
    setActivePage(page);
    setServiceGroupFilter(serviceGroup);
    if (window.location.hash !== `#${page}`) {
      window.history.pushState(null, '', `#${page}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (presetTopic?: string) => {
    setModalTopic(presetTopic);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F4] text-[#30262A]">
      <Navbar
        activePage={activePage}
        onNavigate={(page) => handleNavigate(page)}
        onOpenBooking={handleOpenBooking}
      />

      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
        )}
        {activePage === 'about' && (
          <AboutPage
            onNavigate={(page) => handleNavigate(page)}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {activePage === 'services' && (
          <ServicesPage
            initialGroup={serviceGroupFilter}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {activePage === 'gallery' && <GalleryPage onOpenBooking={handleOpenBooking} />}
        {activePage === 'testimonials' && (
          <TestimonialsPage onOpenBooking={handleOpenBooking} />
        )}
        {activePage === 'contact' && <ContactPage />}
      </main>

      <GoogleMapSection />

      <Footer
        onNavigate={(page) => handleNavigate(page)}
        onOpenBooking={handleOpenBooking}
      />

      <WhatsAppFloatingButton />

      <EnquiryModal
        isOpen={modalOpen}
        initialTopic={modalTopic}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
