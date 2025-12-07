import { Card, CardContent } from '@/components/ui/card'

const batches = [
  { batch: 1, count: 27, label: '1st Batch' },
  { batch: 2, count: 26, label: '2nd Batch' },
  { batch: 3, count: 33, label: '3rd Batch' },
  { batch: 4, count: 27, label: '4th Batch' },
  { batch: 5, count: 50, label: '5th Batch' },
  { batch: 6, count: 80, label: '6th Batch' },
  { batch: 7, count: 102, label: '7th Batch' },
  { batch: 8, count: 142, label: '8th Batch' },
]

export function GraduatesSection() {
  const totalGraduates = batches.reduce((sum, batch) => sum + batch.count, 0)

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
          Our Graduates
        </h2>

        {/* Total Stats */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2">{totalGraduates}</p>
          <p className="text-lg sm:text-xl opacity-90">Total Graduates</p>
        </div>

        <p className="text-center text-base sm:text-lg opacity-90 mx-auto mb-8 sm:mb-10 px-2">
          So far, Midnimo Institute has successfully graduated {totalGraduates} students across 8
          batches, each equipped with the necessary skills and knowledge to succeed in the health
          sector. These graduates now work in various health facilities in the region, including
          hospitals, clinics, and mental health centers, where they are making a significant impact
          on the health and well-being of their community.
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
