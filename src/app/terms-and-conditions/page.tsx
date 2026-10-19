import React from "react";
import { Metadata } from "next";
import { FileText, CheckCircle2, ShieldAlert } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms and Conditions — Consulting Engagement Terms | Corpunex",
  description:
    "Review the Terms and Conditions governing your access to the Corpunex website and our professional business consulting engagements.",
};

export default function TermsAndConditionsPage() {
  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Hero */}
      <section
        style={{
          padding: "56px 0 64px",
          borderBottom: "1px solid #e8edf5",
          background: "radial-gradient(circle at 85% 35%, rgba(11, 114, 231, 0.09) 0%, rgba(240, 246, 255, 0.6) 45%, #ffffff 80%)",
        }}
      >
        <div className="container" style={{ maxWidth: "860px" }}>
          <Breadcrumb items={[{ label: "Terms and Conditions" }]} />

          <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#0b72e7", marginBottom: "16px" }}>
            <FileText size={22} />
            <span className="badge badge-blue">Legal Framework</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.1rem, 4vw, 3rem)", color: "#0c2340", marginBottom: "16px", lineHeight: "1.2", fontWeight: 800, letterSpacing: "-0.03em" }}>
            Terms and Conditions
          </h1>

          <p style={{ fontSize: "1.12rem", color: "#515978", lineHeight: "1.7", margin: 0 }}>
            These terms govern your use of the Corpunex website and set forth the framework under which our consulting engagements are initiated and performed.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: "64px 0" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div className="rzp-card" style={{ padding: "44px 40px", display: "flex", flexDirection: "column", gap: "36px" }}>
            
            <div>
              <h2 style={{ fontSize: "1.35rem", color: "#0c2340", marginBottom: "12px", fontWeight: 800 }}>
                1. Acceptance of Terms
              </h2>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75" }}>
                By accessing, browsing, or utilizing the Corpunex website or submitting consultation inquiries, you acknowledge having read and understood these Terms and Conditions and agree to be bound by them. If you do not agree with any part of these terms, you should discontinue use of the website.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.35rem", color: "#0c2340", marginBottom: "12px", fontWeight: 800 }}>
                2. Scope of Services & Engagement Letters
              </h2>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75" }}>
                Website descriptions of services represent general consulting offerings. Specific client engagements commence only upon mutual agreement of a dedicated scope of work, document checklist, and fee structure communicated in writing. Corpunex reserves the right to decline any engagement request at its professional discretion.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.35rem", color: "#0c2340", marginBottom: "12px", fontWeight: 800 }}>
                3. Client Responsibilities & Accuracy of Information
              </h2>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75" }}>
                The client agrees to provide authentic, verified, legible, and unadulterated documents and records for all statutory filings. The client affirms that all identity, residential, tax, and property ownership proofs submitted are lawful and accurate. Corpunex bears no liability for rejections, fines, or legal penalties arising from fabricated, outdated, or fraudulent client information.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.35rem", color: "#0c2340", marginBottom: "12px", fontWeight: 800 }}>
                4. Statutory Fees & Professional Fees
              </h2>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75" }}>
                Statutory fees (including MCA challans, stamp duty, GST application fees, and trademark government registry fees) are payable directly to the respective government bodies or disbursed on the client&rsquo;s behalf as agreed in writing. Corpunex consulting fees cover professional advisory, document compilation, drafting, and facilitation.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.35rem", color: "#0c2340", marginBottom: "12px", fontWeight: 800 }}>
                5. Limitation of Liability
              </h2>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75" }}>
                Corpunex shall not be liable for any indirect, incidental, consequential, or punitive damages resulting from government portal outages, delayed officer scrutiny, name rejections based on prior trademarks, or client delay in submitting mandatory proofs.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.35rem", color: "#0c2340", marginBottom: "12px", fontWeight: 800 }}>
                6. Governing Law & Jurisdiction
              </h2>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75" }}>
                These terms and any professional engagements initiated shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the competent courts in India.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
