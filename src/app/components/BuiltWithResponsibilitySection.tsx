import imgRectangle703 from "figma:asset/602b38c441ac5a0f07661ec373bea7e5bae3f212.png";

export function BuiltWithResponsibilitySection() {
  return (
    <section className="bg-[#0d1e32] relative py-[80px] md:py-[120px] overflow-hidden">
      {/* Background Gradient Circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1912px] h-[1912px] pointer-events-none">
        <div className="absolute inset-[-20.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2712 2712">
            <g filter="url(#filter0_f_62_734)" id="Ellipse 5">
              <circle cx="1356" cy="1356" fill="#0B396C" r="956" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2712" id="filter0_f_62_734" width="2712" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_62_734" stdDeviation="200" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px] relative z-10">
        <div className="flex flex-col gap-[40px] md:gap-[60px] items-center w-full">
          {/* Header */}
          <div className="flex flex-col gap-[24px] items-center text-center w-full">
            <h2 className="font-['Helvetica_Now_Display'] font-medium leading-[1.1] text-white text-[36px] md:text-[48px] lg:text-[64px] max-w-[900px]">
              Built With Responsibility in Mind
            </h2>
            <p className="font-['Inter'] font-normal leading-[30px] text-white text-[16px] max-w-[890px] mx-auto">
              Software decisions carry operational, financial, and human consequences. We treat data, access, and architecture with the discipline those consequences demand. Trust is not a marketing claim it's demonstrated through consistency, transparency, and restraint in how systems are designed and maintained.
            </p>
          </div>

          {/* Team Image */}
          <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative rounded-[10px] overflow-hidden">
            <img 
              alt="Daffodil Software Team" 
              className="absolute inset-0 w-full h-full object-cover" 
              src={imgRectangle703} 
            />
          </div>

          {/* CTA Button */}
          <button className="group backdrop-blur-[10px] border border-white border-solid rounded-[80px] px-[24px] py-[14px] relative overflow-hidden hover:bg-white transition-all duration-300">
            {/* Animated light flare on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute h-full w-[100px] bg-gradient-to-r from-transparent via-white/30 to-transparent -left-[100px] group-hover:left-[100%] transition-all duration-700 ease-out blur-sm" />
            </div>
            
            <span className="font-['Helvetica_Now_Display'] font-medium leading-[normal] text-white text-[16px] relative z-10 group-hover:text-[#111] transition-colors">
              Learn More About DSL's Ethical Standards
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}