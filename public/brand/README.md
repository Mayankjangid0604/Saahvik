# Brand assets

Drop the finalized logo exports here with these exact filenames:

| File | Used for |
|---|---|
| `logo-full-tagline-light.png` | Header on light sections / og:image base |
| `logo-primary-no-tagline.png` | General header logo |
| `logo-primary-dark-bg.png` | Footer / dark-section header |
| `monogram-s-dark.png` | Favicon source, mobile nav, loading state |
| `monogram-s-light-dark.png` | App icon variants (light/dark mode) |
| `business-card-front-back.png` | About/Contact page only |

Until the PNGs land, the site uses the inline SVG monogram in
`components/Monogram.tsx` and the SVG favicon at `app/icon.svg` — swap those
once the real files are here (regenerate a proper multi-size favicon set from
the S monogram: 32×32, 180×180 apple-touch-icon, etc.).

## Other launch checklist items

- Set the real WhatsApp number: `NEXT_PUBLIC_WHATSAPP_NUMBER` env var
  (digits only, e.g. `919876543210`) or edit `lib/site.ts`.
- Replace the placeholder phone number in `lib/site.ts`.
- Confirm the wordmark font name and replace the Playfair Display placeholder
  in `app/layout.tsx`.
- Eyedropper the exact brand colors from the original vector file and update
  the CSS variables at the top of `app/globals.css` if they differ.
