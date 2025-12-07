import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function AboutSection() {
  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">About Us</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              At Midnimo College of Health and Technology, we strive to empower the next generation
              of health professionals and skilled workers in the Mudug region. Established in 2017,
              our college has quickly become the premier Technical and Vocational Education and
              Training (TVET) institute in Galdogob, Mudug region, Somalia.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Our mission is to provide high-quality, practical education that equips our students
              with the skills and knowledge they need to succeed in their careers and contribute to
              the health and well-being of the community.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Midnimo College was founded in response to a critical need identified in a 2017
              assessment, which highlighted a shortage of well-trained healthcare providers in the
              region. Recognizing this gap, we designed our curriculum to focus on practical,
              action-based training to prepare our students to meet the needs of the healthcare
              industry.
            </p>
            <Button asChild className="cursor-pointer">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="relative aspect-4/3 lg:aspect-auto lg:h-[400px] xl:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden">
            <Image
              src="/school_images/students-1.jpg"
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
