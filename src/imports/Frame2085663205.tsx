import svgPaths from "../assets/svgs/svg-rriiw31jtj";

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center p-[10px] relative size-full">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white">View All Products</p>
      <div className="relative shrink-0 size-[16px]" data-name="Menu/arrow-right-02">
        <div className="absolute bottom-1/2 left-[20.83%] right-[22.92%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-0.75px_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 1.5">
              <path d="M9.75002 0.75H0.75" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[54.17%] right-[20.83%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-9.38%_-18.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.50005 9.5001">
              <path d={svgPaths.p8187a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
