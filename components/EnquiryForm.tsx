'use client';

import { useState } from 'react';

const PROJECT_TYPES = [
  'Website Design & Development',
  'Custom ERP Development',
  'Website + ERP (combined)',
  'Template customisation',
  'Something else',
] as const;

/**
 * Custom project enquiry form. Posts to /api/enquiry and then opens the
 * prefilled WhatsApp conversation the API builds from the submission.
 */
export default function EnquiryForm() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [projectType, setProjectType] = useState<string>(PROJECT_TYPES[0]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  const [waLink, setWaLink] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'custom',
          name: name.trim(),
          contact: contact.trim(),
          projectType,
          message: message.trim(),
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: { whatsapp?: string } = await res.json();
      setWaLink(data.whatsapp ?? null);
      setStatus('ok');
      if (data.whatsapp) {
        window.open(data.whatsapp, '_blank', 'noopener,noreferrer');
      }
    } catch {
      setStatus('err');
    }
  }

  return (
    <form onSubmit={submit} className="form--light" style={{ display: 'grid', gap: 14 }}>
      <div className="form-row">
        <input
          className="input"
          type="text"
          required
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Your name"
        />
        <input
          className="input"
          type="text"
          required
          placeholder="Email or phone"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          aria-label="Email or phone"
        />
      </div>
      <select
        className="select"
        value={projectType}
        onChange={(e) => setProjectType(e.target.value)}
        aria-label="Project type"
      >
        {PROJECT_TYPES.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      <textarea
        className="textarea"
        required
        placeholder="Tell us about your project — goals, timelines, anything that helps."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        aria-label="Project details"
      />
      <div>
        <button type="submit" className="btn btn--gold" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
        </button>
      </div>
      {status === 'ok' && (
        <p className="form-status form-status--ok">
          Enquiry received — we&apos;ve opened WhatsApp so you can send it straight to us.{' '}
          {waLink && (
            <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
              Open WhatsApp again →
            </a>
          )}
        </p>
      )}
      {status === 'err' && (
        <p className="form-status form-status--err">
          Something went wrong — please try again or email us directly.
        </p>
      )}
    </form>
  );
}
