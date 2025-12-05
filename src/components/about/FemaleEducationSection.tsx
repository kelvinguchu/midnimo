import Image from 'next/image'
import { Heart, GraduationCap, Users } from 'lucide-react'

export function FemaleEducationSection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              U Heellankeena Waxbarashada Haweenka
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Machadka Midnimo, waxaan si qoto dheer u rumeysanahay awoodda doorashada waxbarashada,
              gaar ahaan nolosha haweenka. Waxaan mudnaanta siinaa waxbarashada haweenka, iyadoo
              noqotay ujeeddadeena ugu weyn, sidaas darteedna inta badan ardaydayada waa haween.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Iyadoo la aqoonsanayo caqabadaha dhaqaalaha ah ee ay wajahaan qaar badan oo ka tirsan
              bulshadayada, waxaan sidoo kale siinaa deeqo waxbarasho ardayda ka timid qoysas
              dhaqaale xumo ku jira, si loo hubiyo in cidna dib looga tegi waayo barashada
              waxbarasho. Iyada oo aan ku mareyno dadaalladan, waxaan ujeedadeenu tahay inaan
              awoodsiino haweenka oo aan u abuurno fursado ay ku guuleystaan oo ay si macno leh wax
              ugu biiriyaan bulshadooda.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2 sm:pt-4">
              <div className="text-center p-2 sm:p-4 bg-primary/5 rounded-lg sm:rounded-xl">
                <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-1 sm:mb-2" />
                <p className="text-xl sm:text-2xl font-bold text-primary">85%</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Ardayda Haween</p>
              </div>
              <div className="text-center p-2 sm:p-4 bg-primary/5 rounded-lg sm:rounded-xl">
                <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-1 sm:mb-2" />
                <p className="text-xl sm:text-2xl font-bold text-primary">487</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Qalin-jabiyeyaal</p>
              </div>
              <div className="text-center p-2 sm:p-4 bg-primary/5 rounded-lg sm:rounded-xl">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-1 sm:mb-2" />
                <p className="text-xl sm:text-2xl font-bold text-primary">8</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Xaflado</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-4/3 lg:aspect-auto lg:min-h-full rounded-xl sm:rounded-2xl overflow-hidden">
            <Image
              src="/school_images/students-3.jpg"
              alt="Ardayda haweenka ee Midnimo College"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
