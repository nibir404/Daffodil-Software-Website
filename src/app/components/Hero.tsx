import { useState, useEffect } from "react";
import { Link } from "react-router";
import imgImage57 from "figma:asset/690f41dc53d69dc9dffefc0427d58458e5421f40.png";
import imgImage35 from "figma:asset/2516de018ffa3072ce276d1f94f901c9c0bcc638.png";
import imgImage36 from "figma:asset/aea28bb90ff2bde067f020cdb22dd8d1bb0111e1.png";
import imgImage37 from "figma:asset/a66a1d2c754f12d2b86b1f4f9c26f0df997d2895.png";
import imgBgGreen from "figma:asset/6f49d22267ac26245dcfe2a0eda3958e0044c383.png";
import imgBgBlue from "figma:asset/cc688a443fbd9900e1ecc08a0074ee23489cfc64.png";
import imgBgRed from "figma:asset/82d300667a30c68e36193e381300abba8a9ecae9.png";
import { Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  const backgrounds = [imgBgGreen, imgBgBlue, imgBgRed];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-clip min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center">
      {/* Animated Background Images */}
      <div className="absolute inset-0">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-linear"
            style={{ opacity: currentBg === index ? 1 : 0 }}
          >
            <img
              src={bg}
              alt="Hero background"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 xl:px-[100px] py-12 md:py-16 lg:py-20 w-full">
        <div className="max-w-[1520px] mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 md:mb-8">
            <Sparkles className="size-3 md:size-4 text-[#01e067]" />
            <p className="font-['Inter'] text-[12px] md:text-[14px] text-[#3c3c3c]">
              Leading Software Development Company in Bangladesh
            </p>
          </div>

          {/* Heading */}
          <h1 className="mb-5 md:mb-6">
            <div className="font-['Helvetica_Now_Display'] font-medium text-[32px] sm:text-[44px] md:text-[56px] lg:text-[68px] xl:text-[72px] leading-[1.1] text-[#111]">
              Enterprise-Grade Custom Software &<br />Digital Transformation Company
            </div>
            <div className="font-['Helvetica_Now_Display'] font-medium text-[32px] sm:text-[44px] md:text-[56px] lg:text-[68px] xl:text-[72px] leading-[1.1]">
              <span className="text-[#111]">Built for </span>
              <span className="text-[#2196f3] italic">Scale</span>
            </div>
          </h1>

          {/* Description */}
          <p className="font-['Inter'] text-[14px] md:text-[16px] lg:text-[18px] text-[#3c3c3c] leading-[24px] md:leading-[28px] lg:leading-[30px] mb-3 md:mb-4 max-w-[700px]">
            We help enterprises, institutions, and public sector organizations design, build, and scale secure digital systems—backed by 20+ years of delivery experience and proven execution.
          </p>

          {/* Italic Text */}
          <p className="font-['Inter'] italic text-[13px] md:text-[14px] lg:text-[16px] text-[#3c3c3c] mb-6 md:mb-8">
            Choose how you want to explore, by <span className="font-semibold">industry,</span> or <span className="font-semibold">solution.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
            <Link to="/contact" className="w-full sm:w-auto">
              <div className="bg-[#01e067] flex gap-[10px] items-center justify-center sm:justify-start overflow-hidden pl-[20px] md:pl-[24px] pr-[6px] md:pr-[8px] py-[6px] rounded-[80px] relative h-[48px] md:h-[52px] group hover:bg-[#00c757] transition-colors">
                <div className="absolute flex h-[130.588px] items-center justify-center left-[calc(50%-105.63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px] group-hover:animate-[flare_0.6s_ease-in-out]">
                  <div className="rotate-[-46.28deg]">
                    <div className="h-[30px] w-[152px]">
                      <div className="absolute inset-[-180%_-35.53%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                          <g filter="url(#filter0_f_cta)" style={{ mixBlendMode: "plus-lighter" }}>
                            <ellipse cx="130" cy="69" fill="white" fillOpacity="0.8" rx="76" ry="15" />
                          </g>
                          <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_cta" width="260" x="0" y="0">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                              <feGaussianBlur result="effect1_foregroundBlur_cta" stdDeviation="27" />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['Helvetica_Now_Display'] font-medium leading-normal relative text-[#111] text-[14px] md:text-[16px] z-10 flex-1 text-center sm:text-left">Schedule a Meeting</p>
                <div className="bg-[#111] rounded-full shrink-0 size-[32px] md:size-[36px] flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-90 group-hover:ring-2 group-hover:ring-white">
                  <svg className="size-[14px] md:size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d="M12.3321 8H3.33203" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M8.66797 12C8.66797 12 12.668 9.05407 12.668 8C12.668 6.94587 8.66797 4 8.66797 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link to="/case-studies" className="flex items-center gap-2 font-['Inter'] text-[14px] md:text-[16px] text-[#111] hover:gap-3 transition-all group">
              <span>View Case Studies</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
