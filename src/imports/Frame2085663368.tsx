import svgPaths from "../assets/svgs/svg-7htsu2eumu";
import imgImage32 from "figma:asset/3fb78841a0d9e817e7f89226c881690647824d8e.png";
import imgRectangle5 from "figma:asset/93bd53fc3a66870f52cc030f69da770da8cce477.png";

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px not-italic relative text-white whitespace-pre-wrap">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[75px] relative shrink-0 text-[64px] w-[723px]">Featured Success Stories</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[16px] w-[518px]">Explore real-world case studies demonstrating how our custom software and ERP solutions solve complex enterprise challenges.</p>
    </div>
  );
}

function SecondaryCta() {
  return (
    <div className="backdrop-blur-[10px] h-[52px] relative rounded-[80px] shrink-0" data-name="Secondary CTA">
      <div className="content-stretch flex gap-[10px] h-full items-center overflow-clip px-[24px] py-[6px] relative rounded-[inherit]">
        <div className="-translate-x-1/2 absolute flex h-[130.588px] items-center justify-center left-[calc(50%-98.13px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
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
        <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white">View All Case Studies</p>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[10px] items-start py-[10px] relative shrink-0 w-full">
      <Frame1 />
      <SecondaryCta />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[10px] relative rounded-[14px] shrink-0 w-[214px]">
      <div className="aspect-[194/58] relative shrink-0 w-full" data-name="image 32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[224.14%] left-[-0.23%] max-w-none top-[-48.28%] w-[100.47%]" src={imgImage32} />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <Frame2 />
      <p className="font-['Helvetica_Now_Display:Bold',sans-serif] leading-[43px] not-italic relative shrink-0 text-[24px] text-white">Smart Business 24 (ERP Software)</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-white w-full whitespace-pre-wrap">
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[43px] relative shrink-0 text-[36px] w-full">Modernizing Legacy Systems for a Large-Scale Enterprise Platform</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[16px] w-full">Smart Business 24 implemented a custom ERP software solution to centralize accounting, HR, payroll, sales, purchase, and inventory management—eliminating manual workflows and improving operational visibility across departments.</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="backdrop-blur-[27px] bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center p-[10px] relative rounded-[10px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-white">
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] text-[16px]">42%</span>
        <span className="leading-[30px] text-[14px]">{` infrastructure cost reduction`}</span>
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="backdrop-blur-[27px] bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center p-[10px] relative rounded-[10px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-white">
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] text-[16px]">3×</span>
        <span className="leading-[30px] text-[14px]">{` deployment speed`}</span>
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="backdrop-blur-[27px] bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center p-[10px] relative rounded-[10px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-white">
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] text-[16px]">99.9%</span>
        <span className="leading-[30px] text-[14px]">{` system uptime`}</span>
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame10 />
      <Frame11 />
      <Frame13 />
    </div>
  );
}

function ArrowUpRight() {
  return (
    <div className="relative size-[20px]" data-name="arrow-up-right-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-up-right-01">
          <path d={svgPaths.p5d39ec0} id="Vector" stroke="var(--stroke-0, #00428D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[90px] shrink-0 size-[40px]">
      <div className="-translate-x-1/2 absolute flex h-[72.26px] items-center justify-center left-[calc(50%+43.83px)] mix-blend-plus-lighter top-[-22.66px] w-[70.128px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-46.28deg]">
          <div className="h-[16.6px] relative w-[84.108px]">
            <div className="absolute inset-[-144.58%_-28.53%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132.108 64.6003">
                <g filter="url(#filter0_f_1_49385)" id="Ellipse 2" style={{ mixBlendMode: "plus-lighter" }}>
                  <ellipse cx="66.054" cy="32.3001" fill="var(--fill-0, white)" fillOpacity="0.8" rx="42.054" ry="8.30013" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="64.6003" id="filter0_f_1_49385" width="132.108" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_49385" stdDeviation="12" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0 size-[28.284px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <ArrowUpRight />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[80px] shrink-0">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white">Read Full Case Study</p>
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[40px] top-[363px] w-[1440px]">
      <Frame9 />
      <Frame4 />
      <Frame12 />
      <Frame5 />
    </div>
  );
}

function CaseStudies() {
  return (
    <div className="h-[750px] relative rounded-[20px] shrink-0 w-[1520px]" data-name="Case Studies">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[750px] left-0 rounded-[20px] top-0 w-[1520px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
            <div className="absolute inset-0 overflow-hidden rounded-[20px]">
              <img alt="" className="absolute h-[159%] left-[-2.3%] max-w-none top-[-18.1%] w-[104.61%]" src={imgRectangle5} />
            </div>
            <div className="absolute bg-gradient-to-b from-[6.352%] from-[rgba(0,0,0,0)] inset-0 rounded-[20px] to-black" />
          </div>
        </div>
        <Frame3 />
      </div>
      <div aria-hidden="true" className="absolute border-10 border-[rgba(255,255,255,0.1)] border-solid inset-[-10px] pointer-events-none rounded-[30px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-start left-[200px] top-[120px] w-[1520px]">
      <Frame6 />
      <CaseStudies />
    </div>
  );
}

export default function Frame7() {
  return (
    <div className="bg-[#0d1e32] relative size-full">
      <div className="-translate-x-1/2 absolute left-[calc(50%+2px)] size-[1940px] top-0">
        <div className="absolute inset-[-20.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2740 2740">
            <g filter="url(#filter0_f_1_32735)" id="Ellipse 5">
              <circle cx="1370" cy="1370" fill="var(--fill-0, #0B396C)" r="970" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2740" id="filter0_f_1_32735" width="2740" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_32735" stdDeviation="200" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame8 />
    </div>
  );
}
