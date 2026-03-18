import type { Metadata } from "next";
import Link from "next/link";
import { Check, Settings } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Technical SEO",
  path: "/services/technical-seo",
});

const included = [
  "Full technical SEO audit",
  "Crawl architecture optimization",
  "JavaScript rendering fixes",
  "Core Web Vitals improvement",
  "Index management and pruning",
  "Site migration support",
  "Schema markup implementation",
];

const stats = [
  { value: "$5M+",  label: "Organic ARR Generated" },
  { value: "22+",   label: "SaaS & Tech Brands" },
  { value: "160%+", label: "Average Traffic Growth" },
];

export default function TechnicalSeoPage() {
  return (
    <>
      <JsonLd
        schema={serviceSchema({
          name: "Technical SEO",
          description:
            "Great content and a broken technical foundation is like a fast car with a blown engine. Technical SEO ensures search engines can find, crawl, understand, and index everything you publish.",
          url: "https://chandanchaudhary.com/services/technical-seo",
        })}
      />

      {/* ── Hero ── */}
      <section
        aria-label="Technical SEO service"
        style={{
          backgroundColor: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          paddingTop: "8rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <p className="section-label">The engine under the hood</p>
          <h1 style={{ marginBottom: "1.5rem" }}>Technical SEO</h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.75,
              maxWidth: "620px",
              marginBottom: "2rem",
            }}
          >
            Great content and a broken technical foundation is like a fast car with a
            blown engine. Technical SEO ensures search engines can find, crawl,
            understand, and index everything you publish.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="badge badge-accent">Core Web Vitals</span>
            <span className="badge badge-accent">JS Rendering</span>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section aria-label="Scope of work" className="section">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="section-label">Scope of work</p>
          <h2 style={{ marginBottom: "2.5rem" }}>What&apos;s included</h2>

          <ul className="flex flex-col gap-4" role="list">
            {included.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.875rem",
                  fontSize: "1.0625rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                <Check
                  size={20}
                  style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "2px" }}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Best For ── */}
      <section
        aria-label="Who this is best for"
        className="section"
        style={{ backgroundColor: "var(--color-surface-2)" }}
      >
        <div className="container" style={{ maxWidth: "760px" }}>
          <article className="card">
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--color-accent-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
              aria-hidden="true"
            >
              <Settings size={24} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
            </div>
            <h3
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.125rem",
                fontWeight: 600,
                color: "var(--color-text-primary)",
                marginBottom: "0.75rem",
              }}
            >
              Best for
            </h3>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.75,
              }}
            >
              SaaS products on complex tech stacks, JavaScript-heavy sites, or teams
              that have hit a ranking ceiling despite good content. If your content
              is strong but traffic isn&apos;t growing — the problem is often technical.
            </p>
          </article>
        </div>
      </section>

      {/* ── Results Preview ── */}
      <section aria-label="Results" className="section">
        <div className="container">
          <p className="section-label">Proven results</p>
          <h2 style={{ marginBottom: "2.5rem", maxWidth: "400px" }}>
            Numbers tied to outcomes.
          </h2>

          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
            className="max-sm:grid-cols-1"
            role="list"
          >
            {stats.map((s) => (
              <li key={s.label}>
                <article className="card" style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2.5rem",
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {s.label}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        aria-label="Book a call about Technical SEO"
        className="section-sm"
        style={{
          backgroundColor: "var(--color-accent-subtle)",
          borderTop: "1px solid var(--color-accent-border)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "520px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ marginBottom: "1rem" }}>
              Ready to fix the foundation?
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-secondary)",
                marginBottom: "2.5rem",
                lineHeight: 1.75,
              }}
            >
              Let&apos;s talk about Technical SEO for your SaaS.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Book a Call about Technical SEO
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
