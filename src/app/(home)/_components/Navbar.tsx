"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/data/landing";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-4 border-b border-gray-100"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-black tracking-tighter text-[#00008B]">
            SwiftBuild<span className="text-[#00008B]">.</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[15px] font-semibold text-[#111A24]/70 hover:text-[#111A24] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center px-6 py-[10px] rounded-full bg-[#00008B] text-white text-[14px] font-bold shadow-md hover:shadow-lg hover:bg-[#111A24]/90 transition-all"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 text-[#111A24] focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-center relative">
              <span
                className={`w-full h-[2.5px] bg-current rounded-full transition-all duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-[9px]" : ""
                }`}
              />
              <span
                className={`w-full h-[2.5px] bg-current rounded-full transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-full h-[2.5px] bg-current rounded-full transition-all duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-28 pb-12 px-8">
          
          <ul className="flex flex-col gap-8">
            {NAV_LINKS.map((link, index) => (
              <li
                key={link.label}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`transform transition-all duration-500 ${
                  isOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[32px] font-bold text-[#111A24] tracking-tight hover:text-[#13C55E] transition-colors inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div 
            style={{ transitionDelay: `${NAV_LINKS.length * 100}ms` }}
            className={`mt-auto transform transition-all duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full px-8 py-4 rounded-full bg-[#111A24] text-white text-[16px] font-bold shadow-md hover:shadow-lg transition-all"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
