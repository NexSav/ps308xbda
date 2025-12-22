"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function SLTPAC() {
  return (
    <div className="relative min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />

      <main>
        <PageHeader 
          title="Community Leadership"
          subtitle="SLT & Title I PAC: Empowering parents and staff to shape the future of Bronx Dance Academy."
          imageSrc="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop"
        />

        {/* Introduction */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Your Voice Matters</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              At Bronx Dance Academy, we believe that a strong partnership between school and home is vital for student success. The School Leadership Team (SLT) and the Parent Advisory Council (PAC) are the primary vehicles for this collaboration, giving families a direct role in decision-making and school improvement.
            </p>
          </div>

          <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
            {/* SLT Card */}
            <div className="bg-secondary rounded-[2.5rem] p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-8 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-heading mb-4">School Leadership Team (SLT)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The SLT is a collaborative team of parents, teachers, and administrators that develops the Comprehensive Educational Plan (CEP) for the school. We meet monthly to discuss school goals, budget priorities, and instructional strategies.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-primary" /> Develops school goals
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-primary" /> Reviews school budget
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-primary" /> Ensures equity & inclusion
                  </li>
                </ul>
                <button className="px-6 py-3 rounded-xl bg-white text-primary font-bold shadow-sm hover:bg-primary hover:text-white transition-colors border border-gray-200">
                  View Meeting Schedule
                </button>
              </div>
            </div>

            {/* PAC Card */}
            <div className="bg-secondary rounded-[2.5rem] p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
               <div className="relative z-10">
                <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-8 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-heading mb-4">Title I Parent Advisory Council (PAC)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The PAC is dedicated to ensuring that Title I funds are used effectively to support parent engagement and student achievement. All parents of students in Title I schools are automatically members of the PAC.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-accent" /> Plans parent workshops
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-accent" /> Manages Title I parent budget
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-accent" /> Hosts community events
                  </li>
                </ul>
                <button className="px-6 py-3 rounded-xl bg-white text-primary font-bold shadow-sm hover:bg-primary hover:text-white transition-colors border border-gray-200">
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

