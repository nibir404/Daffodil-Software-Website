import svgPaths from "../assets/svgs/svg-p7xrrkor7f";
import imgImage78 from "figma:asset/b07939406d564d7731d11d7049c6203176375763.png";

function GlobalEducation() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="global-education">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="global-education">
          <path d={svgPaths.p33efbe80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p21318440} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p13899700} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[10px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
      <GlobalEducation />
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white">Education</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica_Now_Display:Medium',sans-serif] items-center justify-center leading-[normal] pb-[20px] relative shrink-0 text-[64px]">
      <p className="relative shrink-0">University ERP Systems</p>
      <p className="relative shrink-0">Designed for Real Academic Operations</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-white w-full">
      <Frame2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] min-w-full relative shrink-0 text-[20px] text-center w-[min-content] whitespace-pre-wrap">Universities manage far more than classes and students. Admissions, academics, examinations, finance, HR, and compliance must work together without friction. Daffodil Software Limited builds custom university ERP and management systems that centralize operations, improve visibility, and scale with institutional growth.</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0">
      <Frame6 />
      <Frame5 />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-right-02">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right-02">
          <path d="M12.3321 8H3.33203" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p16251580} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-black relative rounded-[100px] shrink-0 size-[36px]">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <ArrowRight />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#01e067] content-stretch flex gap-[10px] h-full items-center overflow-clip pl-[24px] pr-[8px] py-[6px] relative rounded-[80px] shrink-0">
      <div className="-translate-x-1/2 absolute flex h-[130.588px] items-center justify-center left-[calc(50%-105.63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[-46.28deg]">
          <div className="h-[30px] relative w-[152px]">
            <div className="absolute inset-[-180%_-35.53%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                <g filter="url(#filter0_f_101_1421)" id="Ellipse 2" style={{ mixBlendMode: "plus-lighter" }}>
                  <ellipse cx="130" cy="69" fill="var(--fill-0, white)" fillOpacity="0.8" rx="76" ry="15" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_101_1421" width="260" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_101_1421" stdDeviation="27" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[16px]">Request ERP Consultation</p>
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="content-stretch flex h-[52px] items-center overflow-clip relative shrink-0" data-name="Primary CTA">
        <Frame />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-center justify-center left-[calc(50%+0.5px)] top-1/2">
      <Frame9 />
      <Frame4 />
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="relative size-full" data-name="Hero Section">
      <div className="absolute h-[815px] left-0 top-0 w-[1920px]" data-name="image 78">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage78} />
      </div>
      <Frame3 />
    </div>
  );
}
