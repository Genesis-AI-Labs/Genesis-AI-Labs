"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote, ExternalLink } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Prayesh Maher",
    role: "Founder & CEO",
    company: "QuantumLearn.ai",
    companyUrl: "https://quantumlearn.ai",
    linkedIn: "https://www.linkedin.com/in/prayashmeher/",
    image: null, // Can add image later
    quote:
      "Genesis AI Labs delivered what others said would take months — in weeks. Their team built the core AI engine powering our adaptive learning platform, from knowledge graphs to real-time remediation. The technical depth was exceptional, but what really stood out was their ability to translate complex ML concepts into production-ready systems. They didn't just build features; they architected a foundation we're scaling on.",
    highlight: "Delivered in weeks what others quoted months for",
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden"
      style={{ backgroundColor: '#050505' }}
    >
      {/* Subtle accent glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(251, 191, 36, 0.03) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-amber-400 mb-4 block">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
            What we've built together.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real outcomes from real partnerships.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              {/* Main testimonial card */}
              <div className="relative bg-[#0a0a0a] border border-gray-800 rounded-2xl p-8 sm:p-10">
                {/* Quote icon */}
                <div className="absolute -top-4 left-8 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>

                {/* Highlight badge */}
                {testimonial.highlight && (
                  <div className="mb-6">
                    <span className="inline-block px-4 py-1.5 text-xs font-medium bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
                      {testimonial.highlight}
                    </span>
                  </div>
                )}

                {/* Quote text */}
                <blockquote className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    {/* Avatar placeholder */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-medium text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium">
                          {testimonial.name}
                        </span>
                        <a
                          href={testimonial.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-amber-400 transition-colors"
                          aria-label={`${testimonial.name}'s LinkedIn profile`}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  {/* Company link */}
                  <a
                    href={testimonial.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#151515] rounded-lg border border-gray-800 hover:border-gray-700 transition-colors group"
                  >
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                      {testimonial.company}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-amber-400 transition-colors" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
