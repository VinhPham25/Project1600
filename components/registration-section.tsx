"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export function RegistrationSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section id="register" className="py-28 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#1E3A8A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#60A5FA]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] text-balance">
            Book Your <span className="text-[#1E3A8A]">Free Consultation</span>
          </h2>
          <p className="mt-4 text-lg text-[#64748B] max-w-2xl mx-auto">
            {"Fill out the form below and we'll reach out within 24 hours to schedule your consultation."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-[#E2E8F0] p-8 shadow-lg"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="text-xl font-semibold text-[#0a0a0a] mb-2">Thank You!</h4>
              <p className="text-[#64748B]">{"We've received your information and will be in touch soon."}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Parent Name and Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="parentName" className="text-[#0a0a0a]">
                    Parent Name
                  </Label>
                  <Input
                    id="parentName"
                    placeholder="John Smith"
                    required
                    className="border-[#E2E8F0] focus:border-[#1E3A8A] focus:ring-[#1E3A8A]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#0a0a0a]">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="border-[#E2E8F0] focus:border-[#1E3A8A] focus:ring-[#1E3A8A]"
                  />
                </div>
              </div>

              {/* Row 2: Student Name, Grade, School */}
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="studentName" className="text-[#0a0a0a]">
                    Student Name
                  </Label>
                  <Input
                    id="studentName"
                    placeholder="Jane Smith"
                    required
                    className="border-[#E2E8F0] focus:border-[#1E3A8A] focus:ring-[#1E3A8A]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="grade" className="text-[#0a0a0a]">
                    Grade
                  </Label>
                  <Select required>
                    <SelectTrigger className="border-[#E2E8F0] focus:border-[#1E3A8A] focus:ring-[#1E3A8A]">
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9">9th Grade</SelectItem>
                      <SelectItem value="10">10th Grade</SelectItem>
                      <SelectItem value="11">11th Grade</SelectItem>
                      <SelectItem value="12">12th Grade</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="school" className="text-[#0a0a0a]">
                    School
                  </Label>
                  <Input
                    id="school"
                    placeholder="High School Name"
                    required
                    className="border-[#E2E8F0] focus:border-[#1E3A8A] focus:ring-[#1E3A8A]"
                  />
                </div>
              </div>

              {/* Row 3: Referral */}
              <div className="space-y-2">
                <Label htmlFor="referral" className="text-[#0a0a0a]">
                  {"Who referred you? (Optional)"}
                </Label>
                <Input
                  id="referral"
                  placeholder="Enter name of person who referred you"
                  className="border-[#E2E8F0] focus:border-[#1E3A8A] focus:ring-[#1E3A8A]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals" className="text-[#0a0a0a]">
                  What are your goals and expectations for SAT preparation?
                </Label>
                <Textarea
                  id="goals"
                  placeholder="Please share what you're hoping to achieve through our SAT prep program, any specific areas of concern, or questions you may have..."
                  rows={4}
                  className="border-[#E2E8F0] focus:border-[#1E3A8A] focus:ring-[#1E3A8A] resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="comments" className="text-[#0a0a0a]">
                  Additional Comments or Questions (Optional)
                </Label>
                <Textarea
                  id="comments"
                  placeholder="Any other information you'd like to share or questions you have for us..."
                  rows={3}
                  className="border-[#E2E8F0] focus:border-[#1E3A8A] focus:ring-[#1E3A8A] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#1E3A8A] hover:bg-[#0a0a0a] text-white py-6 text-lg transition-all duration-150 hover:scale-[1.02] shadow-md"
              >
                Book Free Consultation
              </Button>

              <p className="text-center text-sm text-[#64748B]">No payment required. No obligation.</p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
