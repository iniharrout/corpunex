"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, HelpCircle, FileText, ChevronRight } from "lucide-react";
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
              { label: category.title },
            ]}
          />

          <div style={{ maxWidth: "820px" }}>
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
              Statutory Service Category
            </span>
            <h1
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                color: "#0c2340",
                marginBottom: "14px",
                lineHeight: "1.15",
                letterSpacing: "-0.03em",
                fontWeight: 800,
              }}
            >
              {category.title}
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
              {category.shortDesc}
            </p>
            <p
              style={{
                fontSize: "1.04rem",
                color: "#475569",
                lineHeight: "1.65",
                marginBottom: "26px",
              }}
            >
              {category.overview}
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
              <button
                onClick={() => handleEnquire(category.title)}
                className="btn-electric-blue"
              >
                <span>Request Category Consultation</span>
                <ArrowRight size={15} />
              </button>
              <Link
                href="#services-list"
                className="btn-uipath-outline"
              >
                <span>View All {category.services.length} Services</span>
                <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-list" style={{ padding: "64px 0", backgroundColor: "#ffffff" }}>
        <div className="container">
          <div style={{ marginBottom: "36px" }}>
            <span className="badge badge-blue" style={{ marginBottom: "8px" }}>Catalog</span>
            <h2 style={{ fontSize: "1.85rem", color: "#0c2340", marginTop: "4px", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Services Included in {category.title}
            </h2>
            <p style={{ color: "#64748b", fontSize: "0.95rem" }}>
              Review service specifications, statutory procedures, and required documentation:
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
              marginBottom: "56px",
            }}
          >
            {category.services.map((srv, idx) => (
              <div
                key={idx}
                className="cx-card"
                style={{
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                    <h3 style={{ fontSize: "1.15rem", color: "#0c2340", fontWeight: 700, margin: 0, lineHeight: "1.3" }}>
                      {srv.title}
                    </h3>
                    {srv.hasDetailPage && (
                      <span className="badge badge-blue" style={{ fontSize: "0.72rem", padding: "2px 7px" }}>
                        Detailed Guide
                      </span>
                    )}
                  </div>

                  <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "20px" }}>
                    {srv.shortDesc}
                  </p>
                </div>

                <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {srv.hasDetailPage && srv.slug ? (
                    <Link
                      href={`/services/${category.slug}/${srv.slug}`}
                      style={{
                        color: "#0066f5",
                        fontWeight: 600,
                        fontSize: "0.88rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <span>Read Guide</span>
                      <ArrowRight size={13} />
                    </Link>
                  ) : (
                    <span style={{ fontSize: "0.8rem", color: "#64748b" }}>Consulting Available</span>
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
            <div style={{ marginBottom: "56px", maxWidth: "860px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#0c2340", marginBottom: "18px" }}>
                <HelpCircle size={22} style={{ color: "#0066f5" }} />
                <h2 style={{ fontSize: "1.4rem", color: "#0c2340", fontWeight: 800 }}>Category FAQs</h2>
              </div>
              <FAQAccordion items={categoryFaqs} />
            </div>
          )}

          {/* Bottom Consultation Box */}
          <div
            className="cx-card"
            style={{
              padding: "36px 32px",
              backgroundColor: "#f8faff",
              border: "1px solid #dbeafe",
            }}
          >
            <div style={{ maxWidth: "600px", marginBottom: "22px" }}>
              <span className="badge badge-blue" style={{ marginBottom: "8px" }}>Direct Advisory</span>
              <h2 style={{ fontSize: "1.6rem", color: "#0c2340", marginTop: "4px", fontWeight: 800, letterSpacing: "-0.02em" }}>
                Discuss Your {category.title} Requirements
              </h2>
              <p style={{ color: "#475569", fontSize: "0.92rem", marginTop: "4px" }}>
                Connect with our corporate consulting desk. We will review your entity requirements and reply with a complete, itemized cost estimate.
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
