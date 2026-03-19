export function GrowthFlywheel() {
  return (
    <svg
      viewBox="0 0 300 300"
      aria-hidden="true"
      style={{ width: "100%", maxWidth: "280px", height: "auto" }}
    >
      {/* Dashed outer circle */}
      <circle cx="150" cy="150" r="100" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />

      {/* Inner connecting lines - subtle */}
      <line x1="150" y1="50" x2="250" y2="150" stroke="var(--color-border)" strokeWidth="1" opacity="0.5" />
      <line x1="250" y1="150" x2="150" y2="250" stroke="var(--color-border)" strokeWidth="1" opacity="0.5" />
      <line x1="150" y1="250" x2="50" y2="150" stroke="var(--color-border)" strokeWidth="1" opacity="0.5" />
      <line x1="50" y1="150" x2="150" y2="50" stroke="var(--color-border)" strokeWidth="1" opacity="0.5" />

      {/* Curved arrows between nodes using arcs */}
      {/* Top → Right */}
      <path d="M 168 60 A 100 100 0 0 1 240 168" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="0" opacity="0.6" markerEnd="url(#arrow)" />
      {/* Right → Bottom */}
      <path d="M 240 182 A 100 100 0 0 1 162 240" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.6" markerEnd="url(#arrow)" />
      {/* Bottom → Left */}
      <path d="M 138 240 A 100 100 0 0 1 60 162" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.6" markerEnd="url(#arrow)" />
      {/* Left → Top */}
      <path d="M 60 138 A 100 100 0 0 1 138 60" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.6" markerEnd="url(#arrow)" />

      {/* Arrow marker */}
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" fill="var(--color-accent)" opacity="0.7" />
        </marker>
      </defs>

      {/* Node circles at compass points */}
      {/* Top — Technical */}
      <circle cx="150" cy="50" r="26" fill="var(--color-accent-subtle)" stroke="var(--color-accent)" strokeWidth="1.5" />
      <text x="150" y="46" textAnchor="middle" fill="var(--color-accent)" fontSize="8" fontFamily="var(--font-display)" fontWeight="600">Technical</text>
      <text x="150" y="57" textAnchor="middle" fill="var(--color-accent)" fontSize="8" fontFamily="var(--font-display)" fontWeight="600">SEO</text>

      {/* Right — Content */}
      <circle cx="250" cy="150" r="26" fill="var(--color-accent-subtle)" stroke="var(--color-accent)" strokeWidth="1.5" />
      <text x="250" y="146" textAnchor="middle" fill="var(--color-accent)" fontSize="8" fontFamily="var(--font-display)" fontWeight="600">Content</text>
      <text x="250" y="157" textAnchor="middle" fill="var(--color-accent)" fontSize="8" fontFamily="var(--font-display)" fontWeight="600">System</text>

      {/* Bottom — Revenue */}
      <circle cx="150" cy="250" r="26" fill="var(--color-accent-subtle)" stroke="var(--color-accent)" strokeWidth="1.5" />
      <text x="150" y="246" textAnchor="middle" fill="var(--color-accent)" fontSize="8" fontFamily="var(--font-display)" fontWeight="600">Revenue</text>
      <text x="150" y="257" textAnchor="middle" fill="var(--color-accent)" fontSize="8" fontFamily="var(--font-display)" fontWeight="600">Growth</text>

      {/* Left — Authority */}
      <circle cx="50" cy="150" r="26" fill="var(--color-accent-subtle)" stroke="var(--color-accent)" strokeWidth="1.5" />
      <text x="50" y="146" textAnchor="middle" fill="var(--color-accent)" fontSize="8" fontFamily="var(--font-display)" fontWeight="600">Link</text>
      <text x="50" y="157" textAnchor="middle" fill="var(--color-accent)" fontSize="8" fontFamily="var(--font-display)" fontWeight="600">Authority</text>

      {/* Center text */}
      <circle cx="150" cy="150" r="32" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
      <text x="150" y="146" textAnchor="middle" fill="var(--color-text-muted)" fontSize="9" fontFamily="var(--font-display)" fontWeight="600">SEO</text>
      <text x="150" y="158" textAnchor="middle" fill="var(--color-text-muted)" fontSize="9" fontFamily="var(--font-display)" fontWeight="600">System</text>
    </svg>
  )
}
