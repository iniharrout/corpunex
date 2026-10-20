import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { annualRocCompliance } from "@/content/services/annual-roc-compliance";

export const metadata: Metadata = {
  title: annualRocCompliance.metaTitle,
  description: annualRocCompliance.metaDescription,
  alternates: { canonical: annualRocCompliance.path },
};

export default function AnnualRocCompliancePage() {
  return <ServicePage content={annualRocCompliance} />;
}
