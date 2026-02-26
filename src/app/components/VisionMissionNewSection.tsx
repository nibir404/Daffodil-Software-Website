import imgVisionMission from "figma:asset/3df84f1e7b899de4f6ae8cd126704d362dc45f63.png";
import svgPaths from "../../assets/svgs/svg-rcpnf7sagi";

function EyeIcon() {
  return (
    <div className="relative shrink-0 size-[36px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="eye">
          <path d={svgPaths.p3a08e3c0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2.25" />
          <path d={svgPaths.p2e79c100} id="Vector_2" stroke="white" strokeWidth="2.25" />
          <path d={svgPaths.p853e6b0} id="Vector_3" stroke="white" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

function MissionIcon() {
  return (
    <div className="relative shrink-0 size-[36px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="arrow-up-right-stack">
          <path d="M21 15L7.5 28.5" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d={svgPaths.p2f2cf100} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d={svgPaths.p3db32200} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

export function VisionMissionNewSection() {
  return (
    <section className="bg-white py-[80px] md:py-[100px]">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] md:gap-[60px] items-start">
          {/* Left Column - Vision & Mission Content */}
          <div className="flex flex-col gap-[60px]">
            {/* Our Vision */}
            <div className="flex flex-col gap-[24px]">
              <div className="flex items-center gap-[20px]">
                <div className="w-[60px] h-[60px] rounded-[10px] bg-[#3368a4] flex items-center justify-center flex-shrink-0">
                  <EyeIcon />
                </div>
                <h2 className="font-['Helvetica_Now_Display'] font-medium text-[36px] md:text-[48px] lg:text-[64px] leading-[1.1] text-[#111]">
                  Our Vision
                </h2>
              </div>
              <p className="font-['Inter'] font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[28px] md:leading-[30px] text-[#3c3c3c]">
                To shape digital systems that simplify how organizations operate, adapt, and grow over time. We envision a future where technology removes friction instead of creating it—and where software becomes a quiet enabler of better decisions, not a constant problem to manage.
              </p>
            </div>

            {/* Our Mission */}
            <div className="flex flex-col gap-[24px]">
              <div className="flex items-center gap-[20px]">
                <div className="w-[60px] h-[60px] rounded-[10px] bg-[#3368a4] flex items-center justify-center flex-shrink-0">
                  <MissionIcon />
                </div>
                <h2 className="font-['Helvetica_Now_Display'] font-medium text-[36px] md:text-[48px] lg:text-[64px] leading-[1.1] text-[#111]">
                  Our Mission
                </h2>
              </div>
              <p className="font-['Inter'] font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[28px] md:leading-[30px] text-[#3c3c3c]">
                Our mission is to design and engineer reliable digital platforms that align with real business needs. We partner closely with organizations to create structured, maintainable systems—built with discipline, responsibility, and a clear understanding of long-term impact.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[540px] rounded-[10px] overflow-hidden">
            <img
              alt="Team collaboration with sticky notes during planning session"
              className="w-full h-full object-cover"
              src={imgVisionMission}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
