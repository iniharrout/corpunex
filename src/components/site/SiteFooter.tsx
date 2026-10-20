import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { footerNav } from "@/content/navigation";
import { disclaimer, site } from "@/config/site";
import CallbackButton from "@/components/callback/CallbackButton";
import styles from "./SiteFooter.module.css";

const socials = [
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "X", href: site.social.x },
  { label: "Instagram", href: site.social.instagram },
].filter((s): s is { label: string; href: string } => Boolean(s.href));

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.lead}>
          <p className={styles.statement}>
            Company registration, tax and compliance for founders in India, <em>handled with care.</em>
          </p>
          <div className={styles.reach}>
            <a href={`mailto:${site.email}`} className={styles.email}>
              {site.email}
              <ArrowUpRight size={18} strokeWidth={1.75} aria-hidden />
            </a>
            <CallbackButton variant="secondary" />
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.brand}>
            <Image src="/corpunex-logo-dark.png" alt="Corpunex" width={136} height={16} />
            <dl className={styles.facts}>
              <div>
                <dt>Offices</dt>
                <dd>{site.offices}</dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>{site.hours}</dd>
              </div>
            </dl>
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

        <div className={styles.bottom}>
          <p className={styles.disclaimer}>{disclaimer}</p>
          <div className={styles.meta}>
            <p>© 2026 Corpunex. All rights reserved.</p>
            {socials.length > 0 && (
              <ul className={styles.socials}>
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
