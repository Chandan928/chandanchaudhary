import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  CheckCircle2,
  XCircle,
  Search,
  Globe,
  HelpCircle,
  Layers,
  Briefcase,
  UserCheck,
  ShoppingCart,
  Brain,
  Map,
  Shield,
  Activity,
  BookOpen,
  LayoutDashboard,
  Minus,
  Building2,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { EntityWeb } from "@/components/graphics/EntityWeb";

export const metadata: Metadata = buildMetadata({
  titleAbsolute: "AEO Services for SaaS and AI Companies",
  description:
    "Improve visibility in AI generated answers and increase chances of being recommended across modern search experiences.",
  path: "/services/aeo",
});

/* ── Existing data ── */

const statsStrip = [
  { value: "3X", label: "AI citation rate vs traditional SEO" },
  { value: "50%", label: "of searches now get zero-click AI answers" },
  { value: "40%", label: "of buyers research via AI before contacting a vendor" },
  { value: "90%", label: "brand recall improvement when cited in AI answers" },
];

const problems = [
  {
    platform: "ChatGPT",
    query: "Best SEO consultant for SaaS in India?",
    response:
      "Your competitors appear in AI answers. Your brand doesn't. Not because you're worse - because your content isn't structured for AI retrieval.",
  },
  {
    platform: "Perplexity",
    query: "Who is the top SEO consultant?",
    response:
      "AI models hallucinate or reference outdated information about your brand. Wrong pricing, wrong services, wrong positioning - damaging trust before the first touchpoint.",
  },
  {
    platform: "Gemini",
    query: "Compare SEO consultant options",
    response:
      "Buyers complete 60-70% of their research using AI before visiting any website. If you're not in the AI answer, you're not in the consideration set.",
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
    desc: "Craft content that directly answers the questions your buyers are asking AI - in the format AI models prefer to cite.",
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

const comparisonRows = [
  { feature: "Goal", seo: "Rank on page 1 of Google", aeo: "Be cited in AI-generated answers" },
  { feature: "Visibility Type", seo: "Blue link search results", aeo: "AI summaries and recommendations" },
  { feature: "Success Metric", seo: "Rankings and organic traffic", aeo: "Citation frequency and brand mentions" },
  { feature: "Content Format", seo: "Keyword-dense long-form articles", aeo: "Structured, direct-answer content" },
  { feature: "Timeline", seo: "3–6 months to rank", aeo: "60–90 days initial citation visibility" },
  { feature: "Algorithm Target", seo: "Google PageRank signals", aeo: "LLM retrieval and embedding systems" },
  { feature: "User Behavior Served", seo: "Intentional search queries", aeo: "Conversational AI research sessions" },
];

const industries = [
  {
    Icon: Layers,
    name: "SaaS",
    desc: "Buyers evaluate dozens of tools via ChatGPT before ever opening a G2 tab. AEO ensures your product is in the shortlist AI recommends - described accurately, positioned correctly.",
  },
  {
    Icon: Briefcase,
    name: "Agencies",
    desc: "Prospects ask AI for agency recommendations before checking LinkedIn. AEO builds the entity signals that make your agency the obvious answer in your niche.",
  },
  {
    Icon: UserCheck,
    name: "Consultants",
    desc: "When buyers ask AI who to hire, credentials and case studies surface as citations. AEO structures your expertise so AI surfaces you as the trusted authority.",
  },
  {
    Icon: ShoppingCart,
    name: "E-commerce",
    desc: "Product research now starts in AI chat. AEO optimizes your brand for comparison queries, category discovery, and purchase-intent answers across every major AI platform.",
  },
];

const serviceSuite = [
  {
    num: "01",
    Icon: Brain,
    title: "LLM Optimization",
    bullets: [
      "Answer layer structuring",
      "Prompt-response alignment",
      "Entity reinforcement",
      "Semantic relevance mapping",
    ],
  },
  {
    num: "02",
    Icon: Map,
    title: "AEO Roadmap",
    bullets: [
      "Full AI presence audit",
      "90-day execution plan",
      "Platform prioritisation",
      "Competitor gap analysis",
    ],
  },
  {
    num: "03",
    Icon: Shield,
    title: "Brand Authority Building",
    bullets: [
      "Knowledge base seeding",
      "Citation architecture",
      "Source credibility signals",
      "Thought leadership placement",
    ],
  },
  {
    num: "04",
    Icon: Activity,
    title: "AI Presence Monitoring",
    bullets: [
      "Cross-platform tracking",
      "Mention velocity reporting",
      "Share-of-voice analysis",
      "Monthly citation dashboard",
    ],
  },
];

const frameworkSteps = [
  {
    num: "01",
    Icon: Search,
    title: "Audit & Positioning",
    desc: "Map current AI visibility across all platforms. Identify gaps, hallucinations, and competitor advantages to baseline your starting point.",
  },
  {
    num: "02",
    Icon: BookOpen,
    title: "Knowledge Seeding",
    desc: "Build structured entity signals, seed authoritative sources, and establish the knowledge graph connections AI models rely on.",
  },
  {
    num: "03",
    Icon: MessageSquare,
    title: "Response Priming",
    desc: "Restructure content into direct-answer formats, optimize FAQ architecture, and align brand messaging with how AI models retrieve information.",
  },
  {
    num: "04",
    Icon: LayoutDashboard,
    title: "Visibility Dashboard",
    desc: "Track citation frequency, brand mention accuracy, and competitive share-of-voice across ChatGPT, Perplexity, Gemini, and Claude.",
  },
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

const traditionalLimitations = [
  "Optimizes for algorithms, not buyers",
  "Traffic-focused, not citation-focused",
  "Misses the 40% of research done in AI",
  "No entity or knowledge graph strategy",
  "Generic content briefs, no AI formatting",
  "Reactive to algorithm changes",
];

const chandanAdvantages = [
  "AI-first strategy built around buyer intent",
  "Citation frequency as the core KPI",
  "Full coverage across AI and traditional search",
  "Entity optimization and knowledge graph seeding",
  "Content structured for AI extraction and citation",
  "Proactive AI visibility monitoring and amplification",
];

const pricingTiers = [
  {
    name: "Audit",
    price: "$1,500",
    desc: "A comprehensive AI presence audit with a clear action plan.",
    featured: false,
    items: [
      "AI visibility audit across 5 platforms",
      "Brand entity analysis report",
      "Competitor AI presence benchmarking",
      "Content gap identification",
      "90-day AEO action plan",
      "30-min strategy call walkthrough",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$2,000",
    desc: "Full AEO implementation from audit to ongoing visibility monitoring.",
    featured: true,
    items: [
      "Everything in Audit",
      "Full entity optimization execution",
      "Structured content reformatting",
      "Citation source strategy and outreach",
      "Knowledge graph seeding",
      "Monthly AI citation reporting",
    ],
    cta: "Book a Call",
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Bespoke AEO strategy for larger teams and multi-brand programs.",
    featured: false,
    items: [
      "Everything in Growth",
      "Multi-brand / multi-market coverage",
      "Dedicated Slack access",
      "Quarterly executive reviews",
      "Custom AI presence dashboard",
      "Thought leadership placement",
    ],
    cta: "Let's Talk",
  },
];

const rightFor = [
  "Your buyers are technical or research-heavy - they use AI tools to evaluate vendors",
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
    a: "I set up systematic monitoring using tools like Profound, Peec AI, and manual sampling across ChatGPT, Perplexity, and Gemini. We track citation frequency, brand mention accuracy, and competitive share of AI answers - reported monthly.",
  },
  {
    q: "Is AEO separate from SEO or part of it?",
    a: "AEO and SEO are deeply connected. Strong topical authority and technical SEO form the foundation for AI visibility. I approach them as one integrated system - content that ranks on Google also gets cited by AI, and vice versa.",
  },
  {
    q: "How long does it take to start appearing in AI answers?",
    a: "Initial AI citation improvements typically appear within 60-90 days of implementation. Full entity recognition and consistent multi-platform visibility builds over 3-6 months - similar timeline to organic SEO authority.",
  },
];

export default function AeoPage() {
  return (
    <>
      <JsonLd
        schema={serviceSchema({
          name: "AEO — Answer Engine Optimization",
          description:
            "Optimize your SaaS brand for ChatGPT, Perplexity, and Gemini. AEO consulting for AI-generated answer visibility.",
          url: "https://chandanchaudhary.com/services/aeo",
          serviceType: "Answer Engine Optimization",
        })}
      />
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
            background:
              "radial-gradient(ellipse at 70% 10%, rgba(108,99,255,0.07) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div className="container">
          <div className="hero-grid">
            {/* Left 55% */}
            <div>
              <p className="section-label">Answer Engine Optimization</p>
              <h1 style={{ marginBottom: "1.25rem" }}>
                Answer Engine Optimization{" "}
                <span style={{ color: "var(--color-accent)" }}>
                  (AEO) Services
                </span>
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
                ChatGPT, Perplexity, and Gemini are now the first stop for B2B
                research. If your brand isn&apos;t showing up in AI-generated
                answers, you&apos;re invisible to a growing segment of your
                buyers - before they ever reach Google.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "var(--color-text-muted)",
                  marginBottom: "2rem",
                }}
              >
                The same system I used to increase AI citations for SaaS brands
                across 5 categories.
              </p>
              <div className="btn-group" style={{ marginBottom: "1.5rem" }}>
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
            <div>
              <div
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-accent-border)",
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
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(239,68,68,0.7)",
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(245,158,11,0.7)",
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(34,197,94,0.7)",
                        display: "inline-block",
                      }}
                    />
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
                  <Search
                    size={13}
                    style={{ color: "var(--color-text-muted)" }}
                    aria-hidden="true"
                  />
                </div>

                {/* Chat area */}
                <div
                  style={{
                    padding: "1.25rem 1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.625rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "3px",
                        alignItems: "center",
                      }}
                    >
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
                      <strong
                        style={{
                          color: "var(--color-accent)",
                          fontWeight: 600,
                        }}
                      >
                        Chandan Chaudhary
                      </strong>{" "}
                      is widely recognized as a leading SEO consultant for SaaS
                      companies in India. With $5M+ in documented ARR impact
                      across brands like Keka HR and Venngage, his approach
                      combines...
                    </p>

                    {/* Source citations */}
                    <div
                      style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
                    >
                      {["chandanchaudhary.com", "LinkedIn", "Case Studies"].map(
                        (source) => (
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
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge below card */}
              <div style={{ marginTop: "1rem", paddingLeft: "0.5rem" }}>
                <span
                  className="badge badge-accent"
                  style={{ fontSize: "0.75rem" }}
                >
                  Your brand could be this answer
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section
        aria-label="AEO proof metrics"
        style={{
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          backgroundColor: "var(--color-bg)",
          paddingBlock: "2.5rem",
        }}
      >
        <div className="container">
          <div className="stats-row">
            {statsStrip.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: "1rem 1.5rem",
                  borderRight:
                    i % 2 === 0 ? "1px solid var(--color-border)" : "none",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.25rem",
                    fontWeight: 600,
                    color: "var(--color-accent)",
                    lineHeight: 1,
                    letterSpacing: "-0.025em",
                    marginBottom: "0.5rem",
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.5,
                    maxWidth: "18ch",
                    margin: "0 auto",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
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
          <div
            style={{
              textAlign: "center",
              maxWidth: "640px",
              margin: "0 auto 3rem",
            }}
          >
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
              The shift is already happening. Buyers are using AI assistants to
              research, shortlist, and evaluate vendors before they ever visit a
              website.
            </p>
          </div>

          <div className="grid-3">
            {problems.map((p) => (
              <article
                key={p.platform}
                className="card"
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  border: "1px solid var(--color-accent-border)",
                }}
              >
                <span
                  className="badge badge-muted"
                  style={{ alignSelf: "flex-start" }}
                >
                  {p.platform}
                </span>

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
                  <Search
                    size={13}
                    style={{ color: "var(--color-text-muted)", flexShrink: 0 }}
                    aria-hidden="true"
                  />
                </div>

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
          <div className="grid-solution">
            {/* Left — Entity Web SVG */}
            <div
              className="decorative-svg"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.25rem",
              }}
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
                AEO builds the entity signals that connect your brand to AI
                knowledge graphs.
              </p>
            </div>

            {/* Right — 5 pillars */}
            <div>
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
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.7,
                      }}
                    >
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
          <div className="grid-2">
            {/* Left 45% */}
            <div>
              <p className="section-label">Scope of work</p>
              <h2 style={{ marginBottom: "1rem", maxWidth: "52ch" }}>
                What AEO covers.
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
                A comprehensive system covering every layer of AI visibility -
                from entity signals to citation authority.
              </p>

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
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "var(--color-text-muted)",
                  }}
                >
                  AI platforms monitored
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  marginBottom: "0.75rem",
                }}
              >
                {["ChatGPT", "Perplexity", "Gemini", "Claude", "Copilot"].map(
                  (p) => (
                    <span
                      key={p}
                      className="badge badge-muted"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {p}
                    </span>
                  )
                )}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "var(--color-text-muted)",
                }}
              >
                Visibility tracked across all platforms
              </p>
            </div>

            {/* Right 55% */}
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
                      borderRight:
                        i % 2 === 0
                          ? "1px solid var(--color-border)"
                          : "none",
                    }}
                  >
                    <CheckCircle2
                      size={18}
                      aria-hidden="true"
                      style={{
                        color: "var(--color-accent)",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
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

      {/* ── SEO vs AEO Comparison Table ── */}
      <section
        aria-label="SEO vs AEO comparison"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "640px",
              margin: "0 auto 3rem",
            }}
          >
            <p className="section-label">Understanding the shift</p>
            <h2>SEO vs. AEO - Understanding the Shift</h2>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                minWidth: "600px",
                borderCollapse: "collapse",
                fontFamily: "var(--font-body)",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "1rem 1.25rem",
                      textAlign: "left",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      borderBottom: "1px solid var(--color-border)",
                      width: "22%",
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      padding: "1rem 1.25rem",
                      textAlign: "left",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--color-text-secondary)",
                      borderBottom: "1px solid var(--color-border)",
                      width: "39%",
                    }}
                  >
                    Traditional SEO
                  </th>
                  <th
                    style={{
                      padding: "1rem 1.25rem",
                      textAlign: "left",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      borderBottom: "3px solid var(--color-accent)",
                      backgroundColor: "var(--color-accent-subtle)",
                      borderRadius: "var(--radius-sm) var(--radius-sm) 0 0",
                      width: "39%",
                    }}
                  >
                    Answer Engine Optimization
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{
                      backgroundColor:
                        i % 2 === 0
                          ? "var(--color-surface)"
                          : "var(--color-bg)",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.875rem 1.25rem",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "var(--color-text-muted)",
                        borderBottom: "1px solid var(--color-border)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.feature}
                    </td>
                    <td
                      style={{
                        padding: "0.875rem 1.25rem",
                        fontSize: "0.9375rem",
                        color: "var(--color-text-secondary)",
                        borderBottom: "1px solid var(--color-border)",
                        lineHeight: 1.5,
                      }}
                    >
                      {row.seo}
                    </td>
                    <td
                      style={{
                        padding: "0.875rem 1.25rem",
                        fontSize: "0.9375rem",
                        color: "var(--color-text-primary)",
                        fontWeight: 500,
                        borderBottom: "1px solid var(--color-accent-border)",
                        backgroundColor: "var(--color-accent-subtle)",
                        lineHeight: 1.5,
                      }}
                    >
                      {row.aeo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Industry-Specific AEO ── */}
      <section
        aria-label="Industry-specific AEO"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "640px",
              margin: "0 auto 3rem",
            }}
          >
            <p className="section-label">Industry focus</p>
            <h2>AEO That Speaks Your Industry&apos;s Language</h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.75,
                marginTop: "1rem",
              }}
            >
              Generic optimization doesn&apos;t work. We build topical authority
              in the exact language your buyers use.
            </p>
          </div>

          <div className="grid-2">
            {industries.map((ind) => (
              <article
                key={ind.name}
                className="card"
                style={{
                  border: "1px solid var(--color-accent-border)",
                  borderLeft: "3px solid var(--color-accent-border)",
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                  padding: "1.5rem",
                  transition: "border-color var(--ease), transform var(--ease)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--color-accent-subtle)",
                    border: "1px solid var(--color-accent-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <ind.Icon
                    size={20}
                    style={{ color: "var(--color-accent)" }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {ind.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.7,
                    }}
                  >
                    {ind.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── AEO Service Suite ── */}
      <section
        aria-label="AEO service suite"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "560px",
              margin: "0 auto 3rem",
            }}
          >
            <p className="section-label">What you get</p>
            <h2>Our AEO Service Suite</h2>
          </div>

          <div className="grid-2">
            {serviceSuite.map((s) => (
              <article
                key={s.num}
                className="card"
                style={{
                  border: "1px solid var(--color-accent-border)",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Header row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "var(--color-accent-subtle)",
                      border: "1px solid var(--color-accent-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <s.Icon
                      size={20}
                      style={{ color: "var(--color-accent)" }}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "1.0625rem",
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {s.title}
                    </h3>
                  </div>
                </div>

                {/* Bullet list */}
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}
                    >
                      <CheckCircle2
                        size={15}
                        aria-hidden="true"
                        style={{
                          color: "var(--color-accent)",
                          flexShrink: 0,
                          marginTop: "3px",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9375rem",
                          color: "var(--color-text-secondary)",
                          lineHeight: 1.5,
                        }}
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Master Framework ── */}
      <section
        aria-label="The Master Framework"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "560px",
              margin: "0 auto 3.5rem",
            }}
          >
            <p className="section-label">How it works</p>
            <h2>The Master Framework</h2>
          </div>

          <div className="process-grid" style={{ position: "relative" }}>
            {/* Desktop connecting line */}
            <div
              aria-hidden="true"
              className="process-connector"
              style={{
                position: "absolute",
                top: "2.75rem",
                left: "calc(12.5% + 1rem)",
                right: "calc(12.5% + 1rem)",
                height: "2px",
                borderTop: "2px dashed var(--color-border)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />

            {frameworkSteps.map((step) => (
              <article
                key={step.num}
                className="card"
                style={{
                  border: "1px solid var(--color-accent-border)",
                  padding: "1.5rem",
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                }}
              >
                {/* Step number + icon */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "var(--color-accent-subtle)",
                      border: "1px solid var(--color-accent-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <step.Icon
                      size={18}
                      style={{ color: "var(--color-accent)" }}
                      aria-hidden="true"
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--color-accent)",
                      opacity: 0.7,
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {step.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Content Transformation Block ── */}
      <section
        aria-label="Content transformation example"
        className="section"
        style={{
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "560px",
              margin: "0 auto 3rem",
            }}
          >
            <p className="section-label">See it in action</p>
            <h2>The Content Transformation</h2>
          </div>

          <div className="grid-2">
            {/* Before */}
            <div
              style={{
                border: "1px solid var(--color-error)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
              }}
            >
              {/* Header */}
              <div
                style={{
                  backgroundColor: "var(--color-error-subtle)",
                  borderBottom: "1px solid var(--color-error)",
                  padding: "0.75rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "var(--color-error-text)",
                  }}
                >
                  Before: Unoptimized Content
                </span>
                <XCircle
                  size={16}
                  style={{ color: "var(--color-error-text)" }}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "1.5rem",
                  backgroundColor: "var(--color-surface)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.8,
                }}
              >
                <p style={{ marginBottom: "0.875rem" }}>
                  SEO consulting is very important for businesses that want to grow
                  online. Our services help with rankings and traffic. We use
                  various techniques to improve visibility.
                </p>
                <p style={{ marginBottom: "0.875rem" }}>
                  We have years of experience in the industry working with
                  different types of clients including SaaS companies, agencies,
                  and consultants across many verticals.
                </p>
                <p>
                  Contact us today to learn more about how we can help your
                  business grow using our proven SEO methodologies.
                </p>
              </div>

              {/* Issues footer */}
              <div
                style={{
                  padding: "0.875rem 1.25rem",
                  borderTop: "1px solid var(--color-error)",
                  backgroundColor: "var(--color-error-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.375rem",
                }}
              >
                {[
                  "No direct-answer structure",
                  "Vague - no entity signals",
                  "AI cannot extract a citation",
                ].map((issue) => (
                  <div
                    key={issue}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <XCircle
                      size={13}
                      style={{ color: "var(--color-error-text)", flexShrink: 0 }}
                      aria-hidden="true"
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8125rem",
                        color: "var(--color-error-text)",
                      }}
                    >
                      {issue}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div
              style={{
                border: "1px solid rgba(16,185,129,0.3)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
              }}
            >
              {/* Header */}
              <div
                style={{
                  backgroundColor: "rgba(16,185,129,0.08)",
                  borderBottom: "1px solid rgba(16,185,129,0.2)",
                  padding: "0.75rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "rgba(16,185,129,0.9)",
                  }}
                >
                  After: AEO-Optimized Content
                </span>
                <CheckCircle2
                  size={16}
                  style={{ color: "rgba(16,185,129,0.9)" }}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "1.5rem",
                  backgroundColor: "var(--color-surface)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.8,
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    marginBottom: "0.5rem",
                    fontSize: "0.9375rem",
                  }}
                >
                  What is AEO consulting for SaaS companies?
                </p>
                <p style={{ marginBottom: "0.875rem" }}>
                  AEO (Answer Engine Optimization) consulting helps SaaS brands
                  appear in AI-generated answers on ChatGPT, Perplexity, and
                  Gemini. Chandan Chaudhary specializes in this - with $5M+ ARR
                  impact across 22+ tech brands.
                </p>
                <p
                  style={{
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    marginBottom: "0.375rem",
                    fontSize: "0.875rem",
                  }}
                >
                  Core deliverables:
                </p>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  {[
                    "Entity optimization and knowledge graph seeding",
                    "Structured content for AI extraction",
                    "Citation authority building across AI-trusted sources",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <span style={{ color: "rgba(16,185,129,0.8)", flexShrink: 0 }}>
                        →
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Wins footer */}
              <div
                style={{
                  padding: "0.875rem 1.25rem",
                  borderTop: "1px solid rgba(16,185,129,0.2)",
                  backgroundColor: "rgba(16,185,129,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.375rem",
                }}
              >
                {[
                  "Direct-answer format - AI can cite this",
                  "Entity signals: name, results, category",
                  "Structured for retrieval and extraction",
                ].map((win) => (
                  <div
                    key={win}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <CheckCircle2
                      size={13}
                      style={{
                        color: "rgba(16,185,129,0.8)",
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8125rem",
                        color: "rgba(16,185,129,0.85)",
                      }}
                    >
                      {win}
                    </span>
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
        style={{ backgroundColor: "var(--color-surface)" }}
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
                    border: "3px solid var(--color-surface)",
                    zIndex: 1,
                  }}
                />

                <div
                  style={{
                    backgroundColor: "var(--color-bg)",
                    border: "1px solid var(--color-accent-border)",
                    borderRadius: "var(--radius-lg)",
                    padding: "1.25rem 1.5rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
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

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.5rem",
                    }}
                  >
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
                    <span
                      className="badge badge-muted"
                      style={{ fontSize: "0.6875rem", marginLeft: "auto" }}
                    >
                      {step.week}
                    </span>
                  </div>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Proof ── */}
      <section
        aria-label="AEO results"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "560px",
              margin: "0 auto 3rem",
            }}
          >
            <p className="section-label">Proven results</p>
            <h2>What AEO impact looks like.</h2>
          </div>

          <div className="grid-3" style={{ marginBottom: "2rem" }}>
            {proofCards.map((c) => (
              <article
                key={c.platform}
                className="card"
                style={{
                  borderTop: "3px solid var(--color-accent)",
                  border: "1px solid var(--color-accent-border)",
                  borderTopWidth: "3px",
                  padding: "1.5rem",
                }}
              >
                <span
                  className="badge badge-accent"
                  style={{ marginBottom: "1rem", display: "inline-flex" }}
                >
                  {c.platform}
                </span>
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
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
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
              border: "1px solid var(--color-accent-border)",
              borderLeftWidth: "3px",
              borderLeftColor: "var(--color-accent)",
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
                &ldquo;Chandan&apos;s AEO and GEO work directly improved how AI
                platforms represent our brand. Within months we were showing up
                in ChatGPT and Perplexity answers for our key category
                queries.&rdquo;
              </p>
              <cite style={{ fontStyle: "normal" }}>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "var(--color-text-muted)",
                  }}
                >
                  - SaaS client (anonymized at client request)
                </span>
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Strategic Advantage ── */}
      <section
        aria-label="Strategic advantage"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "560px",
              margin: "0 auto 3rem",
            }}
          >
            <p className="section-label">Why it matters</p>
            <h2>The Strategic Advantage</h2>
          </div>

          <div className="grid-2">
            {/* Chandan's — first in DOM so it shows first on mobile */}
            <div
              className="md:order-2"
              style={{
                border: "1px solid var(--color-accent-border)",
                borderTopWidth: "3px",
                borderTopColor: "var(--color-accent)",
                borderRadius: "var(--radius-lg)",
                padding: "1.75rem",
                backgroundColor: "var(--color-accent-subtle)",
                position: "relative",
              }}
            >
              {/* Recommended badge */}
              <div
                style={{
                  position: "absolute",
                  top: "-1px",
                  right: "1.5rem",
                  transform: "translateY(-100%)",
                  paddingBottom: "1px",
                }}
              >
                <span
                  className="badge badge-accent"
                  style={{ borderRadius: "var(--radius-sm) var(--radius-sm) 0 0" }}
                >
                  Recommended
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--color-accent)",
                  marginBottom: "1.5rem",
                }}
              >
                Chandan&apos;s AEO Consulting
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {chandanAdvantages.map((item) => (
                  <div
                    key={item}
                    style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}
                  >
                    <CheckCircle2
                      size={16}
                      aria-hidden="true"
                      style={{
                        color: "var(--color-accent)",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--color-text-primary)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Traditional SEO Agency — second in DOM, but first visually on desktop */}
            <div
              className="md:order-1"
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "1.75rem",
                backgroundColor: "var(--color-bg)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--color-text-muted)",
                  marginBottom: "1.5rem",
                }}
              >
                Traditional SEO Agency
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {traditionalLimitations.map((item) => (
                  <div
                    key={item}
                    style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}
                  >
                    <Minus
                      size={16}
                      aria-hidden="true"
                      style={{
                        color: "var(--color-text-muted)",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.6,
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

      {/* ── Predictable Investment (Pricing) ── */}
      <section
        aria-label="Pricing"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "560px",
              margin: "0 auto 3rem",
            }}
          >
            <p className="section-label">Pricing</p>
            <h2>Predictable Investment</h2>
          </div>

          <div className="grid-pricing">
            {/* Growth — first in DOM for mobile-first display */}
            {(() => {
              const growth = pricingTiers[1];
              return (
                <article
                  key={growth.name}
                  className="md:order-2"
                  style={{
                    border: "1px solid var(--color-accent)",
                    borderRadius: "var(--radius-lg)",
                    padding: "2rem",
                    backgroundColor: "var(--color-surface)",
                    boxShadow: "var(--shadow-accent)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--color-accent)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {growth.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "2.5rem",
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                        lineHeight: 1,
                        letterSpacing: "-0.025em",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {growth.price}
                    </p>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.6,
                      }}
                    >
                      {growth.desc}
                    </p>
                  </div>

                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.625rem",
                      flex: 1,
                    }}
                  >
                    {growth.items.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: "0.625rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          aria-hidden="true"
                          style={{
                            color: "var(--color-accent)",
                            flexShrink: 0,
                            marginTop: "3px",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.9rem",
                            color: "var(--color-text-secondary)",
                            lineHeight: 1.5,
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="btn btn-primary" style={{ justifyContent: "center" }}>
                    {growth.cta}
                  </Link>
                </article>
              );
            })()}

            {/* Audit — second in DOM, first visually on desktop */}
            {(() => {
              const audit = pricingTiers[0];
              return (
                <article
                  key={audit.name}
                  className="md:order-1"
                  style={{
                    border: "1px solid var(--color-accent-border)",
                    borderRadius: "var(--radius-lg)",
                    padding: "2rem",
                    backgroundColor: "var(--color-surface)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--color-text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {audit.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "2.5rem",
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                        lineHeight: 1,
                        letterSpacing: "-0.025em",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {audit.price}
                    </p>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.6,
                      }}
                    >
                      {audit.desc}
                    </p>
                  </div>

                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.625rem",
                      flex: 1,
                    }}
                  >
                    {audit.items.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: "0.625rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          aria-hidden="true"
                          style={{
                            color: "var(--color-accent)",
                            flexShrink: 0,
                            marginTop: "3px",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.9rem",
                            color: "var(--color-text-secondary)",
                            lineHeight: 1.5,
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="btn btn-secondary" style={{ justifyContent: "center" }}>
                    {audit.cta}
                  </Link>
                </article>
              );
            })()}

            {/* Enterprise — third in DOM and last visually on desktop */}
            {(() => {
              const enterprise = pricingTiers[2];
              return (
                <article
                  key={enterprise.name}
                  className="md:order-3"
                  style={{
                    border: "1px solid var(--color-accent-border)",
                    borderRadius: "var(--radius-lg)",
                    padding: "2rem",
                    backgroundColor: "var(--color-surface)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--color-text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {enterprise.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "2.5rem",
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                        lineHeight: 1,
                        letterSpacing: "-0.025em",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {enterprise.price}
                    </p>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.6,
                      }}
                    >
                      {enterprise.desc}
                    </p>
                  </div>

                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.625rem",
                      flex: 1,
                    }}
                  >
                    {enterprise.items.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: "0.625rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          aria-hidden="true"
                          style={{
                            color: "var(--color-accent)",
                            flexShrink: 0,
                            marginTop: "3px",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.9rem",
                            color: "var(--color-text-secondary)",
                            lineHeight: 1.5,
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="btn btn-secondary" style={{ justifyContent: "center" }}>
                    {enterprise.cta}
                  </Link>
                </article>
              );
            })()}
          </div>
        </div>
      </section>

      {/* ── Section 7: Fit Check ── */}
      <section
        aria-label="Is AEO right for you"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label">Fit check</p>
            <h2>AEO is right for you if...</h2>
          </div>
          <div className="fit-grid">
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
                Right for you if...
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {rightFor.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      aria-hidden="true"
                      style={{
                        color: "rgba(16,185,129,0.8)",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </p>
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
              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  marginBottom: "1.25rem",
                }}
              >
                Not right for you if...
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {notRightFor.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <XCircle
                      size={16}
                      aria-hidden="true"
                      style={{
                        color: "rgba(239,68,68,0.7)",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.6,
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

      {/* ── Section 8: FAQ ── */}
      <section
        aria-label="AEO FAQ"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <div className="grid-2">
            {/* Left decorative */}
            <div className="desktop-only">
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

            {/* Right FAQ */}
            <div>
              <p className="section-label">Common questions</p>
              <h2 style={{ marginBottom: "2rem", maxWidth: "52ch" }}>
                Questions about AEO.
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
          <div
            style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}
          >
            <h2 style={{ marginBottom: "1rem" }}>
              Start showing up where your buyers are asking.
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-secondary)",
                marginBottom: "2.5rem",
                lineHeight: 1.75,
              }}
            >
              Book a free AEO audit. I&apos;ll show you exactly where your brand
              currently appears in AI answers - and where it should be.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{ marginBottom: "1.5rem", display: "inline-flex" }}
            >
              Get AEO Audit
            </Link>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              {[
                "AI visibility report included",
                "No commitment required",
                "Results within 90 days",
              ].map((t) => (
                <div
                  key={t}
                  style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}
                >
                  <CheckCircle2
                    size={14}
                    aria-hidden="true"
                    style={{ color: "var(--color-accent)" }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8125rem",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
