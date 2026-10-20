import type { Metadata } from "next";
import PricingTiers from "@/components/pricing/PricingTiers";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import PriceList from "@/components/pricing/PriceList";
import FeeEstimator from "@/components/pricing/FeeEstimator";
import { FaqList, faqSchema } from "@/components/shared/FaqList";
import CtaBand from "@/components/shared/CtaBand";
import { JsonLd } from "@/components/ui/JsonLd";
import { TextLink } from "@/components/ui/Button";
import { Ph } from "@/components/ui/Placeholder";
import { neverIncluded, pricingFaqs } from "@/content/pricing";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Professional fees for company registration, GST, accounting and annual compliance, with government fees and digital signatures listed separately.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <JsonLd data={faqSchema(pricingFaqs)} />

      <section className={styles.hero} aria-labelledby="pricing-title">
        <div className="wrap">
          <h1 id="pricing-title" className={styles.title}>
            Our fee, and every other cost, before you commit.
          </h1>
          <p className={styles.lead}>
            Every quote has three parts. Only one of them is ours, and we show it on its own line.
          </p>
          <dl className={styles.parts}>
            <div>
              <dt>Government fees</dt>
              <dd>Name reservation, filing fees and state stamp duty. Paid at cost; you get the official receipt.</dd>
            </div>
            <div>
              <dt>Third-party costs</dt>
              <dd>Digital signatures from a licensed certifying authority, and notarisation where needed.</dd>
            </div>
            <div>
              <dt>Corpunex fee</dt>
              <dd>Our professional fee for drafting, filing and certification, plus 18% GST.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="incorporation-title">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <h2 id="incorporation-title" className={styles.h2}>
              Incorporation
            </h2>
            <TextLink href="/resources/pvt-ltd-vs-llp">Not sure which structure? Read the comparison</TextLink>
          </div>
          <PricingTiers />
        </div>
      </section>

      <section className={`section ${styles.compare}`} aria-labelledby="compare-title">
        <div className="wrap">
          <h2 id="compare-title" className={styles.h2}>
            Private Limited, LLP or OPC at a glance
          </h2>
          <ComparisonTable caption="Comparison of Private Limited, LLP and One Person Company" />
        </div>
      </section>

      <section className="section band-deep" aria-labelledby="estimate-title">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <h2 id="estimate-title" className={styles.h2}>
              Estimate your total
            </h2>
            <p className={styles.sectionIntro}>
              Choose your structure, state and capital to see government fees, signatures and our fee together.
            </p>
          </div>
          <FeeEstimator />
        </div>
      </section>

      <section className="section" aria-labelledby="ongoing-title">
        <div className={`wrap ${styles.split}`}>
          <div>
            <h2 id="ongoing-title" className={styles.h2}>
              After incorporation
            </h2>
            <p className={styles.sectionIntro}>
              Professional fees for the services most companies need in their first year. Government fees, where
              they apply, are extra.
            </p>
          </div>
          <PriceList />
        </div>
      </section>

      <section className="section band-deep" aria-labelledby="excluded-title">
        <div className={`wrap ${styles.split}`}>
          <div>
            <h2 id="excluded-title" className={styles.h2}>
              Never in our fee
            </h2>
            <ul className={styles.excluded}>
              {neverIncluded.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.h2}>Questions about paying</h2>
            <FaqList faqs={pricingFaqs} />
            <p className={styles.policy}>
              <TextLink href="/refund-policy">Read the refund policy</TextLink>
            </p>
          </div>
        </div>
      </section>

      <CtaBand title="Want a written quote for your company?">
        Tell us your structure, state and number of directors. We will send an itemised quote within{" "}
        <Ph>quote turnaround</Ph>.
      </CtaBand>
    </>
  );
}
