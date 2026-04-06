"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Award, BookOpen, Briefcase, GraduationCap, Calendar, MapPin, Check } from "lucide-react"

// Professional journey data
const journeyData = [
  {
    year: "01/2078 - Present",
    title: "School Coordinator & Computer Teacher",
    organization: "Royal Academy, Birgunj, Nepal",
    responsibilities: [
      "Managed and streamlined daily school operations, ensuring efficiency in academic activities.",
      "Supervised and mentored a team of 20+ teachers, fostering professional development and collaboration.",
      "Conducted and facilitated weekly staff meetings to discuss curriculum updates, teaching methodologies, and administrative improvements.",
      "Strengthened parent-teacher relationships through organized conferences, meetings, and transparent communication.",
      "Spearheaded the integration of technology in classrooms, improving student engagement and learning outcomes.",
      "Maintained student academic records, grades, and performance reports with accuracy and confidentiality.",
      "Handled the IEMIS (Integrated Educational Management Information System) for accurate student data management and reporting.",
    ],
    icon: <Briefcase className="h-6 w-6" />,
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-transformed-oWjv0VNVJvftCwxLdf2zffo88cemis.png",
    isLeft: false,
  },
  {
    year: "02/2074 - 12/2077",
    title: "Exam Coordinator & Computer Teacher",
    organization: "Birgunj Pathshala, Birgunj, Nepal",
    responsibilities: [
      "Planned, scheduled, and executed academic examinations aligning with the school curriculum.",
      "Managed logistical aspects of exams, including venue arrangements, seating plans, and resource allocation.",
      "Trained and supervised invigilators, ensuring adherence to exam protocols and fairness in assessment.",
      "Developed and maintained academic records, ensuring timely report generation for students and faculty.",
      "Implemented innovative assessment methods to evaluate and enhance student learning outcomes.",
    ],
    icon: <BookOpen className="h-6 w-6" />,
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/426452880_823133466495631_2761811821963012677_n-GwdMsqMNLCCgVPCddM9JmdrZcBfkHs.png",
    isLeft: true,
  },
  {
    year: "2079 - Mid 2081",
    title: "Part-Time Computer Teacher (Class 9 & 10)",
    organization: "Global Business School, Birgunj, Nepal",
    responsibilities: [
      "Delivered engaging computer science lessons, focusing on both theoretical knowledge and practical applications.",
      "Designed interactive lesson plans and real-world projects to develop students' technical proficiency.",
      "Provided hands-on troubleshooting support, guiding students through technical challenges.",
      "Assessed student progress through regular evaluations, personalized feedback, and mentorship.",
    ],
    icon: <GraduationCap className="h-6 w-6" />,
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/global%20copy-vymw9DilKebISGjpb8t9vbee8srv1o.png",
    isLeft: false,
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250329_160039.jpg-TjfRHLr6qbN9FUQy5LY3KxHbrWMhoE.jpeg"
            alt="Sonu Das overseeing a school event"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.15),transparent_70%)]" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-6 pt-32 md:pt-40"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-2">
              Educator & Innovator
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              About{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Me</span>
            </h1>

            <p className="text-lg text-white/80">
              With over 7 years of experience in education and technology, I've dedicated my career to transforming
              educational institutions through innovative leadership and technology integration.
            </p>

            <div className="pt-4">
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 md:py-24 bg-black/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Professional{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A timeline of my career in education and technology
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12 last:mb-0"
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-orange-400/5 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
                  <div className="relative p-6 rounded-xl border border-orange-500/20 bg-black/50 backdrop-blur-sm group-hover:border-orange-500/40 transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Left side - Logo, Year and Icon */}
                      <div className="flex flex-col items-center md:w-1/4">
                        <div className="w-24 h-24 flex items-center justify-center mb-4">
                          <Image
                            src={item.logo || "/placeholder.svg"}
                            alt={`${item.organization} Logo`}
                            width={96}
                            height={96}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex items-center gap-2 text-orange-500 mb-3">
                          <Calendar className="h-5 w-5" />
                          <span className="font-medium">{item.year}</span>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500/20 transition-all duration-300 mb-3">
                          {item.icon}
                        </div>
                      </div>

                      {/* Right side - Content */}
                      <div className="md:w-3/4">
                        <h3 className="text-xl font-bold group-hover:text-orange-500 transition-colors mb-1">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 text-orange-500 mb-4">
                          <MapPin className="h-4 w-4" />
                          <span>{item.organization}</span>
                        </div>

                        <h4 className="text-lg font-semibold mb-3 text-orange-500/80">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {item.responsibilities.map((responsibility, idx) => (
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Skills &{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my professional capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: "Administration",
                skills: [
                  { name: "School Management", level: 95 },
                  { name: "Strategic Planning", level: 90 },
                  { name: "Team Leadership", level: 85 },
                  { name: "Budget Administration", level: 80 },
                ],
              },
              {
                category: "Technology",
                skills: [
                  { name: "Educational Technology", level: 95 },
                  { name: "Computer Science", level: 90 },
                  { name: "Web Development", level: 85 },
                  { name: "Database Management", level: 80 },
                ],
              },
            ].map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-orange-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                          className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-24 bg-black/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Awards &{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognition for excellence in education and technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Teacher of the Year",
                year: "2075",
                organization: "Birgunj Pathshala",
                description:
                  "Recognized for excellence in teaching methodology, student engagement, and outstanding contributions to the school's educational environment.",
              },
              {
                title: "Favorite Teacher Award",
                year: "2076",
                organization: "Birgunj Pathshala",
                description:
                  "Selected by students as their favorite teacher based on teaching style, approachability, and ability to make complex subjects understandable and engaging.",
              },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-400/5 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
                <div className="relative h-full p-6 rounded-xl border border-orange-500/20 bg-black/50 backdrop-blur-sm group-hover:border-orange-500/40 transition-all duration-300 flex flex-col items-center">
                  <Award className="h-8 w-8 text-orange-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-center group-hover:text-orange-500 transition-colors">
                    {achievement.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <span className="text-orange-500">{achievement.year}</span>
                    <span className="mx-2">•</span>
                    <span>{achievement.organization}</span>
                  </div>
                  <p className="text-muted-foreground group-hover:text-gray-300 transition-colors text-center">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,107,0,0.2),transparent_70%)]" />

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Interested in working together?</h2>
                <p className="text-lg text-muted-foreground">
                  Let's discuss how my expertise in education and technology can benefit your institution.
                </p>
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

