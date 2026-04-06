"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, Linkedin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Get in{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="text-lg text-muted-foreground">
              Have a question or interested in working together? I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Mail className="h-8 w-8" />,
                title: "Email",
                details: "Sonudad77@gmail.com",
                description: "For general inquiries and project discussions",
                delay: 0.1,
              },
              {
                icon: <Phone className="h-8 w-8" />,
                title: "Phone",
                details: "(+977) 9812214979",
                description: "Available Monday-Friday, 9am-5pm NPT",
                delay: 0.2,
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Location",
                details: "Birgunj, Nepal",
                description: "Available for remote consultations worldwide",
                delay: 0.3,
              },
              {
                icon: <Linkedin className="h-8 w-8" />,
                title: "LinkedIn",
                details: "www.linkedin.com/in/sonudaas/",
                link: "https://www.linkedin.com/in/sonudaas/",
                description: "Connect with me professionally",
                delay: 0.4,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-400/5 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
                <div className="relative h-full p-6 rounded-xl border border-orange-500/20 bg-black/50 backdrop-blur-sm group-hover:border-orange-500/40 transition-all duration-300 text-center">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-orange-500/10 text-orange-500 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 mb-2 hover:underline block"
                    >
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-orange-500 mb-2">{item.details}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-black/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Let's Discuss Your{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  Project
                </span>
              </h2>

              <p className="text-lg text-muted-foreground">
                Whether you're looking to improve your school's administration, integrate technology into your
                curriculum, or undergo a complete digital transformation, I'm here to help.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-orange-500" />
                  <p>Comprehensive consultation to understand your needs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-orange-500" />
                  <p>Tailored solutions for your educational institution</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-orange-500" />
                  <p>Ongoing support throughout implementation and beyond</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-orange-400/10 rounded-xl blur-sm" />
                <div className="relative p-6 rounded-xl border border-orange-500/20 bg-black/50 backdrop-blur-sm">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="bg-black/30 border-orange-500/20 focus:border-orange-500/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-black/30 border-orange-500/20 focus:border-orange-500/50"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="What's this about?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="bg-black/30 border-orange-500/20 focus:border-orange-500/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project or inquiry"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="min-h-[150px] bg-black/30 border-orange-500/20 focus:border-orange-500/50"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>

                    {isSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-3 rounded-md bg-green-500/20 text-green-500 text-sm text-center"
                      >
                        Thank you for your message! I'll get back to you soon.
                      </motion.div>
                    )}
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Answers to common questions about my services</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What types of educational institutions do you work with?",
                answer:
                  "I work with a wide range of educational institutions including K-12 schools, colleges, universities, and educational technology companies. My services are adaptable to the specific needs of each institution.",
                delay: 0.1,
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary depending on the scope and complexity. A technology integration project might take 2-3 months, while a complete digital transformation could span 6-12 months. I provide detailed timelines during the consultation phase.",
                delay: 0.2,
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer:
                  "Yes, I offer various support packages to ensure the long-term success of implemented solutions. This includes training, troubleshooting, and periodic reviews to optimize performance.",
                delay: 0.3,
              },
              {
                question: "Can you work with our existing technology infrastructure?",
                answer:
                  "Absolutely. I assess your current systems and develop solutions that either integrate with or enhance your existing infrastructure, ensuring a smooth transition and minimal disruption.",
                delay: 0.4,
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: faq.delay }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-orange-400/5 rounded-xl blur-sm" />
                <div className="relative p-6 rounded-xl border border-orange-500/20 bg-black/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

