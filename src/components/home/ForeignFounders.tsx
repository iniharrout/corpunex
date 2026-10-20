import { Check } from "lucide-react";
import { foreignFounderPoints } from "@/content/home";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
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
            <CallbackButton topic="Foreign founder entering India" variant="ink">
              Talk to us about it
            </CallbackButton>
          </div>
          <PhotoFrame
            src="/images/hero-founder.jpg"
            alt="A smiling founder in a blazer, arms folded"
            ratio="1 / 1"
            className={styles.photo}
            sizes="(min-width: 900px) 30vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
