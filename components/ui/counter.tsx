"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface CounterProps {
  from: number
  to: number
  duration?: number
}

export const CounterElement = ({ from, to, duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(from)
  const nodeRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!isInView || hasAnimated) return

    let startTime: number
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * (to - from) + from))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      } else {
        setHasAnimated(true)
      }
    }

    animationFrame = requestAnimationFrame(step)

    return () => cancelAnimationFrame(animationFrame)
  }, [from, to, duration, isInView, hasAnimated])

  // Format the number with commas for thousands
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  return <span ref={nodeRef}>{formattedCount}</span>
}
