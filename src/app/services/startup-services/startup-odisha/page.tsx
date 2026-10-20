import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { startupOdisha } from "@/content/services/startup-odisha";

export const metadata: Metadata = {
  title: startupOdisha.metaTitle,
  description: startupOdisha.metaDescription,
  alternates: { canonical: startupOdisha.path },
};

export default function StartupOdishaPage() {
  return <ServicePage content={startupOdisha} />;
}
