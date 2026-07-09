# Saahvik

Marketing site + template marketplace for **Saahvik** — websites, custom ERP
systems, and the upcoming **Saahvik Hostel Management Software** (SaaS).

Built with **Next.js 14 (App Router) + TypeScript + React Three Fiber**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

```
app/
  page.tsx                — Home (R3F hero, services, SaaS coming-soon, marketplace CTA)
  templates/page.tsx      — Marketplace landing (10 tier cards)
  tiers/[tier]/page.tsx   — Tier pages (10 templates each, filter/search/sort)
  custom/page.tsx         — Custom website + ERP enquiry
  coming-soon/page.tsx    — SaaS waitlist page
  api/enquiry/route.ts    — Enquiry/waitlist endpoint → prefilled WhatsApp deep link
data/templates.ts         — Typed catalog: 100 templates across 10 tiers
components/               — Hero3D, BrandDivider, TierGrid, TemplateCard, DetailsModal, forms
public/brand/             — Drop finalized logo PNGs here (see its README)
```

## Configuration before launch

- `NEXT_PUBLIC_WHATSAPP_NUMBER` — real WhatsApp number, digits only
  (e.g. `919876543210`). Falls back to a placeholder in `lib/site.ts`.
- Phone number + contact details: `lib/site.ts`.
- Brand assets: see `public/brand/README.md`.
- Wordmark font: Playfair Display is a placeholder until the real Didone
  serif is confirmed (`app/layout.tsx`).

## Notes

- No database — form submissions return a prefilled WhatsApp link. To store
  submissions (e.g. the SaaS waitlist), plug a backend into
  `app/api/enquiry/route.ts`.
- 3D is deliberately limited to the home hero (React Three Fiber), with a
  static SVG fallback for reduced-motion, save-data and small screens.
  Babylon.js was scoped out per the build brief.
