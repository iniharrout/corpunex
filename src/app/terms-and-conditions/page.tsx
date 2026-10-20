import type { Metadata } from "next";
import LegalPage from "@/components/shared/LegalPage";
import { terms } from "@/content/legal";

export const metadata: Metadata = {
  title: terms.title,
  description: terms.metaDescription,
  alternates: { canonical: terms.path },
};

export default function TermsPage() {
  return <LegalPage doc={terms} />;
}
