/**
 * The brand flourish from the Saahvik logo — fleur-de-lis with scrollwork
 * over a dot-tipped horizontal rule — rebuilt as an SVG so it stays crisp
 * at any size and recolors for light/dark sections via `color`.
 */
export default function BrandDivider({
  color = 'var(--gold)',
  width = 320,
  className,
}: {
  color?: string;
  width?: number;
  className?: string;
}) {
  return (
    <div className={`brand-divider${className ? ` ${className}` : ''}`} aria-hidden="true">
      <svg
        width={width}
        height={width * 0.15}
        viewBox="0 0 320 48"
        fill="none"
        style={{ color }}
      >
        {/* dot-tipped rule, left */}
        <circle cx="6" cy="30" r="2.4" fill="currentColor" />
        <line x1="12" y1="30" x2="122" y2="30" stroke="currentColor" strokeWidth="1.2" />
        {/* left scrollwork curl */}
        <path
          d="M122 30c10 0 14-8 22-8"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* fleur-de-lis */}
        <g transform="translate(160 22)">
          {/* center petal */}
          <path
            d="M0 -14C-3 -9 -3.4 -4 0 2C3.4 -4 3 -9 0 -14Z"
            fill="currentColor"
          />
          {/* left petal */}
          <path
            d="M-2.5 0C-7 -6 -13 -5 -13 -1C-13 3 -8 4.5 -3 3Z"
            fill="currentColor"
          />
          {/* right petal */}
          <path
            d="M2.5 0C7 -6 13 -5 13 -1C13 3 8 4.5 3 3Z"
            fill="currentColor"
          />
          {/* band */}
          <rect x="-5" y="4" width="10" height="2.2" rx="1.1" fill="currentColor" />
          {/* base */}
          <path d="M0 7C-2.6 9.5 -2.6 12.5 0 15C2.6 12.5 2.6 9.5 0 7Z" fill="currentColor" />
        </g>
        {/* right scrollwork curl */}
        <path
          d="M198 30c-10 0-14-8-22-8"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* dot-tipped rule, right */}
        <line x1="198" y1="30" x2="308" y2="30" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="314" cy="30" r="2.4" fill="currentColor" />
      </svg>
    </div>
  );
}
