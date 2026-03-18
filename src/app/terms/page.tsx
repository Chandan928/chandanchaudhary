import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        aria-label="Terms of Service header"
        style={{
          backgroundColor: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          paddingTop: "8rem",
          paddingBottom: "4rem",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <p className="section-label">Legal</p>
          <h1 style={{ marginBottom: "1rem" }}>Terms of Service</h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9375rem",
              color: "var(--color-text-muted)",
            }}
          >
            Last updated: March 2026
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section aria-label="Terms of Service content" className="section">
        <div className="container legal-content" style={{ maxWidth: "800px" }}>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using this website (chandanchaudhary.com), you agree to be bound by
            these Terms of Service and our Privacy Policy. If you do not agree to these terms,
            please do not use this website. These terms apply to all visitors, clients, and others
            who access or use the site.
          </p>

          <h2>2. Services</h2>
          <p>
            Chandan Chaudhary provides SEO consulting, AI-powered automation, and digital growth
            services to SaaS companies and online businesses. The specific scope, deliverables,
            timelines, and fees for any engagement are set out in a separate written agreement or
            proposal agreed upon by both parties before work begins.
          </p>
          <ul>
            <li>Services are provided on a project or retainer basis as agreed in writing.</li>
            <li>We reserve the right to decline any enquiry at our sole discretion.</li>
            <li>Sub-contracting may be used where appropriate; overall responsibility remains ours.</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, and code — is the
            property of Chandan Chaudhary and is protected by applicable intellectual property law.
          </p>
          <ul>
            <li>
              You may not reproduce, distribute, or create derivative works from any website content
              without our prior written consent.
            </li>
            <li>
              Work product delivered under a client engagement is governed by the intellectual
              property terms in the relevant engagement agreement.
            </li>
            <li>
              You retain ownership of all materials, data, and content you provide to us.
            </li>
          </ul>

          <h2>4. Client Responsibilities</h2>
          <p>
            Where you engage our services, you agree to:
          </p>
          <ul>
            <li>Provide accurate, complete, and timely information required for service delivery.</li>
            <li>Grant access to platforms, analytics, and accounts as reasonably required.</li>
            <li>Designate a primary point of contact to facilitate communication.</li>
            <li>Review and provide feedback on deliverables within agreed timelines.</li>
          </ul>
          <p>
            Delays caused by failure to meet these responsibilities may affect delivery timelines
            without affecting payment obligations.
          </p>

          <h2>5. Payment Terms</h2>
          <p>
            Payment terms for consulting engagements are defined in the engagement agreement or
            proposal. General terms apply as follows:
          </p>
          <ul>
            <li>Invoices are due within 14 days of issue unless otherwise agreed.</li>
            <li>Late payments may incur interest at 8% per annum above the base rate.</li>
            <li>We reserve the right to pause work on accounts with outstanding invoices.</li>
            <li>Deposits paid are non-refundable unless work has not yet commenced.</li>
          </ul>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law:
          </p>
          <ul>
            <li>
              We make no guarantees regarding specific SEO outcomes, rankings, or revenue results.
              Search engine algorithms are beyond our control.
            </li>
            <li>
              Our total liability to you for any claim arising from our services shall not exceed
              the fees paid by you in the three months preceding the claim.
            </li>
            <li>
              We are not liable for indirect, consequential, or incidental damages, including loss
              of revenue, profit, or data.
            </li>
          </ul>

          <h2>7. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential any proprietary information shared during an
            engagement that is designated as confidential or that a reasonable person would
            understand to be confidential. This obligation survives termination of the engagement
            for a period of two years.
          </p>

          <h2>8. Termination</h2>
          <p>
            Either party may terminate a consulting engagement with 30 days&apos; written notice
            unless otherwise specified in the engagement agreement. Upon termination:
          </p>
          <ul>
            <li>All outstanding invoices become immediately due.</li>
            <li>We will deliver all completed work product to the date of termination.</li>
            <li>Access to shared platforms and accounts will be revoked within 14 days.</li>
          </ul>

          <h2>9. Governing Law</h2>
          <p>
            These Terms of Service are governed by the laws of India. Any disputes arising from
            these terms or from the use of our services shall be subject to the exclusive
            jurisdiction of the courts of Hyderabad, Telangana, India.
          </p>
          <p>
            If you have questions about these terms, please contact us at{" "}
            <a href="mailto:ckchandan928@gmail.com">ckchandan928@gmail.com</a>.
          </p>

        </div>
      </section>
    </>
  );
}
