import svgPaths from "../assets/svgs/svg-2lbdl17c7t";
import imgRectangle682 from "figma:asset/3cda6d29446a0dd95cddd4bb09dc37ba18c71b1d.png";

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-[655px] whitespace-pre-wrap">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[75px] relative shrink-0 text-[#111] text-[64px] w-[655px]">Who Smart Business 24 is for</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#3c3c3c] text-[16px] w-[655px]">Smart Business 24 is designed for organizations that need structured operations, accurate reporting, and long-term scalability.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#c0eeff] items-center justify-center relative rounded-[10px] shrink-0 size-[40px] to-[rgba(44,246,152,0.75)]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic relative shrink-0 text-[#111] text-[14px]">01</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[30px] min-h-px min-w-px not-italic relative">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111] text-[24px]">{`Business Owners & Founders`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Looking for better control over finance, operations, and growth without operational chaos.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[20px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Frame1 />
      <Frame11 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#c0eeff] items-center justify-center relative rounded-[10px] shrink-0 size-[40px] to-[rgba(44,246,152,0.75)]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic relative shrink-0 text-[#111] text-[14px]">02</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[30px] not-italic relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111] text-[24px]">{`Operations & Functional Heads`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#3c3c3c] text-[16px] w-[675px] whitespace-pre-wrap">Who need ERP workflows that match real approval structures, reporting formats, and daily processes.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[20px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Frame2 />
      <Frame12 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#c0eeff] items-center justify-center relative rounded-[10px] shrink-0 size-[40px] to-[rgba(44,246,152,0.75)]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic relative shrink-0 text-[#111] text-[14px]">03</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[30px] not-italic relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111] text-[24px]">{`IT & Technical Teams`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#3c3c3c] text-[16px] w-[675px] whitespace-pre-wrap">Who require a secure, scalable ERP system that integrates with existing platforms and infrastructure.</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[20px] relative shrink-0 w-full">
      <Frame3 />
      <Frame13 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[60px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Frame7 />
    </div>
  );
}

function PlayCircle() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="play-circle-02">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="play-circle-02">
          <path d={svgPaths.p810cf00} id="Vector" stroke="var(--stroke-0, #111111)" strokeWidth="2.5" />
          <path d={svgPaths.p23c0fa00} fill="var(--fill-0, #111111)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-gradient-to-b content-stretch flex from-[#01e067] items-center justify-center left-1/2 rounded-[70px] size-[80px] to-[rgba(44,246,152,0.75)] top-[calc(50%+216px)]">
      <PlayCircle />
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-[calc(50%+216px)]">
      <div className="absolute left-[700px] size-[120px] top-[689px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
          <circle cx="60" cy="60" fill="var(--fill-0, white)" fillOpacity="0.1" id="Ellipse 158" r="60" />
        </svg>
      </div>
      <div className="absolute left-[710px] size-[100px] top-[699px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="var(--fill-0, white)" fillOpacity="0.1" id="Ellipse 157" r="50" />
        </svg>
      </div>
      <Frame />
    </div>
  );
}

export default function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative size-full">
      <Frame8 />
      <div className="h-[622px] pointer-events-none relative rounded-[10px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 rounded-[10px]">
          <div className="absolute inset-0 overflow-hidden rounded-[10px]">
            <img alt="" className="absolute h-[238.48%] left-0 max-w-none top-[0.06%] w-full" src={imgRectangle682} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0 rounded-[10px]" />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 rounded-[10px]" />
      </div>
      <Group />
    </div>
  );
}
