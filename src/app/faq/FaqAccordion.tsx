"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ── Data ── */

const categories = [
  {
    label: "About the process",
    items: [
      {
        id: "q1",
        question: "How is this different from hiring an SEO agency?",
        answer:
          "Agencies spread their best people thin across 20+ clients. When you work with me, you get one person — senior, focused, and accountable for outcomes. I don't hand your account to a junior analyst. Every strategy, every decision, every deliverable comes from me.",
      },
      {
        id: "q2",
        question: "How long before I see results?",
        answer:
          "For technical SEO and on-page work — 6 to 10 weeks for measurable movement. For content strategy and topical authority — 3 to 6 months for compounding results. I'll be honest with you from day one about what's realistic for your specific situation.",
      },
      {
        id: "q3",
        question: "What does the onboarding process look like?",
        answer:
          "After we book a call, I spend the first two weeks doing a deep audit of your current organic performance, business model, and competitive landscape. Week three, I present a prioritized 90-day roadmap. Week four, we start executing. No wasted time, no endless discovery.",
      },
      {
        id: "q4",
        question: "Can you work with our existing content team?",
        answer:
          "Yes — and this is often the most effective model. I design the strategy and frameworks, your team executes the content, and I review and optimize. It keeps costs lower and builds internal capability at the same time.",
      },
    ],
  },
  {
    label: "Pricing & contracts",
    items: [
      {
        id: "q5",
        question: "Do you require long-term contracts?",
        answer:
          "The Clarity Sprint is a one-time engagement — no strings attached. For ongoing work, I ask for a 3-month minimum so we have enough time to build momentum and show measurable results. After that, you can continue or stop with 30 days notice.",
      },
      {
        id: "q6",
        question: "How is pricing structured?",
        answer:
          "All pricing is project-based, never time-based. Basic Clarity Sprint is $1,500 one-time. Standard SEO Foundation is $2,000/month with a 3-month minimum. Growth Revenue Partner is $2,500/month with a 6-month minimum. This way we're aligned on outcomes, not hours.",
      },
      {
        id: "q7",
        question: "What's your refund policy?",
        answer:
          "For one-time engagements: full refund within 7 days if deliverables haven't started. For ongoing retainers: cancel with 30 days notice after the minimum commitment period. I'd rather earn your continued business than lock you into a contract.",
      },
    ],
  },
  {
    label: "Working together",
    items: [
      {
        id: "q8",
        question: "Do I need a big team to work with you?",
        answer:
          "No. I've worked with solo founders and teams of 50+. I adapt to your resources. I can work independently or alongside your existing marketing team. I'll use your internal resources where it makes sense and flag where you might need to hire.",
      },
      {
        id: "q9",
        question: "Do you work with international clients?",
        answer:
          "Yes. I've worked remotely with teams in the US, UAE, Canada, and across Europe. Time zones have never been a problem — I'm responsive and async-friendly.",
      },
      {
        id: "q10",
        question: "How do I know if I'm ready to work with you?",
        answer:
          "If you're a SaaS founder who has tried SEO and it hasn't worked, or you're starting fresh and want to do it right from the beginning — you're ready. If you're looking for someone to just publish blogs and hope for the best, I'm probably not the right fit.",
      },
    ],
  },
];

/* ── Component ── */

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <div>
      {categories.map((cat, catIdx) => (
        <div key={cat.label}>
          {/* Category label */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              marginBottom: "1rem",
              marginTop: catIdx === 0 ? 0 : "2.5rem",
            }}
          >
            {cat.label}
          </p>

          {/* Accordion items */}
          <dl>
            {cat.items.map((item) => {
              const isOpen = openId === item.id;
              const panelId = `panel-${item.id}`;
              const triggerId = `trigger-${item.id}`;

              return (
                <div
                  key={item.id}
                  style={{ borderBottom: "1px solid var(--color-border)" }}
                >
                  {/* Trigger */}
                  <dt>
                    <button
                      id={triggerId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(item.id)}
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "1.25rem 0",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        gap: "1rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: isOpen
                            ? "var(--color-accent)"
                            : "var(--color-text-primary)",
                          lineHeight: 1.4,
                          transition: "color 250ms ease",
                        }}
                      >
                        {item.question}
                      </span>

                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        style={{
                          flexShrink: 0,
                          color: isOpen
                            ? "var(--color-accent)"
                            : "var(--color-text-muted)",
                          transform: isOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          transition: "transform 250ms ease, color 250ms ease",
                        }}
                      />
                    </button>
                  </dt>

                  {/* Answer panel — max-height animation */}
                  <dd
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    style={{
                      maxHeight: isOpen ? "600px" : "0",
                      overflow: "hidden",
                      transition:
                        "max-height 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.75,
                        paddingBottom: "1.25rem",
                        maxWidth: "680px",
                      }}
                    >
                      {item.answer}
                    </p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      ))}
    </div>
  );
}
