import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      "https://international-business-settlements.evsavelev-region.chatgpt.site/sitemap.xml",
  };
}
