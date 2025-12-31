"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
  link?: string;
  comingSoon?: boolean;
  className?: string;
  delay?: number;
  layout?: "default" | "horizontal" | "horizontal-right" | "image-bottom";
}

export function ProductCard({ 
  title, 
  description, 
  icon, 
  image, 
  link, 
  comingSoon = false,
  className,
  delay = 0,
  layout = "default"
}: ProductCardProps) {
  if (layout === "horizontal" && image) {
    return (
      <div 
        className={cn(
          "bg-white/80 backdrop-blur-md hover:bg-white/90 rounded-2xl p-4 sm:p-6 shadow-xl border border-white/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 opacity-100 translate-y-0 h-full flex flex-col",
          className
        )}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
          <div className="md:w-2/5 h-40 sm:h-48 rounded-xl overflow-hidden bg-gray-100 relative shadow-lg flex-shrink-0">
            <Image 
              src={image} 
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-3/5 flex flex-col justify-center text-left">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">{description}</p>
            {comingSoon ? (
              <span className="text-xs sm:text-sm text-gray-500 font-medium flex items-center mt-auto">
                Coming Soon
              </span>
            ) : link ? (
              <a 
                href={link} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center mt-auto"
              >
                Learn more <span className="ml-2">&rarr;</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  if (layout === "horizontal-right" && image) {
    return (
      <div 
        className={cn(
          "bg-white/80 backdrop-blur-md hover:bg-white/90 rounded-2xl p-4 sm:p-6 shadow-xl border border-white/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 opacity-100 translate-y-0 h-full flex flex-col",
          className
        )}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="flex flex-col md:flex-row-reverse gap-4 sm:gap-6">
          <div className="md:w-2/5 h-40 sm:h-48 rounded-xl overflow-hidden bg-gray-100 relative shadow-lg flex-shrink-0">
            <Image 
              src={image} 
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-3/5 flex flex-col justify-center text-left">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">{description}</p>
            {comingSoon ? (
              <span className="text-xs sm:text-sm text-gray-500 font-medium flex items-center mt-auto">
                Coming Soon
              </span>
            ) : link ? (
              <a 
                href={link} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center mt-auto"
              >
                Learn more <span className="ml-2">&rarr;</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  if (layout === "image-bottom" && image) {
    return (
      <div 
        className={cn(
          "bg-white/80 backdrop-blur-md hover:bg-white/90 rounded-2xl p-4 sm:p-6 shadow-xl border border-white/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 opacity-100 translate-y-0 h-full flex flex-col",
          className
        )}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="flex flex-col h-full">
          <div className="mb-4 text-left">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">{description}</p>
            {comingSoon ? (
              <span className="text-xs sm:text-sm text-gray-500 font-medium flex items-center">
                Coming Soon
              </span>
            ) : link ? (
              <a 
                href={link} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center"
              >
                Learn more <span className="ml-2">&rarr;</span>
              </a>
            ) : null}
          </div>
          <div className="mt-auto rounded-xl overflow-hidden h-32 sm:h-40 bg-gray-100 relative shadow-lg">
            <Image 
              src={image} 
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={cn(
        "bg-white/80 backdrop-blur-md hover:bg-white/90 rounded-2xl p-4 sm:p-6 shadow-xl border border-white/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 opacity-100 translate-y-0 h-full flex flex-col",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {image && (
        <div className="mb-4 rounded-xl overflow-hidden h-32 sm:h-40 bg-gray-100 relative shadow-lg">
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      {icon && (
        <div className="mb-4 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-indigo-100 text-indigo-600">
          {icon}
        </div>
      )}
      
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">{description}</p>
        
        {comingSoon ? (
          <span className="text-xs sm:text-sm text-gray-500 font-medium flex items-center">
            Coming Soon
          </span>
        ) : link ? (
          <a 
            href={link} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center"
          >
            Learn more <span className="ml-2">&rarr;</span>
          </a>
        ) : null}
      </div>
    </div>
  );
}
