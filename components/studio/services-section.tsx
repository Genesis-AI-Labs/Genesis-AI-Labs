"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const services = [
  {
    title: "Full-Stack AI Products",
    description: "Complete applications from prototype to production.",
  },
  {
    title: "LLM & RAG Pipelines",
    description: "Custom language models and retrieval-augmented generation.",
  },
  {
    title: "Voice & Conversational Agents",
    description: "Natural language interfaces for support and automation.",
  },
  {
    title: "Multi-Agent Systems",
    description: "Autonomous agents that coordinate to solve complex workflows.",
  },
  {
    title: "Model Fine-Tuning",
    description: "Domain-specific optimization for your data and requirements.",
  },
  {
    title: "MLOps & Infrastructure",
    description: "Deployment, monitoring, and scaling that runs reliably.",
  },
]

export function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left column - sticky */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-xs tracking-widest uppercase text-gray-500">
                What We Build
              </span>
              <span className="h-px w-12 bg-gray-600"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              End-to-end AI engineering.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              From first prototype to scaled production. We don't hand off decks — we ship systems.
            </p>
          </div>

          {/* Right column - services list */}
          <div className="space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="border-b border-gray-800 cursor-pointer"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="py-6 flex items-center justify-between group">
                  <span className="text-lg sm:text-xl text-white font-light group-hover:text-gray-300 transition-colors">
                    {service.title}
                  </span>
                  <span className="text-2xl text-gray-500 group-hover:text-white transition-colors">
                    →
                  </span>
                </div>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-gray-400 text-base leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
