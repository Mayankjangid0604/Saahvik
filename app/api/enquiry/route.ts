import { NextRequest, NextResponse } from 'next/server';
import { site, whatsappLink } from '@/lib/site';

type EnquiryType = 'waitlist' | 'custom' | 'template';

interface EnquiryBody {
  type?: EnquiryType;
  name?: string;
  contact?: string;
  projectType?: string;
  message?: string;
  template?: string;
  price?: number;
}

/**
 * Enquiry / waitlist endpoint.
 *
 * No database by default — this validates the submission, logs it, and
 * returns a prefilled WhatsApp deep link the client can open. If you later
 * want submissions stored (especially the SaaS waitlist), plug in
 * Supabase/Postgres here and keep the response shape the same.
 */
export async function POST(req: NextRequest) {
  let body: EnquiryBody;
  try {
    body = (await req.json()) as EnquiryBody;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body.' }, { status: 400 });
  }

  const type: EnquiryType = body.type ?? 'custom';

  if (type === 'waitlist') {
    const contact = (body.contact ?? '').trim();
    if (!contact || contact.length > 200) {
      return NextResponse.json(
        { ok: false, error: 'Please provide an email or WhatsApp number.' },
        { status: 400 },
      );
    }
    console.log(`[enquiry] waitlist signup: ${contact}`);
    return NextResponse.json({
      ok: true,
      whatsapp: whatsappLink(
        `Hi ${site.name}! Please add me to the ${site.name} Hostel Management Software waitlist. My contact: ${contact}`,
      ),
    });
  }

  if (type === 'template') {
    const template = (body.template ?? '').trim();
    if (!template) {
      return NextResponse.json({ ok: false, error: 'Missing template name.' }, { status: 400 });
    }
    console.log(`[enquiry] template enquiry: ${template} (₹${body.price ?? '—'})`);
    return NextResponse.json({
      ok: true,
      whatsapp: whatsappLink(
        `Hi ${site.name}! I'm interested in the "${template}" template${body.price ? ` (₹${body.price.toLocaleString('en-IN')})` : ''}. Please share more details.`,
      ),
    });
  }

  // Custom project enquiry
  const name = (body.name ?? '').trim();
  const contact = (body.contact ?? '').trim();
  const message = (body.message ?? '').trim();
  if (!name || !contact || !message) {
    return NextResponse.json(
      { ok: false, error: 'Name, contact and message are required.' },
      { status: 400 },
    );
  }
  if (message.length > 2000) {
    return NextResponse.json({ ok: false, error: 'Message is too long.' }, { status: 400 });
  }

  const projectType = (body.projectType ?? 'Custom project').trim();
  console.log(`[enquiry] custom enquiry from ${name} (${contact}) — ${projectType}`);

  return NextResponse.json({
    ok: true,
    whatsapp: whatsappLink(
      `Hi ${site.name}! New project enquiry:\n\n• Name: ${name}\n• Contact: ${contact}\n• Project: ${projectType}\n\n${message}`,
    ),
  });
}
