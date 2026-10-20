import Link from "next/link";
import { Mail } from "lucide-react";
import { site } from "@/config/site";
import CallbackLink from "@/components/callback/CallbackLink";
import styles from "./TopBar.module.css";

/** Slim utility bar above the main navigation (desktop and tablet). */
export default function TopBar() {
  return (
    <div className={styles.bar}>
      <div className={`wrap ${styles.inner}`}>
        <p className={styles.tagline}>Company registration, GST and compliance for founders across India</p>
        <ul className={styles.links}>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/compliance-calendar">Compliance calendar</Link>
          </li>
          <li>
            <Link href="/tools/gst-calculator">GST calculator</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={styles.sep} aria-hidden />
          <li>
            <a href={`mailto:${site.email}`}>
              <Mail size={14} strokeWidth={2} aria-hidden />
              {site.email}
            </a>
          </li>
          <li>
            <CallbackLink className={styles.callback} />
          </li>
        </ul>
      </div>
    </div>
  );
}
