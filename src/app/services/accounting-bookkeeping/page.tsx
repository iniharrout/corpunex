import type { Metadata } from "next";
import CategoryHub from "@/components/service/CategoryHub";
import { category } from "@/content/categories";

const content = category("accounting-bookkeeping");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: { canonical: content.path },
};

export default function AccountingBookkeepingPage() {
  return <CategoryHub category={content} />;
}
