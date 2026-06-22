// DigitalPaani droplet mark — water drop with recycle arrows + ripples.
// Strokes use currentColor so it themes with the brand navy.
export default function BrandLogo({ size = 38 }: { size?: number }) {
  return (
    <svg
      className="brand-logo"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="DigitalPaani"
      role="img"
    >
      {/* droplet outline */}
      <path
        d="M50 8 C50 8 78 40 78 60 a28 28 0 1 1 -56 0 C22 40 50 8 50 8 Z"
        strokeWidth="5"
      />
      {/* recycle arrows: two arcs forming a loop, each ending in an arrowhead */}
      <g strokeWidth="4.2">
        <path d="M40 52 a14 14 0 0 1 22 -4" />
        <path d="M62 48 l1.5 -7 m-1.5 7 l-7 -1.5" />
        <path d="M60 66 a14 14 0 0 1 -22 4" />
        <path d="M38 70 l-1.5 7 m1.5 -7 l7 1.5" />
      </g>
      {/* ripple arcs trailing to the lower-left */}
      <path d="M6 78 a44 44 0 0 0 30 16" strokeWidth="4" opacity="0.85" />
      <path d="M2 90 a52 52 0 0 0 24 8" strokeWidth="4" opacity="0.55" />
    </svg>
  );
}
