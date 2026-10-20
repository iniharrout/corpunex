import Image from "next/image";
import Link from "next/link";
import { footerNav } from "@/content/navigation";
import { disclaimer, site } from "@/config/site";
import { Fact } from "@/components/ui/Placeholder";
import styles from "./SiteFooter.module.css";

const socials = [
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "X", href: site.social.x },
  { label: "Instagram", href: site.social.instagram },
];

export default function SiteFooter() {
  return (
    <footer className={`band-ink ${styles.footer}`}>
      <div className="wrap">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image src="/corpunex-logo-white.png" alt="Corpunex" width={136} height={16} />
            <p className={styles.tagline}>
              Company formation, tax and compliance for founders in India, and for foreign founders entering India.
            </p>
            <address className={styles.contact}>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <span>{site.hours}</span>
            </address>
          </div>

          <nav className={styles.columns} aria-label="Footer">
            {footerNav.map((col) => (
              <div key={col.heading}>
                <h2 className={styles.heading}>{col.heading}</h2>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <dl className={styles.entity}>
          <div>
            <dt>Legal entity</dt>
            <dd>
              <Fact value={site.legalName} />
            </dd>
          </div>
          <div>
            <dt>CIN</dt>
            <dd className="tabular">
              <Fact value={site.cin} />
            </dd>
          </div>
          <div>
            <dt>GSTIN</dt>
            <dd className="tabular">
              <Fact value={site.gstin} />
            </dd>
          </div>
          <div className={styles.entityWide}>
            <dt>Registered office</dt>
            <dd>
              <Fact value={site.registeredAddress} />
            </dd>
          </div>
        </dl>

        <div className={styles.bottom}>
          <p className={styles.disclaimer}>{disclaimer}</p>
          <div className={styles.meta}>
            <ul className={styles.socials}>
              {socials.map((s) => (
                <li key={s.label}>
                  {s.href.startsWith("[") ? (
                    <span>
                      {s.label} <Fact value={s.href} />
                    </span>
                  ) : (
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <p>© {2026} Corpunex. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
