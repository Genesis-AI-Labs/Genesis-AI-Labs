"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <header className="flex items-center justify-between p-4 sm:p-6">
        <Link href="/" className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-black"></div>
        </Link>
        <div className="flex items-center space-x-3 sm:space-x-6">
          <button className="text-xs sm:text-sm hidden sm:block">EN</button>
          <Link href="/contact" className="text-xs sm:text-sm hover:underline">
            CONTACT US
          </Link>
        </div>
      </header>

      <main className="px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight mb-6 sm:mb-8">
            WHAT IS
            <br />
            GENESIS AI LABS
          </h1>

          <div className="prose prose-sm max-w-none">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-12">
              Aligning towards Superintelligence. We are building a world-class AI research lab in Bangalore. We want to
              develop AI solutions for India's needs, and democratize AI in India.
            </p>

            <section className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">OUR VISION</h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 sm:mb-6">
                We value the contributions of our researchers, so every candidate is provided authorship as per work
                ethics. We also intend to provide travel grants and publication grants for low-resource candidates. We
                provide valuable letters of recommendation and connections for the next endeavors of our researchers,
                having a strong alumni community we focus on building strong bonds with our researchers not only in a
                professional manner.
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We are building a strong collaborative environment, providing computational resources, developing
                discussion pods, so that people can grow with learning from others and sharing knowledge within their
                pods. Working with us involves thinking, coding and experimenting with novel thoughts, we focus on
                giving free space to creative thoughts and providing right directions for aligning free exploration with
                results.
              </p>
            </section>

            <section className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">RESEARCH ORIENTATIONS</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg font-light">GEOMETRIC DEEP LEARNING POD</h3>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                    <li>• Natural Science Application</li>
                    <li>• Graph DL Core</li>
                    <li>• Information Diffusion</li>
                  </ul>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg font-light">DEEP LEARNING POD</h3>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                    <li>• Video Analysis</li>
                    <li>• Physics based Deep Learning</li>
                    <li>• Generative Modeling [Diffusers]</li>
                  </ul>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg font-light">AI AGENTS</h3>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                    <li>• Reinforcement Learning</li>
                    <li>• Optimizations</li>
                    <li>• Path towards sensitive RL</li>
                    <li>• More environment aware RL Agents</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">THE NEXT BIG THING</h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 sm:mb-6">
                We are looking ahead for building Sensitive and Environment aware AI Agents. If you missed the crypto
                revolution, the next big-bang is going to be AI Agents, in the form of Bots, Search, Robots and many
                more.
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Our researchers are working at the intersection of Reinforcement Learning, Geometric DL and Computer
                Vision to produce more sensitive and Environment aware AI Agents.
              </p>
            </section>

            <section className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">CLIMATE RESEARCH WING</h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We are starting our Climate Research Wing [India]. In this research wing we are targeting climate change
                related real-world problems and how to address them by proposing scalable and efficient deep learning
                based approaches, as well as Analysis and Prediction about the change in Natural Atmosphere in Indian
                Natural Regions. We aim to collaborate with Government Agencies which continuously monitor and collect
                information on various datapoints on the dynamics of Indian Climatic Eco-system.
              </p>
            </section>

            <div className="mt-12 sm:mt-16">
              <Button variant="outline" className="rounded-full border-2 px-6 sm:px-8 bg-transparent text-sm sm:text-base">
                <Link href="/careers">JOIN OUR RESEARCH TEAM</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}