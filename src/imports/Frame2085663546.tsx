function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center not-italic relative shrink-0 text-[#111] w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[75px] relative shrink-0 text-[64px]">Key Benefits for Your Organization</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[16px] text-center w-[796px] whitespace-pre-wrap">Smart Business 24 helps organizations improve efficiency, gain real-time visibility, and maintain control across finance, operations, and teams through a single, scalable ERP platform.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center py-[20px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[50px] not-italic relative shrink-0 text-[#111] text-[36px]">Improved operational efficiency and reduced manual workload</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center py-[20px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[50px] not-italic relative shrink-0 text-[#111] text-[36px]">Accurate, real-time financial and management reporting</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center py-[20px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[50px] not-italic relative shrink-0 text-[#111] text-[36px]">Better coordination across departments</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center py-[20px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[50px] not-italic relative shrink-0 text-[#111] text-[36px]">Higher system adoption through intuitive workflows</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center py-[20px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[50px] not-italic relative shrink-0 text-[#111] text-[36px]">Secure and compliant ERP environment</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

export default function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center justify-center relative size-full">
      <Frame />
      <Frame1 />
      <div className="backdrop-blur-[10px] h-[52px] relative rounded-[80px] shrink-0" data-name="Secondary CTA">
        <div className="content-stretch flex gap-[10px] h-full items-center overflow-clip px-[24px] py-[6px] relative rounded-[inherit]">
          <div className="-translate-x-1/2 absolute flex h-[130.588px] items-center justify-center left-[calc(50%-98.63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="flex-none rotate-[-46.28deg]">
              <div className="h-[30px] relative w-[152px]">
                <div className="absolute inset-[-180%_-35.53%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                    <g filter="url(#filter0_f_101_1492)" id="Ellipse 2" style={{ mixBlendMode: "plus-lighter" }}>
                      <ellipse cx="130" cy="69" fill="var(--fill-0, white)" fillOpacity="0.6" rx="76" ry="15" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_101_1492" width="260" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_101_1492" stdDeviation="27" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[16px]">Download Our Brochure to Know More</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#111] border-solid inset-0 pointer-events-none rounded-[80px]" />
      </div>
    </div>
  );
}