import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LanguageSwitcher from './LanguageSwitcher' // новый клиентский компонент

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageSwitcher />
        {children}
      </body>
    </html>
  )
}
