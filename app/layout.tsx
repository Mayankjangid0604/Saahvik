import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond, Jost } from 'next/font/google';
import { site } from '@/lib/site';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import './globals.css';

// Placeholder for the brand's Didone-style wordmark serif — swap in the real
// font once its name is confirmed.
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'hostel management software',
    'hostel website templates',
    'custom ERP development',
    'website design',
    'Saahvik',
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${jost.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
