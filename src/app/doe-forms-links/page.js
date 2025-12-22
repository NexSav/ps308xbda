"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function DOEFormsLinks() {
  return (
    <div className="relative min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />

      <main>
        <PageHeader 
          title="Parent Resources"
          subtitle="Essential forms, links, and documents for Bronx Dance Academy families."
          imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
        />

        {/* Quick Links Grid */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* NYC DOE Systems */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-gray-900 mb-8 border-b border-gray-100 pb-4">
                  NYC Schools Accounts
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "NYCSA (NYC Schools Account)",
                      desc: "View grades, attendance, test scores, and transportation information.",
                      link: "https://www.schoolsaccount.nyc/"
                    },
                    {
                      title: "MySchools",
                      desc: "Apply to high schools and explore school options.",
                      link: "https://www.myschools.nyc/"
                    },
                     {
                      title: "School Food Menus",
                      desc: "View breakfast and lunch menus for the month.",
                      link: "https://www.schools.nyc.gov/school-life/food/menus"
                    }
                  ].map((item, i) => (
                    <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="block group bg-secondary hover:bg-white p-6 rounded-2xl border border-transparent hover:border-gray-200 transition-all hover:shadow-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">{item.title}</h3>
                          <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Downloadable Forms */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-gray-900 mb-8 border-b border-gray-100 pb-4">
                  Important Forms
                </h2>
                <div className="space-y-4">
                   {[
                    { title: "Blue Card (Emergency Contact)", format: "PDF" },
                    { title: "Media Consent Form", format: "PDF" },
                    { title: "Lunch Form / Income Inquiry", format: "Online" },
                    { title: "Health Examination Form", format: "PDF" }
                  ].map((form, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs">
                          {form.format}
                        </div>
                        <span className="font-medium text-gray-900">{form.title}</span>
                      </div>
                      <button className="text-sm font-bold text-primary hover:underline">Download</button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Need Help? */}
        <section className="py-20 px-4 bg-secondary">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Need Assistance?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our Parent Coordinator is here to help you navigate these systems and forms.
            </p>
            <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-[2rem] shadow-sm">
              <div className="flex items-center gap-4 text-left">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Main Office</p>
                  <p className="text-gray-600">718-515-0410</p>
                </div>
              </div>
               <div className="w-full md:w-px h-px md:h-12 bg-gray-200"></div>
              <div className="flex items-center gap-4 text-left">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Email Us</p>
                  <p className="text-gray-600">info@ms308bda.org</p>
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

