import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1917] text-stone-200 border-t border-stone-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/assets/images/ps308bda logo.webp"
                alt="Bronx Dance Academy Logo"
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-stone-400 max-w-xs">
              Empowering students to excel artistically and academically through the transformative power of the performing arts.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" label="Facebook">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </SocialLink>
              <SocialLink href="#" label="Instagram">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </SocialLink>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Explore</h3>
            <ul className="space-y-4">
              <FooterLink href="/more-about-bda">About Us</FooterLink>
              <FooterLink href="/dance-majors">Dance Majors</FooterLink>
              <FooterLink href="/art-majors">Visual Arts</FooterLink>
              <FooterLink href="/learning">Academics</FooterLink>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Community</h3>
            <ul className="space-y-4">
              <FooterLink href="/doe-forms-links">Parent Portal</FooterLink>
              <FooterLink href="/calendar-news">School Calendar</FooterLink>
              <FooterLink href="/mmcc">After School Program</FooterLink>
              <FooterLink href="/slt-and-pac">SLT & PAC</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Visit Us</h3>
            <ul className="space-y-4 text-sm text-stone-400">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>3617 Bainbridge Avenue<br/>Bronx, NY 10467</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>718-515-0410</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>admissions@ms308bda.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            &copy; {currentYear} Bronx Dance Academy. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-stone-500 font-medium">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>

        {/* NexSav Credit */}
        <div className="mt-4 pt-4 border-t border-white/5">
          <a
            href="https://nexsav.net"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-white/60 hover:text-white/90 transition-all duration-300 group"
          >
            <img
              src="https://nexsav.net/static/media/logo.7ef8f9a8ca3ec946bd31.png"
              alt="NexSav Logo"
              className="h-5 opacity-60 group-hover:opacity-90 transition-opacity duration-300"
            />
            <span className="text-xs font-medium tracking-wide">
              Website designed & developed by <span className="font-semibold">NexSav</span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      className="h-10 w-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-primary hover:text-white transition-all duration-300"
      aria-label={label}
    >
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </a>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="text-stone-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transform duration-200">
        {children}
      </Link>
    </li>
  );
}
