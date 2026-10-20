import { MetadataRoute } from "next";
import { SERVICE_CATEGORIES, SERVICE_DETAILS } from "@/data/servicesData";
import { ARTICLES_DATA } from "@/data/resourcesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.corpunex.com";

  const buildDate = new Date("2026-10-19");

  // Core static pages
  const staticPages = [
    "",
    "/pricing",
    "/about",
    "/services",
    "/resources",
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
  const categoryPages = SERVICE_CATEGORIES.map((cat) => ({
    url: `${baseUrl}/services/${cat.slug}`,
    lastModified: buildDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Dedicated service detail pages
  const serviceDetailPages = Object.values(SERVICE_DETAILS).map((srv) => ({
    url: `${baseUrl}/services/${srv.categorySlug}/${srv.slug}`,
    lastModified: buildDate,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Educational article pages
  const articlePages = ARTICLES_DATA.map((article) => ({
    url: `${baseUrl}/resources/${article.slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...categoryPages, ...serviceDetailPages, ...articlePages];
}
