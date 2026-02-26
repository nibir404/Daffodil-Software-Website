import svgPaths from "../assets/svgs/svg-t24mkuz9zv";
import imgImage76 from "figma:asset/713ddf1d49ef2405bdadc0b93c67d6a51b4a8ad4.png";

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica_Now_Display:Medium',sans-serif] items-start leading-[normal] pb-[20px] relative shrink-0 text-[64px] w-full">
      <p className="relative shrink-0">{`Custom Web & App Development`}</p>
      <p className="relative shrink-0">for Scalable Digital Products</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-white w-full">
      <Frame2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] w-[796px] whitespace-pre-wrap">We design and develop high-performance web and mobile applications tailored to your business goals, users, and growth strategy from concept to long-term scalability</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] relative shrink-0 text-[20px] w-[796px] whitespace-pre-wrap">Built for performance, security, and long-term growth—not just launch.</p>
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

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
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
      <div className="-translate-x-1/2 absolute flex h-[130.588px] items-center justify-center left-[calc(50%-105.13px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-46.28deg]">
          <div className="h-[30px] relative w-[152px]">
            <div className="absolute inset-[-180%_-35.53%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                <g filter="url(#filter0_f_62_753)" id="Ellipse 2" style={{ mixBlendMode: "plus-lighter" }}>
                  <ellipse cx="130" cy="69" fill="var(--fill-0, white)" fillOpacity="0.8" rx="76" ry="15" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_62_753" width="260" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_62_753" stdDeviation="27" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[16px]">Develop My Website</p>
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

function MenuArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Menu/arrow-right-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Menu/arrow-right-02">
          <path d="M12.333 8H3.33301" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p638bf80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white">Talk to A Service Expert</p>
      <MenuArrowRight />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <PrimaryCta />
      <Frame4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-start left-[200px] top-1/2 w-[1520px]">
      <Frame6 />
      <Frame5 />
    </div>
  );
}

export default function Frame9() {
  return (
    <div className="relative size-full">
      <div className="-translate-x-1/2 absolute flex h-[800px] items-center justify-center left-1/2 top-0 w-[1920px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "2164" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[1920px] relative w-[800px]" data-name="image 76">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute h-[-544374660573338100%] left-[870999381613466200%] max-w-none top-[71816084552021580%] w-[-870999381613466200%]" src={imgImage76} />
              </div>
              <div className="absolute bg-gradient-to-b from-[14.567%] from-[rgba(0,0,0,0)] inset-0 to-[89.004%] to-[rgba(0,0,0,0.8)]" />
            </div>
          </div>
        </div>
      </div>
      <Frame3 />
    </div>
  );
}
