"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Rocket,
  Building2,
  Receipt,
  Award,
  Scale,
  FileText,
  Globe,
  Sparkles,
  Calculator,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceCategories = [
    {
      category: "FORMATION & ENTITY",
      items: [
        {
          title: "Private Limited Company",
          href: "/services/business-registration/private-limited-company",
          desc: "Fast-track SPICe+ MCA incorporation",
          icon: Building2,
          popular: true,
        },
        {
          title: "Limited Liability Partnership (LLP)",
          href: "/services/business-registration/llp-registration",
          desc: "Flexible structure with limited liability",
          icon: Scale,
        },
        {
          title: "One Person Company (OPC)",
          href: "/services/business-registration/one-person-company",
          desc: "100% solo ownership with corporate shield",
          icon: Building2,
        },
        {
          title: "Sole Proprietorship Setup",
          href: "/services/business-registration/sole-proprietorship",
          desc: "Simplest entry point for single founders",
          icon: FileText,
        },
      ],
    },
    {
      category: "TAXATION & GST",
      items: [
        {
          title: "GST Registration & Filings",
          href: "/services/gst-taxation/gst-registration",
          desc: "State-wise GSTIN & monthly GSTR-1, 3B",
          icon: Receipt,
          popular: true,
        },
        {
          title: "Corporate Income Tax (ITR)",
          href: "/services/gst-taxation/income-tax-filing",
          desc: "Statutory balance sheet & CA tax audit",
          icon: FileText,
        },
        {
          title: "Accounting & Bookkeeping",
          href: "/services/accounting-bookkeeping",
          desc: "Monthly ledger, payroll & MIS reports",
          icon: Scale,
        },
        {
          title: "GST Return Filings",
          href: "/services/gst-taxation",
          desc: "ITC reconciliation & officer response",
          icon: Receipt,
        },
      ],
    },
    {
      category: "STARTUP INITIATIVES",
      items: [
        {
          title: "Startup India Recognition",
          href: "/services/startup-services/startup-india-recognition",
          desc: "DPIIT certificate & 80-IAC tax holiday",
          icon: Rocket,
          popular: true,
        },
        {
          title: "Startup Odisha Grants",
          href: "/services/startup-services/startup-odisha",
          desc: "Monthly sustenance & product grant claims",
          icon: Sparkles,
        },
        {
          title: "Udyam MSME Registration",
          href: "/services/startup-services/udyam-msme-registration",
          desc: "Priority lending & statutory protection",
          icon: ShieldCheck,
        },
        {
          title: "Trademark & IP Defense",
          href: "/services/trademark-ip/trademark-registration",
          desc: "Brand name, logo & 45 NICE classes",
          icon: Award,
        },
      ],
    },
    {
      category: "ROC & LICENCES",
      items: [
        {
          title: "Annual ROC Compliance",
          href: "/services/corporate-compliance/annual-roc-compliance",
          desc: "AOC-4, MGT-7 filings & board resolutions",
          icon: ShieldCheck,
        },
        {
          title: "Director KYC (DIR-3)",
          href: "/services/corporate-compliance",
          desc: "Annual DIN verification & board updates",
          icon: FileText,
        },
        {
          title: "FSSAI Food Licence",
          href: "/services/licences-registrations/fssai-licence",
          desc: "Basic, State & Central food licensing",
          icon: Award,
        },
        {
          title: "Import Export Code (IEC)",
          href: "/services/licences-registrations/import-export-code",
          desc: "Lifetime DGFT registration for global trade",
          icon: Globe,
        },
      ],
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.98)" : "#FFFFFF",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid #DADCE0",
          boxShadow: scrolled ? "0 1px 3px 0 rgba(60,64,67,0.12), 0 1px 2px 0 rgba(60,64,67,0.24)" : "none",
          width: "100%",
          transition: "all 0.2s ease",
        }}
      >
        {/* Global Single-Tier Google Header (64px clean height) */}
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
            gap: "20px",
          }}
        >
          {/* Brand Logo with Google-grade crispness */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexShrink: 0,
              textDecoration: "none",
            }}
            aria-label="Corpunex Home"
          >
            <Image
              src="/corpunex-logo-dark.png"
              alt="Corpunex"
              width={150}
              height={22}
              priority
              style={{
                width: "auto",
                height: "22px",
                objectFit: "contain",
                display: "block",
              }}
            />
          </Link>

          {/* Desktop Navigation Links — Google Style Clean Hierarchy */}
          <nav
            style={{ display: "none" }}
            className="cx-desktop-nav"
            aria-label="Main Navigation"
          >
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                alignItems: "center",
                gap: "8px",
                margin: 0,
                padding: 0,
                height: "64px",
              }}
            >
              {/* Services Dropdown */}
              <li
                style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "0 12px",
                    height: "100%",
                    fontSize: "0.88rem",
                    fontWeight: servicesOpen || isActive("/services") ? 600 : 500,
                    border: "none",
                    backgroundColor: "transparent",
                    color: servicesOpen || isActive("/services") ? "#1A73E8" : "#3C4043",
                    cursor: "pointer",
                    position: "relative",
                    whiteSpace: "nowrap",
                    transition: "color 0.15s ease",
                  }}
                  aria-expanded={servicesOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={14}
                    style={{
                      transform: servicesOpen ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s ease",
                      color: servicesOpen ? "#1A73E8" : "#5F6368",
                    }}
                  />
                  {(servicesOpen || isActive("/services")) && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "12px",
                        right: "12px",
                        height: "3px",
                        backgroundColor: "#1A73E8",
                        borderRadius: "3px 3px 0 0",
                      }}
                    />
                  )}
                </button>

                {/* 4-Column Google Elevation Dropdown Menu */}
                {servicesOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "-120px",
                      width: "920px",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #DADCE0",
                      borderRadius: "16px",
                      boxShadow: "0 4px 18px 0 rgba(60,64,67,0.18), 0 1px 3px 1px rgba(60,64,67,0.12)",
                      padding: "24px 28px 18px",
                      zIndex: 1000,
                      animation: "cxFadeIn 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "20px",
                        marginBottom: "18px",
                      }}
                    >
                      {serviceCategories.map((col, idx) => (
                        <div key={idx}>
                          <div
                            style={{
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              color: "#5F6368",
                              letterSpacing: "0.06em",
                              marginBottom: "12px",
                              paddingBottom: "6px",
                              borderBottom: "1px solid #F1F3F4",
                            }}
                          >
                            {col.category}
                          </div>

                          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                            {col.items.map((srv, sIdx) => {
                              const IconComponent = srv.icon;
                              return (
                                <Link
                                  key={sIdx}
                                  href={srv.href}
                                  onClick={() => setServicesOpen(false)}
                                  style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "10px",
                                    padding: "8px 10px",
                                    borderRadius: "8px",
                                    textDecoration: "none",
                                    transition: "all 0.15s ease",
                                  }}
                                  className="cx-google-menu-item"
                                >
                                  <div
                                    style={{
                                      padding: "6px",
                                      borderRadius: "8px",
                                      backgroundColor: "#E8F0FE",
                                      color: "#1A73E8",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      flexShrink: 0,
                                      marginTop: "2px",
                                    }}
                                  >
                                    <IconComponent size={14} />
                                  </div>
                                  <div>
                                    <div
                                      style={{
                                        color: "#202124",
                                        fontWeight: 500,
                                        fontSize: "0.85rem",
                                        lineHeight: "1.3",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                      }}
                                      className="cx-google-menu-title"
                                    >
                                      <span>{srv.title}</span>
                                      {srv.popular && (
                                        <span
                                          style={{
                                            fontSize: "0.62rem",
                                            fontWeight: 600,
                                            color: "#1E8E3E",
                                            backgroundColor: "#E6F4EA",
                                            padding: "1px 5px",
                                            borderRadius: "9999px",
                                          }}
                                        >
                                          Popular
                                        </span>
                                      )}
                                    </div>
                                    <div
                                      style={{
                                        color: "#5F6368",
                                        fontSize: "0.72rem",
                                        marginTop: "2px",
                                        lineHeight: "1.3",
                                      }}
                                    >
                                      {srv.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Google-Style Dropdown Bottom Strip */}
                    <div
                      style={{
                        borderTop: "1px solid #DADCE0",
                        paddingTop: "12px",
                        marginTop: "8px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#F8F9FA",
                        margin: "0 -28px -18px",
                        padding: "12px 28px",
                        borderRadius: "0 0 16px 16px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.82rem", color: "#3C4043" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "#1E8E3E", fontWeight: 500 }}>
                          <CheckCircle2 size={15} />
                          100% Itemized Government Receipts
                        </span>
                        <span>•</span>
                        <span>Official MCA SPICe+ & GSTN Integrated</span>
                      </div>
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        style={{
                          color: "#1A73E8",
                          fontSize: "0.84rem",
                          fontWeight: 600,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          textDecoration: "none",
                        }}
                      >
                        <span>Explore all corporate services</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                )}
              </li>

              {/* Startup India */}
              <li style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}>
                <Link
                  href="/services/startup-services/startup-india-recognition"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "0 12px",
                    height: "100%",
                    fontSize: "0.88rem",
                    fontWeight: isActive("/services/startup-services/startup-india-recognition") ? 600 : 500,
                    color: isActive("/services/startup-services/startup-india-recognition") ? "#1A73E8" : "#3C4043",
                    textDecoration: "none",
                    position: "relative",
                    whiteSpace: "nowrap",
                    transition: "color 0.15s ease",
                  }}
                  className="cx-google-nav-link"
                >
                  <span>Startup India</span>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      color: "#1E8E3E",
                      backgroundColor: "#E6F4EA",
                      border: "1px solid #CEEAD6",
                      padding: "1px 6px",
                      borderRadius: "9999px",
                    }}
                  >
                    80-IAC
                  </span>
                  {isActive("/services/startup-services/startup-india-recognition") && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "12px",
                        right: "12px",
                        height: "3px",
                        backgroundColor: "#1A73E8",
                        borderRadius: "3px 3px 0 0",
                      }}
                    />
                  )}
                </Link>
              </li>

              {/* GST & Taxation */}
              <li style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}>
                <Link
                  href="/services/gst-taxation"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0 12px",
                    height: "100%",
                    fontSize: "0.88rem",
                    fontWeight: isActive("/services/gst-taxation") ? 600 : 500,
                    color: isActive("/services/gst-taxation") ? "#1A73E8" : "#3C4043",
                    textDecoration: "none",
                    position: "relative",
                    whiteSpace: "nowrap",
                    transition: "color 0.15s ease",
                  }}
                  className="cx-google-nav-link"
                >
                  <span>GST & Tax</span>
                  {isActive("/services/gst-taxation") && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "12px",
                        right: "12px",
                        height: "3px",
                        backgroundColor: "#1A73E8",
                        borderRadius: "3px 3px 0 0",
                      }}
                    />
                  )}
                </Link>
              </li>

              {/* Fee Calculator */}
              <li style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}>
                <a
                  href="#calculator"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "0 12px",
                    height: "100%",
                    fontSize: "0.88rem",
                    fontWeight: 500,
                    color: "#3C4043",
                    textDecoration: "none",
                    position: "relative",
                    whiteSpace: "nowrap",
                    transition: "color 0.15s ease",
                  }}
                  className="cx-google-nav-link"
                >
                  <Calculator size={14} style={{ color: "#1A73E8" }} />
                  <span>Fee Calculator</span>
                </a>
              </li>

              {/* Resources */}
              <li style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}>
                <Link
                  href="/resources"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0 12px",
                    height: "100%",
                    fontSize: "0.88rem",
                    fontWeight: isActive("/resources") ? 600 : 500,
                    color: isActive("/resources") ? "#1A73E8" : "#3C4043",
                    textDecoration: "none",
                    position: "relative",
                    whiteSpace: "nowrap",
                    transition: "color 0.15s ease",
                  }}
                  className="cx-google-nav-link"
                >
                  <span>Resources</span>
                  {isActive("/resources") && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "12px",
                        right: "12px",
                        height: "3px",
                        backgroundColor: "#1A73E8",
                        borderRadius: "3px 3px 0 0",
                      }}
                    />
                  )}
                </Link>
              </li>

              {/* About */}
              <li style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}>
                <Link
                  href="/about"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0 12px",
                    height: "100%",
                    fontSize: "0.88rem",
                    fontWeight: isActive("/about") ? 600 : 500,
                    color: isActive("/about") ? "#1A73E8" : "#3C4043",
                    textDecoration: "none",
                    position: "relative",
                    whiteSpace: "nowrap",
                    transition: "color 0.15s ease",
                  }}
                  className="cx-google-nav-link"
                >
                  <span>About</span>
                  {isActive("/about") && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "12px",
                        right: "12px",
                        height: "3px",
                        backgroundColor: "#1A73E8",
                        borderRadius: "3px 3px 0 0",
                      }}
                    />
                  )}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop Right Actions — Google Pill Button Standard */}
          <div
            style={{ display: "none", alignItems: "center", gap: "12px", flexShrink: 0 }}
            className="cx-desktop-actions"
          >
            {/* Direct Support Pill */}
            <a
              href="tel:+918260177700"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.84rem",
                color: "#3C4043",
                fontWeight: 500,
                padding: "8px 14px",
                borderRadius: "9999px",
                textDecoration: "none",
                backgroundColor: "#F1F3F4",
                transition: "all 0.15s ease",
                whiteSpace: "nowrap",
              }}
              className="cx-google-support-pill"
            >
              <PhoneCall size={14} style={{ color: "#1A73E8" }} />
              <span>Talk to an Advisor</span>
            </a>

            {/* Google Primary Blue Pill Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="btn-google-primary"
              style={{
                padding: "9px 22px",
                fontSize: "0.88rem",
                fontWeight: 500,
                borderRadius: "9999px",
                whiteSpace: "nowrap",
              }}
            >
              <span>Get Started</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px",
              backgroundColor: "transparent",
              border: "1px solid #DADCE0",
              borderRadius: "8px",
              color: "#202124",
              cursor: "pointer",
            }}
            className="cx-mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderTop: "1px solid #DADCE0",
              padding: "16px 20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              maxHeight: "85vh",
              overflowY: "auto",
            }}
          >
            {[
              { label: "All Corporate Services", href: "/services" },
              { label: "Private Limited Company", href: "/services/business-registration/private-limited-company" },
              { label: "Startup India (DPIIT 80-IAC)", href: "/services/startup-services/startup-india-recognition" },
              { label: "GST Registration & Returns", href: "/services/gst-taxation" },
              { label: "Trademark & IP Defense", href: "/services/trademark-ip/trademark-registration" },
              { label: "Annual ROC Filings", href: "/services/corporate-compliance/annual-roc-compliance" },
              { label: "Fee Calculator", href: "#calculator" },
              { label: "Resources & MCA Guides", href: "/resources" },
              { label: "About Corpunex", href: "/about" },
              { label: "FAQ Desk", href: "/faq" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: "10px 14px",
                  fontSize: "0.92rem",
                  fontWeight: 500,
                  borderRadius: "8px",
                  color: isActive(item.href) ? "#1A73E8" : "#202124",
                  backgroundColor: isActive(item.href) ? "#E8F0FE" : "transparent",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ))}

            <div
              style={{
                paddingTop: "14px",
                borderTop: "1px solid #DADCE0",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setModalOpen(true);
                }}
                className="btn-google-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "11px",
                  borderRadius: "9999px",
                }}
              >
                <span>Get Started</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceTitle="General Corporate Consultation"
      />

      <style jsx>{`
        @keyframes cxFadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (min-width: 960px) {
          .cx-desktop-nav {
            display: block !important;
          }
          .cx-desktop-actions {
            display: flex !important;
          }
          .cx-mobile-toggle {
            display: none !important;
          }
        }
        :global(.cx-google-nav-link:hover) {
          color: #1A73E8 !important;
        }
        :global(.cx-google-menu-item:hover) {
          background-color: #F8F9FA !important;
        }
        :global(.cx-google-menu-item:hover .cx-google-menu-title) {
          color: #1A73E8 !important;
        }
        :global(.cx-google-support-pill:hover) {
          background-color: #E8F0FE !important;
          color: #1A73E8 !important;
        }
      `}</style>
    </>
  );
}
