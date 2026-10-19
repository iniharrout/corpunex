"use client";

import React, { useState } from "react";
import { HelpCircle, Search, Sparkles, MessageSquare, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import { FAQS_DATA, FAQ_CATEGORIES } from "@/data/faqData";
import ConsultationForm from "@/components/ConsultationForm";
import AbstractHeroBackground from "@/components/AbstractHeroBackground";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = FAQS_DATA.filter((item) => {
    if (selectedCategory !== "All" && item.category !== selectedCategory) {
      return false;
    }
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

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
          <Breadcrumb items={[{ label: "Frequently Asked Questions" }]} />

          <div style={{ maxWidth: "800px" }}>
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
              Help Center & Inquiries
            </span>
            <h1
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                color: "#0c2340",
                marginBottom: "14px",
                lineHeight: "1.15",
                fontWeight: 800,
                letterSpacing: "-0.03em",
              }}
            >
              Frequently Asked <span style={{ color: "#0066f5" }}>Questions.</span>
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
              Find transparent answers to common inquiries regarding company registration, document prerequisites, Startup India recognition, taxation, and consulting with Corpunex.
            </p>

            {/* Search Input */}
            <div style={{ position: "relative", maxWidth: "600px" }}>
              <Search
                size={20}
                style={{ position: "absolute", left: "18px", top: "50%", transform: "translateY(-50%)", color: "#0066f5" }}
              />
              <input
                type="text"
                placeholder="Search questions (e.g. residential office, 80-IAC, late fees, minimum capital)..."
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

      {/* Category Pills */}
      <section style={{ padding: "16px 0", borderBottom: "1px solid #e8edf5", backgroundColor: "#f8fafc" }}>
        <div className="container" style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "4px" }}>
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "8px 18px",
                borderRadius: "9999px",
                fontSize: "0.88rem",
                fontWeight: 700,
                cursor: "pointer",
                border: "1px solid",
                whiteSpace: "nowrap",
                backgroundColor: selectedCategory === cat ? "#0b72e7" : "#ffffff",
                borderColor: selectedCategory === cat ? "#0b72e7" : "#dbe3ee",
                color: selectedCategory === cat ? "#ffffff" : "#0c2340",
                transition: "all 0.15s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion List */}
      <section style={{ padding: "64px 0" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          {filteredFaqs.length === 0 ? (
            <div style={{ textAlign: "center", padding: "64px 20px" }}>
              <HelpCircle size={48} style={{ color: "#94a3b8", margin: "0 auto 16px" }} />
              <h3 style={{ fontSize: "1.3rem", color: "#0c2340", marginBottom: "8px", fontWeight: 800 }}>No matching questions found</h3>
              <p style={{ color: "#515978", fontSize: "0.95rem", marginBottom: "20px" }}>
                Try searching for a different keyword or browse all categories.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="btn btn-secondary"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#515978", fontSize: "0.9rem" }}>
                  Showing <strong style={{ color: "#0c2340" }}>{filteredFaqs.length}</strong> questions
                </span>
                {selectedCategory !== "All" && (
                  <span className="badge badge-blue">{selectedCategory}</span>
                )}
              </div>

              <FAQAccordion items={filteredFaqs} defaultOpenIndex={0} />
            </div>
          )}

          {/* Direct Consultation Box */}
          <div
            className="rzp-card"
            style={{
              marginTop: "64px",
              padding: "44px 38px",
              backgroundColor: "#ffffff",
              border: "1px solid #d0e2ff",
              boxShadow: "0 12px 35px rgba(11, 114, 231, 0.12)",
            }}
          >
            <div style={{ maxWidth: "600px", marginBottom: "24px" }}>
              <span className="badge badge-blue" style={{ marginBottom: "8px" }}>Direct Advisory</span>
              <h2 style={{ fontSize: "1.6rem", color: "#0c2340", marginTop: "4px", fontWeight: 800, letterSpacing: "-0.02em" }}>
                Still Have Unanswered Questions?
              </h2>
              <p style={{ color: "#515978", fontSize: "0.95rem", marginTop: "4px" }}>
                Every enterprise has unique circumstances. Send us your inquiry and our consulting advisors will clarify your requirements.
              </p>
            </div>

            <ConsultationForm
              defaultService="General FAQ Inquiry"
              sourcePage="FAQ Page"
              compact={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
