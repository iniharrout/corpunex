import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { section8Company } from "@/content/services/section-8-company";

export const metadata: Metadata = {
  title: section8Company.metaTitle,
  description: section8Company.metaDescription,
  alternates: { canonical: section8Company.path },
};

export default function Section8CompanyPage() {
  return <ServicePage content={section8Company} />;
}
