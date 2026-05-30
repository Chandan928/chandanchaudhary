import type { Metadata } from "next";
import Link from "next/link";
import {
  Brain,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Layers,
  LineChart,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  XCircle,
} from "lucide-react";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  titleAbsolute: "AI Search Optimization Services for SaaS and AI Companies",
  description:
    "Improve visibility across Google AI Overviews, ChatGPT, Perplexity, Gemini, and AI-assisted search journeys.",
  path: "/services/ai-search",
});

const visibilityTargets = [
  "Google AI Overviews",
  "ChatGPT",
  "Perplexity",
  "Gemini",
  "Claude",
  "Copilot",
];

const problems = [
  {
    Icon: Search,
    title: "Buyers research before they click",
    desc: "Your prospects ask AI tools for shortlists, comparisons, and recommendations before they land on your site.",
    tag: "Zero-click discovery",
  },
  {
    Icon: Brain,
    title: "AI answers need clear entities",
    desc: "If your brand, product, audience, and proof are not easy to understand, AI systems skip you or describe you poorly.",
    tag: "Entity clarity",
  },
  {
    Icon: ShieldCheck,
    title: "Citations decide trust",
    desc: "AI search leans on sources it can verify. You need consistent third-party signals, not only optimized pages.",
    tag: "Source authority",
  },
];

const pillars = [
  {
    Icon: Target,
    title: "AI Visibility Audit",
    desc: "Map where your brand appears today across answer engines, AI Overviews, and comparison prompts.",
  },
  {
    Icon: Layers,
    title: "Entity Architecture",
    desc: "Clarify who you serve, what you do, and why you are credible with structured pages, schema, and consistent mentions.",
  },
  {
    Icon: Sparkles,
    title: "Answer-Ready Content",
    desc: "Rebuild key pages and content clusters so AI systems can extract clear, concise, buyer-useful answers.",
  },
  {
    Icon: ShieldCheck,
    title: "Citation Authority",
    desc: "Prioritize the directories, publications, profiles, and references that strengthen AI search trust signals.",
  },
  {
    Icon: LineChart,
    title: "Monitoring and Iteration",
    desc: "Track prompt visibility, citation accuracy, competitive share, and the queries that matter to pipeline.",
  },
];

const includedItems = [
  "AI search visibility benchmark",
  "Prompt and buyer-query map",
  "Entity and schema audit",
  "Content restructuring plan",
  "Comparison-page optimization",
  "Citation source roadmap",
  "Competitor AI visibility analysis",
  "Monthly prompt monitoring",
  "Accuracy and hallucination checks",
  "90-day AI search execution roadmap",
];

const processSteps = [
  {
    num: "01",
    title: "Audit",
    week: "Week 1",
    desc: "Test buyer prompts across AI platforms, benchmark competitors, and document how your brand is currently represented.",
  },
  {
    num: "02",
    title: "Architecture",
    week: "Weeks 2-3",
    desc: "Build the entity, schema, page, and citation strategy that makes your brand easier to retrieve and trust.",
  },
  {
    num: "03",
    title: "Execution",
    week: "Month 2",
    desc: "Optimize core pages, create answer assets, improve third-party signals, and fix inaccurate AI references.",
  },
  {
    num: "04",
    title: "Measure",
    week: "Ongoing",
    desc: "Monitor prompts, citations, accuracy, and competitive share so the system improves as AI search shifts.",
  },
];

const rightFor = [
  "SaaS or AI companies whose buyers research categories before booking demos",
  "Brands with existing SEO content that can be upgraded for AI retrieval",
  "Teams that want Google search and AI search working as one acquisition system",
  "Founders who need accurate brand representation in AI-generated answers",
];

const notRightFor = [
  "Companies with no clear ICP, positioning, or proof yet",
  "Teams expecting guaranteed placement inside AI answers",
  "Businesses that need paid-lead volume in the next 30 days",
];

const faqs = [
  {
    q: "Is AI Search Optimization different from SEO?",
    a: "It builds on SEO, but the goal is broader than ranking pages. AI search work improves entity clarity, extractable answers, trusted citations, and how your brand appears in generated responses.",
  },
  {
    q: "Which platforms do you optimize for?",
    a: "The core workflow covers Google AI Overviews, ChatGPT, Perplexity, Gemini, Claude, and Copilot. The exact tracking set depends on where your buyers research.",
  },
  {
    q: "How long does it take to see movement?",
    a: "Most teams see useful visibility and accuracy signals within 60-90 days. Stronger citation patterns and category-level presence usually compound over 3-6 months.",
  },
];

function AiSearchPreview() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-accent-border)",
        borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-lg)",
        overflow: "hidden",
      }}
      aria-label="AI search visibility preview"
    >
      <div
        style={{
          padding: "0.875rem 1rem",
          borderBottom: "1px solid var(--color-border)",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          backgroundColor: "var(--color-surface-2)",
        }}
      >
        <Search size={16} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
          best seo consultant for saas ai search growth
        </p>
      </div>

      <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div
          style={{
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-lg)",
            padding: "1rem",
            backgroundColor: "var(--color-bg)",
          }}
        >
          <p className="section-label" style={{ marginBottom: "0.625rem" }}>
            AI Answer
          </p>
          <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
            Chandan Chaudhary is a strong fit for SaaS and AI companies that need SEO,
            AI search visibility, entity clarity, and revenue-focused organic growth systems.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
          {[
            ["Mention accuracy", "High"],
            ["Citation fit", "Improving"],
            ["Buyer intent", "Mapped"],
            ["Competitor gap", "Tracked"],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                padding: "0.75rem",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <p style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", marginBottom: "0.25rem" }}>
                {label}
              </p>
              <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--color-text-primary)" }}>
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AiSearchPage() {
  return (
    <>
      <JsonLd
        schema={serviceSchema({
          name: "AI Search Optimization",
          description:
            "AI search optimization consulting for SaaS and AI companies across Google AI Overviews, ChatGPT, Perplexity, Gemini, and other AI-assisted discovery experiences.",
          url: "https://chandanchaudhary.com/services/ai-search",
          serviceType: "AI Search Optimization",
        })}
      />
      <JsonLd schema={faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))} />

      <section
        aria-label="AI Search Optimization hero"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--color-bg)",
          paddingTop: "8rem",
          paddingBottom: "5rem",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "700px",
            height: "500px",
            background:
              "radial-gradient(ellipse at 70% 0%, rgba(108,99,255,0.08) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative" }}>
          <div className="hero-grid">
            <div>
              <p className="section-label">AI Search Optimization</p>
              <h1 style={{ marginBottom: "1.25rem" }}>
                Become the brand AI search{" "}
                <span style={{ color: "var(--color-accent)" }}>can find, trust, and cite.</span>
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
                AI search is changing how buyers discover vendors. I help SaaS and AI companies
                improve visibility across AI Overviews, ChatGPT, Perplexity, Gemini, and the
                answer-led journeys that happen before a demo request.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "var(--color-text-muted)",
                  marginBottom: "2rem",
                }}
              >
                Built on the same revenue-first SEO system used across 22+ SaaS and tech brands.
              </p>
              <div className="btn-group" style={{ marginBottom: "1.5rem" }}>
                <Link href="/contact" className="btn btn-primary">
                  Book an AI Search Audit
                </Link>
                <Link href="#process" className="btn btn-secondary">
                  See the Process
                </Link>
              </div>
              <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
                {visibilityTargets.slice(0, 4).map((target) => (
                  <span key={target} className="badge badge-accent">
                    {target}
                  </span>
                ))}
              </div>
            </div>

            <AiSearchPreview />
          </div>
        </div>
      </section>

      <section
        aria-label="Why AI search matters"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
            <p className="section-label">The shift</p>
            <h2 style={{ marginBottom: "1rem" }}>AI search is now part of the buyer journey.</h2>
            <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", lineHeight: 1.75 }}>
              Traditional SEO still matters. But your brand also needs to be legible to systems
              that summarize, compare, cite, and recommend before users ever click.
            </p>
          </div>

          <div className="grid-3">
            {problems.map(({ Icon, title, desc, tag }) => (
              <article key={title} className="card" style={{ padding: "1.5rem" }}>
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
                <h3 style={{ fontSize: "1rem", marginBottom: "0.625rem" }}>{title}</h3>
                <p style={{ fontSize: "0.9375rem", marginBottom: "1rem" }}>{desc}</p>
                <span className="badge badge-muted">{tag}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-label="AI Search Optimization system"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <div className="grid-solution">
            <div>
              <p className="section-label">The system</p>
              <h2 style={{ marginBottom: "2rem" }}>
                One search strategy for rankings, answers, and citations.
              </h2>
              <div style={{ display: "grid", gap: "1rem" }}>
                {pillars.map(({ Icon, title, desc }) => (
                  <article
                    key={title}
                    className="card"
                    style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1.25rem" }}
                  >
                    <Icon
                      size={22}
                      aria-hidden="true"
                      style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "2px" }}
                    />
                    <div>
                      <h3 style={{ fontSize: "1rem", marginBottom: "0.375rem" }}>{title}</h3>
                      <p style={{ fontSize: "0.9375rem" }}>{desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div
              className="card sticky-col"
              style={{ padding: "2rem", position: "sticky", top: "6rem" }}
            >
              <p className="section-label">Included</p>
              <h3 style={{ marginBottom: "1.25rem" }}>What the engagement covers.</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {includedItems.map((item) => (
                  <div key={item} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                    <CheckCircle2
                      size={16}
                      aria-hidden="true"
                      style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "3px" }}
                    />
                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="process"
        aria-label="AI Search Optimization process"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 3.5rem" }}>
            <p className="section-label">The process</p>
            <h2>How I build AI search visibility.</h2>
          </div>

          <div
            style={{ display: "flex", alignItems: "flex-start", gap: 0, position: "relative" }}
            className="max-md:flex-col max-md:gap-8"
          >
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
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "0.875rem", fontWeight: 700, color: "var(--color-accent)" }}>
                    {step.num}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.0625rem", marginBottom: "0.5rem" }}>{step.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: 1.65, marginBottom: "0.875rem", maxWidth: "22ch" }}>
                  {step.desc}
                </p>
                <span className="badge badge-muted" style={{ fontSize: "0.6875rem" }}>
                  {step.week}
                </span>
                {i < processSteps.length - 1 && (
                  <div className="max-md:hidden" aria-hidden="true" style={{ position: "absolute", right: "-12px", top: "1rem", zIndex: 2 }}>
                    <ChevronRight size={20} style={{ color: "var(--color-accent)", opacity: 0.5 }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-label="Is AI Search Optimization right for you"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label">Fit check</p>
            <h2>Is this right for you?</h2>
          </div>

          <div className="fit-grid">
            <div style={{ backgroundColor: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: "var(--radius-lg)", padding: "2rem" }}>
              <h3 style={{ fontSize: "1rem", marginBottom: "1.25rem" }}>Right for you if...</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {rightFor.map((item) => (
                  <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <CheckCircle2 size={16} aria-hidden="true" style={{ color: "rgba(16,185,129,0.8)", flexShrink: 0, marginTop: "2px" }} />
                    <p style={{ fontSize: "0.9375rem" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ backgroundColor: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: "var(--radius-lg)", padding: "2rem" }}>
              <h3 style={{ fontSize: "1rem", marginBottom: "1.25rem" }}>Not right for you if...</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {notRightFor.map((item) => (
                  <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <XCircle size={16} aria-hidden="true" style={{ color: "rgba(239,68,68,0.7)", flexShrink: 0, marginTop: "2px" }} />
                    <p style={{ fontSize: "0.9375rem" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="AI Search Optimization FAQ"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div className="grid-2">
            <div className="desktop-only">
              <p aria-hidden="true" style={{ fontFamily: "var(--font-display)", fontSize: "6rem", fontWeight: 700, color: "var(--color-accent)", opacity: 0.04, lineHeight: 1, marginBottom: "1.5rem" }}>
                FAQ
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <HelpCircle size={48} style={{ color: "var(--color-accent)", opacity: 0.3 }} aria-hidden="true" />
                <p style={{ fontWeight: 600, color: "var(--color-text-primary)" }}>Have more questions?</p>
              </div>
              <Link href="/contact" style={{ fontWeight: 600, color: "var(--color-accent)" }}>
                Book a call
              </Link>
            </div>

            <div>
              <p className="section-label">Common questions</p>
              <h2 style={{ marginBottom: "2rem" }}>Questions about AI search.</h2>
              <div style={{ borderTop: "1px solid var(--color-border)" }}>
                {faqs.map((faq) => (
                  <div key={faq.q} style={{ padding: "1.5rem 0", borderBottom: "1px solid var(--color-border)" }}>
                    <p style={{ fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
                      {faq.q}
                    </p>
                    <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, maxWidth: "60ch" }}>
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Book an AI search audit"
        className="section-sm"
        style={{
          backgroundColor: "var(--color-accent-subtle)",
          borderTop: "1px solid var(--color-accent-border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ position: "relative" }}>
          <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ marginBottom: "1rem" }}>Ready to see how AI search sees your brand?</h2>
            <p style={{ fontSize: "1.0625rem", marginBottom: "2.5rem" }}>
              Book a free AI search audit. I will review your current presence and show you the
              highest-leverage fixes to improve visibility, accuracy, and citations.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ marginBottom: "1.5rem", display: "inline-flex" }}>
              Book an AI Search Audit
            </Link>
            <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
              or email{" "}
              <a href={`mailto:${siteConfig.email}`} style={{ color: "var(--color-accent)" }}>
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
