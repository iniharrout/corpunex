"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { FaqList, type Faq } from "@/components/shared/FaqList";
import styles from "./Faq.module.css";

export interface FaqTab {
  id: string;
  label: string;
  faqs: Faq[];
}

/**
 * FAQ topics as tabs. Every panel stays in the page (inactive ones are
 * `hidden`), so the answers remain readable without JavaScript and by
 * search engines.
 */
export default function FaqTabs({ tabs }: { tabs: FaqTab[] }) {
  const [active, setActive] = useState(0);
  const base = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    const last = tabs.length - 1;
    const next =
      e.key === "ArrowRight" ? (i === last ? 0 : i + 1) :
      e.key === "ArrowLeft" ? (i === 0 ? last : i - 1) :
      e.key === "Home" ? 0 :
      e.key === "End" ? last : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  }

  return (
    <div className={styles.tabsWrap}>
      <div role="tablist" aria-label="Question topics" className={styles.tabs}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${base}-tab-${t.id}`}
            aria-selected={i === active}
            aria-controls={`${base}-panel-${t.id}`}
            tabIndex={i === active ? 0 : -1}
            className={styles.tab}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`${base}-panel-${t.id}`}
          aria-labelledby={`${base}-tab-${t.id}`}
          hidden={i !== active}
          className={styles.panel}
        >
          <FaqList faqs={t.faqs} />
        </div>
      ))}
    </div>
  );
}
