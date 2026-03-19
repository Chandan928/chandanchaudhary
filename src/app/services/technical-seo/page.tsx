import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  ChevronRight,
  HelpCircle,
  Search,
  Gauge,
  Code2,
  LayoutTemplate,
  FileText,
  Bug,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Technical SEO Services — Fix Your Foundation | Chandan Chaudhary",
  description:
    "Technical SEO consultant specializing in crawl optimization, Core Web Vitals, JavaScript SEO, and site architecture for SaaS and enterprise platforms.",
  path: "/services/technical-seo",
});

const problems = [
  {
    Icon: Bug,
    title: "Crawl waste killing your budget",
    desc: "Google allocates a crawl budget to every site. Poor internal linking, redirect chains, duplicate content, and low-value pages consume that budget — leaving important pages uncrawled and unranked.",
  },
  {
    Icon: Gauge,
    title: "Core Web Vitals failing",
    desc: "Since 2021, CWV are a ranking signal. Slow LCP, high CLS, and poor INP directly impact rankings and user experience. Most SaaS sites on complex tech stacks fail CWV without realizing it.",
  },
  {
    Icon: Code2,
    title: "JavaScript rendering blocking indexation",
    desc: "React, Next.js, and Vue apps create invisible content for crawlers if rendering isn't configured correctly. Pages that look perfect to users can be completely empty to Googlebot.",
  },
];

const pillars = [
  {
    Icon: Search,
    title: "Crawl & Indexation Audit",
    desc: "Complete crawl analysis using Screaming Frog and Sitebulb. Identify crawl waste, orphan pages, redirect chains, and indexation blocks. Prioritize fixes by traffic impact.",
    badge: "Screaming Frog",
  },
  {
    Icon: Gauge,
    title: "Core Web Vitals Optimization",
    desc: "LCP, INP, and CLS diagnosis and fix. PageSpeed Insights, Lighthouse, and WebPageTest analysis. Engineering-level recommendations your dev team can implement immediately.",
    badge: "CWV Fixes",
  },
  {
    Icon: Code2,
    title: "JavaScript SEO",
    desc: "Diagnose and fix rendering issues on React, Next.js, Vue, and Angular sites. Server-side rendering, dynamic rendering, and pre-rendering configuration for full Googlebot visibility.",
    badge: "JS Rendering",
  },
  {
    Icon: LayoutTemplate,
    title: "Site Architecture",
    desc: "Information architecture audit, internal linking analysis, URL structure optimization, and crawl depth reduction. Build a site structure that distributes authority efficiently.",
    badge: "IA Optimization",
  },
  {
    Icon: FileText,
    title: "Schema & Structured Data",
    desc: "Implement and validate schema markup: Organization, Person, Service, FAQ, BreadcrumbList, Article. Maximize rich result eligibility and entity disambiguation.",
    badge: "Schema Markup",
  },
];

const includedItems = [
  "Full technical SEO audit report",
  "Crawl budget analysis and optimization",
  "Core Web Vitals diagnosis and fixes",
  "JavaScript rendering audit",
  "Index coverage analysis",
  "Internal linking architecture review",
  "Duplicate content identification",
  "URL structure optimization",
  "Schema markup implementation",
  "Technical SEO monitoring setup",
];

const processSteps = [
  {
    num: "01",
    title: "Full Audit",
    desc: "200+ technical checks across crawl, render, index, performance, and architecture. Every issue documented with severity rating and fix recommendation.",
    week: "48 hours",
  },
  {
    num: "02",
    title: "Priority Matrix",
    desc: "Issues ranked by traffic impact, fix complexity, and urgency. You get a clear execution roadmap — highest impact fixes first, not alphabetical checklists.",
    week: "Week 1",
  },
  {
    num: "03",
    title: "Fix & Implement",
    desc: "Work alongside your engineering team to implement fixes. I write technical specs your developers can execute immediately — no translation required.",
    week: "Month 1-2",
  },
  {
    num: "04",
    title: "Validate & Monitor",
    desc: "Verify fixes are correctly implemented. Set up ongoing technical monitoring to catch new issues before they compound into traffic losses.",
    week: "Ongoing",
  },
];

const results = [
  {
    metric: "40%",
    title: "Index Quality Improvement",
    desc: "Average improvement in index quality after crawl optimization and content pruning for SaaS clients on complex tech stacks",
  },
  {
    metric: "3X",
    title: "Crawl Efficiency",
    desc: "Average improvement in crawl efficiency after fixing crawl waste, redirect chains, and low-value page issues",
  },
  {
    metric: "2.1s",
    title: "LCP Improvement",
    desc: "Average LCP improvement after Core Web Vitals optimization on React and Next.js SaaS applications",
  },
];

const rightFor = [
  "Your site is on a JavaScript framework (React, Next.js, Vue, Angular)",
  "You've been doing SEO for 6+ months without seeing results",
  "You've hit a traffic plateau despite publishing good content",
  "You're planning a site migration or redesign",
  "You suspect technical issues but don't know where to start",
];

const notRightFor = [
  "You're just starting SEO and have no content yet",
  "Your site is a simple WordPress blog with no technical complexity",
  "You need content strategy before technical fixes",
  "You want guaranteed results in 30 days",
];

const faqs = [
  {
    q: "How do you work with our engineering team?",
    a: "I deliver technical recommendations as developer-ready specs — exact code changes, configuration updates, and implementation guides written for engineers, not marketers. I'm available for implementation calls to walk your team through complex fixes like JS rendering or CWV improvements.",
  },
  {
    q: "Do you need access to our codebase?",
    a: "Not always. Most technical SEO audits use external tools (Screaming Frog, Sitebulb, PageSpeed Insights, GSC). For JS rendering diagnosis I may need a staging environment. For implementation support I'll need whatever access your engineering team has.",
  },
  {
    q: "How is a technical SEO audit different from an SEO audit?",
    a: "A standard SEO audit covers keywords, content, and links. A technical SEO audit goes deeper: crawl logs, render testing, index coverage analysis, Core Web Vitals profiling, JavaScript execution tracing, and server response analysis. It's the difference between checking the paintwork and inspecting the engine.",
  },
];

export default function TechnicalSeoPage() {
  return (
    <>
      <JsonLd schema={faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))} />

      {/* ── Section 1: Hero ── */}
      <section
        aria-label="Technical SEO hero"
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
              "radial-gradient(ellipse at 70% 0%, rgba(108,99,255,0.08) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div className="container">
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "4rem" }}
            className="max-lg:flex-col"
          >
            {/* Left — 55% */}
            <div style={{ flex: "0 0 55%", maxWidth: "55%" }} className="max-lg:max-w-full">
              <p className="section-label">Technical SEO</p>
              <h1 style={{ marginBottom: "1.25rem" }}>
                Fix the foundation.{" "}
                <span style={{ color: "var(--color-accent)" }}>
                  Let everything else compound.
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
                Great content and a broken technical foundation is like a fast car with a blown
                engine. Technical SEO ensures search engines can find, crawl, understand, and index
                everything you publish — so every other SEO investment actually works.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "var(--color-text-muted)",
                  marginBottom: "2rem",
                }}
              >
                Technical SEO systems built for SaaS, EdTech, and enterprise platforms with complex
                tech stacks.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  marginBottom: "1.5rem",
                }}
              >
                <Link href="/contact" className="btn btn-primary">
                  Book a Technical SEO Audit
                </Link>
                <Link href="#process" className="btn btn-secondary">
                  See what I fix
                </Link>
              </div>
              <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
                <span className="badge badge-accent">Core Web Vitals</span>
                <span className="badge badge-accent">JS Rendering</span>
                <span className="badge badge-muted">Crawl Architecture</span>
              </div>
            </div>

            {/* Right — 45%: Terminal Audit Card */}
            <div
              style={{ flex: "0 0 45%", maxWidth: "45%" }}
              className="max-lg:max-w-full max-lg:w-full"
            >
              <div
                style={{
                  backgroundColor: "#0D0D14",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                {/* Terminal header */}
                <div
                  style={{
                    backgroundColor: "#1A1A2E",
                    padding: "0.75rem 1rem",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div style={{ display: "flex", gap: "0.375rem" }} aria-hidden="true">
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#FF5F57",
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#FFBD2E",
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#28CA41",
                        display: "inline-block",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      flex: 1,
                      textAlign: "center",
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.4)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    technical-seo-audit.sh
                  </span>
                </div>

                {/* Terminal content */}
                <div
                  style={{
                    padding: "1rem 1.25rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    lineHeight: 1.8,
                  }}
                >
                  <p>
                    <span style={{ color: "rgba(108,99,255,0.8)" }}>$ </span>
                    <span style={{ color: "rgba(255,255,255,0.7)" }}>running crawl audit...</span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span style={{ color: "rgba(40,202,65,0.8)" }}>✓ </span>
                    <span style={{ color: "rgba(255,255,255,0.6)" }}>crawled </span>
                    <span style={{ color: "rgba(108,99,255,0.9)" }}>2,847</span>
                    <span style={{ color: "rgba(255,255,255,0.6)" }}> pages</span>
                  </p>
                  <p>
                    <span style={{ color: "rgba(255,189,46,0.8)" }}>⚠ </span>
                    <span style={{ color: "rgba(255,255,255,0.6)" }}>found </span>
                    <span style={{ color: "rgba(255,189,46,0.9)" }}>143</span>
                    <span style={{ color: "rgba(255,255,255,0.6)" }}> indexing issues</span>
                  </p>
                  <p>
                    <span style={{ color: "rgba(255,95,87,0.8)" }}>✗ </span>
                    <span style={{ color: "rgba(255,255,255,0.6)" }}>CWV failing: </span>
                    <span style={{ color: "rgba(255,95,87,0.9)" }}>LCP 4.2s</span>
                    <span style={{ color: "rgba(255,255,255,0.6)" }}> (poor)</span>
                  </p>
                  <p>
                    <span style={{ color: "rgba(255,189,46,0.8)" }}>⚠ </span>
                    <span style={{ color: "rgba(255,255,255,0.6)" }}>duplicate content: </span>
                    <span style={{ color: "rgba(255,189,46,0.9)" }}>67 pages</span>
                  </p>
                  <p>
                    <span style={{ color: "rgba(255,95,87,0.8)" }}>✗ </span>
                    <span style={{ color: "rgba(255,255,255,0.6)" }}>JS render blocks: </span>
                    <span style={{ color: "rgba(255,95,87,0.9)" }}>23 critical</span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>
                      ─────────────────────────
                    </span>
                  </p>
                  <p>
                    <span style={{ color: "rgba(108,99,255,0.8)" }}>→ </span>
                    <span style={{ color: "rgba(255,255,255,0.5)" }}>priority fixes identified: </span>
                    <span style={{ color: "rgba(40,202,65,0.9)" }}>8 critical</span>
                  </p>
                  <p>
                    <span style={{ color: "rgba(108,99,255,0.8)" }}>→ </span>
                    <span style={{ color: "rgba(255,255,255,0.5)" }}>estimated traffic impact: </span>
                    <span style={{ color: "rgba(40,202,65,0.9)" }}>+40-60%</span>
                  </p>
                  <p>
                    <span style={{ color: "rgba(108,99,255,0.8)" }}>$ </span>
                    <span style={{ color: "rgba(108,99,255,0.6)" }}>generating report...</span>
                    <span className="terminal-cursor" aria-hidden="true" />
                  </p>
                </div>

                {/* Terminal footer */}
                <div
                  style={{
                    padding: "0.625rem 1.25rem",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    backgroundColor: "rgba(40,202,65,0.06)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "rgba(40,202,65,0.7)",
                  }}
                >
                  audit complete — 8 critical issues found → fixing now
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: The Problem ── */}
      <section
        aria-label="Technical SEO problems"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
            <p className="section-label">The hidden problem</p>
            <h2 style={{ marginBottom: "1rem" }}>
              Your technical debt is silently capping your SEO growth.
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
              Most SEO teams focus on content and links while technical issues quietly limit how much
              of that investment actually reaches Google. You can publish great content and build
              strong links — and still plateau because crawlers can&apos;t access, render, or
              understand your site properly.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.25rem",
            }}
            className="max-md:grid-cols-1"
          >
            {problems.map((p) => (
              <article
                key={p.title}
                className="card"
                style={{
                  borderLeft: "3px solid rgba(239,68,68,0.5)",
                  padding: "1.5rem",
                }}
              >
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
                  }}
                >
                  {p.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: The Solution ── */}
      <section
        aria-label="Technical SEO solution"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <div
            style={{ display: "flex", gap: "4rem", alignItems: "flex-start" }}
            className="max-lg:flex-col"
          >
            {/* Left — 60% pillar rows */}
            <div style={{ flex: "0 0 58%" }} className="max-lg:w-full">
              <p className="section-label">How I approach Technical SEO</p>
              <h2 style={{ marginBottom: "0.75rem", maxWidth: "52ch" }}>
                A technical foundation that makes everything else work harder.
              </h2>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.75,
                  marginBottom: "2.5rem",
                  maxWidth: "52ch",
                }}
              >
                I audit every technical layer of your site — crawl, render, index, performance —
                prioritize by revenue impact, and execute fixes alongside your engineering team.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {pillars.map((p, i) => (
                  <div
                    key={p.title}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      padding: "1.25rem 0",
                      borderBottom:
                        i < pillars.length - 1 ? "1px solid var(--color-border)" : "none",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-accent-subtle)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                      aria-hidden="true"
                    >
                      <p.Icon
                        size={18}
                        style={{ color: "var(--color-accent)" }}
                        aria-hidden="true"
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          marginBottom: "0.375rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "1rem",
                            fontWeight: 600,
                            color: "var(--color-text-primary)",
                          }}
                        >
                          {p.title}
                        </h3>
                        <span className="badge badge-accent" style={{ fontSize: "0.6875rem" }}>
                          {p.badge}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--color-text-secondary)",
                          lineHeight: 1.7,
                        }}
                      >
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — 40%: Site Architecture SVG */}
            <div
              style={{
                flex: "0 0 38%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                paddingTop: "5rem",
              }}
              className="max-lg:w-full max-lg:pt-0"
            >
              <svg
                viewBox="0 0 240 300"
                width="100%"
                style={{ maxWidth: "240px", height: "auto" }}
                aria-hidden="true"
              >
                {/* Root node — Homepage */}
                <rect
                  x={80}
                  y={8}
                  width={80}
                  height={28}
                  rx={5}
                  fill="rgba(108,99,255,0.12)"
                  stroke="rgba(108,99,255,0.5)"
                  strokeWidth={1.5}
                />
                <text
                  x={120}
                  y={26}
                  fontSize={9}
                  fill="rgb(108,99,255)"
                  textAnchor="middle"
                  fontWeight="600"
                  fontFamily="var(--font-mono)"
                >
                  Homepage
                </text>

                {/* Lines from root to level 2 */}
                <line x1={120} y1={36} x2={35} y2={72} stroke="var(--color-border)" strokeWidth={1} strokeDasharray="2 3" />
                <line x1={120} y1={36} x2={95} y2={72} stroke="var(--color-border)" strokeWidth={1} strokeDasharray="2 3" />
                <line x1={120} y1={36} x2={155} y2={72} stroke="var(--color-border)" strokeWidth={1} strokeDasharray="2 3" />
                <line x1={120} y1={36} x2={205} y2={72} stroke="var(--color-border)" strokeWidth={1} strokeDasharray="2 3" />

                {/* Level 2 nodes */}
                {[
                  { x: 10, label: "Services" },
                  { x: 70, label: "Blog" },
                  { x: 130, label: "About" },
                  { x: 180, label: "Contact" },
                ].map(({ x, label }) => (
                  <g key={label}>
                    <rect x={x} y={72} width={50} height={24} rx={4} fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth={1} />
                    <text x={x + 25} y={88} fontSize={8} fill="var(--color-text-secondary)" textAnchor="middle" fontFamily="var(--font-mono)">
                      {label}
                    </text>
                  </g>
                ))}

                {/* Lines from Services to level 3 */}
                <line x1={35} y1={96} x2={25} y2={140} stroke="var(--color-border)" strokeWidth={1} strokeDasharray="2 3" />
                <line x1={35} y1={96} x2={55} y2={140} stroke="var(--color-border)" strokeWidth={1} strokeDasharray="2 3" />
                <line x1={35} y1={96} x2={85} y2={140} stroke="var(--color-border)" strokeWidth={1} strokeDasharray="2 3" />

                {/* Level 3 nodes under Services */}
                {[
                  { x: 5, label: "SEO" },
                  { x: 35, label: "GEO" },
                  { x: 65, label: "AEO" },
                ].map(({ x, label }) => (
                  <g key={label}>
                    <rect x={x} y={140} width={40} height={20} rx={3} fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth={0.5} />
                    <text x={x + 20} y={154} fontSize={7} fill="var(--color-text-muted)" textAnchor="middle" fontFamily="var(--font-mono)">
                      {label}
                    </text>
                  </g>
                ))}

                {/* Orphan page indicator */}
                <rect x={150} y={200} width={70} height={22} rx={3} fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.3)" strokeWidth={1} />
                <text x={185} y={215} fontSize={7} fill="rgba(239,68,68,0.7)" textAnchor="middle" fontFamily="var(--font-mono)">
                  Orphan Page
                </text>

                {/* Crawl block indicator */}
                <rect x={30} y={230} width={70} height={22} rx={3} fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.3)" strokeWidth={1} />
                <text x={65} y={245} fontSize={7} fill="rgba(239,68,68,0.7)" textAnchor="middle" fontFamily="var(--font-mono)">
                  Crawl Block
                </text>

                {/* Legend */}
                <circle cx={15} cy={282} r={4} fill="rgba(108,99,255,0.7)" />
                <text x={24} y={286} fontSize={7} fill="var(--color-text-muted)" fontFamily="var(--font-mono)">Optimized</text>
                <circle cx={80} cy={282} r={4} fill="var(--color-border)" />
                <text x={89} y={286} fontSize={7} fill="var(--color-text-muted)" fontFamily="var(--font-mono)">Standard</text>
                <circle cx={148} cy={282} r={4} fill="rgba(239,68,68,0.6)" />
                <text x={157} y={286} fontSize={7} fill="var(--color-text-muted)" fontFamily="var(--font-mono)">Issues found</text>
              </svg>
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
                Site architecture issues visualised — orphan pages and crawl blocks costing you
                rankings.
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
          <div
            style={{ display: "flex", gap: "4rem", alignItems: "flex-start" }}
            className="max-lg:flex-col"
          >
            {/* Left */}
            <div style={{ flex: "0 0 36%" }} className="max-lg:w-full">
              <p className="section-label">Scope of work</p>
              <h2 style={{ marginBottom: "1.5rem", maxWidth: "52ch" }}>
                What a technical SEO engagement covers.
              </h2>

              {/* 3 stat cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { value: "200+", label: "Technical checks performed" },
                  { value: "48hrs", label: "Audit turnaround time" },
                  { value: "Priority", label: "Fixes ranked by impact" },
                ].map((stat) => (
                  <div
                    key={stat.value}
                    style={{
                      backgroundColor: "var(--color-bg)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-lg)",
                      padding: "1.25rem 1.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.75rem",
                        fontWeight: 600,
                        color: "var(--color-accent)",
                        lineHeight: 1,
                        flexShrink: 0,
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.5,
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — checklist */}
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
        aria-label="Technical SEO process"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 3.5rem" }}>
            <p className="section-label">The process</p>
            <h2>How I approach technical SEO.</h2>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 0,
              position: "relative",
            }}
            className="max-md:flex-col max-md:gap-8"
          >
            {/* Dashed connector line */}
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
                <span className="badge badge-muted" style={{ fontSize: "0.6875rem" }}>
                  {step.week}
                </span>

                {/* Arrow between steps — desktop */}
                {i < processSteps.length - 1 && (
                  <div
                    className="max-md:hidden"
                    aria-hidden="true"
                    style={{ position: "absolute", right: "-12px", top: "1rem", zIndex: 2 }}
                  >
                    <ChevronRight
                      size={20}
                      style={{ color: "var(--color-accent)", opacity: 0.5 }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Results ── */}
      <section
        aria-label="Technical SEO results"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div
            style={{ display: "flex", gap: "4rem", alignItems: "flex-start" }}
            className="max-lg:flex-col"
          >
            {/* Left */}
            <div
              style={{
                flex: "0 0 32%",
                display: "flex",
                flexDirection: "column",
              }}
              className="max-lg:w-full"
            >
              <p className="section-label">Proven results</p>
              <h2 style={{ marginBottom: "1.5rem", maxWidth: "52ch" }}>
                Technical SEO impact in numbers.
              </h2>
              <svg
                viewBox="0 0 240 200"
                width="100%"
                style={{ maxWidth: "220px", height: "auto" }}
                aria-hidden="true"
              >
                <text x={0} y={16} fontSize={8} fill="var(--color-text-muted)" fontFamily="var(--font-mono)">LCP before</text>
                <rect x={0} y={22} width={160} height={14} rx={3} fill="rgba(239,68,68,0.3)" />
                <text x={165} y={33} fontSize={8} fill="rgba(239,68,68,0.8)" fontFamily="var(--font-mono)">4.2s</text>

                <text x={0} y={54} fontSize={8} fill="var(--color-text-muted)" fontFamily="var(--font-mono)">LCP after</text>
                <rect x={0} y={60} width={84} height={14} rx={3} fill="rgba(40,202,65,0.4)" />
                <text x={89} y={71} fontSize={8} fill="rgba(40,202,65,0.8)" fontFamily="var(--font-mono)">2.1s</text>

                <line x1={0} y1={90} x2={220} y2={90} stroke="var(--color-border)" strokeWidth={0.5} strokeDasharray="3 3" />

                <text x={0} y={108} fontSize={8} fill="var(--color-text-muted)" fontFamily="var(--font-mono)">Crawl efficiency</text>
                <rect x={0} y={114} width={60} height={14} rx={3} fill="rgba(239,68,68,0.2)" />
                <text x={64} y={125} fontSize={7} fill="rgba(239,68,68,0.7)" fontFamily="var(--font-mono)">before</text>
                <rect x={0} y={134} width={180} height={14} rx={3} fill="rgba(108,99,255,0.4)" />
                <text x={184} y={145} fontSize={7} fill="rgba(108,99,255,0.8)" fontFamily="var(--font-mono)">3x</text>

                <line x1={0} y1={162} x2={220} y2={162} stroke="var(--color-border)" strokeWidth={0.5} strokeDasharray="3 3" />

                <text x={0} y={180} fontSize={8} fill="var(--color-text-muted)" fontFamily="var(--font-mono)">Index quality</text>
                <rect x={0} y={186} width={132} height={12} rx={3} fill="rgba(40,202,65,0.35)" />
                <text x={136} y={196} fontSize={7} fill="rgba(40,202,65,0.8)" fontFamily="var(--font-mono)">+40%</text>
              </svg>
            </div>

            {/* Right — 3 result rows */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                paddingTop: "4.5rem",
              }}
              className="max-lg:w-full max-lg:pt-0"
            >
              {results.map((r) => (
                <article
                  key={r.title}
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
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "2rem",
                        fontWeight: 600,
                        color: "var(--color-accent)",
                        lineHeight: 1,
                        marginBottom: "0.375rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {r.metric}
                    </p>
                    <span
                      className="badge badge-accent"
                      style={{ fontSize: "0.6875rem", display: "inline-flex" }}
                    >
                      {r.title}
                    </span>
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

      {/* ── Section 7: Fit Check ── */}
      <section
        aria-label="Is this right for you"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label">Fit check</p>
            <h2>Technical SEO is right for you if...</h2>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}
            className="max-md:grid-cols-1"
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
        aria-label="Frequently asked questions"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div
            style={{ display: "flex", gap: "4rem", alignItems: "flex-start" }}
            className="max-lg:flex-col"
          >
            {/* Left — decorative */}
            <div style={{ flex: "0 0 32%", position: "relative" }} className="max-lg:w-full">
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
                style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}
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
            <div style={{ flex: 1 }} className="max-lg:w-full">
              <p className="section-label">Common questions</p>
              <h2 style={{ marginBottom: "2rem", maxWidth: "52ch" }}>
                Questions about Technical SEO.
              </h2>
              <div style={{ borderTop: "1px solid var(--color-border)" }}>
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    style={{ padding: "1.5rem 0", borderBottom: "1px solid var(--color-border)" }}
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
            <p className="section-label">Get started</p>
            <h2 style={{ marginBottom: "1rem" }}>Fix your technical foundation today.</h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-secondary)",
                marginBottom: "2.5rem",
                lineHeight: 1.75,
              }}
            >
              Technical issues compound silently. Every week they go unfixed is a week your content
              and link investments underperform. Let&apos;s audit and fix.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "1.5rem",
              }}
            >
              <Link href="/contact" className="btn btn-primary">
                Book a Technical SEO Audit
              </Link>
              <Link
                href="/services"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "var(--color-accent)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  padding: "0.8125rem 0",
                }}
              >
                See all services →
              </Link>
            </div>
            {/* Trust signals */}
            <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              {["48hr audit delivery", "Developer-ready specs", "No long-term contract"].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
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
