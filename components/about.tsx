"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const benefits = [
    "Increased operational efficiency",
    "Enhanced decision-making capabilities",
    "Improved customer experiences",
    "Reduced costs through automation",
    "Competitive advantage through innovation",
    "Scalable AI solutions for growth",
  ]

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/10 to-transparent opacity-30"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-transparent z-10"></div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="About Aasgon"
                width={600}
                height={500}
                className="object-cover h-full w-full"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 glass-effect rounded-xl p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-purple-500 flex items-center justify-center">
                  <span className="text-xl font-bold">10+</span>
                </div>
                <div>
                  <h4 className="font-bold">Years of Experience</h4>
                  <p className="text-sm text-gray-300">In AI & Machine Learning</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="gradient-text">Aasgon</span>
            </h2>

            <p className="text-gray-300">
              Aasgon is a leading provider of AI-powered business solutions, dedicated to helping organizations harness
              the power of artificial intelligence to drive innovation and growth.
            </p>

            <p className="text-gray-300">
              With a team of experienced AI specialists and data scientists, we deliver cutting-edge solutions tailored
              to meet the unique needs of each client. Our approach combines technical expertise with a deep
              understanding of business challenges to create practical, effective AI implementations.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-bold mb-4">Why Choose Aasgon?</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-200">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
