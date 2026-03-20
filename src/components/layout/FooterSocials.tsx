"use client";

import { FaXTwitter, FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { siteConfig } from "@/lib/metadata";

const socials = [
  {
    href: siteConfig.socials.twitter,
    icon: <FaXTwitter size={15} />,
    label: "Chandan Chaudhary on X (Twitter)",
    handle: "@theseoarchitect",
  },
  {
    href: siteConfig.socials.facebook,
    icon: <FaFacebook size={15} />,
    label: "Chandan Chaudhary on Facebook",
    handle: "akachandanchaudhary",
  },
  {
    href: siteConfig.socials.linkedin,
    icon: <FaLinkedinIn size={15} />,
    label: "Chandan Chaudhary on LinkedIn",
    handle: "imchandanchaudhary",
  },
  {
    href: siteConfig.socials.github,
    icon: <FaGithub size={15} />,
    label: "Chandan Chaudhary on GitHub",
    handle: "Chandan928",
  },
];

export function FooterSocials() {
  return (
    <div style={{ display: "flex", gap: "0.5rem", marginTop: "1.25rem", marginBottom: "1.25rem" }}>
      {socials.map((social) => (
        <a
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          title={social.handle}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "34px",
            height: "34px",
            borderRadius: "var(--radius-md)",
            background: "var(--color-surface-2)",
            border: "1px solid var(--color-border)",
            color: "var(--color-text-muted)",
            transition: "all var(--ease-fast)",
            flexShrink: 0,
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "var(--color-accent)";
            el.style.color = "var(--color-accent)";
            el.style.background = "var(--color-accent-subtle)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "var(--color-border)";
            el.style.color = "var(--color-text-muted)";
            el.style.background = "var(--color-surface-2)";
          }}
        >
          <span aria-hidden="true">{social.icon}</span>
        </a>
      ))}
    </div>
  );
}
