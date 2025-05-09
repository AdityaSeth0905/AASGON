"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface SparklesProps {
  id: string
  background?: string
  minSize?: number
  maxSize?: number
  particleCount?: number
  particleDensity?: number
  className?: string
  particleColor?: string
  particleOpacity?: number
  speed?: number
}

export const SparklesCore = ({
  id,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleCount,
  particleDensity = 100,
  className,
  particleColor = "#FFF",
  particleOpacity = 0.5,
  speed = 1,
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [particles, setParticles] = useState<any[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const width = canvas.offsetWidth
        const height = canvas.offsetHeight

        setDimensions({
          width,
          height,
        })
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return

    const particleCount = Math.min(
      Math.max(Math.floor((dimensions.width * dimensions.height) / particleDensity), 50),
      500,
    )

    const createParticles = () => {
      const particles = []
      for (let i = 0; i < particleCount; i++) {
        const particle = {
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          speedX: (Math.random() - 0.5) * 0.8 * speed,
          speedY: (Math.random() - 0.5) * 0.8 * speed,
        }
        particles.push(particle)
      }
      return particles
    }

    setParticles(createParticles())
  }, [dimensions, maxSize, minSize, particleDensity, speed])

  useEffect(() => {
    if (!canvasRef.current || !particles.length) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.fillStyle = `${particleColor}${Math.floor(particleOpacity * 255).toString(16)}`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x > canvas.width) particle.x = 0
        else if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        else if (particle.y < 0) particle.y = canvas.height
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [particles, dimensions, background, particleColor, particleOpacity])

  return <canvas ref={canvasRef} id={id} className={cn("h-full w-full", className)} />
}
