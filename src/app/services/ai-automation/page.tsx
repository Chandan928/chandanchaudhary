import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  Search,
  FileText,
  Link2,
  BarChart3,
  Mail,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Clock,
  TrendingDown,
  Settings,
  ChevronDown,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  titleAbsolute: "AI Automation for SEO for SaaS and AI Companies",
  description:
    "Build scalable SEO systems using AI workflows for research, content execution, and faster growth.",
  path: "/services/ai-automation",
});

const problems = [
  {
    Icon: Clock,
    title: "Hours lost to repetitive tasks",
    desc: "Keyword clustering, content briefs, rank tracking, reporting. Each task takes hours done manually. Done with AI automation — minutes. The compounding time loss is killing your team's strategic capacity.",
    tag: "Time drain",
  },
  {
    Icon: AlertCircle,
    title: "Inconsistent execution",
    desc: "Manual processes produce inconsistent outputs. Brief quality varies by who writes it. Reports get delayed. Internal links get missed. Automation enforces consistency at every step, every time.",
    tag: "Inconsistency",
  },
  {
    Icon: TrendingDown,
    title: "Scaling is impossible manually",
    desc: "You can't 10x your content output by hiring 10 more people. You scale by building systems. Teams that build automation infrastructure compound their output — teams that don't hit a hard ceiling.",
    tag: "Scaling ceiling",
  },
];

const pillars = [
  {
    Icon: Zap,
    title: "Content Brief Automation",
    desc: "AI-generated content briefs using NLP clustering, SERP analysis, and semantic keyword mapping. From keyword to production-ready brief in 3 minutes, not 3 hours.",
    tag: "NLP Clustering",
  },
  {
    Icon: Search,
    title: "Keyword Research Pipelines",
    desc: "Automated keyword discovery, clustering, intent classification, and opportunity scoring. Process thousands of keywords in minutes with consistent, repeatable outputs.",
    tag: "Keyword Automation",
  },
  {
    Icon: Link2,
    title: "Internal Link Automation",
    desc: "Automated internal link recommendations using semantic similarity analysis. Never miss a linking opportunity. Built in Python or n8n to run on your existing content base.",
    tag: "Python + n8n",
  },
  {
    Icon: BarChart3,
    title: "Reporting Automation",
    desc: "Automated rank tracking, GSC data pulls, and client report generation. Custom Looker Studio dashboards that update automatically — no manual data entry ever again.",
    tag: "Auto Reporting",
  },
  {
    Icon: Settings,
    title: "Custom SEO Workflows",
    desc: "End-to-end workflow automation for your specific SEO process. Built on n8n, Make, or Python depending on your stack and team's technical level.",
    tag: "n8n + Make",
  },
];

const includedItems = [
  "Keyword discovery and clustering automation",
  "Content brief generation system",
  "SERP analysis automation",
  "Internal link recommendation engine",
  "Rank tracking automation",
  "GSC data pull and processing",
  "Client report auto-generation",
  "Looker Studio dashboard setup",
  "Competitor monitoring alerts",
  "Custom n8n/Make workflow builds",
];

const stats = [
  { value: "50%", label: "Reduction in content brief time" },
  { value: "10x", label: "Keyword processing speed" },
  { value: "40%", label: "Less manual reporting work" },
];

const processSteps = [
  {
    num: "01",
    title: "Workflow Audit",
    desc: "Map your current SEO process end-to-end. Identify every manual task, time spent, and automation opportunity. Prioritize by time saved vs complexity.",
    week: "Week 1",
  },
  {
    num: "02",
    title: "System Design",
    desc: "Design the automation architecture. Choose the right tools (n8n, Make, Python, Claude API) for each workflow. Build the integration plan.",
    week: "Week 2",
  },
  {
    num: "03",
    title: "Build & Test",
    desc: "Build each automation workflow, test with real data, and refine until outputs match or exceed manual quality. Document everything.",
    week: "Month 2",
  },
  {
    num: "04",
    title: "Train & Hand Off",
    desc: "Train your team on the new systems. Set up monitoring, error alerts, and maintenance processes. You own the automation.",
    week: "Week 3–4",
  },
];

const results = [
  {
    metric: "50%",
    title: "Brief Time Reduction",
    desc: "Average reduction in content brief creation time after implementing AI brief generation system (from 3 hours to under 30 minutes)",
  },
  {
    metric: "40%",
    title: "Manual Work Eliminated",
    desc: "Average reduction in manual SEO workflow tasks after full automation implementation for SaaS content teams",
  },
  {
    metric: "10x",
    title: "Keyword Processing",
    desc: "Speed increase in keyword research and clustering using automated NLP pipelines vs manual spreadsheet processing",
  },
];

const rightFor = [
  "You have an SEO team spending significant time on repetitive tasks",
  "You're producing content at scale and brief quality is inconsistent",
  "You want to 10x output without 10x headcount",
  "You have budget for 2–4 weeks of automation build time",
  "You want to own the automation — not pay monthly for a tool",
];

const notRightFor = [
  "You're a solo founder with no content team yet",
  "You need content written — not just briefed and planned",
  "You want a quick fix rather than a systematic workflow change",
  "You don't have an existing SEO process to automate",
];

const faqs = [
  {
    q: "What tools do you use to build SEO automations?",
    a: "Primarily n8n and Make for workflow automation, Python for custom data processing, the Claude API and GPT-4 for AI-powered content tasks, and Google Sheets/Airtable for data storage. I choose tools based on your team's technical level and existing stack.",
  },
  {
    q: "Do I need technical knowledge to use the automations you build?",
    a: "No. I build automations with your team's skill level in mind and provide full documentation and training. Most workflows I deliver have simple trigger mechanisms — your team clicks a button or submits a form, and the automation handles the rest.",
  },
  {
    q: "Who owns the automation after you build it?",
    a: "You do — completely. I build on tools you control (your n8n instance, your Make account, your Python scripts). There's no ongoing dependency on me. I provide documentation and a handoff session so your team can maintain and extend the workflows independently.",
  },
];

/* ── Reusable automation flow SVG ── */
function AutomationFlowSvg({ maxWidth = "220px" }: { maxWidth?: string }) {
  return (
    <svg
      viewBox="0 0 220 320"
      width="100%"
      style={{ maxWidth, height: "auto" }}
      aria-hidden="true"
    >
      {/* Node 1 — Completed */}
      <rect x={30} y={12} width={160} height={36} rx={6}
        fill="var(--color-surface)" stroke="rgba(108,99,255,0.5)" strokeWidth={1.5} />
      <text x={90} y={35} fontSize={9} fill="var(--color-text-secondary)" textAnchor="middle">
        Keyword Input
      </text>
      <text x={205} y={35} fontSize={8} fill="var(--color-accent)" textAnchor="middle">✓</text>

      {/* Line 1→2 */}
      <line x1={110} y1={48} x2={110} y2={72} stroke="var(--color-border)" strokeWidth={1} strokeDasharray="3 3" />
      <circle cx={110} cy={60} r={4} fill="var(--color-accent)" opacity={0.6} />

      {/* Node 2 — Completed */}
      <rect x={30} y={72} width={160} height={36} rx={6}
        fill="var(--color-surface)" stroke="rgba(108,99,255,0.5)" strokeWidth={1.5} />
      <text x={90} y={95} fontSize={9} fill="var(--color-text-secondary)" textAnchor="middle">
        AI Clustering
      </text>
      <text x={205} y={95} fontSize={8} fill="var(--color-accent)" textAnchor="middle">✓</text>

      {/* Line 2→3 */}
      <line x1={110} y1={108} x2={110} y2={132} stroke="var(--color-border)" strokeWidth={1} strokeDasharray="3 3" />
      <circle cx={110} cy={120} r={4} fill="var(--color-accent)" opacity={0.6} />

      {/* Node 3 — Running (animated) */}
      <rect x={30} y={132} width={160} height={36} rx={6}
        fill="var(--color-surface)" strokeWidth={1.5}
        className="node-running-svg" />
      <text x={90} y={155} fontSize={9} fill="var(--color-text-secondary)" textAnchor="middle">
        Brief Generation
      </text>
      <text x={205} y={155} fontSize={8} fill="var(--color-text-muted)" textAnchor="middle">...</text>

      {/* Line 3→4 */}
      <line x1={110} y1={168} x2={110} y2={192} stroke="var(--color-border)" strokeWidth={1} strokeDasharray="3 3" />
      <circle cx={110} cy={180} r={4} fill="var(--color-accent)" opacity={0.6} />

      {/* Node 4 — Queued */}
      <rect x={30} y={192} width={160} height={36} rx={6}
        fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth={1} opacity={0.5} />
      <text x={90} y={215} fontSize={9} fill="var(--color-text-muted)" textAnchor="middle">
        Link Mapping
      </text>
      <text x={205} y={215} fontSize={8} fill="var(--color-text-muted)" textAnchor="middle">—</text>

      {/* Line 4→5 */}
      <line x1={110} y1={228} x2={110} y2={262} stroke="var(--color-border)" strokeWidth={1} strokeDasharray="3 3" />
      <circle cx={110} cy={245} r={4} fill="var(--color-accent)" opacity={0.6} />

      {/* Node 5 — Queued */}
      <rect x={30} y={262} width={160} height={36} rx={6}
        fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth={1} opacity={0.5} />
      <text x={90} y={285} fontSize={9} fill="var(--color-text-muted)" textAnchor="middle">
        Report Output
      </text>
      <text x={205} y={285} fontSize={8} fill="var(--color-text-muted)" textAnchor="middle">—</text>
    </svg>
  );
}

export default function AiAutomationPage() {
  return (
    <>
      <JsonLd schema={serviceSchema({ name: 'AI Automation for SEO', description: 'SEO automation consulting with AI-powered workflows using n8n, Make, and Python. Automate content briefs, keyword research, and reporting.', url: 'https://chandanchaudhary.com/services/ai-automation' })} />
      <JsonLd schema={faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))} />

      {/* ── Section 1: Hero ── */}
      <section
        aria-label="AI Automation hero"
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
              <p className="section-label">AI Automation for SEO</p>
              <h1 style={{ marginBottom: "1.25rem" }}>
                Stop doing manually what{" "}
                <span style={{ color: "var(--color-accent)" }}>AI can do in seconds.</span>
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
                The biggest bottleneck in SEO isn&apos;t strategy — it&apos;s execution speed. I build AI-powered automation workflows that eliminate the slow, manual parts of SEO so your team focuses on high-judgment work that actually moves revenue.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "var(--color-text-muted)",
                  marginBottom: "2rem",
                }}
              >
                Automation systems built for SaaS SEO teams using n8n, Make, Python, and Claude API.
              </p>
              <div className="btn-group" style={{ marginBottom: "1.5rem" }}>
                <Link href="/contact" className="btn btn-primary">
                  Book an Automation Audit
                </Link>
                <Link href="#process" className="btn btn-secondary">
                  See what I automate
                </Link>
              </div>
              <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
                <span className="badge badge-accent">10x Faster</span>
                <span className="badge badge-accent">n8n + Make</span>
                <span className="badge badge-muted">Python Workflows</span>
              </div>
            </div>

            {/* Right — 45% — Workflow Pipeline Card */}
            <div
              style={{ width: '100%', display: 'flex', alignItems: 'stretch', justifyContent: 'flex-end' }}
            >
              <div
                style={{
                  width: '100%',
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                {/* Card Header */}
                <div
                  style={{
                    padding: "0.75rem 1rem",
                    borderBottom: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Zap size={16} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                      }}
                    >
                      SEO Automation Pipeline
                    </span>
                  </div>
                  <span
                    className="badge badge-accent"
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem" }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#22c55e",
                        flexShrink: 0,
                        display: "inline-block",
                      }}
                    />
                    Running
                  </span>
                </div>

                {/* Workflow Nodes */}
                <div style={{ padding: "1.25rem" }}>
                  {/* Node 1: Keyword Discovery — Done */}
                  <div
                    style={{
                      backgroundColor: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-md)",
                      padding: "0.5rem 0.875rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                    }}
                  >
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                      <Search size={14} style={{ color: "var(--color-accent)", flexShrink: 0 }} aria-hidden="true" />
                      <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "var(--color-text-primary)" }}>
                        Keyword Discovery
                      </span>
                    </div>
                    <span className="badge badge-accent" style={{ fontSize: "0.6875rem" }}>Done ✓</span>
                  </div>

                  {/* Arrow */}
                  <div style={{ display: "flex", justifyContent: "center", margin: "0.375rem 0" }}>
                    <ChevronDown size={14} style={{ color: "var(--color-text-muted)" }} aria-hidden="true" />
                  </div>

                  {/* Node 2: Content Brief Gen — Done */}
                  <div
                    style={{
                      backgroundColor: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-md)",
                      padding: "0.5rem 0.875rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                    }}
                  >
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                      <FileText size={14} style={{ color: "var(--color-accent)", flexShrink: 0 }} aria-hidden="true" />
                      <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "var(--color-text-primary)" }}>
                        Content Brief Gen
                      </span>
                    </div>
                    <span className="badge badge-accent" style={{ fontSize: "0.6875rem" }}>Done ✓</span>
                  </div>

                  {/* Arrow */}
                  <div style={{ display: "flex", justifyContent: "center", margin: "0.375rem 0" }}>
                    <ChevronDown size={14} style={{ color: "var(--color-text-muted)" }} aria-hidden="true" />
                  </div>

                  {/* Node 3: Internal Link Map — Running (animated) */}
                  <div
                    className="node-running"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      borderRadius: "var(--radius-md)",
                      padding: "0.5rem 0.875rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                    }}
                  >
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                      <Link2 size={14} style={{ color: "var(--color-accent)", flexShrink: 0 }} aria-hidden="true" />
                      <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "var(--color-text-primary)" }}>
                        Internal Link Map
                      </span>
                    </div>
                    <span className="badge badge-muted" style={{ fontSize: "0.6875rem" }}>Running...</span>
                  </div>

                  {/* Arrow */}
                  <div style={{ display: "flex", justifyContent: "center", margin: "0.375rem 0" }}>
                    <ChevronDown size={14} style={{ color: "var(--color-text-muted)" }} aria-hidden="true" />
                  </div>

                  {/* Node 4: Rank Report — Queued */}
                  <div
                    style={{
                      backgroundColor: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-md)",
                      padding: "0.5rem 0.875rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      opacity: 0.55,
                    }}
                  >
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                      <BarChart3 size={14} style={{ color: "var(--color-text-muted)", flexShrink: 0 }} aria-hidden="true" />
                      <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "var(--color-text-muted)" }}>
                        Rank Report
                      </span>
                    </div>
                    <span className="badge badge-muted" style={{ fontSize: "0.6875rem" }}>Queued</span>
                  </div>

                  {/* Arrow */}
                  <div style={{ display: "flex", justifyContent: "center", margin: "0.375rem 0" }}>
                    <ChevronDown size={14} style={{ color: "var(--color-text-muted)", opacity: 0.5 }} aria-hidden="true" />
                  </div>

                  {/* Node 5: Client Report — Queued */}
                  <div
                    style={{
                      backgroundColor: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-md)",
                      padding: "0.5rem 0.875rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      opacity: 0.55,
                    }}
                  >
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                      <Mail size={14} style={{ color: "var(--color-text-muted)", flexShrink: 0 }} aria-hidden="true" />
                      <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "var(--color-text-muted)" }}>
                        Client Report
                      </span>
                    </div>
                    <span className="badge badge-muted" style={{ fontSize: "0.6875rem" }}>Queued</span>
                  </div>
                </div>

                {/* Card Footer */}
                <div
                  style={{
                    padding: "0.75rem 1rem",
                    borderTop: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-surface)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    Time saved this week:
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "var(--color-accent)",
                    }}
                  >
                    14.5 hours
                  </span>
                </div>
                <div style={{ padding: "0.625rem 1rem", borderTop: "1px solid var(--color-border)" }}>
                  <span className="badge badge-accent">50% less content briefing time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: The Problem ── */}
      <section
        aria-label="SEO manual work problems"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
            <p className="section-label">The bottleneck</p>
            <h2 style={{ marginBottom: "1rem" }}>
              Your SEO team is drowning in manual work.
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
              The average SEO team spends 60% of their time on tasks that don&apos;t require human judgment — keyword clustering, brief writing, rank report generation, internal link analysis. That&apos;s time stolen from strategy and execution that actually moves revenue.
            </p>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}
            className="max-md:grid-cols-1"
          >
            {problems.map((p) => (
              <article
                key={p.title}
                className="card"
                style={{ borderLeft: "3px solid rgba(239,68,68,0.5)", padding: "1.5rem" }}
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

      {/* ── Section 3: The Solution ── */}
      <section
        aria-label="AI automation solution"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <div
                        className="grid-2"
          >
            {/* Left — 60% */}
            <div >
              <p className="section-label">What I build</p>
              <h2 style={{ marginBottom: "0.875rem", maxWidth: "52ch" }}>
                AI automation that multiplies your team&apos;s output.
              </h2>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                  maxWidth: "52ch",
                }}
              >
                I map your current SEO workflow, identify every manual bottleneck, and replace them with AI-powered automation using the right tools for each job.
              </p>

              {/* Pillar rows */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {pillars.map((p, i) => (
                  <div
                    key={p.title}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                      padding: "1.125rem 1rem",
                      borderLeft: "3px solid var(--color-accent-border)",
                      borderBottom: i < pillars.length - 1 ? "1px solid var(--color-border)" : "none",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
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
                      <p.Icon size={16} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                    </div>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.625rem",
                          flexWrap: "wrap",
                          marginBottom: "0.375rem",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.9375rem",
                            fontWeight: 600,
                            color: "var(--color-text-primary)",
                          }}
                        >
                          {p.title}
                        </h3>
                        <span className="badge badge-accent" style={{ fontSize: "0.6875rem" }}>
                          {p.tag}
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

            {/* Right — Automation Flow SVG */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
              className="max-lg:w-full max-lg:items-start"
            >
              <AutomationFlowSvg maxWidth="220px" />
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
                Every step automated — from keyword input to final report.
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
                        className="grid-2"
          >
            {/* Left */}
            <div >
              <p className="section-label">Scope of work</p>
              <h2 style={{ marginBottom: "1.5rem", maxWidth: "52ch" }}>
                What I automate for your SEO team.
              </h2>

              {/* Stat cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {stats.map((s) => (
                  <div
                    key={s.value}
                    style={{
                      backgroundColor: "var(--color-bg)",
                      border: "1px solid var(--color-border)",
                      borderLeft: "3px solid var(--color-accent-border)",
                      borderRadius: "var(--radius-lg)",
                      padding: "1rem 1.25rem",
                    }}
                  >
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
                  </div>
                ))}
              </div>
            </div>

            {/* Right — 2-col checklist */}
            <div>
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

      {/* ── Section 5: Process ── */}
      <section
        id="process"
        aria-label="How I build automation systems"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 3.5rem" }}>
            <p className="section-label">The process</p>
            <h2>How I build your automation system.</h2>
          </div>

          {/* Horizontal timeline */}
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: 0, position: "relative" }}
            className="max-md:flex-col max-md:gap-8"
          >
            {/* Dashed connector line — desktop only */}
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
        aria-label="Automation results"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div
                        className="grid-2"
          >
            {/* Left — SVG + heading */}
            <div
              style={{ flex: "0 0 32%", display: "flex", flexDirection: "column", gap: "1rem" }}
              className="max-lg:w-full"
            >
              <p className="section-label">Proven results</p>
              <h2 style={{ marginBottom: "0.5rem", maxWidth: "52ch" }}>
                What automation impact looks like.
              </h2>
              <AutomationFlowSvg maxWidth="200px" />
            </div>

            {/* Right — 3 result rows */}
            <div
              style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.25rem" }}
              className="max-lg:w-full"
            >
              {results.map((r) => (
                <article
                  key={r.metric + r.title}
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
                        fontSize: "2.25rem",
                        fontWeight: 600,
                        color: "var(--color-accent)",
                        lineHeight: 1,
                        marginBottom: "0.25rem",
                      }}
                    >
                      {r.metric}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "var(--color-text-primary)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {r.title}
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

      {/* ── Section 7: Fit Check ── */}
      <section
        aria-label="Is AI automation right for you"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label">Fit check</p>
            <h2>AI Automation is right for you if...</h2>
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
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
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
                Questions about AI automation.
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
        {/* Decorative large arrow */}
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
              Build a faster SEO machine today.
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-secondary)",
                marginBottom: "2.5rem",
                lineHeight: 1.75,
              }}
            >
              Every week your team spends on manual tasks is a week your competitors are moving faster. Let&apos;s fix that.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "1.5rem",
              }}
            >
              <Link href="/contact" className="btn btn-primary">
                Book an Automation Audit
              </Link>
              <Link
                href="/services"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "var(--color-text-secondary)",
                  display: "inline-flex",
                  alignItems: "center",
                  alignSelf: "center",
                  transition: "color var(--ease)",
                }}
              >
                See all services
              </Link>
            </div>

            {/* Trust signals */}
            <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              {["You own the automation", "Full documentation", "Team training included"].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                  <CheckCircle2 size={14} aria-hidden="true" style={{ color: "var(--color-accent)" }} />
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
