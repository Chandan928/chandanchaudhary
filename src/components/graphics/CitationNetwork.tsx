// Server component — no "use client" needed
// All colors via CSS variables, no hardcoded hex

export function CitationNetwork() {
  // Brand node center: (150, 116)
  // Source node centers for line endpoints
  const brandCenter = { x: 150, y: 116 }

  const sources = [
    { label: "LinkedIn", cx: 65,  cy: 30,  rx: 5,  ry: 18 },
    { label: "G2",        cx: 165, cy: 22,  rx: 5,  ry: 18 },
    { label: "Clutch",   cx: 248, cy: 30,  rx: 5,  ry: 18 },
    { label: "Forbes",   cx: 55,  cy: 202, rx: 5,  ry: 18 },
    { label: "Industry Blog", cx: 150, cy: 216, rx: 5, ry: 18 },
    { label: "Podcast",  cx: 248, cy: 202, rx: 5,  ry: 18 },
  ]

  return (
    <svg
      viewBox="0 0 300 240"
      width="100%"
      height="100%"
      aria-label="Citation network diagram showing sources linking to Your Brand"
      role="img"
    >
      <defs>
        <marker
          id="arrow-to-brand"
          markerWidth="6"
          markerHeight="6"
          refX="3"
          refY="3"
          orient="auto"
        >
          <path
            d="M0,0 L0,6 L6,3 Z"
            fill="var(--color-accent)"
            opacity="0.6"
          />
        </marker>
        {/* Subtle glow filter for brand node */}
        <filter id="brand-glow" x="-20%" y="-30%" width="140%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Dashed lines from each source to brand node */}
      {sources.map((src) => (
        <line
          key={src.label}
          x1={src.cx}
          y1={src.cy}
          x2={brandCenter.x}
          y2={brandCenter.y}
          stroke="var(--color-border)"
          strokeWidth="1"
          strokeDasharray="3 3"
          markerEnd="url(#arrow-to-brand)"
        />
      ))}

      {/* Midpoint accent dots on each line */}
      {sources.map((src) => (
        <circle
          key={`dot-${src.label}`}
          cx={(src.cx + brandCenter.x) / 2}
          cy={(src.cy + brandCenter.y) / 2}
          r="2.5"
          fill="var(--color-accent)"
          opacity="0.4"
        />
      ))}

      {/* Source nodes */}
      {sources.map((src) => (
        <g key={`node-${src.label}`}>
          <rect
            x={src.cx - 35}
            y={src.cy - 12}
            width="70"
            height="24"
            rx="4"
            fill="var(--color-surface)"
            stroke="var(--color-border)"
            strokeWidth="1"
          />
          <text
            x={src.cx}
            y={src.cy + 4}
            fontSize="8"
            fill="var(--color-text-muted)"
            textAnchor="middle"
            fontFamily="var(--font-body)"
          >
            {src.label}
          </text>
        </g>
      ))}

      {/* Central brand node */}
      <rect
        x="110"
        y="100"
        width="80"
        height="32"
        rx="6"
        fill="var(--color-accent-subtle)"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        filter="url(#brand-glow)"
      />
      <text
        x="150"
        y="120"
        fontSize="10"
        fill="var(--color-accent)"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontWeight="600"
      >
        Your Brand
      </text>
    </svg>
  )
}
