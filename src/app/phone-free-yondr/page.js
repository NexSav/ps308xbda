"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function PhoneFreeYondr() {
  return (
    <div className="relative min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />

      <main>
        <PageHeader 
          title="Phone-Free Space"
          subtitle="Creating a focused, distraction-free environment for learning and social connection using Yondr."
          imageSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
        />

        {/* How it Works */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Why We Are Phone-Free</h2>
            <p className="text-lg text-gray-600 mb-16 leading-relaxed">
              We believe that phones in the classroom are a distraction to learning and social development. By removing phones from the school day, we create space for students to engage more deeply with their studies and with each other.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { step: "1", title: "Arrival", desc: "Upon entering school, students turn off their phone and place it inside their Yondr pouch." },
                { step: "2", title: "Lock", desc: "Students lock their pouch and keep it with them throughout the day. The phone is safe, but inaccessible." },
                { step: "3", title: "Unlock", desc: "At dismissal, students tap their pouch on an unlocking base to access their phone as they leave." }
              ].map((item, i) => (
                <div key={i} className="relative bg-secondary p-8 rounded-[2rem] border border-gray-100">
                  <div className="absolute -top-6 left-8 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto max-w-3xl px-4">
             <h2 className="text-3xl font-bold font-heading text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
             <div className="space-y-4">
               {[
                 { q: "What if I need to reach my child during the day?", a: "Please call the main office at 718-515-0410. We will relay any urgent messages to your child immediately." },
                 { q: "What if there is a school emergency?", a: "The school is equipped with extensive safety protocols. Students will be directed by staff, and parents will be notified via official school communication channels." },
                 { q: "What happens if a student damages their pouch?", a: "Students are responsible for their Yondr pouch. Lost or damaged pouches may require a replacement fee." }
               ].map((faq, i) => (
                 <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                   <h4 className="font-bold text-gray-900 text-lg mb-2">{faq.q}</h4>
                   <p className="text-gray-600">{faq.a}</p>
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

