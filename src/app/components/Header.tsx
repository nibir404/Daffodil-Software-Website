import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import imgImage1 from "figma:asset/9e79658364ced9f6944de6225d3b0e0e50b5ad3b.png";
import svgPaths from "../../imports/svg-kr2unwykat";
import { SolutionsMegamenu } from "./SolutionsMegamenu";
import { ProductsMegamenu } from "./ProductsMegamenu";
import { IndustriesMegamenu } from "./IndustriesMegamenu";
import { InsightsMegamenu } from "./InsightsMegamenu";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsMenuOpen, setSolutionsMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [industriesMenuOpen, setIndustriesMenuOpen] = useState(false);
  const [insightsMenuOpen, setInsightsMenuOpen] = useState(false);

  return (
    <>
      <header 
        className="sticky top-0 z-50 w-full backdrop-blur-[20px] bg-[rgba(255,255,255,0.6)]"
        onMouseLeave={() => {
          setSolutionsMenuOpen(false);
          setProductsMenuOpen(false);
          setIndustriesMenuOpen(false);
          setInsightsMenuOpen(false);
        }}
      >
        <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="h-[50px] w-[96px] md:h-[60px] md:w-[116px] shrink-0">
              <img 
                src={imgImage1} 
                alt="DSL Logo" 
                className="w-full h-full object-cover"
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-0 p-[4px] rounded-[150px]">
              <Link to="/about" className="flex gap-[10px] items-center justify-center px-[24px] py-[10px] rounded-[150px] hover:bg-[#d5ffec] transition-colors whitespace-nowrap group">
                <p className="font-['Helvetica_Now_Display'] text-[16px] text-[#111] leading-normal whitespace-nowrap">About</p>
              </Link>
              
              <button 
                className="flex gap-[10px] items-center justify-center px-[24px] py-[10px] rounded-[150px] hover:bg-[#d5ffec] transition-colors whitespace-nowrap group"
                onClick={() => {
                  setSolutionsMenuOpen(!solutionsMenuOpen);
                  setProductsMenuOpen(false);
                  setIndustriesMenuOpen(false);
                }}
              >
                <p className="font-['Helvetica_Now_Display'] text-[16px] text-[#111] leading-normal whitespace-nowrap">Solutions</p>
                <div className="size-[20px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p181e3c80} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  </svg>
                </div>
              </button>

              <button 
                className="flex gap-[10px] items-center justify-center px-[24px] py-[10px] rounded-[150px] hover:bg-[#d5ffec] transition-colors whitespace-nowrap group"
                onClick={() => {
                  setProductsMenuOpen(!productsMenuOpen);
                  setSolutionsMenuOpen(false);
                  setIndustriesMenuOpen(false);
                }}
              >
                <p className="font-['Helvetica_Now_Display'] text-[16px] text-[#111] leading-normal whitespace-nowrap">Products</p>
                <div className="size-[20px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p181e3c80} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  </svg>
                </div>
              </button>

              <button 
                className="flex gap-[10px] items-center justify-center px-[24px] py-[10px] rounded-[150px] hover:bg-[#d5ffec] transition-colors whitespace-nowrap group"
                onClick={() => {
                  setIndustriesMenuOpen(!industriesMenuOpen);
                  setSolutionsMenuOpen(false);
                  setProductsMenuOpen(false);
                }}
              >
                <p className="font-['Helvetica_Now_Display'] text-[16px] text-[#111] leading-normal whitespace-nowrap">Industries</p>
                <div className="size-[20px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p181e3c80} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  </svg>
                </div>
              </button>

              <Link to="/case-studies" className="flex gap-[10px] items-center justify-center px-[24px] py-[10px] rounded-[150px] hover:bg-[#d5ffec] transition-colors whitespace-nowrap group">
                <p className="font-['Helvetica_Now_Display'] text-[16px] text-[#111] leading-normal whitespace-nowrap">Case Studies</p>
              </Link>

              <button 
                className="flex gap-[10px] items-center justify-center px-[24px] py-[10px] rounded-[150px] hover:bg-[#d5ffec] transition-colors whitespace-nowrap group"
                onClick={() => {
                  setInsightsMenuOpen(!insightsMenuOpen);
                  setSolutionsMenuOpen(false);
                  setProductsMenuOpen(false);
                  setIndustriesMenuOpen(false);
                }}
              >
                <p className="font-['Helvetica_Now_Display'] text-[16px] text-[#111] leading-normal whitespace-nowrap">Insights</p>
                <div className="size-[20px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p181e3c80} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  </svg>
                </div>
              </button>
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-[10px] shrink-0">
              {/* Desktop CTA */}
              <Link to="/contact" className="hidden lg:flex h-[48px]">
                <div className="bg-[#01e067] flex gap-[10px] items-center overflow-hidden pl-[24px] pr-[8px] py-[6px] rounded-[80px] relative h-full group hover:bg-[#00c757] transition-colors">
                  <div className="absolute flex h-[130.588px] items-center justify-center left-[calc(50%-105.63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px] group-hover:animate-[flare_0.6s_ease-in-out]">
                    <div className="rotate-[-46.28deg]">
                      <div className="h-[30px] w-[152px]">
                        <div className="absolute inset-[-180%_-35.53%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                            <g filter="url(#filter0_f_header)" style={{ mixBlendMode: "plus-lighter" }}>
                              <ellipse cx="130" cy="69" fill="white" fillOpacity="0.8" rx="76" ry="15" />
                            </g>
                            <defs>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_header" width="260" x="0" y="0">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_header" stdDeviation="27" />
                              </filter>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-['Helvetica_Now_Display'] font-medium leading-normal relative text-[#111] text-[16px] z-10 whitespace-nowrap">Schedule a Meeting</p>
                  <div className="bg-[#111] rounded-full shrink-0 size-[36px] flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-90 group-hover:ring-2 group-hover:ring-white">
                    <svg className="size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d="M12.3321 8H3.33203" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p16251580} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 hover:bg-white/50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-white shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="flex flex-col p-6">
              <Link 
                to="/about" 
                className="py-4 border-b border-gray-100 font-['Helvetica_Now_Display'] text-[18px] text-[#111]"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              
              <button className="py-4 border-b border-gray-100 font-['Helvetica_Now_Display'] text-[18px] text-[#111] text-left flex items-center justify-between">
                Solutions
                <div className="size-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p181e3c80} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  </svg>
                </div>
              </button>

              <button className="py-4 border-b border-gray-100 font-['Helvetica_Now_Display'] text-[18px] text-[#111] text-left flex items-center justify-between">
                Products
                <div className="size-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p181e3c80} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  </svg>
                </div>
              </button>

              <button className="py-4 border-b border-gray-100 font-['Helvetica_Now_Display'] text-[18px] text-[#111] text-left flex items-center justify-between">
                Industries
                <div className="size-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p181e3c80} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  </svg>
                </div>
              </button>

              <Link 
                to="/case-studies" 
                className="py-4 border-b border-gray-100 font-['Helvetica_Now_Display'] text-[18px] text-[#111]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>

              <button 
                className="py-4 border-b border-gray-100 font-['Helvetica_Now_Display'] text-[18px] text-[#111] text-left flex items-center justify-between"
                onClick={() => {
                  setInsightsMenuOpen(!insightsMenuOpen);
                  setSolutionsMenuOpen(false);
                  setProductsMenuOpen(false);
                  setIndustriesMenuOpen(false);
                }}
              >
                Insights
                <div className="size-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p181e3c80} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  </svg>
                </div>
              </button>

              {/* Mobile CTA */}
              <a 
                href="#contact" 
                className="mt-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="bg-[#01e067] flex gap-[10px] items-center justify-center pl-[24px] pr-[8px] py-[10px] rounded-[80px] relative h-[52px] hover:bg-[#00c757] transition-colors overflow-hidden group">
                  <div className="absolute flex h-[130.588px] items-center justify-center left-[calc(50%-105.63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px] group-hover:animate-[flare_0.6s_ease-in-out]">
                    <div className="rotate-[-46.28deg]">
                      <div className="h-[30px] w-[152px]">
                        <div className="absolute inset-[-180%_-35.53%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                            <g filter="url(#filter0_f_mobile_cta)" style={{ mixBlendMode: "plus-lighter" }}>
                              <ellipse cx="130" cy="69" fill="white" fillOpacity="0.8" rx="76" ry="15" />
                            </g>
                            <defs>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_mobile_cta" width="260" x="0" y="0">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_mobile_cta" stdDeviation="27" />
                              </filter>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-['Helvetica_Now_Display'] font-medium text-[16px] text-[#111] z-10 relative">Schedule a Meeting</p>
                  <div className="bg-[#111] rounded-full size-[36px] flex items-center justify-center z-10 relative transition-all duration-300 group-hover:scale-90 group-hover:ring-2 group-hover:ring-white">
                    <svg className="size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d="M12.3321 8H3.33203" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p16251580} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Solutions Megamenu */}
      <div
        onMouseEnter={() => setSolutionsMenuOpen(true)}
        onMouseLeave={() => setSolutionsMenuOpen(false)}
      >
        <SolutionsMegamenu 
          isOpen={solutionsMenuOpen} 
          onClose={() => setSolutionsMenuOpen(false)} 
        />
      </div>

      {/* Products Megamenu */}
      <div
        onMouseEnter={() => setProductsMenuOpen(true)}
        onMouseLeave={() => setProductsMenuOpen(false)}
      >
        <ProductsMegamenu 
          isOpen={productsMenuOpen} 
          onClose={() => setProductsMenuOpen(false)} 
        />
      </div>

      {/* Industries Megamenu */}
      <div
        onMouseEnter={() => setIndustriesMenuOpen(true)}
        onMouseLeave={() => setIndustriesMenuOpen(false)}
      >
        <IndustriesMegamenu 
          isOpen={industriesMenuOpen} 
          onClose={() => setIndustriesMenuOpen(false)} 
        />
      </div>

      {/* Insights Megamenu */}
      <div
        onMouseEnter={() => setInsightsMenuOpen(true)}
        onMouseLeave={() => setInsightsMenuOpen(false)}
      >
        <InsightsMegamenu 
          isOpen={insightsMenuOpen} 
          onClose={() => setInsightsMenuOpen(false)} 
        />
      </div>
    </>
  );
}