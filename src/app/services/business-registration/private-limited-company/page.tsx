import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { privateLimited } from "@/content/services/private-limited";

export const metadata: Metadata = {
  title: privateLimited.metaTitle,
  description: privateLimited.metaDescription,
  alternates: { canonical: privateLimited.path },
};

export default function PrivateLimitedCompanyPage() {
  return <ServicePage content={privateLimited} />;
}
