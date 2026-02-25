import imgRectangle699 from "figma:asset/703e15b55d79d239a1227f50cfee4d7d3ae989fd.png";

function Frame() {
  return (
    <div className="flex flex-col h-[700px] items-start justify-between w-full max-w-[730px]">
      <h2 className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[75px] text-[#111] text-[64px]">
        {`Why Most Software Breaks  And Why We Don't Build That Way`}
      </h2>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[40px] text-[#3c3c3c] text-[24px]">
        <p className="mb-0">Modern organizations don't fail because of missing features. They fail because systems are built without regard for operational reality—fragmented workflows, unclear ownership, short-term thinking, and poor handover.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold mb-0">DSL was formed to address this gap.</p>
        <p className="mb-0">We work at the intersection of business logic, system design, and execution discipline so technology supports decisions instead of complicating them.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex gap-[60px] items-center w-full">
      <div className="h-[700px] relative rounded-[10px] shrink-0 w-full max-w-[730px] bg-gray-100">
        <img alt="Technology visualization" className="w-full h-full object-cover rounded-[10px]" src={imgRectangle699} />
        <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-[-2px] rounded-[12px] pointer-events-none" />
      </div>
      <Frame />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-white w-full overflow-hidden">
      <div className="px-6 md:px-12 lg:px-24 xl:px-[100px] py-[120px] max-w-[1520px] mx-auto">
        <Frame1 />
      </div>
    </div>
  );
}