"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Layers, Database, MessageCircle, GitBranch, Cpu, Server } from "lucide-react"

const services = [
  {
    title: "Full-Stack AI Products",
    description: "End-to-end AI applications — from architecture through deployment. We own the entire stack: model selection, fine-tuning, infrastructure, and monitoring.",
    icon: Layers,
  },
  {
    title: "LLM & RAG Pipelines",
    description: "Production RAG systems that actually retrieve relevant context. Custom embeddings, hybrid search, and evaluation frameworks that maintain accuracy at scale.",
    icon: Database,
  },
  {
    title: "Voice & Conversational Agents",
    description: "Intelligent voice agents that handle real conversations. Latency-optimized, context-aware, with fallback handling and human handoff protocols.",
    icon: MessageCircle,
  },
  {
    title: "Multi-Agent Systems",
    description: "Orchestrated agent architectures that reason, plan, and execute. Tool-use, memory systems, and coordination protocols for complex autonomous workflows.",
    icon: GitBranch,
  },
  {
    title: "Model Fine-Tuning",
    description: "Systematic model adaptation for your domain. Data curation, training infrastructure, evaluation pipelines, and A/B testing frameworks.",
    icon: Cpu,
  },
  {
    title: "MLOps & Infrastructure",
    description: "The infrastructure that keeps AI running. GPU orchestration, model serving, observability, and cost optimization that scales with your growth.",
    icon: Server,
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #050505 100%)',
      }}
    >
      {/* Subtle accent glow */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(251, 191, 36, 0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-amber-400 mb-4 block">
            What We Build
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
            End-to-end AI engineering.
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
            From first prototype to scaled production. We don't hand off decks — we ship systems.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="group p-6 rounded-xl bg-[#151515] border border-gray-800 hover:border-gray-700 transition-all hover:shadow-lg hover:shadow-amber-500/5"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5 group-hover:bg-amber-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>

                <h3 className="text-lg font-medium text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
