import imgFrame2085663367 from "figma:asset/633696cfcc282e6537a141e5e8342e9787004615.png";

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[50px] not-italic relative shrink-0 text-[#111] text-[36px]">{`University & ERP Management Systems`}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-gradient-to-r from-[#cfffe8] relative shrink-0 to-white w-full">
      <div aria-hidden="true" className="absolute border-[#dadada] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[20px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[50px] not-italic relative shrink-0 text-[#111] text-[36px]">{`Healthcare Software Solutions `}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Frame6 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dadada] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[20px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[50px] not-italic relative shrink-0 text-[#111] text-[36px]">{`Retail & E-Commerce Software`}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Frame7 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dadada] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[20px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[50px] not-italic relative shrink-0 text-[#111] text-[36px]">Manufacturing Software Solutions</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dadada] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[20px] relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[50px] not-italic relative shrink-0 text-[#111] text-[36px]">Real Estate Software</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Frame15 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[20px] relative w-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame9 />
      <Frame10 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[450px] relative rounded-[10px] shrink-0 w-[600px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
        <div className="absolute bg-[#061436] inset-0 rounded-[10px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[10px] size-full" src={imgFrame2085663367} />
      </div>
    </div>
  );
}

function MegaMenu() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] items-start left-[24px] top-[24px] w-[1320px]" data-name="Mega Menu">
      <Frame11 />
      <Frame16 />
    </div>
  );
}

export default function ImdustriesMegamenu() {
  return (
    <div className="bg-white relative rounded-[20px] size-full" data-name="Imdustries Megamenu">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <MegaMenu />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-[-2px] pointer-events-none rounded-[22px] shadow-[0px_0px_40px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}
