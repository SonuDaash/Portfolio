"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const workExperiences = [
  {
    company: "Royal Academy",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-transformed-oWjv0VNVJvftCwxLdf2zffo88cemis.png",
    period: "01/2078 - Present",
    title: "School Coordinator & Computer Teacher",
    description: "with focus on operations management and technology integration.",
    responsibilities: [
      "Managed and streamlined daily school operations, ensuring efficiency in academic activities.",
      "Supervised and mentored a team of 20+ teachers, fostering professional development and collaboration.",
      "Conducted and facilitated weekly staff meetings to discuss curriculum updates, teaching methodologies, and administrative improvements.",
      "Strengthened parent-teacher relationships through organized conferences, meetings, and transparent communication.",
      "Spearheaded the integration of technology in classrooms, improving student engagement and learning outcomes.",
      "Maintained student academic records, grades, and performance reports with accuracy and confidentiality.",
      "Handled the IEMIS (Integrated Educational Management Information System) for accurate student data management and reporting.",
    ],
    delay: 0.1,
  },
  {
    company: "Birgunj Pathshala",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/426452880_823133466495631_2761811821963012677_n-GwdMsqMNLCCgVPCddM9JmdrZcBfkHs.png",
    period: "02/2074 - 12/2077",
    title: "Exam Coordinator & Computer Teacher",
    description: "responsible for assessment systems and student record management.",
    responsibilities: [
      "Planned, scheduled, and executed academic examinations aligning with the school curriculum.",
      "Managed logistical aspects of exams, including venue arrangements, seating plans, and resource allocation.",
      "Trained and supervised invigilators, ensuring adherence to exam protocols and fairness in assessment.",
      "Developed and maintained academic records, ensuring timely report generation for students and faculty.",
      "Implemented innovative assessment methods to evaluate and enhance student learning outcomes.",
    ],
    delay: 0.2,
  },
  {
    company: "Global Business School",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/global%20copy-vymw9DilKebISGjpb8t9vbee8srv1o.png",
    period: "2079 - Mid 2081",
    title: "Part-Time Computer Teacher for Class 9 & 10",
    description: "focusing on theoretical knowledge and practical applications.",
    responsibilities: [
      "Delivered engaging computer science lessons, focusing on both theoretical knowledge and practical applications.",
      "Designed interactive lesson plans and real-world projects to develop students' technical proficiency.",
      "Provided hands-on troubleshooting support, guiding students through technical challenges.",
      "Assessed student progress through regular evaluations, personalized feedback, and mentorship.",
    ],
    delay: 0.3,
  },
]

export default function WorkExperience() {
  return (
    <section className="py-20 bg-black">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Work{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've had the privilege of working with excellent educational institutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {workExperiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: experience.delay }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
              <div className="relative p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl group-hover:bg-white/10 group-hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-1 shadow-xl hover:shadow-[0_10px_40px_rgba(249,115,22,0.15)]">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left side - Logo and basic info */}
                  <div className="md:w-1/4 flex flex-col items-center md:items-start">
                    <div className="w-32 h-32 flex items-center justify-center mb-4">
                      <Image
                        src={experience.logo || "/placeholder.svg"}
                        alt={`${experience.company} Logo`}
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center md:text-left mb-2 group-hover:text-orange-500 transition-colors">
                      {experience.company}
                    </h3>
                    <p className="text-orange-500 text-center md:text-left mb-2">{experience.period}</p>
                    <p className="text-white text-center md:text-left mb-4">{experience.title}</p>
                  </div>

                  {/* Right side - Responsibilities */}
                  <div className="md:w-3/4">
                    <h4 className="text-lg font-semibold mb-4 text-orange-500">Key Responsibilities</h4>
                    <ul className="space-y-3">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground group-hover:text-gray-300 transition-colors">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center space-y-4"
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Together
            </span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Interested in discussing educational leadership opportunities or collaborating on educational technology
            integration?
          </p>
          <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

