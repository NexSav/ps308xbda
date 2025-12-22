"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function Learning() {
  return (
    <div className="relative min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />

      <main>
        <PageHeader 
          title="Academic Excellence"
          subtitle="Empowering students with the tools, platforms, and rigorous curriculum they need to succeed in high school and beyond."
          imageSrc="https://images.unsplash.com/photo-1427504743050-66052fbddcee?q=80&w=2070&auto=format&fit=crop"
        />

        {/* Digital Learning Platforms */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-sm font-bold text-primary tracking-widest uppercase mb-2 block">Technology & Tools</span>
              <h2 className="text-4xl font-bold font-heading text-gray-900 mb-6">Learning Platforms</h2>
              <p className="text-lg text-gray-600">
                BDA utilizes a suite of modern digital platforms to manage coursework, track progress, and facilitate communication between teachers, students, and parents.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Google Classroom",
                  role: "Assignment Hub",
                  desc: "The central hub for all classwork. Students can view assignments, submit work, and receive direct feedback from teachers.",
                  link: "https://classroom.google.com",
                  color: "bg-green-50 text-green-700 border-green-200"
                },
                {
                  name: "PupilPath / IO Education",
                  role: "Gradebook & Attendance",
                  desc: "Parents and students can check real-time grades, attendance records, and schedule information.",
                  link: "https://pupilpath.skedula.com/",
                  color: "bg-blue-50 text-blue-700 border-blue-200"
                },
                {
                  name: "TeachHub",
                  role: "DOE Portal",
                  desc: "Single sign-on access to all NYC DOE applications, including Google Workspace, Microsoft Office, and more.",
                  link: "https://teachhub.schools.nyc",
                  color: "bg-orange-50 text-orange-700 border-orange-200"
                },
                 {
                  name: "i-Ready",
                  role: "Assessment & Instruction",
                  desc: "Adaptive diagnostic testing and personalized instruction in Reading and Mathematics to support student growth.",
                  link: "https://login.i-ready.com/",
                  color: "bg-purple-50 text-purple-700 border-purple-200"
                },
                 {
                  name: "Newsela",
                  role: "Literacy",
                  desc: "Instructional content platform that provides leveled articles to build reading comprehension and critical thinking.",
                  link: "https://newsela.com",
                  color: "bg-cyan-50 text-cyan-700 border-cyan-200"
                },
                 {
                  name: "Khan Academy",
                  role: "Supplemental Math",
                  desc: "Practice exercises and instructional videos to help students master math concepts at their own pace.",
                  link: "https://www.khanacademy.org",
                  color: "bg-teal-50 text-teal-700 border-teal-200"
                }
              ].map((platform, i) => (
                <a 
                  key={i} 
                  href={platform.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 ${platform.color}`}>
                    {platform.role}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    {platform.name}
                    <svg className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {platform.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Highlights */}
        <section className="py-24 bg-secondary relative">
           <div className="container mx-auto max-w-5xl px-4">
             <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="relative">
                 <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
                      alt="Student studying" 
                      className="h-full w-full object-cover"
                    />
                 </div>
               </div>
               <div className="space-y-8">
                 <h2 className="text-3xl font-bold font-heading text-gray-900">Rigorous & Responsive Curriculum</h2>
                 <p className="text-gray-600 text-lg leading-relaxed">
                   At Bronx Dance Academy, we align our instruction with the Next Generation Learning Standards to ensure every student is ready for the demands of high school.
                 </p>
                 
                 <div className="space-y-6">
                   {[
                     { title: "ELA & Literacy", text: "Focus on critical reading, analytical writing, and text-based evidence." },
                     { title: "Mathematics", text: "Problem-solving approach emphasizing conceptual understanding and real-world application." },
                     { title: "Science & STEAM", text: "Inquiry-based learning with hands-on experiments and technology integration." },
                     { title: "Social Studies", text: "Civics, history, and geography to build informed and active citizens." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                       <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm font-bold flex-shrink-0 border border-gray-100">
                         {i + 1}
                       </div>
                       <div>
                         <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                         <p className="text-gray-600">{item.text}</p>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

