import React from "react";
import { Metadata } from "next";
import { ShieldCheck, Lock, Eye, Database } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy — Client Data Protection & Privacy Practices | Corpunex",
  description:
    "Learn how Corpunex collects, uses, handles, and protects your personal and enterprise business information under applicable Indian data privacy regulations.",
};

export default function PrivacyPolicyPage() {
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
          <Breadcrumb items={[{ label: "Privacy Policy" }]} />

          <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#0b72e7", marginBottom: "16px" }}>
            <Lock size={22} />
            <span className="badge badge-blue">Privacy & Data Governance</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.1rem, 4vw, 3rem)", color: "#0c2340", marginBottom: "16px", lineHeight: "1.2", fontWeight: 800, letterSpacing: "-0.03em" }}>
            Privacy Policy
          </h1>

          <p style={{ fontSize: "1.12rem", color: "#515978", lineHeight: "1.7", margin: 0 }}>
            At Corpunex, we prioritize the confidentiality and security of our clients&rsquo; personal, financial, and corporate information. This policy describes our practices regarding information collection, usage, and safeguarding.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: "64px 0" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div className="rzp-card" style={{ padding: "44px 40px", display: "flex", flexDirection: "column", gap: "36px" }}>
            
            <div>
              <h2 style={{ fontSize: "1.35rem", color: "#0c2340", marginBottom: "12px", fontWeight: 800 }}>
                1. Information We Collect
              </h2>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75", marginBottom: "12px" }}>
                When you enquire about our consulting services or engage Corpunex for business facilitation, we may collect:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", color: "#515978", fontSize: "0.95rem" }}>
                <li><strong style={{ color: "#0c2340" }}>Contact Information:</strong> Full name, email address, telephone/mobile number, and city/state of business.</li>
                <li><strong style={{ color: "#0c2340" }}>Entity & KYC Documents:</strong> PAN cards, Aadhaar details, passport copies, utility bills, and address proofs required for statutory government filings.</li>
                <li><strong style={{ color: "#0c2340" }}>Business Particulars:</strong> Proposed enterprise names, business activity descriptions, capital structure, and co-founder allocations.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: "1.35rem", color: "#0c2340", marginBottom: "12px", fontWeight: 800 }}>
                2. How We Use Your Information
              </h2>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75" }}>
                Information provided is utilized strictly to:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "10px 0 0", display: "flex", flexDirection: "column", gap: "8px", color: "#515978", fontSize: "0.95rem" }}>
                <li>• Assess your service prerequisites and formulate itemized consulting proposals.</li>
                <li>• Prepare and compile statutory applications for submission on government portals (e.g. MCA, GSTN, DGFT, Trade Marks Registry).</li>
                <li>• Coordinate with qualified Chartered Accountants, Company Secretaries, or Advocates where statutory certifications are mandated.</li>
                <li>• Communicate procedural updates, query responses, and compliance alerts.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: "1.35rem", color: "#0c2340", marginBottom: "12px", fontWeight: 800 }}>
                3. Non-Disclosure & Confidentiality
              </h2>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75" }}>
                Corpunex does not sell, rent, monetize, or lease your personal identification or enterprise records to commercial third-party marketing brokers. Information is shared only with authorized government bodies in connection with filings authorized by you, or with professional collaborators assisting under mutual confidentiality duties.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.35rem", color: "#0c2340", marginBottom: "12px", fontWeight: 800 }}>
                4. Data Security
              </h2>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75" }}>
                We maintain industry-standard administrative, electronic, and procedural safeguards to protect confidential documentation against unauthorized access, loss, or misuse.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.35rem", color: "#0c2340", marginBottom: "12px", fontWeight: 800 }}>
                5. Contacting Our Data Privacy Team
              </h2>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75" }}>
                For inquiries regarding our privacy standards, or to request the deletion or correction of your recorded contact information, please email our privacy desk at <a href="mailto:contact@corpunex.com" style={{ color: "#0b72e7", fontWeight: 700 }}>contact@corpunex.com</a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
