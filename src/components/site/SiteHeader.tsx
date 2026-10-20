"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { journeyNav, primaryNav } from "@/content/navigation";
import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const baseId = useId();

  // Close everything on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpenMenu(null);
    setDrawerOpen(false);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setDrawerOpen(false);
      }
    }
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
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
            {journeyNav.map((group) => {
              const panelId = `${baseId}-${group.label}`;
              const isOpen = openMenu === group.label;
              return (
                <li
                  key={group.label}
                  className={styles.navItem}
                  onMouseEnter={() => setOpenMenu(group.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    className={styles.navTrigger}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenMenu(isOpen ? null : group.label)}
                  >
                    {group.label}
                    <ChevronDown size={14} strokeWidth={1.75} aria-hidden className={styles.chevron} />
                  </button>
                  <div id={panelId} className={styles.panel} data-open={isOpen} hidden={!isOpen}>
                    <div className={styles.panelInner}>
                      <p className={styles.panelIntro}>{group.intro}</p>
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
                      {group.feature && (
                        <Link href={group.feature.href} className={styles.panelFeature}>
                          <span className={styles.panelLinkLabel}>{group.feature.label}</span>
                          <span className={styles.panelLinkDesc}>{group.feature.description}</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
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
          <a href={site.whatsappHref} className={styles.utilLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={16} strokeWidth={1.5} aria-hidden />
            WhatsApp
          </a>
          <ButtonLink href="/contact">Talk to an advisor</ButtonLink>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={drawerOpen}
          aria-controls={`${baseId}-drawer`}
          onClick={() => setDrawerOpen((v) => !v)}
        >
          {drawerOpen ? <X size={22} strokeWidth={1.5} aria-hidden /> : <Menu size={22} strokeWidth={1.5} aria-hidden />}
          <span className="visually-hidden">{drawerOpen ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <div id={`${baseId}-drawer`} className={styles.drawer} hidden={!drawerOpen}>
        <nav aria-label="Mobile">
          {journeyNav.map((group) => (
            <details key={group.label} className={styles.drawerGroup}>
              <summary className={styles.drawerSummary}>
                {group.label}
                <span className={styles.drawerIntro}>{group.intro}</span>
                <ChevronDown size={18} strokeWidth={1.5} aria-hidden className={styles.drawerChevron} />
              </summary>
              <ul className={styles.drawerLinks}>
                {[...group.links, ...(group.feature ? [group.feature] : [])].map((link) => (
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
              Talk to an advisor
            </ButtonLink>
            <ButtonLink href={site.whatsappHref} variant="secondary" block size="large" target="_blank" rel="noopener noreferrer">
              WhatsApp {site.phoneDisplay}
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
