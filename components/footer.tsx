"use client"

import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer 
      className="w-full relative" 
      style={{ 
        backgroundColor: '#212121',
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full">
          {/* Brand name on the left */}
          <div className="mb-4 sm:mb-0">
            <Link 
              href="/" 
              className="text-sm sm:text-base text-white font-normal leading-normal hover:opacity-80 transition-opacity duration-200"
            >
              Genesis AI Labs
            </Link>
          </div>

          {/* Footer links on the right */}
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2">
            <Link 
              href="/about" 
              className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm font-normal no-underline"
            >
              About Genesis AI Labs
            </Link>
            <Link 
              href="#products" 
              className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm font-normal no-underline"
            >
              Products
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm font-normal no-underline"
            >
              Blog
            </Link>
            <Link 
              href="/careers" 
              className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm font-normal no-underline"
            >
              Careers
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm font-normal no-underline"
            >
              Contact
            </Link>
            <Link 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm font-normal no-underline"
            >
              Privacy
            </Link>
            <Link 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm font-normal no-underline"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
