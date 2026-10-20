import { MetadataRoute } from "next";
import { categories } from "@/content/categories";
import { servicePages } from "@/content/services";
import { articles } from "@/content/articles";
import { roles } from "@/content/careers";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.corpunex.com";

  const buildDate = new Date("2026-10-19");

  // Core static pages
  const staticPages = [
    "",
    "/about",
    "/services",
    "/blog",
    "/careers",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/service-disclaimer",
    "/refund-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
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
    priority: 0.85,
  }));

  // Educational article pages
  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const rolePages = roles.map((r) => ({
    url: `${baseUrl}/careers/${r.slug}`,
    lastModified: buildDate,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...serviceDetailPages, ...articlePages, ...rolePages];
}
