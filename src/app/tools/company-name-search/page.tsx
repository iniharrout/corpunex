import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import { FaqList, faqSchema } from "@/components/shared/FaqList";
import CtaBand from "@/components/shared/CtaBand";
import CompanyNameSearchTool from "@/components/tools/CompanyNameSearchTool";
import { JsonLd } from "@/components/ui/JsonLd";
import { nameSearchFaqs } from "@/content/nameSearch";
import styles from "./nameSearchPage.module.css";

export const metadata: Metadata = {
  title: "Company Name Search: MCA and Trademark Check",
  description:
    "Check company name availability against MCA compliance rules, RUN guidelines, and IP India trademark classes. Avoid rejections before filing your Private Limited or LLP.",
  alternates: { canonical: "/tools/company-name-search" },
};

function toolSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Corpunex MCA Company Name & Trademark Search Validator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    description:
      "Instant MCA Rule 8 diagnostic validator for Private Limited, LLP, and OPC company names in India.",
  };
}

export default function CompanyNameSearchPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Company name search", href: "/tools/company-name-search" },
  ];

  return (
    <>
      <JsonLd data={faqSchema(nameSearchFaqs)} />
      <JsonLd data={toolSchema()} />

      <PageHeader
        crumbs={crumbs}
        title="Company name and trademark availability check"
        highlight="trademark availability"
        lead="Test your startup name against MCA naming rules, restricted regulatory keywords, and Nice trademark classes before submitting RUN or SPICe+."
        tone="sky"
      />

      <section className={`wrap ${styles.toolSection}`} aria-label="Company name and trademark search tool">
        <CompanyNameSearchTool />
      </section>

      {/* Comparison: MCA Company Registration vs Trademark Registration */}
      <section className={styles.compareSection} aria-labelledby="compare-heading">
        <div className={`wrap ${styles.compareGrid}`}>
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>Legal Diligence</p>
            <h2 id="compare-heading" className={styles.sectionTitle}>
              Company Registration vs. Trademark Registration
            </h2>
            <p className={styles.sectionLead}>
              Many founders assume that registering a company automatically gives them exclusive rights to their brand name.
              Here is how MCA name reservation differs from Trademark registration:
            </p>
          </div>

          <div className={styles.tableCard}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th className={styles.colFeature}>Feature</th>
                  <th className={styles.colMca}>MCA Company Registration</th>
                  <th className={styles.colTm}>Trademark Registration (IP India)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colFeature}>Governing Authority</td>
                  <td className={styles.colMca}>Ministry of Corporate Affairs (MCA) / ROC</td>
                  <td className={styles.colTm}>Trade Marks Registry (Controller General of Patents, Designs & Trademarks)</td>
                </tr>
                <tr>
                  <td className={styles.colFeature}>Core Objective</td>
                  <td className={styles.colMca}>Establishes a distinct legal entity (Pvt Ltd, LLP, OPC) with separate legal identity and perpetual succession.</td>
                  <td className={styles.colTm}>Safeguards intellectual property, logo, symbol, brand name, and phonetic pronunciation across commerce.</td>
                </tr>
                <tr>
                  <td className={styles.colFeature}>Legal Protection Scope</td>
                  <td className={styles.colMca}>Prevents any other business from incorporating an identical or deceptively similar company name in India.</td>
                  <td className={styles.colTm}>Provides pan-India exclusive proprietary ownership to use the mark and sue competitors for infringement.</td>
                </tr>
                <tr>
                  <td className={styles.colFeature}>Symbol Granted</td>
                  <td className={styles.colMca}>CIN (Corporate Identity Number) & Certificate of Incorporation</td>
                  <td className={styles.colTm}>™ symbol upon filing application; ® symbol upon official registration</td>
                </tr>
                <tr>
                  <td className={styles.colFeature}>Government Fees</td>
                  <td className={styles.colMca}>₹0 for SPICe+ Part A with incorporation; ₹1,000 for standalone RUN form</td>
                  <td className={styles.colTm}>₹4,500 for DPIIT-recognised startups and individuals; ₹9,000 for standard enterprises</td>
                </tr>
                <tr>
                  <td className={styles.colFeature}>Validity Period</td>
                  <td className={styles.colMca}>20 days for name reservation; perpetual for the incorporated entity (subject to annual ROC filings)</td>
                  <td className={styles.colTm}>10 years from the date of application, renewable indefinitely every 10 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5 Rules to Avoid MCA Rejections */}
      <section className={styles.rulesSection} aria-labelledby="rules-heading">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>Naming Architecture</p>
            <h2 id="rules-heading" className={styles.sectionTitle}>
              Five rules to avoid MCA Central Registration Centre (CRC) rejections
            </h2>
            <p className={styles.sectionLead}>
              Over 40% of name reservation filings face resubmission queries. Follow these statutory principles under Rule 8 of the Companies (Incorporation) Rules:
            </p>
          </div>

          <div className={styles.rulesGrid}>
            <div className={styles.ruleCard}>
              <span className={styles.ruleNumber}>Rule 01</span>
              <h3 className={styles.ruleTitle}>Use a Coined, Non-Generic Prefix</h3>
              <p className={styles.ruleDesc}>
                Avoid generic descriptive words like &ldquo;Best Tech&rdquo; or &ldquo;Fast Courier&rdquo;. MCA requires an inventive, coined brand term (e.g. Infosys, Swiggy, Paytm) that possesses inherent distinctiveness.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <span className={styles.ruleNumber}>Rule 02</span>
              <h3 className={styles.ruleTitle}>Include a Clear Object/Activity Word</h3>
              <p className={styles.ruleDesc}>
                The second word must directly signify your business domain (e.g. Technologies, Solutions, Logistics, Advisory, Pharmaceuticals, Retail). Names lacking domain terms get flagged immediately.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <span className={styles.ruleNumber}>Rule 03</span>
              <h3 className={styles.ruleTitle}>Check Cross-Class Trademark Conflicts</h3>
              <p className={styles.ruleDesc}>
                CRC officers search the IP India database. If your proposed company name conflicts with a registered trademark in the relevant Nice class, your application will be rejected unless you possess an NOC or trademark assignment.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <span className={styles.ruleNumber}>Rule 04</span>
              <h3 className={styles.ruleTitle}>Capital Thresholds for Scale Words</h3>
              <p className={styles.ruleDesc}>
                Words suggesting vast scale—such as &ldquo;International&rdquo;, &ldquo;Global&rdquo;, &ldquo;Universal&rdquo;, or &ldquo;Continental&rdquo;—require a minimum authorized and paid-up capital of ₹1 Crore to ₹5 Crores.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <span className={styles.ruleNumber}>Rule 05</span>
              <h3 className={styles.ruleTitle}>Avoid Geographical & Prohibited Names</h3>
              <p className={styles.ruleDesc}>
                Stand-alone country or state names (e.g. &ldquo;Germany Limited&rdquo; or &ldquo;India Technologies&rdquo;) and names implying government patronage (National, Federal, Republic) are strictly prohibited under the Emblems Act.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <span className={styles.ruleNumber}>Rule 06</span>
              <h3 className={styles.ruleTitle}>Beware Phonetic Spelling Alterations</h3>
              <p className={styles.ruleDesc}>
                Simply altering spelling (e.g. &ldquo;Kool&rdquo; for &ldquo;Cool&rdquo;, &ldquo;Phast&rdquo; for &ldquo;Fast&rdquo;) does not bypass uniqueness tests. The CRC algorithm checks phonetic resemblance under Soundex matching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection} aria-labelledby="faq-heading">
        <div className={`wrap ${styles.faqInner}`}>
          <div>
            <p className={styles.eyebrow}>Got Questions?</p>
            <h2 id="faq-heading" className={styles.sectionTitle}>
              Frequently asked questions about company name reservation
            </h2>
            <p className={styles.sectionLead} style={{ marginTop: "8px" }}>
              Need clarity on RUN filings, resubmission notices, or trademark search? Our corporate secretarial team is here to assist.
            </p>
          </div>

          <FaqList faqs={nameSearchFaqs} />
        </div>
      </section>

      <CtaBand title="Ready to reserve your company name?">
        Our Chartered Accountants and Company Secretaries verify your name availability on both MCA and IP India databases, prepare SPICe+ Part A, and handle all resubmissions.
      </CtaBand>
    </>
  );
}
