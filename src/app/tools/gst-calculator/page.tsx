import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import { FaqList, faqSchema, type Faq } from "@/components/shared/FaqList";
import CtaBand from "@/components/shared/CtaBand";
import GstCalculator from "@/components/tools/GstCalculator";
import { JsonLd } from "@/components/ui/JsonLd";
import { TextLink } from "@/components/ui/Button";
import styles from "@/components/tools/ToolPage.module.css";

export const metadata: Metadata = {
  title: "GST Calculator: Add or Remove GST Online",
  description:
    "Free GST calculator for India. Add GST to a price or take it out of a GST-inclusive amount, and see the CGST, SGST or IGST split instantly.",
  alternates: { canonical: "/tools/gst-calculator" },
};

const faqs: Faq[] = [
  {
    question: "How do I add GST to a price?",
    answer: "Multiply the price by the GST rate and add the result. For example, ₹1,000 at 18% GST is ₹1,000 + ₹180 = ₹1,180.",
  },
  {
    question: "How do I remove GST from a price that includes it?",
    answer:
      "Divide the price by 1 plus the rate. For example, ₹1,180 including 18% GST is ₹1,180 ÷ 1.18 = ₹1,000 before GST, so the GST is ₹180.",
  },
  {
    question: "When do I charge CGST and SGST, and when IGST?",
    answer:
      "If your customer is in the same state as you, you charge CGST and SGST, each half of the rate. If they're in another state, you charge IGST at the full rate.",
  },
  {
    question: "Which GST rate applies to my product?",
    answer:
      "It depends on the product or service and its HSN or SAC code. Since September 2025 most goods and services fall under 5% or 18%, with 40% for a small list of goods. Check the current rate for your code, or ask us.",
  },
];

export default function GstCalculatorPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "GST calculator",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Any",
          offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
        }}
      />
      <JsonLd data={faqSchema(faqs)} />

      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "GST calculator", href: "/tools/gst-calculator" },
        ]}
        title="GST calculator: add or remove GST in seconds."
        highlight="in seconds."
        lead="Enter an amount, pick the rate, and see the GST and the total. It also shows the CGST and SGST split for customers in your state, or IGST for customers in another state."
        tone="mint"
      />

      <section className={`wrap ${styles.toolSection}`} aria-label="Calculator">
        <GstCalculator />
      </section>

      <section className={`wrap ${styles.explain}`} aria-labelledby="how-title">
        <div className={styles.grid}>
          <div className={styles.prose}>
            <h2 id="how-title">How GST is calculated</h2>
            <p>To add GST to a price:</p>
            <p className={styles.formula}>GST = price × rate ÷ 100 · Total = price + GST</p>
            <p>To take GST out of a price that already includes it:</p>
            <p className={styles.formula}>Price before GST = total ÷ (1 + rate ÷ 100)</p>
            <h2>CGST, SGST and IGST</h2>
            <ul>
              <li>Selling within your state: CGST and SGST, each half of the rate.</li>
              <li>Selling to another state: IGST at the full rate.</li>
            </ul>
            <p>
              Need a GST number, or someone to file your returns? <TextLink href="/services/gst-taxation/gst-registration">GST registration</TextLink>{" "}
              and <TextLink href="/services/gst-taxation/gst-return-filing">GST return filing</TextLink>.
            </p>
          </div>
          <div>
            <h2 className={styles.faqTitle}>Common questions</h2>
            <FaqList faqs={faqs} />
          </div>
        </div>
      </section>

      <CtaBand title="Want GST handled for you?">
        We register you, file your returns every month and check the GST you claim back.
      </CtaBand>
    </>
  );
}
