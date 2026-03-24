import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  titleAbsolute: "Contact | SEO Strategy Call for SaaS and AI Companies",
  description:
    "Book a strategy call to identify SEO gaps and build a roadmap for scaling search and pipeline growth.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
