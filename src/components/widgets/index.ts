import type { FC } from 'react';
import type { WidgetState } from '../../data/types';
import RangeNumberWidget from './RangeNumberWidget';

/**
 * Registry of interactive widget recreations, keyed by the string used in a
 * lesson layout's `widget` field. Add new widget types here as lessons need them.
 */
export const WIDGETS: Record<string, FC<WidgetState>> = {
  rangeNumber: RangeNumberWidget,
};
