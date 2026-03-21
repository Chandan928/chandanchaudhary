import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Clock,
  CheckCircle2,
  XCircle,
  Database,
  Link2,
  FileText,
  Search,
  BarChart2,
  HelpCircle,
  ChevronRight,
} from "lucide-react";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "GEO — Generative Engine Optimization",
  description: "Get cited by AI, not just ranked by Google. GEO consultant specializing in entity optimization, citation authority, and LLM visibility.",
  path: "/services/geo",
});

const pillars = [
  {
    num: "01",
    Icon: Database,
    title: "Entity Optimization",
    desc: "Define your brand as a recognized entity with structured attributes. Feed knowledge graphs, Wikidata, and verified directories that AI models trust.",
    tag: "Knowledge Graph",
  },
  {
    num: "02",
    Icon: Link2,
    title: "Citation Authority",
    desc: "Build citations across high-authority sources AI models reference: industry publications, verified directories, expert roundups, digital PR.",
    tag: "Digital PR",
  },
  {
    num: "03",
    Icon: FileText,
    title: "Structured Content",
    desc: "Reformat content using patterns AI retrieval systems prefer: definitions, entity mentions, Q&A formats, and semantic markup.",
    tag: "Semantic Markup",
  },
  {
    num: "04",
    Icon: Search,
    title: "Retrieval Optimization",
    desc: "Optimize for how LLMs process information. Semantic keyword density, entity co-occurrence, and direct answer formatting.",
    tag: "AI Retrieval",
  },
  {
    num: "05",
    Icon: BarChart2,
    title: "Visibility Monitoring",
    desc: "Track brand presence across ChatGPT, Claude, Perplexity, and Gemini. Measure citation frequency and competitive AI share.",
    tag: "GEO Analytics",
  },
];

const includedItems = [
  "Brand entity audit across AI platforms",
  "Knowledge graph submission",
  "Wikipedia/Wikidata entity setup",
  "Structured data implementation",
  "Citation source identification",
  "Digital PR and mention strategy",
  "Content restructuring for AI retrieval",
  "Competitor GEO gap analysis",
  "Monthly AI visibility report",
  "Brand accuracy monitoring",
];

const processSteps = [
  {
    num: "01",
    title: "Entity Audit",
    desc: "Map current AI presence across ChatGPT, Perplexity, Gemini, and Claude. Identify gaps, inaccuracies, and competitor advantages.",
    week: "Week 1",
  },
  {
    num: "02",
    title: "Foundation Build",
    desc: "Submit entity data, optimize structured content, identify citation opportunities. Build the knowledge foundation AI models reference.",
    week: "Week 2-3",
  },
  {
    num: "03",
    title: "Citation Campaign",
    desc: "Execute citation outreach, digital PR, and structured content publishing across high-authority sources.",
    week: "Month 2",
  },
  {
    num: "04",
    title: "Monitor & Optimize",
    desc: "Track AI citation frequency weekly. Refine based on what's getting cited. Build compound visibility over time.",
    week: "Ongoing",
  },
];

const rightFor = [
  "You're a category-defining SaaS brand wanting AI mindshare",
  "Your buyers use AI tools to research vendors before evaluating",
  "You want long-term brand authority, not just short-term rankings",
  "You have existing content that can be restructured for AI retrieval",
  "You're investing in a 12-month brand building strategy",
];

const notRightFor = [
  "You need qualified leads in the next 30-60 days",
  "You have no existing brand presence or content base",
  "You're in a hyper-local service business (Local SEO is better for you)",
  "You want guaranteed AI rankings in a fixed timeline",
];

const faqs = [
  {
    q: "How is GEO different from SEO?",
    a: "SEO optimizes for how search engines rank pages. GEO optimizes for how AI models learn about and cite your brand. They're complementary — strong SEO helps GEO — but GEO requires additional work: entity building, citation authority, and structured content specifically formatted for AI retrieval.",
  },
  {
    q: "Can you guarantee my brand will appear in AI answers?",
    a: "No — and anyone who does is misleading you. AI models update unpredictably. What I can guarantee is a systematic approach that significantly increases your probability of being cited, monitored against real data, and refined continuously based on results.",
  },
  {
    q: "Do I need GEO if I already rank well on Google?",
    a: "Yes — and your strong Google presence actually helps GEO. But ranking on Google doesn't automatically translate to AI citations. GEO requires additional entity signals, citation authority, and structured content that goes beyond standard SEO.",
  },
];

function CitationNetworkSVG({ maxWidth = 320 }: { maxWidth?: number }) {
  return (
    <svg
      viewBox="0 0 300 260"
      width="100%"
      style={{ maxWidth: `${maxWidth}px`, height: "auto" }}
      aria-hidden="true"
    >
      <rect x="108" y="108" width="84" height="36" rx="8" fill="rgba(108,99,255,0.12)" stroke="rgba(108,99,255,0.5)" strokeWidth="1.5" />
      <text x="150" y="130" fontSize="10" fill="rgb(108,99,255)" textAnchor="middle" fontWeight="600">Your Brand</text>

      <rect x="8" y="16" width="72" height="26" rx="5" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
      <text x="44" y="33" fontSize="8" fill="var(--color-text-muted)" textAnchor="middle">LinkedIn</text>

      <rect x="114" y="4" width="72" height="26" rx="5" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
      <text x="150" y="21" fontSize="8" fill="var(--color-text-muted)" textAnchor="middle">G2 Reviews</text>

      <rect x="220" y="16" width="72" height="26" rx="5" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
      <text x="256" y="33" fontSize="8" fill="var(--color-text-muted)" textAnchor="middle">Clutch</text>

      <rect x="8" y="218" width="72" height="26" rx="5" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
      <text x="44" y="235" fontSize="8" fill="var(--color-text-muted)" textAnchor="middle">Forbes</text>

      <rect x="114" y="230" width="72" height="26" rx="5" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
      <text x="150" y="247" fontSize="8" fill="var(--color-text-muted)" textAnchor="middle">Industry Blog</text>

      <rect x="220" y="218" width="72" height="26" rx="5" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
      <text x="256" y="235" fontSize="8" fill="var(--color-text-muted)" textAnchor="middle">Podcast</text>

      <line x1="80" y1="42" x2="120" y2="108" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="150" y1="30" x2="150" y2="108" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="220" y1="42" x2="180" y2="108" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="80" y1="218" x2="120" y2="144" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="150" y1="230" x2="150" y2="144" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="220" y1="218" x2="180" y2="144" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

export default function GeoPage() {
  return (
    <>
      <JsonLd schema={serviceSchema({ name: 'GEO — Generative Engine Optimization', description: 'Get cited by AI, not just ranked by Google. GEO consulting for entity optimization, citation authority, and LLM visibility.', url: 'https://chandanchaudhary.com/services/geo' })} />
      <JsonLd schema={faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))} />

      {/* ── Section 1: Hero ── */}
      <section
        aria-label="GEO hero"
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
          <div
                        className="hero-grid"
          >
            {/* Left — 55% */}
            <div >
              <p className="section-label">Generative Engine Optimization</p>
              <h1 style={{ marginBottom: "1.25rem" }}>
                Get cited by AI.{" "}
                <span style={{ color: "var(--color-accent)" }}>Not just ranked by Google.</span>
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
                LLMs like ChatGPT, Claude, and Gemini don&apos;t rank pages — they generate answers. GEO is the practice of making your brand part of what AI models know and cite — so when buyers ask AI, your brand shows up.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "var(--color-text-muted)",
                  marginBottom: "2rem",
                }}
              >
                Applied GEO frameworks across SaaS, EdTech, and enterprise brands.
              </p>
              <div className="btn-group" style={{ marginBottom: "1.5rem" }}>
                <Link href="/contact" className="btn btn-primary">
                  Book a GEO Strategy Call
                </Link>
                <Link href="#process" className="btn btn-secondary">
                  How GEO works
                </Link>
              </div>
              <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
                <span className="badge badge-accent">LLM Visibility</span>
                <span className="badge badge-accent">Entity Authority</span>
                <span className="badge badge-accent">Citation Building</span>
              </div>
            </div>

            {/* Right — 45%: Knowledge Panel Card */}
            <div
              style={{ width: '100%', display: 'flex', alignItems: 'stretch', justifyContent: 'flex-end' }}
            >
              <div
                style={{
                  width: '100%',
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  boxShadow: "var(--shadow-lg)",
                  overflow: "hidden",
                }}
              >
                {/* Card header */}
                <div
                  style={{
                    padding: "0.875rem 1.25rem",
                    borderBottom: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-surface)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      marginBottom: "0.375rem",
                    }}
                  >
                    KNOWLEDGE PANEL
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Chandan Chaudhary
                  </p>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    SEO Consultant · GEO Expert
                  </p>
                </div>

                {/* Avatar row */}
                <div
                  style={{
                    padding: "1rem 1.25rem",
                    display: "flex",
                    gap: "0.875rem",
                    alignItems: "center",
                  }}
                >
                  {/* Avatar */}
                  <div
                    aria-hidden="true"
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-accent-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--color-accent)",
                      }}
                    >
                      CC
                    </span>
                  </div>
                  {/* Two lines */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                      <MapPin size={12} style={{ color: "var(--color-text-muted)", flexShrink: 0 }} aria-hidden="true" />
                      <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>Hyderabad, India</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                      <Clock size={12} style={{ color: "var(--color-text-muted)", flexShrink: 0 }} aria-hidden="true" />
                      <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>9+ years experience</span>
                    </div>
                  </div>
                </div>

                {/* Attributes */}
                <div style={{ padding: "0 1.25rem 1rem" }}>
                  {[
                    { label: "Specialty", value: "Semantic SEO, GEO, AEO", accent: false },
                    { label: "ARR Impact", value: "$5M+", accent: true },
                    { label: "Brands", value: "22+ SaaS & Tech", accent: false },
                  ].map((row, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0.375rem 0",
                        borderBottom: "1px solid var(--color-border)",
                      }}
                    >
                      <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>{row.label}</span>
                      <span
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: row.accent ? 600 : 500,
                          color: row.accent ? "var(--color-accent)" : "var(--color-text-primary)",
                        }}
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Citations */}
                <div
                  style={{
                    padding: "0.75rem 1.25rem",
                    backgroundColor: "var(--color-surface)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    REFERENCED BY:
                  </p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {["LinkedIn", "G2", "Clutch"].map((source) => (
                      <span
                        key={source}
                        style={{
                          backgroundColor: "var(--color-surface)",
                          border: "1px solid var(--color-border)",
                          borderRadius: "var(--radius-full)",
                          padding: "0.2rem 0.625rem",
                          fontSize: "0.7rem",
                          color: "var(--color-text-muted)",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.375rem",
                        }}
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            backgroundColor: "var(--color-accent)",
                            flexShrink: 0,
                          }}
                        />
                        {source}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div
                  style={{
                    padding: "0.625rem 1.25rem",
                    backgroundColor: "rgba(16,185,129,0.06)",
                    borderTop: "1px solid rgba(16,185,129,0.15)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <CheckCircle2
                    size={12}
                    aria-hidden="true"
                    style={{ color: "rgba(16,185,129,0.8)", flexShrink: 0 }}
                  />
                  <span style={{ fontSize: "0.7rem", color: "rgba(16,185,129,0.8)" }}>
                    Entity verified across AI knowledge systems
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: The Problem ── */}
      <section
        aria-label="The problem with AI visibility"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
            <p className="section-label">The problem</p>
            <h2 style={{ marginBottom: "1rem" }}>
              Google rankings don&apos;t guarantee AI visibility.
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
              You can rank #1 on Google and still be completely absent from AI-generated answers.
            </p>
          </div>

          <div
            className="grid-3"
          >
            {/* Card 1 */}
            <article className="card" style={{ padding: "1.5rem" }}>
              <span className="badge badge-muted" style={{ marginBottom: "0.875rem", display: "inline-flex" }}>ChatGPT</span>
              {/* Query box */}
              <div
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.5rem 0.75rem",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-text-muted)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  marginBottom: "1rem",
                }}
              >
                <Search size={14} aria-hidden="true" style={{ color: "var(--color-text-muted)", flexShrink: 0 }} />
                Best SEO consultant for SaaS India?
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
                You&apos;re invisible to AI
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                Your competitors appear in AI-generated answers. Your brand doesn&apos;t. Not because you&apos;re worse — because your content isn&apos;t structured for AI retrieval systems.
              </p>
            </article>

            {/* Card 2 */}
            <article className="card" style={{ padding: "1.5rem" }}>
              <span className="badge badge-muted" style={{ marginBottom: "0.875rem", display: "inline-flex" }}>Perplexity</span>
              <div
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.5rem 0.75rem",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-text-muted)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  marginBottom: "1rem",
                }}
              >
                <Search size={14} aria-hidden="true" style={{ color: "var(--color-text-muted)", flexShrink: 0 }} />
                Who handles GEO for SaaS brands?
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
                AI gets your brand wrong
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                AI models hallucinate details about brands with weak entity signals. Wrong pricing, outdated services, wrong positioning — destroying trust before the first touchpoint.
              </p>
            </article>

            {/* Card 3 */}
            <article className="card" style={{ padding: "1.5rem" }}>
              <span className="badge badge-muted" style={{ marginBottom: "0.875rem", display: "inline-flex" }}>Gemini</span>
              <div
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.5rem 0.75rem",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-text-muted)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  marginBottom: "1rem",
                }}
              >
                <Search size={14} aria-hidden="true" style={{ color: "var(--color-text-muted)", flexShrink: 0 }} />
                Compare top SEO consultants India
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
                Competitors own the narrative
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                Brands with stronger entity signals get cited as the authority. Not because they&apos;re better — because their GEO foundation is stronger.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── Section 3: The Solution ── */}
      <section
        aria-label="How I approach GEO"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3.5rem" }}>
            <p className="section-label">How I approach GEO</p>
            <h2 style={{ marginBottom: "1rem" }}>Own your entity. Control your narrative.</h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.75,
                maxWidth: "52ch",
                margin: "0 auto",
              }}
            >
              GEO is about becoming a trusted, well-defined entity in the world&apos;s knowledge systems. When AI models have rich, accurate information about your brand — they cite you.
            </p>
          </div>

          <div
                        className="grid-2"
          >
            {/* Left — Citation Network SVG */}
            <div
              style={{
                flex: "0 0 38%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
              className="max-lg:w-full max-lg:items-start"
            >
              <CitationNetworkSVG maxWidth={320} />
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
                Your brand at the centre of a verified citation network AI models trust.
              </p>
            </div>

            {/* Right — 5 pillars as left-border rows */}
            <div>
              {pillars.map((pillar) => (
                <div
                  key={pillar.num}
                  style={{
                    borderLeft: "2px solid var(--color-accent-border)",
                    paddingLeft: "1.25rem",
                    marginBottom: "1.75rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.375rem",
                    }}
                  >
                    <div
                      aria-hidden="true"
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-accent-subtle)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <pillar.Icon size={16} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: "var(--color-accent)",
                      }}
                    >
                      {pillar.num}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                      marginBottom: "0.375rem",
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.65,
                      marginBottom: "0.625rem",
                    }}
                  >
                    {pillar.desc}
                  </p>
                  <span className="badge badge-muted" style={{ fontSize: "0.6875rem" }}>{pillar.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: What's Included ── */}
      <section
        aria-label="What's included in GEO"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div
                        className="grid-2"
          >
            {/* Left — 40% */}
            <div >
              <p className="section-label">Scope of work</p>
              <h2 style={{ marginBottom: "1rem", maxWidth: "52ch" }}>
                Everything to build your GEO presence.
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
                A complete GEO system — from entity foundation to citation monitoring.
              </p>

              {/* 3 stat cards stacked */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { num: "5", label: "AI platforms monitored" },
                  { num: "90 days", label: "Average time to first citations" },
                  { num: "100%", label: "Brand accuracy target" },
                ].map((stat) => (
                  <div
                    key={stat.num}
                    style={{
                      backgroundColor: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-lg)",
                      padding: "1rem 1.25rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.75rem",
                        fontWeight: 600,
                        color: "var(--color-accent)",
                        lineHeight: 1,
                        marginBottom: "0.25rem",
                      }}
                    >
                      {stat.num}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — 60%, 2-col grid */}
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 0,
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
                      alignItems: "flex-start",
                    }}
                  >
                    <CheckCircle2
                      size={18}
                      aria-hidden="true"
                      style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "2px" }}
                    />
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 500,
                        fontSize: "0.9375rem",
                        color: "var(--color-text-primary)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Process ── */}
      <section
        id="process"
        aria-label="GEO process"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 3.5rem" }}>
            <p className="section-label">The process</p>
            <h2>How I build your GEO presence.</h2>
          </div>

          {/* Horizontal timeline */}
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
                    fontWeight: 600,
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

      {/* ── Section 6: Proof ── */}
      <section
        aria-label="GEO results"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div
                        className="grid-2"
          >
            {/* Left — 45% */}
            <div >
              <p className="section-label">Proven results</p>
              <h2 style={{ marginBottom: "1.5rem", maxWidth: "52ch" }}>
                GEO impact in numbers.
              </h2>
              <CitationNetworkSVG maxWidth={280} />
            </div>

            {/* Right — 55%: result rows */}
            <div>
              {[
                {
                  metric: "3X",
                  label: "AI Citation Increase",
                  desc: "Average increase in AI citation frequency after implementing GEO framework for SaaS clients",
                },
                {
                  metric: "90 days",
                  label: "First AI Citations",
                  desc: "Average time to verified AI citations appearing in ChatGPT, Perplexity, and Gemini",
                },
                {
                  metric: "5 platforms",
                  label: "Full Coverage",
                  desc: "AI systems actively monitored and optimized for consistent brand visibility and citation accuracy",
                },
              ].map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.25rem",
                    padding: "1.25rem 0",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2rem",
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      lineHeight: 1,
                      flexShrink: 0,
                      minWidth: "90px",
                    }}
                  >
                    {r.metric}
                  </p>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        color: "var(--color-text-primary)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {r.label}
                    </p>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.65,
                      }}
                    >
                      {r.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Fit Check ── */}
      <section
        aria-label="Is GEO right for you"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label">Fit check</p>
            <h2>Is this right for you?</h2>
          </div>

          <div
            className="fit-grid"
          >
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
        aria-label="GEO frequently asked questions"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div
                        className="grid-2"
          >
            {/* Left — decorative */}
            <div
              style={{ flex: "0 0 32%", position: "relative" }}
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
              <p className="section-label">FAQ</p>
              <h2 style={{ marginBottom: "2rem", maxWidth: "52ch" }}>
                Common questions about GEO.
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
              href="/services/seo"
              style={{ fontSize: "0.9375rem", color: "var(--color-accent)", fontWeight: 500 }}
            >
              SEO Strategy & Execution — the Google ranking authority that helps GEO work →
            </Link>
            <Link
              href="/services/aeo"
              style={{ fontSize: "0.9375rem", color: "var(--color-accent)", fontWeight: 500 }}
            >
              AEO — optimize specifically for AI-generated answers and featured responses →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 9: CTA ── */}
      <section
        aria-label="Book a GEO strategy call"
        className="section-sm"
        style={{
          backgroundColor: "var(--color-accent-subtle)",
          borderTop: "1px solid var(--color-accent-border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Large decorative symbol */}
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
              Ready to become the brand AI cites?
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-secondary)",
                marginBottom: "2.5rem",
                lineHeight: 1.75,
              }}
            >
              Book a 30-minute GEO strategy call. I&apos;ll audit your current AI presence and show you exactly what it would take to get cited — no pitch, no pressure.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{ marginBottom: "1.5rem", display: "inline-flex" }}
            >
              Book a GEO Strategy Call
            </Link>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
              or email{" "}
              <a href={`mailto:${siteConfig.email}`} style={{ color: "var(--color-accent)" }}>
                {siteConfig.email}
              </a>
            </p>
            {/* Trust signals */}
            <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              {["5 AI platforms tracked", "Entity-first approach", "Measurable citation growth"].map((t) => (
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
