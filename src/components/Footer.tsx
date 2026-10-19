import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Clock, MapPin, ShieldAlert, PhoneCall } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer
      style={{
        backgroundColor: "#f4f7fb",
        borderTop: "1px solid #e2edfd",
        color: "#515978",
        fontSize: "0.9rem",
        marginTop: "auto",
      }}
    >
      {/* Top Banner / Consulting Clarification */}
      <div
        style={{
          borderBottom: "1px solid #e8edf5",
          padding: "18px 0",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
          <div style={{ color: "#d97706", display: "flex", alignItems: "center", gap: "8px", fontWeight: 700 }}>
            <ShieldAlert size={18} />
            <span style={{ textTransform: "uppercase", letterSpacing: "0.06em", fontSize: "0.78rem" }}>Important Legal Disclosure</span>
          </div>
          <p style={{ color: "#515978", fontSize: "0.84rem", flex: 1, margin: 0, minWidth: "280px", lineHeight: "1.6" }}>
            Corpunex is an independent business consulting firm and is not affiliated with any government agency or ministry. Registrations and approvals are granted exclusively by statutory authorities (such as MCA, GSTN, DPIIT, and the Trademark Registry). Advisory requiring statutory certification is coordinated through qualified independent Chartered Accountants, Company Secretaries, and Advocates.
          </p>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container" style={{ padding: "64px 24px 48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
          }}
        >
          {/* Col 1: Brand & Overview */}
          <div style={{ maxWidth: "340px" }}>
            <Link href="/" style={{ display: "inline-block", marginBottom: "18px" }}>
              <Image
                src="/corpunex-logo-dark.png"
                alt="Corpunex"
                width={200}
                height={24}
                style={{
                  width: "auto",
                  height: "26px",
                  objectFit: "contain",
                }}
              />
            </Link>
            <p style={{ color: "#515978", fontSize: "0.88rem", lineHeight: "1.65", marginBottom: "20px" }}>
              Helping Indian entrepreneurs, startups, and growing enterprises with company registration, taxation, operating licences, intellectual property, and recurring corporate compliance.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.86rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#0c2340" }}>
                <Mail size={16} style={{ color: "#0b72e7" }} />
                <a href="mailto:contact@corpunex.com" style={{ color: "#0b72e7", fontWeight: 700 }}>contact@corpunex.com</a>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#0c2340" }}>
                <MapPin size={16} style={{ color: "#0b72e7", marginTop: "2px" }} />
                <span>Bhubaneswar, Odisha & New Delhi, India</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#0c2340" }}>
                <Clock size={16} style={{ color: "#0b72e7" }} />
                <span>Mon - Sat: 9:30 AM - 6:30 PM IST</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services 1 */}
          <div>
            <h4 style={{ color: "#0c2340", fontSize: "0.92rem", fontWeight: 800, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Business & Startup
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link href="/services/business-registration" className="footer-link">
                  Business Registration Hub
                </Link>
              </li>
              <li>
                <Link href="/services/business-registration/private-limited-company" className="footer-link">
                  Private Limited Company
                </Link>
              </li>
              <li>
                <Link href="/services/business-registration/llp-registration" className="footer-link">
                  Limited Liability Partnership (LLP)
                </Link>
              </li>
              <li>
                <Link href="/services/business-registration/one-person-company" className="footer-link">
                  One Person Company (OPC)
                </Link>
              </li>
              <li>
                <Link href="/services/startup-services" className="footer-link">
                  Startup Registration & Support
                </Link>
              </li>
              <li>
                <Link href="/services/startup-services/startup-india-recognition" className="footer-link">
                  Startup India DPIIT Recognition
                </Link>
              </li>
              <li>
                <Link href="/services/startup-services/startup-odisha" className="footer-link">
                  Startup Odisha Programme
                </Link>
              </li>
              <li>
                <Link href="/services/startup-services/udyam-msme-registration" className="footer-link">
                  Udyam / MSME Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services 2 */}
          <div>
            <h4 style={{ color: "#0c2340", fontSize: "0.92rem", fontWeight: 800, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Tax, IP & Compliance
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link href="/services/gst-taxation" className="footer-link">
                  GST & Taxation Hub
                </Link>
              </li>
              <li>
                <Link href="/services/gst-taxation/gst-registration" className="footer-link">
                  GST Registration & Returns
                </Link>
              </li>
              <li>
                <Link href="/services/gst-taxation/income-tax-filing" className="footer-link">
                  Income Tax Return Filing
                </Link>
              </li>
              <li>
                <Link href="/services/trademark-ip" className="footer-link">
                  Trademark & Intellectual Property
                </Link>
              </li>
              <li>
                <Link href="/services/corporate-compliance" className="footer-link">
                  Corporate Compliance & ROC
                </Link>
              </li>
              <li>
                <Link href="/services/licences-registrations" className="footer-link">
                  Business Licences (FSSAI / IEC)
                </Link>
              </li>
              <li>
                <Link href="/services/accounting-bookkeeping" className="footer-link">
                  Accounting & Bookkeeping
                </Link>
              </li>
              <li>
                <Link href="/services/legal-documentation" className="footer-link">
                  Legal Contracts & Agreements
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Legal */}
          <div>
            <h4 style={{ color: "#0c2340", fontSize: "0.92rem", fontWeight: 800, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Company & Legal
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link href="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/resources" className="footer-link">
                  Resources & Knowledge Hub
                </Link>
              </li>
              <li>
                <Link href="/faq" className="footer-link">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact & Consultation
                </Link>
              </li>
              <li style={{ borderTop: "1px solid #e8edf5", margin: "6px 0" }}></li>
              <li>
                <Link href="/privacy-policy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="footer-link">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/service-disclaimer" className="footer-link">
                  Service Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="footer-link">
                  Refund & Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div
        style={{
          borderTop: "1px solid #e8edf5",
          padding: "20px 0",
          backgroundColor: "#ffffff",
          fontSize: "0.82rem",
          color: "#7f8ba4",
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
          <div>
            © {currentYear} Corpunex Consulting Services. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/privacy-policy" style={{ color: "#515978" }}>Privacy</Link>
            <Link href="/terms-and-conditions" style={{ color: "#515978" }}>Terms</Link>
            <Link href="/service-disclaimer" style={{ color: "#515978" }}>Disclaimer</Link>
            <Link href="/refund-policy" style={{ color: "#515978" }}>Refund Policy</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
