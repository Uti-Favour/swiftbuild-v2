import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[750px] lg:h-screen flex items-center bg-background overflow-hidden pt-28 pb-16">
      <div className="section-padding w-full max-w-[1650px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Side: Text Content */}
        <div className="max-w-8xl z-10">
          <h1 className="text-[44px] text-[#00008B] sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
           Automate. Scale. Grow 10x Faster.
          </h1>

          <p className="text-[#4B5563] text-base font-semibold lg:text-lg mb-10 leading-[1.7] max-w-2xl">
           SwiftBuild helps startup founders and growing businesses eliminate manual work with powerful AI automation, build reliable scalable software, and launch high-converting websites that actually drive revenue.
          </p>

          <a
            href="#started"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#00008B] text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm shadow-xl"
          >
           Book Your Free Strategy Call
            <ArrowRight className="ml-2 w-4 h-4" strokeWidth={2.5} />
          </a>
        </div>

        {/* Right Side: Image and Decorations */}
        <div className="relative z-10 flex justify-center lg:justify-end w-full lg:pr-8">
          <div className="relative w-[400px] sm:w-[460px] lg:w-[550px]">
                

            {/* The Main Image */}
            <img
              src="/images/hero-section.jpg"
              alt="Professional with laptop"
              className="object-cover w-full h-[480px] sm:h-[560px] shadow-2xl relative z-10 rounded-4xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
