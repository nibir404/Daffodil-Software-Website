import { motion } from "motion/react";
import { Link } from "react-router";
import svgPaths from "../../assets/svgs/svg-vrs4ws700k";
import imgImage57 from "figma:asset/90090fd64c815b759af9b862ff05a9433d159c53.png";

export function CTASection() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-white to-[#c4eeda] overflow-clip min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute h-[800px] md:h-[1000px] lg:h-[1200px] left-0 top-[calc(50%-400px)] md:top-[calc(50%-500px)] lg:top-[calc(50%-615.5px)] w-full">
        <img 
          src={imgImage57} 
          alt="" 
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        />
      </div>

      {/* Gradient Orb - Animated */}
      <motion.div 
        className="absolute flex items-center justify-center right-[-600px] md:right-[-400px] lg:right-[-200px] size-[800px] md:size-[1000px] lg:size-[1337px] top-[50px] md:top-[100px]"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="rotate-180">
          <div className="relative size-full">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2125 2125">
              <g filter="url(#filter0_f_cta_section)">
                <circle cx="1062.5" cy="1062.5" fill="#AAFDD6" r="668.5" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2125" id="filter0_f_cta_section" width="2125" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_cta_section" stdDeviation="197" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px] py-16 md:py-24 lg:py-32 w-full">
        <div className="max-w-[1200px]">
          {/* Badge */}
          <div className="bg-[rgba(245,245,247,0.1)] backdrop-blur-sm inline-flex items-center justify-center px-[12px] py-[8px] md:py-[10px] rounded-[8px] md:rounded-[10px] mb-4 md:mb-6">
            <p className="font-['Helvetica_Now_Display'] leading-normal text-[12px] md:text-[14px] text-white text-center">
              Free consultation · No obligation · Response within 24 hours
            </p>
          </div>

          {/* Heading */}
          <div className="mb-6 md:mb-9">
            <h2 className="font-['Helvetica_Now_Display'] font-medium text-[32px] md:text-[48px] lg:text-[64px] xl:text-[80px] leading-[1.2] text-white mb-0">
              Ready to build a secure, scalable 
            </h2>
            <h2 className="font-['Helvetica_Now_Display'] font-medium text-[32px] md:text-[48px] lg:text-[64px] xl:text-[80px] leading-[1.2] overflow-visible">
              <span className="text-white">software </span>
              <span className="bg-clip-text bg-gradient-to-r from-[#567dff] from-[39.904%] to-[#2cf698] to-[85.096%] text-transparent inline-block pb-1">
                system?
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="font-['Inter'] font-normal leading-[26px] md:leading-[30px] text-[14px] md:text-[16px] text-white max-w-[750px] mb-8 md:mb-10">
            Tell us about your challenge. Our experts will help you evaluate the right approach clearly, honestly, and without pressure. Cause we are trusted software development company in Bangladesh with 20+ years of excellence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link to="/contact" className="inline-block w-full sm:w-auto">
              <div className="bg-[#01e067] flex gap-[10px] items-center justify-center sm:justify-start overflow-hidden pl-[24px] pr-[8px] py-[6px] rounded-[80px] relative h-[48px] md:h-[52px] group hover:bg-[#00c757] transition-colors">
                {/* Light flare effect */}
                <div className="absolute flex h-[130.588px] items-center justify-center left-[calc(50%-105.63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px] group-hover:animate-[flare_0.6s_ease-in-out]">
                  <div className="rotate-[-46.28deg]">
                    <div className="h-[30px] w-[152px]">
                      <div className="absolute inset-[-180%_-35.53%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                          <g filter="url(#filter0_f_cta_btn)" style={{ mixBlendMode: "plus-lighter" }}>
                            <ellipse cx="130" cy="69" fill="white" fillOpacity="0.8" rx="76" ry="15" />
                          </g>
                          <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_cta_btn" width="260" x="0" y="0">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                              <feGaussianBlur result="effect1_foregroundBlur_cta_btn" stdDeviation="27" />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['Helvetica_Now_Display'] font-medium leading-normal relative text-[#111] text-[14px] md:text-[16px] z-10 flex-1 text-center sm:text-left">
                  Schedule a Meeting
                </p>
                <div className="bg-[#111] rounded-full shrink-0 size-[32px] md:size-[36px] flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-90 group-hover:ring-2 group-hover:ring-white">
                  <svg className="size-[14px] md:size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d="M12.3321 8H3.33203" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p16251580} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link to="/solutions" className="inline-block w-full sm:w-auto">
              <div className="h-[48px] md:h-[52px] rounded-[80px] border border-white hover:bg-white group transition-all duration-300 overflow-hidden relative backdrop-blur-[10px]">
                {/* Animated light flare on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute h-full w-[100px] bg-gradient-to-r from-transparent via-white/30 to-transparent -left-[100px] group-hover:left-[100%] transition-all duration-700 ease-out blur-sm" />
                </div>

                <span className="font-['Helvetica_Now_Display'] font-medium text-sm md:text-base text-white relative z-10 flex items-center justify-center h-full group-hover:text-[#111] transition-colors px-[24px] py-[0px]">
                  Explore Solutions
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
