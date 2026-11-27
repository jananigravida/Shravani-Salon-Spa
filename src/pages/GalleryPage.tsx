import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, ArrowUpRight } from 'lucide-react';
import {
  BUSINESS_INFO,
  GALLERY_ITEMS,
  GalleryCategory,
  buildWhatsAppUrl,
} from '../data/salonData';
import { ResilientImage } from '../components/ResilientImage';

interface GalleryPageProps {
  onOpenBooking: (presetTopic?: string) => void;
}

const GALLERY_FILTERS: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All Photos' },
  { id: 'salon', label: 'Salon & Parlour' },
  { id: 'bridal', label: 'Bridal & Makeup' },
  { id: 'hair', label: 'Hair Styling' },
  { id: 'spa', label: 'Spa & Skincare' },
  { id: 'academy', label: 'Training Academy' },
];

export function GalleryPage({ onOpenBooking }: GalleryPageProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
        );
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, filteredItems.length]);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="bg-[#FFF9F4]">
      {/* Page Header */}
      <section className="py-14 lg:py-20 border-b border-[#EDE1DB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#9D7A43]">
              Visual Gallery · Editorial Placeholders
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#30262A] leading-tight text-balance">
              Salon, Spa &amp; Academy Gallery
            </h1>
            <p className="text-base text-[#5E5054] leading-relaxed">
              These curated placeholder visuals showcase the salon and academy atmosphere until genuine client and studio photographs are provided. You can also view photos directly on{' '}
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#30262A] underline underline-offset-4 inline-flex items-center gap-1 hover:text-[#9D7A43]"
              >
                Google Maps
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              .
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter gallery photos"
            className="flex flex-wrap gap-2 pt-2"
          >
            {GALLERY_FILTERS.map((filter) => {
              const active = activeCategory === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setActiveCategory(filter.id);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#30262A] text-[#FFF9F4]'
                      : 'bg-[#FFF9F4] text-[#5E5054] border border-[#EDE1DB] hover:border-[#30262A] hover:text-[#30262A]'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <figure
                key={item.id}
                className="group bg-white border border-[#EDE1DB] rounded-xl overflow-hidden flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  className="aspect-[4/3] w-full overflow-hidden bg-[#FBF1F4] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A46A]"
                  aria-label={`Open ${item.title} in full view`}
                >
                  <ResilientImage
                    src={item.image}
                    alt={item.title}
                    fallbackTitle={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </button>
                <figcaption className="p-5 space-y-1.5">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-[#9D7A43]">
                    {item.categoryLabel}
                  </p>
                  <h2 className="font-display text-2xl font-semibold text-[#30262A]">
                    {item.title}
                  </h2>
                  <p className="text-xs text-[#76666A] leading-relaxed">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* CTA Bar */}
          <div className="mt-16 p-8 sm:p-10 bg-white border border-[#EDE1DB] rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h2 className="font-display text-3xl font-semibold text-[#30262A]">
                Ready to Visit Shravani Salon &amp; Spa?
              </h2>
              <p className="text-sm text-[#5E5054]">
                Request bridal portfolios, service availability, or an in-person visit in Mancherial.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="px-5 py-3 text-sm font-medium bg-[#30262A] text-[#FFF9F4] rounded-md hover:bg-[#46383D] transition-colors cursor-pointer"
              >
                Book an Appointment
              </button>
              <a
                href={buildWhatsAppUrl('Hello Shravani Salon & Spa, I would like to enquire about your services.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium border border-[#DED0CA] text-[#30262A] rounded-md hover:border-[#30262A] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#9D7A43]" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#30262A]/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FFF9F4] rounded-xl overflow-hidden border border-[#EDE1DB]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#EDE1DB] bg-white">
              <div>
                <p className="text-xs text-[#9D7A43] uppercase tracking-wider">
                  {activeItem.categoryLabel}
                </p>
                <h3 className="font-display text-xl font-semibold text-[#30262A]">
                  {activeItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close image viewer"
                className="w-10 h-10 inline-flex items-center justify-center rounded-md text-[#30262A] hover:bg-[#FBF1F4] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative bg-[#30262A] max-h-[70vh] flex items-center justify-center overflow-hidden">
              <ResilientImage
                src={activeItem.image}
                alt={activeItem.title}
                fallbackTitle={activeItem.title}
                className="max-h-[70vh] w-full object-contain"
              />
              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-[#30262A] flex items-center justify-center hover:bg-white cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredItems.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-[#30262A] flex items-center justify-center hover:bg-white cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
            <div className="px-5 py-3 bg-white text-xs text-[#76666A] flex items-center justify-between gap-4">
              <span>{activeItem.caption}</span>
              <span className="tabular-nums shrink-0">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
