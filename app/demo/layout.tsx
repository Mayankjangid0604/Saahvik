import {
  Playfair_Display,
  Cormorant_Garamond,
  Jost,
  DM_Serif_Display,
  DM_Sans,
  Montserrat,
  Karla,
  Bebas_Neue,
  Inter,
  Space_Grotesk,
  Lora,
  Nunito_Sans,
  Libre_Baskerville,
  Poppins,
  Fraunces,
  Sora,
} from 'next/font/google';
import './demo.css';

/**
 * Font pool for the template demos. Each demo picks a heading/body pair
 * from these via data/demos.ts FONT_PAIRS — loading them here keeps the
 * main site's bundle untouched.
 */
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--f-playfair', display: 'swap' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--f-cormorant', display: 'swap' });
const jost = Jost({ subsets: ['latin'], variable: '--f-jost', display: 'swap' });
const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--f-dmserif', display: 'swap' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--f-dmsans', display: 'swap' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--f-montserrat', display: 'swap' });
const karla = Karla({ subsets: ['latin'], variable: '--f-karla', display: 'swap' });
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--f-bebas', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--f-inter', display: 'swap' });
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--f-grotesk', display: 'swap' });
const lora = Lora({ subsets: ['latin'], variable: '--f-lora', display: 'swap' });
const nunito = Nunito_Sans({ subsets: ['latin'], variable: '--f-nunito', display: 'swap' });
const baskerville = Libre_Baskerville({ subsets: ['latin'], weight: ['400', '700'], variable: '--f-baskerville', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--f-poppins', display: 'swap' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--f-fraunces', display: 'swap' });
const sora = Sora({ subsets: ['latin'], variable: '--f-sora', display: 'swap' });

const fontVars = [
  playfair, cormorant, jost, dmSerif, dmSans, montserrat, karla, bebas,
  inter, grotesk, lora, nunito, baskerville, poppins, fraunces, sora,
]
  .map((f) => f.variable)
  .join(' ');

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <div className={fontVars}>{children}</div>;
}
