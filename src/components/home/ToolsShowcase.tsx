import Link from "next/link";
import { ArrowRight, CheckCircle2, Search } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import styles from "./ToolsShowcase.module.css";

const utilityTools = [
  {
    id: "gst-calculator",
    tag: "Tax Utility",
    title: "GST Slabs & Threshold Calculator",
    desc: "Calculate CGST, SGST, IGST splits and verify mandatory ₹20L/₹40L registration limits.",
    href: "/tools/gst-calculator",
  },
  {
    id: "compliance-calendar",
    tag: "Yearly Due Dates",
    title: "Statutory Compliance Calendar",
    desc: "AOC-4, MGT-7, DIR-3 KYC, and DPT-3 deadlines to prevent ₹100/day MCA fines.",
    href: "/compliance-calendar",
  },
  {
    id: "company-type-finder",
    tag: "Entity Quiz",
    title: "Company Type Recommender",
    desc: "Compare Private Limited vs. LLP vs. OPC in 3 practical founder questions.",
    href: "/tools/company-type-finder",
  },
];

export default function ToolsShowcase() {
  return (
    <section className={styles.section} aria-labelledby="tools-heading">
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Free Tools for Founders</p>
          <h2 id="tools-heading" className={styles.title}>
            Statutory calculators and tools to <em>plan your setup.</em>
          </h2>
          <p className={styles.lead}>
            Built by our Chartered Accountants and Company Secretaries to help you check name availability, calculate taxes, and track ROC dates without paying a consultancy fee.
          </p>
        </div>

        <div className={styles.bentoGrid}>
          {/* Spotlight Hero Card (Left) */}
          <div className={styles.spotlightCard}>
            <div className={styles.spotlightHead}>
              <span className={styles.spotlightTag}>
                <Search size={14} strokeWidth={2.5} aria-hidden />
                Flagship Statutory Tool
              </span>
              <span className={styles.liveIndicator}>Instant Public Access</span>
            </div>

            <div className={styles.spotlightBody}>
              <h3 className={styles.spotlightTitle}>
                MCA Company Name & Trademark Public Search
              </h3>
              <p className={styles.spotlightDesc}>
                Over 60% of name applications get returned by the Central Registration Centre (CRC). Test your proposed startup name against Rule 8 distinctiveness, prohibited words, and Nice trademark classes before filing.
              </p>

              {/* Visual Formula Mockup */}
              <div className={styles.formulaBox} aria-hidden>
                <div className={styles.formulaRow}>
                  <div className={styles.formulaPart}>
                    <span className={styles.formulaLabel}>Coined Prefix</span>
                    <span className={styles.formulaValue}>Zephyr</span>
                  </div>
                  <span className={styles.formulaPlus}>+</span>
                  <div className={styles.formulaPart}>
                    <span className={styles.formulaLabel}>Activity Noun</span>
                    <span className={styles.formulaValue}>Logistics</span>
                  </div>
                  <span className={styles.formulaPlus}>+</span>
                  <div className={styles.formulaPart}>
                    <span className={styles.formulaLabel}>Suffix</span>
                    <span className={styles.formulaValue}>Pvt Ltd</span>
                  </div>
                </div>

                <div className={styles.checksList}>
                  <span className={styles.checkPill}>
                    <CheckCircle2 size={13} strokeWidth={2.5} />
                    Rule 8 Format Cleared
                  </span>
                  <span className={styles.checkPill}>
                    <CheckCircle2 size={13} strokeWidth={2.5} />
                    Nice Class 39 Checked
                  </span>
                  <span className={styles.checkPill}>
                    <CheckCircle2 size={13} strokeWidth={2.5} />
                    No Sectoral NOC Required
                  </span>
                </div>
              </div>

              <div className={styles.spotlightAction}>
                <ButtonLink href="/tools/company-name-search" arrow>
                  Check Company Name & Trademarks
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* Stacked Secondary Utility Rows (Right) */}
          <div className={styles.stackedList}>
            {utilityTools.map((tool) => (
              <Link key={tool.id} href={tool.href} className={styles.utilityRow}>
                <div className={styles.rowMain}>
                  <span className={styles.utilityTag}>{tool.tag}</span>
                  <h4 className={styles.rowTitle}>{tool.title}</h4>
                  <p className={styles.rowDesc}>{tool.desc}</p>
                </div>
                <div className={styles.arrowWrap} aria-hidden>
                  <ArrowRight size={18} strokeWidth={2.25} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
