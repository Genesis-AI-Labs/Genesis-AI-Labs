"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"

const faqs = [
  {
    question: "How do engagements start?",
    answer:
      "A conversation. If there's fit, we scope a 2-4 week first phase to validate before committing further.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "Project-based or retainer. First conversation is free. Clear proposal after we understand the problem.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Yes. Pre-seed to enterprise. What matters is the problem and your commitment to ship.",
  },
  {
    question: "How is Genesis different?",
    answer:
      "Active research pods. We publish, then ship findings into client systems before they're mainstream.",
  },
  {
    question: "What's your stack?",
    answer:
      "Python-first. PyTorch, HuggingFace, LangChain, vector DBs, modern MLOps. Tools follow problems, not hype.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. Continuous partnership. Most clients stay engaged for iteration and scaling.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-xs tracking-widest uppercase text-gray-500">
                Questions
              </span>
              <span className="h-px w-12 bg-gray-600" aria-hidden="true"></span>
            </div>
            <p className="text-lg text-gray-400">The basics, answered.</p>
          </motion.div>

          {/* Right column - accordion */}
          <div className="lg:col-span-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                className="border-b border-gray-800"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-lg text-white font-light group-hover:text-gray-300 transition-colors pr-4">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`text-xl text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-gray-400 leading-relaxed">
                        {faq.answer}
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
