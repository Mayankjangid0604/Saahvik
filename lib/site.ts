/**
 * Central site configuration — contact details, WhatsApp number, metadata.
 * Contact details match the Saahvik business card.
 */

export const site = {
  name: 'Saahvik',
  tagline: 'Smarter Hostel Management.',
  description:
    'Saahvik builds premium websites and custom ERP systems, with Saahvik Hostel Management Software — our flagship SaaS — coming soon. Explore 100 premium hostel website templates across 10 quality tiers.',
  founder: 'Mayank Jangid',
  founderTitle: 'Founder',
  email: 'contact@saahvik.com',
  website: 'www.saahvik.com',
  phoneDisplay: '+91 95303 01131',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919530301131',
} as const;

export function formatINR(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}

/** Build a wa.me deep link with a prefilled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function templateEnquiryMessage(templateName: string, price: number, tierName: string): string {
  return `Hi Saahvik! I'm interested in the "${templateName}" template (${tierName} tier, ${formatINR(price)}). Please share more details.`;
}
