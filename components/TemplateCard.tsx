'use client';

import Link from 'next/link';
import type { Template } from '@/data/templates';
import { starsFor } from '@/data/templates';
import { formatINR, templateEnquiryMessage, whatsappLink } from '@/lib/site';

export default function TemplateCard({
  template,
  tierName,
  onDetails,
}: {
  template: Template;
  tierName: string;
  onDetails: (template: Template) => void;
}) {
  const enquiry = whatsappLink(templateEnquiryMessage(template, tierName));

  return (
    <article className="template-card">
      <Link href={`/demo/${template.id}`} className="template-card__preview" title={`Open the ${template.name} live demo`}>
        <span className="template-card__preview-number">№ {String(template.number).padStart(3, '0')}</span>
        <span className="template-card__preview-name">{template.name}</span>
        <span className="template-card__preview-stars">{starsFor(template.tier)}</span>
        <span className="template-card__preview-hint">Live Demo ↗</span>
      </Link>
      <div className="template-card__body">
        <div className="template-card__top">
          <h3 className="template-card__name">{template.name}</h3>
          <span className="template-card__price">{formatINR(template.price)}</span>
        </div>
        <div className="template-card__category">{template.category}</div>
        <div className="chips">
          {template.features.slice(0, 4).map((f) => (
            <span key={f} className="chip">
              {f}
            </span>
          ))}
          {template.features.length > 4 && (
            <span className="chip">+{template.features.length - 4} more</span>
          )}
        </div>
        <div className="template-card__actions">
          <Link href={`/demo/${template.id}`} className="btn btn--gold btn--small">
            Live Demo
          </Link>
          <button
            type="button"
            className="btn btn--outline-navy btn--small"
            onClick={() => onDetails(template)}
          >
            Details
          </button>
          <a
            href={enquiry}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline-navy btn--small"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
