import Link from "next/link";
import { Check, Minus } from "lucide-react";
import type { ServicePageContent } from "@/content/services/types";
import { site, timeline } from "@/config/site";
import { ENTITY_LABEL, inr, PROFESSIONAL_FEE, type EntityType } from "@/lib/fees";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import { FaqList, faqSchema } from "@/components/shared/FaqList";
import CtaBand from "@/components/shared/CtaBand";
import { ButtonLink, TextLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import CallbackButton from "@/components/callback/CallbackButton";
import { Art, artForPath } from "@/components/illustrations/artFor";
import styles from "./ServicePage.module.css";

/** Price summary for incorporations: our fee only. Government fees are quoted per case. */
function sampleFees(content: ServicePageContent) {
  if (!content.entity) return null;
  return { professional: PROFESSIONAL_FEE[content.entity] };
}

/** The two other structures, for the comparison heading. */
function alternatives(entity: EntityType) {
  const names: Record<EntityType, string> = { pvt: "a Private Limited company", llp: "an LLP", opc: "a One Person Company" };
  return (Object.keys(names) as EntityType[]).filter((e) => e !== entity).map((e) => names[e]).join(" or ");
}

function QuoteCard({ content }: { content: ServicePageContent }) {
  const sample = sampleFees(content);
  return (
    <aside className={styles.quote} aria-label="Price summary">
      <p className={styles.quoteName}>{content.name}</p>
      {sample && (
        <dl className={styles.quoteFacts}>
          <div>
            <dt>Our fee</dt>
            <dd>
              <span className={`tabular ${styles.quotePrice}`}>from {inr(sample.professional)}</span>
              <span className={styles.quoteNote}>+ 18% GST</span>
            </dd>
          </div>
          <div>
            <dt>Government fees</dt>
            <dd>
              Charged at actual cost
              <span className={styles.quoteNote}>Depends on your state and capital. Shown in your quote.</span>
            </dd>
          </div>
          <div>
            <dt>Timeline</dt>
            <dd>
              {timeline.short}
              <span className={styles.quoteNote}>from complete documents</span>
            </dd>
          </div>
        </dl>
      )}
      {!sample && content.quoteFacts && (
        <dl className={styles.quoteFacts}>
          {content.quoteFacts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>
                <span>{f.value}</span>
                {f.note && <span className={styles.quoteNote}>{f.note}</span>}
              </dd>
            </div>
          ))}
        </dl>
      )}
      <div className={styles.quoteActions}>
        <ButtonLink href="/contact" block size="large">
          Get started
        </ButtonLink>
        <CallbackButton block topic={content.callbackTopic ?? "Register a company or LLP"} />
      </div>
      <div className={styles.quoteLinks}>
        <Link href="/pricing">See how our pricing works</Link>
      </div>
    </aside>
  );
}

export default function ServicePage({ content }: { content: ServicePageContent }) {
  const url = `${site.url}${content.path}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.name,
    description: content.metaDescription,
    url,
    areaServed: { "@type": "Country", name: "India" },
    provider: { "@type": "Organization", name: site.name, url: site.url },
    ...(content.entity && {
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: PROFESSIONAL_FEE[content.entity],
        description: "Professional fee, excluding GST and government fees",
      },
    }),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: content.breadcrumb.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.label,
      item: `${site.url}${b.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema(content.faqs)} />

      <div className={`wrap ${styles.layout}`}>
        <div className={styles.main}>
          <header className={styles.hero}>
            <nav aria-label="Breadcrumb">
              <ol className={styles.breadcrumb}>
                {content.breadcrumb.map((b, i) => (
                  <li key={b.href}>
                    {i === content.breadcrumb.length - 1 ? (
                      <span aria-current="page">{b.label}</span>
                    ) : (
                      <Link href={b.href}>{b.label}</Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            <Art name={artForPath(content.path)} className={styles.heroArt} />
            <h1 className={styles.title}>{content.headline}</h1>
            <p className={styles.lead}>{content.lead}</p>
          </header>

          <div className={styles.quoteMobile}>
            <QuoteCard content={content} />
          </div>

          <section className={styles.block} aria-labelledby="for-title">
            <h2 id="for-title" className={styles.h2}>
              Who it is for
            </h2>
            <ul className={styles.ruled}>
              {content.forWho.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {content.notFor.length > 0 && (
              <div className={styles.notFor}>
                <h3 className={styles.h3}>When something else fits better</h3>
                {content.notFor.map((n) => (
                  <p key={n.text}>
                    {n.text} <Link href={n.href}>{n.linkLabel}</Link>.
                  </p>
                ))}
              </div>
            )}
          </section>

          <section className={styles.block} aria-labelledby="included-title">
            <h2 id="included-title" className={styles.h2}>
              What is included
            </h2>
            <div className={styles.twoCol}>
              <ul className={styles.checks}>
                {content.included.map((item) => (
                  <li key={item}>
                    <Check size={18} strokeWidth={1.75} aria-hidden className={styles.yes} />
                    {item}
                  </li>
                ))}
              </ul>
              <div>
                <h3 className={styles.h3}>Not included</h3>
                <ul className={styles.checks}>
                  {content.excluded.map((item) => (
                    <li key={item} className={styles.muted}>
                      <Minus size={18} strokeWidth={1.75} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.block} aria-labelledby="docs-title">
            <h2 id="docs-title" className={styles.h2}>
              Documents you will need
            </h2>
            <table className={styles.docs}>
              <thead>
                <tr>
                  <th scope="col">Document</th>
                  <th scope="col">From</th>
                </tr>
              </thead>
              <tbody>
                {content.documents.map((d) => (
                  <tr key={d.document}>
                    <th scope="row">
                      {d.document}
                      {d.note && <span className={styles.docNote}>{d.note}</span>}
                    </th>
                    <td>{d.from}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className={styles.block} aria-labelledby="timeline-title">
            <h2 id="timeline-title" className={styles.h2}>
              {content.entity ? "Timeline" : "Step by step"}
            </h2>
            {(content.entity || content.stepsIntro) && (
              <p className={styles.blockIntro}>{content.entity ? timeline.sentence : content.stepsIntro}</p>
            )}
            <ol className={styles.milestones}>
              {content.milestones.map((m) => (
                <li key={m.title}>
                  <span className={`tabular ${styles.when}`}>{m.when}</span>
                  <div>
                    <h3 className={styles.h3}>{m.title}</h3>
                    <p>{m.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            {(content.entity || content.stepsDelays) && (
              <p className={styles.delay}>
                <strong>What can slow it down.</strong> {content.entity ? timeline.delays : content.stepsDelays}
              </p>
            )}
          </section>

          <section className={styles.block} aria-labelledby="process-title">
            <h2 id="process-title" className={styles.h2}>
              How we work together
            </h2>
            <ol className={styles.process}>
              {content.process.map((step, i) => (
                <li key={step.title}>
                  <h3 className={styles.processTitle}>
                    <span className="tabular">{String(i + 1).padStart(2, "0")}</span> {step.title}
                  </h3>
                  <dl className={styles.processSplit}>
                    <div>
                      <dt>You</dt>
                      <dd>{step.you}</dd>
                    </div>
                    <div>
                      <dt>Us</dt>
                      <dd>{step.us}</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ol>
          </section>

          {content.afterwards && (
            <section className={styles.block} aria-labelledby="after-title">
              <h2 id="after-title" className={styles.h2}>
                {content.afterwardsTitle ?? "After incorporation"}
              </h2>
              <p className={styles.blockIntro}>
                {content.afterwardsIntro ??
                  "These deadlines start on the date of incorporation. Your compliance calendar lists the exact dates."}
              </p>
              <table className={styles.after}>
                <thead>
                  <tr>
                    <th scope="col">When</th>
                    <th scope="col">What</th>
                    <th scope="col">Form</th>
                  </tr>
                </thead>
                <tbody>
                  {content.afterwards.map((a) => (
                    <tr key={a.task}>
                      <td className={styles.afterWhen}>{a.deadline}</td>
                      <td>{a.task}</td>
                      <td className={styles.afterForm}>{a.form}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}
        </div>

        <div className={styles.aside}>
          <QuoteCard content={content} />
        </div>
      </div>

      {content.entity && (
        <section className="section" aria-labelledby="compare-title">
          <div className="wrap">
            <div className={styles.wideHead}>
              <h2 id="compare-title" className={styles.h2}>
                How it compares with {alternatives(content.entity)}
              </h2>
              <TextLink href="/resources/pvt-ltd-vs-llp">Read the full comparison</TextLink>
            </div>
            <ComparisonTable caption={`${ENTITY_LABEL[content.entity]} compared with the other structures`} />
          </div>
        </section>
      )}

      <section className="section band-deep" aria-labelledby="faq-title">
        <div className={`wrap ${styles.faqGrid}`}>
          <h2 id="faq-title" className={styles.h2}>
            Questions
          </h2>
          <FaqList faqs={content.faqs} />
        </div>
      </section>

      <section className={styles.related} aria-labelledby="related-title">
        <div className="wrap">
          <h2 id="related-title" className={styles.relatedTitle}>
            Often needed next
          </h2>
          <ul className={styles.relatedList}>
            {content.related.map((r) => (
              <li key={r.href}>
                <Link href={r.href}>
                  <span className={styles.relatedLabel}>{r.label}</span>
                  <span className={styles.relatedDesc}>{r.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={content.cta?.title ?? `Ready to register your ${content.entity === "llp" ? "LLP" : "company"}?`}
      >
        {content.cta?.body ?? "Send us your proposed names, directors and state. We will reply with an itemised quote."}
      </CtaBand>
    </>
  );
}
