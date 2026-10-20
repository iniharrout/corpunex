import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/content/categories";
import PageHeader from "@/components/shared/PageHeader";
import JumpNav from "@/components/shared/JumpNav";
import CtaBand from "@/components/shared/CtaBand";
import { TextLink } from "@/components/ui/Button";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "All services",
  description:
    "Every Corpunex service: company and LLP registration, startup recognition, GST and tax, licences, trademarks, annual compliance, accounting and legal documents.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        title="Everything we do, in one list."
        lead="Services with their own page show fees, documents and steps. For the rest, ask us and we will send the scope and an itemised quote."
      >
        <JumpNav label="Service categories" items={categories.map((c) => ({ id: c.slug, label: c.name }))} />
      </PageHeader>

      <div className="wrap">
        {categories.map((c) => (
          <section key={c.slug} id={c.slug} className={styles.category} aria-labelledby={`${c.slug}-title`}>
            <div className={styles.categoryHead}>
              <h2 id={`${c.slug}-title`} className={styles.h2}>
                {c.name}
              </h2>
              <p className={styles.summary}>{c.summary}</p>
              <TextLink href={c.path}>Overview</TextLink>
            </div>
            <ul className={styles.list}>
              {c.services.map((s) => (
                <li key={s.label}>
                  {s.href ? (
                    <Link href={s.href} className={styles.linked}>
                      {s.label}
                    </Link>
                  ) : (
                    <span className={styles.plain}>{s.label}</span>
                  )}
                  <span className={styles.desc}>{s.description}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <CtaBand title="Not sure what you need?">
        Tell us what you are setting up or what is due. We will reply with what applies to you and what it costs.
      </CtaBand>
    </>
  );
}
