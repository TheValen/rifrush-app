import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RifRush App - AI Visuals for Shopify',
  description: 'Generate banners, Reels, and more in 30 seconds',
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const isRu = locale === 'ru'

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className="fixed top-4 right-4 z-10 flex gap-2">
          <Link href="/" locale="en" className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md text-sm font-medium hover:bg-white transition">
            EN
          </Link>
          <Link href="/ru" locale="ru" className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md text-sm font-medium hover:bg-white transition">
            RU
          </Link>
        </div>
        {children}
      </body>
    </html>
  )
}
