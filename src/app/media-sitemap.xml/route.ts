import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET() {
  const baseUrl = 'https://midnimocollege.org'
  const payload = await getPayload({ config })

  const articles = await payload.find({
    collection: 'articles',
    depth: 0,
    limit: 1000,
    sort: '-createdAt',
  })

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${articles.docs
  .map((article) => {
    const title = article.title
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&apos;')

    return `  <url>
    <loc>${baseUrl}/media/${article.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>Midnimo College</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${new Date(article.createdAt).toISOString()}</news:publication_date>
      <news:title>${title}</news:title>
    </news:news>
  </url>`
  })
  .join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
