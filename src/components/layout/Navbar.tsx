"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { label: "SEO",           href: "/services/seo" },
  { label: "AEO",           href: "/services/aeo" },
  { label: "GEO",           href: "/services/geo" },
  { label: "Local SEO",     href: "/services/local-seo" },
  { label: "AI Automation", href: "/services/ai-automation" },
  { label: "Technical SEO", href: "/services/technical-seo" },
];

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Blog",     href: "/blog" },
  { label: "FAQ",      href: "/faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen]             = useState(false);
  const [scrolled, setScrolled]         = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [theme, setTheme]               = useState<"dark" | "light">("dark");
  const pathname = usePathname();

  /* Initialize theme from localStorage, default dark */
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    const initial = saved || "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close menus on route change */
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        role="banner"
        style={{
          backgroundColor: scrolled ? "var(--color-surface)" : "transparent",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : undefined,
          backdropFilter: scrolled ? "blur(12px)" : undefined,
          borderBottom: scrolled ? "1px solid var(--color-border)" : undefined,
          boxShadow: scrolled ? "var(--shadow-sm)" : undefined,
          transition: "background-color var(--ease), box-shadow var(--ease), border-color var(--ease)",
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <nav
          className="container flex items-center justify-between"
          style={{ height: "64px" }}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" aria-label="Chandan Chaudhary — Home">
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
              {/* CC Icon */}
              <div style={{ flexShrink: 0 }}>
                <svg width="38" height="38" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect width="56" height="56" rx="12" fill="#1A1A2E" />
                  <rect x="1.5" y="1.5" width="53" height="53" rx="11" fill="none" stroke="#6C63FF" strokeWidth="2" />
                  <text x="28" y="34" fontSize="20" fontWeight="700" fill="white" textAnchor="middle" fontFamily="Sora, system-ui, sans-serif">CC</text>
                  <circle cx="42" cy="14" r="5" fill="#8075FF" />
                </svg>
              </div>
              {/* Wordmark */}
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
                <span
                  className="navbar-name"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.2,
                  }}
                >
                  Chandan Chaudhary
                </span>
                <span
                  className="desktop-only"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    color: "var(--color-accent)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  SEO · AI · Growth
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav — visible at lg+ only */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <li key={link.href} className="relative">
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    onBlur={(e) => {
                      if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                        setServicesOpen(false);
                      }
                    }}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    className={cn(
                      "nav-link",
                      isActive(link.href) && "active"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-200",
                        servicesOpen && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Dropdown */}
                  {servicesOpen && (
                    <div
                      role="menu"
                      style={{
                        backgroundColor: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "var(--radius-lg)",
                        boxShadow: "var(--shadow-lg)",
                        padding: "0.5rem",
                      }}
                      className="absolute top-full left-0 mt-1.5 w-52 z-50"
                    >
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          role="menuitem"
                          style={{
                            display: "block",
                            padding: "0.625rem 0.875rem",
                            fontFamily: "var(--font-body)",
                            fontSize: "0.9375rem",
                            fontWeight: 500,
                            color: isActive(s.href)
                              ? "var(--color-accent)"
                              : "var(--color-text-secondary)",
                            borderRadius: "var(--radius-sm)",
                            transition: "background-color var(--ease-fast), color var(--ease-fast)",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-surface-2)";
                            (e.currentTarget as HTMLElement).style.color = isActive(s.href) ? "var(--color-accent)" : "var(--color-text-primary)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                            (e.currentTarget as HTMLElement).style.color = isActive(s.href) ? "var(--color-accent)" : "var(--color-text-secondary)";
                          }}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn("nav-link", isActive(link.href) && "active")}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Right: Theme Toggle + CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                borderRadius: "var(--radius-md)",
                background: "transparent",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-secondary)",
                cursor: "pointer",
                transition: "var(--ease)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-surface-2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              {theme === "dark"
                ? <Sun size={18} aria-hidden="true" />
                : <Moon size={18} aria-hidden="true" />
              }
            </button>

            {/* Desktop CTA — visible at lg+ only */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex btn btn-primary btn-sm"
              aria-label="Book a consultation with Chandan Chaudhary"
            >
              Book a Call
            </Link>

            {/* Mobile menu toggle — hidden at lg+ */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="flex lg:hidden"
              style={{
                alignItems: "center",
                justifyContent: "center",
                minWidth: "48px",
                minHeight: "48px",
                width: "48px",
                height: "48px",
                borderRadius: "var(--radius-md)",
                background: "transparent",
                border: "none",
                color: "var(--color-text-secondary)",
                cursor: "pointer",
              }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen
                ? <X size={20} aria-hidden="true" />
                : <Menu size={20} aria-hidden="true" />
              }
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu — rendered outside <header> so backdropFilter cannot affect fixed positioning */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        style={{
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
          overflowY: "auto",
          transition: "opacity var(--ease), transform var(--ease)",
        }}
        className={cn(
          "lg:hidden fixed inset-0 top-16 z-40",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container py-6 flex flex-col gap-1">
          {/* Nav links */}
          {navLinks
            .filter((l) => !l.hasDropdown)
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.75rem 1rem",
                  minHeight: "52px",
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: isActive(link.href) ? "var(--color-accent)" : "var(--color-text-secondary)",
                  borderRadius: "var(--radius-md)",
                }}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}

          {/* Services label + links */}
          <p className="section-label mt-4 mb-1">Services</p>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => setIsOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0.75rem 1rem",
                minHeight: "52px",
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: 500,
                color: isActive(s.href) ? "var(--color-accent)" : "var(--color-text-secondary)",
                borderRadius: "var(--radius-md)",
              }}
            >
              {s.label}
            </Link>
          ))}

          <div className="divider my-4" />

          {/* Theme toggle in mobile */}
          <button
            onClick={toggleTheme}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1rem",
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 500,
              color: "var(--color-text-secondary)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              borderRadius: "var(--radius-md)",
              width: "100%",
              textAlign: "left",
            }}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark"
              ? <><Sun size={18} aria-hidden="true" /> Switch to Light Mode</>
              : <><Moon size={18} aria-hidden="true" /> Switch to Dark Mode</>
            }
          </button>

          <div className="divider my-2" />

          <Link
            href="/contact"
            className="btn btn-primary mt-2"
            onClick={() => setIsOpen(false)}
            style={{ width: "100%", justifyContent: "center" }}
          >
            Book a Free Call
          </Link>
        </div>
      </div>
    </>
  );
}
