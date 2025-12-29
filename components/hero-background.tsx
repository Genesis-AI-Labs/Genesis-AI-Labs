"use client";

import { cn } from "@/lib/utils";

export const HeroBackground = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        className
      )}
      style={{
        backgroundImage: "url('/hero_background.png')",
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
  );
};