import { Card, CardContent } from '@/components/ui/card'

const batches = [
  { batch: 1, count: 27, label: 'Qalin-Jabino 1aad' },
  { batch: 2, count: 26, label: 'Qalin-Jabino 2aad' },
  { batch: 3, count: 33, label: 'Qalin-Jabino 3aad' },
  { batch: 4, count: 27, label: 'Qalin-Jabino 4aad' },
  { batch: 5, count: 50, label: 'Qalin-Jabino 5aad' },
  { batch: 6, count: 80, label: 'Qalin-Jabino 6aad' },
  { batch: 7, count: 102, label: 'Qalin-Jabino 7aad' },
  { batch: 8, count: 142, label: 'Qalin-Jabino 8aad' },
]

export function GraduatesSection() {
  const totalGraduates = batches.reduce((sum, batch) => sum + batch.count, 0)

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
          Ardaydii Ka Qalin-Jabisay
        </h2>

        {/* Total Stats */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2">{totalGraduates}</p>
          <p className="text-lg sm:text-xl opacity-90">Qalin-jabiyeyaal Wadarta Guud</p>
        </div>

        <p className="text-center text-base sm:text-lg opacity-90 mx-auto mb-8 sm:mb-10 px-2">
          Ilaa iyo hadda, Machadka Midnimo wuxuu si wayn ugu guuleystay inuu ka qalin-jabiyo{' '}
          {totalGraduates} arday oo u qaybsan 8 qalin-jabino, mid waliba oo leh xirfadaha iyo
          aqoonta lagama maarmaanka u ah si ay ugu guuleystaan waaxda caafimaadka.
          Qalin-jabiyeyaashani hadda waxay ka shaqeeyaan xarumaha caafimaad ee kala duwan ee
          gobolka, oo ay ku jiraan isbitaallada, rugaha caafimaadka, iyo xarumaha caafimaadka
          maskaxda, halkaas oo ay saamyn la taaban karo ku yeeshayaan caafimaadka iyo ladnaanta
          bulshadooda.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mx-auto">
          {batches.map((item) => (
            <Card key={item.batch} className="bg-white/10 border-white/20">
              <CardContent className="p-4 sm:pt-6 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white">{item.count}</p>
                <p className="text-xs sm:text-sm text-white/80">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
