import React from "react";
import { Metadata } from "next";
import { Mail, Phone, Clock, MapPin, MessageSquare, ShieldAlert, Sparkles, CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ConsultationForm from "@/components/ConsultationForm";
import AbstractHeroBackground from "@/components/AbstractHeroBackground";

export const metadata: Metadata = {
  title: "Contact Us & Request Consultation — Corpunex Consulting",
  description:
    "Get in touch with Corpunex for business registration, Startup India recognition, GST, and corporate compliance consulting. Request a quotation or schedule an advisory discussion.",
};

export default function ContactPage() {
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
          <Breadcrumb items={[{ label: "Contact Us" }]} />

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
              Direct Advisory & Inquiries
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
              Contact <span style={{ color: "#0066f5" }}>Corpunex.</span>
            </h1>
            <p
              style={{
                fontSize: "1.05rem",
                color: "#475569",
                lineHeight: "1.65",
                margin: 0,
                fontWeight: 400,
              }}
            >
              Connect with our consulting advisors to discuss your company incorporation, startup recognition, taxation, or corporate compliance needs. We provide itemized fee breakdowns and clear step-by-step guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info Cards + Consultation Form */}
      <section style={{ padding: "64px 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "48px",
            }}
          >
            {/* Left Column: Contact Channels */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div>
                <h2 style={{ fontSize: "1.6rem", color: "#0c2340", marginBottom: "10px", fontWeight: 800, letterSpacing: "-0.02em" }}>
                  Get In Touch
                </h2>
                <p style={{ color: "#515978", fontSize: "0.98rem", lineHeight: "1.65", margin: 0 }}>
                  Our consulting advisors assist enterprises across India. Reach out through any of the channels below or submit a direct consultation request.
                </p>
              </div>

              {/* Contact Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* Email */}
                <div className="rzp-card" style={{ padding: "24px 26px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div style={{ padding: "12px", backgroundColor: "#eef4ff", borderRadius: "8px", color: "#0b72e7" }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.82rem", color: "#7f8ba4", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em" }}>
                      Business Inquiries & Quotations
                    </div>
                    <div style={{ fontSize: "1.08rem", color: "#0c2340", fontWeight: 700, marginTop: "4px" }}>
                      <a href="mailto:contact@corpunex.com" style={{ color: "#0b72e7", textDecoration: "none" }}>contact@corpunex.com</a>
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "#7f8ba4", marginTop: "4px" }}>
                      Official business correspondence email
                    </div>
                  </div>
                </div>

                {/* Consultation Line */}
                <div className="rzp-card" style={{ padding: "24px 26px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div style={{ padding: "12px", backgroundColor: "#eef4ff", borderRadius: "8px", color: "#0b72e7" }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.82rem", color: "#7f8ba4", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em" }}>
                      Consultation Hotline
                    </div>
                    <div style={{ fontSize: "1.08rem", color: "#0c2340", fontWeight: 700, marginTop: "4px" }}>
                      +91 (Consultation Desk / Available On Request)
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "#7f8ba4", marginTop: "4px" }}>
                      Lines active during standard operating hours
                    </div>
                  </div>
                </div>

                {/* WhatsApp Channel */}
                <div className="rzp-card" style={{ padding: "24px 26px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div style={{ padding: "12px", backgroundColor: "#e6f9f2", borderRadius: "8px", color: "#00b574" }}>
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.82rem", color: "#7f8ba4", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em" }}>
                      WhatsApp Direct Assistance
                    </div>
                    <div style={{ fontSize: "0.98rem", color: "#0c2340", marginTop: "4px", fontWeight: 600 }}>
                      Official business WhatsApp channel (Available upon configuration)
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "#7f8ba4", marginTop: "4px" }}>
                      Request a WhatsApp callback through the consultation form
                    </div>
                  </div>
                </div>

                {/* Office & Operating Hours */}
                <div className="rzp-card" style={{ padding: "24px 26px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div style={{ padding: "12px", backgroundColor: "#f8fafc", borderRadius: "8px", color: "#0c2340", border: "1px solid #e8edf5" }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.82rem", color: "#7f8ba4", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em" }}>
                      Consulting Locations & Presence
                    </div>
                    <div style={{ fontSize: "1.05rem", color: "#0c2340", fontWeight: 700, marginTop: "4px" }}>
                      Bhubaneswar, Odisha & New Delhi, India
                    </div>
                    <div style={{ fontSize: "0.88rem", color: "#515978", marginTop: "6px", display: "flex", alignItems: "center", gap: "6px" }}>
                      <Clock size={14} style={{ color: "#0b72e7" }} />
                      <span>Mon - Sat: 9:30 AM - 6:30 PM IST</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statutory Disclosure Callout */}
              <div
                style={{
                  padding: "20px 22px",
                  backgroundColor: "#fffbeb",
                  border: "1px solid #fed7aa",
                  borderRadius: "8px",
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <ShieldAlert size={20} style={{ color: "#d97706", flexShrink: 0, marginTop: "2px" }} />
                <p style={{ color: "#92400e", fontSize: "0.86rem", lineHeight: "1.6", margin: 0 }}>
                  <strong>Notice:</strong> Corpunex is an independent private business consulting company. We are not a government agency. Government registrations and approvals are determined by the relevant statutory authorities.
                </p>
              </div>
            </div>

            {/* Right Column: Complete Validated Consultation Form */}
            <div
              className="rzp-card"
              style={{
                padding: "44px 38px",
                backgroundColor: "#ffffff",
                border: "1px solid #d0e2ff",
                boxShadow: "0 12px 35px rgba(11, 114, 231, 0.12)",
              }}
            >
              <div style={{ marginBottom: "24px" }}>
                <span className="badge badge-blue" style={{ marginBottom: "8px" }}>Consultation Request</span>
                <h2 style={{ fontSize: "1.7rem", color: "#0c2340", marginTop: "4px", fontWeight: 800, letterSpacing: "-0.02em" }}>
                  Schedule a Consultation or Request a Quotation
                </h2>
                <p style={{ color: "#515978", fontSize: "0.95rem", marginTop: "6px" }}>
                  Please complete the form below. An advisor will review your requirements and reach out within 24 business hours.
                </p>
              </div>

              <ConsultationForm
                defaultService="General Business Consulting"
                sourcePage="Contact Us Page"
                compact={false}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
