import { MetadataRoute } from "next";
import { site } from "@/config/site";
import { categories } from "@/content/categories";
import { servicePages } from "@/content/services";
import { articles } from "@/content/articles";
import { roles } from "@/content/careers";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;
  const buildDate = new Date("2026-10-21");

  // Core static pages
  const coreStaticPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/careers", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/compliance-calendar", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/glossary", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/tools/gst-calculator", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/tools/company-type-finder", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/service-disclaimer", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/refund-policy", priority: 0.3, changeFrequency: "yearly" as const },
  ].map((item) => ({
    url: `${baseUrl}${item.path}`,
    lastModified: buildDate,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  // Category hub pages
  const categoryPages = categories.map((cat) => ({
    url: `${baseUrl}${cat.path}`,
    lastModified: buildDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Dedicated service detail pages
  const serviceDetailPages = servicePages.map((srv) => ({
    url: `${baseUrl}${srv.path}`,
    lastModified: buildDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Educational article pages
  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Career role pages
  const rolePages = roles.map((r) => ({
    url: `${baseUrl}/careers/${r.slug}`,
    lastModified: buildDate,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...coreStaticPages, ...categoryPages, ...serviceDetailPages, ...articlePages, ...rolePages];
}
