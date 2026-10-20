/**
 * Homepage hero illustration: a founder perched on a stack of paperwork,
 * laptop on lap, while their company launches like a rocket. Decorative.
 */

import { Person, RocketShape } from "./Spots";
import styles from "./HeroScene.module.css";

const ink = {
  stroke: "var(--color-ink)",
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function HeroScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 560 520" className={className} aria-hidden focusable="false">
      {/* Background blob */}
      <path
        d="M96 132C140 52 268 22 372 54s170 118 150 236-118 196-246 196S48 420 40 320s12-128 56-188Z"
        fill="var(--color-yellow)"
        {...ink}
      />
      <path d="M70 180c-12 30-16 62-10 92" fill="none" {...ink} stroke="var(--color-surface)" strokeWidth={4} />

      {/* Certificate floating top-left */}
      <g className={styles.floatSlow}>
        <g transform="rotate(-10 140 120)">
          <rect x="78" y="78" width="124" height="88" rx="8" fill="var(--color-surface)" {...ink} />
          <path d="M98 100h60M98 114h80M98 128h50" fill="none" {...ink} />
          <circle cx="176" cy="142" r="13" fill="var(--color-coral)" {...ink} />
          <path d="M170 142l4 4 7-8" fill="none" {...ink} stroke="var(--color-surface)" strokeWidth={2.5} />
        </g>
      </g>

      {/* Rocket launching on the right, with a smoke trail */}
      <g className={styles.rocket}>
        <g fill="var(--color-surface)" {...ink}>
          <circle cx="470" cy="318" r="15" />
          <circle cx="496" cy="330" r="11" />
          <circle cx="448" cy="336" r="10" />
          <circle cx="476" cy="346" r="8" />
        </g>
        <g transform="translate(372 108) scale(1.25)">
          <RocketShape />
        </g>
        <path d="M452 196h-14M448 214h-10M532 186h12M536 204h8" fill="none" {...ink} />
      </g>

      {/* Paperwork stack */}
      <g>
        <rect x="150" y="410" width="250" height="40" rx="6" fill="var(--color-surface)" {...ink} transform="rotate(2 275 430)" />
        <rect x="160" y="374" width="236" height="40" rx="6" fill="var(--color-sky)" {...ink} transform="rotate(-2 278 394)" />
        <rect x="150" y="338" width="244" height="40" rx="6" fill="var(--color-surface)" {...ink} transform="rotate(1.5 272 358)" />
        <path d="M172 430h40M180 394h60M172 358h30" fill="none" {...ink} strokeWidth={2} />
        <path d="M300 450h80" fill="none" {...ink} strokeWidth={2} opacity={0.4} />
      </g>

      {/* Founder: legs over the front of the stack */}
      <g>
        <path d="M232 340c-6 30-10 58-12 86h22c4-26 8-50 16-78Z" fill="var(--color-ink)" {...ink} />
        <path d="M284 340c4 30 4 58 2 86h22c4-28 4-58-2-88Z" fill="var(--color-ink)" {...ink} />
        <path d="M212 424h34c6 0 8 10 0 12h-38c-4-6-2-12 4-12Z" fill="var(--color-coral)" {...ink} />
        <path d="M280 424h34c6 0 8 10 0 12h-38c-4-6-2-12 4-12Z" fill="var(--color-coral)" {...ink} />
      </g>

      {/* Torso, arms and laptop */}
      <path d="M222 352c-4-50 6-82 46-84s54 32 46 84Z" fill="var(--color-blue)" {...ink} />
      <g className={styles.typing}>
        <path d="M238 290c-16 18-22 38-14 52l26-4c-4-12 0-26 6-36Z" fill="var(--color-blue)" {...ink} />
        <path d="M300 290c16 18 22 38 14 52l-26-4c4-12 0-26-6-36Z" fill="var(--color-blue)" {...ink} />
      </g>
      <path d="M206 350h132l-10 14H216Z" fill="var(--color-paper-deep)" {...ink} />
      <rect x="220" y="290" width="104" height="62" rx="6" fill="var(--color-surface)" {...ink} transform="rotate(-4 272 321)" />
      <circle cx="272" cy="321" r="9" fill="var(--color-coral)" {...ink} strokeWidth={2} />

      {/* Head */}
      <Person x={270} y={232} r={30} hair="curly" shirt="none" />

      {/* Thought bubble with a tick */}
      <g className={styles.pop}>
        <circle cx="338" cy="176" r="6" fill="var(--color-surface)" {...ink} strokeWidth={2} />
        <circle cx="354" cy="156" r="9" fill="var(--color-surface)" {...ink} strokeWidth={2} />
        <circle cx="388" cy="124" r="26" fill="var(--color-green)" {...ink} />
        <path d="M376 124l9 9 16-18" fill="none" {...ink} stroke="var(--color-surface)" strokeWidth={4} />
      </g>

      {/* Sparkles */}
      <g className={styles.twinkle}>
        <path d="M486 330c2 12 6 16 18 18-12 2-16 6-18 18-2-12-6-16-18-18 12-2 16-6 18-18Z" fill="var(--color-surface)" {...ink} />
        <path d="M70 360c1.5 9 4.5 12 13.5 13.5-9 1.5-12 4.5-13.5 13.5-1.5-9-4.5-12-13.5-13.5 9-1.5 12-4.5 13.5-13.5Z" fill="var(--color-coral)" {...ink} />
        <path d="M236 52c1.5 9 4.5 12 13.5 13.5-9 1.5-12 4.5-13.5 13.5-1.5-9-4.5-12-13.5-13.5 9-1.5 12-4.5 13.5-13.5Z" fill="var(--color-surface)" {...ink} />
      </g>
    </svg>
  );
}
