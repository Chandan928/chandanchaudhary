import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  BadgeCheck,
  DollarSign,
  Zap,
  Settings,
  TrendingUp,
  Eye,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "About",
  path: "/about",
});

/* ── Data ── */
const timeline = [
  {
    company: "Venngage",
    role: "SEO Lead",
    period: "Feb 2024 – Jun 2025",
    location: "Remote",
    startDate: "2024-02",
    endDate: "2025-06",
    desc: "Led AI-first SEO strategy for a global design SaaS. Delivered $1.25M ARR impact, scaled international organic traffic across 5 languages, and built automation systems that cut content briefing time by 50%.",
    impactBadge: "$1.25M ARR",
    isLatest: true,
  },
  {
    company: "Keka HR",
    role: "SEO & Content Lead",
    period: "Jan 2022 – Nov 2023",
    location: "Hyderabad",
    startDate: "2022-01",
    endDate: "2023-11",
    desc: "Built and led an 11-person SEO and content team for India's leading HRMS SaaS. Scaled traffic from 288K to 759K monthly sessions. Contributed $2.4M ARR uplift through full-funnel SEO.",
    impactBadge: "$2.4M ARR",
    isLatest: false,
  },
  {
    company: "Turito",
    role: "SEO Manager",
    period: "Feb 2021 – Dec 2021",
    location: "Hyderabad",
    startDate: "2021-02",
    endDate: "2021-12",
    desc: "Scaled an EdTech product to 1M+ monthly visits. Built a full-funnel SEO + ASO acquisition model, doubled inbound leads, and reduced paid dependency by 20%.",
    impactBadge: null,
    isLatest: false,
  },
  {
    company: "GrabOn",
    role: "SEO Specialist",
    period: "May 2018 – Sept 2019",
    location: "Hyderabad",
    startDate: "2018-05",
    endDate: "2019-09",
    desc: "Rebuilt site architecture after a major algorithm hit. Restored and grew traffic from 1.8M to 4.3M monthly sessions. Secured top-3 rankings across 80+ categories.",
    impactBadge: null,
    isLatest: false,
  },
];

const principleIcons = [DollarSign, Zap, Settings, TrendingUp, Eye];

const principles = [
  {
    number: "01",
    title: "Revenue first, always.",
    desc: "Every SEO decision I make gets evaluated against one question: does this move ARR? Rankings are a side effect of doing that well.",
  },
  {
    number: "02",
    title: "AI is a multiplier, not a replacement.",
    desc: "I use AI to move faster — smarter content clustering, automated reporting, programmatic systems. But strategy and judgment are still human.",
  },
  {
    number: "03",
    title: "Technical foundations are non-negotiable.",
    desc: "You can have the best content strategy in your industry and still lose if your crawl architecture is broken.",
  },
  {
    number: "04",
    title: "Compounding beats sprinting.",
    desc: "The best SEO systems are the ones that get stronger over time. That means building for 12 months from day one.",
  },
  {
    number: "05",
    title: "Transparency is the only retainer worth having.",
    desc: "I'd rather tell you the honest timeline than keep you on a contract you're not getting value from.",
  },
];

const credentials = [
  "Semantic SEO Certification — Koray Tugberk Gubur",
  "SEO MBA — Tom Critchlow",
  "Digital Analytics — OptimizeSmart",
  "Product & Growth Marketing — GrowthX Academy",
  "Ranked #1 SEO — Techmagnate Virtual Tryout (170+ candidates)",
];

/* ── Page ── */
export default function AboutPage() {
  return (
    <>
      <JsonLd schema={personSchema()} />

      {/* ── 1. Page Hero ── */}
      <section
        aria-label="About Chandan Chaudhary"
        style={{
          backgroundColor: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          paddingTop: "8rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="container" style={{ maxWidth: "900px" }}>
          {/* Flex row: content left, avatar right on large screens */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "3rem",
            }}
          >
            {/* Left: hero content */}
            <div style={{ flex: 1, maxWidth: "680px" }}>
              {/* Availability badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1.5rem",
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
                <span className="badge badge-muted">Open to new clients</span>
              </div>

              <p className="section-label">Who I am</p>

              <h1 style={{ marginBottom: "1.5rem" }}>
                Nine years of building
                <br />what actually works.
              </h1>

              <p
                style={{
                  fontSize: "1.125rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.8,
                  maxWidth: "640px",
                  marginBottom: "2rem",
                }}
              >
                I&apos;m Chandan Chaudhary — a growth systems engineer who happens to
                specialize in SEO and AI. I started in SEO when most people were still stuffing
                keywords into meta descriptions. I stayed because I became obsessed with one
                problem: why do some companies grow predictably through organic search while
                others spin their wheels for years?
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="badge badge-accent">9+ Years</span>
                <span className="badge badge-accent">$5M+ ARR</span>
              </div>
            </div>

            {/* Right: decorative avatar circle (hidden on small screens) */}
            <div
              className="max-lg:hidden"
              style={{ flexShrink: 0, textAlign: "center" }}
            >
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-accent-subtle)",
                  border: "2px solid var(--color-accent-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  fontWeight: 600,
                  color: "var(--color-accent)",
                  marginBottom: "0.75rem",
                }}
                aria-hidden="true"
              >
                CC
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "var(--color-text-muted)",
                }}
              >
                Hyderabad, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. The Short Version ── */}
      <section aria-label="Background" className="section">
        <div
          className="container"
          style={{ maxWidth: "680px", marginInline: "auto" }}
        >
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            The answer, almost always, is systems. Not tactics. Not tools. Systems.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.8,
            }}
          >
            That obsession has taken me from a CS graduate writing my first crawl scripts
            to leading SEO for some of India&apos;s fastest-growing SaaS brands — and
            eventually to building an approach I&apos;m genuinely proud of:
            revenue-first, AI-assisted, and designed to keep working long after I&apos;m gone.
          </p>
        </div>
      </section>

      {/* ── 3. Career Timeline ── */}
      <section
        aria-label="Experience"
        className="section"
        style={{ backgroundColor: "var(--color-surface-2)" }}
      >
        <div className="container">
          <p className="section-label">Experience</p>
          <h2 style={{ marginBottom: "3rem", maxWidth: "440px" }}>
            Where I&apos;ve done the work.
          </h2>

          <ol
            style={{
              borderLeft: "2px solid var(--color-border)",
              paddingLeft: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
            }}
            role="list"
          >
            {timeline.map((entry) => (
              <li key={entry.company} style={{ position: "relative" }}>
                {/* Timeline dot — pulse on latest */}
                <span
                  aria-hidden="true"
                  className={entry.isLatest ? "timeline-dot-pulse" : ""}
                  style={{
                    position: "absolute",
                    left: "calc(-2rem - 5px)",
                    top: "6px",
                    width: "10px",
                    height: "10px",
                    borderRadius: "var(--radius-full)",
                    backgroundColor: "var(--color-accent)",
                    flexShrink: 0,
                  }}
                />

                <article>
                  {/* Header row: company initial + title + badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.25rem",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* Company initial circle */}
                    <div
                      aria-hidden="true"
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-accent-subtle)",
                        color: "var(--color-accent)",
                        fontFamily: "var(--font-display)",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {entry.company.slice(0, 2).toUpperCase()}
                    </div>

                    <h3
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "1.125rem",
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {entry.company}
                    </h3>

                    {entry.impactBadge && (
                      <span className="badge badge-accent">{entry.impactBadge}</span>
                    )}
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--color-text-muted)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <span>{entry.role}</span>
                    <span style={{ margin: "0 0.5rem" }}>·</span>
                    <time dateTime={entry.startDate}>{entry.period}</time>
                    <span style={{ margin: "0 0.5rem" }}>·</span>
                    <span>{entry.location}</span>
                  </p>

                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.75,
                      maxWidth: "580px",
                    }}
                  >
                    {entry.desc}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 4. How I Think ── */}
      <section
        aria-label="My approach"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <p className="section-label">My approach</p>
          <h2 style={{ marginBottom: "1rem", maxWidth: "560px" }}>
            SEO is an execution problem,
            <br />not a knowledge problem.
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.75,
              maxWidth: "600px",
              marginBottom: "3rem",
            }}
          >
            Most companies know <em>what</em> to do. They have the audits. They have the keyword
            lists. What they don&apos;t have is a system that turns that knowledge into consistent,
            compounding organic growth. My job is to build that system — and then make sure
            it runs without me.
          </p>

          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.5rem",
            }}
            className="max-md:grid-cols-1"
            role="list"
          >
            {principles.map((p, i) => {
              const PrincipleIcon = principleIcons[i];
              return (
                <li
                  key={p.number}
                  style={
                    i === principles.length - 1 && principles.length % 2 !== 0
                      ? { gridColumn: "1 / -1", maxWidth: "calc(50% - 0.75rem)" }
                      : undefined
                  }
                  className={
                    i === principles.length - 1 && principles.length % 2 !== 0
                      ? "max-md:max-w-full"
                      : ""
                  }
                >
                  <article
                    className="card h-full"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                    {/* Large faint decorative number */}
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        top: "0.5rem",
                        right: "1rem",
                        fontFamily: "var(--font-display)",
                        fontSize: "5rem",
                        fontWeight: 700,
                        opacity: 0.04,
                        color: "var(--color-accent)",
                        lineHeight: 1,
                        pointerEvents: "none",
                        userSelect: "none",
                      }}
                    >
                      {p.number}
                    </span>

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
                        color: "var(--color-accent)",
                        marginBottom: "1rem",
                      }}
                      aria-hidden="true"
                    >
                      <PrincipleIcon size={20} />
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
                        fontSize: "0.9375rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.75,
                      }}
                    >
                      {p.desc}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── 5. Credentials ── */}
      <section aria-label="Certifications and recognition" className="section">
        <div className="container">
          <p className="section-label">Certifications &amp; recognition</p>

          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0.75rem",
            }}
            className="max-sm:grid-cols-1"
            role="list"
          >
            {credentials.map((cert) => (
              <li key={cert}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.625rem",
                    padding: "0.75rem 1rem",
                    backgroundColor: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <BadgeCheck
                    size={16}
                    aria-hidden="true"
                    style={{
                      color: "var(--color-accent)",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.5,
                    }}
                  >
                    {cert}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <section
        aria-label="Work with Chandan"
        className="section-sm"
        style={{
          backgroundColor: "var(--color-accent-subtle)",
          borderTop: "1px solid var(--color-accent-border)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ marginBottom: "1rem" }}>Want to work together?</h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-secondary)",
                marginBottom: "2.5rem",
                lineHeight: 1.75,
              }}
            >
              I take on a limited number of SaaS clients at a time. If you&apos;re building
              an organic acquisition channel and want it done right — let&apos;s talk.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
