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
  title: "About Corpunex: Why We Help First-Time Founders",
  description:
    "Most business dreams don't fail in the market. They stall in the paperwork. Corpunex helps first-time founders in India register and stay compliant.",
  alternates: { canonical: "/about" },
};

/** The ways founders commonly go wrong. General patterns, not client stories. */
const mistakes = [
  {
    title: "Choosing a structure by price",
    body: "The cheapest option today can mean converting the whole company later, just as an investor is ready to sign.",
  },
  {
    title: "A name that's already taken",
    body: "The name gets rejected, the logo is already printed, and the launch slips by weeks.",
  },
  {
    title: "A quote that grows",
    body: "A low headline price, then stamp duty, signatures and certification added one by one.",
  },
  {
    title: "Missing the first-year deadlines",
    body: "Nobody mentions the auditor appointment or the 180-day declaration, until the late fees arrive.",
  },
  {
    title: "Mixing personal and business money",
    body: "It feels harmless early on. At tax time, and in an investor's due diligence, it isn't.",
  },
  {
    title: "Thinking registration is the finish line",
    body: "The certificate is the start. Every company has filings to make every year, even with no sales.",
  },
];

const principles: { title: string; body: string; icon: IconName; tone: "sky" | "mint" | "sun" }[] = [
  {
    title: "We explain before we file",
    body: "You'll know what each form does, why you need it and what happens next, in plain words.",
    icon: "chat",
    tone: "sky",
  },
  {
    title: "Every cost, up front",
    body: "Your quote shows government fees, digital signatures and our fee on separate lines before anything starts. Government fees are charged at exactly what the government charges.",
    icon: "receipt",
    tone: "mint",
  },
  {
    title: "We stay after the certificate",
    body: "Your first-year calendar, your GST returns, your yearly filings. We remind you before each one is due.",
    icon: "calendar",
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
        title="Most business dreams don't fail in the market. They stall in the paperwork."
        highlight="They stall in the paperwork."
        lead="This is why Corpunex exists."
        tone="peach"
      />

      <section className="section" aria-labelledby="story-title">
        <div className={`wrap ${styles.story}`}>
          <div className={styles.storyText}>
            <h2 id="story-title" className={styles.kicker}>
              The story we keep hearing
            </h2>
            <p className={styles.opening}>It almost always starts the same way: with an idea someone can&apos;t stop thinking about.</p>
            <p>
              A founder finds a co-founder, picks a name, maybe even designs a logo. They&apos;re ready to build. Then
              the questions start. Private Limited or LLP? What&apos;s a DIN? Why was the name rejected? Which documents,
              signed how, sent where?
            </p>
            <p>
              Friends give different answers. Websites show one price and add three more later. Somewhere along the way,
              a form is filed with the wrong detail, and nobody notices.
            </p>
            <p>
              Months later, a notice arrives. A late fee for a filing they&apos;d never heard of. A bank that won&apos;t
              open the account. An investor&apos;s lawyer asking why the shares were never properly issued. The energy
              that should have gone into the product goes into fixing paperwork instead. Some founders push through.
              Some quietly give up.
            </p>
            <p className={styles.pull}>
              None of this happens because founders are careless. It happens because nobody explained the system to them.
            </p>
          </div>
          <PhotoFrame
            src="/images/founders-meeting.jpg"
            alt="Founders talking through their company paperwork with an advisor"
            ratio="4 / 5"
            sizes="(min-width: 1000px) 40vw, 100vw"
            className={styles.photo}
          />
        </div>
      </section>

      <section className="section band-deep" aria-labelledby="mistakes-title">
        <div className="wrap">
          <div className={styles.head}>
            <h2 id="mistakes-title" className={styles.h2}>
              Where it usually goes wrong
            </h2>
            <p className={styles.muted}>
              These are the mistakes we see first-time founders make most often. Every one of them is avoidable.
            </p>
          </div>
          <ol className={styles.mistakes}>
            {mistakes.map((m, i) => (
              <li key={m.title} className={styles.mistake}>
                <span className={styles.mistakeNum} aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.h3}>{m.title}</h3>
                <p>{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="why-title">
        <div className="wrap">
          <div className={styles.mission}>
            <h2 id="why-title" className={styles.kicker}>
              Why we built Corpunex
            </h2>
            <p className={styles.missionText}>
              We wanted to be the advisor every first-time founder deserves: one who explains before filing, prices
              everything up front, and is still there long after the certificate arrives.
            </p>
            <p className={styles.missionSub}>
              Our team of Chartered Accountants, Company Secretaries and advocates handles the registrations, tax and
              filings, so founders can spend their energy on the thing they set out to build.
            </p>
          </div>
        </div>
      </section>

      <section className="section band-sky" aria-labelledby="principles-title">
        <div className="wrap">
          <h2 id="principles-title" className={styles.h2}>
            What we do differently
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

      <CtaBand title="Have an idea you can't stop thinking about?">
        Let&apos;s get the paperwork right from day one, so nothing stands between you and building it.
      </CtaBand>
    </>
  );
}
