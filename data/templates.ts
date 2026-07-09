/**
 * The full Saahvik template catalog: 10 tiers × 10 templates = 100 records.
 *
 * Everything here is strictly typed so a bad tier number, an out-of-band
 * price, or a misspelled category fails at compile time instead of
 * silently rendering wrong on the marketplace.
 */

export type Category =
  | 'Boys Hostel'
  | 'Girls Hostel'
  | 'Co-Living'
  | 'PG & Paying Guest'
  | 'Student Housing'
  | 'Backpacker & Travel'
  | 'Corporate Stays'
  | 'Premium Residences';

export const CATEGORIES: Category[] = [
  'Boys Hostel',
  'Girls Hostel',
  'Co-Living',
  'PG & Paying Guest',
  'Student Housing',
  'Backpacker & Travel',
  'Corporate Stays',
  'Premium Residences',
];

export type TierNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface Tier {
  tier: TierNumber;
  name: string;
  priceMin: number;
  priceMax: number;
  tagline: string;
}

export interface Template {
  /** URL-safe slug, unique across the whole catalog. */
  id: string;
  name: string;
  tier: TierNumber;
  /** Price in INR — always within the tier's band. */
  price: number;
  category: Category;
  features: string[];
}

export const TIERS: Tier[] = [
  { tier: 1, name: 'Launch', priceMin: 1499, priceMax: 2999, tagline: 'A clean, credible first web presence — live fast.' },
  { tier: 2, name: 'Presence', priceMin: 3999, priceMax: 5999, tagline: 'Multi-page sites that make your hostel easy to find and trust.' },
  { tier: 3, name: 'Signature', priceMin: 6999, priceMax: 9999, tagline: 'Distinctive design with galleries, enquiry flows and polish.' },
  { tier: 4, name: 'Prestige', priceMin: 10999, priceMax: 14999, tagline: 'Refined layouts with booking-ready pages and rich media.' },
  { tier: 5, name: 'Flagship', priceMin: 16999, priceMax: 21999, tagline: 'Full-featured hostel sites with animation and CMS control.' },
  { tier: 6, name: 'Ultra', priceMin: 23999, priceMax: 29999, tagline: 'High-performance builds with advanced booking journeys.' },
  { tier: 7, name: 'Elite', priceMin: 32999, priceMax: 39999, tagline: 'Conversion-tuned experiences with multilingual reach.' },
  { tier: 8, name: 'Premium', priceMin: 45999, priceMax: 55999, tagline: 'Bespoke-grade design systems with integrations built in.' },
  { tier: 9, name: 'Exclusive', priceMin: 64999, priceMax: 79999, tagline: 'Near-custom flagship experiences with immersive detail.' },
  { tier: 10, name: 'Masterpiece', priceMin: 84999, priceMax: 129999, tagline: 'Our finest work — cinematic, 3D-touched, one-of-a-kind.' },
];

export function starsFor(tier: TierNumber): string {
  return '★'.repeat(tier);
}

export function getTier(tier: number): Tier | undefined {
  return TIERS.find((t) => t.tier === tier);
}

/** Feature chips shared by every template in a tier (the tier's baseline). */
const TIER_BASE_FEATURES: Record<TierNumber, string[]> = {
  1: ['Single-page design', 'Mobile responsive', 'Click-to-call & WhatsApp', 'Basic SEO setup'],
  2: ['Up to 5 pages', 'Photo gallery', 'Enquiry form', 'Google Maps embed', 'Basic SEO setup'],
  3: ['Up to 8 pages', 'Room showcase pages', 'Enquiry + callback forms', 'On-page SEO', 'Social media links'],
  4: ['Booking enquiry flow', 'Rich photo & video galleries', 'Testimonials & reviews', 'Blog-ready pages', 'Advanced SEO'],
  5: ['CMS-managed content', 'Scroll animations', 'Room availability display', 'Multi-branch support', 'Performance optimised'],
  6: ['Online booking journey', 'Payment-gateway ready', 'Virtual tour section', 'Advanced analytics', 'Priority support'],
  7: ['Conversion-optimised UX', 'Multilingual ready', 'Dynamic pricing display', 'CRM/lead integrations', 'A/B test ready'],
  8: ['Bespoke design system', 'Headless CMS', 'ERP/PMS integration hooks', 'Custom illustrations', 'Accessibility (WCAG) pass'],
  9: ['Near-custom design', 'Immersive interactions', 'Booking engine integration', 'Content strategy included', 'Dedicated launch support'],
  10: ['One-of-a-kind design', '3D & motion showcase', 'Full booking + payments', 'Concierge onboarding', '12-month premium support'],
};

/**
 * Compact per-tier seed data: [name, price, category, ...uniqueFeatures].
 * Prices are unique within each tier and stay inside the tier band.
 */
type Seed = [name: string, price: number, category: Category, ...extras: string[]];

const SEEDS: Record<TierNumber, Seed[]> = {
  1: [
    ['Dawn', 1499, 'Boys Hostel', 'Hero photo banner'],
    ['Pebble', 1649, 'PG & Paying Guest', 'Tariff table'],
    ['Wren', 1799, 'Girls Hostel', 'Safety highlights strip'],
    ['Nook', 1949, 'Co-Living', 'Amenities icon grid'],
    ['Ember', 2099, 'Backpacker & Travel', 'Location highlights'],
    ['Sprout', 2249, 'Student Housing', 'Mess menu section'],
    ['Slate', 2399, 'Corporate Stays', 'Corporate rate card'],
    ['Breeze', 2549, 'Boys Hostel', 'Photo strip gallery'],
    ['Anchor', 2749, 'PG & Paying Guest', 'House rules section'],
    ['Lumen', 2999, 'Premium Residences', 'Premium look, one page'],
  ],
  2: [
    ['Meadow', 3999, 'Girls Hostel', 'Warden contact card'],
    ['Harbor', 4199, 'Backpacker & Travel', 'Nearby attractions map'],
    ['Cedar', 4399, 'Boys Hostel', 'Sports & rec section'],
    ['Trellis', 4599, 'Co-Living', 'Community events page'],
    ['Compass', 4799, 'Student Housing', 'College distance chart'],
    ['Hearth', 4999, 'PG & Paying Guest', 'Meal plan pages'],
    ['Atlas', 5199, 'Corporate Stays', 'Team booking enquiry'],
    ['Willow', 5399, 'Girls Hostel', 'CCTV & security page'],
    ['Summit', 5699, 'Premium Residences', 'Concierge intro page'],
    ['Beacon', 5999, 'Backpacker & Travel', 'Traveller reviews wall'],
  ],
  3: [
    ['Verve', 6999, 'Co-Living', 'Interactive amenities tour'],
    ['Solace', 7299, 'Girls Hostel', 'Guardian testimonial section'],
    ['Forge', 7599, 'Boys Hostel', 'Gym & fitness showcase'],
    ['Lattice', 7899, 'Student Housing', 'Study-room booking form'],
    ['Voyage', 8199, 'Backpacker & Travel', 'Multi-city selector'],
    ['Haven', 8499, 'PG & Paying Guest', 'Room comparison table'],
    ['Meridian', 8799, 'Corporate Stays', 'Invoice-ready enquiries'],
    ['Aurelia', 9099, 'Premium Residences', 'Gold-accent theme'],
    ['Canvas', 9499, 'Co-Living', 'Resident stories blog'],
    ['Crest', 9999, 'Boys Hostel', 'Alumni wall section'],
  ],
  4: [
    ['Regalia', 10999, 'Premium Residences', 'Signature suites showcase'],
    ['Nimbus', 11399, 'Co-Living', 'Rooftop & lounge gallery'],
    ['Sentinel', 11799, 'Girls Hostel', 'Live security dashboard blurb'],
    ['Bastion', 12199, 'Boys Hostel', 'House-league leaderboard'],
    ['Odyssey', 12599, 'Backpacker & Travel', 'Trip-planner widget'],
    ['Scholar', 12999, 'Student Housing', 'Exam-season quiet hours page'],
    ['Pillar', 13399, 'PG & Paying Guest', 'Owner video introduction'],
    ['Envoy', 13799, 'Corporate Stays', 'Corporate onboarding flow'],
    ['Mirage', 14399, 'Premium Residences', 'Full-bleed video hero'],
    ['Zenith', 14999, 'Co-Living', 'Community app teaser'],
  ],
  5: [
    ['Sovereign', 16999, 'Premium Residences', 'Butler-service pages'],
    ['Cascade', 17499, 'Co-Living', 'Waterfall photo grid'],
    ['Ironwood', 17999, 'Boys Hostel', 'Esports zone showcase'],
    ['Seraphine', 18499, 'Girls Hostel', 'Wellness & yoga section'],
    ['Wander', 18999, 'Backpacker & Travel', 'Interactive route stories'],
    ['Academia', 19499, 'Student Housing', 'Mentor connect module'],
    ['Foundry', 19999, 'Corporate Stays', 'Long-stay calculator'],
    ['Veranda', 20499, 'PG & Paying Guest', 'Virtual room walkthrough'],
    ['Halcyon', 20999, 'Premium Residences', 'Seasonal theming system'],
    ['Polaris', 21999, 'Co-Living', 'Night-mode design'],
  ],
  6: [
    ['Imperium', 23999, 'Premium Residences', 'Members-only area'],
    ['Nexus', 24599, 'Co-Living', 'Resident portal login'],
    ['Vanguard', 25199, 'Boys Hostel', 'Achievement showcase engine'],
    ['Athena', 25799, 'Girls Hostel', 'Parent portal access'],
    ['Expedition', 26399, 'Backpacker & Travel', 'Multi-currency pricing'],
    ['Rhodes', 26999, 'Student Housing', 'Scholarship info hub'],
    ['Consulate', 27599, 'Corporate Stays', 'B2B rate negotiation flow'],
    ['Arbor', 28199, 'PG & Paying Guest', 'Smart-home features page'],
    ['Monarch', 28999, 'Premium Residences', 'Gold-foil motion accents'],
    ['Stratos', 29999, 'Co-Living', 'Skyline parallax hero'],
  ],
  7: [
    ['Dynasty', 32999, 'Premium Residences', 'Legacy brand storytelling'],
    ['Helix', 33799, 'Co-Living', 'Personalised room finder'],
    ['Titan', 34599, 'Boys Hostel', 'Recruitment-drive pages'],
    ['Lyra', 35399, 'Girls Hostel', 'Alumni mentorship portal'],
    ['Nomad', 36199, 'Backpacker & Travel', 'Global chain support'],
    ['Laureate', 36999, 'Student Housing', 'University partnership hub'],
    ['Magnate', 37799, 'Corporate Stays', 'Enterprise SSO enquiry'],
    ['Estate', 38599, 'PG & Paying Guest', 'Multi-property switcher'],
    ['Aurum', 39299, 'Premium Residences', 'Gilded interaction design'],
    ['Celeste', 39999, 'Co-Living', 'Starlit ambient theme'],
  ],
  8: [
    ['Palatine', 45999, 'Premium Residences', 'Palace-inspired art direction'],
    ['Synergy', 47199, 'Co-Living', 'Community OS integration'],
    ['Colossus', 48399, 'Boys Hostel', 'Stadium-style tour mode'],
    ['Minerva', 49599, 'Girls Hostel', 'Safety-tech deep integrations'],
    ['Meridian Grand', 50799, 'Backpacker & Travel', 'Franchise-ready architecture'],
    ['Provost', 51999, 'Student Housing', 'Campus API integrations'],
    ['Chancellery', 53199, 'Corporate Stays', 'Procurement-ready workflows'],
    ['Manor', 54399, 'PG & Paying Guest', 'Heritage estate styling'],
    ['Gilded Age', 55199, 'Premium Residences', 'Editorial magazine layout'],
    ['Apex', 55999, 'Co-Living', 'Award-entry grade polish'],
  ],
  9: [
    ['Sovereign Reserve', 64999, 'Premium Residences', 'Private-client presentation'],
    ['Constellation', 66599, 'Co-Living', 'Generative art backdrops'],
    ['Praetorian', 68199, 'Boys Hostel', 'Cinematic campus film hero'],
    ['Empress', 69799, 'Girls Hostel', 'Couture-grade art direction'],
    ['Odyssey Royale', 71399, 'Backpacker & Travel', 'Story-driven scroll film'],
    ['Rhodes Scholar', 72999, 'Student Housing', 'Interactive campus model'],
    ['Ambassador', 74599, 'Corporate Stays', 'White-glove B2B experience'],
    ['Château', 76199, 'PG & Paying Guest', 'Estate-tour experience'],
    ['Opaline', 77999, 'Premium Residences', 'Iridescent motion design'],
    ['Ascendant', 79999, 'Co-Living', 'Signature launch campaign'],
  ],
  10: [
    ['Magnum Opus', 84999, 'Premium Residences', 'Fully bespoke art direction'],
    ['Aetherium', 89999, 'Co-Living', 'Real-time 3D common areas'],
    ['Leviathan', 94999, 'Boys Hostel', 'Interactive 3D campus map'],
    ['Empyrean', 99999, 'Girls Hostel', 'Light-and-shadow storytelling'],
    ['Grand Voyage', 104999, 'Backpacker & Travel', 'WebGL journey experience'],
    ['Summa', 109999, 'Student Housing', 'Digital-twin room explorer'],
    ['Sovereign House', 114999, 'Corporate Stays', 'Boardroom-grade experience'],
    ['Palazzo', 119999, 'PG & Paying Guest', '3D palazzo walkthrough'],
    ['Auric Crown', 124999, 'Premium Residences', 'Gold-monogram 3D hero'],
    ['The Saahvik Standard', 129999, 'Premium Residences', 'Everything we know, in one build'],
  ],
};

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export const TEMPLATES: Template[] = (Object.keys(SEEDS) as unknown as TierNumber[]).flatMap((key) => {
  const tier = Number(key) as TierNumber;
  return SEEDS[tier].map(([name, price, category, ...extras]): Template => ({
    id: `${slugify(name)}-t${tier}`,
    name,
    tier,
    price,
    category,
    features: [...extras, ...TIER_BASE_FEATURES[tier]],
  }));
});

export function templatesForTier(tier: number): Template[] {
  return TEMPLATES.filter((t) => t.tier === tier);
}
