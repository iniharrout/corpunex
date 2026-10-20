import type { Metadata } from "next";
import LegalPage from "@/components/shared/LegalPage";
import { disclaimerPage } from "@/content/legal";

export const metadata: Metadata = {
  title: disclaimerPage.title,
  description: disclaimerPage.metaDescription,
  alternates: { canonical: disclaimerPage.path },
};

export default function ServiceDisclaimerPage() {
  return <LegalPage doc={disclaimerPage} />;
}
