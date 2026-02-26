import { useState } from "react";
import { Link } from "react-router";
import svgPaths from "../../assets/svgs/svg-mxln3mq9gn";
import svgPathsDesign from "../../assets/svgs/svg-10ns7xk3fr";
import svgPathsDevelopment from "../../assets/svgs/svg-3gqtin07f8";
import svgPathsAI from "../../assets/svgs/svg-3tfns4zh67";
import svgPathsGrowth from "../../assets/svgs/svg-yad1lz0s1j";
import svgPathsMaintain from "../../assets/svgs/svg-2wmzaob8t5";

interface CategoryItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  solutions: Array<{ name: string; link?: string }>;
}

const categories: CategoryItem[] = [
  {
    id: "strategy",
    label: "Strategy",
    icon: (
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <path d={svgPaths.p26e70080} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        <path d={svgPaths.p1db5ba80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        <path d={svgPaths.p19953b00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        <path d={svgPaths.p3f931c80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        <path d={svgPaths.p4bfd200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        <path d={svgPaths.pb6467c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
      </svg>
    ),
    solutions: [
      { name: "Product Planning" },
      { name: "Digital Transformation" },
      { name: "Lean Development" },
      { name: "Technology Consulting" }
    ]
  },
  {
    id: "design",
    label: "Design",
    icon: (
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <path d={svgPathsDesign.p84e1800} stroke="white" strokeWidth="2.5" />
        <path d="M11.667 25.004L11.6815 25" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        <path d={svgPathsDesign.p2e625100} stroke="white" strokeWidth="2.5" />
        <path d={svgPathsDesign.p2e35a200} stroke="white" strokeWidth="2.5" />
      </svg>
    ),
    solutions: [
      { name: "UI/UX Design" },
      { name: "UX Audit" },
      { name: "SaaS and MVP Product Design" },
      { name: "Social Media Design" }
    ]
  },
  {
    id: "development",
    label: "Development",
    icon: (
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <path d={svgPathsDevelopment.p281c8500} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        <path d={svgPathsDevelopment.p3f409fc0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        <path d={svgPathsDevelopment.p1c292e40} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
      </svg>
    ),
    solutions: [
      { name: "Custom Web and App Development", link: "/services/custom-web-app-development" },
      { name: "Enterprise Application" },
      { name: "Odoo Implementation" },
      { name: "API and System Integration" }
    ]
  },
  {
    id: "ai-automation",
    label: "AI & Automation",
    icon: (
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <path d={svgPathsAI.p132d87c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        <path d={svgPathsAI.p2b816700} stroke="white" strokeLinejoin="round" strokeWidth="2.5" />
        <path d={svgPathsAI.p1a04a900} stroke="white" strokeLinejoin="round" strokeWidth="2.5" />
      </svg>
    ),
    solutions: [
      { name: "AI & Automation" },
      { name: "AI Implementation" },
      { name: "Custom AI Solutions" }
    ]
  },
  {
    id: "growth",
    label: "Growth & Visibility",
    icon: (
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <path d={svgPathsGrowth.p28b41500} stroke="white" strokeLinejoin="round" strokeWidth="2.5" />
        <path d="M27.5 5H32.5V10" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        <path d={svgPathsGrowth.pfeedb00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        <path d={svgPathsGrowth.p3346ae00} stroke="white" strokeLinejoin="round" strokeWidth="2.5" />
        <path d={svgPathsGrowth.p25a54280} stroke="white" strokeLinejoin="round" strokeWidth="2.5" />
      </svg>
    ),
    solutions: [
      { name: "SEO" },
      { name: "Performance Optimization" },
      { name: "Conversion Optimization" }
    ]
  },
  {
    id: "maintain",
    label: "Maintain",
    icon: (
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <path d={svgPathsMaintain.p24656080} stroke="white" strokeWidth="2.5" />
        <path d={svgPathsMaintain.p31e49d00} stroke="white" strokeWidth="2.5" />
        <path d={svgPathsMaintain.p3d29c400} stroke="white" strokeWidth="2.5" />
        <path d={svgPathsMaintain.pdb54380} stroke="white" strokeWidth="2.5" />
      </svg>
    ),
    solutions: [
      { name: "Software Maintenance" },
      { name: "Software Support" },
      { name: "Project Takeover" }
    ]
  }
];

interface SolutionsMegamenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SolutionsMegamenu({ isOpen, onClose }: SolutionsMegamenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("strategy");

  if (!isOpen) return null;

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  return (
    <>
      {/* Megamenu */}
      <div className="fixed left-0 right-0 top-20 z-40 pt-1">
        <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
          <div className="bg-[#eef6ff] rounded-[10px] shadow-[0px_0px_40px_0px_rgba(0,0,0,0.15)] overflow-hidden">
            <div className="flex gap-[24px] p-[16px]">
              {/* Left Panel - Categories */}
              <div className="bg-white rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] w-[448px] shrink-0">
                {categories.map((category, index) => (
                  <button
                    key={category.id}
                    onMouseEnter={() => setSelectedCategory(category.id)}
                    className={`
                      w-full text-left px-[20px] py-[10px] border-b border-[#dadada] last:border-b-0
                      transition-all duration-200 hover:bg-gradient-to-r hover:from-[#cfffe8] hover:to-white
                      ${selectedCategory === category.id ? 'bg-gradient-to-r from-[#cfffe8] to-white' : ''}
                      ${index === 0 ? 'rounded-t-[10px]' : ''}
                      ${index === categories.length - 1 ? 'rounded-b-[10px] border-b-0' : ''}
                    `}
                  >
                    <p className="font-['Helvetica_Now_Display'] text-[36px] text-black leading-normal">
                      {category.label}
                    </p>
                  </button>
                ))}
              </div>

              {/* Right Panel - Solutions & CTA */}
              <div className="flex flex-col justify-between w-[812px] shrink-0">
                {/* Icon & Solutions */}
                <div className="flex flex-col gap-[20px]">
                  {/* Icon */}
                  <div className="bg-gradient-to-b from-[rgba(44,246,152,0.75)] to-[#4ac4f0] rounded-[10px] size-[80px] flex items-center justify-center border-[3px] border-[rgba(255,255,255,0.4)]">
                    {currentCategory?.icon}
                  </div>

                  {/* Solutions List */}
                  <div className="flex flex-col">
                    {currentCategory?.solutions.map((solution, index) => {
                      const SolutionWrapper = solution.link ? Link : 'button';
                      const wrapperProps = solution.link 
                        ? { to: solution.link, onClick: onClose }
                        : {};
                      
                      return (
                        <SolutionWrapper
                          key={solution.name}
                          {...wrapperProps}
                          className={`
                            flex items-center justify-between py-[10px] h-[50px]
                            border-b border-[rgba(0,0,0,0.1)] transition-all duration-200
                            hover:bg-white hover:px-[20px] hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]
                            ${index === currentCategory.solutions.length - 1 ? 'border-b-0' : ''}
                            ${solution.link ? 'no-underline' : ''}
                          `}
                        >
                          <p className="font-['Helvetica_Now_Display'] text-[20px] text-black leading-normal hover:font-medium">
                            {solution.name}
                          </p>
                          <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                            <path d="M12.333 8H3.33301" stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path d={svgPaths.p638bf80} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </SolutionWrapper>
                      );
                    })}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-[rgba(185,255,231,0.2)] rounded-[10px] border-2 border-black overflow-hidden group hover:bg-black transition-colors duration-300">
                  <div className="flex items-center gap-[40px] px-[24px] py-[16px] relative">
                    {/* Glow Effect - Default */}
                    <div className="absolute left-[calc(50%-399.94px)] top-[-53px] w-[180.116px] h-[186.408px] flex items-center justify-center mix-blend-plus-lighter pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                      <div className="rotate-[-46.28deg]">
                        <div className="w-[229.237px] h-[30px]">
                          <div className="absolute inset-[-180%_-23.56%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337.237 138">
                              <g filter="url(#filter0_f_megamenu)" style={{ mixBlendMode: "plus-lighter" }}>
                                <ellipse cx="168.618" cy="69" fill="white" fillOpacity="0.8" rx="114.618" ry="15" />
                              </g>
                              <defs>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_megamenu" width="337.237" x="0" y="0">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                  <feGaussianBlur result="effect1_foregroundBlur_megamenu" stdDeviation="27" />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Glow Effect - Hover */}
                    <div className="absolute right-[calc(50%-399.94px)] top-[-24px] w-[180.116px] h-[186.408px] flex items-center justify-center mix-blend-plus-lighter pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="rotate-[-46.28deg]">
                        <div className="w-[229.237px] h-[30px]">
                          <div className="absolute inset-[-180%_-23.56%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337.237 138">
                              <g filter="url(#filter0_f_megamenu_hover)" style={{ mixBlendMode: "plus-lighter" }}>
                                <ellipse cx="168.618" cy="69" fill="white" fillOpacity="0.8" rx="114.618" ry="15" />
                              </g>
                              <defs>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_megamenu_hover" width="337.237" x="0" y="0">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                  <feGaussianBlur result="effect1_foregroundBlur_megamenu_hover" stdDeviation="27" />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 relative z-10">
                      <p className="font-['Helvetica_Now_Display'] font-bold text-[24px] text-[#111] leading-normal mb-[10px] group-hover:text-white transition-colors duration-300">
                        Schedule a Meeting
                      </p>
                      <p className="font-['Inter'] text-[14px] text-[#3c3c3c] leading-[23px] group-hover:text-white transition-colors duration-300">
                        We help enterprises, institutions, and public sector organizations design, build, and scale secure digital systems—backed by 20+ years of delivery experience and proven execution.
                      </p>
                    </div>

                    {/* Arrow Button */}
                    <button className="bg-black rounded-full size-[80px] shrink-0 flex items-center justify-center hover:scale-95 transition-all duration-300 relative z-10 border-2 border-black group-hover:border-white">
                      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
                        <path d="M30.8301 20H8.33008" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d={svgPaths.p1dc32000} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
