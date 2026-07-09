'use client';

import { useState } from 'react';

/**
 * SaaS waitlist capture. Posts to /api/enquiry; on success shows a
 * confirmation and offers the prefilled WhatsApp link the API returns.
 */
export default function WaitlistForm({ light = false }: { light?: boolean }) {
  const [contact, setContact] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  const [waLink, setWaLink] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!contact.trim()) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'waitlist', contact: contact.trim() }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: { whatsapp?: string } = await res.json();
      setWaLink(data.whatsapp ?? null);
      setStatus('ok');
      setContact('');
    } catch {
      setStatus('err');
    }
  }

  return (
    <form onSubmit={submit} className={light ? 'form--light' : undefined}>
      <div className="form-row">
        <input
          className="input"
          type="text"
          required
          placeholder="Your email or WhatsApp number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          aria-label="Your email or WhatsApp number"
        />
        <button type="submit" className="btn btn--gold" disabled={status === 'sending'}>
          {status === 'sending' ? 'Joining…' : 'Join the Waitlist'}
        </button>
      </div>
      {status === 'ok' && (
        <p className="form-status form-status--ok">
          You&apos;re on the list — we&apos;ll reach out before launch.{' '}
          {waLink && (
            <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
              Say hi on WhatsApp →
            </a>
          )}
        </p>
      )}
      {status === 'err' && (
        <p className="form-status form-status--err">
          Something went wrong — please try again or reach us on WhatsApp directly.
        </p>
      )}
    </form>
  );
}
