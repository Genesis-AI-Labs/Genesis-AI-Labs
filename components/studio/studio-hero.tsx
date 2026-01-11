"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function StudioHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #050505 0%, #0a0a0a 50%, #050505 100%)',
        }}
      />

      {/* Accent glow - top right */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(99, 102, 241, 0.08) 0%, transparent 60%)',
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-0">
        {/* Left: Text content */}
        <div className="max-w-xl">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 text-xs tracking-widest uppercase text-indigo-400 border border-indigo-400/30 rounded-full mb-6"
          >
            AI Engineering Studio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 tracking-tight"
          >
            We build AI systems that ship.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed"
          >
            85% of AI projects fail to reach production. We're the engineering partner that bridges research to deployment — with battle-tested architectures and continuous iteration.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-base font-medium rounded-full transition-all"
              asChild
            >
              <a
                href="https://calendar.app.google/z9S8nPy1DW6XgX18A"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 text-white hover:bg-white/10 px-8 py-6 text-base font-medium rounded-full transition-all"
              asChild
            >
              <a href="#work">
                View Our Work
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Right: Strategic image (desktop only) */}
        <motion.div
          className="hidden lg:block relative"
          style={{ y: imageY, opacity: imageOpacity }}
        >
          <div className="relative">
            {/* Glow behind image */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-50 blur-2xl"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(249, 115, 22, 0.2) 0%, transparent 70%)',
              }}
            />

            {/* Image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/studio1.png"
                alt="AI Systems Engineering"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />

              {/* Gradient overlay for blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent" />
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute -bottom-6 -left-6 bg-[#151515] border border-gray-800 rounded-xl p-4 shadow-xl"
            >
              <div className="text-2xl font-medium text-white">85%</div>
              <div className="text-sm text-gray-500">AI projects fail</div>
              <div className="text-xs text-indigo-400 mt-1">We fix that.</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gray-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
