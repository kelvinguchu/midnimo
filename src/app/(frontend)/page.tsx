import {
  HeroSection,
  AboutSection,
  WhyChooseUsSection,
  CoursesSection,
  StudentsLifeSection,
  CTASection,
} from '@/components/home'

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
