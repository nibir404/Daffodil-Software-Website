import svgPaths from "./svg-y701l5ol2e";
import imgRectangle670 from "figma:asset/8a6a440b505051ec5b4e8375a55abe84e49cd0b3.png";
import imgRectangle671 from "figma:asset/eca1ce33bf493c0b83cc08e22c8aaf417a9f8f54.png";
import imgRectangle672 from "figma:asset/655452b0a01149ac4781ca09db8ea6694aee83dc.png";

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center not-italic relative shrink-0 text-[#111] text-center w-[1520px] whitespace-pre-wrap">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[75px] relative shrink-0 text-[64px] w-[1308px]">How You Can Work With Us</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[16px] w-[1030px]">We offer flexible engagement models designed to match your business goals, project complexity, and internal capabilities. Whether you need a clearly defined delivery, long-term engineering support, or rapid validation of a new idea, our collaboration models are built to adapt without locking you into unnecessary overhead.</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[260px] left-[calc(50%-0.16px)] top-1/2 w-[591px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[200px] left-1/2 rounded-[10px] top-1/2 w-[453px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[159.82%] left-[0.25%] max-w-none top-[-4.58%] w-[99.88%]" src={imgRectangle670} />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[200px] overflow-clip relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[30px] min-h-px min-w-px not-italic relative w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] relative shrink-0 text-[#111] text-[24px]">Project-Based Development</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Ideal when requirements are clear and delivery needs to follow a fixed scope, timeline, and budget. We manage the full lifecycle—from planning to launch—with defined milestones, transparent progress, and predictable outcomes.</p>
    </div>
  );
}

function MenuArrowRight2() {
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
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[16px]">View Portfolio</p>
      <MenuArrowRight2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#f5f5f7] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-center p-[16px] relative w-full">
          <div className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] min-w-full not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">
            <p className="mb-0">{`Best for: `}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal">Feature development, platform rebuilds, system integrations</p>
          </div>
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full">
      <Frame13 />
      <Frame12 />
    </div>
  );
}

function HowWeCanWorkWithUs() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] h-full items-start overflow-clip p-[20px] relative rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-[493.33px]" data-name="How we can work with us">
      <Frame6 />
      <Frame18 />
      <div className="-translate-x-1/2 absolute h-[144px] left-[calc(50%+0.34px)] top-[939px] w-[470px]">
        <div className="absolute inset-[-277.78%_-85.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1270 944">
            <g filter="url(#filter0_f_82_1221)" id="Ellipse 5">
              <ellipse cx="635" cy="472" fill="var(--fill-0, #61FAA3)" rx="235" ry="72" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="944" id="filter0_f_82_1221" width="1270" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_82_1221" stdDeviation="200" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[260px] left-[calc(50%-0.16px)] top-1/2 w-[591px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[200px] left-1/2 rounded-[10px] top-1/2 w-[453px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[159.86%] left-[0.02%] max-w-none top-[-9.05%] w-[99.91%]" src={imgRectangle671} />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[200px] overflow-clip relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[30px] min-h-px min-w-px not-italic relative w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] relative shrink-0 text-[#111] text-[24px]">Dedicated Development Teams</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Designed for long-term collaboration, this model provides dedicated engineers who work as an extension of your in-house team. It offers flexibility, faster iteration, and deep product understanding as your platform evolves.</p>
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

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center py-[10px] relative shrink-0">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[16px]">View Portfolio</p>
      <MenuArrowRight />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#f5f5f7] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-center p-[16px] relative w-full">
          <div className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] min-w-full not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">
            <p className="mb-0">{`Best for: `}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal">Ongoing product development, scaling platforms, long-term roadmaps</p>
          </div>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full">
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function HowWeCanWorkWithUs1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] h-[630px] items-start overflow-clip p-[20px] relative rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-[493.33px]" data-name="How we can work with us">
      <Frame8 />
      <Frame19 />
      <div className="-translate-x-1/2 absolute h-[144px] left-[calc(50%+0.34px)] top-[939px] w-[470px]">
        <div className="absolute inset-[-277.78%_-85.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1270 944">
            <g filter="url(#filter0_f_82_1221)" id="Ellipse 5">
              <ellipse cx="635" cy="472" fill="var(--fill-0, #61FAA3)" rx="235" ry="72" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="944" id="filter0_f_82_1221" width="1270" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_82_1221" stdDeviation="200" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[260px] left-[calc(50%-0.16px)] top-1/2 w-[591px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[200px] left-1/2 rounded-[10px] top-1/2 w-[453px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[160.09%] left-[0.02%] max-w-none top-[-30.05%] w-[100.06%]" src={imgRectangle672} />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[200px] overflow-clip relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[30px] min-h-px min-w-px not-italic relative w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] relative shrink-0 text-[#111] text-[24px]">{`MVP & Rapid Prototyping`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Focused on speed and validation, this model helps transform ideas into working MVPs or prototypes quickly. It enables early testing, user feedback, and informed decision-making before full-scale investment.</p>
    </div>
  );
}

function MenuArrowRight1() {
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

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center py-[10px] relative shrink-0">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[16px]">View Portfolio</p>
      <MenuArrowRight1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#f5f5f7] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-center p-[16px] relative w-full">
          <div className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] min-w-full not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">
            <p className="mb-0">{`Best for: `}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal mb-0">{`Startups, innovation teams, early-stage product `}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal">ideas</p>
          </div>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function HowWeCanWorkWithUs2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-[493.33px]" data-name="How we can work with us">
      <Frame10 />
      <Frame20 />
      <div className="-translate-x-1/2 absolute h-[144px] left-[calc(50%+0.34px)] top-[939px] w-[470px]">
        <div className="absolute inset-[-277.78%_-85.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1270 944">
            <g filter="url(#filter0_f_82_1221)" id="Ellipse 5">
              <ellipse cx="635" cy="472" fill="var(--fill-0, #61FAA3)" rx="235" ry="72" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="944" id="filter0_f_82_1221" width="1270" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_82_1221" stdDeviation="200" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <HowWeCanWorkWithUs />
      </div>
      <HowWeCanWorkWithUs1 />
      <HowWeCanWorkWithUs2 />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center relative size-full">
      <Frame3 />
      <Frame4 />
    </div>
  );
}