import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  theme?: "light" | "dark";
}

export default function Breadcrumb({ items, theme = "light" }: BreadcrumbProps) {
  const isDark = theme === "dark";
  const textColor = isDark ? "rgba(255, 255, 255, 0.75)" : "#515978";
  const activeColor = isDark ? "#ffffff" : "#0c2340";
  const iconColor = isDark ? "rgba(255, 255, 255, 0.45)" : "#94a3b8";

  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "0.84rem",
        color: textColor,
        marginBottom: "20px",
        flexWrap: "wrap",
      }}
    >
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          color: textColor,
          textDecoration: "none",
        }}
      >
        <Home size={14} />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight size={12} style={{ color: iconColor }} />
            {isLast || !item.href ? (
              <span style={{ color: activeColor, fontWeight: 700 }}>{item.label}</span>
            ) : (
              <Link href={item.href} style={{ color: textColor, textDecoration: "none" }}>
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
