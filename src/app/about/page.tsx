import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/content/categories";
import { disclaimer, site } from "@/config/site";
import PageHeader from "@/components/shared/PageHeader";
import CtaBand from "@/components/shared/CtaBand";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { ToneIcon, type IconName } from "@/components/ui/ToneIcon";
import CallbackButton from "@/components/callback/CallbackButton";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Corpunex",
  description:
    "Corpunex helps first-time founders in India register their business, stay on top of tax and yearly filings, and protect their brand, with every cost explained up front.",
  alternates: { canonical: "/about" },
};

const principles: { title: string; body: string; icon: IconName; tone: "sky" | "mint" | "sun" }[] = [
  {
    title: "Every cost on its own line",
    body: "Your quote shows government fees, digital signatures and our fee separately. For government fees, we charge exactly what the government charges.",
    icon: "receipt",
    tone: "sky",
  },
  {
    title: "Honest about what we control",
    body: "Names, registrations and recognitions are decided by the government. We prepare everything to their rules, and we tell you plainly when something is out of our hands.",
    icon: "shield",
    tone: "mint",
  },
  {
    title: "Qualified people check the work",
    body: "Filings are prepared and certified by Chartered Accountants, Company Secretaries and advocates. Where the law needs someone independent, like an auditor, we tell you who it is.",
    icon: "badge",
    tone: "sun",
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
        title="We make the paperwork of starting up easy to understand."
        highlight="easy to understand."
        lead="Corpunex helps Indian and foreign founders register their business, keep up with tax and yearly filings, and protect what they build."
        tone="peach"
      />

      <section className="section" aria-labelledby="story-title">
        <div className={`wrap ${styles.story}`}>
          <div className={styles.storyText}>
            <h2 id="story-title" className={styles.h2}>
              Why we do this
            </h2>
            <p>
              Starting a business in India means dealing with several government offices, each with its own forms,
              portals and deadlines. For a first-time founder, it&apos;s hard to know what&apos;s needed, what it costs
              and what happens if something is missed.
            </p>
            <p>
              We handle that work for you. We explain each step in plain words, tell you what you need to do and when,
              and give you a written, itemised quote before we start.
            </p>
          </div>
          <PhotoFrame
            src="/images/founders-meeting.jpg"
            alt="Founders talking through their company paperwork with an advisor"
            ratio="3 / 2"
            sizes="(min-width: 1000px) 50vw, 100vw"
          />
        </div>
      </section>

      <section className="section band-sky" aria-labelledby="principles-title">
        <div className="wrap">
          <h2 id="principles-title" className={styles.h2}>
            How we work
          </h2>
          <ul className={styles.principles}>
            {principles.map((p) => (
              <li key={p.title} className={styles.principle}>
                <ToneIcon name={p.icon} tone={p.tone} />
                <h3 className={styles.h3}>{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="services-title">
        <div className="wrap">
          <div className={styles.head}>
            <h2 id="services-title" className={styles.h2}>
              What we help with
            </h2>
            <Link href="/services" className={styles.allLink}>
              See all services
              <ArrowRight size={16} strokeWidth={2} aria-hidden />
            </Link>
          </div>
          <ul className={styles.services}>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={c.path} className={`${styles.service} ${styles[c.tone]}`}>
                  <span className={styles.serviceName}>{c.name}</span>
                  <span className={styles.serviceSummary}>{c.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section band-deep" aria-labelledby="company-title">
        <div className={`wrap ${styles.company}`}>
          <div>
            <h2 id="company-title" className={styles.h2}>
              Get in touch
            </h2>
            <p className={styles.muted}>Email us, or ask for a call back and an advisor will ring you.</p>
            <div className={styles.contactActions}>
              <CallbackButton variant="primary" />
            </div>
          </div>
          <div className={styles.details}>
            <dl>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div>
                <dt>Offices</dt>
                <dd>{site.offices}</dd>
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

      <CtaBand title="Ready to get started?">
        Tell us what you&apos;re setting up or what&apos;s due. We&apos;ll tell you what&apos;s needed and what it
        costs.
      </CtaBand>
    </>
  );
}
