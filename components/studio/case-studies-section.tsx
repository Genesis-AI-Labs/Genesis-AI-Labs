"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "HyperSym",
    tag: "Enterprise",
    headline: "Industrial simulation, automated.",
    outcome: "20x faster model development.",
    tech: ["Multi-Agent", "NLP", "Simulation"],
    link: "https://www.getsimworks.com",
    image: "/HyperSym_x_banner.png",
  },
  {
    title: "Functor",
    tag: "Startup",
    headline: "Proactive memory, ambient intelligence.",
    outcome: "Your memory as a thinking partner.",
    tech: ["LLM", "Embeddings", "Real-time"],
    link: "https://aifunctor.com",
    image: "/functor_abstract art.png",
  },
  {
    title: "CUA [VENV]",
    tag: "Research",
    headline: "Vision-language-action for robotics.",
    outcome: "Bridging sim-to-real.",
    tech: ["VLA", "Embodied AI", "RL"],
    link: null,
    image: "/cua_venv_abstract_art.png",
  },
]

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs tracking-widest uppercase text-gray-500">
              Work
            </span>
            <span className="h-px w-12 bg-gray-600" aria-hidden="true"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
            Systems in production.
          </h2>
        </motion.div>

        <div className="space-y-16 sm:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="text-xs tracking-widest uppercase text-gray-500 mb-4 block">
                  {project.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-400 mb-2">
                  {project.headline}
                </p>
                <p className="text-base text-gray-500 mb-4">
                  "{project.outcome}"
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:text-gray-300 transition-colors inline-flex items-center"
                  >
                    → {project.link.replace("https://", "").replace("www.", "")}
                  </a>
                ) : (
                  <span className="text-sm text-gray-500">Coming Soon</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
