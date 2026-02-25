import svgPaths from "./svg-outf9xqb1k";
import imgRectangle670 from "figma:asset/10d143d70f1b9dfd8eb8df14c6467d5846799931.png";

function Frame3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[260px] left-[calc(50%-0.17px)] top-1/2 w-[591px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[200px] left-1/2 rounded-[10px] top-1/2 w-[453px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[-5714769611.59%] left-[385777949.8%] max-w-none top-[5719333329.62%] w-[-1780849920.61%]" src={imgRectangle670} />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[200px] overflow-clip relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[30px] min-h-px min-w-px not-italic relative w-full">
      <div className="font-['Helvetica_Now_Display:Medium',sans-serif] relative shrink-0 text-[#111] text-[24px] whitespace-nowrap">
        <p className="mb-0">Integrated University Management System</p>
        <p>(IUMS)</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">A comprehensive ERP solution designed for higher education institutions to automate academic and administrative processes from admission to alumni management.</p>
    </div>
  );
}

function MenuArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Menu/arrow-right-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Menu/arrow-right-02">
          <path d="M12.333 8H3.33301" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p638bf80} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center py-[10px] relative shrink-0">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[16px]">View Details</p>
      <MenuArrowRight />
    </div>
  );
}

export default function Cards() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] size-full" data-name="Cards">
      <Frame2 />
      <Frame1 />
      <Frame />
      <div className="absolute h-[144px] left-[-34px] top-[679px] w-[470px]">
        <div className="absolute inset-[-277.78%_-85.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1270 944">
            <g filter="url(#filter0_f_45_25611)" id="Ellipse 5">
              <ellipse cx="635" cy="472" fill="var(--fill-0, #61FAA3)" rx="235" ry="72" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="944" id="filter0_f_45_25611" width="1270" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_45_25611" stdDeviation="200" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}