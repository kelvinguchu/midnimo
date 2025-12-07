import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Calendar, ArrowLeft } from 'lucide-react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

async function getArticle(slug: string) {
  const payload = await getPayload({ config })
  const articles = await payload.find({
    collection: 'articles',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 1,
    limit: 1,
  })
  return articles.docs[0] || null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  const featuredImage = typeof article.featuredImage === 'object' ? article.featuredImage : null

  return {
    title: article.title,
    description: `Read ${article.title} on Midnimo College.`,
    openGraph: {
      title: article.title,
      description: `Read ${article.title} on Midnimo College.`,
      images: featuredImage?.url ? [featuredImage.url] : [],
      type: 'article',
      publishedTime: article.createdAt,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  readonly params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    notFound()
  }

  const featuredImage = typeof article.featuredImage === 'object' ? article.featuredImage : null

  return (
    <div className="flex flex-col">
      {/* Hero Section with Featured Image */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center">
        {featuredImage?.url ? (
          <Image
            src={featuredImage.url}
            alt={featuredImage.alt || article.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-slate-300" />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm sm:text-base">
            <Calendar className="h-4 w-4" />
            <span>
              {new Date(article.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/media"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Media
            </Link>

            {/* Rich Text Content */}
            <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg">
              <RichText data={article.body as SerializedEditorState} />
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}
