"use client"

import Link from "next/link"
import { useState } from "react"

export function StudioHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex space-x-2">
            <div className="h-2 w-2 rounded-full bg-white"></div>
            <div className="h-2 w-2 rounded-full bg-white"></div>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              href="/#research"
              className="text-sm text-white/70 hover:text-white transition-colors hidden sm:block"
            >
              Research
            </Link>
            <Link
              href="/#products"
              className="text-sm text-white/70 hover:text-white transition-colors hidden sm:block"
            >
              Products
            </Link>
            <a
              href="https://calendar.app.google/z9S8nPy1DW6XgX18A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white hover:text-white/70 transition-colors"
            >
              Contact
            </a>
            <button
              className="flex flex-col space-y-1 sm:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <span className={`h-0.5 w-6 bg-white transition-transform ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
              <span className={`h-0.5 w-6 bg-white transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`h-0.5 w-6 bg-white transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#212121] pt-20 px-4 sm:hidden">
          <nav className="space-y-6">
            <Link href="/" className="block text-lg text-white" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/#research" className="block text-lg text-white" onClick={() => setIsMenuOpen(false)}>
              Research
            </Link>
            <Link href="/#products" className="block text-lg text-white" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <a
              href="https://calendar.app.google/z9S8nPy1DW6XgX18A"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg text-white"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
