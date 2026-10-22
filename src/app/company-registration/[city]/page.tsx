import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Building2, MapPin, Scale, ShieldCheck, ArrowRight, FileText } from "lucide-react";
import { cities, type CityHub } from "@/content/cities";
import PageHeader from "@/components/shared/PageHeader";
import { FaqList, faqSchema } from "@/components/shared/FaqList";
import ContactPanel from "@/components/shared/ContactPanel";
import { JsonLd } from "@/components/ui/JsonLd";
import { site, timeline } from "@/config/site";
import styles from "../city.module.css";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: city.keywords,
    alternates: {
      canonical: `/company-registration/${city.slug}`,
    },
    openGraph: {
      title: `${city.metaTitle} | Corpunex`,
      description: city.metaDescription,
      url: `${site.url}/company-registration/${city.slug}`,
      type: "article",
    },
  };
}

function localBusinessSchema(city: CityHub) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Corpunex Corporate Advisory — ${city.name}`,
    description: city.metaDescription,
    url: `${site.url}/company-registration/${city.slug}`,
    areaServed: {
      "@type": "AdministrativeArea",
      name: city.state,
    },
    priceRange: "₹₹",
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    serviceType: "Company Registration and Corporate Legal Compliance",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Incorporation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Private Limited Company Registration in ${city.name}`,
            description: `Fast-track SPICe+ MCA filing with ${city.rocName}`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `LLP Registration in ${city.name}`,
            description: `Limited Liability Partnership agreement drafting and ROC filing in ${city.state}`,
          },
        },
      ],
    },
  };
}

export default async function CityLandingPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);

  if (!city) {
    notFound();
  }

  const otherCities = cities.filter((c) => c.slug !== city.slug);

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Company registration", href: "/company-registration" },
    { label: city.name, href: `/company-registration/${city.slug}` },
  ];

  return (
    <>
      <JsonLd data={faqSchema(city.faqs)} />
      <JsonLd data={localBusinessSchema(city)} />

      <PageHeader
        crumbs={crumbs}
        title={`Company registration in ${city.name}: ${city.tagline}`}
        highlight={city.name}
        lead={city.overview}
        tone="sky"
      />

      <section className={`wrap ${styles.section}`}>
        <div className={styles.grid}>
          {/* Main Content Column */}
          <div className={styles.content}>
            {/* ROC & Jurisdiction Card */}
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                <Building2 size={22} className={styles.checkIcon} aria-hidden />
                ROC Jurisdiction & State Authority
              </h2>
              <p className={styles.cardLead}>
                Every company registered in {city.name} falls under the administrative jurisdiction of the Ministry of
                Corporate Affairs (MCA) and its designated Registrar of Companies:
              </p>

              <ul className={styles.factsList}>
                <li className={styles.factItem}>
                  <div className={styles.factLabel}>Registrar Office</div>
                  <div className={styles.factValue}>{city.rocName}</div>
                </li>
                <li className={styles.factItem}>
                  <div className={styles.factLabel}>Jurisdiction</div>
                  <div className={styles.factValue}>{city.rocJurisdiction}</div>
                </li>
                <li className={styles.factItem}>
                  <div className={styles.factLabel}>State Stamp Act</div>
                  <div className={styles.factValue}>{city.state} Stamp Duty applies to MoA & AoA</div>
                </li>
                <li className={styles.factItem}>
                  <div className={styles.factLabel}>Standard Timeline</div>
                  <div className={styles.factValue}>{timeline.short} once documents are signed</div>
                </li>
              </ul>

              <div style={{ marginTop: "var(--space-4)", paddingTop: "var(--space-4)", borderTop: "1px solid var(--color-line-subtle)" }}>
                <div className={styles.factLabel}>Office Address</div>
                <p style={{ margin: "4px 0 0", fontSize: "var(--text-small)", color: "var(--color-ink-muted)" }}>
                  <MapPin size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                  {city.rocAddress}
                </p>
              </div>
            </div>

            {/* Why Incorporate in this City */}
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                <Scale size={22} className={styles.checkIcon} aria-hidden />
                Why Incorporate Your Startup in {city.name}
              </h2>
              <p className={styles.cardLead}>{city.whyRegisterHere}</p>

              <h3 style={{ fontSize: "var(--text-body)", fontWeight: 600, color: "var(--color-ink)", marginBottom: "var(--space-2)" }}>
                Prominent Commercial Zones:
              </h3>
              <div className={styles.badgePills}>
                {city.commercialHubs.map((hub) => (
                  <span key={hub} className={styles.pill}>
                    <MapPin size={12} color="var(--color-accent)" />
                    {hub}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: "var(--space-5)" }}>
                <h3 style={{ fontSize: "var(--text-body)", fontWeight: 600, color: "var(--color-ink)", marginBottom: "var(--space-3)" }}>
                  Key Ecosystem Advantages:
                </h3>
                <ul className={styles.bulletList}>
                  {city.ecosystemHighlights.map((highlight, idx) => (
                    <li key={idx} className={styles.bulletItem}>
                      <CheckCircle2 size={18} className={styles.checkIcon} aria-hidden />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Registered Office Requirements */}
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                <ShieldCheck size={22} className={styles.checkIcon} aria-hidden />
                Registered Office Address Rules in {city.state}
              </h2>
              <p className={styles.cardLead}>{city.registeredOfficeNote}</p>

              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} aria-hidden />
                  <span>
                    <strong>Electricity / Utility Bill:</strong> Must be dated within the last 2 months and clearly display
                    the property owner&apos;s name and consumer number.
                  </span>
                </li>
                <li className={styles.bulletItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} aria-hidden />
                  <span>
                    <strong>Owner No Objection Certificate (NOC):</strong> Signed consent letter from the title holder
                    granting permission to use the premises for corporate operations.
                  </span>
                </li>
                <li className={styles.bulletItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} aria-hidden />
                  <span>
                    <strong>Rent or Lease Agreement:</strong> Notarised or registered lease deed in the name of a director or
                    the company.
                  </span>
                </li>
              </ul>
            </div>

            {/* 4-Step Incorporation Workflow */}
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                <FileText size={22} className={styles.checkIcon} aria-hidden />
                The 4-Step Incorporation Process
              </h2>
              <p className={styles.cardLead}>
                Corpunex handles the entire filing end-to-end with {city.rocName}:
              </p>

              <ol className={styles.stepsList}>
                <li className={styles.stepItem}>
                  <span className={styles.stepNum}>1</span>
                  <div>
                    <div className={styles.stepTitle}>Digital Signature Certificates (Class 3 DSC)</div>
                    <div className={styles.stepBody}>
                      We issue secure Class 3 DSCs for each proposed director via encrypted video KYC.
                    </div>
                  </div>
                </li>
                <li className={styles.stepItem}>
                  <span className={styles.stepNum}>2</span>
                  <div>
                    <div className={styles.stepTitle}>RUN / SPICe+ Part A Name Approval</div>
                    <div className={styles.stepBody}>
                      We run pre-submission checks against MCA Rule 8 and IP India trademarks before filing up to 2 name preferences.
                    </div>
                  </div>
                </li>
                <li className={styles.stepItem}>
                  <span className={styles.stepNum}>3</span>
                  <div>
                    <div className={styles.stepTitle}>SPICe+ Part B, e-MoA & e-AoA Drafting</div>
                    <div className={styles.stepBody}>
                      Our Chartered Accountants draft tailor-made objects clauses, calculate state stamp duty, and complete AGILE-PRO-S.
                    </div>
                  </div>
                </li>
                <li className={styles.stepItem}>
                  <span className={styles.stepNum}>4</span>
                  <div>
                    <div className={styles.stepTitle}>Certificate of Incorporation (COI), PAN & TAN</div>
                    <div className={styles.stepBody}>
                      The Registrar issues your Certificate of Incorporation with permanent CIN, PAN, TAN, and bank current account.
                    </div>
                  </div>
                </li>
              </ol>
            </div>

            {/* Local FAQs */}
            <div style={{ marginTop: "var(--space-4)" }}>
              <h2 style={{ fontSize: "var(--text-h3)", fontWeight: 600, color: "var(--color-ink)", marginBottom: "var(--space-4)" }}>
                Frequently Asked Questions about {city.name} Incorporation
              </h2>
              <FaqList faqs={city.faqs} />
            </div>
          </div>

          {/* Sticky Sidebar with Contact Panel */}
          <aside className={styles.sidebar}>
            <ContactPanel
              title={`Get a Quote for ${city.name}`}
              formSource={`City Landing Form (${city.name})`}
              defaultTopic="Register a company or LLP"
            />

            <div className={styles.trustBox}>
              <h3 className={styles.trustTitle}>The Corpunex Guarantee</h3>
              <ul className={styles.bulletList} style={{ gap: "var(--space-2)", fontSize: "var(--text-small)" }}>
                <li className={styles.bulletItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>Itemised quote in writing with zero surprise charges</span>
                </li>
                <li className={styles.bulletItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>Certified by qualified CAs and Company Secretaries</span>
                </li>
                <li className={styles.bulletItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>Free resubmissions if MCA requests clarification</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Other Cities Grid */}
        <div className={styles.otherCitiesSection}>
          <h2 style={{ fontSize: "var(--text-h3)", fontWeight: 600, color: "var(--color-ink)" }}>
            Explore Company Registration in Other Indian Startup Hubs
          </h2>
          <p style={{ color: "var(--color-ink-muted)", fontSize: "var(--text-body)", margin: "4px 0 0" }}>
            We serve founders across all major commercial jurisdictions in India.
          </p>

          <ul className={styles.citiesGrid}>
            {otherCities.map((item) => (
              <li key={item.slug}>
                <Link href={`/company-registration/${item.slug}`} className={styles.cityCard}>
                  <div>
                    <div className={styles.cityCardName}>{item.name}</div>
                    <div className={styles.cityCardState}>{item.state}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "var(--text-small)", color: "var(--color-accent)", marginTop: "var(--space-3)", fontWeight: 500 }}>
                    View city guide <ArrowRight size={14} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
