"use client"

import Link from "next/link"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <header className="flex items-center justify-between p-6">
        <Link href="/" className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-black"></div>
        </Link>
        <div className="flex items-center space-x-6">
          <button className="text-sm">EN</button>
          <Link href="/contact" className="text-sm hover:underline">
            CONTACT US
          </Link>
        </div>
      </header>
      <main className="px-6 pt-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-light leading-tight tracking-tight mb-8">
            Careers
          </h1>
          <p>Join our team!</p>
        </div>
      </main>
    </div>
  )
}
