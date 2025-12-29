"use client";

import { cn } from "@/lib/utils";

export const ProductBackground = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden bg-[#FFF8F0]",
        className
      )}
    >
    </div>
  );
};
