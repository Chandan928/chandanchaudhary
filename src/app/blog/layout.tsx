import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...buildMetadata({
    titleAbsolute:
      "SEO GEO AEO and AI Search Insights for SaaS and AI Teams",
    description:
      "Insights and frameworks on SEO, GEO, AEO, and AI search to help SaaS and AI teams improve visibility, rankings, and pipeline.",
    path: "/blog",
  }),
  robots: { index: false, follow: true },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
