import Link from "next/link";
import { ArrowRight, FileText, ShieldCheck } from "lucide-react";
import styles from "./TemplatesShowcase.module.css";

const featuredTemplates = [
  {
    id: "co-founder-agreement",
    category: "Founders & Equity",
    entities: "Pvt Ltd · LLP",
    statute: "Indian Contract Act, 1872 · Section 27",
    title: "Co-Founder Agreement with 4-Year Reverse Vesting",
    description:
      "Protects company equity by enforcing a 4-year vesting schedule with a 1-year cliff, mandatory IP assignment to the entity, and clear deadlock resolution rules.",
    clauses: [
      "4-Year Vesting Schedule",
      "1-Year Standard Cliff",
      "Full IP Assignment Deed",
      "Deadlock Resolution",
    ],
  },
  {
    id: "mutual-nda",
    category: "IP & Confidentiality",
    entities: "All Startups",
    statute: "Indian Contract Act, 1872 · Trade Secrets",
    title: "Bilateral NDA & Proprietary Data Protection",
    description:
      "Bilateral non-disclosure agreement protecting proprietary software code, customer data, and investor pitch decks with enforceable non-solicitation covenants.",
    clauses: [
      "Source Code Protection",
      "2-Year Term",
      "Non-Solicitation Clause",
      "Injunctive Relief",
    ],
  },
  {
    id: "offer-letter-ip",
    category: "Hiring & HR",
    entities: "Pvt Ltd · LLP",
    statute: "Copyright Act, 1957 · Section 17",
    title: "Employment Offer Letter & Work-for-Hire IP Terms",
    description:
      "Full-time employee appointment letter with statutory 'work-for-hire' copyright assignment, ensuring all software and designs belong exclusively to the company.",
    clauses: [
      "Work-for-Hire Assignment",
      "Probation & Notice",
      "Invention Carve-Outs",
      "Confidentiality",
    ],
  },
  {
    id: "bank-resolution",
    category: "Corporate Governance",
    entities: "Private Limited",
    statute: "Companies Act, 2013 · Section 179(3)",
    title: "Board Resolution for Bank Current Account Opening",
    description:
      "Certified extract of Board of Directors resolution mandated by Indian banks for opening a corporate current account, defining signing powers and net banking limits.",
    clauses: [
      "Signing Powers Mandate",
      "Net Banking Authorization",
      "Director Signatures",
      "Certified True Copy",
    ],
  },
];

export default function TemplatesShowcase() {
  return (
    <section className={styles.section} aria-labelledby="templates-heading">
      <div className={`wrap ${styles.inner}`}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.eyebrow}>
              <ShieldCheck size={14} strokeWidth={2.5} />
              Startup Legal Vault
            </div>
            <h2 id="templates-heading" className={styles.title}>
              Foundational legal contracts for Indian startups
            </h2>
            <p className={styles.lead}>
              Generic foreign templates and AI drafts often fail Indian stamp duty requirements and ROC compliance. We provide 8 execution-ready legal agreements drafted under the Indian Contract Act, 1872 and Companies Act, 2013.
            </p>
          </div>

          <div className={styles.headerRight}>
            <Link href="/templates" className={styles.browseAllBtn}>
              Browse All 8 Templates
              <ArrowRight size={16} strokeWidth={2.25} aria-hidden />
            </Link>
          </div>
        </div>

        {/* 2x2 Crisp Document Grid */}
        <div className={styles.grid}>
          {featuredTemplates.map((doc) => (
            <Link key={doc.id} href="/templates" className={styles.docCard}>
              <div className={styles.cardHeader}>
                <div className={styles.metaRow}>
                  <span className={styles.categoryBadge}>{doc.category}</span>
                  <span className={styles.entityBadge}>{doc.entities}</span>
                </div>
                <span className={styles.statuteLabel}>{doc.statute}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.docTitle}>
                  <FileText size={18} strokeWidth={2} className={styles.docIcon} aria-hidden />
                  {doc.title}
                </h3>
                <p className={styles.docDescription}>{doc.description}</p>
              </div>

              <div className={styles.clausesRow}>
                {doc.clauses.map((clause) => (
                  <span key={clause} className={styles.clausePill}>
                    <span className={styles.clauseCheck} aria-hidden>
                      ✓
                    </span>
                    {clause}
                  </span>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.footerNote}>Verified Legal Draft · Free to Copy & Download</span>
                <span className={styles.viewLink}>
                  View Template
                  <ArrowRight size={14} strokeWidth={2.5} className={styles.arrowIcon} aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Verification Strip */}
        <div className={styles.vaultStrip}>
          <div className={styles.vaultInfo}>
            <span className={styles.vaultDot} aria-hidden />
            <span>
              <strong>All 8 Templates Include:</strong> Complete statutory text, stamp duty guidance per state, and execution instructions vetted by practicing Company Secretaries.
            </span>
          </div>
          <Link href="/templates" className={styles.vaultLink}>
            Explore the complete library &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
