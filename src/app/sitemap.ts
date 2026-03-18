import { MetadataRoute } from "next";

const baseUrl = "https://chandanchaudhary.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: baseUrl, priority: 1.0, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/about`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services/seo`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services/aeo`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services/geo`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services/local-seo`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services/ai-automation`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/faq`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`, priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return staticRoutes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
