"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Calendar } from "lucide-react"
import Image from "next/image"

export function StudioCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden"
      style={{ backgroundColor: '#050505' }}
    >
      {/* Noise/grain texture overlay - like Sourcegraph */}
      <div
        className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Absolutely positioned submerged image - behind content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute inset-0 hidden lg:block pointer-events-none overflow-hidden"
      >
        {/* Position the image on the right side */}
        <div
          className="absolute"
          style={{
            right: '5%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '45%',
            height: '100%',
          }}
        >
          {/* Soft ambient glow - very subtle */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(234, 179, 106, 0.04) 0%, transparent 60%)',
            }}
          />

          {/* The image itself - more vibrant in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/studio3.png"
              alt="AI Engineering"
              width={600}
              height={500}
              className="w-full h-auto object-contain"
              style={{
                opacity: 0.85,
                filter: 'brightness(1) contrast(1.05) saturate(0.95)',
              }}
            />
          </div>

          {/* Radial vignette - keeps center visible, fades edges */}
          <div
            className="absolute"
            style={{
              inset: '-50%',
              background: 'radial-gradient(ellipse 35% 32% at 50% 50%, transparent 0%, transparent 40%, rgba(5, 5, 5, 0.3) 50%, rgba(5, 5, 5, 0.65) 60%, rgba(5, 5, 5, 0.9) 72%, #050505 85%)',
            }}
          />

          {/* Left edge fade - very aggressive */}
          <div
            className="absolute"
            style={{
              inset: '-50%',
              background: 'linear-gradient(to right, #050505 0%, #050505 30%, rgba(5,5,5,0.9) 40%, transparent 60%)',
            }}
          />

          {/* Right edge fade */}
          <div
            className="absolute"
            style={{
              inset: '-50%',
              background: 'linear-gradient(to left, #050505 0%, rgba(5,5,5,0.85) 20%, transparent 50%)',
            }}
          />

          {/* Top edge fade */}
          <div
            className="absolute"
            style={{
              inset: '-50%',
              background: 'linear-gradient(to bottom, #050505 0%, rgba(5,5,5,0.85) 25%, transparent 55%)',
            }}
          />

          {/* Bottom edge fade */}
          <div
            className="absolute"
            style={{
              inset: '-50%',
              background: 'linear-gradient(to top, #050505 0%, rgba(5,5,5,0.85) 25%, transparent 55%)',
            }}
          />
        </div>
      </motion.div>

      {/* Content - on top */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <span className="inline-block px-4 py-1.5 text-xs tracking-widest uppercase text-indigo-400 border border-indigo-400/30 rounded-full mb-6">
              Let's Build Together
            </span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-6 tracking-tight">
              Ready to ship production AI?
            </h2>

            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Let's talk about what you're building. From first conversation to production deployment.
            </p>

            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-7 text-lg font-medium rounded-full transition-all group"
              asChild
            >
              <a
                href="https://calendar.app.google/z9S8nPy1DW6XgX18A"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start a Conversation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            {/* Contact options */}
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <a
                href="mailto:studio@genesisai.in"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <Mail className="w-4 h-4 text-gray-500 group-hover:text-indigo-400 transition-colors" />
                studio@genesisai.in
              </a>
              <span className="hidden sm:block text-gray-700">|</span>
              <a
                href="https://calendar.app.google/z9S8nPy1DW6XgX18A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-gray-500 group-hover:text-indigo-400 transition-colors" />
                Book a call
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
