import svgPaths from "../../imports/svg-m449zazr6q";

function ArrowDown() {
  return (
    <div className="absolute left-[50.6px] size-[40px] top-[50.59px] animate-bounce-subtle" data-name="arrow-down-02">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="arrow-down-02">
          <path d="M20 30.8367V8.33658" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p18dfdb00} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export function ScrollDownArrow() {
  return (
    <div className="relative size-[141.18px]" data-name="Scroller">
      <div className="absolute left-[30.6px] size-[80px] top-[30.59px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
          <circle cx="40" cy="40" fill="var(--fill-0, #01E067)" id="Ellipse 160" r="40" />
        </svg>
      </div>
      <ArrowDown />
      
      {/* Add the curved "Scroll Down" text */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 142 142" className="size-full">
          <defs>
            <path
              id="circlePath"
              d="M 71,71 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
            />
          </defs>
          <text className="fill-[#111] font-['Inter',sans-serif] text-[12px] font-medium tracking-[0.15em] uppercase">
            <textPath href="#circlePath" startOffset="0%">
              Scroll Down / Scroll Down / Scroll Down / 
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}

export default ScrollDownArrow;
