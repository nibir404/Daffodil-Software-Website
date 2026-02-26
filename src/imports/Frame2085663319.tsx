import svgPaths from "../assets/svgs/svg-4rzdvkqhyh";
import imgEllipse153 from "figma:asset/f137f12625c1a018397fa711cbe5acddcc0266f2.png";
import imgEllipse154 from "figma:asset/322892a770d94ef850a9d6b3e8a86adc23fbc458.png";
import imgEllipse155 from "figma:asset/4e2e2239a2685f3728a7c603c1f42a6b6d179593.png";

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[75px] relative shrink-0 text-[#111] text-[64px] text-center">What Our Clients Say</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#3c3c3c] text-[16px] w-[656px] whitespace-pre-wrap">Hear directly from our satisficed clients</p>
    </div>
  );
}

function ArrowUpRight1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-up-right-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-up-right-01">
          <path d={svgPaths.p30adde80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#8f8f8f] content-stretch flex items-center justify-center relative rounded-[90px] size-[40px]">
      <ArrowUpRight1 />
    </div>
  );
}

function ArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-up-right-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-up-right-01">
          <path d={svgPaths.p30adde80} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#02e168] content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[90px] shrink-0 size-[40px]">
      <div className="-translate-x-1/2 absolute flex h-[130.588px] items-center justify-center left-[calc(50%-37.63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
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
      <ArrowUpRight />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Frame />
        </div>
      </div>
      <Frame11 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame10 />
      <Frame12 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <div className="h-[30px] relative shrink-0 w-[38px]" data-name="“">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 30">
          <path d={svgPaths.p28636380} fill="var(--fill-0, black)" fillOpacity="0.1" id="â" />
        </svg>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] min-w-full not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">{`"Implementing the IUMS from Daffodil Software was a game-changer for our campus. The automation of student records and grading systems saved us thousands of man-hours."`}</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[30px] min-h-px min-w-px not-italic relative whitespace-pre-wrap">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] relative shrink-0 text-[#111] text-[24px] w-full">Dr. Sarah Ahmed</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#3c3c3c] text-[16px] w-full">Registrar, Eastern University</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[50px]">
        <img alt="" className="block max-w-none size-full" height="50" src={imgEllipse153} width="50" />
      </div>
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#f5f5f7] content-stretch flex flex-col gap-[20px] items-start p-[40px] relative rounded-[10px] shrink-0 w-[493.333px]">
      <Frame2 />
      <Frame4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <div className="h-[30px] relative shrink-0 w-[38px]" data-name="“">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 30">
          <path d={svgPaths.p28636380} fill="var(--fill-0, black)" fillOpacity="0.1" id="â" />
        </svg>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] min-w-full not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">{`"DSL's team demonstrated exceptional technical prowess in developing our custom blockchain solution. Their attention to security and scalability was impressive."`}</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[30px] min-h-px min-w-px not-italic relative whitespace-pre-wrap">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] relative shrink-0 text-[#111] text-[24px] w-full">Michael Chen</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#3c3c3c] text-[16px] w-full">CTO, TechFlow Solutions</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[50px]">
        <img alt="" className="block max-w-none size-full" height="50" src={imgEllipse154} width="50" />
      </div>
      <Frame14 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#f5f5f7] content-stretch flex flex-col gap-[20px] items-start p-[40px] relative rounded-[10px] shrink-0 w-[493.333px]">
      <Frame7 />
      <Frame13 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <div className="h-[30px] relative shrink-0 w-[38px]" data-name="“">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 30">
          <path d={svgPaths.p28636380} fill="var(--fill-0, black)" fillOpacity="0.1" id="â" />
        </svg>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] min-w-full not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">{`"Implementing the IUMS from Daffodil Software was a game-changer for our campus. The automation of student records and grading systems saved us thousands of man-hours."`}</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[30px] min-h-px min-w-px not-italic relative">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] relative shrink-0 text-[#111] text-[24px]">Dr. Sarah Ahmed</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#3c3c3c] text-[16px]">Registrar, Eastern University</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[50px]">
        <img alt="" className="block max-w-none size-full" height="50" src={imgEllipse155} width="50" />
      </div>
      <Frame18 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#f5f5f7] content-stretch flex flex-col gap-[20px] items-start p-[40px] relative rounded-[10px] shrink-0 w-[493.333px]">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <div className="h-[30px] relative shrink-0 w-[38px]" data-name="“">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 30">
          <path d={svgPaths.p28636380} fill="var(--fill-0, black)" fillOpacity="0.1" id="â" />
        </svg>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] min-w-full not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">{`"Implementing the IUMS from Daffodil Software was a game-changer for our campus. The automation of student records and grading systems saved us thousands of man-hours."`}</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[30px] min-h-px min-w-px not-italic relative">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] relative shrink-0 text-[#111] text-[24px]">Dr. Sarah Ahmed</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#3c3c3c] text-[16px]">Registrar, Eastern University</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[50px]">
        <img alt="" className="block max-w-none size-full" height="50" src={imgEllipse155} width="50" />
      </div>
      <Frame22 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#f5f5f7] content-stretch flex flex-col gap-[20px] items-start p-[40px] relative rounded-[10px] shrink-0 w-[493.333px]">
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <div className="h-[30px] relative shrink-0 w-[38px]" data-name="“">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 30">
          <path d={svgPaths.p28636380} fill="var(--fill-0, black)" fillOpacity="0.1" id="â" />
        </svg>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] min-w-full not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">{`"Implementing the IUMS from Daffodil Software was a game-changer for our campus. The automation of student records and grading systems saved us thousands of man-hours."`}</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[30px] min-h-px min-w-px not-italic relative">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] relative shrink-0 text-[#111] text-[24px]">Dr. Sarah Ahmed</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#3c3c3c] text-[16px]">Registrar, Eastern University</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[50px]">
        <img alt="" className="block max-w-none size-full" height="50" src={imgEllipse155} width="50" />
      </div>
      <Frame26 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#f5f5f7] content-stretch flex flex-col gap-[20px] items-start p-[40px] relative rounded-[10px] shrink-0 w-[493.333px]">
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[20px] items-center overflow-x-auto overflow-y-clip relative shrink-0 w-full">
      <Frame5 />
      <Frame6 />
      <Frame15 />
      <Frame19 />
      <Frame23 />
    </div>
  );
}

export default function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative size-full">
      <Frame1 />
      <Frame8 />
    </div>
  );
}
