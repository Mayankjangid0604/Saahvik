import Link from 'next/link';

/**
 * The hero's floating stack of miniature template previews — three real
 * templates from the catalog rendered as tiny stylized websites in their
 * actual demo palettes. Pure CSS, each card links to its live demo.
 */

interface Mini {
  id: string;
  label: string;
  price: string;
  bg: string;
  surface: string;
  ink: string;
  primary: string;
  accent: string;
}

const MINIS: Mini[] = [
  {
    id: 'seraphine-t5',
    label: '№ 044 · Seraphine',
    price: '₹18,499',
    bg: '#fbf3f4',
    surface: '#ffffff',
    ink: '#3a2430',
    primary: '#a34664',
    accent: '#e3b04b',
  },
  {
    id: 'harbor-t2',
    label: '№ 012 · Harbor',
    price: '₹4,199',
    bg: '#0d2635',
    surface: '#123043',
    ink: '#e8f2f7',
    primary: '#35a3c9',
    accent: '#f5b83d',
  },
  {
    id: 'dawn-t1',
    label: '№ 001 · Dawn',
    price: '₹1,499',
    bg: '#faf6f0',
    surface: '#ffffff',
    ink: '#2b2118',
    primary: '#c2542e',
    accent: '#e8a87c',
  },
];

function MiniSite({ mini }: { mini: Mini }) {
  const style = {
    '--m-bg': mini.bg,
    '--m-surface': mini.surface,
    '--m-ink': mini.ink,
    '--m-primary': mini.primary,
    '--m-accent': mini.accent,
  } as React.CSSProperties;

  return (
    <Link href={`/demo/${mini.id}`} className="mini" style={style} aria-label={`Open live demo: ${mini.label}`}>
      {/* browser chrome */}
      <span className="mini__chrome">
        <i /><i /><i />
        <em>saahvik.com/demo</em>
      </span>
      {/* nav */}
      <span className="mini__nav">
        <b />
        <span><u /><u /><u /></span>
        <s />
      </span>
      {/* hero block */}
      <span className="mini__hero">
        <span className="mini__hero-line" />
        <span className="mini__hero-line mini__hero-line--short" />
        <s className="mini__hero-btn" />
      </span>
      {/* room cards */}
      <span className="mini__rooms">
        <span /><span /><span />
      </span>
      {/* footer bar */}
      <span className="mini__bar" />
      {/* label */}
      <span className="mini__tag">
        {mini.label} <b>{mini.price}</b>
      </span>
    </Link>
  );
}

export default function HeroShowcase() {
  return (
    <div className="hero-stage" aria-label="Template previews">
      <div className="hero-stage__glow" aria-hidden="true" />
      <div className="hero-stage__card hero-stage__card--back-l">
        <MiniSite mini={MINIS[1]} />
      </div>
      <div className="hero-stage__card hero-stage__card--back-r">
        <MiniSite mini={MINIS[2]} />
      </div>
      <div className="hero-stage__card hero-stage__card--front">
        <MiniSite mini={MINIS[0]} />
      </div>
    </div>
  );
}
