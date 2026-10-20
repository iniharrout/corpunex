import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site/SiteHeader";
import TopBar from "@/components/site/TopBar";
import SiteFooter from "@/components/site/SiteFooter";
import MobileActionBar from "@/components/site/MobileActionBar";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/config/site";
import CallbackProvider from "@/components/callback/CallbackProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

/** Vercel sets VERCEL_ENV; anything other than production stays out of search. */
const isProduction = (process.env.VERCEL_ENV ?? "production") === "production";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Corpunex — Start your company in India, the easy way",
    template: "%s | Corpunex",
  },
  description:
    "Start your company in India the easy way. We handle registration, GST, accounts and yearly filings, with clear prices and real people to help.",
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
  themeColor: "#ffffff",
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/corpunex-logo-dark.png`,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhubaneswar",
    addressRegion: "Odisha",
    addressCountry: "IN",
  },
  sameAs: Object.values(site.social).filter(Boolean),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${inter.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={organization} />
        <CallbackProvider>
          <TopBar />
          <SiteHeader />
          <main id="main" className="site-main">
            {children}
          </main>
          <SiteFooter />
          <MobileActionBar />
        </CallbackProvider>
      </body>
    </html>
  );
}
