"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Globe, Heart, BookOpen, Users, Shield } from "lucide-react"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

const MissionSection = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0])

  const missionStatement =
    "AASGON works to promote good governance and purposeful education, protect, advance and maintain human capacity development, dignity, rights and values for a better, humane and fairer world."

  const values = [
    {
      icon: <Globe className="h-8 w-8 text-blue-400" />,
      title: "Global Cooperation",
      description:
        "Building international partnerships to address global challenges through collaborative action and shared knowledge.",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-400" />,
      title: "Human Dignity",
      description:
        "Upholding the inherent worth of every individual and protecting fundamental human rights across all societies.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-400" />,
      title: "Education",
      description:
        "Advancing purposeful education that empowers individuals and communities to create sustainable change.",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-400" />,
      title: "Good Governance",
      description:
        "Promoting transparent, accountable, and inclusive governance systems that serve the needs of all people.",
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-400" />,
      title: "Compassion",
      description: "Acting with empathy and understanding to address suffering and create a more humane world.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      title: "Inclusivity",
      description: "Ensuring diverse voices are heard and represented in decision-making processes at all levels.",
    },
  ]

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div style={{ opacity, y }} className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Mission</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full"></div>
          </div>

          <div className="glass-card p-8 rounded-xl shadow-lg border border-blue-500/20">
            <TextGenerateEffect
              words={missionStatement}
              className="text-xl md:text-2xl leading-relaxed text-muted-foreground italic"
            />
          </div>

          <div className="pt-4 space-y-6">
            <p className="text-lg text-muted-foreground">
              As a signatory to the UN Global Compact (UNGC) and member of the UK Stakeholders for Sustainable
              Development (UKSSD), we are committed to advancing the Sustainable Development Goals through collaborative
              partnerships, education, and advocacy.
            </p>

            <Button
              className="mt-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-blue"
              onClick={() => (window.location.href = "/about/mission")}
            >
              Learn More About Our Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <div className="divider"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Core Values</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 card-3d"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-blue-500/10 rounded-full mb-4">{value.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MissionSection
