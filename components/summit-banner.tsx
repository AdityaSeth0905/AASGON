"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Calendar, MapPin, Users } from "lucide-react"
import { CountdownTimer } from "@/components/ui/countdown-timer"

const SummitBanner = () => {
  // July 18, 2025
  const targetDate = new Date("2025-07-18T00:00:00").getTime()

  return (
    <section className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-un-darkblue via-un-blue to-un-lightblue opacity-90"></div>
      <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex-1 space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-sm text-white backdrop-blur-sm">
              <span className="animate-pulse-slow mr-2 h-2 w-2 rounded-full bg-white"></span>
              <span>Upcoming Global Event</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              <span className="text-gradient-gold">GSUA SUMMIT 2025</span>
            </h2>

            <p className="text-blue-100 max-w-lg">
              Join us for the prestigious Global Sustainable Urban Awards Summit & Expo, bringing together leaders,
              innovators, and change-makers from around the world to celebrate and advance sustainable urban
              development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2">
              <div className="flex items-center space-x-2 text-white">
                <Calendar className="h-5 w-5 text-blue-200" />
                <span className="text-sm">18-20 July 2025</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <MapPin className="h-5 w-5 text-blue-200" />
                <span className="text-sm">London, UK</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Users className="h-5 w-5 text-blue-200" />
                <span className="text-sm">In-person & Virtual</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                className="bg-white text-un-blue hover:bg-blue-50 shadow-lg transition-all duration-300 hover:shadow-xl"
                onClick={() => (window.location.href = "/gsua/register")}
              >
                Register to Attend
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={() => (window.location.href = "/gsua/exhibit")}
              >
                Register to Exhibit
              </Button>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center">
            <div className="relative h-32 md:h-40 w-full md:w-auto mb-4">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-light to-gold-dark opacity-20 blur-md rounded-lg"></div>
              <div className="relative glass-card rounded-lg overflow-hidden shadow-lg border border-white/20">
                <Image
                  src="/placeholder.svg?height=160&width=400"
                  alt="GSUA Summit 2025"
                  width={400}
                  height={160}
                  className="object-contain"
                />
                <div className="absolute right-0 bottom-0 bg-white/90 text-un-blue px-3 py-1 text-sm font-bold rounded-tl-lg">
                  18-20 JULY 2025 • LONDON
                </div>
              </div>
            </div>

            <div className="w-full">
              <p className="text-center text-white text-sm mb-2">Event Starts In</p>
              <CountdownTimer targetDate={targetDate} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SummitBanner
