"use client";

import React, { useState } from "react";
import { CheckCircle2, Receipt, ArrowRight } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

interface StateRule {
  name: string;
  moaStampDuty: number;
  aoaStampDuty: number;
}

const STATE_DATA: Record<string, StateRule> = {
  delhi: { name: "Delhi (NCT)", moaStampDuty: 200, aoaStampDuty: 1000 },
  maharashtra: { name: "Maharashtra", moaStampDuty: 1000, aoaStampDuty: 1000 },
  karnataka: { name: "Karnataka", moaStampDuty: 1000, aoaStampDuty: 1000 },
  odisha: { name: "Odisha", moaStampDuty: 300, aoaStampDuty: 1000 },
  haryana: { name: "Haryana", moaStampDuty: 120, aoaStampDuty: 1000 },
  tamilnadu: { name: "Tamil Nadu", moaStampDuty: 600, aoaStampDuty: 1000 },
  telangana: { name: "Telangana", moaStampDuty: 500, aoaStampDuty: 1000 },
  up: { name: "Uttar Pradesh", moaStampDuty: 500, aoaStampDuty: 1000 },
};

export default function StatutoryFeeCalculator() {
  const [entityType, setEntityType] = useState<"pvt" | "llp" | "opc">("pvt");
  const [selectedState, setSelectedState] = useState<string>("delhi");
  const [capital, setCapital] = useState<number>(100000); // 1 Lakh default
  const [directors, setDirectors] = useState<number>(2);
  const [modalOpen, setModalOpen] = useState(false);

  // MCA fee calculation logic under SPICe+ rules
  // Government charges ₹0 MCA filing fee for Authorized Capital up to ₹15 Lakhs for Private Limited
  const mcaFilingFee = capital <= 1500000 ? 0 : Math.round((capital - 1500000) * 0.002);
  
  // RUN Name reservation fee
  const nameReservationFee = entityType === "llp" ? 200 : 1000;
  
  // State Stamp duty on MoA & AoA
  const stateRule = STATE_DATA[selectedState] || STATE_DATA.delhi;
  const stampDuty = entityType === "llp" ? 500 : (stateRule.moaStampDuty + stateRule.aoaStampDuty);
  
  // DSC (Digital Signature Certificates)
  const dscCost = directors * 1000; // Standard Class-3 DSC issuance & USB token
  
  // Total Government Statutory Pass-Through
  const totalStatutoryGovt = nameReservationFee + stampDuty + mcaFilingFee;

  // Corpunex Professional Facilitation Fee
  const professionalFee = entityType === "llp" ? 4999 : entityType === "opc" ? 4499 : 5999;
  
  // Total Estimate
  const totalEstimatedCost = totalStatutoryGovt + dscCost + professionalFee;

  return (
    <>
      <section
        id="calculator"
        style={{
          padding: "76px 0",
          backgroundColor: "#F8F9FA",
          borderTop: "1px solid #DADCE0",
          borderBottom: "1px solid #DADCE0",
          position: "relative",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 44px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "5px 14px",
                borderRadius: "9999px",
                fontSize: "0.80rem",
                fontWeight: 600,
                backgroundColor: "#E8F0FE",
                color: "#1A73E8",
                border: "1px solid #D2E3FC",
                marginBottom: "14px",
              }}
            >
              <Receipt size={14} />
              <span>100% Itemized Financial Transparency</span>
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
                color: "#202124",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                marginBottom: "12px",
              }}
            >
              Calculate Your Statutory Incorporation Estimate
            </h2>
            <p style={{ color: "#5F6368", fontSize: "1.02rem", lineHeight: "1.6" }}>
              Government fees in India are determined by your state of incorporation and authorized capital. Corpunex separates official government challans from professional consulting with zero markups.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
              alignItems: "start",
            }}
          >
            {/* Left: Interactive Controls */}
            <div
              className="cx-card"
              style={{
                padding: "32px 28px",
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                border: "1px solid #DADCE0",
                boxShadow: "0 1px 3px 0 rgba(60,64,67,0.15)",
              }}
            >
              <h3 style={{ fontSize: "1.15rem", color: "#202124", fontWeight: 700, marginBottom: "20px" }}>
                Select Incorporation Parameters
              </h3>

              {/* 1. Entity Type Switcher */}
              <div style={{ marginBottom: "20px" }}>
                <label className="form-label" style={{ fontWeight: 600, color: "#202124" }}>Entity Structure</label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                  {[
                    { id: "pvt", label: "Private Limited" },
                    { id: "llp", label: "LLP" },
                    { id: "opc", label: "One Person Co." },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setEntityType(item.id as "pvt" | "llp" | "opc")}
                      style={{
                        padding: "10px 8px",
                        fontSize: "0.84rem",
                        fontWeight: entityType === item.id ? 600 : 500,
                        color: entityType === item.id ? "#1A73E8" : "#3C4043",
                        backgroundColor: entityType === item.id ? "#E8F0FE" : "#FFFFFF",
                        border: entityType === item.id ? "1.5px solid #1A73E8" : "1px solid #DADCE0",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. State Selection */}
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="state-select" className="form-label" style={{ fontWeight: 600, color: "#202124" }}>
                  State of Registered Office
                </label>
                <select
                  id="state-select"
                  className="form-select"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  style={{ borderRadius: "8px" }}
                >
                  {Object.entries(STATE_DATA).map(([key, item]) => (
                    <option key={key} value={key}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <span style={{ fontSize: "0.76rem", color: "#5F6368", marginTop: "4px", display: "block" }}>
                  *State stamp duty varies under respective State Stamp Acts.
                </span>
              </div>

              {/* 3. Authorized Capital */}
              <div style={{ marginBottom: "20px" }}>
                <label className="form-label" style={{ fontWeight: 600, color: "#202124" }}>
                  Authorized Share Capital: ₹{(capital / 100000).toFixed(0)} Lakh{capital > 100000 ? "s" : ""}
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
                  {[100000, 500000, 1000000, 1500000].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setCapital(val)}
                      style={{
                        padding: "8px 4px",
                        fontSize: "0.82rem",
                        fontWeight: capital === val ? 600 : 500,
                        color: capital === val ? "#1A73E8" : "#3C4043",
                        backgroundColor: capital === val ? "#E8F0FE" : "#FFFFFF",
                        border: capital === val ? "1.5px solid #1A73E8" : "1px solid #DADCE0",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.15s ease",
                      }}
                    >
                      ₹{val / 100000}L
                    </button>
                  ))}
                </div>
                {capital <= 1500000 && (
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#1E8E3E", fontSize: "0.78rem", fontWeight: 600, marginTop: "6px" }}>
                    <CheckCircle2 size={13} />
                    <span>Eligible for ₹0 MCA Government SPICe+ Filing Fee Waiver</span>
                  </div>
                )}
              </div>

              {/* 4. Number of Directors */}
              <div>
                <label className="form-label" style={{ fontWeight: 600, color: "#202124" }}>
                  Number of Directors: {directors}
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                  {[entityType === "opc" ? 1 : 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setDirectors(num)}
                      style={{
                        padding: "8px 4px",
                        fontSize: "0.84rem",
                        fontWeight: directors === num ? 600 : 500,
                        color: directors === num ? "#1A73E8" : "#3C4043",
                        backgroundColor: directors === num ? "#E8F0FE" : "#FFFFFF",
                        border: directors === num ? "1.5px solid #1A73E8" : "1px solid #DADCE0",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {num} Director{num > 1 ? "s" : ""}
                    </button>
                  ))}
                </div>
                <span style={{ fontSize: "0.76rem", color: "#5F6368", marginTop: "4px", display: "block" }}>
                  Includes Class-3 Digital Signature (DSC) &amp; DIN generation for each director.
                </span>
              </div>
            </div>

            {/* Right: Itemized Cost Breakdown Card */}
            <div
              className="cx-card"
              style={{
                padding: "32px 28px",
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                border: "1px solid #DADCE0",
                boxShadow: "0 1px 3px 0 rgba(60,64,67,0.30), 0 4px 8px 3px rgba(60,64,67,0.15)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span style={{ fontSize: "0.76rem", fontWeight: 700, color: "#1A73E8", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Itemized Quotation Breakdown
                </span>
                <span style={{ fontSize: "0.74rem", color: "#1E8E3E", fontWeight: 600, backgroundColor: "#E6F4EA", padding: "3px 9px", borderRadius: "9999px", border: "1px solid #CEEAD6" }}>
                  Official Challans Included
                </span>
              </div>

              {/* Bucket 1: Government Statutory Fees */}
              <div style={{ borderBottom: "1px solid #F1F3F4", paddingBottom: "16px", marginBottom: "16px" }}>
                <div style={{ fontSize: "0.86rem", fontWeight: 600, color: "#202124", marginBottom: "10px" }}>
                  1. Statutory Government Charges (Official Receipts Provided)
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.82rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "#5F6368" }}>
                    <span>RUN Name Reservation Fee</span>
                    <span style={{ fontWeight: 600, color: "#202124" }}>₹{nameReservationFee.toLocaleString()}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "#5F6368" }}>
                    <span>State Stamp Duty ({stateRule.name})</span>
                    <span style={{ fontWeight: 600, color: "#202124" }}>₹{stampDuty.toLocaleString()}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "#5F6368" }}>
                    <span>MCA SPICe+ Filing Fee (Up to ₹15L Capital)</span>
                    <span style={{ fontWeight: 600, color: "#1E8E3E" }}>
                      {mcaFilingFee === 0 ? "₹0 (Govt Exemption)" : `₹${mcaFilingFee.toLocaleString()}`}
                    </span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "#202124", fontWeight: 600, paddingTop: "6px" }}>
                    <span>Subtotal Government Statutory:</span>
                    <span>₹{totalStatutoryGovt.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Bucket 2: Technical Credentials & DSCs */}
              <div style={{ borderBottom: "1px solid #F1F3F4", paddingBottom: "16px", marginBottom: "16px" }}>
                <div style={{ fontSize: "0.86rem", fontWeight: 600, color: "#202124", marginBottom: "10px" }}>
                  2. Director Credentials &amp; Cryptographic DSCs
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", color: "#5F6368" }}>
                  <span>{directors}x Class-3 DSC (2-Year Validity + ePass Token)</span>
                  <span style={{ fontWeight: 600, color: "#202124" }}>₹{dscCost.toLocaleString()}</span>
                </div>
              </div>

              {/* Bucket 3: Corpunex Professional Facilitation */}
              <div style={{ borderBottom: "1px solid #F1F3F4", paddingBottom: "16px", marginBottom: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "0.86rem", fontWeight: 600, color: "#1A73E8" }}>
                    3. Corpunex Professional Advisory Fee
                  </span>
                  <span style={{ fontWeight: 700, color: "#1A73E8", fontSize: "0.96rem" }}>
                    ₹{professionalFee.toLocaleString()}
                  </span>
                </div>
                <p style={{ color: "#5F6368", fontSize: "0.76rem", lineHeight: "1.4", margin: 0 }}>
                  Includes drafting MoA/AoA by corporate advocates, SPICe+ CA certification, DIN generation, PAN, TAN, EPFO, ESIC registration, and zero-balance bank account coordination.
                </p>
              </div>

              {/* Total Estimated Cost */}
              <div
                style={{
                  backgroundColor: "#F8F9FA",
                  padding: "16px 18px",
                  borderRadius: "12px",
                  border: "1px solid #DADCE0",
                  marginBottom: "20px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <div>
                    <div style={{ fontSize: "0.72rem", color: "#5F6368", textTransform: "uppercase", fontWeight: 600 }}>
                      Total Estimated Investment
                    </div>
                    <div style={{ fontSize: "1.7rem", fontWeight: 700, color: "#202124", fontFamily: "var(--font-heading)" }}>
                      ₹{totalEstimatedCost.toLocaleString()}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "0.78rem", color: "#1E8E3E", fontWeight: 600, display: "block" }}>
                      Turnaround: 6–8 Days
                    </span>
                    <span style={{ fontSize: "0.72rem", color: "#5F6368" }}>
                      Zero Hidden Extras
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="btn-google-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "13px 20px",
                  fontSize: "0.94rem",
                  fontWeight: 500,
                  borderRadius: "9999px",
                }}
              >
                <span>Request Official Proposal with this Breakdown</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceTitle={`${entityType.toUpperCase()} Incorporation (${STATE_DATA[selectedState]?.name || "Delhi"})`}
      />
    </>
  );
}
