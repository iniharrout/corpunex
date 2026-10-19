import React from "react";
import Image from "next/image";

interface AbstractHeroBackgroundProps {
  variant?: "homepage" | "subpage";
}

/**
 * Welcoming UiPath-Style Daylight Hero Background
 * Uses /images/hero-uipath-welcoming.jpg for the homepage — an uplifting, 
 * sunlit 3D architectural landscape with ascending illuminated pathway.
 * Features feathered daylight gradient overlays so text has 100% crystal-clear contrast.
 */
export default function AbstractHeroBackground({ variant = "homepage" }: AbstractHeroBackgroundProps) {
  const isHomepage = variant === "homepage";

  if (isHomepage) {
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


        {/* 2. Soft Ambient Radiant Glows: Royal Blue & Soft Cyan */}
        <div
          style={{
            position: "absolute",
            top: "-15%",
            right: "5%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 102, 245, 0.08) 0%, rgba(56, 189, 248, 0.04) 45%, transparent 70%)",
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
            background: "radial-gradient(circle, rgba(0, 212, 255, 0.04) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />

        {/* 3. Bottom Divider Line with Razorpay Royal Blue Accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "1px",
            backgroundColor: "#e2e8f0",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "140px",
              height: "3px",
              backgroundColor: "#0066f5",
              borderRadius: "3px 3px 0 0",
            }}
          />
        </div>
      </div>
    );
  }

  // Subpage perspective variant
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
        backgroundColor: "#020b1e",
      }}
      aria-hidden="true"
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.92,
        }}
      >
        <Image
          src="/images/hero-pillars-blue.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center 30%",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 75% 85% at 35% 50%, rgba(2, 11, 30, 0.88) 0%, rgba(2, 11, 30, 0.55) 65%, rgba(2, 11, 30, 0.3) 100%), linear-gradient(180deg, rgba(2, 11, 30, 0.45) 0%, transparent 40%, rgba(2, 11, 30, 0.9) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "15%",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 102, 245, 0.25) 0%, rgba(56, 189, 248, 0.12) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          backgroundColor: "rgba(56, 189, 248, 0.2)",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "140px",
            height: "3px",
            backgroundColor: "#00d4ff",
            boxShadow: "0 0 12px #00d4ff",
            borderRadius: "3px 3px 0 0",
          }}
        />
      </div>
    </div>
  );
}
