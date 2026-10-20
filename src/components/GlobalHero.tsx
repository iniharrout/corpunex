"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Building2,
  Rocket,
  Receipt,
  Award,
  Calculator,
  Search,
  Star,
  Users,
  Check,
  FileCheck,
  Sparkles,
} from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export default function GlobalHero() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Private Limited Company Registration");
  const [searchIntent, setSearchIntent] = useState("");

  const popularSearches = [
    { label: "Private Limited Company", service: "Private Limited Company Setup", icon: Building2 },
    { label: "GST Registration & Returns", service: "GST Registration & Filing", icon: Receipt },
    { label: "Startup India 80-IAC Tax Exemption", service: "Startup India Recognition", icon: Rocket },
    { label: "Trademark Brand Name", service: "Trademark Registration", icon: Award },
    { label: "Calculate State Govt Fees", href: "#calculator", icon: Calculator },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchIntent.trim()) {
      setSelectedService(`Consultation for: ${searchIntent}`);
    }
    setConsultModalOpen(true);
  };

  const handleQuickSelect = (item: (typeof popularSearches)[0]) => {
    if (item.href) {
      const el = document.querySelector(item.href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (item.service) {
      setSelectedService(item.service);
      setConsultModalOpen(true);
    }
  };

  return (
    <>
      <section
        style={{
          position: "relative",
          backgroundColor: "#FFFFFF",
          padding: "56px 0 68px",
          borderBottom: "1px solid #DADCE0",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "48px",
              alignItems: "center",
            }}
          >
            {/* Left Column: Clean Google-Style Typography & Intent */}
            <div>
              {/* Google Pill Announcement */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "5px 14px",
                  backgroundColor: "#E8F0FE",
                  border: "1px solid #D2E3FC",
                  borderRadius: "9999px",
                  fontSize: "0.80rem",
                  fontWeight: 500,
                  color: "#1A73E8",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#1A73E8",
                    color: "#FFFFFF",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    padding: "2px 7px",
                    borderRadius: "9999px",
                  }}
                >
                  NEW
                </span>
                <span>Fast-track 6-day SPICe+ MCA company incorporation</span>
                <ArrowRight size={13} />
              </div>

              {/* Headline — Google Sans Inspired, Crisp & Authoritative */}
              <h1
                style={{
                  fontSize: "clamp(2.4rem, 4.4vw, 3.6rem)",
                  lineHeight: "1.16",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  color: "#202124",
                  marginBottom: "18px",
                }}
              >
                Start, protect, and grow your company in India.
              </h1>

              {/* Subheadline — Written with Google Clarity */}
              <p
                style={{
                  fontSize: "1.08rem",
                  color: "#5F6368",
                  lineHeight: "1.65",
                  marginBottom: "28px",
                  maxWidth: "540px",
                }}
              >
                The unified platform for company incorporation, GST filings, and Startup India 80-IAC tax exemptions. Complete government fee transparency, dedicated Chartered Accountants, and zero paperwork confusion.
              </p>

              {/* Action Buttons: Google Blue Pill + Outlined Pill */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  flexWrap: "wrap",
                  marginBottom: "32px",
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setSelectedService("Private Limited Company Registration");
                    setConsultModalOpen(true);
                  }}
                  className="btn-google-primary"
                  style={{
                    padding: "13px 28px",
                    fontSize: "0.98rem",
                  }}
                >
                  <span>Start Registration Free</span>
                  <ArrowRight size={16} />
                </button>

                <a
                  href="#calculator"
                  className="btn-google-secondary"
                  style={{
                    padding: "12px 24px",
                    fontSize: "0.98rem",
                  }}
                >
                  <Calculator size={16} style={{ color: "#1A73E8" }} />
                  <span>Calculate State Govt Fees</span>
                </a>
              </div>

              {/* Google Omnibar Search: What are you looking to do? */}
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #DADCE0",
                  borderRadius: "20px",
                  padding: "16px 18px",
                  boxShadow: "0 1px 6px rgba(32,33,36,0.14)",
                  maxWidth: "540px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.74rem",
                    fontWeight: 600,
                    color: "#5F6368",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "10px",
                  }}
                >
                  What would you like to do today?
                </div>

                <form
                  onSubmit={handleSearchSubmit}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor: "#F8F9FA",
                    border: "1px solid #DADCE0",
                    borderRadius: "9999px",
                    padding: "6px 8px 6px 16px",
                    marginBottom: "12px",
                  }}
                >
                  <Search size={16} style={{ color: "#5F6368", flexShrink: 0 }} />
                  <input
                    type="text"
                    placeholder="e.g. Register a Private Limited, get GST number, file trademark..."
                    value={searchIntent}
                    onChange={(e) => setSearchIntent(e.target.value)}
                    style={{
                      flex: 1,
                      border: "none",
                      outline: "none",
                      fontSize: "0.88rem",
                      color: "#202124",
                      backgroundColor: "transparent",
                    }}
                    aria-label="Search what you want to do"
                  />
                  <button
                    type="submit"
                    className="btn-google-primary"
                    style={{
                      padding: "6px 16px",
                      fontSize: "0.82rem",
                    }}
                  >
                    Search
                  </button>
                </form>

                {/* Popular Google-Style Filter Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {popularSearches.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleQuickSelect(item)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.76rem",
                        fontWeight: 500,
                        color: "#3C4043",
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #DADCE0",
                        padding: "5px 11px",
                        borderRadius: "9999px",
                        cursor: "pointer",
                        transition: "all 0.15s ease",
                      }}
                      className="hover-google-chip"
                    >
                      <item.icon size={12} style={{ color: "#1A73E8" }} />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Three Google Green Checkmarks */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  flexWrap: "wrap",
                  fontSize: "0.84rem",
                  color: "#3C4043",
                  fontWeight: 500,
                  marginTop: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <CheckCircle2 size={16} style={{ color: "#1E8E3E" }} />
                  <span>100% Online &amp; Paperless</span>
                </div>
                <span>•</span>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <CheckCircle2 size={16} style={{ color: "#1E8E3E" }} />
                  <span>Official Government Receipts</span>
                </div>
                <span>•</span>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <CheckCircle2 size={16} style={{ color: "#1E8E3E" }} />
                  <span>Dedicated CA &amp; Legal Advisor</span>
                </div>
              </div>
            </div>

            {/* Right Column: Google Cloud Console Style Live Tracker + Founder Photo */}
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "520px",
                }}
              >
                {/* Main Interactive Google Console Card */}
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    border: "1px solid #DADCE0",
                    boxShadow: "0 4px 20px 0 rgba(60,64,67,0.15)",
                    overflow: "hidden",
                  }}
                >
                  {/* Console Header Bar */}
                  <div
                    style={{
                      backgroundColor: "#F8F9FA",
                      borderBottom: "1px solid #DADCE0",
                      padding: "12px 18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#EA4335" }} />
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FBBC05" }} />
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#34A853" }} />
                      <span style={{ fontSize: "0.76rem", color: "#5F6368", fontWeight: 500, marginLeft: "6px" }}>
                        Corpunex Cloud • Corporate Governance Workspace
                      </span>
                    </div>
                    <span
                      style={{
                        backgroundColor: "#E6F4EA",
                        color: "#1E8E3E",
                        fontSize: "0.70rem",
                        fontWeight: 600,
                        padding: "2px 8px",
                        borderRadius: "9999px",
                      }}
                    >
                      ● Live Sync
                    </span>
                  </div>

                  {/* Active Company Status Header */}
                  <div style={{ padding: "20px 22px 16px", borderBottom: "1px solid #F1F3F4" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                      <div>
                        <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#202124" }}>
                          Nexus Health Technologies Pvt. Ltd.
                        </div>
                        <div style={{ fontSize: "0.78rem", color: "#5F6368" }}>
                          CIN: U72200DL2024PTC389201 • RoC Delhi
                        </div>
                      </div>
                      <span
                        style={{
                          backgroundColor: "#E8F0FE",
                          color: "#1A73E8",
                          fontWeight: 600,
                          fontSize: "0.75rem",
                          padding: "4px 10px",
                          borderRadius: "9999px",
                        }}
                      >
                        SPICe+ Certified
                      </span>
                    </div>
                  </div>

                  {/* Live 4-Step Pipeline Tracker */}
                  <div style={{ padding: "18px 22px" }}>
                    <div
                      style={{
                        fontSize: "0.74rem",
                        fontWeight: 600,
                        color: "#5F6368",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginBottom: "14px",
                      }}
                    >
                      Incorporation Milestones
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {[
                        { step: "RUN Name Reservation", status: "Approved by MCA", done: true, time: "Day 1" },
                        { step: "Class-3 DSC & DIN Issuance", status: "2 Directors Registered", done: true, time: "Day 2" },
                        { step: "SPICe+ Incorporation Form", status: "Approved with MoA & AoA", done: true, time: "Day 5" },
                        { step: "PAN, TAN & Corporate Bank Account", status: "Delivered & Active", done: true, time: "Day 6" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "8px 12px",
                            backgroundColor: "#F8F9FA",
                            borderRadius: "8px",
                            border: "1px solid #E8EAED",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <div
                              style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                backgroundColor: "#1E8E3E",
                                color: "#FFFFFF",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                              }}
                            >
                              <Check size={12} strokeWidth={3} />
                            </div>
                            <div>
                              <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#202124" }}>
                                {item.step}
                              </div>
                              <div style={{ fontSize: "0.70rem", color: "#5F6368" }}>
                                {item.status}
                              </div>
                            </div>
                          </div>
                          <span style={{ fontSize: "0.72rem", color: "#1A73E8", fontWeight: 600 }}>
                            {item.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Real Founder Photo Banner at the bottom of the card */}
                  <div
                    style={{
                      position: "relative",
                      height: "140px",
                      borderTop: "1px solid #DADCE0",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src="/images/founders-meeting.jpg"
                      alt="Indian founders meeting and celebrating company registration"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(32,33,36,0.2) 0%, rgba(32,33,36,0.75) 100%)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "14px",
                        right: "14px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      <div style={{ fontSize: "0.78rem", fontWeight: 600 }}>
                        Real Founders • Real MCA Registrations
                      </div>
                      <span
                        style={{
                          backgroundColor: "#FFFFFF",
                          color: "#1A73E8",
                          fontSize: "0.70rem",
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: "9999px",
                        }}
                      >
                        Verified Client
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Animated Badge: Top Right (Government Compliance Verified) */}
                <div
                  className="animate-float-slow"
                  style={{
                    position: "absolute",
                    top: "-18px",
                    right: "-12px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "14px",
                    padding: "10px 16px",
                    boxShadow: "0 4px 16px 0 rgba(60,64,67,0.18)",
                    border: "1px solid #DADCE0",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      backgroundColor: "#E6F4EA",
                      color: "#1E8E3E",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#202124" }}>
                      MCA SPICe+ Approved
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "#5F6368" }}>
                      Direct Registrar Integration
                    </div>
                  </div>
                </div>

                {/* Floating Animated Badge: Bottom Left (CA Advisory Assigned) */}
                <div
                  className="animate-float-reverse"
                  style={{
                    position: "absolute",
                    bottom: "28px",
                    left: "-18px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "14px",
                    padding: "10px 16px",
                    boxShadow: "0 4px 16px 0 rgba(60,64,67,0.18)",
                    border: "1px solid #DADCE0",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      backgroundColor: "#E8F0FE",
                      color: "#1A73E8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#202124" }}>
                      Dedicated Chartered Accountant
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "#5F6368" }}>
                      Zero Hidden Government Markups
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
        serviceTitle={selectedService}
      />

      <style jsx>{`
        :global(.hover-google-chip:hover) {
          border-color: #1A73E8 !important;
          color: #1A73E8 !important;
          background-color: #E8F0FE !important;
        }
      `}</style>
    </>
  );
}
