import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import CallbackButton from "@/components/callback/CallbackButton";
import { timeline } from "@/config/site";
import { inr, PROFESSIONAL_FEE } from "@/lib/fees";
import styles from "./Hero.module.css";

const points = [
  `Private Limited from ${inr(PROFESSIONAL_FEE.pvt)} + GST`,
  `Ready in ${timeline.short}`,
  "Handled by CAs and CSs",
];

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.kicker}>For first-time founders in India</p>
          <h1 id="hero-title" className={styles.title}>
            Start your company <span className="highlight">without the paperwork stress.</span>
          </h1>
          <p className={styles.lead}>
            Tell us your idea. We&apos;ll register your company, set up GST and keep your yearly filings on time. Clear
            prices, simple steps, and real people to help you.
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
                <Check size={18} strokeWidth={2.25} aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <PhotoFrame
            src="/images/founders-meeting.jpg"
            alt="Two young founders smiling while planning their business on a laptop"
            ratio="5 / 4"
            priority
            sizes="(min-width: 900px) 45vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
