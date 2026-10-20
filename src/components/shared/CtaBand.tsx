import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";
import CallbackButton from "@/components/callback/CallbackButton";
import styles from "./CtaBand.module.css";

/** Closing call to action on a bright blue card. */
export default function CtaBand({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <section className={styles.section} aria-labelledby="cta-title">
      <div className="wrap">
        <div className={styles.card}>
          <div>
            <h2 id="cta-title" className={styles.title}>
              {title}
            </h2>
            {children && <p className={styles.body}>{children}</p>}
          </div>
          <div className={styles.actions}>
            <ButtonLink href="/contact" variant="onInk" size="large" arrow>
              Get started
            </ButtonLink>
            <CallbackButton variant="ghost" size="large" />
          </div>
        </div>
      </div>
    </section>
  );
}
