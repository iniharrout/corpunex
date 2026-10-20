import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import CallbackButton from "@/components/callback/CallbackButton";
import HeroScene from "@/components/illustrations/HeroScene";
import { CurvyArrow, Sparkle, Squiggle } from "@/components/illustrations/Doodles";
import { timeline } from "@/config/site";
import { inr, PROFESSIONAL_FEE } from "@/lib/fees";
import styles from "./Hero.module.css";

const points = [
  `Private Limited from ${inr(PROFESSIONAL_FEE.pvt)} + GST`,
  `Ready in ${timeline.short}`,
  "Checked by CAs and CSs",
];

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.kicker}>
            <Sparkle size={18} />
            For first-time founders in India
          </p>
          <h1 id="hero-title" className={styles.title}>
            Your company, <span className="highlight">minus</span> the paperwork headache.
          </h1>
          <p className={styles.lead}>
            Tell us your idea. We register your company, set up GST and keep your yearly filings on time, with
            clear prices and real humans who explain every step.
          </p>
          <div className={styles.actions}>
            <ButtonLink href="/contact" size="large" arrow>
              Get started
            </ButtonLink>
            <CallbackButton size="large" />
          </div>
          <ul className={styles.points}>
            {points.map((p) => (
              <li key={p}>
                <span className={styles.tick} aria-hidden>
                  <Check size={14} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <HeroScene className={styles.scene} />
          <p className={`hand ${styles.note}`} aria-hidden>
            that&apos;s you, launching!
          </p>
          <CurvyArrow className={styles.arrow} size={70} />
          <span className={styles.sticker} aria-hidden>
            No jargon,
            <br />
            promise!
          </span>
        </div>
      </div>
      <Squiggle className={styles.squiggle} size={140} color="var(--color-coral)" />
    </section>
  );
}
