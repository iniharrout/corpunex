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
              backgroundColor: "#FFFFFF",
              border: `1px solid ${isOpen ? "#1A73E8" : "#DADCE0"}`,
              borderRadius: "14px",
              overflow: "hidden",
              transition: "all 0.2s ease",
              boxShadow: isOpen ? "0 1px 3px 0 rgba(60,64,67,0.30), 0 4px 8px 3px rgba(60,64,67,0.15)" : "0 1px 2px 0 rgba(60,64,67,0.15)",
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
                color: isOpen ? "#1A73E8" : "#202124",
                fontSize: "1.02rem",
                fontWeight: 600,
                textAlign: "left",
                cursor: "pointer",
                fontFamily: "var(--font-heading)",
                transition: "color 0.15s ease",
              }}
            >
              <span>{item.question}</span>
              <ChevronDown
                size={18}
                style={{
                  color: isOpen ? "#1A73E8" : "#5F6368",
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
                  color: "#5F6368",
                  fontSize: "0.94rem",
                  lineHeight: "1.7",
                  borderTop: "1px solid #F1F3F4",
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
