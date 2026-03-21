import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Return to the homepage or explore Chandan's SEO services.",
  noIndex: true,
});

export default function NotFound() {
  return (
    <section
      aria-label="Page not found"
      style={{
        backgroundColor: "var(--color-bg)",
        paddingBlock: "6rem",
        textAlign: "center",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container" style={{ maxWidth: "560px" }}>
        <p
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4rem, 12vw, 7rem)",
            fontWeight: 800,
            color: "var(--color-accent)",
            lineHeight: 1,
            marginBottom: "1rem",
            opacity: 0.25,
          }}
        >
          404
        </p>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            marginBottom: "1rem",
          }}
        >
          Page not found
        </h1>

        <p
          style={{
            fontSize: "1.0625rem",
            color: "var(--color-text-secondary)",
            lineHeight: 1.75,
            marginBottom: "2.5rem",
          }}
        >
          This URL doesn&apos;t exist. It may have moved, been removed, or you
          followed a broken link.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            className="btn btn-primary"
            aria-label="Go to homepage"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="btn btn-secondary"
            aria-label="View SEO services"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
