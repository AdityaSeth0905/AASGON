"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "Aasgon's AI solutions have transformed our customer service operations, reducing response times by 60% and significantly improving customer satisfaction scores.",
    author: "Sarah Johnson",
    position: "CTO, TechCorp",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "Implementing Aasgon's predictive analytics platform has given us invaluable insights into market trends, helping us stay ahead of the competition.",
    author: "Michael Chen",
    position: "CEO, DataDrive",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The process automation solutions provided by Aasgon have streamlined our operations and reduced costs by 40%. Their team's expertise is unmatched.",
    author: "Emily Rodriguez",
    position: "COO, InnovateNow",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "Aasgon's AI security system detected and prevented a potential data breach that could have cost us millions. Their technology is truly cutting-edge.",
    author: "David Wilson",
    position: "CISO, SecureNet",
    image: "/placeholder.svg?height=80&width=80",
  },
]

const Testimonials = () => {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-gray-300">
            Discover how our AI solutions have helped businesses across various industries achieve their goals.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="relative h-[300px] md:h-[250px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: active === index ? 1 : 0,
                  x: active === index ? 0 : 50,
                  zIndex: active === index ? 10 : 0,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 glass-effect rounded-2xl p-8 md:p-10"
                style={{ display: active === index ? "block" : "none" }}
              >
                <Quote className="h-12 w-12 text-purple-400 opacity-50 mb-4" />

                <p className="text-lg md:text-xl text-gray-100 mb-6">"{testimonial.quote}"</p>

                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === index ? "w-8 bg-purple-400" : "w-2 bg-gray-600"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
