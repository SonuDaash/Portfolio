"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown, FileText, Building2, Cpu, GraduationCap, LayoutGrid } from "lucide-react"
import Image from "next/image"
import PDFViewer from "@/components/pdf-viewer"
import WorkExperience from "@/components/work-experience"
import SkillsSection from "@/components/skills-section"
import DownloadResumeButton from "@/components/download-resume-button"
import ResumeContent from "@/components/resume-content"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-950/40 via-background to-background z-10" />
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-900/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-semibold mb-4 shadow-[0_0_30px_rgba(249,115,22,0.15)] ring-1 ring-orange-500/20 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Educator & Innovator
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  Sonu Das
                </span>
              </h1>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground">
                Transforming Education Through Technology & Leadership
              </h2>

              <p className="text-lg text-muted-foreground max-w-xl">
                Specializing in school administration, coordination, computer science teaching, and technology
                integration to create innovative learning environments.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <PDFViewer title="Sonu Das - Resume">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-shadow duration-300">
                    View Resume
                    <FileText className="ml-2 h-4 w-4" />
                  </Button>
                </PDFViewer>

                <DownloadResumeButton
                  variant="outline"
                  size="lg"
                  className="border-orange-500/20 hover:bg-orange-500/10 hover:text-orange-500 border-2"
                />

                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="hover:bg-orange-500/10 hover:text-orange-500"
                >
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group max-w-lg mx-auto lg:ml-auto w-full"
            >
              {/* Premium Decorative Elements */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-orange-500/30 to-orange-400/0 rounded-[2rem] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-70" />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-[60px]" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-950/20 rounded-full blur-[80px]" />
              
              {/* Main Image Frame */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-gradient-to-b from-white/10 to-transparent p-[1px] group-hover:border-orange-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-black/40 z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="relative h-full w-full rounded-[1.95rem] overflow-hidden bg-transparent">
                  <Image
                    src="/hero-premium.jpeg"
                    alt="Sonu Das - Educator & Innovator"
                    fill
                    priority
                    className="object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
                  
                  {/* Decorative Overlays */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20" />
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -right-6 md:-right-10">
                <motion.div 
                  initial={{ rotate: 10, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 100 }}
                  className="bg-black/80 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-4 shadow-2xl space-y-1 ring-1 ring-white/10"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-orange-400">Professional Record</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white">7+</span>
                    <span className="text-sm font-semibold text-white/70 italic">years</span>
                  </div>
                  <p className="text-[10px] text-white/50 leading-tight">Educational Leadership &<br />Technology Innovation</p>
                </motion.div>
              </div>

              {/* Aesthetic Floating Line Elements */}
              <div className="absolute -left-6 top-1/4 h-1/2 w-[1px] bg-gradient-to-b from-transparent via-orange-500/40 to-transparent hidden md:block" />
              <div className="absolute -top-6 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent hidden md:block" />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <ChevronDown className="h-6 w-6 text-orange-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* Areas of Expertise Section */}
      <section className="py-20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Areas of{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combining educational leadership with technical knowledge to create innovative learning environments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "School Administration",
                description: "Effective management of educational institutions with a focus on growth and excellence",
                icon: <Building2 className="h-6 w-6" />,
                delay: 0.1,
              },
              {
                title: "Technology Integration",
                description: "Implementing cutting-edge technology solutions to enhance the learning experience",
                icon: <Cpu className="h-6 w-6" />,
                delay: 0.2,
              },
              {
                title: "Computer Science Teaching",
                description: "Inspiring the next generation of innovators through engaging CS education",
                icon: <GraduationCap className="h-6 w-6" />,
                delay: 0.3,
              },
              {
                title: "Digital Transformation",
                description: "Leading schools through the digital age with strategic technology adoption",
                icon: <LayoutGrid className="h-6 w-6" />,
                delay: 0.4,
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: skill.delay }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
                <div className="relative h-full p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl group-hover:bg-white/10 group-hover:border-orange-500/50 transition-all duration-500 flex flex-col items-center hover:-translate-y-2 shadow-xl hover:shadow-[0_10px_40px_rgba(249,115,22,0.15)]">
                  <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 text-orange-400 mb-6 border border-orange-500/20 ring-1 ring-white/5 shadow-inner">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center group-hover:text-orange-500 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground text-center">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Work Experience Section */}
      <WorkExperience />
      
      {/* Hidden Resume Content just for PDF capture */}
      <div className="hidden pointer-events-none absolute left-[-9999px] top-0 overflow-hidden" aria-hidden="true">
        <div id="resume-download-source" className="bg-white p-0 m-0">
          <ResumeContent />
        </div>
      </div>
    </>
  )
}

