import imgRectangle698 from "figma:asset/20eeed601e2ef036cc8d70161c230af2ca8cb61c.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#3c3c3c] text-[20px] w-[655px] whitespace-pre-wrap">Send Business Email</p>
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[65px] relative shrink-0 text-[#111] text-[48px]">software@daffodil-bd.com</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#3c3c3c] text-[20px] w-[655px] whitespace-pre-wrap">For urgent or time-sensitive discussions, call us at</p>
      <div className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[65px] relative shrink-0 text-[#111] text-[0px] text-[48px] whitespace-nowrap">
        <p className="mb-0">+88 02 9116600,</p>
        <p>{`+8801713493026 `}</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 whitespace-pre-wrap">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#3c3c3c] text-[20px] w-[655px]">For in-person meeting visit us at</p>
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[65px] relative shrink-0 text-[#111] text-[48px] w-[697px]">Daffodil Tower, 102/1, Shukrabad, Mirpur Road, Dhaka-1207, Bangladesh</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[60px] items-start min-h-px min-w-px not-italic relative">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="content-stretch flex gap-[40px] items-center pl-[100px] relative size-full">
      <Frame3 />
      <div className="h-[912px] relative shrink-0 w-[983px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle698} />
      </div>
    </div>
  );
}
