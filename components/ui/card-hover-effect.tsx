"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    link: string
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition duration-500"
            style={{
              opacity: hoveredIndex === idx ? 0.8 : 0,
            }}
          />
          <motion.div
            className="relative z-10 p-5 h-full w-full rounded-xl border border-blue-500/20 bg-card/50 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-2">
              <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-sm text-white/80">{item.description}</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white backdrop-blur-sm"
                onClick={() => (window.location.href = item.link)}
              >
                Learn more →
              </motion.button>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
