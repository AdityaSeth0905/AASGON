"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { GlobeIcon, Users, BookOpen, Award } from "lucide-react"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { CounterElement } from "@/components/ui/counter"

const ImpactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    {
      icon: <GlobeIcon className="h-8 w-8 text-blue-400" />,
      value: 40,
      label: "Countries",
      description: "Active presence across continents",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      value: 250000,
      label: "People Impacted",
      description: "Through our programs and initiatives",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-400" />,
      value: 120,
      label: "Educational Programs",
      description: "Empowering communities worldwide",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-400" />,
      value: 85,
      label: "Partner Organizations",
      description: "Collaborative global network",
    },
  ]

  const timelineItems = [
    {
      year: "2010",
      title: "AASGON Founded",
      description: "Established with a mission to promote sustainable development and human dignity globally.",
    },
    {
      year: "2012",
      title: "UN Global Compact Signatory",
      description: "Became an official signatory to the United Nations Global Compact.",
    },
    {
      year: "2015",
      title: "SDG Implementation",
      description: "Aligned programs with the newly adopted Sustainable Development Goals.",
    },
    {
      year: "2018",
      title: "UKSSD Membership",
      description: "Joined the UK Stakeholders for Sustainable Development network.",
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: "Extended operations to 40+ countries across Africa, Asia, and Latin America.",
    },
    {
      year: "2023",
      title: "GSUA Summit Launch",
      description: "Inaugurated the Global Sustainable Urban Awards Summit & Expo.",
    },
  ]

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-world-map bg-no-repeat bg-center opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Impact</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground">
              For over a decade, AASGON has been driving positive change and sustainable development across the globe.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl shadow-lg border border-blue-500/20 text-center card-3d"
            >
              <div className="flex flex-col items-center">
                <div className="p-3 bg-blue-500/10 rounded-full mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2 text-gradient">
                  <CounterElement from={0} to={stat.value} duration={2} />
                  {stat.label === "People Impacted" ? "+" : ""}
                </div>
                <h4 className="text-xl font-medium mb-2">{stat.label}</h4>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-center mb-12"
          >
            Our Journey
          </motion.h3>

          <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto">
              {timelineItems.map((item, index) => (
                <div key={item.year} className="mb-12 relative">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl font-bold text-gradient-un mr-4">{item.year}</div>
                    <div className="h-px flex-grow bg-gradient-to-r from-blue-500 to-transparent"></div>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </TracingBeam>
        </div>
      </div>
    </section>
  )
}

export default ImpactSection
