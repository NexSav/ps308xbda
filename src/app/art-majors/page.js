"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function ArtMajors() {
  return (
    <div className="relative min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />

      <main>
        <PageHeader 
          title="Visual Arts Majors"
          subtitle="Creativity, technique, and vision. Exploring diverse mediums from drawing and painting to sculpture and digital design."
          imageSrc="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop"
        />

        {/* Program Overview */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
             <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="order-2 md:order-1 relative">
                 <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Art Student" />
                 </div>
                 <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
                   <p className="font-heading text-xl font-bold text-gray-900">"Every artist was first an amateur."</p>
                   <p className="mt-2 text-sm text-gray-800 font-medium">— Ralph Waldo Emerson</p>
                 </div>
               </div>

               <div className="order-1 md:order-2 space-y-6">
                 <h2 className="text-4xl font-bold font-heading text-gray-900">Visualizing the Future</h2>
                 <p className="text-lg text-gray-600 leading-relaxed">
                   The Art Major program encourages students to observe the world closely and express their unique perspectives. Through a scaffolded curriculum, students gain mastery over materials and methods while developing their own artistic voice.
                 </p>
                 <p className="text-lg text-gray-600 leading-relaxed">
                   Our studio environment fosters experimentation and critique, preparing students for the specialized portfolios required for competitive performing arts high schools.
                 </p>
                 <ul className="grid grid-cols-2 gap-4 pt-4">
                   {["Drawing & Painting", "Sculpture & 3D", "Printmaking", "Art History"].map((item, i) => (
                     <li key={i} className="flex items-center gap-2 text-gray-700 font-medium">
                       <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                       {item}
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
          </div>
        </section>

        {/* Student Gallery Preview */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold font-heading text-gray-900">Student Gallery</h2>
                <p className="text-gray-600 mt-2">Highlights from our recent exhibitions.</p>
              </div>
              <button className="hidden md:inline-flex px-6 py-2 rounded-full border border-gray-300 font-bold text-gray-600 hover:border-primary hover:text-primary transition-colors">
                View All Works
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Portrait Study", medium: "Charcoal on Paper", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2045&auto=format&fit=crop" },
                { title: "Urban Landscape", medium: "Acrylic on Canvas", img: "https://images.unsplash.com/photo-1549887552-93f27ea6b705?q=80&w=2070&auto=format&fit=crop" },
                { title: "Abstract Form", medium: "Mixed Media", img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop" }
              ].map((work, i) => (
                <div key={i} className="group relative overflow-hidden rounded-3xl aspect-square shadow-sm cursor-pointer">
                  <img src={work.img} alt={work.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl">{work.title}</h3>
                    <p className="text-gray-300 text-sm">{work.medium}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <button className="px-6 py-3 rounded-full border border-gray-300 font-bold text-gray-600 hover:border-primary hover:text-primary transition-colors">
                View All Works
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

