import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, ArrowRight } from 'lucide-react'
import { getPayload } from 'payload'
import config from '@payload-config'

export const dynamic = 'force-dynamic'

async function getArticles() {
  const payload = await getPayload({ config })
  const articles = await payload.find({
    collection: 'articles',
    sort: '-createdAt',
    depth: 1,
  })
  return articles.docs
}

export default async function MediaPage() {
  const articles = await getArticles()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-[40vh] md:h-[50vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/school_images/graduation-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="relative inline-block pb-2 border-b-4 border-primary">Wararka</span>
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            Wararka ugu dambeeya ee ku saabsan Midnimo College iyo dhacdooyinka.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-6 md:py-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Wali ma jiraan maqaallo. Fadlan mar kale soo booqo.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => {
                const featuredImage =
                  typeof article.featuredImage === 'object' ? article.featuredImage : null

                return (
                  <Link
                    key={article.id}
                    href={`/media/${article.slug}`}
                    className="group cursor-pointer"
                  >
                    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow pt-0">
                      <div className="relative h-48 sm:h-56">
                        {featuredImage?.url ? (
                          <Image
                            src={featuredImage.url}
                            alt={featuredImage.alt || article.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                            <span className="text-muted-foreground">No image</span>
                          </div>
                        )}
                      </div>
                      <CardContent className="">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-2">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>
                            {new Date(article.createdAt).toLocaleDateString('so-SO', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                        <h3 className="font-semibold text-base sm:text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <div className="flex items-center gap-1 text-primary text-sm font-medium">
                          Akhri Wax Badan
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
