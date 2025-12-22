"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function MMCC() {
  return (
    <div className="relative min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />

      <main>
        <PageHeader 
          title="After-School Enrichment"
          subtitle="Partnering with Mosholu Montefiore Community Center to provide a safe, engaging, and supportive environment for students after dismissal."
          imageSrc="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1974&auto=format&fit=crop"
        />

        {/* Introduction */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                 <h2 className="text-4xl font-bold font-heading text-gray-900">More Than Just After-School</h2>
                 <p className="text-lg text-gray-600 leading-relaxed">
                   Our partnership with the Mosholu Montefiore Community Center (MMCC) ensures that learning and growth don't stop when the final bell rings. The MMCC program at Bronx Dance Academy offers a robust schedule of academic support, arts enrichment, and recreational activities.
                 </p>
                 <div className="bg-secondary p-6 rounded-2xl border border-gray-100 mt-6">
                    <h4 className="font-bold text-gray-900 flex items-center gap-2 mb-2">
                       <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                       Program Hours
                    </h4>
                    <p className="text-gray-600">Monday - Friday: <span className="font-bold">2:20 PM - 5:30 PM</span></p>
                 </div>
              </div>
              <div className="relative">
                 <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
                      alt="Students working together" 
                      className="h-full w-full object-cover"
                    />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Program Activities</h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Homework Help", 
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                  ),
                  desc: "Dedicated time for students to complete assignments with the guidance of tutors and staff." 
                },
                { 
                  title: "Arts & Culture", 
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                  ),
                  desc: "Visual arts, dance, and music workshops that continue the school's mission of artistic expression." 
                },
                { 
                  title: "STEM & Recreation", 
                  icon: (
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                  ),
                  desc: "Hands-on science projects, computer literacy, and organized sports to keep minds and bodies active." 
                }
              ].map((activity, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 group text-center">
                  <div className="h-16 w-16 mx-auto bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    {activity.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{activity.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/Absence Form Placeholder */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
             <div className="bg-secondary rounded-[2.5rem] p-10 border border-gray-100">
               <div className="text-center mb-10">
                 <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Contact MMCC</h2>
                 <p className="text-gray-600">
                   If your child will be absent from the after-school program, please let us know in advance using the information below.
                 </p>
               </div>

               <div className="space-y-6">
                 <div className="bg-white p-6 rounded-2xl flex items-center gap-4 shadow-sm">
                   <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                   </div>
                   <div>
                     <p className="font-bold text-gray-900">Program Director</p>
                     <p className="text-gray-600">718-515-0410 (Ext. MMCC)</p>
                   </div>
                 </div>
                 
                 <div className="bg-white p-6 rounded-2xl flex items-center gap-4 shadow-sm">
                   <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                   </div>
                   <div>
                     <p className="font-bold text-gray-900">Email Attendance</p>
                     <p className="text-gray-600">mmcc@ms308bda.org</p>
                   </div>
                 </div>
               </div>
               
               <div className="mt-8 text-center">
                 <a 
                   href="https://www.mmcc.org" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center text-primary font-bold hover:underline"
                 >
                   Visit MMCC Official Website
                   <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                 </a>
               </div>
             </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

