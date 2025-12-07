import type { Metadata } from 'next'
import {
  AboutHeroSection,
  MissionSection,
  StorySection,
  FemaleEducationSection,
  GraduatesSection,
  FacultySection,
} from '@/components/about'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Midnimo College, our mission, history, and commitment to health education excellence in Somalia.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHeroSection />
      <MissionSection />
      <StorySection />
      <FemaleEducationSection />
      <GraduatesSection />
      <FacultySection />
    </div>
  )
}
