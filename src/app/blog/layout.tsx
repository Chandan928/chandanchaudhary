import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "SEO, GEO & AI Growth Insights — Blog",
    description:
      "Practical frameworks, case studies, and data-driven thinking on SEO, GEO, AEO, and AI automation for SaaS founders and growth teams.",
    path: "/blog",
  }),
  robots: { index: false, follow: true },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
