import type { Metadata } from "next";
import Link from "next/link";
import { Check, MapPin } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Local SEO",
  path: "/services/local-seo",
});

const included = [
  "Google Business Profile optimization",
  "Local keyword and content strategy",
  "Citation building and cleanup",
  "Local schema markup",
  "Review strategy and reputation signals",
  "Geo-targeted landing pages",
];

const stats = [
  { value: "$5M+",  label: "Organic ARR Generated" },
  { value: "22+",   label: "SaaS & Tech Brands" },
  { value: "160%+", label: "Average Traffic Growth" },
];

export default function LocalSeoPage() {
  return (
    <>
      <JsonLd
        schema={serviceSchema({
          name: "Local SEO",
          description:
            "For SaaS and service businesses targeting specific cities or regions. A full local authority system that drives qualified inbound from your target geography.",
          url: "https://chandanchaudhary.com/services/local-seo",
        })}
      />

      {/* ── Hero ── */}
      <section
        aria-label="Local SEO service"
        style={{
          backgroundColor: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          paddingTop: "8rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <p className="section-label">Own your market</p>
          <h1 style={{ marginBottom: "1.5rem" }}>Local SEO</h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.75,
              maxWidth: "620px",
              marginBottom: "2rem",
            }}
          >
            For SaaS and service businesses targeting specific cities or regions.
            Local SEO isn&apos;t just Google Maps — it&apos;s a full local authority
            system that drives qualified inbound from your target geography.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="badge badge-accent">Google Business</span>
            <span className="badge badge-accent">Local Authority</span>
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
              <MapPin size={24} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
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
              SaaS products with location-specific go-to-market or service businesses
              targeting specific cities. If you want to dominate local search in
              Hyderabad, Bengaluru, or any other market — this is the work.
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
        aria-label="Book a call about Local SEO"
        className="section-sm"
        style={{
          backgroundColor: "var(--color-accent-subtle)",
          borderTop: "1px solid var(--color-accent-border)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "520px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ marginBottom: "1rem" }}>
              Ready to own your local market?
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-secondary)",
                marginBottom: "2.5rem",
                lineHeight: 1.75,
              }}
            >
              Let&apos;s talk about Local SEO strategy for your business.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Book a Call about Local SEO
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
