"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1E3A8A] text-balance">
            {"The Founder's"} <span className="text-[#2563EB]">Story</span>
          </h1>
          <p className="mt-4 text-lg text-[#64748B]">Why Project 1600 exists and who{"'s"} behind it</p>
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
              When I scored a perfect 1600 on my SAT, everyone wanted to know my secret. Was it expensive tutoring? A
              prestigious prep course? The truth was simpler—and more frustrating: it was strategies I had to figure out
              on my own because the {'"expert"'} programs I tried were focused on everything except what actually moves
              the needle.
            </p>

            <p className="text-[#64748B] leading-relaxed mb-6">
              I watched my classmates spend thousands of dollars on big-name prep companies, only to see minimal
              improvement. These programs treated students like numbers, cycling them through generic curricula with
              rotating tutors who barely knew their names. The students who succeeded often did so despite these
              programs, not because of them.
            </p>

            <p className="text-[#64748B] leading-relaxed mb-6">
              That{"'s"} when Project 1600 was born. I believed then—and still believe—that every student deserves
              access to the kind of personalized, strategic instruction that actually works. Not a{" "}
              {'"one-size-fits-all"'} video course. Not a rotating door of tutors. Real, individualized guidance from
              someone who has been in the trenches and emerged with a perfect score.
            </p>

            <p className="text-[#64748B] leading-relaxed mb-6">
              Our approach is different. I personally lead every tutoring session, ensuring consistency and genuine
              understanding of each student{"'s"} unique challenges. We focus on the 20% of strategies that produce 80%
              of the results. And we do it at a price point that doesn{"'t"} require families to take out a second
              mortgage.
            </p>

            <p className="text-[#1E3A8A] font-medium leading-relaxed">
              Project 1600 isn{"'t"} just a tutoring service—it{"'s"} a mission to democratize SAT success. Because your
              zip code and family income shouldn{"'t"} determine your test score or your future.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
