"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Clock, Calendar, ArrowRight, Search, Tag, Sparkles } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { ARTICLES_DATA } from "@/data/resourcesData";
import AbstractHeroBackground from "@/components/AbstractHeroBackground";

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Business Registration", "Startup Support", "GST & Taxation", "Intellectual Property", "Corporate Compliance"];

  const filteredArticles = ARTICLES_DATA.filter((article) => {
    if (selectedCategory !== "All" && article.category !== selectedCategory) {
      return false;
    }
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      article.title.toLowerCase().includes(q) ||
      article.summary.toLowerCase().includes(q) ||
      article.category.toLowerCase().includes(q)
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
          <Breadcrumb items={[{ label: "Resources & Articles" }]} />

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
              Knowledge Hub & Legal Guides
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
              Educational Resources &{" "}
              <span style={{ color: "#0066f5" }}>Compliance Guides.</span>
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
              Clear, practical analysis of Indian corporate laws, company registration checklists, Startup India frameworks, and tax regulations to help founders make informed decisions.
            </p>

            {/* Search */}
            <div style={{ position: "relative", maxWidth: "600px" }}>
              <Search
                size={18}
                style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#0066f5" }}
              />
              <input
                type="text"
                placeholder="Search articles (e.g. Pvt Ltd vs LLP, Documents, Startup Odisha, GST)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "16px 16px 16px 52px",
                  backgroundColor: "rgba(8, 20, 48, 0.85)",
                  border: "1.5px solid rgba(56, 189, 248, 0.4)",
                  borderRadius: "8px",
                  color: "#ffffff",
                  fontSize: "1rem",
                  outline: "none",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(12px)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section style={{ padding: "16px 0", borderBottom: "1px solid #e8edf5", backgroundColor: "#f8fafc" }}>
        <div className="container" style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "4px" }}>
          {categories.map((cat) => (
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

      {/* Articles Grid */}
      <section style={{ padding: "64px 0" }}>
        <div className="container">
          {filteredArticles.length === 0 ? (
            <div style={{ textAlign: "center", padding: "64px 20px" }}>
              <BookOpen size={48} style={{ color: "#94a3b8", margin: "0 auto 16px" }} />
              <h3 style={{ fontSize: "1.3rem", color: "#0c2340", marginBottom: "8px", fontWeight: 800 }}>No articles match your query</h3>
              <p style={{ color: "#515978", fontSize: "0.95rem", marginBottom: "20px" }}>
                Try another search phrase or reset your category filter.
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
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                gap: "28px",
              }}
            >
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="rzp-card"
                  style={{
                    padding: "32px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", flexWrap: "wrap", gap: "8px" }}>
                      <span className="badge badge-blue">{article.category}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.82rem", color: "#515978" }}>
                        <Clock size={13} style={{ color: "#0b72e7" }} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h2 style={{ fontSize: "1.3rem", color: "#0c2340", marginBottom: "12px", lineHeight: "1.35", fontWeight: 800 }}>
                      <Link href={`/resources/${article.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                        {article.title}
                      </Link>
                    </h2>

                    <p style={{ color: "#515978", fontSize: "0.92rem", lineHeight: "1.65", marginBottom: "20px" }}>
                      {article.summary}
                    </p>
                  </div>

                  <div style={{ borderTop: "1px solid #e8edf5", paddingTop: "18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.82rem", color: "#7f8ba4" }}>
                      {article.publishDate}
                    </span>
                    <Link
                      href={`/resources/${article.slug}`}
                      style={{
                        color: "#0b72e7",
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        textDecoration: "none",
                      }}
                    >
                      <span>Read Article</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
