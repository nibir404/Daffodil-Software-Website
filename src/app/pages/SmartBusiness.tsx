import { Check, ArrowRight } from "lucide-react";
import Cta from "../../imports/Cta-121-201";
import CTAFormContent from "../../imports/Frame2085663518";
import { FAQSection } from "../components/FAQSection";
import { PrimaryCTA, SecondaryCTA } from "../components/CTAButtons";
import { InsightsSection } from "../components/InsightsSection";
import svgPaths from "../../assets/svgs/svg-sitq8yjpd8";
import svgPathsViewProducts from "../../assets/svgs/svg-rriiw31jtj";
import dashboardImage from "figma:asset/c215c35808eadd0921128385dfd722e3e858a337.png";
import imgDeshiJamar from "figma:asset/871c154f69889e15b43fb93c8070b6d9a576ac9c.png";
import imgEastCoast from "figma:asset/a5c2b13c70fd5d181d101755999a189183a22bb4.png";
import imgGmeGroup from "figma:asset/e19895d50fa7021662329baf515f32168351767e.png";
import imgKurmitola from "figma:asset/5a953beda881a4340ca9a7d70e4dc6954c4db25b.png";
import imgComilla from "figma:asset/65858cb6ae73a46e49bd05c666de86628d4b0d50.png";
import imgDaffodilComputers from "figma:asset/c21810431d01748d0c7cc59913c98bd2b59ba95e.png";
import imgHokseed from "figma:asset/edadc830852b6f7bb1a0533cb9600a6f136c5e81.png";
import imgCardioCare from "figma:asset/68c265633cca5a94c6ee7f27899077a253634d30.png";
import svgPathsWhoFor from "../../assets/svgs/svg-2lbdl17c7t";
import imgRectangle682 from "figma:asset/3cda6d29446a0dd95cddd4bb09dc37ba18c71b1d.png";
import svgPathsComparison from "../../assets/svgs/svg-5gy4xc8zew";
import svgPathsImplementation from "../../assets/svgs/svg-3h6aj6lx8p";
import imgModulesCode from "figma:asset/556a699ad75247b2eb1dbc7283ee994b8a0149c3.png";
import imgCtaBackground from "figma:asset/32676907914974532402e69b553da4485fa5f045.png";

// Hero Section Component - Custom with Figma Asset
function SmartBusinessHero() {
  return (
    <section 
      className="relative w-full min-h-[600px] h-[700px] md:h-[750px] lg:h-[800px] overflow-hidden"
      style={{ 
        backgroundImage: "linear-gradient(-90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), linear-gradient(90deg, rgb(68, 147, 197) 0%, rgb(68, 147, 197) 100%)" 
      }}
    >
      {/* Background gradient accents - hidden on mobile/tablet */}
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-full left-[1193px] to-[#4ac4f0] w-[242px] hidden lg:block" />
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-full left-[1678px] to-[#4ac4f0] w-[242px] hidden lg:block" />
      <div className="absolute bottom-0 flex h-full items-center justify-center left-[1435px] w-[243px] hidden lg:block">
        <div className="flex-none rotate-180">
          <div className="bg-gradient-to-b from-[rgba(255,255,255,0)] h-full to-[#4ac4f0] w-[243px]" />
        </div>
      </div>

      {/* Content Container - Matching Home page padding */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 px-6 md:px-12 lg:px-24 xl:px-[100px] max-w-full w-full">
        <div className="max-w-[947px]">
          {/* Text Content */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col font-['Helvetica_Now_Display'] text-white leading-normal">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-medium">Smart Business 24</h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-medium">Enterprise ERP Software</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-medium">Built for Real Business Operations</h3>
            </div>
            <p className="font-['Inter'] text-base md:text-lg lg:text-xl text-white leading-[1.5] md:leading-[30px] max-w-[796px]">
              Smart Business 24 is an all-in-one ERP platform that centralizes finance, HR, inventory, manufacturing, sales, and operations—helping organizations gain control, visibility, and scalability.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-stretch sm:items-center mt-6 md:mt-8 lg:mt-10">
            <PrimaryCTA text="Request a Demo" />
            <a href="/products" className="inline-block">
              <button className="h-[48px] md:h-[52px] w-full sm:w-auto rounded-[80px] border border-white px-6 py-[6px] relative group hover:bg-white transition-all duration-300 overflow-hidden">
                {/* Animated light flare on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute h-full w-[100px] bg-gradient-to-r from-transparent via-white/30 to-transparent -left-[100px] group-hover:left-[100%] transition-all duration-700 ease-out blur-sm" />
                </div>
                <span className="font-['Helvetica_Now_Display'] font-medium text-[14px] md:text-[16px] text-white group-hover:text-[#111] relative z-10 transition-colors duration-300">
                  View All Products
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Dashboard Image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[750px] hidden xl:block">
        <img 
          src={dashboardImage} 
          alt="Smart Business 24 Dashboard" 
          className="w-full h-auto rounded-lg shadow-2xl"
        />
      </div>
    </section>
  );
}

// Trusted By Section
function TrustedBySection() {
  const clientLogos = [
    imgDeshiJamar,
    imgEastCoast,
    imgGmeGroup,
    imgKurmitola,
    imgComilla,
    imgDaffodilComputers,
    imgHokseed,
    imgCardioCare
  ];

  // Multiply logos to fill the space better
  const multipliedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 relative" style={{ position: 'relative' }}>
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px] relative">
        {/* Trust Badges */}
        <div className="text-center mb-10 md:mb-12">
          <p className="font-['Inter'] text-[18px] md:text-[24px] lg:text-[30px] text-[#3c3c3c] leading-[1.4] md:leading-[1.5] lg:leading-[40px]">
            Trusted by <span className="font-semibold text-[#111]">100+</span> organizations across{" "}
            <span className="font-semibold text-[#111]">Bangladesh</span>,{" "}
            <span className="font-semibold text-[#111]">USA</span>,{" "}
            <span className="font-semibold text-[#111]">UAE</span>, and{" "}
            <span className="font-semibold text-[#111]">Europe</span> for
          </p>
          <p className="font-['Inter'] text-[18px] md:text-[24px] lg:text-[30px] text-[#3c3c3c] leading-[1.4] md:leading-[1.5] lg:leading-[40px]">
            enterprise software development, ERP implementation, and long-term system support.
          </p>
        </div>

        {/* Client Logos - Scrolling */}
        <div className="border-t border-b border-[rgba(0,0,0,0.1)] py-8 md:py-10 lg:py-12 mb-12 md:mb-14 lg:mb-16 overflow-hidden">
          <style>
            {`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-scroll {
                animation: scroll 40s linear infinite;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}
          </style>
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {multipliedLogos.map((logo, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 h-[50px] md:h-[60px] lg:h-[80px] w-[120px] md:w-[150px] lg:w-[180px] flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 mx-4 md:mx-6 lg:mx-8">
                <img 
                  src={logo} 
                  alt={`Client ${index + 1}`}
                  className="h-full w-auto object-contain max-w-[90px] md:max-w-[110px] lg:max-w-[140px]"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {multipliedLogos.map((logo, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 h-[50px] md:h-[60px] lg:h-[80px] w-[120px] md:w-[150px] lg:w-[180px] flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 mx-4 md:mx-6 lg:mx-8">
                <img 
                  src={logo} 
                  alt={`Client ${index + 1}`}
                  className="h-full w-auto object-contain max-w-[90px] md:max-w-[110px] lg:max-w-[140px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Who Smart Business 24 Is For Section
function WhySmartBusinessSection() {
  return (
    <section className="relative w-full pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[120px] pb-12 md:pb-16 lg:pb-20 xl:pb-[100px] bg-white">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        <div className="flex flex-col gap-[60px]">
          {/* Header and List Content */}
          <div className="flex flex-col lg:flex-row gap-[60px] items-start">
            {/* Left: Header */}
            <div className="flex flex-col gap-[24px] flex-1">
              <h2 className="font-['Helvetica_Now_Display'] text-[40px] md:text-[48px] lg:text-[64px] leading-[1.2] text-[#111]">
                Who Smart Business 24 is for
              </h2>
              <p className="font-['Inter'] text-[16px] leading-[30px] text-[#3c3c3c]">
                Smart Business 24 is designed for organizations that need structured operations, accurate reporting, and long-term scalability.
              </p>
            </div>

            {/* Right: List of Target Audiences */}
            <div className="flex-1 flex flex-col">
              {/* Item 01 */}
              <div className="flex gap-[16px] items-start py-[20px] border-b border-[rgba(0,0,0,0.1)]">
                <div className="bg-gradient-to-b from-[#c0eeff] to-[rgba(44,246,152,0.75)] rounded-[10px] size-[40px] flex items-center justify-center border border-[rgba(0,0,0,0.1)] flex-shrink-0">
                  <p className="font-['Inter'] font-semibold text-[14px] leading-[30px] text-[#111]">01</p>
                </div>
                <div className="flex-1 flex flex-col gap-[8px] justify-center">
                  <h3 className="font-['Inter'] font-semibold text-[24px] leading-[30px] text-[#111]">
                    Business Owners & Founders
                  </h3>
                  <p className="font-['Inter'] text-[16px] leading-[30px] text-[#3c3c3c]">
                    Looking for better control over finance, operations, and growth without operational chaos.
                  </p>
                </div>
              </div>

              {/* Item 02 */}
              <div className="flex gap-[16px] items-start py-[20px] border-b border-[rgba(0,0,0,0.1)]">
                <div className="bg-gradient-to-b from-[#c0eeff] to-[rgba(44,246,152,0.75)] rounded-[10px] size-[40px] flex items-center justify-center border border-[rgba(0,0,0,0.1)] flex-shrink-0">
                  <p className="font-['Inter'] font-semibold text-[14px] leading-[30px] text-[#111]">02</p>
                </div>
                <div className="flex flex-col gap-[8px] justify-center">
                  <h3 className="font-['Inter'] font-semibold text-[24px] leading-[30px] text-[#111]">
                    Operations & Functional Heads
                  </h3>
                  <p className="font-['Inter'] text-[16px] leading-[30px] text-[#3c3c3c]">
                    Who need ERP workflows that match real approval structures, reporting formats, and daily processes.
                  </p>
                </div>
              </div>

              {/* Item 03 */}
              <div className="flex gap-[16px] items-start py-[20px]">
                <div className="bg-gradient-to-b from-[#c0eeff] to-[rgba(44,246,152,0.75)] rounded-[10px] size-[40px] flex items-center justify-center border border-[rgba(0,0,0,0.1)] flex-shrink-0">
                  <p className="font-['Inter'] font-semibold text-[14px] leading-[30px] text-[#111]">03</p>
                </div>
                <div className="flex flex-col gap-[8px] justify-center">
                  <h3 className="font-['Inter'] font-semibold text-[24px] leading-[30px] text-[#111]">
                    IT & Technical Teams
                  </h3>
                  <p className="font-['Inter'] text-[16px] leading-[30px] text-[#3c3c3c]">
                    Who require a secure, scalable ERP system that integrates with existing platforms and infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Preview Section */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[622px] rounded-[10px] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img 
                src={imgRectangle682} 
                alt="Smart Business 24 Overview" 
                className="absolute w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] rounded-[10px]" />
            </div>
            <div className="absolute inset-0 border border-[rgba(0,0,0,0.2)] rounded-[10px] pointer-events-none" />

            {/* Play Button with Ripple Effect */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* Outer ripple */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[120px]">
                <svg className="block size-full" fill="none" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="60" fill="white" fillOpacity="0.1" />
                </svg>
              </div>
              {/* Inner ripple */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[100px]">
                <svg className="block size-full" fill="none" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50" fill="white" fillOpacity="0.1" />
                </svg>
              </div>
              {/* Play button */}
              <div className="relative bg-gradient-to-b from-[#01e067] to-[rgba(44,246,152,0.75)] rounded-[70px] size-[80px] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="size-[60px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 60 60">
                    <g>
                      <path 
                        d={svgPathsWhoFor.p810cf00} 
                        stroke="#111111" 
                        strokeWidth="2.5" 
                      />
                      <path 
                        d={svgPathsWhoFor.p23c0fa00} 
                        fill="#111111" 
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Comparison Table Section - Why Organizations Choose Smart Business 24
function ComparisonSection() {
  return (
    <section className="relative w-full pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[120px] pb-12 md:pb-16 lg:pb-20 xl:pb-[100px] bg-[#0d1e32] overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1920px] h-[1920px] pointer-events-none">
        <div className="absolute inset-[-20.83%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2720 2720">
            <g filter="url(#filter0_f_comparison_bg)">
              <circle cx="1360" cy="1360" r="960" fill="#0B396C" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2720" id="filter0_f_comparison_bg" width="2720" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_comparison_bg" stdDeviation="200" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px] relative z-10">
        <div className="flex flex-col gap-[60px] items-center">
          {/* Header */}
          <div className="flex flex-col gap-[20px] items-center justify-center text-center w-full">
            <h2 className="font-['Helvetica_Now_Display'] text-[40px] md:text-[48px] lg:text-[64px] leading-[1.2] text-white">
              Why Organizations Choose Smart Business 24<br />
              Over Traditional Systems
            </h2>
            <p className="font-['Inter'] text-[18px] md:text-[20px] leading-[30px] text-[rgba(255,255,255,0.7)] max-w-[1368px]">
              Many organizations rely on disconnected tools, spreadsheets, or rigid legacy software that slow operations and limit visibility. Smart Business 24 replaces fragmented systems with a centralized, scalable ERP designed for real business growth.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-[rgba(255,255,255,0.05)] rounded-[20px] w-full p-[20px]">
            <div className="flex flex-col lg:flex-row gap-[20px] w-full">
              {/* Column 1: Criteria */}
              <div className="flex flex-col w-full lg:w-[382px] shrink-0 gap-[10px]">
                {/* Header */}
                <div className="bg-[rgba(255,255,255,0.1)] h-[88px] flex items-center px-[40px] py-[24px]">
                  <p className="font-['Inter'] font-bold text-[24px] md:text-[30px] leading-[40px] text-white">Criteria</p>
                </div>
                {/* Rows */}
                <div className="bg-[rgba(255,255,255,0.08)] h-[110px] flex items-center px-[40px] py-[20px]">
                  <p className="font-['Inter'] font-semibold text-[20px] md:text-[24px] leading-[30px] text-white">System Structure</p>
                </div>
                <div className="bg-[rgba(255,255,255,0.08)] h-[110px] flex items-center px-[40px] py-[20px]">
                  <p className="font-['Inter'] font-semibold text-[20px] md:text-[24px] leading-[30px] text-white">Operational Efficiency</p>
                </div>
                <div className="bg-[rgba(255,255,255,0.08)] h-[110px] flex items-center px-[40px] py-[20px]">
                  <p className="font-['Inter'] font-semibold text-[20px] md:text-[24px] leading-[30px] text-white">Data Accuracy & Visibility</p>
                </div>
                <div className="bg-[rgba(255,255,255,0.08)] h-[110px] flex items-center px-[40px] py-[20px]">
                  <p className="font-['Inter'] font-semibold text-[20px] md:text-[24px] leading-[30px] text-white">Management Insight</p>
                </div>
                <div className="bg-[rgba(255,255,255,0.08)] h-[110px] flex items-center px-[40px] py-[20px]">
                  <p className="font-['Inter'] font-semibold text-[20px] md:text-[24px] leading-[30px] text-white">Scalability</p>
                </div>
              </div>

              {/* Column 2: Smart Business 24 ERP */}
              <div className="flex flex-col w-full lg:w-[549px] shrink-0 gap-[10px]">
                {/* Header with Crown */}
                <div className="border border-[#01e067] rounded-[10px] h-[88px] flex items-center gap-[16px] px-[20px]">
                  <div className="bg-gradient-to-b from-[#01e067] to-[rgba(44,246,152,0.75)] rounded-[70px] size-[40px] flex items-center justify-center shrink-0">
                    <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                      <g>
                        <path d="M4.16797 16.666H15.8346" stroke="#141B34" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPathsComparison.p18942800} stroke="#141B34" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-['Inter'] font-bold text-[20px] md:text-[24px] leading-[30px] bg-clip-text bg-gradient-to-r from-[#2cf698] to-[#4ac4f0]" style={{ WebkitTextFillColor: "transparent" }}>
                    Smart Business 24 ERP
                  </p>
                </div>
                {/* Rows */}
                <div className="border border-[rgba(255,255,255,0.9)] rounded-[10px] h-[110px] flex items-center px-[20px]">
                  <p className="font-['Inter'] text-[18px] md:text-[20px] leading-[30px] text-white">One centralized ERP platform covering finance, HR, inventory, operations, and reporting.</p>
                </div>
                <div className="border border-[rgba(255,255,255,0.9)] rounded-[10px] h-[110px] flex items-center px-[20px]">
                  <p className="font-['Inter'] text-[18px] md:text-[20px] leading-[30px] text-white">Automated workflows, approvals, and real-time reporting reduce manual work and delays.</p>
                </div>
                <div className="border border-[rgba(255,255,255,0.9)] rounded-[10px] h-[110px] flex items-center px-[20px]">
                  <p className="font-['Inter'] text-[18px] md:text-[20px] leading-[30px] text-white">Accurate stock, cost, and financial data available in real time across departments.</p>
                </div>
                <div className="border border-[rgba(255,255,255,0.9)] rounded-[10px] h-[110px] flex items-center px-[20px]">
                  <p className="font-['Inter'] text-[18px] md:text-[20px] leading-[30px] text-white">Executive dashboards provide clear insights for faster, informed decisions.</p>
                </div>
                <div className="border border-[rgba(255,255,255,0.9)] rounded-[10px] h-[110px] flex items-center px-[20px]">
                  <p className="font-['Inter'] text-[18px] md:text-[20px] leading-[30px] text-white">Modular ERP that scales easily as the organization grows or adds new processes.</p>
                </div>
              </div>

              {/* Column 3: Common Business Challenge */}
              <div className="flex-1 flex flex-col gap-[10px]">
                {/* Header */}
                <div className="border border-[rgba(255,255,255,0.2)] rounded-[10px] h-[88px] flex items-center px-[20px]">
                  <p className="font-['Inter'] font-bold text-[20px] md:text-[24px] leading-[30px] text-white">Common Business Challenge</p>
                </div>
                {/* Rows */}
                <div className="border border-[rgba(255,255,255,0.1)] rounded-[10px] h-[110px] flex items-center px-[20px]">
                  <p className="font-['Inter'] text-[18px] md:text-[20px] leading-[30px] text-[rgba(255,255,255,0.7)]">Multiple disconnected tools for accounting, HR, inventory, and operations.</p>
                </div>
                <div className="border border-[rgba(255,255,255,0.1)] rounded-[10px] h-[110px] flex items-center px-[20px]">
                  <p className="font-['Inter'] text-[18px] md:text-[20px] leading-[30px] text-[rgba(255,255,255,0.7)]">Heavy reliance on manual approvals, spreadsheets, and delayed reporting.</p>
                </div>
                <div className="border border-[rgba(255,255,255,0.1)] rounded-[10px] h-[110px] flex items-center px-[20px]">
                  <p className="font-['Inter'] text-[18px] md:text-[20px] leading-[30px] text-[rgba(255,255,255,0.7)]">Inconsistent data, limited visibility, and frequent reconciliation issues.</p>
                </div>
                <div className="border border-[rgba(255,255,255,0.1)] rounded-[10px] h-[110px] flex items-center px-[20px]">
                  <p className="font-['Inter'] text-[18px] md:text-[20px] leading-[30px] text-[rgba(255,255,255,0.7)]">Limited or delayed insights make strategic decision-making difficult.</p>
                </div>
                <div className="border border-[rgba(255,255,255,0.1)] rounded-[10px] h-[110px] flex items-center px-[20px]">
                  <p className="font-['Inter'] text-[18px] md:text-[20px] leading-[30px] text-[rgba(255,255,255,0.7)]">Systems become harder to manage and require replacements as complexity increases.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative h-[52px] rounded-[80px] border border-white backdrop-blur-[10px] overflow-hidden">
            {/* Light Flare Effect */}
            <div className="absolute flex h-[130.588px] items-center justify-center left-[calc(50%-98.63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px]">
              <div className="rotate-[-46.28deg]">
                <div className="h-[30px] w-[152px]">
                  <div className="absolute inset-[-180%_-35.53%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                      <g filter="url(#filter0_f_cta_comparison)" style={{ mixBlendMode: "plus-lighter" }}>
                        <ellipse cx="130" cy="69" fill="white" fillOpacity="0.6" rx="76" ry="15" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_cta_comparison" width="260" x="0" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                          <feGaussianBlur result="effect1_foregroundBlur_cta_comparison" stdDeviation="27" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center gap-[10px] h-full px-[24px] py-[6px] cursor-pointer hover:bg-[rgba(255,255,255,0.1)] transition-all">
              <p className="font-['Helvetica_Now_Display'] text-[16px] leading-normal text-white">Explore All Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Key Benefits Section
function KeyBenefitsSection() {
  const benefits = [
    "Improved operational efficiency and reduced manual workload",
    "Accurate, real-time financial and management reporting",
    "Better coordination across departments",
    "Higher system adoption through intuitive workflows",
    "Secure and compliant ERP environment"
  ];

  return (
    <section className="relative w-full pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[120px] pb-12 md:pb-16 lg:pb-20 xl:pb-[100px] bg-white">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        <div className="flex flex-col gap-[60px] items-center justify-center w-full">
          {/* Header */}
          <div className="flex flex-col gap-[24px] items-center justify-center w-full">
            <h2 className="font-['Helvetica_Now_Display'] text-[40px] md:text-[48px] lg:text-[64px] leading-[1.2] text-[#111] text-center">
              Key Benefits for Your Organization
            </h2>
            <p className="font-['Inter'] text-[16px] leading-[30px] text-[#111] text-center max-w-[796px] mx-auto">
              Smart Business 24 helps organizations improve efficiency, gain real-time visibility, and maintain control across finance, operations, and teams through a single, scalable ERP platform.
            </p>
          </div>

          {/* Benefits List */}
          <div className="flex flex-col items-center justify-center w-full">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center py-[20px] relative w-full border-b border-[rgba(0,0,0,0.1)]">
                <p className="font-['Inter'] font-medium text-[24px] md:text-[30px] lg:text-[36px] leading-[1.4] text-[#111] text-center">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="relative h-[52px] rounded-[80px] border border-[#111] backdrop-blur-[10px] overflow-hidden">
            {/* Light Flare Effect */}
            <div className="absolute flex h-[130.588px] items-center justify-center left-[calc(50%-98.63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px]">
              <div className="rotate-[-46.28deg]">
                <div className="h-[30px] w-[152px]">
                  <div className="absolute inset-[-180%_-35.53%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                      <g filter="url(#filter0_f_benefits_cta)" style={{ mixBlendMode: "plus-lighter" }}>
                        <ellipse cx="130" cy="69" fill="white" fillOpacity="0.6" rx="76" ry="15" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_benefits_cta" width="260" x="0" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                          <feGaussianBlur result="effect1_foregroundBlur_benefits_cta" stdDeviation="27" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center gap-[10px] h-full px-[24px] py-[6px] cursor-pointer hover:bg-[#111] transition-all overflow-hidden">
              {/* Animated light flare on hover */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute h-full w-[100px] bg-gradient-to-r from-transparent via-white/30 to-transparent -left-[100px] transition-all duration-700 ease-out blur-sm" />
              </div>
              
              <p className="font-['Helvetica_Now_Display'] text-[16px] leading-normal text-[#111] hover:text-white relative z-10 transition-colors">Download Our Brochure to Know More</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Implementation Process Section
function ImplementationSection() {
  const steps = [
    {
      icon: "briefcase",
      title: "Business process analysis and requirement mapping",
      paths: {
        path1: svgPathsImplementation.p2771f980,
        path2: svgPathsImplementation.p1ba1db80,
        path3: svgPathsImplementation.p3ad85500,
        path4: svgPathsImplementation.p535200
      }
    },
    {
      icon: "settings",
      title: "ERP module selection and configuration",
      paths: {
        path1: svgPathsImplementation.p215c500,
        path2: svgPathsImplementation.p34410400
      }
    },
    {
      icon: "database",
      title: "Data migration from existing systems",
      paths: {
        path1: svgPathsImplementation.p1d91d580,
        path2: svgPathsImplementation.p16c74800,
        path3: svgPathsImplementation.p3e881400
      }
    },
    {
      icon: "copilot",
      title: "User training and pilot execution",
      paths: {
        path1: svgPathsImplementation.p18108220,
        path2: svgPathsImplementation.p26206080
      }
    },
    {
      icon: "mentoring",
      title: "Go-live with post-implementation support",
      paths: {
        path1: svgPathsImplementation.p57def80,
        path2: svgPathsImplementation.p38b4a000,
        path3: svgPathsImplementation.p3b217c00,
        path4: svgPathsImplementation.p58e900,
        path5: svgPathsImplementation.p33330bc0
      }
    }
  ];

  return (
    <section className="relative w-full pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[120px] pb-12 md:pb-16 lg:pb-20 xl:pb-[100px] bg-[#f5f5f7]">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        <div className="flex flex-col gap-[60px] items-center">
          {/* Header */}
          <div className="flex flex-col gap-[24px] items-center justify-center w-full">
            <h2 className="font-['Helvetica_Now_Display'] text-[40px] md:text-[48px] lg:text-[64px] leading-[1.2] text-[#111] text-center">
              How Smart Business 24 Is Implemented
            </h2>
            <p className="font-['Inter'] text-[16px] leading-[30px] text-[#111] text-center max-w-[536px]">
              Smart Business 24 follows a structured ERP implementation approach to minimize disruption and ensure adoption.
            </p>
          </div>

          {/* Steps Cards */}
          <div className="flex flex-col lg:flex-row gap-[20px] w-full items-stretch">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 bg-white rounded-[10px] p-[20px] flex flex-col gap-[20px] border border-[rgba(0,0,0,0.1)]">
                {/* Icon */}
                <div className="bg-[#3368a4] rounded-[10px] size-[40px] flex items-center justify-center border border-[rgba(0,0,0,0.1)]">
                  <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                    {step.icon === "briefcase" && (
                      <g>
                        <path d={step.paths.path1} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={step.paths.path2} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={step.paths.path3} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={step.paths.path4} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </g>
                    )}
                    {step.icon === "settings" && (
                      <g>
                        <path d={step.paths.path1} stroke="white" strokeWidth="1.5" />
                        <path d={step.paths.path2} stroke="white" strokeLinecap="round" strokeWidth="1.5" />
                      </g>
                    )}
                    {step.icon === "database" && (
                      <g>
                        <path d={step.paths.path1} stroke="white" strokeWidth="1.5" />
                        <path d={step.paths.path2} stroke="white" strokeWidth="1.5" />
                        <path d={step.paths.path3} stroke="white" strokeWidth="1.5" />
                        <path d="M8 8V10" stroke="white" strokeLinecap="round" strokeWidth="1.5" />
                        <path d="M8 15V17" stroke="white" strokeLinecap="round" strokeWidth="1.5" />
                      </g>
                    )}
                    {step.icon === "copilot" && (
                      <g>
                        <path d={step.paths.path1} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={step.paths.path2} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </g>
                    )}
                    {step.icon === "mentoring" && (
                      <g>
                        <path d={step.paths.path1} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={step.paths.path2} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={step.paths.path3} stroke="white" strokeWidth="1.5" />
                        <path d={step.paths.path4} stroke="white" strokeWidth="1.5" />
                        <path d={step.paths.path5} stroke="white" strokeLinecap="round" strokeWidth="1.5" />
                      </g>
                    )}
                  </svg>
                </div>
                {/* Title */}
                <p className="font-['Helvetica_Now_Display'] text-[20px] leading-[normal] text-black">
                  {step.title}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="group relative h-[52px] rounded-[80px] bg-[#01e067] overflow-hidden cursor-pointer hover:bg-[#00cc5c] transition-all">
            {/* Light Flare Effect */}
            <div className="absolute flex h-[130.588px] items-center justify-center left-[calc(50%-105.63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px] group-hover:animate-[flare_0.6s_ease-in-out]">
              <div className="rotate-[-46.28deg]">
                <div className="h-[30px] w-[152px]">
                  <div className="absolute inset-[-180%_-35.53%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                      <g filter="url(#filter0_f_implementation_cta)" style={{ mixBlendMode: "plus-lighter" }}>
                        <ellipse cx="130" cy="69" fill="white" fillOpacity="0.8" rx="76" ry="15" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_implementation_cta" width="260" x="0" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                          <feGaussianBlur result="effect1_foregroundBlur_implementation_cta" stdDeviation="27" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center gap-[10px] h-full pl-[24px] pr-[8px] py-[6px]">
              <p className="font-['Helvetica_Now_Display'] text-[16px] leading-normal text-[#111] relative z-10">Schedule a Meeting</p>
              <div className="bg-black rounded-full size-[36px] flex items-center justify-center shrink-0 relative z-10 transition-all duration-300 group-hover:scale-90 group-hover:ring-2 group-hover:ring-[#111]">
                <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                  <path d="M12.3321 8H3.33203" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPathsImplementation.p16251580} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Core Modules Section
function CoreModulesSection() {
  const modules = [
    {
      title: "Sales & CRM",
      description: "Lead management, quotations, sales orders, invoicing, customer history, POS integration."
    },
    {
      title: "Procurement & Inventory",
      description: "Supplier management, purchase orders, GRN, stock valuation, inventory movement, reorder control."
    },
    {
      title: "Manufacturing",
      description: "Production planning, bill of materials (BOM), work orders, quality control, wastage tracking."
    },
    {
      title: "HR & Payroll",
      description: "Employee records, attendance, leave, payroll processing, performance tracking."
    },
    {
      title: "Administration & Security",
      description: "Role-based access, approval hierarchies, audit logs, system configuration."
    },
    {
      title: "Finance & Accounting",
      description: "General ledger, accounts payable & receivable, budgeting, approvals, financial statements."
    }
  ];

  return (
    <section className="relative w-full pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[120px] pb-12 md:pb-16 lg:pb-20 xl:pb-[100px] bg-white">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        <div className="flex flex-col gap-[60px]">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-[40px]">
            <h2 className="font-['Helvetica_Now_Display'] text-[40px] md:text-[48px] lg:text-[64px] leading-[75px] text-[#111] max-w-[655px]">
              Core ERP Modules in Smart Business 24
            </h2>
            <p className="font-['Inter'] text-[16px] leading-[30px] text-[#3c3c3c] max-w-[408px]">
              Smart Business 24 offers a comprehensive set of ERP modules that can be implemented gradually based on business priorities.
            </p>
          </div>

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row gap-[60px] items-end">
            {/* Left: Module Cards */}
            <div className="flex flex-col gap-[40px] flex-1">
              {/* Row 1 */}
              <div className="flex flex-col md:flex-row gap-[40px]">
                <div className="flex-1 flex flex-col gap-[20px]">
                  <p className="font-['Inter'] font-semibold text-[24px] leading-[30px] text-[#111]">
                    {modules[0].title}
                  </p>
                  <p className="font-['Inter'] text-[16px] leading-[30px] text-[#3c3c3c]">
                    {modules[0].description}
                  </p>
                </div>
                <div className="flex-1 flex flex-col gap-[20px]">
                  <p className="font-['Inter'] font-semibold text-[24px] leading-[30px] text-[#111]">
                    {modules[1].title}
                  </p>
                  <p className="font-['Inter'] text-[16px] leading-[30px] text-[#3c3c3c]">
                    {modules[1].description}
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col md:flex-row gap-[40px]">
                <div className="flex-1 flex flex-col gap-[20px]">
                  <p className="font-['Inter'] font-semibold text-[24px] leading-[30px] text-[#111]">
                    {modules[2].title}
                  </p>
                  <p className="font-['Inter'] text-[16px] leading-[30px] text-[#3c3c3c]">
                    {modules[2].description}
                  </p>
                </div>
                <div className="flex-1 flex flex-col gap-[20px]">
                  <p className="font-['Inter'] font-semibold text-[24px] leading-[30px] text-[#111]">
                    {modules[3].title}
                  </p>
                  <p className="font-['Inter'] text-[16px] leading-[30px] text-[#3c3c3c]">
                    {modules[3].description}
                  </p>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col md:flex-row gap-[40px]">
                <div className="flex-1 flex flex-col gap-[20px]">
                  <p className="font-['Inter'] font-semibold text-[24px] leading-[30px] text-[#111]">
                    {modules[4].title}
                  </p>
                  <p className="font-['Inter'] text-[16px] leading-[30px] text-[#3c3c3c]">
                    {modules[4].description}
                  </p>
                </div>
                <div className="flex-1 flex flex-col gap-[20px]">
                  <p className="font-['Inter'] font-semibold text-[24px] leading-[30px] text-[#111]">
                    {modules[5].title}
                  </p>
                  <p className="font-['Inter'] text-[16px] leading-[30px] text-[#3c3c3c]">
                    {modules[5].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Code Image */}
            <div className="relative h-[500px] w-full lg:w-[807px] rounded-[10px] overflow-hidden shrink-0">
              <img 
                src={imgModulesCode} 
                alt="Smart Business 24 Code Architecture" 
                className="absolute w-full h-auto object-cover"
                style={{ top: '-117.1%', left: '0.04%', maxWidth: 'none', width: '99.92%', height: '286.6%' }}
              />
              <div className="absolute inset-0 border-2 border-[#4ac4f0] rounded-[10px] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Form Section - New section with proper background
function CTAFormSection() {
  return (
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
  );
}

// Main Component
export default function SmartBusiness() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 overflow-hidden">
      <SmartBusinessHero />
      <TrustedBySection />
      <WhySmartBusinessSection />
      <ComparisonSection />
      <KeyBenefitsSection />
      <ImplementationSection />
      <CoreModulesSection />
      <InsightsSection />
      <FAQSection />
      <CTAFormSection />
    </div>
  );
}
