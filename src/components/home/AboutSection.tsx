import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function AboutSection() {
  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Nagu Saabsan</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Midnimo College of Health and Technology, waxaan ku dadaalnaa awood siinta jiilka xiga
              ee xirfadlayaasha caafimaadka iyo shaqaalaha xirfad leh ee gobolka Mudug. La aasaasay
              2017, kulliyaddeena waxay si degdeg ah u noqotay machadka ugu sarreeya Waxbarashada
              iyo Tababarka Xirfadeed iyo Farsamada (TVET) ee Galdogob, gobolka Mudug, Soomaaliya.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Hadafkeenna waa in aan bixinno waxbarasho tayo sare leh oo dhab ah oo u diyaarisa
              ardaydeena xirfadaha iyo aqoonta ay u baahan yihiin si ay ugu guulaystaan xirfadahooda
              oo ay wax ugu biiriyaan caafimaadka iyo ladnaanta bulshada.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Midnimo College waxaa la aasaasay iyadoo laga jawaabayo baahi aad muhiim ah oo la
              ogaaday qiimayn 2017, taasoo muujisay yaraanta bixiyeyaasha caafimaadka oo si
              wanaagsan loo tababaray ee gobolka. Iyadoo la aqoonsanayo farqigan, waxaan u
              naqshadeynay manhajkeena si uu diiradda u saaro tababarka dhab ah ee ku saleysan ficil
              si loo diyaariyo ardaydeena inay la kulmaan baahiyaha warshadaha caafimaadka.
            </p>
            <Button asChild className="cursor-pointer">
              <Link href="/about">Wax Badan Ka Ogow Annaga</Link>
            </Button>
          </div>
          <div className="relative aspect-4/3 lg:aspect-auto lg:h-[400px] xl:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden">
            <Image
              src="/school_images/students-1.jpg"
              alt="Ardayda Midnimo College"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
