import Image from 'next/image'

export function StorySection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="relative aspect-4/3 lg:aspect-auto lg:min-h-full rounded-xl sm:rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image
              src="/school_images/graduation-1.jpg"
              alt="Xafladda Qalin-jabinta Midnimo College"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Taariikhdeena</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Machadka Midnimo waxaa la aasaasay 2017-kii, wuxuuna si degdeg ah noqday hay&apos;adda
              ugu muhiimsan waxbarashada caafimaadka iyo sayniska ee Mudug. Machadka waxaa loo
              aasaasay iyadoo la raacayay daraasad dhammaystiran oo muujisay in gobolku leeyahay
              yaraan xirfadleyda caafimaad ee tababaran, taas oo saamaysay tayada iyo helitaanka
              daryeelka caafimaad.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Si loo xalliyo farqigan, Machadka Midnimo wuxuu bixiyaa tababar xirfadeed oo siiya
              ardayda khibrad gacmeed oo lagama maarmaan u ah si ay ugu guuleystaan warshadaha
              caafimaadka. Maanta, ardaydii ka qalin-jabisay waxay ka shaqeeyaan xarumaha caafimaad
              ee kala duwan ee gobolka Galdogob, iyagoo adeegyo muhiim ah u fidiyaan shacab la
              qiyaaso 208,000. Wax-qabadkoodu wuxuu saamyn weyn ku yeeshay nidaamka caafimaadka
              maxalliga ah, isagoo wanaajinaya natiijooyinka caafimaadka iyo wax ka qabashada
              caqabadaha muhiimka ah ee gobolka. Guusha qalin-jabiyeyaashayadu waxay muujinaysaa
              doorka muhiimka ah ee Machadka Midnimo ku leeyahay horumarinta shaqaale xirfad leh si
              loo daboolo baahiyaha caafimaadka ee Mudug iyo ka baxsan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
