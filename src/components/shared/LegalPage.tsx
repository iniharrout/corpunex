import type { LegalDocument } from "@/content/legal";
import { site } from "@/config/site";
import PageHeader from "@/components/shared/PageHeader";
import { Fact } from "@/components/ui/Placeholder";
import styles from "./LegalPage.module.css";

/** Entity details block, shared by the legal pages and /about. */
export function EntityDetails({ className }: { className?: string }) {
  const rows = [
    { label: "Legal name", value: site.legalName },
    { label: "CIN", value: site.cin },
    { label: "GSTIN", value: site.gstin },
    { label: "Registered office", value: site.registeredAddress },
    { label: "Email", value: site.email },
  ];
  return (
    <dl className={[styles.entity, className].filter(Boolean).join(" ")}>
      {rows.map((r) => (
        <div key={r.label}>
          <dt>{r.label}</dt>
          <dd>
            <Fact value={r.value} />
          </dd>
        </div>
      ))}
    </dl>
  );
}

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
      >
        <p className={styles.updated}>
          Last updated: <Fact value={doc.updated} />
        </p>
      </PageHeader>

      <div className={`wrap ${styles.layout}`}>
        <article className={styles.body}>
          {doc.sections.map((s, i) => (
            <section key={s.heading} aria-labelledby={`legal-${i}`}>
              <h2 id={`legal-${i}`} className={styles.h2}>
                <span className="tabular">{i + 1}.</span> {s.heading}
              </h2>
              {s.paragraphs.map((p) => (
                <p key={p}>
                  <Fact value={p} />
                </p>
              ))}
              {s.list && (
                <ul>
                  {s.list.map((item) => (
                    <li key={item}>
                      <Fact value={item} />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>

        <aside className={styles.aside} aria-labelledby="entity-title">
          <h2 id="entity-title" className={styles.asideTitle}>
            Who we are
          </h2>
          <EntityDetails />
          <p className={styles.contact}>
            Questions about this page: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </aside>
      </div>
    </>
  );
}
