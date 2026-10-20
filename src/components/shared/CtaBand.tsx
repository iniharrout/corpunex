import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/config/site";
import styles from "./CtaBand.module.css";

/** Closing call to action: one primary button plus WhatsApp. */
export default function CtaBand({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <section className={`band-ink ${styles.band}`} aria-labelledby="cta-title">
      <div className={`wrap ${styles.inner}`}>
        <div>
          <h2 id="cta-title" className={styles.title}>
            {title}
          </h2>
          {children && <p className={styles.body}>{children}</p>}
        </div>
        <div className={styles.actions}>
          <ButtonLink href="/contact" size="large">
            Talk to an advisor
          </ButtonLink>
          <ButtonLink href={site.whatsappHref} variant="onInk" size="large" target="_blank" rel="noopener noreferrer">
            WhatsApp us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
