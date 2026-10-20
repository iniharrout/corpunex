import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/content/categories";
import { faqGroup } from "@/content/faqs";
import PageHeader from "@/components/shared/PageHeader";
import { FaqList, faqSchema } from "@/components/shared/FaqList";
import CtaBand from "@/components/shared/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import styles from "./CategoryHub.module.css";

/** Hub page for one service category: its own pages first, then services on request. */
export default function CategoryHub({ category }: { category: Category }) {
  const withPage = category.services.filter((s) => s.href);
  const onRequest = category.services.filter((s) => !s.href);
  const faqs = category.faqGroup ? faqGroup(category.faqGroup).faqs : [];

  return (
    <>
      {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}

      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: category.name, href: category.path },
        ]}
        title={category.headline}
        lead={category.lead}
      >
        <ButtonLink href="/contact" size="large">
          Talk to an advisor
        </ButtonLink>
      </PageHeader>

      {withPage.length > 0 && (
        <section className="section" aria-labelledby="main-services-title">
          <div className={`wrap ${styles.split}`}>
            <h2 id="main-services-title" className={styles.h2}>
              Main services
            </h2>
            <ul className={styles.featured}>
              {withPage.map((s) => (
                <li key={s.label}>
                  <Link href={s.href!} className={styles.featuredLink}>
                    <span className={styles.featuredLabel}>{s.label}</span>
                    <span className={styles.featuredDesc}>{s.description}</span>
                    <ArrowRight size={20} strokeWidth={1.5} aria-hidden className={styles.arrow} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {onRequest.length > 0 && (
        <section className={`section ${withPage.length > 0 ? "band-deep" : ""}`} aria-labelledby="more-services-title">
          <div className={`wrap ${styles.split}`}>
            <div>
              <h2 id="more-services-title" className={styles.h2}>
                {withPage.length > 0 ? "Also available" : "What we handle"}
              </h2>
              <p className={styles.note}>
                These services do not have their own page yet. Ask us and we will send the scope and an itemised quote.
              </p>
            </div>
            <ul className={styles.compact}>
              {onRequest.map((s) => (
                <li key={s.label}>
                  <h3 className={styles.compactLabel}>{s.label}</h3>
                  <p>{s.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="section" aria-labelledby="faq-title">
          <div className={`wrap ${styles.split}`}>
            <h2 id="faq-title" className={styles.h2}>
              Questions
            </h2>
            <FaqList faqs={faqs} />
          </div>
        </section>
      )}

      <CtaBand title="Not sure what you need?">
        Tell us what you are setting up or what is due. We will reply with what applies to you and what it costs.
      </CtaBand>
    </>
  );
}
