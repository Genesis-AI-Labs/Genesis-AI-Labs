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
    <div className="min-h-screen bg-white px-8 py-12 max-w-4xl mx-auto">
      {/* Header with Logo */}
      <header className="mb-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <Image 
                src="/zero_morphism_logo.png" 
                alt="Zero Morphism Logo"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <h1 className="text-4xl font-normal">Genesis AI Labs, Inc.</h1>
          </div>
          <Link 
            href="/zero_morphism" 
            className="text-base text-black underline hover:no-underline"
          >
            ← Back to Essays
          </Link>
        </div>
        {title && (
          <h2 className="text-3xl font-normal mt-8">{title}</h2>
        )}
      </header>

      {/* Main Content */}
      <main className="space-y-8">
        {children}
      </main>
    </div>
  );
}
