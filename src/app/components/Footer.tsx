import imgImage1 from "figma:asset/9e79658364ced9f6944de6225d3b0e0e50b5ad3b.png";
import imgImage35 from "figma:asset/2516de018ffa3072ce276d1f94f901c9c0bcc638.png";
import imgImage36 from "figma:asset/aea28bb90ff2bde067f020cdb22dd8d1bb0111e1.png";
import imgImage37 from "figma:asset/a66a1d2c754f12d2b86b1f4f9c26f0df997d2895.png";
import imgImage73 from "figma:asset/0312bcea605fc90dfdf2e50e657b2cd982039955.png";
import svgPaths from "../../imports/svg-hb3t842kl2";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-[#c4eeda] py-12 md:py-16 lg:py-20">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16">
          {/* Left Section - Company Info */}
          <div className="lg:col-span-4">
            <div className="h-[50px] w-[96px] md:h-[60px] md:w-[116px] mb-5">
              <img 
                src={imgImage1} 
                alt="DSL Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-['Inter'] text-[13px] md:text-[14px] text-[#3c3c3c] leading-[22px] md:leading-[24px] mb-5 max-w-[340px]">
              A Concern of Daffodil Group. Providing world-class software solutions and IT services since 1998.
            </p>
            
            {/* Certification Badges */}
            <div className="flex gap-[8px] flex-wrap">
              <div className="bg-white flex items-center justify-center p-[8px] rounded-[8px] h-[48px] w-[96px]">
                <img src={imgImage35} alt="ISO Certified" className="w-full h-full object-contain" />
              </div>
              <div className="bg-white flex items-center justify-center p-[8px] rounded-[8px] h-[48px] w-[96px]">
                <img src={imgImage36} alt="Microsoft Partner" className="w-full h-full object-contain" />
              </div>
              <div className="bg-white flex items-center justify-center p-[8px] rounded-[8px] h-[48px] w-[96px]">
                <img src={imgImage37} alt="ODOO Partner" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="font-['Helvetica_Now_Display'] font-medium text-[16px] md:text-[18px] text-[#111] leading-[22px] md:leading-[24px] mb-3 md:mb-4">Solutions</h3>
              <div className="flex flex-col gap-2 md:gap-3 font-['Inter'] text-[13px] md:text-[14px] text-[#3c3c3c] leading-[20px] md:leading-[22px]">
                <a href="#strategy" className="hover:text-[#111] transition-colors">Strategy</a>
                <a href="#design" className="hover:text-[#111] transition-colors">Design</a>
                <a href="#development" className="hover:text-[#111] transition-colors">Development</a>
                <a href="#ai" className="hover:text-[#111] transition-colors">AI & Automation</a>
                <a href="#growth" className="hover:text-[#111] transition-colors">Growth</a>
                <a href="#maintain" className="hover:text-[#111] transition-colors">Maintain</a>
              </div>
            </div>

            <div>
              <h3 className="font-['Helvetica_Now_Display'] font-medium text-[16px] md:text-[18px] text-[#111] leading-[22px] md:leading-[24px] mb-3 md:mb-4">Company</h3>
              <div className="flex flex-col gap-2 md:gap-3 font-['Inter'] text-[13px] md:text-[14px] text-[#3c3c3c] leading-[20px] md:leading-[22px]">
                <Link to="/about" className="hover:text-[#111] transition-colors">About Us</Link>
                <Link to="/terms-and-conditions" className="hover:text-[#111] transition-colors">Terms and Conditions</Link>
                <a href="#portfolio" className="hover:text-[#111] transition-colors">Portfolio</a>
                <a href="#privacy" className="hover:text-[#111] transition-colors">Privacy Policy</a>
                <Link to="/contact" className="hover:text-[#111] transition-colors">Contact</Link>
                <Link to="/faq" className="hover:text-[#111] transition-colors">FAQ</Link>
                <a href="#cookies" className="hover:text-[#111] transition-colors">Cookie Policy</a>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-['Helvetica_Now_Display'] font-medium text-[16px] md:text-[18px] text-[#111] leading-[22px] md:leading-[24px] mb-3 md:mb-4">Policy</h3>
              <div className="flex flex-col gap-2 md:gap-3 font-['Inter'] text-[13px] md:text-[14px] text-[#3c3c3c] leading-[20px] md:leading-[22px]">
                <a href="#ai" className="hover:text-[#111] transition-colors">AI & Automation</a>
              </div>
            </div>
          </div>

          {/* Right Section - Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-['Helvetica_Now_Display'] font-medium text-[16px] md:text-[18px] text-[#111] leading-[22px] md:leading-[24px] mb-3 md:mb-4">Contact US</h3>
            <p className="font-['Inter'] text-[13px] md:text-[14px] text-[#3c3c3c] leading-[20px] md:leading-[22px] mb-5">
              Daffodil Tower, 4/2, Sobhanbag, Mirpur Road, Dhaka-1207
            </p>

            {/* Email Input */}
            <div className="mb-3">
              <div className="bg-white h-[44px] md:h-[48px] rounded-[50px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.15)] overflow-hidden">
                <input 
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-full px-[16px] py-[8px] font-['Inter'] text-[13px] md:text-[14px] text-[#8d8d8d] outline-none placeholder:text-[#8d8d8d]"
                />
              </div>
            </div>

            {/* CTA Button */}
            <a href="#contact" className="block">
              <div className="bg-[#01e067] flex gap-[8px] items-center overflow-hidden pl-[20px] pr-[6px] py-[6px] rounded-[80px] relative h-[44px] md:h-[48px] w-full group hover:bg-[#00c757] transition-colors">
                <div className="absolute flex h-[130.588px] items-center justify-center left-[calc(50%-105.63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px] group-hover:animate-[flare_0.6s_ease-in-out]">
                  <div className="rotate-[-46.28deg]">
                    <div className="h-[30px] w-[152px]">
                      <div className="absolute inset-[-180%_-35.53%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                          <g filter="url(#filter0_f_footer)" style={{ mixBlendMode: "plus-lighter" }}>
                            <ellipse cx="130" cy="69" fill="white" fillOpacity="0.8" rx="76" ry="15" />
                          </g>
                          <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_footer" width="260" x="0" y="0">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                              <feGaussianBlur result="effect1_foregroundBlur_footer" stdDeviation="27" />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['Helvetica_Now_Display'] font-medium leading-normal relative text-[#111] text-[13px] md:text-[14px] z-10 flex-1 text-center">Schedule a Meeting</p>
                <div className="bg-[#111] rounded-full shrink-0 size-[30px] md:size-[34px] flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-90 group-hover:ring-2 group-hover:ring-white">
                  <svg className="size-[13px] md:size-[14px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d="M12.3321 8H3.33203" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p16251580} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-[rgba(0,0,0,0.2)] mb-5 md:mb-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <p className="font-['Inter'] text-[12px] md:text-[13px] text-[#3c3c3c] leading-[20px] md:leading-[22px] text-center md:text-left">
            © 2025 Daffodil Software Limited. All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5">
            {/* Find us at */}
            <div className="flex items-center gap-[8px] px-[16px] sm:border-r border-[rgba(0,0,0,0.2)]">
              <p className="font-['Inter'] text-[12px] md:text-[13px] text-[#3c3c3c] leading-[20px] md:leading-[22px]">Find us at</p>
              <div className="h-[36px] w-[90px] md:h-[40px] md:w-[100px] rounded-[130px]">
                <img 
                  src={imgImage73} 
                  alt="Upwork" 
                  className="w-full h-full object-cover rounded-[130px]"
                />
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-[8px]">
              <a href="#" className="border border-[#3c3c3c] rounded-[30px] size-[34px] md:size-[36px] flex items-center justify-center hover:bg-[#3c3c3c] group transition-colors">
                <svg className="size-4 md:size-5" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path 
                    clipRule="evenodd" 
                    fillRule="evenodd" 
                    d={svgPaths.p3521b980}
                    stroke="currentColor" 
                    strokeLinejoin="round" 
                    strokeWidth="1.5"
                    className="text-[#111] group-hover:text-white transition-colors"
                  />
                </svg>
              </a>
              <a href="#" className="border border-[#3c3c3c] rounded-[30px] size-[34px] md:size-[36px] flex items-center justify-center hover:bg-[#3c3c3c] group transition-colors">
                <svg className="size-4 md:size-5" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path 
                    d={svgPaths.p38ca2800}
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    className="text-[#111] group-hover:text-white transition-colors"
                  />
                  <path 
                    d={svgPaths.pfbab680}
                    stroke="currentColor" 
                    strokeLinejoin="round" 
                    strokeWidth="1.5"
                    className="text-[#111] group-hover:text-white transition-colors"
                  />
                </svg>
              </a>
              <a href="#" className="border border-[#3c3c3c] rounded-[30px] size-[34px] md:size-[36px] flex items-center justify-center hover:bg-[#3c3c3c] group transition-colors">
                <svg className="size-4 md:size-5" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path 
                    d={svgPaths.p30aaad00}
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    className="text-[#111] group-hover:text-white transition-colors"
                  />
                  <path 
                    d={svgPaths.p3307d700}
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    className="text-[#111] group-hover:text-white transition-colors"
                  />
                  <path 
                    d={svgPaths.p3eb53b00}
                    stroke="currentColor" 
                    strokeLinejoin="round" 
                    strokeWidth="1.5"
                    className="text-[#111] group-hover:text-white transition-colors"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}