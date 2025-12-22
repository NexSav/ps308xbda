"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function Attendance() {
  return (
    <div className="relative min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />

      <main>
        <PageHeader 
          title="Attendance Matters"
          subtitle="Every day counts. Regular attendance is the foundation of academic success and artistic growth at BDA."
          imageSrc="https://images.unsplash.com/photo-1577896334614-201901870948?q=80&w=2070&auto=format&fit=crop"
        />

        {/* Policy Section */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg prose-stone mx-auto">
              <h2 className="text-3xl font-bold font-heading text-gray-900 text-center mb-12">Our Attendance Policy</h2>
              
              <div className="bg-secondary p-8 rounded-2xl border border-gray-100 not-prose mb-12">
                 <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                   <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                   School Hours
                 </h3>
                 <p className="text-gray-700 font-medium text-lg">
                   School begins promptly at <span className="text-primary font-bold">8:00 AM</span>. 
                   <br/>Dismissal is at <span className="text-primary font-bold">2:20 PM</span>.
                 </p>
              </div>

              <p>
                Consistent attendance is essential for students to master the curriculum, participate in arts rehearsals, and build strong relationships with peers. Students who miss school miss out on critical instruction that cannot be fully replicated.
              </p>
              
              <h3 className="font-heading text-2xl text-gray-900 mt-8 mb-4">Reporting an Absence</h3>
              <p>
                If your child is going to be absent, please notify the school immediately. A written note is required upon the student's return to school for the absence to be considered excused.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-600 marker:text-primary">
                <li>Call the main office at <strong>718-515-0410</strong> before 9:00 AM.</li>
                <li>Provide a doctor's note for absences due to illness lasting 3 or more days.</li>
                <li>Family emergencies should be communicated to the Parent Coordinator.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Stats & Importance */}
        <section className="py-20 px-4 bg-secondary">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { label: "Chronically Absent", value: "10%", desc: "Missing just 2 days a month adds up to 10% of the school year." },
                { label: "Academic Impact", value: "Reading", desc: "Students with good attendance are more likely to read at grade level." },
                { label: "Future Success", value: "Graduation", desc: "Middle school attendance is a key predictor of high school graduation rates." }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                   <div className="text-4xl font-bold text-primary font-heading mb-2">{stat.value}</div>
                   <h4 className="font-bold text-gray-900 uppercase tracking-wider text-sm mb-4">{stat.label}</h4>
                   <p className="text-gray-600 text-sm">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

