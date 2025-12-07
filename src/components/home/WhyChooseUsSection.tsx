import { Card, CardContent } from '@/components/ui/card'
import { Globe, Users, Heart, Award } from 'lucide-react'
import { type LucideIcon } from 'lucide-react'

interface FeatureCard {
  icon: LucideIcon
  title: string
  description: string
}

const features: FeatureCard[] = [
  {
    icon: Globe,
    title: 'Regional Impact',
    description:
      'As the only TVET college in Mudug, Midnimo College addresses the critical need for skilled healthcare providers. Our graduates are vital to local health services. Their work directly improves health outcomes in the region.',
  },
  {
    icon: Users,
    title: 'Community Focus',
    description:
      'We target youth who have not completed primary school, providing bridge courses to help them re-enter the education system. This offers a second chance at education and reduces unemployment by providing valuable skills.',
  },
  {
    icon: Heart,
    title: 'Women Empowerment',
    description:
      "With 80-85% of our students being female, we are the leading institute in Puntland focusing on women's education. We prioritize women's education to develop the region. Educated women uplift their communities and families.",
  },
  {
    icon: Award,
    title: 'Scholarships',
    description:
      'We provide free education to students from underprivileged families, making education accessible to all. Financial barriers should not limit potential. Our scholarships ensure everyone has a chance to succeed.',
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-6 md:py-8 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Why Choose Us?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mx-auto">
            Discover what makes Midnimo College the leading institute for health and vocational
            education in the Mudug region.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="hover:shadow-lg transition-shadow border-t-4 border-t-primary"
            >
              <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
