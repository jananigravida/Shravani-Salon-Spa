import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/salonData';

export function WhatsAppFloatingButton() {
  const whatsappUrl = buildWhatsAppUrl(
    'Hello Shravani Salon & Spa, I would like to book an appointment or enquire about your beauty academy.'
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Shravani Salon & Spa on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 h-12 px-4 sm:px-5 rounded-full bg-[#1B7A43] text-white shadow-lg hover:bg-[#156336] transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A46A]"
    >
      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span className="text-sm font-medium whitespace-nowrap">WhatsApp</span>
    </a>
  );
}
