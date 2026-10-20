import type { LegalDocument } from "@/content/legal";
import { site } from "@/config/site";
import PageHeader from "@/components/shared/PageHeader";
import styles from "./LegalPage.module.css";

/** A legal page: numbered plain-language sections with a contact card beside them. */
export default function LegalPage({ doc }: { doc: LegalDocument }) {
  return (
    <>
      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: doc.title, href: doc.path },
        ]}
        title={doc.title}
        lead={doc.intro}
        tone="mint"
      >
        <p className={styles.updated}>Last updated: {doc.updated}</p>
      </PageHeader>

      <div className={`wrap ${styles.layout}`}>
        <article className={styles.body}>
          {doc.sections.map((s, i) => (
            <section key={s.heading} aria-labelledby={`legal-${i}`}>
              <h2 id={`legal-${i}`} className={styles.h2}>
                <span className={`tabular ${styles.num}`}>{i + 1}</span>
                {s.heading}
              </h2>
              {s.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {s.list && (
                <ul>
                  {s.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>

        <aside className={styles.aside} aria-labelledby="questions-title">
          <h2 id="questions-title" className={styles.asideTitle}>
            Questions about this page?
          </h2>
          <p>Email us and we&apos;ll explain anything that isn&apos;t clear.</p>
          <a href={`mailto:${site.email}`} className={styles.email}>
            {site.email}
          </a>
          <dl className={styles.facts}>
            <div>
              <dt>Offices</dt>
              <dd>{site.offices}</dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>{site.hours}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </>
  );
}
