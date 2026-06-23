// Circular progress ring (SVG). Colours by completion: started → accent, done → leaf.
export default function ProgressRing({
  percent,
  size = 44,
  stroke = 4,
  showLabel = true,
}: {
  percent: number;
  size?: number;
  stroke?: number;
  showLabel?: boolean;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, percent));
  const dash = (pct / 100) * c;
  const done = pct >= 100;
  const color = done ? 'var(--leaf)' : pct > 0 ? 'var(--accent)' : 'var(--line)';
  return (
    <span className="progress-ring" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--line)" strokeWidth={stroke} opacity="0.5" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: 'stroke-dasharray 0.5s ease' }}
        />
      </svg>
      {showLabel && (
        <span className="progress-ring-label">
          {done ? <span className="pr-check">✓</span> : `${pct}%`}
        </span>
      )}
    </span>
  );
}
