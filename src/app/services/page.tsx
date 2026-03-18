import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  MessageSquare,
  Globe,
  MapPin,
  Zap,
  Settings,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  path: "/services",
});

const services = [
  {
    Icon: TrendingUp,
    name: "SEO Strategy & Execution",
    desc: "Full-funnel SEO built around your ICP — topical authority, semantic content systems, and technical foundations mapped to revenue.",
    href: "/services/seo",
  },
  {
    Icon: MessageSquare,
    name: "AEO — Answer Engine Optimization",
    desc: "Make sure your brand shows up when buyers ask ChatGPT, Perplexity, and Gemini for recommendations.",
    href: "/services/aeo",
  },
  {
    Icon: Globe,
    name: "GEO — Generative Engine Optimization",
    desc: "Optimize your content for AI citations, entity authority, and retrieval — so you rank in the AI era.",
    href: "/services/geo",
  },
  {
    Icon: MapPin,
    name: "Local SEO",
    desc: "Dominate local search with Google Business Profile optimization, local authority building, and geo-targeted content.",
    href: "/services/local-seo",
  },
  {
    Icon: Zap,
    name: "AI Automation for SEO",
    desc: "Automate the slow parts — content briefs, clustering, reporting, internal linking — using AI workflows built on n8n, Make, and Python.",
    href: "/services/ai-automation",
  },
  {
    Icon: Settings,
    name: "Technical SEO",
    desc: "Crawl architecture, Core Web Vitals, JavaScript rendering, index management — the foundation that makes everything else work faster.",
    href: "/services/technical-seo",
  },
];

const steps = [
  {
    number: "01",
    title: "Audit",
    desc: "Deep dive into your current organic performance, business model, and competitive landscape.",
  },
  {
    number: "02",
    title: "Strategy",
    desc: "Prioritized 90-day roadmap tied to ARR, sign-ups, and pipeline — not rankings.",
  },
  {
    number: "03",
    title: "Execute",
    desc: "Strategy to implementation, end to end. I own the roadmap and stay until it's done.",
  },
  {
    number: "04",
    title: "Measure",
    desc: "Every initiative tracked against growth metrics. Monthly reporting tied to real outcomes.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd schema={personSchema()} />

      {/* ── Hero ── */}
      <section
        aria-label="Services overview"
        style={{
          backgroundColor: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          paddingTop: "8rem",
          paddingBottom: "5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative large icon behind H1 */}
        <TrendingUp
          size={80}
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "2rem",
            top: "50%",
            transform: "translateY(-50%)",
            opacity: 0.04,
            pointerEvents: "none",
            color: "var(--color-accent)",
          }}
        />

        <div className="container" style={{ maxWidth: "800px" }}>
          <p className="section-label">What I do</p>
          <h1 style={{ marginBottom: "1.5rem" }}>
            Six services.
            <br />One goal: organic revenue.
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.75,
              maxWidth: "600px",
              marginBottom: "2rem",
            }}
          >
            I don&apos;t offer a menu of tactics. Every service I offer is part of a
            connected growth system — built specifically for SaaS teams that want organic
            to become a real acquisition channel.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="badge badge-accent">SaaS Focused</span>
            <span className="badge badge-accent">Revenue-First</span>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section aria-label="Services" className="section">
        <div className="container">
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
            className="max-lg:grid-cols-2 max-sm:grid-cols-1"
            role="list"
          >
            {services.map(({ Icon, name, desc, href }) => (
              <li key={href}>
                <article className="card h-full flex flex-col">
                  {/* Icon in 44px accent circle */}
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-accent-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}
                    aria-hidden="true"
                  >
                    <Icon size={20} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1.0625rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                      marginBottom: "0.625rem",
                    }}
                  >
                    {name}
                  </h2>

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
                      marginTop: "1.25rem",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                    aria-label={`Learn more about ${name}`}
                  >
                    Learn more →
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── How I Work Strip ── */}
      <section
        aria-label="My process"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <p className="section-label">My process</p>
          <h2 style={{ marginBottom: "3rem", maxWidth: "440px" }}>
            Strategy + execution, end to end.
          </h2>

          <ol
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0",
            }}
            className="max-md:grid-cols-2 max-sm:grid-cols-1 gap-8"
            role="list"
          >
            {steps.map((step, i) => (
              <li
                key={step.number}
                style={{
                  paddingRight: i < steps.length - 1 ? "2rem" : undefined,
                  paddingLeft: i > 0 ? "2rem" : undefined,
                  borderRight:
                    i < steps.length - 1
                      ? "1px solid var(--color-border)"
                      : undefined,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Large faint step number */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    bottom: "-1rem",
                    right: "0.5rem",
                    fontFamily: "var(--font-display)",
                    fontSize: "8rem",
                    fontWeight: 700,
                    opacity: 0.04,
                    color: "var(--color-accent)",
                    lineHeight: 1,
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  {step.number}
                </span>

                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "var(--color-accent)",
                    letterSpacing: "0.05em",
                    marginBottom: "0.625rem",
                  }}
                >
                  {step.number}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
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
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        aria-label="Call to action"
        className="section-sm"
        style={{
          backgroundColor: "var(--color-accent-subtle)",
          borderTop: "1px solid var(--color-accent-border)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ marginBottom: "1rem" }}>
              Ready to build an SEO system that drives revenue?
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-secondary)",
                marginBottom: "2.5rem",
                lineHeight: 1.75,
              }}
            >
              Let&apos;s discuss your goals. No fluff, no vanity metrics — just a clear
              plan to grow your organic revenue.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
