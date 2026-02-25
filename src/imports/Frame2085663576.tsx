function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center not-italic relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[75px] relative shrink-0 text-[#111] text-[64px]">University Software Solutions We Build</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#3c3c3c] text-[16px] text-center">We develop integrated systems tailored to university operations, including:</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center leading-[30px] not-italic p-[20px] relative w-full whitespace-pre-wrap">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111] text-[24px] w-full">{`University ERP & MIS`}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#3c3c3c] text-[16px] w-full">A centralized platform covering admissions, academics, examinations, finance, HR, inventory, and reporting.</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center leading-[30px] not-italic p-[20px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111] text-[24px]">{`Procurement & Inventory`}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Supplier management, purchase orders, GRN, stock valuation, inventory movement, reorder control.</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center leading-[30px] not-italic p-[20px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111] text-[24px]">Student Information System</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Complete lifecycle management of student data—from enrollment to graduation and transcripts.</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
      <Frame4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center leading-[30px] not-italic p-[20px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111] text-[24px]">{`Academic & Faculty Management`}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Course planning, faculty allocation, grading workflows, and academic approvals.</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center leading-[30px] not-italic p-[20px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111] text-[24px]">{`Online Admission & Fee Management`}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Digital admission forms, merit processing, payment collection, and automated notifications.</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center leading-[30px] not-italic p-[20px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111] text-[24px]">Role-Based Portals</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Dedicated dashboards for students, faculty members, administrators, and university leadership.</p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame6 />
      <Frame8 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-center justify-center left-[200px] top-[120px] w-[1520px]">
      <Frame />
      <Frame5 />
      <div className="backdrop-blur-[10px] h-[52px] relative rounded-[80px] shrink-0" data-name="Secondary CTA">
        <div className="content-stretch flex gap-[10px] h-full items-center overflow-clip px-[24px] py-[6px] relative rounded-[inherit]">
          <div className="-translate-x-1/2 absolute flex h-[130.588px] items-center justify-center left-[calc(50%-98.63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
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
          <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[16px]">Explore Other Industries</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#111] border-solid inset-0 pointer-events-none rounded-[80px]" />
      </div>
    </div>
  );
}

export default function Frame9() {
  return (
    <div className="bg-[#f5f5f7] relative size-full">
      <Frame7 />
    </div>
  );
}