"use client"

import { motion } from "framer-motion"
import { Target, Users, Award } from "lucide-react"

export function MissionSection() {
  return (
    <section id="mission" className="py-28 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#1E3A8A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#60A5FA]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Mission Text */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#DBEAFE] text-[#0a0a0a] px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Target className="w-4 h-4 text-[#1E3A8A]" />
              Our Purpose
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] text-balance mb-6">
              The <span className="text-[#1E3A8A]">Mission</span>
            </h2>

            <p className="text-lg text-[#64748B] leading-relaxed mb-4">
              {
                "Project 1600 was born from a simple belief: every student deserves access to elite SAT preparation, regardless of their family's financial situation. After achieving a perfect score, I realized that the strategies that worked weren't being taught by expensive prep companies—they were gatekeeping success behind $5,000 price tags."
              }
            </p>
            <p className="text-lg text-[#64748B] leading-relaxed mb-8">
              {
                "Our mission is to democratize SAT success. We provide the same caliber of instruction you'd get from a $200/hour tutor, but at a price that doesn't break the bank."
              }
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Target, value: "1600", label: "SAT Score" },
                { icon: Users, value: "100+", label: "Students Helped" },
                { icon: Award, value: "+200", label: "Avg. Improvement" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 border border-[#E2E8F0] shadow-md hover:shadow-lg hover:border-[#1E3A8A] transition-all duration-150 text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#DBEAFE] flex items-center justify-center mx-auto mb-2">
                    <item.icon className="w-5 h-5 text-[#1E3A8A]" />
                  </div>
                  <p className="text-xl font-bold text-[#1E3A8A]">{item.value}</p>
                  <p className="text-xs text-[#64748B]">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xl">
              <img
                src="/professional-sat-tutor-teaching-student-in-modern-.jpg"
                alt="SAT Tutoring Session"
                className="w-full h-auto object-cover"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/20 to-transparent" />
            </div>

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-[#E2E8F0]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#DBEAFE] flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#1E3A8A]" />
                </div>
                <div>
                  <p className="text-xs text-[#64748B]">Average Result</p>
                  <p className="text-lg font-bold text-[#0a0a0a]">1480+ Score</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
