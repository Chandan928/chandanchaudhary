import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  TrendingUp,
  Building2,
  BarChart3,
  DollarSign,
  Zap,
  Settings2,
  Eye,
  Award,
  Trophy,
  BadgeCheck,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema } from "@/lib/schema";
import { LogoStrip } from "@/components/sections/LogoStrip";

export const metadata: Metadata = buildMetadata({
  titleAbsolute: "About Chandan Chaudhary | SEO Consultant for SaaS and AI",
  description:
    "Chandan Chaudhary is an SEO consultant working with SaaS and AI companies to build search driven growth systems focused on pipeline and revenue.",
  path: "/about",
});

/* ── Data ── */

const stats = [
  {
    Icon: Clock,
    number: "9+",
    label: "Years in SEO & Growth",
  },
  {
    Icon: TrendingUp,
    number: "$5M+",
    label: "Organic ARR Generated",
  },
  {
    Icon: Building2,
    number: "22+",
    label: "SaaS & Tech Brands",
  },
  {
    Icon: BarChart3,
    number: "160%+",
    label: "Avg Traffic Growth",
  },
];

const timeline = [
  {
    company: "Venngage",
    period: "Feb 2024 – Jun 2025",
    impact: "$1.25M ARR · 232% sign-up increase",
    role: "SEO Consultant (Remote)",
    isLatest: true,
  },
  {
    company: "Keka HR",
    period: "Jan 2022 – Nov 2023",
    impact: "$2.4M ARR · 288K → 759K sessions",
    role: "Sr. SEO Specialist (Team Lead, 11 people)",
    isLatest: false,
  },
  {
    company: "Turito",
    period: "Feb 2021 – Dec 2021",
    impact: "1M+ monthly visits · -20% paid dependency",
    role: "SEO Lead",
    isLatest: false,
  },
  {
    company: "GrabOn",
    period: "May 2018 – Sept 2019",
    impact: "1.8M → 4.3M monthly sessions",
    role: "Digital Marketing Analyst",
    isLatest: false,
  },
];

const principles = [
  {
    number: "01",
    Icon: DollarSign,
    title: "Revenue first, always",
    desc: "Every SEO decision I make gets evaluated against one question: does this move ARR? Rankings are a side effect of doing that well.",
  },
  {
    number: "02",
    Icon: Zap,
    title: "AI is a multiplier, not a replacement",
    desc: "I use AI to move faster — smarter content clustering, automated reporting, programmatic systems. But strategy and judgment are still human.",
  },
  {
    number: "03",
    Icon: Settings2,
    title: "Technical foundations are non-negotiable",
    desc: "You can have the best content strategy in your industry and still lose if your crawl architecture is broken.",
  },
  {
    number: "04",
    Icon: TrendingUp,
    title: "Compounding beats sprinting",
    desc: "The best SEO systems get stronger over time. That means building for 12 months from day one, not chasing quick wins.",
  },
  {
    number: "05",
    Icon: Eye,
    title: "Transparency is the only retainer worth having",
    desc: "I'd rather tell you an honest timeline than keep you on a contract you're not getting value from.",
  },
];

const credentials = [
  {
    Icon: Award,
    name: "Semantic SEO Certification",
    issuer: "Koray Tugberk Gubur",
  },
  {
    Icon: Award,
    name: "SEO MBA",
    issuer: "Tom Critchlow",
  },
  {
    Icon: Award,
    name: "Digital Analytics Course",
    issuer: "OptimizeSmart",
  },
  {
    Icon: Award,
    name: "Product & Growth Marketing",
    issuer: "GrowthX Academy",
  },
  {
    Icon: Trophy,
    name: "Ranked #1 SEO",
    issuer: "Techmagnate Virtual Tryout · 170+ candidates",
  },
  {
    Icon: BadgeCheck,
    name: "B.Tech Computer Science",
    issuer: "JNTU Kakinada · 2011-2015",
  },
];

const testimonials = [
  {
    quote:
      "Chandan's SEO frameworks and execution system helped CutShort achieve a 132% increase in organic traffic. His structured, data-driven approach turned SEO into a predictable and scalable growth channel for us.",
    initials: "NV",
    name: "Nikunj Verma",
    role: "CEO, CutShort",
  },
  {
    quote:
      "By applying a strict prioritization framework, Chandan helped Venngage drive $1.25M in ARR within a year. His work consistently tied SEO execution to real revenue outcomes.",
    initials: "EW",
    name: "Eugene Woo",
    role: "CEO, Venngage",
  },
  {
    quote:
      "Chandan approached SP Tech like a zero-to-one problem. He built the SEO foundation from the ground up. This resulted in 14K organic traffic in under a year.",
    initials: "NP",
    name: "Neeraj Parikh",
    role: "CEO/Co-Founder, SP Tech USA",
  },
];

/* ── Page ── */
export default function AboutPage() {
  return (
    <>
      <JsonLd schema={personSchema()} />

      {/* ── SECTION 1 — HERO ── */}
      <section
        aria-label="About Chandan Chaudhary"
        style={{
          backgroundColor: "var(--color-bg)",
          paddingTop: "8rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="container">
          <div className="hero-grid">

            {/* Left (55%) */}
            <div>
              <p className="section-label">About</p>

              <h1 style={{ marginBottom: "1.5rem" }}>
                Nine years of building what actually works.
              </h1>

              <p
                style={{
                  fontSize: "1.125rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.8,
                  maxWidth: "560px",
                  marginBottom: "2rem",
                }}
              >
                I am Chandan Chaudhary a Computer Science graduate turned SEO consultant
                obsessed with one problem: why do some companies grow predictably
                through organic search while others spin their wheels for years?
                The answer, almost always, is systems.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                <span className="badge badge-accent">9+ Years</span>
                <span className="badge badge-accent">$5M+ ARR Impact</span>
              </div>

              {/* Availability indicator */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "2rem",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(16,185,129,0.8)",
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Currently available for new clients
                </span>
              </div>

              <Link
                href="/contact"
                className="btn btn-primary"
                style={{ borderRadius: "var(--radius-md)" }}
              >
                Book a Free Strategy Call
              </Link>
            </div>

            {/* Right (45%) — Headshot */}
            <div
              style={{
                background: "var(--color-surface)",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--color-border)",
                overflow: "hidden",
                padding: "2rem 2rem 0",
                display: "flex",
                alignItems: "flex-end",
                minHeight: "480px",
                position: "relative",
              }}
              className="max-lg:hidden"
            >
              <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
                {/* Radial gradient behind image */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(ellipse at 50% 80%, rgba(108,99,255,0.08) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    borderRadius: "var(--radius-xl)",
                    overflow: "hidden",
                    background: "transparent",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                <Image
                  src="/images/chandan-chaudhary.png"
                  alt="Chandan Chaudhary — SEO Consultant, Hyderabad"
                  width={420}
                  height={520}
                  style={{
                    objectFit: "contain",
                    objectPosition: "center bottom",
                    borderRadius: "var(--radius-xl)",
                  }}
                  priority
                />
                </div>{/* end image wrapper */}
              </div>{/* end zIndex:1 div */}

              {/* Floating credential card */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "1rem",
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "0.875rem 1.25rem",
                  boxShadow: "var(--shadow-md)",
                  zIndex: 2,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "var(--color-accent)",
                    lineHeight: 1.2,
                    marginBottom: "0.125rem",
                  }}
                >
                  #1 SEO
                </p>
                <p
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.4,
                  }}
                >
                  Techmagnate Virtual Tryout
                </p>
                <p
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.4,
                  }}
                >
                  170+ candidates
                </p>
              </div>
            </div>{/* end right column */}
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — QUICK STATS ── */}
      <section
        aria-label="Key metrics"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div className="stats-row">

            {stats.map(({ Icon, number, label }, i) => (
              <div
                key={label}
                style={{
                  padding: "1.5rem 2rem",
                  borderRight:
                    i < stats.length - 1
                      ? "1px solid var(--color-border)"
                      : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
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
                    color: "var(--color-accent)",
                  }}
                  aria-hidden="true"
                >
                  <Icon size={20} />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    lineHeight: 1,
                  }}
                >
                  {number}
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.4,
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — MY STORY ── */}
      <section
        aria-label="My story"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <div className="grid-2">

            {/* Left: story */}
            <div>
              <p className="section-label">My story</p>
              <h2 style={{ marginBottom: "2rem" }}>
                From CS graduate to SEO system builder.
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontSize: "1.0625rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.8,
                  }}
                >
                  I started in SEO when most people were still stuffing keywords
                  into meta descriptions. I stayed because I became obsessed with
                  one problem: why do some companies grow predictably through organic
                  search while others spin their wheels for years?
                </p>
                <p
                  style={{
                    fontSize: "1.0625rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.8,
                  }}
                >
                  The answer, almost always, is systems. Not tactics. Not tools.
                  Systems. That obsession has taken me from writing my first crawl
                  scripts as a CS graduate to leading SEO for some of India&apos;s
                  fastest-growing SaaS brands — delivering $5M+ in documented ARR
                  impact.
                </p>
                <p
                  style={{
                    fontSize: "1.0625rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.8,
                  }}
                >
                  Today I work with a small number of SaaS companies at a time,
                  going deep rather than wide. I design end-to-end SEO growth
                  systems — and I stay until they work.
                </p>
              </div>
            </div>

            {/* Right: career timeline */}
            <div>
              <p className="section-label">Career timeline</p>

              <ol
                style={{
                  position: "relative",
                  paddingLeft: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  marginTop: "1.5rem",
                }}
                role="list"
              >
                {/* Vertical line */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "6px",
                    bottom: "6px",
                    width: "1px",
                    backgroundColor: "var(--color-border)",
                  }}
                />

                {timeline.map((entry) => (
                  <li key={entry.company} style={{ position: "relative" }}>
                    {/* Timeline dot */}
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: "calc(-1.75rem - 4px)",
                        top: "6px",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-accent)",
                        border: "2px solid var(--color-bg)",
                        flexShrink: 0,
                      }}
                    />

                    <div
                      style={{
                        marginBottom: "0.375rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        className={
                          entry.isLatest ? "badge badge-accent" : "badge badge-muted"
                        }
                      >
                        {entry.company}
                      </span>
                    </div>

                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--color-text-muted)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {entry.period}
                    </p>
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {entry.impact}
                    </p>
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      {entry.role}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — HOW I THINK ── */}
      <section
        aria-label="My approach"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <p className="section-label">My approach</p>
          <h2 style={{ marginBottom: "1rem", maxWidth: "560px" }}>
            SEO is an execution problem, not a knowledge problem.
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
            Most companies know what to do. They have the audits. They have the
            keyword lists. What they don&apos;t have is a system that turns
            knowledge into consistent, compounding organic growth.
          </p>

          <ul
            className="grid-2"
            role="list"
          >
            {principles.map((p, i) => (
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
                      fontSize: "4rem",
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

                  {/* Icon in accent circle */}
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
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
                    <p.Icon size={18} />
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
            ))}
          </ul>
        </div>
      </section>

      {/* ── SECTION 5 — BRANDS ── */}
      <section
        aria-label="Brands I've worked with"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <p className="section-label">Brands I&apos;ve worked with</p>
          <h2 style={{ marginBottom: "1rem" }}>
            22+ brands. One consistent outcome.
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.75,
              maxWidth: "560px",
              marginBottom: "3rem",
            }}
          >
            From early-stage SaaS to publicly listed companies — across SEO,
            GEO, AEO, and AI automation.
          </p>
        </div>

        <LogoStrip />
      </section>

      {/* ── SECTION 6 — CREDENTIALS ── */}
      <section
        aria-label="Certifications and recognition"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <p className="section-label">Certifications &amp; recognition</p>
          <h2 style={{ marginBottom: "3rem" }}>
            The credentials behind the work.
          </h2>

          <ul
            className="grid-2"
            role="list"
          >
            {credentials.map((cred) => (
              <li key={cred.name}>
                <div
                  className="card"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
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
                      color: "var(--color-accent)",
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    <cred.Icon size={20} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                        fontSize: "0.9375rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {cred.name}
                    </p>
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {cred.issuer}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SECTION 7 — TESTIMONIALS ── */}
      <section
        aria-label="Client results"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <p className="section-label">Client results</p>
          <h2 style={{ marginBottom: "3rem" }}>What CEOs say.</h2>

          <ul
            className="grid-3"
            role="list"
          >
            {testimonials.map((t) => (
              <li key={t.name}>
                <figure
                  className="card h-full"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  {/* Faint decorative quote mark */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: "0.75rem",
                      left: "1rem",
                      fontFamily: "var(--font-display)",
                      fontSize: "5rem",
                      opacity: 0.04,
                      color: "var(--color-accent)",
                      lineHeight: 1,
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                  >
                    &ldquo;
                  </span>

                  <blockquote
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.75,
                      fontStyle: "italic",
                      marginBottom: "1.5rem",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <figcaption
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    {/* Avatar */}
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-accent-subtle)",
                        color: "var(--color-accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-display)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p
                        style={{
                          fontWeight: 600,
                          color: "var(--color-text-primary)",
                          fontSize: "0.875rem",
                        }}
                      >
                        {t.name}
                      </p>
                      <p
                        style={{
                          fontSize: "0.8125rem",
                          color: "var(--color-text-muted)",
                        }}
                      >
                        {t.role}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SECTION 8 — CTA ── */}
      <section
        aria-label="Work with Chandan"
        className="section"
        style={{
          backgroundColor: "var(--color-accent-subtle)",
          borderTop: "1px solid var(--color-accent-border)",
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: "560px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h2 style={{ marginBottom: "1rem" }}>Want to work together?</h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
              }}
            >
              I take on a limited number of SaaS clients at a time. If
              you&apos;re building an organic acquisition channel and want it
              done right — this is the right first step.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.25rem",
              }}
            >
              <div className="btn-group" style={{ justifyContent: "center" }}>
                <Link
                  href="/contact"
                  className="btn btn-primary"
                  style={{ borderRadius: "var(--radius-md)" }}
                >
                  Book a Free Strategy Call
                </Link>
                <Link
                  href="/services"
                  style={{
                    color: "var(--color-accent)",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    display: "inline-flex",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  View my services
                </Link>
              </div>

              {/* Trust signals */}
              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {[
                  "Limited availability",
                  "Response within 24hrs",
                  "No long-term contract required",
                ].map((signal) => (
                  <span
                    key={signal}
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {signal}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
