import svgPaths from "../assets/svgs/svg-wldjp3z7m7";

function MenuArrowRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Menu/arrow-right-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Menu/arrow-right-02">
          <path d="M12.333 8H3.33301" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p638bf80} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Solutions() {
  return (
    <div className="absolute content-stretch flex h-[50px] items-center justify-between left-0 py-[10px] rounded-[10px] top-0 w-[720px]" data-name="Solutions">
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black">Product Planning</p>
      <MenuArrowRight1 />
    </div>
  );
}

function MenuArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Menu/arrow-right-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Menu/arrow-right-02">
          <path d="M12.333 8H3.33301" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p638bf80} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Solutions1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[50px] items-center justify-between left-0 px-[20px] py-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] top-[66px] w-[720px]" data-name="Solutions">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black">Product Planning</p>
      <MenuArrowRight />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Solutions />
      <Solutions1 />
    </div>
  );
}
