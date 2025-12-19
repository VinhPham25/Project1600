"use client"

import { motion } from "framer-motion"
import { Target, DollarSign, MessageSquare, Brain, Clock, Users } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "1600-Level Strategy",
    description: "Learn the exact methods that recently earned a top 1% SAT score.",
    highlight: true,
  },
  {
    icon: DollarSign,
    title: "Diagnostic Tests",
    description:
      "Weekly official SAT diagnostic tests to track your progress and adapt your study plan.",
    highlight: false,
  },
  {
    icon: MessageSquare,
    title: "Structured Curriculum",
    description:
      "Lesson plans developed from official SAT questions to pinpoint key SAT topics and skills.",
    highlight: false,
  },
  {
    icon: Brain,
    title: "Personalized Feedback",
    description: "We care about your success. Receive weekly check-ins, strategy adjustments, and question feedback.",
    highlight: false,
  },
  {
    icon: Users,
    title: "Small Group Learning",
    description: "Sessions of maximum 6 students to ensure personalized attention and peer support.",
    highlight: false,
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Online sessions that fit your busy student life. We work around your schedule.",
    highlight: false,
  },
]

export function FeaturesSection() {
  return (
    <section id="services" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-20 w-64 h-64 bg-[#1E3A8A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#60A5FA]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] text-balance">
            Everything You Need for SAT <span className="text-[#1E3A8A]">Success</span>
          </h2>
          <p className="mt-4 text-lg text-[#64748B] max-w-2xl mx-auto">
            A comprehensive approach designed by a perfect scorer to help you achieve your highest potential.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.025 }}
              whileHover={{ scale: 1.03 }}
              className={`group p-6 rounded-2xl border transition-all duration-150 cursor-pointer shadow-md hover:shadow-lg ${
                feature.highlight
                  ? "bg-[#1E3A8A] border-[#1E3A8A] text-white"
                  : "bg-white border-[#E2E8F0] hover:border-[#1E3A8A]"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  feature.highlight
                    ? "bg-white/20"
                    : "bg-[#DBEAFE] group-hover:bg-[#1E3A8A] transition-colors duration-150"
                }`}
              >
                <feature.icon
                  className={`w-6 h-6 ${
                    feature.highlight
                      ? "text-white"
                      : "text-[#1E3A8A] group-hover:text-white transition-colors duration-150"
                  }`}
                />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${feature.highlight ? "text-white" : "text-[#0a0a0a]"}`}>
                {feature.title}
              </h3>
              <p className={`leading-relaxed ${feature.highlight ? "text-white/90" : "text-[#64748B]"}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
