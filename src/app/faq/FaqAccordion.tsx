"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "./faqData";

/* Group labels by index range */
function getGroupLabel(index: number): string | null {
  if (index === 0) return "About the Process";
  if (index === 4) return "Pricing & Contracts";
  if (index === 7) return "Working Together";
  return null;
}

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div
      style={{
        borderTop: "1px solid var(--color-border)",
      }}
    >
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        const answerId = `faq-answer-${i}`;
        const groupLabel = getGroupLabel(i);

        return (
          <div key={i}>
            {/* Category group label */}
            {groupLabel && (
              <p
                className="section-label"
                style={{
                  marginTop: i === 0 ? "1.5rem" : "2rem",
                  marginBottom: "0.5rem",
                  fontSize: "0.625rem",
                }}
              >
                {groupLabel}
              </p>
            )}

            <div
              style={{ borderBottom: "1px solid var(--color-border)" }}
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={answerId}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  padding: "1.25rem 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    lineHeight: 1.5,
                  }}
                >
                  {faq.question}
                </span>
                {isOpen ? (
                  <ChevronUp
                    size={18}
                    style={{ color: "var(--color-accent)", flexShrink: 0 }}
                    aria-hidden="true"
                  />
                ) : (
                  <ChevronDown
                    size={18}
                    style={{ color: "var(--color-text-muted)", flexShrink: 0 }}
                    aria-hidden="true"
                  />
                )}
              </button>

              <div
                id={answerId}
                role="region"
                style={{
                  maxHeight: isOpen ? "600px" : "0",
                  overflow: "hidden",
                  transition: "max-height 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9375rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.75,
                    paddingBottom: "1.25rem",
                    maxWidth: "680px",
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
