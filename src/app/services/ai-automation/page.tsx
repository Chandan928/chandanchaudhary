import type { Metadata } from "next";
import Link from "next/link";
import { Check, Zap } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "AI Automation for SEO",
  path: "/services/ai-automation",
});

const automated = [
  "Content brief generation at scale",
  "Keyword clustering and topical mapping",
  "Internal link recommendations",
  "Rank tracking and reporting dashboards",
  "Competitor monitoring",
  "Programmatic page generation",
];

const tools = ["n8n", "Make", "Python", "Airtable", "Google Sheets", "Claude API", "GPT-4"];

const stats = [
  { value: "$5M+",  label: "Organic ARR Generated" },
  { value: "22+",   label: "SaaS & Tech Brands" },
  { value: "50%",   label: "Faster Content Briefing" },
];

export default function AiAutomationPage() {
  return (
    <>
      <JsonLd
        schema={serviceSchema({
          name: "AI Automation for SEO",
          description:
            "The biggest bottleneck in SEO isn't strategy — it's execution speed. AI-powered automation workflows that eliminate the slow, manual parts of SEO.",
          url: "https://chandanchaudhary.com/services/ai-automation",
        })}
      />

      {/* ── Hero ── */}
      <section
        aria-label="AI Automation for SEO service"
        style={{
          backgroundColor: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          paddingTop: "8rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <p className="section-label">Move 10x faster</p>
          <h1 style={{ marginBottom: "1.5rem" }}>AI Automation for SEO</h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.75,
              maxWidth: "620px",
              marginBottom: "2rem",
            }}
          >
            The biggest bottleneck in SEO isn&apos;t strategy — it&apos;s execution
            speed. I build AI-powered automation workflows that eliminate the slow,
            manual parts of SEO so your team can focus on high-judgment work.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="badge badge-accent">n8n + Make</span>
            <span className="badge badge-accent">10x Speed</span>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section aria-label="What I automate" className="section">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="section-label">What I automate</p>
          <h2 style={{ marginBottom: "2.5rem" }}>Scope of work</h2>

          <ul className="flex flex-col gap-4" role="list">
            {automated.map((item) => (
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

          <div style={{ marginTop: "2.5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--color-text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "1rem",
              }}
            >
              Tools I use
            </p>
            <ul className="flex flex-wrap gap-2" role="list">
              {tools.map((tool) => (
                <li key={tool}>
                  <span className="badge badge-muted">{tool}</span>
                </li>
              ))}
            </ul>
          </div>
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
              <Zap size={24} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
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
              SaaS teams with content operations at scale who want to move faster
              without hiring more people. If you&apos;re producing content regularly
              but drowning in manual tasks — AI automation changes the equation.
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
        aria-label="Book a call about AI Automation"
        className="section-sm"
        style={{
          backgroundColor: "var(--color-accent-subtle)",
          borderTop: "1px solid var(--color-accent-border)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "520px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ marginBottom: "1rem" }}>
              Ready to automate the slow parts of SEO?
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-secondary)",
                marginBottom: "2.5rem",
                lineHeight: 1.75,
              }}
            >
              Let&apos;s talk about AI automation for your SEO team.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Book a Call about AI Automation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
