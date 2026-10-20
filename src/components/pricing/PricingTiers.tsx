import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { incorporationTiers } from "@/content/pricing";
import { ButtonLink } from "@/components/ui/Button";
import { inr } from "@/lib/fees";
import styles from "./pricing.module.css";

export default function PricingTiers() {
  return (
    <ol className={styles.tiers}>
      {incorporationTiers.map((tier) => (
        <li key={tier.entity} className={styles.tier} data-featured={tier.entity === "pvt" || undefined}>
          <h3 className={styles.tierName}>
            <Link href={tier.href}>{tier.name}</Link>
          </h3>
          <p className={styles.tierFor}>{tier.bestFor}</p>
          <p className={styles.tierPrice}>
            <span className={styles.from}>From</span>
            <span className={`tabular ${styles.amount}`}>{inr(tier.price)}</span>
            <span className={styles.priceNote}>+ GST · government fees separate</span>
          </p>
          <h4 className={styles.listTitle}>Included</h4>
          <ul className={styles.list}>
            {tier.included.map((item) => (
              <li key={item}>
                <Check size={16} strokeWidth={1.75} aria-hidden className={styles.yes} />
                {item}
              </li>
            ))}
          </ul>
          <h4 className={styles.listTitle}>Not included</h4>
          <ul className={styles.list}>
            {tier.excluded.map((item) => (
              <li key={item} className={styles.excluded}>
                <Minus size={16} strokeWidth={1.75} aria-hidden className={styles.no} />
                {item}
              </li>
            ))}
          </ul>
          <div className={styles.tierAction}>
            <ButtonLink href={tier.href} variant="secondary" block arrow>
              {tier.name} details
            </ButtonLink>
          </div>
        </li>
      ))}
    </ol>
  );
}
