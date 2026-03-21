import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowLeft, Clock } from "lucide-react";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPostSchema } from "@/lib/schema";

export const revalidate = 3600;

type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  dateISO: string;
  readTime: string;
  body: string[];
};

const allPosts: Post[] = [
  {
    slug: "venngage-125m-arr-seo",
    category: "Case Studies",
    title: "How I helped Venngage drive $1.25M ARR through SEO",
    excerpt:
      "A breakdown of the exact SEO system, content strategy, and AI experiments that moved the needle on organic revenue.",
    date: "March 10, 2025",
    dateISO: "2025-03-10",
    readTime: "8 min read",
    body: [
      "When Venngage brought me on in early 2024, they had a solid product and growing brand — but SEO was inconsistent. Good months, bad months, no clear system. The organic channel wasn't contributing to ARR in any predictable way. That was the problem I was hired to solve.",
      "The first thing I did was an audit — not a 60-page report nobody reads, but a focused diagnostic tied to one question: what's blocking organic from becoming a real acquisition channel? The answer came back quickly: fragmented content strategy, no topical authority, and a disconnect between SEO work and business metrics.",
      "What followed was 18 months of systematic execution — building a semantic content system, launching 50+ revenue-aligned landing pages, running AI-assisted content experiments, and most importantly, tracking every initiative against sign-ups and ARR. The result: $1.25M ARR impact, 232% increase in organic sign-ups, and an SEO system that kept compounding after I wrapped up.",
    ],
  },
  {
    slug: "geo-vs-seo-saas-founders-2025",
    category: "GEO & AEO",
    title: "GEO vs SEO: What SaaS founders need to know in 2025",
    excerpt:
      "LLMs are the new search engines. Here's how to make sure your brand shows up when your buyers ask AI for recommendations.",
    date: "February 2025",
    dateISO: "2025-02-01",
    readTime: "6 min read",
    body: [
      "Your buyers are no longer just typing queries into Google. They're asking ChatGPT, Claude, and Perplexity for software recommendations — and the answers they get are shaping purchasing decisions before a single search result is clicked.",
      "Generative Engine Optimization (GEO) is the practice of making your brand and content legible to AI systems. Unlike traditional SEO, which optimizes for ranking signals, GEO focuses on entity clarity, topical depth, and being cited in the kind of authoritative sources that LLMs draw from when forming answers.",
      "The good news: if you've already invested in high-quality, expert-driven content — you're ahead. The bad news: most SaaS brands haven't. Here's the framework I use to audit GEO readiness and close the gap fast.",
    ],
  },
  {
    slug: "seo-audit-framework",
    category: "SEO Strategy",
    title: "The SEO audit framework I use for every new client",
    excerpt:
      "Before writing a single piece of content, I run every new client through this 5-step audit. Here's the full framework.",
    date: "January 2025",
    dateISO: "2025-01-01",
    readTime: "10 min read",
    body: [
      "I've onboarded over 22 clients across B2B SaaS, e-commerce, and professional services. Every single engagement starts the same way: a structured 5-step audit before a single piece of content gets created or a single link gets built.",
      "The five pillars are: (1) Crawlability & Indexation — making sure Google can actually access and understand the site; (2) Topical Authority Mapping — identifying where you own a topic vs. where you're diluted; (3) Intent-Revenue Alignment — matching your keyword strategy to the buyer journey; (4) Competitive Gap Analysis — finding the exact pages your competitors rank for that you don't; and (5) Technical Debt Scoring — prioritising the technical fixes with the highest ROI.",
      "Most audits I inherit are either too broad or too technical to be actionable. This framework is built around one constraint: every finding has to trace back to a revenue metric. If it doesn't affect sign-ups, trial starts, or MRR — it waits.",
    ],
  },
];

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug) ?? allPosts[0];
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug) ?? allPosts[0];
  const pageUrl = `${siteConfig.url}/blog/${post.slug}`;
  const truncatedTitle =
    post.title.length > 40 ? post.title.slice(0, 40) + "…" : post.title;

  return (
    <>
      <JsonLd
        schema={blogPostSchema({
          title: post.title,
          description: post.excerpt,
          datePublished: post.dateISO,
          dateModified: post.dateISO,
          url: pageUrl,
        })}
      />

      {/* ── PART 1: Article Hero ── */}
      <section
        aria-label="Article header"
        style={{
          backgroundColor: "var(--color-bg)",
          paddingTop: "3rem",
          paddingBottom: "0",
        }}
      >
        <div
          style={{
            maxWidth: "680px",
            marginInline: "auto",
            paddingInline: "1.5rem",
          }}
        >
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
            <Link href="/" className="breadcrumb-link">
              Home
            </Link>
            <ChevronRight
              size={12}
              aria-hidden="true"
              style={{ color: "var(--color-text-muted)", flexShrink: 0 }}
            />
            <Link href="/blog" className="breadcrumb-link">
              Blog
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
              {truncatedTitle}
            </span>
          </nav>

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
              marginBottom: "1rem",
              fontFamily: "var(--font-body)",
            }}
          >
            {post.category}
          </span>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
              marginBottom: "1.5rem",
            }}
          >
            {post.title}
          </h1>

          {/* Author row */}
          <div
            style={{
              borderTop: "1px solid var(--color-border)",
              borderBottom: "1px solid var(--color-border)",
              paddingBlock: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.875rem",
            }}
          >
            {/* Avatar */}
            <div
              aria-hidden="true"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, var(--color-accent), var(--color-accent-hover))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "white",
                flexShrink: 0,
                fontFamily: "var(--font-display)",
              }}
            >
              CC
            </div>
            {/* Author info */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  marginBottom: "2px",
                }}
              >
                Chandan Chaudhary
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  color: "var(--color-text-muted)",
                }}
              >
                SEO Consultant · Hyderabad, India
              </p>
            </div>
            {/* Right: date + read time */}
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <time
                dateTime={post.dateISO}
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--color-text-muted)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {post.date}
              </time>
              <div
                aria-hidden="true"
                style={{
                  width: "1px",
                  height: "16px",
                  backgroundColor: "var(--color-border)",
                }}
              />
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.8125rem",
                  color: "var(--color-text-muted)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <Clock size={14} aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PART 2: Cover Image ── */}
      <div
        style={{
          height: "clamp(260px, 30vw, 420px)",
          background:
            "linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-2) 50%, var(--color-surface) 100%)",
          position: "relative",
          overflow: "hidden",
          marginTop: "2rem",
        }}
      >
        {/* Glow left */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)",
            top: "-100px",
            left: "-100px",
          }}
        />
        {/* Glow right */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)",
            bottom: "-100px",
            right: "-100px",
            opacity: 0.08,
          }}
        />
        {/* Grid overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.3,
          }}
        />
        {/* Center content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
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
              fontFamily: "var(--font-body)",
            }}
          >
            {post.category}
          </span>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
              fontWeight: 700,
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
              textAlign: "center",
              padding: "0 2rem",
              maxWidth: "600px",
              lineHeight: 1.3,
            }}
          >
            {post.title}
          </p>
        </div>
      </div>

      {/* ── PART 3: Article Body ── */}
      <article
        aria-label="Article content"
        style={{
          maxWidth: "680px",
          marginInline: "auto",
          paddingInline: "1.5rem",
          paddingTop: "2.5rem",
        }}
      >
        <div className="prose">
          {post.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>

      {/* ── PART 4: Author Box ── */}
      <div
        style={{
          maxWidth: "680px",
          marginInline: "auto",
          paddingInline: "1.5rem",
          paddingTop: "2.5rem",
          paddingBottom: "2.5rem",
          borderTop: "1px solid var(--color-border)",
          marginTop: "2.5rem",
        }}
      >
        <div
          className="card"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.25rem",
            padding: "1.5rem",
          }}
        >
          {/* Avatar */}
          <div
            aria-hidden="true"
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, var(--color-accent), var(--color-accent-hover))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.125rem",
              fontWeight: 700,
              color: "white",
              flexShrink: 0,
              fontFamily: "var(--font-display)",
            }}
          >
            CC
          </div>
          {/* Info */}
          <div>
            <p
              style={{
                fontSize: "0.625rem",
                color: "var(--color-text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "4px",
                fontFamily: "var(--font-body)",
              }}
            >
              Written by
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--color-text-primary)",
                marginBottom: "2px",
              }}
            >
              Chandan Chaudhary
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--color-accent)",
                fontWeight: 600,
                marginBottom: "0.75rem",
                fontFamily: "var(--font-body)",
              }}
            >
              SEO Consultant · 9+ years · Hyderabad, India
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.65,
                fontFamily: "var(--font-body)",
              }}
            >
              I help SaaS founders build organic acquisition channels that
              compound. $5M+ ARR impact across 22+ brands.
            </p>
            {/* Social row */}
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                marginTop: "0.875rem",
              }}
            >
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chandan Chaudhary on LinkedIn"
                className="author-social-link"
              >
                <FaLinkedinIn size={14} aria-hidden="true" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chandan Chaudhary on X (Twitter)"
                className="author-social-link"
              >
                <FaXTwitter size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── PART 5: Article CTA ── */}
      <section
        aria-label="Article call to action"
        style={{
          backgroundColor: "var(--color-accent-subtle)",
          borderTop: "1px solid var(--color-accent-border)",
          borderBottom: "1px solid var(--color-accent-border)",
          paddingBlock: "3rem",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            maxWidth: "560px",
            marginInline: "auto",
            paddingInline: "1.5rem",
          }}
        >
          <p className="section-label">Found this useful?</p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--color-text-primary)",
            }}
          >
            Want this framework applied to your SaaS?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--color-text-secondary)",
              marginBlock: "1rem",
              fontFamily: "var(--font-body)",
              lineHeight: 1.7,
            }}
          >
            I write about SEO, AI, and organic growth systems for SaaS
            founders. Book a free call and I&apos;ll walk through your specific
            situation — no pitch, no pressure.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Book a Free Strategy Call
          </Link>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.8125rem",
              color: "var(--color-text-muted)",
              fontFamily: "var(--font-body)",
            }}
          >
            or email{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              style={{ color: "var(--color-text-muted)" }}
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </section>

      {/* ── PART 6: Back to Blog ── */}
      <div
        style={{
          backgroundColor: "var(--color-bg)",
          paddingBlock: "2rem",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div
          style={{
            maxWidth: "680px",
            marginInline: "auto",
            paddingInline: "1.5rem",
          }}
        >
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.9375rem",
              color: "var(--color-accent)",
              fontWeight: 500,
              fontFamily: "var(--font-body)",
              textDecoration: "none",
            }}
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to all articles
          </Link>
        </div>
      </div>
    </>
  );
}
