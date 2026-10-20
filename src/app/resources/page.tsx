import type { Metadata } from "next";
import Link from "next/link";
import { articles, readingMinutes, type Article } from "@/content/articles";
import PageHeader from "@/components/shared/PageHeader";
import JumpNav from "@/components/shared/JumpNav";
import CtaBand from "@/components/shared/CtaBand";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Plain-language guides to company registration, Startup India, GST, trademarks and annual compliance in India.",
  alternates: { canonical: "/resources" },
};

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
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/resources" },
        ]}
        title="Free guides for first-time founders."
        highlight="first-time founders."
        tone="sun"
        lead="Short, plain explainers on registering and running a business in India. They're general information, not advice on your situation."
      >
        <JumpNav label="Topics" items={Object.keys(groups).map((c) => ({ id: slugify(c), label: c }))} />
      </PageHeader>

      <section className="section" aria-labelledby="featured-title">
        <div className="wrap">
          <Link href={`/resources/${featured.slug}`} className={styles.featured}>
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
                    <Link href={`/resources/${a.slug}`} className={styles.item}>
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

      <CtaBand title="Have a question a guide does not answer?">
        Ask us. An advisor will reply with what applies to your business.
      </CtaBand>
    </>
  );
}
