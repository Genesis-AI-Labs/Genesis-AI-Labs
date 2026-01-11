"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

const phases = [
  { name: "Discovery", description: "Deep-dive into your domain. We understand the business problem before touching code." },
  { name: "Design", description: "System architecture that anticipates scale. No copy-paste templates — custom designs for your constraints." },
  { name: "Build", description: "Weekly deploys with measurable outcomes. You see progress, not just promises." },
  { name: "Scale", description: "Continuous partnership through growth. We optimize, monitor, and evolve with your needs." },
]

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/studio4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.35,
          y: backgroundY,
        }}
        aria-hidden="true"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#212121] via-transparent to-[#212121]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* The Problem */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24 sm:mb-32"
        >
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs tracking-widest uppercase text-gray-500">
              The Gap
            </span>
            <span className="h-px w-12 bg-gray-600" aria-hidden="true"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-8 tracking-tight max-w-3xl">
            AI prototypes don't become products.
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
            Proof-of-concepts sit in notebooks. Demos impress but don't deploy. Internal teams lack the specialized muscle to cross the production threshold.
          </p>
        </motion.div>

        {/* The Solution */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs tracking-widest uppercase text-gray-500">
              Our Approach
            </span>
            <span className="h-px w-12 bg-gray-600" aria-hidden="true"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-12 tracking-tight max-w-3xl">
            Research meets engineering. Continuously.
          </h2>

          {/* Phases */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-left"
              >
                <h3 className="text-xl sm:text-2xl font-light text-white mb-2">
                  {phase.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Partnership note */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-lg text-gray-400 italic">
              This isn't a handoff. We stay with you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
