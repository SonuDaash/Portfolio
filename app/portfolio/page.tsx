"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

// Project categories
const categories = ["All", "Administration", "Technology", "Teaching", "Digital Transformation"]

// Project data
const projects = [
  {
    id: 1,
    title: "School Management System Implementation",
    category: "Administration",
    description:
      "Led the implementation of a comprehensive school management system that streamlined administrative processes, improved communication between staff, parents, and students, and enhanced data management capabilities.",
    image: "/placeholder.svg?height=600&width=800",
    featured: true,
  },
  {
    id: 2,
    title: "Digital Curriculum Transformation",
    category: "Technology",
    description:
      "Developed and implemented a digital curriculum framework that integrated technology into traditional teaching methods, resulting in improved student engagement and learning outcomes.",
    image: "/placeholder.svg?height=600&width=800",
    featured: true,
  },
  {
    id: 3,
    title: "Computer Science Lab Modernization",
    category: "Teaching",
    description:
      "Redesigned and modernized the computer science laboratory with state-of-the-art equipment and software, creating an innovative learning environment for students.",
    image: "/placeholder.svg?height=600&width=800",
    featured: true,
  },
  {
    id: 4,
    title: "Teacher Technology Training Program",
    category: "Digital Transformation",
    description:
      "Created and conducted a comprehensive technology training program for teachers, enhancing their digital literacy and ability to integrate technology into their teaching practices.",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
  },
  {
    id: 5,
    title: "Student Information System Upgrade",
    category: "Administration",
    description:
      "Managed the upgrade of the student information system, improving data accuracy, accessibility, and reporting capabilities for administrators and teachers.",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
  },
  {
    id: 6,
    title: "Coding Boot Camp for Students",
    category: "Teaching",
    description:
      "Designed and led an intensive coding boot camp for high school students, introducing them to web development, app creation, and programming fundamentals.",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
  },
  {
    id: 7,
    title: "School Website Redesign",
    category: "Technology",
    description:
      "Led the complete redesign of the school website, improving user experience, accessibility, and information architecture while implementing modern web technologies.",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
  },
  {
    id: 8,
    title: "Paperless Office Initiative",
    category: "Digital Transformation",
    description:
      "Spearheaded a paperless office initiative that digitized administrative processes, reducing paper usage by 85% and improving efficiency across departments.",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250329_160039.jpg-aC3ACd0XvwyU7BqvdIiHIFAiTjRTAj.jpeg"
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
              My{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>

            <p className="text-lg text-white/80">
              Explore my projects and contributions in school administration, technology integration, and education
              innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-8">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 md:gap-4"
          >
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === category ? "default" : "outline"}
                className={
                  activeCategory === category
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "border-orange-500/20 hover:bg-orange-500/10 hover:text-orange-500"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      {activeCategory === "All" && (
        <section className="py-12">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 space-y-4"
            >
              <h2 className="text-3xl font-bold">
                Featured{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {projects
                .filter((project) => project.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-xl mb-6">
                      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-medium">
                          {project.category}
                        </span>
                        <Link
                          href={`/portfolio/${project.id}`}
                          className="text-orange-500 hover:text-orange-400 transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </Link>
                      </div>

                      <h3 className="text-2xl font-bold group-hover:text-orange-500 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground">{project.description}</p>

                      <Button asChild variant="link" className="text-orange-500 p-0">
                        <Link href={`/portfolio/${project.id}`}>
                          View Project Details <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 space-y-4"
          >
            <h2 className="text-3xl font-bold">
              {activeCategory === "All" ? "All" : activeCategory}{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="aspect-video overflow-hidden rounded-xl">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-500 text-xs font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Button asChild variant="link" className="text-orange-500 p-0">
                      <Link href={`/portfolio/${project.id}`}>
                        View Project <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Have a project in mind?</h2>
                <p className="text-lg text-muted-foreground">
                  Let's collaborate to bring your educational technology vision to life.
                </p>
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Link href="/contact">
                    Start a Conversation
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

