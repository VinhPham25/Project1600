"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: pathname === "/" ? "#home" : "/", label: "Home" },
    { href: pathname === "/" ? "#services" : "/#services", label: "Services" },
    { href: pathname === "/" ? "#results" : "/#results", label: "Results" },
    { href: pathname === "/" ? "#pricing" : "/#pricing", label: "Pricing" },
    { href: "/founder-profile", label: "About Us" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#0a0a0a]">Project</span>
            <span className="text-2xl font-bold text-[#1E3A8A]">1600</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#0a0a0a] hover:text-[#1E3A8A] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-[#1E3A8A] hover:bg-[#0a0a0a] text-white transition-all duration-150 hover:scale-103 shadow-md"
            >
              <Link href="#register">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#0a0a0a]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border pb-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-[#0a0a0a] hover:text-[#1E3A8A] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-4 bg-[#1E3A8A] hover:bg-[#0a0a0a] text-white">
              <Link href="#register">Book Consultation</Link>
            </Button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
