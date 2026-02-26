import imgFrame2085663450 from "figma:asset/4da52a89d96f70de821349dad640b3eb999d7534.png";

function Frame5() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.3)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] not-italic relative shrink-0 text-[14px] text-white">Latest</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.3)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] not-italic relative shrink-0 text-[14px] text-white">Engineering</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame5 />
      <Frame7 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica_Now_Display:Medium',sans-serif] items-start justify-center leading-[normal] not-italic pb-[20px] relative shrink-0 text-[64px] text-white w-full">
      <p className="relative shrink-0">{`Designing Software That `}</p>
      <p className="relative shrink-0">Survives Scale</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame />
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
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-start justify-center left-[calc(50%-393.5px)] top-1/2 w-[733px]">
      <Frame8 />
      <Frame2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[20px] text-white w-[min-content] whitespace-pre-wrap">
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[30px]">Author:</span>
        <span className="leading-[30px]">{` Engineering Team | `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[30px]">Published at</span>
        <span className="leading-[30px]">{` 19th January, `}</span>
        <span className="font-['Inter:Bold_Italic',sans-serif] font-bold italic leading-[30px]">2026</span>
      </p>
    </div>
  );
}

export default function Frame6() {
  return (
    <div className="relative size-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame2085663450} />
        <div className="absolute bg-gradient-to-l from-[20%] from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.8)]" />
      </div>
      <div className="relative size-full">
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-[-2px] pointer-events-none" />
    </div>
  );
}
