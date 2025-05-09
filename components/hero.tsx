"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Globe, Users, BookOpen } from "lucide-react"
import Image from "next/image"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { SparklesCore } from "@/components/ui/sparkles"

const Hero = () => {
  const words = [
    {
      text: "Advancing",
    },
    {
      text: "Sustainable",
      className: "text-blue-500 dark:text-blue-400",
    },
    {
      text: "Development",
    },
    {
      text: "Globally",
      className: "text-blue-500 dark:text-blue-400",
    },
  ]

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-400/30 bg-blue-400/10 text-sm text-blue-400 shadow-inner-top">
              <span className="animate-pulse-slow mr-2 h-2 w-2 rounded-full bg-blue-400"></span>
              <span className="relative">
                International Non-Profit Organization
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></span>
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <TypewriterEffect words={words} />
              </h1>
              <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              AASGON works to promote good governance and purposeful education, protect, advance and maintain human
              capacity development, dignity, rights and values for a better, humane and fairer world.
            </p>

            <div className="grid grid-cols-3 gap-4 py-2">
              <div className="flex flex-col items-center glass-effect rounded-lg p-3 shadow-blue">
                <Globe className="h-6 w-6 text-blue-400 mb-2" />
                <span className="text-sm font-medium">Global Reach</span>
              </div>
              <div className="flex flex-col items-center glass-effect rounded-lg p-3 shadow-blue">
                <Users className="h-6 w-6 text-blue-400 mb-2" />
                <span className="text-sm font-medium">Collaborative</span>
              </div>
              <div className="flex flex-col items-center glass-effect rounded-lg p-3 shadow-blue">
                <BookOpen className="h-6 w-6 text-blue-400 mb-2" />
                <span className="text-sm font-medium">Educational</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="rounded-md px-6 py-6 text-base transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-blue"
                onClick={() => (window.location.href = "/about/mission")}
              >
                Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                className="rounded-md px-6 py-6 text-base transition-all duration-300 border-blue-400/30 hover:bg-blue-500/10 hover:border-blue-400"
                onClick={() => (window.location.href = "/get-involved/partner")}
              >
                Partner With Us
              </Button>
            </div>

            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-3 font-medium">Affiliated with</p>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="glass-effect p-2 rounded-lg shadow-blue">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    alt="UN Global Compact"
                    width={120}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="glass-effect p-2 rounded-lg shadow-blue">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    alt="UKSSD"
                    width={120}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-conic from-blue-500/40 via-transparent to-blue-600/40 rounded-full blur-3xl opacity-30 animate-rotate"></div>

            <div className="relative h-[400px] md:h-[500px] w-full">
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>

              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg opacity-20 blur-xl animate-pulse-slow"></div>

              <div className="relative z-10 h-full w-full rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Global Sustainability"
                  width={500}
                  height={500}
                  className="object-cover h-full w-full rounded-lg animate-float"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <SparklesCore
                  id="hero-sparkles"
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={70}
                  className="absolute inset-0 w-full h-full"
                  particleColor="#fff"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4 animate-float shadow-lg">
                <div className="h-full w-full bg-blue-500/20 rounded-lg flex items-center justify-center p-3">
                  <span className="text-sm font-bold text-gradient">Sustainable Development</span>
                </div>
              </div>

              <div
                className="absolute -top-6 -left-6 glass-card rounded-xl p-4 animate-float shadow-lg"
                style={{ animationDelay: "2s" }}
              >
                <div className="h-full w-full bg-blue-500/20 rounded-lg flex items-center justify-center p-3">
                  <span className="text-sm font-bold text-gradient">Global Impact</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 z-20 glass-effect rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="relative h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </div>
                  <span className="text-xs font-medium text-white">Active in 40+ countries</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
