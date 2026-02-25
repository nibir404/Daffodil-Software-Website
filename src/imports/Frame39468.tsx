import svgPaths from "./svg-10ns7xk3fr";

function PaintBoard() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="paint-board">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="paint-board">
          <path d={svgPaths.p84e1800} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2.5" />
          <path d="M11.667 25.004L11.6815 25" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p2e625100} id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="2.5" />
          <path d={svgPaths.p2e35a200} id="Vector_4" stroke="var(--stroke-0, white)" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[rgba(44,246,152,0.75)] items-center justify-center relative rounded-[10px] size-full to-[#4ac4f0]">
      <div aria-hidden="true" className="absolute border-3 border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <PaintBoard />
    </div>
  );
}