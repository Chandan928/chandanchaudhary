import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  CheckCircle2,
  XCircle,
  AlertCircle,
  TrendingDown,
  Bug,
  ChevronRight,
  HelpCircle,
  BarChart3,
  FileText,
  Link2,
  Settings,
  Zap,
  Target,
} from "lucide-react";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { GrowthFlywheel } from "@/components/graphics/GrowthFlywheel";

export const metadata: Metadata = buildMetadata({
  title: "SEO Consulting for SaaS — Revenue-First SEO Strategy",
  description: "SEO consultant specializing in semantic SEO, topical authority, and revenue-aligned growth for SaaS. $5M+ ARR impact across 22+ brands.",
  path: "/services/seo",
});

const problems = [
  {
    Icon: AlertCircle,
    title: "Audits without execution",
    desc: "You get a 60-page PDF. Nobody implements it. Six months later, nothing has moved and you're back to square one.",
    tag: "No follow-through",
  },
  {
    Icon: TrendingDown,
    title: "Content without intent",
    desc: "Blog posts targeting keywords that attract readers, not buyers. Traffic goes up. Pipeline stays completely flat.",
    tag: "Vanity traffic",
  },
  {
    Icon: Bug,
    title: "SEO disconnected from revenue",
    desc: "Rankings improve. But nobody tracks whether organic drives sign-ups, activations, or ARR. Impossible to justify budget.",
    tag: "No revenue link",
  },
];

const pillars = [
  {
    Icon: Target,
    title: "ICP-Aligned Strategy",
    desc: "Every keyword, topic, and content piece maps to your ideal customer profile and their buying journey — not just search volume.",
    tag: "Revenue mapping",
  },
  {
    Icon: FileText,
    title: "Semantic Content Systems",
    desc: "Topical authority clusters built with BM25 and semantic relevance. Content that dominates entire topic spaces, not just individual keywords.",
    tag: "Topical authority",
  },
  {
    Icon: Settings,
    title: "Technical Foundations",
    desc: "Crawl architecture, Core Web Vitals, JavaScript rendering, index quality — the foundation that makes everything else compound faster.",
    tag: "Technical SEO",
  },
  {
    Icon: BarChart3,
    title: "Revenue Attribution",
    desc: "Every initiative tracked against sign-ups, activations, and ARR. Full GA4 + GSC dashboards. No more 'organic traffic went up' reports.",
    tag: "ARR tracking",
  },
];

const includedItems = [
  { title: "Full technical SEO audit", desc: "Crawl analysis, indexation review, Core Web Vitals, structured data gaps." },
  { title: "ICP-aligned keyword research", desc: "Keyword mapping across TOFU, MOFU, BOFU for your specific buyer journey." },
  { title: "Topical authority roadmap", desc: "Semantic cluster strategy to dominate your entire topic space." },
  { title: "On-page optimization", desc: "Title tags, meta, internal links, schema — all implemented systematically." },
  { title: "Content production system", desc: "Brief templates, writer SOPs, editorial calendar, and quality framework." },
  { title: "Content creation / oversight", desc: "I write, review, or manage production depending on your resource model." },
  { title: "Link acquisition", desc: "High-DA backlinks via digital PR, partnerships, and resource link building." },
  { title: "Monthly ARR reporting", desc: "Revenue-tied dashboards tracking sign-ups, activations, and ARR from organic." },
  { title: "Slack / email access", desc: "Direct access to me — no account managers, no 5-day response windows." },
  { title: "Quarterly strategy reviews", desc: "Full performance review + next-quarter roadmap aligned to business goals." },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Understand your ICP, revenue model, growth targets, and current organic baseline.",
    week: "Week 1",
  },
  {
    num: "02",
    title: "Audit & Strategy",
    desc: "Full technical + content audit. Competitor gap analysis. 90-day roadmap prioritised by revenue impact.",
    week: "Weeks 2–3",
  },
  {
    num: "03",
    title: "Execution",
    desc: "Content production, on-page fixes, link building, technical implementations — all done by me.",
    week: "Ongoing",
  },
  {
    num: "04",
    title: "Measure",
    desc: "Monthly reviews tied to ARR, sign-ups, and activation rate. Roadmap iterated based on data.",
    week: "Monthly",
  },
];

const results = [
  {
    company: "Keka HR",
    metric: "$2.4M ARR",
    desc: "288K → 759K monthly sessions in 22 months. Built and led an 11-person content team. Help Center generating 16K organic visits/month.",
  },
  {
    company: "Venngage",
    metric: "$1.25M ARR",
    desc: "232% increase in organic sign-ups. 50+ landing pages built. Index quality improved by 40%. International SEO across 5 languages.",
  },
  {
    company: "GrabOn",
    metric: "4.3M sessions/mo",
    desc: "1.8M → 4.3M monthly sessions. Full site recovery post-algorithm hit. 400+ high-DA backlinks in 6 months.",
  },
];

const rightFor = [
  "B2B or B2C SaaS with $500K+ ARR looking to scale organic",
  "Teams investing $3K+ per month who want strategy AND execution",
  "Founders who've had bad agency experiences and want direct access",
  "Products with clear organic search demand in their category",
  "Companies who want SEO tied directly to revenue metrics",
];

const notRightFor = [
  "Pre-product startups with no ICP defined yet",
  "One-off projects with no follow-through budget",
  "Teams who want rankings without caring about revenue",
  "Businesses expecting results in under 60 days",
];

const faqs = [
  {
    q: "How long does it take to see results?",
    a: "Meaningful organic growth typically shows within 3–6 months. Quick wins — technical fixes, on-page optimization — often surface in 4–8 weeks. I set clear milestone targets at the start of every engagement so you always know what to expect when.",
  },
  {
    q: "Do you write the content yourself?",
    a: "For retainer clients, I build and manage the content system — including briefs, SOPs, and editorial review. I can also write directly or work with your existing writers. For smaller engagements, I provide the strategy and frameworks and your team executes.",
  },
  {
    q: "How is this different from an SEO agency?",
    a: "You get direct access to a senior practitioner — no account managers, no juniors running your campaigns. I've generated over $5M ARR across 22+ brands and I bring that context to every decision. One point of contact, full ownership, measurable outcomes.",
  },
];

const comparisonRows: [string, boolean, boolean][] = [
  ["Direct access", true, false],
  ["Revenue tracking", true, false],
  ["Execution included", true, false],
  ["Senior-only work", true, false],
];

export default function SeoPage() {
  return (
    <>
      <JsonLd schema={serviceSchema({ name: 'SEO Strategy & Execution', description: 'Full-funnel SEO strategy and execution for SaaS companies. Revenue-first approach tied to ARR and sign-ups.', url: 'https://chandanchaudhary.com/services/seo' })} />
      <JsonLd schema={faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))} />

      {/* ── Section 1: Hero ── */}
      <section
        aria-label="SEO Strategy hero"
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
            background: "radial-gradient(ellipse at 70% 0%, rgba(108,99,255,0.08) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div className="container">
          <div className="hero-grid">
            {/* Left — 55% */}
            <div>
              <p className="section-label">Core service</p>
              <h1 style={{ marginBottom: "1.25rem" }}>
                SEO Strategy &amp;{" "}
                <span style={{ color: "var(--color-accent)" }}>Execution.</span>
              </h1>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.75,
                  maxWidth: "52ch",
                  marginBottom: "1rem",
                }}
              >
                Full-funnel SEO built around your ICP and revenue goals. Topical authority, semantic content systems, and technical foundations — all mapped to sign-ups, activations, and ARR.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "var(--color-text-muted)",
                  marginBottom: "2rem",
                }}
              >
                9+ years · $5M+ ARR generated · 22+ SaaS brands
              </p>
              <div className="btn-group" style={{ marginBottom: "1.5rem" }}>
                <Link href="/contact" className="btn btn-primary">
                  Book a Free Strategy Call
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  All Services
                </Link>
              </div>
              <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
                <span className="badge badge-accent">Revenue-First SEO</span>
                <span className="badge badge-accent">End-to-End Execution</span>
                <span className="badge badge-muted">SaaS Focused</span>
              </div>
            </div>

            {/* Right — 45% */}
            <div>
              {/* Floating result card */}
              <div
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  padding: "1.5rem",
                  boxShadow: "var(--shadow-lg)",
                  transform: "rotate(-2deg)",
                  position: "relative",
                }}
              >
                {/* Availability */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#22c55e",
                      flexShrink: 0,
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    Available for new clients
                  </span>
                </div>

                <div aria-hidden="true" style={{ height: "1px", backgroundColor: "var(--color-border)", marginBottom: "1rem" }} />

                {/* Stat 1 */}
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.5rem",
                    fontWeight: 600,
                    color: "var(--color-accent)",
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  $2.4M
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    color: "var(--color-text-muted)",
                    marginBottom: "1rem",
                  }}
                >
                  ARR generated for Keka HR
                </p>

                <div aria-hidden="true" style={{ height: "1px", backgroundColor: "var(--color-border)", marginBottom: "1rem" }} />

                {/* Stat 2 */}
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  759K
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    color: "var(--color-text-muted)",
                    marginBottom: "1rem",
                  }}
                >
                  Monthly organic sessions at peak
                </p>

                <div aria-hidden="true" style={{ height: "1px", backgroundColor: "var(--color-border)", marginBottom: "1rem" }} />

                {/* Stat 3 */}
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  22 months
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    color: "var(--color-text-muted)",
                  }}
                >
                  End-to-end engagement duration
                </p>
              </div>

              {/* Floating badge pills */}
              <div
                style={{
                  display: "flex",
                  gap: "0.625rem",
                  flexWrap: "wrap",
                  marginTop: "1.25rem",
                  paddingLeft: "0.5rem",
                }}
              >
                <span className="badge badge-muted" style={{ fontSize: "0.75rem" }}>Semantic SEO</span>
                <span className="badge badge-muted" style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>Topical Authority</span>
                <span className="badge badge-muted" style={{ fontSize: "0.75rem" }}>BM25 Optimized</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: The Problem ── */}
      <section
        aria-label="Common SEO problems"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
            <p className="section-label">Why most SaaS SEO fails</p>
            <h2 style={{ marginBottom: "1rem" }}>
              You don&apos;t have a traffic problem.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.75,
                maxWidth: "52ch",
                margin: "0 auto",
              }}
            >
              Most early-stage SaaS teams invest in SEO without a system. They get blog posts, audits, and reports — but organic never becomes a real acquisition channel.
            </p>
          </div>

          <div className="grid-3">
            {problems.map((p) => (
              <article
                key={p.title}
                className="card"
                style={{
                  borderLeft: "3px solid rgba(239,68,68,0.5)",
                  padding: "1.5rem",
                }}
              >
                {/* Icon circle */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(239,68,68,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                  aria-hidden="true"
                >
                  <p.Icon size={20} style={{ color: "rgba(239,68,68,0.8)" }} aria-hidden="true" />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    marginBottom: "0.625rem",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "1rem",
                    flex: 1,
                  }}
                >
                  {p.desc}
                </p>
                <span className="badge badge-muted">{p.tag}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: The Solution — 4 Pillars ── */}
      <section
        aria-label="The SEO solution"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <div
            className="grid-solution"
          >
            {/* Left — 4 pillar cards */}
            <div>
              <p className="section-label">The solution</p>
              <h2 style={{ marginBottom: "2.5rem", maxWidth: "52ch" }}>
                A system that ties every action to revenue.
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1.25rem",
                }}
                className="max-sm:grid-cols-1"
              >
                {pillars.map((p) => (
                  <article
                    key={p.title}
                    className="card"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      padding: "1.5rem",
                    }}
                  >
                    {/* Faint background icon */}
                    <p.Icon
                      size={80}
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        top: "0.75rem",
                        right: "0.75rem",
                        color: "var(--color-accent)",
                        opacity: 0.04,
                        pointerEvents: "none",
                      }}
                    />
                    {/* Icon circle */}
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-accent-subtle)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "0.875rem",
                      }}
                      aria-hidden="true"
                    >
                      <p.Icon size={20} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.7,
                        marginBottom: "1rem",
                      }}
                    >
                      {p.desc}
                    </p>
                    <span className="badge badge-accent" style={{ fontSize: "0.6875rem" }}>{p.tag}</span>
                  </article>
                ))}
              </div>
            </div>

            {/* Right — Growth Flywheel SVG */}
            <div
              className="decorative-svg"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <GrowthFlywheel />
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "var(--color-text-muted)",
                  textAlign: "center",
                  maxWidth: "220px",
                  lineHeight: 1.6,
                }}
              >
                Each pillar reinforces the others — compounding returns over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: What's Included ── */}
      <section
        aria-label="What's included"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div className="grid-2">
            {/* Left — 40% */}
            <div>
              <p className="section-label">Scope of work</p>
              <h2 style={{ marginBottom: "1rem", maxWidth: "52ch" }}>
                Everything included.
              </h2>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                  maxWidth: "36ch",
                }}
              >
                No hidden extras. No &ldquo;that&apos;s out of scope.&rdquo; This is what you get on every engagement.
              </p>

              {/* Big stat */}
              <div style={{ marginBottom: "2rem" }}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "3.5rem",
                    fontWeight: 600,
                    color: "var(--color-accent)",
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  10
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "var(--color-text-muted)",
                  }}
                >
                  deliverables included in every retainer
                </p>
              </div>

              {/* vs agency comparison */}
              <div
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    padding: "0.75rem 1rem",
                    backgroundColor: "var(--color-accent-subtle)",
                    borderBottom: "1px solid var(--color-accent-border)",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 600, color: "var(--color-text-muted)" }}>What</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 600, color: "var(--color-accent)", textAlign: "center" }}>Me</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 600, color: "var(--color-text-muted)", textAlign: "center" }}>Agency</p>
                </div>
                {comparisonRows.map(([label, me, agency]) => (
                  <div
                    key={label}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      padding: "0.625rem 1rem",
                      borderBottom: "1px solid var(--color-border)",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "var(--color-text-secondary)" }}>{label}</p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      {me ? (
                        <CheckCircle2 size={16} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                      ) : (
                        <XCircle size={16} style={{ color: "rgba(239,68,68,0.6)" }} aria-hidden="true" />
                      )}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      {agency ? (
                        <CheckCircle2 size={16} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                      ) : (
                        <XCircle size={16} style={{ color: "rgba(239,68,68,0.6)" }} aria-hidden="true" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — 60%, 2-col feature grid */}
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "0",
                }}
                className="max-sm:grid-cols-1"
              >
                {includedItems.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "0.875rem",
                      padding: "1.125rem 0.75rem",
                      borderBottom: "1px solid var(--color-border)",
                      borderRight: i % 2 === 0 ? "1px solid var(--color-border)" : "none",
                    }}
                  >
                    <CheckCircle2
                      size={18}
                      aria-hidden="true"
                      style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "2px" }}
                    />
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontWeight: 600,
                          fontSize: "0.9375rem",
                          color: "var(--color-text-primary)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {item.title}
                      </p>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--color-text-secondary)",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: The Process ── */}
      <section
        aria-label="Process"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 3.5rem" }}>
            <p className="section-label">The process</p>
            <h2>How I approach SEO engagements.</h2>
          </div>

          {/* Desktop: horizontal timeline */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 0,
              position: "relative",
            }}
            className="max-md:flex-col max-md:gap-8"
          >
            {/* Connecting dashed line — desktop only */}
            <div
              aria-hidden="true"
              className="max-md:hidden"
              style={{
                position: "absolute",
                top: "2.75rem",
                left: "calc(12.5%)",
                right: "calc(12.5%)",
                height: "2px",
                borderTop: "2px dashed var(--color-border)",
                zIndex: 0,
              }}
            />

            {processSteps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 1rem",
                  position: "relative",
                  zIndex: 1,
                }}
                className="max-md:items-start max-md:text-left"
              >
                {/* Step number circle */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-accent-subtle)",
                    border: "2px solid var(--color-accent-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "var(--color-accent)",
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Large faint number */}
                <p
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "var(--color-accent)",
                    opacity: 0.4,
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {step.num}
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
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.65,
                    marginBottom: "0.875rem",
                    maxWidth: "22ch",
                  }}
                >
                  {step.desc}
                </p>
                <span className="badge badge-muted" style={{ fontSize: "0.6875rem" }}>{step.week}</span>

                {/* Arrow between steps — desktop */}
                {i < processSteps.length - 1 && (
                  <div
                    className="max-md:hidden"
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      right: "-12px",
                      top: "1rem",
                      zIndex: 2,
                    }}
                  >
                    <ChevronRight size={20} style={{ color: "var(--color-accent)", opacity: 0.5 }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Proof / Results ── */}
      <section
        aria-label="Results"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div className="grid-solution-reverse">
            {/* Left — Big stat */}
            <div>
              <p className="section-label">Proven results</p>
              <h2 style={{ marginBottom: "1.5rem", maxWidth: "52ch" }}>
                Numbers that matter.
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "4rem",
                  fontWeight: 700,
                  color: "var(--color-accent)",
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}
              >
                $5M+
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "var(--color-text-secondary)",
                  marginBottom: "1.5rem",
                }}
              >
                Total organic ARR impact across all clients
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "var(--color-text-muted)",
                  marginBottom: "0.75rem",
                }}
              >
                Including:
              </p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <span className="badge badge-muted">Keka HR</span>
                <span className="badge badge-muted">Venngage</span>
                <span className="badge badge-muted">GrabOn</span>
                <span className="badge badge-muted">Turito</span>
                <span className="badge badge-muted">YuppTV</span>
              </div>
            </div>

            {/* Right — 3 result cards stacked */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {results.map((r) => (
                <article
                  key={r.company}
                  className="card"
                  style={{
                    borderLeft: "3px solid var(--color-accent)",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    gap: "1.5rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{ flexShrink: 0 }}>
                    <span className="badge badge-accent" style={{ marginBottom: "0.5rem", display: "inline-flex" }}>
                      {r.company}
                    </span>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.5rem",
                        fontWeight: 600,
                        color: "var(--color-accent)",
                        lineHeight: 1,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {r.metric}
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.7,
                    }}
                  >
                    {r.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Is This Right For You ── */}
      <section
        aria-label="Is this right for you"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label">Fit check</p>
            <h2>Is this right for you?</h2>
          </div>

          <div className="fit-grid">
            {/* Right for */}
            <div
              style={{
                backgroundColor: "rgba(16,185,129,0.05)",
                border: "1px solid rgba(16,185,129,0.2)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  marginBottom: "1.25rem",
                }}
              >
                This is right for you if...
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {rightFor.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <CheckCircle2
                      size={16}
                      aria-hidden="true"
                      style={{ color: "rgba(16,185,129,0.8)", flexShrink: 0, marginTop: "2px" }}
                    />
                    <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Not right for */}
            <div
              style={{
                backgroundColor: "rgba(239,68,68,0.04)",
                border: "1px solid rgba(239,68,68,0.15)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  marginBottom: "1.25rem",
                }}
              >
                This is NOT right for you if...
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {notRightFor.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <XCircle
                      size={16}
                      aria-hidden="true"
                      style={{ color: "rgba(239,68,68,0.7)", flexShrink: 0, marginTop: "2px" }}
                    />
                    <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: FAQ ── */}
      <section
        aria-label="Frequently asked questions"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div
            className="grid-2"
          >
            {/* Left — decorative */}
            <div
              style={{
                flex: "0 0 32%",
                position: "relative",
              }}
              className="max-lg:w-full"
            >
              <p
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "6rem",
                  fontWeight: 700,
                  color: "var(--color-accent)",
                  opacity: 0.04,
                  lineHeight: 1,
                  marginBottom: "1.5rem",
                  userSelect: "none",
                }}
              >
                FAQ
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <HelpCircle
                  size={48}
                  style={{ color: "var(--color-accent)", opacity: 0.3 }}
                  aria-hidden="true"
                />
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                  }}
                >
                  Have more questions?
                </p>
              </div>
              <Link
                href="/contact"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "var(--color-accent)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                Book a call →
              </Link>
            </div>

            {/* Right — FAQ items */}
            <div>
              <p className="section-label">Common questions</p>
              <h2 style={{ marginBottom: "2rem", maxWidth: "52ch" }}>
                Questions about SEO.
              </h2>
              <div style={{ borderTop: "1px solid var(--color-border)" }}>
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "1.5rem 0",
                      borderBottom: "1px solid var(--color-border)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        fontSize: "1rem",
                        color: "var(--color-text-primary)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {faq.q}
                    </p>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.75,
                        maxWidth: "60ch",
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related services ── */}
      <section
        aria-label="Related services"
        style={{
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
          paddingBlock: "2.5rem",
        }}
      >
        <div className="container">
          <p className="section-label">Related services</p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "0.75rem" }}>
            <Link
              href="/services/technical-seo"
              style={{ fontSize: "0.9375rem", color: "var(--color-accent)", fontWeight: 500 }}
            >
              Technical SEO — the foundation that makes every strategy compound faster →
            </Link>
            <Link
              href="/services/aeo"
              style={{ fontSize: "0.9375rem", color: "var(--color-accent)", fontWeight: 500 }}
            >
              AEO — extend your organic visibility into AI-generated answers →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 9: CTA ── */}
      <section
        aria-label="Call to action"
        className="section-sm"
        style={{
          backgroundColor: "var(--color-accent-subtle)",
          borderTop: "1px solid var(--color-accent-border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Large decorative arrow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "var(--font-display)",
            fontSize: "20rem",
            fontWeight: 700,
            color: "var(--color-accent)",
            opacity: 0.03,
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          →
        </div>

        <div className="container" style={{ position: "relative" }}>
          <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ marginBottom: "1rem" }}>
              Ready to build a revenue-generating SEO system?
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-secondary)",
                marginBottom: "2.5rem",
                lineHeight: 1.75,
              }}
            >
              Book a free 30-minute call. I&apos;ll tell you exactly what I&apos;d do in your situation — no pitch, no pressure.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ marginBottom: "1.5rem", display: "inline-flex" }}>
              Book a Free Strategy Call
            </Link>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
              or email{" "}
              <a href={`mailto:${siteConfig.email}`} style={{ color: "var(--color-accent)" }}>
                {siteConfig.email}
              </a>
            </p>
            {/* Trust signals */}
            <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              {["No retainer lock-in", "Direct access", "Revenue-tied reporting"].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                  <CheckCircle2 size={14} aria-hidden="true" style={{ color: "var(--color-accent)" }} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "var(--color-text-secondary)" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
