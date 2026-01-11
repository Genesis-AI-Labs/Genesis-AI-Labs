"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"

export function StudioHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/studio1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.7,
          y: backgroundY,
        }}
        aria-hidden="true"
      >
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#212121] via-[#212121]/60 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight"
        >
          We build AI systems that ship.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          85% of AI projects fail to reach production. We're the engineering partner that bridges research to deployment — with battle-tested architectures and continuous iteration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            variant="outline"
            className="rounded-full border-2 border-white px-8 py-6 bg-transparent text-white text-lg font-light hover:bg-white hover:text-gray-900 transition-all duration-300"
            asChild
          >
            <a
              href="https://calendar.app.google/z9S8nPy1DW6XgX18A"
              target="_blank"
              rel="noopener noreferrer"
            >
              Work With Us
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
