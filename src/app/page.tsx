import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  MessageSquare,
  Globe,
  MapPin,
  Zap,
  Settings,
  Clock,
  Building2,
  BarChart3,
  XCircle,
  CheckCircle2,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema, websiteSchema } from "@/lib/schema";
import { LogoStrip } from "@/components/sections/LogoStrip";

export const metadata: Metadata = buildMetadata();

/* ── Data ── */
const stats = [
  { value: "9+",    label: "Years in SEO & Growth",   Icon: Clock },
  { value: "$5M+",  label: "Organic ARR Generated",   Icon: TrendingUp },
  { value: "22+",   label: "SaaS & Tech Brands",      Icon: Building2 },
  { value: "160%+", label: "Average Traffic Growth",  Icon: BarChart3 },
];

const problems = [
  {
    title: "Audits without execution",
    desc: "You get a 60-page report. Nobody implements it. Six months later, nothing has moved.",
  },
  {
    title: "Content without intent",
    desc: "Blog posts targeting keywords that attract readers, not buyers. Traffic goes up. Pipeline stays flat.",
  },
  {
    title: "SEO disconnected from revenue",
    desc: "Rankings improve. But nobody tracks whether organic drives sign-ups, activations, or ARR.",
  },
];

const solutions = [
  {
    title: "Strategy + execution, end to end",
    desc: "I don't hand off a doc. I own the roadmap, prioritize what moves revenue, and stay until it's done.",
  },
  {
    title: "Demand-first content systems",
    desc: "Every piece of content maps to a buyer stage — TOFU, MOFU, BOFU — with clear conversion paths built in.",
  },
  {
    title: "SEO wired to your growth metrics",
    desc: "Every initiative is tracked against sign-ups, activations, and ARR — not just rankings and sessions.",
  },
];

const services = [
  {
    Icon: TrendingUp,
    name: "SEO Strategy & Execution",
    description:
      "Full-funnel SEO built around your ICP. Topical authority, semantic content systems, and technical foundations — all mapped to revenue, not rankings.",
    href: "/services/seo",
    badge: { label: "Most Popular", variant: "badge-accent" },
  },
  {
    Icon: MessageSquare,
    name: "AEO — Answer Engine Optimization",
    description:
      "Your buyers are asking ChatGPT, Perplexity, and Gemini for recommendations. I make sure your brand shows up in those answers.",
    href: "/services/aeo",
    badge: { label: "New", variant: "badge-muted" },
  },
  {
    Icon: Globe,
    name: "GEO — Generative Engine Optimization",
    description:
      "LLMs are the new search engines. I optimize your content for AI citations, entity authority, and retrieval — so you rank in the AI era.",
    href: "/services/geo",
    badge: { label: "New", variant: "badge-muted" },
  },
  {
    Icon: MapPin,
    name: "Local SEO",
    description:
      "Dominate local search in your market. Google Business Profile optimization, local authority building, and geo-targeted content that drives qualified leads.",
    href: "/services/local-seo",
    badge: null,
  },
  {
    Icon: Zap,
    name: "AI Automation for SEO",
    description:
      "Automate the slow parts — content briefs, clustering, reporting, internal linking — using AI workflows built on n8n, Make, and Python.",
    href: "/services/ai-automation",
    badge: null,
  },
  {
    Icon: Settings,
    name: "Technical SEO",
    description:
      "Crawl architecture, Core Web Vitals, JavaScript rendering, index management. The foundation that makes everything else work faster.",
    href: "/services/technical-seo",
    badge: null,
  },
];

const caseStudies = [
  {
    company: "Venngage",
    stat: "$1.25M ARR",
    desc: "$1.25M ARR impact in 12 months. 232% increase in organic sign-ups. 50+ landing pages. Index quality improved by 40%. International SEO expanded across 5 languages.",
  },
  {
    company: "Keka HR",
    stat: "$2.4M ARR",
    desc: "$2.4M ARR uplift over 22 months. Traffic scaled from 288K to 759K sessions/month. Built and led a team of 11. Launched Help Center generating 16K organic visits/month.",
  },
  {
    company: "GrabOn",
    stat: "4.3M sessions/mo",
    desc: "1.8M → 4.3M monthly sessions. Rebuilt site architecture after algorithm hit. Recovered and secured top-3 rankings across 80+ high-intent categories. 400+ high-DA backlinks in 6 months.",
  },
];

const testimonials = [
  {
    quote:
      "When we brought Chandan in, SEO was unpredictable — good months, bad months, no clear system. He changed that. Within a year, organic became our most consistent acquisition channel, contributing directly to ARR growth. The difference was his ability to prioritize ruthlessly and connect every SEO action to a business outcome.",
    name: "Nikunj Verma",
    role: "CEO, CutShort",
    initials: "NV",
  },
  {
    quote:
      "Most SEO consultants optimize for rankings. Chandan optimizes for revenue. He ran experiments that directly increased sign-ups by 232%, launched landing pages that drove thousands of registrations monthly, and always knew exactly which levers to pull. The $1.25M ARR impact speaks for itself.",
    name: "Eugene Woo",
    role: "CEO, Venngage",
    initials: "EW",
  },
  {
    quote:
      "We were starting from zero — no domain authority, no traffic, no SEO infrastructure. Chandan built everything from the ground up. He treated our growth like it was his own business. 14K organic monthly visits in under a year, with a foundation strong enough to keep compounding.",
    name: "Neeraj Parikh",
    role: "CEO/Co-Founder, SP Tech USA",
    initials: "NP",
  },
];

/* ── Page ── */
export default function HomePage() {
  return (
    <>
      <JsonLd schema={[personSchema(), websiteSchema()]} />

      {/* ── 1. Hero ── */}
      <section
        aria-label="Hero"
        className="section"
        style={{ paddingTop: "8rem", position: "relative", overflow: "hidden" }}
      >
        {/* Radial gradient overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle at 80% 20%, rgba(108,99,255,0.08) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        {/* Floating badge pills */}
        <span
          aria-hidden="true"
          className="badge badge-muted"
          style={{
            position: "absolute",
            top: "7rem",
            right: "2rem",
            fontSize: "0.75rem",
            opacity: 0.35,
            pointerEvents: "none",
          }}
        >
          Semantic SEO
        </span>
        <span
          aria-hidden="true"
          className="badge badge-muted"
          style={{
            position: "absolute",
            top: "12rem",
            right: "4rem",
            fontSize: "0.75rem",
            opacity: 0.35,
            pointerEvents: "none",
          }}
        >
          AI Automation
        </span>
        <span
          aria-hidden="true"
          className="badge badge-muted"
          style={{
            position: "absolute",
            top: "17rem",
            right: "1.5rem",
            fontSize: "0.75rem",
            opacity: 0.35,
            pointerEvents: "none",
          }}
        >
          GEO Optimization
        </span>

        <div className="container">
          {/* Flex row: content left, card right */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "3rem",
            }}
          >
            {/* Left: hero content */}
            <div style={{ maxWidth: "680px", flex: 1 }}>
              <p className="section-label">SEO · GEO · AEO · AI Automation · Hyderabad, India</p>

              <h1 style={{ marginBottom: "1.5rem" }}>
                Organic growth,{" "}
                <span style={{ color: "var(--color-accent)" }}>engineered</span>{" "}
                with AI.
              </h1>

              <p
                style={{
                  fontSize: "1.125rem",
                  color: "var(--color-text-secondary)",
                  maxWidth: "560px",
                  marginBottom: "2rem",
                  lineHeight: 1.75,
                }}
              >
                Most SaaS founders invest in SEO and wait. I build revenue-aligned
                growth systems that compound — using AI, semantic SEO, and data to
                turn organic into your most predictable acquisition channel.
              </p>

              <div className="flex flex-wrap gap-4" style={{ marginBottom: "1.25rem" }}>
                <Link href="/contact" className="btn btn-primary">
                  Book a Free Strategy Call
                </Link>
                <Link href="/about" className="btn btn-secondary">
                  See How I Work
                </Link>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "var(--color-text-muted)",
                  marginBottom: "3rem",
                }}
              >
                No retainer traps. No vanity metrics. Just a clear plan tied to ARR.
              </p>

              {/* Stats row */}
              <div
                style={{
                  borderTop: "1px solid var(--color-border)",
                  paddingTop: "2rem",
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "1.5rem",
                }}
              >
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    style={
                      i < stats.length - 1
                        ? { borderRight: "1px solid var(--color-border)", paddingRight: "1.5rem" }
                        : undefined
                    }
                  >
                    <div style={{ marginBottom: "0.5rem" }} aria-hidden="true">
                      <s.Icon size={20} style={{ color: "var(--color-accent)" }} />
                    </div>
                    <p className="stat-number">{s.value}</p>
                    <p className="stat-label">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: floating availability card (hidden on small screens) */}
            <div className="max-lg:hidden" style={{ flexShrink: 0 }}>
              <div
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.25rem",
                  width: "220px",
                  transform: "rotate(-2deg)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                {/* Availability indicator */}
                <div
                  style={{
                    display: "inline-flex",
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

                {/* Stat */}
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  $1.25M
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    color: "var(--color-text-muted)",
                    marginBottom: "1rem",
                  }}
                >
                  ARR generated for Venngage
                </p>

                {/* Divider */}
                <div
                  aria-hidden="true"
                  style={{
                    height: "1px",
                    backgroundColor: "var(--color-border)",
                    marginBottom: "1rem",
                  }}
                />

                {/* Footer */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: "var(--color-text-muted)",
                  }}
                >
                  9+ years · 22+ brands
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Logo Strip ── */}
      <LogoStrip />

      {/* ── 3. Problem → Solution ── */}
      <section
        aria-label="Why most SaaS SEO fails"
        className="section"
        style={{ backgroundColor: "var(--color-surface-2)" }}
      >
        <div className="container">
          <p className="section-label">Why most SaaS SEO fails</p>
          <h2 style={{ marginBottom: "0.75rem", maxWidth: "560px" }}>
            You don&apos;t have a traffic problem.
            <br />You have a growth clarity problem.
          </h2>
          <p
            style={{
              color: "var(--color-text-secondary)",
              maxWidth: "580px",
              marginBottom: "3rem",
              lineHeight: 1.75,
            }}
          >
            Most early-stage SaaS teams invest in SEO without a system. They get blog posts,
            audits, and reports — but organic never becomes a real acquisition channel.
            Here&apos;s why.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
            }}
            className="max-md:grid-cols-1"
          >
            {/* Problems */}
            <div className="flex flex-col gap-4" aria-label="The old way">
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(239, 68, 68, 0.8)",
                  marginBottom: "0.5rem",
                }}
              >
                The old way
              </p>
              {problems.map((p) => (
                <div
                  key={p.title}
                  style={{
                    borderLeft: "2px solid var(--color-error-subtle)",
                    paddingLeft: "1rem",
                    display: "flex",
                    gap: "0.625rem",
                  }}
                >
                  <XCircle
                    size={16}
                    aria-hidden="true"
                    style={{
                      color: "rgba(239,68,68,0.7)",
                      flexShrink: 0,
                      marginTop: "3px",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                        marginBottom: "0.375rem",
                      }}
                    >
                      {p.title}
                    </p>
                    <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)" }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Solutions */}
            <div className="flex flex-col gap-4" aria-label="How I work">
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: "0.5rem",
                }}
              >
                How I work
              </p>
              {solutions.map((s) => (
                <div
                  key={s.title}
                  style={{
                    borderLeft: "2px solid var(--color-accent-border)",
                    paddingLeft: "1rem",
                    display: "flex",
                    gap: "0.625rem",
                  }}
                >
                  <CheckCircle2
                    size={16}
                    aria-hidden="true"
                    style={{
                      color: "var(--color-accent)",
                      flexShrink: 0,
                      marginTop: "3px",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                        marginBottom: "0.375rem",
                      }}
                    >
                      {s.title}
                    </p>
                    <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)" }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Services ── */}
      <section aria-label="Services" className="section">
        <div className="container">
          <p className="section-label">What I do</p>
          <h2 style={{ marginBottom: "3rem", maxWidth: "480px" }}>
            Six ways I help SaaS teams
            <br />grow organically.
          </h2>

          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
            className="max-lg:grid-cols-2 max-sm:grid-cols-1"
            role="list"
          >
            {services.map(({ Icon, name, description, href, badge }) => (
              <li key={name}>
                <article className="card h-full flex flex-col" style={{ position: "relative" }}>
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
                      marginBottom: "1rem",
                    }}
                    aria-hidden="true"
                  >
                    <Icon size={20} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                  </div>

                  <h3 style={{ marginBottom: "0.625rem" }}>{name}</h3>

                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.7,
                      flex: 1,
                    }}
                  >
                    {description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "1.25rem",
                    }}
                  >
                    <Link
                      href={href}
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: "var(--color-accent)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.25rem",
                        transition: "gap var(--ease-fast)",
                      }}
                      aria-label={`Learn more about ${name}`}
                    >
                      Learn more →
                    </Link>

                    {badge && (
                      <span className={`badge ${badge.variant}`}>
                        {badge.label}
                      </span>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 5. Results ── */}
      <section
        aria-label="Results"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <p className="section-label">Proven results</p>
          <h2 style={{ marginBottom: "0.75rem", maxWidth: "440px" }}>
            Numbers I&apos;m proud of.
          </h2>
          <p
            style={{
              color: "var(--color-text-secondary)",
              marginBottom: "3rem",
              maxWidth: "480px",
            }}
          >
            Every number below is tied to a real business outcome — not a vanity metric.
          </p>

          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
            className="max-md:grid-cols-1"
            role="list"
          >
            {caseStudies.map((c) => (
              <li key={c.company}>
                <article
                  className="card h-full flex flex-col"
                  style={{ borderTop: "3px solid var(--color-accent)" }}
                >
                  <span className="badge badge-accent" style={{ marginBottom: "1rem", display: "inline-flex" }}>
                    {c.company}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "2.5rem",
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {c.stat}
                    </p>
                    <TrendingUp
                      size={16}
                      aria-hidden="true"
                      style={{ color: "var(--color-accent)", flexShrink: 0 }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.7,
                      flex: 1,
                    }}
                  >
                    {c.desc}
                  </p>
                  <Link
                    href="/about"
                    style={{
                      marginTop: "1.25rem",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    View case study →
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 6. Testimonials ── */}
      <section
        aria-label="Testimonials"
        className="section"
        style={{ backgroundColor: "var(--color-surface-2)" }}
      >
        <div className="container">
          <p className="section-label">Client results</p>
          <h2 style={{ marginBottom: "3rem", maxWidth: "360px" }}>
            What founders say.
          </h2>

          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
            className="max-md:grid-cols-1"
            role="list"
          >
            {testimonials.map((t) => (
              <li key={t.name}>
                <figure
                  className="card h-full flex flex-col"
                  style={{ position: "relative" }}
                >
                  {/* Decorative large quote mark */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      fontFamily: "var(--font-display)",
                      fontSize: "6rem",
                      lineHeight: 1,
                      color: "var(--color-accent)",
                      opacity: 0.06,
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                  >
                    &ldquo;
                  </span>

                  {/* Star rating */}
                  <div
                    aria-label="5 stars"
                    style={{
                      display: "flex",
                      gap: "0.25rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {[0, 1, 2, 3, 4].map((star) => (
                      <span
                        key={star}
                        aria-hidden="true"
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "var(--color-accent)",
                          display: "inline-block",
                        }}
                      />
                    ))}
                  </div>

                  <blockquote
                    style={{
                      borderLeft: "2px solid var(--color-accent)",
                      paddingLeft: "1rem",
                      marginBottom: "1.5rem",
                      flex: 1,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9375rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.75,
                      }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center gap-3">
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "var(--radius-full)",
                        backgroundColor: "var(--color-accent-subtle)",
                        color: "var(--color-accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-display)",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    >
                      {t.initials}
                    </div>
                    <cite className="not-italic">
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9375rem",
                          fontWeight: 600,
                          color: "var(--color-text-primary)",
                        }}
                      >
                        {t.name}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.875rem",
                          color: "var(--color-text-muted)",
                          marginTop: "2px",
                        }}
                      >
                        {t.role}
                      </p>
                    </cite>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 7. CTA ── */}
      <section
        aria-label="Call to action"
        className="section-sm"
        style={{
          backgroundColor: "var(--color-accent-subtle)",
          borderTop: "1px solid var(--color-accent-border)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ marginBottom: "1rem" }}>
              Your organic channel
              <br />should drive revenue. Let&apos;s build that.
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-secondary)",
                marginBottom: "2.5rem",
                lineHeight: 1.75,
              }}
            >
              If you&apos;re a SaaS founder spending on SEO without a clear system — let&apos;s
              talk. I&apos;ll tell you exactly what I&apos;d do in your situation, no pitch,
              no pressure.
            </p>

            <Link href="/contact" className="btn btn-primary">
              Book a Free Consultation
            </Link>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "var(--color-text-muted)",
                marginTop: "1.5rem",
              }}
            >
              or email{" "}
              <a
                href="mailto:ckchandan928@gmail.com"
                style={{
                  color: "var(--color-accent)",
                  transition: "opacity var(--ease-fast)",
                }}
              >
                ckchandan928@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
