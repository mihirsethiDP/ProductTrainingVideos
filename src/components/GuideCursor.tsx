import { useEffect, useMemo, useRef, useState } from 'react';
import type { CursorKeyframe } from '../data/types';

interface Props {
  keyframes: CursorKeyframe[];
  /** 0..1 fraction of the narration spoken so far */
  progress: number;
  active: boolean; // narration playing for this step
}

/**
 * An animated pointer that glides across the screenshot, following the
 * narration. Each keyframe fires once speech progress passes its `at`
 * threshold; `click: true` plays a gold ripple on arrival.
 */
export default function GuideCursor({ keyframes, progress, active }: Props) {
  const [rippleKey, setRippleKey] = useState(0);
  const lastIndexRef = useRef(-1);

  const currentIndex = useMemo(() => {
    let idx = -1;
    for (let i = 0; i < keyframes.length; i++) {
      if (progress >= keyframes[i].at) idx = i;
    }
    return idx;
  }, [keyframes, progress]);

  const target = currentIndex >= 0 ? keyframes[currentIndex] : null;

  useEffect(() => {
    if (!active) {
      lastIndexRef.current = -1;
      return;
    }
    if (currentIndex !== lastIndexRef.current) {
      lastIndexRef.current = currentIndex;
      const kf = keyframes[currentIndex];
      if (kf?.click) {
        // delay the ripple until the cursor has glided to the spot
        const timer = setTimeout(() => setRippleKey((k) => k + 1), 1100);
        return () => clearTimeout(timer);
      }
    }
  }, [currentIndex, active, keyframes]);

  if (keyframes.length === 0) return null;
  const visible = active && target !== null;
  const x = target?.x ?? 50;
  const y = target?.y ?? 110;

  return (
    <>
      {rippleKey > 0 && visible && (
        <div
          key={rippleKey}
          className="cursor-ripple go"
          style={{ left: `${x}%`, top: `${y}%` }}
        />
      )}
      <div
        className={`guide-cursor${visible ? ' visible' : ''}`}
        style={{ left: `${x}%`, top: `${y}%` }}
      >
        <svg viewBox="0 0 24 24">
          <path
            d="M5.5 3.2 19 11.2c.5.3.4 1-.1 1.2l-5.6 1.6-3.2 5.1c-.3.5-1 .4-1.2-.2L4.3 4.2c-.2-.6.5-1.2 1.2-1z"
            fill="#fff"
            stroke="#0a1f3a"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
}
