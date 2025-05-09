"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { HoverEffect } from "@/components/ui/card-hover-effect"

const SDGSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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

  // SDG icons would be actual images in production
  const sdgs = Array.from({ length: 17 }, (_, i) => ({
    id: i + 1,
    name: `SDG ${i + 1}`,
    image: `/placeholder.svg?height=80&width=80`,
  }))

  const featuredSDGs = [
    {
      title: "Quality Education",
      description:
        "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
      icon: "/placeholder.svg?height=80&width=80",
      link: "/sdgs/education",
    },
    {
      title: "Gender Equality",
      description:
        "Achieve gender equality and empower all women and girls through education, economic opportunities, and leadership.",
      icon: "/placeholder.svg?height=80&width=80",
      link: "/sdgs/gender-equality",
    },
    {
      title: "Sustainable Cities",
      description:
        "Make cities and human settlements inclusive, safe, resilient and sustainable through urban planning and governance.",
      icon: "/placeholder.svg?height=80&width=80",
      link: "/sdgs/sustainable-cities",
    },
    {
      title: "Climate Action",
      description:
        "Take urgent action to combat climate change and its impacts through education, innovation, and policy advocacy.",
      icon: "/placeholder.svg?height=80&width=80",
      link: "/sdgs/climate-action",
    },
    {
      title: "Partnerships",
      description:
        "Strengthen the means of implementation and revitalize the global partnership for sustainable development.",
      icon: "/placeholder.svg?height=80&width=80",
      link: "/sdgs/partnerships",
    },
    {
      title: "Peace & Justice",
      description:
        "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all.",
      icon: "/placeholder.svg?height=80&width=80",
      link: "/sdgs/peace-justice",
    },
  ]

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/50"></div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sustainable Development Goals</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground">
              We are committed to advancing the UN Sustainable Development Goals through our programs, partnerships, and
              advocacy efforts worldwide.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="sdg-grid max-w-4xl mx-auto mb-16 glass-card p-8 rounded-xl shadow-lg"
        >
          {sdgs.map((sdg) => (
            <motion.div key={sdg.id} variants={itemVariants} className="flex flex-col items-center">
              <div className="relative h-[80px] w-[80px] rounded-md overflow-hidden hover:scale-110 transition-transform duration-300 cursor-pointer shadow-md hover:shadow-blue">
                <Image
                  src={sdg.image || "/placeholder.svg"}
                  alt={sdg.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-center mb-8"
          >
            Our Focus Areas
          </motion.h3>

          <HoverEffect
            items={featuredSDGs.map((sdg) => ({
              title: sdg.title,
              description: sdg.description,
              link: sdg.link,
            }))}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-blue"
            onClick={() => (window.location.href = "/about/sdgs")}
          >
            Learn How We Support the SDGs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default SDGSection
