"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Search, Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const topNavLinks = [
    { name: "JOB POSTING & RECRUITMENT", href: "/jobs" },
    { name: "SCHOLARSHIP/EXCHANGE", href: "/scholarships" },
    { name: "INNOVATE/RESEARCH", href: "/research" },
    { name: "PUBLICATIONS", href: "/publications" },
  ]

  const mainNavLinks = [
    {
      name: "About AASGON",
      href: "#",
      dropdown: [
        { name: "Our Mission", href: "/about/mission" },
        { name: "Our History", href: "/about/history" },
        { name: "Our Team", href: "/about/team" },
        { name: "Governance", href: "/about/governance" },
      ],
    },
    {
      name: "Media",
      href: "#",
      dropdown: [
        { name: "News", href: "/media/news" },
        { name: "Press Releases", href: "/media/press" },
        { name: "Gallery", href: "/media/gallery" },
        { name: "Resources", href: "/media/resources" },
      ],
    },
    {
      name: "Events",
      href: "#",
      dropdown: [
        { name: "Upcoming Events", href: "/events/upcoming" },
        { name: "Past Events", href: "/events/past" },
        { name: "Webinars", href: "/events/webinars" },
      ],
    },
    {
      name: "GSUA Conference",
      href: "#",
      dropdown: [
        { name: "About GSUA", href: "/gsua/about" },
        { name: "GSUA Summit 2025", href: "/gsua/summit-2025" },
        { name: "Awards & Expo", href: "/gsua/awards" },
      ],
    },
    {
      name: "Get Involved",
      href: "#",
      dropdown: [
        { name: "Volunteer", href: "/get-involved/volunteer" },
        { name: "Donate", href: "/get-involved/donate" },
        { name: "Partner With Us", href: "/get-involved/partner" },
      ],
    },
    {
      name: "Membership",
      href: "#",
      dropdown: [
        { name: "Benefits", href: "/membership/benefits" },
        { name: "Join Us", href: "/membership/join" },
        { name: "Member Portal", href: "/membership/portal" },
      ],
    },
    {
      name: "Partners",
      href: "#",
      dropdown: [
        { name: "UN Global Compact", href: "/partners/ungc" },
        { name: "UKSSD", href: "/partners/ukssd" },
        { name: "Other Partners", href: "/partners/others" },
      ],
    },
    
  ]

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "es", name: "Español" },
    { code: "ar", name: "العربية" },
    { code: "zh", name: "中文" },
  ]

  return (
    <header className="w-full z-50">
      {/* Top navigation bar */}
      <div className="bg-un-darkblue text-white py-2">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="hidden md:flex space-x-6 text-xs">
              {topNavLinks.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-blue-300 transition-colors duration-200">
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-3">
                <a href="https://web.facebook.com/pages/category/Social-Service/Africa-Asia-Scholars-Global-Network-AASGON-101759198222219" aria-label="Facebook" className="hover:text-blue-300 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="https://twitter.com/aasgon" aria-label="Twitter" className="hover:text-blue-300 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/africa-asia-scholars-global-network-4ba16a29" aria-label="LinkedIn" className="hover:text-blue-300 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs text-white">
                    <Globe className="h-3 w-3" />
                    <span>EN</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map((lang) => (
                    <DropdownMenuItem key={lang.code} className="text-xs">
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "py-2 bg-background/90 backdrop-blur-md shadow-md" : "py-4 bg-background"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-12 w-12 md:h-16 md:w-16">
                  <Image
                    src="/aasgon.png?height=64&width=64"
                    alt="AASGON Logo"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
              </motion.div>
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h1 className="text-xl md:text-2xl font-bold">AASGON</h1>
                  
                </motion.div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              {mainNavLinks.map((link, index) =>
                link.dropdown ? (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center gap-1 text-sm">
                        {link.name}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {link.dropdown.map((item) => (
                        <DropdownMenuItem key={item.name} asChild>
                          <Link href={item.href}>{item.name}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button key={link.name} variant="ghost" asChild className="text-sm">
                    <Link href={link.href}>{link.name}</Link>
                  </Button>
                ),
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" aria-label="Search">
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="hidden md:flex"
                onClick={() => (window.location.href = "/membership/join")}
              >
                Join Us
              </Button>
              <Button className="hidden md:flex" onClick={() => (window.location.href = "/get-involved/donate")}>
                Donate
              </Button>
              <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col divide-y divide-border">
                {/* Top nav links for mobile */}
                <div className="py-2 grid grid-cols-1 gap-2">
                  {topNavLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-sm py-2 hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Main nav links for mobile */}
                <div className="py-2">
                  {mainNavLinks.map((link) => (
                    <div key={link.name} className="py-2">
                      {link.dropdown ? (
                        <details className="group">
                          <summary className="list-none flex justify-between items-center cursor-pointer">
                            <span className="text-base font-medium">{link.name}</span>
                            <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                          </summary>
                          <div className="mt-2 ml-4 space-y-2">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </details>
                      ) : (
                        <Link
                          href={link.href}
                          className="block text-base font-medium hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Action buttons for mobile */}
                <div className="py-4 flex flex-col space-y-2">
                  <Button variant="outline" onClick={() => (window.location.href = "/membership/join")}>
                    Join Us
                  </Button>
                  <Button onClick={() => (window.location.href = "/get-involved/donate")}>Donate</Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
