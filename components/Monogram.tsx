/**
 * Inline SVG "S" monogram — placeholder standing in for the finalized
 * monogram-s PNGs (drop those into public/brand/ and swap when ready).
 * Recolorable via the `gold` / `navy` props; used in the header, the
 * hero's reduced-motion fallback, and loading states.
 */
export default function Monogram({
  size = 40,
  gold = '#C9A66C',
  navy = '#0B1330',
  transparent = false,
}: {
  size?: number;
  gold?: string;
  navy?: string;
  transparent?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Saahvik monogram"
    >
      {!transparent && <rect width="64" height="64" rx="12" fill={navy} />}
      <rect
        x="4"
        y="4"
        width="56"
        height="56"
        rx="9"
        fill="none"
        stroke={gold}
        strokeWidth="1.5"
        opacity="0.55"
      />
      <text
        x="32"
        y="45"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="38"
        fontWeight="700"
        fill={gold}
      >
        S
      </text>
    </svg>
  );
}
