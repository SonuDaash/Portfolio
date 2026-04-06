"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, FileText, X } from "lucide-react"
import Link from "next/link"

interface ResumeViewerProps {
  children: React.ReactNode
}

export default function ResumeViewer({ children }: ResumeViewerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl w-full h-[90vh] p-0">
        <div className="flex flex-col h-full">
          <DialogHeader className="px-4 py-2 border-b flex flex-row items-center justify-between">
            <DialogTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-orange-500" />
              <span>Sonu Das - Resume</span>
            </DialogTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-orange-500/20 hover:bg-orange-500/10 hover:text-orange-500"
                asChild
              >
                <Link href="/resume.pdf" download>
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="hover:bg-orange-500/10 hover:text-orange-500"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </DialogHeader>
          <div className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-900 p-4">
            <div className="bg-white dark:bg-black rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold">Sonu Das</h1>
                <p className="text-muted-foreground">Birgunj, Nepal • (+977) 9812214979</p>
                <p className="text-muted-foreground">sonudad77@gmail.com • www.linkedin.com/in/sonudaas/</p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Experienced School Coordinator & Computer Teacher</h2>
                <p className="text-muted-foreground">
                  Dynamic leader with 7+ years of experience streamlining school operations, mentoring educators, and
                  leveraging technology to enhance learning and efficiency.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-bold mb-2 text-orange-500">Core Skills</h2>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">Educational Leadership & Administration:</span> School Operations |
                    Staff Supervision | Event & Program Planning | Parent-Teacher Coordination
                  </li>
                  <li>
                    <span className="font-medium">Technology & Digital Tools:</span> MS Office | WordPress | Social
                    Media Management | Basic Graphic Design | Video Editing
                  </li>
                  <li>
                    <span className="font-medium">Academic & Exam Coordination:</span> Curriculum Planning | Assessment
                    & Evaluation | Student Record Management | Classroom Technology Integration
                  </li>
                  <li>
                    <span className="font-medium">Soft Skills:</span> Leadership | Problem-Solving | Adaptability | Time
                    Management | Team Collaboration | Effective Communication
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-bold mb-2 text-orange-500">Professional Experience</h2>

                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold">Royal Academy, Birgunj, Nepal</h3>
                    <span className="text-sm text-muted-foreground">01/2078 - Present</span>
                  </div>
                  <p className="font-medium italic">School Coordinator | Computer Teacher</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>
                      Managed and streamlined daily school operations for 700+ students, ensuring efficiency in academic
                      activities.
                    </li>
                    <li>
                      Supervised and mentored a team of 25+ teachers, fostering professional development and
                      collaboration.
                    </li>
                    <li>
                      Conducted and facilitated weekly staff meetings to discuss curriculum updates, teaching
                      methodologies, and administrative improvements.
                    </li>
                    <li>
                      Strengthened parent-teacher relationships through organized conferences, meetings, and transparent
                      communication.
                    </li>
                    <li>
                      Managed the Integrated Education Management Information System (IEMIS) to centralize student data,
                      ensuring 100% accuracy in enrollment, attendance, and academic reporting for 700+ students.
                    </li>
                    <li>
                      Maintained student academic records, grades, and performance reports with accuracy and
                      confidentiality.
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold">Birgunj Pathshala, Birgunj, Nepal</h3>
                    <span className="text-sm text-muted-foreground">02/2074 - 12/2077</span>
                  </div>
                  <p className="font-medium italic">Exam Coordinator | Computer Teacher</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>Planning and scheduling all academic examinations in accordance with the school curriculum.</li>
                    <li>Coordinating exam logistics, such as venue, seating, and resources.</li>
                    <li>Reduced grading errors by 20% by training 15+ invigilators on digital assessment tools.</li>
                    <li>
                      Managing exam administration processes, such as recording attendance, collecting and organizing
                      completed exam papers, and ensuring timely submission.
                    </li>
                    <li>
                      Automated report generation using Excel, reducing errors by 40%, and other academic records, as
                      well as managing various technical tasks related to school administration.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold">Global Business School, Birgunj, Nepal</h3>
                    <span className="text-sm text-muted-foreground">2079 - 2081</span>
                  </div>
                  <p className="font-medium italic">Part-Time Computer Teacher (Class 9 & 10)</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>
                      Taught coding fundamentals (HTML/CSS/QBASIC/C++) to 120+ students, focusing on both theoretical
                      knowledge and practical applications.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-bold mb-2 text-orange-500">Education</h2>
                <ul className="space-y-2">
                  <li>
                    Secondary Education Examination (SEE) – Budhanilkhanta Model Community Academy, Kathmandu – 3.25
                  </li>
                  <li>Intermediate (+2) – National Creative Co-Educational School, Kathmandu – 3.05 GPA</li>
                  <li>Bachelor in Business Studies (BBS) – Thakur Ram Multiple Campus, Birgunj – Present</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold mb-2 text-orange-500">Awards and Achievements</h2>
                <ul className="space-y-1">
                  <li>Teacher of the Year - 2075 | Birgunj Pathshala</li>
                  <li>Favorite Teacher Award - 2076 | Birgunj Pathshala</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

