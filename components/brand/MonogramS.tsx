/**
 * The ornate Saahvik "S" monogram, recreated as vector art from the
 * brand icon: a navy serif S with a gold outline and floral filigree
 * hints, set in a gold-framed rounded square on deep navy leather.
 */
export default function MonogramS({
  size = 44,
  frame = true,
  className,
}: {
  size?: number;
  frame?: boolean;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      className={className}
      role="img"
      aria-label="Saahvik monogram"
    >
      <defs>
        <linearGradient id="sv-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E8CF9A" />
          <stop offset="0.5" stopColor="#C9A96E" />
          <stop offset="1" stopColor="#8C6A3F" />
        </linearGradient>
        <linearGradient id="sv-navy" x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#1C2E4A" />
          <stop offset="1" stopColor="#0D1B2A" />
        </linearGradient>
      </defs>

      {frame && (
        <>
          <rect x="2" y="2" width="92" height="92" rx="20" fill="url(#sv-navy)" />
          <rect x="4" y="4" width="88" height="88" rx="18" fill="none" stroke="url(#sv-gold)" strokeWidth="3" />
        </>
      )}

      {/* serif S — gold outline, navy body */}
      <text
        x="48"
        y="70"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
        fontSize="64"
        fontWeight="700"
        fill="url(#sv-navy)"
        stroke="url(#sv-gold)"
        strokeWidth="2.6"
        paintOrder="stroke"
      >
        S
      </text>

      {/* filigree hints on the diagonal stroke */}
      <g fill="#C9A96E" opacity="0.9">
        <circle cx="41" cy="47" r="1.4" />
        <circle cx="47" cy="44" r="1.1" />
        <circle cx="53" cy="41" r="1.4" />
        <path d="M44 50c2-1.4 4.5-2.8 7-4" stroke="#C9A96E" strokeWidth="0.8" fill="none" />
      </g>
    </svg>
  );
}
