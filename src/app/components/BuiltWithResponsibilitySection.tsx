import imgRectangle703 from "figma:asset/602b38c441ac5a0f07661ec373bea7e5bae3f212.png";

export function BuiltWithResponsibilitySection() {
  return (
    <section className="bg-[#0b1a2a] relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Background Gradient Circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1900px] aspect-square pointer-events-none opacity-40">
        <div className="absolute inset-x-0 inset-y-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2712 2712">
            <g filter="url(#filter0_f_responsibility_bg)">
              <circle cx="1356" cy="1356" fill="#0B396C" r="956" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2712" id="filter0_f_responsibility_bg" width="2712" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_responsibility_bg" stdDeviation="200" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container-padding relative z-10">
        <div className="content-max-width">
          <div className="flex flex-col gap-12 md:gap-16 items-center text-center">
            {/* Header */}
            <div className="flex flex-col gap-6 max-w-[1000px]">
              <h2 className="font-['Helvetica_Now_Display'] font-medium leading-[1.1] text-white text-[32px] md:text-[52px] lg:text-[64px] tracking-tight">
                Built With Responsibility <br className="hidden md:block" />in Mind
              </h2>
              <p className="font-['Inter'] font-normal leading-relaxed text-white/70 text-[16px] md:text-[18px]">
                Software decisions carry operational, financial, and human consequences. We treat data, access, and architecture with the discipline those consequences demand. Trust is not a marketing claim—it's demonstrated through consistency, transparency, and restraint in how systems are designed and maintained.
              </p>
            </div>

            {/* Team Image */}
            <div className="w-full aspect-[16/9] md:aspect-[21/9] relative rounded-[20px] md:rounded-[32px] overflow-hidden shadow-2xl group border border-white/5">
              <img 
                alt="Daffodil Software Team" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                src={imgRectangle703} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* CTA Button */}
            <button className="group relative overflow-hidden bg-white/5 hover:bg-white backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 md:px-10 md:py-5 transition-all duration-500 active:scale-95">
              <span className="font-['Helvetica_Now_Display'] font-medium text-white group-hover:text-[#111] text-[16px] md:text-[18px] transition-colors relative z-10">
                Learn More About DSL's Ethical Standards
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[flare_0.8s_ease-in-out] pointer-events-none" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
