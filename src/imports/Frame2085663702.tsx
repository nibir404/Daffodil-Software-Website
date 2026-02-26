import svgPaths from "../assets/svgs/svg-rcpnf7sagi";
import imgRectangle704 from "figma:asset/3df84f1e7b899de4f6ae8cd126704d362dc45f63.png";

function Eye() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="eye">
          <path d={svgPaths.p3a08e3c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2.25" />
          <path d={svgPaths.p2e79c100} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="2.25" />
          <path d={svgPaths.p853e6b0} id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#3368a4] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[60px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Eye />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Frame />
      <p className="flex-[1_0_0] font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#111] text-[64px] whitespace-pre-wrap">Our Vision</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full">
      <Frame6 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[20px] w-full whitespace-pre-wrap">To shape digital systems that simplify how organizations operate, adapt, and grow over time. We envision a future where technology removes friction instead of creating it—and where software becomes a quiet enabler of better decisions, not a constant problem to manage.</p>
    </div>
  );
}

function ArrowUpRightStack() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="arrow-up-right-stack">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="arrow-up-right-stack">
          <path d="M21 15L7.5 28.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d={svgPaths.p2f2cf100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d={svgPaths.p3db32200} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#3368a4] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[60px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <ArrowUpRightStack />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Frame1 />
      <p className="flex-[1_0_0] font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#111] text-[64px] whitespace-pre-wrap">Our Mission</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Frame7 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[20px] w-full whitespace-pre-wrap">Our mission is to design and engineer reliable digital platforms that align with real business needs. We partner closely with organizations to create structured, maintainable systems—built with discipline, responsibility, and a clear understanding of long-term impact.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-[760px]">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[40px] items-start left-[200px] top-[120px]">
      <Frame4 />
      <div className="h-[540px] relative rounded-[10px] shrink-0 w-[720px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle704} />
      </div>
    </div>
  );
}

export default function Frame8() {
  return (
    <div className="bg-white relative size-full">
      <Frame5 />
    </div>
  );
}
