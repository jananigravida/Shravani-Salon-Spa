import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PageId } from '../data/salonData';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (presetTopic?: string) => void;
}

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact Us' },
];

export function Navbar({ activePage, onNavigate, onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSelectPage = (page: PageId) => {
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
        scrolled
          ? 'bg-[#30262A]/95 backdrop-blur-md border-[#46383D]'
          : 'bg-[#30262A] border-[#46383D]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleSelectPage('home')}
          className="font-display text-[1.275rem] sm:text-[1.53rem] font-bold tracking-tight text-[#FFF9F4] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A46A] cursor-pointer"
        >
          Shravani Salon &amp; Spa
        </button>

        {/* Zone 2: Clean Single-Line Navigation Links */}
        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectPage(item.id)}
                className={`relative py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A46A] ${
                  isActive
                    ? 'text-[#FFF9F4]'
                    : 'text-[#D8CDD0] hover:text-[#FFF9F4]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C9A46A] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-[#E8B8C5] text-[#30262A] rounded-md hover:bg-[#f0cad4] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A46A]"
          >
            Book an Appointment
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[#FFF9F4] hover:bg-[#46383D] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9A46A]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#30262A] border-b border-[#46383D] px-4 pb-6 pt-3">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectPage(item.id)}
                  className={`w-full text-left px-3 py-3 text-base font-medium rounded-md transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#46383D] text-[#FFF9F4]'
                      : 'text-[#D8CDD0] hover:bg-[#46383D]/60 hover:text-[#FFF9F4]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[#46383D]">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-5 text-sm font-medium bg-[#E8B8C5] text-[#30262A] rounded-md hover:bg-[#f0cad4] transition-colors cursor-pointer"
              >
                Book an Appointment
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
