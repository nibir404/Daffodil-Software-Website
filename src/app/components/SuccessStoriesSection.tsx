import svgPaths from "../../imports/svg-7htsu2eumu";
import imgImage32 from "figma:asset/3fb78841a0d9e817e7f89226c881690647824d8e.png";
import imgRectangle5 from "figma:asset/93bd53fc3a66870f52cc030f69da770da8cce477.png";

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic text-white whitespace-pre-wrap flex-1">
      <h2 className="font-['Helvetica_Now_Display'] font-medium leading-[75px] text-[64px] w-[723px]">
        Featured Success Stories
      </h2>
      <p className="font-['Inter'] font-normal leading-[30px] text-[16px] w-[518px]">
        Explore real-world case studies demonstrating how our custom software and ERP solutions solve complex enterprise challenges.
      </p>
    </div>
  );
}

function ViewAllButton() {
  return (
    <button className="h-[52px] rounded-[80px] border border-white border-solid relative group transition-all duration-300 hover:bg-white overflow-hidden">
      {/* Animated light flare on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute h-full w-[100px] bg-gradient-to-r from-transparent via-white/30 to-transparent -left-[100px] group-hover:left-[100%] transition-all duration-700 ease-out blur-sm" />
      </div>
      <div className="content-stretch flex gap-[10px] h-full items-center px-[24px] py-[6px] rounded-[inherit] relative">
        <p className="font-['Helvetica_Now_Display'] font-medium leading-[normal] not-italic text-[16px] text-white relative z-10 group-hover:text-[#111] transition-colors">
          View All Case Studies
        </p>
      </div>
    </button>
  );
}

function CompanyLogo() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[10px] rounded-[14px] shrink-0 w-[214px]">
      <div className="aspect-[194/58] relative shrink-0 w-full">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            alt="Smart Business 24 Logo" 
            className="absolute h-[224.14%] left-[-0.23%] max-w-none top-[-48.28%] w-[100.47%]" 
            src={imgImage32} 
          />
        </div>
      </div>
    </div>
  );
}

function CaseStudyTitle() {
  return (
    <div className="content-stretch flex gap-[20px] items-center shrink-0">
      <CompanyLogo />
      <h3 className="font-['Helvetica_Now_Display'] font-bold leading-[43px] not-italic text-[24px] text-white">
        Smart Business 24 (ERP Software)
      </h3>
    </div>
  );
}

function CaseStudyDescription() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic text-white w-full whitespace-pre-wrap">
      <h4 className="font-['Helvetica_Now_Display'] leading-[43px] text-[36px] w-full transition-colors duration-300 group-hover:text-[#00D9A3]">
        Modernizing Legacy Systems for a Large-Scale Enterprise Platform
      </h4>
      <p className="font-['Inter'] font-normal leading-[30px] text-[16px] w-full">
        Smart Business 24 implemented a custom ERP software solution to centralize accounting, HR, payroll, sales, purchase, and inventory management—eliminating manual workflows and improving operational visibility across departments.
      </p>
    </div>
  );
}

function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="backdrop-blur-[27px] bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center p-[10px] rounded-[10px] shrink-0">
      <p className="font-['Inter'] font-normal not-italic text-white">
        <span className="font-bold leading-[30px] text-[16px]">{value}</span>
        <span className="leading-[30px] text-[14px]"> {label}</span>
      </p>
    </div>
  );
}

function CaseStudyStats() {
  return (
    <div className="content-stretch flex gap-[10px] items-center shrink-0">
      <StatBadge value="42%" label="infrastructure cost reduction" />
      <StatBadge value="3×" label="deployment speed" />
      <StatBadge value="99.9%" label="system uptime" />
    </div>
  );
}

function ArrowUpRightIcon() {
  return (
    <div className="relative size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path 
          d={svgPaths.p5d39ec0} 
          stroke="#00428D" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="1.5" 
        />
      </svg>
    </div>
  );
}

function ReadCaseStudyButton() {
  return (
    <button className="content-stretch flex gap-[10px] items-center justify-center rounded-[80px] shrink-0 group/button hover:opacity-90 transition-opacity">
      <p className="font-['Helvetica_Now_Display'] font-medium leading-[normal] not-italic text-[16px] text-white">
        Read Full Case Study
      </p>
      <div className="bg-white group-hover/button:bg-[#FF5757] content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[90px] shrink-0 size-[40px] group-hover/button:scale-110 transition-all duration-300">
        <div className="-translate-x-1/2 absolute flex h-[72.26px] items-center justify-center left-[calc(50%+43.83px)] mix-blend-plus-lighter top-[-22.66px] w-[70.128px] pointer-events-none">
          <div className="flex-none rotate-[-46.28deg]">
            <div className="h-[16.6px] relative w-[84.108px]">
              <div className="absolute inset-[-144.58%_-28.53%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132.108 64.6003">
                  <g filter="url(#filter0_f_read_case)" style={{ mixBlendMode: "plus-lighter" }}>
                    <ellipse cx="66.054" cy="32.3001" fill="white" fillOpacity="0.8" rx="42.054" ry="8.30013" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="64.6003" id="filter0_f_read_case" width="132.108" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_read_case" stdDeviation="12" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 size-[28.284px]">
          <div className="flex-none rotate-45">
            <ArrowUpRightIcon />
          </div>
        </div>
      </div>
    </button>
  );
}

function CaseStudyCard() {
  return (
    <div className="h-[680px] relative rounded-[20px] shrink-0 w-full max-w-[1400px] group cursor-pointer">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 rounded-[20px]">
          <div className="absolute inset-0 overflow-hidden rounded-[20px]">
            <img 
              alt="ERP Dashboard Background" 
              className="absolute h-[159%] left-[-2.3%] max-w-none top-[-18.1%] w-[104.61%] object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
              src={imgRectangle5} 
            />
          </div>
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] from-[6.352%] inset-0 rounded-[20px] to-black" />
        </div>

        {/* Content */}
        <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[40px] top-[260px] bottom-[40px] w-[calc(100%-80px)] max-w-[1320px]">
          <CaseStudyTitle />
          <CaseStudyDescription />
          <CaseStudyStats />
          <ReadCaseStudyButton />
        </div>
      </div>
      
      {/* Border */}
      <div className="absolute border-[10px] border-[rgba(255,255,255,0.1)] border-solid inset-[-10px] pointer-events-none rounded-[30px] transition-colors duration-300 group-hover:border-[rgba(255,255,255,0.15)]" />
    </div>
  );
}

export function SuccessStoriesSection() {
  return (
    <section className="bg-[#0d1e32] relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="-translate-x-1/2 absolute left-[calc(50%+2px)] size-[1940px] top-0 pointer-events-none">
        <div className="absolute inset-[-20.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2740 2740">
            <g filter="url(#filter0_f_success_bg)">
              <circle cx="1370" cy="1370" fill="#0B396C" r="970" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2740" id="filter0_f_success_bg" width="2740" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_success_bg" stdDeviation="200" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 md:px-12 lg:px-24 xl:px-[100px] relative z-10">
        <div className="max-w-[1520px] mx-auto">
          {/* Header Section */}
          <div className="content-stretch flex gap-[10px] items-center py-[10px] mb-[60px] w-full max-w-[1400px] mx-auto">
            <SectionHeader />
            <ViewAllButton />
          </div>

          {/* Case Study Card */}
          <div className="mx-auto">
            <CaseStudyCard />
          </div>
        </div>
      </div>
    </section>
  );
}