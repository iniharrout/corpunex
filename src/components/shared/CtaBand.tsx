import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";
import CallbackButton from "@/components/callback/CallbackButton";
import { PaperPlane } from "@/components/illustrations/Spots";
import { Sparkle } from "@/components/illustrations/Doodles";
import styles from "./CtaBand.module.css";

/** Closing call to action: a big yellow sticker with a paper plane. */
export default function CtaBand({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <section className={styles.section} aria-labelledby="cta-title">
      <div className="wrap">
        <div className={`sticker ${styles.card}`}>
          <PaperPlane className={styles.plane} />
          <Sparkle className={styles.sparkle} size={30} color="var(--color-surface)" />
          <div>
            <h2 id="cta-title" className={styles.title}>
              {title}
            </h2>
            {children && <p className={styles.body}>{children}</p>}
          </div>
          <div className={styles.actions}>
            <ButtonLink href="/contact" size="large" arrow>
              Get started
            </ButtonLink>
            <CallbackButton variant="secondary" size="large" />
          </div>
        </div>
      </div>
    </section>
  );
}
