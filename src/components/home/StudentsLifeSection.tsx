import Image from 'next/image'
import { Trophy, Lightbulb, FolderKanban, BookOpen } from 'lucide-react'
import { type LucideIcon } from 'lucide-react'

interface Activity {
  icon: LucideIcon
  title: string
  description: string
  image: string
}

const activities: Activity[] = [
  {
    icon: Trophy,
    title: 'Ciyaaraha',
    description: 'Fayoqabka jirka iyo dhisidda kooxda iyagoo loo marayo ciyaaraha kala duwan.',
    image: '/school_images/sports-1.jpg',
  },
  {
    icon: Lightbulb,
    title: 'Hogaaminta',
    description:
      'Kobcinta hogaamiyeyaasha mustaqbalka iyagoo loo marayo ka qeybgalka bulshada iyo dadaallada.',
    image: '/school_images/communitywalk-1.jpg',
  },
  {
    icon: FolderKanban,
    title: 'Mashruucyada',
    description: 'Mashruucyo dhab ah oo u diyaariya ardayda caqabadaha nolosha dhabta ah.',
    image: '/school_images/training.jpg',
  },
  {
    icon: BookOpen,
    title: 'Waxbarashada',
    description:
      'Waxbarasho tayo leh oo lagu bixiyo fasallo casri ah iyo macallimiin la isku halayn karo.',
    image: '/school_images/learning-1.jpg',
  },
]

export function StudentsLifeSection() {
  return (
    <section className="py-6 md:py-8 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Nolosha Ardayda
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mx-auto">
            Ardaydayadu waxay ka qeybgalaan hawlo kala duwan oo ka baxsan fasalka.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl"
            >
              <div className="relative h-[200px] sm:h-[250px] md:h-[300px]">
                <Image
                  src={activity.image}
                  alt={`${activity.title} ee Midnimo College`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <activity.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  <h3 className="text-lg sm:text-xl font-bold">{activity.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-white/80">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
