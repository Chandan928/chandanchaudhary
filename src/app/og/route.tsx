import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: '#0F0F1A',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background accent */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)',
          display: 'flex',
        }} />

        {/* CC Icon */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '56px',
          height: '56px',
          background: '#1A1A2E',
          border: '2px solid #6C63FF',
          borderRadius: '12px',
          marginBottom: '32px',
          fontSize: '20px',
          fontWeight: 700,
          color: 'white',
        }}>
          CC
        </div>

        {/* Name */}
        <div style={{
          fontSize: '28px',
          fontWeight: 600,
          color: '#6C63FF',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '16px',
          display: 'flex',
        }}>
          Chandan Chaudhary
        </div>

        {/* Headline */}
        <div style={{
          fontSize: '56px',
          fontWeight: 700,
          color: '#E8E8F0',
          lineHeight: 1.15,
          letterSpacing: '-0.025em',
          maxWidth: '800px',
          marginBottom: '24px',
          display: 'flex',
          flexWrap: 'wrap',
        }}>
          {'Organic growth, '}
          <span style={{ color: '#6C63FF' }}>{'engineered'}</span>
          {' with AI.'}
        </div>

        {/* Subtext */}
        <div style={{
          fontSize: '24px',
          color: '#A0A0B8',
          marginBottom: '40px',
          display: 'flex',
        }}>
          SEO · GEO · AEO · AI Automation · Hyderabad, India
        </div>

        {/* Stats row */}
        <div style={{
          display: 'flex',
          gap: '48px',
          borderTop: '1px solid #2A2A4A',
          paddingTop: '32px',
          width: '100%',
        }}>
          {[
            { value: '$5M+', label: 'ARR Impact' },
            { value: '22+', label: 'Brands Served' },
            { value: '9+', label: 'Years Experience' },
          ].map(stat => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '32px', fontWeight: 700, color: '#E8E8F0', display: 'flex' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '16px', color: '#606080', display: 'flex' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
