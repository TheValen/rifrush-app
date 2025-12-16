'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentLang, setCurrentLang] = useState('en')

  useEffect(() => {
    const segments = pathname.split('/')
    const lang = segments[1] === 'ru' ? 'ru' : 'en'
    setCurrentLang(lang)
  }, [pathname])

  const switchLang = () => {
    const newLang = currentLang === 'en' ? 'ru' : 'en'
    if (newLang === 'en') {
      router.push(pathname.replace('/ru', ''))
    } else {
      router.push('/ru' + pathname)
    }
  }

  return (
    <button
      onClick={switchLang}
      className="fixed top-4 right-4 z-10 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md text-sm font-medium hover:bg-white transition"
    >
      {currentLang === 'en' ? 'RU' : 'EN'}
    </button>
  )
}
