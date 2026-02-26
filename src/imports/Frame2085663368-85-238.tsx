function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center not-italic relative shrink-0 text-center w-[1341px] whitespace-pre-wrap">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[75px] relative shrink-0 text-[64px] text-white w-[723px]">Our Core Development Capabilities</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.7)] w-[986px]">Our core development capabilities span the entire web and app lifecycle, delivering secure, scalable, and high-performance digital products built for long-term growth.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[40px] relative shrink-0 w-[1520px]">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic relative shrink-0 text-[36px] text-white w-full whitespace-pre-wrap">Custom Web Applications</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.7)] w-full whitespace-pre-wrap">Secure, scalable web platforms built for performance and growth.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start leading-[30px] not-italic p-[40px] relative w-full whitespace-pre-wrap">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[36px] text-white w-full">UX/UI Design</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[20px] text-[rgba(255,255,255,0.7)] w-full">User journeys, wireframes, and interfaces focused on clarity and engagement.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start leading-[30px] not-italic p-[40px] relative w-full whitespace-pre-wrap">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[36px] text-white w-full">{`Architecture & Development`}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[20px] text-[rgba(255,255,255,0.7)] w-full">Clean, scalable code using modern frameworks and best practices.</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start leading-[30px] not-italic p-[40px] relative w-full whitespace-pre-wrap">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[36px] text-white w-full">{`Testing & Quality Assurance`}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[20px] text-[rgba(255,255,255,0.7)] w-full">Performance, security, and usability testing across devices.</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start leading-[30px] not-italic p-[40px] relative w-full whitespace-pre-wrap">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[36px] text-white w-full">{`Deployment & Launch`}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[20px] text-[rgba(255,255,255,0.7)] w-full">Smooth release with infrastructure and monitoring in place.</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start leading-[30px] not-italic p-[40px] relative w-full whitespace-pre-wrap">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[36px] text-white w-full">Continuous Improvement</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[20px] text-[rgba(255,255,255,0.7)] w-full">Ongoing optimization, feature updates, and scaling support.</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[10px] shrink-0 w-[1520px]">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame2 />
        <Frame3 />
        <Frame4 />
        <Frame5 />
        <Frame6 />
        <Frame9 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.1)] border-solid inset-[-2px] pointer-events-none rounded-[12px]" />
    </div>
  );
}

function SecondaryCta() {
  return (
    <div className="backdrop-blur-[10px] h-[52px] relative rounded-[80px] shrink-0" data-name="Secondary CTA">
      <div className="content-stretch flex gap-[10px] h-full items-center overflow-clip px-[24px] py-[6px] relative rounded-[inherit]">
        <div className="-translate-x-1/2 absolute flex h-[130.588px] items-center justify-center left-[calc(50%-98.13px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "154" } as React.CSSProperties}>
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
        <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white">{`Not Relevant? Explore More Services `}</p>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-center justify-center left-[200px] top-[120px] w-[1520px]">
      <Frame />
      <Frame8 />
      <SecondaryCta />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#0d1e32] relative size-full">
      <div className="-translate-x-1/2 absolute left-[calc(50%+2px)] size-[1940px] top-0">
        <div className="absolute inset-[-20.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2740 2740">
            <g filter="url(#filter0_f_82_1217)" id="Ellipse 5">
              <circle cx="1370" cy="1370" fill="var(--fill-0, #0B396C)" r="970" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2740" id="filter0_f_82_1217" width="2740" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_82_1217" stdDeviation="200" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame7 />
    </div>
  );
}
