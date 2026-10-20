import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Category } from "@/content/categories";
import { faqGroup } from "@/content/faqs";
import PageHeader from "@/components/shared/PageHeader";
import { artForPath } from "@/components/illustrations/artFor";
import { FaqList, faqSchema } from "@/components/shared/FaqList";
import CtaBand from "@/components/shared/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import CallbackButton from "@/components/callback/CallbackButton";
import { site } from "@/config/site";
import styles from "./CategoryHub.module.css";

/** Call-back topic for each category, from ENQUIRY_TOPICS. */
const callbackTopic: Record<string, string> = {
  "business-registration": "Register a company or LLP",
  "startup-services": "Startup India or fundraising",
  "gst-taxation": "GST, accounting or tax returns",
  "accounting-bookkeeping": "GST, accounting or tax returns",
  "corporate-compliance": "Annual ROC compliance",
  "trademark-ip": "Trademark or legal documents",
  "legal-documentation": "Trademark or legal documents",
};

const tones = ["sky", "mint", "sun", "peach"] as const;

/** Hub page for one service category: its own pages as cards, then services on request. */
export default function CategoryHub({ category }: { category: Category }) {
  const withPage = category.services.filter((s) => s.href);
  const onRequest = category.services.filter((s) => !s.href);
  const faqs = category.faqGroup ? faqGroup(category.faqGroup).faqs : [];
  const topic = callbackTopic[category.slug] ?? "Something else";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      { "@type": "ListItem", position: 3, name: category.name, item: `${site.url}${category.path}` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}

      <PageHeader
        art={artForPath(category.path)}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: category.name, href: category.path },
        ]}
        title={category.headline}
        highlight={category.highlight}
        lead={category.lead}
        tone={category.tone}
      >
        <div className={styles.actions}>
          <ButtonLink href="/contact" size="large" arrow>
            Get started
          </ButtonLink>
          <CallbackButton size="large" topic={topic} />
        </div>
      </PageHeader>

      {withPage.length > 0 && (
        <section className="section" aria-labelledby="main-services-title">
          <div className="wrap">
            <h2 id="main-services-title" className={styles.h2}>
              Our most popular services
            </h2>
            <ul className={styles.cards}>
              {withPage.map((s, i) => (
                <li key={s.label}>
                  <Link href={s.href!} className={`${styles.card} ${styles[tones[i % tones.length]]}`}>
                    <h3 className={styles.cardTitle}>{s.label}</h3>
                    <p className={styles.cardBody}>{s.description}</p>
                    <span className={styles.cardCta}>
                      See fees and steps
                      <ArrowRight size={16} strokeWidth={2} aria-hidden />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {onRequest.length > 0 && (
        <section className={withPage.length > 0 ? styles.moreSection : "section"} aria-labelledby="more-services-title">
          <div className="wrap">
            <div className={styles.panel}>
              <div className={styles.panelHead}>
                <h2 id="more-services-title" className={styles.h2}>
                  {withPage.length > 0 ? "We can also help with" : "What we can help with"}
                </h2>
                <p className={styles.note}>
                  Tell us what you need and we&apos;ll send you what&apos;s involved and an itemised quote.
                </p>
              </div>
              <ul className={styles.list}>
                {onRequest.map((s) => (
                  <li key={s.label}>
                    <Check size={18} strokeWidth={2.25} aria-hidden className={styles.tick} />
                    <div>
                      <h3 className={styles.listLabel}>{s.label}</h3>
                      <p>{s.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="section" aria-labelledby="faq-title">
          <div className={`wrap ${styles.split}`}>
            <h2 id="faq-title" className={styles.h2}>
              Common questions
            </h2>
            <FaqList faqs={faqs} />
          </div>
        </section>
      )}

      <CtaBand title="Not sure what you need?">
        Tell us what you&apos;re setting up or what&apos;s due. We&apos;ll tell you what applies to you and what it
        costs.
      </CtaBand>
    </>
  );
}
