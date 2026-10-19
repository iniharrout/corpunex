import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Calendar, ArrowLeft, ArrowRight, CheckCircle2, ShieldAlert, Sparkles, BookOpen } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { ARTICLES_DATA } from "@/data/resourcesData";
import ConsultationForm from "@/components/ConsultationForm";
import AbstractHeroBackground from "@/components/AbstractHeroBackground";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} — Corpunex Knowledge Base`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
    },
  };
}

export default async function IndividualArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Header / Hero — Perspective Deep Blue Corridor Hero */}
      <section
        className="perspective-blue-hero"
        style={{
          padding: "64px 0 60px",
        }}
      >
        <AbstractHeroBackground variant="subpage" />

        <div className="container" style={{ maxWidth: "860px", position: "relative", zIndex: 1 }}>
          <Breadcrumb
            theme="dark"
            items={[
              { label: "Resources", href: "/resources" },
              { label: article.category, href: "/resources" },
              { label: article.title },
            ]}
          />

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
                boxShadow: "0 0 20px rgba(56, 189, 248, 0.15)",
              }}
            >
              {article.category}
            </span>
            <span style={{ fontSize: "0.85rem", color: "#cbd5e1", display: "inline-flex", alignItems: "center", gap: "6px", fontWeight: 600 }}>
              <Clock size={14} style={{ color: "#38bdf8" }} />
              <span>{article.readTime}</span>
            </span>
            <span style={{ color: "rgba(255, 255, 255, 0.4)" }}>•</span>
            <span style={{ fontSize: "0.85rem", color: "#cbd5e1" }}>{article.publishDate}</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.1rem, 4vw, 3rem)", color: "#ffffff", marginBottom: "20px", lineHeight: "1.2", fontWeight: 800, letterSpacing: "-0.03em" }}>
            {article.title}
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#cbd5e1", lineHeight: "1.7", margin: 0, fontWeight: 400 }}>
            {article.summary}
          </p>
        </div>
      </section>

      {/* Main Article Body */}
      <section style={{ padding: "64px 0" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          
          {/* Key Takeaways Box */}
          <div
            className="rzp-card"
            style={{
              padding: "32px 36px",
              backgroundColor: "#f4f8fe",
              border: "1px solid #d0e2ff",
              marginBottom: "48px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#0b72e7", marginBottom: "16px" }}>
              <Sparkles size={20} />
              <h2 style={{ fontSize: "1.25rem", color: "#0c2340", margin: 0, fontWeight: 800 }}>Executive Summary & Key Takeaways</h2>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {article.keyTakeaways.map((point, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#2b334a", fontSize: "0.96rem", lineHeight: "1.6" }}>
                  <CheckCircle2 size={18} style={{ color: "#00b574", flexShrink: 0, marginTop: "3px" }} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px", marginBottom: "56px" }}>
            {article.contentSections.map((section, idx) => (
              <div key={idx}>
                <h2 style={{ fontSize: "1.5rem", color: "#0c2340", marginBottom: "14px", lineHeight: "1.3", fontWeight: 800, letterSpacing: "-0.02em" }}>
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} style={{ color: "#515978", fontSize: "1.02rem", lineHeight: "1.8", marginBottom: "16px" }}>
                    {p}
                  </p>
                ))}
                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {section.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#2b334a", fontSize: "0.98rem", lineHeight: "1.6" }}>
                        <span style={{ color: "#0b72e7", fontWeight: 800 }}>•</span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Statutory Advice Disclaimer */}
          <div
            style={{
              padding: "20px 24px",
              backgroundColor: "#fffbeb",
              border: "1px solid #fed7aa",
              borderRadius: "8px",
              marginBottom: "48px",
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
            }}
          >
            <ShieldAlert size={22} style={{ color: "#d97706", flexShrink: 0, marginTop: "2px" }} />
            <div style={{ fontSize: "0.88rem", color: "#92400e", lineHeight: "1.65" }}>
              <strong>Educational Content Notice:</strong> The information provided in this article is intended solely for general informational and educational purposes. It does not constitute individualized statutory tax, legal, or financial advice. Indian regulatory rules, notifications, and fees evolve frequently; always consult verified professionals before executing corporate filings.
            </div>
          </div>

          {/* Related Services */}
          {article.relatedServices && article.relatedServices.length > 0 && (
            <div style={{ marginBottom: "56px" }}>
              <h3 style={{ fontSize: "1.3rem", color: "#0c2340", marginBottom: "16px", fontWeight: 800 }}>Relevant Consulting Services</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}>
                {article.relatedServices.map((srv, idx) => (
                  <Link
                    key={idx}
                    href={srv.slug ? `/services/${srv.categorySlug}/${srv.slug}` : "/services"}
                    className="rzp-card"
                    style={{
                      padding: "18px 22px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      textDecoration: "none",
                    }}
                  >
                    <span style={{ fontSize: "0.96rem", fontWeight: 700, color: "#0c2340" }}>{srv.title}</span>
                    <ArrowRight size={16} style={{ color: "#0b72e7" }} />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Consultation Box */}
          <div
            className="rzp-card"
            style={{
              padding: "44px 38px",
              backgroundColor: "#ffffff",
              border: "1px solid #d0e2ff",
              boxShadow: "0 12px 35px rgba(11, 114, 231, 0.12)",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <span className="badge badge-blue" style={{ marginBottom: "8px" }}>Discuss Your Questions</span>
              <h3 style={{ fontSize: "1.6rem", color: "#0c2340", marginTop: "4px", fontWeight: 800, letterSpacing: "-0.02em" }}>
                Have Questions About This Topic?
              </h3>
              <p style={{ color: "#515978", fontSize: "0.95rem", marginTop: "4px" }}>
                Submit an enquiry below to discuss applicability to your specific business model.
              </p>
            </div>

            <ConsultationForm
              defaultService={article.title}
              sourcePage={article.title}
              compact={false}
            />
          </div>

          <div style={{ marginTop: "36px", textAlign: "center" }}>
            <Link
              href="/resources"
              style={{
                color: "#0b72e7",
                fontSize: "0.95rem",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                textDecoration: "none",
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to Knowledge Hub</span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
