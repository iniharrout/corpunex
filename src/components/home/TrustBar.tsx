import {
  Calendar,
  Certificate,
  LegalDocument,
  SearchDoc,
} from "@/components/illustrations/Spots";
import styles from "./TrustBar.module.css";

const corporateStandards = [
  {
    id: "name-check",
    num: "01",
    title: "Name & trademark pre-check",
    body: "We verify your proposed company name against MCA Rule 8 guidelines and the trademark registry before filing, so you avoid rejections and brand conflicts.",
    art: SearchDoc,
    artTint: "var(--color-sky)",
    tags: ["MCA Rule 8 Check", "Trademark Search", "Zero Re-filing Hassle"],
  },
  {
    id: "legal-drafting",
    num: "02",
    title: "Tailored MoA & AoA drafting",
    body: "We draft your Memorandum and Articles of Association with clear, future-proof business objects so your company is ready for contracts, expansion, and investor funding.",
    art: LegalDocument,
    artTint: "var(--color-peach)",
    tags: ["Tailored MoA & AoA", "Clean Cap Table Structure", "Investor-Ready Objects"],
  },
  {
    id: "ca-cs-certification",
    num: "03",
    title: "Certified by practicing CAs & CSs",
    body: "Every charter, digital signature (DSC), and statutory filing is prepared, reviewed, and certified by licensed Chartered Accountants and Company Secretaries.",
    art: Certificate,
    artTint: "var(--color-mint)",
    tags: ["Companies Act, 2013", "CA/CS Professional Seal", "Direct Expert Guidance"],
  },
  {
    id: "post-incorporation",
    num: "04",
    title: "First-year compliance & INC-20A",
    body: "We stay with you after your certificate arrives. We draft your bank opening board resolutions, file your first auditor appointment (ADT-1), and submit your 180-day INC-20A declaration.",
    art: Calendar,
    artTint: "var(--color-sun)",
    tags: ["Bank Opening Resolutions", "Form ADT-1 & INC-20A", "Zero Late Penalties"],
  },
];

export default function TrustBar() {
  return (
    <section className={styles.section} aria-labelledby="corporate-standard-title">
      <div className={`wrap ${styles.inner}`}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.kickerBadge}>The Corpunex Standard</div>
          <h2 id="corporate-standard-title" className={styles.title}>
            The standard we follow for every company we set up
          </h2>
          <p className={styles.lead}>
            From your initial name check to your mandatory post-incorporation filings, every step is handled with care by qualified professionals, with clear upfront pricing.
          </p>
        </div>

        {/* 4 Standards Grid */}
        <div className={styles.standardsGrid}>
          {corporateStandards.map((item) => {
            const Art = item.art;
            return (
              <article key={item.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.artWrap} style={{ backgroundColor: item.artTint }}>
                    <Art className={styles.spotArt} />
                  </div>
                  <span className={styles.numBadge}>{item.num}</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.body}</p>
                </div>

                <div className={styles.tagsRow}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      <span className={styles.tagCheck} aria-hidden>
                        ✓
                      </span>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Simple Trust Strip */}
        <div className={styles.trustStrip}>
          <div className={styles.trustItem}>
            <span className={styles.trustCheck} aria-hidden>
              ✓
            </span>
            <span>
              <strong>100% itemised quote upfront:</strong> Government fees, stamp duty, and our charges clearly separated before you pay anything.
            </span>
          </div>
          <div className={styles.trustDivider} aria-hidden />
          <div className={styles.trustItem}>
            <span className={styles.trustCheck} aria-hidden>
              ✓
            </span>
            <span>
              <strong>Done by qualified professionals:</strong> Filings supervised and signed by practicing CAs and CSs under the Companies Act, 2013.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
