import FeeEstimator from "@/components/pricing/FeeEstimator";
import { TextLink } from "@/components/ui/Button";
import styles from "./PricingSection.module.css";

export default function PricingSection() {
  return (
    <section id="pricing" className="section band-sky" aria-labelledby="pricing-title">
      <div className="wrap">
        <div className={styles.head}>
          <h2 id="pricing-title" className={styles.title}>
            Know your total cost <span className="highlight">before you start.</span>
          </h2>
          <div className={styles.intro}>
            <p>
              Choose your company type and state. You&apos;ll see the government fees, digital signatures and our fee,
              each on its own line.
            </p>
            <TextLink href="/pricing">See all our prices</TextLink>
          </div>
        </div>
        <FeeEstimator />
      </div>
    </section>
  );
}
