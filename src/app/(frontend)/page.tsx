import type { Metadata } from 'next'
import {
  HeroSection,
  AboutSection,
  WhyChooseUsSection,
  CoursesSection,
  StudentsLifeSection,
  CTASection,
} from '@/components/home'

export const metadata: Metadata = {
  description:
    'Welcome to Midnimo College of Health and Technology, the premier institution for health education in Galdogob.',
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <CoursesSection />
      <StudentsLifeSection />
      <CTASection />
    </div>
  )
}
