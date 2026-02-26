import imgImage32 from "figma:asset/3fb78841a0d9e817e7f89226c881690647824d8e.png";
import imgImage75 from "figma:asset/c3c82d7da3841ff7a18bc6454bcbd60438c094da.png";

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <div className="h-[50px] relative shrink-0 w-[150px]" data-name="image 32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[224.14%] left-[-10.97%] max-w-none top-[-50.83%] w-[110.74%]" src={imgImage32} />
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[23px] min-w-full not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Enterprise Resource Planning (ERP) software that seamlessly integrates all facets of your business operations including accounting, inventory, CRM, HR, and supply chain management into one powerful platform with real-time analytics.</p>
    </div>
  );
}

function Solutions() {
  return (
    <div className="content-stretch flex gap-[10px] h-[50px] items-center py-[10px] relative shrink-0 w-full" data-name="Solutions">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black">Sales Modules</p>
    </div>
  );
}

function Solutions1() {
  return (
    <div className="content-stretch flex gap-[10px] h-[50px] items-center py-[10px] relative shrink-0 w-full" data-name="Solutions">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black">Procurement Modules</p>
    </div>
  );
}

function Solutions2() {
  return (
    <div className="content-stretch flex gap-[10px] h-[50px] items-center py-[10px] relative shrink-0 w-full" data-name="Solutions">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black">Manufacturing Modules</p>
    </div>
  );
}

function Solutions3() {
  return (
    <div className="content-stretch flex gap-[10px] h-[50px] items-center py-[10px] relative shrink-0 w-full" data-name="Solutions">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black">Financial Modules</p>
    </div>
  );
}

function Solutions4() {
  return (
    <div className="content-stretch flex gap-[10px] h-[50px] items-center py-[10px] relative shrink-0 w-full" data-name="Solutions">
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black">HR Modules</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Solutions />
      <Solutions1 />
      <Solutions2 />
      <Solutions3 />
      <Solutions4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica_Now_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[24px]">Core Modules</p>
      <Frame />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#4493c5] h-[285px] overflow-clip relative rounded-[10px] shrink-0 w-[400px]">
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-[285px] left-0 to-[#4ac4f0] w-[53px]" />
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-[285px] left-[106px] to-[#4ac4f0] w-[53px]" />
      <div className="absolute bottom-0 flex h-[285px] items-center justify-center left-[53px] w-[53px]">
        <div className="flex-none rotate-180">
          <div className="bg-gradient-to-b from-[rgba(255,255,255,0)] h-[285px] to-[#4ac4f0] w-[53px]" />
        </div>
      </div>
      <div className="absolute h-[255px] left-[11px] top-[15px] w-[378px]" data-name="image 75">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage75} />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

export default function Frame6() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start p-[40px] relative rounded-[10px] size-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Frame1 />
      <div className="backdrop-blur-[10px] h-[52px] relative rounded-[80px] shrink-0" data-name="Secondary CTA">
        <div className="content-stretch flex gap-[10px] h-full items-center overflow-clip px-[24px] py-[6px] relative rounded-[inherit]">
          <div className="-translate-x-1/2 absolute flex h-[130.588px] items-center justify-center left-[calc(50%-98.63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
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
          <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[16px]">Explore Product</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#111] border-solid inset-0 pointer-events-none rounded-[80px]" />
      </div>
    </div>
  );
}
