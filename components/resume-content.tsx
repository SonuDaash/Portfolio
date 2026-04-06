import { Phone, Mail, Linkedin, MapPin, Briefcase, GraduationCap, Award, CheckCircle } from "lucide-react";

export default function ResumeContent() {
  return (
    <div className="bg-white text-gray-800 p-10 max-w-[8.5in] min-h-[11in] mx-auto shadow-2xl resume-content font-sans border-t-[12px] border-orange-500 rounded-b-lg">
      <div className="flex flex-col md:flex-row gap-8 mb-8 pb-8 border-b-2 border-gray-100">
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">Sonu <span className="text-orange-500">Das</span></h1>
          <p className="text-xl font-medium text-gray-500 mb-4 tracking-wide">Experienced School Coordinator & Computer Teacher</p>
          <p className="text-sm text-gray-600 leading-relaxed max-w-lg">
            Dynamic leader with 7+ years of experience streamlining school operations, mentoring educators, and leveraging technology to enhance learning and efficiency.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-gray-600 mt-2">
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-full"><MapPin className="w-4 h-4 text-orange-600" /></div>
            <span>Birgunj, Nepal</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-full"><Phone className="w-4 h-4 text-orange-600" /></div>
            <span>(+977) 9812214979</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-full"><Mail className="w-4 h-4 text-orange-600" /></div>
            <span>sonudad77@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-full"><Linkedin className="w-4 h-4 text-orange-600" /></div>
            <span>linkedin.com/in/sonudaas/</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {/* Left Column */}
        <div className="col-span-1 space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-orange-500" />
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider">Core Skills</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">Educational Leadership</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start gap-1"><CheckCircle className="w-3 h-3 text-orange-500 mt-1" /> School Operations</li>
                  <li className="flex items-start gap-1"><CheckCircle className="w-3 h-3 text-orange-500 mt-1" /> Staff Supervision</li>
                  <li className="flex items-start gap-1"><CheckCircle className="w-3 h-3 text-orange-500 mt-1" /> Parent-Teacher Coord.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">Technology & Digital</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start gap-1"><CheckCircle className="w-3 h-3 text-orange-500 mt-1" /> MS Office & IEMIS</li>
                  <li className="flex items-start gap-1"><CheckCircle className="w-3 h-3 text-orange-500 mt-1" /> WordPress & UI</li>
                  <li className="flex items-start gap-1"><CheckCircle className="w-3 h-3 text-orange-500 mt-1" /> Graphic & Video Edits</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">Academic Coordination</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start gap-1"><CheckCircle className="w-3 h-3 text-orange-500 mt-1" /> Curriculum Planning</li>
                  <li className="flex items-start gap-1"><CheckCircle className="w-3 h-3 text-orange-500 mt-1" /> Assessment Tracking</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
             <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-orange-500" />
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider">Education</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-800 text-sm">Bachelor in Business Studies</h3>
                <p className="text-xs text-orange-600 font-medium mb-1">Thakur Ram Multiple Campus</p>
                <p className="text-xs text-gray-500 border-l-2 border-orange-200 pl-2">Present</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-sm">Intermediate (+2)</h3>
                <p className="text-xs text-orange-600 font-medium mb-1">National Creative Co-Ed School</p>
                <p className="text-xs text-gray-500 border-l-2 border-orange-200 pl-2">3.05 GPA</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-sm">SEE</h3>
                <p className="text-xs text-orange-600 font-medium mb-1">Budhanilkhanta Model Comm.</p>
                <p className="text-xs text-gray-500 border-l-2 border-orange-200 pl-2">3.25 GPA</p>
              </div>
            </div>
          </div>

          <div>
             <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-orange-500" />
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider">Awards</h2>
            </div>
            <ul className="space-y-3">
              <li className="text-sm">
                <span className="font-bold text-gray-800 block">Favorite Teacher Award (2076)</span>
                <span className="text-xs text-gray-500">Birgunj Pathshala</span>
              </li>
              <li className="text-sm">
                <span className="font-bold text-gray-800 block">Teacher of the Year (2075)</span>
                <span className="text-xs text-gray-500">Birgunj Pathshala</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-2 pl-6 border-l border-gray-100 space-y-8">
           <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider">Experience</h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[7px] top-2 bottom-0 w-0.5 bg-gray-100"></div>

            <div className="relative pl-6 mb-8 group">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-orange-100 border-2 border-orange-500 group-hover:bg-orange-500 transition-colors"></div>
              <div className="flex justify-between items-end mb-1">
                <h3 className="text-lg font-bold text-gray-900">School Coordinator & Teacher</h3>
                <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">01/2078 - Present</span>
              </div>
              <h4 className="text-sm font-medium text-gray-500 mb-3">Royal Academy, Birgunj, Nepal</h4>
              <ul className="list-none space-y-2 text-sm text-gray-600">
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-orange-400 before:rounded-full">Managed and streamlined daily school operations, ensuring efficiency in academic activities.</li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-orange-400 before:rounded-full">Supervised and mentored a team of 20+ teachers, fostering professional development.</li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-orange-400 before:rounded-full">Spearheaded the integration of technology in classrooms, improving student engagement.</li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-orange-400 before:rounded-full">Handled the IEMIS for accurate student data management and reporting.</li>
              </ul>
            </div>

            <div className="relative pl-6 mb-8 group">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-orange-100 border-2 border-orange-500 group-hover:bg-orange-500 transition-colors"></div>
              <div className="flex justify-between items-end mb-1">
                <h3 className="text-lg font-bold text-gray-900">Exam Coordinator & Teacher</h3>
                <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">02/2074 - 12/2077</span>
              </div>
              <h4 className="text-sm font-medium text-gray-500 mb-3">Birgunj Pathshala, Birgunj, Nepal</h4>
              <ul className="list-none space-y-2 text-sm text-gray-600">
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-orange-400 before:rounded-full">Planned, scheduled, and executed academic examinations aligning with the school curriculum.</li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-orange-400 before:rounded-full">Managed logistical aspects of exams, including venue arrangements and seating plans.</li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-orange-400 before:rounded-full">Trained and supervised invigilators, ensuring adherence to exam protocols and fairness.</li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-orange-400 before:rounded-full">Implemented innovative assessment methods to evaluate student learning outcomes.</li>
              </ul>
            </div>

            <div className="relative pl-6 group">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-orange-100 border-2 border-gray-300 group-hover:border-orange-500 transition-colors"></div>
              <div className="flex justify-between items-end mb-1">
                <h3 className="text-lg font-bold text-gray-900">Part-Time Computer Teacher</h3>
                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">2079 - Mid 2081</span>
              </div>
              <h4 className="text-sm font-medium text-gray-500 mb-3">Global Business School, Birgunj, Nepal</h4>
              <ul className="list-none space-y-2 text-sm text-gray-600">
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-gray-300 before:rounded-full">Delivered engaging computer science lessons, focusing on both theoretical and practical applications.</li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-gray-300 before:rounded-full">Designed interactive lesson plans and real-world projects to develop proficiency.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

