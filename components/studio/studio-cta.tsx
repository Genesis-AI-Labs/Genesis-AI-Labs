"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"

export function StudioCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <section ref={sectionRef} className="relative py-8 sm:py-12 px-4 sm:px-6 overflow-hidden">
      {/* Background image with parallax - contained with rounded corners */}
      <motion.div
        className="absolute inset-4 sm:inset-8 z-0 overflow-hidden rounded-2xl sm:rounded-3xl"
        style={{
          backgroundImage: "url('/studio3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          opacity: 0.85,
          y: backgroundY,
        }}
        aria-hidden="true"
      >
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px)",
            backgroundSize: "2rem 2rem",
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-4 tracking-tight">
            Ready to ship production AI?
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            Let's talk about what you're building.
          </p>

          <Button
            variant="outline"
            className="rounded-full border-2 border-white px-10 py-6 bg-transparent text-white text-lg font-light hover:bg-white hover:text-gray-900 transition-all duration-300"
            asChild
          >
            <a
              href="https://calendar.app.google/z9S8nPy1DW6XgX18A"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a Conversation
            </a>
          </Button>

          <p className="mt-8 text-sm text-gray-500">
            studio@genesisai.in
          </p>
        </motion.div>
      </div>
    </section>
  )
}
