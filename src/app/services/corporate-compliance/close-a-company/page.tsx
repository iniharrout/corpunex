import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { closeACompany } from "@/content/services/close-a-company";

export const metadata: Metadata = {
  title: closeACompany.metaTitle,
  description: closeACompany.metaDescription,
  alternates: { canonical: closeACompany.path },
};

export default function CloseACompanyPage() {
  return <ServicePage content={closeACompany} />;
}
