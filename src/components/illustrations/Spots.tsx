/**
 * Spot illustrations: one small hand-drawn scene per idea. Ink line work
 * with flat colour fills from the token palette. Decorative, so each is
 * aria-hidden; the text beside it carries the meaning.
 */

import type { ReactNode } from "react";

const ink = {
  stroke: "var(--color-ink)",
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Svg({ viewBox, className, children }: { viewBox: string; className?: string; children: ReactNode }) {
  return (
    <svg viewBox={viewBox} className={className} aria-hidden focusable="false">
      {children}
    </svg>
  );
}

/* ── People ────────────────────────────────────────────────── */

type Hair = "short" | "bun" | "long" | "curly";

/** A simple Notion-style person: head, hair and shoulders. (x, y) is the head centre. */
export function Person({
  x,
  y,
  r = 16,
  hair = "short",
  shirt = "var(--color-blue)",
}: {
  x: number;
  y: number;
  r?: number;
  hair?: Hair;
  /** Fill for the shoulders, or "none" to draw the head only. */
  shirt?: string;
}) {
  const k = r / 16;
  const hairPath: Record<Hair, string> = {
    short: `M${x - 16 * k} ${y - 1 * k}C${x - 18 * k} ${y - 16 * k} ${x - 6 * k} ${y - 20 * k} ${x + 2 * k} ${y - 19 * k}C${x + 13 * k} ${y - 18 * k} ${x + 18 * k} ${y - 10 * k} ${x + 16 * k} ${y - 2 * k}C${x + 10 * k} ${y - 9 * k} ${x} ${y - 10 * k} ${x - 6 * k} ${y - 8 * k}C${x - 10 * k} ${y - 7 * k} ${x - 13 * k} ${y - 4 * k} ${x - 16 * k} ${y - 1 * k}Z`,
    bun: `M${x - 16 * k} ${y}C${x - 17 * k} ${y - 14 * k} ${x - 6 * k} ${y - 19 * k} ${x + 3 * k} ${y - 18 * k}C${x + 14 * k} ${y - 17 * k} ${x + 18 * k} ${y - 8 * k} ${x + 16 * k} ${y}C${x + 8 * k} ${y - 10 * k} ${x - 8 * k} ${y - 10 * k} ${x - 16 * k} ${y}ZM${x + 4 * k} ${y - 26 * k}a${7 * k} ${7 * k} 0 1 0 0.1 0Z`,
    long: `M${x - 17 * k} ${y + 14 * k}C${x - 22 * k} ${y - 4 * k} ${x - 14 * k} ${y - 20 * k} ${x + 1 * k} ${y - 19 * k}C${x + 16 * k} ${y - 18 * k} ${x + 22 * k} ${y - 4 * k} ${x + 17 * k} ${y + 14 * k}C${x + 14 * k} ${y + 2 * k} ${x + 12 * k} ${y - 6 * k} ${x + 4 * k} ${y - 9 * k}C${x - 4 * k} ${y - 6 * k} ${x - 12 * k} ${y - 2 * k} ${x - 17 * k} ${y + 14 * k}Z`,
    curly: `M${x - 17 * k} ${y}c-4 ${-6 * k} 0 ${-12 * k} ${4 * k} ${-14 * k}c0 ${-6 * k} ${7 * k} ${-8 * k} ${10 * k} ${-6 * k}c${3 * k} ${-4 * k} ${10 * k} ${-4 * k} ${12 * k} 0c${5 * k} ${-1 * k} ${10 * k} ${3 * k} ${9 * k} ${8 * k}c${4 * k} ${3 * k} ${4 * k} ${9 * k} 0 ${12 * k}c${-6 * k} ${-7 * k} ${-24 * k} ${-7 * k} ${-35 * k} 0Z`,
  };
  return (
    <g>
      {shirt !== "none" && (
      <path
        d={`M${x - 26 * k} ${y + 44 * k}C${x - 26 * k} ${y + 26 * k} ${x - 14 * k} ${y + 18 * k} ${x} ${y + 18 * k}C${x + 14 * k} ${y + 18 * k} ${x + 26 * k} ${y + 26 * k} ${x + 26 * k} ${y + 44 * k}Z`}
        fill={shirt}
        {...ink}
      />
      )}
      <circle cx={x} cy={y} r={r} fill="var(--color-surface)" {...ink} />
      <path d={hairPath[hair]} fill="var(--color-ink)" {...ink} />
      <circle cx={x - 5 * k} cy={y + 3 * k} r={1.6 * k} fill="var(--color-ink)" />
      <circle cx={x + 5 * k} cy={y + 3 * k} r={1.6 * k} fill="var(--color-ink)" />
      <path d={`M${x - 4 * k} ${y + 8 * k}q${4 * k} ${3.5 * k} ${8 * k} 0`} fill="none" {...ink} strokeWidth={2} />
    </g>
  );
}

/** One, two or three people side by side. */
export function People({ count = 2, className }: { count?: 1 | 2 | 3; className?: string }) {
  const crew = [
    { hair: "short" as Hair, shirt: "var(--color-blue)" },
    { hair: "bun" as Hair, shirt: "var(--color-coral)" },
    { hair: "curly" as Hair, shirt: "var(--color-green)" },
  ].slice(0, count);
  const width = 70 + count * 60;
  return (
    <Svg viewBox={`0 0 ${width} 110`} className={className}>
      <ellipse cx={width / 2} cy={100} rx={width / 2 - 12} ry={6} fill="var(--color-ink)" opacity={0.08} />
      {crew.map((p, i) => (
        <Person key={i} x={65 + i * 60} y={42} r={20} hair={p.hair} shirt={p.shirt} />
      ))}
    </Svg>
  );
}

/* ── Objects ───────────────────────────────────────────────── */

/** Rocket parts, positioned so the nose sits at (80, 18) in a 160×160 box. */
export function RocketShape({ flame = true }: { flame?: boolean }) {
  return (
    <g>
      {flame && (
        <g className="rocket-flame">
          <path d="M66 104c0 18 8 28 14 38 6-10 14-20 14-38Z" fill="var(--color-yellow)" {...ink} />
          <path d="M74 104c0 12 4 18 6 24 2-6 6-12 6-24Z" fill="var(--color-coral)" {...ink} strokeWidth={2} />
        </g>
      )}
      <path d="M56 82 34 110l22-5Z" fill="var(--color-coral)" {...ink} />
      <path d="M104 82l22 28-22-5Z" fill="var(--color-coral)" {...ink} />
      <path d="M80 18c24 16 32 48 26 86H54c-6-38 2-70 26-86Z" fill="var(--color-surface)" {...ink} />
      <path d="M80 18c12 8 20 20 23 32H57c3-12 11-24 23-32Z" fill="var(--color-coral)" {...ink} />
      <circle cx="80" cy="74" r="12" fill="var(--color-blue)" {...ink} />
      <path d="M74 70a7 7 0 0 1 6-4" fill="none" {...ink} stroke="var(--color-surface)" strokeWidth={2.5} />
      <path d="M71 104v-8M89 104v-8" fill="none" {...ink} strokeWidth={2} />
    </g>
  );
}

export function Rocket({ className }: { className?: string }) {
  return (
    <Svg viewBox="0 0 160 160" className={className}>
      <circle cx="80" cy="84" r="66" fill="var(--color-sky)" />
      <RocketShape />
      <path d="M24 60h14M20 76h10M122 52h14M128 68h10" fill="none" {...ink} />
      <path d="M128 24l3 6 6 3-6 3-3 6-3-6-6-3 6-3Z" fill="var(--color-yellow)" {...ink} strokeWidth={2} />
    </Svg>
  );
}

export function Calculator({ className }: { className?: string }) {
  return (
    <Svg viewBox="0 0 160 150" className={className}>
      <circle cx="82" cy="78" r="64" fill="var(--color-mint)" />
      <path
        d="M26 22h62v100l-7.75-6-7.75 6-7.75-6-7.75 6-7.75-6-7.75 6-7.75-6-7.75 6Z"
        fill="var(--color-surface)"
        {...ink}
      />
      <path d="M38 40h36M38 54h28M38 68h36M38 82h20" fill="none" {...ink} />
      <rect x="70" y="44" width="66" height="88" rx="12" fill="var(--color-green)" {...ink} />
      <rect x="81" y="55" width="44" height="18" rx="5" fill="var(--color-surface)" {...ink} />
      <path d="M104 64h14" fill="none" {...ink} />
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <circle key={`${r}${c}`} cx={88 + c * 15} cy={88 + r * 14} r={4.5} fill="var(--color-surface)" {...ink} strokeWidth={2} />
        )),
      )}
      <circle cx="34" cy="118" r="17" fill="var(--color-yellow)" {...ink} />
      <text x="34" y="125" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="20" fill="var(--color-ink)">
        ₹
      </text>
    </Svg>
  );
}

export function Medal({ className }: { className?: string }) {
  return (
    <Svg viewBox="0 0 160 160" className={className}>
      <circle cx="80" cy="86" r="64" fill="var(--color-sun)" />
      <path d="M54 12h22l18 52-20 4Z" fill="var(--color-blue)" {...ink} />
      <path d="M106 12H84L66 64l20 4Z" fill="var(--color-coral)" {...ink} />
      <circle cx="80" cy="98" r="38" fill="var(--color-yellow)" {...ink} />
      <circle cx="80" cy="98" r="26" fill="none" {...ink} strokeDasharray="4 6" />
      <path
        d="M80 82l5 10 11 1.5-8 7.5 2 11-10-5.5-10 5.5 2-11-8-7.5 11-1.5Z"
        fill="var(--color-surface)"
        {...ink}
        strokeWidth={2}
      />
      <path d="M22 46l3 6 6 3-6 3-3 6-3-6-6-3 6-3ZM138 120l2.5 5 5 2.5-5 2.5-2.5 5-2.5-5-5-2.5 5-2.5Z" fill="var(--color-surface)" {...ink} strokeWidth={2} />
    </Svg>
  );
}

export function Globe({ className }: { className?: string }) {
  return (
    <Svg viewBox="0 0 170 160" className={className}>
      <circle cx="84" cy="84" r="66" fill="var(--color-peach)" />
      <circle cx="80" cy="86" r="46" fill="var(--color-blue)" {...ink} />
      <path
        d="M52 64c8-6 18-4 22 2s-2 12 4 18 16 2 16 12-10 14-18 12-8-10-14-14-14-4-16-14 0-10 6-16ZM100 54c8 0 16 6 18 14s-4 10-10 8-10-6-12-12 0-10 4-10Z"
        fill="var(--color-green)"
        {...ink}
        strokeWidth={2}
      />
      <ellipse cx="80" cy="86" rx="20" ry="46" fill="none" {...ink} strokeWidth={1.5} opacity={0.5} />
      <path d="M34 86h92" fill="none" {...ink} strokeWidth={1.5} opacity={0.5} />
      <path d="M22 118c20 26 80 34 116-6" fill="none" {...ink} strokeDasharray="2 8" />
      <path d="M138 112l14-20-24 6 7 4Z" fill="var(--color-surface)" {...ink} strokeWidth={2} />
    </Svg>
  );
}

export function ChatBubbles({ className }: { className?: string }) {
  return (
    <Svg viewBox="0 0 160 140" className={className}>
      <path
        d="M20 22h86a12 12 0 0 1 12 12v38a12 12 0 0 1-12 12H52l-18 16 2-16H20A12 12 0 0 1 8 72V34a12 12 0 0 1 12-12Z"
        fill="var(--color-yellow)"
        {...ink}
      />
      <circle cx="42" cy="53" r="5" fill="var(--color-ink)" />
      <circle cx="63" cy="53" r="5" fill="var(--color-ink)" />
      <circle cx="84" cy="53" r="5" fill="var(--color-ink)" />
      <path
        d="M78 70h62a10 10 0 0 1 10 10v26a10 10 0 0 1-10 10h-6l2 14-16-14H78a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10Z"
        fill="var(--color-surface)"
        {...ink}
      />
      <path d="M84 88h46M84 100h30" fill="none" {...ink} />
    </Svg>
  );
}

export function FolderUpload({ className }: { className?: string }) {
  return (
    <Svg viewBox="0 0 160 140" className={className}>
      <path d="M14 40a8 8 0 0 1 8-8h34l10 12h62a8 8 0 0 1 8 8v66a8 8 0 0 1-8 8H22a8 8 0 0 1-8-8Z" fill="var(--color-coral)" {...ink} />
      <rect x="38" y="16" width="64" height="80" rx="6" fill="var(--color-surface)" {...ink} transform="rotate(-6 70 56)" />
      <path d="M50 36h36M50 50h30M50 64h36" fill="none" {...ink} transform="rotate(-6 70 56)" />
      <path d="M14 66h132v52a8 8 0 0 1-8 8H22a8 8 0 0 1-8-8Z" fill="var(--color-peach)" {...ink} />
      <circle cx="126" cy="34" r="20" fill="var(--color-green)" {...ink} />
      <path d="M126 44V25m-8 8 8-8 8 8" fill="none" {...ink} />
    </Svg>
  );
}

export function Certificate({ className }: { className?: string }) {
  return (
    <Svg viewBox="0 0 160 140" className={className}>
      <g transform="rotate(-5 80 70)">
        <rect x="16" y="18" width="128" height="96" rx="8" fill="var(--color-surface)" {...ink} />
        <rect x="24" y="26" width="112" height="80" rx="4" fill="none" {...ink} strokeWidth={1.5} strokeDasharray="3 5" />
        <path d="M44 46h72M54 60h52M44 74h44" fill="none" {...ink} />
      </g>
      <path d="M108 104l-8 28 12-6 8 10 4-28Z" fill="var(--color-blue)" {...ink} strokeWidth={2} />
      <path d="M128 104l8 28-12-6-8 10-4-28Z" fill="var(--color-blue)" {...ink} strokeWidth={2} />
      <circle cx="118" cy="98" r="18" fill="var(--color-coral)" {...ink} />
      <path d="M110 98l6 6 10-11" fill="none" {...ink} stroke="var(--color-surface)" strokeWidth={3} />
    </Svg>
  );
}

export function PaperPlane({ className }: { className?: string }) {
  return (
    <Svg viewBox="0 0 200 120" className={className}>
      <path d="M8 96c30 10 56 4 70-14s34-28 62-20" fill="none" {...ink} strokeDasharray="2 9" />
      <path d="M140 54l52-38-30 70-12-22Z" fill="var(--color-surface)" {...ink} />
      <path d="M140 54l52-38-42 48Z" fill="var(--color-yellow)" {...ink} />
      <path d="M150 64l2 22 10-14" fill="var(--color-surface)" {...ink} strokeWidth={2} />
    </Svg>
  );
}

export function PhoneRing({ className }: { className?: string }) {
  return (
    <Svg viewBox="0 0 120 120" className={className}>
      <circle cx="60" cy="62" r="46" fill="var(--color-mint)" />
      <path
        d="M44 30l12 18-8 8c4 10 10 16 20 20l8-8 18 12-6 14c-30 2-58-26-58-56Z"
        fill="var(--color-green)"
        {...ink}
      />
      <path d="M78 22a24 24 0 0 1 20 20M76 34a12 12 0 0 1 10 10" fill="none" {...ink} />
    </Svg>
  );
}

export function Calendar({ className }: { className?: string }) {
  return (
    <Svg viewBox="0 0 160 150" className={className}>
      <circle cx="80" cy="80" r="64" fill="var(--color-peach)" />
      <rect x="26" y="30" width="108" height="96" rx="12" fill="var(--color-surface)" {...ink} />
      <path d="M26 42a12 12 0 0 1 12-12h84a12 12 0 0 1 12 12v12H26Z" fill="var(--color-coral)" {...ink} />
      <path d="M52 22v18M108 22v18" fill="none" {...ink} strokeWidth={3} />
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <rect
            key={`${r}${c}`}
            x={40 + c * 22}
            y={66 + r * 18}
            width={12}
            height={10}
            rx={3}
            fill={r === 1 && c === 2 ? "var(--color-yellow)" : "var(--color-paper-deep)"}
            {...ink}
            strokeWidth={r === 1 && c === 2 ? 2.5 : 1.5}
          />
        )),
      )}
      <circle cx="122" cy="116" r="17" fill="var(--color-green)" {...ink} />
      <path d="M114 116l6 6 10-11" fill="none" {...ink} stroke="var(--color-surface)" strokeWidth={3} />
    </Svg>
  );
}
