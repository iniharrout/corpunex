import type { ReactNode } from "react";
import styles from "./ui.module.css";

/**
 * Marks copy that needs real content from the Corpunex team.
 * Renders the bracketed instruction so it is impossible to miss in review.
 * Search the codebase for `<Ph` to find every instance.
 */
export function Ph({ children, kind = "VERIFY" }: { children: ReactNode; kind?: string }) {
  return (
    <mark className={styles.ph} data-placeholder>
      [{kind}: {children}]
    </mark>
  );
}

/**
 * Renders a content string, highlighting any [VERIFY: …] or [REAL …: …]
 * segments inside it. Use for config and content-file values.
 */
export function Fact({ value }: { value: string }) {
  const parts = value.split(/(\[(?:VERIFY|REAL)[^\]]*\])/);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className={styles.ph} data-placeholder>
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}

export function Label({ children, as: Tag = "span" }: { children: ReactNode; as?: "span" | "p" | "h2" | "h3" }) {
  return <Tag className={styles.label}>{children}</Tag>;
}
