'use client';

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
  const enquiry = whatsappLink(templateEnquiryMessage(template.name, template.price, tierName));

  return (
    <article className="template-card">
      <div className="template-card__preview">
        <span className="template-card__preview-name">{template.name}</span>
        <span className="template-card__preview-stars">{starsFor(template.tier)}</span>
      </div>
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
            className="btn btn--gold btn--small"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
