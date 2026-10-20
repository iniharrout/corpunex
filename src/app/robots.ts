import type { MetadataRoute } from "next";
import { site } from "@/config/site";

const isProduction = (process.env.VERCEL_ENV ?? "production") === "production";

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
