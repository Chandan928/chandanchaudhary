"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, ChevronRight } from "lucide-react";

const categories = [
  "All",
  "SEO Strategy",
  "AI & Automation",
  "GEO & AEO",
  "Case Studies",
  "Technical SEO",
  "Growth Systems",
];

const posts = [
  {
    slug: "venngage-125m-arr-seo",
    category: "Case Studies",
    title: "How I helped Venngage drive $1.25M ARR through SEO",
    excerpt:
      "A breakdown of the exact SEO system, content strategy, and AI experiments that moved the needle on organic revenue.",
    date: "March 10, 2025",
    readTime: "8 min read",
  },
  {
    slug: "geo-vs-seo-saas-founders-2025",
    category: "GEO & AEO",
    title: "GEO vs SEO: What SaaS founders need to know in 2025",
    excerpt:
      "LLMs are the new search engines. Here's how to make sure your brand shows up when your buyers ask AI for recommendations.",
    date: "February 2025",
    readTime: "6 min read",
  },
  {
    slug: "seo-audit-framework",
    category: "SEO Strategy",
    title: "The SEO audit framework I use for every new client",
    excerpt:
      "Before writing a single piece of content, I run every new client through this 5-step audit. Here's the full framework.",
    date: "January 2025",
    readTime: "10 min read",
  },
];

export default function BlogPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      {/* ── Hero ── */}
      <section
        aria-label="Blog page header"
        style={{
          backgroundColor: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          paddingBlock: "4rem",
        }}
      >
        <div className="container">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              marginBottom: "1.5rem",
            }}
          >
            <Link
              href="/"
              style={{
                fontSize: "0.75rem",
                color: "var(--color-text-muted)",
                textDecoration: "none",
                transition: "color var(--ease-fast)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-muted)")
              }
            >
              Home
            </Link>
            <ChevronRight
              size={12}
              aria-hidden="true"
              style={{ color: "var(--color-text-muted)", flexShrink: 0 }}
            />
            <span
              style={{
                fontSize: "0.75rem",
                color: "var(--color-text-secondary)",
              }}
            >
              Blog
            </span>
          </nav>

          <p className="section-label">Insights</p>
          <h1 style={{ maxWidth: "600px", marginBottom: "0" }}>
            SEO, AI & Organic Growth for SaaS Founders.
          </h1>
          <p
            style={{
              maxWidth: "520px",
              fontSize: "1.0625rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.7,
              marginTop: "1rem",
            }}
          >
            Practical frameworks, case studies, and data-driven thinking. No
            fluff — just what actually works.
          </p>
        </div>
      </section>

      {/* ── Filter + Posts ── */}
      <section
        aria-label="Blog posts"
        style={{
          backgroundColor: "var(--color-bg)",
          paddingBlock: "3.5rem",
        }}
      >
        <div className="container">
          {/* Filter row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              flexWrap: "wrap",
              marginBottom: "2.5rem",
              paddingBottom: "1.25rem",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                style={{
                  borderRadius: "100px",
                  padding: "0.375rem 1rem",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-body)",
                  border: `1px solid ${
                    active === cat
                      ? "var(--color-accent)"
                      : "var(--color-border)"
                  }`,
                  backgroundColor:
                    active === cat ? "var(--color-accent)" : "transparent",
                  color:
                    active === cat ? "white" : "var(--color-text-secondary)",
                  cursor: "pointer",
                  transition: "all var(--ease-fast)",
                  minHeight: "unset",
                  lineHeight: 1,
                }}
                onMouseEnter={(e) => {
                  if (active !== cat) {
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.color = "var(--color-accent)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== cat) {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.color =
                      "var(--color-text-secondary)";
                  }
                }}
              >
                {cat}
              </button>
            ))}

            {/* Article count */}
            <span
              style={{
                marginLeft: "auto",
                fontSize: "0.75rem",
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-body)",
              }}
            >
              {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Posts grid */}
          {filtered.length > 0 ? (
            <ul role="list" className="grid-3" style={{ gap: "1.5rem" }}>
              {filtered.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="card blog-card"
                    style={{
                      display: "block",
                      overflow: "hidden",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    {/* Cover image area */}
                    <div
                      style={{
                        height: "180px",
                        background:
                          "linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-2) 100%)",
                        borderBottom: "1px solid var(--color-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Radial glow */}
                      <div
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "radial-gradient(circle at 30% 50%, var(--color-accent-subtle) 0%, transparent 65%)",
                        }}
                      />
                      {/* Title text overlay */}
                      <span
                        aria-hidden="true"
                        style={{
                          fontSize: "0.8125rem",
                          fontWeight: 600,
                          color: "rgba(232, 232, 240, 0.5)",
                          textAlign: "center",
                          padding: "0 1.5rem",
                          lineHeight: 1.5,
                          position: "relative",
                          zIndex: 1,
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {post.title}
                      </span>
                    </div>

                    {/* Card body */}
                    <div style={{ padding: "1.25rem" }}>
                      {/* Category badge */}
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          backgroundColor: "var(--color-accent-subtle)",
                          border: "1px solid var(--color-accent-border)",
                          borderRadius: "100px",
                          padding: "3px 10px",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                          color: "var(--color-accent)",
                          marginBottom: "0.75rem",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {post.category}
                      </span>

                      {/* Title */}
                      <h2
                        className="blog-post-title"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "var(--color-text-primary)",
                          lineHeight: 1.4,
                          marginBottom: "0.5rem",
                          transition: "color var(--ease-fast)",
                        }}
                      >
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--color-text-secondary)",
                          lineHeight: 1.65,
                          marginBottom: "1rem",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {post.excerpt}
                      </p>

                      {/* Divider + Meta */}
                      <div
                        style={{
                          borderTop: "1px solid var(--color-border)",
                          paddingTop: "0.875rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        {/* Author */}
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
                              background:
                                "linear-gradient(135deg, var(--color-accent), var(--color-accent-hover))",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "0.5rem",
                              fontWeight: 700,
                              color: "white",
                              flexShrink: 0,
                              fontFamily: "var(--font-display)",
                            }}
                          >
                            CC
                          </div>
                          <span
                            style={{
                              fontSize: "0.75rem",
                              color: "var(--color-text-secondary)",
                              fontWeight: 500,
                              fontFamily: "var(--font-body)",
                            }}
                          >
                            Chandan Chaudhary
                          </span>
                        </div>

                        {/* Date + Read time */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            gap: "2px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.6875rem",
                              color: "var(--color-text-muted)",
                              fontFamily: "var(--font-body)",
                            }}
                          >
                            {post.date}
                          </span>
                          <span
                            style={{
                              fontSize: "0.65rem",
                              color: "var(--color-text-muted)",
                              fontFamily: "var(--font-body)",
                              display: "flex",
                              alignItems: "center",
                              gap: "3px",
                            }}
                          >
                            <Clock size={10} aria-hidden="true" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "var(--color-text-muted)",
                textAlign: "center",
                paddingBlock: "3rem",
              }}
            >
              No posts in this category yet. Check back soon.
            </p>
          )}
        </div>
      </section>

      {/* ── Bottom CTA Strip ── */}
      <section
        aria-label="Blog call to action"
        style={{
          backgroundColor: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          paddingBlock: "2.5rem",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--color-text-primary)",
                marginBottom: "0.375rem",
              }}
            >
              Want frameworks like this for your SaaS?
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "var(--color-text-secondary)",
              }}
            >
              Book a free 30-minute call and I&apos;ll walk through your
              specific situation.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Book a Free Call
          </Link>
        </div>
      </section>
    </>
  );
}
