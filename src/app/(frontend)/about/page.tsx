import {
  AboutHeroSection,
  MissionSection,
  StorySection,
  FemaleEducationSection,
  GraduatesSection,
  FacultySection,
} from '@/components/about'

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
