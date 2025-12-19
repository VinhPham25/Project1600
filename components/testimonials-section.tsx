"use client"

import { motion, useMotionValue, useAnimationFrame } from "framer-motion"
import { useRef, useState } from "react"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "I was always impressed by how much preparation and effort Vinh put into each lesson...he explains the solutions to each problem well, working at a pace you're comfortable with.",
    improvement: "+230",
    name: "Tyler W.",
    date: "Class of 2025",
  },
  {
    quote:
      "Vinh is incredibly organized and teaches strategies to identify patterns. What truly sets him apart is that he's a fellow student who understands my perspective, making each session more relatable, comfortable, and effective than those with traditional instructors.",
    improvement: "+110",
    name: "Tejas V.",
    date: "Class of 2027",
  },
  {
    quote:
      "Vinh's explanation are incredibly thorough. His interactive approach breaks down each question in a way that made a huge difference, not just for the SAT but in all my classes.",
    improvement: "+140",
    name: "Sanjay T.",
    date: "Class of 2027",
  },
  {
    quote:
      "I really enjoyed this summer with Project 1600 and learned a lot. All the lessons were structured well, and Vinh took his time to go through each SAT topic and explain it thoroughly. I had improvement with my SAT score throughout the summer which made me feel more confident about the August SAT.",
    improvement: "+140",
    name: "Shwetha M.",
    date: "Class of 2027",
  },
  {
    quote: "Vinh provided clear explanations and practical strategies that really helped me understand the SAT. Group practices and detailed feedback made each lesson very engaging. Overall, it was a worthwhile experience that prepared me well for the test.",
    improvement: "+150",
    name: "Anonymous",
    date: "Class of 2027",
  },
  {
    quote:
      "Can’t thank you enough for all the help and encouragement you gave my kids over the summer. I told kids the jump my son saw in his score, and I thought the class was really good. You guys are awesome!",
    improvement: "+230",
    name: "Julie Brown",
    date: "Parent and VRHS Teacher",
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
