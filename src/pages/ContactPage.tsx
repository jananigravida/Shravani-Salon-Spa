import { useState, FormEvent } from 'react';
import { MapPin, Phone, MessageCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, SUGGESTED_SERVICES, buildWhatsAppUrl } from '../data/salonData';

export function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Salon Appointment');
  const [category, setCategory] = useState('Hair Care');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    const cleanPhone = phone.replace(/\s+/g, '');
    if (!/^[+\d][\d\s-]{7,15}$/.test(cleanPhone)) {
      setError('Please provide a valid phone number so we can reach you.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const whatsappSummary = buildWhatsAppUrl(
    [
      'Hello Shravani Salon & Spa,',
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Enquiry For: ${interest}`,
      `Topic / Category: ${category}`,
      message.trim() ? `Message: ${message.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n')
  );

  return (
    <div className="bg-[#FFF9F4]">
      {/* Page Header */}
      <section className="py-14 lg:py-20 border-b border-[#EDE1DB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#9D7A43]">
              Contact &amp; Location · Mancherial
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#30262A] leading-tight text-balance">
              Visit or Message Shravani Salon &amp; Spa
            </h1>
            <p className="text-base text-[#5E5054] leading-relaxed">
              Call us, send a WhatsApp enquiry, or visit our salon and training academy on Market Road in Iqbal Ahmed Nagar, Mancherial.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Direct Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-7 bg-white border border-[#EDE1DB] rounded-xl space-y-5">
                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#9D7A43]">
                    Salon &amp; Academy Address
                  </p>
                  <h2 className="font-display text-2xl font-semibold text-[#30262A]">
                    {BUSINESS_INFO.fullName}
                  </h2>
                  <p className="text-sm text-[#5E5054] leading-relaxed flex items-start gap-2.5 pt-1">
                    <MapPin className="w-4 h-4 text-[#9D7A43] shrink-0 mt-1" aria-hidden="true" />
                    <span>{BUSINESS_INFO.address}</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F3E9E4] flex flex-wrap gap-3">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-[#30262A] text-[#FFF9F4] rounded-md hover:bg-[#46383D] transition-colors"
                  >
                    Get Directions on Google Maps
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="p-7 bg-white border border-[#EDE1DB] rounded-xl space-y-4">
                <p className="text-xs font-medium uppercase tracking-wider text-[#9D7A43]">
                  Direct Phone &amp; WhatsApp
                </p>
                <div className="space-y-3">
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="flex items-center justify-between p-4 bg-[#FFF9F4] border border-[#EDE1DB] rounded-lg hover:border-[#30262A] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#9D7A43]" aria-hidden="true" />
                      <span className="text-sm font-semibold text-[#30262A] tabular-nums">
                        {BUSINESS_INFO.phoneDisplay}
                      </span>
                    </span>
                    <span className="text-xs font-medium text-[#5E5054]">Tap to Call</span>
                  </a>

                  <a
                    href={buildWhatsAppUrl(
                      'Hello Shravani Salon & Spa, I would like to book an appointment or ask about your academy.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-[#FBF1F4] border border-[#E8B8C5] rounded-lg hover:border-[#30262A] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <MessageCircle className="w-4 h-4 text-[#30262A]" aria-hidden="true" />
                      <span className="text-sm font-semibold text-[#30262A] tabular-nums">
                        WhatsApp {BUSINESS_INFO.phoneDisplay}
                      </span>
                    </span>
                    <span className="text-xs font-medium text-[#30262A]">Chat Now</span>
                  </a>
                </div>
              </div>

              <div className="p-7 bg-white border border-[#EDE1DB] rounded-xl space-y-3">
                <p className="text-xs font-medium uppercase tracking-wider text-[#76666A]">
                  Editable Business Details
                </p>
                <div className="space-y-2.5 text-sm text-[#5E5054]">
                  <div>
                    <span className="font-semibold text-[#30262A] block text-xs">
                      Working Hours
                    </span>
                    <span>{BUSINESS_INFO.placeholders.workingHours}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#30262A] block text-xs">
                      Email Address
                    </span>
                    <span>{BUSINESS_INFO.placeholders.email}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#30262A] block text-xs">
                      Social Profiles
                    </span>
                    <span>
                      {BUSINESS_INFO.placeholders.socialInstagram} ·{' '}
                      {BUSINESS_INFO.placeholders.socialFacebook}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-7 bg-white border border-[#EDE1DB] rounded-xl p-7 sm:p-10">
              <div className="space-y-2 mb-6">
                <p className="text-xs font-medium uppercase tracking-wider text-[#9D7A43]">
                  Quick Enquiry Form
                </p>
                <h2 className="font-display text-3xl font-semibold text-[#30262A]">
                  Send an Appointment or Course Enquiry
                </h2>
                <p className="text-sm text-[#5E5054]">
                  Fill in your details below to generate an instant WhatsApp message for our salon desk.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 space-y-5">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-7 h-7 text-[#9D7A43]" aria-hidden="true" />
                    <h3 className="font-display text-2xl font-semibold text-[#30262A]">
                      Enquiry Ready to Send
                    </h3>
                  </div>
                  <p className="text-sm text-[#5E5054] leading-relaxed">
                    Thank you, {name}. Click below to open WhatsApp with your enquiry pre-filled, or call us directly at{' '}
                    <span className="font-semibold text-[#30262A] tabular-nums">
                      {BUSINESS_INFO.phoneDisplay}
                    </span>
                    .
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={whatsappSummary}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[#30262A] text-[#FFF9F4] rounded-md hover:bg-[#46383D] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      Send via WhatsApp
                    </a>
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[#30262A] text-[#30262A] rounded-md hover:bg-[#FBF1F4] transition-colors"
                    >
                      <Phone className="w-4 h-4" aria-hidden="true" />
                      Call Now
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-medium text-[#5E5054] underline underline-offset-4 cursor-pointer"
                  >
                    Edit your enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-[#30262A] mb-1.5">
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 text-sm bg-[#FFF9F4] border border-[#DED0CA] rounded-md text-[#30262A] focus:outline-none focus:border-[#30262A]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-medium text-[#30262A] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 9XXXXXXXXX"
                        className="w-full px-4 py-3 text-sm bg-[#FFF9F4] border border-[#DED0CA] rounded-md text-[#30262A] focus:outline-none focus:border-[#30262A]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-interest" className="block text-xs font-medium text-[#30262A] mb-1.5">
                        Enquiry Type
                      </label>
                      <select
                        id="contact-interest"
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full px-4 py-3 text-sm bg-[#FFF9F4] border border-[#DED0CA] rounded-md text-[#30262A] focus:outline-none focus:border-[#30262A]"
                      >
                        <option value="Salon Appointment">Salon &amp; Spa Appointment</option>
                        <option value="Bridal Consultation">Bridal Makeup Enquiry</option>
                        <option value="Beauty Academy Course">Beauty Academy Course Enquiry</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-category" className="block text-xs font-medium text-[#30262A] mb-1.5">
                        Suggested Category / Topic
                      </label>
                      <select
                        id="contact-category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 py-3 text-sm bg-[#FFF9F4] border border-[#DED0CA] rounded-md text-[#30262A] focus:outline-none focus:border-[#30262A]"
                      >
                        {SUGGESTED_SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Academy Training Institute">Academy Training Institute</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-[#30262A] mb-1.5">
                      Message or Preferred Timing
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Let us know how we can help, your preferred date, or course questions..."
                      className="w-full px-4 py-3 text-sm bg-[#FFF9F4] border border-[#DED0CA] rounded-md text-[#30262A] focus:outline-none focus:border-[#30262A]"
                    />
                  </div>

                  {error && (
                    <p role="alert" className="text-xs font-medium text-[#8C2D3B]">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3.5 text-sm font-medium bg-[#30262A] text-[#FFF9F4] rounded-md hover:bg-[#46383D] transition-colors cursor-pointer"
                  >
                    Prepare WhatsApp Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
