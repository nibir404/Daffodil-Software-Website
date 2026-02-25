import svgPaths from "./svg-m449zazr6q";

function ArrowDown() {
  return (
    <div className="absolute left-[50.6px] size-[40px] top-[50.59px]" data-name="arrow-down-02">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="arrow-down-02">
          <path d="M20 30.8367V8.33658" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p18dfdb00} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export default function Scroller() {
  return (
    <div className="relative size-full" data-name="Scroller">
      <div className="absolute left-[30.6px] size-[80px] top-[30.59px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
          <circle cx="40" cy="40" fill="var(--fill-0, #01E067)" id="Ellipse 160" r="40" />
        </svg>
      </div>
      <ArrowDown />
    </div>
  );
}