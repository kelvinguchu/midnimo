import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const features = [
  { id: 'scholarships', title: 'Free Scholarships', desc: 'For underprivileged students' },
  { id: 'training', title: 'Practical Training', desc: 'Real-world medical experience' },
  { id: 'employment', title: 'Job-Ready Skills', desc: '90% employment rate' },
  { id: 'curriculum', title: 'Modern Curriculum', desc: 'Industry-aligned programs' },
]

export function HeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/school_images/students_together.jpg"
            alt="Midnimo College Students"
            fill
            priority
            className="object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-4 sm:space-y-6">
              {/* Main Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]">
                Excellence in <span className="block text-primary">Health & Technology</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-white/80 max-w-lg leading-relaxed">
                Join the top TVET institute in Mudug. We transform passionate youth into skilled
                professionals through practical training and quality education.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Button asChild size="lg" className="group cursor-pointer">
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    Register Now
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 bg-white/5 text-white hover:bg-white hover:text-black backdrop-blur-sm cursor-pointer"
                >
                  <Link href="/about">Explore Programs</Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Feature Card (visible on lg+) */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 space-y-6">
                  <h3 className="text-white text-xl font-semibold">Why Students Choose Us</h3>
                  <div className="space-y-4">
                    {features.map((item, i) => (
                      <div
                        key={item.id}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm shrink-0">
                          {i + 1}
                        </div>
                        <div>
                          <p className="text-white font-medium">{item.title}</p>
                          <p className="text-white/60 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full cursor-pointer" size="lg">
                    <Link href="/contact">Start Your Journey</Link>
                  </Button>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Since 2017
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave SVG - positioned at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[60px] md:h-20"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-primary"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section - separate, not overlapping */}
      <section className="bg-primary text-white py-6 md:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="space-y-0.5 sm:space-y-1">
              <p className="text-2xl sm:text-3xl md:text-5xl font-bold">487</p>
              <p className="text-[10px] sm:text-xs md:text-sm text-white/80">Graduates</p>
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <p className="text-2xl sm:text-3xl md:text-5xl font-bold">8</p>
              <p className="text-[10px] sm:text-xs md:text-sm text-white/80">
                Graduation Ceremonies
              </p>
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <p className="text-2xl sm:text-3xl md:text-5xl font-bold">2017</p>
              <p className="text-[10px] sm:text-xs md:text-sm text-white/80">Year Established</p>
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <p className="text-2xl sm:text-3xl md:text-5xl font-bold">85%</p>
              <p className="text-[10px] sm:text-xs md:text-sm text-white/80">Female Students</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
