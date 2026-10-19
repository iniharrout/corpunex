import React from "react";

interface AbstractHeroBackgroundProps {
  variant?: "homepage" | "subpage";
}

/**
 * Daylight Ambient Hero Lighting
 * Provides soft, subtle radiant glow for clean corporate contrast.
 * 100% free of artificial grids, tech lines, or dark artifacts.
 */
export default function AbstractHeroBackground({ variant = "homepage" }: AbstractHeroBackgroundProps) {
  const isHomepage = variant === "homepage";

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
        backgroundColor: "#ffffff",
      }}
      aria-hidden="true"
    >
      {/* Soft Ambient Radiant Glows: Royal Cobalt & Subtle Cyan */}
      <div
        style={{
          position: "absolute",
          top: isHomepage ? "-15%" : "-25%",
          right: isHomepage ? "5%" : "0%",
          width: isHomepage ? "600px" : "500px",
          height: isHomepage ? "600px" : "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 102, 245, 0.05) 0%, rgba(56, 189, 248, 0.02) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "-5%",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.03) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* Subtle Bottom Divider Line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          backgroundColor: "#edf2f7",
        }}
      />
    </div>
  );
}
