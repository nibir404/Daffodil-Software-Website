import imgDeshiJamar from "figma:asset/871c154f69889e15b43fb93c8070b6d9a576ac9c.png";
import imgEastCoast from "figma:asset/a5c2b13c70fd5d181d101755999a189183a22bb4.png";
import imgGmeGroup from "figma:asset/e19895d50fa7021662329baf515f32168351767e.png";
import imgKurmitola from "figma:asset/5a953beda881a4340ca9a7d70e4dc6954c4db25b.png";
import imgComilla from "figma:asset/65858cb6ae73a46e49bd05c666de86628d4b0d50.png";
import imgDaffodilComputers from "figma:asset/c21810431d01748d0c7cc59913c98bd2b59ba95e.png";
import imgHokseed from "figma:asset/edadc830852b6f7bb1a0533cb9600a6f136c5e81.png";
import imgCardioCare from "figma:asset/68c265633cca5a94c6ee7f27899077a253634d30.png";
import imgClutchLogo from "figma:asset/817a4a0dad7860103b5200838f5c6dc52c183035.png";
import imgTrustpilotLogo from "figma:asset/3ba19b729d9428581e3257de716b96ef3f93fa30.png";
import imgGoodFirmsLogo from "figma:asset/3dbd286740ef3874450b155968b62276c6e5692b.png";
import { motion, useScroll, useTransform } from "motion/react";

export function TrustSection() {
  const clientLogos = [
    imgDeshiJamar,
    imgEastCoast,
    imgGmeGroup,
    imgKurmitola,
    imgComilla,
    imgDaffodilComputers,
    imgHokseed,
    imgCardioCare
  ];

  // Multiply logos to fill the space better
  const multipliedLogos = [...clientLogos, ...clientLogos, ...clientLogos];
  
  // Text color scroll animation - using viewport scroll
  const { scrollYProgress: textProgress } = useScroll();
  
  // Transform scroll progress to color values based on viewport position
  // Start: rgb(107, 107, 107) - #6b6b6b
  // End: rgb(17, 17, 17) - #111
  const textColor = useTransform(
    textProgress,
    [0.15, 0.35],
    ["rgb(107, 107, 107)", "rgb(17, 17, 17)"]
  );

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 relative" style={{ position: 'relative' }}>
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px] relative">{/* Trust Badges */}
        <div className="text-center mb-10 md:mb-12">
          <p className="font-['Inter'] text-[30px] text-[#3c3c3c] leading-[40px]">
            Trusted by <span className="font-semibold text-[#111]">100+</span> organizations across{" "}
            <span className="font-semibold text-[#111]">Bangladesh</span>,{" "}
            <span className="font-semibold text-[#111]">USA</span>,{" "}
            <span className="font-semibold text-[#111]">UAE</span>, and{" "}
            <span className="font-semibold text-[#111]">Europe</span> for
          </p>
          <p className="font-['Inter'] text-[30px] text-[#3c3c3c] leading-[40px]">
            enterprise software development, ERP implementation, and long-term system support.
          </p>
        </div>

        {/* Client Logos - Scrolling */}
        <div className="border-t border-b border-[rgba(0,0,0,0.1)] py-8 md:py-10 lg:py-12 mb-12 md:mb-14 lg:mb-16 overflow-hidden">
          <style>
            {`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-scroll {
                animation: scroll 40s linear infinite;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}
          </style>
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {multipliedLogos.map((logo, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 h-[50px] md:h-[60px] lg:h-[80px] w-[120px] md:w-[150px] lg:w-[180px] flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 mx-4 md:mx-6 lg:mx-8">
                <img 
                  src={logo} 
                  alt={`Client ${index + 1}`}
                  className="h-full w-auto object-contain max-w-[90px] md:max-w-[110px] lg:max-w-[140px]"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {multipliedLogos.map((logo, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 h-[50px] md:h-[60px] lg:h-[80px] w-[120px] md:w-[150px] lg:w-[180px] flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 mx-4 md:mx-6 lg:mx-8">
                <img 
                  src={logo} 
                  alt={`Client ${index + 1}`}
                  className="h-full w-auto object-contain max-w-[90px] md:max-w-[110px] lg:max-w-[140px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div>
          <motion.div 
            className="text-center mb-[120px]" 
            style={{
              color: textColor
            }}
          >
            <p className="font-['Inter'] text-[40px] leading-[52px] mx-auto m-[0px]">
              We engineer <span className="font-semibold text-[#111]">robust digital solutions</span> that empower businesses
            </p>
            <motion.p 
              className="font-['Inter'] text-[40px] leading-[52px] mx-auto m-[0px]"
              style={{
                color: textColor
              }}
            >
              to thrive in the modern era, leveraging cutting-edge technology
            </motion.p>
            <motion.p 
              className="font-['Inter'] text-[40px] leading-[52px] mx-auto"
              style={{
                color: textColor
              }}
            >
              to drive tangible results.
            </motion.p>
          </motion.div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-14 lg:mb-16">
          <div className="text-center">
            <div className="font-['Helvetica_Now_Display'] font-medium text-[40px] md:text-[52px] lg:text-[64px] text-[#111] mb-2 leading-none">20+</div>
            <div className="font-['Inter'] text-[12px] md:text-[13px] lg:text-[14px] text-[#6b6b6b] leading-[18px] md:leading-[20px] lg:leading-[22px]">
              years of software<br />engineering experience
            </div>
          </div>
          <div className="text-center">
            <div className="font-['Helvetica_Now_Display'] font-medium text-[40px] md:text-[52px] lg:text-[64px] text-[#111] mb-2 leading-none">500+</div>
            <div className="font-['Inter'] text-[12px] md:text-[13px] lg:text-[14px] text-[#6b6b6b] leading-[18px] md:leading-[20px] lg:leading-[22px]">
              projects delivered<br />successfully
            </div>
          </div>
          <div className="text-center">
            <div className="font-['Helvetica_Now_Display'] font-medium text-[40px] md:text-[52px] lg:text-[64px] text-[#111] mb-2 leading-none">100+</div>
            <div className="font-['Inter'] text-[12px] md:text-[13px] lg:text-[14px] text-[#6b6b6b] leading-[18px] md:leading-[20px] lg:leading-[22px]">
              active clients<br />across industries
            </div>
          </div>
          <div className="text-center">
            <div className="font-['Helvetica_Now_Display'] font-medium text-[40px] md:text-[52px] lg:text-[64px] text-[#111] mb-2 leading-none">200+</div>
            <div className="font-['Inter'] text-[12px] md:text-[13px] lg:text-[14px] text-[#6b6b6b] leading-[18px] md:leading-[20px] lg:leading-[22px]">
              Potential<br />Engineers
            </div>
          </div>
        </div>

        {/* Review Platforms */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          {/* Clutch */}
          <div className="flex flex-col items-center bg-white border border-[#e8e8e8] rounded-[12px] md:rounded-[16px] px-8 md:px-10 py-5 md:py-6 hover:shadow-lg transition-shadow min-w-[200px] md:min-w-[220px] w-full sm:w-auto">
            <img 
              src={imgClutchLogo} 
              alt="Clutch" 
              className="h-[20px] md:h-[24px] mb-2 md:mb-3 object-contain"
            />
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="size-4 md:size-5 text-[#ff3d00]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="font-['Inter'] text-[13px] md:text-[14px] text-[#3c3c3c]">Read our reviews</div>
          </div>

          {/* Trustpilot */}
          <div className="flex flex-col items-center bg-white border border-[#e8e8e8] rounded-[12px] md:rounded-[16px] px-8 md:px-10 py-5 md:py-6 hover:shadow-lg transition-shadow min-w-[200px] md:min-w-[220px] w-full sm:w-auto">
            <img 
              src={imgTrustpilotLogo} 
              alt="Trustpilot" 
              className="h-[20px] md:h-[24px] mb-2 md:mb-3 object-contain"
            />
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="size-4 md:size-5 text-[#00b67a]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="font-['Inter'] text-[13px] md:text-[14px] text-[#3c3c3c]">Read our reviews</div>
          </div>

          {/* GoodFirms */}
          <div className="flex flex-col items-center bg-white border border-[#e8e8e8] rounded-[12px] md:rounded-[16px] px-8 md:px-10 py-5 md:py-6 hover:shadow-lg transition-shadow min-w-[200px] md:min-w-[220px] w-full sm:w-auto">
            <img 
              src={imgGoodFirmsLogo} 
              alt="GoodFirms" 
              className="h-[20px] md:h-[24px] mb-2 md:mb-3 object-contain"
            />
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="size-4 md:size-5 text-[#5d73f3]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="font-['Inter'] text-[13px] md:text-[14px] text-[#3c3c3c]">Read our reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}