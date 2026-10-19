"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  HelpCircle, 
  Clock, 
  FileText, 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  FileCheck2,
  CalendarCheck2,
  Receipt,
  Headphones,
  PhoneCall,
  Check
} from "lucide-react";
import Breadcrumb from "./Breadcrumb";
import ConsultationForm from "./ConsultationForm";
import FAQAccordion from "./FAQAccordion";
import ConsultationModal from "./ConsultationModal";
import AbstractHeroBackground from "./AbstractHeroBackground";
import { ServiceDetail } from "@/data/servicesData";

interface ServiceDetailTemplateProps {
  service: ServiceDetail;
}

export default function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  const [modalOpen, setModalOpen] = useState(false);

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
          <Breadcrumb
            items={[
              { label: "All Services", href: "/services" },
              { label: service.categoryName, href: `/services/${service.categorySlug}` },
              { label: service.title },
            ]}
          />

          <div style={{ maxWidth: "860px" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "16px", flexWrap: "wrap" }}>
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
                }}
              >
                {service.categoryName}
              </span>
              <span
                style={{
                  fontSize: "0.82rem",
                  color: "#475569",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontWeight: 600,
                  backgroundColor: "#f8fafc",
                  padding: "4px 10px",
                  borderRadius: "9999px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <Clock size={13} style={{ color: "#0066f5" }} />
                <span>{service.timelineNote}</span>
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.2rem, 4.2vw, 3.3rem)",
                color: "#0c2340",
                marginBottom: "14px",
                lineHeight: "1.15",
                letterSpacing: "-0.03em",
                fontWeight: 800,
              }}
            >
              {service.title}
            </h1>

            <p
              style={{
                fontSize: "1.12rem",
                color: "#0066f5",
                fontWeight: 600,
                marginBottom: "14px",
                lineHeight: "1.5",
              }}
            >
              {service.tagline}
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                color: "#475569",
                lineHeight: "1.65",
                marginBottom: "26px",
              }}
            >
              {service.summary}
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
              <button
                onClick={() => setModalOpen(true)}
                className="btn-electric-blue"
              >
                <span>Request an Itemized Quotation</span>
                <ArrowRight size={15} />
              </button>
              <a
                href="#consultation-card"
                className="btn-uipath-outline"
              >
                <span>Enquire Online</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main 2-Column Workspace Layout */}
      <section style={{ padding: "64px 0", backgroundColor: "#ffffff" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "48px",
              alignItems: "flex-start",
            }}
            className="service-workspace-grid"
          >
            {/* Left 70% Column: Detailed Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              
              {/* 1. Who Needs This & Why Required */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                {/* Who Needs It */}
                <div className="cx-card" style={{ padding: "26px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#0066f5", marginBottom: "14px" }}>
                    <Users size={20} />
                    <h2 style={{ fontSize: "1.15rem", color: "#0c2340", fontWeight: 700, margin: 0 }}>Who Needs This?</h2>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                    {service.whoNeedsIt.map((item, idx) => (
                      <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "#475569", fontSize: "0.88rem", lineHeight: "1.5" }}>
                        <CheckCircle2 size={15} style={{ color: "#059669", flexShrink: 0, marginTop: "3px" }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why Required */}
                <div className="cx-card" style={{ padding: "26px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#059669", marginBottom: "14px" }}>
                    <ShieldCheck size={20} />
                    <h2 style={{ fontSize: "1.15rem", color: "#0c2340", fontWeight: 700, margin: 0 }}>Why Is It Required?</h2>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                    {service.whyRequired.map((item, idx) => (
                      <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "#475569", fontSize: "0.88rem", lineHeight: "1.5" }}>
                        <CheckCircle2 size={15} style={{ color: "#0066f5", flexShrink: 0, marginTop: "3px" }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 2. Tangible Deliverables */}
              <div className="cx-card" style={{ padding: "28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#059669", marginBottom: "12px" }}>
                  <CheckCircle2 size={20} />
                  <h2 style={{ fontSize: "1.2rem", color: "#0c2340", fontWeight: 700, margin: 0 }}>What You Will Receive</h2>
                </div>
                <p style={{ color: "#64748b", fontSize: "0.88rem", marginBottom: "16px" }}>
                  Tangible statutory certificates, registration numbers, and corporate documentation delivered upon completion:
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px" }}>
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "12px 14px",
                        backgroundColor: "#f0fdf4",
                        border: "1px solid #bbf7d0",
                        borderRadius: "6px",
                      }}
                    >
                      <CheckCircle2 size={16} style={{ color: "#059669", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.86rem", color: "#166534", fontWeight: 600 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. General Eligibility & Criteria */}
              <div className="cx-card" style={{ padding: "28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#0c2340", marginBottom: "12px" }}>
                  <CalendarCheck2 size={20} style={{ color: "#d97706" }} />
                  <h2 style={{ fontSize: "1.2rem", color: "#0c2340", fontWeight: 700, margin: 0 }}>Eligibility & Applicability</h2>
                </div>
                <p style={{ color: "#64748b", fontSize: "0.88rem", marginBottom: "16px" }}>
                  Statutory criteria under Indian regulatory frameworks. Specific requirements may vary by business sector:
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px" }}>
                  {service.eligibility.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "12px 14px",
                        backgroundColor: "#f8fafc",
                        border: "1px solid #edf2f7",
                        borderRadius: "6px",
                        color: "#334155",
                        fontSize: "0.86rem",
                        lineHeight: "1.5",
                      }}
                    >
                      <span style={{ color: "#0066f5", fontWeight: 700, marginRight: "6px" }}>•</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Documents Required */}
              <div className="cx-card" style={{ padding: "28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#0c2340", marginBottom: "12px" }}>
                  <FileText size={20} style={{ color: "#0066f5" }} />
                  <h2 style={{ fontSize: "1.2rem", color: "#0c2340", fontWeight: 700, margin: 0 }}>Required Documents</h2>
                </div>
                <p style={{ color: "#64748b", fontSize: "0.88rem", marginBottom: "16px" }}>
                  Submit clear, self-attested digital copies to ensure swift government verification:
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px" }}>
                  {service.documentsRequired.map((doc, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        padding: "12px 14px",
                        backgroundColor: "#f8fafc",
                        border: "1px solid #edf2f7",
                        borderRadius: "6px",
                      }}
                    >
                      <div style={{ padding: "4px", backgroundColor: "#ffffff", border: "1px solid #cbd5e1", borderRadius: "4px", color: "#0066f5" }}>
                        <FileCheck2 size={14} />
                      </div>
                      <span style={{ fontSize: "0.86rem", color: "#1e293b", lineHeight: "1.4", fontWeight: 500 }}>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. The Step-by-Step Consulting Process */}
              <div className="cx-card" style={{ padding: "28px" }}>
                <div style={{ marginBottom: "20px" }}>
                  <span className="badge badge-blue" style={{ marginBottom: "6px" }}>Transparent Workflow</span>
                  <h2 style={{ fontSize: "1.25rem", color: "#0c2340", marginTop: "4px", fontWeight: 700 }}>
                    Consulting & Facilitation Timeline
                  </h2>
                  <p style={{ color: "#64748b", fontSize: "0.88rem", marginTop: "2px" }}>
                    Structured step-by-step procedure from initial review through to official approval:
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {service.processSteps.map((step, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        gap: "14px",
                        padding: "16px 18px",
                        backgroundColor: "#f8fafc",
                        border: "1px solid #edf2f7",
                        borderRadius: "6px",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          backgroundColor: "#0066f5",
                          color: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          fontSize: "0.82rem",
                          flexShrink: 0,
                        }}
                      >
                        {idx + 1}
                      </div>
                      <div>
                        <h3 style={{ fontSize: "0.96rem", color: "#0c2340", marginBottom: "3px", fontWeight: 700 }}>
                          {step.title.replace(/^\d+\.\s*/, "")}
                        </h3>
                        <p style={{ color: "#475569", fontSize: "0.88rem", lineHeight: "1.5", margin: 0 }}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. Pricing & Statutory Disclosure */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "18px",
                  padding: "24px",
                  backgroundColor: "#eff6ff",
                  border: "1px solid #bfdbfe",
                  borderRadius: "8px",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#0c2340", marginBottom: "8px", fontWeight: 700, fontSize: "0.88rem" }}>
                    <Receipt size={16} style={{ color: "#0066f5" }} />
                    <span>Statutory Government Fees</span>
                  </div>
                  <p style={{ color: "#334155", fontSize: "0.86rem", lineHeight: "1.6", margin: 0 }}>
                    {service.govtFeesNote}
                  </p>
                </div>

                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#0066f5", marginBottom: "8px", fontWeight: 700, fontSize: "0.88rem" }}>
                    <ShieldCheck size={16} />
                    <span>Corpunex Professional Advisory Fee</span>
                  </div>
                  <p style={{ color: "#334155", fontSize: "0.86rem", lineHeight: "1.6", margin: 0 }}>
                    {service.corpunexFeeNote}
                  </p>
                </div>
              </div>

              {/* 7. FAQs */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#0c2340", marginBottom: "18px" }}>
                  <HelpCircle size={22} style={{ color: "#0066f5" }} />
                  <h2 style={{ fontSize: "1.35rem", color: "#0c2340", fontWeight: 700 }}>Frequently Asked Questions</h2>
                </div>
                <FAQAccordion items={service.faqs} />
              </div>

              {/* 8. Related Services */}
              {service.relatedServices && service.relatedServices.length > 0 && (
                <div>
                  <h3 style={{ fontSize: "1.15rem", color: "#0c2340", marginBottom: "14px", fontWeight: 700 }}>Related Consulting Services</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
                    {service.relatedServices.map((rel, idx) => (
                      <Link
                        key={idx}
                        href={`/services/${rel.categorySlug}/${rel.slug}`}
                        className="cx-card"
                        style={{
                          padding: "16px 18px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "#0c2340" }}>{rel.title}</span>
                        <ArrowRight size={14} style={{ color: "#0066f5" }} />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* 9. Inline Consultation Form Card */}
              <div
                id="consultation-card"
                className="cx-card"
                style={{
                  padding: "36px 32px",
                  backgroundColor: "#f8faff",
                  border: "1px solid #dbeafe",
                }}
              >
                <div style={{ marginBottom: "20px", maxWidth: "600px" }}>
                  <span className="badge badge-blue" style={{ marginBottom: "6px" }}>Direct Advisory</span>
                  <h2 style={{ fontSize: "1.55rem", color: "#0c2340", marginTop: "4px", fontWeight: 800, letterSpacing: "-0.02em" }}>
                    Request Consultation for {service.title}
                  </h2>
                  <p style={{ color: "#475569", fontSize: "0.9rem", marginTop: "2px" }}>
                    Provide your requirements below. A dedicated corporate advisor will review your entity details and reply with an itemized quotation.
                  </p>
                </div>

                <ConsultationForm
                  defaultService={service.title}
                  sourcePage={service.title}
                  compact={false}
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceTitle={service.title}
      />
    </div>
  );
}
