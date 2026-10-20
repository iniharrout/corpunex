import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { fssaiLicence } from "@/content/services/fssai-licence";

export const metadata: Metadata = {
  title: fssaiLicence.metaTitle,
  description: fssaiLicence.metaDescription,
  alternates: { canonical: fssaiLicence.path },
};

export default function FssaiLicencePage() {
  return <ServicePage content={fssaiLicence} />;
}
