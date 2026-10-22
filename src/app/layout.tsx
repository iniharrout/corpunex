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
import FloatingCallbackButton from "@/components/callback/FloatingCallbackButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
/** Serif for statement headlines only: the homepage hero and the footer. */
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap", axes: ["opsz"] });

/** Vercel sets VERCEL_ENV; anything other than production stays out of search. */
const isProduction = (process.env.VERCEL_ENV ?? "production") === "production";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: "Company Registration Online in India | Corpunex",
    template: "%s | Corpunex",
  },
  description:
    "Company registration, GST, accounting and yearly compliance for founders in India. Private Limited, LLP and OPC registration with a free itemised quote, handled by CAs and CSs.",
  keywords: [
    "company registration India",
    "private limited company registration",
    "LLP registration online",
    "one person company registration",
    "GST registration",
    "annual ROC compliance",
    "trademark registration India",
    "startup India recognition",
    "CA and CS legal advisory",
  ],
  category: "Legal & Corporate Advisory",
  alternates: {
    canonical: site.url,
    languages: {
      "en-IN": site.url,
      "en-US": site.url,
      "en-GB": site.url,
      "en-AE": site.url,
      "en-SG": site.url,
      "x-default": site.url,
    },
  },
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Company Registration Online in India | Corpunex",
    description:
      "Company registration, GST, accounting and yearly compliance for founders in India. Private Limited, LLP and OPC registration with a free itemised quote, handled by CAs and CSs.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Corpunex — Company registration, GST and compliance for founders in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Registration Online in India | Corpunex",
    description:
      "Company registration, GST, accounting and yearly compliance for founders in India. Handled by qualified CAs and CSs.",
    images: ["/opengraph-image"],
  },
  robots: isProduction
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : { index: false, follow: false, googleBot: { index: false, follow: false } },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
  },
};

export const viewport: Viewport = {
  themeColor: "#0057ff",
  width: "device-width",
  initialScale: 1,
};

const organization = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService", "AccountingService"],
  name: site.name,
  url: site.url,
  logo: `${site.url}/corpunex-logo-dark.png`,
  image: `${site.url}/opengraph-image`,
  email: site.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhubaneswar",
    addressRegion: "Odisha",
    addressCountry: "IN",
  },
  department: [
    {
      "@type": "ProfessionalService",
      name: "Corpunex Corporate Advisory — Head Office",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bhubaneswar",
        addressRegion: "Odisha",
        addressCountry: "IN",
      },
    },
    {
      "@type": "ProfessionalService",
      name: "Corpunex Corporate Advisory — New Delhi Desk",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        addressCountry: "IN",
      },
    },
  ],
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Singapore" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "18:30",
    },
  ],
  knowsAbout: [
    "Private Limited Company Registration",
    "Limited Liability Partnership (LLP) Registration",
    "One Person Company (OPC)",
    "GST Registration & Return Filing",
    "Annual ROC Filings",
    "Trademark Registration & IP",
    "Startup India DPIIT Recognition",
  ],
  sameAs: Object.values(site.social).filter(Boolean),
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${site.url}/glossary?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
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
          <FloatingCallbackButton />
        </CallbackProvider>
      </body>
    </html>
  );
}
