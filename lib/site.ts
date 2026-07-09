/**
 * Central site configuration — contact details, WhatsApp number, metadata.
 *
 * IMPORTANT: The WhatsApp number below is a placeholder. Set the real number
 * via NEXT_PUBLIC_WHATSAPP_NUMBER (digits only, country code included,
 * e.g. "919876543210") or edit the fallback here before going live.
 */

export const site = {
  name: 'Saahvik',
  tagline: 'Smarter Hostel Management.',
  description:
    'Saahvik builds premium websites and custom ERP systems, with Saahvik Hostel Management Software — our flagship SaaS — coming soon. Explore 100 premium hostel website templates across 10 quality tiers.',
  founder: 'Mayank Jangid',
  founderTitle: 'Founder',
  email: 'jangidmayank2304@gmail.com',
  // Placeholder — replace with the business-card number before launch.
  phoneDisplay: '+91 99999 99999',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919999999999',
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
