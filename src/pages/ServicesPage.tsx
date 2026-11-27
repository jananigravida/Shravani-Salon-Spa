import { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import {
  ACADEMY_TRACKS,
  BUSINESS_INFO,
  IMAGES,
  SUGGESTED_SERVICES,
  ServiceGroup,
  buildWhatsAppUrl,
} from '../data/salonData';
import { ResilientImage } from '../components/ResilientImage';

interface ServicesPageProps {
  initialGroup?: string;
  onOpenBooking: (presetTopic?: string) => void;
}

const FILTER_TABS: { id: ServiceGroup; label: string }[] = [
  { id: 'all', label: 'All Categories' },
  { id: 'hair', label: 'Hair Care & Styling' },
  { id: 'skin-spa', label: 'Skin, Facial & Spa' },
  { id: 'makeup-bridal', label: 'Bridal & Makeup' },
  { id: 'beauty-care', label: 'Beauty Care' },
];

export function ServicesPage({ initialGroup, onOpenBooking }: ServicesPageProps) {
  const [selectedGroup, setSelectedGroup] = useState<ServiceGroup>('all');

  useEffect(() => {
    if (
      initialGroup === 'hair' ||
      initialGroup === 'skin-spa' ||
      initialGroup === 'makeup-bridal' ||
      initialGroup === 'beauty-care'
    ) {
      setSelectedGroup(initialGroup);
    } else {
      setSelectedGroup('all');
    }
  }, [initialGroup]);

  const filteredServices =
    selectedGroup === 'all'
      ? SUGGESTED_SERVICES
      : SUGGESTED_SERVICES.filter((item) => item.group === selectedGroup);

  return (
    <div className="bg-[#FFF9F4]">
      {/* Page Header */}
      <section className="py-14 lg:py-20 border-b border-[#EDE1DB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#9D7A43]">
              Salon Menu &amp; Training Overview · Editable Placeholders
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#30262A] leading-tight text-balance">
              Beauty Services &amp; Academy Opportunities
            </h1>
            <p className="text-base text-[#5E5054] leading-relaxed">
              The categories listed below are suggested placeholders subject to confirmation by Shravani Salon &amp; Spa. Please enquire via WhatsApp or call{' '}
              <a
                href={BUSINESS_INFO.phoneHref}
                className="font-semibold text-[#30262A] underline underline-offset-4 tabular-nums"
              >
                {BUSINESS_INFO.phoneDisplay}
              </a>{' '}
              to confirm exact treatments, pricing, and appointment timings.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter service categories"
            className="flex flex-wrap gap-2 pt-2"
          >
            {FILTER_TABS.map((tab) => {
              const active = selectedGroup === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedGroup(tab.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#30262A] text-[#FFF9F4]'
                      : 'bg-[#FFF9F4] text-[#5E5054] border border-[#EDE1DB] hover:border-[#30262A] hover:text-[#30262A]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Suggested Services List */}
      <section className="py-16 lg:py-20 border-b border-[#EDE1DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service) => {
              const whatsappUrl = buildWhatsAppUrl(
                `Hello Shravani Salon & Spa, I would like to confirm details and pricing for ${service.title}.`
              );
              return (
                <article
                  key={service.id}
                  className="bg-white border border-[#EDE1DB] rounded-xl overflow-hidden grid grid-cols-1 sm:grid-cols-12 items-stretch"
                >
                  <div className="sm:col-span-5 min-h-[200px] bg-[#FBF1F4]">
                    <ResilientImage
                      src={service.image}
                      alt={service.imageAlt}
                      fallbackTitle={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="sm:col-span-7 p-6 flex flex-col justify-between space-y-5">
                    <div className="space-y-2.5">
                      <p className="text-[11px] font-medium tracking-wider uppercase text-[#9D7A43]">
                        {service.index} · {service.groupLabel}
                      </p>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#30262A]">
                        {service.title}
                      </h2>
                      <p className="text-sm text-[#5E5054] leading-relaxed">
                        {service.shortDescription}
                      </p>
                      <p className="text-xs text-[#76666A] leading-relaxed pt-1 border-t border-[#F3E9E4]">
                        {service.placeholderNote}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <button
                        type="button"
                        onClick={() => onOpenBooking(service.title)}
                        className="px-4 py-2 text-xs font-medium bg-[#30262A] text-[#FFF9F4] rounded-md hover:bg-[#46383D] transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Request Enquiry
                      </button>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium border border-[#DED0CA] text-[#30262A] rounded-md hover:border-[#30262A] transition-colors whitespace-nowrap"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#9D7A43]" aria-hidden="true" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academy & Training Institute Section */}
      <section className="py-16 lg:py-24 bg-[#30262A] text-[#FFF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 space-y-5 flex flex-col justify-center">
              <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#C9A46A]">
                Shravani Academy · Training Institute
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#FFF9F4] text-balance">
                Explore Beauty Training Opportunities
              </h2>
              <p className="text-base text-[#E5DADF] leading-relaxed">
                Develop practical beauty care skills at Shravani&apos;s training institute in Mancherial. The course tracks below are editable placeholders — specific syllabus, duration, certification, and fees are shared upon direct enquiry.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking('Beauty Academy Training Enquiry')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[#E8B8C5] text-[#30262A] rounded-md hover:bg-[#f0cad4] transition-colors cursor-pointer"
                >
                  Enquire About Courses
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium border border-[#6E5C63] text-[#FFF9F4] rounded-md hover:border-[#C9A46A] transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  Call {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-xl overflow-hidden border border-[#4B3D42] min-h-[280px]">
              <ResilientImage
                src={IMAGES.academyTraining}
                alt="Shravani beauty academy studio"
                fallbackTitle="Shravani Academy Studio"
                className="w-full h-full lg:h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACADEMY_TRACKS.map((track) => (
              <div
                key={track.id}
                className="p-6 bg-[#3A2E33] border border-[#4F4046] rounded-xl flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <span className="text-xs font-medium tracking-wider uppercase text-[#C9A46A] block">
                    {track.index} · Editable Course Slot
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-[#FFF9F4]">
                    {track.title}
                  </h3>
                  <p className="text-sm text-[#D8CDD0] leading-relaxed">{track.summary}</p>
                  <div className="space-y-1.5 pt-3 border-t border-[#4F4046] text-xs text-[#C7B9BD]">
                    <p>{track.placeholderFields.duration}</p>
                    <p>{track.placeholderFields.format}</p>
                    <p>{track.placeholderFields.feesAndSchedule}</p>
                  </div>
                </div>

                <a
                  href={buildWhatsAppUrl(
                    `Hello Shravani Academy, I would like to enquire about ${track.title} details, batch timings, and fees.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#E8B8C5] hover:text-[#FFF9F4] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Enquire on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
