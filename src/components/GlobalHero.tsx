"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Building2,
  Rocket,
  Scale,
  Receipt,
  Sparkles,
  ChevronRight,
  Clock,
  FileCheck,
  Award,
  Zap,
} from "lucide-react";
import ConsultationModal from "./ConsultationModal";

interface EntityTab {
  id: "pvt-ltd" | "startup-india" | "llp" | "gst";
  label: string;
  badge: string;
  entityName: string;
  regDetails: string;
  statusBadge: string;
  turnaround: string;
  receiptStatus: string;
  deliverables: { text: string; tag: string }[];
  targetHref: string;
  ctaText: string;
}

export default function GlobalHero() {
  const [activeTabId, setActiveTabId] = useState<EntityTab["id"]>("pvt-ltd");
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [quickInput, setQuickInput] = useState("");

  const tabs: Record<EntityTab["id"], EntityTab> = {
    "pvt-ltd": {
      id: "pvt-ltd",
      label: "Private Limited",
      badge: "SPICe+ Fast-Track",
      entityName: "KRONOS TECHNOLOGIES PVT. LTD.",
      regDetails: "CIN: U72900DL2024PTC39281 • ROC Delhi",
      statusBadge: "MCA SPICe+ Certified",
      turnaround: "6–8 Business Days",
      receiptStatus: "100% Itemized Govt Receipt",
      deliverables: [
        { text: "Company Name Reservation (RUN Portal)", tag: "Approved" },
        { text: "Class-3 Digital Signatures (DSC) for all Directors", tag: "Issued" },
        { text: "MoA & AoA Drafting with SPICe+ Part A & B Filing", tag: "CA Verified" },
        { text: "PAN, TAN, EPFO, ESIC & Corporate Bank Account", tag: "Activated" },
      ],
      targetHref: "/services/business-registration/private-limited-company",
      ctaText: "Incorporate Private Limited →",
    },
    "startup-india": {
      id: "startup-india",
      label: "Startup India (DPIIT)",
      badge: "Govt Certified",
      entityName: "DPIIT FLAGSHIP RECOGNITION",
      regDetails: "Dept for Promotion of Industry and Internal Trade",
      statusBadge: "Official DPIIT Certified",
      turnaround: "10–14 Business Days",
      receiptStatus: "Official Govt Certificate",
      deliverables: [
        { text: "3-Year 100% Corporate Income Tax Holiday (Sec 80-IAC)", tag: "Eligible" },
        { text: "80% Patent & 50% Trademark Official Govt Fee Subsidy", tag: "Activated" },
        { text: "Self-Certification Compliance under 9 Labour & Env Laws", tag: "Compliant" },
        { text: "Fast-Track Public Procurement & EMD Exemption", tag: "Enabled" },
      ],
      targetHref: "/services/startup-services/startup-india-recognition",
      ctaText: "Get Startup India Recognition →",
    },
    llp: {
      id: "llp",
      label: "LLP Registration",
      badge: "Limited Liability",
      entityName: "STRATA ADVISORY LLP",
      regDetails: "LLPIN: ABC-1234 • Ministry of Corporate Affairs",
      statusBadge: "MCA FiLLiP Approved",
      turnaround: "7–9 Business Days",
      receiptStatus: "100% Itemized Govt Receipt",
      deliverables: [
        { text: "FiLLiP Electronic Filing & Designated Partner DPIN", tag: "Approved" },
        { text: "Customized Legal LLP Agreement Drafting", tag: "Advocate Signed" },
        { text: "Form 3 MCA Stamp Duty Filing & Portal Verification", tag: "Verified" },
        { text: "PAN & Official Corporate Bank Account Opening", tag: "Ready" },
      ],
      targetHref: "/services/business-registration/llp-registration",
      ctaText: "Register Your LLP →",
    },
    gst: {
      id: "gst",
      label: "GST & Compliance",
      badge: "Zero Default",
      entityName: "STATUTORY CORPORATE COMPLIANCE",
      regDetails: "GSTN Portal • Ministry of Corporate Affairs",
      statusBadge: "Active Zero-Default",
      turnaround: "Continuous Filing",
      receiptStatus: "Official ARN & Challans",
      deliverables: [
        { text: "State-wise GSTIN Registration & Portal Authentication", tag: "Active" },
        { text: "Monthly GSTR-1, 3B & Input Tax Credit (ITC) Reconciliation", tag: "Automated" },
        { text: "Annual ROC Filings (Form AOC-4, MGT-7) & Director KYC", tag: "Up to Date" },
        { text: "Statutory Financial Balance Sheet CA Tax Audit", tag: "CA Certified" },
      ],
      targetHref: "/services/gst-taxation/gst-registration",
      ctaText: "Manage GST & Compliance →",
    },
  };

  const current = tabs[activeTabId];

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultModalOpen(true);
  };

  return (
    <>
      <section
        style={{
          position: "relative",
          backgroundColor: "#ffffff",
          padding: "58px 0 48px",
          borderBottom: "1px solid #edf2f7",
          overflow: "hidden",
        }}
      >
        {/* Subtle Ambient Radial Lighting (Pure daylight, zero grid lines) */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "0",
            width: "650px",
            height: "650px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 102, 245, 0.06) 0%, rgba(56, 189, 248, 0.03) 50%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 212, 255, 0.04) 0%, transparent 65%)",
            filter: "blur(50px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
          aria-hidden="true"
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "48px",
              alignItems: "center",
            }}
          >
            {/* Left Column: World-Class Corporate Copy */}
            <div>
              {/* Prestigious Tag */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "4px 12px",
                  backgroundColor: "#eff6ff",
                  border: "1px solid #dbeafe",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "#0066f5",
                  marginBottom: "18px",
                }}
              >
                <ShieldCheck size={14} style={{ color: "#0066f5" }} />
                <span>MCA SPICe+ Integrated • Certified Corporate Advisory</span>
              </div>

              {/* Authoritative Global Headline */}
              <h1
                style={{
                  fontSize: "clamp(2.3rem, 4vw, 3.5rem)",
                  lineHeight: "1.14",
                  fontWeight: 800,
                  letterSpacing: "-0.035em",
                  color: "#0c2340",
                  marginBottom: "18px",
                }}
              >
                The corporate platform for{" "}
                <span style={{ color: "#0066f5" }}>ambitious companies.</span>
              </h1>

              {/* High-Clarity Value Proposition */}
              <p
                style={{
                  fontSize: "1.06rem",
                  color: "#475569",
                  lineHeight: "1.65",
                  marginBottom: "26px",
                  fontWeight: 400,
                  maxWidth: "530px",
                }}
              >
                Corpunex unifies company incorporation, Startup India DPIIT recognition, GST taxation, and statutory ROC filings into one transparent platform. Backed by certified corporate advocates and CAs with 100% itemized government receipts.
              </p>

              {/* Quick Start Input Bar (Stripe / Mercury Global Standard) */}
              <form
                onSubmit={handleQuickSubmit}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  maxWidth: "490px",
                  backgroundColor: "#ffffff",
                  padding: "5px 6px 5px 14px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  boxShadow: "0 2px 8px rgba(12, 35, 64, 0.05)",
                  marginBottom: "20px",
                  transition: "border-color 0.15s ease",
                }}
              >
                <input
                  type="text"
                  placeholder="Enter proposed company name or work email..."
                  value={quickInput}
                  onChange={(e) => setQuickInput(e.target.value)}
                  style={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    fontSize: "0.88rem",
                    color: "#0c2340",
                    backgroundColor: "transparent",
                  }}
                  aria-label="Proposed company name or work email"
                />
                <button
                  type="submit"
                  className="btn-electric-blue"
                  style={{
                    padding: "9px 18px",
                    fontSize: "0.86rem",
                    fontWeight: 600,
                    borderRadius: "6px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>Start Now</span>
                  <ArrowRight size={14} />
                </button>
              </form>

              {/* Trust Checkmarks: Crisp Single Line */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  flexWrap: "wrap",
                  fontSize: "0.82rem",
                  color: "#475569",
                  fontWeight: 500,
                  marginBottom: "20px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <CheckCircle2 size={15} style={{ color: "#0066f5" }} />
                  <span>6–8 Days Fast-Track</span>
                </div>
                <span style={{ color: "#cbd5e1" }}>•</span>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <CheckCircle2 size={15} style={{ color: "#0066f5" }} />
                  <span>100% Itemized Govt Receipts</span>
                </div>
                <span style={{ color: "#cbd5e1" }}>•</span>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <CheckCircle2 size={15} style={{ color: "#0066f5" }} />
                  <span>Dedicated CA & Legal Advisor</span>
                </div>
              </div>

              {/* Social Proof Strip */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "6px 12px",
                  backgroundColor: "#f8fafc",
                  borderRadius: "6px",
                  border: "1px solid #e2e8f0",
                  fontSize: "0.8rem",
                }}
              >
                <span style={{ color: "#f59e0b" }}>★★★★★</span>
                <span style={{ fontWeight: 700, color: "#0c2340" }}>4.9/5 Rating</span>
                <span style={{ color: "#64748b" }}>from 1,200+ founders across India</span>
              </div>
            </div>

            {/* Right Column: Global-Standard Interactive Corporate Cockpit */}
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "480px",
                  borderRadius: "14px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 20px 45px -10px rgba(12, 35, 64, 0.09), 0 0 0 1px #e2edfd",
                  overflow: "hidden",
                }}
              >
                {/* Cockpit Top Segmented Controller */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    backgroundColor: "#f8faff",
                    borderBottom: "1px solid #e8edf5",
                    padding: "6px",
                    gap: "4px",
                  }}
                  role="tablist"
                  aria-label="Corporate Service Selector"
                >
                  {(Object.keys(tabs) as EntityTab["id"][]).map((tabId) => {
                    const tab = tabs[tabId];
                    const isActive = activeTabId === tabId;
                    return (
                      <button
                        key={tabId}
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveTabId(tabId)}
                        style={{
                          padding: "7px 6px",
                          fontSize: "0.76rem",
                          fontWeight: isActive ? 700 : 500,
                          color: isActive ? "#0066f5" : "#64748b",
                          backgroundColor: isActive ? "#ffffff" : "transparent",
                          border: isActive ? "1px solid #dbeafe" : "1px solid transparent",
                          borderRadius: "6px",
                          boxShadow: isActive ? "0 1px 3px rgba(0, 102, 245, 0.08)" : "none",
                          cursor: "pointer",
                          transition: "all 0.15s ease",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {/* Cockpit Body */}
                <div style={{ padding: "20px 22px" }}>
                  {/* Entity Header Banner */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "14px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "0.96rem",
                          fontWeight: 800,
                          color: "#0c2340",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {current.entityName}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "2px" }}>
                        {current.regDetails}
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: "#059669",
                        fontWeight: 600,
                        backgroundColor: "#ecfdf5",
                        border: "1px solid #a7f3d0",
                        padding: "3px 9px",
                        borderRadius: "9999px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {current.statusBadge}
                    </span>
                  </div>

                  {/* Clean Deliverables Pipeline */}
                  <div
                    style={{
                      borderTop: "1px solid #f1f5f9",
                      paddingTop: "12px",
                      marginBottom: "16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "9px",
                    }}
                  >
                    {current.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          fontSize: "0.82rem",
                          gap: "8px",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#1e293b" }}>
                          <CheckCircle2 size={15} style={{ color: "#0066f5", flexShrink: 0 }} />
                          <span style={{ lineHeight: 1.3 }}>{item.text}</span>
                        </div>
                        <span
                          style={{
                            fontSize: "0.72rem",
                            color: "#059669",
                            fontWeight: 600,
                            backgroundColor: "#f0fdf4",
                            padding: "2px 7px",
                            borderRadius: "4px",
                            flexShrink: 0,
                          }}
                        >
                          {item.tag}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Fee & Timeline Transparency Row */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                      padding: "10px 14px",
                      backgroundColor: "#f8fafc",
                      borderRadius: "8px",
                      border: "1px solid #edf2f7",
                      marginBottom: "16px",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "0.68rem", color: "#64748b", fontWeight: 600, textTransform: "uppercase" }}>
                        Typical Turnaround
                      </div>
                      <div style={{ fontSize: "0.86rem", fontWeight: 700, color: "#0c2340", marginTop: "1px" }}>
                        {current.turnaround}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.68rem", color: "#64748b", fontWeight: 600, textTransform: "uppercase" }}>
                        Govt Transparency
                      </div>
                      <div style={{ fontSize: "0.86rem", fontWeight: 700, color: "#059669", marginTop: "1px" }}>
                        {current.receiptStatus}
                      </div>
                    </div>
                  </div>

                  {/* Primary CTA Button */}
                  <Link
                    href={current.targetHref}
                    className="btn-electric-blue"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      padding: "10px 16px",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      borderRadius: "6px",
                    }}
                  >
                    <span>{current.ctaText}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Popular Services Row */}
          <div
            style={{
              marginTop: "38px",
              paddingTop: "20px",
              borderTop: "1px solid #f1f5f9",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <span style={{ color: "#64748b", fontWeight: 600, fontSize: "0.82rem" }}>
              Quick Navigation:
            </span>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/services/business-registration/private-limited-company" className="rzp-pill">
                <Building2 size={13} style={{ color: "#0066f5" }} />
                <span>Private Limited</span>
              </Link>
              <Link href="/services/business-registration/llp-registration" className="rzp-pill">
                <Scale size={13} style={{ color: "#0066f5" }} />
                <span>LLP Registration</span>
              </Link>
              <Link href="/services/startup-services/startup-india-recognition" className="rzp-pill">
                <Rocket size={13} style={{ color: "#0066f5" }} />
                <span>Startup India</span>
              </Link>
              <Link href="/services/gst-taxation/gst-registration" className="rzp-pill">
                <Receipt size={13} style={{ color: "#0066f5" }} />
                <span>GST Filing</span>
              </Link>
              <Link href="/services/trademark-ip/trademark-registration" className="rzp-pill">
                <Award size={13} style={{ color: "#0066f5" }} />
                <span>Trademark</span>
              </Link>
              <Link
                href="/services"
                style={{
                  color: "#0066f5",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  marginLeft: "4px",
                }}
              >
                View all 40+ services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
        serviceTitle={current.label}
      />
    </>
  );
}
