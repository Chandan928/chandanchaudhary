import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { FaqAccordion } from "./FaqAccordion";
import { faqs } from "./faqData";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        schema={faqSchema(
          faqs.map((f) => ({ question: f.question, answer: f.answer }))
        )}
      />

      {/* ── Hero ── */}
      <section
        aria-label="FAQ page header"
        style={{
          backgroundColor: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          paddingTop: "8rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <p className="section-label">Got questions</p>

          {/* H1 with HelpCircle icon in a flex row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.25rem",
            }}
          >
            <h1 style={{ marginBottom: 0 }}>
              Questions founders ask
              <br />before we work together.
            </h1>
            <HelpCircle
              size={24}
              aria-hidden="true"
              style={{
                color: "var(--color-accent)",
                flexShrink: 0,
                alignSelf: "flex-start",
                marginTop: "0.5rem",
              }}
            />
          </div>

          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.75,
              maxWidth: "520px",
            }}
          >
            Everything you need to know before booking a call.
          </p>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section aria-label="Frequently asked questions" className="section">
        <div className="container" style={{ maxWidth: "760px" }}>
          <FaqAccordion />
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        aria-label="Still have questions"
        className="section-sm"
        style={{
          backgroundColor: "var(--color-accent-subtle)",
          borderTop: "1px solid var(--color-accent-border)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "520px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ marginBottom: "1rem" }}>Still have questions?</h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-secondary)",
                marginBottom: "2.5rem",
                lineHeight: 1.75,
              }}
            >
              Book a free 30-minute call. No pitch, no pressure. Just an honest
              conversation about whether I can help.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
