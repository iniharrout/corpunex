import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, readingMinutes } from "@/content/articles";
import { site } from "@/config/site";
import PageHeader from "@/components/shared/PageHeader";
import CtaBand from "@/components/shared/CtaBand";
import { Fact } from "@/components/ui/Placeholder";
import { JsonLd } from "@/components/ui/JsonLd";
import styles from "./page.module.css";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  const path = `/resources/${article.slug}`;
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: path },
    openGraph: { title: article.title, description: article.summary, type: "article", url: path },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const path = `/resources/${article.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    url: `${site.url}${path}`,
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <>
      <JsonLd data={schema} />

      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/resources" },
          { label: article.title, href: path },
        ]}
        title={article.title}
        lead={article.summary}
      >
        <p className={styles.meta}>
          {article.category} · {article.published} · {readingMinutes(article)} min read
        </p>
      </PageHeader>

      <div className={`wrap ${styles.layout}`}>
        <article className={styles.body}>
          <section className={styles.takeaways} aria-labelledby="takeaways-title">
            <h2 id="takeaways-title" className={styles.takeawaysTitle}>
              In short
            </h2>
            <ul>
              {article.takeaways.map((t) => (
                <li key={t}>
                  <Fact value={t} />
                </li>
              ))}
            </ul>
          </section>

          {article.sections.map((s) => (
            <section key={s.heading} className={styles.section}>
              <h2 className={styles.h2}>{s.heading}</h2>
              {s.paragraphs.map((p) => (
                <p key={p}>
                  <Fact value={p} />
                </p>
              ))}
              {s.bullets && (
                <ul className={styles.bullets}>
                  {s.bullets.map((b) => (
                    <li key={b}>
                      <Fact value={b} />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <p className={styles.notice}>
            This guide is general information, not legal or tax advice. Laws and fees change often. Check with an
            advisor before you file anything.
          </p>
        </article>

        <aside className={styles.aside} aria-labelledby="related-title">
          <h2 id="related-title" className={styles.asideTitle}>
            Related services
          </h2>
          <ul className={styles.related}>
            {article.related.map((r) => (
              <li key={r.href}>
                <Link href={r.href}>{r.label}</Link>
              </li>
            ))}
          </ul>
          <Link href="/resources" className={styles.back}>
            All guides
          </Link>
        </aside>
      </div>

      <CtaBand title="Want this applied to your business?">
        Tell us what you are setting up. An advisor will reply with what applies to you and what it costs.
      </CtaBand>
    </>
  );
}
