"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronDown } from "lucide-react"

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
  {
    question: "What industries do you work with?",
    answer:
      "Healthcare, manufacturing, fintech, and deep tech. We go deep in domains that need it — not surface-level AI wrapping.",
  },
  {
    question: "How quickly can you start?",
    answer:
      "Most projects begin within 2 weeks of initial conversation. Discovery phase is typically 1-2 weeks, depending on complexity.",
  },
  {
    question: "Do you work with existing AI systems?",
    answer:
      "Yes. Integration, optimization, and rescue of stalled AI projects. We've inherited plenty of 'almost working' systems.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-6 bg-[#212121]"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-widest uppercase text-gray-500 mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight">
            Common questions
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="bg-[#2a2a2a] rounded-xl overflow-hidden border border-gray-800"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="text-base text-white font-medium group-hover:text-gray-200 transition-colors pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
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
                    <p className="px-6 pb-5 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
