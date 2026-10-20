import FeeEstimator from "@/components/pricing/FeeEstimator";
import { TextLink } from "@/components/ui/Button";
import styles from "./PricingSection.module.css";

export default function PricingSection() {
  return (
    <section id="pricing" className={`section band-deep ${styles.section}`} aria-labelledby="pricing-title">
      <div className="wrap">
        <div className={styles.head}>
          <h2 id="pricing-title" className={styles.title}>
            What it costs, line by line.
          </h2>
          <div className={styles.intro}>
            <p>
              Registering a company has three kinds of cost: fees paid to the government, digital signatures from a
              licensed issuer, and our professional fee. We quote all three separately and pass government fees through
              at cost.
            </p>
            <TextLink href="/pricing">See all prices, including annual compliance</TextLink>
          </div>
        </div>
        <FeeEstimator />
      </div>
    </section>
  );
}
