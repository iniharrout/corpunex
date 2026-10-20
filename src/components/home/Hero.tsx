import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import CallbackButton from "@/components/callback/CallbackButton";
import HeroScene from "@/components/illustrations/HeroScene";
import { timeline } from "@/config/site";
import { inr, PROFESSIONAL_FEE } from "@/lib/fees";
import styles from "./Hero.module.css";

const points = ["Fixed, itemised pricing", "Filings certified by CAs and CSs", "One team after registration"];

const facts = [
  { value: inr(PROFESSIONAL_FEE.pvt), label: "Private Limited registration, from (+ GST)" },
  { value: `${timeline.short.split(" ")[0]} days`, label: "Working days to your certificate, typically" },
  { value: "3 lines", label: "On every quote: government, third-party, ours" },
  { value: "1 team", label: "From registration to yearly filings" },
];

export default function Hero() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`${styles.grid} wrap`}>
          <div className={styles.copy}>
            <p className={styles.kicker}>
              <span className={styles.dot} aria-hidden />
              Company registration, tax and compliance
            </p>
            <h1 id="hero-title" className={styles.title}>
              Start and run your company in India, <span className="highlight">without the paperwork.</span>
            </h1>
            <p className={styles.lead}>
              Corpunex registers your company, sets up GST and keeps your yearly filings on time. Clear prices, simple
              steps, and qualified professionals behind every filing.
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
                  <Check size={16} strokeWidth={2.5} aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.visual}>
            <HeroScene className={styles.scene} />
          </div>
        </div>
      </section>

      <section className={styles.strip} aria-label="Corpunex at a glance">
        <dl className={`wrap ${styles.facts}`}>
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="visually-hidden">{f.label}</dt>
              <dd className={styles.factValue}>{f.value}</dd>
              <dd className={styles.factLabel} aria-hidden>
                {f.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
