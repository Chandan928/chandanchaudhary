import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPostSchema } from "@/lib/schema";

const samplePost = {
  slug: "sample-post",
  title: "How I helped Venngage drive $1.25M ARR through SEO",
  category: "Case Studies",
  date: "March 10, 2025",
  dateISO: "2025-03-10",
  readTime: "8 min",
  excerpt:
    "A breakdown of the exact SEO system, content strategy, and AI experiments that moved the needle for a global SaaS brand.",
  initials: "CC",
};

export function generateStaticParams() {
  return [{ slug: "sample-post" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const title = slug === samplePost.slug ? samplePost.title : "Blog Post";
  return buildMetadata({ title, path: `/blog/${slug}` });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = slug === samplePost.slug ? samplePost : { ...samplePost, slug };

  return (
    <>
      <JsonLd
        schema={blogPostSchema({
          title: post.title,
          description: post.excerpt,
          datePublished: post.dateISO,
          dateModified: post.dateISO,
          url: `https://chandanchaudhary.com/blog/${post.slug}`,
        })}
      />

      {/* ── Article Hero ── */}
      <section
        aria-label="Article header"
        style={{
          backgroundColor: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          paddingTop: "8rem",
          paddingBottom: "4rem",
        }}
      >
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="badge badge-accent" style={{ marginBottom: "1.5rem", display: "inline-flex" }}>
            {post.category}
          </span>

          <h1 style={{ marginBottom: "2rem" }}>{post.title}</h1>

          {/* Author row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.875rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--color-accent-subtle)",
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
              {post.initials}
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                }}
              >
                Chandan Chaudhary
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "var(--color-text-muted)",
                }}
              >
                <time dateTime={post.dateISO}>{post.date}</time>
                {" · "}
                {post.readTime} read
              </p>
            </div>
          </div>

          <div className="divider" />
        </div>
      </section>

      {/* ── Article Body ── */}
      <article
        aria-label="Article content"
        className="section"
      >
        <div
          className="container prose-custom"
          style={{ maxWidth: "680px", marginInline: "auto" }}
        >
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            When Venngage brought me on in early 2024, they had a solid product and
            growing brand — but SEO was inconsistent. Good months, bad months, no clear
            system. The organic channel wasn&apos;t contributing to ARR in any predictable
            way. That was the problem I was hired to solve.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            The first thing I did was an audit — not a 60-page report nobody reads, but a
            focused diagnostic tied to one question: what&apos;s blocking organic from
            becoming a real acquisition channel? The answer came back quickly: fragmented
            content strategy, no topical authority, and a disconnect between SEO work and
            business metrics.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.8,
            }}
          >
            What followed was 18 months of systematic execution — building a semantic
            content system, launching 50+ revenue-aligned landing pages, running AI-assisted
            content experiments, and most importantly, tracking every initiative against
            sign-ups and ARR. The result: $1.25M ARR impact, 232% increase in organic
            sign-ups, and an SEO system that kept compounding after I wrapped up.
          </p>
        </div>
      </article>

      {/* ── End of Article CTA ── */}
      <section aria-label="Article call to action" className="section-sm">
        <div className="container" style={{ maxWidth: "680px", marginInline: "auto" }}>
          <div className="divider" style={{ marginBottom: "2rem" }} />

          <div
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderLeft: "3px solid var(--color-accent)",
              borderRadius: "var(--radius-lg)",
              padding: "1.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: 700,
                color: "var(--color-text-primary)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                marginBottom: "0.625rem",
              }}
            >
              Found this useful?
            </p>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.75,
                marginBottom: "1.25rem",
              }}
            >
              I write about SEO, AI, and organic growth systems for SaaS founders. If you
              want the full framework behind this — book a free call and I&apos;ll walk you
              through how it applies to your specific situation.
            </p>
            <Link href="/contact" className="btn btn-primary btn-sm">
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
