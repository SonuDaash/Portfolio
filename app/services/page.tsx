"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Briefcase, GraduationCap, LayoutGrid } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="hero-premimum.jpeg"
            alt="Sonu Das at Royal Academy Annual Function"
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
              My{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="text-lg text-white/80">
              Comprehensive solutions for educational institutions looking to enhance their administrative processes and
              technology integration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8 text-center flex flex-col items-center"
            >
              <div className="inline-block p-4 rounded-2xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
                <Briefcase className="h-10 w-10" />
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">School Coordination & Administration</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center">
                  Streamline your school's administrative processes with expert guidance and implementation of efficient
                  management systems.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left w-full max-w-2xl">
                {[
                  "Administrative workflow optimization",
                  "School management system implementation",
                  "Staff training and development",
                  "Policy development and implementation",
                  "Resource allocation and management",
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="mr-3 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white mt-4 px-8">
                <Link href="/contact">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-black/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8 text-center flex flex-col items-center"
            >
              <div className="inline-block p-4 rounded-2xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
                <BookOpen className="h-10 w-10" />
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Computer Science Teaching</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center">
                  Develop and implement comprehensive computer science curricula that prepare students for the digital
                  future.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left w-full max-w-2xl">
                {[
                  "Curriculum development and implementation",
                  "Programming and coding instruction",
                  "Web and app development teaching",
                  "Computer science lab setup and management",
                  "Student technology competitions and projects",
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="mr-3 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white mt-4 px-8">
                <Link href="/contact">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8 text-center flex flex-col items-center"
            >
              <div className="inline-block p-4 rounded-2xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
                <LayoutGrid className="h-10 w-10" />
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Technology Integration</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center">
                  Seamlessly integrate technology into your educational environment to enhance teaching and learning
                  experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left w-full max-w-2xl">
                {[
                  "Educational technology assessment and planning",
                  "Digital tool selection and implementation",
                  "Learning management system setup",
                  "Teacher technology training and support",
                  "Technology infrastructure planning",
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="mr-3 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white mt-4 px-8">
                <Link href="/contact">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-black/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8 text-center flex flex-col items-center"
            >
              <div className="inline-block p-4 rounded-2xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
                <GraduationCap className="h-10 w-10" />
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Digital Transformation in Education</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center">
                  Guide your institution through a complete digital transformation to meet the demands of modern
                  education.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left w-full max-w-2xl">
                {[
                  "Digital strategy development and implementation",
                  "Paperless office and classroom initiatives",
                  "Virtual learning environment creation",
                  "Data-driven decision making systems",
                  "Digital communication and collaboration tools",
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="mr-3 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white mt-4 px-8">
                <Link href="/contact">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Process */}
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
              My{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to implementing educational technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Thorough evaluation of current systems, needs, and goals to establish a baseline.",
                delay: 0.1,
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Developing a comprehensive strategy and roadmap tailored to your institution's unique requirements.",
                delay: 0.2,
              },
              {
                step: "03",
                title: "Implementation",
                description: "Executing the plan with careful attention to detail, training, and change management.",
                delay: 0.3,
              },
              {
                step: "04",
                title: "Evaluation",
                description:
                  "Measuring outcomes, gathering feedback, and making adjustments to ensure optimal results.",
                delay: 0.4,
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: process.delay }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-400/5 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
                <div className="relative h-full p-6 rounded-xl border border-orange-500/20 bg-black/50 backdrop-blur-sm group-hover:border-orange-500/40 transition-all duration-300 flex flex-col items-center">
                  <div className="text-4xl font-bold text-orange-500 mb-4">{process.step}</div>
                  <h3 className="text-xl font-bold mb-3 text-center group-hover:text-orange-500 transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground text-center">{process.description}</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Ready to elevate your educational institution?</h2>
                <p className="text-lg text-muted-foreground">
                  Let's discuss how my services can help you achieve your goals in school administration, technology
                  integration, and digital transformation.
                </p>
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Link href="/contact">
                    Schedule a Consultation
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

