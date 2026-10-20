import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { glossary } from "@/content/glossary";
import { site } from "@/config/site";
import PageHeader from "@/components/shared/PageHeader";
import JumpNav from "@/components/shared/JumpNav";
import CtaBand from "@/components/shared/CtaBand";
import { JsonLd } from "@/components/ui/JsonLd";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Company Registration Glossary: MoA, DIN, SPICe+",
  description:
    "Plain-English meanings of the jargon you meet when you register and run a business in India: MoA, AoA, DIN, DSC, SPICe+, ROC, GSTIN, TDS and more.",
  alternates: { canonical: "/glossary" },
};

const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function GlossaryPage() {
  const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term));
  const letters = [...new Set(sorted.map((t) => t.term[0].toUpperCase()))];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "Company registration and compliance glossary",
          url: `${site.url}/glossary`,
          hasDefinedTerm: sorted.map((t) => ({
            "@type": "DefinedTerm",
            name: t.term,
            description: t.meaning,
            url: `${site.url}/glossary#${slug(t.term)}`,
          })),
        }}
      />

      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Glossary", href: "/glossary" },
        ]}
        title="The jargon of starting a business, in plain English."
        highlight="in plain English."
        lead="MoA, DIN, SPICe+, ROC: registering a company comes with a lot of new words. Here's what each one means and why it matters to you."
        tone="peach"
      >
        <JumpNav label="Letters" items={letters.map((l) => ({ id: `letter-${l}`, label: l }))} />
      </PageHeader>

      <div className={`wrap ${styles.body}`}>
        {letters.map((letter) => (
          <section key={letter} id={`letter-${letter}`} className={styles.group} aria-labelledby={`h-${letter}`}>
            <h2 id={`h-${letter}`} className={styles.letter}>
              {letter}
            </h2>
            <dl className={styles.terms}>
              {sorted
                .filter((t) => t.term[0].toUpperCase() === letter)
                .map((t) => (
                  <div key={t.term} id={slug(t.term)} className={styles.term}>
                    <dt>
                      {t.term}
                      {t.aka && <span className={styles.aka}>{t.aka}</span>}
                    </dt>
                    <dd>
                      <p>{t.meaning}</p>
                      {t.href && (
                        <Link href={t.href} className={styles.more}>
                          Learn more
                          <ArrowRight size={14} strokeWidth={2} aria-hidden />
                        </Link>
                      )}
                    </dd>
                  </div>
                ))}
            </dl>
          </section>
        ))}
      </div>

      <CtaBand title="Rather not deal with the jargon at all?">
        We handle the forms and explain only what you need to know.
      </CtaBand>
    </>
  );
}
