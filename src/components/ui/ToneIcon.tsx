import {
  BadgeCheck,
  CalendarCheck,
  Globe2,
  MessagesSquare,
  Receipt,
  Rocket,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import styles from "./ToneIcon.module.css";

const icons = {
  rocket: Rocket,
  receipt: Receipt,
  badge: BadgeCheck,
  globe: Globe2,
  shield: ShieldCheck,
  chat: MessagesSquare,
  calendar: CalendarCheck,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

/** A line icon in a soft coloured tile. Decorative: always pair with text. */
export function ToneIcon({ name, tone }: { name: IconName; tone: "sky" | "mint" | "sun" | "peach" }) {
  const Icon = icons[name];
  return (
    <span className={`${styles.tile} ${styles[tone]}`} aria-hidden>
      <Icon size={22} strokeWidth={1.75} />
    </span>
  );
}
