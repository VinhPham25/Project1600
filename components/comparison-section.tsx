"use client"

import { motion } from "framer-motion"
import { Check, X, Gift, DollarSign, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const comparisons = [
  {
    feature: "Price",
    bigPrep: "$2,000 - $5,000+",
    project1600: "$750",
    bigPrepBad: true,
    project1600Good: true,
  },
  {
    feature: "Instructor Quality",
    bigPrep: "Rotating older instructors",
    project1600: "Class of 2025 Valedictorian",
    bigPrepBad: true,
    project1600Good: true,
  },
  {
    feature: "Class Size",
    bigPrep: "20-30+ students",
    project1600: "Small group (max 6 students)",
    bigPrepBad: true,
    project1600Good: true,
  },
  {
    feature: "Support Access",
    bigPrep: "Email only, 48-72 hour response",
    project1600: "Direct messaging, same-day response",
    bigPrepBad: true,
    project1600Good: true,
  },
  {
    feature: "Curriculum",
    bigPrep: "Generic, one-size-fits-all",
    project1600: "Personalized for your growth",
    bigPrepBad: true,
    project1600Good: true,
  },
  {
    feature: "Diagnostic Tests",
    bigPrep: "Generic mock exams",
    project1600: "Official SAT practice tests",
    bigPrepBad: true,
    project1600Good: true,
  },
  {
    feature: "Flexibility",
    bigPrep: "Fixed daily schedule",
    project1600: "Custom weekly lessons",
    bigPrepBad: true,
    project1600Good: true,
  },
  {
    feature: "Extra Mentoring",
    bigPrep: "Limited",
    project1600: "Free office hours",
    bigPrepBad: true,
    project1600Good: true,
  },
]

const referralBenefits = [
  { icon: DollarSign, text: "Earn $100 off for each successful referral" },
  { icon: Users, text: "No limit on how many friends you can refer" },
  { icon: Users, text: "Learn together and grow together" },
]

export function ComparisonSection() {
  return (
    <section id="pricing" className="py-28 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-[#1E3A8A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-64 h-64 bg-[#60A5FA]/5 rounded-full blur-3xl" />
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] text-balance">
            Why Choose <span className="text-[#1E3A8A]">Project 1600</span>?
          </h2>
          <p className="mt-4 text-lg text-[#64748B] max-w-2xl mx-auto">
            See how we stack up against the big-name prep companies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-lg"
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-[#F8FAFC] border-b border-[#E2E8F0]">
            <div className="p-4 font-semibold text-[#0a0a0a]">Feature</div>
            <div className="p-4 font-semibold text-[#64748B] text-center">Big Prep Bootcamps</div>
            <div className="p-4 font-semibold text-[#1E3A8A] text-center bg-[#DBEAFE]">Project 1600</div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`grid grid-cols-3 ${index !== comparisons.length - 1 ? "border-b border-[#E2E8F0]" : ""}`}
            >
              <div className="p-4 text-[#0a0a0a] font-medium">{row.feature}</div>
              <div className="p-4 text-center text-[#64748B] flex items-center justify-center gap-2">
                {row.bigPrepBad && <X className="w-4 h-4 text-red-400 flex-shrink-0" />}
                <span className="text-sm">{row.bigPrep}</span>
              </div>
              <div className="p-4 text-center bg-[#DBEAFE]/30 flex items-center justify-center gap-2">
                {row.project1600Good && <Check className="w-4 h-4 text-green-500 flex-shrink-0" />}
                <span className="text-sm text-[#0a0a0a] font-medium">{row.project1600}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          {/* Label */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#1E3A8A]" />
            <span className="text-[#1E3A8A] font-medium text-sm">Referral Program</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Description and Bullets */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] text-balance mb-4">
                Share the Success, <span className="text-[#1E3A8A]">Earn Rewards</span>
              </h3>
              <p className="text-[#64748B] leading-relaxed mb-8">
                Know someone who could benefit from Project 1600? Refer them to our program and earn $100 for each successful referral. A successful referral means your friend completes registration and
                names you as the person who referred them.
              </p>

              <div className="space-y-4 mb-8">
                {referralBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#DBEAFE] flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#1E3A8A]" />
                    </div>
                    <span className="text-[#0a0a0a]">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              <Button
                asChild
                className="bg-[#1E3A8A] hover:bg-[#0a0a0a] text-white transition-all duration-150 shadow-md group"
              >
                <Link href="#register">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Right - Floating Card with Gradient Background */}
            <div className="relative">
              {/* Background gradient elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#DBEAFE] to-[#60A5FA]/20 rounded-full blur-2xl" />
              <div className="absolute bottom-10 -left-4 w-24 h-24 bg-gradient-to-br from-[#1E3A8A]/10 to-[#60A5FA]/10 rounded-full blur-xl" />

              {/* Main Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-xl"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#DBEAFE] to-[#60A5FA]/30 flex items-center justify-center mb-6">
                  <Gift className="w-7 h-7 text-[#1E3A8A]" />
                </div>

                <h4 className="text-xl font-bold text-[#0a0a0a] mb-3">Refer & Earn</h4>
                <p className="text-[#64748B] leading-relaxed">
                  Help your friends succeed on the SAT while reducing your own costs. Every referral brings you one step
                  closer to free tutoring sessions.
                </p>

                <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#64748B]">Earnings per referral</span>
                    <span className="text-2xl font-bold text-[#1E3A8A]">$100</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
