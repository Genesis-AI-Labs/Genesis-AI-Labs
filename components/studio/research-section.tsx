"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"

export function ResearchSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="text-xs tracking-widest uppercase text-gray-500">
              Why Us
            </span>
            <span className="h-px w-12 bg-gray-600" aria-hidden="true"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-12 tracking-tight">
            We do the research others cite.
          </h2>

          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              Genesis runs active research pods — System 2 reasoning, next-gen architectures, embodied intelligence, agentic safety.
            </p>
            <p>
              Papers get published. But more importantly, findings ship into client systems before they're commoditized.
            </p>
            <p className="text-white">
              You're not hiring implementers.{" "}
              <Link
                href="/#research"
                className="underline underline-offset-4 hover:text-gray-300 transition-colors"
              >
                You're hiring the source.
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
