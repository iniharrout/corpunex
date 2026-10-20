import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Briefcase, Check, MapPin, Users } from "lucide-react";
import { applyHref, hiringSteps, roles } from "@/content/careers";
import PageHeader from "@/components/shared/PageHeader";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import styles from "./page.module.css";

interface RolePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return roles.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: RolePageProps): Promise<Metadata> {
  const { slug } = await params;
  const role = roles.find((r) => r.slug === slug);
  if (!role) return {};
  return {
    title: `${role.title} job in ${role.location}`,
    description: role.summary,
    alternates: { canonical: `/careers/${role.slug}` },
  };
}

function List({ items }: { items: string[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item}>
          <Check size={18} strokeWidth={2.25} aria-hidden className={styles.tick} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function RolePage({ params }: RolePageProps) {
  const { slug } = await params;
  const role = roles.find((r) => r.slug === slug);
  if (!role) notFound();

  const others = roles.filter((r) => r.slug !== role.slug).slice(0, 3);

  const remote = role.location.startsWith("Remote");
  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: [role.summary, ...role.about, "What you'll do:", ...role.responsibilities, "What we're looking for:", ...role.requirements]
      .map((line) => `<p>${line}</p>`)
      .join(""),
    datePosted: role.posted,
    employmentType: role.type === "Internship" ? "INTERN" : "FULL_TIME",
    hiringOrganization: { "@type": "Organization", name: site.name, sameAs: site.url, logo: `${site.url}/corpunex-logo-dark.png` },
    ...(remote
      ? { jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "India" } }
      : {
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: role.location,
              addressRegion: role.location === "Bhubaneswar" ? "Odisha" : "Delhi",
              addressCountry: "IN",
            },
          },
        }),
    directApply: false,
  };

  return (
    <>
      <JsonLd data={jobPosting} />
      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
          { label: role.title, href: `/careers/${role.slug}` },
        ]}
        title={role.title}
        lead={role.summary}
        tone="mint"
      >
        <ul className={styles.meta}>
          <li>
            <Users size={16} strokeWidth={2} aria-hidden />
            {role.team}
          </li>
          <li>
            <MapPin size={16} strokeWidth={2} aria-hidden />
            {role.location}
          </li>
          <li>
            <Briefcase size={16} strokeWidth={2} aria-hidden />
            {role.type}
          </li>
        </ul>
      </PageHeader>

      <div className={`wrap ${styles.layout}`}>
        <article className={styles.body}>
          <section className={styles.section} aria-labelledby="about-title">
            <h2 id="about-title" className={styles.h2}>
              About the role
            </h2>
            {role.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>
          <section className={styles.section} aria-labelledby="do-title">
            <h2 id="do-title" className={styles.h2}>
              What you&apos;ll do
            </h2>
            <List items={role.responsibilities} />
          </section>
          <section className={styles.section} aria-labelledby="need-title">
            <h2 id="need-title" className={styles.h2}>
              What we&apos;re looking for
            </h2>
            <List items={role.requirements} />
          </section>
          {role.niceToHave.length > 0 && (
            <section className={styles.section} aria-labelledby="nice-title">
              <h2 id="nice-title" className={styles.h2}>
                Nice to have
              </h2>
              <List items={role.niceToHave} />
            </section>
          )}
          <section className={styles.section} aria-labelledby="hire-title">
            <h2 id="hire-title" className={styles.h2}>
              How we hire
            </h2>
            <ol className={styles.steps}>
              {hiringSteps.map((s, i) => (
                <li key={s.title}>
                  <span className={styles.num} aria-hidden>
                    {i + 1}
                  </span>
                  <div>
                    <p className={styles.stepTitle}>{s.title}</p>
                    <p className={styles.stepBody}>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </article>

        <aside className={styles.aside} aria-labelledby="apply-title">
          <div className={styles.apply}>
            <h2 id="apply-title" className={styles.applyTitle}>
              Interested?
            </h2>
            <p>Email your CV with a few lines on why this role interests you.</p>
            <ButtonLink href={applyHref(role)} block size="large">
              Apply for this role
            </ButtonLink>
          </div>
          {others.length > 0 && (
            <div className={styles.others}>
              <h2 className={styles.othersTitle}>Other open roles</h2>
              <ul>
                {others.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/careers/${r.slug}`}>{r.title}</Link>
                    <span>{r.location}</span>
                  </li>
                ))}
              </ul>
              <Link href="/careers" className={styles.all}>
                All open roles
              </Link>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}
