import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RifRush App - AI Visuals for Shopify',
  description: 'Generate banners, Reels, and more in 30 seconds',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const { locale } = router
  const [currentLang, setCurrentLang] = useState(locale || 'en')

  const switchLang = () => {
    const newLang = currentLang === 'en' ? 'ru' : 'en'
    setCurrentLang(newLang)
    router.push(router.pathname, router.asPath, { locale: newLang })
  }

  return (
    <html lang={currentLang}>
      <body className={inter.className}>
        <header className="fixed top-4 right-4 z-10">
          <button
            onClick={switchLang}
            className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md text-sm font-medium hover:bg-white transition"
          >
            {currentLang === 'en' ? 'RU' : 'EN'}
          </button>
        </header>
        {children}
      </body>
    </html>
  )
}
