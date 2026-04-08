import React from "react";

const CARDS = [
  {
    icon: (
      <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    text: <>Turning an idea into a <span className="font-bold">clear<br/>problem and solution</span></>
  },
  {
    icon: (
      <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-5 5-2-2" />
      </svg>
    ),
    text: <>Validating whether real customers<br/>need what you are building</>
  },
  {
    icon: (
      <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    text: <>Designing or improving an <span className="font-bold">MVP<br/>or early product</span></>
  },
  {
    icon: (
      <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    text: <>Building technical and <span className="font-bold"><br/>non-technical skills</span></>
  },
  {
    icon: (
      <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    text: <>Understanding essential <span className="font-bold"><br/>business metrics and growth</span></>
  },
  {
    icon: (
      <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    text: <>Positioning your brand for <span className="font-bold"><br/>future investment</span></>
  }
];

export function FeaturesSection() {
  return (
    <section className="relative bg-[#152A20] py-24 lg:py-32 overflow-hidden">
      
      {/* Decorative corner green blobs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#2CD66D] rounded-full -translate-x-[40%] -translate-y-[40%]"></div>
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#2CD66D] rounded-full opacity-90 blur-[1px]"></div>

      <div className="relative z-10 section-padding max-w-[1440px] mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-bold text-white mb-5 leading-[1.15] tracking-tight">
            Move From Idea to a Real,<br />Working Business
          </h2>
          <p className="text-white/80 text-[14px] sm:text-[15px] leading-[1.6] max-w-[640px] mx-auto">
            IDICE Startup Bridge – Founders Lab is designed to support founders through the <span className="font-bold text-white">early journey<br className="hidden sm:block" />of building a business</span>, including:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1240px] mx-auto">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 flex flex-col justify-between min-h-[200px] lg:min-h-[220px] shadow-sm"
            >
              <div className="w-[44px] h-[44px] rounded-xl bg-[#152A20] flex items-center justify-center text-white mb-auto shadow-sm">
                {card.icon}
              </div>
              <p className="text-[17px] text-[#111111] leading-[1.4] mt-8">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
