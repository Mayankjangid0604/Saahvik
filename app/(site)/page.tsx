import Link from 'next/link';
import BrandDivider from '@/components/BrandDivider';
import HeroVisual from '@/components/HeroVisual';
import WaitlistForm from '@/components/WaitlistForm';
import { TIERS, starsFor } from '@/data/templates';
import { formatINR, site } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <HeroVisual />
        <div className="container" style={{ width: '100%' }}>
          <div className="hero__content">
            <span className="kicker">Websites · ERP · Hospitality SaaS</span>
            <h1 className="hero__title">
              Saahvi<em>k</em>
            </h1>
            <p className="hero__tagline">{site.tagline}</p>
            <p className="lede">
              We craft premium websites and custom ERP systems for hostels, PGs
              and co-living brands — and we&apos;re building the hostel
              management platform they&apos;ll run on.
            </p>
            <div className="hero__actions">
              <Link href="/templates" className="btn btn--gold">
                Browse 100 Templates
              </Link>
              <Link href="/custom" className="btn btn--outline">
                Start a Custom Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="section section--ivory" id="services">
        <div className="container">
          <div className="center">
            <span className="kicker">What we build</span>
            <h2 className="heading-lg">Two crafts, one standard.</h2>
            <BrandDivider color="var(--gold-deep)" width={260} />
          </div>
          <div className="pillars">
            <article className="pillar">
              <div className="pillar__icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2" y="4" width="20" height="14" rx="2" />
                  <path d="M2 8h20M6 21h12" />
                </svg>
              </div>
              <h3 className="heading-md">Website Design &amp; Development</h3>
              <p>
                Fast, elegant, conversion-focused websites — from a one-page
                launch to a flagship digital experience for your hostel or
                co-living brand.
              </p>
              <ul>
                <li>100 ready templates across 10 quality tiers</li>
                <li>Fully custom builds when a template isn&apos;t enough</li>
                <li>SEO, performance and mobile-first by default</li>
              </ul>
            </article>
            <article className="pillar">
              <div className="pillar__icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
                  <path d="M10 7h4M7 10v4M17 10v4M10 17h4" />
                </svg>
              </div>
              <h3 className="heading-md">Custom ERP Development</h3>
              <p>
                Purpose-built ERP systems that fit how your business actually
                runs — admissions, billing, inventory, staff and reporting in
                one place.
              </p>
              <ul>
                <li>Workflows designed around your operations</li>
                <li>Role-based access, audit trails and reports</li>
                <li>Integrates with the tools you already use</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- Coming Soon: SaaS ---------- */}
      <section className="section section--dark coming-soon">
        <div className="container">
          <div className="coming-soon__grid">
            <div>
              <span className="coming-soon__badge">Coming Soon</span>
              <span className="kicker" style={{ display: 'block' }}>
                Our flagship product
              </span>
              <h2 className="heading-lg">Saahvik Hostel Management Software</h2>
              <p className="lede" style={{ marginTop: 14 }}>
                Everything a modern hostel needs to run — bookings, beds,
                billing, mess, staff and insights — in one beautifully simple
                platform. {site.tagline}
              </p>
              <div className="coming-soon__features">
                <div className="coming-soon__feature">
                  <strong>Beds &amp; Occupancy</strong>
                  Live room and bed availability at a glance.
                </div>
                <div className="coming-soon__feature">
                  <strong>Billing &amp; Dues</strong>
                  Automated rent cycles, receipts and reminders.
                </div>
                <div className="coming-soon__feature">
                  <strong>Residents &amp; Staff</strong>
                  Onboarding, records and role-based access.
                </div>
                <div className="coming-soon__feature">
                  <strong>Reports &amp; Insights</strong>
                  Know your occupancy and revenue in real time.
                </div>
              </div>
              <WaitlistForm />
            </div>
            <div className="dash-mock" aria-hidden="true">
              <div className="dash-mock__bar">
                <span /><span /><span />
              </div>
              <div className="dash-mock__stats">
                <div className="dash-mock__stat">
                  <b>94%</b>
                  <small>Occupancy</small>
                </div>
                <div className="dash-mock__stat">
                  <b>212</b>
                  <small>Residents</small>
                </div>
                <div className="dash-mock__stat">
                  <b>₹4.2L</b>
                  <small>This month</small>
                </div>
              </div>
              <div className="dash-mock__rows">
                <div className="dash-mock__row" />
                <div className="dash-mock__row" />
                <div className="dash-mock__row" />
                <div className="dash-mock__row" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Marketplace teaser ---------- */}
      <section className="section section--ivory">
        <div className="container">
          <div className="center">
            <span className="kicker">Template marketplace</span>
            <h2 className="heading-lg">100 templates. 10 tiers. One for every ambition.</h2>
            <BrandDivider color="var(--gold-deep)" width={260} />
            <p className="lede" style={{ margin: '10px auto 0' }}>
              From a {formatINR(TIERS[0].priceMin)} launch page to a{' '}
              {formatINR(TIERS[9].priceMax)} masterpiece — every template is a
              complete, ready-to-deploy hostel website.
            </p>
          </div>
          <div className="tier-grid" style={{ marginTop: 44 }}>
            {[TIERS[0], TIERS[4], TIERS[9]].map((tier) => (
              <Link
                key={tier.tier}
                href={`/tiers/${tier.tier}`}
                className={`tier-card${tier.tier === 10 ? ' tier-card--masterpiece' : ''}`}
              >
                <span className="tier-card__num">{tier.tier}</span>
                <div className="tier-card__stars">{starsFor(tier.tier)}</div>
                <h3>{tier.name}</h3>
                <div className="tier-card__price">
                  {formatINR(tier.priceMin)} – {formatINR(tier.priceMax)}
                </div>
                <p className="tier-card__tagline">{tier.tagline}</p>
                <div className="tier-card__meta">
                  <span>10 templates</span>
                  <span>View tier →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="center mt-lg">
            <Link href="/templates" className="btn btn--outline-navy">
              Explore all 10 tiers
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- CTA band ---------- */}
      <section className="cta-band">
        <div className="container">
          <h2>Have something custom in mind?</h2>
          <p style={{ maxWidth: '54ch', margin: '0 auto', opacity: 0.85 }}>
            Tell us about your website or ERP project and we&apos;ll get back to
            you the same day.
          </p>
          <Link href="/custom" className="btn">
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
