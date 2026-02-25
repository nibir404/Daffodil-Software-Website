import svgPaths from "./svg-3mnjwcrt6e";

function ArrowDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-down-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-down-01">
          <path d={svgPaths.p181e3c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

export default function MenuBtn() {
  return (
    <div className="bg-[#4e635a] content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[150px] size-full" data-name="Menu Btn">
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white">Menu</p>
      <ArrowDown />
    </div>
  );
}