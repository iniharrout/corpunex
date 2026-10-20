/**
 * Small hand-drawn doodles: sparkles, squiggles, arrows, stars.
 * All decorative (aria-hidden) and drawn in ink with round caps, so they
 * match the larger illustrations.
 */

interface DoodleProps {
  className?: string;
  size?: number;
  color?: string;
}

const line = {
  stroke: "var(--color-ink)",
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

export function Sparkle({ className, size = 32, color = "var(--color-yellow)" }: DoodleProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <path
        d="M16 2.5c1.2 7.3 4.2 10.3 11.5 11.5-7.3 1.2-10.3 4.2-11.5 11.5C14.8 18.2 11.8 15.2 4.5 14 11.8 12.8 14.8 9.8 16 2.5Z"
        {...line}
        fill={color}
      />
    </svg>
  );
}

export function Star({ className, size = 28, color = "var(--color-coral)" }: DoodleProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 28 28" aria-hidden>
      <path
        d="M14 2.8l3.3 6.9 7.5 1-5.5 5.2 1.4 7.5L14 19.8l-6.7 3.6 1.4-7.5-5.5-5.2 7.5-1L14 2.8Z"
        {...line}
        fill={color}
      />
    </svg>
  );
}

export function Squiggle({ className, size = 120, color = "var(--color-ink)" }: DoodleProps) {
  return (
    <svg className={className} width={size} height={size / 6} viewBox="0 0 120 20" aria-hidden>
      <path
        d="M3 12c8-9 14-9 20 0s12 9 20 0 14-9 20 0 12 9 20 0 14-9 20 0 10 7 14 2"
        {...line}
        stroke={color}
        strokeWidth={3}
      />
    </svg>
  );
}

/** A loose curved arrow, pointing right then down by default. */
export function CurvyArrow({ className, size = 90 }: DoodleProps) {
  return (
    <svg className={className} width={size} height={size * 0.75} viewBox="0 0 96 72" aria-hidden>
      <path d="M6 10c22-6 50 0 62 18 7 10 8 22 4 34" {...line} />
      <path d="M62 52l10 12 12-10" {...line} />
    </svg>
  );
}

/** A quick scribbled circle, for ringing a word or number. */
export function ScribbleRing({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden>
      <path
        d="M120 8C70 2 14 12 8 38c-6 26 52 38 104 34 48-4 84-18 80-38-3-16-40-26-86-24"
        {...line}
        stroke="var(--color-coral)"
        strokeWidth={3}
      />
    </svg>
  );
}

export function Dots({ className, color = "var(--color-ink)" }: { className?: string; color?: string }) {
  return (
    <svg className={className} width="56" height="40" viewBox="0 0 56 40" aria-hidden>
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3].map((c) => <circle key={`${r}${c}`} cx={6 + c * 15} cy={6 + r * 14} r={2.5} fill={color} />),
      )}
    </svg>
  );
}
