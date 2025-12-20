"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] text-balance">
            {"Our"} <span className="text-[#1E3A8A]">Story</span>
          </h1>
          <p className="mt-4 text-lg text-[#64748B]">Why Project 1600?</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">The Motive</h2>

            <p className="text-[#64748B] leading-relaxed mb-6">
              During the summer of 2023, I was preparing to take my own SAT for college applications. Unsure of where to start, 
              I enrolled in a well-known test prep company{"'s"} bootcamp, which lasted for 5-weeks and cost me several thousand dollars. 
              The experience was underwhelming. Aside from the study resources provided, there were many flaws in the program.
            </p>

            <p className="text-[#64748B] leading-relaxed mb-6">
              Every weekday began the same. I woke up at 8 AM and joined a virtual class with 30 other students, led by an instructor in middle adulthood who felt disconnected from the challenges we faced as high schoolers.
              The lectures were mundane with generalized feedback and impersonal as I never got the opportunity to connect with my peers. These lessons lasted for over 5 hours with a brief lunch break in between. 
              By mid-afternoon, I was mentally drained, but I pushed through to complete the assigned homework. 
            </p>

            <p className="text-[#64748B] leading-relaxed mb-6">
              Even though I scored well on the actual SAT, most of my improvement came from self-studying and practice tests. Drawing from prior years of tutoring experience, I knew could help others avoid the pitfalls I encountered.
              I planned for several months and launched Project 1600 in early 2024 with the goal of sharing my knowledge and strategies to allow others to succeed just as I had.
            </p>

            <p className="text-[#64748B] leading-relaxed mb-6">
              Our approach is different; we focus on honest, meaningful feedback that actually gets you results. I personally review each student{"'s"} progress, highlight key weaknesses and strengths, and offer tailored practice unique to each learning style. 
              Succeeding in the Digital SAT isn't about spending hours in front of a screen but being able to identify patterns and master strategies that work best for you. 
            </p>
            
            <p className="text-[#64748B] leading-relaxed mb-6">
              I'm always available to answer questions, offer guidance, and adapt my curriculum to feedback. As a recent high school graduate, I understand students have lives outside of test preparation.
              My job is to make the most out of our 3 hours each week so students can balance their academics, extracurriculars, and social lives.
            </p>

            <p className="text-[#1E3A8A] font-medium leading-relaxed mb-6">
              I believe everyone has the capacity to ace the Digital SAT, but all students learn and study differently. My goal is to help you become the best version of yourself on test day. 
            </p>


            <p className="text-[#64748B] font-medium leading-relaxed">
              Vinh 
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
