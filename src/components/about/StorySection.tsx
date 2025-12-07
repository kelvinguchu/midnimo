import Image from 'next/image'

export function StorySection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="relative aspect-4/3 lg:aspect-auto lg:min-h-full rounded-xl sm:rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image
              src="/school_images/graduation-1.jpg"
              alt="Midnimo College Graduation Ceremony"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our History</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Midnimo Institute was established in 2017 and has quickly become the leading
              institution for health and science education in Mudug. The institute was founded
              following a comprehensive study that revealed a shortage of trained health
              professionals in the region, which affected the quality and accessibility of
              healthcare.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              To address this gap, Midnimo Institute offers vocational training that provides
              students with the hands-on experience necessary to succeed in the healthcare industry.
              Today, our graduates work in various health facilities in the Galdogob region,
              providing essential services to an estimated population of 208,000. Their contribution
              has had a significant impact on the local health system, improving health outcomes and
              addressing key regional challenges. The success of our graduates demonstrates the
              vital role Midnimo Institute plays in developing a skilled workforce to meet the
              health needs of Mudug and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
