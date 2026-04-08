"use client";

import React, { useState } from "react";
import { ELIGIBILITY_SLIDES } from "@/lib/data/landing";

// Icon resolution helper
function getIconForSlide(iconName: string) {
  switch (iconName) {
    case "clipboard":
      return (
        <svg className="w-8 h-8 text-white transition-opacity duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      );
    case "star":
      return (
        <svg className="w-8 h-8 text-white transition-opacity duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      );
    case "users":
    default:
      return (
        <svg className="w-8 h-8 text-white transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      );
  }
}

export function EligibilitySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = ELIGIBILITY_SLIDES[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ELIGIBILITY_SLIDES.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? ELIGIBILITY_SLIDES.length - 1 : prev - 1));
  };

  return (
    <section className="bg-background py-24 lg:py-32 relative">
      
      {/* Desktop Navigation Arrows (Hidden on Mobile) */}
      <button 
        onClick={goToPrev}
        className="hidden lg:flex absolute left-8 lg:left-24 top-1/2 -translate-y-1/2 w-14 h-14 items-center justify-center bg-white border border-gray-200 text-[#111A24] rounded-full shadow-sm hover:shadow-md z-20 transition-all opacity-80 hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        onClick={goToNext}
        className="hidden lg:flex absolute right-8 lg:right-24 top-1/2 -translate-y-1/2 w-14 h-14 items-center justify-center bg-white border border-gray-200 text-[#111A24] rounded-full shadow-sm hover:shadow-md z-20 transition-all opacity-80 hover:opacity-100"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Main Container */}
      <div className="section-padding max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* Left Side: Images Carousel */}
        <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto lg:mx-0 overflow-hidden rounded-md shadow-sm">
          {ELIGIBILITY_SLIDES.map((item, index) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.heading}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Right Side: Content Carousel */}
        <div className="flex flex-col items-start text-left max-w-[500px] mx-auto lg:mx-0 w-full">
          
          {/* Dynamic Icon Header Block */}
          <div className="w-[76px] h-[76px] rounded-full bg-[#111A24] shadow flex items-center justify-center mb-10 overflow-hidden relative">
            {ELIGIBILITY_SLIDES.map((item, index) => (
              <div 
                key={item.id}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 -z-10"
                }`}
              >
                {getIconForSlide(item.icon)}
              </div>
            ))}
          </div>

          {/* Texts container */}
          <div className="relative min-h-[190px] w-full">
            {ELIGIBILITY_SLIDES.map((item, index) => (
              <div 
                key={item.id}
                className={`absolute top-0 left-0 w-full transition-opacity duration-400 ease-in-out ${
                  index === currentIndex ? "opacity-100 relative z-10" : "opacity-0 absolute -z-10 pointer-events-none"
                }`}
              >
                <h2 className="text-[34px] sm:text-[38px] font-bold text-[var(--foreground)] mb-5 tracking-tight leading-[1.1]">
                  {item.heading}
                </h2>
                
                <p className="text-[15px] sm:text-[16px] text-muted-foreground leading-[1.65]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-8 px-9 py-[14px] bg-[#111A24] text-white rounded-full font-semibold text-sm hover:bg-[#111A24]/90 transition-colors shadow-sm">
            Learn More
          </button>

          {/* Desktop Single-row simple specific Carousel Dots (Hidden on mobile because it's bundled in the next section) */}
          <div className="mt-14 hidden lg:flex items-center gap-3">
            {ELIGIBILITY_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-[11px] h-[11px] rounded-full border-[2px] border-[#111A24] transition-all ${
                  index === currentIndex
                    ? "bg-[#111A24]"
                    : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Mobile Optimized Navigation Block (Bottom) */}
      <div className="lg:hidden mt-20 flex flex-col items-center justify-center gap-6 section-padding">
        <div className="flex items-center gap-8">
           <button 
            onClick={goToPrev}
            className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 text-[#111A24] rounded-full shadow-sm hover:bg-gray-50 transition-colors"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-3">
            {ELIGIBILITY_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-[11px] h-[11px] rounded-full border-[2px] border-[#111A24] transition-all ${
                  index === currentIndex
                    ? "bg-[#111A24]"
                    : "bg-transparent"
                }`}
              />
            ))}
          </div>

          <button 
            onClick={goToNext}
            className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 text-[#111A24] rounded-full shadow-sm hover:bg-gray-50 transition-colors"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

    </section>
  );
}
