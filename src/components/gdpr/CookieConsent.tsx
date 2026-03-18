"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "cookie-consent";

export function CookieConsent() {
  const [visible, setVisible]   = useState(false);
  const [exiting, setExiting]   = useState(false);
  const declineRef               = useRef<HTMLButtonElement>(null);

  /* Show banner if no preference saved */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) setVisible(true);
  }, []);

  /* Listen for reset from CookiePreferencesLink */
  useEffect(() => {
    const handler = () => {
      setExiting(false);
      setVisible(true);
    };
    window.addEventListener("cookie-preferences-reset", handler);
    return () => window.removeEventListener("cookie-preferences-reset", handler);
  }, []);

  /* Move focus to first button when banner appears */
  useEffect(() => {
    if (visible && !exiting) {
      declineRef.current?.focus();
    }
  }, [visible, exiting]);

  const dismiss = (value: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, value);
    setExiting(true);
    setTimeout(() => {
      setVisible(false);
      setExiting(false);
    }, 300);
  };

  /* Focus trap: keep Tab cycling within the banner */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab") return;
    const el = e.currentTarget;
    const focusables = Array.from(
      el.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
    );
    const first = focusables[0];
    const last  = focusables[focusables.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      aria-modal="false"
      onKeyDown={handleKeyDown}
      className={exiting ? "cookie-banner-exit" : "cookie-banner-enter"}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        backdropFilter: "blur(12px)",
        padding: "1rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      {/* Left — message */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          flex: 1,
          minWidth: "200px",
        }}
      >
        <Cookie
          size={18}
          style={{ color: "var(--color-accent)", flexShrink: 0 }}
          aria-hidden="true"
        />
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            color: "var(--color-text-secondary)",
            margin: 0,
          }}
        >
          We use cookies to improve your experience. See our{" "}
          <Link
            href="/privacy-policy"
            style={{
              color: "var(--color-accent)",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
      </div>

      {/* Right — buttons */}
      <div style={{ display: "flex", gap: "0.75rem", flexShrink: 0 }}>
        <button
          ref={declineRef}
          onClick={() => dismiss("declined")}
          className="btn btn-ghost btn-sm"
          aria-label="Decline non-essential cookies"
        >
          Decline
        </button>
        <button
          onClick={() => dismiss("accepted")}
          className="btn btn-primary btn-sm"
          aria-label="Accept all cookies"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
