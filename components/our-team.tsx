"use client"

import { motion } from "framer-motion"
import { Award, GraduationCap, Trophy, Mail, Linkedin, BookOpen } from "lucide-react"

const teamMembers = [
  {
    name: "Vinh Pham",
    role: "Co-Founder & Lead Tutor",
    description: "Graduating from Vista Ridge High School in 2025, Vinh has 5+ years of experience tutoring and has helped over 25 students for a variety of subjects. He enjoys sharing his knowledge and strategies for academic success, and is always available for conversations about test prep, college applications, or anything else!",
    accolades: [
      { icon: Award, value: "1570", label: "SAT Score" },
      { icon: GraduationCap, value: "Georgia Tech", label: "University" },
      { icon: BookOpen, value: "Computer Science", label: "Major" },
      { icon: Trophy, value: "Valedictorian", label: "Class Rank" },
    ],
    email: "vinh.pham2529@gmail.com",
    linkedin: "https://linkedin.com/in/vinh-t-pham",
    image: "/professional-headshot.jpg",
  },
  {
    name: "Minh Pham",
    role: "Co-Founder & Lead Tutor",
    description: "Minh graduated from Vista Ridge High School in 2024 and is double majoring in Biomedical Engineering and Computer Science at Johns Hopkins University. With 4+ years of tutoring experience, Minh has taught students across all subjects, including SAT prep, Calculus, and programming.",
    accolades: [
      { icon: Award, value: "1560", label: "SAT Score" },
      { icon: GraduationCap, value: "Johns Hopkins", label: "University" },
      { icon: BookOpen, value: "Biomedical Engineering", label: "Major" },
      { icon: Trophy, value: "Salutatorian", label: "Class Rank" },
    ],
    email: "minh.pham2529@gmail.com",
    linkedin: "https://www.linkedin.com/in/minh-pham-523786231/",
    image: "/minh.jpg",
  },
]

export function OurTeam() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a]">
            Meet <span className="text-[#1E3A8A]">Our Team</span>
          </h1>
          <p className="mt-4 text-lg text-[#64748B] max-w-2xl mx-auto">
            Expert tutors who are dedicated to helping you reach your SAT goals.
          </p>
        </motion.div>

        <div className="space-y-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-48 h-48 rounded-2xl object-cover border-4 border-[#DBEAFE]"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[#1E3A8A]">{member.name}</h2>
                  <p className="mt-1 text-lg text-[#64748B] font-medium">{member.role}</p>
                  
                  <p className="mt-4 text-[#0a0a0a] leading-relaxed">
                    {member.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {member.accolades.map((item) => (
                      <div key={item.label} className="text-center">
                        <div className="w-12 h-12 rounded-xl bg-[#DBEAFE] flex items-center justify-center mx-auto mb-2">
                          <item.icon className="w-6 h-6 text-[#2563EB]" />
                        </div>
                        <div className="text-xl font-bold text-[#1E3A8A]">{item.value}</div>
                        <div className="text-xs text-[#64748B]">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1E3A8A] text-white hover:bg-[#0a0a0a] transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#2563EB] text-[#2563EB] hover:bg-[#DBEAFE] transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}