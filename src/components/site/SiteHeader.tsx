"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { primaryNav, serviceGroups } from "@/content/navigation";
import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { ToneIcon } from "@/components/ui/ToneIcon";
import CallbackButton from "@/components/callback/CallbackButton";
import CallbackLink from "@/components/callback/CallbackLink";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
  }, [drawerOpen]);

  const servicesActive = pathname.startsWith("/services");

  return (
    <header className={styles.header} data-scrolled={scrolled || undefined}>
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
                className={styles.navLink}
                aria-expanded={menuOpen}
                aria-controls={panelId}
                data-active={servicesActive || undefined}
                onClick={() => setMenuOpen((v) => !v)}
              >
                Services
                <ChevronDown size={16} strokeWidth={2} aria-hidden className={styles.chevron} />
              </button>
              <div id={panelId} className={styles.panel} hidden={!menuOpen}>
                <div className={styles.panelInner}>
                  <div className={styles.panelGroups}>
                    {serviceGroups.map((group) => (
                      <div key={group.label} className={styles.group}>
                        <div className={styles.groupHead}>
                          <ToneIcon name={group.icon} tone={group.tone} />
                          <div>
                            <p className={styles.groupLabel}>{group.label}</p>
                            <p className={styles.groupBlurb}>{group.blurb}</p>
                          </div>
                        </div>
                        <ul className={styles.panelLinks}>
                          {group.links.map((link) => (
                            <li key={link.label}>
                              <Link href={link.href} className={styles.panelLink}>
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panelFoot}>
                    <p>
                      <strong>Not sure what you need?</strong> Tell us about your business and we&apos;ll suggest the
                      right setup.
                    </p>
                    <div className={styles.panelFootActions}>
                      <Link href="/services" className={styles.allLink}>
                        All services
                        <ArrowRight size={16} strokeWidth={2} aria-hidden />
                      </Link>
                      <CallbackButton variant="primary" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {primaryNav.map((link) => (
              <li key={link.href} className={styles.navItem}>
                <Link
                  href={link.href}
                  className={styles.navLink}
                  aria-current={pathname === link.href ? "page" : undefined}
                  data-active={pathname.startsWith(link.href) || undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          {site.loginUrl && (
            <a href={site.loginUrl} className={styles.login}>
              Login
            </a>
          )}
          <CallbackButton variant="secondary" icon={false}>
            Talk to an expert
          </CallbackButton>
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
                <ToneIcon name={group.icon} tone={group.tone} />
                <span>{group.label}</span>
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
                <Link href={link.href} className={styles.drawerPrimaryLink}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/faq" className={styles.drawerPrimaryLink}>
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.drawerPrimaryLink}>
                Contact
              </Link>
            </li>
            {site.loginUrl && (
              <li>
                <a href={site.loginUrl} className={styles.drawerPrimaryLink}>
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
            <p className={styles.drawerEmail}>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span aria-hidden> · </span>
              <CallbackLink className={styles.drawerCallback} />
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
