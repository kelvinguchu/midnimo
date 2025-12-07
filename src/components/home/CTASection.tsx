import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'

export function CTASection() {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-[60px] md:h-20 rotate-180"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-white"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20 relative z-10">
        <div className="mx-auto text-center space-y-4 md:space-y-6">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Are You Ready to Start Your <span className="block">Healthcare or Tech Career?</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 mx-auto leading-relaxed px-2">
            Join hundreds of graduates from Midnimo College who are now working in healthcare
            facilities across the region. Take the first step towards a rewarding career.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 group cursor-pointer"
            >
              <Link href="/contact" className="flex items-center justify-center gap-2">
                Register Now
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/30 bg-white/5 text-white hover:bg-white hover:text-primary font-semibold text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 backdrop-blur-sm cursor-pointer"
            >
              <Link href="tel:+252907688993" className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
