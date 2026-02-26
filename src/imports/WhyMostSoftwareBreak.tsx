import imgRectangle699 from "figma:asset/703e15b55d79d239a1227f50cfee4d7d3ae989fd.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[700px] items-start justify-between not-italic relative shrink-0 w-[730px] whitespace-pre-wrap">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[75px] relative shrink-0 text-[#111] text-[64px] w-full">{`Why Most Software Breaks  And Why We Don’t Build That Way`}</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[#3c3c3c] text-[0px] text-[24px] w-full">
        <p className="mb-0">Modern organizations don’t fail because of missing features. They fail because systems are built without regard for operational reality—fragmented workflows, unclear ownership, short-term thinking, and poor handover.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold mb-0">DSL was formed to address this gap.</p>
        <p>We work at the intersection of business logic, system design, and execution discipline so technology supports decisions instead of complicating them.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[60px] items-center left-[200px] top-[120px]">
      <div className="h-[700px] pointer-events-none relative rounded-[10px] shrink-0 w-[730px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[10px] size-full" src={imgRectangle699} />
        <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-[-2px] rounded-[12px]" />
      </div>
      <Frame />
    </div>
  );
}

export default function WhyMostSoftwareBreak() {
  return (
    <div className="bg-white relative size-full" data-name="Why Most Software Break">
      <Frame1 />
    </div>
  );
}
