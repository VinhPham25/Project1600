"use client"

import { motion } from "framer-motion"
import { Award, GraduationCap, Users, Mail, Linkedin } from "lucide-react"

const accolades = [
  { icon: Award, value: "1600", label: "Perfect SAT Score" },
  { icon: GraduationCap, value: "Top 20", label: "University" },
  { icon: Users, value: "100+", label: "Students Helped" },
]

export function FounderProfile() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-12 shadow-sm"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Photo */}
            <div className="flex-shrink-0">
              <img
                src="/professional-young-tutor-portrait-headshot.jpg"
                alt="Founder of Project 1600"
                className="w-48 h-48 rounded-2xl object-cover border-4 border-[#DBEAFE]"
              />
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-[#1E3A8A]">Meet the Founder</h2>
              <p className="mt-2 text-[#64748B]">SAT Perfect Scorer & Lead Tutor</p>

              {/* Accolades */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {accolades.map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-[#DBEAFE] flex items-center justify-center mx-auto mb-2">
                      <item.icon className="w-6 h-6 text-[#2563EB]" />
                    </div>
                    <div className="text-xl font-bold text-[#1E3A8A]">{item.value}</div>
                    <div className="text-xs text-[#64748B]">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 flex justify-center md:justify-start gap-4">
                <a
                  href="mailto:contact@project1600.com"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1E3A8A] text-white hover:bg-[#1E3A8A] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#2563EB] text-[#2563EB] hover:bg-[#DBEAFE] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
