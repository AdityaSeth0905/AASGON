"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const DigitalPartner = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-600/20"></div>
      <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 glass-card p-6 rounded-xl shadow-lg"
        >
          <div className="flex items-center space-x-4">
            <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-blue-400/30">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Xyronix Labs Logo"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-blue-400 font-medium">Digital Partner</p>
              <h3 className="text-xl font-bold">Xyronix Labs</h3>
              <p className="text-sm text-muted-foreground">Innovative digital solutions for global impact</p>
            </div>
          </div>

          <Button
            variant="outline"
            className="border-blue-400/30 hover:bg-blue-500/10 hover:border-blue-400"
            onClick={() => window.open("https://www.xyronixlabs.com", "_blank")}
          >
            Visit Website
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default DigitalPartner
