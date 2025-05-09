"use client"

import { useRef, useEffect } from "react"
import { useTheme } from "next-themes"

interface ParticlesProps {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  refresh?: boolean
}

export const Particles = ({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const { theme } = useTheme()
  const particles = useRef<Array<Particle>>([])
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const mouseIsMoving = useRef<boolean>(false)
  const mouseMovementTimeout = useRef<NodeJS.Timeout | null>(null)

  class Particle {
    x: number
    y: number
    originalX: number
    originalY: number
    vx: number
    vy: number
    size: number
    color: string
    ease: number
    friction: number
    dx: number
    dy: number
    distance: number
    force: number
    angle: number

    constructor(x: number, y: number, size: number, color: string, ease: number) {
      this.x = this.originalX = x
      this.y = this.originalY = y
      this.vx = 0
      this.vy = 0
      this.size = size
      this.color = color
      this.ease = ease
      this.friction = 0.98
      this.dx = 0
      this.dy = 0
      this.distance = 0
      this.force = 0
      this.angle = 0
    }

    update(mouseX: number, mouseY: number, mouseIsMoving: boolean) {
      if (mouseIsMoving) {
        this.dx = mouseX - this.x
        this.dy = mouseY - this.y
        this.distance = Math.sqrt(this.dx * this.dx + this.dy * this.dy)
        this.force = Math.max(0, Math.min(1, 1 - this.distance / staticity))
        this.angle = Math.atan2(this.dy, this.dx)
        this.vx += this.force * Math.cos(this.angle) * 0.1
        this.vy += this.force * Math.sin(this.angle) * 0.1
      }

      this.vx *= this.friction
      this.vy *= this.friction

      this.x += this.vx + (this.originalX - this.x) / this.ease
      this.y += this.vy + (this.originalY - this.y) / this.ease
    }

    draw(context: CanvasRenderingContext2D) {
      context.beginPath()
      context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      context.fillStyle = this.color
      context.fill()
    }
  }

  const initCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect()
      const { width, height } = rect
      const dpr = window.devicePixelRatio || 1

      canvasRef.current.width = width * dpr
      canvasRef.current.height = height * dpr
      canvasRef.current.style.width = `${width}px`
      canvasRef.current.style.height = `${height}px`

      context.current = canvasRef.current.getContext("2d")

      if (context.current) {
        context.current.scale(dpr, dpr)
      }
    }
  }

  const initParticles = () => {
    particles.current = []
    if (canvasContainerRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect()
      const { width, height } = rect

      for (let i = 0; i < quantity; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const size = Math.random() * 1.5 + 0.5
        const color =
          theme === "dark"
            ? `rgba(${100 + Math.random() * 55}, ${150 + Math.random() * 55}, ${200 + Math.random() * 55}, ${0.2 + Math.random() * 0.3})`
            : `rgba(${100 + Math.random() * 55}, ${150 + Math.random() * 55}, ${200 + Math.random() * 55}, ${0.2 + Math.random() * 0.3})`

        particles.current.push(new Particle(x, y, size, color, ease))
      }
    }
  }

  const render = () => {
    if (context.current && canvasContainerRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect()
      context.current.clearRect(0, 0, rect.width, rect.height)

      particles.current.forEach((particle) => {
        particle.update(mouse.current.x, mouse.current.y, mouseIsMoving.current)
        particle.draw(context.current!)
      })

      requestAnimationFrame(render)
    }
  }

  const onMouseMove = (e: MouseEvent) => {
    if (canvasContainerRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect()
      mouse.current.x = e.clientX - rect.left
      mouse.current.y = e.clientY - rect.top
      mouseIsMoving.current = true

      if (mouseMovementTimeout.current) {
        clearTimeout(mouseMovementTimeout.current)
      }

      mouseMovementTimeout.current = setTimeout(() => {
        mouseIsMoving.current = false
      }, 100)
    }
  }

  const onWindowResize = () => {
    initCanvas()
    initParticles()
  }

  useEffect(() => {
    initCanvas()
    initParticles()
    render()

    window.addEventListener("resize", onWindowResize)
    window.addEventListener("mousemove", onMouseMove)

    return () => {
      window.removeEventListener("resize", onWindowResize)
      window.removeEventListener("mousemove", onMouseMove)
      if (mouseMovementTimeout.current) {
        clearTimeout(mouseMovementTimeout.current)
      }
    }
  }, [])

  useEffect(() => {
    if (refresh) {
      initParticles()
    }
  }, [refresh, theme])

  return (
    <div className={className} ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}
