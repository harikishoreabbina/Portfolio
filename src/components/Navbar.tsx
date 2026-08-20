"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "/#about", id: "about" },
  { name: "Experience", href: "/#experience", id: "experience" },
  { name: "Projects", href: "/#projects", id: "projects" },
  { name: "Skills", href: "/#skills", id: "skills" },
  { name: "Education", href: "/#education", id: "education" },
  { name: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });

      observer.disconnect();
    };
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 lg:px-20">

        {/* Name */}
        <a
          href="/"
          className="text-sm font-semibold tracking-[0.18em] text-white"
        >
          VYKUNTA KISHORE
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 text-sm md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative transition duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-200"
                }`}
              >
                {link.name}

                {/* Active underline */}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-white transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="flex items-center justify-center text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-base transition duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-3">

                    {/* Active mobile indicator */}
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition duration-300 ${
                        isActive
                          ? "bg-white"
                          : "bg-transparent"
                      }`}
                    />

                    {link.name}
                  </span>
                </a>
              );
            })}

          </div>
        </div>
      )}
    </nav>
  );
}