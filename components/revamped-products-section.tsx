"use client";

import { useEffect, useRef, useState } from "react";
import { ProductCard } from "./product-card";

export function RevampedProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const products: Array<{
    title: string;
    description: string;
    image: string;
    delay: number;
    layout?: "default" | "horizontal" | "horizontal-right" | "image-bottom";
  }> = [
    {
      title: "Hypersym",
      description: "Advanced symbolic AI system for complex reasoning and mathematical problem solving with enhanced interpretability.",
      image: "/HyperSym_x_banner.png",
      delay: 0,
      layout: "default",
    },
    {
      title: "Functor",
      description: "Mathematical framework based on category theory for mapping between structures, enabling powerful abstractions in AI and computational systems.",
      image: "/functor_abstract art.png",
      delay: 100,
      layout: "horizontal",
    },
    {
      title: "CUA [VENV]",
      description: "Contextual Understanding Agent in Virtual Environment with spatial reasoning and real-time adaptation capabilities.",
      image: "/cua_venv_abstract_art.png",
      delay: 200,
      layout: "horizontal-right",
    },
    {
      title: "Zero Morphism",
      description: "Cutting-edge AI framework leveraging category theory and advanced mathematical structures for robust and interpretable AI systems.",
      image: "/ZeroMorphism.png",
      delay: 300,
      layout: "image-bottom",
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-8 sm:py-12 overflow-hidden" id="products">
      {/* Floating Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .float-animation {
            animation: float 4s ease-in-out infinite;
          }
          .float-animation-delay-1 {
            animation-delay: 0s;
          }
          .float-animation-delay-2 {
            animation-delay: 1s;
          }
          .float-animation-delay-3 {
            animation-delay: 2s;
          }
          .float-animation-delay-4 {
            animation-delay: 1.5s;
          }
        `
      }} />

      {/* Background */}
      <div 
        className="absolute inset-4 sm:inset-8 overflow-hidden rounded-2xl sm:rounded-3xl"
        style={{
          backgroundImage: "url('/products_section_background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.85,
        }}
      >
        <div
          className="absolute inset-0 z-2"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px)",
            backgroundSize: "2rem 2rem",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center space-x-2 mb-3 group">
            <span className="text-xs sm:text-sm text-gray-900 font-medium group-hover:tracking-wider transition-all duration-300">
              PRODUCTS
            </span>
            <span className="h-px w-8 sm:w-12 bg-gray-900 group-hover:w-12 sm:group-hover:w-16 transition-all duration-300"></span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight mb-3 text-gray-900">
            Our AI Solutions
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-gray-700 px-4">
            Cutting-edge AI products designed to tackle complex challenges and push the boundaries of artificial intelligence.
          </p>
        </div>

        {/* Product Cards Grid - Beautiful Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Top Row - Hypersym and Functor */}
          <div 
            className={`product-card float-animation float-animation-delay-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${products[0].delay}ms` }}
          >
            <ProductCard
              title={products[0].title}
              description={products[0].description}
              image={products[0].image}
              delay={products[0].delay}
              layout={products[0].layout}
            />
          </div>
          <div 
            className={`product-card float-animation float-animation-delay-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${products[1].delay}ms` }}
          >
            <ProductCard
              title={products[1].title}
              description={products[1].description}
              image={products[1].image}
              delay={products[1].delay}
              layout={products[1].layout}
            />
          </div>

          {/* Bottom Row - CUA [VENV] and Zero Morphism */}
          <div 
            className={`product-card float-animation float-animation-delay-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${products[2].delay}ms` }}
          >
            <ProductCard
              title={products[2].title}
              description={products[2].description}
              image={products[2].image}
              delay={products[2].delay}
              layout={products[2].layout}
            />
          </div>
          <div 
            className={`product-card float-animation float-animation-delay-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${products[3].delay}ms` }}
          >
            <ProductCard
              title={products[3].title}
              description={products[3].description}
              image={products[3].image}
              delay={products[3].delay}
              layout={products[3].layout}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
