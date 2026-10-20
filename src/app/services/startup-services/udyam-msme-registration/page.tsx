import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { udyam } from "@/content/services/udyam-msme-registration";

export const metadata: Metadata = {
  title: udyam.metaTitle,
  description: udyam.metaDescription,
  alternates: { canonical: udyam.path },
};

export default function UdyamRegistrationPage() {
  return <ServicePage content={udyam} />;
}
