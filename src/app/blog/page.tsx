import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { BlogFilter } from "./BlogFilter";

export const metadata: Metadata = buildMetadata({
  title: "SEO, GEO & AI Growth Insights — Blog",
  description: "Practical frameworks, case studies, and data-driven thinking on SEO, GEO, AEO, and AI automation for SaaS founders and growth teams.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        aria-label="Blog page header"
        style={{
          backgroundColor: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          paddingTop: "8rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <p className="section-label">Insights</p>
          <h1 style={{ marginBottom: "1.25rem" }}>
            Insights on SEO, AI,
            <br />and organic growth.
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.75,
              maxWidth: "560px",
            }}
          >
            Practical frameworks, case studies, and data-driven thinking for SaaS
            founders and growth teams. No fluff — just what actually works.
          </p>
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <section aria-label="Blog posts" className="section">
        <div className="container">
          <BlogFilter />
        </div>
      </section>
    </>
  );
}
