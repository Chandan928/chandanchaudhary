import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { FaqAccordion } from "./FaqAccordion";

export const metadata: Metadata = buildMetadata({
  titleAbsolute: "SEO Consulting FAQ for SaaS and AI Companies",
  description:
    "Answers to common questions on SEO consulting, process, timelines, and how SaaS and AI companies drive growth through search.",
  path: "/faq",
});

/* All 10 Q&A pairs for faqSchema (Google FAQ rich results) */
const faqItems = [
  {
    question: "How is this different from hiring an SEO agency?",
    answer:
      "Agencies spread their best people thin across 20+ clients. When you work with me, you get one person — senior, focused, and accountable for outcomes. I don't hand your account to a junior analyst. Every strategy, every decision, every deliverable comes from me.",
  },
  {
    question: "How long before I see results?",
    answer:
      "For technical SEO and on-page work — 6 to 10 weeks for measurable movement. For content strategy and topical authority — 3 to 6 months for compounding results. I'll be honest with you from day one about what's realistic for your specific situation.",
  },
  {
    question: "What does the onboarding process look like?",
    answer:
      "After we book a call, I spend the first two weeks doing a deep audit of your current organic performance, business model, and competitive landscape. Week three, I present a prioritized 90-day roadmap. Week four, we start executing. No wasted time, no endless discovery.",
  },
  {
    question: "Can you work with our existing content team?",
    answer:
      "Yes — and this is often the most effective model. I design the strategy and frameworks, your team executes the content, and I review and optimize. It keeps costs lower and builds internal capability at the same time.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "The Clarity Sprint is a one-time engagement — no strings attached. For ongoing work, I ask for a 3-month minimum so we have enough time to build momentum and show measurable results. After that, you can continue or stop with 30 days notice.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "All pricing is project-based, never time-based. Basic Clarity Sprint is $1,500 one-time. Standard SEO Foundation is $2,000/month with a 3-month minimum. Growth Revenue Partner is $2,500/month with a 6-month minimum. This way we're aligned on outcomes, not hours.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "For one-time engagements: full refund within 7 days if deliverables haven't started. For ongoing retainers: cancel with 30 days notice after the minimum commitment period. I'd rather earn your continued business than lock you into a contract.",
  },
  {
    question: "Do I need a big team to work with you?",
    answer:
      "No. I've worked with solo founders and teams of 50+. I adapt to your resources. I can work independently or alongside your existing marketing team. I'll use your internal resources where it makes sense and flag where you might need to hire.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. I've worked remotely with teams in the US, UAE, Canada, and across Europe. Time zones have never been a problem — I'm responsive and async-friendly.",
  },
  {
    question: "How do I know if I'm ready to work with you?",
    answer:
      "If you're a SaaS founder who has tried SEO and it hasn't worked, or you're starting fresh and want to do it right from the beginning — you're ready. If you're looking for someone to just publish blogs and hope for the best, I'm probably not the right fit.",
  },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd schema={faqSchema(faqItems)} />

      {/* ── SECTION 1 — HERO ── */}
      <section
        aria-label="FAQ page header"
        style={{
          backgroundColor: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          paddingBlock: "4rem",
          paddingTop: "8rem",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "680px", textAlign: "center" }}
        >
          <p className="section-label">FAQ</p>

          <h1 style={{ marginBottom: "1.25rem" }}>
            Questions founders ask before we work together.
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            Everything you need to know before booking a call. If your question
            isn&apos;t here — book a free 30-minute call and ask directly.
          </p>

          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <span className="badge badge-accent">10 Questions</span>
            <span className="badge badge-muted">Updated March 2026</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — FAQ ACCORDION ── */}
      <section
        aria-label="Frequently asked questions"
        style={{
          backgroundColor: "var(--color-bg)",
          paddingBlock: "5rem",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "760px", margin: "0 auto" }}
        >
          <FaqAccordion />
        </div>
      </section>

      {/* ── SECTION 3 — STILL HAVE QUESTIONS CARD ── */}
      <section
        aria-label="Still have questions"
        style={{
          backgroundColor: "var(--color-bg)",
          paddingBlock: "2rem",
          paddingBottom: "5rem",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "560px", margin: "0 auto" }}
        >
          <div
            className="card"
            style={{ textAlign: "center", padding: "2.5rem" }}
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
                margin: "0 auto 1rem",
              }}
              aria-hidden="true"
            >
              <HelpCircle size={20} />
            </div>

            <h3
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "var(--color-text-primary)",
                marginBottom: "0.75rem",
              }}
            >
              Still have questions?
            </h3>

            <p
              style={{
                fontSize: "0.9375rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.75,
              }}
            >
              Book a free 30-minute call. No pitch, no pressure. Just an honest
              conversation about whether I can help.
            </p>

            <Link
              href="/contact"
              className="btn btn-primary"
              style={{
                display: "inline-block",
                marginTop: "1.25rem",
                borderRadius: "var(--radius-md)",
              }}
            >
              Book a Free Call
            </Link>

            <p
              style={{
                fontSize: "0.8125rem",
                color: "var(--color-text-muted)",
                marginTop: "0.875rem",
              }}
            >
              or email{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                style={{
                  color: "var(--color-accent)",
                  textDecoration: "none",
                }}
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — CTA ── */}
      <section
        aria-label="Get started"
        style={{
          backgroundColor: "var(--color-accent-subtle)",
          borderTop: "1px solid var(--color-accent-border)",
          paddingBlock: "4rem",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "560px", margin: "0 auto" }}>
            <p className="section-label">Get started</p>
            <h2 style={{ marginBottom: "1rem" }}>Ready to get started?</h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
              }}
            >
              No more questions needed — just a 30-minute call to see if
              we&apos;re a good fit.
            </p>

            <Link
              href="/contact"
              className="btn btn-primary"
              style={{
                display: "inline-block",
                borderRadius: "var(--radius-md)",
                marginBottom: "2rem",
              }}
            >
              Book a Free Strategy Call
            </Link>

            {/* Trust signals */}
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {[
                "Response within 24hrs",
                "No long-term contract",
                "Free first call",
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
      </section>
    </>
  );
}
