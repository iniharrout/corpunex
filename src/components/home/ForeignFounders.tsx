import { Globe2 } from "lucide-react";
import { foreignSetupSteps } from "@/content/home";
import CallbackButton from "@/components/callback/CallbackButton";
import { ButtonLink } from "@/components/ui/Button";
import styles from "./ForeignFounders.module.css";

export default function ForeignFounders() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="foreign-title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <Globe2 size={16} strokeWidth={2} aria-hidden />
            For NRIs and companies outside India
          </p>
          <h2 id="foreign-title" className={styles.title}>
            Expanding into India? We&apos;ll handle the setup.
          </h2>
          <p className={styles.lead}>
            Setting up from abroad follows the same registration process, with a few extra steps for foreign
            investment rules (FEMA) and the RBI. Here&apos;s the path, and we take care of each step.
          </p>
          <div className={styles.actions}>
            <CallbackButton topic="Foreign founder entering India" variant="onInk" size="large">
              Talk to a cross-border advisor
            </CallbackButton>
            <ButtonLink href="/services/business-registration" variant="ghost" size="large" arrow>
              Indian subsidiary setup
            </ButtonLink>
          </div>
        </div>

        <ol className={styles.steps}>
          {foreignSetupSteps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.num} aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
