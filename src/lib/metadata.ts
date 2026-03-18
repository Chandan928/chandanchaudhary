import type { Metadata } from "next";

const siteConfig = {
  name: "Chandan Chaudhary",
  title: "Chandan Chaudhary — SEO Consultant | GEO, AEO & AI Search Expert",
  description:
    "SEO Consultant with 9+ years of experience driving $5M+ ARR impact. Expert in GEO, AEO, Semantic SEO, Technical SEO & AI Automation. Based in Hyderabad, India.",
  url: "https://chandanchaudhary.com",
  ogImage: "https://chandanchaudhary.com/og-image.jpg",
  author: "Chandan Chaudhary",
  keywords: [
    "SEO Consultant India",
    "SEO Consultant Hyderabad",
    "GEO Consultant",
    "AEO Consultant",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
    "Technical SEO Expert",
    "Semantic SEO",
    "AI SEO",
    "Local SEO Hyderabad",
    "Freelance SEO Consultant India",
  ],
};

export function buildMetadata(options?: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const title = options?.title
    ? `${options.title} | Chandan Chaudhary`
    : siteConfig.title;
  const description = options?.description || siteConfig.description;
  const url = `${siteConfig.url}${options?.path || ""}`;

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...(options?.keywords || [])],
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
      creator: "@chandanchaudhary",
    },
    robots: options?.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export { siteConfig };
