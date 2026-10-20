import type { Metadata } from "next";
import LegalPage from "@/components/shared/LegalPage";
import { refunds } from "@/content/legal";

export const metadata: Metadata = {
  title: refunds.title,
  description: refunds.metaDescription,
  alternates: { canonical: refunds.path },
};

export default function RefundPolicyPage() {
  return <LegalPage doc={refunds} />;
}
