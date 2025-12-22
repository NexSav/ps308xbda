"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function DanceMajors() {
  return (
    <div className="relative min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />

      <main>
        <PageHeader 
          title="Dance Majors"
          subtitle="Movement, discipline, and expression. Our rigorous dance program trains students in ballet, modern, jazz, and choreography."
          imageSrc="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop"
        />

        {/* Program Overview */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="space-y-6">
                 <h2 className="text-4xl font-bold font-heading text-gray-900">Training the Whole Artist</h2>
                 <p className="text-lg text-gray-600 leading-relaxed">
                   The Dance Major at BDA is an intensive pre-professional program designed for students with a passion for movement. Our curriculum emphasizes technical proficiency, physical conditioning, and artistic development.
                 </p>
                 <p className="text-lg text-gray-600 leading-relaxed">
                   Students take daily technique classes and have multiple opportunities to perform throughout the year, including our Winter Showcase and Spring Recital.
                 </p>
                 <div className="flex gap-4 pt-4">
                   <button className="px-8 py-3 rounded-full bg-primary text-white font-bold shadow-lg hover:bg-primary/90 transition-all">
                     Audition Info
                   </button>
                   <button className="px-8 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-bold hover:border-primary hover:text-primary transition-all">
                     View Gallery
                   </button>
                 </div>
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-4 translate-y-8">
                   <img src="https://images.unsplash.com/photo-1518834107812-cfe30b506ef3?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Ballet" />
                   <div className="bg-secondary p-6 rounded-2xl text-center">
                     <h4 className="font-bold text-gray-900">Technique</h4>
                     <p className="text-sm text-gray-500">Ballet & Modern</p>
                   </div>
                 </div>
                 <div className="space-y-4">
                   <div className="bg-primary/5 p-6 rounded-2xl text-center border border-primary/10">
                     <h4 className="font-bold text-gray-900">Performance</h4>
                     <p className="text-sm text-gray-500">Stage Experience</p>
                   </div>
                   <img src="https://images.unsplash.com/photo-1547152345-0d045d626359?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Contemporary" />
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Curriculum Levels */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto max-w-5xl px-4">
             <div className="text-center mb-16">
               <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Curriculum Progression</h2>
               <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
             </div>

             <div className="grid md:grid-cols-3 gap-8">
               {[
                 { level: "Grade 6", title: "Foundations", desc: "Introduction to ballet vocabulary, alignment, and basic modern dance techniques. Focus on discipline and body awareness." },
                 { level: "Grade 7", title: "Development", desc: "Intermediate technique in ballet and modern. Introduction to jazz dance and improvisation. Increased focus on musicality." },
                 { level: "Grade 8", title: "Pre-Professional", desc: "Advanced technique and repertoire. Students create their own choreography and prepare for high school auditions." }
               ].map((card, i) => (
                 <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                   <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase mb-4">{card.level}</span>
                   <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
                   <p className="text-gray-600 leading-relaxed">{card.desc}</p>
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

