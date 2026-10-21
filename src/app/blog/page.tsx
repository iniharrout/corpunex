import type { Metadata } from "next";
import Link from "next/link";
import { articles, readingMinutes, type Article } from "@/content/articles";
import PageHeader from "@/components/shared/PageHeader";
import JumpNav from "@/components/shared/JumpNav";
import CtaBand from "@/components/shared/CtaBand";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog: Guides to Registration, GST and Compliance",
  description:
    "Plain-language articles for founders on company registration, Startup India, GST, trademarks and yearly compliance in India.",
  alternates: { canonical: "/blog" },
};

const tools = [
  { label: "Company name search", href: "/tools/company-name-search", body: "MCA Rule 8 validator and Nice trademark class lookup." },
  { label: "Startup legal templates", href: "/templates", body: "8 free, CA/CS-vetted legal agreements for founders." },
  { label: "Compliance calendar", href: "/compliance-calendar", body: "Every yearly due date for companies and LLPs." },
  { label: "GST calculator", href: "/tools/gst-calculator", body: "Add or remove GST, with the CGST, SGST or IGST split." },
  { label: "Company type finder", href: "/tools/company-type-finder", body: "Three questions to find the right structure." },
  { label: "Glossary", href: "/glossary", body: "MoA, DIN, SPICe+ and more, in plain English." },
];

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function ResourcesPage() {
  const groups = articles.reduce<Record<string, Article[]>>((acc, a) => {
    (acc[a.category] ??= []).push(a);
    return acc;
  }, {});
  const [featured, ...rest] = articles;

  return (
    <>
      <PageHeader
        art="folder"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
        title="The Corpunex blog for first-time founders."
        highlight="first-time founders."
        tone="sun"
        lead="Short, plain explainers on registering and running a business in India. They're general information, not advice on your situation."
      >
        <JumpNav label="Topics" items={Object.keys(groups).map((c) => ({ id: slugify(c), label: c }))} />
      </PageHeader>

      <section className="section" aria-labelledby="featured-title">
        <div className="wrap">
          <Link href={`/blog/${featured.slug}`} className={styles.featured}>
            <span className={styles.meta}>
              {featured.category} · {readingMinutes(featured)} min read
            </span>
            <h2 id="featured-title" className={styles.featuredTitle}>
              {featured.title}
            </h2>
            <p className={styles.featuredSummary}>{featured.summary}</p>
          </Link>
        </div>
      </section>

      <div className="wrap">
        {Object.entries(groups).map(([cat, list]) => {
          const items = list.filter((a) => rest.includes(a));
          if (items.length === 0) return null;
          return (
            <section key={cat} id={slugify(cat)} className={styles.group} aria-labelledby={`${slugify(cat)}-title`}>
              <h2 id={`${slugify(cat)}-title`} className={styles.groupTitle}>
                {cat}
              </h2>
              <ul className={styles.list}>
                {items.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/blog/${a.slug}`} className={styles.item}>
                      <span className={styles.itemTitle}>{a.title}</span>
                      <span className={styles.summary}>{a.summary}</span>
                      <span className={styles.meta}>{readingMinutes(a)} min read</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <section className={styles.tools} aria-labelledby="tools-title">
        <div className="wrap">
          <h2 id="tools-title" className={styles.groupTitle}>
            Free tools for founders
          </h2>
          <ul className={styles.toolList}>
            {tools.map((t) => (
              <li key={t.href}>
                <Link href={t.href} className={styles.tool}>
                  <span className={styles.itemTitle}>{t.label}</span>
                  <span className={styles.summary}>{t.body}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Have a question an article doesn't answer?">
        Ask us. An advisor will reply with what applies to your business.
      </CtaBand>
    </>
  );
}
