import Link from "next/link";
import { Mail, MapPin, Linkedin } from "lucide-react";
import { CookiePreferencesLink } from "@/components/gdpr/CookiePreferencesLink";

const services = [
  { label: "SEO Consulting",  href: "/services/seo" },
  { label: "AEO",             href: "/services/aeo" },
  { label: "GEO",             href: "/services/geo" },
  { label: "Local SEO",       href: "/services/local-seo" },
  { label: "AI Automation",   href: "/services/ai-automation" },
];

const company = [
  { label: "About",   href: "/about" },
  { label: "Blog",    href: "/blog" },
  { label: "FAQ",     href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      {/* Main Footer */}
      <div className="container" style={{ paddingTop: "4rem", paddingBottom: "2rem" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1 — Brand */}
          <div>
            <Link href="/" aria-label="Chandan Chaudhary — Home">
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  marginBottom: "4px",
                }}
              >
                Chandan Chaudhary
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: "1rem",
                }}
              >
                SEO · AI · Growth
              </p>
            </Link>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
                maxWidth: "260px",
              }}
            >
              Organic growth, engineered with AI.
            </p>

            <address className="not-italic flex flex-col gap-3">
              <a
                href="mailto:ckchandan928@gmail.com"
                className="footer-email"
                aria-label="Email Chandan"
              >
                <Mail size={14} aria-hidden="true" style={{ color: "var(--color-text-muted)", flexShrink: 0 }} />
                ckchandan928@gmail.com
              </a>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "var(--color-text-muted)",
                }}
              >
                <MapPin size={14} aria-hidden="true" style={{ flexShrink: 0 }} />
                Hyderabad, India
              </span>
            </address>
          </div>

          {/* Column 2 — Services */}
          <div>
            <p className="section-label">Services</p>
            <ul className="flex flex-col gap-3" role="list">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="footer-link">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <p className="section-label">Company</p>
            <ul className="flex flex-col gap-3" role="list">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — CTA Box */}
          <div
            style={{
              backgroundColor: "var(--color-accent-subtle)",
              border: "1px solid var(--color-accent-border)",
              borderRadius: "var(--radius-lg)",
              padding: "1.25rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                fontWeight: 600,
                color: "var(--color-text-primary)",
                lineHeight: 1.5,
                marginBottom: "0.625rem",
              }}
            >
              Ready to make organic your most predictable acquisition channel?
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "var(--color-text-secondary)",
                marginBottom: "1rem",
              }}
            >
              Let&apos;s talk. Free 30-minute call, no strings attached.
            </p>
            <Link href="/contact" className="btn btn-primary btn-sm">
              Book a Free Call
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="divider" />
      <div className="container" style={{ paddingBlock: "1.25rem" }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8125rem",
              color: "var(--color-text-muted)",
            }}
          >
            &copy; {currentYear} Chandan Chaudhary. All rights reserved.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/privacy-policy" className="footer-link" style={{ fontSize: "0.8125rem" }}>
              Privacy Policy
            </Link>
            <span style={{ color: "var(--color-text-muted)", fontSize: "0.8125rem" }}>·</span>
            <Link href="/terms" className="footer-link" style={{ fontSize: "0.8125rem" }}>
              Terms
            </Link>
            <span style={{ color: "var(--color-text-muted)", fontSize: "0.8125rem" }}>·</span>
            <CookiePreferencesLink />
            <span style={{ color: "var(--color-text-muted)", fontSize: "0.8125rem" }}>·</span>
            <a
              href="https://linkedin.com/in/chandan-chaudhary-seo"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-social"
              aria-label="Chandan Chaudhary on LinkedIn"
            >
              <Linkedin size={14} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
