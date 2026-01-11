"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Sparkles } from "lucide-react"

const researchAreas = [
  "System 2 Reasoning",
  "Next-Gen Architectures",
  "Embodied Intelligence",
  "Agentic Safety",
]

export function ResearchSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 50%, #050505 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs tracking-widest uppercase text-indigo-400 mb-4 block">
              Research-Backed
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-8 tracking-tight">
              We do the research others cite.
            </h2>

            {/* Research areas as badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {researchAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 text-sm bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="space-y-4 text-lg text-gray-400 leading-relaxed mb-8">
              <p>
                Genesis runs active research pods. Papers get published. But more importantly, findings ship into client systems before they're commoditized.
              </p>
            </div>

            {/* Quote highlight */}
            <div className="border-l-2 border-indigo-500 pl-5 py-2">
              <p className="text-xl text-white">
                You're not hiring implementers.
              </p>
              <Link
                href="/#research"
                className="text-xl text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-2"
              >
                You're hiring the source.
                <Sparkles className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Right: Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Glow behind image */}
            <div
              className="absolute -inset-8 rounded-3xl opacity-40 blur-3xl"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(249, 115, 22, 0.15) 0%, transparent 70%)',
              }}
            />

            {/* Image with gradient fade */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/studio2.png"
                alt="Research & Innovation"
                width={600}
                height={400}
                className="w-full h-auto object-cover opacity-90"
              />

              {/* Gradient overlay for blending */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0a0a0a]/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-[#151515] border border-gray-800 rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Research-first</div>
                  <div className="text-white font-medium">Engineering</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
