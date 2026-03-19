import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  CheckCircle2,
  XCircle,
  Search,
  Globe,
  HelpCircle,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { EntityWeb } from "@/components/graphics/EntityWeb";

export const metadata: Metadata = buildMetadata({
  title: "AEO — Answer Engine Optimization",
  path: "/services/aeo",
});

const problems = [
  {
    platform: "ChatGPT",
    query: "Best SEO consultant for SaaS in India?",
    response: "Your competitors appear in AI answers. Your brand doesn't. Not because you're worse — because your content isn't structured for AI retrieval.",
  },
  {
    platform: "Perplexity",
    query: "Who is the top SEO consultant?",
    response: "AI models hallucinate or reference outdated information about your brand. Wrong pricing, wrong services, wrong positioning — damaging trust before the first touchpoint.",
  },
  {
    platform: "Gemini",
    query: "Compare SEO consultant options",
    response: "Buyers complete 60-70% of their research using AI before visiting any website. If you're not in the AI answer, you're not in the consideration set.",
  },
];

const pillars = [
  {
    num: "01",
    title: "Entity Optimization",
    desc: "Make your brand a recognized entity in AI knowledge graphs with clear attributes, relationships, and authority signals.",
  },
  {
    num: "02",
    title: "Structured Content Architecture",
    desc: "Format content so AI models can extract, cite, and reference your expertise in generated answers.",
  },
  {
    num: "03",
    title: "Citation Authority Building",
    desc: "Earn mentions and citations from sources AI models trust: industry publications, verified profiles, expert roundups.",
  },
  {
    num: "04",
    title: "Retrieval Optimization",
    desc: "Structure your content using semantic patterns that match how AI retrieval systems process and rank information.",
  },
  {
    num: "05",
    title: "Answer Optimization",
    desc: "Craft content that directly answers the questions your buyers are asking AI — in the format AI models prefer to cite.",
  },
];

const includedItems = [
  { title: "AI search behavior audit", desc: "Map how buyers use AI tools to research your category." },
  { title: "Brand entity analysis", desc: "How AI models currently understand and represent your brand." },
  { title: "Knowledge graph optimization", desc: "Build structured data that feeds AI knowledge graphs." },
  { title: "Structured content formatting", desc: "Reformat existing content for AI extraction and citation." },
  { title: "FAQ and answer optimization", desc: "Create content structured to answer buyer queries directly." },
  { title: "Citation source strategy", desc: "Identify and pursue the sources AI models trust most." },
  { title: "Thought leadership placement", desc: "Place expertise where AI models discover authoritative voices." },
  { title: "AI visibility monitoring setup", desc: "Configure tracking across ChatGPT, Perplexity, and Gemini." },
  { title: "Monthly AI citation report", desc: "Detailed report on citation frequency, accuracy, and competitive share." },
  { title: "Competitive AI presence analysis", desc: "Benchmark your AI visibility against direct competitors." },
];

const processSteps = [
  {
    num: "01",
    title: "AI Presence Audit",
    week: "Week 1",
    desc: "Map your current AI visibility across ChatGPT, Perplexity, Gemini, and Claude. Identify gaps, hallucinations, and competitor advantages.",
  },
  {
    num: "02",
    title: "Entity & Content Strategy",
    week: "Weeks 2–3",
    desc: "Build your entity optimization plan. Identify citation opportunities. Create structured content templates your team executes.",
  },
  {
    num: "03",
    title: "Implementation",
    week: "Month 2",
    desc: "Execute entity signals, structured content, citation outreach, and knowledge graph updates. Monitor AI responses weekly.",
  },
  {
    num: "04",
    title: "Monitor & Amplify",
    week: "Ongoing",
    desc: "Track AI citation frequency, brand mention accuracy, and competitive visibility. Double down on what's getting you cited.",
  },
];

const proofCards = [
  {
    platform: "ChatGPT",
    metric: "Top 3 mentions",
    desc: "Achieved for SaaS clients in competitive categories within 90 days of implementation.",
  },
  {
    platform: "Perplexity",
    metric: "8–12 citations/mo",
    desc: "Average monthly AI citations achieved for clients with optimized content and entity signals.",
  },
  {
    platform: "Multi-platform",
    metric: "5 platforms tracked",
    desc: "Comprehensive AI visibility monitoring and optimization across all major AI search platforms.",
  },
];

const rightFor = [
  "Your buyers are technical or research-heavy — they use AI tools to evaluate vendors",
  "You're in a competitive SaaS category where AI mentions drive consideration",
  "You want to be visible before buyers reach Google",
  "You're already doing SEO and want to extend into AI search",
  "You want to future-proof your brand as AI search grows",
];

const notRightFor = [
  "You need immediate leads in the next 30 days",
  "Your buyers are non-technical and don't use AI tools",
  "You have no existing content or brand authority to build on",
];

const faqs = [
  {
    q: "How do you measure AEO success if AI results change constantly?",
    a: "I set up systematic monitoring using tools like Profound, Peec AI, and manual sampling across ChatGPT, Perplexity, and Gemini. We track citation frequency, brand mention accuracy, and competitive share of AI answers — reported monthly.",
  },
  {
    q: "Is AEO separate from SEO or part of it?",
    a: "AEO and SEO are deeply connected. Strong topical authority and technical SEO form the foundation for AI visibility. I approach them as one integrated system — content that ranks on Google also gets cited by AI, and vice versa.",
  },
  {
    q: "How long does it take to start appearing in AI answers?",
    a: "Initial AI citation improvements typically appear within 60-90 days of implementation. Full entity recognition and consistent multi-platform visibility builds over 3-6 months — similar timeline to organic SEO authority.",
  },
];

export default function AeoPage() {
  return (
    <>
      <JsonLd schema={faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))} />

      {/* ── Section 1: Hero ── */}
      <section
        aria-label="AEO hero"
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
            background: "radial-gradient(ellipse at 70% 10%, rgba(108,99,255,0.07) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div className="container">
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "3.5rem" }}
            className="max-lg:flex-col"
          >
            {/* Left 55% */}
            <div style={{ flex: "0 0 55%", maxWidth: "55%" }} className="max-lg:max-w-full">
              <p className="section-label">Answer Engine Optimization</p>
              <h1 style={{ marginBottom: "1.25rem" }}>
                When buyers ask AI,{" "}
                <span style={{ color: "var(--color-accent)" }}>does your brand show up?</span>
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
                ChatGPT, Perplexity, and Gemini are now the first stop for B2B research. If your brand isn&apos;t showing up in AI-generated answers, you&apos;re invisible to a growing segment of your buyers — before they ever reach Google.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "var(--color-text-muted)",
                  marginBottom: "2rem",
                }}
              >
                The same system I used to increase AI citations for SaaS brands across 5 categories.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                <Link href="/contact" className="btn btn-primary">
                  Get AEO Audit
                </Link>
                <Link href="#process" className="btn btn-secondary">
                  See How It Works
                </Link>
              </div>
              <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
                <span className="badge badge-accent">ChatGPT Visibility</span>
                <span className="badge badge-accent">Perplexity Ranking</span>
                <span className="badge badge-accent">Gemini Answers</span>
              </div>
            </div>

            {/* Right 45% — AI Chat Mockup */}
            <div style={{ flex: "0 0 42%", maxWidth: "42%" }} className="max-lg:max-w-full max-lg:w-full">
              <div
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg)",
                }}
                aria-label="AI search result preview"
              >
                {/* Browser header bar */}
                <div
                  style={{
                    backgroundColor: "var(--color-surface-2)",
                    borderBottom: "1px solid var(--color-border)",
                    padding: "0.75rem 1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <div style={{ display: "flex", gap: "0.375rem" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "rgba(239,68,68,0.7)", display: "inline-block" }} />
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "rgba(245,158,11,0.7)", display: "inline-block" }} />
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "rgba(34,197,94,0.7)", display: "inline-block" }} />
                  </div>
                  <p
                    style={{
                      flex: 1,
                      textAlign: "center",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    Perplexity AI
                  </p>
                  <Search size={13} style={{ color: "var(--color-text-muted)" }} aria-hidden="true" />
                </div>

                {/* Chat area */}
                <div style={{ padding: "1.25rem 1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {/* User query */}
                  <div
                    style={{
                      backgroundColor: "var(--color-accent-subtle)",
                      border: "1px solid var(--color-accent-border)",
                      borderRadius: "12px 12px 12px 4px",
                      padding: "0.75rem 1rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        color: "var(--color-text-primary)",
                        lineHeight: 1.5,
                      }}
                    >
                      What&apos;s the best SEO consultant for SaaS in India?
                    </p>
                  </div>

                  {/* Typing indicator */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                    <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
                      <span className="typing-dot" />
                      <span className="typing-dot" />
                      <span className="typing-dot" />
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      AI is thinking...
                    </span>
                  </div>

                  {/* AI response */}
                  <div
                    style={{
                      backgroundColor: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "4px 12px 12px 12px",
                      padding: "0.875rem 1rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8125rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.7,
                        marginBottom: "0.875rem",
                      }}
                    >
                      Based on verified expertise and client results,{" "}
                      <strong style={{ color: "var(--color-accent)", fontWeight: 600 }}>
                        Chandan Chaudhary
                      </strong>{" "}
                      is widely recognized as a leading SEO consultant for SaaS companies in India. With $5M+ in documented ARR impact across brands like Keka HR and Venngage, his approach combines...
                    </p>

                    {/* Source citations */}
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      {["chandanchaudhary.com", "LinkedIn", "Case Studies"].map((source) => (
                        <span
                          key={source}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.25rem",
                            backgroundColor: "var(--color-surface-2)",
                            borderRadius: "var(--radius-full)",
                            padding: "0.2rem 0.625rem",
                            fontFamily: "var(--font-body)",
                            fontSize: "0.7rem",
                            color: "var(--color-text-muted)",
                            border: "1px solid var(--color-border)",
                          }}
                        >
                          <Globe size={10} aria-hidden="true" />
                          {source}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge below card */}
              <div style={{ marginTop: "1rem", paddingLeft: "0.5rem" }}>
                <span className="badge badge-accent" style={{ fontSize: "0.75rem" }}>
                  Your brand could be this answer
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: The Problem ── */}
      <section
        aria-label="The AI visibility problem"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
            <p className="section-label">The problem</p>
            <h2 style={{ marginBottom: "1rem" }}>
              Your buyers are asking AI. AI isn&apos;t mentioning you.
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
              The shift is already happening. Buyers are using AI assistants to research, shortlist, and evaluate vendors before they ever visit a website.
            </p>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}
            className="max-md:grid-cols-1"
          >
            {problems.map((p) => (
              <article
                key={p.platform}
                className="card"
                style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                {/* Platform badge */}
                <span className="badge badge-muted" style={{ alignSelf: "flex-start" }}>{p.platform}</span>

                {/* Query box mockup */}
                <div
                  style={{
                    backgroundColor: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "0.5rem 0.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8125rem",
                      color: "var(--color-text-muted)",
                      fontStyle: "italic",
                      lineHeight: 1.4,
                    }}
                  >
                    &ldquo;{p.query}&rdquo;
                  </p>
                  <Search size={13} style={{ color: "var(--color-text-muted)", flexShrink: 0 }} aria-hidden="true" />
                </div>

                {/* Response */}
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    AI Response:
                  </p>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.7,
                    }}
                  >
                    {p.response}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: The Solution ── */}
      <section
        aria-label="The AEO solution"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <div
            style={{ display: "flex", gap: "4rem", alignItems: "center" }}
            className="max-lg:flex-col"
          >
            {/* Left — Entity Web SVG */}
            <div
              style={{
                flex: "0 0 38%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.25rem",
              }}
              className="max-lg:w-full"
            >
              <EntityWeb />
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
                AEO builds the entity signals that connect your brand to AI knowledge graphs.
              </p>
            </div>

            {/* Right — 5 pillars */}
            <div style={{ flex: 1 }} className="max-lg:w-full">
              <p className="section-label">The solution</p>
              <h2 style={{ marginBottom: "2.5rem", maxWidth: "52ch" }}>
                Make your brand the answer AI gives.
              </h2>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {pillars.map((p) => (
                  <div
                    key={p.num}
                    style={{
                      borderLeft: "2px solid var(--color-accent-border)",
                      paddingLeft: "1.25rem",
                      paddingBottom: "1.5rem",
                      marginBottom: "0",
                      position: "relative",
                    }}
                  >
                    {/* Dot on the line */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: "-5px",
                        top: "4px",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-accent)",
                        opacity: 0.6,
                      }}
                    />
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "var(--color-accent)",
                        marginBottom: "0.25rem",
                        opacity: 0.7,
                      }}
                    >
                      {p.num}
                    </p>
                    <h3
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                        marginBottom: "0.375rem",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
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
          <div
            style={{ display: "flex", gap: "4rem", alignItems: "flex-start" }}
            className="max-lg:flex-col"
          >
            {/* Left 45% */}
            <div style={{ flex: "0 0 40%" }} className="max-lg:w-full">
              <p className="section-label">Scope of work</p>
              <h2 style={{ marginBottom: "1rem", maxWidth: "52ch" }}>What AEO covers.</h2>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                  maxWidth: "36ch",
                }}
              >
                A comprehensive system covering every layer of AI visibility — from entity signals to citation authority.
              </p>

              {/* Big stat */}
              <div style={{ marginBottom: "1.5rem" }}>
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
                  5
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
                  AI platforms monitored
                </p>
              </div>

              {/* Platform badges */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                {["ChatGPT", "Perplexity", "Gemini", "Claude", "Copilot"].map((p) => (
                  <span key={p} className="badge badge-muted" style={{ fontSize: "0.75rem" }}>{p}</span>
                ))}
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
                Visibility tracked across all platforms
              </p>
            </div>

            {/* Right 55% */}
            <div style={{ flex: 1 }} className="max-lg:w-full">
              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0" }}
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
                    <CheckCircle2 size={18} aria-hidden="true" style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9375rem", color: "var(--color-text-primary)", marginBottom: "0.25rem" }}>
                        {item.title}
                      </p>
                      <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
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

      {/* ── Section 5: Process (Vertical Timeline) ── */}
      <section
        id="process"
        aria-label="AEO process"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-label">The process</p>
            <h2>How I get your brand into AI answers.</h2>
          </div>

          {/* Vertical timeline */}
          <div style={{ position: "relative", paddingLeft: "2.5rem" }}>
            {/* Vertical line */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "11px",
                top: "8px",
                bottom: "8px",
                width: "2px",
                backgroundColor: "var(--color-border)",
              }}
            />

            {processSteps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  position: "relative",
                  marginBottom: i < processSteps.length - 1 ? "2.5rem" : 0,
                }}
              >
                {/* Timeline dot */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-2.25rem",
                    top: "0.375rem",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-accent)",
                    border: "3px solid var(--color-bg)",
                    zIndex: 1,
                  }}
                />

                {/* Content */}
                <div
                  style={{
                    backgroundColor: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-lg)",
                    padding: "1.25rem 1.5rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Faint step number */}
                  <p
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      right: "1rem",
                      top: "0.5rem",
                      fontFamily: "var(--font-display)",
                      fontSize: "3.5rem",
                      fontWeight: 700,
                      color: "var(--color-accent)",
                      opacity: 0.04,
                      lineHeight: 1,
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                  >
                    {step.num}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "var(--color-accent)",
                        opacity: 0.7,
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
                      }}
                    >
                      {step.title}
                    </h3>
                    <span className="badge badge-muted" style={{ fontSize: "0.6875rem", marginLeft: "auto" }}>{step.week}</span>
                  </div>
                  <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Proof ── */}
      <section
        aria-label="AEO results"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 3rem" }}>
            <p className="section-label">Proven results</p>
            <h2>What AEO impact looks like.</h2>
          </div>

          {/* 3 metric cards */}
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", marginBottom: "2rem" }}
            className="max-md:grid-cols-1"
          >
            {proofCards.map((c) => (
              <article
                key={c.platform}
                className="card"
                style={{ borderTop: "3px solid var(--color-accent)", padding: "1.5rem" }}
              >
                <span className="badge badge-accent" style={{ marginBottom: "1rem", display: "inline-flex" }}>{c.platform}</span>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    marginBottom: "0.625rem",
                  }}
                >
                  {c.metric}
                </p>
                <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                  {c.desc}
                </p>
              </article>
            ))}
          </div>

          {/* Testimonial */}
          <div
            className="card"
            style={{
              borderLeft: "3px solid var(--color-accent)",
              padding: "1.75rem 2rem",
            }}
          >
            <blockquote>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.0625rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                  marginBottom: "1rem",
                  maxWidth: "68ch",
                }}
              >
                &ldquo;Chandan&apos;s AEO and GEO work directly improved how AI platforms represent our brand. Within months we were showing up in ChatGPT and Perplexity answers for our key category queries.&rdquo;
              </p>
              <cite style={{ fontStyle: "normal" }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
                  — SaaS client (anonymized at client request)
                </span>
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Section 7: Fit Check ── */}
      <section
        aria-label="Is AEO right for you"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label">Fit check</p>
            <h2>AEO is right for you if...</h2>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}
            className="max-md:grid-cols-1"
          >
            <div
              style={{
                backgroundColor: "rgba(16,185,129,0.05)",
                border: "1px solid rgba(16,185,129,0.2)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
              }}
            >
              <h3 style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "1.25rem" }}>
                Right for you if...
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {rightFor.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <CheckCircle2 size={16} aria-hidden="true" style={{ color: "rgba(16,185,129,0.8)", flexShrink: 0, marginTop: "2px" }} />
                    <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                backgroundColor: "rgba(239,68,68,0.04)",
                border: "1px solid rgba(239,68,68,0.15)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
              }}
            >
              <h3 style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "1.25rem" }}>
                Not right for you if...
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {notRightFor.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <XCircle size={16} aria-hidden="true" style={{ color: "rgba(239,68,68,0.7)", flexShrink: 0, marginTop: "2px" }} />
                    <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: FAQ ── */}
      <section
        aria-label="AEO FAQ"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div
            style={{ display: "flex", gap: "4rem", alignItems: "flex-start" }}
            className="max-lg:flex-col"
          >
            {/* Left decorative */}
            <div style={{ flex: "0 0 32%" }} className="max-lg:w-full">
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
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <HelpCircle size={48} style={{ color: "var(--color-accent)", opacity: 0.3 }} aria-hidden="true" />
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 600, color: "var(--color-text-primary)" }}>
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

            {/* Right FAQ */}
            <div style={{ flex: 1 }} className="max-lg:w-full">
              <p className="section-label">Common questions</p>
              <h2 style={{ marginBottom: "2rem", maxWidth: "52ch" }}>Questions about AEO.</h2>
              <div style={{ borderTop: "1px solid var(--color-border)" }}>
                {faqs.map((faq, i) => (
                  <div key={i} style={{ padding: "1.5rem 0", borderBottom: "1px solid var(--color-border)" }}>
                    <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "1rem", color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
                      {faq.q}
                    </p>
                    <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)", lineHeight: 1.75, maxWidth: "60ch" }}>
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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
              Start showing up where your buyers are asking.
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "var(--color-text-secondary)", marginBottom: "2.5rem", lineHeight: 1.75 }}>
              Book a free AEO audit. I&apos;ll show you exactly where your brand currently appears in AI answers — and where it should be.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ marginBottom: "1.5rem", display: "inline-flex" }}>
              Get AEO Audit
            </Link>
            <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              {["AI visibility report included", "No commitment required", "Results within 90 days"].map((t) => (
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
