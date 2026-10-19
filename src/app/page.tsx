import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AbstractHeroBackground from "@/components/AbstractHeroBackground";
import GlobalHero from "@/components/GlobalHero";
import { 
  Building2, 
  Rocket, 
  Receipt, 
  ShieldCheck, 
  Award, 
  FileCheck2, 
  Calculator, 
  FileText, 
  HeartHandshake, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  ShieldAlert,
  Clock,
  Check,
  TrendingUp,
  FileBadge,
  UserCheck,
  ChevronRight,
  Zap,
  Star,
  Scale,
  PhoneCall
} from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";
import FAQAccordion from "@/components/FAQAccordion";
import StatutoryFeeCalculator from "@/components/StatutoryFeeCalculator";

export const metadata: Metadata = {
  title: "Corpunex — Business Registration, Taxation & Corporate Compliance in India",
  description:
    "India's trusted business consulting platform. Fast-track company registration, Startup India recognition, GST filings, trademark protection, and corporate ROC compliance with complete statutory transparency.",
};

export default function HomePage() {
  const homeFaqs = [
    {
      question: "Which business structure should I choose: Private Limited or LLP?",
      answer:
        "A Private Limited Company is ideal if you plan to raise venture capital, issue ESOPs to employees, or build a scalable startup. An LLP (Limited Liability Partnership) is best for service firms, consulting agencies, and bootstrap ventures looking for limited liability with lower annual statutory compliance costs.",
      category: "Business Registration",
    },
    {
      question: "What is Startup India (DPIIT) Recognition and how does it help?",
      answer:
        "Startup India recognition is a flagship initiative by the Government of India that officially certifies your business as an innovative startup. Key benefits include eligibility for 3-year income tax exemption (Section 80-IAC), 80% discount on government patent fees, 50% discount on trademark fees, and easier access to public procurement tenders.",
      category: "Startup Support",
    },
    {
      question: "How long does it take to register a Private Limited Company?",
      answer:
        "Standard company registration in India typically takes 7 to 10 business days once all required KYC documents (PAN, Aadhaar, bank statement) and office address proofs are verified and digitally signed. Actual turnaround depends on Ministry of Corporate Affairs (MCA) portal processing times.",
      category: "Process & Timelines",
    },
    {
      question: "Can I use my residential home or rented flat as my registered company office?",
      answer:
        "Yes, the Companies Act allows any residential premises to be used as a company's registered office, provided you submit an electricity/water bill (not older than 2 months), an NOC (No Objection Certificate) from the property owner, and a valid rent agreement if the premises are rented.",
      category: "Documentation",
    },
    {
      question: "Are government fees included in your consulting fee?",
      answer:
        "At Corpunex, we maintain 100% financial transparency. Government statutory fees (such as MCA name reservation fees, state stamp duties, and trademark registry challans) are itemized separately from our professional consulting fees. You receive official government payment receipts for every statutory fee paid.",
      category: "Pricing & Fees",
    },
  ];

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      {/* 1. HERO SECTION (Global Enterprise Tech Platform) */}
      <GlobalHero />


      {/* 2. STATS & SOCIAL PROOF STRIP */}
      <section style={{ padding: "40px 0", borderBottom: "1px solid #e8edf5", backgroundColor: "#f8fafc" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "28px",
              textAlign: "center",
            }}
          >
            <div>
              <div style={{ fontSize: "2.4rem", fontWeight: 800, color: "#0b72e7", lineHeight: 1.1 }}>10,000+</div>
              <div style={{ fontSize: "0.9rem", color: "#515978", marginTop: "4px", fontWeight: 600 }}>Filings & Registrations Facilitated</div>
            </div>
            <div>
              <div style={{ fontSize: "2.4rem", fontWeight: 800, color: "#00b574", lineHeight: 1.1 }}>100%</div>
              <div style={{ fontSize: "0.9rem", color: "#515978", marginTop: "4px", fontWeight: 600 }}>Statutory Fee Transparency</div>
            </div>
            <div>
              <div style={{ fontSize: "2.4rem", fontWeight: 800, color: "#0c2340", lineHeight: 1.1 }}>28+</div>
              <div style={{ fontSize: "0.9rem", color: "#515978", marginTop: "4px", fontWeight: 600 }}>Indian States & UTs Covered</div>
            </div>
            <div>
              <div style={{ fontSize: "2.4rem", fontWeight: 800, color: "#ff8a00", lineHeight: 1.1 }}>24 hrs</div>
              <div style={{ fontSize: "0.9rem", color: "#515978", marginTop: "4px", fontWeight: 600 }}>Consultation Response Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT SUITE SHOWCASE (Razorpay "The all in one finance platform" Style) */}
      <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 56px" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 2.8rem)", color: "#0c2340", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px" }}>
              The all-in-one <span style={{ color: "#00b574" }}>business compliance platform</span> you&rsquo;ve been looking for.
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#515978", lineHeight: "1.7", margin: 0 }}>
              Say goodbye to fragmented consultants, opaque government fees, and missed regulatory deadlines. Corpunex brings company setup, taxation, and legal documentation under one structured advisory roof.
            </p>
          </div>

          {/* Featured Feature Card 1: Incorporation & Setup with Image */}
          <div
            className="rzp-card"
            style={{
              padding: "0",
              overflow: "hidden",
              marginBottom: "40px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              alignItems: "center",
            }}
          >
            <div style={{ padding: "48px 40px" }}>
              <span className="badge badge-blue" style={{ marginBottom: "14px" }}>
                Company Formation
              </span>
              <h3 style={{ fontSize: "1.9rem", color: "#0c2340", fontWeight: 800, marginBottom: "14px", lineHeight: "1.25" }}>
                Fast-track your Private Limited, LLP, or OPC setup.
              </h3>
              <p style={{ color: "#515978", fontSize: "1rem", lineHeight: "1.7", marginBottom: "24px" }}>
                We guide you through RUN name reservation, SPICe+ Part A & B drafting, digital signature certificates (DSC), Memorandum of Association (MoA), and official incorporation with the Ministry of Corporate Affairs (MCA).
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "28px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.9rem", color: "#0c2340", fontWeight: 600 }}>
                  <CheckCircle2 size={18} style={{ color: "#00b574", flexShrink: 0, marginTop: "2px" }} />
                  <span>Free PAN & TAN Allocation</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.9rem", color: "#0c2340", fontWeight: 600 }}>
                  <CheckCircle2 size={18} style={{ color: "#00b574", flexShrink: 0, marginTop: "2px" }} />
                  <span>Class 3 DSC Included</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.9rem", color: "#0c2340", fontWeight: 600 }}>
                  <CheckCircle2 size={18} style={{ color: "#00b574", flexShrink: 0, marginTop: "2px" }} />
                  <span>Bank Account Resolution</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.9rem", color: "#00b574", fontWeight: 600 }}>
                  <CheckCircle2 size={18} style={{ color: "#00b574", flexShrink: 0, marginTop: "2px" }} />
                  <span>Verified Government Challans</span>
                </div>
              </div>

              <Link
                href="/services/business-registration/private-limited-company"
                className="btn btn-primary"
                style={{ padding: "12px 24px" }}
              >
                <span>Learn More & Check Requirements</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div style={{ position: "relative", height: "100%", minHeight: "360px", backgroundColor: "#f8fafc" }}>
              <Image
                src="/images/founders-meeting.jpg"
                alt="Founders reviewing company incorporation documents"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Featured Feature Card 2: Taxation & Analytics with Image */}
          <div
            className="rzp-card"
            style={{
              padding: "0",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              alignItems: "center",
            }}
          >
            <div style={{ position: "relative", height: "100%", minHeight: "360px", backgroundColor: "#f8fafc" }}>
              <Image
                src="/images/dashboard-analytics.jpg"
                alt="GST compliance and corporate tax reporting dashboard"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div style={{ padding: "48px 40px" }}>
              <span className="badge badge-green" style={{ marginBottom: "14px" }}>
                Tax & Financial Advisory
              </span>
              <h3 style={{ fontSize: "1.9rem", color: "#0c2340", fontWeight: 800, marginBottom: "14px", lineHeight: "1.25" }}>
                GST filing, corporate taxes, and bookkeeping without stress.
              </h3>
              <p style={{ color: "#515978", fontSize: "1rem", lineHeight: "1.7", marginBottom: "24px" }}>
                Stay audit-ready and avoid hefty late fees. Our dedicated Chartered Accountants manage your monthly GST return filings (GSTR-1, GSTR-3B), Input Tax Credit (ITC) matching, advance tax estimates, and annual balance sheet preparations.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "28px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.9rem", color: "#0c2340", fontWeight: 600 }}>
                  <CheckCircle2 size={18} style={{ color: "#0b72e7", flexShrink: 0, marginTop: "2px" }} />
                  <span>Monthly GST Returns (1 & 3B)</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.9rem", color: "#0c2340", fontWeight: 600 }}>
                  <CheckCircle2 size={18} style={{ color: "#0b72e7", flexShrink: 0, marginTop: "2px" }} />
                  <span>Input Tax Credit Reconciliation</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.9rem", color: "#0c2340", fontWeight: 600 }}>
                  <CheckCircle2 size={18} style={{ color: "#0b72e7", flexShrink: 0, marginTop: "2px" }} />
                  <span>Annual Corporate Income Tax</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.9rem", color: "#0c2340", fontWeight: 600 }}>
                  <CheckCircle2 size={18} style={{ color: "#0b72e7", flexShrink: 0, marginTop: "2px" }} />
                  <span>TDS Quarterly Filings</span>
                </div>
              </div>

              <Link
                href="/services/gst-taxation"
                className="btn btn-secondary"
                style={{ padding: "12px 24px" }}
              >
                <span>Explore Tax & GST Advisory</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Featured Feature Card 3: Ongoing Compliance & Advisory with Image */}
          <div
            className="rzp-card"
            style={{
              padding: "0",
              overflow: "hidden",
              marginTop: "40px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              alignItems: "center",
            }}
          >
            <div style={{ padding: "48px 40px" }}>
              <span className="badge badge-purple" style={{ marginBottom: "14px" }}>
                Secretarial & Annual Governance
              </span>
              <h3 style={{ fontSize: "1.9rem", color: "#0c2340", fontWeight: 800, marginBottom: "14px", lineHeight: "1.25" }}>
                Never miss an ROC deadline, AGM, or statutory filing.
              </h3>
              <p style={{ color: "#515978", fontSize: "1rem", lineHeight: "1.7", marginBottom: "24px" }}>
                Protect your company from MCA disqualification and severe director penalties. Corpunex acts as your outsourced compliance department—managing annual returns (AOC-4, MGT-7), Director KYC, Board Resolutions, and statutory registers.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "28px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.9rem", color: "#0c2340", fontWeight: 600 }}>
                  <CheckCircle2 size={18} style={{ color: "#00b574", flexShrink: 0, marginTop: "2px" }} />
                  <span>Annual ROC Filings (AOC-4 & MGT-7)</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.9rem", color: "#0c2340", fontWeight: 600 }}>
                  <CheckCircle2 size={18} style={{ color: "#00b574", flexShrink: 0, marginTop: "2px" }} />
                  <span>Annual Director KYC Verification</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.9rem", color: "#0c2340", fontWeight: 600 }}>
                  <CheckCircle2 size={18} style={{ color: "#00b574", flexShrink: 0, marginTop: "2px" }} />
                  <span>Board Meeting Minutes & Resolutions</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.9rem", color: "#00b574", fontWeight: 600 }}>
                  <CheckCircle2 size={18} style={{ color: "#00b574", flexShrink: 0, marginTop: "2px" }} />
                  <span>Statutory Register Maintenance</span>
                </div>
              </div>

              <Link
                href="/services/corporate-compliance/annual-roc-compliance"
                className="btn btn-primary"
                style={{ padding: "12px 24px" }}
              >
                <span>Protect Your Company Today</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div style={{ position: "relative", height: "100%", minHeight: "360px", backgroundColor: "#f8fafc" }}>
              <Image
                src="/images/compliance-advisor.jpg"
                alt="Corporate compliance advisor and founder reviewing legal certificates"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE STATUTORY FEE CALCULATOR */}
      <StatutoryFeeCalculator />

      {/* 5. CORE SERVICES GRID (Daylight Card Grid) */}
      <section style={{ padding: "80px 0", backgroundColor: "#f8fafc", borderTop: "1px solid #e8edf5" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 48px" }}>
            <span className="badge badge-blue" style={{ marginBottom: "12px" }}>
              Full Service Catalog
            </span>
            <h2 style={{ fontSize: "2.2rem", color: "#0c2340", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "12px" }}>
              Everything your business needs in India.
            </h2>
            <p style={{ color: "#515978", fontSize: "1rem" }}>
              Select a service below to review eligibility, document checklists, and consulting roadmaps.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {/* Service 1 */}
            <div className="rzp-card" style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "10px", backgroundColor: "#eef4ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#0b72e7" }}>
                    <Building2 size={24} />
                  </div>
                  <span className="badge badge-blue">Most Popular</span>
                </div>
                <h3 style={{ fontSize: "1.28rem", color: "#0c2340", fontWeight: 800, marginBottom: "8px" }}>
                  Private Limited Company
                </h3>
                <p style={{ color: "#515978", fontSize: "0.92rem", lineHeight: "1.65", marginBottom: "20px" }}>
                  The gold standard for startups raising venture capital, issuing employee ESOPs, and building scalable ventures with limited liability protection.
                </p>
              </div>
              <div style={{ borderTop: "1px solid #e8edf5", paddingTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.82rem", color: "#7f8ba4" }}>7–10 Days Turnaround</span>
                <Link href="/services/business-registration/private-limited-company" style={{ color: "#0b72e7", fontWeight: 700, fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="rzp-card" style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "10px", backgroundColor: "#e6f9f2", display: "flex", alignItems: "center", justifyContent: "center", color: "#00b574" }}>
                    <Rocket size={24} />
                  </div>
                  <span className="badge badge-green">Tax Benefits</span>
                </div>
                <h3 style={{ fontSize: "1.28rem", color: "#0c2340", fontWeight: 800, marginBottom: "8px" }}>
                  Startup India Recognition
                </h3>
                <p style={{ color: "#515978", fontSize: "0.92rem", lineHeight: "1.65", marginBottom: "20px" }}>
                  Official DPIIT recognition unlocking 3-year income tax holiday, patent fee discounts up to 80%, trademark discounts, and fast-track public tender access.
                </p>
              </div>
              <div style={{ borderTop: "1px solid #e8edf5", paddingTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.82rem", color: "#7f8ba4" }}>Section 80-IAC Ready</span>
                <Link href="/services/startup-services/startup-india-recognition" style={{ color: "#0b72e7", fontWeight: 700, fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="rzp-card" style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "10px", backgroundColor: "#fff4e6", display: "flex", alignItems: "center", justifyContent: "center", color: "#ff8a00" }}>
                    <Receipt size={24} />
                  </div>
                  <span className="badge badge-amber">Compliance</span>
                </div>
                <h3 style={{ fontSize: "1.28rem", color: "#0c2340", fontWeight: 800, marginBottom: "8px" }}>
                  GST Registration & Returns
                </h3>
                <p style={{ color: "#515978", fontSize: "0.92rem", lineHeight: "1.65", marginBottom: "20px" }}>
                  New GSTIN setup, jurisdiction verification, monthly return filings (GSTR-1, 3B), and input tax credit reconciliation to avoid officer scrutiny.
                </p>
              </div>
              <div style={{ borderTop: "1px solid #e8edf5", paddingTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.82rem", color: "#7f8ba4" }}>State & Central GST</span>
                <Link href="/services/gst-taxation/gst-registration" style={{ color: "#0b72e7", fontWeight: 700, fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="rzp-card" style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "10px", backgroundColor: "#f3e8ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#9333ea" }}>
                    <Award size={24} />
                  </div>
                  <span className="badge" style={{ backgroundColor: "#f3e8ff", color: "#9333ea", border: "1px solid #e9d5ff" }}>Brand Protection</span>
                </div>
                <h3 style={{ fontSize: "1.28rem", color: "#0c2340", fontWeight: 800, marginBottom: "8px" }}>
                  Trademark Registration
                </h3>
                <p style={{ color: "#515978", fontSize: "0.92rem", lineHeight: "1.65", marginBottom: "20px" }}>
                  Comprehensive brand name search across 45 NICE classes, TM application filing, Vienna codification, and handling examination reports.
                </p>
              </div>
              <div style={{ borderTop: "1px solid #e8edf5", paddingTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.82rem", color: "#7f8ba4" }}>10-Year Protection</span>
                <Link href="/services/trademark-ip/trademark-registration" style={{ color: "#0b72e7", fontWeight: 700, fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Service 5 */}
            <div className="rzp-card" style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "10px", backgroundColor: "#eef4ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#0b72e7" }}>
                    <FileCheck2 size={24} />
                  </div>
                  <span className="badge badge-blue">Mandatory ROC</span>
                </div>
                <h3 style={{ fontSize: "1.28rem", color: "#0c2340", fontWeight: 800, marginBottom: "8px" }}>
                  Annual Corporate Compliance
                </h3>
                <p style={{ color: "#515978", fontSize: "0.92rem", lineHeight: "1.65", marginBottom: "20px" }}>
                  Annual ROC filings (Form AOC-4, MGT-7), Director KYC (DIR-3 KYC), AGM resolutions, and maintaining statutory registers to prevent heavy daily penalties.
                </p>
              </div>
              <div style={{ borderTop: "1px solid #e8edf5", paddingTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.82rem", color: "#7f8ba4" }}>Avoid ₹100/day fines</span>
                <Link href="/services/corporate-compliance/annual-roc-compliance" style={{ color: "#0b72e7", fontWeight: 700, fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Service 6 */}
            <div className="rzp-card" style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "10px", backgroundColor: "#e6f9f2", display: "flex", alignItems: "center", justifyContent: "center", color: "#00b574" }}>
                    <ShieldCheck size={24} />
                  </div>
                  <span className="badge badge-green">Food & Trade</span>
                </div>
                <h3 style={{ fontSize: "1.28rem", color: "#0c2340", fontWeight: 800, marginBottom: "8px" }}>
                  FSSAI & Operating Licences
                </h3>
                <p style={{ color: "#515978", fontSize: "0.92rem", lineHeight: "1.65", marginBottom: "20px" }}>
                  FSSAI food business registration, state & central licences for manufacturers/restaurants, Import Export Code (IEC) from DGFT, and Shop Act permits.
                </p>
              </div>
              <div style={{ borderTop: "1px solid #e8edf5", paddingTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.82rem", color: "#7f8ba4" }}>Food Safety Compliance</span>
                <Link href="/services/licences-registrations/fssai-licence" style={{ color: "#0b72e7", fontWeight: 700, fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/services" className="btn btn-primary" style={{ padding: "14px 28px" }}>
              <span>View All 9 Service Categories & Detailed Directory</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS: 4-STEP PROCESS (Razorpay Clean Step Workflow) */}
      <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 56px" }}>
            <span className="badge badge-blue" style={{ marginBottom: "12px" }}>
              Procedural Transparency
            </span>
            <h2 style={{ fontSize: "2.2rem", color: "#0c2340", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "12px" }}>
              How Corpunex works for you.
            </h2>
            <p style={{ color: "#515978", fontSize: "1rem" }}>
              A transparent, 4-step workflow designed to save you weeks of bureaucratic confusion.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                step: "01",
                title: "Advisory & Structure Selection",
                desc: "We discuss your business model, shareholder distribution, and growth plans to recommend the right entity structure.",
              },
              {
                step: "02",
                title: "Digital Document Collection",
                desc: "Submit your KYC proofs and registered office documents through our secure online checklist. Zero paper hassles.",
              },
              {
                step: "03",
                title: "Statutory Drafting & Filing",
                desc: "Our Chartered Accountants and legal personnel compile e-forms, acquire DSCs, and submit applications directly to government portals.",
              },
              {
                step: "04",
                title: "Official Approval Delivery",
                desc: "Receive your verified Incorporation Certificate, PAN, TAN, and compliance calendar to start operations immediately.",
              },
            ].map((st, idx) => (
              <div
                key={idx}
                className="rzp-card"
                style={{
                  padding: "32px 26px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: "#e2edfd",
                    lineHeight: 1,
                    marginBottom: "16px",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {st.step}
                </div>
                <h3 style={{ fontSize: "1.15rem", color: "#0c2340", fontWeight: 800, marginBottom: "8px" }}>
                  {st.title}
                </h3>
                <p style={{ color: "#515978", fontSize: "0.9rem", lineHeight: "1.65", margin: 0 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMPARISON MATRIX: WHY DISCERNING FOUNDERS CHOOSE CORPUNEX */}
      <section style={{ padding: "80px 0", backgroundColor: "#f8fafc", borderTop: "1px solid #e8edf5" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 48px" }}>
            <span className="badge badge-blue" style={{ marginBottom: "12px" }}>
              Commercial Standards & Accountability
            </span>
            <h2 style={{ fontSize: "2.2rem", color: "#0c2340", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "12px" }}>
              Why Discerning Founders Choose Corpunex
            </h2>
            <p style={{ color: "#515978", fontSize: "1rem", lineHeight: "1.6" }}>
              Compare our structured professional corporate advisory against unorganized local brokers and generic low-cost aggregators.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 20px -2px rgba(15, 23, 42, 0.05)",
              overflowX: "auto",
            }}
          >
            <table
              style={{
                width: "100%",
                minWidth: "760px",
                borderCollapse: "collapse",
                textAlign: "left",
                fontSize: "0.92rem",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid #e2e8f0", backgroundColor: "#fafcff" }}>
                  <th style={{ padding: "20px 24px", color: "#0c2340", fontWeight: 700, width: "28%" }}>
                    Standard of Service
                  </th>
                  <th
                    style={{
                      padding: "20px 24px",
                      color: "#0066f5",
                      fontWeight: 800,
                      width: "32%",
                      backgroundColor: "#f0f6ff",
                      borderLeft: "2px solid #0066f5",
                      borderRight: "2px solid #0066f5",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <ShieldCheck size={20} style={{ color: "#0066f5" }} />
                      <span>Corpunex Advisory</span>
                    </div>
                  </th>
                  <th style={{ padding: "20px 24px", color: "#64748b", fontWeight: 600, width: "20%" }}>
                    Offline Local Brokers
                  </th>
                  <th style={{ padding: "20px 24px", color: "#64748b", fontWeight: 600, width: "20%" }}>
                    Generic Portals
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Statutory Fee Transparency",
                    cx: "100% itemized MCA/GST challans provided directly. Zero hidden markup on govt fees.",
                    offline: "Opaque lump sum pricing with surprise demands later for state stamp duty.",
                    portals: "Misleading 'Free' claims hiding mandatory recurring monthly retainers.",
                  },
                  {
                    feature: "Professional Expertise",
                    cx: "Directly handled by qualified CAs, CSs & corporate advocates with verified credentials.",
                    offline: "Unvetted freelance runners without legal drafting competence.",
                    portals: "Call center telemarketers reading generic scripts without legal qualification.",
                  },
                  {
                    feature: "MoA & AoA Customization",
                    cx: "Tailored object clauses, cap table structuring, ESOP reservations, and founder protections.",
                    offline: "Outdated xerox templates prone to MCA ROC rejection queries.",
                    portals: "Rigid automated generic form generator unsuitable for VC due diligence.",
                  },
                  {
                    feature: "Post-Incorporation Onboarding",
                    cx: "Complete 30-day compliance checklist: ADT-1, INC-20A, Board Resolutions & bank setup.",
                    offline: "Complete abandonment once the Certificate of Incorporation is handed over.",
                    portals: "Aggressive automated marketing calls demanding expensive add-on subscriptions.",
                  },
                  {
                    feature: "Data Privacy & KYC Security",
                    cx: "Confidential document vault under strict non-disclosure; zero data monetization.",
                    offline: "Physical PAN & Aadhaar copies left insecurely at commercial print shops.",
                    portals: "Founder phone numbers frequently shared with unsolicited third-party lenders.",
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: idx < 4 ? "1px solid #f1f5f9" : "none",
                      backgroundColor: idx % 2 === 0 ? "#ffffff" : "#fbfdff",
                    }}
                  >
                    <td style={{ padding: "18px 24px", color: "#0c2340", fontWeight: 600 }}>
                      {row.feature}
                    </td>
                    <td
                      style={{
                        padding: "18px 24px",
                        color: "#0f172a",
                        fontWeight: 600,
                        backgroundColor: "#f4f8ff",
                        borderLeft: "2px solid #0066f5",
                        borderRight: "2px solid #0066f5",
                        lineHeight: 1.5,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                        <CheckCircle2 size={16} style={{ color: "#059669", flexShrink: 0, marginTop: "3px" }} />
                        <span>{row.cx}</span>
                      </div>
                    </td>
                    <td style={{ padding: "18px 24px", color: "#64748b", lineHeight: 1.5 }}>
                      {row.offline}
                    </td>
                    <td style={{ padding: "18px 24px", color: "#64748b", lineHeight: 1.5 }}>
                      {row.portals}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e8edf5" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="badge badge-blue" style={{ marginBottom: "12px" }}>
              Got Questions?
            </span>
            <h2 style={{ fontSize: "2.2rem", color: "#0c2340", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "12px" }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: "#515978", fontSize: "1rem" }}>
              Clear answers to the most common questions entrepreneurs ask about registrations in India.
            </p>
          </div>

          <FAQAccordion items={homeFaqs} defaultOpenIndex={0} />

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link href="/faq" style={{ color: "#0b72e7", fontWeight: 700, fontSize: "0.95rem", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <span>View All 30+ Frequently Asked Questions</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. HIGH-CONVERTING CONSULTATION FORM SECTION */}
      <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
        <div className="container" style={{ maxWidth: "880px" }}>
          <div
            className="rzp-card"
            style={{
              padding: "48px 44px",
              boxShadow: "0 16px 40px -10px rgba(11, 114, 231, 0.14)",
              border: "1px solid #d0e2ff",
            }}
          >
            <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 36px" }}>
              <span className="badge badge-blue" style={{ marginBottom: "12px" }}>
                Direct Consultation
              </span>
              <h2 style={{ fontSize: "2.1rem", color: "#0c2340", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "10px" }}>
                Request an Itemized Quotation
              </h2>
              <p style={{ color: "#515978", fontSize: "0.98rem", margin: 0 }}>
                Speak with our business consulting desk. We will review your requirements and provide a clear timeline and cost estimate within 24 business hours.
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
