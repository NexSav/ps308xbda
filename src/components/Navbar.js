"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { name: "About", href: "/more-about-bda" },
  { 
    name: "Majors", 
    href: "#",
    dropdown: [
      { name: "Dance Majors", href: "/dance-majors" },
      { name: "Art Majors", href: "/art-majors" },
    ]
  },
  { 
    name: "Parents", 
    href: "#",
    dropdown: [
      { name: "More About BDA", href: "/more-about-bda" },
      { name: "Learning", href: "/learning" },
      { name: "Attendance", href: "/attendance" },
      { name: "DOE Forms & Links", href: "/doe-forms-links" },
      { name: "SLT & Title I PAC", href: "/slt-title-i-pac" },
      { name: "Transportation", href: "/transportation" },
      { name: "Phone-Free with YONDR", href: "/phone-free-yondr" },
    ]
  },
  { name: "MMCC", href: "/mmcc" },
  { name: "Calendar", href: "/calendar-news" },
];

const ChevronDownIcon = ({ className = "" }) => (
  <svg className={`ml-1 h-4 w-4 transition-transform ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (name) => {
    setOpenMobileDropdowns(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-6xl">
        <nav
          className={`relative rounded-[2rem] transition-all duration-500 ease-in-out ${
            isScrolled || mobileMenuOpen
              ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 py-3 px-6"
              : "bg-white/70 backdrop-blur-md py-4 px-8"
          }`}
          aria-label="Primary"
        >
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <Link href="/" className="group flex items-center gap-3">
                <img
                  src="/assets/images/ps308bda logo.webp"
                  alt="Bronx Dance Academy Logo"
                  className="h-12 w-auto group-hover:scale-105 transition-transform"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-full hover:bg-gray-100 hover:text-primary transition-all duration-200"
                  >
                    {link.name}
                    {link.dropdown && <ChevronDownIcon className="group-hover:rotate-180" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 ${activeDropdown === link.name ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-w-[220px] p-2">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-xl transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA & Mobile */}
            <div className="flex items-center gap-3">
              <Link
                href="/apply-now"
                className="hidden md:inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Apply Now
              </Link>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative z-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <div className={`md:hidden absolute top-full left-0 right-0 mt-2 p-4 transition-all duration-300 transform origin-top ${mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
            <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="overflow-hidden">
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(link.name)}
                        className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                      >
                        {link.name}
                        <ChevronDownIcon className={openMobileDropdowns[link.name] ? 'rotate-180' : ''} />
                      </button>
                      <div className={`space-y-1 pl-4 overflow-hidden transition-all duration-300 ${openMobileDropdowns[link.name] ? 'max-h-[500px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-100">
                <Link
                  href="/apply-now"
                  className="flex items-center justify-center w-full rounded-xl bg-primary px-6 py-3 text-base font-bold text-white shadow-lg hover:bg-primary/90 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
