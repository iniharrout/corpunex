import type { Metadata } from "next";
import Link from "next/link";
import { advisors } from "@/content/home";
import { categories } from "@/content/categories";
import { disclaimer, isPlaceholder, site } from "@/config/site";
import PageHeader from "@/components/shared/PageHeader";
import { EntityDetails } from "@/components/shared/LegalPage";
import CtaBand from "@/components/shared/CtaBand";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Fact, Ph } from "@/components/ui/Placeholder";
import { ButtonLink } from "@/components/ui/Button";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Corpunex",
  description:
    "Corpunex is an independent advisory firm in Bhubaneswar and New Delhi. Our Chartered Accountants, Company Secretaries and advocates handle registration, tax and compliance for founders.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Every cost on its own line",
    body: "Quotes separate government fees, third-party costs and our fee. Government fees are paid at cost, and you get the official receipts.",
  },
  {
    title: "No promises we cannot keep",
    body: "Names, registrations and recognitions are decided by the authorities. We prepare applications to the published rules, and we tell you when something is outside our control.",
  },
  {
    title: "Qualified people sign the work",
    body: "Filings are prepared and certified by Chartered Accountants, Company Secretaries and advocates. Where the law needs an independent professional, such as an auditor, we tell you who it is.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
        title="An advisory firm for founders, run by the people who sign your filings."
        lead="Corpunex helps Indian and foreign founders register their business, stay on top of tax and MCA filings, and protect what they build."
      />

      <section className="section" aria-labelledby="story-title">
        <div className={`wrap ${styles.story}`}>
          <div className={styles.storyText}>
            <h2 id="story-title" className={styles.h2}>
              Why we exist
            </h2>
            <p>
              Starting and running a business in India means dealing with the MCA, GSTN, the income tax department,
              state authorities and the Trade Marks Registry, each with its own forms and deadlines.
            </p>
            <p>
              We handle that work for founders, explain what each filing does, and give a written, itemised quote before
              we start.
            </p>
            <p>
              <Ph>founding year, the founder&rsquo;s background and why Corpunex was started, in two or three sentences</Ph>
            </p>
          </div>
          <PhotoFrame
            alt="The Corpunex team at the Bhubaneswar office"
            brief="The team at the office, working with client files. Landscape, natural light."
            ratio="3 / 2"
            sizes="(min-width: 1000px) 50vw, 100vw"
          />
        </div>
      </section>

      <section className="section band-deep" aria-labelledby="principles-title">
        <div className={`wrap ${styles.split}`}>
          <h2 id="principles-title" className={styles.h2}>
            How we work
          </h2>
          <ol className={styles.principles}>
            {principles.map((p, i) => (
              <li key={p.title}>
                <span className={`tabular ${styles.index}`}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={styles.h3}>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="leadership-title">
        <div className="wrap">
          <div className={styles.teamHead}>
            <h2 id="leadership-title" className={styles.h2}>
              Leadership
            </h2>
            <p className={styles.muted}>
              Membership numbers are listed so you can check them with ICAI, ICSI or the Bar Council yourself.
            </p>
          </div>
          <ul className={styles.team}>
            {advisors.map((a, i) => (
              <li key={i} className={styles.person}>
                <PhotoFrame
                  alt={`${a.name}, ${a.role} at Corpunex`}
                  brief={a.photoBrief}
                  ratio="4 / 5"
                  sizes="(min-width: 900px) 22vw, 50vw"
                />
                <div className={styles.personText}>
                  <h3 className={styles.name}>
                    <Fact value={a.name} />
                  </h3>
                  <p className={styles.role}>{a.role}</p>
                  <p className={styles.credential}>
                    <Fact value={a.credential} />
                  </p>
                  <p className={styles.bio}>
                    <Fact value={a.bio} />
                  </p>
                  {isPlaceholder(a.linkedin) ? (
                    <p className={styles.credential}>
                      <Fact value={a.linkedin} />
                    </p>
                  ) : (
                    <a href={a.linkedin} className={styles.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section band-deep" aria-labelledby="services-title">
        <div className={`wrap ${styles.split}`}>
          <div>
            <h2 id="services-title" className={styles.h2}>
              What we do
            </h2>
            <div className={styles.servicesAction}>
              <ButtonLink href="/services" variant="secondary">
                All services
              </ButtonLink>
            </div>
          </div>
          <ul className={styles.services}>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={c.path}>{c.name}</Link>
                <span>{c.summary}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="company-title">
        <div className={`wrap ${styles.split}`}>
          <h2 id="company-title" className={styles.h2}>
            Company details
          </h2>
          <div>
            <EntityDetails />
            <dl className={styles.extra}>
              <div>
                <dt>Offices</dt>
                <dd>{site.offices}</dd>
              </div>
              <div>
                <dt>Phone and WhatsApp</dt>
                <dd>
                  <a href={site.phoneHref}>{site.phoneDisplay}</a>
                </dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>{site.hours}</dd>
              </div>
            </dl>
            <p className={styles.disclaimer}>{disclaimer}</p>
          </div>
        </div>
      </section>

      <CtaBand title="Want to talk it through?">
        Tell us what you are setting up or what is due. An advisor will reply with what is needed and what it costs.
      </CtaBand>
    </>
  );
}
