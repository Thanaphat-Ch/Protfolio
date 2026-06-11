'use client'

import { useScrollTo } from '@/Hooks/useScrollTo';
import { Menu, X } from 'lucide-react'
import React, { useEffect } from 'react'


export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const scrollTo = useScrollTo()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["home", "about", "experience", "projects"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top >= -100 && rect.top <= 300
      })

      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5 md:py-6"
    }`}>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">

        <div
          className="text-xl font-bold cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          THANAPHAT.<span className="text-neutral-400">CH</span>
        </div>

        <div className="hidden md:flex space-x-8 text-sm">
          {["About", "Experience", "Projects"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className={activeSection === item.toLowerCase() ? "text-black" : "text-gray-500"}
            >
              {item}
            </button>
          ))}
        </div>

        <button onClick={() => scrollTo("contact")} className="hidden md:block">
          ติดต่อฉัน
        </button>

        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-4">
          {["About", "Experience", "Projects"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}