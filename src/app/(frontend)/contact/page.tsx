import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-[40vh] md:h-[50vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/school_images/eye_test.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="relative inline-block pb-2 border-b-4 border-primary">
              Nala Soo Xiriir
            </span>
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            Waxaan diyaar u nahay inaan kaa caawino. Nala soo xiriir telefoon ama email.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="grid gap-4 sm:gap-6">
              {/* Phone */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-base sm:text-lg">Telefoon</h3>
                      <div className="space-y-1">
                        <a
                          href="tel:+252907688993"
                          className="block text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                        >
                          +252 907688993
                        </a>
                        <a
                          href="tel:+252907021177"
                          className="block text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                        >
                          +252 907021177
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-base sm:text-lg">Email</h3>
                      <a
                        href="mailto:midnimicollege2017@gmail.com"
                        className="block text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                      >
                        midnimicollege2017@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-base sm:text-lg">Goobta</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Galdogob, Mudug Region, Somalia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-base sm:text-lg">Saacadaha Shaqada</h3>
                      <div className="text-sm sm:text-base text-muted-foreground space-y-1">
                        <p>Aroornimo: 8AM - 12PM</p>
                        <p>Galabnimo: 4PM - 6PM</p>
                        <p>Habeennimo: 6:15PM - 9:30PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
