import svgPaths from "../assets/svgs/svg-9q3pxifh5g";

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start justify-center min-h-px min-w-px not-italic relative">
      <p className="font-['Helvetica_Now_Display:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#111] text-[24px]">Schedule a Meeting</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[23px] min-w-full relative shrink-0 text-[#3c3c3c] text-[14px] w-[min-content] whitespace-pre-wrap">We help enterprises, institutions, and public sector organizations design, build, and scale secure digital systems—backed by 20+ years of delivery experience and proven execution.</p>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="arrow-right-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="arrow-right-02">
          <path d="M30.8301 20H8.33008" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1dc32000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-black relative rounded-[100px] shrink-0 size-[80px]">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <ArrowRight1 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[10px]">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[40px] items-center px-[24px] py-[16px] relative size-full">
          <div className="-translate-x-1/2 absolute flex h-[186.408px] items-center justify-center left-[calc(50%-399.94px)] mix-blend-plus-lighter top-[-53px] w-[180.116px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-46.28deg]">
              <div className="h-[30px] relative w-[229.237px]">
                <div className="absolute inset-[-180%_-23.56%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337.237 138">
                    <g filter="url(#filter0_f_61_224)" id="Ellipse 2" style={{ mixBlendMode: "plus-lighter" }}>
                      <ellipse cx="168.618" cy="69" fill="var(--fill-0, white)" fillOpacity="0.8" rx="114.618" ry="15" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_61_224" width="337.237" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_61_224" stdDeviation="27" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Frame3 />
          <Frame2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function PrimaryCta() {
  return (
    <div className="absolute bg-[rgba(185,255,231,0.2)] content-stretch flex items-center left-0 overflow-clip rounded-[10px] top-0 w-[800px]" data-name="Primary CTA">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start justify-center min-h-px min-w-px not-italic relative text-white">
      <p className="font-['Helvetica_Now_Display:Bold',sans-serif] leading-[normal] relative shrink-0 text-[24px]">Schedule a Meeting</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[23px] min-w-full relative shrink-0 text-[14px] w-[min-content] whitespace-pre-wrap">We help enterprises, institutions, and public sector organizations design, build, and scale secure digital systems—backed by 20+ years of delivery experience and proven execution.</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="arrow-right-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="arrow-right-02">
          <path d="M30.8301 20H8.33008" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1dc32000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-black relative rounded-[100px] shrink-0 size-[80px]">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <ArrowRight />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-black flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[10px]">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[40px] items-center px-[24px] py-[16px] relative size-full">
          <Frame4 />
          <div className="-translate-x-1/2 absolute flex h-[186.408px] items-center justify-center left-[calc(50%+340.06px)] mix-blend-plus-lighter top-[-24px] w-[180.116px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-46.28deg]">
              <div className="h-[30px] relative w-[229.237px]">
                <div className="absolute inset-[-180%_-23.56%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337.237 138">
                    <g filter="url(#filter0_f_61_224)" id="Ellipse 2" style={{ mixBlendMode: "plus-lighter" }}>
                      <ellipse cx="168.618" cy="69" fill="var(--fill-0, white)" fillOpacity="0.8" rx="114.618" ry="15" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_61_224" width="337.237" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_61_224" stdDeviation="27" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function PrimaryCta1() {
  return (
    <div className="absolute left-0 rounded-[10px] top-[132px] w-[800px]" data-name="Primary CTA">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Frame1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <PrimaryCta />
      <PrimaryCta1 />
    </div>
  );
}
