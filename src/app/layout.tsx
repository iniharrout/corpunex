import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site/SiteHeader";
import TopBar from "@/components/site/TopBar";
import SiteFooter from "@/components/site/SiteFooter";
import MobileActionBar from "@/components/site/MobileActionBar";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/config/site";
import CallbackProvider from "@/components/callback/CallbackProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
/** Serif for statement headlines only: the homepage hero and the footer. */
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap", axes: ["opsz"] });

/** Vercel sets VERCEL_ENV; anything other than production stays out of search. */
const isProduction = (process.env.VERCEL_ENV ?? "production") === "production";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Company Registration Online in India | Corpunex",
    template: "%s | Corpunex",
  },
  description:
    "Company registration, GST, accounting and yearly compliance for founders in India. Private Limited, LLP and OPC registration with a free itemised quote, handled by CAs and CSs.",
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

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  inLanguage: "en-IN",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={organization} />
        <JsonLd data={website} />
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
