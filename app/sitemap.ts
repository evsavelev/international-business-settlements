import type { MetadataRoute } from "next";

const siteUrl =
  "https://international-business-settlements.evsavelev-region.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-08-31"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
