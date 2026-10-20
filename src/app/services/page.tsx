import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/content/categories";
import PageHeader from "@/components/shared/PageHeader";
import JumpNav from "@/components/shared/JumpNav";
import CtaBand from "@/components/shared/CtaBand";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "All services",
  description:
    "Everything Corpunex does: registering a company or LLP, Startup India, GST and tax, licences, trademarks, yearly compliance, accounting and legal documents.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        art="rocket"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        title="Everything we can help you with."
        highlight="help you with."
        lead="Services with their own page show the fees, documents and steps. For everything else, just ask and we'll send you what's involved and an itemised quote."
      >
        <JumpNav label="Service categories" items={categories.map((c) => ({ id: c.slug, label: c.name }))} />
      </PageHeader>

      <section className="section" aria-label="Service categories">
        <div className={`wrap ${styles.grid}`}>
          {categories.map((c) => (
            <section key={c.slug} id={c.slug} className={`${styles.card} ${styles[c.tone]}`} aria-labelledby={`${c.slug}-title`}>
              <h2 id={`${c.slug}-title`} className={styles.h2}>
                <Link href={c.path}>{c.name}</Link>
              </h2>
              <p className={styles.summary}>{c.summary}</p>
              <ul className={styles.list}>
                {c.services.map((s) => (
                  <li key={s.label}>
                    {s.href ? (
                      <Link href={s.href} className={styles.linked}>
                        {s.label}
                        <ArrowRight size={14} strokeWidth={2} aria-hidden />
                      </Link>
                    ) : (
                      <span>{s.label}</span>
                    )}
                  </li>
                ))}
              </ul>
              <Link href={c.path} className={styles.more}>
                About {c.name.toLowerCase()}
                <ArrowRight size={16} strokeWidth={2} aria-hidden />
              </Link>
            </section>
          ))}
        </div>
      </section>

      <CtaBand title="Not sure what you need?">
        Tell us what you&apos;re setting up or what&apos;s due. We&apos;ll tell you what applies to you and what it
        costs.
      </CtaBand>
    </>
  );
}
