import { useState, FormEvent } from 'react';
import { ArrowUpRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import {
  BUSINESS_INFO,
  TESTIMONIAL_PLACEHOLDERS,
  buildWhatsAppUrl,
} from '../data/salonData';

interface TestimonialsPageProps {
  onOpenBooking: (presetTopic?: string) => void;
}

export function TestimonialsPage({ onOpenBooking }: TestimonialsPageProps) {
  const [reviewerName, setReviewerName] = useState('');
  const [visitType, setVisitType] = useState('Salon & Spa Service');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submittedNote, setSubmittedNote] = useState(false);

  const handleFeedbackSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!reviewerName.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (message.trim().length < 10) {
      setError('Please write a brief note about your experience (at least 10 characters).');
      return;
    }
    setError('');
    setSubmittedNote(true);
  };

  return (
    <div className="bg-[#FFF9F4]">
      {/* Page Header */}
      <section className="py-14 lg:py-20 border-b border-[#EDE1DB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#9D7A43]">
                Client &amp; Student Reflections · Editable Placeholders
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#30262A] leading-tight text-balance">
                Testimonials &amp; Client Reviews
              </h1>
              <p className="text-base text-[#5E5054] leading-relaxed">
                To ensure complete authenticity, no unverified reviews or ratings are invented here. The slots below are ready for verified client and student testimonials, or you can view live reviews directly on our Google Maps listing.
              </p>
            </div>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium bg-[#30262A] text-[#FFF9F4] rounded-md hover:bg-[#46383D] transition-colors whitespace-nowrap shrink-0 self-start lg:self-auto"
            >
              View Reviews on Google Maps
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Editable Testimonial Slots */}
      <section className="py-16 lg:py-20 border-b border-[#EDE1DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIAL_PLACEHOLDERS.map((item) => (
              <article
                key={item.id}
                className="p-7 bg-white border border-[#EDE1DB] rounded-xl flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-[#9D7A43]">
                    {item.slotLabel}
                  </p>
                  <blockquote className="font-display text-xl text-[#30262A] leading-relaxed">
                    &ldquo;{item.quotePlaceholder}&rdquo;
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-[#F3E9E4] space-y-1">
                  <p className="text-sm font-semibold text-[#30262A]">
                    {item.authorPlaceholder}
                  </p>
                  <p className="text-xs text-[#76666A]">
                    {item.type} · {item.datePlaceholder}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Experience Form */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 bg-[#FFF9F4] border border-[#EDE1DB] rounded-xl space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#9D7A43]">
                Visited Recently?
              </p>
              <h2 className="font-display text-3xl font-semibold text-[#30262A]">
                Share Your Experience With Shravani
              </h2>
              <p className="text-sm text-[#5E5054]">
                Send feedback directly to our team via WhatsApp or post a public review on Google Maps.
              </p>
            </div>

            {submittedNote ? (
              <div className="py-6 space-y-4">
                <div className="flex items-center gap-3 text-[#30262A]">
                  <CheckCircle2 className="w-6 h-6 text-[#9D7A43] shrink-0" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-semibold">
                    Thank you, {reviewerName}
                  </h3>
                </div>
                <p className="text-sm text-[#5E5054] leading-relaxed">
                  Your feedback draft is ready. You can send it directly to our salon desk on WhatsApp or publish your review on Google Maps.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={buildWhatsAppUrl(
                      `Hello Shravani Salon & Spa, here is my feedback (${visitType}) from ${reviewerName}: "${message.trim()}"`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium bg-[#30262A] text-[#FFF9F4] rounded-md hover:bg-[#46383D] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    Send Feedback on WhatsApp
                  </a>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium border border-[#30262A] text-[#30262A] rounded-md hover:bg-white transition-colors"
                  >
                    Post on Google Maps
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmittedNote(false)}
                  className="text-xs font-medium text-[#5E5054] underline underline-offset-4 cursor-pointer"
                >
                  Write another note
                </button>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="rev-name" className="block text-xs font-medium text-[#30262A] mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="rev-name"
                      type="text"
                      value={reviewerName}
                      onChange={(e) => setReviewerName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DED0CA] rounded-md text-[#30262A] focus:outline-none focus:border-[#30262A]"
                    />
                  </div>
                  <div>
                    <label htmlFor="rev-type" className="block text-xs font-medium text-[#30262A] mb-1.5">
                      Visit Category
                    </label>
                    <select
                      id="rev-type"
                      value={visitType}
                      onChange={(e) => setVisitType(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DED0CA] rounded-md text-[#30262A] focus:outline-none focus:border-[#30262A]"
                    >
                      <option value="Salon & Spa Service">Salon &amp; Spa Service</option>
                      <option value="Bridal or Occasion Makeup">Bridal or Occasion Makeup</option>
                      <option value="Beauty Academy Training">Beauty Academy Training</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="rev-message" className="block text-xs font-medium text-[#30262A] mb-1.5">
                    Your Feedback
                  </label>
                  <textarea
                    id="rev-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your experience with our salon or training academy..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DED0CA] rounded-md text-[#30262A] focus:outline-none focus:border-[#30262A]"
                  />
                </div>

                {error && (
                  <p role="alert" className="text-xs font-medium text-[#8C2D3B]">
                    {error}
                  </p>
                )}

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    className="px-6 py-3 text-sm font-medium bg-[#30262A] text-[#FFF9F4] rounded-md hover:bg-[#46383D] transition-colors cursor-pointer"
                  >
                    Prepare Feedback
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenBooking()}
                    className="text-xs font-medium text-[#5E5054] underline underline-offset-4 hover:text-[#30262A] cursor-pointer"
                  >
                    Book an Appointment Instead
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
