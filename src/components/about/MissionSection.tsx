import Image from 'next/image'

export function MissionSection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our Mission</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Midnimo Institute was established with a strong purpose to provide high-quality
              vocational education for the youth of Galdogob and its surroundings. Recognizing the
              critical need for health professionals, our institution is dedicated to bridging the
              gap between education and labor market needs.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our main goal is to empower youth, especially those who have not had the opportunity
              to complete formal education, by providing them with the essential skills and
              knowledge to make a significant contribution to society. Through our tailored
              educational programs, we aim to create a generation of highly capable and
              compassionate health professionals who are not only skilled but also deeply committed
              to improving public health and well-being.
            </p>
          </div>
          <div className="relative aspect-4/3 lg:aspect-auto lg:min-h-full rounded-xl sm:rounded-2xl overflow-hidden">
            <Image
              src="/school_images/learning-1.jpg"
              alt="Midnimo College Students"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
