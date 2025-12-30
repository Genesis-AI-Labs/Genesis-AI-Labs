"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

interface ZeroMorphismLayoutProps {
  children: ReactNode;
  title?: string;
}

export function ZeroMorphismLayout({ children, title }: ZeroMorphismLayoutProps) {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 md:px-8 py-8 sm:py-12 max-w-4xl mx-auto">
      {/* Header with Logo */}
      <header className="mb-8 sm:mb-12 md:mb-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden flex-shrink-0">
              <Image 
                src="/zero_morphism_logo.png" 
                alt="Zero Morphism Logo"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal">Genesis AI Labs, Inc.</h1>
          </div>
          <Link 
            href="/zero_morphism" 
            className="text-sm sm:text-base text-black underline hover:no-underline whitespace-nowrap"
          >
            ← Back to Essays
          </Link>
        </div>
        {title && (
          <h2 className="text-xl sm:text-2xl md:text-3xl font-normal mt-6 sm:mt-8">{title}</h2>
        )}
      </header>

      {/* Main Content */}
      <main className="space-y-6 sm:space-y-8">
        {children}
      </main>
    </div>
  );
}
