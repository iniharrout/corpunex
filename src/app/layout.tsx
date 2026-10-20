import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import MobileActionBar from "@/components/site/MobileActionBar";
import { JsonLd } from "@/components/ui/JsonLd";
import { isPlaceholder, site } from "@/config/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  axes: ["opsz"],
});

/** Vercel sets VERCEL_ENV; anything other than production stays out of search. */
const isProduction = (process.env.VERCEL_ENV ?? "production") === "production";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Corpunex — Company registration, tax and compliance for founders in India",
    template: "%s | Corpunex",
  },
  description:
    "Register a Private Limited, LLP or OPC, then stay compliant with GST, accounting and annual ROC filings. Fixed professional fees, government fees shown separately.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
  },
  twitter: { card: "summary_large_image" },
  robots: isProduction
    ? { index: true, follow: true }
    : { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export const viewport: Viewport = {
  themeColor: "#f6f4ef",
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/corpunex-logo-dark.png`,
  email: site.email,
  telephone: site.phoneHref.replace("tel:", ""),
  ...(isPlaceholder(site.legalName) ? {} : { legalName: site.legalName }),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhubaneswar",
    addressRegion: "Odisha",
    addressCountry: "IN",
  },
  sameAs: Object.values(site.social).filter((url) => !isPlaceholder(url)),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${newsreader.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={organization} />
        <SiteHeader />
        <main id="main" className="site-main">
          {children}
        </main>
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
