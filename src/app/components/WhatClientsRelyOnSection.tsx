import svgPaths from "../../assets/svgs/svg-0gz09ijv7a";

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-right-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right-02">
          <path d="M12.3321 8H3.33203" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p16251580} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export function WhatClientsRelyOnSection() {
  const relianceItems = [
    "Translating business intent into structured digital platforms",
    "Designing systems that integrate across departments and data sources",
    "Engineering solutions that remain operable under growth and change",
    "Reducing operational friction through thoughtful system design"
  ];

  return (
    <section className="py-[60px] md:py-[80px]">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px] items-start w-full">
          {/* Left Column - Header and CTA */}
          <div className="w-full lg:w-[639px] shrink-0 flex flex-col gap-[40px]">
            {/* Header */}
            <div className="flex flex-col gap-[24px]">
              <h2 className="font-['Helvetica_Now_Display'] font-medium leading-[1.1] text-[#111] text-[40px] md:text-[54px] lg:text-[64px]">
                What Clients Rely on Us For
              </h2>
              <p className="font-['Inter'] font-normal leading-[30px] text-[#3c3c3c] text-[16px] max-w-[504px]">
                Clients work with DSL when their software needs to become a stable foundation rather than a recurring problem.
              </p>
            </div>

            {/* CTA Button */}
            <button className="group bg-[#01e067] flex gap-[10px] items-center pl-[24px] pr-[8px] py-[6px] rounded-[80px] relative overflow-hidden w-fit hover:bg-[#00c757] transition-colors">
              {/* Glow Effect */}
              <div className="absolute flex h-[130.588px] items-center justify-center left-[calc(50%-105.63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px] pointer-events-none group-hover:animate-[flare_0.6s_ease-in-out]">
                <div className="flex-none rotate-[-46.28deg]">
                  <div className="h-[30px] relative w-[152px]">
                    <div className="absolute inset-[-180%_-35.53%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                        <g filter="url(#filter0_f_62_753)" id="Ellipse 2" style={{ mixBlendMode: "plus-lighter" }}>
                          <ellipse cx="130" cy="69" fill="var(--fill-0, white)" fillOpacity="0.8" rx="76" ry="15" />
                        </g>
                        <defs>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_62_753" width="260" x="0" y="0">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_62_753" stdDeviation="27" />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <span className="font-['Helvetica_Now_Display'] font-medium leading-[normal] text-[#111] text-[16px] relative z-10">
                Schedule a Meeting
              </span>
              
              <div className="bg-black rounded-[100px] size-[36px] flex items-center justify-center relative z-10 transition-all duration-300 group-hover:scale-90 group-hover:ring-2 group-hover:ring-white">
                <ArrowRight />
              </div>
            </button>
          </div>

          {/* Right Column - List Items */}
          <div className="flex-1 min-w-0 w-full">
            <div className="flex flex-col">
              {relianceItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center py-[20px] border-b border-[rgba(0,0,0,0.1)] w-full"
                >
                  <p className="font-['Inter'] font-normal leading-[1.4] text-[#111] text-[24px] md:text-[30px] lg:text-[36px] w-full">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
