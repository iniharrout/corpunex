import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { changeOfDirectors } from "@/content/services/change-of-directors";

export const metadata: Metadata = {
  title: changeOfDirectors.metaTitle,
  description: changeOfDirectors.metaDescription,
  alternates: { canonical: changeOfDirectors.path },
};

export default function ChangeOfDirectorsPage() {
  return <ServicePage content={changeOfDirectors} />;
}
