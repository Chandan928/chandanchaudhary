import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/api/', '/_next/image'],
      },
    ],
    sitemap: 'https://chandanchaudhary.com/sitemap.xml',
  }
}
