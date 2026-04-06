"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown, FileText, Building2, Cpu, GraduationCap, LayoutGrid } from "lucide-react"
import Image from "next/image"
import PDFViewer from "@/components/pdf-viewer"
import WorkExperience from "@/components/work-experience"
import SkillsSection from "@/components/skills-section"

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

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-orange-500/20 hover:bg-orange-500/10 hover:text-orange-500"
                >
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square max-w-md mx-auto lg:ml-auto"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/40 to-orange-400/10 blur-[80px] animate-pulse duration-3000" />
              <div className="relative h-full w-full rounded-full overflow-hidden border border-orange-500/30 p-2 shadow-[0_0_40px_rgba(249,115,22,0.2)] bg-black/20 backdrop-blur-xl">
                <div className="h-full w-full rounded-full overflow-hidden border border-white/5 bg-black/50">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/448510476_3677541605832872_6947636997227695633_n.jpg-k7ADr4fJAvVKDZaOXKKHimIq75PC5G.jpeg"
                    alt="Sonu Das"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border-2 border-orange-500/20 flex items-center gap-1">
                  <span className="text-xs">7+ YEARS EXPERIENCE</span>
                </div>
              </div>
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
    </>
  )
}

