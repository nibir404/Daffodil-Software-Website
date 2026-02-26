import svgPaths from "../assets/svgs/svg-ze15q5bbhp";
import imgRectangle689 from "figma:asset/4da52a89d96f70de821349dad640b3eb999d7534.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica_Now_Display:Medium',sans-serif] items-start justify-center leading-[normal] pb-[20px] relative shrink-0 text-[#111] text-[64px] w-full">
      <p className="relative shrink-0">{`Ideas, Insights & `}</p>
      <p className="relative shrink-0">Engineering Stories</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center not-italic relative shrink-0 w-full">
      <Frame />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#3c3c3c] text-[20px] w-full whitespace-pre-wrap">
        <p className="mb-0">Where software, strategy, and real-world problem-solving collide.</p>
        <p>Short reads. Sharp thinking. No fluff.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
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
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center left-[calc(50%-393.5px)] top-1/2 w-[733px]">
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.3)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] not-italic relative shrink-0 text-[14px] text-white">Latest</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.3)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] not-italic relative shrink-0 text-[14px] text-white">Engineering</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[24px] top-[24px]">
      <Frame5 />
      <Frame9 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bottom-[24px] content-stretch flex flex-col gap-[10px] items-start left-[24px] w-[879px]">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[40px] text-white w-[min-content] whitespace-pre-wrap">Designing Software That Survives Scale</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] min-w-full not-italic relative shrink-0 text-[20px] text-white w-[min-content] whitespace-pre-wrap">Most systems fail quietly under growth, not bugs. This article breaks down how early architecture choices decide whether a product scales with confidence or collapses under pressure.</p>
      <div className="content-stretch flex gap-[10px] items-center justify-center py-[10px] relative shrink-0">
        <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white">Read Full Article</p>
        <div className="relative shrink-0 size-[16px]" data-name="Menu/arrow-right-02">
          <div className="absolute bottom-1/2 left-[20.83%] right-[22.92%] top-1/2" data-name="Vector">
            <div className="absolute inset-[-0.75px_-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 1.5">
                <path d="M9.75002 0.75H0.75" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-1/4 left-[54.17%] right-[20.83%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-9.38%_-18.75%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.50005 9.5001">
                <path d={svgPaths.p8187a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[760px] left-[973px] overflow-clip top-[20px] w-[927px]">
      <div className="absolute h-[760px] left-0 pointer-events-none rounded-[10px] top-0 w-[927px]">
        <div aria-hidden="true" className="absolute inset-0 rounded-[10px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[10px] size-full" src={imgRectangle689} />
          <div className="absolute bg-gradient-to-b from-[20%] from-[rgba(0,0,0,0)] inset-0 rounded-[10px] to-[80%] to-[rgba(0,0,0,0.8)]" />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-[-2px] rounded-[12px]" />
      </div>
      <Frame10 />
      <Frame8 />
    </div>
  );
}

export default function Frame6() {
  return (
    <div className="bg-gradient-to-b from-[#f5f5f7] relative size-full to-[#b8f0d5]">
      <Frame1 />
      <Frame7 />
    </div>
  );
}
