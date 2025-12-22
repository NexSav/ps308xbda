"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function Transportation() {
  return (
    <div className="relative min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />

      <main>
        <PageHeader 
          title="Transportation"
          subtitle="Getting to and from Bronx Dance Academy safely and efficiently."
          imageSrc="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop"
        />

        {/* MetroCard & Busing Info */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div>
                   <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Student MetroCards</h2>
                   <p className="text-lg text-gray-600 leading-relaxed">
                     Students who live more than 0.5 miles from the school but less than 1.5 miles (for 6th grade) or 1.5 miles (for 7th/8th grade) may be eligible for a full-fare or half-fare Student MetroCard.
                   </p>
                </div>
                
                <div className="bg-secondary p-6 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    Important Note
                  </h3>
                  <p className="text-sm text-gray-600">
                    MetroCards are distributed by the school at the beginning of each semester. Lost MetroCards must be reported to the main office immediately.
                  </p>
                </div>

                <div>
                   <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Yellow Bus Service</h2>
                   <p className="text-lg text-gray-600 leading-relaxed">
                     Yellow bus service is generally provided to 6th grade students who live 1 mile or more from the school within the same district. Eligibility is determined by the Office of Pupil Transportation (OPT).
                   </p>
                </div>
              </div>

              {/* Map / Directions */}
              <div className="bg-white p-2 rounded-[2rem] shadow-xl border border-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.5896357732646!2d-73.8808629234857!3d40.8838385713682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f30bc4725063%3A0x7d0e371309322312!2s3617%20Bainbridge%20Ave%2C%20Bronx%2C%20NY%2010467!5e0!3m2!1sen!2sus!4v1703274000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0, borderRadius: '1.5rem' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bronx Dance Academy</h3>
                  <p className="text-gray-600 mb-4">3617 Bainbridge Avenue, Bronx, NY 10467</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary font-bold hover:underline"
                  >
                    Get Directions 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </a>
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

