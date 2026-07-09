import type { Category, Template, Tier } from '@/data/templates';
import { FONT_PAIRS, PALETTES, type DemoConfig } from '@/data/demos';
import { templateEnquiryMessage, whatsappLink } from '@/lib/site';

/**
 * Renders a complete demo hostel website from a template + its DemoConfig.
 * Purely static (server component): palette/fonts/radius arrive as CSS
 * variables, layout variety comes from the config, and section richness
 * scales with the template's tier.
 */

interface CategoryContent {
  suffix: string;
  audience: string;
  intro: string;
  rooms: [name: string, price: number, unit: string, desc: string][];
  amenities: string[];
  place: string;
}

const CATEGORY_CONTENT: Record<Category, CategoryContent> = {
  'Boys Hostel': {
    suffix: 'Boys Hostel',
    audience: 'students and young professionals',
    intro: 'A well-run boys hostel where discipline and comfort go together — steady wifi, honest food and a warden who actually picks up the phone.',
    rooms: [
      ['4-Sharing Room', 5500, '/mo', 'Bunk beds, lockers and study desks for four.'],
      ['3-Sharing Room', 6500, '/mo', 'A balanced room with cupboards and a shared balcony.'],
      ['2-Sharing AC Room', 8500, '/mo', 'Air-conditioned twin room with attached washroom.'],
      ['Single Room', 11000, '/mo', 'Your own quiet space with a study nook.'],
      ['Single AC Deluxe', 13500, '/mo', 'Premium single with AC, geyser and balcony.'],
      ['Executive Suite', 16000, '/mo', 'Extra-large room for final-years and working residents.'],
    ],
    amenities: ['High-speed WiFi', '4-time Mess', 'Gym & Sports Room', '24×7 Security', 'Laundry Service', 'Power Backup', 'Study Hall', 'Two-wheeler Parking'],
    place: '5 min from the metro · opposite City Engineering College',
  },
  'Girls Hostel': {
    suffix: 'Girls Hostel',
    audience: 'students and working women',
    intro: 'A safe, warm and spotless girls hostel — biometric entry, lady wardens on every floor and home-style meals that taste like home.',
    rooms: [
      ['4-Sharing Room', 6000, '/mo', 'Bright shared room with personal lockers.'],
      ['3-Sharing Room', 7000, '/mo', 'Comfortable triple with attached washroom.'],
      ['2-Sharing AC Room', 9000, '/mo', 'AC twin sharing with wardrobe and dresser.'],
      ['Single Room', 11500, '/mo', 'A private, peaceful room of your own.'],
      ['Single AC Premium', 14000, '/mo', 'AC single with balcony and premium interiors.'],
      ['Studio Suite', 17000, '/mo', 'Independent studio with kitchenette.'],
    ],
    amenities: ['Biometric Entry', 'CCTV & Lady Wardens', 'Home-style Mess', 'High-speed WiFi', 'In-house Laundry', 'Hot Water 24×7', 'Common Lounge', 'Doctor on Call'],
    place: 'Gated lane · 3 min from University Road',
  },
  'Co-Living': {
    suffix: 'Co-Living',
    audience: 'young professionals and creators',
    intro: 'Co-living designed like a community, not a corridor — shared kitchens, curated events and neighbours who become your people.',
    rooms: [
      ['Shared Twin Room', 9500, '/mo', 'Designer twin with smart locks and workspace.'],
      ['Private Room', 14500, '/mo', 'Fully furnished private room, community access.'],
      ['Private Ensuite', 17500, '/mo', 'Private room with attached bath and balcony.'],
      ['Studio', 21500, '/mo', 'Self-contained studio with kitchenette.'],
      ['1-BHK Loft', 26500, '/mo', 'A loft-style apartment within the community.'],
      ['Penthouse Room', 32000, '/mo', 'Top-floor suite with skyline views.'],
    ],
    amenities: ['Community Events', 'Co-working Lounge', 'Smart Locks', 'Housekeeping', 'Netflix Lounge', 'Rooftop Deck', 'Gym & Yoga Studio', 'Pet Friendly'],
    place: 'In the middle of the startup district',
  },
  'PG & Paying Guest': {
    suffix: 'PG',
    audience: 'working professionals and students',
    intro: 'A paying-guest stay that feels managed, not makeshift — fixed menus, fair bills and zero surprise deductions.',
    rooms: [
      ['3-Sharing Room', 6500, '/mo', 'Well-ventilated triple with cupboards.'],
      ['2-Sharing Room', 8000, '/mo', 'Twin sharing with balcony and geyser.'],
      ['2-Sharing AC', 9500, '/mo', 'AC twin with attached washroom.'],
      ['Single Room', 12000, '/mo', 'Private room with all meals included.'],
      ['Single AC Deluxe', 14500, '/mo', 'AC single with fridge and smart TV.'],
      ['Family Room', 18000, '/mo', 'Large room for couples or siblings.'],
    ],
    amenities: ['All Meals Included', 'WiFi & DTH', 'Housekeeping', 'RO Drinking Water', 'Washing Machine', 'Power Backup', 'Fridge Access', 'No Lock-in'],
    place: 'Walkable from the IT park shuttle stop',
  },
  'Student Housing': {
    suffix: 'Student Halls',
    audience: 'university students',
    intro: 'Purpose-built student housing with exam-season quiet hours, mentor connects and a reading room that stays open later than the library.',
    rooms: [
      ['Quad Room', 5800, '/mo', 'Four-bed room with personal study desks.'],
      ['Triple Room', 6800, '/mo', 'Triple sharing near the study commons.'],
      ['Twin Room', 8800, '/mo', 'Twin with bookshelves and pinboards.'],
      ['Single Room', 11800, '/mo', 'Distraction-free single for deep work.'],
      ['Single Plus', 13800, '/mo', 'Bigger single with AC and balcony.'],
      ['Research Suite', 16800, '/mo', "Postgrad suite with a proper writer's desk."],
    ],
    amenities: ['24×7 Reading Room', 'Mentor Connect', 'Mess with Brain Food', 'High-speed WiFi', 'Quiet Hours Policy', 'Laundry', 'Sports Yard', 'Campus Shuttle'],
    place: '400 m from the university main gate',
  },
  'Backpacker & Travel': {
    suffix: 'Backpackers',
    audience: 'travellers from everywhere',
    intro: 'A backpacker hostel that gets it — social when you want stories, silent when you need sleep, and a café that opens before your bus leaves.',
    rooms: [
      ['8-Bed Mixed Dorm', 499, '/night', 'Classic dorm with curtains and reading lights.'],
      ['6-Bed Mixed Dorm', 649, '/night', 'Roomier dorm with ensuite bath.'],
      ['4-Bed Female Dorm', 749, '/night', 'Women-only dorm with vanity corner.'],
      ['Private Twin', 1499, '/night', 'Private room for two, shared lounge.'],
      ['Private Double', 1799, '/night', 'Queen-bed private with balcony.'],
      ['Rooftop Cabin', 2499, '/night', 'A tiny cabin under the open sky.'],
    ],
    amenities: ['Café & Common Kitchen', 'Curtained Bunks', 'Lockers', 'Tours & Treks Desk', 'Laundry', 'Board Games Library', 'Rooftop Bonfire', 'Luggage Storage'],
    place: 'Old-town lane · 10 min from the railway station',
  },
  'Corporate Stays': {
    suffix: 'Corporate Stays',
    audience: 'teams and travelling professionals',
    intro: 'Serviced corporate accommodation with GST-ready invoicing, meeting corners and check-ins that respect your calendar.',
    rooms: [
      ['Standard Room', 2200, '/night', 'Crisp single with workdesk and coffee kit.'],
      ['Business Twin', 2900, '/night', 'Twin room for colleagues on the road.'],
      ['Executive Room', 3600, '/night', 'King bed, ergonomic chair, 100 Mbps line.'],
      ['Studio Apartment', 4400, '/night', 'Kitchenette for stays that stretch.'],
      ['Team Suite', 6200, '/night', 'Two rooms + lounge for project teams.'],
      ['Director Suite', 8500, '/night', 'The corner suite with skyline views.'],
    ],
    amenities: ['GST Invoicing', 'Meeting Corner', 'Airport Transfers', 'Breakfast Included', 'Express Laundry', '100 Mbps WiFi', 'Concierge Desk', '24×7 Front Desk'],
    place: 'Business district · 20 min from the airport',
  },
  'Premium Residences': {
    suffix: 'Residences',
    audience: 'residents with high standards',
    intro: 'Premium residences where hospitality meets home — curated interiors, discreet service and details that keep earning your approval.',
    rooms: [
      ['Classic Room', 16000, '/mo', 'Elegant room with hotel-grade linen.'],
      ['Deluxe Room', 19500, '/mo', 'Larger footprint, walk-in wardrobe.'],
      ['Premier Ensuite', 24000, '/mo', 'Ensuite bath, balcony and butler service.'],
      ['Junior Suite', 29000, '/mo', 'Separate sitting area and pantry.'],
      ['Signature Suite', 36000, '/mo', 'The full signature experience.'],
      ['Penthouse', 48000, '/mo', 'Top floor. No further introduction.'],
    ],
    amenities: ['Concierge Service', 'Housekeeping Daily', 'In-room Dining', 'Spa & Wellness', 'Infinity Rooftop', 'Valet Parking', 'Private Lounge', 'Chauffeur on Call'],
    place: 'The quietest street of the finest district',
  },
};

const TESTIMONIALS: [quote: string, name: string, role: string][] = [
  ['Moved in for a semester, stayed for three years. The staff remember how you take your chai.', 'Aarav S.', 'Resident since 2023'],
  ['Spotless rooms, zero drama about deposits, and the food is actually good. Rare combination.', 'Priya M.', 'Working professional'],
  ['I have stayed in a dozen places in this city. This is the first one I recommend without a footnote.', 'Rahul K.', 'Long-stay resident'],
  ['The community events sound gimmicky until you show up to one. Now my flatmates are my best friends.', 'Sneha T.', 'Resident'],
  ['Check-in took eight minutes. The wifi survived my video calls. My manager thinks I work from an office.', 'Vikram D.', 'Remote engineer'],
  ['My parents visited once, inspected everything, and finally stopped worrying. That says it all.', 'Ananya R.', 'Student resident'],
];

const FAQS: [q: string, a: string][] = [
  ['What is included in the rent?', 'All amenities listed above — meals (where applicable), wifi, housekeeping and utilities. No hidden charges; the tariff you see is the tariff you pay.'],
  ['Is there a lock-in period or deposit?', 'A refundable one-month security deposit. No lock-in beyond the first month, and deposits are returned within 7 days of checkout.'],
  ['Can I visit before booking?', 'Absolutely — walk-ins are welcome every day between 10am and 7pm, or book a guided visit through the enquiry form.'],
  ['What are the house rules?', 'Simple and fair: respect quiet hours, keep shared spaces clean, and guests are welcome in common areas during the day.'],
  ['How do payments work?', 'Monthly rent via UPI, card or bank transfer, with digital receipts for every payment — rent reminders come to you, not your parents.'],
];

const EVENTS: [day: string, month: string, title: string, desc: string][] = [
  ['08', 'Aug', 'Rooftop Movie Night', 'Projector, popcorn and a classic under the stars.'],
  ['15', 'Aug', 'Independence Day Brunch', 'A special spread and games in the courtyard.'],
  ['23', 'Aug', 'Founders & Chai', 'Residents demo side-projects over cutting chai.'],
  ['30', 'Aug', 'Weekend Trek', 'Sunrise point trek — transport and breakfast on us.'],
];

const TEAM: [name: string, role: string][] = [
  ['Suresh Nair', 'Property Manager'],
  ['Kavita Sharma', 'Head Warden'],
  ['Imran Qureshi', 'Chef & Mess Incharge'],
  ['Deepa Rao', 'Resident Experience'],
];

const INTEGRATIONS = ['UPI Autopay', 'Google Reviews', 'WhatsApp Alerts', 'Biometric Access', 'Saahvik HMS', 'Smart Meters'];

const AWARDS: [medal: string, title: string, sub: string][] = [
  ['🏆', 'Best Managed Stay 2025', 'City Hospitality Awards'],
  ['⭐', '4.9 on Google', '1,200+ verified reviews'],
  ['🛡️', 'Safety Excellence', 'Certified secure premises'],
  ['🌿', 'Green Stay Certified', 'Solar + rainwater harvesting'],
];

/** Deterministic tiny hash for varying visuals per template. */
function seedFrom(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) % 997;
  return h;
}

/* ------------------------------------------------------------------ */
/* Signature "luxe" sections — exclusive to the Masterpiece Five.      */
/* ------------------------------------------------------------------ */

/** Slow-spinning gold monogram coin (Auric Crown, The Saahvik Standard). */
function LuxeMedallion({ glyph, brand }: { glyph: string; brand: string }) {
  return (
    <section className="d-section lux-medallion">
      <div className="d-wrap d-center">
        <div className="lux-medallion__coin" aria-hidden="true">
          <span>{glyph}</span>
        </div>
        <span className="d-kicker" style={{ marginTop: 26 }}>The mark of {brand}</span>
        <p className="d-lede" style={{ margin: '6px auto 0' }}>
          Hand-finished detail, from the monogram down to the door numbers.
        </p>
      </div>
    </section>
  );
}

/** Interactive-styled floor & room explorer (Summa). */
function LuxeExplorer({ seed }: { seed: number }) {
  const floors = ['Ground', 'First', 'Second', 'Third'];
  const cells = Array.from({ length: 24 }, (_, i) => (seed + i * 7) % 5); // 0 = taken
  return (
    <section className="d-section lux-explorer">
      <div className="d-wrap">
        <div className="d-center">
          <span className="d-kicker">Digital twin</span>
          <h2 className="d-h2">Explore the building, room by room.</h2>
          <p className="d-lede" style={{ margin: '0 auto' }}>
            Every room mapped live — see exactly what&rsquo;s free before you visit.
          </p>
        </div>
        <div className="lux-explorer__floors">
          {floors.map((f, i) => (
            <span key={f} className={i === 1 ? 'is-active' : undefined}>{f} Floor</span>
          ))}
        </div>
        <div className="lux-explorer__grid" aria-hidden="true">
          {cells.map((v, i) => (
            <div key={i} className={`lux-explorer__cell${v === 0 ? ' is-taken' : ''}`}>
              {101 + i}
            </div>
          ))}
        </div>
        <div className="lux-explorer__legend">
          <span><i /> Available</span>
          <span><i className="is-taken" /> Occupied</span>
        </div>
      </div>
    </section>
  );
}

/** Boardroom KPI band with sparklines + client wall (Sovereign House). */
function LuxeMetrics() {
  const kpis: [label: string, value: string, points: string][] = [
    ['Avg. length of stay', '14 mo', '0,22 20,18 40,19 60,12 80,8 100,4'],
    ['Corporate accounts', '38', '0,20 20,16 40,17 60,10 80,9 100,2'],
    ['On-time invoicing', '100%', '0,12 20,12 40,12 60,12 80,12 100,12'],
    ['NPS score', '86', '0,24 20,20 40,14 60,12 80,6 100,3'],
  ];
  return (
    <section className="d-section lux-metrics">
      <div className="d-wrap">
        <div className="d-center">
          <span className="d-kicker">The numbers that matter</span>
          <h2 className="d-h2">Run like a business. Because it is one.</h2>
        </div>
        <div className="lux-metrics__grid">
          {kpis.map(([label, value, points]) => (
            <div key={label} className="lux-metrics__card">
              <span>{label}</span>
              <b>{value}</b>
              <svg viewBox="0 0 100 26" preserveAspectRatio="none" aria-hidden="true">
                <polyline points={points} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          ))}
        </div>
        <div className="d-logos" style={{ marginTop: 34 }}>
          {['Meridian Tech', 'Aster Consulting', 'NorthBridge', 'Kite Airlines', 'Velar Motors'].map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Arched walkthrough strip (Palazzo). */
function LuxeColonnade({ seed }: { seed: number }) {
  const halls = ['Cortile', 'Colonnade', 'Fresco Hall', 'Terrazza', 'Le Suite'];
  return (
    <section className="d-section lux-colonnade">
      <div className="d-wrap">
        <div className="d-center">
          <span className="d-kicker">The walkthrough</span>
          <h2 className="d-h2">Walk the palazzo, arch by arch.</h2>
        </div>
        <div className="lux-colonnade__row">
          {halls.map((h, i) => (
            <div key={h} className="lux-colonnade__arch">
              <Visual i={seed + i} className="lux-colonnade__fill" />
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** The 100th-template manifesto (The Saahvik Standard). */
function LuxeManifesto({ brand }: { brand: string }) {
  const clauses = [
    'Every conversion pattern from the 99 templates before it',
    'Real-time 3D and motion, tuned to stay out of the way',
    'Full booking journey with payments, deposits and receipts',
    'Concierge onboarding — we move your content in for you',
    'Accessibility pass on every page, not just the home page',
    'Twelve months of premium support, measured in hours not days',
  ];
  return (
    <section className="d-section lux-manifesto">
      <div className="d-wrap">
        <div className="lux-manifesto__card">
          <span className="d-kicker">Template № 100 of 100</span>
          <h2 className="d-h2">The standard, in writing.</h2>
          <p className="d-lede" style={{ marginBottom: 26 }}>
            {brand} is the last template in the catalog because everything we
            learned building the first ninety-nine lives inside it.
          </p>
          <ul>
            {clauses.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <div className="lux-manifesto__sign">
            — The Saahvik Studio
          </div>
        </div>
      </div>
    </section>
  );
}

function Visual({ i, label, glyph, className }: { i: number; label?: string; glyph?: string; className?: string }) {
  return (
    <div className={`d-visual d-visual--${i % 4}${className ? ` ${className}` : ''}`}>
      {glyph && <span className="d-visual__glyph">{glyph}</span>}
      {label && <span className="d-visual__label">{label}</span>}
    </div>
  );
}

export default function DemoSite({
  template,
  tier,
  config,
}: {
  template: Template;
  tier: Tier;
  config: DemoConfig;
}) {
  const palette = PALETTES[config.palette];
  const fonts = FONT_PAIRS[config.font];
  const content = CATEGORY_CONTENT[template.category];
  const t = template.tier;
  const seed = seedFrom(template.id);
  const brand = `${template.name} ${content.suffix}`;
  const enquire = whatsappLink(templateEnquiryMessage(template, tier.name));

  const roomCount = t <= 2 ? 3 : t <= 5 ? 4 : t <= 8 ? 5 : 6;
  const rooms = content.rooms.slice(0, roomCount);
  const amenities = content.amenities.slice(0, t <= 3 ? 6 : 8);
  const quotes = TESTIMONIALS.slice(seed % 3, (seed % 3) + 3);
  const glyph = template.name.charAt(0);
  const luxe = config.luxe ?? [];
  const hasLuxe = (f: (typeof luxe)[number]) => luxe.includes(f);

  const style = {
    '--d-bg': palette.bg,
    '--d-surface': palette.surface,
    '--d-ink': palette.ink,
    '--d-muted': palette.muted,
    '--d-primary': palette.primary,
    '--d-accent': palette.accent,
    '--d-on-primary': palette.onPrimary,
    '--d-radius': config.radius,
    '--d-head': fonts.head,
    '--d-body': fonts.body,
  } as React.CSSProperties;

  const patternClass = config.pattern !== 'none' ? ` pat-${config.pattern}` : '';

  const heroText = (
    <div>
      <div className="d-hero__tag">{template.category}</div>
      <h1 className="d-hero__title">{brand}</h1>
      <p className="d-hero__sub">
        {config.tagline} {content.intro}
      </p>
      <div className="d-hero__actions">
        <a href="#rooms" className="d-btn d-btn--primary">View Rooms</a>
        <a href="#visit" className="d-btn d-btn--ghost">Book a Visit</a>
      </div>
    </div>
  );

  return (
    <div className={`demo${luxe.length ? ' d-luxe' : ''}`} data-mode={palette.mode} style={style}>
      {/* ---- Nav ---- */}
      <nav className="d-nav">
        <div className="d-wrap d-nav__in">
          <a href="#top" className="d-nav__brand">
            <span className="d-nav__mark">{glyph}</span>
            {brand}
          </a>
          <div className="d-nav__links">
            <a href="#rooms">Rooms</a>
            <a href="#amenities">Amenities</a>
            {t >= 2 && <a href="#gallery">Gallery</a>}
            {t >= 3 && <a href="#reviews">Reviews</a>}
            <a href="#visit">Contact</a>
          </div>
          <a href="#visit" className="d-btn d-btn--primary" style={{ padding: '10px 20px', fontSize: '0.82rem' }}>
            Book Now
          </a>
        </div>
      </nav>

      {/* ---- Hero ---- */}
      <header id="top" className={`d-hero d-hero--${config.hero}${patternClass}`}>
        {config.hero === 'split' && (
          <div className="d-wrap d-hero__grid">
            {heroText}
            <Visual i={seed} glyph={glyph} label={content.place} />
          </div>
        )}
        {config.hero === 'band' && (
          <>
            <div className="d-wrap d-hero__grid">{heroText}</div>
            <div className="d-wrap d-hero__banner">
              <Visual i={seed} glyph={glyph} label={content.place} />
            </div>
          </>
        )}
        {config.hero === 'minimal' && (
          <div className="d-wrap">
            <div className="d-hero__tag">{template.category}</div>
            <h1 className="d-hero__title">{brand}</h1>
            <div className="d-hero__rule" />
            <p className="d-hero__sub">{config.tagline}</p>
            <div className="d-hero__actions">
              <a href="#rooms" className="d-btn d-btn--primary">View Rooms</a>
              <a href="#visit" className="d-btn d-btn--ghost">Book a Visit</a>
            </div>
          </div>
        )}
        {config.hero === 'arch' && (
          <div className="d-wrap">
            <div className="d-hero__tag">{template.category}</div>
            <h1 className="d-hero__title">{brand}</h1>
            <p className="d-hero__sub">{config.tagline} {content.intro}</p>
            <div className="d-hero__actions">
              <a href="#rooms" className="d-btn d-btn--primary">View Rooms</a>
              <a href="#visit" className="d-btn d-btn--ghost">Book a Visit</a>
            </div>
            <div className="d-hero__archviz">
              <Visual i={seed} glyph={glyph} label={content.place} className="d-hero__archfill" />
            </div>
          </div>
        )}
        {config.hero === 'collage' && (
          <div className="d-wrap d-hero__grid">
            {heroText}
            <div className="d-hero__tiles">
              <Visual i={seed} label={content.place} />
              <Visual i={seed + 1} label="Common spaces" />
              <Visual i={seed + 2} label="Rooms" />
            </div>
          </div>
        )}
        {config.hero === 'aurora' && (
          <div className="d-wrap d-hero__grid">
            <div className="d-hero__tag">{template.category}</div>
            <h1 className="d-hero__title">{brand}</h1>
            <p className="d-hero__sub">{config.tagline} {content.intro}</p>
            <div className="d-hero__actions">
              <a href="#rooms" className="d-btn d-btn--primary">View Rooms</a>
              <a href="#visit" className="d-btn d-btn--ghost">Book a Visit</a>
            </div>
          </div>
        )}
      </header>

      {/* ---- Luxe: medallion ---- */}
      {hasLuxe('medallion') && <LuxeMedallion glyph={glyph} brand={brand} />}

      {/* ---- Marquee (tier 10) ---- */}
      {t >= 10 && (
        <div className="d-marquee">
          <div className="d-marquee__track">
            {[0, 1].map((rep) => (
              <span key={rep} style={{ display: 'inline-flex', gap: 48 }}>
                <span>{config.tagline}</span>
                <span>✦</span>
                <span>{brand}</span>
                <span>✦</span>
                <span>{content.place}</span>
                <span>✦</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ---- Booking bar (tier 6+) ---- */}
      {t >= 6 && (
        <section className="d-section" style={{ paddingTop: 30, paddingBottom: 30 }}>
          <div className="d-wrap">
            <div className="d-book">
              <div>
                <label>Move-in date</label>
                <div className="d-book__field">Pick a date</div>
              </div>
              <div>
                <label>Duration</label>
                <div className="d-book__field">6+ months</div>
              </div>
              <div>
                <label>Room type</label>
                <div className="d-book__field">{rooms[0][0]}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <a href={enquire} target="_blank" rel="noopener noreferrer" className="d-btn d-btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Check Availability
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ---- Stats (tier 4+) ---- */}
      {t >= 4 && (
        <section className="d-section" style={{ paddingTop: t >= 6 ? 20 : undefined, paddingBottom: 30 }}>
          <div className="d-wrap">
            <div className="d-stats">
              <div className="d-stat"><b>{120 + (seed % 200)}+</b><span>Beds</span></div>
              <div className="d-stat"><b>4.{7 + (seed % 3)}★</b><span>Google rating</span></div>
              <div className="d-stat"><b>{92 + (seed % 8)}%</b><span>Occupancy</span></div>
              <div className="d-stat"><b>{3 + (seed % 7)} yrs</b><span>Running strong</span></div>
            </div>
          </div>
        </section>
      )}

      {/* ---- Luxe: boardroom metrics ---- */}
      {hasLuxe('metrics') && <LuxeMetrics />}

      {/* ---- About ---- */}
      <section className="d-section">
        <div className="d-wrap d-center">
          <span className="d-kicker">Welcome to {template.name}</span>
          <h2 className="d-h2">A place built for {content.audience}.</h2>
          <p className="d-lede">{content.intro}</p>
        </div>
      </section>

      {/* ---- Story (tier 9+) ---- */}
      {t >= 9 && (
        <section className={`d-section d-section--tint${patternClass}`}>
          <div className="d-wrap d-story">
            <Visual i={seed + 3} glyph={glyph} label="Since day one" />
            <div>
              <span className="d-kicker">Our story</span>
              <h2 className="d-h2">It started with one floor and a promise.</h2>
              <blockquote>&ldquo;{config.tagline}&rdquo;</blockquote>
              <p className="d-lede">
                What began as a single floor of {rooms.length} rooms grew into {brand} — not by
                adding beds, but by keeping promises. Every review, every renewal, every
                referral traces back to the same idea: run the place like the residents own it.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ---- Rooms ---- */}
      <section id="rooms" className={`d-section${t < 9 ? ' d-section--tint' : ''}`}>
        <div className="d-wrap">
          <div className="d-center">
            <span className="d-kicker">Rooms &amp; tariffs</span>
            <h2 className="d-h2">Choose your kind of quiet.</h2>
          </div>
          <div className="d-grid d-grid--3">
            {rooms.map(([name, price, unit, desc], i) => (
              <article key={name} className="d-card">
                <Visual i={seed + i} glyph={glyph} />
                <div className="d-card__body">
                  <h3 className="d-card__title">{name}</h3>
                  <p className="d-card__meta">{desc}</p>
                  <p className="d-card__price">
                    ₹{price.toLocaleString('en-IN')}
                    <small>{unit}</small>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Luxe: room explorer ---- */}
      {hasLuxe('explorer') && <LuxeExplorer seed={seed} />}

      {/* ---- Tariff table (tier 4+) ---- */}
      {t >= 4 && (
        <section className="d-section" style={{ paddingTop: 0 }}>
          <div className="d-wrap">
            <div className="d-center">
              <span className="d-kicker">Transparent pricing</span>
              <h2 className="d-h2">No hidden charges. Ever.</h2>
            </div>
            <div className="d-tablewrap">
              <table className="d-table">
                <thead>
                  <tr><th>Room type</th><th>Occupancy</th><th>Includes</th><th>Tariff</th></tr>
                </thead>
                <tbody>
                  {rooms.map(([name, price, unit], i) => (
                    <tr key={name}>
                      <td>{name}</td>
                      <td>{name.match(/\d/) ? `${name.match(/\d/)![0]} residents` : i < 3 ? 'Shared' : 'Single'}</td>
                      <td>All amenities{t >= 5 ? ' + meals' : ''}</td>
                      <td>₹{price.toLocaleString('en-IN')}{unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ---- Amenities ---- */}
      <section id="amenities" className="d-section" style={{ paddingTop: t >= 4 ? 0 : undefined }}>
        <div className="d-wrap">
          <div className="d-center">
            <span className="d-kicker">Amenities</span>
            <h2 className="d-h2">Everything handled. Nothing extra.</h2>
          </div>
          <div className="d-grid d-grid--4">
            {amenities.map((a, i) => (
              <div key={a} className="d-amen">
                <span className="d-amen__dot">{['✦', '❋', '◆', '✳', '✺', '❖', '✹', '✷'][i % 8]}</span>
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Features (tier 3+) ---- */}
      {t >= 3 && (
        <section className={`d-section d-section--tint${patternClass}`}>
          <div className="d-wrap">
            <div className="d-center">
              <span className="d-kicker">Why residents stay</span>
              <h2 className="d-h2">
                {template.name.startsWith('The') ? template.name : `The ${template.name}`} difference.
              </h2>
            </div>
            <div className="d-feat">
              {[
                ['01', 'Actually managed', 'A real team on premises — not a caretaker with three jobs.'],
                ['02', 'Fair, fixed billing', 'Digital receipts, fixed tariffs and deposits returned on time.'],
                ['03', 'Community first', 'Shared spaces designed to make meeting people effortless.'],
                ['04', 'Maintenance in hours', 'Raise it on WhatsApp; most fixes happen the same day.'],
              ].map(([num, title, body]) => (
                <div key={num} className="d-feat__item">
                  <span className="d-feat__num">{num}</span>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- Mess (tier 5+) ---- */}
      {t >= 5 && (
        <section className="d-section">
          <div className="d-wrap">
            <div className="d-center">
              <span className="d-kicker">From the kitchen</span>
              <h2 className="d-h2">This week&rsquo;s mess highlights.</h2>
            </div>
            <div className="d-mess">
              {[
                ['Monday', 'Rajma chawal, salad bar & kheer'],
                ['Wednesday', 'South Indian thali with filter coffee'],
                ['Friday', 'Paneer butter masala & tandoori night'],
                ['Sunday', 'Chef&rsquo;s special brunch spread'],
              ].map(([day, menu]) => (
                <div key={day} className="d-mess__day">
                  <h4>{day}</h4>
                  <p dangerouslySetInnerHTML={{ __html: menu }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- Gallery (tier 2+) ---- */}
      {t >= 2 && (
        <section id="gallery" className="d-section d-section--tint">
          <div className="d-wrap">
            <div className="d-center">
              <span className="d-kicker">Gallery</span>
              <h2 className="d-h2">Have a look around.</h2>
            </div>
            <div className="d-gallery">
              {['Lobby', 'Rooms', 'Mess Hall', 'Study Lounge', 'Terrace', 'Common Area'].map((label, i) => (
                <Visual key={label} i={seed + i} label={label} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- Luxe: colonnade walkthrough ---- */}
      {hasLuxe('colonnade') && <LuxeColonnade seed={seed} />}

      {/* ---- Virtual tour (tier 6+) ---- */}
      {t >= 6 && (
        <section className="d-section">
          <div className="d-wrap">
            <div className={`d-tour d-visual d-visual--${(seed + 2) % 4}`}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="d-tour__play">▶</div>
                <h3>Take the virtual tour</h3>
                <p style={{ opacity: 0.85, marginTop: 6 }}>Walk every floor from wherever you are.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ---- Events (tier 7+) ---- */}
      {t >= 7 && (
        <section className="d-section" style={{ paddingTop: t >= 6 ? 0 : undefined }}>
          <div className="d-wrap">
            <div className="d-center">
              <span className="d-kicker">This month</span>
              <h2 className="d-h2">Life at {template.name}.</h2>
            </div>
            <div className="d-grid d-grid--3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              {EVENTS.map(([day, month, title, desc]) => (
                <div key={title} className="d-event">
                  <div className="d-event__date"><b>{day}</b><span>{month}</span></div>
                  <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- Testimonials (tier 3+) ---- */}
      {t >= 3 && (
        <section id="reviews" className={`d-section d-section--tint${patternClass}`}>
          <div className="d-wrap">
            <div className="d-center">
              <span className="d-kicker">Reviews</span>
              <h2 className="d-h2">Residents say it better.</h2>
            </div>
            <div className="d-grid d-grid--3">
              {quotes.map(([quote, name, role]) => (
                <blockquote key={name} className="d-quote">
                  &ldquo;{quote}&rdquo;
                  <footer><b>{name}</b> · {role}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- Awards (tier 9+) ---- */}
      {t >= 9 && (
        <section className="d-section">
          <div className="d-wrap">
            <div className="d-center">
              <span className="d-kicker">Recognition</span>
              <h2 className="d-h2">Quietly collecting compliments.</h2>
            </div>
            <div className="d-awards">
              {AWARDS.map(([medal, title, sub]) => (
                <div key={title} className="d-award">
                  <div className="d-award__medal">{medal}</div>
                  <h4>{title}</h4>
                  <p>{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- Team (tier 8+) ---- */}
      {t >= 8 && (
        <section className="d-section" style={{ paddingTop: t >= 9 ? 0 : undefined }}>
          <div className="d-wrap">
            <div className="d-center">
              <span className="d-kicker">The people</span>
              <h2 className="d-h2">Run by humans you&rsquo;ll know by name.</h2>
            </div>
            <div className="d-grid d-grid--4">
              {TEAM.map(([name, role], i) => (
                <div key={name} className="d-team">
                  <Visual i={seed + i} glyph={name.charAt(0)} />
                  <h4>{name}</h4>
                  <p>{role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- Integrations (tier 8+) ---- */}
      {t >= 8 && (
        <section className="d-section d-section--tint" style={{ paddingTop: 44, paddingBottom: 44 }}>
          <div className="d-wrap d-center">
            <span className="d-kicker">Powered by</span>
            <div className="d-logos">
              {INTEGRATIONS.map((x) => <span key={x}>{x}</span>)}
            </div>
          </div>
        </section>
      )}

      {/* ---- FAQ (tier 5+) ---- */}
      {t >= 5 && (
        <section className="d-section">
          <div className="d-wrap">
            <div className="d-center">
              <span className="d-kicker">Questions</span>
              <h2 className="d-h2">Asked often, answered honestly.</h2>
            </div>
            <div className="d-faq">
              {FAQS.slice(0, t >= 8 ? 5 : 4).map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- Location (tier 2+) ---- */}
      {t >= 2 && (
        <section className="d-section" style={{ paddingTop: 0 }}>
          <div className="d-wrap">
            <div className="d-center">
              <span className="d-kicker">Location</span>
              <h2 className="d-h2">Right where you need to be.</h2>
            </div>
            <div className="d-map">
              <span className="d-map__pin">📍</span>
              <div className="d-map__card">
                <b>{brand}</b>
                <span>{content.place}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ---- Luxe: manifesto ---- */}
      {hasLuxe('manifesto') && <LuxeManifesto brand={brand} />}

      {/* ---- CTA ---- */}
      <section id="visit" className={`d-section d-section--primary d-cta${patternClass}`}>
        <div className="d-wrap">
          <span className="d-kicker">Book a visit</span>
          <h2 className="d-h2">Come see it for yourself.</h2>
          <p>Drop your details and we&rsquo;ll call you back within the hour — or just walk in, the chai&rsquo;s always on.</p>
          <div className="d-contact">
            <input type="text" placeholder="Your name" aria-label="Your name" />
            <input type="text" placeholder="Phone number" aria-label="Phone number" />
            <a href={enquire} target="_blank" rel="noopener noreferrer" className="d-btn d-btn--accent" style={{ justifyContent: 'center' }}>
              Request Callback
            </a>
          </div>
        </div>
      </section>

      {/* ---- Footer ---- */}
      <footer className="d-foot">
        <div className="d-wrap d-foot__in">
          <div className="d-foot__brand">{brand}</div>
          <div className="d-foot__links">
            <a href="#rooms">Rooms</a>
            <a href="#amenities">Amenities</a>
            {t >= 2 && <a href="#gallery">Gallery</a>}
            <a href="#visit">Contact</a>
          </div>
        </div>
        <p className="d-foot__note">
          Demo website · Template № {template.number} &ldquo;{template.name}&rdquo; by Saahvik · Tier {tier.tier} — {tier.name}
        </p>
      </footer>
    </div>
  );
}
