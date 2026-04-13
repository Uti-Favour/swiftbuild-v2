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
                className={`border rounded-lg overflow-hidden transition-all duration-300 ${isOpen ? 'border-border bg-card shadow-sm' : 'border-transparent bg-muted/30'}`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-foreground text-[15px]">
                    {item.question}
                  </span>
                  
                  {/* Plus/Minus icon */}
                  <div className="shrink-0 ml-4 flex items-center justify-center">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-muted-foreground" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-5 h-5 text-accent" strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed">
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
