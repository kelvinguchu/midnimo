import Image from 'next/image'

export function AboutHeroSection() {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] lg:h-[calc(100vh-5rem)] min-h-[300px] sm:min-h-[400px] flex items-center overflow-hidden w-full">
      <Image
        src="/school_images/training.jpg"
        alt="Ardayda Midnimo College oo tababar ku jira"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="w-full px-4 sm:px-6 text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          <span className="relative inline-block pb-2 border-b-4 border-primary">
            Waa Kuwee Annaga?
          </span>
        </h1>
      </div>
    </section>
  )
}
