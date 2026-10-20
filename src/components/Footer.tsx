import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Clock, MapPin, ShieldAlert, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer
      style={{
        backgroundColor: "#F8F9FA",
        borderTop: "1px solid #DADCE0",
        color: "#3C4043",
        fontSize: "0.88rem",
        marginTop: "auto",
      }}
    >
      {/* Top Banner / Google Informational Callout */}
      <div
        style={{
          borderBottom: "1px solid #DADCE0",
          padding: "16px 0",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
          <div style={{ color: "#1A73E8", display: "flex", alignItems: "center", gap: "8px", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            <ShieldAlert size={16} />
            <span>Important Statutory Disclosure</span>
          </div>
          <p style={{ color: "#5F6368", fontSize: "0.82rem", flex: 1, margin: 0, minWidth: "280px", lineHeight: "1.6" }}>
            Corpunex is an independent corporate consulting platform and is not affiliated with any government ministry. Registrations and approvals are granted exclusively by statutory authorities (MCA, GSTN, DPIIT, and the Trademark Registry). Advisory requiring statutory certification is coordinated through qualified independent Chartered Accountants, Company Secretaries, and Advocates.
          </p>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container" style={{ padding: "56px 24px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
          }}
        >
          {/* Col 1: Brand & Overview */}
          <div style={{ maxWidth: "340px" }}>
            <Link href="/" style={{ display: "inline-block", marginBottom: "16px" }}>
              <Image
                src="/corpunex-logo-dark.png"
                alt="Corpunex"
                width={150}
                height={22}
                style={{
                  width: "auto",
                  height: "22px",
                  objectFit: "contain",
                }}
              />
            </Link>
            <p style={{ color: "#5F6368", fontSize: "0.86rem", lineHeight: "1.65", marginBottom: "20px" }}>
              Helping Indian entrepreneurs, startups, and enterprises with fast-track company formation, taxation, intellectual property, and continuous statutory compliance.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.84rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#3C4043" }}>
                <Mail size={15} style={{ color: "#1A73E8" }} />
                <a href="mailto:contact@corpunex.com" style={{ color: "#1A73E8", fontWeight: 500 }}>contact@corpunex.com</a>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#3C4043" }}>
                <MapPin size={15} style={{ color: "#1A73E8", marginTop: "2px" }} />
                <span>Bhubaneswar, Odisha &amp; New Delhi, India</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#3C4043" }}>
                <Clock size={15} style={{ color: "#1A73E8" }} />
                <span>Mon – Sat: 9:30 AM – 6:30 PM IST</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services 1 */}
          <div>
            <h4 style={{ color: "#202124", fontSize: "0.84rem", fontWeight: 700, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Formation &amp; Startup
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link href="/services/business-registration" className="cx-footer-link">
                  Business Registration Hub
                </Link>
              </li>
              <li>
                <Link href="/services/business-registration/private-limited-company" className="cx-footer-link">
                  Private Limited Company
                </Link>
              </li>
              <li>
                <Link href="/services/business-registration/llp-registration" className="cx-footer-link">
                  Limited Liability Partnership (LLP)
                </Link>
              </li>
              <li>
                <Link href="/services/business-registration/one-person-company" className="cx-footer-link">
                  One Person Company (OPC)
                </Link>
              </li>
              <li>
                <Link href="/services/startup-services/startup-india-recognition" className="cx-footer-link">
                  Startup India DPIIT Recognition (80-IAC)
                </Link>
              </li>
              <li>
                <Link href="/services/startup-services/startup-odisha" className="cx-footer-link">
                  Startup Odisha Grants
                </Link>
              </li>
              <li>
                <Link href="/services/startup-services/udyam-msme-registration" className="cx-footer-link">
                  Udyam MSME Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services 2 */}
          <div>
            <h4 style={{ color: "#202124", fontSize: "0.84rem", fontWeight: 700, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Tax, IP &amp; Governance
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link href="/services/gst-taxation" className="cx-footer-link">
                  GST &amp; Taxation Hub
                </Link>
              </li>
              <li>
                <Link href="/services/gst-taxation/gst-registration" className="cx-footer-link">
                  GST Registration &amp; Returns
                </Link>
              </li>
              <li>
                <Link href="/services/gst-taxation/income-tax-filing" className="cx-footer-link">
                  Corporate Income Tax (ITR)
                </Link>
              </li>
              <li>
                <Link href="/services/trademark-ip/trademark-registration" className="cx-footer-link">
                  Trademark &amp; IP Protection
                </Link>
              </li>
              <li>
                <Link href="/services/corporate-compliance/annual-roc-compliance" className="cx-footer-link">
                  Annual ROC Filings (AOC-4, MGT-7)
                </Link>
              </li>
              <li>
                <Link href="/services/licences-registrations/fssai-licence" className="cx-footer-link">
                  FSSAI Food Licence
                </Link>
              </li>
              <li>
                <Link href="/services/licences-registrations/import-export-code" className="cx-footer-link">
                  Import Export Code (IEC)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Legal */}
          <div>
            <h4 style={{ color: "#202124", fontSize: "0.84rem", fontWeight: 700, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Company &amp; Legal
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link href="/about" className="cx-footer-link">
                  About Corpunex
                </Link>
              </li>
              <li>
                <Link href="/resources" className="cx-footer-link">
                  Resources &amp; MCA Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="cx-footer-link">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="cx-footer-link">
                  Contact Advisory Desk
                </Link>
              </li>
              <li style={{ borderTop: "1px solid #DADCE0", margin: "6px 0" }}></li>
              <li>
                <Link href="/privacy-policy" className="cx-footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="cx-footer-link">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/service-disclaimer" className="cx-footer-link">
                  Service Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="cx-footer-link">
                  Refund &amp; Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div
        style={{
          borderTop: "1px solid #DADCE0",
          padding: "20px 0",
          backgroundColor: "#FFFFFF",
          fontSize: "0.80rem",
          color: "#5F6368",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "#3C4043" }}>
              <Globe size={13} style={{ color: "#1A73E8" }} />
              <span>India (English)</span>
            </span>
            <span>•</span>
            <span>© {currentYear} Corpunex Consulting Services. All rights reserved.</span>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/privacy-policy" style={{ color: "#5F6368" }}>Privacy</Link>
            <Link href="/terms-and-conditions" style={{ color: "#5F6368" }}>Terms</Link>
            <Link href="/service-disclaimer" style={{ color: "#5F6368" }}>Disclaimer</Link>
            <Link href="/refund-policy" style={{ color: "#5F6368" }}>Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
