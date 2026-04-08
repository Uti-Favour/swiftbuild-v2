export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[750px] flex items-center bg-background overflow-hidden pt-28 pb-16">
      <div className="section-padding w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Side: Text Content */}
        <div className="max-w-[560px] z-10">
          <h1 className="text-[44px] sm:text-5xl lg:text-[64px] font-bold text-primary leading-[1.1] mb-6 tracking-tight">
            Get Professional Website With SwiftBuild
          </h1>

          <p className="text-[#4B5563] text-base lg:text-lg mb-10 leading-[1.7] max-w-[480px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <a
            href="#started"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm shadow-xl"
          >
            Get Started
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Right Side: Image and Decorations */}
        <div className="relative z-10 flex justify-center lg:justify-end w-full lg:pr-8">
          <div className="relative w-[380px] sm:w-[460px] lg:w-[500px]">
             
            {/* The bold green shape behind the image */}
            <div 
              className="absolute -top-6 -right-6 lg:-top-8 lg:-right-8 w-3/4 h-3/4 bg-accent -z-10 rounded-tr-[80px]"
              style={{ borderBottomLeftRadius: '60px' }}
            ></div>
            
            <div 
              className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 w-3/4 h-3/4 bg-accent -z-10 rounded-bl-[80px]"
              style={{ borderTopRightRadius: '60px' }}
            ></div>

            {/* The Main Image */}
            <img
              src="https://placehold.co/500x560/1A1A1A/FFFFFF?text=Professional"
              alt="Professional with laptop"
              className="object-cover w-full h-[480px] sm:h-[560px] shadow-2xl relative z-10 rounded-tl-[80px] rounded-br-[80px] rounded-tr-[24px] rounded-bl-[24px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
