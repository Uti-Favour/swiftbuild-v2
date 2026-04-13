"use client";

import React, { useState } from "react";
import { ELIGIBILITY_SLIDES } from "@/lib/data/landing";
import { ChevronLeft, ChevronRight, Sparkles, Truck, Building, HelpCircle } from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  sparkles: Sparkles,
  truck: Truck,
  building: Building,
};

// Icon resolution helper
function getIconForSlide(iconName: string) {
  const IconComponent = ICON_MAP[iconName] || HelpCircle;
  return <IconComponent className="w-8 h-8 text-white transition-opacity duration-300" strokeWidth={2} />;
}

export function CaseSturdySection() {
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
        <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
      </button>

      <button 
        onClick={goToNext}
        className="hidden lg:flex absolute right-8 lg:right-24 top-1/2 -translate-y-1/2 w-14 h-14 items-center justify-center bg-white border border-gray-200 text-[#111A24] rounded-full shadow-sm hover:shadow-md z-20 transition-all opacity-80 hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
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
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
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
            <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
          </button>
        </div>
      </div>

    </section>
  );
}
