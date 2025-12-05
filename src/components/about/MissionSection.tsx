import Image from 'next/image'

export function MissionSection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Hadafkeena</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Machadka Midnimo waxaa loo aasaasay ujeeddo adag oo ah in la bixiyo waxbarasho
              xirfadeed oo tayo sare leh oo loogu talagalay dhalinyarada Galdogob iyo nawaaxigeeda.
              Markaan aqoonsanay baahida muhiimka ah ee xirfadleyda caafimaadka, hay&apos;addayada
              waxay u heellan tahay inay xidho farqiga u dhexeeya waxbarashada iyo baahiyaha shaqo
              ee suuqa.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Hadafkeena ugu weyn waa in aan awoodsiino dhalinyarada, gaar ahaan kuwa aan fursad u
              helin inay dhamaystaan waxbarashada caadiga ah, iyadoo loo siinayo xirfadaha iyo
              aqoonta lagama maarmaanka u ah si ay wax weyn ugu biiriyaan bulshada. Iyada oo aan ku
              mareyno barnaamijyadeena waxbarasho ee loo qaabeeyay, waxaan ujeedadeenu tahay inaan
              abuurno jiil xirfadleyda caafimaad oo aad u awood badan oo naxariis leh kuwaas oo aan
              kaliya xirfad lahayn balse sidoo kale si qoto dheer ugu heellan wanaajinta caafimaadka
              iyo ladnaanta dadweynaha.
            </p>
          </div>
          <div className="relative aspect-4/3 lg:aspect-auto lg:min-h-full rounded-xl sm:rounded-2xl overflow-hidden">
            <Image
              src="/school_images/learning-1.jpg"
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
