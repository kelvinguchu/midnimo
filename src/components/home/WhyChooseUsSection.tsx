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
    title: 'Saamaynta Gobolka',
    description:
      'Kulliyadda TVET ee kaliya ee Mudug, Midnimo College waxay wax ka qabataa baahida aadka ah ee bixiyeyaasha caafimaadka xirfad leh. Qalin jabiyeyaasheenu waa muhiim adeegyada caafimaadka maxalliga ah. Shaqadoodu waxay si toos ah u wanaajisaa natiijooyinka caafimaadka ee gobolka.',
  },
  {
    icon: Users,
    title: 'Diiradda Bulshada',
    description:
      'Waxaan beegsannaa dhalinyarada aan dhammaystirin dugsiyada asaasiga ah, anagoo siinaya koorsooyin marin u ah inay dib ugu soo laabtaan nidaamka waxbarashada. Tani waxay siisaa fursad labaad oo waxbarasho iyo waxay yaraynaysaa shaqo la&apos;aanta iyadoo lagu siinayo xirfado qiimo leh.',
  },
  {
    icon: Heart,
    title: 'Awood Siinta Dumarka',
    description:
      'Iyadoo 80-85% ee ardaydayadu ay yihiin dumar, waxaan nahay machadka ugu horumarsan ee Puntland ee diiradda saaraya waxbarashada dumarka. Waxaan mudnaanta siinaa waxbarashada haweenka si loo horumarinayo gobolka. Haweenka waxbaratay waxay kor u qaadaan bulshadooda iyo qoysaskooda.',
  },
  {
    icon: Award,
    title: 'Deeqo Waxbarasho',
    description:
      'Waxaan siinaa waxbarasho bilaash ah ardayda ka timid qoysaska danyarta ah, taasoo waxbarashada u fududaynaysa dhammaan. Caqabadaha maaliyaddu waa inaysan xaddiddin awoodda. Deeqahayagu waxay hubinayaan in qof walba uu helo fursadda guusha.',
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-6 md:py-8 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Maxaa Noo Dooranaysaa?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mx-auto">
            Ogaada waxa ka dhigaya Midnimo College machadka ugu horumarsan ee waxbarashada
            caafimaadka iyo xirfadda ee gobolka Mudug.
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
