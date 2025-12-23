"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RevealOnScroll, CountUp } from "@/components/ui/Animations";

// --- Icons (Inline SVG) ---
const CalendarIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const UserIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const BookIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const HeartIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const HandshakeIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

// --- Sub-components ---

function SectionDivider({ flip = false, className = "" }) {
  return (
    <div className={`absolute left-0 w-full overflow-hidden leading-none z-10 ${flip ? '-top-1 rotate-180' : '-bottom-1'} ${className}`}>
      <svg className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-background"></path>
      </svg>
    </div>
  );
}

function BlobBackground({ color = "bg-primary/5", position = "left-0 top-0", size = "w-[500px] h-[500px]" }) {
  return (
    <div className={`absolute ${position} ${size} ${color} rounded-full blur-[100px] -z-10 opacity-60 mix-blend-multiply animate-blob`} />
  );
}

function ValueCard({ icon, title, children, delay = 0 }) {
  return (
    <RevealOnScroll delay={delay}>
      <div className="group relative h-full">
        {/* Card Background with Morphing Shape on Hover */}
        <div className="absolute inset-0 bg-[#fdfbf7] rounded-[2rem] shadow-sm border-2 border-transparent transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-xl group-hover:scale-[1.02]" />
        
        <div className="relative p-8 z-10">
          <div className="mb-6 inline-flex p-4 rounded-2xl bg-white text-primary shadow-md group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6 transform">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            {children}
          </p>
        </div>
      </div>
    </RevealOnScroll>
  );
}

function QuickAccessButton({ icon, label, href = "#" }) {
  return (
    <a
      href={href}
      className="flex flex-col items-center justify-center gap-3 rounded-[2rem] bg-white p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-secondary hover:border-primary/20 group min-w-[150px] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="relative p-4 rounded-2xl bg-[#fdfbf7] text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-inner">
        {icon}
      </span>
      <span className="relative text-sm font-bold text-gray-900 text-center tracking-tight">{label}</span>
    </a>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#fdfbf7] font-sans selection:bg-primary/20 overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative h-[95vh] min-h-[700px] w-full overflow-hidden flex items-center justify-center rounded-b-[3rem] shadow-2xl z-20 border-b-4 border-accent">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="https://img1.wsimg.com/isteam/ip/06431402-c73c-459d-ae48-a933ee484f30/blob-0001.png"
              className="h-full w-full object-cover scale-105"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-girl-dancing-in-a-dance-studio-41481-large.mp4" type="video/mp4" />
            </video>
            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-black/80" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.05] mix-blend-overlay"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 mt-16">
            <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 rounded-full bg-black/30 px-5 py-2 text-sm font-bold text-white backdrop-blur-md border border-white/20 shadow-lg cursor-default hover:bg-black/40 transition-colors">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
                Accepting Applications for 2025-2026
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white font-heading leading-[0.9] tracking-tight drop-shadow-2xl">
                Passion Meets <br/>
                <span className="text-accent italic pr-4 font-serif text-shadow-lg">Performance.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-100 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-lg text-shadow-sm">
                Empowering students to excel artistically and academically in the heart of the Bronx.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
                <button className="group relative overflow-hidden rounded-full bg-accent px-10 py-5 text-lg font-bold text-primary shadow-2xl transition-all hover:scale-105 active:scale-95 hover:shadow-accent/50">
                  <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0" />
                  <span className="relative flex items-center gap-2">
                    Schedule a Visit <ArrowRightIcon />
                  </span>
                </button>
                <button className="rounded-full bg-black/20 px-10 py-5 text-lg font-bold text-white backdrop-blur-md border-2 border-white/30 hover:bg-white hover:text-primary transition-all hover:scale-105 active:scale-95">
                  Explore Programs
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access Floating Section */}
        <section className="relative z-30 -mt-20 px-4 pb-12">
          <div className="container mx-auto">
            <RevealOnScroll className="flex flex-wrap justify-center gap-4 md:gap-6">
              <QuickAccessButton icon={<CalendarIcon />} label="Calendar" href="/calendar-news" />
              <QuickAccessButton icon={<UserIcon />} label="Parent Portal" href="/doe-forms-links" />
              <QuickAccessButton icon={<BookIcon />} label="Academics" href="/learning" />
              <QuickAccessButton icon={<HandshakeIcon />} label="After School" href="/mmcc" />
              <QuickAccessButton icon={<MapPinIcon />} label="Directions" href="https://maps.google.com" />
            </RevealOnScroll>
        </div>
        </section>

        {/* Introduction / About - Gold Tint Background */}
        <section className="py-24 px-4 relative bg-secondary/30">
          <BlobBackground color="bg-accent/20" position="-left-24 top-20" size="w-[600px] h-[600px]" />
          
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <RevealOnScroll className="relative order-2 lg:order-1">
                <div className="relative z-10">
                  <div className="aspect-[4/3] rounded-[2rem] rounded-tr-[6rem] rounded-bl-[6rem] overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-700 border-4 border-white">
                    <img
                      src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop"
                      alt="Students in dance class"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -bottom-10 -left-10 bg-primary p-8 rounded-[2rem] shadow-xl border-4 border-white max-w-[240px] animate-float hidden md:block">
                    <p className="text-5xl font-bold text-white font-heading">
                      <CountUp end={20} suffix="+" />
                    </p>
                    <p className="text-sm font-bold text-white/90 uppercase tracking-wider mt-1">Years of Excellence</p>
                  </div>
                  <div className="absolute -top-10 -right-10 bg-accent p-6 rounded-full shadow-lg hidden md:block animate-float-delayed border-4 border-white">
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                </div>
              </RevealOnScroll>
              
              <div className="space-y-10 order-1 lg:order-2">
                <RevealOnScroll delay={200}>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-widest mb-4 border border-primary/20">
                    Who We Are
                  </div>
                  <h3 className="text-5xl md:text-6xl font-bold text-gray-900 font-heading leading-[1.1]">
                    More Than Just a School. <br/>
                    <span className="text-primary italic relative">
                      A Creative Family.
                      <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                      </svg>
                    </span>
                  </h3>
                </RevealOnScroll>
                
                <RevealOnScroll delay={300}>
                  <p className="text-xl text-gray-600 leading-relaxed font-medium">
                    Bronx Dance Academy is where rigorous academics meet creative expression. We believe that every student has a unique voice waiting to be discovered. 
                  </p>
                  <p className="text-lg text-gray-500 leading-relaxed mt-4">
                    Through our dual focus on <strong className="text-primary">Dance</strong> and <strong className="text-primary">Visual Arts</strong>, we provide a nurturing environment where scholars grow into confident, well-rounded leaders.
                  </p>
                </RevealOnScroll>

                <RevealOnScroll delay={400} className="flex gap-12 pt-4 border-t border-gray-200">
                  <div>
                    <h4 className="text-4xl font-bold text-gray-900 mb-1">
                      <CountUp end={450} suffix="+" />
                    </h4>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">Scholars</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold text-gray-900 mb-1">
                      <CountUp end={98} suffix="%" />
                    </h4>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">HS Placement</p>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Programs / Values - Staggered Layout */}
        <section className="relative py-32 overflow-hidden bg-white">
          <BlobBackground color="bg-primary/5" position="right-0 top-1/4" size="w-[800px] h-[800px]" />

          <div className="container mx-auto px-4 relative z-10">
            <RevealOnScroll className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-4xl font-bold text-gray-900 font-heading mb-6">Our Core Values</h2>
              <p className="text-gray-600 text-xl">
                We are dedicated to nurturing students artistically, academically, and socially through three pillars of excellence.
              </p>
            </RevealOnScroll>
            
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:mt-0"><ValueCard icon={<HeartIcon />} title="Artistic Growth" delay={0}>
                Intensive training in Dance and Visual Arts that challenges students to express themselves and master their craft.
              </ValueCard></div>
              <div className="md:mt-12"><ValueCard icon={<BookIcon />} title="Academic Excellence" delay={200}>
                A rigorous curriculum designed to prepare students for top-tier high schools and future collegiate success.
              </ValueCard></div>
              <div className="md:mt-0"><ValueCard icon={<HandshakeIcon />} title="Community Support" delay={400}>
                A close-knit environment where families, staff, and partners work together to support every child's journey.
              </ValueCard></div>
            </div>
          </div>
        </section>

        {/* Spotlights - Collage Layout - Warm Background */}
        <section className="py-32 px-4 bg-secondary/50 relative overflow-hidden">
          <BlobBackground color="bg-accent/20" position="left-1/4 bottom-0" size="w-[600px] h-[600px]" />
          
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <RevealOnScroll>
                <h2 className="text-5xl font-bold text-gray-900 font-heading">Student Spotlights</h2>
                <p className="text-gray-600 mt-4 text-xl">See what our community is achieving.</p>
              </RevealOnScroll>
              <RevealOnScroll delay={200}>
                <button className="px-8 py-4 rounded-full border-2 border-primary/20 font-bold text-primary hover:bg-primary hover:text-white transition-all shadow-sm bg-white">
                  View Gallery
                </button>
              </RevealOnScroll>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[300px]">
              {/* Large Feature - Spans 2 rows */}
              <div className="md:col-span-7 md:row-span-2 relative group">
                <RevealOnScroll className="h-full">
                  <div className="h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl relative border-4 border-white">
                    <img src="https://images.unsplash.com/photo-1547152345-0d045d626359?q=80&w=2070&auto=format&fit=crop" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Dance" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-90" />
                    <div className="absolute bottom-0 left-0 p-10 text-white w-full">
                      <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                        <span className="bg-accent text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase mb-4 inline-block tracking-wide shadow-md">Dance Major</span>
                        <h3 className="text-4xl font-bold font-heading mb-2">Winter Showcase 2024</h3>
                        <p className="text-white/90 text-lg line-clamp-2 max-w-lg">Our students performed original choreography to a sold-out audience, demonstrating months of dedication.</p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>

              {/* Top Right - Art */}
              <div className="md:col-span-5 md:row-span-1 relative group">
                <RevealOnScroll delay={200} className="h-full">
                  <div className="h-full w-full rounded-[2.5rem] overflow-hidden shadow-xl relative border-4 border-white">
                    <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Art" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 p-8 text-white">
                      <span className="bg-white text-primary px-3 py-1 rounded-full text-xs font-bold uppercase mb-2 inline-block">Art Dept</span>
                      <h3 className="text-2xl font-bold font-heading">Visual Arts Exhibit</h3>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>

              {/* Bottom Right - Community */}
              <div className="md:col-span-5 md:row-span-1 relative group">
                <RevealOnScroll delay={300} className="h-full">
                  <div className="h-full w-full bg-primary rounded-[2.5rem] p-8 shadow-xl border-4 border-white flex flex-col justify-center relative overflow-hidden group-hover:bg-primary/90 transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                    <h3 className="text-2xl font-bold font-heading text-white mb-2 relative z-10">Faculty Highlight</h3>
                    <p className="text-white/80 mb-6 relative z-10">Meet the dedicated educators guiding our students toward excellence.</p>
                    <a href="/more-about-bda" className="inline-flex items-center text-accent font-bold hover:text-white transition-colors relative z-10">
                      Meet the Team <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* News & Events (Clean List) - White Background */}
        <section className="py-24 relative overflow-hidden bg-white">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#af0602_1px,transparent_1px)] [background-size:20px_20px]" />
          
          <div className="container mx-auto px-4 relative z-10 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-20">
              {/* News */}
              <RevealOnScroll>
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-3xl font-bold text-gray-900 font-heading">Latest News</h3>
                  <a href="/news" className="text-sm font-bold text-primary hover:text-primary/80 uppercase tracking-widest">View All</a>
                </div>
                <div className="space-y-6">
                  {[
                    { title: "2024 Dance Reel Released", date: "Dec 15", category: "Arts" },
                    { title: "Middle School Application Open", date: "Dec 10", category: "Admissions" },
                    { title: "Winter Enrichment Programs", date: "Dec 05", category: "Community" },
                  ].map((item, i) => (
                    <div key={i} className="group flex gap-6 items-center p-6 rounded-[2rem] bg-[#fffdf7] shadow-sm border border-gray-100 hover:shadow-xl hover:border-accent transition-all cursor-pointer transform hover:-translate-y-1">
                      <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-primary/10 flex flex-col items-center justify-center text-primary font-bold border border-primary/10 group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="text-2xl">{item.date.split(' ')[1]}</span>
                        <span className="text-xs uppercase opacity-80">{item.date.split(' ')[0]}</span>
                      </div>
                      <div>
                        <span className="inline-block px-2 py-0.5 rounded-md bg-accent/20 text-primary-dark text-[10px] font-bold uppercase tracking-wide mb-2">{item.category}</span>
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{item.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>

              {/* Events */}
              <RevealOnScroll delay={200}>
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-3xl font-bold text-gray-900 font-heading">Upcoming Events</h3>
                  <a href="/calendar-news" className="text-sm font-bold text-primary hover:text-primary/80 uppercase tracking-widest">Full Calendar</a>
                </div>
                <div className="bg-[#fffdf7] rounded-[2.5rem] p-8 shadow-lg border-2 border-secondary relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
                  
                  <div className="space-y-4 relative z-10">
                     {[
                      { day: "22", month: "DEC", event: "Winter Arts Showcase", time: "5:00 PM", loc: "Auditorium" },
                      { day: "08", month: "JAN", event: "SLT & PAC Meeting", time: "4:00 PM", loc: "Room 101" },
                      { day: "15", month: "JAN", event: "Dance Major Auditions", time: "3:30 PM", loc: "Studio A" },
                    ].map((event, i) => (
                      <div key={i} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white transition-colors cursor-pointer group border border-transparent hover:border-gray-100 hover:shadow-sm">
                         <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform flex-shrink-0 shadow-md border-2 border-white">
                           {i + 1}
                         </div>
                         <div className="flex-1">
                           <h4 className="font-bold text-gray-900 text-lg group-hover:text-primary transition-colors">{event.event}</h4>
                           <div className="flex gap-3 text-sm text-gray-500 mt-1">
                             <span>{event.month} {event.day}</span>
                             <span>•</span>
                             <span>{event.time}</span>
                           </div>
                         </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-8 py-4 rounded-2xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors shadow-lg border-2 border-white/20">
                    View Full Calendar
                  </button>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <RevealOnScroll className="relative overflow-hidden rounded-[3.5rem] bg-primary px-6 py-28 text-center text-white shadow-2xl border-4 border-white">
              {/* Abstract Circles Background */}
              <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
              
              <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                <h2 className="text-6xl md:text-8xl font-bold font-heading tracking-tight">You Belong Here.</h2>
                <p className="text-2xl opacity-90 font-medium max-w-2xl mx-auto leading-relaxed text-secondary">
                  Join a community where talent is nurtured, and futures are bright. Experience the Bronx Dance Academy difference today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                  <button className="w-full sm:w-auto rounded-full bg-accent px-10 py-5 text-lg font-bold text-primary shadow-xl hover:bg-white transition-all hover:scale-105 active:scale-95">
                    Apply Now
                  </button>
                  <button className="w-full sm:w-auto rounded-full border-2 border-white px-10 py-5 text-lg font-bold text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
                    Contact Admissions
                  </button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
