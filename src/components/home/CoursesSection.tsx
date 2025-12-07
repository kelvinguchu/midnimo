'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Stethoscope,
  Monitor,
  FlaskConical,
  Scissors,
  Languages,
  Clock,
  Briefcase,
  BookOpen,
  ChevronRight,
} from 'lucide-react'
import { type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Course {
  id: string
  icon: LucideIcon
  title: string
  duration: string
  description: string
  modules: string[]
  careers: string
}

const courses: Course[] = [
  {
    id: 'nursing',
    icon: Stethoscope,
    title: 'Auxiliary Nursing',
    duration: '1 Year',
    description:
      'The Auxiliary Nursing course is a comprehensive program designed to provide students with the fundamental skills and knowledge necessary to support healthcare providers in various settings. This course covers topics such as basic nursing care, patient hygiene, medication administration, and first aid. Students gain practical experience in real healthcare settings, preparing them to work effectively in hospitals, clinics, and community health centers.',
    modules: [
      'Basic Anatomy and Physiology',
      'Infection Control and Hygiene',
      'Patient Care and Assistance',
      'Medication Administration',
      'Emergency Response and First Aid',
      'Practical Clinical Training',
    ],
    careers:
      'Graduates can pursue careers as nursing assistants, patient care technicians, or home health aides in various healthcare facilities.',
  },
  {
    id: 'computer',
    icon: Monitor,
    title: 'Computer Science',
    duration: '1 Year',
    description:
      "The Computer Science course at Midnimo College provides students with the technical skills essential for today's digital world. This course is ideal for individuals seeking a strong foundation in computers and information technology. The curriculum covers a wide range of topics, including computer programming, database management, networking, and cybersecurity.",
    modules: [
      'Introduction to Programming (Python or Java)',
      'Database Management Systems',
      'Computer Networks and Internet Technologies',
      'Web Development Fundamentals',
      'Cybersecurity Fundamentals',
      'IT Support and Troubleshooting',
    ],
    careers:
      'Graduates can seek positions such as IT support specialists, junior programmers, network technicians, or web developers in various industries.',
  },
  {
    id: 'pharmacology',
    icon: FlaskConical,
    title: 'Pharmacology',
    duration: '6 Months',
    description:
      'The Pharmacology course is a rigorous program designed to provide students with a deep understanding of drugs and their effects on the human body. Students will learn about different types of drugs, their therapeutic uses, side effects, and principles of safe medication administration.',
    modules: [
      'Introduction to Pharmacology',
      'Drug Classification and Mechanism of Action',
      'Therapeutic Use of Drugs',
      'Safe Medication Practices',
      'Prescription Reading and Dispensing',
      'Practical Pharmacy Training',
    ],
    careers:
      'Graduates can work as pharmacy assistants, drug dispensers, or in other support roles in pharmacies and healthcare facilities.',
  },
  {
    id: 'vocational',
    icon: Scissors,
    title: 'Vocational Skills',
    duration: 'Varies',
    description:
      'Midnimo College offers various vocational courses tailored to provide students with practical skills that are in high demand. These courses are designed for individuals looking to quickly join the workforce with specific practical abilities.',
    modules: [
      'Tailoring: Learn the basics of sewing, fabric cutting, garment construction, and fashion design.',
      'Cooking: Gain expertise in culinary arts, including food preparation, cooking techniques, and kitchen hygiene.',
      'Journalism: Develop skills in news reporting, writing, and journalistic ethics.',
    ],
    careers:
      'Graduates can pursue careers as tailors, chefs, bakers, journalists, or start their own businesses in their chosen field.',
  },
  {
    id: 'english',
    icon: Languages,
    title: 'English Language',
    duration: '1 Year',
    description:
      "The English Language course is designed to improve students' English proficiency, which is crucial for academic and professional success. This course is ideal for both beginners and those looking to refine their language skills.",
    modules: [
      'Basic to Advanced English Grammar',
      'Vocabulary Building',
      'Reading Comprehension Strategies',
      'Writing Skills (Essays, Reports, and Communication)',
      'Spoken English and Pronunciation',
      'Listening and Comprehension Exercises',
    ],
    careers:
      'Graduates with strong English skills can seek opportunities in education, customer service, administration, and any field requiring effective English communication.',
  },
]

export function CoursesSection() {
  const [activeCourse, setActiveCourse] = useState(courses[0])

  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Our Courses</h2>
          <p className="text-sm sm:text-base text-muted-foreground mx-auto">
            We offer various programs designed to prepare students for successful careers in health
            and technology.
          </p>
        </div>

        {/* Mobile: Horizontal scroll pills */}
        <div className="lg:hidden mb-6 -mx-4 px-4">
          <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
            {courses.map((course) => {
              const isActive = activeCourse.id === course.id
              return (
                <button
                  key={course.id}
                  onClick={() => setActiveCourse(course)}
                  className={cn(
                    'flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full whitespace-nowrap transition-all shrink-0 cursor-pointer',
                    isActive
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-slate-100 text-foreground hover:bg-slate-200',
                  )}
                >
                  <course.icon className="h-4 w-4" />
                  <span className="text-xs sm:text-sm font-medium">{course.title}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Desktop: Course Navigation - Left Side */}
          <div className="hidden lg:block lg:col-span-1 space-y-3">
            {courses.map((course) => {
              const isActive = activeCourse.id === course.id
              return (
                <button
                  key={course.id}
                  onClick={() => setActiveCourse(course)}
                  className={cn(
                    'w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 cursor-pointer',
                    isActive
                      ? 'bg-primary text-white shadow-lg shadow-primary/25'
                      : 'bg-slate-50 hover:bg-slate-100',
                  )}
                >
                  <div
                    className={cn(
                      'w-12 h-12 rounded-lg flex items-center justify-center shrink-0',
                      isActive ? 'bg-white/20' : 'bg-primary/10',
                    )}
                  >
                    <course.icon
                      className={cn('h-6 w-6', isActive ? 'text-white' : 'text-primary')}
                    />
                  </div>
                  <div className="grow min-w-0">
                    <h3 className={cn('font-semibold', !isActive && 'text-foreground')}>
                      {course.title}
                    </h3>
                    <p
                      className={cn(
                        'text-sm',
                        isActive ? 'text-white/80' : 'text-muted-foreground',
                      )}
                    >
                      {course.duration}
                    </p>
                  </div>
                  <ChevronRight
                    className={cn(
                      'h-5 w-5 shrink-0 transition-transform',
                      isActive ? 'text-white translate-x-1' : 'text-muted-foreground',
                    )}
                  />
                </button>
              )
            })}
          </div>

          {/* Course Details */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden p-0 border-0 shadow-xl">
              {/* Header */}
              <div className="bg-linear-to-r from-primary to-primary/80 p-5 sm:p-6 text-white">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <activeCourse.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">{activeCourse.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm text-white/90">
                        Duration: {activeCourse.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  {activeCourse.description}
                </p>
              </div>

              <CardContent className="p-5 sm:p-6 space-y-5 sm:space-y-6">
                {/* Modules */}
                <div>
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-base sm:text-lg">
                      {activeCourse.id === 'vocational' ? 'Courses Offered' : 'Key Modules'}
                    </h4>
                  </div>
                  <div className="grid gap-2 sm:gap-3 sm:grid-cols-2">
                    {activeCourse.modules.map((module, index) => (
                      <div
                        key={`${activeCourse.id}-module-${index}`}
                        className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-slate-50"
                      >
                        <Badge
                          variant="secondary"
                          className="mt-0.5 bg-primary/10 text-primary hover:bg-primary/10 text-xs"
                        >
                          {index + 1}
                        </Badge>
                        <span className="text-xs sm:text-sm text-muted-foreground">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Opportunities */}
                <div className="border-t pt-5 sm:pt-6">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-base sm:text-lg">Career Opportunities</h4>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {activeCourse.careers}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
