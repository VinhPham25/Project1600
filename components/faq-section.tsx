"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes Project 1600 different from other SAT prep programs?",
    answer:
      "Project 1600 is founded by a student with 5+ years of tutoring experience who actually cares about your success. We understand the best practices for tackling the SAT and will go beyond generic strategies to ensure you see real improvement. With free office hours, weekly progress check-ins, recorded lectures, unlimited access to resources, and small-group learning, we provide a personalized approach that big-name programs don't.",
  },
  {
    question: "How is your curriculum structured?",
    answer:
      "Our curriculum is fully updated for the new Digital SAT format with official SAT question bank practice and diagnostic tests. It spans 8 weeks with each week covering one SAT domain skill for math and reading. Our program ends with a 2 week sprint with intensive review and practices questions to refine skills before the testing date. We additionally offer previous reading material from the paper-based SAT to ensure comprehensive coverage of all question types.",
  },
  {
    question: "What can I expect in each lesson?",
    answer:
      "Lessons begin with a 15 minute review of previous homework and clarifications for any questions. The lesson transitions into a 45 minute lecture on an SAT specific domain skill with question walk-throughs and interactive learning with peers. Students will engage with each problem and discuss strategies together. The final 25 minutes will be used to for guided practice, answering questions, and assigning homework problems for the following lesson.",
  },
  {
    question: "When will the program be held?",
    answer:
      "Our lessons are scheduled to start the week of June 8th and run through August 1st, concluding 2 weeks before the August 15th SAT date. Prior to the program start, students will have a month to complete the first diagnostic test and schedule a 1-on-1 meeting to discuss goals and baseline skills. Once the program ends, students will receive extensive study materials, practice tests, and test-taking strategies to prepare for the actual exam date. Throughout this time, students will have unlimited access to our team for any questions or support needed.",
  },
  {
    question: "How will I pay for the program?",
    answer:
      "We accept cash or online payments, including Zelle and Venmo. We discuss payment options during your free consultation to find what works best for you.",
  },
  {
    question: "What is the typical score improvement I can expect?",
    answer:
      "Our students see an average improvement of 160+ points. However, results vary based on starting score, commitment, and time invested. Students who complete our full program and follow the study plan consistently see the best results. No matter what, we ensure all students have the opportunity and support to excel.",
  },
  {
    question: "Do you offer a free diagnostic test?",
    answer:
      "Yes! We offer a free initial diagnostic test for all new students to assess their baseline skills. Additionally, 6 other diagnostic tests are included in the program and spread out across the 8-week curriculum structure to track progress over time.",
  },
  {
    question: "How and when will lessons be held?",
    answer:
      "All lessons will be held online via Google Meet. Sessions are scheduled twice a week for 90 minutes each, and actual dates and times will be discussed before the program starts to match your schedule. Students will learn in small groups with peers of similar skill and schedules to foster collaborative learning.",
  },
  {
    question: "How does the referral program work?",
    answer:
      "The initial baseline cost is $750. For each successful referral, you will earn $100 back. There is no limit to how many friends you can refer, so the more you refer, the more you earn. If you refer more than 7 friends, we will happily pay you back any additional amount over the initial $750 cost. A successful referral is defined as a student who completely registers and pays for the program and refers your name during registration.",
  },
  {
    question: "How much does the program cost?",
    answer:
      "The initial cost is $750 minus $100 per successful referral. This is for the full 8-week program, which includes all lessons, materials, diagnostic tests, and unlimited access to our team for support. We believe in providing high-quality instruction at an affordable price to ensure every student has the opportunity to succeed.",
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
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.15 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white rounded-xl border border-[#E2E8F0] px-6 data-[state=open]:border-[#1E3A8A] transition-all duration-150 shadow-md hover:shadow-lg"
                >
                  <AccordionTrigger className="text-left text-[#0a0a0a] font-medium hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#64748B] pb-4 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}