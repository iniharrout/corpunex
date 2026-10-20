import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./ui.module.css";

type Variant = "primary" | "secondary" | "ghost" | "ink" | "onInk";

interface StyleProps {
  variant?: Variant;
  size?: "default" | "large";
  block?: boolean;
  arrow?: boolean;
}

function classes({ variant = "primary", size = "default", block }: StyleProps) {
  return [styles.button, styles[variant], size === "large" && styles.large, block && styles.block]
    .filter(Boolean)
    .join(" ");
}

function Arrow() {
  return <ArrowRight size={16} strokeWidth={1.75} className={styles.arrow} aria-hidden />;
}

export function ButtonLink({
  href,
  variant,
  size,
  block,
  arrow,
  children,
  ...anchorProps
}: StyleProps & { href: string; children: ReactNode } & Omit<ComponentProps<"a">, "href" | "className">) {
  const className = classes({ variant, size, block });
  const external = /^(https?:|mailto:)/.test(href);
  const Tag = external ? "a" : Link;
  return (
    <Tag href={href} className={className} {...anchorProps}>
      {children}
      {arrow && <Arrow />}
    </Tag>
  );
}

export function Button({
  variant,
  size,
  block,
  arrow,
  children,
  ...buttonProps
}: StyleProps & { children: ReactNode } & Omit<ComponentProps<"button">, "className">) {
  return (
    <button className={classes({ variant, size, block })} {...buttonProps}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={styles.textLink}>
      {children}
      <Arrow />
    </Link>
  );
}
