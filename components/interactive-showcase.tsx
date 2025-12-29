"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState("hypersym")

  const productData = [
    {
      id: "hypersym",
      tabName: "Hypersym",
      title: "Insightful Analytics",
      description: "Advanced symbolic AI system for complex reasoning and mathematical problem solving. Combines neural networks with symbolic computation for enhanced interpretability and transparent decision-making processes.",
      content: (
        <Image
          src="/Genesis_AI_Labs_Product_1.png"
          alt="Hypersym Product Image"
          fill
          className="object-contain rounded-2xl"
        />
      ),
    },
    {
      id: "memory",
      tabName: "Memory",
      title: "Seamless Integration",
      description: "Persistent memory architecture for AI agents enabling long-term learning and adaptation. Revolutionary approach to maintaining context across extended interactions with sophisticated recall mechanisms.",
      content: (
        <Image
          src="/Genesis_AI_Labs_Product_2.png"
          alt="Memory Product Image"
          fill
          className="object-contain rounded-2xl"
        />
      ),
    },
    {
      id: "cua-venv",
      tabName: "CUA [VENV]",
      title: "Meaningful Scheduling",
      description: "Contextual Understanding Agent in Virtual Environment. Advanced AI system for spatial reasoning and environmental interaction in simulated worlds with real-time adaptation capabilities.",
      content: (
        <Image
          src="/Genesis_AI_Labs_Product_3.png"
          alt="CUA [VENV] Product Image"
          fill
          className="object-contain rounded-2xl"
        />
      ),
    },
    {
      id: "zero-morphism",
      tabName: "Zero Morphism",
      title: "Advanced AI Framework",
      description: "Cutting-edge AI framework that leverages category theory and advanced mathematical structures to create more robust and interpretable AI systems. Enables complex reasoning and abstraction capabilities.",
      content: (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-2xl">
          <span className="text-gray-500">Image to be added</span>
        </div>
      ),
    },
  ]

  const activeProduct = productData.find((p) => p.id === activeTab)

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. Static Header */}
      <div className="text-center mb-4">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Suited for Every Scenario
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
          Our products are designed to tackle a wide range of AI challenges, from complex reasoning to long-term learning and environmental interaction.
        </p>
      </div>

      {/* 2. Horizontal Tab Navigation */}
      <div className="relative flex justify-center mb-8">
        <div className="flex space-x-4 sm:space-x-8 border-b border-gray-200">
          {productData.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "relative py-2 px-1 sm:px-2 text-base sm:text-lg font-medium transition-colors duration-300 focus:outline-none",
                activeTab === item.id
                  ? "text-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              )}
            >
              {item.tabName}
              {activeTab === item.id && (
                <motion.div
                  className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-indigo-600"
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Dynamic Content Area */}
      <div className="relative min-h-[350px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-full"
          >
            {activeProduct && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Panel: Information */}
                <div className="text-left">
                  <h3 className="text-3xl font-bold text-gray-900">{activeProduct.title}</h3>
                  <p className="mt-4 text-base text-gray-600 leading-relaxed">
                    {activeProduct.description}
                  </p>
                  <button className="mt-6 font-semibold text-indigo-600 hover:text-indigo-800 transition-colors group flex items-center">
                    Learn more <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </button>
                </div>
                {/* Right Panel: Interactive Widget */}
                <div className="w-full h-[300px] relative">
                  {activeProduct.content}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
