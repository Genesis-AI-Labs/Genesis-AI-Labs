import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <header className="flex items-center justify-between p-6">
        <div className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-black"></div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-sm">EN</button>
          <Link href="/contact" className="text-sm hover:underline">
            CONTACT US
          </Link>
          <button className="flex flex-col space-y-1">
            <span className="h-0.5 w-6 bg-black"></span>
            <span className="h-0.5 w-6 bg-black"></span>
          </button>
        </div>
      </header>

      <main className="relative min-h-[calc(100vh-80px)] px-6 pt-12">
        {/* Black circle on left */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <div className="h-[500px] w-[500px] rounded-full bg-black"></div>
        </div>

        {/* Gradient blob */}
        <div
          className="absolute right-0 top-0 h-[300px] w-[300px] animate-pulse rounded-full bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-200 opacity-70 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 flex h-full">
          {/* Left content */}
          <div className="flex-1">
            <h1 className="max-w-2xl text-7xl font-light leading-tight tracking-tight text-white">
              WE CREATE
              <br />
              BEST DIGITAL
              <br />
              PRODUCTS.
            </h1>

            <div className="mt-16">
              <Button variant="outline" className="rounded-full border-2 border-white bg-transparent px-8 text-white hover:bg-white hover:text-black">
                <span className="relative">
                  DISCUSS THE PROJECT
                  <div className="absolute -left-4 -right-4 -top-4 -bottom-4 animate-spin-slow rounded-full border border-white opacity-50"></div>
                </span>
              </Button>
            </div>

            <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/80">
              We create quality content and cool ideas. We create websites, applications, 3D design, motion design and
              animation. We bring the most daring ideas to life
            </p>
          </div>

          {/* Right content */}
          <div className="flex-1 pt-32">
            <div className="flex flex-col items-end space-y-8">
              <div className="text-right">
                <p className="text-sm font-light text-white/60">GENESIS AI LABS</p>
                <p className="mt-1 text-xs text-white/40">ESTABLISHED 2024</p>
              </div>

              <div className="flex items-center space-x-2">
                <span className="h-px w-12 bg-white"></span>
                <span className="text-sm text-white">WHO WE ARE</span>
              </div>

              <div className="mt-16 max-w-xs text-right text-xs leading-relaxed text-white/60">
                WE ARE THE LEADERS IN WEB & MOBILE
                <br />
                DESIGN AND DEVELOPMENT INDUSTRY.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
