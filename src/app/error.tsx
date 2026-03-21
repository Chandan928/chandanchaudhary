"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section
      aria-label="Something went wrong"
      style={{
        backgroundColor: "var(--color-bg)",
        paddingBlock: "6rem",
        textAlign: "center",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container" style={{ maxWidth: "480px" }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            marginBottom: "1rem",
          }}
        >
          Something went wrong
        </h1>

        <p
          style={{
            fontSize: "1.0625rem",
            color: "var(--color-text-secondary)",
            lineHeight: 1.75,
            marginBottom: "2.5rem",
          }}
        >
          An unexpected error occurred. Try reloading the page — if the problem
          persists, come back shortly.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={reset}
            className="btn btn-primary"
            aria-label="Try loading the page again"
          >
            Try again
          </button>
          <Link
            href="/"
            className="btn btn-secondary"
            aria-label="Go to homepage"
          >
            Go home
          </Link>
        </div>
      </div>
    </section>
  );
}
