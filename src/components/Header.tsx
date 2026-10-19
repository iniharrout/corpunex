"use client";

import React, { useState } from "react";
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
  Headphones,
  Globe,
  PhoneCall,
  Sparkles,
  ExternalLink
} from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Mega Menu Data structured in Razorpay's clean 4-column product architecture
  const serviceCategories = [
    {
      category: "FORMATION & ENTITY",
      items: [
        {
          title: "Private Limited Company",
          href: "/services/business-registration/private-limited-company",
          desc: "Fast-track SPICe+ MCA incorporation",
          icon: Building2,
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
          desc: "100% ownership with corporate protection",
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
          title: "GST Registration",
          href: "/services/gst-taxation/gst-registration",
          desc: "State-wise GSTIN with portal verification",
          icon: Receipt,
        },
        {
          title: "GST Return Filings",
          href: "/services/gst-taxation",
          desc: "GSTR-1, 3B & annual ITC reconciliation",
          icon: Receipt,
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
          desc: "Monthly ledger, payroll & MIS reporting",
          icon: Scale,
        },
      ],
    },
    {
      category: "STARTUP INITIATIVES",
      items: [
        {
          title: "Startup India Recognition",
          href: "/services/startup-services/startup-india-recognition",
          desc: "DPIIT certificate, 80-IAC tax exemption",
          icon: Rocket,
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
          title: "Trademark Registration",
          href: "/services/trademark-ip/trademark-registration",
          desc: "Brand name, logo & IP protection",
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
          desc: "AOC-4, MGT-7 filings & secretarial audit",
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

  const mainNavItems = [
    { label: "All Services", href: "/services", hasMegaMenu: true },
    { label: "Business Registration", href: "/services/business-registration" },
    { label: "Startup India", href: "/services/startup-services/startup-india-recognition" },
    { label: "GST & Tax", href: "/services/gst-taxation" },
    { label: "Resources", href: "/resources" },
    { label: "About Us", href: "/about" },
    { label: "FAQ", href: "/faq" },
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
          zIndex: 999,
          backgroundColor: "rgba(255, 255, 255, 0.96)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid #e8edf5",
          boxShadow: "0 1px 3px rgba(12, 35, 64, 0.04)",
          width: "100%",
        }}
      >
        {/* Global Single-Tier Navigation Bar (64px) */}
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
            aria-label="Corpunex Home"
          >
            <Image
              src="/corpunex-logo-dark.png"
              alt="Corpunex"
              width={210}
              height={26}
              priority
              style={{
                width: "auto",
                height: "26px",
                objectFit: "contain",
                display: "block",
              }}
            />
          </Link>

          {/* Desktop Navigation Links (Razorpay Style with Active Underline) */}
          <nav style={{ display: "none" }} className="desktop-nav">
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                alignItems: "center",
                gap: "2px",
                margin: 0,
                padding: 0,
                height: "64px",
              }}
            >
              {mainNavItems.map((item) => {
                const active = isActive(item.href);

                if (item.hasMegaMenu) {
                  return (
                    <li
                      key={item.href}
                      style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}
                      onMouseEnter={() => setActiveMegaMenu("services")}
                      onMouseLeave={() => setActiveMegaMenu(null)}
                    >
                      <button
                        onClick={() => setActiveMegaMenu(activeMegaMenu === "services" ? null : "services")}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          padding: "0 12px",
                          height: "100%",
                          fontSize: "0.88rem",
                          fontWeight: 500,
                          border: "none",
                          backgroundColor: "transparent",
                          color: activeMegaMenu === "services" || active ? "#0066f5" : "#1e293b",
                          cursor: "pointer",
                          position: "relative",
                          transition: "color 0.15s ease",
                        }}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={14}
                          style={{
                            transform: activeMegaMenu === "services" ? "rotate(180deg)" : "none",
                            transition: "transform 0.2s ease",
                            color: activeMegaMenu === "services" ? "#0066f5" : "#64748b",
                          }}
                        />

                        {/* Razorpay Active Underline Indicator */}
                        {(activeMegaMenu === "services" || active) && (
                          <span
                            style={{
                              position: "absolute",
                              bottom: 0,
                              left: "14px",
                              right: "14px",
                              height: "2.5px",
                              backgroundColor: "#0066f5",
                              borderRadius: "2px 2px 0 0",
                            }}
                          />
                        )}
                      </button>

                      {/* Razorpay-Style 4-Column Mega Menu Dropdown */}
                      {activeMegaMenu === "services" && (
                        <div
                          style={{
                            position: "absolute",
                            top: "100%",
                            left: "-180px",
                            width: "920px",
                            backgroundColor: "#ffffff",
                            border: "1px solid #e2edfd",
                            borderRadius: "12px",
                            boxShadow: "0 25px 60px -10px rgba(12, 35, 64, 0.14), 0 0 1px 1px rgba(0, 102, 245, 0.06)",
                            padding: "24px 28px 18px",
                            zIndex: 1000,
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
                                    color: "#64748b",
                                    letterSpacing: "0.06em",
                                    marginBottom: "12px",
                                    paddingBottom: "6px",
                                    borderBottom: "1px solid #f1f5f9",
                                  }}
                                >
                                  {col.category}
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                  {col.items.map((srv, sIdx) => {
                                    const IconComponent = srv.icon;
                                    return (
                                      <Link
                                        key={sIdx}
                                        href={srv.href}
                                        onClick={() => setActiveMegaMenu(null)}
                                        style={{
                                          display: "flex",
                                          alignItems: "flex-start",
                                          gap: "10px",
                                          padding: "8px 10px",
                                          borderRadius: "8px",
                                          textDecoration: "none",
                                          transition: "all 0.15s ease",
                                        }}
                                        className="rzp-menu-item"
                                      >
                                        <div
                                          style={{
                                            padding: "6px",
                                            borderRadius: "6px",
                                            backgroundColor: "#eff6ff",
                                            color: "#0066f5",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                            marginTop: "2px",
                                          }}
                                        >
                                          <IconComponent size={15} />
                                        </div>
                                        <div>
                                          <div
                                            style={{
                                              color: "#0c2340",
                                              fontWeight: 600,
                                              fontSize: "0.86rem",
                                              lineHeight: "1.25",
                                            }}
                                            className="rzp-menu-title"
                                          >
                                            {srv.title}
                                          </div>
                                          <div
                                            style={{
                                              color: "#64748b",
                                              fontSize: "0.74rem",
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

                          {/* Mega Menu Footer Banner (Razorpay style) */}
                          <div
                            style={{
                              borderTop: "1px solid #f1f5f9",
                              paddingTop: "14px",
                              marginTop: "6px",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              backgroundColor: "#f8fafc",
                              margin: "0 -28px -18px",
                              padding: "12px 28px",
                              borderRadius: "0 0 12px 12px",
                            }}
                          >
                            <span style={{ fontSize: "0.82rem", color: "#475569" }}>
                              Looking for custom company structures, agreements, or NGO filings?
                            </span>
                            <Link
                              href="/services"
                              onClick={() => setActiveMegaMenu(null)}
                              style={{
                                color: "#0066f5",
                                fontSize: "0.85rem",
                                fontWeight: 700,
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                textDecoration: "none",
                              }}
                            >
                              <span>Explore All 40+ Corporate Services</span>
                              <ArrowRight size={14} />
                            </Link>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                }

                return (
                  <li
                    key={item.href}
                    style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}
                  >
                    <Link
                      href={item.href}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "0 12px",
                        height: "100%",
                        fontSize: "0.88rem",
                        fontWeight: 500,
                        color: active ? "#0066f5" : "#334155",
                        textDecoration: "none",
                        position: "relative",
                        transition: "color 0.15s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#0066f5";
                      }}
                      onMouseLeave={(e) => {
                        if (!active) e.currentTarget.style.color = "#334155";
                      }}
                    >
                      <span>{item.label}</span>

                      {/* Active Underline */}
                      {active && (
                        <span
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: "12px",
                            right: "12px",
                            height: "2px",
                            backgroundColor: "#0066f5",
                            borderRadius: "2px 2px 0 0",
                          }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop Right Actions (Global Clean Standard) */}
          <div
            style={{ display: "none", alignItems: "center", gap: "10px" }}
            className="desktop-actions"
          >
            {/* MCA Status Indicator */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.76rem",
                color: "#059669",
                fontWeight: 600,
                backgroundColor: "#ecfdf5",
                border: "1px solid #a7f3d0",
                padding: "4px 10px",
                borderRadius: "9999px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  display: "inline-block",
                  boxShadow: "0 0 6px rgba(16, 185, 129, 0.6)",
                }}
              />
              <span>MCA Verified</span>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="btn-electric-blue"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 18px",
                fontSize: "0.86rem",
                fontWeight: 600,
                borderRadius: "6px",
                boxShadow: "0 2px 8px rgba(0, 102, 245, 0.25)",
              }}
            >
              <span>Request Consultation</span>
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
              border: "1px solid #dbe3ee",
              borderRadius: "6px",
              color: "#0c2340",
              cursor: "pointer",
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: "#ffffff",
              borderTop: "1px solid #e8edf5",
              padding: "18px 20px 28px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: "10px 14px",
                  fontSize: "0.96rem",
                  fontWeight: 600,
                  borderRadius: "6px",
                  color: isActive(item.href) ? "#0066f5" : "#0c2340",
                  backgroundColor: isActive(item.href) ? "#eff6ff" : "transparent",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ))}

            <div
              style={{
                paddingTop: "16px",
                borderTop: "1px solid #e8edf5",
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
                className="btn-electric-blue"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "12px",
                }}
              >
                <span>Request Consultation</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceTitle="General Business Consulting"
      />

      <style jsx>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: block !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        :global(.rzp-menu-item:hover) {
          background-color: #f8faff !important;
        }
        :global(.rzp-menu-item:hover .rzp-menu-title) {
          color: #0066f5 !important;
        }
      `}</style>
    </>
  );
}
