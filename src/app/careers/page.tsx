import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import { applyHref, candidateFaqs, hiringSteps, reasons, roles, teams, values } from "@/content/careers";
import PageHeader from "@/components/shared/PageHeader";
import { FaqList, faqSchema } from "@/components/shared/FaqList";
import { ButtonLink } from "@/components/ui/Button";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { ToneIcon, type IconName } from "@/components/ui/ToneIcon";
import { JsonLd } from "@/components/ui/JsonLd";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Careers: CA, CS, Accounts and Advisor Jobs",
  description:
    "Join Corpunex and help first-time founders build their companies. Jobs for Company Secretaries, accountants, advisors and writers in Bhubaneswar and New Delhi.",
  alternates: { canonical: "/careers" },
};

const valueIcons: { icon: IconName; tone: "sky" | "mint" | "sun" }[] = [
  { icon: "chat", tone: "sky" },
  { icon: "badge", tone: "mint" },
  { icon: "shield", tone: "sun" },
];

export default function CareersPage() {
  return (
    <>
      <JsonLd data={faqSchema(candidateFaqs)} />

      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
        ]}
        title="Help founders turn ideas into companies, the right way."
        highlight="the right way."
        lead="Behind every company we register is someone taking the biggest step of their working life. We're Company Secretaries, Chartered Accountants, advocates and advisors who make that step simple. If you love making complicated things clear, come and do it with us."
        tone="mint"
      >
        <div className={styles.heroActions}>
          <ButtonLink href="#open-roles" size="large" arrow>
            See {roles.length} open roles
          </ButtonLink>
          <ButtonLink href={applyHref()} variant="secondary" size="large">
            Send us your CV
          </ButtonLink>
        </div>
      </PageHeader>

      <section className="section" aria-labelledby="why-title">
        <div className={`wrap ${styles.why}`}>
          <PhotoFrame
            src="/images/startup-founders.jpg"
            alt="A team working together around a table"
            ratio="4 / 3"
            sizes="(min-width: 1000px) 45vw, 100vw"
          />
          <div>
            <h2 id="why-title" className={styles.h2}>
              Why work at Corpunex
            </h2>
            <ul className={styles.reasons}>
              {reasons.map((r, i) => (
                <li key={r.title}>
                  <span className={styles.reasonNum} aria-hidden>
                    {i + 1}
                  </span>
                  <div>
                    <h3 className={styles.h4}>{r.title}</h3>
                    <p>{r.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section band-sky" aria-labelledby="values-title">
        <div className="wrap">
          <h2 id="values-title" className={styles.h2}>
            How we work
          </h2>
          <ul className={styles.values}>
            {values.map((v, i) => (
              <li key={v.title} className={styles.value}>
                <ToneIcon name={valueIcons[i].icon} tone={valueIcons[i].tone} />
                <h3 className={styles.h3}>{v.title}</h3>
                <p>{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="open-roles" className="section" aria-labelledby="roles-title">
        <div className="wrap">
          <div className={styles.head}>
            <div>
              <h2 id="roles-title" className={styles.h2}>
                Open roles
              </h2>
              <p className={styles.muted}>
                {roles.length} {roles.length === 1 ? "role" : "roles"} open right now, across {teams.length} teams.
              </p>
            </div>
          </div>
          <ul className={styles.roles}>
            {roles.map((r) => (
              <li key={r.slug}>
                <Link href={`/careers/${r.slug}`} className={styles.role}>
                  <div className={styles.roleMain}>
                    <span className={styles.team}>{r.team}</span>
                    <h3 className={styles.roleTitle}>{r.title}</h3>
                    <p className={styles.roleSummary}>{r.summary}</p>
                  </div>
                  <div className={styles.roleMeta}>
                    <span>
                      <MapPin size={16} strokeWidth={2} aria-hidden />
                      {r.location}
                    </span>
                    <span>
                      <Briefcase size={16} strokeWidth={2} aria-hidden />
                      {r.type}
                    </span>
                    <span className={styles.roleCta}>
                      View role
                      <ArrowRight size={16} strokeWidth={2} aria-hidden />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section band-deep" aria-labelledby="teams-title">
        <div className="wrap">
          <h2 id="teams-title" className={styles.h2}>
            The teams you could join
          </h2>
          <ul className={styles.teams}>
            {teams.map((t) => {
              const open = roles.filter((r) => r.team === t.name).length;
              return (
                <li key={t.name} className={styles.teamCard}>
                  <h3 className={styles.h3}>{t.name}</h3>
                  <p>{t.body}</p>
                  <span className={styles.openCount}>
                    {open} open {open === 1 ? "role" : "roles"}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="wrap">
          <h2 id="process-title" className={styles.h2}>
            How we hire
          </h2>
          <ol className={styles.steps}>
            {hiringSteps.map((s, i) => (
              <li key={s.title}>
                <span className={styles.num} aria-hidden>
                  {i + 1}
                </span>
                <h3 className={styles.h3}>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section band-deep" aria-labelledby="cfaq-title">
        <div className={`wrap ${styles.faqGrid}`}>
          <h2 id="cfaq-title" className={styles.h2}>
            Questions from candidates
          </h2>
          <FaqList faqs={candidateFaqs} />
        </div>
      </section>

      <section className={styles.openSection} aria-labelledby="open-title">
        <div className="wrap">
          <div className={styles.open}>
            <div>
              <h2 id="open-title" className={styles.openTitle}>
                Don&apos;t see your role?
              </h2>
              <p>
                We&apos;re always glad to hear from good Company Secretaries, Chartered Accountants, advocates and
                advisors. Send us your CV and tell us what you&apos;d like to work on.
              </p>
            </div>
            <ButtonLink href={applyHref()} variant="onInk" size="large">
              Send us your CV
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
