import React from "react";
import { TESTIMONIALS } from "@/lib/data/landing";
import { Quote } from "lucide-react";

export function TestimonialSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white relative">
      <div className="section-padding max-w-[1400px] mx-auto">
        
        {/* Creative Blue Background Container for Masonry */}
        <div className="bg-[#00008B] rounded-[40px] lg:rounded-[60px] p-8 lg:p-20 relative overflow-hidden shadow-2xl">
          
          {/* Subtle Decorative Gradient */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-white/[0.05] to-transparent rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-center max-w-[700px] mx-auto mb-16 lg:mb-20">
              <span className="text-[#F5A623] font-bold text-sm tracking-[0.15em] uppercase block mb-4">
                Client Success Stories
              </span>
              <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                What Founders Say About SwiftBuild
              </h2>
            </div>

            {/* Masonry Grid Layout */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="break-inside-avoid bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/10"
                >
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#F5A623] fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-[#00008B]/10 mb-4" fill="currentColor" />
                  
                  <p className="text-[16px] lg:text-[17px] text-[#111A24] leading-[1.6] font-medium mb-8">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-[#00008B]/[0.05] flex items-center justify-center text-[#00008B] font-bold text-sm">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#111A24]">{testimonial.author}</h4>
                      <p className="text-[13px] text-gray-500 font-medium">
                        {testimonial.role}, <span className="text-[#00008B] font-semibold">{testimonial.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
