import svgPaths from "./svg-odj93ybx11";

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
      <div className="-translate-x-1/2 absolute flex h-[130.588px] items-center justify-center left-[calc(50%-105.13px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
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
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[16px]">See All FAQ</p>
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

function Frame2() {
  return (
    <div className="bg-[#f5f5f7] content-stretch flex flex-col gap-[24px] items-start p-[40px] relative rounded-[10px] shrink-0">
      <div className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[75px] not-italic relative shrink-0 text-[#111] text-[64px] whitespace-nowrap">
        <p className="mb-0">{`Frequently Asked `}</p>
        <p>Questions</p>
      </div>
      <PrimaryCta />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">What does Daffodil Software Limited specialize in?</p>
    </div>
  );
}

function ArrowDown7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-down-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-down-01">
          <path d={svgPaths.p181e3c80} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FaqLight() {
  return (
    <div className="relative shrink-0 w-[893px]" data-name="Faq Light">
      <div className="content-stretch flex gap-[16px] items-start overflow-clip px-[16px] py-[20px] relative rounded-[inherit] w-full">
        <Frame5 />
        <ArrowDown7 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Who are the primary clients of Daffodil Software Limited?</p>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-down-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-down-01">
          <path d={svgPaths.p181e3c80} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FaqLight1() {
  return (
    <div className="relative shrink-0 w-[893px]" data-name="Faq Light">
      <div className="content-stretch flex gap-[16px] items-start overflow-clip px-[16px] py-[20px] relative rounded-[inherit] w-full">
        <Frame6 />
        <ArrowDown />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px] w-full whitespace-pre-wrap">What makes Daffodil Software Limited different from other software companies?</p>
    </div>
  );
}

function ArrowDown1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-down-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-down-01">
          <path d={svgPaths.p181e3c80} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FaqLight2() {
  return (
    <div className="relative shrink-0 w-[893px]" data-name="Faq Light">
      <div className="content-stretch flex gap-[16px] items-start overflow-clip px-[16px] py-[20px] relative rounded-[inherit] w-full">
        <Frame7 />
        <ArrowDown1 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px] w-full whitespace-pre-wrap">Does Daffodil Software Limited provide customized solutions or ready-made products?</p>
    </div>
  );
}

function ArrowDown2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-down-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-down-01">
          <path d={svgPaths.p181e3c80} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FaqLight3() {
  return (
    <div className="relative shrink-0 w-[893px]" data-name="Faq Light">
      <div className="content-stretch flex gap-[16px] items-start overflow-clip px-[16px] py-[20px] relative rounded-[inherit] w-full">
        <Frame8 />
        <ArrowDown2 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">How does Daffodil Software Limited ensure software quality and security?</p>
    </div>
  );
}

function ArrowDown3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-down-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-down-01">
          <path d={svgPaths.p181e3c80} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FaqLight4() {
  return (
    <div className="relative shrink-0 w-[893px]" data-name="Faq Light">
      <div className="content-stretch flex gap-[16px] items-start overflow-clip px-[16px] py-[20px] relative rounded-[inherit] w-full">
        <Frame9 />
        <ArrowDown3 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px] w-full whitespace-pre-wrap">Can Daffodil Software Limited handle large-scale and enterprise-level projects?</p>
    </div>
  );
}

function ArrowDown4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-down-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-down-01">
          <path d={svgPaths.p181e3c80} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FaqLight5() {
  return (
    <div className="relative shrink-0 w-[893px]" data-name="Faq Light">
      <div className="content-stretch flex gap-[16px] items-start overflow-clip px-[16px] py-[20px] relative rounded-[inherit] w-full">
        <Frame10 />
        <ArrowDown4 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">What technologies does Daffodil Software Limited work with?</p>
    </div>
  );
}

function ArrowDown5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-down-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-down-01">
          <path d={svgPaths.p181e3c80} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FaqLight6() {
  return (
    <div className="relative shrink-0 w-[893px]" data-name="Faq Light">
      <div className="content-stretch flex gap-[16px] items-start overflow-clip px-[16px] py-[20px] relative rounded-[inherit] w-full">
        <Frame11 />
        <ArrowDown5 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px] w-full whitespace-pre-wrap">Does Daffodil Software Limited offer post-deployment support and maintenance?</p>
    </div>
  );
}

function ArrowDown6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-down-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-down-01">
          <path d={svgPaths.p181e3c80} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FaqLight7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip px-[16px] py-[20px] relative shrink-0 w-[893px]" data-name="Faq Light">
      <Frame12 />
      <ArrowDown6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <FaqLight />
      <FaqLight1 />
      <FaqLight2 />
      <FaqLight3 />
      <FaqLight4 />
      <FaqLight5 />
      <FaqLight6 />
      <FaqLight7 />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="content-stretch flex gap-[40px] items-start px-[200px] relative size-full">
      <Frame2 />
      <Frame3 />
    </div>
  );
}