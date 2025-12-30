"use client"

import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <header className="flex items-center justify-between p-4 sm:p-6">
        <Link href="/" className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-black"></div>
        </Link>
        <div className="flex items-center space-x-3 sm:space-x-6">
          <button className="text-xs sm:text-sm hidden sm:block">EN</button>
          <Link href="/contact" className="text-xs sm:text-sm hover:underline">
            CONTACT US
          </Link>
        </div>
      </header>
      <main className="px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight mb-6 sm:mb-8">
            Blog
          </h1>
          <p className="text-sm sm:text-base">Welcome to our blog!</p>
        </div>
      </main>
    </div>
  )
}
