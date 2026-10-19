import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  Users2, 
  CheckCircle2, 
  ArrowRight, 
  FileCheck, 
  Layers, 
  Scale,
  Sparkles,
  Zap,
  Building
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import AbstractHeroBackground from "@/components/AbstractHeroBackground";

export const metadata: Metadata = {
  title: "About Us — Purpose, Consulting Scope & Governance | Corpunex",
  description:
    "Learn about Corpunex, India's trusted business consulting firm. Our philosophy, approach to company registrations, tax compliance, and unwavering commitment to transparent advisory.",
};

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      {/* Daylight Subpage Hero */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#ffffff",
          padding: "54px 0 46px",
          borderBottom: "1px solid #edf2f7",
          overflow: "hidden",
        }}
      >
        <AbstractHeroBackground variant="subpage" />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Breadcrumb items={[{ label: "About Us" }]} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "42px",
              alignItems: "center",
            }}
          >
            <div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  backgroundColor: "#eff6ff",
                  color: "#0066f5",
                  border: "1px solid #dbeafe",
                  marginBottom: "14px",
                }}
              >
                Company Overview & Philosophy
              </span>
              <h1
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                  color: "#0c2340",
                  marginBottom: "16px",
                  lineHeight: "1.15",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                }}
              >
                Navigating Indian corporate law with{" "}
                <span style={{ color: "#0066f5" }}>clarity & precision.</span>
              </h1>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#475569",
                  lineHeight: "1.65",
                  marginBottom: "26px",
                  fontWeight: 400,
                }}
              >
                Corpunex is a premier business consulting and corporate facilitation company in India. We assist entrepreneurs, startups, founders, and established enterprises with the registrations, documentation, taxation, and statutory compliance required to operate with confidence.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                <Link
                  href="/services"
                  className="btn-electric-blue"
                >
                  <span>Explore Consulting Services</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/contact"
                  className="btn-uipath-outline"
                >
                  <span>Contact Our Advisors</span>
                </Link>
              </div>
            </div>

            {/* Visual Image */}
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 102, 245, 0.25)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
              }}
            >
              <Image
                src="/images/founders-meeting.jpg"
                alt="Corpunex consulting team discussing client company incorporation"
                width={600}
                height={450}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section style={{ padding: "72px 0" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
          
          {/* 1. Company Overview & Mission */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px", alignItems: "stretch" }}>
            <div className="rzp-card" style={{ padding: "40px 36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#0b72e7", marginBottom: "16px" }}>
                <Compass size={24} />
                <h2 style={{ fontSize: "1.45rem", color: "#0c2340", fontWeight: 800, margin: 0 }}>Company Overview</h2>
              </div>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75", marginBottom: "16px" }}>
                Establishing and operating a lawful commercial enterprise in India requires navigating interconnected municipal, state, and central government regulations. Between company registration, state municipal shop acts, GST filings, and annual secretarial governance, founders often confront opaque procedures and unforeseen delays.
              </p>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75", margin: 0 }}>
                Corpunex functions as an organized consulting partner. We bridge the gap between complex statutory mandates and commercial realities, providing founders with structured checklists, vetted documentation, and end-to-end guidance.
              </p>
            </div>

            <div className="rzp-card" style={{ padding: "40px 36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#00b574", marginBottom: "16px" }}>
                <Target size={24} />
                <h2 style={{ fontSize: "1.45rem", color: "#0c2340", fontWeight: 800, margin: 0 }}>Our Mission</h2>
              </div>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75", marginBottom: "16px" }}>
                Our mission is to simplify corporate compliance and business facilitation for Indian enterprises through unwavering procedural clarity, transparent fee structures, and professional integrity.
              </p>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75", margin: 0 }}>
                We believe founders should be able to focus entirely on product development, team building, and revenue generation, secure in the knowledge that their corporate identity, statutory filings, and legal hygiene are managed meticulously.
              </p>
            </div>
          </div>

          {/* 2. Services & Expertise Areas */}
          <div>
            <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 40px" }}>
              <span className="badge badge-blue" style={{ marginBottom: "10px" }}>Core Competencies</span>
              <h2 style={{ fontSize: "2.1rem", color: "#0c2340", marginBottom: "12px", fontWeight: 800, letterSpacing: "-0.02em" }}>
                Consulting & Facilitation Scope
              </h2>
              <p style={{ color: "#515978", fontSize: "1rem" }}>
                Our consulting scope spans the entire commercial lifecycle of an Indian enterprise:
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
              {[
                { title: "Business Registration", desc: "Private Limited, LLP, OPC, Partnership, and Sole Proprietorship setup on the MCA and state portals." },
                { title: "Startup Support", desc: "DPIIT Startup India recognition, Startup Odisha programmes, and MSME Udyam registration." },
                { title: "GST & Taxation", desc: "GST registrations, monthly return filings, TDS compliance, and corporate income tax preparation." },
                { title: "Business Licences", desc: "FSSAI food safety licences, Import Export Code (IEC), and municipal trade/shop registrations." },
                { title: "Trademark & IP", desc: "Brand search, trademark registration under NICE classes, copyright documentation, and opposition support." },
                { title: "Corporate Governance", desc: "Annual ROC filings (AOC-4, MGT-7), director KYC (DIR-3 KYC), board minutes, and secretarial changes." },
                { title: "Bookkeeping & MIS", desc: "Ledger maintenance, GST input tax credit reconciliation, payroll, and statutory audit coordination." },
                { title: "Legal Documentation", desc: "Founders' agreements, NDAs, employment contracts, vendor agreements, and website terms." },
              ].map((item, idx) => (
                <div key={idx} className="rzp-card" style={{ padding: "26px 24px" }}>
                  <h3 style={{ fontSize: "1.1rem", color: "#0c2340", marginBottom: "8px", fontWeight: 800 }}>{item.title}</h3>
                  <p style={{ color: "#515978", fontSize: "0.9rem", lineHeight: "1.6", margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Approach to Customer Support & Transparency */}
          <div
            className="rzp-card"
            style={{
              padding: "0",
              overflow: "hidden",
              backgroundColor: "#ffffff",
              border: "1px solid #d0e2ff",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              alignItems: "stretch",
            }}
          >
            <div style={{ padding: "48px 40px" }}>
              <span className="badge badge-blue" style={{ marginBottom: "12px" }}>Consulting Ethics</span>
              <h2 style={{ fontSize: "1.9rem", color: "#0c2340", marginBottom: "16px", fontWeight: 800, letterSpacing: "-0.02em" }}>
                Commitment to Clarity & Transparency
              </h2>
              <p style={{ color: "#515978", fontSize: "1rem", lineHeight: "1.75", marginBottom: "28px" }}>
                Corpunex was founded on the conviction that consulting relationships must be grounded in total honesty. We do not make exaggerated claims, promise impossible turnaround times, or obscure government duties within undisclosed markups.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}>
                <div style={{ display: "flex", gap: "12px" }}>
                  <CheckCircle2 size={20} style={{ color: "#0b72e7", flexShrink: 0, marginTop: "3px" }} />
                  <div>
                    <h4 style={{ color: "#0c2340", fontSize: "1rem", marginBottom: "4px", fontWeight: 800 }}>Itemized Fee Breakdowns</h4>
                    <p style={{ color: "#515978", fontSize: "0.88rem", lineHeight: "1.55", margin: 0 }}>
                      We explicitly separate statutory government fees and stamp duties from our professional consulting fees.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <CheckCircle2 size={20} style={{ color: "#0b72e7", flexShrink: 0, marginTop: "3px" }} />
                  <div>
                    <h4 style={{ color: "#0c2340", fontSize: "1rem", marginBottom: "4px", fontWeight: 800 }}>No Artificial Guarantees</h4>
                    <p style={{ color: "#515978", fontSize: "0.88rem", lineHeight: "1.55", margin: 0 }}>
                      Statutory approvals depend solely upon government scrutiny. We guarantee thorough, compliant documentation rather than empty shortcuts.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <CheckCircle2 size={20} style={{ color: "#0b72e7", flexShrink: 0, marginTop: "3px" }} />
                  <div>
                    <h4 style={{ color: "#0c2340", fontSize: "1rem", marginBottom: "4px", fontWeight: 800 }}>Dedicated Professional Facilitation</h4>
                    <p style={{ color: "#515978", fontSize: "0.88rem", lineHeight: "1.55", margin: 0 }}>
                      Every client engagement is managed by responsive consulting personnel who understand regulatory mechanics.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ position: "relative", minHeight: "360px", height: "100%", backgroundColor: "#f8fafc" }}>
              <Image
                src="/images/startup-founders.jpg"
                alt="Indian startup founders celebrating successful company incorporation"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* 4. Verified Company Information Notice */}
          <div
            style={{
              padding: "28px 32px",
              backgroundColor: "#f4f8fe",
              border: "1px solid #d0e2ff",
              borderRadius: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#0b72e7", marginBottom: "10px" }}>
              <Scale size={20} />
              <h3 style={{ fontSize: "1.1rem", color: "#0c2340", fontWeight: 800, margin: 0 }}>Corporate Identity & Governance Disclosures</h3>
            </div>
            <p style={{ color: "#515978", fontSize: "0.9rem", lineHeight: "1.7", margin: 0 }}>
              Corpunex operates as a dedicated professional business consulting entity. In accordance with our verification guidelines, specific company incorporation credentials, registered office addresses, and verified director details are maintained and updated as official statutory documentation is finalized. Prospective clients may request formal corporate engagement documentation by contacting our consulting office directly.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
