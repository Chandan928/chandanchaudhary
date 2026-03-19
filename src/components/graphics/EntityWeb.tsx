export function EntityWeb() {
  return (
    <svg
      viewBox="0 0 280 280"
      aria-hidden="true"
      style={{ width: "100%", maxWidth: "280px", height: "auto" }}
    >
      {/* Outer orbit ring */}
      <circle cx="140" cy="140" r="120" fill="none" stroke="var(--color-border)" strokeWidth="0.5" strokeDasharray="2 4" />

      {/* Connection lines from center to satellites */}
      <line x1="140" y1="140" x2="140" y2="40" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="140" y1="140" x2="230" y2="90" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="140" y1="140" x2="220" y2="200" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="140" y1="140" x2="60" y2="200" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="140" y1="140" x2="50" y2="90" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="3 3" />

      {/* Center node */}
      <circle cx="140" cy="140" r="32" fill="var(--color-accent-subtle)" stroke="var(--color-accent)" strokeWidth="2" />
      <text x="140" y="136" textAnchor="middle" fill="var(--color-accent)" fontSize="8" fontFamily="var(--font-display)" fontWeight="700">Your</text>
      <text x="140" y="147" textAnchor="middle" fill="var(--color-accent)" fontSize="8" fontFamily="var(--font-display)" fontWeight="700">Brand</text>

      {/* Satellite: Top — Authority */}
      <circle cx="140" cy="40" r="24" fill="var(--color-surface)" stroke="var(--color-accent-border)" strokeWidth="1.5" />
      <text x="140" y="44" textAnchor="middle" fill="var(--color-text-muted)" fontSize="8" fontFamily="var(--font-display)" fontWeight="600">Authority</text>

      {/* Satellite: Top-right — Citations */}
      <circle cx="230" cy="90" r="24" fill="var(--color-surface)" stroke="var(--color-accent-border)" strokeWidth="1.5" />
      <text x="230" y="94" textAnchor="middle" fill="var(--color-text-muted)" fontSize="8" fontFamily="var(--font-display)" fontWeight="600">Citations</text>

      {/* Satellite: Bottom-right — Structured Data */}
      <circle cx="220" cy="200" r="24" fill="var(--color-surface)" stroke="var(--color-accent-border)" strokeWidth="1.5" />
      <text x="220" y="196" textAnchor="middle" fill="var(--color-text-muted)" fontSize="7.5" fontFamily="var(--font-display)" fontWeight="600">Structured</text>
      <text x="220" y="207" textAnchor="middle" fill="var(--color-text-muted)" fontSize="7.5" fontFamily="var(--font-display)" fontWeight="600">Data</text>

      {/* Satellite: Bottom-left — Entity Signals */}
      <circle cx="60" cy="200" r="24" fill="var(--color-surface)" stroke="var(--color-accent-border)" strokeWidth="1.5" />
      <text x="60" y="196" textAnchor="middle" fill="var(--color-text-muted)" fontSize="7.5" fontFamily="var(--font-display)" fontWeight="600">Entity</text>
      <text x="60" y="207" textAnchor="middle" fill="var(--color-text-muted)" fontSize="7.5" fontFamily="var(--font-display)" fontWeight="600">Signals</text>

      {/* Satellite: Top-left — Content */}
      <circle cx="50" cy="90" r="24" fill="var(--color-surface)" stroke="var(--color-accent-border)" strokeWidth="1.5" />
      <text x="50" y="94" textAnchor="middle" fill="var(--color-text-muted)" fontSize="8" fontFamily="var(--font-display)" fontWeight="600">Content</text>

      {/* Accent dots at connection midpoints */}
      <circle cx="140" cy="90" r="3" fill="var(--color-accent)" opacity="0.4" />
      <circle cx="185" cy="115" r="3" fill="var(--color-accent)" opacity="0.4" />
      <circle cx="180" cy="170" r="3" fill="var(--color-accent)" opacity="0.4" />
      <circle cx="100" cy="170" r="3" fill="var(--color-accent)" opacity="0.4" />
      <circle cx="95" cy="115" r="3" fill="var(--color-accent)" opacity="0.4" />
    </svg>
  )
}
