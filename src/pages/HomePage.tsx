import { ArrowRight, MessageCircle, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import {
  BUSINESS_INFO,
  GALLERY_ITEMS,
  IMAGES,
  PageId,
  SUGGESTED_SERVICES,
  WHY_CHOOSE_US,
  buildWhatsAppUrl,
} from '../data/salonData';
import { ResilientImage } from '../components/ResilientImage';

interface HomePageProps {
  onNavigate: (page: PageId, serviceGroup?: string) => void;
  onOpenBooking: (presetTopic?: string) => void;
}

export function HomePage({ onNavigate, onOpenBooking }: HomePageProps) {
  return (
    <div>
      {/* B. Hero Section */}
      <section className="relative overflow-hidden bg-[#FFF9F4] border-b border-[#EDE1DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col justify-center space-y-6"
            >
              <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#9D7A43]">
                Mancherial · Salon, Parlour &amp; Training Academy
              </p>

              <h1 className="font-display text-[clamp(2.5rem,4.6vw,4.25rem)] font-semibold leading-[1.06] tracking-tight text-[#30262A] text-balance">
                Your Beauty, Our Passion.
              </h1>

              <p className="font-display text-xl sm:text-2xl text-[#5E5054] leading-snug text-balance">
                Experience beauty, elegance and self-care at Shravani Salon &amp; Spa.
              </p>

              <p className="text-base text-[#5E5054] leading-relaxed max-w-xl">
                Discover professional beauty care and explore opportunities to learn beauty skills at our training academy.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium bg-[#30262A] text-[#FFF9F4] rounded-md hover:bg-[#46383D] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A46A]"
                >
                  Book an Appointment
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium border border-[#30262A]/25 bg-white text-[#30262A] rounded-md hover:border-[#30262A] hover:bg-[#FBF1F4]/60 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A46A]"
                >
                  Explore Our Services
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] rounded-xl overflow-hidden border border-[#EDE1DB]"
            >
              <ResilientImage
                src="/src/assets/images/shravani_hero_real.jpg"
                alt="Interior of Shravani Salon & Spa in Mancherial featuring fluted wood mirror panels and styling stations"
                fallbackTitle="Shravani Salon & Spa"
                className="w-full h-full lg:h-full object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#30262A]/55 via-transparent to-transparent pointer-events-none"
              />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-3 text-[#FFF9F4]">
                <div>
                  <p className="text-xs tracking-wider uppercase text-[#F3D9E0]">
                    Shravani Salon &amp; Spa · Academy
                  </p>
                  <p className="font-display text-xl font-medium">
                    Market Road, Iqbal Ahmed Nagar
                  </p>
                </div>
                <a
                  href={buildWhatsAppUrl(
                    'Hello Shravani Salon & Spa, I would like to book an appointment.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium bg-[#FFF9F4]/95 text-[#30262A] rounded-md hover:bg-white transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#9D7A43]" aria-hidden="true" />
                  WhatsApp Desk
                </a>
              </div>
            </motion.div>
          </div>

          {/* 4-column Quick Conversion Strip below Hero Split */}
          <div className="mt-10 pt-8 border-t border-[#EDE1DB] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="group flex items-start gap-3 text-left hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4 text-[#9D7A43] mt-1 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#76666A]">
                  Call Directly
                </p>
                <p className="text-sm font-semibold text-[#30262A] tabular-nums group-hover:underline">
                  {BUSINESS_INFO.phoneDisplay}
                </p>
              </div>
            </a>

            <a
              href={buildWhatsAppUrl(
                'Hello Shravani Salon & Spa, I have an enquiry about salon services.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 text-left hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-4 h-4 text-[#9D7A43] mt-1 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#76666A]">
                  WhatsApp Enquiry
                </p>
                <p className="text-sm font-semibold text-[#30262A] group-hover:underline">
                  Message +91 9110559033
                </p>
              </div>
            </a>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 text-left hover:opacity-90 transition-opacity"
            >
              <MapPin className="w-4 h-4 text-[#9D7A43] mt-1 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#76666A]">
                  Salon Location
                </p>
                <p className="text-sm font-semibold text-[#30262A] inline-flex items-center gap-1 group-hover:underline">
                  Iqbal Ahmed Nagar, Mancherial
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </p>
              </div>
            </a>

            <button
              type="button"
              onClick={() => onOpenBooking('Beauty Academy Training Enquiry')}
              className="group flex items-start gap-3 text-left cursor-pointer hover:opacity-90 transition-opacity"
            >
              <ArrowRight className="w-4 h-4 text-[#9D7A43] mt-1 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#76666A]">
                  Beauty Institute
                </p>
                <p className="text-sm font-semibold text-[#30262A] group-hover:underline">
                  Enquire About Training
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* C. Introduction Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#EDE1DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            <div className="lg:col-span-5 rounded-2xl shadow-md overflow-hidden border border-[#EDE1DB] min-h-[300px]">
              <ResilientImage
                src="/src/assets/images/shravani_intro_real.jpg"
                alt="Shravani Salon & Spa interior featuring beauty artistry wall display in Mancherial"
                fallbackTitle="Shravani Salon & Spa"
                className="w-full h-full lg:h-full object-cover object-[50%_70%] rounded-2xl"
              />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#9D7A43]">
                About Shravani · Mancherial
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#30262A] leading-tight text-balance">
                Welcome to Shravani Salon &amp; Spa
              </h2>
              <p className="text-base sm:text-lg text-[#5E5054] leading-relaxed max-w-2xl">
                Your destination for beauty, self-care and professional beauty learning in Mancherial. Discover our salon experience and explore our beauty training opportunities.
              </p>
              <p className="text-sm text-[#76666A] leading-relaxed max-w-2xl">
                Situated on Market Road in Iqbal Ahmed Nagar, Shravani brings together a welcoming beauty parlour, relaxing spa care, and a dedicated training institute under one roof.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium border border-[#30262A] text-[#30262A] rounded-md hover:bg-[#30262A] hover:text-[#FFF9F4] transition-colors cursor-pointer"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D. Services Preview */}
      <section className="py-16 lg:py-24 bg-[#FFF9F4] border-b border-[#EDE1DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#9D7A43]">
                Suggested Service Categories · Subject to Confirmation
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#30262A] leading-tight text-balance">
                Discover Our Beauty Services
              </h2>
              <p className="text-sm sm:text-base text-[#5E5054] leading-relaxed">
                Explore suggested parlour, spa, and makeup categories below. Specific treatments, pricing, and availability are confirmed directly with our salon team.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium bg-white border border-[#DED0CA] text-[#30262A] rounded-md hover:border-[#30262A] transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start md:self-auto"
            >
              View All Categories
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUGGESTED_SERVICES.map((service) => {
              const whatsappMessage = `Hello Shravani Salon & Spa, I would like to enquire about ${service.title} services and availability.`;
              return (
                <article
                  key={service.id}
                  className="group bg-white border border-[#EDE1DB] rounded-xl overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#FBF1F4]">
                    <ResilientImage
                      src={service.image}
                      alt={service.imageAlt}
                      fallbackTitle={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <p className="text-[11px] font-medium tracking-wider uppercase text-[#76666A]">
                        {service.index} · Placeholder Category
                      </p>
                      <h3 className="font-display text-2xl font-semibold text-[#30262A]">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#5E5054] leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F3E9E4] flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => onNavigate('services', service.group)}
                        className="text-xs font-semibold text-[#30262A] hover:text-[#9D7A43] transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Learn More
                      </button>
                      <a
                        href={buildWhatsAppUrl(whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5E5054] hover:text-[#30262A] transition-colors whitespace-nowrap"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#9D7A43]" aria-hidden="true" />
                        Enquire on WhatsApp
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* E. Beauty Academy Section */}
      <section className="py-16 lg:py-24 bg-[#30262A] text-[#FFF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#C9A46A]">
                Shravani Academy · Beauty Training Institute
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#FFF9F4] leading-tight text-balance">
                Learn Beauty. Build Your Future.
              </h2>
              <p className="text-base sm:text-lg text-[#E5DADF] leading-relaxed max-w-xl">
                Explore opportunities to develop your beauty skills through Shravani&apos;s beauty training institute.
              </p>

              <div className="space-y-3 pt-2 border-t border-[#4B3D42]">
                <p className="text-xs uppercase tracking-wider text-[#C9A46A]">
                  Editable Academy Information
                </p>
                <p className="text-sm text-[#D8CDD0] leading-relaxed">
                  Course modules, batch timings, duration, certification details, and fee structure are customizable placeholders — reach out directly via WhatsApp or phone to discuss upcoming training opportunities in Mancherial.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium bg-[#E8B8C5] text-[#30262A] rounded-md hover:bg-[#f1cad4] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Explore Training
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenBooking('Beauty Academy Training Enquiry')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium border border-[#6E5C63] text-[#FFF9F4] rounded-md hover:border-[#C9A46A] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Enquire About Courses
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-xl overflow-hidden border border-[#4B3D42] min-h-[320px]">
              <ResilientImage
                src={IMAGES.academyTraining}
                alt="Modern beauty training academy classroom with illuminated mirrors and styling stations"
                fallbackTitle="Shravani Beauty Academy"
                className="w-full h-full lg:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* F. Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#EDE1DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-12">
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#9D7A43]">
              Our Approach
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#30262A] text-balance">
              Why Visit Shravani Salon &amp; Academy
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.index}
                className="p-6 bg-[#FFF9F4] border border-[#EDE1DB] rounded-xl space-y-3"
              >
                <span className="font-display text-2xl font-semibold text-[#C9A46A] block tabular-nums">
                  {item.index}.
                </span>
                <h3 className="font-display text-2xl font-semibold text-[#30262A]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5E5054] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* G. Gallery Preview */}
      <section className="py-16 lg:py-24 bg-[#FFF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#9D7A43]">
                Visual Preview · Placeholder Portfolio
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#30262A] text-balance">
                Inside the Salon &amp; Academy
              </h2>
              <p className="text-sm text-[#5E5054] leading-relaxed">
                Preview imagery shown below serves as an editorial placeholder until genuine salon photography is uploaded.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium bg-[#30262A] text-[#FFF9F4] rounded-md hover:bg-[#46383D] transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start md:self-auto"
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 rounded-xl overflow-hidden border border-[#EDE1DB] bg-white">
              <div className="aspect-[16/10] overflow-hidden">
                <ResilientImage
                  src={GALLERY_ITEMS[0].image}
                  alt={GALLERY_ITEMS[0].title}
                  fallbackTitle={GALLERY_ITEMS[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-[#76666A]">{GALLERY_ITEMS[0].categoryLabel}</p>
                  <h3 className="font-display text-xl font-semibold text-[#30262A]">
                    {GALLERY_ITEMS[0].title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('gallery')}
                  className="text-xs font-semibold text-[#30262A] hover:text-[#9D7A43] cursor-pointer whitespace-nowrap"
                >
                  Open Gallery
                </button>
              </div>
            </div>

            <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
              {GALLERY_ITEMS.slice(1, 3).map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl overflow-hidden border border-[#EDE1DB] bg-white grid grid-cols-12 items-stretch"
                >
                  <div className="col-span-5 overflow-hidden bg-[#FBF1F4]">
                    <ResilientImage
                      src={item.image}
                      alt={item.title}
                      fallbackTitle={item.title}
                      className="w-full h-full object-cover min-h-[130px]"
                    />
                  </div>
                  <div className="col-span-7 p-4 flex flex-col justify-center space-y-1.5">
                    <p className="text-[11px] uppercase tracking-wider text-[#76666A]">
                      {item.categoryLabel}
                    </p>
                    <h3 className="font-display text-xl font-semibold text-[#30262A]">
                      {item.title}
                    </h3>
                    <button
                      type="button"
                      onClick={() => onNavigate('gallery')}
                      className="text-xs font-medium text-[#9D7A43] hover:text-[#30262A] text-left pt-1 cursor-pointer"
                    >
                      Inspect in Gallery
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
