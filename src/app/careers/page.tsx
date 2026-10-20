import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import { applyHref, hiringSteps, roles, values } from "@/content/careers";
import PageHeader from "@/components/shared/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { ToneIcon, type IconName } from "@/components/ui/ToneIcon";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Work at Corpunex. Help first-time founders in India start and run their companies, with Company Secretaries, Chartered Accountants and advocates.",
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
      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
        ]}
        title="Help founders build their companies, the right way."
        highlight="the right way."
        lead="We're a team of Company Secretaries, Chartered Accountants, advocates and advisors helping first-time founders across India. If you like making complicated things simple, we'd like to meet you."
        tone="mint"
      >
        <ButtonLink href="#open-roles" size="large" arrow>
          See open roles
        </ButtonLink>
      </PageHeader>

      <section className="section" aria-labelledby="values-title">
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

      <section id="open-roles" className="section band-deep" aria-labelledby="roles-title">
        <div className="wrap">
          <div className={styles.head}>
            <h2 id="roles-title" className={styles.h2}>
              Open roles
            </h2>
            <p className={styles.muted}>
              {roles.length} {roles.length === 1 ? "role" : "roles"} open right now.
            </p>
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

      <section className={styles.openSection} aria-labelledby="open-title">
        <div className="wrap">
          <div className={styles.open}>
            <div>
              <h2 id="open-title" className={styles.openTitle}>
                Don&apos;t see your role?
              </h2>
              <p>
                We&apos;re always glad to hear from good Company Secretaries, Chartered Accountants and advocates. Send
                us your CV and tell us what you&apos;d like to work on.
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
