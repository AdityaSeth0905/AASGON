"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Brain, BarChart3, Users, ShieldCheck, Zap, Database } from "lucide-react"

const services = [
  {
    icon: <Brain className="h-10 w-10 text-purple-400" />,
    title: "AI Strategy Consulting",
    description: "We help businesses develop comprehensive AI strategies aligned with their goals and objectives.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-purple-400" />,
    title: "Predictive Analytics",
    description:
      "Leverage advanced analytics to forecast trends, identify opportunities, and make data-driven decisions.",
  },
  {
    icon: <Users className="h-10 w-10 text-purple-400" />,
    title: "Customer Experience AI",
    description: "Enhance customer interactions with AI-powered chatbots, recommendation engines, and personalization.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-purple-400" />,
    title: "AI Security Solutions",
    description: "Protect your business with AI-driven security systems that detect and prevent threats in real-time.",
  },
  {
    icon: <Zap className="h-10 w-10 text-purple-400" />,
    title: "Process Automation",
    description: "Streamline operations and reduce costs with intelligent automation of repetitive business processes.",
  },
  {
    icon: <Database className="h-10 w-10 text-purple-400" />,
    title: "Data Management",
    description:
      "Organize, analyze, and extract value from your data with our comprehensive data management solutions.",
  },
]

const Services = () => {
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

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">AI-Powered</span> Services
            </h2>
            <p className="text-gray-300">
              We offer a comprehensive suite of AI solutions designed to transform your business operations and drive
              growth.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="glass-effect rounded-xl p-6 card-hover">
              <div className="mb-5 p-3 inline-block rounded-lg bg-purple-900/20">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
