import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { incomeTaxFiling } from "@/content/services/income-tax-filing";

export const metadata: Metadata = {
  title: incomeTaxFiling.metaTitle,
  description: incomeTaxFiling.metaDescription,
  alternates: { canonical: incomeTaxFiling.path },
};

export default function IncomeTaxFilingPage() {
  return <ServicePage content={incomeTaxFiling} />;
}
