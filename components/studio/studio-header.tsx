"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function StudioHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Work", href: "#work" },
    { label: "FAQ", href: "#faq" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-[#050505]/95 backdrop-blur-md border-b border-gray-800/50"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo with Studio branding */}
          <Link href="/studio" className="flex items-center space-x-3 group">
            <div className="flex space-x-2">
              <div className="h-2 w-2 rounded-full bg-white group-hover:bg-indigo-400 transition-colors"></div>
              <div className="h-2 w-2 rounded-full bg-white group-hover:bg-indigo-400 transition-colors"></div>
            </div>
            <span className="text-sm font-medium text-white hidden sm:block">
              Genesis Studio
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button
              size="sm"
              className="bg-white text-gray-900 hover:bg-gray-100 px-5 py-2 text-sm font-medium rounded-full"
              asChild
            >
              <a
                href="https://calendar.app.google/z9S8nPy1DW6XgX18A"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="flex flex-col space-y-1.5 md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a] pt-20 px-6 md:hidden transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="space-y-6">
          <Link
            href="/"
            className="block text-lg text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            ← Back to Home
          </Link>
          <div className="h-px bg-gray-800" />
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-xl text-white font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4">
            <Button
              className="w-full bg-white text-gray-900 hover:bg-gray-100 py-4 text-base font-medium rounded-full"
              asChild
            >
              <a
                href="https://calendar.app.google/z9S8nPy1DW6XgX18A"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </>
  )
}
