import svgPaths from "./svg-2wmzaob8t5";

function Component3DScale() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="3d-scale">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="3d-scale">
          <path d={svgPaths.p24656080} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2.5" />
          <path d={svgPaths.p31e49d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="2.5" />
          <path d={svgPaths.p3d29c400} id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="2.5" />
          <path d={svgPaths.pdb54380} id="Vector_4" stroke="var(--stroke-0, white)" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[rgba(44,246,152,0.75)] items-center justify-center relative rounded-[10px] size-full to-[#4ac4f0]">
      <div aria-hidden="true" className="absolute border-3 border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Component3DScale />
    </div>
  );
}