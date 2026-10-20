import { ImageResponse } from "next/og";

/*
 * Default share image for every page. ImageResponse only understands inline
 * styles, so the brand colours are written here as literals (they mirror
 * --color-brand-band and --color-on-brand in tokens.css).
 */
export const alt = "Corpunex: company registration, GST and compliance for founders in India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0057ff 0%, #2f6bff 60%, #5b8cff 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: 6 }}>CORPUNEX</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.08, maxWidth: 900 }}>
            Your business, set up right and kept compliant.
          </div>
          <div style={{ fontSize: 30, opacity: 0.9 }}>
            Private Limited, LLP and OPC registration · GST · Yearly filings
          </div>
        </div>
        <div style={{ fontSize: 24, opacity: 0.85 }}>Filings prepared and certified by CAs and CSs · corpunex.com</div>
      </div>
    ),
    size,
  );
}
