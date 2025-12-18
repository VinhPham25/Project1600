"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Calendar, HelpCircle, BookOpen, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { icon: Calendar, label: "Book Consultation", href: "#register" },
  { icon: BookOpen, label: "Our Services", href: "#services" },
  { icon: HelpCircle, label: "FAQs", href: "#faq" },
  { icon: Phone, label: "Contact Us", href: "mailto:contact@project1600.com" },
]

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#2563EB] text-white shadow-lg flex items-center justify-center hover:bg-[#1E3A8A] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#2563EB] text-white p-4">
              <h3 className="font-semibold text-lg">Hi there! 👋</h3>
              <p className="text-sm text-white/80">How can we help you today?</p>
            </div>

            {/* Quick Links */}
            <div className="p-4 space-y-2">
              {quickLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="outline"
                  className="w-full justify-start gap-3 border-[#E2E8F0] text-[#1E3A8A] hover:bg-[#DBEAFE] hover:border-[#2563EB] transition-all bg-transparent"
                  asChild
                >
                  <a href={link.href} onClick={() => setIsOpen(false)}>
                    <link.icon className="w-4 h-4 text-[#2563EB]" />
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>

            {/* Footer */}
            <div className="px-4 pb-4">
              <p className="text-xs text-center text-[#64748B]">
                Or email us at{" "}
                <a href="mailto:contact@project1600.com" className="text-[#2563EB] hover:underline">
                  contact@project1600.com
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
