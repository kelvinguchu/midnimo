import Image from 'next/image'
import { Heart, GraduationCap, Users } from 'lucide-react'

export function FemaleEducationSection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Our Commitment to Women's Education
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              At Midnimo Institute, we deeply believe in the power of educational choice, especially
              in the lives of women. We prioritize women's education, making it our main objective,
              and as a result, the majority of our students are women.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Recognizing the economic challenges faced by many in our community, we also provide
              scholarships to students from low-income families to ensure that no one is left behind
              in their education. Through these efforts, our goal is to empower women and create
              opportunities for them to succeed and meaningfully contribute to their communities.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2 sm:pt-4">
              <div className="text-center p-2 sm:p-4 bg-primary/5 rounded-lg sm:rounded-xl">
                <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-1 sm:mb-2" />
                <p className="text-xl sm:text-2xl font-bold text-primary">85%</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Female Students</p>
              </div>
              <div className="text-center p-2 sm:p-4 bg-primary/5 rounded-lg sm:rounded-xl">
                <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-1 sm:mb-2" />
                <p className="text-xl sm:text-2xl font-bold text-primary">487</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Graduates</p>
              </div>
              <div className="text-center p-2 sm:p-4 bg-primary/5 rounded-lg sm:rounded-xl">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-1 sm:mb-2" />
                <p className="text-xl sm:text-2xl font-bold text-primary">8</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Ceremonies</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-4/3 lg:aspect-auto lg:min-h-full rounded-xl sm:rounded-2xl overflow-hidden">
            <Image
              src="/school_images/students-3.jpg"
              alt="Female students at Midnimo College"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
