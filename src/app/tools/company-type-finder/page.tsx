import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import { FaqList, faqSchema, type Faq } from "@/components/shared/FaqList";
import CtaBand from "@/components/shared/CtaBand";
import CompanyTypeFinder from "@/components/tools/CompanyTypeFinder";
import { JsonLd } from "@/components/ui/JsonLd";
import { TextLink } from "@/components/ui/Button";
import styles from "@/components/tools/ToolPage.module.css";

export const metadata: Metadata = {
  title: "Which Business Structure Is Right for Me?",
  description:
    "Answer three quick questions to find out whether a Private Limited company, LLP, One Person Company, partnership or proprietorship suits your business.",
  alternates: { canonical: "/tools/company-type-finder" },
};

const faqs: Faq[] = [
  {
    question: "What's the most common structure for startups?",
    answer:
      "A Private Limited company. It's the only structure angel and VC investors invest in, and it lets you give employees shares through ESOPs.",
  },
  {
    question: "Can I change my business structure later?",
    answer:
      "Yes. A proprietorship can move into a company, a One Person Company can become a Private Limited company, and an LLP can convert into a company. Each change takes extra filings, so it's worth starting with the right one.",
  },
  {
    question: "Which structure has the fewest yearly filings?",
    answer:
      "A sole proprietorship, followed by a partnership firm. Among structures that protect your personal assets, an LLP has fewer filings than a company.",
  },
];

export default function CompanyTypeFinderPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Company type finder", href: "/tools/company-type-finder" },
        ]}
        title="Which type of business should you register?"
        highlight="should you register?"
        lead="Answer three quick questions and we'll suggest the structure that fits. It takes less than a minute."
        tone="sky"
      />

      <section className={`wrap ${styles.toolSection}`} aria-label="Company type finder">
        <CompanyTypeFinder />
      </section>

      <section className={`wrap ${styles.explain}`} aria-labelledby="compare-title">
        <div className={styles.grid}>
          <div className={styles.prose}>
            <h2 id="compare-title">The options, in one line each</h2>
            <ul>
              <li>
                <strong>Private Limited company:</strong> for founders who plan to raise money or give staff shares.
              </li>
              <li>
                <strong>One Person Company:</strong> a company with one owner, with personal assets protected.
              </li>
              <li>
                <strong>LLP:</strong> partners with personal assets protected and fewer yearly filings.
              </li>
              <li>
                <strong>Partnership firm:</strong> quick and inexpensive for partners, without asset protection.
              </li>
              <li>
                <strong>Sole proprietorship:</strong> the simplest way to start on your own.
              </li>
            </ul>
            <p>
              Want the details? Read{" "}
              <TextLink href="/blog/pvt-ltd-vs-llp">Private Limited company or LLP</TextLink>.
            </p>
          </div>
          <div>
            <h2 className={styles.faqTitle}>Common questions</h2>
            <FaqList faqs={faqs} />
          </div>
        </div>
      </section>

      <CtaBand title="Still not sure which one?">
        Tell us about your plans. An advisor will talk you through the options and send a quote.
      </CtaBand>
    </>
  );
}
