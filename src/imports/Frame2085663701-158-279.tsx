import svgPaths from "./svg-r48kauc93f";
import imgRectangle690 from "figma:asset/962581dc4020c3e24e6269c4dda08c7e05bcea3d.png";

function Facebook() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="facebook-02">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="facebook-02">
          <path clipRule="evenodd" d={svgPaths.p3521b980} fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Youtube() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="youtube">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="youtube">
          <path d={svgPaths.p38ca2800} id="Vector" stroke="var(--stroke-0, #111111)" strokeWidth="1.5" />
          <path d={svgPaths.pfbab680} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Linkedin() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="linkedin-02">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="linkedin-02">
          <path d={svgPaths.p30aaad00} id="Vector" stroke="var(--stroke-0, #111111)" strokeWidth="1.5" />
          <path d={svgPaths.p3307d700} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeWidth="1.5" />
          <path d={svgPaths.p3eb53b00} id="Vector_3" stroke="var(--stroke-0, #111111)" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] h-[48px] items-center justify-end relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[30px] shrink-0 size-[40px]" data-name="Facebook">
        <div aria-hidden="true" className="absolute border border-[#3c3c3c] border-solid inset-0 pointer-events-none rounded-[30px]" />
        <Facebook />
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[30px] shrink-0 size-[40px]" data-name="Twitter">
        <div aria-hidden="true" className="absolute border border-[#3c3c3c] border-solid inset-0 pointer-events-none rounded-[30px]" />
        <Youtube />
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[30px] shrink-0 size-[40px]" data-name="Linkedin">
        <div aria-hidden="true" className="absolute border border-[#3c3c3c] border-solid inset-0 pointer-events-none rounded-[30px]" />
        <Linkedin />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <p className="font-['Helvetica_Now_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[36px]">Share This Article</p>
      <Frame1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[36px]">Newsletter</p>
      <div className="backdrop-blur-[10px] h-[52px] relative rounded-[80px] shrink-0 w-full" data-name="Secondary CTA">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[6px] relative size-full">
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
            <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[16px]">Subscribe to Newsletter</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#111] border-solid inset-0 pointer-events-none rounded-[80px]" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#f5f5f7] content-stretch flex flex-col gap-[24px] items-start left-0 p-[40px] rounded-[10px] top-[120px] w-[390px]">
      <Frame8 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 310 1">
            <path d="M0 0.5H310" id="Vector 1513" stroke="var(--stroke-0, black)" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[486px] shrink-0 sticky top-0 w-[390px]">
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[75px] relative shrink-0 text-[#111] text-[64px] text-center">Introduction</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] min-w-full relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">Most software systems don’t fail when they launch.</p>
        <p className="mb-0">They fail when they succeed.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">A product gains users. Features expand. Teams grow. Expectations rise. What once felt simple slowly becomes fragile. Releases feel risky. Fixes take longer than building new features ever did. Eventually, progress slows not because the team is incapable, but because the system resists change.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">This is not a story about bad engineering.</p>
        <p className="mb-0">It’s a story about unplanned growth.</p>
        <p className="mb-0">&nbsp;</p>
        <p>In this article, we break down what scaling actually means, why many systems struggle under it, and how teams can design software that grows without exhausting the people building it.</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[65px] relative shrink-0 text-[#111] text-[48px] w-full">{`What “Scale” Actually Means `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#3c3c3c] text-[16px] w-full">
        <span className="leading-[30px]">{`Scale is often misunderstood as a purely technical concern more traffic, more data, more infrastructure. In practice, the hardest scaling problems have little to do with servers. They emerge when more people work on the same `}</span>
        <span className="decoration-solid font-['Inter:Bold',sans-serif] font-bold leading-[30px] underline">system</span>
        <span className="leading-[30px]">, when requirements change faster than structure, and when decisions made for speed begin to resist progress. User growth stresses performance, data growth stresses storage and retrieval, but team growth stresses clarity, ownership, and decision-making. When systems are not designed to absorb these pressures, friction appears everywhere often long before any system metrics raise alarms.</span>
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[65px] relative shrink-0 text-[#111] text-[48px]">The Hidden Cost of Early Convenience</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">
        <p className="leading-[30px] mb-0">Shortcuts feel harmless at the beginning:</p>
        <p className="leading-[30px] mb-0">&nbsp;</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[30px]">Hard-coded logic instead of configuration</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[30px]">One massive service instead of clear boundaries</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[30px]">“We’ll refactor later” instead of intentional design</span>
          </li>
        </ul>
        <p className="leading-[30px] mb-0">&nbsp;</p>
        <p className="leading-[30px] mb-0">Early convenience compounds into long-term friction.</p>
        <p className="leading-[30px]">Not because the team lacked skill—but because urgency replaced structure.</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[65px] relative shrink-0 text-[#111] text-[48px]">The Real Source of Complexity</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] min-w-full relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Complexity rarely comes from bad decisions. It comes from reasonable decisions made under pressure. A shortcut taken to meet a deadline. A feature added without revisiting earlier assumptions. A workaround that quietly becomes permanent. Each choice makes sense in isolation, yet over time they accumulate into systems that are difficult to reason about and risky to change. This accidental complexity does not improve user value, but it steadily increases the cognitive load on teams. Eventually, progress slows not because the problem is hard, but because understanding the system feels harder than building something new.</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[65px] relative shrink-0 text-[#111] text-[48px]">How Teams Experience Scaling Failure</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">
        <span className="leading-[30px]">{`Before customers feel pain, teams do. Developers become cautious about touching certain areas of the codebase. Knowledge concentrates around a few individuals. `}</span>
        <span className="decoration-solid font-['Inter:Bold',sans-serif] font-bold leading-[30px] underline">Code reviews</span>
        <span className="leading-[30px]">{` turn defensive. Documentation exists, but no one fully trusts it. The system technically works, yet confidence is gone. When teams no longer trust the system, velocity drops even if headcount increases. At this stage, scaling stops being an engineering problem and becomes a people problem—one rooted in uncertainty, fear of side effects, and lack of clarity.`}</span>
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start py-[120px] relative shrink-0 w-[1070px]">
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <div className="h-[500px] relative rounded-[10px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[10px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[10px] size-full" src={imgRectangle690} />
        </div>
      </div>
      <Frame5 />
      <Frame6 />
    </div>
  );
}

export default function Frame11() {
  return (
    <div className="content-stretch flex gap-[60px] items-start relative size-full">
      <Frame10 />
      <Frame7 />
    </div>
  );
}