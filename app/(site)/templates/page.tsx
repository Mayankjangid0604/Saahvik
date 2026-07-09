import type { Metadata } from 'next';
import Link from 'next/link';
import BrandDivider from '@/components/BrandDivider';
import { TIERS, starsFor } from '@/data/templates';
import { formatINR } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Template Marketplace',
  description:
    '100 premium hostel website templates across 10 quality tiers — from quick launch pages to one-of-a-kind masterpieces.',
};

export default function TemplatesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">Template marketplace</span>
          <h1 className="heading-xl">Ten tiers of craft.</h1>
          <BrandDivider width={280} />
          <p className="lede" style={{ margin: '10px auto 0' }}>
            100 unique hostel website templates, organised into 10 tiers of
            rising ambition. Every tier holds exactly 10 designs — pick your
            level, then pick your favourite.
          </p>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div className="tier-grid" style={{ marginTop: 0 }}>
            {TIERS.map((tier) => (
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
        </div>
      </section>
    </>
  );
}
