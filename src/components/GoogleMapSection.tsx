import { MapPin, ArrowUpRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export function GoogleMapSection() {
  const embedSrc =
    'https://maps.google.com/maps?q=18.8777119,79.4464592&z=17&output=embed';

  return (
    <section
      aria-label="Salon Location on Google Maps"
      className="bg-white border-t border-[#EDE1DB] py-14 lg:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#9D7A43]">
              Visit Us in Mancherial
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#30262A]">
              Find Shravani Salon &amp; Spa on Google Maps
            </h2>
            <p className="text-sm text-[#5E5054] flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#9D7A43] shrink-0 mt-0.5" aria-hidden="true" />
              <span>{BUSINESS_INFO.address}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium border border-[#DED0CA] text-[#30262A] rounded-md hover:border-[#30262A] transition-colors whitespace-nowrap tabular-nums"
            >
              <Phone className="w-4 h-4 text-[#9D7A43]" aria-hidden="true" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#30262A] text-[#FFF9F4] rounded-md hover:bg-[#46383D] transition-colors whitespace-nowrap"
            >
              Open in Google Maps
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="w-full h-[320px] sm:h-[380px] rounded-xl overflow-hidden border border-[#EDE1DB] bg-[#FFF9F4]">
          <iframe
            title="Shravani Salon & Spa | Parlour | Academy - Mancherial on Google Maps"
            src={embedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
