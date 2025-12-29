"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { motion, PanInfo } from "framer-motion"

interface CarouselItem {
  id: string
  title: string
  description: string
  image: string
  status: string
}

interface HumanloopCarouselProps {
  items: CarouselItem[]
  className?: string
}

export function HumanloopCarousel({ items, className = "" }: HumanloopCarouselProps) {
  const length = items.length
  const extendedItems = [...items, ...items, ...items]
  const [currentIndex, setCurrentIndex] = useState(length)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  // Navigate to specific slide with infinite loop and shortest path
  const goToSlide = useCallback((target: number) => {
    setCurrentIndex((prev) => {
      const realCurrent = prev % length
      let diff = target - realCurrent
      if (diff > length / 2) diff -= length
      if (diff < -length / 2) diff += length
      let newIndex = prev + diff
      if (newIndex < length) newIndex += length
      if (newIndex >= 2 * length) newIndex -= length
      return newIndex
    })
  }, [length])

  // Auto-advance to next slide
  const nextSlide = useCallback(() => {
    goToSlide((currentIndex % length) + 1)
  }, [currentIndex, goToSlide, length])

  // Autoplay functionality
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }
    autoplayRef.current = setInterval(nextSlide, 4500) // 4.5 seconds
  }, [nextSlide])

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }, [])

  // Start autoplay on mount and manage autoplay state
  useEffect(() => {
    if (!isPaused) {
      startAutoplay()
    } else {
      stopAutoplay()
    }

    return () => stopAutoplay()
  }, [isPaused, startAutoplay, stopAutoplay])

  // Handle mouse enter/leave for pause functionality
  const handleMouseEnter = useCallback(() => {
    setIsPaused(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false)
  }, [])

  // Handle drag end
  const handleDragEnd = useCallback((_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100 // Fixed threshold for more predictable behavior
    const velocity = info.velocity.x
    const offset = info.offset.x

    // Determine direction based on drag distance and velocity
    if (Math.abs(offset) > threshold || Math.abs(velocity) > 500) {
      if (offset > 0 || velocity > 0) {
        // Dragged right - go to previous
        goToSlide((currentIndex % length) - 1)
      } else {
        // Dragged left - go to next
        goToSlide((currentIndex % length) + 1)
      }
    }
  }, [currentIndex, goToSlide, length])

  // Calculate card positions and visibility
  const getCardTransform = (index: number) => {
    const diff = index - currentIndex
    const cardWidth = 100 // Each card takes full width
    const baseOffset = diff * cardWidth
    
    return {
      x: `${baseOffset}%`,
      scale: 1, // No scaling for a flat, linear transition
      opacity: Math.abs(diff) <= 1 ? 1 : 0, // Show current and adjacent cards
      zIndex: diff === 0 ? 10 : 5 - Math.abs(diff)
    }
  }

  return (
    <div 
      className={`relative w-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Container */}
      <div 
        ref={containerRef}
        className="relative h-[520px] overflow-hidden flex items-center justify-center"
      >
        <motion.div
          className="relative w-full h-full flex items-center"
          onPanEnd={handleDragEnd}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
        >
          {extendedItems.map((item, index) => {
            const transform = getCardTransform(index)
            
            return (
              <motion.div
                key={`${item.id}-${index}`}
                className="absolute w-full max-w-4xl cursor-grab active:cursor-grabbing left-1/2 top-1/2"
                style={{
                  pointerEvents: transform.opacity > 0 ? 'auto' : 'none',
                  transformOrigin: 'center center'
                }}
                animate={{
                  x: `calc(-50% + ${transform.x})`,
                  y: '-50%',
                  scale: transform.scale,
                  opacity: transform.opacity,
                  zIndex: transform.zIndex
                }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  ease: "linear" // Smooth linear transition
                }}
              >
                {/* Single Product Card */}
                <div className="relative w-full h-[480px] rounded-lg overflow-hidden shadow-2xl bg-white flex flex-col md:flex-row border border-gray-200">
                  {/* Image Section - Left/Top */}
                  <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center bg-gray-100 p-8">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  
                  {/* Content Section - Right/Bottom */}
                  <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 flex flex-col justify-between text-gray-800 bg-white">
                    {/* Top content */}
                    <div>
                      <div className="text-xs uppercase tracking-widest mb-4 text-gray-500 font-semibold">
                        PRODUCT
                      </div>
                      <h3 className="text-4xl font-bold mb-6 text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-base leading-relaxed text-gray-600 mb-8">
                        {item.description}
                      </p>
                      
                      {/* Call-to-Action Button */}
                      <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
                        View Details
                      </button>
                    </div>
                    
                    {/* Bottom content */}
                    <div className="flex justify-between items-end mt-8">
                      <div className="text-xs text-gray-500">
                        <div>contact@genesisai.in</div>
                        <div>www.genesisai.in</div>
                      </div>
                      <div className="text-xs font-semibold px-4 py-2 rounded-full bg-gray-100 text-gray-800">
                        {item.status}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Navigation Indicators */}
      <div className="flex justify-center mt-8 space-x-3">
        {items.map((_, index) => (
          <button
            key={index}
            className={`h-2 transition-all duration-300 ease-out rounded-full carousel-indicator ${
              index === (currentIndex % length)
                ? 'w-10 bg-black'
                : 'w-5 bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => {
              goToSlide(index)
              setIsPaused(false) // Resume autoplay after manual navigation
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}