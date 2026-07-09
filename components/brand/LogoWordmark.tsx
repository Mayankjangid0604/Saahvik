/**
 * The SAAHVIK wordmark lockup, rebuilt as vector art from the brand
 * files: wide-tracked serif wordmark framed by the fleur-de-lis
 * scrollwork rules above and below. Recolorable via `color`; renders
 * crisp at any size. Swap for the real PNG exports only where raster
 * is unavoidable (og:image etc.).
 */
export default function LogoWordmark({
  color = '#C9A96E',
  width = 420,
  tagline = false,
  className,
}: {
  color?: string;
  width?: number;
  tagline?: boolean;
  className?: string;
}) {
  const height = tagline ? width * 0.36 : width * 0.3;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 420 ${tagline ? 152 : 126}`}
      fill="none"
      className={className}
      role="img"
      aria-label={tagline ? 'Saahvik — Smarter Hostel Management.' : 'Saahvik'}
      style={{ color }}
    >
      {/* ---- top ornament: dot rules, scrollwork, fleur-de-lis ---- */}
      <g stroke="currentColor" fill="currentColor">
        <circle cx="38" cy="34" r="2.6" stroke="none" />
        <path d="M44 34h104" strokeWidth="1.6" />
        <path d="M148 34c12 0 15-9 25-9" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M173 25c4.5 0 7 3 7 6s-2.5 5.5-5.5 5.5" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M272 34c-12 0-15-9-25-9" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M247 25c-4.5 0-7 3-7 6s2.5 5.5 5.5 5.5" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M272 34h104" strokeWidth="1.6" />
        <circle cx="382" cy="34" r="2.6" stroke="none" />
        {/* fleur-de-lis */}
        <g transform="translate(210 24)" stroke="none">
          <path d="M0 -17C-3.4 -11.5 -3.8 -5.5 0 1C3.8 -5.5 3.4 -11.5 0 -17Z" />
          <path d="M-3 -1.5C-8 -8 -14.5 -7 -14.5 -2.5C-14.5 1.8 -9 3.4 -3.4 1.8Z" />
          <path d="M3 -1.5C8 -8 14.5 -7 14.5 -2.5C14.5 1.8 9 3.4 3.4 1.8Z" />
          <rect x="-5.4" y="2.8" width="10.8" height="2.4" rx="1.2" />
          <path d="M0 6C-2.8 8.6 -2.8 11.6 0 14.4C2.8 11.6 2.8 8.6 0 6Z" />
          <circle cx="0" cy="0.5" r="2.6" />
        </g>
      </g>

      {/* ---- wordmark ---- */}
      <text
        x="210"
        y="82"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="var(--font-display), 'Playfair Display', Georgia, serif"
        fontSize="40"
        fontWeight="600"
        letterSpacing="14"
      >
        SAAHVIK
      </text>

      {/* ---- bottom ornament ---- */}
      <g stroke="currentColor" fill="currentColor" transform="translate(0 104)">
        <circle cx="76" cy="0" r="2.4" stroke="none" />
        <path d="M82 0h76" strokeWidth="1.4" />
        <path d="M158 0c10 0 12.5-7 21-7" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M262 0c-10 0-12.5-7-21-7" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M262 0h76" strokeWidth="1.4" />
        <circle cx="344" cy="0" r="2.4" stroke="none" />
        <g transform="translate(210 -4)" stroke="none">
          <path d="M0 -9C-2.4 -5.5 -2.7 -2 0 2C2.7 -2 2.4 -5.5 0 -9Z" />
          <path d="M-2.2 1C-6 -3.4 -10.5 -2.6 -10.5 0.4C-10.5 3.2 -6.5 4.2 -2.5 3Z" />
          <path d="M2.2 1C6 -3.4 10.5 -2.6 10.5 0.4C10.5 3.2 6.5 4.2 2.5 3Z" />
          <path d="M0 4.6C-2 6.6 -2 9 0 11C2 9 2 6.6 0 4.6Z" />
        </g>
      </g>

      {tagline && (
        <text
          x="210"
          y="140"
          textAnchor="middle"
          fill="currentColor"
          fontFamily="var(--font-accent), 'Cormorant Garamond', Georgia, serif"
          fontSize="17"
          fontStyle="italic"
          letterSpacing="2"
        >
          Smarter Hostel Management.
        </text>
      )}
    </svg>
  );
}
