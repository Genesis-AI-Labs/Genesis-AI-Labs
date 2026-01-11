"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

const services = [
  {
    title: "Full-Stack AI Products",
    description: "End-to-end AI applications — from architecture through deployment. We own the entire stack: model selection, fine-tuning, infrastructure, and monitoring.",
  },
  {
    title: "LLM & RAG Pipelines",
    description: "Production RAG systems that actually retrieve relevant context. Custom embeddings, hybrid search, and evaluation frameworks that maintain accuracy at scale.",
  },
  {
    title: "Voice & Conversational Agents",
    description: "Intelligent voice agents that handle real conversations. Latency-optimized, context-aware, with fallback handling and human handoff protocols.",
  },
  {
    title: "Multi-Agent Systems",
    description: "Orchestrated agent architectures that reason, plan, and execute. Tool-use, memory systems, and coordination protocols for complex autonomous workflows.",
  },
  {
    title: "Model Fine-Tuning",
    description: "Systematic model adaptation for your domain. Data curation, training infrastructure, evaluation pipelines, and A/B testing frameworks.",
  },
  {
    title: "MLOps & Infrastructure",
    description: "The infrastructure that keeps AI running. GPU orchestration, model serving, observability, and cost optimization that scales with your growth.",
  },
]

export function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
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
          backgroundImage: "url('/studio2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
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

      <div className="relative z-10 max-w-7xl mx-auto">
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
              <div
                key={service.title}
                className="border-b border-gray-800"
              >
                <button
                  type="button"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  aria-expanded={expandedIndex === index}
                  aria-controls={`service-content-${index}`}
                  className="w-full text-left py-6 flex items-center justify-between group"
                >
                  <span className="text-lg sm:text-xl text-white font-light group-hover:text-gray-300 transition-colors">
                    {service.title}
                  </span>
                  <span aria-hidden="true" className="text-2xl text-gray-500 group-hover:text-white transition-colors">
                    →
                  </span>
                </button>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      id={`service-content-${index}`}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
