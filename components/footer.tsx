"use client"

import React from 'react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="w-full relative overflow-hidden" 
      style={{ 
        backgroundImage: "url('/genesis_footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 w-full">
        {/* Contact Information Section */}
        <div className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex items-center space-x-2 mb-6 sm:mb-8">
              <span className="text-xs sm:text-sm text-white">CONTACT INFORMATION</span>
              <span className="h-px w-8 sm:w-12 bg-white"></span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
              <div>
                <h4 className="text-xs sm:text-sm font-medium mb-2 text-white">EMAIL</h4>
                <p className="text-xs sm:text-sm text-white/90 break-words">siddhantsaxena@genesisai.in</p>
                <p className="text-xs sm:text-sm text-white/90 break-words">office.cxo@genesisai.in</p>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-medium mb-2 text-white">PHONE</h4>
                <p className="text-xs sm:text-sm text-white/90">(+91) 7024184657</p>
                <p className="text-xs sm:text-sm text-white/90">(+91) 7300366428</p>
              </div>
              <div className="sm:col-span-2 md:col-span-1">
                <h4 className="text-xs sm:text-sm font-medium mb-2 text-white">LOCATION</h4>
                <p className="text-xs sm:text-sm text-white/90">
                  Lossfunk, 3rd Floor, No. 309
                  <br />
                  100 Feet Rd, 1st Stage, Binnamangala
                  <br />
                  Indiranagar, Bengaluru, Karnataka 560038
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links Section - Centered above bottom text */}
        <div className="pb-12 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-3">
              <Link 
                href="/about" 
                className="text-white hover:text-white/80 transition-colors duration-200 text-xs sm:text-sm font-normal no-underline"
              >
                About Genesis AI Labs
              </Link>
              <Link 
                href="#products" 
                className="text-white hover:text-white/80 transition-colors duration-200 text-xs sm:text-sm font-normal no-underline"
              >
                Products
              </Link>
              <Link 
                href="/blog" 
                className="text-white hover:text-white/80 transition-colors duration-200 text-xs sm:text-sm font-normal no-underline"
              >
                Blog
              </Link>
              <Link 
                href="/careers" 
                className="text-white hover:text-white/80 transition-colors duration-200 text-xs sm:text-sm font-normal no-underline"
              >
                Careers
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-white/80 transition-colors duration-200 text-xs sm:text-sm font-normal no-underline"
              >
                Contact
              </Link>
              <Link 
                href="#" 
                className="text-white hover:text-white/80 transition-colors duration-200 text-xs sm:text-sm font-normal no-underline"
              >
                Privacy
              </Link>
              <Link 
                href="#" 
                className="text-white hover:text-white/80 transition-colors duration-200 text-xs sm:text-sm font-normal no-underline"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright and Brand (integrated into image like inspiration) */}
        <div className="pb-4 sm:pb-6 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright on the left */}
            <div className="text-white text-xs sm:text-sm font-normal">
              © Genesis AI Labs {currentYear}
            </div>

            {/* Brand/Additional info on the right */}
            <div className="text-white text-xs sm:text-sm font-normal">
              <Link 
                href="/" 
                className="hover:text-white/80 transition-colors duration-200"
              >
                Genesis AI Labs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
