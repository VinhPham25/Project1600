"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Target, TrendingUp } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#1E3A8A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-[#60A5FA]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#DBEAFE] text-[#0a0a0a] px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Target className="w-4 h-4 text-[#1E3A8A]" />
              Trusted by 100+ Students
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a0a0a] leading-tight text-balance">
              Master the SAT <span className="text-[#1E3A8A]">without</span> the $2,000 Price Tag
            </h1>

            <p className="mt-6 text-lg text-[#64748B] max-w-xl leading-relaxed">
              Get personalized, 1600-level SAT strategies from a perfect scorer at a fraction of what big prep companies
              charge. Real results, real affordability.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#1E3A8A] hover:bg-[#0a0a0a] text-white transition-all duration-150 hover:scale-103 group shadow-lg"
              >
                <Link href="#register">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-all duration-150 bg-transparent"
              >
                <Link href="#services">Learn More</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { value: "1600", label: "SAT Score" },
                { value: "200+", label: "Avg. Improvement" },
                { value: "95%", label: "Success Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#1E3A8A]">{stat.value}</div>
                  <div className="text-sm text-[#64748B]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Digital SAT Interface Mock */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-[#F8FAFC] rounded-3xl p-6 border border-[#E2E8F0] shadow-xl">
              {/* Mock SAT Interface */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-sm text-[#64748B]">Digital SAT Practice</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-[#DBEAFE] rounded-xl">
                    <BookOpen className="w-5 h-5 text-[#1E3A8A]" />
                    <span className="text-[#0a0a0a] font-medium">Reading & Writing Module</span>
                  </div>

                  <div className="bg-[#F8FAFC] rounded-xl p-4">
                    <p className="text-sm text-[#64748B] mb-3">Question 15 of 27</p>
                    <p className="text-[#0a0a0a] leading-relaxed">
                      {"The author's use of metaphor in line 23 primarily serves to..."}
                    </p>
                    <div className="mt-4 space-y-2">
                      {["A", "B", "C", "D"].map((option) => (
                        <div
                          key={option}
                          className={`p-3 rounded-lg border transition-all duration-150 cursor-pointer ${
                            option === "B" ? "border-[#1E3A8A] bg-[#DBEAFE]" : "border-[#E2E8F0] hover:border-[#60A5FA]"
                          }`}
                        >
                          <span className="text-[#0a0a0a]">{option}. Option text here</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-[#64748B]">Score trending: 1520+</span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-[#1E3A8A] text-white hover:bg-[#0a0a0a] transition-all duration-150"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>

              {/* Floating Elements with shadows */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-[#E2E8F0]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#DBEAFE] flex items-center justify-center">
                    <Target className="w-4 h-4 text-[#1E3A8A]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#64748B]">Goal</p>
                    <p className="text-sm font-bold text-[#0a0a0a]">1600</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg border border-[#E2E8F0]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-[#64748B]">Improvement</p>
                    <p className="text-sm font-bold text-green-600">+210 pts</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
