"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const phases = [
  {
    number: "01",
    name: "Discovery",
    description: "Deep-dive into your domain. We understand the business problem before touching code.",
  },
  {
    number: "02",
    name: "Design",
    description: "System architecture that anticipates scale. No copy-paste templates — custom designs for your constraints.",
  },
  {
    number: "03",
    name: "Build",
    description: "Weekly deploys with measurable outcomes. You see progress, not just promises.",
  },
  {
    number: "04",
    name: "Scale",
    description: "Continuous partnership through growth. We optimize, monitor, and evolve with your needs.",
  },
]

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden bg-[#050505]"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* The Problem - Brief statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-widest uppercase text-gray-500 mb-4 block">
            The Gap
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
            AI prototypes don't become products.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Proof-of-concepts sit in notebooks. Demos impress but don't deploy. Internal teams lack the specialized muscle to cross the production threshold.
          </p>
        </motion.div>

        {/* Our Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-indigo-400 mb-4 block">
            Our Approach
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
            Research meets engineering. Continuously.
          </h3>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent hidden md:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative text-center"
              >
                {/* Phase number circle */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#151515] border border-gray-700 flex items-center justify-center relative z-10">
                  <span className="text-2xl font-light text-white">{phase.number}</span>
                </div>

                <h4 className="text-xl font-medium text-white mb-3">
                  {phase.name}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partnership note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-4 bg-[#151515] rounded-xl border border-gray-800">
            <p className="text-lg text-gray-300 italic">
              "This isn't a handoff. We stay with you."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
