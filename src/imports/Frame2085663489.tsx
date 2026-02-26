import imgRectangle682 from "figma:asset/6a495c03b09cee4b6e6f9d5f7990ff38953e1ec1.png";

function Frame() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#c0eeff] items-center justify-center relative rounded-[10px] shrink-0 size-[40px] to-[rgba(44,246,152,0.75)]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic relative shrink-0 text-[#111] text-[14px]">01</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[10px] py-[20px] relative w-full">
          <Frame />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Designed around real users</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#c0eeff] items-center justify-center relative rounded-[10px] shrink-0 size-[40px] to-[rgba(44,246,152,0.75)]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic relative shrink-0 text-[#111] text-[14px]">02</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[10px] py-[20px] relative w-full">
          <Frame1 />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Built for performance and security</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#c0eeff] items-center justify-center relative rounded-[10px] shrink-0 size-[40px] to-[rgba(44,246,152,0.75)]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic relative shrink-0 text-[#111] text-[14px]">03</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[10px] py-[20px] relative w-full">
          <Frame2 />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Structured for future expansion</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#c0eeff] items-center justify-center relative rounded-[10px] shrink-0 size-[40px] to-[rgba(44,246,152,0.75)]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic relative shrink-0 text-[#111] text-[14px]">04</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[10px] py-[20px] relative w-full">
          <Frame3 />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Easy to maintain and evolve</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[751px]">
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-[904px]">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[75px] min-w-full not-italic relative shrink-0 text-[#111] text-[64px] w-[min-content] whitespace-pre-wrap">{`How We Think About Web & App Development`}</p>
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-[568px]">
      <div className="h-[350px] relative rounded-[10px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[10px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[10px]">
            <img alt="" className="absolute h-[243.53%] left-0 max-w-none top-[-82.76%] w-full" src={imgRectangle682} />
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-full whitespace-pre-wrap">We believe great digital products sit at the intersection of business goals, user experience, and engineering excellence. Our approach prioritizes long-term scalability, clean architecture, and real-world usability so your product doesn’t just launch, it lasts.</p>
    </div>
  );
}

export default function Frame11() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative size-full">
      <Frame9 />
      <Frame10 />
    </div>
  );
}
