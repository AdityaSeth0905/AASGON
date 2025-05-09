"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BackgroundGradient } from "@/components/ui/background-gradient"

const EventsSection = () => {
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

  const events = [
    {
      id: 1,
      title: "GSUA Summit 2025",
      description: "Global Sustainable Urban Awards Summit & Expo",
      date: "18-20 July 2025",
      location: "London, UK",
      image: "/placeholder.svg?height=200&width=400",
      type: "In-person & Virtual",
      featured: true,
    },
    {
      id: 2,
      title: "World Press Conference",
      description: "GSUA '25 Summit Awards & Expo Announcement",
      date: "25 March 2025",
      location: "Press Club of India, New Delhi",
      image: "/placeholder.svg?height=200&width=400",
      type: "In-person & Virtual",
      featured: false,
    },
    {
      id: 3,
      title: "Sustainable Development Workshop",
      description: "Capacity building for NGOs and community organizations",
      date: "10-12 June 2025",
      location: "Virtual Event",
      image: "/placeholder.svg?height=200&width=400",
      type: "Virtual Only",
      featured: false,
    },
  ]

  return (
    <section id="events" className="py-20 md:py-28 relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground">
              Join us at our upcoming events to connect with like-minded individuals and organizations committed to
              sustainable development.
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
          {events.map((event) => (
            <motion.div key={event.id} variants={itemVariants}>
              <BackgroundGradient className="rounded-[22px] p-0.5 bg-slate-950">
                <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm border-0 rounded-[20px]">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    {event.featured && (
                      <div className="absolute top-2 left-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-3 py-1 text-xs rounded-full font-medium">
                        Featured Event
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4 text-blue-400" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4 text-blue-400" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="mr-2 h-4 w-4 text-blue-400" />
                        {event.type}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="default"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                      onClick={() => (window.location.href = `/events/${event.id}`)}
                    >
                      Learn More
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
            onClick={() => (window.location.href = "/events/upcoming")}
          >
            View All Events
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default EventsSection
