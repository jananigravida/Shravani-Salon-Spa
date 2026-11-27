export type PageId = 'home' | 'about' | 'services' | 'gallery' | 'testimonials' | 'contact';

export const BUSINESS_INFO = {
  fullName: 'Shravani Salon & Spa | Parlour | Academy - Training Institute',
  shortName: 'Shravani',
  descriptor: 'Salon & Spa · Parlour · Beauty Training Academy',
  description:
    'A beauty parlour and beauty training institute providing beauty-related services and training.',
  address: 'Market Road, Iqbal Ahmed Nagar, Mancherial, Telangana 504208, India',
  city: 'Mancherial, Telangana',
  phoneDisplay: '+91 9110559033',
  phoneHref: 'tel:+919110559033',
  whatsappNumber: '919110559033',
  googleMapsUrl: 'https://maps.app.goo.gl/Ady3tt2RTX3wTkAt8',
  placeholders: {
    email: '[Email Address Placeholder — Update with Salon Email]',
    workingHours: '[Working Hours Placeholder — Confirm Daily Timings via Phone]',
    socialInstagram: '[Instagram Handle Placeholder]',
    socialFacebook: '[Facebook Page Placeholder]',
    founderNote:
      '[Editable Salon Story Placeholder — Share your founder story, team philosophy, and vision for Shravani Salon & Spa in Mancherial.]',
  },
} as const;

export const IMAGES = {
  heroSalon: '/src/assets/images/hero_salon_interior_1795770183056.jpg',
  bridalMakeup: '/src/assets/images/service_bridal_makeup_1795770184646.jpg',
  hairStyling: '/src/assets/images/service_hair_styling_1795770184876.jpg',
  spaSkincare: '/src/assets/images/service_spa_skincare_1795770184515.jpg',
  academyTraining: '/src/assets/images/academy_beauty_training_1795770185895.jpg',
  serviceHairCare: '/src/assets/images/service_hair_care_1795773371551.jpg',
  serviceHairBlowout: '/src/assets/images/service_hair_blowout_1795773372116.jpg',
  serviceFacialGlow: '/src/assets/images/service_facial_glow_1795773372328.jpg',
  serviceIndianBridal: '/src/assets/images/service_indian_bridal_1795773373013.jpg',
  servicePartyMakeup: '/src/assets/images/service_party_makeup_1795773373562.jpg',
  serviceBeautyCare: '/src/assets/images/service_parlour_beauty_care_1795773373850.jpg',
  serviceSpaRelaxation: '/src/assets/images/service_spa_relaxation_1795773375504.jpg',
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type ServiceGroup = 'all' | 'hair' | 'skin-spa' | 'makeup-bridal' | 'beauty-care';

export interface SuggestedService {
  id: string;
  index: string;
  title: string;
  group: Exclude<ServiceGroup, 'all'>;
  groupLabel: string;
  shortDescription: string;
  placeholderNote: string;
  image: string;
  imageAlt: string;
}

export const SUGGESTED_SERVICES: SuggestedService[] = [
  {
    id: 'hair-care',
    index: '01',
    title: 'Hair Care',
    group: 'hair',
    groupLabel: 'Suggested Category · Subject to Confirmation',
    shortDescription:
      'Placeholder category for nourishing scalp and hair care rituals tailored to individual hair needs.',
    placeholderNote:
      'Specific hair care treatments, durations, and pricing are customizable placeholders — please confirm availability directly with the salon.',
    image: IMAGES.serviceHairCare,
    imageAlt: 'Botanical hair mask bowl, amber scalp oil dropper, and wooden comb on salon counter',
  },
  {
    id: 'hair-styling',
    index: '02',
    title: 'Hair Styling',
    group: 'hair',
    groupLabel: 'Suggested Category · Subject to Confirmation',
    shortDescription:
      'Placeholder category for everyday cuts, blowouts, and occasion hair styling sessions.',
    placeholderNote:
      'Specific haircut, finishing, and event styling options to be confirmed directly with our stylists.',
    image: IMAGES.serviceHairBlowout,
    imageAlt: 'Hairstylists creating glossy blowout waves in front of champagne gold salon mirrors',
  },
  {
    id: 'skin-care',
    index: '03',
    title: 'Skin Care',
    group: 'skin-spa',
    groupLabel: 'Suggested Category · Subject to Confirmation',
    shortDescription:
      'Placeholder category for personalized skincare consultations and gentle maintenance routines.',
    placeholderNote:
      'Individual skincare treatments and product protocols are editable placeholders pending salon confirmation.',
    image: IMAGES.spaSkincare,
    imageAlt: 'Serene skincare treatment table with amber botanical dropper bottles and ivory linens',
  },
  {
    id: 'facial-treatments',
    index: '04',
    title: 'Facial Treatments',
    group: 'skin-spa',
    groupLabel: 'Suggested Category · Subject to Confirmation',
    shortDescription:
      'Placeholder category for calming facial sessions designed to refresh and brighten the complexion.',
    placeholderNote:
      'Facial varieties, session lengths, and pricing are customizable — contact us on WhatsApp for current offerings.',
    image: IMAGES.serviceFacialGlow,
    imageAlt: 'Client relaxing on warm spa bed during a soothing candlelit facial mask treatment',
  },
  {
    id: 'bridal-makeup',
    index: '05',
    title: 'Bridal Makeup',
    group: 'makeup-bridal',
    groupLabel: 'Suggested Category · Subject to Confirmation',
    shortDescription:
      'Placeholder category for bespoke bridal preparation, wedding-day makeup, and occasion readiness.',
    placeholderNote:
      'Bridal consultation details, trial availability, and package inclusions are confirmed directly upon enquiry.',
    image: IMAGES.serviceIndianBridal,
    imageAlt: 'Indian bride in ivory and gold receiving delicate bridal makeup finishing touches',
  },
  {
    id: 'makeup-services',
    index: '06',
    title: 'Makeup Services',
    group: 'makeup-bridal',
    groupLabel: 'Suggested Category · Subject to Confirmation',
    shortDescription:
      'Placeholder category for party, engagement, and festive makeup artistry tailored to your look.',
    placeholderNote:
      'Occasion makeup options and appointment slots are subject to salon confirmation.',
    image: IMAGES.servicePartyMakeup,
    imageAlt: 'Makeup artist applying luminous blush to a smiling client in a warm beauty studio',
  },
  {
    id: 'beauty-care',
    index: '07',
    title: 'Beauty Care',
    group: 'beauty-care',
    groupLabel: 'Suggested Category · Subject to Confirmation',
    shortDescription:
      'Placeholder category for classic parlour grooming and essential everyday beauty upkeep.',
    placeholderNote:
      'Full parlour care menu and service rates are editable placeholders — call or message for details.',
    image: IMAGES.serviceBeautyCare,
    imageAlt: 'Manicure and beauty grooming setup with rose quartz roller, tools, and hand cream',
  },
  {
    id: 'spa-relaxation',
    index: '08',
    title: 'Spa & Relaxation',
    group: 'skin-spa',
    groupLabel: 'Suggested Category · Subject to Confirmation',
    shortDescription:
      'Placeholder category for tranquil spa self-care sessions in a calm, unhurried setting.',
    placeholderNote:
      'Spa treatment availability, duration, and rates are confirmed directly with the salon team.',
    image: IMAGES.serviceSpaRelaxation,
    imageAlt: 'Calm spa lounge with warm basalt massage stones, candle, rolled towels, and herbal tea',
  },
];

export interface AcademyPlaceholderTrack {
  id: string;
  index: string;
  title: string;
  summary: string;
  placeholderFields: {
    duration: string;
    format: string;
    feesAndSchedule: string;
  };
}

export const ACADEMY_TRACKS: AcademyPlaceholderTrack[] = [
  {
    id: 'academy-salon-fundamentals',
    index: '01',
    title: 'Beauty Parlour & Salon Care (Placeholder Track)',
    summary:
      'Editable overview for foundational beauty parlour skills and practical studio observation.',
    placeholderFields: {
      duration: '[Duration Placeholder — Confirm Batch Length]',
      format: '[Curriculum & Hands-On Format Placeholder]',
      feesAndSchedule: '[Fee & Certification Details — Enquire Directly]',
    },
  },
  {
    id: 'academy-hair-skin',
    index: '02',
    title: 'Hair & Skin Care Skills (Placeholder Track)',
    summary:
      'Editable overview for aspiring stylists interested in hair care routines and facial techniques.',
    placeholderFields: {
      duration: '[Duration Placeholder — Confirm Batch Length]',
      format: '[Practical Workshop Details Placeholder]',
      feesAndSchedule: '[Fee & Schedule Details — Enquire Directly]',
    },
  },
  {
    id: 'academy-makeup-artistry',
    index: '03',
    title: 'Makeup Artistry Training (Placeholder Track)',
    summary:
      'Editable overview for learners seeking guided practice in occasion and bridal makeup application.',
    placeholderFields: {
      duration: '[Duration Placeholder — Confirm Batch Length]',
      format: '[Kit & Practice Session Details Placeholder]',
      feesAndSchedule: '[Admission & Timing Details — Enquire Directly]',
    },
  },
];

export const WHY_CHOOSE_US = [
  {
    index: '01',
    title: 'Beauty and Self-Care',
    description:
      'A calm space dedicated to thoughtful parlour grooming, spa relaxation, and personal confidence.',
  },
  {
    index: '02',
    title: 'Personalized Attention',
    description:
      'Every appointment and enquiry begins by listening to your preferences, comfort, and occasion needs.',
  },
  {
    index: '03',
    title: 'Professional Learning Environment',
    description:
      'Alongside client services, our training institute offers a structured setting to explore beauty skills.',
  },
  {
    index: '04',
    title: 'Convenient Location',
    description:
      'Centrally situated on Market Road, Iqbal Ahmed Nagar, Mancherial — easy to reach from across town.',
  },
];

export type GalleryCategory = 'all' | 'salon' | 'bridal' | 'hair' | 'spa' | 'academy';

export interface GalleryItem {
  id: string;
  category: Exclude<GalleryCategory, 'all'>;
  categoryLabel: string;
  title: string;
  caption: string;
  image: string;
  aspectClass: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    category: 'salon',
    categoryLabel: 'Salon & Parlour',
    title: 'Salon Sanctuary',
    caption: 'Editorial preview image — ready to be replaced with genuine Shravani Salon & Spa photography.',
    image: IMAGES.heroSalon,
    aspectClass: 'aspect-[16/10]',
  },
  {
    id: 'gal-2',
    category: 'bridal',
    categoryLabel: 'Bridal & Makeup',
    title: 'Bridal Artistry Vanity',
    caption: 'Editorial preview image — customizable placeholder for verified bridal work.',
    image: IMAGES.bridalMakeup,
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-3',
    category: 'hair',
    categoryLabel: 'Hair Styling',
    title: 'Styling Studio Mirror',
    caption: 'Editorial preview image — customizable placeholder for hair care and styling results.',
    image: IMAGES.hairStyling,
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-4',
    category: 'spa',
    categoryLabel: 'Spa & Skincare',
    title: 'Facial & Spa Suite',
    caption: 'Editorial preview image — customizable placeholder for spa treatment rooms.',
    image: IMAGES.spaSkincare,
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-5',
    category: 'academy',
    categoryLabel: 'Training Academy',
    title: 'Academy Practice Stations',
    caption: 'Editorial preview image — customizable placeholder for Shravani Academy sessions.',
    image: IMAGES.academyTraining,
    aspectClass: 'aspect-[4/3]',
  },
];

export interface TestimonialPlaceholder {
  id: string;
  type: 'Salon Client' | 'Bridal Client' | 'Academy Student';
  slotLabel: string;
  quotePlaceholder: string;
  authorPlaceholder: string;
  datePlaceholder: string;
}

export const TESTIMONIAL_PLACEHOLDERS: TestimonialPlaceholder[] = [
  {
    id: 'rev-1',
    type: 'Salon Client',
    slotLabel: 'Editable Review Slot 01 · Pending Salon Verification',
    quotePlaceholder:
      '[Verified Client Review Placeholder — Replace this slot with genuine customer feedback or sync verified reviews from your Google Maps profile.]',
    authorPlaceholder: '[Client Name Placeholder]',
    datePlaceholder: 'Service Category · Verified Status Pending',
  },
  {
    id: 'rev-2',
    type: 'Bridal Client',
    slotLabel: 'Editable Review Slot 02 · Pending Salon Verification',
    quotePlaceholder:
      '[Verified Bridal Review Placeholder — Share real words from brides and families who visited Shravani Salon & Spa in Mancherial.]',
    authorPlaceholder: '[Client Name Placeholder]',
    datePlaceholder: 'Bridal Enquiry · Verified Status Pending',
  },
  {
    id: 'rev-3',
    type: 'Academy Student',
    slotLabel: 'Editable Review Slot 03 · Pending Salon Verification',
    quotePlaceholder:
      '[Verified Student Feedback Placeholder — Add authentic reflections from learners who attended training at Shravani Academy.]',
    authorPlaceholder: '[Student Name Placeholder]',
    datePlaceholder: 'Training Institute · Verified Status Pending',
  },
];
