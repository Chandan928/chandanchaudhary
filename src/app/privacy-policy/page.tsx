import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        aria-label="Privacy Policy header"
        style={{
          backgroundColor: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          paddingTop: "8rem",
          paddingBottom: "4rem",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <p className="section-label">Legal</p>
          <h1 style={{ marginBottom: "1rem" }}>Privacy Policy</h1>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                color: "var(--color-text-muted)",
              }}
            >
              Last updated: March 2026
            </p>
            <span className="badge badge-muted">GDPR Compliant</span>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section aria-label="Privacy Policy content" className="section">
        <div className="container legal-content" style={{ maxWidth: "800px" }}>

          <h2>1. Who We Are</h2>
          <p>
            This website is operated by Chandan Chaudhary, an independent SEO consultant based in
            Hyderabad, India (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). You can
            reach us at{" "}
            <a href="mailto:ckchandan928@gmail.com">ckchandan928@gmail.com</a>.
          </p>

          <h2>2. What Data We Collect</h2>
          <p>
            We collect only the data necessary to provide our services and improve your experience
            on this website. This includes:
          </p>
          <ul>
            <li>
              <strong>Contact information</strong> — name, email address, and company name when you
              submit our contact form.
            </li>
            <li>
              <strong>Usage data</strong> — pages visited, time spent on pages, referral sources,
              and device/browser type, collected via analytics cookies (only with your consent).
            </li>
            <li>
              <strong>Cookie preferences</strong> — your accept/decline choice is stored in your
              browser&apos;s local storage.
            </li>
          </ul>
          <p>We do not collect payment information, passwords, or sensitive personal data.</p>

          <h2>3. How We Use Your Data</h2>
          <p>We use your data for the following purposes:</p>
          <ul>
            <li>To respond to enquiries submitted through our contact form.</li>
            <li>To understand how visitors use our website and improve its content.</li>
            <li>To send you information about our services, only if you have opted in.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2>4. Legal Basis for Processing (GDPR)</h2>
          <p>
            For users in the European Economic Area (EEA) and the United Kingdom, we process your
            personal data under the following legal bases:
          </p>
          <ul>
            <li>
              <strong>Consent</strong> — for analytics cookies and marketing communications.
            </li>
            <li>
              <strong>Legitimate interests</strong> — for responding to enquiries and preventing
              fraud.
            </li>
            <li>
              <strong>Legal obligation</strong> — where required by applicable law.
            </li>
          </ul>

          <h2>5. Cookies</h2>
          <p>
            We use cookies and similar technologies to operate this website and (with your consent)
            to collect analytics data. Cookies are small text files stored on your device.
          </p>
          <ul>
            <li>
              <strong>Strictly necessary cookies</strong> — required for the website to function.
              These cannot be disabled.
            </li>
            <li>
              <strong>Analytics cookies</strong> — help us understand visitor behaviour. These are
              only set after you click &ldquo;Accept All&rdquo; in our cookie banner.
            </li>
          </ul>
          <p>
            You can change your cookie preferences at any time using the Cookie Preferences link in
            the footer.
          </p>

          <h2>6. Third-Party Services</h2>
          <p>
            We may use the following third-party services, each governed by their own privacy
            policy:
          </p>
          <ul>
            <li>
              <strong>Google Analytics</strong> — website usage analytics (only with your consent).
            </li>
            <li>
              <strong>Netlify</strong> — website hosting and form handling.
            </li>
            <li>
              <strong>LinkedIn</strong> — professional networking, linked from our footer.
            </li>
          </ul>
          <p>We do not sell your data to any third party.</p>

          <h2>7. Data Retention</h2>
          <p>
            We retain contact form submissions for up to 24 months, after which they are securely
            deleted. Analytics data is retained for the period specified by the analytics provider.
            You may request deletion of your data at any time (see Section 9).
          </p>

          <h2>8. International Transfers</h2>
          <p>
            Our website is hosted on servers located in the United States (Netlify). Where personal
            data is transferred outside the EEA, we ensure appropriate safeguards are in place,
            such as Standard Contractual Clauses, in compliance with GDPR Chapter V.
          </p>

          <h2>9. Your Rights</h2>
          <p>
            Under the GDPR and applicable data protection law, you have the following rights:
          </p>
          <ul>
            <li><strong>Access</strong> — request a copy of the data we hold about you.</li>
            <li><strong>Rectification</strong> — ask us to correct inaccurate data.</li>
            <li><strong>Erasure</strong> — request deletion of your personal data.</li>
            <li><strong>Restriction</strong> — ask us to limit how we use your data.</li>
            <li><strong>Portability</strong> — receive your data in a machine-readable format.</li>
            <li><strong>Objection</strong> — object to processing based on legitimate interests.</li>
            <li>
              <strong>Withdraw consent</strong> — withdraw any consent given at any time without
              affecting the lawfulness of prior processing.
            </li>
          </ul>
          <p>
            To exercise any of these rights, email us at{" "}
            <a href="mailto:ckchandan928@gmail.com">ckchandan928@gmail.com</a>. We will respond
            within 30 days.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise the
            &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to review
            this page periodically. Continued use of this website after any changes constitutes
            acceptance of the updated policy.
          </p>

          <h2>11. Contact &amp; Complaints</h2>
          <p>
            If you have questions about this policy or how we handle your data, please contact us
            at <a href="mailto:ckchandan928@gmail.com">ckchandan928@gmail.com</a>.
          </p>
          <p>
            If you are based in the EEA and believe we have not handled your data lawfully, you
            have the right to lodge a complaint with your local supervisory authority (e.g., the
            Information Commissioner&apos;s Office in the UK).
          </p>

        </div>
      </section>
    </>
  );
}
