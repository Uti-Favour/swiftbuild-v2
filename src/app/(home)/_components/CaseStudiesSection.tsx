"use client";

import React, { useState } from "react";
import { CASE_STUDIES } from "@/lib/data/landing";

export function CaseStudiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? CASE_STUDIES.length - 1 : prev - 1));
  };

  return (
    <section id="portfolio" className="bg-[#101B24] py-24 lg:py-32">
      <div className="section-padding max-w-[1240px] mx-auto">
        <h2 className="text-center text-[34px] sm:text-[40px] font-bold text-white mb-16 lg:mb-24 tracking-tight">
          Case Studies
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Side: Images Carousel */}
          <div className="relative aspect-[4/5] w-full max-w-[460px] mx-auto lg:mx-0 overflow-hidden shadow-sm">
             {CASE_STUDIES.map((item, index) => (
              <img
                key={item.id}
                src={item.image}
                alt={`Case Study ${item.id}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Right Side: Content Carousel */}
          <div className="flex flex-col text-left max-w-[500px] mx-auto lg:mx-0 w-full">
            
            {/* Texts container - needs relative bounded space to handle absolute stacked text swaps */}
            <div className="relative min-h-[380px] sm:min-h-[340px] w-full">
              {CASE_STUDIES.map((item, index) => (
                <div 
                  key={item.id}
                  className={`absolute top-0 left-0 w-full transition-opacity duration-400 ease-in-out flex flex-col justify-center ${
                    index === currentIndex ? "opacity-100 relative z-10" : "opacity-0 absolute -z-10 pointer-events-none"
                  }`}
                >
                  {/* Problem Block */}
                  <div className="mb-14">
                    <h3 className="text-[28px] sm:text-[34px] font-bold text-white mb-4 tracking-tight leading-tight">
                      Problem
                    </h3>
                    <p className="text-[15px] sm:text-[15px] text-white/80 leading-[1.65]">
                      {item.problem}
                    </p>
                  </div>

                  {/* Solution Block */}
                  <div>
                    <h3 className="text-[28px] sm:text-[34px] font-bold text-white mb-4 tracking-tight leading-tight">
                      Solution
                    </h3>
                    <p className="text-[15px] sm:text-[15px] text-white/80 leading-[1.65]">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Carousel Controls Wrapper */}
            <div className="mt-8 lg:mt-12 flex items-center justify-start gap-4">
              <button 
                onClick={goToPrev}
                className="w-20 h-10 flex items-center justify-center bg-transparent border border-white/30 text-white rounded-full hover:bg-white hover:text-[#101B24] transition-colors"
                aria-label="Previous case study"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button 
                onClick={goToNext}
                className="w-20 h-10 flex items-center justify-center bg-transparent border border-white/30 text-white rounded-full hover:bg-white hover:text-[#101B24] transition-colors"
                aria-label="Next case study"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
