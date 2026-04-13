import React from "react";

import { SERVICE_CARDS, SERVICE_SECTION_CONTENT } from "@/lib/data/services";

export function ServiceSection() {
  return (
    <section className="relative bg-[#00008B] py-24 lg:py-32 overflow-hidden rounded-tr-5xl rounded-t-[60px]">
      <div className="relative z-10 section-padding mx-auto">

        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-[32px] sm:text-[40px] lg:text-6xl font-bold text-white mb-5 leading-[1.15] tracking-tight">
            {SERVICE_SECTION_CONTENT.heading}
          </h2>
          <p className="text-white/80 font-semibold sm:text-[15px] lg:text-lg leading-[1.6] max-w-[640px] mx-auto">
            {SERVICE_SECTION_CONTENT.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 max-w-[1400px] mx-auto mt-28">
          {SERVICE_CARDS.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-7 flex flex-col justify-between min-h-[200px] lg:min-h-[280px] shadow-sm "
            >
              <div className="w-[50px] h-[50px] rounded-xl bg-[#00008B] flex items-center justify-center text-white mb-auto shadow-sm">
                <card.icon className="w-[25px] h-[25px]" strokeWidth={1.75} />
              </div>

              <p className="text-xl sm:text-[17px] lg:text-2xl text-[#111111] leading-[1.4] mt-8 font-semibold">
                {card.text}
                {card.boldText && <span className="font-bold">{card.boldText}</span>}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
