"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BackgroundGradient } from "@/components/ui/background-gradient"

const NewsSection = () => {
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

  const news = [
    {
      id: 1,
      title: "AASGON Announces GSUA Summit 2025",
      excerpt:
        "The Global Sustainable Urban Awards Summit & Expo will be held in London from 18-20 July 2025, bringing together leaders in sustainable urban development from around the world.",
      date: "January 15, 2025",
      image: "/placeholder.svg?height=200&width=400",
      category: "Events",
    },
    {
      id: 2,
      title: "New Partnership with Global Education Initiative",
      excerpt:
        "AASGON partners with GEI to expand educational opportunities in developing regions, focusing on sustainable development education and capacity building for local communities.",
      date: "December 10, 2024",
      image: "/placeholder.svg?height=200&width=400",
      category: "Partnerships",
    },
    {
      id: 3,
      title: "Sustainable Development Report 2024 Released",
      excerpt:
        "Our annual report highlights progress and challenges in advancing the SDGs globally, featuring case studies from our programs in Africa, Asia, and Latin America.",
      date: "November 22, 2024",
      image: "/placeholder.svg?height=200&width=400",
      category: "Publications",
    },
  ]

  return (
    <section id="news" className="py-20 md:py-28 relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground">
              Stay updated with the latest news, announcements, and publications from AASGON.
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
          {news.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <BackgroundGradient className="rounded-[22px] p-0.5 bg-slate-950">
                <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm border-0 rounded-[20px]">
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-3 py-1 text-xs rounded-full font-medium">
                      {item.category}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 text-xl">{item.title}</CardTitle>
                    <CardDescription className="flex items-center text-xs">
                      <Calendar className="mr-1 h-3 w-3 text-blue-400" />
                      {item.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{item.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="default"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                      onClick={() => (window.location.href = `/news/${item.id}`)}
                    >
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              </BackgroundGradient>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-blue"
            onClick={() => (window.location.href = "/media/news")}
          >
            View All News
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsSection
