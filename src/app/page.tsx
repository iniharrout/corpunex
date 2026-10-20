import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GlobalHero from "@/components/GlobalHero";
import {
  Rocket,
  Receipt,
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  Scale,
  Building2,
  Clock,
  Sparkles,
  PhoneCall,
  Check,
  FileText,
  Star,
  Users,
} from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";
import FAQAccordion from "@/components/FAQAccordion";
import StatutoryFeeCalculator from "@/components/StatutoryFeeCalculator";

export const metadata: Metadata = {
  title: "Corpunex — Company Registration, GST & Compliance for Indian Businesses",
  description:
    "India's modern corporate services platform. Fast-track company registration, GST return filing, Startup India tax exemptions, and trademark protection with dedicated CA support and zero hidden fees.",
};

export default function HomePage() {
  const homeFaqs = [
    {
      question: "Which business structure is right for me: Private Limited, LLP, or Sole Proprietorship?",
      answer:
        "If you plan to raise venture capital, bring on co-founders, or give equity/ESOPs to early employees, a Private Limited Company is the standard choice. If you run a service agency, consulting firm, or freelance practice and want limited liability protection with lower annual compliance costs, an LLP (Limited Liability Partnership) is ideal. A Sole Proprietorship is best for single-person retail shops or small local traders.",
      category: "Choosing an Entity",
    },
    {
      question: "Can I register a company using my home or rented flat as the registered office?",
      answer:
        "Yes, absolutely. The Ministry of Corporate Affairs permits residential premises to be used as a company's registered office. All you need is a recent electricity bill (under 2 months old), a No Objection Certificate (NOC) from the owner, and a valid rent agreement if the premises are rented.",
      category: "Requirements",
    },
    {
      question: "How long does it take to get a Certificate of Incorporation from the MCA?",
      answer:
        "Once your KYC documents (PAN, Aadhaar, bank statement) are submitted and digitally signed, our fast-track SPICe+ filing typically takes 6 to 8 business days for MCA name approval and incorporation. You will receive your official Certificate of Incorporation, PAN, and TAN directly via email.",
      category: "Timelines",
    },
    {
      question: "Are government fees and stamp duty included in your pricing?",
      answer:
        "We believe in 100% financial transparency. Government statutory fees (such as state stamp duty, MCA filing fees, and trademark challans) are itemized separately from our professional consulting fees. You receive verified official government receipts for every statutory fee paid.",
      category: "Pricing & Transparency",
    },
    {
      question: "What is Startup India (DPIIT) recognition and how does it save me money?",
      answer:
        "Startup India is a flagship government initiative that officially certifies innovative startups. Major benefits include 3 years of 100% corporate income tax holiday (Section 80-IAC), an 80% discount on government patent fees, a 50% discount on trademark fees, and exemption from angel tax scrutiny.",
      category: "Startup Support",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* 1. HERO SECTION (Google Style with Omnibar Search & Live Console Tracker) */}
      <GlobalHero />

      {/* 2. SOCIAL PROOF & KEY METRICS STRIP (Google Style) */}
      <section
        style={{
          padding: "36px 0",
          borderBottom: "1px solid #DADCE0",
          backgroundColor: "#F8F9FA",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "28px",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 700,
                  color: "#1A73E8",
                  lineHeight: 1,
                  fontFamily: "var(--font-heading)",
                }}
              >
                10,000+
              </div>
              <div style={{ fontSize: "0.88rem", color: "#5F6368", marginTop: "6px", fontWeight: 500 }}>
                Businesses Registered &amp; Guided
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 700,
                  color: "#1E8E3E",
                  lineHeight: 1,
                  fontFamily: "var(--font-heading)",
                }}
              >
                6–8 Days
              </div>
              <div style={{ fontSize: "0.88rem", color: "#5F6368", marginTop: "6px", fontWeight: 500 }}>
                Average MCA SPICe+ Turnaround
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 700,
                  color: "#202124",
                  lineHeight: 1,
                  fontFamily: "var(--font-heading)",
                }}
              >
                100%
              </div>
              <div style={{ fontSize: "0.88rem", color: "#5F6368", marginTop: "6px", fontWeight: 500 }}>
                Itemized Government Receipts
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 700,
                  color: "#202124",
                  lineHeight: 1,
                  fontFamily: "var(--font-heading)",
                }}
              >
                4.9 / 5
              </div>
              <div style={{ fontSize: "0.88rem", color: "#5F6368", marginTop: "6px", fontWeight: 500 }}>
                Founder Satisfaction Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION SUITE — Google Cloud / Workspace Bento Architecture */}
      <section style={{ padding: "80px 0", backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 56px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "5px 14px",
                borderRadius: "9999px",
                fontSize: "0.78rem",
                fontWeight: 600,
                backgroundColor: "#E8F0FE",
                color: "#1A73E8",
                border: "1px solid #D2E3FC",
                marginBottom: "14px",
              }}
            >
              <span>Product Suite</span>
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.7rem)",
                color: "#202124",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                marginBottom: "14px",
              }}
            >
              Everything you need to launch, run, and scale.
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#5F6368", lineHeight: "1.6", margin: 0 }}>
              No confusing legal jargon, no surprise costs, and no running around government offices. Choose what you need help with, and our dedicated professionals take care of the rest.
            </p>
          </div>

          {/* Hub 1: Company Registration (Featured Split Row with Real Image) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "48px",
              alignItems: "center",
              padding: "40px",
              backgroundColor: "#F8F9FA",
              borderRadius: "20px",
              border: "1px solid #DADCE0",
              marginBottom: "40px",
            }}
          >
            <div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.74rem",
                  fontWeight: 600,
                  color: "#1A73E8",
                  backgroundColor: "#E8F0FE",
                  border: "1px solid #D2E3FC",
                  padding: "4px 11px",
                  borderRadius: "9999px",
                  marginBottom: "16px",
                }}
              >
                <span>Company Formation Hub</span>
              </span>

              <h3 style={{ fontSize: "1.9rem", color: "#202124", fontWeight: 700, marginBottom: "14px", lineHeight: 1.25 }}>
                Incorporate your company without the paperwork maze.
              </h3>
              <p style={{ color: "#5F6368", fontSize: "1rem", lineHeight: 1.65, marginBottom: "22px" }}>
                Whether you are a tech startup preparing for angel funding or a consulting agency wanting limited liability, we guide you through name reservation, digital signatures, legal MoA/AoA drafting, and official MCA approval.
              </p>

              {/* Bullet Options with Google Green checkmarks */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "26px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.92rem", color: "#3C4043" }}>
                  <CheckCircle2 size={18} style={{ color: "#1E8E3E", flexShrink: 0, marginTop: "2px" }} />
                  <span><strong>Private Limited Company:</strong> Ideal for startups looking to raise venture funding &amp; issue ESOPs.</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.92rem", color: "#3C4043" }}>
                  <CheckCircle2 size={18} style={{ color: "#1E8E3E", flexShrink: 0, marginTop: "2px" }} />
                  <span><strong>Limited Liability Partnership (LLP):</strong> Best for agencies and consultancies seeking lower annual compliance.</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.92rem", color: "#3C4043" }}>
                  <CheckCircle2 size={18} style={{ color: "#1E8E3E", flexShrink: 0, marginTop: "2px" }} />
                  <span><strong>One Person Company (OPC):</strong> 100% solo founder ownership with full corporate limited liability.</span>
                </div>
              </div>

              <Link
                href="/services/business-registration/private-limited-company"
                className="btn-google-primary"
                style={{
                  padding: "11px 24px",
                  fontSize: "0.92rem",
                }}
              >
                <span>Explore Company Registration</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Real Human Photography for Hub 1 */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "380px",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)",
                border: "1px solid #DADCE0",
              }}
            >
              <Image
                src="/images/startup-founders.jpg"
                alt="Young startup founders in India working together after company registration"
                fill
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                  right: "16px",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(6px)",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  fontSize: "0.80rem",
                  fontWeight: 600,
                  color: "#202124",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>✓ Name Approved in 24 hrs</span>
                <span style={{ color: "#1E8E3E" }}>Active Bank Account</span>
              </div>
            </div>
          </div>

          {/* Hub 2 & Hub 3 Grid (Taxation & Startup India) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "32px",
              marginBottom: "40px",
            }}
          >
            {/* Hub 2: GST & Taxes */}
            <div
              style={{
                padding: "36px",
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                border: "1px solid #DADCE0",
                boxShadow: "0 1px 2px 0 rgba(60,64,67,0.12), 0 1px 3px 1px rgba(60,64,67,0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                {/* Photo for Tax Hub */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "220px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    marginBottom: "24px",
                    border: "1px solid #DADCE0",
                  }}
                >
                  <Image
                    src="/images/dashboard-analytics.jpg"
                    alt="GST monthly returns and tax filing dashboard"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div
                  style={{
                    display: "inline-block",
                    padding: "4px 11px",
                    borderRadius: "9999px",
                    fontSize: "0.74rem",
                    fontWeight: 600,
                    backgroundColor: "#E6F4EA",
                    color: "#1E8E3E",
                    border: "1px solid #CEEAD6",
                    marginBottom: "12px",
                  }}
                >
                  GST &amp; Corporate Taxes
                </div>

                <h3 style={{ fontSize: "1.5rem", color: "#202124", fontWeight: 700, marginBottom: "10px" }}>
                  GST registration and monthly returns on autopilot.
                </h3>
                <p style={{ color: "#5F6368", fontSize: "0.94rem", lineHeight: 1.6, marginBottom: "20px" }}>
                  Get your official 15-digit GSTIN without state tax office queries. Our chartered accountants handle your monthly GSTR-1 and GSTR-3B filings, reconcile Input Tax Credit, and ensure you never pay late fees.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "#3C4043" }}>
                    <CheckCircle2 size={16} style={{ color: "#1E8E3E" }} />
                    <span>State &amp; Central GSTIN Registration in 3–5 days</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "#3C4043" }}>
                    <CheckCircle2 size={16} style={{ color: "#1E8E3E" }} />
                    <span>Automated GSTR-1, 3B &amp; Input Tax Credit Matching</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "#3C4043" }}>
                    <CheckCircle2 size={16} style={{ color: "#1E8E3E" }} />
                    <span>Annual Corporate Income Tax (ITR) &amp; CA Balance Sheet Audit</span>
                  </div>
                </div>
              </div>

              <Link
                href="/services/gst-taxation"
                style={{
                  color: "#1A73E8",
                  fontWeight: 600,
                  fontSize: "0.94rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  textDecoration: "none",
                }}
              >
                <span>Learn more about tax services</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Hub 3: Startup India */}
            <div
              style={{
                padding: "36px",
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                border: "1px solid #DADCE0",
                boxShadow: "0 1px 2px 0 rgba(60,64,67,0.12), 0 1px 3px 1px rgba(60,64,67,0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                {/* Photo for Startup India Hub */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "220px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    marginBottom: "24px",
                    border: "1px solid #DADCE0",
                  }}
                >
                  <Image
                    src="/images/compliance-advisor.jpg"
                    alt="Corpunex compliance advisor reviewing DPIIT certificate with founder"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div
                  style={{
                    display: "inline-block",
                    padding: "4px 11px",
                    borderRadius: "9999px",
                    fontSize: "0.74rem",
                    fontWeight: 600,
                    backgroundColor: "#FEF7E0",
                    color: "#B06000",
                    border: "1px solid #FEEFC3",
                    marginBottom: "12px",
                  }}
                >
                  Government Tax Holidays &amp; Grants
                </div>

                <h3 style={{ fontSize: "1.5rem", color: "#202124", fontWeight: 700, marginBottom: "10px" }}>
                  Startup India recognition &amp; 3-year tax exemptions.
                </h3>
                <p style={{ color: "#5F6368", fontSize: "0.94rem", lineHeight: 1.6, marginBottom: "20px" }}>
                  Get officially recognized by the Department for Promotion of Industry and Internal Trade (DPIIT). Unlock 100% corporate tax exemption for 3 consecutive years (Section 80-IAC) and an 80% discount on patent fees.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "#3C4043" }}>
                    <CheckCircle2 size={16} style={{ color: "#1E8E3E" }} />
                    <span>Official DPIIT Recognition Certificate in 10–14 days</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "#3C4043" }}>
                    <CheckCircle2 size={16} style={{ color: "#1E8E3E" }} />
                    <span>Section 80-IAC 3-Year Income Tax Holiday Application</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "#3C4043" }}>
                    <CheckCircle2 size={16} style={{ color: "#1E8E3E" }} />
                    <span>80% Patent &amp; 50% Trademark Government Subsidy</span>
                  </div>
                </div>
              </div>

              <Link
                href="/services/startup-services/startup-india-recognition"
                style={{
                  color: "#1A73E8",
                  fontWeight: 600,
                  fontSize: "0.94rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  textDecoration: "none",
                }}
              >
                <span>Claim Startup India benefits</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Quick Hub Grid: Trademark, Annual ROC & Food Licences */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {/* Card 1: Trademark */}
            <div
              style={{
                padding: "28px",
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                border: "1px solid #DADCE0",
                boxShadow: "0 1px 2px 0 rgba(60,64,67,0.12)",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "#FCE8E6",
                  color: "#D93025",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <Award size={22} />
              </div>
              <h4 style={{ fontSize: "1.2rem", color: "#202124", fontWeight: 700, marginBottom: "8px" }}>
                Trademark &amp; Brand Protection
              </h4>
              <p style={{ color: "#5F6368", fontSize: "0.90rem", lineHeight: 1.6, marginBottom: "16px" }}>
                Protect your brand name, logo, and tagline across all 45 NICE categories with 10-year legal ownership.
              </p>
              <Link
                href="/services/trademark-ip/trademark-registration"
                style={{ color: "#1A73E8", fontWeight: 600, fontSize: "0.88rem", display: "inline-flex", alignItems: "center", gap: "4px" }}
              >
                <span>Protect brand name</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Card 2: Annual ROC Compliance */}
            <div
              style={{
                padding: "28px",
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                border: "1px solid #DADCE0",
                boxShadow: "0 1px 2px 0 rgba(60,64,67,0.12)",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "#E6F4EA",
                  color: "#1E8E3E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <ShieldCheck size={22} />
              </div>
              <h4 style={{ fontSize: "1.2rem", color: "#202124", fontWeight: 700, marginBottom: "8px" }}>
                Annual ROC Governance
              </h4>
              <p style={{ color: "#5F6368", fontSize: "0.90rem", lineHeight: 1.6, marginBottom: "16px" }}>
                Annual returns (AOC-4, MGT-7), Director KYC, and board resolutions to avoid ₹100/day penalties.
              </p>
              <Link
                href="/services/corporate-compliance/annual-roc-compliance"
                style={{ color: "#1A73E8", fontWeight: 600, fontSize: "0.88rem", display: "inline-flex", alignItems: "center", gap: "4px" }}
              >
                <span>Manage compliance</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Card 3: Food & Trade Licences */}
            <div
              style={{
                padding: "28px",
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                border: "1px solid #DADCE0",
                boxShadow: "0 1px 2px 0 rgba(60,64,67,0.12)",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "#E8F0FE",
                  color: "#1A73E8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <FileText size={22} />
              </div>
              <h4 style={{ fontSize: "1.2rem", color: "#202124", fontWeight: 700, marginBottom: "8px" }}>
                FSSAI &amp; Operating Licences
              </h4>
              <p style={{ color: "#5F6368", fontSize: "0.90rem", lineHeight: 1.6, marginBottom: "16px" }}>
                FSSAI food business licensing, Import Export Code (IEC) from DGFT, and Shop &amp; Establishment registration.
              </p>
              <Link
                href="/services/licences-registrations/fssai-licence"
                style={{ color: "#1A73E8", fontWeight: 600, fontSize: "0.88rem", display: "inline-flex", alignItems: "center", gap: "4px" }}
              >
                <span>Get licences</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATUTORY FEE CALCULATOR */}
      <StatutoryFeeCalculator />

      {/* 5. HOW IT WORKS — Simple 3-Step Google Flow */}
      <section style={{ padding: "80px 0", backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 52px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "5px 14px",
                borderRadius: "9999px",
                fontSize: "0.78rem",
                fontWeight: 600,
                backgroundColor: "#E8F0FE",
                color: "#1A73E8",
                border: "1px solid #D2E3FC",
                marginBottom: "12px",
              }}
            >
              <span>Simple 3-Step Flow</span>
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.4vw, 2.6rem)",
                color: "#202124",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                marginBottom: "12px",
              }}
            >
              How Corpunex works for you
            </h2>
            <p style={{ color: "#5F6368", fontSize: "1.02rem" }}>
              No paperwork headaches, no standing in queues. A 100% online process designed for busy founders.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px",
            }}
          >
            {[
              {
                step: "1",
                title: "Tell us about your business",
                desc: "Fill out a simple 5-minute online questionnaire with your proposed business name and founder details. No complex legal forms.",
              },
              {
                step: "2",
                title: "Your dedicated CA prepares everything",
                desc: "Our chartered accountants and corporate advocates verify your documents, draft your MoA/AoA, and file directly with the government.",
              },
              {
                step: "3",
                title: "Receive your certificate & bank account",
                desc: "Get your official Certificate of Incorporation, PAN, TAN, and instant corporate bank account delivered straight to your email.",
              },
            ].map((st, idx) => (
              <div
                key={idx}
                style={{
                  padding: "36px 30px",
                  borderRadius: "16px",
                  backgroundColor: "#F8F9FA",
                  border: "1px solid #DADCE0",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    backgroundColor: "#1A73E8",
                    color: "#FFFFFF",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  {st.step}
                </div>

                <h3 style={{ fontSize: "1.25rem", color: "#202124", fontWeight: 700, marginBottom: "10px" }}>
                  {st.title}
                </h3>
                <p style={{ color: "#5F6368", fontSize: "0.94rem", lineHeight: 1.6, margin: 0 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. REAL CUSTOMER STORIES (Google Enterprise Showcase) */}
      <section style={{ padding: "80px 0", backgroundColor: "#F8F9FA", borderTop: "1px solid #DADCE0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "660px", margin: "0 auto 48px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "5px 14px",
                borderRadius: "9999px",
                fontSize: "0.78rem",
                fontWeight: 600,
                backgroundColor: "#FFFFFF",
                color: "#1A73E8",
                border: "1px solid #DADCE0",
                marginBottom: "12px",
                boxShadow: "0 1px 2px 0 rgba(60,64,67,0.15)",
              }}
            >
              <span>Customer Stories</span>
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.4vw, 2.6rem)",
                color: "#202124",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                marginBottom: "12px",
              }}
            >
              Trusted by 10,000+ Indian Entrepreneurs
            </h2>
            <p style={{ color: "#5F6368", fontSize: "1.02rem" }}>
              See how founders like you launched and scaled with complete legal peace of mind.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "28px",
            }}
          >
            {[
              {
                quote:
                  "Corpunex got our Private Limited incorporated in just 7 days with zero back-and-forth. The itemized government challan receipts gave our angel investors complete confidence.",
                author: "Rohit Verma",
                role: "Co-Founder & CEO",
                company: "Kronos Tech (Delhi)",
                achievement: "Incorporated in 7 Days",
              },
              {
                quote:
                  "Securing Startup India recognition and the Section 80-IAC 3-year tax exemption saved us lakhs. Their CAs understood our tech business model and drafted our application seamlessly.",
                author: "Ananya Patnaik",
                role: "Founder",
                company: "BioVeda Health (Odisha)",
                achievement: "Saved ₹1.8L on Patent Fees",
              },
              {
                quote:
                  "Our monthly GST returns (GSTR-1, 3B) and annual ROC compliance are completely automated now. We never worry about government notices or late penalty fees anymore.",
                author: "Siddharth Rao",
                role: "Managing Director",
                company: "Strata Labs (Bengaluru)",
                achievement: "Zero Default for 3 Years",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                style={{
                  padding: "32px",
                  borderRadius: "16px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #DADCE0",
                  boxShadow: "0 1px 3px 0 rgba(60,64,67,0.15)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", color: "#F9AB00", gap: "2px", marginBottom: "14px" }}>
                    <Star size={16} fill="#F9AB00" stroke="#F9AB00" />
                    <Star size={16} fill="#F9AB00" stroke="#F9AB00" />
                    <Star size={16} fill="#F9AB00" stroke="#F9AB00" />
                    <Star size={16} fill="#F9AB00" stroke="#F9AB00" />
                    <Star size={16} fill="#F9AB00" stroke="#F9AB00" />
                  </div>
                  <p
                    style={{
                      color: "#3C4043",
                      fontSize: "0.96rem",
                      lineHeight: 1.65,
                      marginBottom: "20px",
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div style={{ borderTop: "1px solid #F1F3F4", paddingTop: "16px" }}>
                  <div style={{ fontWeight: 700, color: "#202124", fontSize: "0.96rem" }}>{t.author}</div>
                  <div style={{ fontSize: "0.82rem", color: "#5F6368", marginTop: "2px" }}>
                    {t.role} • <strong>{t.company}</strong>
                  </div>
                  <div
                    style={{
                      marginTop: "8px",
                      display: "inline-block",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "#1E8E3E",
                      backgroundColor: "#E6F4EA",
                      padding: "2px 8px",
                      borderRadius: "9999px",
                    }}
                  >
                    ✓ {t.achievement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION SECTION */}
      <section style={{ padding: "80px 0", backgroundColor: "#FFFFFF", borderTop: "1px solid #DADCE0" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "5px 14px",
                borderRadius: "9999px",
                fontSize: "0.78rem",
                fontWeight: 600,
                backgroundColor: "#E8F0FE",
                color: "#1A73E8",
                border: "1px solid #D2E3FC",
                marginBottom: "12px",
              }}
            >
              <span>Common Questions</span>
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.4vw, 2.6rem)",
                color: "#202124",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                marginBottom: "12px",
              }}
            >
              Frequently Asked Questions
            </h2>
            <p style={{ color: "#5F6368", fontSize: "1.02rem" }}>
              Quick, honest answers to the questions founders ask us every day.
            </p>
          </div>

          <FAQAccordion items={homeFaqs} defaultOpenIndex={0} />

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link
              href="/faq"
              style={{
                color: "#1A73E8",
                fontWeight: 600,
                fontSize: "0.94rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                textDecoration: "none",
              }}
            >
              <span>View all 30+ frequently asked questions</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. GOOGLE-STYLE FINAL CONVERSION SECTION */}
      <section
        style={{
          padding: "80px 0",
          backgroundColor: "#F8F9FA",
          borderTop: "1px solid #DADCE0",
        }}
      >
        <div className="container" style={{ maxWidth: "880px" }}>
          <div
            style={{
              padding: "48px 40px",
              borderRadius: "20px",
              border: "1px solid #DADCE0",
              boxShadow: "0 1px 3px 0 rgba(60,64,67,0.30), 0 4px 8px 3px rgba(60,64,67,0.15)",
              backgroundColor: "#FFFFFF",
            }}
          >
            <div style={{ textAlign: "center", maxWidth: "620px", margin: "0 auto 36px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "5px 14px",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  backgroundColor: "#E8F0FE",
                  color: "#1A73E8",
                  border: "1px solid #D2E3FC",
                  marginBottom: "14px",
                }}
              >
                <span>Free Initial Advisory</span>
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.4vw, 2.5rem)",
                  color: "#202124",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  marginBottom: "12px",
                }}
              >
                Ready to launch your business in India?
              </h2>
              <p style={{ color: "#5F6368", fontSize: "1rem", margin: 0, lineHeight: 1.6 }}>
                Speak directly with our senior corporate advisory desk. We review your requirements and provide an itemized government fee breakdown and timeline within 24 business hours.
              </p>
            </div>

            <ConsultationForm
              defaultService="Private Limited Company Registration"
              sourcePage="Homepage Bottom Section"
              compact={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
