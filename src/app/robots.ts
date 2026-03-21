// READY TO DEPLOY — push to production only after Lighthouse score 90+ confirmed
// Do not deploy this change until all pre-launch fixes are verified
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
    ],
    sitemap: 'https://chandanchaudhary.com/sitemap.xml',
    host: 'https://chandanchaudhary.com',
  }
}
