'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import type { Template } from '@/data/templates';
import { starsFor } from '@/data/templates';
import { formatINR, templateEnquiryMessage, whatsappLink } from '@/lib/site';

export default function DetailsModal({
  template,
  tierName,
  onClose,
}: {
  template: Template;
  tierName: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const enquiry = whatsappLink(templateEnquiryMessage(template.name, template.price, tierName));

  return (
    <div
      className="modal-overlay"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close details">
          ✕
        </button>
        <div className="modal__stars">{starsFor(template.tier)}</div>
        <h3 id="modal-title">{template.name}</h3>
        <div className="modal__tierline">
          Tier {template.tier} · {tierName} · {template.category}
        </div>
        <div className="modal__price">{formatINR(template.price)}</div>
        <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>One-time price · includes deployment</p>
        <ul className="modal__features">
          {template.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div style={{ display: 'grid', gap: 10 }}>
          <Link
            href={`/demo/${template.id}`}
            className="btn btn--gold"
            style={{ justifyContent: 'center' }}
          >
            View Live Demo
          </Link>
          <a
            href={enquiry}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline-navy"
            style={{ justifyContent: 'center' }}
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
