'use client'

import dynamic from 'next/dynamic'

// Load the entire studio only on the client — prevents React 19 / Sanity
// useSyncExternalStore conflict during SSR
const StudioClientWrapper = dynamic(
  () => import('./StudioClientWrapper').then((mod) => mod.StudioClientWrapper),
  { ssr: false }
)

export default function StudioPage() {
  return <StudioClientWrapper />
}
