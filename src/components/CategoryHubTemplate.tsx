"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Clock, HelpCircle, FileText } from "lucide-react";
import Breadcrumb from "./Breadcrumb";
import ConsultationForm from "./ConsultationForm";
import FAQAccordion from "./FAQAccordion";
import ConsultationModal from "./ConsultationModal";
import AbstractHeroBackground from "./AbstractHeroBackground";
import { ServiceCategory } from "@/data/servicesData";

interface CategoryHubTemplateProps {
  category: ServiceCategory;
  categoryFaqs?: { question: string; answer: string }[];
}

export default function CategoryHubTemplate({
  category,
  categoryFaqs = [],
}: CategoryHubTemplateProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(category.title);

  const handleEnquire = (title: string) => {
    setSelectedService(title);
    setModalOpen(true);
  };

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Hero — Perspective Blue Architecture with High Contrast Typography */}
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
              { label: category.title },
            ]}
          />

          <div style={{ maxWidth: "840px" }}>
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
                marginBottom: "14px",
                boxShadow: "0 0 16px rgba(0, 102, 245, 0.2)",
              }}
            >
              Service Category Hub
            </span>
            <h1 style={{ fontSize: "clamp(2.3rem, 4.6vw, 3.4rem)", color: "#ffffff", marginBottom: "16px", lineHeight: "1.14", letterSpacing: "-0.03em", fontWeight: 800, textShadow: "0 2px 25px rgba(0, 0, 0, 0.6)" }}>
              {category.title}
            </h1>
            <p style={{ fontSize: "1.2rem", color: "#38bdf8", fontWeight: 700, marginBottom: "16px", lineHeight: "1.5", textShadow: "0 0 25px rgba(56, 189, 248, 0.35)" }}>
              {category.shortDesc}
            </p>
            <p style={{ fontSize: "1.15rem", color: "#cbd5e1", lineHeight: "1.7", marginBottom: "32px", textShadow: "0 1px 10px rgba(0, 0, 0, 0.4)" }}>
              {category.overview}
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <button
                onClick={() => handleEnquire(category.title)}
                className="btn-electric-blue"
              >
                <span>Request Category Consultation</span>
                <ArrowRight size={16} />
              </button>
              <Link
                href="#services-list"
                className="btn-glass-outline"
              >
                <span>View All {category.services.length} Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-list" style={{ padding: "72px 0", backgroundColor: "#ffffff" }}>
        <div className="container">
          <div style={{ marginBottom: "40px" }}>
            <span className="badge badge-blue" style={{ marginBottom: "8px" }}>Catalog</span>
            <h2 style={{ fontSize: "2rem", color: "#0c2340", marginTop: "4px", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Services Included in {category.title}
            </h2>
            <p style={{ color: "#515978", fontSize: "0.95rem" }}>
              Click on detailed guides to view eligibility criteria, required documents, and process steps:
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
              marginBottom: "64px",
            }}
          >
            {category.services.map((srv, idx) => (
              <div
                key={idx}
                className="rzp-card"
                style={{
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                    <h3 style={{ fontSize: "1.22rem", color: "#0c2340", fontWeight: 800, margin: 0, lineHeight: "1.3" }}>
                      {srv.title}
                    </h3>
                    {srv.hasDetailPage && (
                      <span className="badge badge-blue" style={{ fontSize: "0.72rem", padding: "3px 8px" }}>
                        Detailed Guide
                      </span>
                    )}
                  </div>

                  <p style={{ color: "#515978", fontSize: "0.92rem", lineHeight: "1.65", marginBottom: "24px" }}>
                    {srv.shortDesc}
                  </p>
                </div>

                <div style={{ borderTop: "1px solid #e8edf5", paddingTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {srv.hasDetailPage && srv.slug ? (
                    <Link
                      href={`/services/${category.slug}/${srv.slug}`}
                      style={{
                        color: "#0b72e7",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span>Read Guide</span>
                      <ArrowRight size={14} />
                    </Link>
                  ) : (
                    <span style={{ fontSize: "0.82rem", color: "#7f8ba4" }}>Consulting Available</span>
                  )}

                  <button
                    onClick={() => handleEnquire(srv.title)}
                    className="btn btn-secondary"
                    style={{
                      fontSize: "0.82rem",
                      padding: "6px 14px",
                    }}
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Category FAQs if available */}
          {categoryFaqs.length > 0 && (
            <div style={{ marginBottom: "64px", maxWidth: "860px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#0c2340", marginBottom: "20px" }}>
                <HelpCircle size={24} style={{ color: "#0b72e7" }} />
                <h2 style={{ fontSize: "1.45rem", color: "#0c2340", fontWeight: 800 }}>Category FAQs</h2>
              </div>
              <FAQAccordion items={categoryFaqs} />
            </div>
          )}

          {/* Bottom Consultation Box */}
          <div
            className="rzp-card"
            style={{
              padding: "44px 38px",
              backgroundColor: "#ffffff",
              border: "1px solid #d0e2ff",
              boxShadow: "0 12px 35px rgba(11, 114, 231, 0.12)",
            }}
          >
            <div style={{ maxWidth: "600px", marginBottom: "24px" }}>
              <span className="badge badge-blue" style={{ marginBottom: "8px" }}>Direct Consultation</span>
              <h2 style={{ fontSize: "1.7rem", color: "#0c2340", marginTop: "4px", fontWeight: 800, letterSpacing: "-0.02em" }}>
                Discuss Your {category.title} Requirements
              </h2>
              <p style={{ color: "#515978", fontSize: "0.95rem", marginTop: "4px" }}>
                Send us an enquiry with your business specifics. An advisor will review applicable rules and reply with an itemized proposal.
              </p>
            </div>

            <ConsultationForm
              defaultService={category.title}
              sourcePage={`${category.title} Category Hub`}
              compact={false}
            />
          </div>
        </div>
      </section>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceTitle={selectedService}
      />
    </div>
  );
}
