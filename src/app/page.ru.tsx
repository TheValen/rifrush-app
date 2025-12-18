export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 px-6 py-24">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-gray-900 mb-6">
          RifRush App
        </h1>
        <p className="text-xl sm:text-2xl md:text-4xl text-gray-700 mb-8">
          AI-генератор баннеров, Reels и визуалов<br />для Shopify за 30 секунд
        </p>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Подключи магазин → Выбери стиль → Получи 100+ готовых активов мгновенно
        </p>
        <div className="space-y-6 sm:space-y-0 sm:space-x-6">
          <a
            href="https://tally.so/r/3XWjZ5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-bold px-10 py-5 rounded-xl transition shadow-lg"
          >
            Join Waitlist (Beta Free)
          </a>
        </div>
        <p className="mt-16 text-gray-500 text-sm">
          Музыка для сторис → <a href="https://rifrush.com" className="underline hover:text-indigo-600">rifrush.com</a>
        </p>
      </div>
    </main>
  )
}
