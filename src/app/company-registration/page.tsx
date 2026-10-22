import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building, MapPin, CheckCircle2 } from "lucide-react";
import { cities } from "@/content/cities";
import PageHeader from "@/components/shared/PageHeader";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/config/site";
import styles from "./city.module.css";

export const metadata: Metadata = {
  title: "Company Registration Across India: City Hubs & ROC Guides",
  description:
    "Find ROC office locations, state stamp duty rates, and company registration guides for Bangalore, Mumbai, Delhi NCR, Hyderabad, Pune, and Bhubaneswar.",
  alternates: {
    canonical: "/company-registration",
  },
  openGraph: {
    title: "Company Registration Across India | Corpunex",
    description:
      "Find ROC office locations, state stamp duty rates, and company registration guides for top Indian startup hubs.",
    url: `${site.url}/company-registration`,
  },
};

export default function CompanyRegistrationHubPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Company registration", href: "/company-registration" },
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Indian City Company Registration Hubs",
    itemListElement: cities.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Company Registration in ${c.name}`,
      url: `${site.url}/company-registration/${c.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={itemListSchema} />

      <PageHeader
        crumbs={crumbs}
        title="Company registration across India: pick your startup hub."
        highlight="startup hub."
        lead="Whether you are incorporating in the tech corridors of Bangalore, the financial heart of Mumbai, or the emerging innovation hub of Bhubaneswar, our Chartered Accountants and Company Secretaries ensure fast-track MCA approvals."
        tone="sky"
      />

      <section className={`wrap ${styles.section}`}>
        <div style={{ maxWidth: "800px", marginBottom: "var(--space-6)" }}>
          <h2 style={{ fontSize: "var(--text-h2)", color: "var(--color-ink)", marginBottom: "var(--space-3)" }}>
            Select Your City or State Jurisdiction
          </h2>
          <p style={{ color: "var(--color-ink-muted)", fontSize: "var(--text-body)", lineHeight: 1.6 }}>
            Incorporation rules are governed centrally by the Companies Act 2013 and processed via the Central
            Registration Centre (CRC). However, local state stamp duties, registered office address norms, and
            municipal licences vary by state. Choose your city below for detailed regulatory guidance:
          </p>
        </div>

        <ul className={styles.citiesGrid} style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}>
          {cities.map((city) => (
            <li key={city.slug}>
              <Link href={`/company-registration/${city.slug}`} className={styles.cityCard} style={{ padding: "var(--space-5)" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--color-accent)", fontSize: "var(--text-caption)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                    <MapPin size={14} /> {city.region} · {city.state}
                  </div>
                  <h3 className={styles.cityCardName} style={{ fontSize: "var(--text-h3)" }}>
                    {city.name}
                  </h3>
                  <p style={{ fontSize: "var(--text-small)", color: "var(--color-ink-muted)", margin: "6px 0 12px", lineHeight: 1.5 }}>
                    {city.tagline}
                  </p>

                  <div style={{ fontSize: "var(--text-caption)", color: "var(--color-ink-faint)", background: "var(--color-surface-subtle)", padding: "6px 10px", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-line-subtle)", marginBottom: "var(--space-3)" }}>
                    <Building size={12} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                    {city.rocName}
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "var(--space-2)", paddingTop: "var(--space-3)", borderTop: "1px solid var(--color-line-subtle)" }}>
                  <span style={{ fontSize: "var(--text-small)", fontWeight: 600, color: "var(--color-accent)" }}>
                    View city guide
                  </span>
                  <ArrowRight size={16} color="var(--color-accent)" />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Pan-India Trust Information */}
        <div className={styles.card} style={{ marginTop: "var(--space-8)" }}>
          <h2 className={styles.cardTitle}>
            <CheckCircle2 size={22} className={styles.checkIcon} />
            Can Corpunex Register Companies Outside These Hubs?
          </h2>
          <p className={styles.cardLead}>
            <strong>Yes.</strong> We serve founders across all 28 states and 8 union territories in India. The MCA SPICe+
            system is 100% digital, meaning our team can incorporate your Private Limited company, LLP, or One Person
            Company regardless of where your registered office is situated in India.
          </p>
          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginTop: "var(--space-4)" }}>
            <Link
              href="/services/business-registration/private-limited-company"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                background: "var(--color-accent)",
                color: "#fff",
                borderRadius: "var(--radius-md)",
                fontSize: "var(--text-small)",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Private Limited Company Guide <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                background: "var(--color-surface)",
                color: "var(--color-ink)",
                border: "1px solid var(--color-line-strong)",
                borderRadius: "var(--radius-md)",
                fontSize: "var(--text-small)",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Request a Free Pan-India Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
