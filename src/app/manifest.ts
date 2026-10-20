import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Corpunex — Company Registration & Legal Compliance in India",
    short_name: "Corpunex",
    description:
      "Company registration, GST, accounting and yearly compliance for founders in India. Handled by CAs and CSs.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0057ff",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
