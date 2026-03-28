import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { ResultsClient } from "./ResultsClient";

export const metadata: Metadata = buildMetadata({
  titleAbsolute: "SEO Results & Case Studies | Chandan Chaudhary",
  description:
    "Verified Google Search Console data showing real organic growth results across 22+ brands. See the numbers behind the strategy.",
  path: "/results",
});

const caseStudiesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SEO Case Studies",
  description: "Verified Google Search Console data from real client engagements",
  author: {
    "@type": "Person",
    name: "Chandan Chaudhary",
    url: "https://chandanchaudhary.com",
  },
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "CutShort — 2.3x organic clicks in 6 months",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Semantic SEO — From zero to 1.7K clicks in under 2 weeks",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "SP Tech Inc — Consistent 15-month growth from a standing start",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Turito — 0 to 1.1M clicks in 12 months",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Wiingy — 5x traffic growth in 4 months",
    },
  ],
};

export default function ResultsPage() {
  return (
    <>
      <JsonLd schema={caseStudiesSchema} />
      <ResultsClient />
    </>
  );
}
