import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.corpunex.com"),
  title: {
    default: "Corpunex — Business Consulting, Registration & Compliance in India",
    template: "%s | Corpunex Business Consulting",
  },
  description:
    "Corpunex helps entrepreneurs, startups, and growing enterprises in India navigate company registration, Startup India & Odisha recognition, GST, business licences, trademark protection, and ongoing corporate compliance.",
  keywords: [
    "Corpunex",
    "Business Consulting India",
    "Company Registration India",
    "Private Limited Company Registration",
    "LLP Registration",
    "Startup India DPIIT Recognition",
    "Startup Odisha",
    "GST Registration and Filing",
    "Trademark Registration India",
    "ROC Compliance",
    "Udyam MSME Registration",
    "FSSAI Licence",
  ],
  authors: [{ name: "Corpunex Consulting" }],
  creator: "Corpunex",
  publisher: "Corpunex",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.corpunex.com",
    siteName: "Corpunex Business Consulting",
    title: "Corpunex — Business Consulting, Registration & Compliance in India",
    description:
      "Comprehensive consulting for company incorporation, Startup India, GST taxation, trademarks, operating licences, and corporate compliance in India.",
    images: [
      {
        url: "/corpunex-logo-white.png",
        width: 1024,
        height: 121,
        alt: "Corpunex Business Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corpunex — Business Consulting, Registration & Compliance in India",
    description:
      "Guiding Indian founders and businesses through corporate incorporation, tax filings, trademarks, and statutory compliance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Corpunex",
    "image": "https://www.corpunex.com/corpunex-logo-white.png",
    "description": "Professional business consulting and facilitation services in India covering company registration, startup support, GST, trademark protection, and corporate governance.",
    "url": "https://www.corpunex.com",
    "telephone": "+91-674-0000000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bhubaneswar",
      "addressRegion": "Odisha",
      "addressCountry": "IN"
    },
    "areaServed": "IN",
    "priceRange": "$$",
    "openingHours": "Mo-Sa 09:30-18:30"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
