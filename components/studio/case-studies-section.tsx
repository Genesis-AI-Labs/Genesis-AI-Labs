"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { CheckCircle, ArrowUpRight, Clock } from "lucide-react"

const projects = [
  {
    title: "HyperSym",
    tag: "Enterprise",
    headline: "Industrial simulation, reimagined with AI.",
    outcome: "Reduced simulation model development time from weeks to hours. Multi-agent system orchestrating CAE workflows with natural language interface.",
    tech: ["Multi-Agent", "NLP", "Simulation"],
    link: "https://www.getsimworks.com",
    image: "/HyperSym_x_banner.png",
  },
  {
    title: "Functor",
    tag: "Startup",
    headline: "Memory infrastructure for AI applications.",
    outcome: "Graph-based memory system processing 10M+ facts. Powers proactive intelligence with sub-100ms retrieval latency.",
    tech: ["LLM", "Embeddings", "Real-time"],
    link: "https://aifunctor.com",
    image: "/functor_abstract art.png",
  },
  {
    title: "CUA [VENV]",
    tag: "Research",
    headline: "Vision-language-action for embodied AI.",
    outcome: "Research collaboration bridging simulation to real-world robotic deployment. Active research in VLA architectures.",
    tech: ["VLA", "Embodied AI", "RL"],
    link: null,
    image: "/cua_venv_abstract_art.png",
  },
]

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-6"
      style={{
        background: 'linear-gradient(180deg, #1a1a1a 0%, #212121 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-indigo-400 mb-4 block">
            Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
            Systems in production.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Real AI systems solving real problems. From enterprise automation to research breakthroughs.
          </p>
        </motion.div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group bg-[#2a2a2a] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
            >
              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Tag overlay */}
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-black/60 backdrop-blur-sm rounded-full text-white">
                  {project.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-medium text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.headline}
                </p>

                {/* Outcome highlight */}
                <div className="flex items-start gap-3 mb-5 p-4 bg-[#1a1a1a] rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.outcome}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 bg-gray-800 text-gray-400 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1.5 group/link"
                  >
                    View Project
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="text-sm text-gray-500 inline-flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    In Development
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
