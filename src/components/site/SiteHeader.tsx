"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { primaryNav, serviceGroups } from "@/content/navigation";
import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import CallbackButton from "@/components/callback/CallbackButton";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const baseId = useId();
  const panelId = `${baseId}-services`;

  // Close everything on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setDrawerOpen(false);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setDrawerOpen(false);
      }
    }
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMenuOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
  }, [drawerOpen]);

  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.bar}`}>
        <Link href="/" className={styles.logo} aria-label="Corpunex home">
          <Image src="/corpunex-logo-dark.png" alt="" width={136} height={16} priority />
        </Link>

        <nav ref={navRef} className={styles.nav} aria-label="Main">
          <ul className={styles.navList}>
            <li
              className={styles.navItem}
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}
            >
              <button
                type="button"
                className={styles.navTrigger}
                aria-expanded={menuOpen}
                aria-controls={panelId}
                onClick={() => setMenuOpen((v) => !v)}
              >
                Services
                <ChevronDown size={16} strokeWidth={2} aria-hidden className={styles.chevron} />
              </button>
              <div id={panelId} className={styles.panel} hidden={!menuOpen}>
                <div className={styles.panelInner}>
                  <div className={styles.panelGroups}>
                    {serviceGroups.map((group) => (
                      <div key={group.label}>
                        <p className={styles.panelHeading}>{group.label}</p>
                        <ul className={styles.panelLinks}>
                          {group.links.map((link) => (
                            <li key={link.label}>
                              <Link href={link.href} className={styles.panelLink}>
                                <span className={styles.panelLinkLabel}>{link.label}</span>
                                {link.description && (
                                  <span className={styles.panelLinkDesc}>{link.description}</span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panelHelp}>
                    <p className={styles.panelHelpTitle}>Not sure what you need?</p>
                    <p className={styles.panelHelpText}>
                      Tell us about your idea and we&apos;ll suggest the right setup.
                    </p>
                    <CallbackButton variant="primary" block />
                  </div>
                </div>
              </div>
            </li>
            {primaryNav.map((link) => (
              <li key={link.href} className={styles.navItem}>
                <Link
                  href={link.href}
                  className={styles.navTrigger}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          {site.loginUrl && (
            <a href={site.loginUrl} className={styles.utilLink}>
              Login
            </a>
          )}
          <CallbackButton variant="ghost" />
          <ButtonLink href="/contact">Get started</ButtonLink>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={drawerOpen}
          aria-controls={`${baseId}-drawer`}
          onClick={() => setDrawerOpen((v) => !v)}
        >
          {drawerOpen ? <X size={24} strokeWidth={2} aria-hidden /> : <Menu size={24} strokeWidth={2} aria-hidden />}
          <span className="visually-hidden">{drawerOpen ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <div id={`${baseId}-drawer`} className={styles.drawer} hidden={!drawerOpen}>
        <nav aria-label="Mobile">
          <p className={styles.drawerLabel}>Services</p>
          {serviceGroups.map((group) => (
            <details key={group.label} className={styles.drawerGroup}>
              <summary className={styles.drawerSummary}>
                {group.label}
                <ChevronDown size={20} strokeWidth={2} aria-hidden className={styles.drawerChevron} />
              </summary>
              <ul className={styles.drawerLinks}>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.drawerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
          <ul className={styles.drawerPrimary}>
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.drawerSummary}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className={styles.drawerSummary}>
                Contact
              </Link>
            </li>
            {site.loginUrl && (
              <li>
                <a href={site.loginUrl} className={styles.drawerSummary}>
                  Login
                </a>
              </li>
            )}
          </ul>
          <div className={styles.drawerActions}>
            <ButtonLink href="/contact" block size="large">
              Get started
            </ButtonLink>
            <CallbackButton block size="large" />
          </div>
        </nav>
      </div>
    </header>
  );
}
