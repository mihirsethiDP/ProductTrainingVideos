import type { ThresholdBand } from '../../data/types';

/** Widget theme colours, keyed by the `accent` field in WidgetState. */
export const ACCENTS = {
  purple: { solid: '#7d1f6e', light: '#f3e8f0', text: '#7d1f6e' },
  teal: { solid: '#1a8a73', light: '#e6f4f0', text: '#137a64' },
  pink: { solid: '#b0226e', light: '#fbe9f1', text: '#a01f63' },
} as const;

export type AccentKey = keyof typeof ACCENTS;

/** Threshold band colours. */
export const LEVEL_COLORS: Record<ThresholdBand['level'], string> = {
  good: '#3fa45f',
  warning: '#e8b53a',
  critical: '#e0574e',
};

/** Clamped 0..1 position of a value within [min, max]. */
export function valueFraction(value: string | number | undefined, min: number, max: number): number {
  const v = typeof value === 'number' ? value : parseFloat(String(value ?? ''));
  if (Number.isNaN(v) || max === min) return 0;
  return Math.max(0, Math.min(1, (v - min) / (max - min)));
}

/** The threshold colour for a value, or null if no band contains it. */
export function zoneColor(
  value: string | number | undefined,
  thresholds?: ThresholdBand[],
): string | null {
  if (!thresholds) return null;
  const v = typeof value === 'number' ? value : parseFloat(String(value ?? ''));
  const band = thresholds.find((b) => v >= b.from && v <= b.to);
  return band ? LEVEL_COLORS[band.level] : null;
}
