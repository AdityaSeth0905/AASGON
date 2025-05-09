"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useTransform, useScroll } from "framer-motion"
import { cn } from "@/lib/utils"

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const contentRef = useRef<HTMLDivElement>(null)
  const [svgHeight, setSvgHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight)
    }
  }, [])

  const y1 = useTransform(scrollYProgress, [0, 1], [50, svgHeight - 50])
  const y2 = useTransform(scrollYProgress, [0, 1], [50, svgHeight - 50])

  const latestY = useRef(0)
  const prevProgress = useRef(0)
  const prevScrollY = useRef(0)

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      latestY.current = y1.get()
      prevProgress.current = latest
      prevScrollY.current = window.scrollY
    })
    return () => unsubscribe()
  }, [scrollYProgress, y1])

  return (
    <motion.div ref={ref} className={cn("relative w-full max-w-4xl mx-auto", className)}>
      <div className="absolute left-8 top-3 bottom-0 w-px h-full">
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="absolute left-0 top-0"
          fill="none"
        >
          <motion.path
            d={`M10 10 L10 ${svgHeight - 10}`}
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
          <motion.circle cx="10" cy={y1} r="4" fill="url(#gradient)" filter="url(#glow)" />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="100%" gradientUnits="userSpaceOnUse">
              <stop stopColor="#18CCFC" />
              <stop offset="1" stopColor="#0055FF" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
        </svg>
      </div>
      <div ref={contentRef} className="ml-16 relative">
        {children}
      </div>
    </motion.div>
  )
}
