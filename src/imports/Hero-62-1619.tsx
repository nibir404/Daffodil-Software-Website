import svgPaths from "./svg-r30da9571z";

function AiBall() {
  return (
    <div className="absolute aspect-[300/300] left-0 overflow-clip right-[-46.17%] rounded-[941.8px] shadow-[0px_0px_853.16px_0px_rgba(44,246,152,0.75)] top-[-204px]" data-name="AI Ball" style={{ backgroundImage: "linear-gradient(-40.1009deg, rgb(55, 243, 211) 14.729%, rgb(20, 191, 143) 51.003%, rgb(185, 250, 213) 85.243%)" }}>
      <div className="absolute h-[515.22px] left-[751.53px] top-[210.52px] w-[221.6px]">
        <div className="absolute inset-[-25.81%_-60%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 487.52 781.14">
            <g filter="url(#filter0_f_62_748)" id="Ellipse 143">
              <path d={svgPaths.p2e816100} fill="var(--fill-0, white)" style={{ mixBlendMode: "plus-lighter" }} />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="781.14" id="filter0_f_62_748" width="487.52" x="3.00487e-06" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_62_748" stdDeviation="66.48" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[163.941px] items-center justify-center left-[626.02px] top-[105.26px] w-[161.052px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[-35.21deg]">
          <div className="h-[122.607px] relative w-[110.592px]">
            <div className="absolute inset-[-54.22%_-60.11%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 243.552 255.567">
                <g filter="url(#filter0_f_62_736)" id="Ellipse 144">
                  <path d={svgPaths.p39350700} fill="var(--fill-0, white)" style={{ mixBlendMode: "plus-lighter" }} />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="255.567" id="filter0_f_62_736" width="243.552" x="1.51207e-06" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_62_736" stdDeviation="33.24" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_110.8px_49.86px_132.96px_0px_#c4ffec]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[800px] left-[1162px] top-0 w-[758px]">
      <AiBall />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica_Now_Display:Medium',sans-serif] items-start justify-center leading-[normal] pb-[20px] relative shrink-0 text-[#111] text-[64px] w-full">
      <p className="relative shrink-0">We Build Software That Holds Up</p>
      <p className="relative shrink-0">Under Real-World Complexity</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full">
      <Frame />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#3c3c3c] text-[20px] w-[644px] whitespace-pre-wrap">DSL is a technology partner focused on designing and engineering digital systems that remain stable, adaptable, and relevant as organizations grow, restructure, and scale globally.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center left-[200px] top-1/2 w-[932px]">
      <Frame2 />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="bg-[#f5f5f7] relative size-full overflow-hidden" data-name="Hero">
      <Frame5 />
      <Frame1 />
    </div>
  );
}