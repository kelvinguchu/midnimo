import React from 'react'
import './styles.css'
import { Poppins } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://midnimocollege.org'),
  title: {
    default: 'Midnimo College of Health and Technology',
    template: '%s | Midnimo College',
  },
  description:
    'Midnimo College of Health and Technology - Professional health education in Galdogob, Mudug, Somalia',
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'Midnimo College of Health and Technology',
    description: 'Professional health education in Galdogob, Mudug, Somalia',
    url: 'https://midnimocollege.org',
    siteName: 'Midnimo College',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Midnimo College of Health and Technology',
    description: 'Professional health education in Galdogob, Mudug, Somalia',
  },
}

export default async function RootLayout(props: { readonly children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
