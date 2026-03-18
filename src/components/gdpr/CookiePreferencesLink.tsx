"use client";

export function CookiePreferencesLink() {
  const handleClick = () => {
    localStorage.removeItem("cookie-consent");
    window.dispatchEvent(new Event("cookie-preferences-reset"));
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: "none",
        border: "none",
        padding: 0,
        fontFamily: "var(--font-body)",
        fontSize: "0.8125rem",
        color: "var(--color-text-muted)",
        cursor: "pointer",
        transition: "color var(--ease-fast)",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")
      }
    >
      Cookie Preferences
    </button>
  );
}
