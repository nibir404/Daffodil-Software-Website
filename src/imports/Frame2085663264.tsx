function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica_Now_Display:Bold',sans-serif] gap-[16px] items-start leading-[normal] not-italic relative shrink-0 w-full">
      <p className="relative shrink-0 text-[#3c3c3c] text-[20px] uppercase">Company</p>
      <p className="min-w-full relative shrink-0 text-[#111] text-[24px] w-[min-content] whitespace-pre-wrap">Bangladesh National Cadet Core (BNCC)</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">Education</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">Web Portal</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3c3c3c] text-[20px] uppercase">Category</p>
      <Frame3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] relative shrink-0 text-[#3c3c3c] text-[20px] uppercase">Timeline</p>
      <p className="font-['Helvetica_Now_Display:Bold',sans-serif] min-w-full relative shrink-0 text-[#111] text-[24px] w-[min-content] whitespace-pre-wrap">6 months</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#3c3c3c] text-[20px] uppercase">We Provide</p>
      <ul className="block font-['Helvetica_Now_Display:Bold',sans-serif] leading-[0] list-disc min-w-full relative shrink-0 text-[#111] text-[24px] w-[min-content] whitespace-pre-wrap">
        <li className="mb-0 ms-[36px]">
          <span className="leading-[normal]">User Research</span>
        </li>
        <li className="mb-0 ms-[36px]">
          <span className="leading-[normal]">UI Design</span>
        </li>
        <li className="ms-[36px]">
          <span className="leading-[normal]">Web App Development</span>
        </li>
      </ul>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] relative shrink-0 text-[#3c3c3c] text-[20px] uppercase">Tech Stack</p>
      <p className="font-['Helvetica_Now_Display:Bold',sans-serif] min-w-full relative shrink-0 text-[#111] text-[24px] w-[min-content] whitespace-pre-wrap">Python, Django, React, MongoDB, Express, Next.JS, Docker, Jenkins, Kubernetes</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#f5f5f7] content-stretch flex flex-col gap-[24px] items-start p-[40px] relative rounded-[10px] size-full">
      <Frame4 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 310 1">
            <path d="M0 0.5H310" id="Vector 1513" stroke="var(--stroke-0, black)" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
      <Frame5 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 310 1">
            <path d="M0 0.5H310" id="Vector 1513" stroke="var(--stroke-0, black)" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
      <Frame6 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 310 1">
            <path d="M0 0.5H310" id="Vector 1513" stroke="var(--stroke-0, black)" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
      <Frame7 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 310 1">
            <path d="M0 0.5H310" id="Vector 1513" stroke="var(--stroke-0, black)" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
      <Frame8 />
    </div>
  );
}