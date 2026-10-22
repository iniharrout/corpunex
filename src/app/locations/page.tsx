import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Building2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Mail,
  Clock,
  Compass,
} from "lucide-react";
import { cities } from "@/content/cities";
import { site } from "@/config/site";
import PageHeader from "@/components/shared/PageHeader";
import ContactPanel from "@/components/shared/ContactPanel";
import { JsonLd } from "@/components/ui/JsonLd";
import styles from "./locations.module.css";

export const metadata: Metadata = {
  title: "Our Locations & ROC Service Hubs Across India | Corpunex",
  description:
    "Explore Corpunex corporate offices in Bhubaneswar and New Delhi, alongside ROC service hubs across Bangalore, Mumbai, Hyderabad, Pune, Chennai, and Kolkata.",
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: "Corpunex Locations Across India",
    description:
      "Corpunex office locations and company registration hubs across Bangalore, Mumbai, Delhi, Hyderabad, Pune, Bhubaneswar, Chennai, and Kolkata.",
    url: `${site.url}/locations`,
  },
};

const offices = [
  {
    city: "Bhubaneswar",
    badge: "Global Headquarters",
    state: "Odisha",
    address: "Infocity, Chandrasekharpur, Bhubaneswar, Odisha 751024",
    phone: "+91 98765 43210",
    email: site.email,
    hours: "Mon–Sat, 9:30am–6:30pm IST",
    description:
      "Home base for our core CA and Company Secretary advisory board, research team, and legal document specialists. Directly coordinated with ROC Odisha (Cuttack) and Startup Odisha.",
  },
  {
    city: "New Delhi",
    badge: "Corporate Liaison Desk",
    state: "Delhi NCT",
    address: "4th Floor, IFCI Tower, Nehru Place, New Delhi 110019",
    phone: "+91 98765 43210",
    email: site.email,
    hours: "Mon–Sat, 9:30am–6:30pm IST",
    description:
      "Liaison desk for central regulatory agencies including the Ministry of Corporate Affairs (MCA), DPIIT, DGFT, and cross-border FDI advisory.",
  },
];

export default function LocationsPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Corpunex Office Locations and City Hubs",
    itemListElement: cities.map((c, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "ProfessionalService",
        name: `Corpunex Corporate Advisory — ${c.name}`,
        url: `${site.url}/company-registration/${c.slug}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: c.name,
          addressRegion: c.state,
          addressCountry: "IN",
        },
      },
    })),
  };

  return (
    <>
      <JsonLd data={schemaData} />

      <PageHeader
        crumbs={crumbs}
        title="Our locations and company registration hubs across India."
        highlight="across India."
        lead="With physical advisory desks in Bhubaneswar and New Delhi, and active ROC filing capabilities across every major tech and financial hub in India, Corpunex provides seamless corporate registration wherever you build."
        tone="sky"
      />

      <section className={`wrap ${styles.section}`}>
        {/* Main Advisory Offices */}
        <div className={styles.headOfficeSection}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Physical Presence</p>
            <h2 className={styles.sectionTitle}>Principal Advisory Offices</h2>
            <p className={styles.sectionLead}>
              Meet our senior Chartered Accountants, Company Secretaries, and advocates in person.
            </p>
          </div>

          <div className={styles.officeGrid}>
            {offices.map((off) => (
              <div key={off.city} className={styles.officeCard}>
                <div className={styles.officeTop}>
                  <span className={styles.badge}>{off.badge}</span>
                  <span className={styles.stateTag}>{off.state}</span>
                </div>
                <h3 className={styles.officeCity}>{off.city}</h3>
                <p className={styles.officeDesc}>{off.description}</p>

                <div className={styles.metaList}>
                  <div className={styles.metaRow}>
                    <MapPin size={16} className={styles.metaIcon} aria-hidden />
                    <span>{off.address}</span>
                  </div>
                  <div className={styles.metaRow}>
                    <Clock size={16} className={styles.metaIcon} aria-hidden />
                    <span>{off.hours}</span>
                  </div>
                  <div className={styles.metaRow}>
                    <Mail size={16} className={styles.metaIcon} aria-hidden />
                    <a href={`mailto:${off.email}`} className={styles.metaLink}>
                      {off.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Regional ROC & City Incorporation Hubs */}
        <div className={styles.hubsSection}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Pan-India Service Coverage</p>
            <h2 className={styles.sectionTitle}>All {cities.length} Startup & ROC Service Hubs</h2>
            <p className={styles.sectionLead}>
              Click on any city to inspect state stamp duty guidelines, local address requirements, and ROC filing timelines.
            </p>
          </div>

          <div className={styles.mainLayout}>
            <div className={styles.citiesGrid}>
              {cities.map((city) => (
                <article key={city.slug} className={styles.cityCard}>
                  <div className={styles.cityCardHeader}>
                    <div className={styles.cityRegionTag}>
                      <Compass size={13} aria-hidden />
                      {city.region} · {city.state}
                    </div>
                    <span className={styles.rocBenchTag}>ROC Bench</span>
                  </div>

                  <h3 className={styles.cityName}>{city.name}</h3>
                  <p className={styles.cityTagline}>{city.tagline}</p>

                  <div className={styles.rocBox}>
                    <div className={styles.rocTitle}>
                      <Building2 size={14} className={styles.rocIcon} aria-hidden />
                      {city.rocName}
                    </div>
                    <p className={styles.rocAddress}>{city.rocAddress}</p>
                  </div>

                  <div className={styles.zonesSection}>
                    <span className={styles.zonesLabel}>Key Startup Corridors:</span>
                    <div className={styles.zonePills}>
                      {city.commercialHubs.slice(0, 4).map((hub) => (
                        <span key={hub} className={styles.zonePill}>
                          {hub}
                        </span>
                      ))}
                      {city.commercialHubs.length > 4 && (
                        <span className={styles.zonePill}>+{city.commercialHubs.length - 4} more</span>
                      )}
                    </div>
                  </div>

                  <Link href={`/company-registration/${city.slug}`} className={styles.cityCta}>
                    <span>View {city.name} Registration Guide</span>
                    <ArrowRight size={16} aria-hidden />
                  </Link>
                </article>
              ))}
            </div>

            {/* Sidebar with Direct Contact Form */}
            <aside className={styles.sidebar}>
              <ContactPanel
                title="Get Started in Any City"
                formSource="Locations Directory Page"
                defaultTopic="Register a company or LLP"
              />

              <div className={styles.guaranteeBox}>
                <h4 className={styles.guaranteeTitle}>
                  <ShieldCheck size={18} color="var(--color-accent)" aria-hidden />
                  Pan-India Legal Assurance
                </h4>
                <ul className={styles.guaranteeList}>
                  <li>
                    <CheckCircle2 size={15} className={styles.gIcon} aria-hidden />
                    <span>Central MCA CRC digital processing across all 28 states</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} className={styles.gIcon} aria-hidden />
                    <span>State-specific electronic stamp duty calculation</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} className={styles.gIcon} aria-hidden />
                    <span>Free resubmissions if ROC raises technical requisitions</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
