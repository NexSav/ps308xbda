"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function MoreAboutBDA() {
  return (
    <div className="relative min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />

      <main>
        <PageHeader 
          title="Our Story & Mission"
          subtitle="A small school with a big heart, dedicated to artistic and academic excellence in the Northern Bronx."
          imageSrc="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop"
        />

        {/* Introduction Section */}
        <section className="py-20 px-4 bg-secondary/30 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -z-10" />
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-heading text-gray-900">
                  Small School, <span className="text-primary italic">Meaningful Relationships.</span>
                </h2>
                <div className="prose prose-lg text-gray-600 leading-relaxed">
                  <p>
                    Bronx Dance Academy is a small, high-achieving middle school located in the Northern part of the Bronx. Our size is our strength: because we are small, students are able to form meaningful, lasting relationships with their teachers and peers.
                  </p>
                  <p>
                    We believe that every student deserves to be seen, heard, and valued. Our dedicated staff works tirelessly to create a supportive environment where students feel safe to take artistic risks and challenge themselves academically.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-0 right-0 w-full h-full bg-accent rounded-[2rem] transform translate-x-4 translate-y-4 -z-10" />
                <div className="bg-white p-8 rounded-[2rem] shadow-xl border-4 border-white">
                  <h3 className="text-xl font-bold font-heading mb-4 flex items-center gap-3 text-primary">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">★</span>
                    At a Glance
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Located in Northern Bronx (District 10)",
                      "Focus on Dance & Visual Arts",
                      "Small Class Sizes",
                      "Personalized Academic Support",
                      "Strong Community Partnerships"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Philosophy */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">Our Educational Philosophy</h2>
              <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Artistic Expression",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                  ),
                  desc: "We use the arts not just as a subject, but as a lens through which students learn discipline, creativity, and self-expression."
                },
                {
                  title: "Holistic Growth",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                  ),
                  desc: "Education goes beyond test scores. We focus on the social-emotional development of every child to prepare them for life."
                },
                {
                  title: "Community First",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                  ),
                  desc: "Parents and families are our partners. Through the SLT and PAC, we ensure that the community has a voice in our school's future."
                }
              ].map((card, i) => (
                <div key={i} className="bg-[#fdfbf7] p-8 rounded-2xl shadow-sm border-2 border-transparent hover:border-accent hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="h-14 w-14 bg-white rounded-xl flex items-center justify-center text-primary mb-6 shadow-md group-hover:bg-primary group-hover:text-white transition-all group-hover:rotate-6">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Come See the BDA Difference</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We invite you to tour our school, meet our passionate staff, and see our talented students in action.
            </p>
            <div className="flex justify-center gap-4">
               <a href="/contact" className="px-8 py-3 rounded-full bg-primary text-white font-bold shadow-lg hover:bg-primary/90 hover:scale-105 transition-all">
                 Schedule a Tour
               </a>
               <a href="/apply-now" className="px-8 py-3 rounded-full bg-white border-2 border-primary text-primary font-bold hover:bg-gray-50 hover:scale-105 transition-all">
                 Apply Now
               </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

