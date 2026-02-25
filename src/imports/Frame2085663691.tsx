import imgRectangle703 from "figma:asset/602b38c441ac5a0f07661ec373bea7e5bae3f212.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center not-italic relative shrink-0 text-white w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] relative shrink-0 text-[64px]">Built With Responsibility in Mind</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[16px] text-center w-[890px] whitespace-pre-wrap">Software decisions carry operational, financial, and human consequences. We treat data, access, and architecture with the discipline those consequences demand. Trust is not a marketing claim it’s demonstrated through consistency, transparency, and restraint in how systems are designed and maintained.</p>
    </div>
  );
}

function SecondaryCta() {
  return (
    <div className="backdrop-blur-[10px] h-[52px] relative rounded-[80px] shrink-0" data-name="Secondary CTA">
      <div className="content-stretch flex gap-[10px] h-full items-center overflow-clip px-[24px] py-[6px] relative rounded-[inherit]">
        <div className="-translate-x-1/2 absolute flex h-[130.588px] items-center justify-center left-[calc(50%-98.13px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="flex-none rotate-[-46.28deg]">
            <div className="h-[30px] relative w-[152px]">
              <div className="absolute inset-[-180%_-35.53%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                  <g filter="url(#filter0_f_59_743)" id="Ellipse 2" style={{ mixBlendMode: "plus-lighter" }}>
                    <ellipse cx="130" cy="69" fill="var(--fill-0, white)" fillOpacity="0.6" rx="76" ry="15" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_59_743" width="260" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_59_743" stdDeviation="27" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white">Download Our Brochure to Know More</p>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-center left-[200px] top-[120px] w-[1520px]">
      <Frame />
      <div className="h-[600px] relative rounded-[10px] shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle703} />
      </div>
      <SecondaryCta />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#0d1e32] relative size-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[1912px] top-[calc(50%-56px)]">
        <div className="absolute inset-[-20.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2712 2712">
            <g filter="url(#filter0_f_62_734)" id="Ellipse 5">
              <circle cx="1356" cy="1356" fill="var(--fill-0, #0B396C)" r="956" />
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
      <Frame2 />
    </div>
  );
}