import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { opc } from "@/content/services/opc";

export const metadata: Metadata = {
  title: opc.metaTitle,
  description: opc.metaDescription,
  alternates: { canonical: opc.path },
};

export default function OnePersonCompanyPage() {
  return <ServicePage content={opc} />;
}
