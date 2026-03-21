// Bundle analyzer: ANALYZE=true npm run build — review client bundle for unexpected bloat
// Key finding areas: lucide-react (use named imports only), react-icons, date libraries
import withBundleAnalyzer from '@next/bundle-analyzer'
import type { NextConfig } from 'next'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  transpilePackages: ['next-sanity'],
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.chandanchaudhary.com',
          },
        ],
        destination: 'https://chandanchaudhary.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default bundleAnalyzer(nextConfig)
