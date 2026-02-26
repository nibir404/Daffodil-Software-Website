import svgPaths from "../assets/svgs/svg-0bxa5wlq1n";
import imgImage57 from "figma:asset/90090fd64c815b759af9b862ff05a9433d159c53.png";

function Frame5() {
  return (
    <div className="bg-[rgba(245,245,247,0.1)] content-stretch flex items-center justify-center px-[12px] py-[10px] relative rounded-[10px] shrink-0">
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white">Free consultation · No obligation · Response within 24 hours</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica_Now_Display:Medium',sans-serif] items-start leading-[normal] pb-[24px] relative shrink-0 text-[64px]">
      <p className="relative shrink-0">{`Have a project idea in mind? `}</p>
      <p className="relative shrink-0">{`Let's get started`}</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-white w-full">
      <Frame2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[16px] w-[487px] whitespace-pre-wrap">Our team is ready to transform your ideas into powerful, scalable software that drives your business forward.</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Frame5 />
      <Frame7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame4 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#cfffe8] items-center px-[10px] py-[4px] relative rounded-[3px] shrink-0 to-[rgba(44,246,152,0.75)] w-[74px]">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[16px]">Service</p>
    </div>
  );
}

function Frame21() {
  return (
    <button className="content-stretch cursor-pointer flex items-center justify-center px-[10px] py-[4px] relative shrink-0">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[16px] text-left">Product</p>
    </button>
  );
}

function Frame22() {
  return (
    <div className="bg-[#f5f5f7] content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center py-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#878787] text-[16px]">Roger Waters</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">Full Name</p>
      <Frame9 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center py-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#878787] text-[16px]">Ex. Mercedes</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">Company Name</p>
      <Frame12 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center py-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#878787] text-[16px]">you@example.com</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">Email</p>
      <Frame15 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame14 />
    </div>
  );
}

function ArrowDown1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-down-01">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-down-01">
          <path d={svgPaths.p181e3c80} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-between py-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#333] text-[16px]">Select Your Service</p>
      <ArrowDown1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">Service Required*</p>
      <Frame23 />
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-down-01">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-down-01">
          <path d={svgPaths.p181e3c80} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-between py-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#333] text-[16px]">Select Your Range</p>
      <ArrowDown />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">Project Budget*</p>
      <Frame25 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full">
      <Frame19 />
      <Frame24 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center py-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#878787] text-[16px]">Tell us more about your project</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">Project Details*</p>
      <Frame27 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Frame13 />
      <Frame16 />
      <Frame26 />
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
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[16px]">Send Inquiry</p>
      <Frame1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex gap-[60px] items-center left-[200px] top-[120px] w-[1520px]">
      <Frame3 />
      <div className="bg-white content-stretch flex flex-col gap-[40px] items-start p-[40px] relative rounded-[10px] shrink-0 w-[600px]" data-name="Contact White">
        <Frame22 />
        <Frame17 />
        <div className="content-stretch flex h-[52px] items-center overflow-clip relative shrink-0" data-name="Primary CTA">
          <Frame />
        </div>
      </div>
    </div>
  );
}

export default function Cta() {
  return (
    <div className="bg-gradient-to-b from-white relative size-full to-[#c4eeda]" data-name="CTA">
      <div className="-translate-y-1/2 absolute h-[1200px] left-0 top-[calc(50%-78px)] w-[1920px]" data-name="image 57">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage57} />
      </div>
      <div className="-translate-x-1/2 absolute flex items-center justify-center left-[calc(50%+1134.5px)] size-[1337px] top-[50px]">
        <div className="flex-none rotate-180">
          <div className="relative size-[1337px]">
            <div className="absolute inset-[-29.47%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2125 2125">
                <g filter="url(#filter0_f_101_1649)" id="Ellipse 142">
                  <circle cx="1062.5" cy="1062.5" fill="var(--fill-0, #AAFDD6)" r="668.5" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2125" id="filter0_f_101_1649" width="2125" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_101_1649" stdDeviation="197" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame18 />
    </div>
  );
}
