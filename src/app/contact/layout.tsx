import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Book a Free SEO Strategy Call — Chandan Chaudhary",
  description:
    "Book a free 30-minute SEO strategy call with Chandan Chaudhary. Get clarity on your organic growth gaps and a clear plan — no pitch, no pressure.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
