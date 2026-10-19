"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  HelpCircle, 
  Clock, 
  FileText, 
  Shield, 
  Users, 
  ArrowRight, 
  DollarSign, 
  FileCheck2,
  CalendarCheck2,
  Zap,
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
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Top Hero Section — Perspective Blue Architecture with High Contrast Typography */}
      <section
        className="perspective-blue-hero"
        style={{
          padding: "68px 0 64px",
        }}
      >
        <AbstractHeroBackground variant="subpage" />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Breadcrumb
            theme="dark"
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
                  padding: "4px 14px",
                  borderRadius: "9999px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  backgroundColor: "rgba(0, 102, 245, 0.25)",
                  color: "#38bdf8",
                  border: "1px solid rgba(56, 189, 248, 0.4)",
                  boxShadow: "0 0 16px rgba(0, 102, 245, 0.2)",
                }}
              >
                {service.categoryName}
              </span>
              <span style={{ fontSize: "0.85rem", color: "#cbd5e1", display: "inline-flex", alignItems: "center", gap: "6px", fontWeight: 600 }}>
                <Clock size={14} style={{ color: "#38bdf8" }} />
                <span>{service.timelineNote}</span>
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(2.3rem, 4.6vw, 3.4rem)", color: "#ffffff", marginBottom: "16px", lineHeight: "1.14", letterSpacing: "-0.03em", fontWeight: 800, textShadow: "0 2px 25px rgba(0, 0, 0, 0.6)" }}>
              {service.title}
            </h1>

            <p style={{ fontSize: "1.2rem", color: "#38bdf8", fontWeight: 700, marginBottom: "16px", lineHeight: "1.5", textShadow: "0 0 25px rgba(56, 189, 248, 0.35)" }}>
              {service.tagline}
            </p>

            <p style={{ fontSize: "1.15rem", color: "#cbd5e1", lineHeight: "1.7", marginBottom: "32px", textShadow: "0 1px 10px rgba(0, 0, 0, 0.4)" }}>
              {service.summary}
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <button
                onClick={() => setModalOpen(true)}
                className="btn-electric-blue"
              >
                <span>Request an Itemized Quotation</span>
                <ArrowRight size={16} />
              </button>
              <a
                href="#consultation-section"
                className="btn-glass-outline"
              >
                <span>Enquire Online</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: "64px 0", backgroundColor: "#ffffff" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            
            {/* 1. Who Needs This & Why Required */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {/* Who Needs It */}
              <div className="rzp-card" style={{ padding: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#0b72e7", marginBottom: "16px" }}>
                  <Users size={22} />
                  <h2 style={{ fontSize: "1.3rem", color: "#0c2340", fontWeight: 800, margin: 0 }}>Who Needs This Service?</h2>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {service.whoNeedsIt.map((item, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#515978", fontSize: "0.94rem", lineHeight: "1.6" }}>
                      <CheckCircle2 size={16} style={{ color: "#00b574", flexShrink: 0, marginTop: "4px" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Required */}
              <div className="rzp-card" style={{ padding: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#00b574", marginBottom: "16px" }}>
                  <Shield size={22} />
                  <h2 style={{ fontSize: "1.3rem", color: "#0c2340", fontWeight: 800, margin: 0 }}>Why Is It Required?</h2>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {service.whyRequired.map((item, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#515978", fontSize: "0.94rem", lineHeight: "1.6" }}>
                      <CheckCircle2 size={16} style={{ color: "#0b72e7", flexShrink: 0, marginTop: "4px" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2. General Eligibility & Criteria */}
            <div className="rzp-card" style={{ padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#0c2340", marginBottom: "14px" }}>
                <CalendarCheck2 size={24} style={{ color: "#ff8a00" }} />
                <h2 style={{ fontSize: "1.35rem", color: "#0c2340", fontWeight: 800, margin: 0 }}>General Eligibility & Applicability</h2>
              </div>
              <p style={{ color: "#515978", fontSize: "0.92rem", marginBottom: "20px" }}>
                Statutory criteria under Indian regulatory frameworks. Specific requirements may vary based on your state of registration or business sector:
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
                {service.eligibility.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "16px 20px",
                      backgroundColor: "#f8fafc",
                      border: "1px solid #e8edf5",
                      borderRadius: "6px",
                      color: "#2b334a",
                      fontSize: "0.9rem",
                      lineHeight: "1.6",
                    }}
                  >
                    <span style={{ color: "#0b72e7", fontWeight: 700, marginRight: "6px" }}>•</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Documents Required */}
            <div className="rzp-card" style={{ padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#0c2340", marginBottom: "14px" }}>
                <FileText size={24} style={{ color: "#0b72e7" }} />
                <h2 style={{ fontSize: "1.35rem", color: "#0c2340", fontWeight: 800, margin: 0 }}>Commonly Requested Documents</h2>
              </div>
              <p style={{ color: "#515978", fontSize: "0.92rem", marginBottom: "20px" }}>
                Prepare clear, legible digital copies of these credentials to ensure swift government verification:
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px" }}>
                {service.documentsRequired.map((doc, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      padding: "16px 18px",
                      backgroundColor: "#f8fafc",
                      border: "1px solid #e8edf5",
                      borderRadius: "8px",
                    }}
                  >
                    <div style={{ padding: "6px", backgroundColor: "#ffffff", border: "1px solid #d0e2ff", borderRadius: "4px", color: "#0b72e7" }}>
                      <FileCheck2 size={16} />
                    </div>
                    <span style={{ fontSize: "0.9rem", color: "#0c2340", lineHeight: "1.5", fontWeight: 600 }}>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. The Step-by-Step Consulting Process */}
            <div className="rzp-card" style={{ padding: "36px" }}>
              <div style={{ marginBottom: "24px" }}>
                <span className="badge badge-blue" style={{ marginBottom: "8px" }}>Transparent Workflow</span>
                <h2 style={{ fontSize: "1.35rem", color: "#0c2340", marginTop: "6px", fontWeight: 800 }}>
                  The Consulting & Facilitation Process
                </h2>
                <p style={{ color: "#515978", fontSize: "0.92rem", marginTop: "4px" }}>
                  How Corpunex structures your engagement from initial review through to official delivery:
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {service.processSteps.map((step, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      gap: "18px",
                      padding: "20px 22px",
                      backgroundColor: "#f8fafc",
                      border: "1px solid #e8edf5",
                      borderRadius: "8px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: "#0b72e7",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "0.9rem",
                        flexShrink: 0,
                      }}
                    >
                      {idx + 1}
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1.05rem", color: "#0c2340", marginBottom: "4px", fontWeight: 800 }}>
                        {step.title.replace(/^\d+\.\s*/, "")}
                      </h3>
                      <p style={{ color: "#515978", fontSize: "0.92rem", lineHeight: "1.6", margin: 0 }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. What You Expect to Receive (Deliverables) */}
            <div className="rzp-card" style={{ padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#00b574", marginBottom: "14px" }}>
                <CheckCircle2 size={24} />
                <h2 style={{ fontSize: "1.35rem", color: "#0c2340", fontWeight: 800, margin: 0 }}>What You Will Receive</h2>
              </div>
              <p style={{ color: "#515978", fontSize: "0.92rem", marginBottom: "20px" }}>
                Tangible official certificates, numbers, and compliance documentation issued upon successful completion:
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "16px 18px",
                      backgroundColor: "#e6f9f2",
                      border: "1px solid #b8f0dc",
                      borderRadius: "6px",
                    }}
                  >
                    <CheckCircle2 size={18} style={{ color: "#00b574", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.92rem", color: "#065f46", fontWeight: 700 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Pricing & Government Charges Disclosures */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
                padding: "32px",
                backgroundColor: "#f4f8fe",
                border: "1px solid #d0e2ff",
                borderRadius: "10px",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#0c2340", marginBottom: "10px", fontWeight: 800, fontSize: "0.95rem" }}>
                  <DollarSign size={18} style={{ color: "#0b72e7" }} />
                  <span>Statutory Government Charges</span>
                </div>
                <p style={{ color: "#515978", fontSize: "0.92rem", lineHeight: "1.65", margin: 0 }}>
                  {service.govtFeesNote}
                </p>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#0b72e7", marginBottom: "10px", fontWeight: 800, fontSize: "0.95rem" }}>
                  <Shield size={18} />
                  <span>Corpunex Professional Fee Scope</span>
                </div>
                <p style={{ color: "#515978", fontSize: "0.92rem", lineHeight: "1.65", margin: 0 }}>
                  {service.corpunexFeeNote}
                </p>
              </div>
            </div>

            {/* 7. FAQs */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#0c2340", marginBottom: "20px" }}>
                <HelpCircle size={24} style={{ color: "#0b72e7" }} />
                <h2 style={{ fontSize: "1.45rem", color: "#0c2340", fontWeight: 800 }}>Frequently Asked Questions</h2>
              </div>
              <FAQAccordion items={service.faqs} />
            </div>

            {/* 8. Related Services */}
            {service.relatedServices && service.relatedServices.length > 0 && (
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "#0c2340", marginBottom: "16px", fontWeight: 800 }}>Related Consulting Services</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                  {service.relatedServices.map((rel, idx) => (
                    <Link
                      key={idx}
                      href={`/services/${rel.categorySlug}/${rel.slug}`}
                      className="rzp-card"
                      style={{
                        padding: "20px 22px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0c2340" }}>{rel.title}</span>
                      <ArrowRight size={16} style={{ color: "#0b72e7" }} />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 9. Inline Consultation Enquiry Section */}
            <div
              id="consultation-section"
              className="rzp-card"
              style={{
                padding: "44px 38px",
                border: "1px solid #d0e2ff",
                boxShadow: "0 12px 35px rgba(11, 114, 231, 0.12)",
              }}
            >
              <div style={{ marginBottom: "24px", maxWidth: "600px" }}>
                <span className="badge badge-blue" style={{ marginBottom: "8px" }}>Direct Enquiry</span>
                <h2 style={{ fontSize: "1.7rem", color: "#0c2340", marginTop: "6px", fontWeight: 800, letterSpacing: "-0.02em" }}>
                  Request Consultation for {service.title}
                </h2>
                <p style={{ color: "#515978", fontSize: "0.95rem", marginTop: "4px" }}>
                  Fill out your details below. A consulting specialist from Corpunex will review your business requirements and reply with a transparent scope and quotation.
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
