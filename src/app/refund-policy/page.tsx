import React from "react";
import { Metadata } from "next";
import { DollarSign, ShieldAlert, CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Refund and Cancellation Policy — Corpunex Consulting",
  description:
    "Review our transparent refund and cancellation policy regarding consulting fees, statutory government duties, and scope terminations.",
};

export default function RefundPolicyPage() {
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
          <Breadcrumb items={[{ label: "Refund and Cancellation Policy" }]} />

          <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#0b72e7", marginBottom: "16px" }}>
            <DollarSign size={24} />
            <span className="badge badge-blue">Financial Transparency</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.1rem, 4vw, 3rem)", color: "#0c2340", marginBottom: "16px", lineHeight: "1.2", fontWeight: 800, letterSpacing: "-0.03em" }}>
            Refund and Cancellation Policy
          </h1>

          <p style={{ fontSize: "1.12rem", color: "#515978", lineHeight: "1.7", margin: 0 }}>
            Corpunex maintains fair and transparent financial policies. This document details how cancellations, service fee adjustments, and non-refundable government duties are handled.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: "64px 0" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div className="rzp-card" style={{ padding: "44px 40px", display: "flex", flexDirection: "column", gap: "36px" }}>
            
            <div>
              <h2 style={{ fontSize: "1.35rem", color: "#0c2340", marginBottom: "12px", fontWeight: 800 }}>
                1. Statutory Government Fees Are Non-Refundable
              </h2>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75" }}>
                Statutory fees paid to government portals (including but not limited to Ministry of Corporate Affairs filing fees, state stamp duties, Trademark Registry application fees, DGFT fees, and FSSAI fees) are paid directly to statutory authorities. Once a government challan or payment receipt is generated, <strong style={{ color: "#0c2340" }}>these fees are strictly non-refundable</strong> under applicable government revenue rules.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.35rem", color: "#0c2340", marginBottom: "12px", fontWeight: 800 }}>
                2. Professional Consulting Fee Cancellations
              </h2>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75", marginBottom: "12px" }}>
                Our professional consulting fees cover advisory time, document verification, name searches, and drafting. Refunds for our consulting charges are handled as follows:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", color: "#515978", fontSize: "0.95rem" }}>
                <li style={{ display: "flex", gap: "10px" }}>
                  <CheckCircle2 size={18} style={{ color: "#00b574", flexShrink: 0, marginTop: "3px" }} />
                  <span><strong style={{ color: "#0c2340" }}>Prior to Work Commencement:</strong> If you request cancellation before any document review, drafting, or search has begun, a full refund of the professional fee (less payment gateway charges) will be granted.</span>
                </li>
                <li style={{ display: "flex", gap: "10px" }}>
                  <CheckCircle2 size={18} style={{ color: "#0b72e7", flexShrink: 0, marginTop: "3px" }} />
                  <span><strong style={{ color: "#0c2340" }}>Work in Progress:</strong> If drafting, name reservation, or document compilation has commenced, a pro-rated fee corresponding to the hours and documentation prepared will be retained, and the remainder refunded.</span>
                </li>
                <li style={{ display: "flex", gap: "10px" }}>
                  <CheckCircle2 size={18} style={{ color: "#dc2626", flexShrink: 0, marginTop: "3px" }} />
                  <span><strong style={{ color: "#0c2340" }}>After Official Filing:</strong> Once documents have been executed, digitally signed, and uploaded to government systems, professional consulting fees are considered fully earned and non-refundable.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: "1.35rem", color: "#0c2340", marginBottom: "12px", fontWeight: 800 }}>
                3. Government Rejections and Resubmissions
              </h2>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75" }}>
                If a government authority issues a resubmission notice or query (e.g. asking for clearer premise proof or modifying a company object clause), Corpunex will assist with the permitted resubmissions without charging additional consulting fees. A rejection by a government officer on statutory grounds (such as name conflict with an existing mark) does not entitle the client to a refund of already expended consulting time.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.35rem", color: "#0c2340", marginBottom: "12px", fontWeight: 800 }}>
                4. Refund Processing Timeframe
              </h2>
              <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.75" }}>
                Approved refunds will be processed via original payment method or direct bank NEFT/RTGS transfer within 7 to 10 business days of written confirmation.
              </p>
            </div>

            <div style={{ padding: "18px 22px", backgroundColor: "#f4f8fe", borderRadius: "8px", border: "1px solid #d0e2ff" }}>
              <p style={{ color: "#515978", fontSize: "0.88rem", lineHeight: "1.65", margin: 0 }}>
                For refund queries or formal cancellation requests, please contact our accounts team at <a href="mailto:contact@corpunex.com" style={{ color: "#0b72e7", fontWeight: 700 }}>contact@corpunex.com</a> with your engagement reference number.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
