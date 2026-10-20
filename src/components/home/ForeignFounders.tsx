import { Check, Globe2, Landmark } from "lucide-react";
import { foreignFounderPoints } from "@/content/home";
import { Globe } from "@/components/illustrations/Spots";
import { TextLink } from "@/components/ui/Button";
import CallbackButton from "@/components/callback/CallbackButton";
import styles from "./ForeignFounders.module.css";

export default function ForeignFounders() {
  return (
    <section className="section" aria-labelledby="foreign-title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.visual} aria-hidden>
          <Globe className={styles.globe} />
          <div className={`${styles.chip} ${styles.chipTop}`}>
            <Globe2 size={18} strokeWidth={2} />
            Up to 100% foreign ownership in most sectors
          </div>
          <div className={`${styles.chip} ${styles.chipBottom}`}>
            <Landmark size={18} strokeWidth={2} />
            RBI reporting handled for you
          </div>
        </div>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>For NRIs and foreign founders</p>
          <h2 id="foreign-title" className={styles.title}>
            Expanding into India? We&apos;ll handle the setup.
          </h2>
          <p className={styles.lead}>
            Foreign nationals and NRIs follow the same registration process, with a few extra steps under the Companies
            Act and FEMA. We take care of each one.
          </p>
          <ul className={styles.list}>
            {foreignFounderPoints.map((point) => (
              <li key={point}>
                <span className={styles.tick} aria-hidden>
                  <Check size={14} strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            <CallbackButton topic="Foreign founder entering India" variant="primary">
              Talk to a cross-border advisor
            </CallbackButton>
            <TextLink href="/services/business-registration">Indian subsidiary setup</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
