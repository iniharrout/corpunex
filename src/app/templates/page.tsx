import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import { FaqList, faqSchema } from "@/components/shared/FaqList";
import CtaBand from "@/components/shared/CtaBand";
import TemplatesHub from "@/components/templates/TemplatesHub";
import { JsonLd } from "@/components/ui/JsonLd";
import { templatesFaqs, allTemplates } from "@/content/templates";
import styles from "./templatesPage.module.css";

export const metadata: Metadata = {
  title: "Free Legal and Business Templates for Startups",
  description:
    "Download ready-to-use, customizable legal templates: Co-Founder Agreements, NDAs, Startup Offer Letters, and Board Resolutions for Private Limited & LLP companies in India.",
  alternates: { canonical: "/templates" },
};

function collectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Free Startup Legal & Business Templates",
    description:
      "Vetted legal agreements, co-founder contracts, and MCA board resolutions for Indian startups and founders.",
    hasPart: allTemplates.map((t) => ({
      "@type": "DigitalDocument",
      name: t.title,
      description: t.summary,
      fileFormat: "text/plain",
    })),
  };
}

export default function TemplatesPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Startup templates", href: "/templates" },
  ];

  return (
    <>
      <JsonLd data={faqSchema(templatesFaqs)} />
      <JsonLd data={collectionSchema()} />

      <PageHeader
        crumbs={crumbs}
        title="Free startup and legal templates"
        highlight="legal templates"
        lead="Battle-tested, customizable contracts and board resolutions drafted by Indian corporate lawyers and CAs for early-stage founders."
        tone="sky"
      />

      <main className="wrap">
        <TemplatesHub />
      </main>

      {/* Execution Guidance & FAQ Section */}
      <section className={styles.guideSection} aria-labelledby="execution-guide-title">
        <div className={`wrap ${styles.guideGrid}`}>
          <div className={styles.guideText}>
            <p style={{
              fontSize: "var(--text-micro)",
              fontWeight: "var(--weight-bold)",
              letterSpacing: "var(--tracking-label)",
              textTransform: "uppercase",
              color: "var(--color-accent)",
            }}>
              Execution Playbook
            </p>
            <h2 id="execution-guide-title" className={styles.guideTitle}>
              How to execute startup agreements in India
            </h2>
            <p className={styles.guideLead}>
              Downloading a template is only step one. For an agreement to be legally enforceable in an Indian court,
              three conditions must be met:
            </p>

            <ol className={styles.stepList}>
              <li className={styles.stepItem}>
                <span className={styles.stepNumber}>1</span>
                <div className={styles.stepContent}>
                  <h4>Non-Judicial Stamp Paper (e-Stamping)</h4>
                  <p>
                    Print or attach the agreement to non-judicial stamp paper purchased in the state of execution.
                    Most commercial agreements require ₹100 or ₹200 e-stamps (StockHolding Corporation of India).
                  </p>
                </div>
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepNumber}>2</span>
                <div className={styles.stepContent}>
                  <h4>Authorised Signatory Authority</h4>
                  <p>
                    For a Private Limited company or LLP, ensure the signing director or designated partner has
                    formal Board Resolution authority to bind the entity.
                  </p>
                </div>
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepNumber}>3</span>
                <div className={styles.stepContent}>
                  <h4>Attestation by Two Witnesses</h4>
                  <p>
                    Have two neutral adult witnesses sign the execution page along with their full legal names,
                    residential addresses, and dates.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className={styles.faqSide}>
            <h2 className={styles.faqTitle}>Frequently asked questions</h2>
            <FaqList faqs={templatesFaqs} />
          </div>
        </div>
      </section>

      <CtaBand title="Need custom clauses or cap table advice?">
        Our Chartered Accountants and Company Secretaries can draft custom founder vesting schedules, ESOP schemes,
        and shareholder agreements tailored to your business.
      </CtaBand>
    </>
  );
}
