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
    <section ref={sectionRef} className="relative py-32 sm:py-48 px-4 sm:px-6 overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/studio3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          opacity: 0.5,
          y: backgroundY,
        }}
        aria-hidden="true"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#212121] via-[#212121]/70 to-transparent" />
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
