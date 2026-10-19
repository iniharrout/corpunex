"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  Rocket, 
  Receipt, 
  ShieldCheck, 
  Award, 
  FileCheck, 
  Calculator, 
  FileText, 
  HeartHandshake, 
  Search, 
  ArrowRight, 
  FileQuestion,
  ChevronRight
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { SERVICE_CATEGORIES } from "@/data/servicesData";
import ConsultationModal from "@/components/ConsultationModal";
import AbstractHeroBackground from "@/components/AbstractHeroBackground";

export default function AllServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState("General Business Consulting");

  const categoryIcons: Record<string, React.ReactNode> = {
    "business-registration": <Building2 size={22} />,
    "startup-services": <Rocket size={22} />,
    "gst-taxation": <Receipt size={22} />,
    "licences-registrations": <ShieldCheck size={22} />,
    "trademark-ip": <Award size={22} />,
    "corporate-compliance": <FileCheck size={22} />,
    "accounting-bookkeeping": <Calculator size={22} />,
    "legal-documentation": <FileText size={22} />,
    "ngo-entity-registration": <HeartHandshake size={22} />,
  };

  const filteredCategories = SERVICE_CATEGORIES.filter((cat) => {
    if (selectedCategory !== "all" && cat.slug !== selectedCategory) {
      return false;
    }
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    const matchCategory = cat.title.toLowerCase().includes(query) || cat.overview.toLowerCase().includes(query);
    const matchServices = cat.services.some(
      (s) => s.title.toLowerCase().includes(query) || s.shortDesc.toLowerCase().includes(query)
    );
    return matchCategory || matchServices;
  });

  const handleEnquireService = (title: string) => {
    setSelectedServiceTitle(title);
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
          <Breadcrumb theme="dark" items={[{ label: "All Services" }]} />

          <div style={{ maxWidth: "800px" }}>
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
              Directory & Service Catalog
            </span>
            <h1 style={{ fontSize: "clamp(2.3rem, 4.6vw, 3.4rem)", color: "#ffffff", marginBottom: "16px", lineHeight: "1.15", letterSpacing: "-0.03em", fontWeight: 800, textShadow: "0 2px 25px rgba(0, 0, 0, 0.6)" }}>
              Professional Services Catalog
            </h1>
            <p style={{ fontSize: "1.15rem", color: "#cbd5e1", lineHeight: "1.7", marginBottom: "32px", textShadow: "0 1px 10px rgba(0, 0, 0, 0.4)" }}>
              Explore our complete range of business registration, startup recognition, taxation, intellectual property, and secretarial compliance services in India.
            </p>

            {/* Search Input */}
            <div style={{ position: "relative", maxWidth: "600px" }}>
              <Search
                size={20}
                style={{ position: "absolute", left: "18px", top: "50%", transform: "translateY(-50%)", color: "#0066f5" }}
              />
              <input
                type="text"
                placeholder="Search services (e.g. Private Limited, GST, Trademark, Startup Odisha)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "16px 16px 16px 52px",
                  backgroundColor: "#ffffff",
                  border: "1.5px solid rgba(56, 189, 248, 0.6)",
                  borderRadius: "8px",
                  color: "#0c2340",
                  fontSize: "1rem",
                  outline: "none",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(0, 102, 245, 0.2)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Category Pills */}
      <section style={{ padding: "18px 0", borderBottom: "1px solid #e8edf5", backgroundColor: "#f8fafc" }}>
        <div className="container" style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "6px" }}>
          <button
            onClick={() => setSelectedCategory("all")}
            style={{
              padding: "8px 18px",
              borderRadius: "9999px",
              fontSize: "0.85rem",
              fontWeight: 700,
              cursor: "pointer",
              border: "1px solid",
              whiteSpace: "nowrap",
              backgroundColor: selectedCategory === "all" ? "#0b72e7" : "#ffffff",
              borderColor: selectedCategory === "all" ? "#0b72e7" : "#dbe3ee",
              color: selectedCategory === "all" ? "#ffffff" : "#0c2340",
              transition: "all 0.15s ease",
            }}
          >
            All Categories ({SERVICE_CATEGORIES.length})
          </button>
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              style={{
                padding: "8px 18px",
                borderRadius: "9999px",
                fontSize: "0.85rem",
                fontWeight: 700,
                cursor: "pointer",
                border: "1px solid",
                whiteSpace: "nowrap",
                backgroundColor: selectedCategory === cat.slug ? "#0b72e7" : "#ffffff",
                borderColor: selectedCategory === cat.slug ? "#0b72e7" : "#dbe3ee",
                color: selectedCategory === cat.slug ? "#ffffff" : "#0c2340",
                transition: "all 0.15s ease",
              }}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </section>

      {/* Service Listings */}
      <section style={{ padding: "64px 0", backgroundColor: "#f8fafc" }}>
        <div className="container">
          {filteredCategories.length === 0 ? (
            <div style={{ textAlign: "center", padding: "64px 20px" }}>
              <FileQuestion size={48} style={{ color: "#94a3b8", margin: "0 auto 16px" }} />
              <h3 style={{ fontSize: "1.3rem", color: "#0c2340", marginBottom: "8px", fontWeight: 800 }}>No matching services found</h3>
              <p style={{ color: "#515978", fontSize: "0.95rem", marginBottom: "20px" }}>
                We could not find any services matching &ldquo;{searchQuery}&rdquo;. Try searching for another keyword.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="btn btn-secondary"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              {filteredCategories.map((cat) => (
                <div
                  key={cat.slug}
                  id={cat.slug}
                  className="rzp-card"
                  style={{
                    padding: "36px",
                    backgroundColor: "#ffffff",
                  }}
                >
                  {/* Category Header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "16px",
                      marginBottom: "28px",
                      borderBottom: "1px solid #e8edf5",
                      paddingBottom: "20px",
                    }}
                  >
                    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", maxWidth: "750px" }}>
                      <div
                        style={{
                          padding: "12px",
                          backgroundColor: "#eef4ff",
                          borderRadius: "10px",
                          color: "#0b72e7",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {categoryIcons[cat.slug] || <Building2 size={24} />}
                      </div>
                      <div>
                        <h2 style={{ fontSize: "1.5rem", color: "#0c2340", fontWeight: 800, marginBottom: "6px" }}>
                          {cat.title}
                        </h2>
                        <p style={{ color: "#515978", fontSize: "0.92rem", lineHeight: "1.6", margin: 0 }}>
                          {cat.overview}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/services/${cat.slug}`}
                      className="btn btn-secondary"
                      style={{ fontSize: "0.85rem", padding: "8px 16px" }}
                    >
                      <span>Category Hub</span>
                      <ChevronRight size={14} />
                    </Link>
                  </div>

                  {/* Sub-Services Grid */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                      gap: "20px",
                    }}
                  >
                    {cat.services.map((srv, idx) => (
                      <div
                        key={idx}
                        style={{
                          padding: "24px",
                          backgroundColor: "#f8fafc",
                          border: "1px solid #e8edf5",
                          borderRadius: "8px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#ffffff";
                          e.currentTarget.style.borderColor = "#d0e2ff";
                          e.currentTarget.style.boxShadow = "0 6px 16px rgba(11, 114, 231, 0.08)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#f8fafc";
                          e.currentTarget.style.borderColor = "#e8edf5";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <div>
                          <div style={{ display: "flex", gap: "6px", marginBottom: "8px", flexWrap: "wrap" }}>
                            <span className="badge badge-blue" style={{ fontSize: "0.72rem", padding: "2px 8px" }}>
                              {cat.title}
                            </span>
                            {srv.hasDetailPage && (
                              <span className="badge badge-green" style={{ fontSize: "0.72rem", padding: "2px 8px" }}>
                                Detailed Guide
                              </span>
                            )}
                          </div>

                          <h3 style={{ fontSize: "1.1rem", color: "#0c2340", fontWeight: 800, marginBottom: "8px", lineHeight: "1.35" }}>
                            {srv.title}
                          </h3>

                          <p style={{ color: "#515978", fontSize: "0.86rem", lineHeight: "1.6", marginBottom: "20px" }}>
                            {srv.shortDesc}
                          </p>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #e8edf5", paddingTop: "14px" }}>
                          {srv.hasDetailPage && srv.slug ? (
                            <Link
                              href={`/services/${cat.slug}/${srv.slug}`}
                              style={{
                                color: "#0b72e7",
                                fontSize: "0.85rem",
                                fontWeight: 700,
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "4px",
                              }}
                            >
                              <span>Read Guide</span>
                              <ArrowRight size={13} />
                            </Link>
                          ) : (
                            <span style={{ fontSize: "0.78rem", color: "#7f8ba4" }}>Consulting Available</span>
                          )}

                          <button
                            onClick={() => handleEnquireService(srv.title)}
                            style={{
                              padding: "6px 12px",
                              fontSize: "0.8rem",
                              fontWeight: 700,
                              backgroundColor: "#ffffff",
                              border: "1px solid #d0e2ff",
                              color: "#0b72e7",
                              borderRadius: "4px",
                              cursor: "pointer",
                              transition: "all 0.15s ease",
                            }}
                          >
                            Enquire
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceTitle={selectedServiceTitle}
      />
    </div>
  );
}
