"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  Globe,
  TrendingUp,
  Settings,
  Zap,
  FileText,
  Clock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
    title: "How I helped Venngage drive $1.25M ARR through SEO",
    category: "Case Studies",
    excerpt:
      "A breakdown of the exact SEO system, content strategy, and AI experiments that moved the needle for a global SaaS brand.",
    date: "March 2025",
    readTime: "8 min",
  },
  {
    slug: "geo-vs-seo-saas-founders-2025",
    title: "GEO vs SEO: What SaaS founders need to know in 2025",
    category: "GEO & AEO",
    excerpt:
      "LLMs are the new search engines. Here's how to make sure your brand shows up when your buyers ask ChatGPT for recommendations.",
    date: "February 2025",
    readTime: "6 min",
  },
  {
    slug: "seo-audit-framework",
    title: "The SEO audit framework I use for every new client",
    category: "SEO Strategy",
    excerpt:
      "Before writing a single piece of content, I run every new client through this 5-step audit. Here's the exact process.",
    date: "January 2025",
    readTime: "10 min",
  },
];

/* Category icon lookup */
const categoryIconMap: Record<string, LucideIcon> = {
  "Case Studies": BarChart3,
  "GEO & AEO": Globe,
  "SEO Strategy": TrendingUp,
  "Technical SEO": Settings,
  "AI & Automation": Zap,
};

function getCategoryIcon(category: string): LucideIcon {
  return categoryIconMap[category] ?? FileText;
}

export function BlogFilter() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      {/* Category Filter Bar */}
      <nav aria-label="Blog category filter" style={{ marginBottom: "3rem" }}>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
          role="list"
        >
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                <span className={active === cat ? "badge badge-accent" : "badge badge-muted"}>
                  {cat}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Blog Grid */}
      <ul
        className="grid-3"
        role="list"
      >
        {filtered.map((post) => {
          const CategoryIcon = getCategoryIcon(post.category);
          return (
            <li key={post.slug}>
              <article className="card h-full flex flex-col">
                {/* Category badge with icon */}
                <span
                  className="badge badge-accent"
                  style={{
                    marginBottom: "1rem",
                    alignSelf: "flex-start",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                  }}
                >
                  <CategoryIcon size={14} aria-hidden="true" />
                  {post.category}
                </span>

                <h2
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    lineHeight: 1.45,
                    marginBottom: "0.75rem",
                    flex: 1,
                  }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{
                      color: "inherit",
                      transition: "color var(--ease-fast)",
                    }}
                  >
                    {post.title}
                  </Link>
                </h2>

                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.65,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    marginBottom: "1.25rem",
                  }}
                >
                  {post.excerpt}
                </p>

                <div
                  style={{
                    borderTop: "1px solid var(--color-border)",
                    paddingTop: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    Chandan Chaudhary
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8125rem",
                      color: "var(--color-text-muted)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    {post.date} ·{" "}
                    <Clock size={12} aria-hidden="true" style={{ flexShrink: 0 }} />
                    {post.readTime} read
                  </span>
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      {filtered.length === 0 && (
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
    </>
  );
}
