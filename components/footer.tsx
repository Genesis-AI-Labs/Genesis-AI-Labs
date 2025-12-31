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
        <div className="pb-8 sm:pb-12">
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

        {/* Social Media Links */}
        <div className="pb-8 sm:pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              <a 
                href="https://discord.gg/rhBSZzKR" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors duration-200"
                aria-label="Discord"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928-1.793 6.4-2.222 9.4-2.222s5.47.43 9.4 2.222a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/genesis-ai-labs" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/GenesisAILabs" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
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
