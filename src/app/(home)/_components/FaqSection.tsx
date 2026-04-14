"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/data/landing";
import { Minus, Plus } from "lucide-react";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  function toggleFaq(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="section-padding max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div 
                key={item.id} 
                className={`border-b transition-colors duration-300 ${isOpen ? 'border-[#00008B]' : 'border-gray-200'}`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-[16px] sm:text-[18px] transition-colors duration-200 ${isOpen ? 'text-[#00008B]' : 'text-gray-700 group-hover:text-[#00008B]'}`}>
                    {item.question}
                  </span>
                  
                  {/* Plus/Minus icon */}
                  <div className="shrink-0 ml-4 flex items-center justify-center">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-[#00008B]" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400 group-hover:text-[#00008B] transition-colors duration-200" strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-6 pt-0 pr-12">
                      <p className="text-[15px] text-gray-600 leading-[1.8]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
