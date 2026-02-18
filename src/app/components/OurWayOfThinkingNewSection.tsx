import svgPaths from "../../imports/svg-ojke49rdqy";

function AiContentGenerator() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ai-content-generator-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ai-content-generator-01">
          <path d={svgPaths.p23e3ca00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p26f26600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7 7H15M7 11.5H15M7 16H11" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Grid() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="grid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="grid">
          <path d="M7 3V21" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M17 3V21" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M21 7H3" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M21 17H3" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function UserGroup() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="user-group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="user-group">
          <path d={svgPaths.p2d209100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1e393080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2a7fe00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p22c0900} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pa0d2a00} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p25a14520} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Component3DScale() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="3d-scale">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="3d-scale">
          <path d={svgPaths.pbf95080} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
          <path d={svgPaths.p537f000} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
          <path d={svgPaths.p1170ac00} id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
          <path d={svgPaths.p34ad5780} id="Vector_4" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function PrincipleCard({ icon, title, description }: CardProps) {
  return (
    <div className="bg-white flex-1 min-w-[250px] relative rounded-[10px]">
      <div className="flex flex-col items-start justify-between p-[20px] h-full min-h-[220px]">
        <div className="flex flex-col gap-[10px] items-start w-full">
          <div className="bg-[#3a986c] flex items-center justify-center rounded-[10px] size-[40px]">
            {icon}
          </div>
          <p className="font-['Inter'] font-semibold leading-[30px] text-[20px] text-black">
            {title}
          </p>
        </div>
        <p className="font-['Inter'] font-medium leading-[30px] text-[#3c3c3c] text-[16px] w-full">
          {description}
        </p>
      </div>
    </div>
  );
}

export function OurWayOfThinkingNewSection() {
  return (
    <section className="bg-[#f5f5f7] py-[60px]">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        <div className="flex flex-col gap-[60px] w-full">
          {/* Header */}
          <div className="flex flex-col lg:flex-row gap-[24px] lg:items-start w-full">
            <div className="flex-1 min-w-0">
              <h2 className="font-['Helvetica_Now_Display'] font-medium leading-[1.2] text-[#111] text-[36px] md:text-[48px] lg:text-[64px]">
                Our Way of Thinking
              </h2>
            </div>
            <div className="w-full lg:w-[653px] shrink-0">
              <p className="font-['Inter'] font-normal leading-[30px] text-[#3c3c3c] text-[16px]">
                Our thinking is grounded in how systems function over time, not how they appear at launch. We focus on clarity, structure, and long-term viability so what we build remains usable, adaptable, and dependable as organizations evolve.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[16px] w-full">
            <PrincipleCard
              icon={<AiContentGenerator />}
              title="Context Before Code"
              description="Every system begins with understanding people, processes, constraints, and consequences."
            />
            <PrincipleCard
              icon={<Grid />}
              title="Structure Over Shortcuts"
              description="We optimize for clarity, maintainability, and future change not speed alone."
            />
            <PrincipleCard
              icon={<UserGroup />}
              title="Collaboration Without Dependency"
              description="We design systems teams can own, extend, and operate confidently."
            />
            <PrincipleCard
              icon={<Component3DScale />}
              title="Longevity as a Design Requirement"
              description="If it won't make sense in three years, it doesn't ship."
            />
          </div>
        </div>
      </div>
    </section>
  );
}