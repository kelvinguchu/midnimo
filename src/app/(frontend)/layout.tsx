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

export const metadata = {
  description:
    'Machadka Midnimo ee Caafimaadka iyo Tignoolajiyada - Waxbarashada xirfadeed ee caafimaadka Galdogob, Mudug, Soomaaliya',
  title: 'Machadka Midnimo ee Caafimaadka iyo Tignoolajiyada',
  icons: {
    icon: '/logo.png',
  },
}

export default async function RootLayout(props: { readonly children: React.ReactNode }) {
  const { children } = props

  return (
    <html
      lang="so"
      translate="no">
      <meta name="google" content="notranslate" />
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
