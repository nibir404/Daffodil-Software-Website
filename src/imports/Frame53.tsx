import svgPaths from "./svg-ft5evtsgo9";

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center not-italic relative shrink-0 text-center w-[1520px]">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[75px] relative shrink-0 text-[#111] text-[64px]">Industries We Serve</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#3c3c3c] text-[16px] w-[720px] whitespace-pre-wrap">We understand that every industry operates differently. Our solutions are tailored to meet sector-specific challenges and compliance needs.</p>
    </div>
  );
}

function GlobalEducation() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="global-education">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="global-education">
          <path d={svgPaths.p6289700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p259b5900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p15fab0d0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Education() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Education">
      <GlobalEducation />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-gradient-to-b from-[rgba(44,246,152,0.75)] relative rounded-[10px] shrink-0 size-[80px] to-[#4ac4f0]">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Education />
      </div>
      <div aria-hidden="true" className="absolute border-3 border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white relative rounded-[80px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] relative rounded-[inherit]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px]">SIS</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white relative rounded-[80px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] relative rounded-[inherit]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px]">LMS</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white relative rounded-[80px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] relative rounded-[inherit]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px]">Academic ERP</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame5 />
      <Frame6 />
      <Frame9 />
    </div>
  );
}

function ArrowLeft5() {
  return (
    <div className="relative size-[24px]" data-name="arrow-left-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left-02">
          <path d="M5.5 12.002H19" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p7a91280} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame46 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ArrowLeft5 />
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[20px] w-full whitespace-pre-wrap">{`Education ERP & Management Systems`}</p>
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[16px] w-full whitespace-pre-wrap">Academic, administrative, and learning systems built for scale, data accuracy, and operational efficiency.</p>
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px overflow-clip relative">
      <Frame37 />
      <Frame36 />
    </div>
  );
}

function IndustryWhiteMode() {
  return (
    <div className="bg-white flex-[1_0_0] h-[260px] min-h-px min-w-px relative rounded-[10px]" data-name="Industry White Mode">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <Frame8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Healtcare() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="healtcare">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="healtcare">
          <path d={svgPaths.peb9b400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p2076be00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p22d978c0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Healthcare() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Healthcare">
      <Healtcare />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-gradient-to-b from-[rgba(44,246,152,0.75)] relative rounded-[10px] shrink-0 size-[80px] to-[#4ac4f0]">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Healthcare />
      </div>
      <div aria-hidden="true" className="absolute border-3 border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white relative rounded-[80px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] relative rounded-[inherit]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px]">HMS</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white relative rounded-[80px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] relative rounded-[inherit]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px]">Clinic Management</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white relative rounded-[80px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] relative rounded-[inherit]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px]">Telemedicine</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame12 />
      <Frame13 />
      <Frame15 />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative size-[24px]" data-name="arrow-left-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left-02">
          <path d="M5.5 12.002H19" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p7a91280} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-[113px] w-[453px]">
      <Frame47 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ArrowLeft />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#111] text-[20px] w-[min-content] whitespace-pre-wrap">{`Healthcare Software Solutions `}</p>
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#111] text-[16px] w-[min-content] whitespace-pre-wrap">Secure, compliant digital systems supporting hospitals, clinics, and healthcare operations.</p>
      <Frame11 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px overflow-clip relative">
      <Frame />
      <Frame38 />
    </div>
  );
}

function Component() {
  return (
    <div className="flex-[1_0_0] h-[260px] min-h-px min-w-px opacity-80 relative rounded-[10px]" data-name="Component 6">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[20px] relative size-full">
          <Frame10 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Package() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="package">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="package">
          <path d={svgPaths.p340faa00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p185b2c80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 18L12 19.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M25.5 6L10.5 13.5" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Retail() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Retail">
      <Package />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-gradient-to-b from-[rgba(44,246,152,0.75)] relative rounded-[10px] shrink-0 size-[80px] to-[#4ac4f0]">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Retail />
      </div>
      <div aria-hidden="true" className="absolute border-3 border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white relative rounded-[80px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] relative rounded-[inherit]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px]">Inventory</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white relative rounded-[80px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] relative rounded-[inherit]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px]">POS</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white relative rounded-[80px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] relative rounded-[inherit]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px]">CRM</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame18 />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function ArrowLeft1() {
  return (
    <div className="relative size-[24px]" data-name="arrow-left-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left-02">
          <path d="M5.5 12.002H19" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p7a91280} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-[113px] w-[453px]">
      <Frame48 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ArrowLeft1 />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#111] text-[20px] w-[min-content] whitespace-pre-wrap">{`Retail & E-Commerce Software`}</p>
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#111] text-[16px] w-[min-content] whitespace-pre-wrap">Reliable, auditable platforms designed for governance, transparency, and nationwide deployment.</p>
      <Frame17 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px overflow-clip relative">
      <Frame1 />
      <Frame39 />
    </div>
  );
}

function Component1() {
  return (
    <div className="flex-[1_0_0] h-[260px] min-h-px min-w-px opacity-80 relative rounded-[10px]" data-name="Component 7">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[20px] relative size-full">
          <Frame16 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <IndustryWhiteMode />
      <Component />
      <Component1 />
    </div>
  );
}

function Blockchain() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="blockchain-04">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="blockchain-04">
          <path d={svgPaths.p1cc37eb0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2a84e900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c09f900} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p24534600} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M18 9H13.5" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M22.5 27H18" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M27 18V13.5" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 22.5V18" id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Manufacture() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Manufacture">
      <Blockchain />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-gradient-to-b from-[rgba(44,246,152,0.75)] relative rounded-[10px] shrink-0 size-[80px] to-[#4ac4f0]">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Manufacture />
      </div>
      <div aria-hidden="true" className="absolute border-3 border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white relative rounded-[80px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] relative rounded-[inherit]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px]">Production Planning</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white relative rounded-[80px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] relative rounded-[inherit]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px]">Procurement</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-white relative rounded-[80px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] relative rounded-[inherit]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px]">ERP</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame23 />
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function ArrowLeft2() {
  return (
    <div className="relative size-[24px]" data-name="arrow-left-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left-02">
          <path d="M5.5 12.002H19" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p7a91280} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-[113px] w-[453px]">
      <Frame50 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ArrowLeft2 />
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#111] text-[20px] w-[min-content] whitespace-pre-wrap">Manufacturing Software Solutions</p>
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#111] text-[16px] w-[min-content] whitespace-pre-wrap">ERP, workflow, and analytics systems tailored to complex organizational structures.</p>
      <Frame22 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px overflow-clip relative">
      <Frame2 />
      <Frame40 />
    </div>
  );
}

function Component2() {
  return (
    <div className="h-[260px] opacity-80 relative rounded-[10px] shrink-0 w-[493px]" data-name="Component 7">
      <div className="content-stretch flex items-center overflow-clip p-[20px] relative rounded-[inherit] size-full">
        <Frame21 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Building() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="building-06">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="building-06">
          <path d={svgPaths.p23583e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p5aec700} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 9H15M12 13.5H15M12 18H15" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2770bfe0} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Realstate() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Realstate">
      <Building />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-gradient-to-b from-[rgba(44,246,152,0.75)] relative rounded-[10px] shrink-0 size-[80px] to-[#4ac4f0]">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Realstate />
      </div>
      <div aria-hidden="true" className="absolute border-3 border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-white relative rounded-[80px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] relative rounded-[inherit]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px]">Tenant Management</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white relative rounded-[80px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] relative rounded-[inherit]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px]">Billing</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-white relative rounded-[80px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] relative rounded-[inherit]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px]">Maintenance</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame28 />
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function ArrowLeft3() {
  return (
    <div className="relative size-[24px]" data-name="arrow-left-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left-02">
          <path d="M5.5 12.002H19" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p7a91280} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-[113px] w-[453px]">
      <Frame51 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ArrowLeft3 />
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#111] text-[20px] w-[min-content] whitespace-pre-wrap">Real Estate Software</p>
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#111] text-[16px] w-[min-content] whitespace-pre-wrap">Commerce, inventory, and customer experience solutions optimized for performance and growth.</p>
      <Frame27 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px overflow-clip relative">
      <Frame3 />
      <Frame41 />
    </div>
  );
}

function Component3() {
  return (
    <div className="h-[260px] opacity-80 relative rounded-[10px] shrink-0 w-[493px]" data-name="Component 6">
      <div className="content-stretch flex items-center overflow-clip p-[20px] relative rounded-[inherit] size-full">
        <Frame26 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Finance1() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Finance">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Finance">
          <path d={svgPaths.p24d4c900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p35edcf00} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="2" />
          <path d="M6 33H30" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Finance() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Finance">
      <Finance1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-gradient-to-b from-[rgba(44,246,152,0.75)] relative rounded-[10px] shrink-0 size-[80px] to-[#4ac4f0]">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Finance />
      </div>
      <div aria-hidden="true" className="absolute border-3 border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-white relative rounded-[80px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] relative rounded-[inherit]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px]">Payroll</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-white relative rounded-[80px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] relative rounded-[inherit]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px]">Accounting</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-white relative rounded-[80px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] relative rounded-[inherit]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px]">Bank ERP</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame33 />
      <Frame34 />
      <Frame35 />
    </div>
  );
}

function ArrowLeft4() {
  return (
    <div className="relative size-[24px]" data-name="arrow-left-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left-02">
          <path d="M5.5 12.002H19" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p7a91280} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-[113px] w-[453px]">
      <Frame52 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ArrowLeft4 />
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#111] text-[20px] w-[min-content] whitespace-pre-wrap">Finance Management</p>
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#111] text-[16px] w-[min-content] whitespace-pre-wrap">Next-gen finance and banking systems that move money securely, manage risk intelligently, and scale effortlessly.</p>
      <Frame32 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px overflow-clip relative">
      <Frame4 />
      <Frame42 />
    </div>
  );
}

function Component4() {
  return (
    <div className="h-[260px] opacity-80 relative rounded-[10px] shrink-0 w-[494px]" data-name="Component 8">
      <div className="content-stretch flex items-center overflow-clip p-[20px] relative rounded-[inherit] size-full">
        <Frame31 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[1520px]">
      <Frame43 />
      <Frame49 />
    </div>
  );
}

export default function Frame14() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[60px] items-center justify-center px-[200px] py-[120px] relative size-full">
      <Frame45 />
      <Frame44 />
    </div>
  );
}