"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ClipboardCheck, Lightbulb, Zap, Trophy } from "lucide-react"

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Diagnostic",
    description: "Take a comprehensive diagnostic test to identify your strengths, weaknesses, and baseline score.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Strategy",
    description: "Receive a personalized study plan with targeted strategies based on your diagnostic results.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Sprints",
    description: "Engage in focused learning sprints with weekly sessions, practice tests, and real-time feedback.",
  },
  {
    icon: Trophy,
    step: "04",
    title: "Success",
    description: "Walk into test day confident and prepared. Join our community of 1500+ scorers.",
  },
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

          <div className="grid grid-cols-4 gap-8 mb-8">
            {steps.map((step, index) => (
              <motion.div
                key={`num-${step.step}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <span className="text-sm font-bold text-[#60A5FA]">{step.step}</span>
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
                <span className="text-sm font-bold text-[#60A5FA]">{step.step}</span>
                <h3 className="text-lg font-semibold text-[#0a0a0a] mt-1">{step.title}</h3>
                <p className="mt-2 text-[#64748B] text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
