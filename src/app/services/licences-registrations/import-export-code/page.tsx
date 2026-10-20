import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { importExportCode } from "@/content/services/import-export-code";

export const metadata: Metadata = {
  title: importExportCode.metaTitle,
  description: importExportCode.metaDescription,
  alternates: { canonical: importExportCode.path },
};

export default function ImportExportCodePage() {
  return <ServicePage content={importExportCode} />;
}
