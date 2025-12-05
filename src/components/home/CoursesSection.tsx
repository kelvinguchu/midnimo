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
    duration: '1 Sano',
    description:
      'Koorska Auxiliary Nursing waa barnaamij dhammaystiran oo loo qaabeeyay in lagu siiyo ardayda xirfadaha aasaasiga ah iyo aqoonta lagama maarmaanka u ah taageeridda bixiyeyaasha caafimaadka goobaha kala duwan. Koorskani wuxuu daboolayaa mawduucyo sida daryeelka kalkaaliyanimada aasaasiga ah, nadaafadda bukaanka, bixinta daawada, iyo gargaarka degdegga ah. Ardaydu waxay helayaan waayo-aragnimo dhab ah oo laga helo goobaha caafimaadka dhabta ah, iyagoo loogu diyaarinayo inay si wax ku ool ah uga shaqeeyaan isbitaallada, rugaha caafimaadka, iyo xarumaha caafimaadka bulshada.',
    modules: [
      'Anatomy-ga iyo Physiology-ga Aasaasiga ah',
      'Xakamaynta Caabuqa iyo Nadaafadda',
      'Daryeelka iyo Caawinta Bukaanka',
      'Maamulka Daawada',
      'Jawaabta Degdegga ah iyo Gargaarka Koowaad',
      'Tababarka Kliinikiga Dhab ah',
    ],
    careers:
      'Qalin jabiyeyaashu waxay raadsan karaan xirfado sida caawiyeyaasha kalkaaliyanimada, farsamooyin daryeelka bukaanka, ama caawiyeyaasha caafimaadka guriga ee xarumaha caafimaadka kala duwan.',
  },
  {
    id: 'computer',
    icon: Monitor,
    title: 'Computer Science',
    duration: '1 Sano',
    description:
      'Koorska Computer Science ee Midnimo College wuxuu siiyaa ardayda xirfadaha farsamada ee lagama maarmaanka u ah adduunka dijitaalka ah ee maanta. Koorskani waxa uu u fiican yahay shakhsiyaadka raadinaya aasaas adag oo ku saabsan kombuyuutarada iyo tiknoolajiyada macluumaadka. Manhajku wuxuu daboolayaa mawduucyo ballaaran, oo ay ku jiraan barnaamijyada kombuyuutarada, maamulka xogta, isku xirka internetka, iyo amniga internetka.',
    modules: [
      'Hordhac Barnaamijyada (Python ama Java)',
      'Nidaamyada Maamulka Xogta',
      'Shabakadaha Kombuyuutarada iyo Tiknoolajiyada Internetka',
      'Aasaaska Horumarinta Websaydka',
      'Aasaaska Amniga Internetka',
      'Taageerada IT-ga iyo Xallinta Dhibaatooyinka',
    ],
    careers:
      'Qalin jabiyeyaashu waxay raadsan karaan jagooyin sida takhasuslayaasha taageerada IT, barnaamij sameeyayaal yar, farsamooyin shabakad, ama horumariyayaasha websaydka warshadaha kala duwan.',
  },
  {
    id: 'pharmacology',
    icon: FlaskConical,
    title: 'Pharmacology',
    duration: '6 Bilood',
    description:
      'Koorska Pharmacology waa barnaamij adag oo loo qaabeeyay in lagu siiyo ardayda faham qoto dheer oo ku saabsan daawada iyo saamaynteeda jirka aadanaha. Ardaydu waxay baran doonaan noocyada kala duwan ee daawada, isticmaalkooda daaweynta, waxyeelada dhinaca, iyo mabaadi&apos;da bixinta daawada ammaan ah.',
    modules: [
      'Hordhac Pharmacology-ga',
      'Kala Soocida Daawada iyo Habka Ficilka',
      'Isticmaalka Daaweynta Daawada',
      'Dhaqamada Daawada ee Ammaan ah',
      'Akhrinta iyo Bixinta Qoraalka Dhakhtarka',
      'Tababarka Dhab ah ee Goobta Farmashiyaha',
    ],
    careers:
      'Qalin jabiyeyaashu waxay ka shaqayn karaan caawiyayaasha farmashiyaha, bixiyayaasha daawada, ama jagooyin kale oo taageero ah oo ku jira farmashiyaha iyo xarumaha caafimaadka.',
  },
  {
    id: 'vocational',
    icon: Scissors,
    title: 'Vocational Skills',
    duration: 'Way Kala Duwanaan Kartaa',
    description:
      'Midnimo College waxay bixisaa koorsoyin xirfadeed oo kala duwan oo loo habeeyay inay ardayda siiyaan xirfado dhab ah oo baahi weyn laga qabo. Koorsasyadani waxaa loogu tala galay shakhsiyaadka raadinaya inay si degdeg ah ugu biiraan shaqada iyagoo wata awoodo gaar ah oo dhab ah.',
    modules: [
      'Dharka: Baro aasaaska tolmada, goynta maryaha, dhisidda dharka, iyo naqshadeynta fashion-ka.',
      'Karinta: Hel khibrad farsamada karinta, oo ay ku jiraan diyaarinta cuntada, farsamooyinka karinta, iyo nadaafadda jikada.',
      'Saxaafadda: Horumar xirfadaha warbixinta wararka, qorista, iyo anshaxa saxaafadda.',
    ],
    careers:
      'Qalin jabiyeyaashu waxay raadsan karaan xirfado sida tollaalo, sareenjiyo, rootidhibcayaal, saxaafiyiin, ama bilaabi karaan ganacsigoodii u gaarka ahaa goobta ay doortaan.',
  },
  {
    id: 'english',
    icon: Languages,
    title: 'English Language',
    duration: '1 Sano',
    description:
      'Koorska Luuqadda Ingiriisiga waxa loo qaabeeyay in lagu wanaajiyo xirfadda Ingiriisiga ee ardayda, taas oo muhiim u ah guusha tacliimeed iyo xirfadeed. Koorskani waxa uu u fiican yahay labadaba bilowgayaasha iyo kuwa raadinaya inay sii fiicnaan xirfadahooda luuqadda.',
    modules: [
      'Naxwaha Ingiriisiga ee Aasaasiga ilaa Horumarsan',
      'Dhisida Ereybixin',
      'Xeeladaha Fahamka Akhriska',
      'Xirfadaha Qorista (Maqaallada, Warbixinaha, iyo Xiriirka)',
      'Ingiriisiga La Hadlo iyo Dhawaaqa',
      'Jimicsiyada Dhageysiga iyo Fahamka',
    ],
    careers:
      'Qalin jabiyeyaasha leh xirfado Ingiriisi adag waxay raadsan karaan fursado waxbarasho, adeegga macaamiisha, maamulka, iyo goob kasta oo u baahan xidhiidh waxtar leh oo Ingiriisi ah.',
  },
]

export function CoursesSection() {
  const [activeCourse, setActiveCourse] = useState(courses[0])

  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Koorsasheena</h2>
          <p className="text-sm sm:text-base text-muted-foreground mx-auto">
            Waxaan bixinaa barnaamijyo kala duwan oo loo qaabeeyay inay ardayda u diyaariyaan
            xirfado guul leh ee caafimaadka iyo tiknoolajiyada.
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
                        Muddada: {activeCourse.duration}
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
                      {activeCourse.id === 'vocational'
                        ? 'Koorsooyin La Bixiyo'
                        : 'Qaybaha Muhiimka ah'}
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
                    <h4 className="font-semibold text-base sm:text-lg">Fursadaha Xirfadda</h4>
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
