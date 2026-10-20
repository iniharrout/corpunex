"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Send, Phone, Mail, MessageSquare } from "lucide-react";

interface ConsultationFormProps {
  defaultService?: string;
  sourcePage?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export default function ConsultationForm({
  defaultService = "General Business Consulting",
  sourcePage = "General Enquiry",
  onSuccess,
  compact = false,
}: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    cityState: "",
    businessType: "Early-Stage Startup",
    serviceRequired: defaultService,
    description: "",
    preferredContact: "Phone Call",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone number (e.g. +91 98765 43210)";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.cityState.trim()) {
      errs.cityState = "City and State are required (e.g. Bhubaneswar, Odisha)";
    }
    if (!formData.description.trim()) {
      errs.description = "Please provide a brief note on your requirement";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      console.log("Corpunex Consultation Request Payload:", {
        ...formData,
        sourcePage,
        submittedAt: new Date().toISOString(),
      });

      setStatus("success");
      setSubmissionMessage(
        "Your consultation request has been recorded successfully. Our consulting team will review your requirement and reach out within 24 business hours."
      );
      if (onSuccess) {
        setTimeout(onSuccess, 3000);
      }
    } catch {
      setStatus("error");
      setSubmissionMessage("An unexpected error occurred while preparing your request. Please try again or email us directly at contact@corpunex.com.");
    }
  };

  if (status === "success") {
    return (
      <div style={{
        padding: "32px 24px",
        background: "#f0fdf4",
        border: "1px solid #bbf7d0",
        borderRadius: "var(--radius-xl)",
        textAlign: "center"
      }}>
        <div style={{ display: "inline-flex", padding: "12px", background: "#dcfce7", borderRadius: "50%", marginBottom: "16px", color: "#16a34a" }}>
          <CheckCircle2 size={36} />
        </div>
        <h3 style={{ fontSize: "1.3rem", color: "#14532d", marginBottom: "10px", fontWeight: 700 }}>Consultation Request Received</h3>
        <p style={{ color: "#166534", fontSize: "0.95rem", marginBottom: "18px", lineHeight: "1.6" }}>
          {submissionMessage}
        </p>
        <div style={{
          padding: "12px 16px",
          background: "#ffffff",
          borderRadius: "var(--radius-md)",
          fontSize: "0.82rem",
          color: "#475569",
          textAlign: "left",
          border: "1px solid #e2e8f0",
          marginBottom: "16px"
        }}>
          <strong style={{ color: "#0f172a" }}>Integration Note:</strong>
          <br />
          This enquiry form is ready to be hooked into your email delivery service (e.g. EmailJS, Resend, or your internal CRM Webhook). Form data was logged to the browser console.
        </div>
        <button
          onClick={() => {
            setStatus("idle");
            setFormData({
              fullName: "",
              phone: "",
              email: "",
              cityState: "",
              businessType: "Early-Stage Startup",
              serviceRequired: defaultService,
              description: "",
              preferredContact: "Phone Call",
            });
          }}
          className="btn btn-secondary btn-sm"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {status === "error" && (
        <div style={{
          padding: "12px 16px",
          background: "#fef2f2",
          border: "1px solid #fecaca",
          borderRadius: "var(--radius-md)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "#b91c1c",
          fontSize: "0.85rem"
        }}>
          <AlertCircle size={18} />
          <span>{submissionMessage}</span>
        </div>
      )}

      {/* Row 1: Name and Phone */}
      <div style={{ display: "grid", gridTemplateColumns: compact ? "1fr" : "1fr 1fr", gap: "14px" }}>
        <div>
          <label htmlFor="fullName" className="form-label">Full Name *</label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Rajesh Mohapatra"
            className="form-input"
            aria-required="true"
          />
          {errors.fullName && <p style={{ color: "#dc2626", fontSize: "0.75rem", marginTop: "4px" }}>{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="form-label">Phone Number *</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98765 43210"
            className="form-input"
            aria-required="true"
          />
          {errors.phone && <p style={{ color: "#dc2626", fontSize: "0.75rem", marginTop: "4px" }}>{errors.phone}</p>}
        </div>
      </div>

      {/* Row 2: Email and Location */}
      <div style={{ display: "grid", gridTemplateColumns: compact ? "1fr" : "1fr 1fr", gap: "14px" }}>
        <div>
          <label htmlFor="email" className="form-label">Email Address *</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. founder@company.com"
            className="form-input"
            aria-required="true"
          />
          {errors.email && <p style={{ color: "#dc2626", fontSize: "0.75rem", marginTop: "4px" }}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="cityState" className="form-label">City and State *</label>
          <input
            id="cityState"
            type="text"
            name="cityState"
            value={formData.cityState}
            onChange={handleChange}
            placeholder="e.g. Bhubaneswar, Odisha"
            className="form-input"
            aria-required="true"
          />
          {errors.cityState && <p style={{ color: "#dc2626", fontSize: "0.75rem", marginTop: "4px" }}>{errors.cityState}</p>}
        </div>
      </div>

      {/* Row 3: Business Type & Service */}
      <div style={{ display: "grid", gridTemplateColumns: compact ? "1fr" : "1fr 1fr", gap: "14px" }}>
        <div>
          <label htmlFor="businessType" className="form-label">Current Business Type</label>
          <select
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="form-select"
          >
            <option value="Early-Stage Startup">Early-Stage Startup</option>
            <option value="Planning a New Venture">Planning a New Venture</option>
            <option value="Sole Proprietor / Individual">Sole Proprietor / Individual</option>
            <option value="Private Limited Company">Private Limited Company</option>
            <option value="Limited Liability Partnership (LLP)">Limited Liability Partnership (LLP)</option>
            <option value="Partnership Firm">Partnership Firm</option>
            <option value="Section 8 / NGO">Section 8 / NGO / Trust</option>
            <option value="Established Enterprise">Established Enterprise</option>
          </select>
        </div>

        <div>
          <label htmlFor="serviceRequired" className="form-label">Service Required</label>
          <select
            id="serviceRequired"
            name="serviceRequired"
            value={formData.serviceRequired}
            onChange={handleChange}
            className="form-select"
          >
            <option value="General Business Consulting">General Business Consulting</option>
            <option value="Private Limited Company Registration">Private Limited Company Registration</option>
            <option value="Limited Liability Partnership (LLP) Registration">LLP Registration</option>
            <option value="One Person Company (OPC) Registration">One Person Company (OPC)</option>
            <option value="Sole Proprietorship Setup">Sole Proprietorship Setup</option>
            <option value="Startup India DPIIT Recognition">Startup India Recognition</option>
            <option value="Startup Odisha Programme Support">Startup Odisha Programme Support</option>
            <option value="Udyam / MSME Registration">Udyam / MSME Registration</option>
            <option value="GST Registration & Filing">GST Registration & Filing</option>
            <option value="Income Tax Return Filing">Income Tax Return Filing</option>
            <option value="Trademark Registration & Search">Trademark Registration & Search</option>
            <option value="FSSAI Food Licence">FSSAI Food Licence</option>
            <option value="Import Export Code (IEC)">Import Export Code (IEC)</option>
            <option value="Annual ROC Compliance">Annual ROC Compliance</option>
            <option value="Accounting & Bookkeeping Retainer">Accounting & Bookkeeping</option>
            <option value="Legal Contracts & Agreements">Legal Documentation & Contracts</option>
          </select>
        </div>
      </div>

      {/* Row 4: Description */}
      <div>
        <label htmlFor="description" className="form-label">Brief Description of Your Requirement *</label>
        <textarea
          id="description"
          name="description"
          rows={compact ? 3 : 4}
          value={formData.description}
          onChange={handleChange}
          placeholder="Please describe your business goals, timeline, or specific questions..."
          className="form-textarea"
          aria-required="true"
        />
        {errors.description && <p style={{ color: "#dc2626", fontSize: "0.75rem", marginTop: "4px" }}>{errors.description}</p>}
      </div>

      {/* Row 5: Preferred Contact Method */}
      <div>
        <span className="form-label">Preferred Contact Method</span>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "6px" }}>
          {[
            { label: "Phone Call", icon: <Phone size={14} /> },
            { label: "WhatsApp", icon: <MessageSquare size={14} /> },
            { label: "Email", icon: <Mail size={14} /> },
          ].map((item) => (
            <label
              key={item.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: formData.preferredContact === item.label ? "#1A73E8" : "#202124",
                cursor: "pointer",
                padding: "8px 16px",
                background: formData.preferredContact === item.label ? "#E8F0FE" : "#FFFFFF",
                border: `1px solid ${formData.preferredContact === item.label ? "#1A73E8" : "#DADCE0"}`,
                borderRadius: "9999px",
                transition: "all 0.15s ease",
              }}
            >
              <input
                type="radio"
                name="preferredContact"
                value={item.label}
                checked={formData.preferredContact === item.label}
                onChange={handleChange}
                style={{ accentColor: "#1A73E8" }}
              />
              {item.icon}
              {item.label}
            </label>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div style={{ marginTop: "16px" }}>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-google-primary"
          style={{ width: "100%", padding: "13px 24px", fontSize: "0.98rem", borderRadius: "9999px" }}
        >
          {status === "submitting" ? (
            <span>Processing Consultation Request...</span>
          ) : (
            <>
              <Send size={16} />
              <span>Submit Consultation Request</span>
            </>
          )}
        </button>
        <p style={{ fontSize: "0.78rem", color: "#5F6368", marginTop: "10px", textAlign: "center" }}>
          Strict privacy guaranteed. 100% itemized statutory quotation provided within 24 business hours.
        </p>
      </div>
    </form>
  );
}
