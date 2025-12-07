import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://midnimocollege.org'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api'],
    },
    sitemap: [`${baseUrl}/sitemap.xml`, `${baseUrl}/media-sitemap.xml`],
  }
}
