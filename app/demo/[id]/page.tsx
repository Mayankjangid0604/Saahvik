import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import DemoSite from '@/components/demo/DemoSite';
import { getDemo } from '@/data/demos';
import { TEMPLATES, getTier } from '@/data/templates';
import { formatINR, templateEnquiryMessage, whatsappLink } from '@/lib/site';

export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ id: t.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const template = TEMPLATES.find((t) => t.id === params.id);
  if (!template) return { title: 'Demo not found' };
  return {
    title: `${template.name} — Live Template Demo`,
    description: `Live preview of the "${template.name}" hostel website template (Tier ${template.tier}, ${formatINR(template.price)}) by Saahvik.`,
  };
}

export default function DemoPage({ params }: { params: { id: string } }) {
  const template = TEMPLATES.find((t) => t.id === params.id);
  const config = template && getDemo(template.id);
  const tier = template && getTier(template.tier);
  if (!template || !config || !tier) notFound();

  const enquire = whatsappLink(templateEnquiryMessage(template.name, template.price, tier.name));

  return (
    <>
      <DemoSite template={template} tier={tier} config={config} />
      <div className="saahvik-bar">
        <div className="saahvik-bar__in">
          <Link href={`/tiers/${template.tier}`} className="saahvik-bar__back">
            ← All Tier {template.tier} templates
          </Link>
          <span className="saahvik-bar__info">
            You&rsquo;re previewing <b>{template.name}</b> · Tier {template.tier} — {tier.name} ·{' '}
            {formatINR(template.price)}
          </span>
          <a href={enquire} target="_blank" rel="noopener noreferrer" className="saahvik-bar__cta">
            Use this template
          </a>
        </div>
      </div>
    </>
  );
}
