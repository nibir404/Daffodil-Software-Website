import { FAQSection } from "../../components/FAQSection";
import svgPaths from "../../../assets/svgs/svg-oc3bcnf80y";
import svgPathsHero from "../../../assets/svgs/svg-p7xrrkor7f";
import svgPathsInstitutions from "../../../assets/svgs/svg-uj8p6sl559";
import imgRectangle687 from "figma:asset/4e56b05061d95edad9421edea6df3f3ac05960cf.png";
import imgRectangle688 from "figma:asset/73cab8ee37cb976f0aa9923b2afd9b8dbacc2e6e.png";
import imgImage57 from "figma:asset/90090fd64c815b759af9b862ff05a9433d159c53.png";
import imgRectangle684 from "figma:asset/e03d3de0263542e76e4f109790b5f96637b962ab.png";
import imgRectangle686 from "figma:asset/865beb077f5e479a9ea3a92cb015a3d5d0e9c459.png";
import imgRectangle685 from "figma:asset/73322f1507c9d95334fc45aeb1f75e30c23cf354.png";
import imgImage78 from "figma:asset/b07939406d564d7731d11d7049c6203176375763.png";
import CTAFormContent from "../../../imports/Frame2085663518";
import imgCtaBackground from "figma:asset/32676907914974532402e69b553da4485fa5f045.png";

export function UniversityERP() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0b386c] overflow-hidden min-h-[600px] md:min-h-[700px] lg:min-h-[815px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={imgImage78} 
            alt="University Campus" 
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0b386c]/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28 text-center">
          {/* Education Badge */}
          <div className="inline-flex bg-[rgba(255,255,255,0.1)] border border-white/40 gap-[10px] items-center px-[12px] py-[10px] rounded-[10px] mb-10">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <g>
                <path d={svgPathsHero.p33efbe80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                <path d={svgPathsHero.p21318440} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                <path d={svgPathsHero.p13899700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
              </g>
            </svg>
            <span className="font-['Helvetica_Now_Display'] text-[14px] text-white">Education</span>
          </div>

          {/* Heading */}
          <h1 className="font-['Helvetica_Now_Display'] font-medium text-[32px] md:text-[48px] lg:text-[64px] text-white leading-[1.17] mb-6">
            University ERP Systems<br />
            Designed for Real Academic Operations
          </h1>

          {/* Subtitle */}
          <p className="font-['Inter'] text-[16px] md:text-[18px] lg:text-[20px] text-white/95 leading-[26px] md:leading-[28px] lg:leading-[30px] max-w-[900px] mx-auto mb-10">
            Universities manage far more than classes and students. Admissions, academics, examinations, finance, HR, and compliance must work together without friction. Daffodil Software Limited builds custom university ERP and management systems that centralize operations, improve visibility, and scale with institutional growth.
          </p>

          {/* CTA Button */}
          <a href="#contact">
            <div className="inline-flex bg-[#01e067] gap-[10px] items-center overflow-hidden pl-[24px] pr-[8px] py-[6px] rounded-[80px] relative h-[52px] group hover:bg-[#00c757] transition-colors">
              {/* Light flare animation */}
              <div className="absolute flex h-[130.588px] items-center justify-center left-[calc(50%-105.63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px] group-hover:animate-[flare_0.6s_ease-in-out]">
                <div className="rotate-[-46.28deg]">
                  <div className="h-[30px] w-[152px]">
                    <div className="absolute inset-[-180%_-35.53%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                        <g filter="url(#filter0_f_hero_uni)" style={{ mixBlendMode: "plus-lighter" }}>
                          <ellipse cx="130" cy="69" fill="white" fillOpacity="0.8" rx="76" ry="15" />
                        </g>
                        <defs>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_hero_uni" width="260" x="0" y="0">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_hero_uni" stdDeviation="27" />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <span className="font-['Helvetica_Now_Display'] font-medium text-[16px] text-[#111] z-10 relative">
                Request ERP Consultation
              </span>
              <div className="bg-[#111] rounded-full size-[36px] flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-90">
                <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                  <path d="M12.3321 8H3.33203" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPaths.p16251580} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Why Universities Need Purpose-Built ERP Systems */}
      <section className="py-16 md:py-20 lg:py-28 bg-white border-b border-[rgba(0,0,0,0.1)]">
        <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Left - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-10 md:gap-16">
              {/* Heading and Description */}
              <div className="flex flex-col gap-6">
                <h2 className="font-['Helvetica_Now_Display'] font-medium text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] text-[#111] leading-[1.17]">
                  Why Universities Need Purpose-Built ERP Systems
                </h2>
                <p className="font-['Inter'] text-[14px] md:text-[16px] text-[#3c3c3c] leading-[26px] md:leading-[30px]">
                  Most universities rely on disconnected tools, spreadsheets, or rigid off-the-shelf software that fails to reflect real academic workflows. As student volumes grow and regulatory requirements increase, these systems create delays, data inconsistency, and operational risk.
                </p>
              </div>
              
              {/* Large Quote Text */}
              <p className="font-['Inter'] text-[24px] md:text-[32px] lg:text-[40px] text-[#3c3c3c] leading-[1.4] md:leading-[1.5]">
                A university-focused ERP aligns technology with academic structures, approval flows, and governance reducing complexity while improving control.
              </p>
            </div>
            
            {/* Right - Images */}
            <div className="w-full lg:w-1/2 flex gap-5">
              {/* Left Column - 2 images stacked */}
              <div className="flex flex-col gap-5 flex-1">
                <div className="relative rounded-[10px] aspect-square overflow-hidden">
                  <img 
                    src={imgRectangle684} 
                    alt="University Technology" 
                    className="w-full h-full object-cover"
                  />
                  <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-[-2px] rounded-[12px] pointer-events-none" />
                </div>
                <div className="relative rounded-[10px] aspect-square overflow-hidden">
                  <img 
                    src={imgRectangle686} 
                    alt="Academic System" 
                    className="w-full h-full object-cover"
                  />
                  <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-[-2px] rounded-[12px] pointer-events-none" />
                </div>
              </div>
              
              {/* Right Column - 1 tall image */}
              <div className="flex-1">
                <div className="relative rounded-[10px] h-full overflow-hidden">
                  <img 
                    src={imgRectangle685} 
                    alt="University Development" 
                    className="w-full h-full object-cover"
                  />
                  <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-[-2px] rounded-[12px] pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Institutions Managing Academic Complexity - Cards */}
      <section className="py-16 md:py-20 lg:py-28 bg-white border-b border-[rgba(0,0,0,0.1)]">
        <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Left - Cards */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Card 1 - Public and private universities */}
                <div className="bg-[#f5f5f7] rounded-[10px] p-5 flex flex-col justify-end min-h-[160px]">
                  <div className="bg-[#3a986c] rounded-[10px] size-[40px] flex items-center justify-center mb-3">
                    <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                      <path d="M2 22H21.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M3 13V22M21 13V22" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M7.5 8V22M16.5 8V22" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M2 13H7M22 13H17" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M6.5 8H17.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPathsInstitutions.p3bd52d00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M12 22V20" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M10.5 12V12.5M13.5 12V12.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M10.5 16V16.5M13.5 16V16.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <p className="font-['Inter'] font-semibold text-[18px] md:text-[20px] text-black leading-[30px]">
                    Public and private universities
                  </p>
                </div>

                {/* Card 2 - Multi-campus and affiliated institutions */}
                <div className="bg-[#f5f5f7] rounded-[10px] p-5 flex flex-col justify-end min-h-[160px]">
                  <div className="bg-[#3a986c] rounded-[10px] size-[40px] flex items-center justify-center mb-3">
                    <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                      <path d={svgPathsInstitutions.p14ea3200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M22 14.75H19.5" stroke="white" strokeLinecap="round" strokeWidth="1.5" />
                      <path d="M8.5 6.75003H2" stroke="white" strokeLinecap="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <p className="font-['Inter'] font-semibold text-[18px] md:text-[20px] text-black leading-[30px]">
                    Multi-campus and affiliated institutions
                  </p>
                </div>

                {/* Card 3 - Colleges operating under a central academic body */}
                <div className="bg-[#f5f5f7] rounded-[10px] p-5 flex flex-col justify-end min-h-[160px]">
                  <div className="bg-[#3a986c] rounded-[10px] size-[40px] flex items-center justify-center mb-3">
                    <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                      <path d="M12 15.5V20.5" stroke="white" strokeLinecap="round" strokeWidth="1.5" />
                      <path d={svgPathsInstitutions.p1e92f400} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPathsInstitutions.p4c4c800} fill="white" />
                    </svg>
                  </div>
                  <p className="font-['Inter'] font-semibold text-[18px] md:text-[20px] text-black leading-[30px]">
                    Colleges operating under a central academic body
                  </p>
                </div>

                {/* Card 4 - Distance learning and blended education providers */}
                <div className="bg-[#f5f5f7] rounded-[10px] p-5 flex flex-col justify-end min-h-[160px]">
                  <div className="bg-[#3a986c] rounded-[10px] size-[40px] flex items-center justify-center mb-3">
                    <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                      <path d={svgPathsInstitutions.p7e11600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPathsInstitutions.p3729bc40} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPathsInstitutions.p3e821a80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPathsInstitutions.p126e98a0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <p className="font-['Inter'] font-semibold text-[18px] md:text-[20px] text-black leading-[30px]">
                    Distance learning and blended education providers
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <h2 className="font-['Helvetica_Now_Display'] font-medium text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] text-[#111] leading-[1.17] mb-6">
                Designed for Institutions Managing Academic Complexity
              </h2>
              <p className="font-['Inter'] text-[14px] md:text-[16px] text-[#3c3c3c] leading-[26px] md:leading-[30px]">
                See why this solution is built for:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Institutions Section */}
      

      {/* University Software Solutions We Build */}
      <section className="py-16 md:py-20 lg:py-28 bg-[#f5f5f7]">
        <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
          {/* Heading */}
          <div className="flex flex-col gap-6 items-center justify-center mb-12 md:mb-16">
            <h2 className="font-['Helvetica_Now_Display'] font-medium text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] text-[#111] leading-[1.17] text-center">
              University Software Solutions We Build
            </h2>
            <p className="font-['Inter'] text-[14px] md:text-[16px] text-[#3c3c3c] leading-[26px] md:leading-[30px] text-center">
              We develop integrated systems tailored to university operations, including:
            </p>
          </div>
          
          {/* Solutions Grid */}
          <div className="flex flex-col gap-5">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {/* Solution 1 */}
              <div className="flex flex-col gap-4 p-5">
                <h3 className="font-['Inter'] font-semibold text-[20px] md:text-[24px] text-[#111] leading-[30px]">
                  University ERP & MIS
                </h3>
                <p className="font-['Inter'] text-[14px] md:text-[16px] text-[#3c3c3c] leading-[26px] md:leading-[30px]">
                  A centralized platform covering admissions, academics, examinations, finance, HR, inventory, and reporting.
                </p>
              </div>

              {/* Solution 2 */}
              <div className="flex flex-col gap-4 p-5">
                <h3 className="font-['Inter'] font-semibold text-[20px] md:text-[24px] text-[#111] leading-[30px]">
                  Procurement & Inventory
                </h3>
                <p className="font-['Inter'] text-[14px] md:text-[16px] text-[#3c3c3c] leading-[26px] md:leading-[30px]">
                  Supplier management, purchase orders, GRN, stock valuation, inventory movement, reorder control.
                </p>
              </div>

              {/* Solution 3 */}
              <div className="flex flex-col gap-4 p-5">
                <h3 className="font-['Inter'] font-semibold text-[20px] md:text-[24px] text-[#111] leading-[30px]">
                  Student Information System
                </h3>
                <p className="font-['Inter'] text-[14px] md:text-[16px] text-[#3c3c3c] leading-[26px] md:leading-[30px]">
                  Complete lifecycle management of student data—from enrollment to graduation and transcripts.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {/* Solution 4 */}
              <div className="flex flex-col gap-4 p-5">
                <h3 className="font-['Inter'] font-semibold text-[20px] md:text-[24px] text-[#111] leading-[30px]">
                  Academic & Faculty Management
                </h3>
                <p className="font-['Inter'] text-[14px] md:text-[16px] text-[#3c3c3c] leading-[26px] md:leading-[30px]">
                  Course planning, faculty allocation, grading workflows, and academic approvals.
                </p>
              </div>

              {/* Solution 5 */}
              <div className="flex flex-col gap-4 p-5">
                <h3 className="font-['Inter'] font-semibold text-[20px] md:text-[24px] text-[#111] leading-[30px]">
                  Online Admission & Fee Management
                </h3>
                <p className="font-['Inter'] text-[14px] md:text-[16px] text-[#3c3c3c] leading-[26px] md:leading-[30px]">
                  Digital admission forms, merit processing, payment collection, and automated notifications.
                </p>
              </div>

              {/* Solution 6 */}
              <div className="flex flex-col gap-4 p-5">
                <h3 className="font-['Inter'] font-semibold text-[20px] md:text-[24px] text-[#111] leading-[30px]">
                  Role-Based Portals
                </h3>
                <p className="font-['Inter'] text-[14px] md:text-[16px] text-[#3c3c3c] leading-[26px] md:leading-[30px]">
                  Dedicated dashboards for students, faculty members, administrators, and university leadership.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-12 md:mt-16">
            <a href="/industries">
              <div className="inline-flex backdrop-blur-[10px] border border-[#111] gap-[10px] items-center overflow-hidden px-[24px] py-[6px] rounded-[80px] relative h-[52px] group hover:bg-[#111] transition-all duration-300">
                {/* Light flare animation */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute h-full w-[100px] bg-gradient-to-r from-transparent via-white/30 to-transparent -left-[100px] group-hover:left-[100%] transition-all duration-700 ease-out blur-sm" />
                </div>
                <span className="font-['Helvetica_Now_Display'] font-medium text-[16px] text-[#111] group-hover:text-white transition-colors z-10 relative">
                  Explore Other Industries
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* How Universities Use This System */}
      <section className="py-16 md:py-20 lg:py-28 bg-white">
        <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mb-12">
            <div className="w-full lg:w-1/2">
              <h2 className="font-['Helvetica_Now_Display'] font-medium text-[36px] md:text-[48px] lg:text-[56px] text-[#111] leading-[1.17]">
                How Universities Use This System
              </h2>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="font-['Inter'] text-[14px] md:text-[16px] text-[#3c3c3c] leading-[26px] md:leading-[30px]">
                This system supports core university operations from student admissions to academic records and financial management helping institutions reduce manual work and maintain consistent, reliable data.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left - Images */}
            <div className="flex gap-4 lg:w-1/2">
              <img 
                src={imgRectangle687} 
                alt="University Campus" 
                className="w-1/2 h-auto rounded-[10px] object-cover"
              />
              <img 
                src={imgRectangle688} 
                alt="Students Learning" 
                className="w-1/2 h-auto rounded-[10px] object-cover"
              />
            </div>

            {/* Right - List */}
            <div className="lg:w-1/2 space-y-0">
              <div className="border-b border-[rgba(0,0,0,0.1)] py-5">
                <p className="font-['Inter'] text-[18px] md:text-[20px] lg:text-[24px] text-[#111] leading-[30px]">
                  Automating admissions, registration, and fee collection
                </p>
              </div>
              <div className="border-b border-[rgba(0,0,0,0.1)] py-5">
                <p className="font-['Inter'] text-[18px] md:text-[20px] lg:text-[24px] text-[#111] leading-[30px]">
                  Managing exams, grading, certificates, and transcripts
                </p>
              </div>
              <div className="border-b border-[rgba(0,0,0,0.1)] py-5">
                <p className="font-['Inter'] text-[18px] md:text-[20px] lg:text-[24px] text-[#111] leading-[30px]">
                  Centralizing academic, administrative, and financial data
                </p>
              </div>
              <div className="border-b border-[rgba(0,0,0,0.1)] py-5">
                <p className="font-['Inter'] text-[18px] md:text-[20px] lg:text-[24px] text-[#111] leading-[30px]">
                  Improving coordination between departments and faculties
                </p>
              </div>
              <div className="py-5">
                <p className="font-['Inter'] text-[18px] md:text-[20px] lg:text-[24px] text-[#111] leading-[30px]">
                  Generating accurate academic, financial, and regulatory reports
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Technology Partner Section */}
      <section className="py-16 md:py-20 lg:py-28 bg-[#0b386c] text-white">
        <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-['Helvetica_Now_Display'] font-medium text-[36px] md:text-[48px] lg:text-[56px] leading-[1.17] mb-6">
              A Technology Partner That Understands Academic Operations
            </h2>
            <p className="font-['Inter'] text-[14px] md:text-[16px] text-white/90 leading-[26px] md:leading-[30px] max-w-[864px] mx-auto">
              Universities choose Daffodil Software Limited because we focus on operational fit, not generic software delivery.
            </p>
          </div>

          <div className="bg-[rgba(255,255,255,0.05)] rounded-[10px] border-2 border-[rgba(255,255,255,0.1)] overflow-hidden">
            {/* Feature 1 */}
            <div className="border-b border-[rgba(255,255,255,0.1)] px-6 md:px-10 py-6 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex gap-6 md:gap-20 items-start">
                <span className="font-['Inter'] text-[24px] md:text-[30px] leading-[30px]">01</span>
                <h3 className="font-['Inter'] text-[24px] md:text-[30px] lg:text-[36px] leading-[30px] md:leading-[40px] max-w-[467px]">
                  Experience building large-scale academic and ERP systems
                </h3>
              </div>
              <p className="font-['Inter'] text-[14px] md:text-[16px] leading-[26px] md:leading-[30px] max-w-[400px] text-left">
                Proven experience delivering systems that handle complex academic structures and high student volumes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border-b border-[rgba(255,255,255,0.1)] px-6 md:px-10 py-6 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex gap-6 md:gap-20 items-start">
                <span className="font-['Inter'] text-[24px] md:text-[30px] leading-[30px]">02</span>
                <h3 className="font-['Inter'] text-[24px] md:text-[30px] lg:text-[36px] leading-[30px] md:leading-[40px] max-w-[467px]">
                  Custom workflows aligned with university policies
                </h3>
              </div>
              <p className="font-['Inter'] text-[14px] md:text-[16px] leading-[26px] md:leading-[30px] max-w-[400px] text-left">
                Processes are tailored to institutional rules, approvals, and academic regulations—not forced templates.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border-b border-[rgba(255,255,255,0.1)] px-6 md:px-10 py-6 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex gap-6 md:gap-20 items-start">
                <span className="font-['Inter'] text-[24px] md:text-[30px] leading-[30px]">03</span>
                <h3 className="font-['Inter'] text-[24px] md:text-[30px] lg:text-[36px] leading-[30px] md:leading-[40px] max-w-[467px]">
                  UX designed for non-technical academic users
                </h3>
              </div>
              <p className="font-['Inter'] text-[14px] md:text-[16px] leading-[26px] md:leading-[30px] max-w-[400px] text-left">
                Interfaces are simple and intuitive so faculty and staff can work confidently without technical training.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="border-b border-[rgba(255,255,255,0.1)] px-6 md:px-10 py-6 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex gap-6 md:gap-20 items-start">
                <span className="font-['Inter'] text-[24px] md:text-[30px] leading-[30px]">04</span>
                <h3 className="font-['Inter'] text-[24px] md:text-[30px] lg:text-[36px] leading-[30px] md:leading-[40px] max-w-[467px]">
                  Scalable architecture for growing student populations
                </h3>
              </div>
              <p className="font-['Inter'] text-[14px] md:text-[16px] leading-[26px] md:leading-[30px] max-w-[400px] text-left">
                Systems are built to support increasing enrollment, new programs, and multi-campus expansion.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="px-6 md:px-10 py-6 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex gap-6 md:gap-20 items-start">
                <span className="font-['Inter'] text-[24px] md:text-[30px] leading-[30px]">05</span>
                <h3 className="font-['Inter'] text-[24px] md:text-[30px] lg:text-[36px] leading-[30px] md:leading-[40px] max-w-[467px]">
                  Long-term partnership for enhancement and support
                </h3>
              </div>
              <p className="font-['Inter'] text-[14px] md:text-[16px] leading-[26px] md:leading-[30px] max-w-[400px] text-left">
                We stay involved beyond launch to improve, scale, and support the system as needs evolve.
              </p>
            </div>

            {/* CTA Button */}
            <a href="#contact">
              <div className="group bg-[#01e067] flex items-center justify-between px-10 py-6 h-[120px] relative overflow-hidden hover:bg-[#00d563] transition-all cursor-pointer">
                {/* Light flare */}
                <div className="absolute flex h-[292.036px] items-center justify-center left-[calc(50%-683.89px)] mix-blend-plus-lighter top-[-105.89px] w-[636.657px] opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="rotate-[-11.73deg]">
                    <div className="h-[170.605px] w-[614.812px]">
                      <div className="absolute inset-[-117.23%_-32.53%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1014.81 570.605">
                          <g filter="url(#filter0_f_tech_partner)" style={{ mixBlendMode: "plus-lighter" }}>
                            <ellipse cx="507.406" cy="285.303" fill="white" fillOpacity="0.5" rx="307.406" ry="85.3026" />
                          </g>
                          <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="570.605" id="filter0_f_tech_partner" width="1014.81" x="0" y="0">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                              <feGaussianBlur result="effect1_foregroundBlur_tech_partner" stdDeviation="100" />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['Inter'] font-bold text-[24px] md:text-[30px] text-[#111] z-10 relative">
                  Book a Consultation
                </p>
                <div className="relative z-10">
                  <div className="bg-[#111] rounded-full size-[36px] group-hover:size-[60px] flex items-center justify-center transition-all duration-300">
                    <svg className="size-[16px] group-hover:size-[36px] transition-all duration-300" fill="none" viewBox="0 0 16 16">
                      <path d="M12.3321 8H3.33203" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p16251580} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Form Section */}
      <section className="relative w-full min-h-[872px] bg-gradient-to-b from-white to-[#c4eeda] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={imgCtaBackground} 
            alt="CTA Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px] py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
          <CTAFormContent />
        </div>
      </section>
    </div>
  );
}
