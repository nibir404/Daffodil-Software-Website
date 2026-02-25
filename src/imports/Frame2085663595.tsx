import svgPaths from "./svg-rtyexdll6g";

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="arrow-right-02">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="arrow-right-02">
          <path d="M27.7461 18H7.49609" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p18bdbc00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-black relative rounded-[100px] shrink-0 size-[60px]">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <ArrowRight />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#01e067] content-stretch flex items-center justify-between overflow-clip px-[40px] py-[6px] relative rounded-[10px] size-full">
      <div className="-translate-x-1/2 absolute flex h-[292.036px] items-center justify-center left-[calc(50%+906.11px)] mix-blend-plus-lighter top-[-75.89px] w-[636.657px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-11.73deg]">
          <div className="h-[170.605px] relative w-[614.812px]">
            <div className="absolute inset-[-117.23%_-32.53%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1014.81 570.605">
                <g filter="url(#filter0_f_125_1009)" id="Ellipse 2" style={{ mixBlendMode: "plus-lighter" }}>
                  <ellipse cx="507.406" cy="285.303" fill="var(--fill-0, white)" fillOpacity="0.5" rx="307.406" ry="85.3026" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="570.605" id="filter0_f_125_1009" width="1014.81" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_125_1009" stdDeviation="100" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[#111] text-[30px]">Book a Consultation</p>
      <Frame />
    </div>
  );
}