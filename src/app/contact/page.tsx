import type { Metadata } from "next";
import {
  Mail,
  Linkedin,
  MapPin,
  Clock,
  User,
  Building2,
  MessageSquare,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  path: "/contact",
});

const steps = [
  {
    number: "1",
    title: "You'll get a calendar link",
    desc: "Pick a 30-minute slot that works for you.",
  },
  {
    number: "2",
    title: "We'll talk about your situation",
    desc: "Where you are, where you want to go, what's blocking you.",
  },
  {
    number: "3",
    title: "I'll give you my honest take",
    desc: "Whether that's working together or pointing you in the right direction.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        aria-label="Contact page header"
        style={{
          backgroundColor: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          paddingTop: "8rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <p className="section-label">Get in touch</p>
          <h1 style={{ marginBottom: "1.25rem" }}>
            Let&apos;s talk about
            <br />your organic growth.
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.75,
              maxWidth: "560px",
            }}
          >
            I take on a limited number of SaaS clients each quarter. If you&apos;re
            building an organic acquisition channel and want it done right — this is
            the right first step.
          </p>
        </div>
      </section>

      {/* ── Two Column Layout ── */}
      <section aria-label="Contact form and details" className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "3fr 2fr",
              gap: "4rem",
              alignItems: "start",
            }}
            className="max-md:grid-cols-1 max-md:gap-12"
          >
            {/* Left — Contact Form */}
            <div style={{ position: "relative", overflow: "hidden" }}>
              <h2
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  marginBottom: "2rem",
                }}
              >
                Send a message
              </h2>

              <form
                aria-label="Contact form"
                style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="form-label">
                    Your name <span aria-hidden="true" style={{ color: "var(--color-accent)" }}>*</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <User
                      size={16}
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: "0.875rem",
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                        zIndex: 1,
                        color: "var(--color-text-muted)",
                      }}
                    />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="form-input"
                      placeholder="Raj Sharma"
                      style={{ paddingLeft: "2.75rem" }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="form-label">
                    Your email <span aria-hidden="true" style={{ color: "var(--color-accent)" }}>*</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <Mail
                      size={16}
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: "0.875rem",
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                        zIndex: 1,
                        color: "var(--color-text-muted)",
                      }}
                    />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="form-input"
                      placeholder="raj@yourcompany.com"
                      style={{ paddingLeft: "2.75rem" }}
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="form-label">
                    Your company / website
                  </label>
                  <div style={{ position: "relative" }}>
                    <Building2
                      size={16}
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: "0.875rem",
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                        zIndex: 1,
                        color: "var(--color-text-muted)",
                      }}
                    />
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="form-input"
                      placeholder="yourcompany.com"
                      style={{ paddingLeft: "2.75rem" }}
                    />
                  </div>
                </div>

                {/* SaaS Stage */}
                <div>
                  <label htmlFor="stage" className="form-label">
                    What stage is your SaaS?
                  </label>
                  <select id="stage" name="stage" className="form-select">
                    <option value="">Select a stage</option>
                    <option value="pre-revenue">Pre-revenue</option>
                    <option value="0-100k">$0–100K ARR</option>
                    <option value="100k-1m">$100K–1M ARR</option>
                    <option value="1m+">$1M+ ARR</option>
                  </select>
                </div>

                {/* Challenge */}
                <div>
                  <label htmlFor="challenge" className="form-label">
                    What&apos;s your biggest organic growth challenge right now?
                  </label>
                  <div style={{ position: "relative" }}>
                    <MessageSquare
                      size={16}
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: "0.875rem",
                        top: "0.875rem",
                        pointerEvents: "none",
                        zIndex: 1,
                        color: "var(--color-text-muted)",
                      }}
                    />
                    <textarea
                      id="challenge"
                      name="challenge"
                      rows={4}
                      className="form-textarea"
                      placeholder="Tell me about your current situation and what you're trying to achieve..."
                      style={{ paddingLeft: "2.75rem" }}
                    />
                  </div>
                </div>

                {/* How did you find me */}
                <div>
                  <label htmlFor="source" className="form-label">
                    How did you find me?
                  </label>
                  <input
                    id="source"
                    name="source"
                    type="text"
                    className="form-input"
                    placeholder="Google, LinkedIn, referral..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Send Message
                </button>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    color: "var(--color-text-muted)",
                    textAlign: "center",
                  }}
                >
                  No pitch decks. No sales pressure. Just a direct conversation.
                </p>
              </form>

              {/* Decorative @ symbol */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: "-1rem",
                  bottom: "-2rem",
                  fontSize: "12rem",
                  opacity: 0.025,
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-display)",
                  pointerEvents: "none",
                  userSelect: "none",
                  lineHeight: 1,
                }}
              >
                @
              </span>
            </div>

            {/* Right — Contact Info */}
            <div>
              {/* What happens next */}
              <div style={{ marginBottom: "2.5rem" }}>
                <p className="section-label">What happens after you book</p>

                <ol
                  style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                  role="list"
                >
                  {steps.map((step) => (
                    <li key={step.number} style={{ display: "flex", gap: "1rem" }}>
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "var(--radius-full)",
                          backgroundColor: "var(--color-accent-subtle)",
                          border: "1px solid var(--color-accent-border)",
                          color: "var(--color-accent)",
                          fontFamily: "var(--font-display)",
                          fontSize: "0.8125rem",
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      >
                        {step.number}
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.9375rem",
                            fontWeight: 600,
                            color: "var(--color-text-primary)",
                            marginBottom: "0.25rem",
                          }}
                        >
                          {step.title}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.875rem",
                            color: "var(--color-text-secondary)",
                            lineHeight: 1.6,
                          }}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="divider" style={{ marginBottom: "2rem" }} />

              {/* Direct contact */}
              <address
                className="not-italic"
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <a
                  href="mailto:ckchandan928@gmail.com"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9375rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  <Mail size={16} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
                  ckchandan928@gmail.com
                </a>

                <a
                  href="https://linkedin.com/in/chandan-chaudhary-seo"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9375rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  <Linkedin size={16} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
                  linkedin.com/in/chandan-chaudhary-seo
                </a>

                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9375rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  <MapPin size={16} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
                  Hyderabad, India · Available for remote work globally
                </span>

                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                  }}
                >
                  <Clock size={16} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
                  <span className="badge badge-muted">Within 24 hours</span>
                </span>
              </address>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
