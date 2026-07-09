import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BrandDivider from '@/components/BrandDivider';
import TierGrid from '@/components/TierGrid';
import { TIERS, getTier, starsFor, templatesForTier } from '@/data/templates';
import { formatINR } from '@/lib/site';

export function generateStaticParams() {
  return TIERS.map((t) => ({ tier: String(t.tier) }));
}

export function generateMetadata({ params }: { params: { tier: string } }): Metadata {
  const tier = getTier(Number(params.tier));
  if (!tier) return { title: 'Tier not found' };
  return {
    title: `Tier ${tier.tier} — ${tier.name} Templates`,
    description: `${tier.tagline} 10 templates from ${formatINR(tier.priceMin)} to ${formatINR(tier.priceMax)}.`,
  };
}

export default function TierPage({ params }: { params: { tier: string } }) {
  const tierNumber = Number(params.tier);
  const tier = getTier(tierNumber);
  if (!tier) notFound();

  const templates = templatesForTier(tier.tier);
  const prev = getTier(tier.tier - 1);
  const next = getTier(tier.tier + 1);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/templates">Marketplace</Link> · Tier {tier.tier}
          </div>
          <div style={{ color: 'var(--gold)', letterSpacing: 4, marginBottom: 10 }}>
            {starsFor(tier.tier)}
          </div>
          <h1 className="heading-xl">{tier.name}</h1>
          <BrandDivider width={260} />
          <p className="lede" style={{ margin: '10px auto 0' }}>
            {tier.tagline} Ten unique templates, priced{' '}
            {formatINR(tier.priceMin)} – {formatINR(tier.priceMax)}.
          </p>
        </div>
      </section>

      <section className="section section--ivory" style={{ paddingTop: 40 }}>
        <div className="container">
          <TierGrid templates={templates} tierName={tier.name} />

          <div
            className="mt-lg"
            style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}
          >
            {prev ? (
              <Link href={`/tiers/${prev.tier}`} className="btn btn--outline-navy btn--small">
                ← Tier {prev.tier}: {prev.name}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/tiers/${next.tier}`} className="btn btn--outline-navy btn--small">
                Tier {next.tier}: {next.name} →
              </Link>
            ) : (
              <Link href="/custom" className="btn btn--gold btn--small">
                Want something beyond Masterpiece? Go custom →
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
