import { Phone, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, PageId, buildWhatsAppUrl } from '../data/salonData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (presetTopic?: string) => void;
}

export function Footer({ onNavigate, onOpenBooking }: FooterProps) {
  const whatsappHref = buildWhatsAppUrl(
    'Hello Shravani Salon & Spa, I would like to enquire about your beauty services or training academy.'
  );

  return (
    <footer className="bg-[#30262A] text-[#FFF9F4] border-t border-[#46383D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Summary */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#FFF9F4] text-balance">
              {BUSINESS_INFO.fullName}
            </h2>
            <p className="text-sm text-[#D8CDD0] leading-relaxed max-w-sm">
              {BUSINESS_INFO.description}
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-[#E8B8C5] text-[#30262A] rounded-md hover:bg-[#f0cad4] transition-colors whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                WhatsApp Enquiry
              </a>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium border border-[#6E5C63] text-[#FFF9F4] rounded-md hover:border-[#C9A46A] transition-colors whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Now
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-[#C9A46A]">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-[#D8CDD0]">
              {(
                [
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About Us' },
                  { id: 'services', label: 'Services' },
                  { id: 'gallery', label: 'Gallery' },
                  { id: 'testimonials', label: 'Testimonials' },
                  { id: 'contact', label: 'Contact Us' },
                ] as { id: PageId; label: string }[]
              ).map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-[#FFF9F4] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-[#C9A46A]">
              Visit &amp; Connect
            </h3>
            <div className="space-y-3 text-sm text-[#D8CDD0]">
              <p className="leading-relaxed flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A46A] shrink-0 mt-1" aria-hidden="true" />
                <span>{BUSINESS_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A46A] shrink-0" aria-hidden="true" />
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="hover:text-[#FFF9F4] transition-colors tabular-nums"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </p>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#E8B8C5] hover:text-[#FFF9F4] transition-colors pt-1"
              >
                Open in Google Maps
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Editable Business Placeholders */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-[#C9A46A]">
              Salon Details
            </h3>
            <div className="space-y-2.5 text-xs text-[#C7B9BD] leading-relaxed">
              <p>
                <span className="text-[#FFF9F4] font-medium block">Working Hours</span>
                {BUSINESS_INFO.placeholders.workingHours}
              </p>
              <p>
                <span className="text-[#FFF9F4] font-medium block">Email</span>
                {BUSINESS_INFO.placeholders.email}
              </p>
              <p>
                <span className="text-[#FFF9F4] font-medium block">Social Media</span>
                {BUSINESS_INFO.placeholders.socialInstagram} · {BUSINESS_INFO.placeholders.socialFacebook}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="text-sm font-medium text-[#E8B8C5] underline underline-offset-4 hover:text-[#FFF9F4] transition-colors cursor-pointer"
                >
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#46383D] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#B6A7AC]">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.fullName}. All rights reserved.
          </p>
          <p>Market Road, Iqbal Ahmed Nagar, Mancherial, Telangana 504208</p>
        </div>
      </div>
    </footer>
  );
}
