import imgRectangle684 from "figma:asset/e03d3de0263542e76e4f109790b5f96637b962ab.png";
import imgRectangle686 from "figma:asset/865beb077f5e479a9ea3a92cb015a3d5d0e9c459.png";
import imgRectangle685 from "figma:asset/73322f1507c9d95334fc45aeb1f75e30c23cf354.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[75px] relative shrink-0 text-[#111] text-[64px] w-[655px]">Why Universities Need Purpose-Built ERP Systems</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#3c3c3c] text-[16px] w-[655px]">Most universities rely on disconnected tools, spreadsheets, or rigid off-the-shelf software that fails to reflect real academic workflows. As student volumes grow and regulatory requirements increase, these systems create delays, data inconsistency, and operational risk.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] h-full items-start not-italic relative shrink-0 whitespace-pre-wrap">
      <Frame />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] relative shrink-0 text-[#3c3c3c] text-[40px] w-[702px]">A university-focused ERP aligns technology with academic structures, approval flows, and governance reducing complexity while improving control.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0">
      <div className="relative rounded-[10px] shrink-0 size-[360px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[10px] size-full" src={imgRectangle684} />
        <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-[-2px] rounded-[12px]" />
      </div>
      <div className="relative rounded-[10px] shrink-0 size-[360px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[10px] size-full" src={imgRectangle686} />
        <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-[-2px] rounded-[12px]" />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[20px] items-start pointer-events-none relative shrink-0">
      <Frame4 />
      <div className="relative rounded-[10px] self-stretch shrink-0 w-[398px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[10px] size-full" src={imgRectangle685} />
        <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-[-2px] rounded-[12px]" />
      </div>
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="content-stretch flex gap-[40px] items-center pb-[60px] relative size-full">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center self-stretch">
        <Frame1 />
      </div>
      <Frame2 />
    </div>
  );
}