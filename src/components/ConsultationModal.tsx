"use client";

import React, { useEffect } from "react";
import { X, ShieldCheck } from "lucide-react";
import ConsultationForm from "./ConsultationForm";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  serviceTitle = "General Business Consulting",
}: ConsultationModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        backgroundColor: "rgba(15, 23, 42, 0.5)",
        backdropFilter: "blur(6px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "680px",
          maxHeight: "90vh",
          overflowY: "auto",
          backgroundColor: "#ffffff",
          border: "1px solid #d0e2ff",
          borderRadius: "16px",
          padding: "36px 32px",
          boxShadow: "0 25px 60px -15px rgba(12, 35, 64, 0.35)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px", borderBottom: "1px solid #DADCE0", paddingBottom: "16px" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#1A73E8", fontSize: "0.78rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
              <ShieldCheck size={16} />
              <span>Corpunex Professional Advisory</span>
            </div>
            <h2 style={{ fontSize: "1.5rem", color: "#202124", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Request an Itemized Quotation
            </h2>
            <p style={{ color: "#5F6368", fontSize: "0.92rem", marginTop: "4px" }}>
              Discuss requirements and get a verified statutory quotation for <strong style={{ color: "#1A73E8" }}>{serviceTitle}</strong>.
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close consultation modal"
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#515978",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <ConsultationForm
          defaultService={serviceTitle}
          sourcePage="Modal Popup"
          onSuccess={onClose}
          compact={false}
        />
      </div>
    </div>
  );
}
