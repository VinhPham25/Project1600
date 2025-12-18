"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes Project 1600 different from other SAT prep programs?",
    answer:
      "Project 1600 is founded by a perfect SAT scorer who personally leads the tutoring. Unlike big prep companies with rotating tutors, you get consistent, expert guidance from someone who has mastered the test. Plus, our pricing is a fraction of what competitors charge.",
  },
  {
    question: "How does the Digital SAT curriculum work?",
    answer:
      "Our curriculum is fully updated for the new Digital SAT format. We focus on adaptive test-taking strategies, section-specific techniques for Reading & Writing and Math modules, and extensive practice with the digital interface so you're completely comfortable on test day.",
  },
  {
    question: "What is the typical score improvement I can expect?",
    answer:
      "Our students see an average improvement of 200+ points. However, results vary based on starting score, commitment, and time invested. Students who complete our full program and follow the study plan consistently see the best results.",
  },
  {
    question: "Do you offer a free diagnostic test?",
    answer:
      "Yes! We offer a free initial diagnostic test for all new students. This helps us understand your baseline score and identify specific areas for improvement before creating your personalized study plan.",
  },
  {
    question: "What are the session formats available?",
    answer:
      "We offer both 1-on-1 private tutoring and small group sessions (max 5 students). Sessions are conducted online via video call, allowing flexibility in scheduling and eliminating commute time. We offer evening and weekend slots to accommodate busy student schedules.",
  },
  {
    question: "How long should I prepare before taking the SAT?",
    answer:
      "We recommend a minimum of 8-12 weeks of dedicated preparation for optimal results. However, we offer intensive programs for students with shorter timelines. During your free consultation, we'll help determine the best timeline for your goals.",
  },
]

export function FAQSection() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-48 h-48 bg-[#1E3A8A]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] text-balance">
            Got Questions? <span className="text-[#1E3A8A]">{"We've Got Answers"}</span>
          </h2>
          <p className="mt-4 text-lg text-[#64748B]">Everything you need to know about Project 1600.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-[#E2E8F0] px-6 data-[state=open]:border-[#1E3A8A] transition-all duration-150 shadow-md"
              >
                <AccordionTrigger className="text-left text-[#0a0a0a] font-medium hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#64748B] pb-4 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
