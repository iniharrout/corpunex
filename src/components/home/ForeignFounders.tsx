import { Check } from "lucide-react";
import { foreignFounderPoints } from "@/content/home";
import { Globe } from "@/components/illustrations/Spots";
import CallbackButton from "@/components/callback/CallbackButton";
import styles from "./ForeignFounders.module.css";

export default function ForeignFounders() {
  return (
    <section className="section" aria-labelledby="foreign-title">
      <div className="wrap">
        <div className={styles.card}>
          <div className={styles.copy}>
            <h2 id="foreign-title" className={styles.title}>
              Starting in India from abroad?
            </h2>
            <p className={styles.intro}>
              NRIs and foreign founders can set up a company in India too. There are a few extra steps, and we handle
              them for you.
            </p>
            <ul className={styles.list}>
              {foreignFounderPoints.map((point) => (
                <li key={point}>
                  <Check size={18} strokeWidth={2.25} aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
            <CallbackButton topic="Foreign founder entering India" variant="primary">
              Talk to us about it
            </CallbackButton>
          </div>
          <Globe className={styles.art} />
        </div>
      </div>
    </section>
  );
}
