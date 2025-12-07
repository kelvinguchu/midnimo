import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/media', label: 'News' },
  { href: '/contact', label: 'Contact Us' },
]

const courses = ['Nursing', 'Midwifery', 'Lab Technician', 'Pharmacy', 'Public Health']

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* College Info */}
          <div className="space-y-5 sm:space-y-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 cursor-pointer">
              <Image
                src="/logo.png"
                alt="Midnimo College Logo"
                width={60}
                height={60}
                className="rounded-lg invert brightness-0"
              />
              <div>
                <h2 className="text-lg font-bold leading-tight">Midnimo College</h2>
                <p className="text-sm text-slate-400">Health & Technology</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering the next generation of health professionals in the Mudug region through
              quality education and practical training.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/people/Midnimo-College-Of-Health-and-Technology/100063880560315/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-all hover:scale-110 hover:bg-primary/80 cursor-pointer"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h6 className="text-base sm:text-lg font-semibold">Quick Links</h6>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-slate-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Courses */}
          <div className="space-y-4 sm:space-y-6">
            <h6 className="text-base sm:text-lg font-semibold">Our Courses</h6>
            <ul className="space-y-2 sm:space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <span className="text-sm sm:text-base text-slate-400">{course}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <h6 className="text-base sm:text-lg font-semibold">Contact Us</h6>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3 text-slate-400">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Galdogob, Mudug Region, Somalia</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-slate-400">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <p>+252 907688993</p>
                  <p>+252 907021177</p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-slate-400">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">midnimicollege2017@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-slate-400">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <p>Aroornimo: 8AM - 12PM</p>
                  <p>Galabnimo: 4PM - 6PM</p>
                  <p>Habeennimo: 6:15PM - 9:30PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500">
            <p>© {currentYear} Midnimo College. Dhammaan xuquuqda way dhowran tahay.</p>
            <a
              href="https://www.kulmi.digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400 transition-colors cursor-pointer"
            >
              Waxaa sameeyay Kulmi Digital
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
