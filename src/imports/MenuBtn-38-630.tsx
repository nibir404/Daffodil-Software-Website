import svgPaths from "../assets/svgs/svg-grohrkkzxi";

function ArrowDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-down-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-down-01">
          <path d={svgPaths.p181e3c80} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

export default function MenuBtn() {
  return (
    <div className="bg-[#d5ffec] content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[150px] size-full" data-name="Menu Btn">
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[16px]">Menu</p>
      <ArrowDown />
    </div>
  );
}
