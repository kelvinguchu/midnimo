import { Card, CardContent } from '@/components/ui/card'
import { GraduationCap } from 'lucide-react'

const faculty = [
  { name: 'Nuh Abdi Mohamed', subject: 'Nursing Teacher' },
  { name: 'Abdiqadir Abdinur Osman', subject: 'Pharmacology' },
  { name: 'Mohamed Ahmed Hassan', subject: 'Computer Science' },
  { name: 'Abdirahman Hassan Osman', subject: 'Tailoring' },
  { name: 'Ibrahim Hassan Osman', subject: 'Mathematics' },
  { name: 'Abdiqadir Abdinur Osman', subject: 'Nursing Practical' },
  { name: 'Mahad Said Hassan', subject: 'English Language' },
  { name: 'Mohamed Abdi Mohamed', subject: 'Journalism' },
]

export function FacultySection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Our Faculty</h2>
          <p className="text-sm sm:text-base text-muted-foreground mx-auto px-2">
            Our faculty are highly qualified professionals dedicated to providing students with
            high-quality education and practical training.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {faculty.map((teacher, index) => (
            <Card
              key={`${teacher.name}-${index}`}
              className="text-center hover:shadow-lg transition-shadow group"
            >
              <CardContent className="p-4 sm:pt-8 sm:pb-6 space-y-2 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div className="space-y-0.5 sm:space-y-1">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">
                    {teacher.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{teacher.subject}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
