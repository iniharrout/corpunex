import { Check, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import CallbackButton from "@/components/callback/CallbackButton";
import { Certificate, People, Rocket } from "@/components/illustrations/Spots";
import { timeline } from "@/config/site";
import { inr, PROFESSIONAL_FEE } from "@/lib/fees";
import styles from "./Hero.module.css";

const steps = [
  { label: "Name approved", state: "done" },
  { label: "Documents verified", state: "done" },
  { label: "Filed with MCA", state: "current" },
  { label: "Certificate, PAN and TAN", state: "next" },
] as const;

const services = ["Private Limited", "LLP", "OPC", "GST", "Accounting", "ROC filings", "Trademark", "Startup India"];

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.kicker}>
            <ShieldCheck size={16} strokeWidth={2} aria-hidden />
            Filings prepared and certified by CAs and CSs
          </p>
          <h1 id="hero-title" className={styles.title}>
            Register your company. <span className={styles.accent}>We&apos;ll handle the rest.</span>
          </h1>
          <p className={styles.lead}>
            Company registration, GST, accounting and yearly compliance for founders in India, with fixed prices and
            one team from day one.
          </p>
          <div className={styles.actions}>
            <ButtonLink href="/contact" variant="onInk" size="large" arrow>
              Get started
            </ButtonLink>
            <CallbackButton size="large" variant="ghost" />
          </div>
          <ul className={styles.points}>
            <li>
              <Check size={16} strokeWidth={2.5} aria-hidden />
              Private Limited from {inr(PROFESSIONAL_FEE.pvt)} + GST
            </li>
            <li>
              <Check size={16} strokeWidth={2.5} aria-hidden />
              Usually ready in {timeline.short}
            </li>
          </ul>
        </div>

        {/* Illustrative overview of how a registration progresses */}
        <div className={styles.visual} aria-hidden>
          <div className={styles.mainCard}>
            <div className={styles.cardHead}>
              <Rocket className={styles.cardArt} />
              <div>
                <p className={styles.cardTitle}>Your company registration</p>
                <p className={styles.cardSub}>Private Limited · Bhubaneswar</p>
              </div>
            </div>
            <div className={styles.progress}>
              <span />
            </div>
            <ol className={styles.steps}>
              {steps.map((s) => (
                <li key={s.label} data-state={s.state}>
                  <span className={styles.stepDot}>{s.state === "done" && <Check size={12} strokeWidth={3} />}</span>
                  {s.label}
                  <span className={styles.stepTag}>
                    {s.state === "done" ? "Done" : s.state === "current" ? "In progress" : "Next"}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className={`${styles.floatCard} ${styles.certCard}`}>
            <Certificate className={styles.floatArt} />
            <div>
              <p className={styles.floatTitle}>Certificate of incorporation</p>
              <p className={styles.floatSub}>Issued by the MCA</p>
            </div>
          </div>

          <div className={`${styles.floatCard} ${styles.teamCard}`}>
            <People count={2} className={styles.teamArt} />
            <div>
              <p className={styles.floatTitle}>Your CA and CS</p>
              <p className={styles.floatSub}>Checking every filing</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`wrap ${styles.servicesRow}`}>
        <p className={styles.servicesLabel}>One partner for</p>
        <ul className={styles.servicesList}>
          {services.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
