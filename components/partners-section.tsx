"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const PartnersSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  // Partner logos would be actual images in production
  const partners = {
    international: Array.from({ length: 4 }, (_, i) => ({
      id: i + 1,
      name: `International Organization ${i + 1}`,
      logo: `/placeholder.svg?height=80&width=160`,
    })),
    government: Array.from({ length: 4 }, (_, i) => ({
      id: i + 1,
      name: `Government Partner ${i + 1}`,
      logo: `/placeholder.svg?height=80&width=160`,
    })),
    academic: Array.from({ length: 4 }, (_, i) => ({
      id: i + 1,
      name: `Academic Institution ${i + 1}`,
      logo: `/placeholder.svg?height=80&width=160`,
    })),
    corporate: Array.from({ length: 4 }, (_, i) => ({
      id: i + 1,
      name: `Corporate Partner ${i + 1}`,
      logo: `/placeholder.svg?height=80&width=160`,
    })),
  }

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground">
              We collaborate with organizations around the world to advance sustainable development and create positive
              change through strategic partnerships.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="international" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
              <TabsTrigger value="international" className="data-[state=active]:bg-blue-500/20">
                International
              </TabsTrigger>
              <TabsTrigger value="government" className="data-[state=active]:bg-blue-500/20">
                Government
              </TabsTrigger>
              <TabsTrigger value="academic" className="data-[state=active]:bg-blue-500/20">
                Academic
              </TabsTrigger>
              <TabsTrigger value="corporate" className="data-[state=active]:bg-blue-500/20">
                Corporate
              </TabsTrigger>
            </TabsList>

            {Object.entries(partners).map(([category, partnerList]) => (
              <TabsContent key={category} value={category}>
                <motion.div
                  ref={ref}
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                  {partnerList.map((partner) => (
                    <motion.div key={partner.id} variants={itemVariants} className="flex justify-center">
                      <div className="glass-card p-4 rounded-lg flex items-center justify-center hover:shadow-blue transition-all duration-300 w-full h-24 card-3d">
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          width={160}
                          height={80}
                          className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-blue"
            onClick={() => (window.location.href = "/partners")}
          >
            View All Partners
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default PartnersSection
