import svgPaths from "./svg-vrs4ws700k";
import imgImage57 from "figma:asset/90090fd64c815b759af9b862ff05a9433d159c53.png";

function Frame6() {
  return (
    <div className="bg-[rgba(245,245,247,0.1)] content-stretch flex items-center justify-center px-[12px] py-[10px] relative rounded-[10px] shrink-0">
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white">Free consultation · No obligation · Response within 24 hours</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica_Now_Display:Medium',sans-serif] items-start pb-[36px] relative shrink-0 text-[80px] w-full">
      <p className="leading-[normal] min-w-full relative shrink-0 text-white w-[min-content] whitespace-pre-wrap">{`Ready to build a secure, scalable `}</p>
      <p className="leading-[0] relative shrink-0 text-[#111] text-[0px]">
        <span className="leading-[normal] text-white">{`software `}</span>
        <span className="bg-clip-text bg-gradient-to-r from-[#567dff] from-[39.904%] leading-[normal] to-[#2cf698] to-[85.096%]" style={{ WebkitTextFillColor: "transparent" }}>
          system?
        </span>
        <span className="leading-[normal]">{` `}</span>
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full">
      <Frame2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[16px] text-white w-[750px] whitespace-pre-wrap">Tell us about your challenge. Our experts will help you evaluate the right approach clearly, honestly, and without pressure. Cause we are trusted software development company in Bangladesh with 20+ years of excellence.</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame8 />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-right-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
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
    <div className="bg-[#111] relative rounded-[100px] shrink-0 size-[36px]">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <ArrowRight />
      </div>
      <div aria-hidden="true" className="absolute border border-[#111] border-solid inset-0 pointer-events-none rounded-[100px]" />
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
                <g filter="url(#filter0_f_1_63237)" id="Ellipse 2" style={{ mixBlendMode: "plus-lighter" }}>
                  <ellipse cx="130" cy="69" fill="var(--fill-0, white)" fillOpacity="0.8" rx="76" ry="15" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_1_63237" width="260" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_63237" stdDeviation="27" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[16px]">Schedule a Meeting</p>
      <Frame1 />
    </div>
  );
}

function PrimaryCta() {
  return (
    <div className="content-stretch flex h-[52px] items-center overflow-clip relative shrink-0" data-name="Primary CTA">
      <Frame />
    </div>
  );
}

function SecondaryCta() {
  return (
    <div className="backdrop-blur-[10px] h-[52px] relative rounded-[80px] shrink-0" data-name="Secondary CTA">
      <div className="content-stretch flex gap-[10px] h-full items-center overflow-clip px-[24px] py-[6px] relative rounded-[inherit]">
        <div className="-translate-x-1/2 absolute flex h-[130.588px] items-center justify-center left-[calc(50%-98.63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="flex-none rotate-[-46.28deg]">
            <div className="h-[30px] relative w-[152px]">
              <div className="absolute inset-[-180%_-35.53%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                  <g filter="url(#filter0_f_1_54928)" id="Ellipse 2" style={{ mixBlendMode: "plus-lighter" }}>
                    <ellipse cx="130" cy="69" fill="var(--fill-0, white)" fillOpacity="0.6" rx="76" ry="15" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_1_54928" width="260" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_1_54928" stdDeviation="27" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white">Explore Solution</p>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <PrimaryCta />
      <SecondaryCta />
    </div>
  );
}

function Frame3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-start left-[200px] top-1/2 w-[1520px]">
      <Frame5 />
      <Frame4 />
    </div>
  );
}

export default function Cta() {
  return (
    <div className="bg-gradient-to-b from-white relative size-full to-[#c4eeda]" data-name="CTA">
      <div className="-translate-y-1/2 absolute h-[1200px] left-0 top-[calc(50%-15.5px)] w-[1920px]" data-name="image 57">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage57} />
      </div>
      <div className="-translate-x-1/2 absolute flex items-center justify-center left-[calc(50%+1134.5px)] size-[1337px] top-[50px]">
        <div className="flex-none rotate-180">
          <div className="relative size-[1337px]">
            <div className="absolute inset-[-29.47%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2125 2125">
                <g filter="url(#filter0_f_1_37361)" id="Ellipse 142">
                  <circle cx="1062.5" cy="1062.5" fill="var(--fill-0, #AAFDD6)" r="668.5" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2125" id="filter0_f_1_37361" width="2125" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_37361" stdDeviation="197" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame3 />
    </div>
  );
}