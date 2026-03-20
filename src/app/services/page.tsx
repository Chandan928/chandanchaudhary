import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  MessageSquare,
  Globe,
  MapPin,
  Zap,
  Settings2,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Building2,
  BarChart3,
  Lock,
} from "lucide-react";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "SEO, GEO, AEO & AI Automation Services | Chandan Chaudhary",
  description:
    "Revenue-first SEO consulting services for SaaS teams. SEO strategy, GEO, AEO, Local SEO, AI automation, and Technical SEO — all tied to ARR and pipeline.",
  path: "/services",
});

const quickNavServices = [
  { Icon: TrendingUp, name: "SEO Strategy", href: "/services/seo" },
  { Icon: MessageSquare, name: "AEO", href: "/services/aeo" },
  { Icon: Globe, name: "GEO", href: "/services/geo" },
  { Icon: MapPin, name: "Local SEO", href: "/services/local-seo" },
  { Icon: Zap, name: "AI Automation", href: "/services/ai-automation" },
  { Icon: Settings2, name: "Technical SEO", href: "/services/technical-seo" },
];

const serviceCards = [
  {
    Icon: TrendingUp,
    name: "SEO Strategy & Execution",
    desc: "Full-funnel SEO built around your ICP. Topical authority, semantic content systems, and technical foundations — all mapped to revenue.",
    bullets: [
      "Revenue-intent keyword architecture",
      "Semantic SEO & topical authority",
      "Technical SEO foundation",
    ],
    badge: "$2,000/mo",
    href: "/services/seo",
  },
  {
    Icon: MessageSquare,
    name: "AEO — Answer Engine Optimization",
    desc: "Make your brand the answer AI gives. Optimize for ChatGPT, Perplexity, and Gemini — where your buyers are already researching.",
    bullets: [
      "AI platform visibility audit",
      "Structured answer optimization",
      "Citation source strategy",
    ],
    badge: "Custom scope",
    href: "/services/aeo",
  },
  {
    Icon: Globe,
    name: "GEO — Generative Engine Optimization",
    desc: "Get cited by AI, not just ranked by Google. Build entity authority so LLMs consistently reference your brand in generated answers.",
    bullets: [
      "Entity optimization",
      "Citation authority building",
      "AI visibility monitoring",
    ],
    badge: "Custom scope",
    href: "/services/geo",
  },
  {
    Icon: MapPin,
    name: "Local SEO",
    desc: "Dominate local search. Google Maps, local pack rankings, and citation authority that drives qualified local inbound.",
    bullets: [
      "Google Business Profile optimization",
      "Citation building & cleanup",
      "Review strategy",
    ],
    badge: "Custom scope",
    href: "/services/local-seo",
  },
  {
    Icon: Zap,
    name: "AI Automation for SEO",
    desc: "Stop doing manually what AI can do in seconds. Automate content briefs, keyword research, reporting, and internal linking.",
    bullets: [
      "Content brief automation",
      "Keyword clustering pipelines",
      "Reporting automation",
    ],
    badge: "Project-based",
    href: "/services/ai-automation",
  },
  {
    Icon: Settings2,
    name: "Technical SEO",
    desc: "Fix the foundation. Crawl optimization, Core Web Vitals, JS rendering, and site architecture for complex tech stacks.",
    bullets: [
      "Full technical SEO audit",
      "Core Web Vitals fixes",
      "JavaScript rendering",
    ],
    badge: "$1,500 one-time",
    href: "/services/technical-seo",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Audit",
    desc: "Deep analysis of your current situation. No assumptions — everything data-driven.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Prioritized roadmap tied to revenue outcomes. You know exactly what we're doing and why.",
  },
  {
    num: "03",
    title: "Execute",
    desc: "Implementation alongside your team. I stay until it's done, not until the doc is delivered.",
  },
  {
    num: "04",
    title: "Measure",
    desc: "Every initiative tracked against ARR, sign-ups, and pipeline — not rankings.",
  },
];

const pricingTiers = [
  {
    tier: "Clarity Sprint",
    price: "$1,500",
    period: "one-time · 2–3 weeks",
    bestFor: "Founders who need clarity before committing to execution",
    features: [
      "Revenue & market analysis",
      "Competitor gap mapping",
      "Keyword strategy mapped to buyer intent",
      "Clear prioritization framework",
      "90-day roadmap with KPIs",
    ],
    cta: "Get Started",
    ctaVariant: "btn-secondary",
    featured: false,
  },
  {
    tier: "SEO Foundation",
    price: "$2,000",
    period: "per month · 3-month minimum",
    bestFor: "Early-stage SaaS teams building their organic acquisition channel",
    features: [
      "Everything in Clarity Sprint",
      "Full strategy + execution system",
      "Core technical SEO fixes",
      "Content strategy & briefs",
      "Monthly reporting tied to growth metrics",
    ],
    cta: "Book a Call",
    ctaVariant: "btn-primary",
    featured: true,
  },
  {
    tier: "Revenue Growth Partner",
    price: "$2,500",
    period: "per month · 6-month minimum",
    bestFor: "Growth-stage SaaS scaling organic to a primary revenue channel",
    features: [
      "Everything in SEO Foundation",
      "Advanced technical SEO",
      "AI automation workflows",
      "CRO + SEO alignment",
      "Leadership-level reporting",
    ],
    cta: "Book a Call",
    ctaVariant: "btn-secondary",
    featured: false,
  },
];

const proofStats = [
  { Icon: TrendingUp, value: "$5M+", label: "Total ARR impact" },
  { Icon: Building2, value: "22+", label: "SaaS & tech brands" },
  { Icon: BarChart3, value: "160%+", label: "Average traffic growth" },
];

const testimonials = [
  {
    quote:
      "Chandan didn't just run our SEO — he built a system that compounded month over month. We went from 288K to 759K sessions in under two years. Revenue followed.",
    name: "Vijay Yalamanchili",
    title: "CEO, Keka HR",
    initials: "VY",
  },
  {
    quote:
      "He audited our site in week one and found issues our previous agency never mentioned. Within 6 months, organic sign-ups were up 232%. Genuinely rare.",
    name: "Nadya Khoja",
    title: "Chief Growth Officer, Venngage",
    initials: "NK",
  },
  {
    quote:
      "Post algorithm hit, we were down 40%. Chandan recovered us and took us to 4.3M monthly sessions. He understands technical SEO at a level most consultants don't.",
    name: "Ashok Reddy",
    title: "Head of Growth, GrabOn",
    initials: "AR",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd schema={personSchema()} />

      {/* ── Section 1: Hero ── */}
      <section
        aria-label="Services overview"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--color-bg)",
          paddingTop: "8rem",
          paddingBottom: "5rem",
          borderBottom: "1px solid var(--color-border)",
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
              "radial-gradient(ellipse at 70% 0%, var(--color-accent-subtle) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative" }}>
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "4rem" }}
            className="max-lg:flex-col"
          >
            {/* Left — 55% */}
            <div style={{ flex: "0 0 55%", maxWidth: "55%" }} className="max-lg:max-w-full">
              <p className="section-label">What I do</p>
              <h1 style={{ marginBottom: "1.25rem" }}>
                Six services. One goal:{" "}
                <span style={{ color: "var(--color-accent)" }}>organic revenue.</span>
              </h1>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.75,
                  maxWidth: "52ch",
                  marginBottom: "1.75rem",
                }}
              >
                Every service I offer is part of a connected growth system — built for SaaS teams
                that want organic to become a real acquisition channel. Not isolated tactics. A
                complete engine.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "0.625rem",
                  flexWrap: "wrap",
                  marginBottom: "2rem",
                }}
              >
                <span className="badge badge-accent">SaaS Focused</span>
                <span className="badge badge-accent">Revenue-First</span>
              </div>

              <div className="btn-group">
                <Link href="/contact" className="btn btn-primary">
                  Book a Free Strategy Call
                </Link>
                <Link href="#pricing" className="btn btn-secondary">
                  See pricing
                </Link>
              </div>
            </div>

            {/* Right — 45%, service quick-nav pills */}
            <div
              style={{ flex: "0 0 45%", maxWidth: "45%" }}
              className="max-lg:max-w-full max-lg:w-full"
            >
              <div className="grid-2">
                {quickNavServices.map(({ Icon, name, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="service-link-card"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-lg)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.875rem 1.25rem",
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    {/* Icon circle */}
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
                      <Icon size={16} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                    </div>

                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                        flex: 1,
                      }}
                    >
                      {name}
                    </span>

                    <ArrowRight
                      size={14}
                      aria-hidden="true"
                      style={{ color: "var(--color-text-muted)", flexShrink: 0 }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Why These Services ── */}
      <section
        aria-label="The connected system"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
            <p className="section-label">The connected system</p>
            <h2 style={{ marginBottom: "1rem" }}>
              These aren&apos;t six separate services. They&apos;re one growth engine.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.75,
                maxWidth: "58ch",
                margin: "0 auto",
              }}
            >
              Most consultants offer a menu of tactics. I offer a system. Each service connects to
              the others — technical SEO enables content, GEO amplifies SEO, AEO captures AI demand,
              automation scales execution. Together they compound.
            </p>
          </div>

          {/* System diagram SVG — hidden on mobile */}
          <svg
            viewBox="0 0 600 200"
            width="100%"
            className="decorative-svg"
            style={{ maxWidth: "640px", margin: "2.5rem auto 0", display: "block" }}
            aria-hidden="true"
          >
            {/* Connection lines */}
            <line x1="100" y1="100" x2="250" y2="100" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="155" y1="36" x2="265" y2="88" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="445" y1="36" x2="335" y2="88" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="500" y1="100" x2="350" y2="100" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="445" y1="164" x2="335" y2="112" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="155" y1="164" x2="265" y2="112" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="4 3" />

            {/* Center node */}
            <rect x="250" y="80" width="100" height="40" rx="8" fill="var(--color-accent-subtle)" stroke="var(--color-accent)" strokeWidth="1.5" />
            <text x="300" y="104" fontSize="11" fontWeight="600" fill="var(--color-accent)" textAnchor="middle" fontFamily="var(--font-body)">Your Growth</text>

            {/* SEO node */}
            <rect x="10" y="84" width="90" height="32" rx="6" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
            <text x="55" y="103" fontSize="9" fill="var(--color-text-secondary)" textAnchor="middle" fontFamily="var(--font-body)">SEO</text>

            {/* AEO node */}
            <rect x="110" y="20" width="90" height="32" rx="6" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
            <text x="155" y="39" fontSize="9" fill="var(--color-text-secondary)" textAnchor="middle" fontFamily="var(--font-body)">AEO</text>

            {/* GEO node */}
            <rect x="400" y="20" width="90" height="32" rx="6" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
            <text x="445" y="39" fontSize="9" fill="var(--color-text-secondary)" textAnchor="middle" fontFamily="var(--font-body)">GEO</text>

            {/* Local SEO node */}
            <rect x="500" y="84" width="90" height="32" rx="6" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
            <text x="545" y="103" fontSize="9" fill="var(--color-text-secondary)" textAnchor="middle" fontFamily="var(--font-body)">Local SEO</text>

            {/* AI Auto node */}
            <rect x="400" y="148" width="90" height="32" rx="6" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
            <text x="445" y="167" fontSize="9" fill="var(--color-text-secondary)" textAnchor="middle" fontFamily="var(--font-body)">AI Auto</text>

            {/* Tech SEO node */}
            <rect x="110" y="148" width="90" height="32" rx="6" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
            <text x="155" y="167" fontSize="9" fill="var(--color-text-secondary)" textAnchor="middle" fontFamily="var(--font-body)">Tech SEO</text>
          </svg>

          {/* Mobile-only service list */}
          <ul className="mobile-only" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', marginTop: '1.5rem' }}>
            {[
              { href: '/services/seo', label: 'SEO Strategy & Execution' },
              { href: '/services/aeo', label: 'AEO — Answer Engine Optimization' },
              { href: '/services/geo', label: 'GEO — Generative Engine Optimization' },
              { href: '/services/local-seo', label: 'Local SEO' },
              { href: '/services/ai-automation', label: 'AI Automation' },
              { href: '/services/technical-seo', label: 'Technical SEO' },
            ].map(s => (
              <li key={s.href}>
                <a href={s.href} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', fontSize: '0.9375rem', fontWeight: 500, padding: '0.75rem 0', borderBottom: '1px solid var(--color-border)', minHeight: '48px' }}>
                  → {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section 3: All 6 Services ── */}
      <section
        aria-label="All services"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem" }}>
            <p className="section-label">All services</p>
            <h2 style={{ marginBottom: "1rem" }}>Choose where to start.</h2>
            <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", lineHeight: 1.75 }}>
              Not sure which service fits your situation? Book a free call and I&apos;ll tell you
              exactly what I&apos;d prioritize.
            </p>
          </div>

          <div className="grid-3">
            {serviceCards.map(({ Icon, name, desc, bullets, badge, href }) => (
              <article
                key={href}
                className="card"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Large faint background icon */}
                <Icon
                  size={64}
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    color: "var(--color-accent)",
                    opacity: 0.04,
                    pointerEvents: "none",
                  }}
                />

                {/* Card top: icon */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-accent-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={24} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                  </div>
                </div>

                {/* Service name */}
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    marginBottom: "0.625rem",
                  }}
                >
                  {name}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "1rem",
                  }}
                >
                  {desc}
                </p>

                {/* Divider */}
                <div
                  aria-hidden="true"
                  style={{
                    height: "1px",
                    backgroundColor: "var(--color-border)",
                    margin: "0 0 1rem",
                  }}
                />

                {/* What's included */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-text-muted)",
                    marginBottom: "0.625rem",
                  }}
                >
                  What&apos;s included:
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.375rem",
                    flex: 1,
                  }}
                >
                  {bullets.map((bullet) => (
                    <div
                      key={bullet}
                      style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}
                    >
                      <CheckCircle2
                        size={12}
                        aria-hidden="true"
                        style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "3px" }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.8125rem",
                          color: "var(--color-text-secondary)",
                          lineHeight: 1.6,
                        }}
                      >
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Card bottom */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "1.25rem",
                  }}
                >
                  <span className="badge badge-muted">{badge}</span>
                  <Link
                    href={href}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      textDecoration: "none",
                    }}
                  >
                    Learn more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Process Strip ── */}
      <section
        aria-label="Engagement process"
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3.5rem" }}>
            <p className="section-label">How every engagement works</p>
            <h2 style={{ marginBottom: "1rem" }}>One process. Regardless of service.</h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.75,
              }}
            >
              Whether you hire me for SEO, GEO, or AI automation — the engagement follows the same
              proven framework.
            </p>
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
            {/* Dashed connecting line — desktop only */}
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
                {/* Step circle */}
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

                {/* Faint large number */}
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
                    maxWidth: "22ch",
                  }}
                >
                  {step.desc}
                </p>

                {/* Arrow between steps */}
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

      {/* ── Section 5: Pricing ── */}
      <section
        id="pricing"
        aria-label="Pricing"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 3rem" }}>
            <p className="section-label">Investment</p>
            <h2 style={{ marginBottom: "1rem" }}>Straightforward pricing. No surprises.</h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.75,
              }}
            >
              All fees are project-based, never time-based. This way we&apos;re aligned on outcomes
              — not hours.
            </p>
          </div>

          <div className="grid-pricing">
            {pricingTiers.map(
              ({ tier, price, period, bestFor, features, cta, ctaVariant, featured }) => (
                <div key={tier} style={{ position: "relative" }}>
                  {/* Most popular badge above featured card */}
                  {featured && (
                    <div
                      style={{
                        textAlign: "center",
                        marginBottom: "0.625rem",
                      }}
                    >
                      <span className="badge badge-accent">Most popular</span>
                    </div>
                  )}

                  <div
                    className="card"
                    style={{
                      padding: "2rem",
                      border: featured
                        ? "2px solid var(--color-accent)"
                        : "1px solid var(--color-border)",
                    }}
                  >
                    {/* Tier name */}
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--color-text-muted)",
                        marginBottom: "1rem",
                      }}
                    >
                      {tier}
                    </p>

                    {/* Price */}
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "2.5rem",
                        fontWeight: 700,
                        color: "var(--color-text-primary)",
                        lineHeight: 1,
                        marginBottom: "0.375rem",
                      }}
                    >
                      {price}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        color: "var(--color-text-muted)",
                        marginBottom: "0",
                      }}
                    >
                      {period}
                    </p>

                    {/* Divider */}
                    <div
                      aria-hidden="true"
                      style={{
                        height: "1px",
                        backgroundColor: "var(--color-border)",
                        margin: "1.25rem 0",
                      }}
                    />

                    {/* Best for */}
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "var(--color-text-muted)",
                        marginBottom: "0.375rem",
                      }}
                    >
                      Best for:
                    </p>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.65,
                        marginBottom: "1.25rem",
                      }}
                    >
                      {bestFor}
                    </p>

                    {/* Feature list */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                      {features.map((feature) => (
                        <div
                          key={feature}
                          style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}
                        >
                          <CheckCircle2
                            size={14}
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
                              lineHeight: 1.6,
                            }}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className={`btn ${ctaVariant}`}
                      style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}
                    >
                      {cta}
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Contract note */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              marginTop: "1.5rem",
            }}
          >
            <Lock size={14} aria-hidden="true" style={{ color: "var(--color-text-muted)" }} />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                color: "var(--color-text-muted)",
              }}
            >
              No long-term contracts on first engagement. Cancel with 30 days notice after minimum
              period.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 6: Proof Strip ── */}
      <section
        aria-label="Results"
        style={{
          backgroundColor: "var(--color-surface)",
          paddingBlock: "3rem",
        }}
      >
        <div className="container">
          <div className="grid-3">
            {proofStats.map(({ Icon, value, label }, i) => (
              <div
                key={label}
                style={{
                  textAlign: "center",
                  padding: "2rem",
                  borderRight:
                    i < proofStats.length - 1
                      ? "1px solid var(--color-border)"
                      : "none",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    backgroundColor: "var(--color-accent-subtle)",
                    borderRadius: "50%",
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem",
                  }}
                >
                  <Icon size={24} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    lineHeight: 1,
                    marginBottom: "0.375rem",
                  }}
                >
                  {value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7: Testimonials ── */}
      <section
        aria-label="Client testimonials"
        className="section"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "480px", margin: "0 auto 3rem" }}>
            <p className="section-label">Client results</p>
            <h2>What founders say.</h2>
          </div>

          <div className="grid-3">
            {testimonials.map(({ quote, name, title, initials }) => (
              <article
                key={name}
                className="card"
                style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
              >
                {/* Quote mark */}
                <p
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "3rem",
                    fontWeight: 700,
                    color: "var(--color-accent)",
                    opacity: 0.3,
                    lineHeight: 1,
                    marginBottom: "-0.5rem",
                  }}
                >
                  &ldquo;
                </p>

                <blockquote
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.75,
                    flex: 1,
                    fontStyle: "normal",
                  }}
                >
                  {quote}
                </blockquote>

                <cite
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontStyle: "normal",
                  }}
                >
                  {/* Avatar initials */}
                  <div
                    aria-hidden="true"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-accent-subtle)",
                      border: "1px solid var(--color-accent-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--color-accent)",
                      }}
                    >
                      {initials}
                    </span>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        fontSize: "0.9375rem",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8125rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {title}
                    </p>
                  </div>
                </cite>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 8: CTA ── */}
      <section
        aria-label="Call to action"
        className="section"
        style={{
          backgroundColor: "var(--color-accent-subtle)",
          borderTop: "1px solid var(--color-accent-border)",
        }}
      >
        <div
          className="container"
          style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto" }}
        >
          <h2 style={{ marginBottom: "1rem" }}>
            Not sure which service fits your situation?
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
            }}
          >
            Book a free 30-minute call. I&apos;ll review your current situation and tell you exactly
            what I&apos;d prioritize — no pitch, no pressure.
          </p>

          <Link
            href="/contact"
            className="btn btn-primary"
            style={{ display: "inline-flex", marginBottom: "1rem" }}
          >
            Book a Free Strategy Call
          </Link>

          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
            or email{" "}
            <a href={`mailto:${siteConfig.email}`} style={{ color: "var(--color-accent)" }}>
              {siteConfig.email}
            </a>
          </p>

          {/* Trust signals */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            {["Free first call", "Response within 24hrs", "No long-term contract"].map((t) => (
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
      </section>
    </>
  );
}
