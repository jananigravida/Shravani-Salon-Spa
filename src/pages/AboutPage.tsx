import { MapPin, Phone, MessageCircle, ArrowRight, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, IMAGES, PageId, buildWhatsAppUrl } from '../data/salonData';
import { ResilientImage } from '../components/ResilientImage';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (presetTopic?: string) => void;
}

export function AboutPage({ onNavigate, onOpenBooking }: AboutPageProps) {
  return (
    <div className="bg-[#FFF9F4]">
      {/* Page Header */}
      <section className="py-14 lg:py-20 border-b border-[#EDE1DB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#9D7A43]">
              About Us · Mancherial, Telangana
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#30262A] leading-tight text-balance">
              {BUSINESS_INFO.fullName}
            </h1>
            <p className="text-base sm:text-lg text-[#5E5054] leading-relaxed">
              {BUSINESS_INFO.description} Located on Market Road in Iqbal Ahmed Nagar, Mancherial, we welcome both beauty clients and aspiring learners.
            </p>
          </div>
        </div>
      </section>

      {/* Dual Mission Split */}
      <section className="py-16 lg:py-24 border-b border-[#EDE1DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            <div className="lg:col-span-6 rounded-xl overflow-hidden border border-[#EDE1DB] min-h-[320px]">
              <ResilientImage
                src={IMAGES.heroSalon}
                alt="Shravani Salon and Spa lounge and styling stations"
                fallbackTitle="Shravani Salon & Spa"
                className="w-full h-full lg:h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#30262A] text-balance">
                A Place for Self-Care and Beauty Education
              </h2>
              <p className="text-sm sm:text-base text-[#5E5054] leading-relaxed">
                Shravani brings together two complementary worlds: attentive beauty parlour and spa services for daily and occasion care, and a beauty training academy where students can explore practical skills.
              </p>

              <div className="p-5 bg-white border border-[#EDE1DB] rounded-xl space-y-2">
                <p className="text-xs font-medium uppercase tracking-wider text-[#9D7A43]">
                  Salon Story Placeholder
                </p>
                <p className="text-sm text-[#5E5054] leading-relaxed">
                  {BUSINESS_INFO.placeholders.founderNote}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[#30262A] text-[#FFF9F4] rounded-md hover:bg-[#46383D] transition-colors cursor-pointer"
                >
                  Book an Appointment
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[#30262A] text-[#30262A] rounded-md hover:bg-white transition-colors cursor-pointer"
                >
                  Explore Suggested Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editable Business Profile Details */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 space-y-2">
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#9D7A43]">
              Business Profile &amp; Editable Placeholders
            </p>
            <h2 className="font-display text-3xl font-semibold text-[#30262A]">
              Essential Information at a Glance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#FFF9F4] border border-[#EDE1DB] rounded-xl space-y-3">
              <p className="text-xs font-medium uppercase tracking-wider text-[#9D7A43]">
                Verified Address
              </p>
              <h3 className="font-display text-2xl font-semibold text-[#30262A]">
                Find Us in Mancherial
              </h3>
              <p className="text-sm text-[#5E5054] leading-relaxed flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#9D7A43] shrink-0 mt-1" aria-hidden="true" />
                <span>{BUSINESS_INFO.address}</span>
              </p>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#30262A] underline underline-offset-4 hover:text-[#9D7A43]"
              >
                Open Google Maps
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            <div className="p-6 bg-[#FFF9F4] border border-[#EDE1DB] rounded-xl space-y-3">
              <p className="text-xs font-medium uppercase tracking-wider text-[#9D7A43]">
                Verified Contact
              </p>
              <h3 className="font-display text-2xl font-semibold text-[#30262A]">
                Phone &amp; WhatsApp
              </h3>
              <p className="text-sm text-[#5E5054] leading-relaxed">
                Reach out directly for appointment slots, bridal consultations, or academy course information.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#30262A] tabular-nums hover:text-[#9D7A43]"
                >
                  <Phone className="w-4 h-4 text-[#9D7A43]" aria-hidden="true" />
                  {BUSINESS_INFO.phoneDisplay}
                </a>
                <a
                  href={buildWhatsAppUrl('Hello Shravani Salon & Spa, I would like to know more about your salon and academy.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#30262A] hover:text-[#9D7A43]"
                >
                  <MessageCircle className="w-4 h-4 text-[#9D7A43]" aria-hidden="true" />
                  WhatsApp Chat
                </a>
              </div>
            </div>

            <div className="p-6 bg-[#FFF9F4] border border-[#EDE1DB] rounded-xl space-y-3">
              <p className="text-xs font-medium uppercase tracking-wider text-[#76666A]">
                Editable Placeholders
              </p>
              <h3 className="font-display text-2xl font-semibold text-[#30262A]">
                Hours &amp; Team Details
              </h3>
              <div className="space-y-2 text-sm text-[#5E5054]">
                <p>
                  <span className="font-medium text-[#30262A]">Hours: </span>
                  {BUSINESS_INFO.placeholders.workingHours}
                </p>
                <p>
                  <span className="font-medium text-[#30262A]">Email: </span>
                  {BUSINESS_INFO.placeholders.email}
                </p>
                <p>
                  <span className="font-medium text-[#30262A]">Team Bio: </span>
                  [Stylist &amp; Educator Profiles Placeholder]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
