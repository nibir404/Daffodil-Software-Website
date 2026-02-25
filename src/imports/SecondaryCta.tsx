export default function SecondaryCta() {
  return (
    <div className="backdrop-blur-[10px] relative rounded-[80px] size-full" data-name="Secondary CTA">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[24px] py-[6px] relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 absolute flex h-[130.588px] items-center justify-center left-[calc(50%-98.13px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "154" } as React.CSSProperties}>
          <div className="flex-none rotate-[-46.28deg]">
            <div className="h-[30px] relative w-[152px]">
              <div className="absolute inset-[-180%_-35.53%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                  <g filter="url(#filter0_f_3_447)" id="Ellipse 2" style={{ mixBlendMode: "plus-lighter" }}>
                    <ellipse cx="130" cy="69" fill="var(--fill-0, white)" fillOpacity="0.6" rx="76" ry="15" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_3_447" width="260" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_3_447" stdDeviation="27" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white">View All Case Studies</p>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}