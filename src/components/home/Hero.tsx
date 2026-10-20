import { ButtonLink } from "@/components/ui/Button";
import { Ph } from "@/components/ui/Placeholder";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { timeline } from "@/config/site";
import { inr, PROFESSIONAL_FEE } from "@/lib/fees";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <h1 id="hero-title" className={styles.title}>
            Incorporated in {timeline.short}. Compliant every year after.
          </h1>
          <p className={styles.lead}>
            We register Private Limited companies, LLPs and OPCs for founders in India and abroad, then handle your
            GST, accounts and annual filings. You see our fee and the government fees separately before you pay.
          </p>
          <div className={styles.actions}>
            <ButtonLink href="/contact" size="large">
              Talk to an advisor
            </ButtonLink>
            <ButtonLink href="#pricing" variant="secondary" size="large">
              Get a quote
            </ButtonLink>
          </div>
          <p className={styles.trust}>
            Private Limited from {inr(PROFESSIONAL_FEE.pvt)} + GST, government fees separate.{" "}
            <span className={styles.trustBreak}>
              <Ph>n</Ph> companies incorporated since <Ph>year</Ph>.
            </span>
          </p>
        </div>

        <PhotoFrame
          className={styles.photo}
          alt="A Corpunex advisor reviewing incorporation documents with a founder"
          brief="Corpunex advisor going through incorporation papers with a founder at the Bhubaneswar office. Natural light, no posing."
          ratio="4 / 5"
          priority
        />
      </div>

      <div className="wrap">
        <p className={styles.whoWeAre}>
          <strong>Who we are.</strong> Corpunex is an independent advisory firm. Your filings are prepared and
          certified by qualified Chartered Accountants, Company Secretaries and advocates. Approvals are granted by the
          MCA, GSTN and DPIIT, not by us.
        </p>
      </div>
    </section>
  );
}
