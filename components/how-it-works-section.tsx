"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ClipboardCheck, Lightbulb, Zap, Trophy, Calendar, Clock, Video, Users } from "lucide-react"

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Diagnostic",
    date: "May 1st - Jun 8th",
    description: "Take a comprehensive diagnostic test and meet 1-1 with us to identify your strengths, weaknesses, and goals.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Learn",
    date: "Jun 8th - Jul 18th",
    description: "Engage in weekly lectures and practice tests with real-time feedback to build content knowledge.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Sprint",
    date: "Jul 18th - Aug 1st",
    description: "2 weeks of intensive practice and strategy refinement to polish your skills and complete the program. ",
  },
  {
    icon: Trophy,
    step: "04",
    title: "Review",
    date: "Aug 1st - Aug 15th",
    description: "Receive personal study resources, practice exams, and final test-taking strategies to prepare before testing day.",
  },
]

const programDetails = [
  { icon: Calendar, label: "Program Duration", value: "8 weeks" },
  { icon: Clock, label: "Session Length", value: "90 Minutes" },
  { icon: Users, label: "Sessions Per Week", value: "2 Sessions" },
  { icon: Video, label: "Meeting Platform", value: "Google Meet" },
]

export function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"])

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-10 w-48 h-48 bg-[#1E3A8A]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] text-balance">
            Simple Process, <span className="text-[#1E3A8A]">Powerful Results</span>
          </h2>
          <p className="mt-4 text-lg text-[#64748B] max-w-2xl mx-auto">
            Our proven 4-step system transforms your SAT preparation into a streamlined path to success.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Icons Row */}
          <div className="grid grid-cols-4 gap-8 mb-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.15 }}
                  className="w-16 h-16 rounded-2xl bg-white border-2 border-[#1E3A8A] flex items-center justify-center shadow-lg"
                >
                  <step.icon className="w-8 h-8 text-[#1E3A8A]" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-8 mb-2">
            {steps.map((step, index) => (
              <motion.div
                key={`num-${step.step}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <span className="text-2xl font-bold text-[#1E3A8A]">{step.step}</span>
              </motion.div>
            ))}
          </div>

          {/* Dates Row */}
          <div className="grid grid-cols-4 gap-8 mb-8">
            {steps.map((step, index) => (
              <motion.div
                key={`date-${step.step}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <span className="text-sm text-[#64748B]">{step.date}</span>
              </motion.div>
            ))}
          </div>

          {/* Progress Line */}
          <div className="relative h-1 mb-8">
            <div className="absolute inset-0 bg-[#E2E8F0] rounded-full" />
            <motion.div
              className="absolute top-0 left-0 h-1 bg-[#1E3A8A] rounded-full origin-left"
              style={{ width: lineHeight }}
            />
          </div>

          <div className="grid grid-cols-4 gap-8 mt-8">
            {steps.map((step, index) => (
              <motion.div
                key={`label-${step.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold text-[#0a0a0a]">{step.title}</h3>
                <p className="mt-2 text-[#64748B] text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] flex items-center justify-center shadow-md">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                {index < steps.length - 1 && <div className="w-0.5 h-full bg-[#E2E8F0] mt-2" />}
              </div>
              <div className="flex-1 pb-8">
                <span className="text-xl font-bold text-[#1E3A8A]">{step.step}</span>
                <span className="text-sm text-[#64748B] ml-2">{step.date}</span>
                <h3 className="text-lg font-semibold text-[#0a0a0a] mt-1">{step.title}</h3>
                <p className="mt-2 text-[#64748B] text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Program Logistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-8 md:p-12 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-4xl text-[#0a0a0a] text-center mb-8">
            Program <span className="text-[#1E3A8A]">Logistics</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.map((detail, index) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#DBEAFE] flex items-center justify-center mb-3">
                  <detail.icon className="w-6 h-6 text-[#1E3A8A]" />
                </div>
                <h4 className="text-med font-medium text-[#64748B] mb-1">{detail.label}</h4>
                <p className="text-lg font-bold text-[#0a0a0a]">{detail.value}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-center text-lg text-[#64748B] leading-relaxed max-w-3xl mx-auto">
            Our comprehensive 8-week program runs from <span className="font-semibold text-[#1E3A8A]">June 8th - August 1st, 2026</span>. 
            You'll attend two 90-minute sessions per week via Google Meet, with flexible scheduling options to fit your busy schedule. 
            All sessions include personalized feedback, practice materials, and ongoing support between meetings to prepare for the August 2026 SAT.
          </p>
        </motion.div>
      </div>
    </section>
  )
}