"use client"

import type React from "react"
import { cn } from "@/lib/utils"

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  }
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-70 group-hover:opacity-100 blur-sm transition duration-500",
          animate && "animate-gradient",
          className,
        )}
      />
      <div className="relative bg-black rounded-[6px] p-0.5 h-full w-full">{children}</div>
    </div>
  )
}
