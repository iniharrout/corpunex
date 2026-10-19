"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number | null;
}

export default function FAQAccordion({ items, defaultOpenIndex = 0 }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            style={{
              backgroundColor: "#ffffff",
              border: `1px solid ${isOpen ? "#cbd5e1" : "var(--border-subtle)"}`,
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              transition: "all 0.2s ease",
              boxShadow: isOpen ? "0 4px 12px rgba(0, 0, 0, 0.04)" : "var(--shadow-xs)",
            }}
          >
            <button
              onClick={() => toggleItem(idx)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                background: "none",
                border: "none",
                color: "#0f172a",
                fontSize: "1.02rem",
                fontWeight: 600,
                textAlign: "left",
                cursor: "pointer",
                fontFamily: "var(--font-heading)",
              }}
            >
              <span>{item.question}</span>
              <ChevronDown
                size={18}
                style={{
                  color: isOpen ? "#000000" : "#64748b",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                  flexShrink: 0,
                }}
              />
            </button>

            {isOpen && (
              <div
                style={{
                  padding: "0 24px 22px",
                  color: "#475569",
                  fontSize: "0.94rem",
                  lineHeight: "1.7",
                  borderTop: "1px solid #f1f5f9",
                  paddingTop: "14px",
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
