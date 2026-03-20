import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Building2,
  Star,
  Building,
  FileText,
  BarChart2,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronRight,
  Search,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Local SEO Services — Dominate Local Search",
  description: "Local SEO consultant helping businesses dominate Google Maps and local pack results. GBP optimization, citations, and review strategy.",
  path: "/services/local-seo",
});

const problems = [
  {
    Icon: MapPin,
    title: "Not in the local pack",
    desc: "Google's local pack shows 3 results. If you're not in those 3, you're invisible to 70% of local searchers who never scroll past them. Position 4 might as well be page 2.",
    tag: "Local Pack",
  },
  {
    Icon: Building2,
    title: "Incomplete Google Business Profile",
    desc: "An unoptimized GBP is like a storefront with the lights off. Missing categories, no posts, incomplete attributes, unanswered reviews — each one silently costing you rankings and calls.",
    tag: "GBP Health",
  },
  {
    Icon: Star,
    title: "Weak review authority",
    desc: "Reviews are the #1 local ranking signal most businesses ignore. Competitors with 50+ recent reviews consistently outrank businesses with better services but fewer social proof signals.",
    tag: "Review Authority",
  },
];

const pillars = [
  {
    num: "01",
    Icon: MapPin,
    title: "Google Business Profile Optimization",
    desc: "Complete GBP audit and optimization: categories, attributes, services, photos, posts, Q&A. A fully optimized GBP is the single highest-leverage local SEO action.",
    tag: "GBP Optimization",
  },
  {
    num: "02",
    Icon: Building,
    title: "Local Citation Building",
    desc: "Consistent NAP (Name, Address, Phone) across 50+ local directories. Citation inconsistency is one of the most common hidden killers of local rankings.",
    tag: "Citation Authority",
  },
  {
    num: "03",
    Icon: Star,
    title: "Review Strategy",
    desc: "Systematic approach to generating, responding to, and leveraging reviews across Google, Justdial, and industry-specific platforms. Reviews that drive both rankings and conversions.",
    tag: "Review Growth",
  },
  {
    num: "04",
    Icon: FileText,
    title: "Local Content Strategy",
    desc: "Location-specific landing pages, local keyword targeting, and content that captures geo-modified search demand. Rank for '[service] in [city]' queries your buyers are using.",
    tag: "Local Content",
  },
  {
    num: "05",
    Icon: BarChart2,
    title: "Local Rank Tracking",
    desc: "Weekly tracking of local pack positions, GBP insights, review velocity, and competitor movements. Data-driven optimization that compounds over time.",
    tag: "Local Analytics",
  },
];

const includedItems = [
  "Google Business Profile full optimization",
  "Local keyword research and mapping",
  "Citation audit and cleanup",
  "50+ directory submissions",
  "Review generation strategy",
  "Review response management",
  "Local landing page creation",
  "Local schema markup (LocalBusiness)",
  "Competitor local gap analysis",
  "Monthly local performance report",
];

const processSteps = [
  {
    num: "01",
    title: "Local Audit",
    desc: "Complete audit of current local presence: GBP health, citation consistency, review profile, and competitive local landscape.",
    week: "Week 1",
  },
  {
    num: "02",
    title: "Foundation Fix",
    desc: "GBP optimization, citation cleanup, and local schema implementation. Fix what's silently holding back your local rankings.",
    week: "Week 2-3",
  },
  {
    num: "03",
    title: "Authority Build",
    desc: "Citation building, review strategy launch, local content creation. Build the local authority signals that drive pack rankings.",
    week: "Month 2",
  },
  {
    num: "04",
    title: "Dominate & Monitor",
    desc: "Weekly rank tracking, ongoing GBP management, review response, and continuous optimization.",
    week: "Ongoing",
  },
];

const rightFor = [
  "You have a physical location or serve a specific city/region",
  "You want to rank in Google Maps and local pack results",
  "You're losing business to competitors who rank higher locally",
  "You have a Google Business Profile but it's not optimized",
  "You want qualified local leads, not just website traffic",
];

const notRightFor = [
  "You're a fully remote SaaS with no geographic targeting",
  "You need national or international reach (SEO is better)",
  "You're expecting results in under 30 days",
  "You have no Google Business Profile and no local presence",
];

const faqs = [
  {
    q: "How long does it take to rank in the local pack?",
    a: "Most clients see initial local pack movement within 60-90 days of GBP optimization and citation building. Full local pack dominance typically takes 3-6 months depending on competition level in your city and the current state of your local presence.",
  },
  {
    q: "Do I need a physical address to do Local SEO?",
    a: "You need a verified Google Business Profile, which requires an address — but it doesn't have to be a storefront. Home-based businesses and service-area businesses can hide their address while still ranking locally. I'll advise the right setup for your situation.",
  },
  {
    q: "Can Local SEO work alongside my national SEO strategy?",
    a: "Absolutely — and they complement each other. A strong local presence builds domain authority that helps national rankings. I often recommend local SEO as the fastest path to qualified leads while national SEO builds longer-term organic reach.",
  },
];

function LocationGridSVG({ maxWidth = 280 }: { maxWidth?: number }) {
  return (
    <svg
      viewBox="0 0 260 260"
      width="100%"
      style={{ maxWidth: `${maxWidth}px`, height: "auto" }}
      aria-hidden="true"
    >
      {/* Background grid */}
      <line x1="20" y1="20" x2="240" y2="20" stroke="var(--color-border)" strokeWidth="0.5" />
      <line x1="20" y1="60" x2="240" y2="60" stroke="var(--color-border)" strokeWidth="0.5" />
      <line x1="20" y1="100" x2="240" y2="100" stroke="var(--color-border)" strokeWidth="0.5" />
      <line x1="20" y1="140" x2="240" y2="140" stroke="var(--color-border)" strokeWidth="0.5" />
      <line x1="20" y1="180" x2="240" y2="180" stroke="var(--color-border)" strokeWidth="0.5" />
      <line x1="20" y1="220" x2="240" y2="220" stroke="var(--color-border)" strokeWidth="0.5" />
      <line x1="20" y1="20" x2="20" y2="240" stroke="var(--color-border)" strokeWidth="0.5" />
      <line x1="60" y1="20" x2="60" y2="240" stroke="var(--color-border)" strokeWidth="0.5" />
      <line x1="100" y1="20" x2="100" y2="240" stroke="var(--color-border)" strokeWidth="0.5" />
      <line x1="140" y1="20" x2="140" y2="240" stroke="var(--color-border)" strokeWidth="0.5" />
      <line x1="180" y1="20" x2="180" y2="240" stroke="var(--color-border)" strokeWidth="0.5" />
      <line x1="220" y1="20" x2="220" y2="240" stroke="var(--color-border)" strokeWidth="0.5" />

      {/* Dashed radius circle */}
      <circle
        cx="130"
        cy="130"
        r="60"
        fill="none"
        stroke="rgba(108,99,255,0.15)"
        strokeWidth="1"
        strokeDasharray="4 4"
      />

      {/* Competitor pins */}
      <circle cx="60" cy="80" r="10" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
      <text x="60" y="84" fontSize="8" fill="var(--color-text-muted)" textAnchor="middle">3</text>

      <circle cx="190" cy="70" r="10" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
      <text x="190" y="74" fontSize="8" fill="var(--color-text-muted)" textAnchor="middle">4</text>

      <circle cx="70" cy="190" r="10" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
      <text x="70" y="194" fontSize="8" fill="var(--color-text-muted)" textAnchor="middle">5</text>

      <circle cx="195" cy="185" r="10" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
      <text x="195" y="189" fontSize="8" fill="var(--color-text-muted)" textAnchor="middle">6</text>

      {/* Center large pin (your brand) */}
      <circle
        cx="130"
        cy="130"
        r="16"
        fill="rgba(108,99,255,0.15)"
        stroke="rgba(108,99,255,0.6)"
        strokeWidth="2"
      />
      <text x="130" y="134" fontSize="12" fontWeight="bold" fill="rgb(108,99,255)" textAnchor="middle">
        1
      </text>

      {/* Label below center pin */}
      <rect x="90" y="150" width="80" height="20" rx="4" fill="var(--color-surface)" stroke="var(--color-accent-border)" strokeWidth="1" />
      <text x="130" y="164" fontSize="8" fill="rgb(108,99,255)" textAnchor="middle">
        Your Brand #1
      </text>
    </svg>
  );
}

export default function LocalSeoPage() {
  return (
    <>
      <JsonLd schema={serviceSchema({ name: 'Local SEO Services', description: 'Local SEO consulting for Google Maps and local pack dominance. GBP optimization, citations, and review strategy.', url: 'https://chandanchaudhary.com/services/local-seo' })} />
      <JsonLd schema={faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))} />

      {/* ── Section 1: Hero ── */}
      <section
        aria-label="Local SEO hero"
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
              <p className="section-label">Local SEO</p>
              <h1 style={{ marginBottom: "1.25rem" }}>
                Dominate local search.{" "}
                <span style={{ color: "var(--color-accent)" }}>Own your market.</span>
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
                When buyers in your city search for what you offer, your brand should be the first thing they see — on Google Maps, in local pack results, and across every local signal that drives qualified inbound.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "var(--color-text-muted)",
                  marginBottom: "2rem",
                }}
              >
                Local SEO systems built for service businesses and SaaS with geo-targeted go-to-market.
              </p>
              <div className="btn-group" style={{ marginBottom: "1.5rem" }}>
                <Link href="/contact" className="btn btn-primary">
                  Book a Local SEO Call
                </Link>
                <Link href="#process" className="btn btn-secondary">
                  See the process
                </Link>
              </div>
              <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
                <span className="badge badge-accent">Google Business Profile</span>
                <span className="badge badge-accent">Local Pack Rankings</span>
                <span className="badge badge-accent">Citation Authority</span>
              </div>
            </div>

            {/* Right — 45%: Local Map Card */}
            <div
              style={{ flex: "0 0 45%", maxWidth: "45%" }}
              className="max-lg:max-w-full max-lg:w-full"
            >
              <div
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                {/* Header bar with search */}
                <div
                  style={{
                    padding: "0.75rem 1rem",
                    backgroundColor: "var(--color-surface)",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-md)",
                      padding: "0.4rem 0.875rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      seo consultant hyderabad
                    </span>
                    <Search size={14} aria-hidden="true" style={{ color: "var(--color-text-muted)", flexShrink: 0 }} />
                  </div>
                </div>

                {/* Map area */}
                <div
                  style={{
                    height: "120px",
                    backgroundColor: "var(--color-surface-2)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Grid lines SVG overlay */}
                  <svg
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    preserveAspectRatio="none"
                  >
                    {[0, 20, 40, 60, 80, 100].map((y) => (
                      <line key={`h${y}`} x1="0" y1={`${y}%`} x2="100%" y2={`${y}%`} stroke="var(--color-border)" strokeWidth="0.5" />
                    ))}
                    {[0, 16.67, 33.33, 50, 66.67, 83.33, 100].map((x) => (
                      <line key={`v${x}`} x1={`${x}%`} y1="0" x2={`${x}%`} y2="100%" stroke="var(--color-border)" strokeWidth="0.5" />
                    ))}
                  </svg>

                  {/* Faded competitor pin 1 */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: "55%",
                      left: "30%",
                      transform: "translate(-50%, -50%)",
                      opacity: 0.4,
                    }}
                  >
                    <MapPin size={18} style={{ color: "var(--color-text-muted)" }} />
                  </div>

                  {/* Faded competitor pin 2 */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: "35%",
                      left: "70%",
                      transform: "translate(-50%, -50%)",
                      opacity: 0.4,
                    }}
                  >
                    <MapPin size={18} style={{ color: "var(--color-text-muted)" }} />
                  </div>

                  {/* Center pin */}
                  <div
                    style={{
                      position: "absolute",
                      top: "40%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <MapPin size={28} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                    <span
                      style={{
                        backgroundColor: "var(--color-surface)",
                        border: "1px solid var(--color-accent-border)",
                        borderRadius: "var(--radius-sm)",
                        padding: "2px 6px",
                        fontSize: "0.65rem",
                        color: "var(--color-accent)",
                        whiteSpace: "nowrap",
                        marginTop: "2px",
                      }}
                    >
                      Chandan Chaudhary
                    </span>
                  </div>
                </div>

                {/* Local Pack Listing 1 — highlighted */}
                <div
                  style={{
                    padding: "0.625rem 1rem",
                    borderBottom: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    backgroundColor: "rgba(108,99,255,0.05)",
                    borderLeft: "3px solid var(--color-accent)",
                  }}
                >
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "#fff" }}>1</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        color: "var(--color-text-primary)",
                        marginBottom: "0.1rem",
                      }}
                    >
                      Chandan Chaudhary
                    </p>
                    <p style={{ fontSize: "0.7rem", color: "var(--color-text-muted)" }}>
                      SEO Consultant · Hyderabad
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", flexShrink: 0 }}>
                    <span style={{ fontSize: "0.65rem", color: "var(--color-accent)" }}>★★★★★</span>
                    <span style={{ fontSize: "0.7rem", color: "var(--color-text-muted)" }}>5.0</span>
                  </div>
                  <span style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", flexShrink: 0 }}>0.0 mi</span>
                </div>

                {/* Local Pack Listing 2 */}
                <div
                  style={{
                    padding: "0.625rem 1rem",
                    borderBottom: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-surface-2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "var(--color-text-muted)" }}>2</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 500,
                        fontSize: "0.8rem",
                        color: "var(--color-text-secondary)",
                        marginBottom: "0.1rem",
                      }}
                    >
                      Competitor Agency
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", flexShrink: 0 }}>
                    <span style={{ fontSize: "0.65rem", color: "var(--color-accent)" }}>★★★</span>
                    <span style={{ fontSize: "0.65rem", color: "var(--color-text-muted)" }}>★★</span>
                    <span style={{ fontSize: "0.7rem", color: "var(--color-text-muted)" }}>4.2</span>
                  </div>
                </div>

                {/* Local Pack Listing 3 */}
                <div
                  style={{
                    padding: "0.625rem 1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-surface-2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "var(--color-text-muted)" }}>3</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 500,
                        fontSize: "0.8rem",
                        color: "var(--color-text-secondary)",
                        marginBottom: "0.1rem",
                      }}
                    >
                      Another Consultant
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", flexShrink: 0 }}>
                    <span style={{ fontSize: "0.65rem", color: "var(--color-accent)" }}>★★★★</span>
                    <span style={{ fontSize: "0.65rem", color: "var(--color-text-muted)" }}>★</span>
                    <span style={{ fontSize: "0.7rem", color: "var(--color-text-muted)" }}>4.7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: The Problem ── */}
      <section
        aria-label="Why local businesses stay invisible"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
            <p className="section-label">Why local businesses stay invisible</p>
            <h2 style={{ marginBottom: "1rem" }}>
              Being great at what you do isn&apos;t enough if nobody local can find you.
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
              Most local businesses rely on word-of-mouth and wait for referrals. Meanwhile competitors with weaker services but stronger local SEO dominate Google Maps, capture the local pack, and get the call first.
            </p>
          </div>

          <div
            className="grid-3"
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
        aria-label="How I approach Local SEO"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <div
                        className="grid-2"
          >
            {/* Left — pillars (60%) */}
            <div >
              <p className="section-label">How I approach Local SEO</p>
              <h2 style={{ marginBottom: "1rem", maxWidth: "52ch" }}>
                A local search system that makes you impossible to miss.
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.75,
                  marginBottom: "2.5rem",
                  maxWidth: "52ch",
                }}
              >
                Local SEO isn&apos;t just Google Maps. It&apos;s a complete local authority system — GBP optimization, citation consistency, local content, and review strategy working together.
              </p>

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

            {/* Right — Location Grid SVG (40%) */}
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
              <LocationGridSVG maxWidth={280} />
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
                Your brand at #1 in the local pack while competitors fall behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: What's Included ── */}
      <section
        aria-label="What's included in Local SEO"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div
                        className="grid-2"
          >
            {/* Left — 36% */}
            <div >
              <p className="section-label">Scope of work</p>
              <h2 style={{ marginBottom: "1rem", maxWidth: "52ch" }}>
                Everything in your Local SEO system.
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
                A complete local authority system built from the ground up.
              </p>

              {/* 3 stat cards stacked */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { num: "50+", label: "Local directories optimized" },
                  { num: "3 months", label: "To local pack entry" },
                  { num: "Weekly", label: "Rank tracking reports" },
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

            {/* Right — 2-col checklist */}
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
        aria-label="Local SEO process"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 3.5rem" }}>
            <p className="section-label">The process</p>
            <h2>How I build your local search dominance.</h2>
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
        aria-label="Local SEO results"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div
                        className="grid-2"
          >
            {/* Left — 40% */}
            <div >
              <p className="section-label">Proven results</p>
              <h2 style={{ marginBottom: "1.5rem", maxWidth: "52ch" }}>
                What local SEO impact looks like.
              </h2>
              <LocationGridSVG maxWidth={260} />
            </div>

            {/* Right — result rows */}
            <div>
              {[
                {
                  metric: "Top 3",
                  label: "Local Pack Entry",
                  desc: "Average time to achieve local pack rankings in primary target city within 90 days of implementation",
                },
                {
                  metric: "50+",
                  label: "Citations Built",
                  desc: "High-authority local directory citations established for consistent NAP signals across the web",
                },
                {
                  metric: "3X",
                  label: "Review Velocity",
                  desc: "Average increase in review generation rate after implementing systematic review strategy",
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
        aria-label="Is Local SEO right for you"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label">Fit check</p>
            <h2>Local SEO is right for you if...</h2>
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
                Right for you if...
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
                NOT right for you if...
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
        aria-label="Local SEO frequently asked questions"
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
                Common questions about Local SEO.
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
        aria-label="Start your local SEO"
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
              Start owning your local market today.
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-secondary)",
                marginBottom: "2.5rem",
                lineHeight: 1.75,
              }}
            >
              Your next client is searching locally right now. Let&apos;s make sure they find you first.
            </p>
            <div className="btn-group" style={{ justifyContent: "center", marginBottom: "1.5rem" }}>
              <Link href="/contact" className="btn btn-primary">
                Book a Local SEO Call
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
              {["No long-term contracts", "Weekly reporting", "Real rank tracking"].map((t) => (
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
