import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Message Received — Chandan Chaudhary",
  description:
    "Your inquiry has been received. Chandan will personally review and respond within 24 hours.",
  path: "/thank-you",
  noIndex: true,
});

const testimonials = [
  {
    quote: "Turned SEO into our most predictable acquisition channel.",
    initials: "NV",
    name: "Nikunj Verma",
    company: "CEO · CutShort",
  },
  {
    quote: "$1.25M ARR in a year. Every action tied to revenue.",
    initials: "EW",
    name: "Eugene Woo",
    company: "CEO · Venngage",
  },
  {
    quote: "14K organic sessions in under a year, from zero.",
    initials: "NP",
    name: "Neeraj Parikh",
    company: "CEO · SP Tech USA",
  },
];

const nextSteps = [
  {
    number: "01",
    title: "Chandan reviews your brief",
    body: "Your message lands directly in his inbox — no support queue, no ticket system. He reads every one.",
    timeframe: "Within 24 hours",
  },
  {
    number: "02",
    title: "You get a short reply",
    body: "A few scoped questions if he needs more context, or a direct calendar link to book a call.",
    timeframe: "Within 48 hours",
  },
  {
    number: "03",
    title: "Free 30-min strategy call",
    body: "Real answers about your SEO situation, what's achievable, and whether working together makes sense.",
    timeframe: "No commitment",
  },
];

const valueActions = [
  {
    title: "Read the Venngage case study",
    body: "See exactly how $1.25M ARR was driven through SEO — the strategy, the content systems, and the results.",
    href: "/blog/venngage-125m-arr-seo",
    label: "Read case study →",
    external: false,
  },
  {
    title: "Connect on LinkedIn",
    body: "Weekly frameworks on SEO, AI automation, and organic growth for SaaS founders.",
    href: "https://www.linkedin.com/in/imchandanchaudhary/",
    label: "Connect on LinkedIn →",
    external: true,
  },
  {
    title: "Follow on X",
    body: "Short takes on what's actually working in organic search right now — updated regularly.",
    href: "https://x.com/theseoarchitect",
    label: "Follow @theseoarchitect →",
    external: true,
  },
];

export default function ThankYouPage() {
  return (
    <>
      <style>{`
        @keyframes checkIn {
          from { opacity: 0; transform: scale(0.6); }
          to   { opacity: 1; transform: scale(1); }
        }
        .check-icon {
          animation: checkIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .value-card {
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          background: var(--color-bg);
          transition: border-color var(--ease), box-shadow var(--ease);
        }
        .value-card:hover {
          border-color: var(--color-accent-border);
          box-shadow: var(--shadow-accent);
        }
        .value-card:focus-within {
          border-color: var(--color-accent);
        }
        @media (prefers-reduced-motion: reduce) {
          .check-icon { animation: none; }
        }
      `}</style>

      {/* ── SECTION 1 — HERO ── */}
      <section
        aria-label="Confirmation"
        style={{
          backgroundColor: "var(--color-bg)",
          borderBottom: "1px solid var(--color-border)",
          paddingBlock: "5rem 4rem",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "680px" }}>
          {/* Checkmark icon */}
          <div
            className="check-icon"
            aria-hidden="true"
            style={{
              width: "72px",
              height: "72px",
              margin: "0 auto 2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              aria-hidden="true"
            >
              <circle cx="36" cy="36" r="35" stroke="#6C63FF" strokeWidth="2" fill="rgba(108,99,255,0.1)" />
              <path
                d="M22 37l10 10 18-20"
                stroke="#6C63FF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="section-label" style={{ justifyContent: "center" }}>
            Message received
          </p>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              marginBottom: "1.25rem",
            }}
          >
            You&apos;re in. Expect a reply within 24 hours.
          </h1>

          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.75,
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            Chandan personally reviews every inquiry. If your project is a fit,
            you&apos;ll hear back with a clear next step — no sales pressure, no
            auto-responder black hole.
          </p>
        </div>
      </section>

      {/* ── SECTION 2 — WHAT HAPPENS NEXT ── */}
      <section
        aria-label="What happens next"
        style={{
          backgroundColor: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          paddingBlock: "4rem",
        }}
      >
        <div className="container">
          <p className="section-label" style={{ justifyContent: "center" }}>
            What happens next
          </p>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              maxWidth: "480px",
              marginInline: "auto",
            }}
          >
            Three steps, zero surprises
          </h2>

          {/* Timeline grid — horizontal on desktop, vertical on mobile */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
              position: "relative",
            }}
          >
            {nextSteps.map((step) => (
              <div
                key={step.number}
                style={{
                  backgroundColor: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {/* Step number */}
                <span
                  aria-hidden="true"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-accent-subtle)",
                    color: "var(--color-accent)",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {step.number}
                </span>

                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    marginBottom: 0,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                    flexGrow: 1,
                  }}
                >
                  {step.body}
                </p>

                {/* Timeframe badge */}
                <span
                  style={{
                    display: "inline-flex",
                    alignSelf: "flex-start",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--color-accent)",
                    backgroundColor: "var(--color-accent-subtle)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "var(--radius-full)",
                    marginTop: "0.25rem",
                  }}
                >
                  {step.timeframe}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — SOCIAL PROOF ── */}
      <section
        aria-label="Client testimonials"
        style={{
          backgroundColor: "var(--color-bg)",
          borderBottom: "1px solid var(--color-border)",
          paddingBlock: "4rem",
        }}
      >
        <div className="container">
          <p className="section-label" style={{ justifyContent: "center" }}>
            You&apos;re in good company
          </p>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              maxWidth: "480px",
              marginInline: "auto",
            }}
          >
            What past clients say
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {testimonials.map((t) => (
              <figure
                key={t.initials}
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  padding: "1.75rem",
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                {/* Quote mark */}
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.5rem",
                    lineHeight: 1,
                    color: "var(--color-accent)",
                    opacity: 0.5,
                    display: "block",
                  }}
                >
                  &ldquo;
                </span>

                <blockquote
                  style={{
                    fontSize: "1rem",
                    color: "var(--color-text-primary)",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    margin: 0,
                    flexGrow: 1,
                  }}
                >
                  {t.quote}
                </blockquote>

                <figcaption
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    borderTop: "1px solid var(--color-border)",
                    paddingTop: "1rem",
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-accent-subtle)",
                      color: "var(--color-accent)",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                        lineHeight: 1.3,
                        margin: 0,
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--color-text-muted)",
                        margin: 0,
                        lineHeight: 1.3,
                      }}
                    >
                      {t.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — WHILE YOU WAIT ── */}
      <section
        aria-label="Useful next steps"
        style={{
          backgroundColor: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          paddingBlock: "4rem",
        }}
      >
        <div className="container">
          <p className="section-label" style={{ justifyContent: "center" }}>
            While you wait
          </p>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              maxWidth: "480px",
              marginInline: "auto",
            }}
          >
            A few things worth your time
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {valueActions.map((action) => (
              <div key={action.href} className="value-card">
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    marginBottom: "0.625rem",
                  }}
                >
                  {action.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "1.25rem",
                  }}
                >
                  {action.body}
                </p>
                {action.external ? (
                  <a
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${action.label} — opens in new tab`}
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      minHeight: "48px",
                      transition: "color var(--ease-fast)",
                    }}
                    className="hover:text-[var(--color-accent-hover)]"
                  >
                    {action.label}
                  </a>
                ) : (
                  <Link
                    href={action.href}
                    aria-label={action.label}
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      minHeight: "48px",
                      transition: "color var(--ease-fast)",
                    }}
                    className="hover:text-[var(--color-accent-hover)]"
                  >
                    {action.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — SECONDARY CTA ── */}
      <section
        aria-label="Book a call"
        style={{
          backgroundColor: "var(--color-bg)",
          paddingBlock: "4rem",
        }}
      >
        <div className="container" style={{ maxWidth: "600px" }}>
          <div
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "2.5rem",
              textAlign: "center",
            }}
          >
            <p className="section-label" style={{ justifyContent: "center" }}>
              Can&apos;t wait?
            </p>
            <h2
              style={{
                fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
                marginBottom: "0.875rem",
              }}
            >
              Have an urgent need? Book directly.
            </h2>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: "400px",
                marginInline: "auto",
              }}
            >
              Skip the wait and pick a time that works for you. 30 minutes,
              free, no pitch.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{
                fontSize: "1rem",
                padding: "1rem 2rem",
                display: "inline-flex",
              }}
              aria-label="Book a free strategy call with Chandan Chaudhary"
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
