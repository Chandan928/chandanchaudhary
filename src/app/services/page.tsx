import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  MessageSquare,
  Globe,
  MapPin,
  Zap,
  Settings2,
  ChevronRight,
  Building2,
  BarChart3,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "SEO & AI Growth Services",
  path: "/services",
});

const services = [
  {
    Icon: TrendingUp,
    name: "SEO Strategy & Execution",
    desc: "Full-funnel SEO built around your ICP. Topical authority, semantic content systems, and technical foundations — mapped to revenue.",
    href: "/services/seo",
  },
  {
    Icon: MessageSquare,
    name: "AEO — Answer Engine Optimization",
    desc: "Make your brand the answer in ChatGPT, Perplexity, and Gemini. I engineer your content for AI-powered answer engines.",
    href: "/services/aeo",
  },
  {
    Icon: Globe,
    name: "GEO — Generative Engine Optimization",
    desc: "Optimize for LLM citations, entity authority, and AI retrieval so you rank in the era of generative search.",
    href: "/services/geo",
  },
  {
    Icon: MapPin,
    name: "Local SEO",
    desc: "Dominate local search. GBP optimization, local authority building, and geo-targeted content that drives qualified leads.",
    href: "/services/local-seo",
  },
  {
    Icon: Zap,
    name: "AI Automation for SEO",
    desc: "Automate content briefs, clustering, reporting, and internal linking using AI workflows built on n8n, Make, and Python.",
    href: "/services/ai-automation",
  },
  {
    Icon: Settings2,
    name: "Technical SEO",
    desc: "Crawl architecture, Core Web Vitals, JavaScript rendering, index management — the foundation that makes everything else work.",
    href: "/services/technical-seo",
  },
];

const steps = [
  {
    number: "01",
    title: "Audit",
    desc: "Deep technical and content audit to find the gaps between where you are and where you should be.",
  },
  {
    number: "02",
    title: "Strategy",
    desc: "A prioritised roadmap tied to your ICP, funnel stages, and revenue metrics — not just keyword volume.",
  },
  {
    number: "03",
    title: "Execute",
    desc: "I own implementation. Content systems, technical fixes, link acquisition, and automation — all done.",
  },
  {
    number: "04",
    title: "Measure",
    desc: "Every initiative tracked against sign-ups, activations, and ARR. Full visibility, monthly reporting.",
  },
];

const stats = [
  { Icon: TrendingUp, value: "$5M+", label: "Organic ARR Generated" },
  { Icon: Building2, value: "22+", label: "Brands Served" },
  { Icon: BarChart3, value: "160%+", label: "Average Traffic Growth" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd schema={personSchema()} />

      {/* Section 1 — Hero */}
      <section
        aria-label="Services overview"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--color-bg)",
          paddingTop: "8rem",
          paddingBottom: "5rem",
        }}
      >
        {/* Radial gradient */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "700px",
            height: "500px",
            background:
              "radial-gradient(ellipse at 60% 0%, rgba(108,99,255,0.1) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ maxWidth: "800px", position: "relative" }}>
          <p className="section-label">What I do</p>
          <h1 style={{ marginBottom: "1.25rem" }}>
            Six services. One goal: organic revenue.
          </h1>
          <p
            style={{
              color: "var(--color-text-secondary)",
              maxWidth: "560px",
              fontSize: "1.125rem",
              lineHeight: 1.75,
              marginBottom: "1.5rem",
            }}
          >
            From technical foundations to AI-powered content systems — every service is
            scoped around one outcome: making organic your most predictable acquisition
            channel.
          </p>

          {/* Badges */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            <span className="badge badge-accent">SaaS Focused</span>
            <span className="badge badge-accent">Revenue-First</span>
          </div>

          {/* Service quick-nav */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {services.map(({ Icon, name, href }) => (
              <Link
                key={href}
                href={href}
                className="badge badge-muted"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem" }}
              >
                <Icon size={14} aria-hidden="true" />
                {name.split(" — ")[0].replace("SEO Strategy & Execution", "SEO")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Services Grid */}
      <section
        aria-label="Services"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <p className="section-label">Services</p>
          <h2 style={{ maxWidth: "480px", marginBottom: "3rem" }}>Everything I offer.</h2>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}
            className="max-lg:grid-cols-2 max-sm:grid-cols-1"
          >
            {services.map(({ Icon, name, desc, href }) => (
              <article
                key={href}
                className="card"
                style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}
              >
                {/* Large faint background icon */}
                <Icon
                  size={64}
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    color: "var(--color-accent)",
                    opacity: 0.04,
                    pointerEvents: "none",
                    flexShrink: 0,
                  }}
                />

                {/* 48px icon circle */}
                <div
                  aria-hidden="true"
                  style={{
                    backgroundColor: "var(--color-accent-subtle)",
                    borderRadius: "50%",
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {name}
                </h3>

                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                    flex: 1,
                  }}
                >
                  {desc}
                </p>

                <Link
                  href={href}
                  style={{
                    color: "var(--color-accent)",
                    fontWeight: 600,
                    marginTop: "1.25rem",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Process Strip */}
      <section
        aria-label="Process"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <p className="section-label">How it works</p>
          <h2 style={{ maxWidth: "560px", marginBottom: "3rem" }}>
            A repeatable system for organic growth.
          </h2>

          <div
            className="flex flex-col lg:flex-row"
            style={{ gap: 0, alignItems: "stretch" }}
          >
            {steps.map((step, i) => (
              <>
                <div
                  key={step.number}
                  style={{ flex: 1, padding: "1.5rem", position: "relative" }}
                >
                  <p
                    aria-hidden="true"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "3rem",
                      fontWeight: 700,
                      color: "var(--color-accent)",
                      opacity: 0.4,
                      lineHeight: 1,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {step.number}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1.0625rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.7,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <ChevronRight
                    key={`chevron-${i}`}
                    size={24}
                    aria-hidden="true"
                    className="hidden lg:flex"
                    style={{
                      color: "var(--color-accent)",
                      opacity: 0.4,
                      alignSelf: "center",
                      flexShrink: 0,
                    }}
                  />
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Social Proof Stats */}
      <section
        aria-label="Results"
        className="section-sm"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}
            className="max-sm:grid-cols-1"
          >
            {stats.map(({ Icon, value, label }) => (
              <div key={label} className="card" style={{ textAlign: "center" }}>
                <div
                  aria-hidden="true"
                  style={{
                    backgroundColor: "var(--color-accent-subtle)",
                    borderRadius: "50%",
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem",
                  }}
                >
                  <Icon size={24} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.5rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  {value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9375rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — CTA */}
      <section
        aria-label="Call to action"
        className="section-sm"
        style={{
          backgroundColor: "var(--color-accent-subtle)",
          borderTop: "1px solid var(--color-accent-border)",
        }}
      >
        <div className="container" style={{ textAlign: "center", maxWidth: "520px", margin: "auto" }}>
          <h2 style={{ marginBottom: "1rem" }}>
            Ready to make organic your most predictable channel?
          </h2>
          <p
            style={{
              color: "var(--color-text-secondary)",
              marginBottom: "2.5rem",
            }}
          >
            Book a free 30-minute strategy call. No pitch, no pressure.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Book a Free Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}
