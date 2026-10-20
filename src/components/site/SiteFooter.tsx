import Image from "next/image";
import Link from "next/link";
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
    <footer className={`band-ink ${styles.footer}`}>
      <div className="wrap">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image src="/corpunex-logo-white.png" alt="Corpunex" width={136} height={16} />
            <p className={styles.tagline}>
              We help founders start their company in India and keep it running smoothly, from registration to tax and
              yearly filings.
            </p>
            <div className={styles.contact}>
              <a href={`mailto:${site.email}`} className={styles.email}>
                {site.email}
              </a>
              <span>{site.hours}</span>
            </div>
            <CallbackButton variant="onInk" />
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
            <p>© 2026 Corpunex · {site.offices}</p>
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
