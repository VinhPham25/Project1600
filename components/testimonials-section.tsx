"use client"

import { motion, useMotionValue, useAnimationFrame } from "framer-motion"
import { useRef, useState } from "react"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "I went from a 1280 to a 1490 in just 8 weeks. The strategies taught here are game-changers that no other prep course showed me.",
    improvement: "+210",
    name: "Sarah M.",
    date: "Class of 2024",
  },
  {
    quote:
      "As a parent, I was skeptical of online tutoring. But the personalized attention my son received exceeded all expectations. Worth every penny!",
    improvement: "+180",
    name: "James P.",
    date: "Parent",
  },
  {
    quote:
      "The Digital SAT format was intimidating until Project 1600. Now I feel completely confident. Best investment in my future.",
    improvement: "+240",
    name: "Emily K.",
    date: "Class of 2025",
  },
  {
    quote:
      "I tried two other prep companies before this. Project 1600 was the only one that actually understood my learning style.",
    improvement: "+190",
    name: "Michael T.",
    date: "Class of 2024",
  },
  {
    quote: "The founder's personal involvement makes all the difference. It's not just tutoring, it's mentorship.",
    improvement: "+220",
    name: "Aisha R.",
    date: "Class of 2025",
  },
  {
    quote:
      "From 1320 to 1520 in 6 weeks! The structured approach and constant feedback kept me accountable and motivated.",
    improvement: "+200",
    name: "David L.",
    date: "Class of 2024",
  },
]

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const x = useMotionValue(0)
  const baseVelocity = -0.5

  useAnimationFrame(() => {
    if (!isDragging && containerRef.current) {
      const xVal = x.get()
      const containerWidth = containerRef.current.scrollWidth / 2

      if (xVal <= -containerWidth) {
        x.set(0)
      } else {
        x.set(xVal + baseVelocity)
      }
    }
  })

  return (
    <section id="results" className="py-32 bg-[#F8FAFC] overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#1E3A8A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-[#60A5FA]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] text-balance">
            Loved by <span className="text-[#1E3A8A]">Students & Parents</span>
          </h2>
          <p className="mt-4 text-lg text-[#64748B] max-w-2xl mx-auto">
            {"Don't just take our word for it. Here's what our community has to say."}
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <motion.div
          ref={containerRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing px-4"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.15 }}
              className="flex-shrink-0 w-[450px] bg-white rounded-2xl p-10 border border-[#E2E8F0] shadow-md hover:shadow-lg hover:border-[#1E3A8A] transition-all duration-150"
            >
              <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#DBEAFE] flex items-center justify-center">
                  <Quote className="w-6 h-6 text-[#1E3A8A]" />
                </div>
                <div className="flex-1">
                  <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                    {testimonial.improvement} Points
                  </span>
                </div>
              </div>
              <p className="text-[#0a0a0a] leading-relaxed mb-6 min-h-[100px] text-lg">{`"${testimonial.quote}"`}</p>
              <div className="border-t border-[#E2E8F0] pt-4">
                <p className="font-semibold text-[#0a0a0a]">{testimonial.name}</p>
                <p className="text-sm text-[#64748B]">{testimonial.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
