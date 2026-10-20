import type { Metadata } from "next";
import LegalPage from "@/components/shared/LegalPage";
import { privacy } from "@/content/legal";

export const metadata: Metadata = {
  title: privacy.title,
  description: privacy.metaDescription,
  alternates: { canonical: privacy.path },
};

export default function PrivacyPolicyPage() {
  return <LegalPage doc={privacy} />;
}
