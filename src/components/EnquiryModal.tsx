import { useState, useEffect, FormEvent } from 'react';
import { X, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, SUGGESTED_SERVICES, buildWhatsAppUrl } from '../data/salonData';

interface EnquiryModalProps {
  isOpen: boolean;
  initialTopic?: string;
  onClose: () => void;
}

export function EnquiryModal({ isOpen, initialTopic, onClose }: EnquiryModalProps) {
  const [enquiryType, setEnquiryType] = useState<'salon' | 'academy'>('salon');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState(initialTopic || 'Hair Care');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialTopic) {
      if (initialTopic.toLowerCase().includes('academy') || initialTopic.toLowerCase().includes('course') || initialTopic.toLowerCase().includes('training')) {
        setEnquiryType('academy');
      } else {
        setEnquiryType('salon');
      }
      setTopic(initialTopic);
    }
    setSubmitted(false);
    setError('');
  }, [initialTopic, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmedPhone = phone.replace(/\s+/g, '');

  const buildSummaryMessage = () => {
    const kind = enquiryType === 'academy' ? 'Beauty Academy Training Enquiry' : 'Salon Appointment Request';
    const lines = [
      `Hello Shravani Salon & Spa,`,
      `Enquiry Type: ${kind}`,
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Interested In: ${topic}`,
      preferredDate ? `Preferred Date: ${preferredDate}` : '',
      notes.trim() ? `Notes: ${notes.trim()}` : '',
    ].filter(Boolean);
    return lines.join('\n');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!/^[+\d][\d\s-]{7,15}$/.test(trimmedPhone)) {
      setError('Please enter a valid 10-digit or international phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const whatsappLink = buildWhatsAppUrl(buildSummaryMessage());

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#30262A]/60 backdrop-blur-xs p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#FFF9F4] border border-[#EDE1DB] rounded-xl shadow-xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-[#EDE1DB] bg-white">
          <div>
            <p className="text-xs font-medium tracking-wider uppercase text-[#9D7A43]">
              Direct Enquiry · Mancherial
            </p>
            <h2
              id="enquiry-modal-title"
              className="font-display text-2xl font-semibold text-[#30262A] mt-0.5"
            >
              Book an Appointment or Course Enquiry
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-10 h-10 inline-flex items-center justify-center rounded-md text-[#5E5054] hover:bg-[#FBF1F4] hover:text-[#30262A] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-4 space-y-5">
              <div className="w-12 h-12 rounded-full bg-[#FBF1F4] text-[#30262A] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-[#9D7A43]" aria-hidden="true" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-2xl font-semibold text-[#30262A]">
                  Enquiry Prepared for {name}
                </h3>
                <p className="text-sm text-[#5E5054] leading-relaxed max-w-md mx-auto">
                  Send your details directly to our salon desk via WhatsApp or call{' '}
                  <span className="font-medium text-[#30262A] tabular-nums">
                    {BUSINESS_INFO.phoneDisplay}
                  </span>{' '}
                  to confirm your slot or training batch details.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium bg-[#30262A] text-[#FFF9F4] rounded-md hover:bg-[#46383D] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Send on WhatsApp
                </a>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium border border-[#30262A] text-[#30262A] rounded-md hover:bg-[#FBF1F4] transition-colors"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  Call {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-medium text-[#5E5054] underline underline-offset-4 hover:text-[#30262A] cursor-pointer"
              >
                Edit enquiry details
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Segmented Type Selector */}
              <div className="grid grid-cols-2 gap-1 p-1 bg-[#F3E9E4] rounded-lg">
                <button
                  type="button"
                  onClick={() => {
                    setEnquiryType('salon');
                    if (topic.toLowerCase().includes('academy') || topic.toLowerCase().includes('course')) {
                      setTopic('Hair Care');
                    }
                  }}
                  className={`py-2 px-3 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    enquiryType === 'salon'
                      ? 'bg-white text-[#30262A] shadow-xs'
                      : 'text-[#5E5054] hover:text-[#30262A]'
                  }`}
                >
                  Salon &amp; Spa Service
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEnquiryType('academy');
                    setTopic('Beauty Academy Training Enquiry');
                  }}
                  className={`py-2 px-3 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    enquiryType === 'academy'
                      ? 'bg-white text-[#30262A] shadow-xs'
                      : 'text-[#5E5054] hover:text-[#30262A]'
                  }`}
                >
                  Academy Training
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-medium text-[#30262A] mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DED0CA] rounded-md text-[#30262A] placeholder:text-[#8E7D82] focus:outline-none focus:border-[#30262A]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-medium text-[#30262A] mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 9XXXXXXXXX"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DED0CA] rounded-md text-[#30262A] placeholder:text-[#8E7D82] focus:outline-none focus:border-[#30262A]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-topic" className="block text-xs font-medium text-[#30262A] mb-1.5">
                    {enquiryType === 'academy' ? 'Training Interest' : 'Suggested Service Category'}
                  </label>
                  <select
                    id="modal-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DED0CA] rounded-md text-[#30262A] focus:outline-none focus:border-[#30262A]"
                  >
                    {enquiryType === 'salon' ? (
                      <>
                        {SUGGESTED_SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="General Salon Consultation">General Salon Consultation</option>
                      </>
                    ) : (
                      <>
                        <option value="Beauty Academy Training Enquiry">General Beauty Academy Enquiry</option>
                        <option value="Beauty Parlour & Salon Care Course">Beauty Parlour &amp; Salon Care</option>
                        <option value="Hair & Skin Care Training">Hair &amp; Skin Care Skills</option>
                        <option value="Makeup Artistry Training">Makeup Artistry Training</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-date" className="block text-xs font-medium text-[#30262A] mb-1.5">
                    Preferred Date (Optional)
                  </label>
                  <input
                    id="modal-date"
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DED0CA] rounded-md text-[#30262A] focus:outline-none focus:border-[#30262A]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-notes" className="block text-xs font-medium text-[#30262A] mb-1.5">
                  Message or Questions (Optional)
                </label>
                <textarea
                  id="modal-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share preferred timing, occasion date, or questions about courses..."
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DED0CA] rounded-md text-[#30262A] placeholder:text-[#8E7D82] focus:outline-none focus:border-[#30262A]"
                />
              </div>

              {error && (
                <p role="alert" className="text-xs font-medium text-[#8C2D3B]">
                  {error}
                </p>
              )}

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-5 text-sm font-medium bg-[#30262A] text-[#FFF9F4] rounded-md hover:bg-[#46383D] transition-colors cursor-pointer"
                >
                  Prepare Enquiry &amp; WhatsApp Link
                </button>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium border border-[#DED0CA] bg-white text-[#30262A] rounded-md hover:border-[#30262A] transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  Call Desk
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
