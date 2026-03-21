"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/lib/metadata";
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Send,
  Lock,
  MessageSquare,
  DollarSign,
  Clock,
  Linkedin,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  stage: string;
  challenge: string;
  source: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  challenge?: string;
  submit?: string;
}

const emptyForm: FormData = {
  name: "",
  email: "",
  company: "",
  stage: "",
  challenge: "",
  source: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = "Please enter your full name (min 2 characters)";
  }
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid work email address";
  }
  if (!data.challenge.trim() || data.challenge.trim().length < 20) {
    errors.challenge = "Please describe your challenge in at least 20 characters";
  }
  return errors;
}

const microTestimonials = [
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

const callCoverageItems = [
  "Your current SEO performance and biggest gaps",
  "What's realistically achievable in 90 days",
  "Which service engagement fits your situation",
  "Clear next steps — whether we work together or not",
];

const pricingRows = [
  { tier: "Clarity Sprint", price: "$1,500 one-time" },
  { tier: "SEO Foundation", price: "$2,000 / month" },
  { tier: "Revenue Partner", price: "$2,500 / month" },
];

const objections = [
  {
    Icon: MessageSquare,
    title: "Not sure if you're ready?",
    body: "That's exactly what the call is for. We'll figure out if and how I can help — even if you're still 3 months away from being ready to hire.",
  },
  {
    Icon: DollarSign,
    title: "Worried about budget?",
    body: "The Clarity Sprint starts at $1,500 one-time. No monthly commitment, no long contract. Just a clear 90-day SEO roadmap you can execute yourself or with me.",
  },
  {
    Icon: Clock,
    title: "Too busy right now?",
    body: "30 minutes. That's all it takes. I'll do the work before the call so our time together is focused and valuable from minute one.",
  },
];

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [shaking, setShaking] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      setTimeout(() => {
        const firstKey = Object.keys(newErrors)[0];
        const el = document.getElementById(firstKey);
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
        el?.focus();
      }, 50);
      return;
    }
    setIsSubmitting(true);
    setErrors({});
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }
      router.push('/thank-you');
    } catch (error) {
      setErrors({
        submit:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again or email ${siteConfig.email} directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* ── SECTION 1 — HERO ── */}
      <section
        aria-label="Contact hero"
        style={{
          backgroundColor: "var(--color-bg)",
          borderBottom: "1px solid var(--color-border)",
          paddingBlock: "4rem",
        }}
      >
        <div className="container">
          <div className="hero-grid">
            {/* Left 55% */}
            <div>
              <p className="section-label">Let&apos;s work together</p>
              <h1 style={{ marginBottom: "1.25rem" }}>
                Your organic channel should drive revenue. Let&apos;s build
                that.
              </h1>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.75,
                  maxWidth: "520px",
                }}
              >
                Book a free 30-minute strategy call. I&apos;ll review your
                current SEO situation live and tell you exactly what I&apos;d
                prioritize in your position. No pitch. No pressure. Just
                clarity.
              </p>

              {/* Trust signals */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1.5rem",
                  marginTop: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                {[
                  "Free 30-minute call",
                  "Response within 24 hours",
                  "No long-term contract required",
                ].map((signal) => (
                  <div
                    key={signal}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                    }}
                  >
                    <CheckCircle2
                      size={14}
                      aria-hidden="true"
                      style={{ color: "var(--color-accent)", flexShrink: 0 }}
                    />
                    <span
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      {signal}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="/contact#form"
                className="btn btn-primary"
                style={{ fontSize: "1.0625rem", padding: "1rem 2rem" }}
              >
                Book a Free Strategy Call →
              </a>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--color-text-muted)",
                  marginTop: "0.875rem",
                }}
              >
                or scroll down to send a message
              </p>
            </div>

            {/* Right 45% — availability card */}
            <div
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "1.5rem",
                boxShadow: "var(--shadow-md)",
              }}
            >
              {/* Top row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.25rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(16,185,129,0.9)",
                      display: "inline-block",
                      flexShrink: 0,
                      animation: "pulse 2s ease infinite",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    Available for new clients
                  </span>
                </div>
                <span className="badge badge-accent">Q2 2026</span>
              </div>

              <div className="divider" style={{ marginBottom: "0.25rem" }} />

              {/* Micro-testimonials */}
              {microTestimonials.map((t, i) => (
                <div
                  key={t.initials}
                  style={{
                    paddingBlock: "0.875rem",
                    borderBottom:
                      i < microTestimonials.length - 1
                        ? "1px solid var(--color-border)"
                        : "none",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--color-text-secondary)",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                      marginBottom: "0.5rem",
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <div
                      aria-hidden="true"
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-accent-subtle)",
                        color: "var(--color-accent)",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {t.initials}
                    </div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--color-text-primary)",
                        fontWeight: 600,
                      }}
                    >
                      {t.name}{" "}
                      <span
                        style={{
                          color: "var(--color-text-muted)",
                          fontWeight: 400,
                        }}
                      >
                        {t.company}
                      </span>
                    </span>
                  </div>
                </div>
              ))}

              {/* Bottom stats bar */}
              <div
                style={{
                  backgroundColor: "var(--color-surface-2)",
                  borderTop: "1px solid var(--color-border)",
                  margin: "0 -1.5rem -1.5rem",
                  padding: "1rem 1.5rem",
                  borderRadius: "0 0 var(--radius-xl) var(--radius-xl)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-text-muted)",
                  }}
                >
                  22+ brands served
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-accent)",
                    fontWeight: 600,
                  }}
                >
                  $5M+ ARR impact
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — CONTACT FORM ── */}
      <section
        id="form"
        aria-label="Contact form"
        style={{
          backgroundColor: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          paddingBlock: "5rem",
        }}
      >
        <div className="container">
          <div className="grid-solution">
            {/* Left 58% — form */}
            <div>
              <>
                  <p className="section-label">Send a message</p>
                  <h2 style={{ marginBottom: "0.75rem" }}>
                    Tell me about your situation.
                  </h2>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.7,
                      marginBottom: "2rem",
                    }}
                  >
                    The more context you give, the more useful my response will
                    be. Most replies go out within a few hours.
                  </p>

                  <form
                    aria-label="Contact form"
                    onSubmit={handleSubmit}
                    noValidate
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.25rem",
                    }}
                  >
                    {/* Name + Email — two columns */}
                    <div className="form-two-col">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="form-label">
                          Your name{" "}
                          <span
                            aria-hidden="true"
                            style={{ color: "var(--color-accent)" }}
                          >
                            *
                          </span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          className="form-input"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          aria-invalid={!!errors.name}
                          aria-describedby={
                            errors.name ? "name-error" : undefined
                          }
                          style={
                            errors.name
                              ? {
                                  borderColor: "var(--color-error)",
                                }
                              : undefined
                          }
                        />
                        {errors.name && (
                          <div
                            id="name-error"
                            className="form-error"
                            role="alert"
                          >
                            <AlertCircle size={12} aria-hidden="true" />
                            {errors.name}
                          </div>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="form-label">
                          Work email{" "}
                          <span
                            aria-hidden="true"
                            style={{ color: "var(--color-accent)" }}
                          >
                            *
                          </span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className="form-input"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          aria-invalid={!!errors.email}
                          aria-describedby={
                            errors.email ? "email-error" : undefined
                          }
                          style={
                            errors.email
                              ? {
                                  borderColor: "var(--color-error)",
                                }
                              : undefined
                          }
                        />
                        {errors.email && (
                          <div
                            id="email-error"
                            className="form-error"
                            role="alert"
                          >
                            <AlertCircle size={12} aria-hidden="true" />
                            {errors.email}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="form-label">
                        Company / Website URL
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        className="form-input"
                        placeholder="acme.com"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Stage */}
                    <div>
                      <label htmlFor="stage" className="form-label">
                        What stage is your SaaS?
                      </label>
                      <div style={{ position: "relative" }}>
                        <select
                          id="stage"
                          name="stage"
                          className="form-select"
                          value={formData.stage}
                          onChange={handleChange}
                        >
                          <option value="">Select your stage...</option>
                          <option value="pre-revenue">Pre-revenue</option>
                          <option value="0-100k">$0–100K ARR</option>
                          <option value="100k-1m">$100K–1M ARR</option>
                          <option value="1m-5m">$1M–5M ARR</option>
                          <option value="5m+">$5M+ ARR</option>
                        </select>
                      </div>
                    </div>

                    {/* Challenge */}
                    <div>
                      <label htmlFor="challenge" className="form-label">
                        What&apos;s your biggest SEO challenge right now?{" "}
                        <span
                          aria-hidden="true"
                          style={{ color: "var(--color-accent)" }}
                        >
                          *
                        </span>
                      </label>
                      <textarea
                        id="challenge"
                        name="challenge"
                        rows={5}
                        required
                        className="form-textarea"
                        placeholder="Be specific — what have you tried, what's not working, what outcome are you trying to achieve? The more detail you give, the better I can help on the call."
                        value={formData.challenge}
                        onChange={handleChange}
                        aria-invalid={!!errors.challenge}
                        aria-describedby={
                          errors.challenge ? "challenge-error" : undefined
                        }
                        style={
                          errors.challenge
                            ? {
                                borderColor: "var(--color-error)",
                              }
                            : undefined
                        }
                      />
                      {errors.challenge && (
                        <div
                          id="challenge-error"
                          className="form-error"
                          role="alert"
                        >
                          <AlertCircle size={12} aria-hidden="true" />
                          {errors.challenge}
                        </div>
                      )}
                    </div>

                    {/* Source */}
                    <div>
                      <label htmlFor="source" className="form-label">
                        How did you find me?
                      </label>
                      <input
                        id="source"
                        name="source"
                        type="text"
                        className="form-input"
                        placeholder="LinkedIn, Google search, referral from..."
                        value={formData.source}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isSubmitting}
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        fontSize: "1rem",
                        padding: "1rem",
                        marginTop: "0.5rem",
                        animation: shaking ? "shake 0.5s ease" : "none",
                        opacity: isSubmitting ? 0.7 : 1,
                        cursor: isSubmitting ? "not-allowed" : "pointer",
                      }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && (
                        <Send
                          size={18}
                          aria-hidden="true"
                          style={{ marginLeft: "0.25rem" }}
                        />
                      )}
                    </button>

                    {errors.submit && (
                      <div
                        role="alert"
                        style={{
                          color: "rgba(239,68,68,0.85)",
                          fontSize: "0.875rem",
                          marginTop: "0.75rem",
                          padding: "0.75rem 1rem",
                          background: "rgba(239,68,68,0.06)",
                          border: "1px solid rgba(239,68,68,0.2)",
                          borderRadius: "var(--radius-md)",
                        }}
                      >
                        {errors.submit}
                      </div>
                    )}

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        marginTop: "0.75rem",
                      }}
                    >
                      <Lock
                        size={12}
                        aria-hidden="true"
                        style={{ color: "var(--color-text-muted)" }}
                      />
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--color-text-muted)",
                        }}
                      >
                        Your information is never shared or sold.
                      </span>
                    </div>
                  </form>
                </>
            </div>

            {/* Right 42% — value reinforcement (sticky) */}
            <div className="sticky-col" style={{ position: "sticky", top: "6rem" }}>
              {/* Call coverage */}
              <p className="section-label">What we&apos;ll cover on the call</p>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: "2rem",
                }}
              >
                {callCoverageItems.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.625rem",
                    }}
                  >
                    <ArrowRight
                      size={14}
                      aria-hidden="true"
                      style={{
                        color: "var(--color-accent)",
                        flexShrink: 0,
                        marginTop: "3px",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="divider" style={{ marginBottom: "1.5rem" }} />

              {/* Pricing preview */}
              <div
                style={{
                  backgroundColor: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.25rem",
                  marginBottom: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--color-text-muted)",
                    fontWeight: 600,
                    marginBottom: "0.75rem",
                  }}
                >
                  Investment overview
                </p>
                {pricingRows.map((row, i) => (
                  <div
                    key={row.tier}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingBlock: "0.625rem",
                      borderBottom:
                        i < pricingRows.length - 1
                          ? "1px solid var(--color-border)"
                          : "none",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-text-primary)",
                        fontWeight: 500,
                      }}
                    >
                      {row.tier}
                    </span>
                    <span
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-accent)",
                        fontWeight: 600,
                      }}
                    >
                      {row.price}
                    </span>
                  </div>
                ))}
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-text-muted)",
                    marginTop: "0.75rem",
                  }}
                >
                  Fees are project-based, never time-based.
                </p>
              </div>

              <div className="divider" style={{ marginBottom: "1.25rem" }} />

              {/* Direct contact */}
              <p
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--color-text-muted)",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                }}
              >
                Prefer email?
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-accent)",
                  fontWeight: 500,
                  display: "block",
                  transition: "text-decoration var(--ease-fast)",
                }}
                className="hover:underline"
              >
                {siteConfig.email}
              </a>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "0.75rem",
                }}
              >
                <Linkedin
                  size={16}
                  aria-hidden="true"
                  style={{ color: "var(--color-text-muted)", flexShrink: 0 }}
                />
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--color-text-secondary)",
                  }}
                  className="hover:text-[var(--color-accent)]"
                >
                  linkedin.com/in/chandan-chaudhary-seo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — OBJECTION HANDLING ── */}
      <section
        aria-label="Common concerns"
        style={{
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
          paddingBlock: "3rem",
        }}
      >
        <div className="container">
          <div className="grid-3">
            {objections.map(({ Icon, title, body }) => (
              <div key={title}>
                <div
                  aria-hidden="true"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-accent-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <Icon
                    size={20}
                    style={{ color: "var(--color-accent)" }}
                    aria-hidden="true"
                  />
                </div>
                <h3 style={{ marginBottom: "0.625rem" }}>{title}</h3>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — FINAL CTA ── */}
      <section
        aria-label="Final call to action"
        style={{
          backgroundColor: "var(--color-accent-subtle)",
          borderTop: "1px solid var(--color-accent-border)",
          paddingBlock: "4rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative quote mark */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            fontSize: "20rem",
            opacity: 0.03,
            fontFamily: "var(--font-display)",
            color: "var(--color-accent)",
            top: "-2rem",
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none",
            userSelect: "none",
            lineHeight: 1,
            zIndex: 0,
          }}
        >
          &ldquo;
        </span>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p className="section-label" style={{ justifyContent: "center" }}>
            Ready?
          </p>
          <h2
            style={{
              maxWidth: "640px",
              margin: "0 auto 1.25rem",
            }}
          >
            The best time to fix your SEO was 6 months ago. The second best
            time is now.
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-text-secondary)",
              maxWidth: "480px",
              margin: "0 auto 2rem",
              lineHeight: 1.75,
            }}
          >
            Every week without a proper SEO system is a week your competitors
            compound and you don&apos;t.
          </p>

          <a
            href="#form"
            className="btn btn-primary"
            style={{ fontSize: "1.0625rem", padding: "1rem 2.5rem" }}
          >
            Book a Free Strategy Call
          </a>

          <p style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
            or email{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              style={{
                color: "var(--color-text-muted)",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              {siteConfig.email}
            </a>
          </p>

          {/* Trust row */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              marginTop: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            {["Free first call", "No pitch or pressure", "Clarity guaranteed"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                  }}
                >
                  <CheckCircle2
                    size={12}
                    aria-hidden="true"
                    style={{ color: "var(--color-accent)" }}
                  />
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
