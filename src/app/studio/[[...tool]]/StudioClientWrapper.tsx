'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity/studio-config'

export function StudioClientWrapper() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
      <NextStudio config={config} />
    </div>
  )
}
