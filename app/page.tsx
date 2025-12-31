"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { InteractiveShowcase } from "@/components/interactive-showcase"
import { HeroBackground } from "@/components/hero-background"
import { ProductBackground } from "@/components/product-background"
import { RevampedProductsSection } from "@/components/revamped-products-section"
import { Footer } from "@/components/footer"


export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMenuHovered, setIsMenuHovered] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const menuTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Auto-close menu when not hovering
  useEffect(() => {
    if (isMenuOpen && !isMenuHovered) {
      menuTimeoutRef.current = setTimeout(() => {
        setIsMenuOpen(false)
      }, 2000) // Close after 2 seconds of not hovering
    } else if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current)
    }

    return () => {
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current)
      }
    }
  }, [isMenuOpen, isMenuHovered])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      const isMobile = window.innerWidth < 768
      canvas.width = isMobile ? 400 : 700
      canvas.height = isMobile ? 400 : 700
    }

    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    let animationTime = 0
    const pixelSize = 10
    const getCenterX = () => canvas.width * 0.5
    const getCenterY = () => canvas.height * 0.5
    const getRadius = () => Math.min(canvas.width, canvas.height) * 0.45

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = getCenterX()
      const centerY = getCenterY()
      const radius = getRadius()

      const cycleTime = animationTime * 0.004
      const progress = (Math.sin(cycleTime) + 1) / 2

      const flowWave = Math.sin(animationTime * 0.008) * 0.3 + 0.7

      ctx.save()
      // Remove clipping to ensure animation is visible
      // ctx.beginPath()
      // ctx.arc(centerX, centerY, radius, -Math.PI * 0.3, Math.PI * 0.8)
      // ctx.lineTo(centerX, centerY)
      // ctx.closePath()
      // ctx.clip()

      // Keep animation always visible with minimum strength
      const gradientStrength = (Math.cos(progress * Math.PI * 2) + 1) / 2
      const pixelStrength = Math.max(0.3, 1 - gradientStrength * 0.7)

      // Always show pixelated effect
      const pixelIntensity = pixelStrength * 0.8
      const flowStrength = pixelIntensity * flowWave

      for (let angle = 0; angle < Math.PI * 2; angle += 0.05) {
        for (let r = 50; r < radius; r += pixelSize) {
          const x = centerX + Math.cos(angle) * r
          const y = centerY + Math.sin(angle) * r

          const distanceFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2)
          const waveOffset = Math.sin(angle * 3 + animationTime * 0.005) * 15
          const flowProgress = Math.max(
            0,
            Math.min(1, (flowStrength - (distanceFromCenter - waveOffset) / radius) * 2.5),
          )

          if (flowProgress > 0.05) {
            const colorProgress = (angle + Math.PI * 0.3) / (Math.PI * 1.1)
            let baseColor
            if (colorProgress < 0.2) baseColor = [255, 255, 255]
            else if (colorProgress < 0.4) baseColor = [59, 130, 246]
            else if (colorProgress < 0.6) baseColor = [30, 58, 138]
            else if (colorProgress < 0.8) baseColor = [107, 114, 128]
            else baseColor = [0, 0, 0]

            const boxSize = pixelSize * (0.8 + 0.3 * flowProgress)
            const depth = 5 * flowProgress * flowProgress
            const pixelOpacity = Math.min(0.6, flowProgress * pixelIntensity * 0.9)

            if (flowProgress > 0.1) {
              // Top face
              const topColor = `rgba(${Math.min(255, baseColor[0] + 30)}, ${Math.min(255, baseColor[1] + 30)}, ${Math.min(255, baseColor[2] + 30)}, ${0.5 * pixelOpacity})`
              ctx.fillStyle = topColor
              ctx.beginPath()
              ctx.moveTo(x, y)
              ctx.lineTo(x + boxSize, y)
              ctx.lineTo(x + boxSize + depth, y - depth)
              ctx.lineTo(x + depth, y - depth)
              ctx.closePath()
              ctx.fill()

              // Right face
              const rightColor = `rgba(${Math.max(0, baseColor[0] - 20)}, ${Math.max(0, baseColor[1] - 20)}, ${Math.max(0, baseColor[2] - 20)}, ${0.4 * pixelOpacity})`
              ctx.fillStyle = rightColor
              ctx.beginPath()
              ctx.moveTo(x + boxSize, y)
              ctx.lineTo(x + boxSize, y + boxSize)
              ctx.lineTo(x + boxSize + depth, y + boxSize - depth)
              ctx.lineTo(x + boxSize + depth, y - depth)
              ctx.closePath()
              ctx.fill()
            }

            // Front face
            const frontColor = `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]}, ${0.6 * pixelOpacity})`
            ctx.fillStyle = frontColor
            ctx.fillRect(x, y, boxSize, boxSize)
          }
        }
      }

      ctx.restore()
      animationTime++
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', updateCanvasSize)
    }
  }, [])


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#212121' }}>
      <div
        className="fixed w-4 h-4 border border-white/20 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${isHovered ? 2 : 1})`,
        }}
      />

      <header className="flex items-center justify-between p-4 sm:p-6 relative z-10">
        <div className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-white"></div>
          <div className="h-2 w-2 rounded-full bg-white"></div>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-6">
          <button className="text-xs sm:text-sm text-white hidden sm:block">EN</button>
          <Link href="/contact" className="text-xs sm:text-sm text-white hover:underline hidden sm:block">
            CONTACT US
          </Link>
          <button className="flex flex-col space-y-1 z-50 relative" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span
              className={`h-0.5 w-6 bg-white transition-transform ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span className={`h-0.5 w-6 bg-white transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}></span>
            <span
              className={`h-0.5 w-6 bg-white transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </button>
        </div>

        <div
          className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          style={{ zIndex: 99999 }}
          onMouseEnter={() => setIsMenuHovered(true)}
          onMouseLeave={() => setIsMenuHovered(false)}
        >
          <div className="p-6 sm:p-8 pt-8">
            {/* Close button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <nav className="space-y-4 sm:space-y-6 mt-8">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-lg font-light hover:text-gray-600 transition-colors text-left w-full"
              >
                HOME
              </button>
              <Link href="/about" className="block text-lg font-light hover:text-gray-600 transition-colors">
                WHAT IS GENESIS AI LABS
              </Link>
              <button
                onClick={() => scrollToSection("research")}
                className="block text-lg font-light hover:text-gray-600 transition-colors text-left w-full"
              >
                RESEARCH PODS
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block text-lg font-light hover:text-gray-600 transition-colors text-left w-full"
              >
                PRODUCTS
              </button>
              <button
                onClick={() => scrollToSection("news")}
                className="block text-lg font-light hover:text-gray-600 transition-colors text-left w-full"
              >
                NEWS & INSIGHTS
              </button>
              <Link href="/careers" className="block text-lg font-light hover:text-gray-600 transition-colors">
                CAREERS
              </Link>
              <Link href="/blog" className="block text-lg font-light hover:text-gray-600 transition-colors">
                BLOG
              </Link>
              <Link href="/zero_morphism" className="block text-lg font-light hover:text-gray-600 transition-colors">
                ZERO_MORPHISM
              </Link>
              <Link href="/contact" className="block text-lg font-light hover:text-gray-600 transition-colors">
                CONTACT
              </Link>
            </nav>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            style={{ zIndex: 99998 }}
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </header>

      <main className="relative px-4 sm:px-6 pt-8 sm:pt-12">
        <section className="relative min-h-[85vh] max-w-7xl mx-auto px-4 sm:px-8 md:px-16 overflow-hidden" id="home">
          <HeroBackground />
          <div className="flex items-center min-h-[85vh] pl-0 sm:pl-8 md:pl-16">
            <div className="max-w-2xl relative w-full" style={{ zIndex: 1 }}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter relative mb-8 sm:mb-12 md:mb-16" style={{
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                background: "linear-gradient(135deg, #ffffff 0%, #f5f5f5 50%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.2))",
              }}>
                <span className="inline-block hover:scale-105 transition-transform duration-300">GENESIS</span>
                <br />
                <span className="inline-block hover:scale-105 transition-transform duration-300 delay-100">AI LABS</span>
                <br />
                <span className="inline-block hover:scale-105 transition-transform duration-300 delay-200">e/acc.</span>
              </h1>

              <div className="space-y-4 sm:space-y-6">
                <a
                  href="https://calendar.app.google/z9S8nPy1DW6XgX18A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    variant="outline"
                    className="rounded-full border-2 border-white px-6 sm:px-8 bg-white/20 backdrop-blur-sm text-white relative overflow-hidden group hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300 shadow-lg text-sm sm:text-base"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <span className="relative z-10 font-bold">
                      Talk to the Founder!
                      <div className="absolute -left-4 -right-4 -top-4 -bottom-4 animate-spin-slow rounded-full border border-white opacity-50 group-hover:border-gray-900"></div>
                      <div
                        className="absolute -left-6 -right-6 -top-6 -bottom-6 animate-spin-slow rounded-full border border-white/30 opacity-30 group-hover:border-gray-900/30"
                        style={{ animationDirection: "reverse", animationDuration: "8s" }}
                      ></div>
                    </span>
                  </Button>
                </a>
                <p className="text-xs sm:text-sm leading-relaxed text-white max-w-md font-bold">
                  ALIGNING TOWARDS SUPERINTELLIGENCE
                  <br />
                  BUILDING WORLD-CLASS AI RESEARCH LAB.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 max-w-xs sm:max-w-sm hidden md:block" style={{ zIndex: 1 }}>
            <div className="flex items-center space-x-2 mb-4 group">
              <span className="text-xs sm:text-sm text-white font-bold group-hover:tracking-wider transition-all duration-300">WHAT WE DO</span>
              <span className="h-px w-8 sm:w-12 bg-white group-hover:w-12 sm:group-hover:w-16 transition-all duration-300"></span>
            </div>
            <p className="text-xs leading-relaxed text-white">
              We are building advanced AI agents and simulations to solve complex problems. Our research focuses on geometric deep learning, reinforcement learning, and generative modeling to push the boundaries of artificial intelligence.
            </p>
          </div>
          <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 max-w-xs sm:max-w-sm hidden md:block" style={{ zIndex: 1 }}>
            <div className="flex items-center space-x-2 mb-4 group">
              <span className="text-xs sm:text-sm text-white font-bold group-hover:tracking-wider transition-all duration-300">WHO WE ARE</span>
              <span className="h-px w-8 sm:w-12 bg-white group-hover:w-12 sm:group-hover:w-16 transition-all duration-300"></span>
            </div>
            <p className="text-xs leading-relaxed text-white">
              We are establishing a world-class AI research lab in Bangalore. Our mission is to create cutting-edge AI
              solutions tailored to India's unique needs while making AI accessible to all. We focus on developing AI
              solutions for India's needs and democratizing AI across the nation.
            </p>
          </div>
        </section>
        
        {/* <div className="mt-32 max-w-7xl mx-auto px-8">
          <div className="flex items-center space-x-2 mb-8 group">
            <span className="text-sm group-hover:tracking-wider transition-all duration-300">WHO WE ARE</span>
            <span className="h-px w-12 bg-black group-hover:w-16 transition-all duration-300"></span>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-600">
            We are establishing a world-class AI research lab in Bangalore. Our mission is to create cutting-edge AI
            solutions tailored to India's unique needs while making AI accessible to all. We focus on developing AI
            solutions for India's needs and democratizing AI across the nation.
          </p>
        </div> */}

        <section className="mt-16 sm:mt-24 md:mt-32" id="research">
          <div className="flex items-center space-x-2 mb-6 sm:mb-8 group">
            <span className="text-xs sm:text-sm text-white group-hover:tracking-wider transition-all duration-300">RESEARCH PODS</span>
            <span className="h-px w-8 sm:w-12 bg-white group-hover:w-12 sm:group-hover:w-16 transition-all duration-300"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8 max-w-2xl text-white">CURRENT RESEARCH ORIENTATIONS</h2>
          <p className="max-w-2xl text-xs sm:text-sm leading-relaxed text-gray-400 mb-8 sm:mb-12 md:mb-16">
            Our research is organized into specialized pods, each focusing on cutting-edge areas of AI development. We
            provide collaborative environments, computational resources, and discussion forums for researchers to grow
            through knowledge sharing and creative exploration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-lg hover:bg-white transition-all duration-300 group border border-transparent hover:border-white/20">
              <h3 className="text-base sm:text-lg font-light text-white group-hover:text-black transition-colors">
                GEOMETRIC DEEP LEARNING POD
              </h3>
              <ul className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-700 transition-colors space-y-1 sm:space-y-2">
                <li>• Natural Science Applications</li>
                <li>• Graph Deep Learning Core</li>
                <li>• Information Diffusion</li>
              </ul>
              <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-700 transition-colors leading-relaxed">
                Exploring the intersection of geometry and deep learning to solve complex problems in natural sciences
                and information systems.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-lg hover:bg-white transition-all duration-300 group border border-transparent hover:border-white/20">
              <h3 className="text-base sm:text-lg font-light text-white group-hover:text-black transition-colors">DEEP LEARNING POD</h3>
              <ul className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-700 transition-colors space-y-1 sm:space-y-2">
                <li>• Video Analysis</li>
                <li>• Physics-based Deep Learning</li>
                <li>• Generative Modeling (Diffusers)</li>
              </ul>
              <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-700 transition-colors leading-relaxed">
                Advancing deep learning techniques with focus on video understanding, physics-informed models, and
                state-of-the-art generative systems.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-lg hover:bg-white transition-all duration-300 group border border-transparent hover:border-white/20">
              <h3 className="text-base sm:text-lg font-light text-white group-hover:text-black transition-colors">AI AGENTS POD</h3>
              <ul className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-700 transition-colors space-y-1 sm:space-y-2">
                <li>• Reinforcement Learning</li>
                <li>• Optimizations</li>
                <li>• Environment-aware RL Agents</li>
              </ul>
              <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-700 transition-colors leading-relaxed">
                Developing intelligent agents that can adapt to their environment and make optimal decisions through
                advanced reinforcement learning techniques.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-12 sm:mt-16 md:mt-24"></div>

        {/* Products Section - Revamped with Cards */}
        <RevampedProductsSection />


        <section className="mt-16 sm:mt-24 md:mt-32">
          <div className="flex items-center space-x-2 mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm text-white">OUR VISION</span>
            <span className="h-px w-8 sm:w-12 bg-white"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8 text-white">BUILDING THE FUTURE OF AI</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <div>
              <h3 className="text-base sm:text-lg font-light mb-3 sm:mb-4 text-white">RESEARCHER-CENTRIC APPROACH</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                We value the contributions of our researchers, providing authorship recognition, travel grants, and
                publication support for candidates from diverse backgrounds. Our strong alumni community focuses on
                building lasting professional and personal bonds.
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-light mb-3 sm:mb-4 text-white">COLLABORATIVE ENVIRONMENT</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                We foster a collaborative research environment with computational resources, discussion pods, and
                knowledge-sharing platforms. Our approach combines creative thinking, coding, and experimentation with
                proper guidance and direction.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 sm:mt-24 md:mt-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent h-px"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 py-12 sm:py-16">
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl font-light mb-2 text-white group-hover:scale-110 transition-transform duration-300">
                15+
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Research Papers</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl font-light mb-2 text-white group-hover:scale-110 transition-transform duration-300">3</div>
              <div className="text-xs sm:text-sm text-gray-400">Research Pods</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl font-light mb-2 text-white group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Researchers</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl font-light mb-2 text-white group-hover:scale-110 transition-transform duration-300">
                2022
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Established</div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
