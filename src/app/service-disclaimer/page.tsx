import React from "react";
import { Metadata } from "next";
import { ShieldAlert, CheckCircle2, Scale, AlertTriangle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Service Disclaimer & Regulatory Transparency — Corpunex",
  description:
    "Important statutory disclosure: Corpunex is an independent consulting entity and not a government portal. Review our regulatory disclosures, qualified professional coordination, and disclaimer.",
};

export default function ServiceDisclaimerPage() {
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
          <Breadcrumb items={[{ label: "Service Disclaimer" }]} />

          <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#0b72e7", marginBottom: "16px" }}>
            <ShieldAlert size={26} />
            <span className="badge badge-blue">Statutory Transparency</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.1rem, 4vw, 3rem)", color: "#0c2340", marginBottom: "16px", lineHeight: "1.2", fontWeight: 800, letterSpacing: "-0.03em" }}>
            Service Disclaimer & Regulatory Disclosures
          </h1>

          <p style={{ fontSize: "1.12rem", color: "#515978", lineHeight: "1.7", margin: 0 }}>
            Please review these essential disclosures regarding the nature of Corpunex consulting services, our status as an independent private enterprise, and our coordination with licensed professionals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: "64px 0" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div className="rzp-card" style={{ padding: "44px 40px", display: "flex", flexDirection: "column", gap: "36px" }}>
            
            {/* Clause 1: Independent Entity */}
            <div>
              <h2 style={{ fontSize: "1.35rem", color: "#0c2340", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px", fontWeight: 800 }}>
                <span style={{ color: "#0b72e7" }}>1.</span> Independent Business Services Entity
              </h2>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75" }}>
                Corpunex is an independent business consulting and professional facilitation firm operating in India. Corpunex is <strong style={{ color: "#0c2340" }}>not a government body, agency, department, or statutory authority</strong>, nor are we affiliated with, sponsored by, or endorsed by the Ministry of Corporate Affairs (MCA), the Goods and Services Tax Network (GSTN), the Department for Promotion of Industry and Internal Trade (DPIIT), the Office of the Controller General of Patents, Designs and Trade Marks (CGPDTM), or any State Government portal.
              </p>
            </div>

            {/* Clause 2: Statutory Approvals */}
            <div>
              <h2 style={{ fontSize: "1.35rem", color: "#0c2340", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px", fontWeight: 800 }}>
                <span style={{ color: "#0b72e7" }}>2.</span> Discretion of Statutory Authorities
              </h2>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75" }}>
                All official registrations, licences, recognitions, certificates, and name approvals are granted exclusively by the respective government ministries and designated registrars. Corpunex provides procedural consulting, application documentation, compliance compilation, and filing assistance. Corpunex cannot and does not guarantee the approval, grant, or unconditional acceptance of any government filing.
              </p>
            </div>

            {/* Clause 3: Qualified Professionals Coordination */}
            <div>
              <h2 style={{ fontSize: "1.35rem", color: "#0c2340", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px", fontWeight: 800 }}>
                <span style={{ color: "#0b72e7" }}>3.</span> Coordination With Qualified Professionals
              </h2>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75" }}>
                Where statutory regulations mandate certification, formal legal opinions, court representation, or independent audits (such as statutory audits under the Companies Act, tax audits under the Income Tax Act, or contested trademark litigation), Corpunex coordinates directly through appropriately qualified and licensed independent professionals, including Chartered Accountants (CAs), Company Secretaries (CSs), Trademark Agents, and Advocates.
              </p>
            </div>

            {/* Clause 4: General Informational Purpose */}
            <div>
              <h2 style={{ fontSize: "1.35rem", color: "#0c2340", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px", fontWeight: 800 }}>
                <span style={{ color: "#0b72e7" }}>4.</span> Not Formal Legal or Tax Advice
              </h2>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75" }}>
                The materials, resources, calculators, timelines, and guides published on this website are provided solely for general informational and educational purposes. While we strive to maintain accurate, up-to-date content, statutory regulations, fee structures, and procedural guidelines in India are subject to frequent government notification. Website content should not be relied upon as individualized statutory legal, tax, or investment advice without direct consulting review.
              </p>
            </div>

            {/* Clause 5: Processing Timelines */}
            <div>
              <h2 style={{ fontSize: "1.35rem", color: "#0c2340", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px", fontWeight: 800 }}>
                <span style={{ color: "#0b72e7" }}>5.</span> Qualified Processing Timelines
              </h2>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75" }}>
                Any turnaround timelines referenced on this website or in preliminary discussions represent standard operational estimates. Actual processing timelines depend heavily on:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", display: "flex", flexDirection: "column", gap: "8px", color: "#515978", fontSize: "0.95rem" }}>
                <li style={{ display: "flex", gap: "8px" }}>
                  <span style={{ color: "#0b72e7", fontWeight: 800 }}>•</span> The speed and completeness with which the client provides legible, verified KYC and premise documentation.
                </li>
                <li style={{ display: "flex", gap: "8px" }}>
                  <span style={{ color: "#0b72e7", fontWeight: 800 }}>•</span> Government portal technical availability (e.g. MCA V3 portal stability, GST portal server load).
                </li>
                <li style={{ display: "flex", gap: "8px" }}>
                  <span style={{ color: "#0b72e7", fontWeight: 800 }}>•</span> Turnaround and scrutiny queries issued by reviewing government officers.
                </li>
              </ul>
            </div>

            {/* Clause 6: Adaptation Notice */}
            <div style={{ padding: "18px 22px", backgroundColor: "#f4f8fe", borderRadius: "8px", border: "1px solid #d0e2ff" }}>
              <p style={{ color: "#515978", fontSize: "0.88rem", lineHeight: "1.65", margin: 0 }}>
                This disclaimer is adapted to Corpunex consulting arrangements. If you have questions regarding our regulatory disclosures or scope boundaries, please contact our consulting office in writing at <a href="mailto:contact@corpunex.com" style={{ color: "#0b72e7", fontWeight: 700 }}>contact@corpunex.com</a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
