import { CTASection } from "../../components/CTASection";
import { PrimaryCTA } from "../../components/CTAButtons";
import svgPaths from "../../../imports/svg-wej6h03ams";
import svgPathsService from "../../../imports/svg-8sbgxxqm5x";
import svgPathsChallenges from "../../../imports/svg-b4q0q7teyo";
import svgPathsChallenges2 from "../../../imports/svg-18i0t4oyye";
import svgPathsWorkWith from "../../../imports/svg-y701l5ol2e";
import imgRectangle683 from "figma:asset/3dd569afee3b5bc7c5d583b363e834502d802ea7.png";
import imgImage76 from "figma:asset/713ddf1d49ef2405bdadc0b93c67d6a51b4a8ad4.png";
import imgImage22 from "figma:asset/b3a76efb62e40b6c12695c1680be963ca0a490ce.png";
import imgImage23 from "figma:asset/d41a3add220587a395706f0474ccd7f35387d5be.png";
import imgImage25 from "figma:asset/dbd26c38ee66f78dc4c9d30e7c592b4d8058da90.png";
import imgImage24 from "figma:asset/df9b1bedaf9596f52c0e1727e8e704d69d1f1cdc.png";
import imgImage26 from "figma:asset/4fb591e6c3581ef7cd73e2bf37b735a08fc775ff.png";
import imgImage27 from "figma:asset/752f360f2139b21a38c76693f781902e721a41ba.png";
import imgImage28 from "figma:asset/4e76b2d022abf7fe71dfa0196a6d8c5b17f75a0e.png";
import imgImage30 from "figma:asset/6cdc7cc1463db8ebaa820fdcad43a91fb141bb9c.png";
import imgRectangle670 from "figma:asset/8a6a440b505051ec5b4e8375a55abe84e49cd0b3.png";
import imgRectangle671 from "figma:asset/eca1ce33bf493c0b83cc08e22c8aaf417a9f8f54.png";
import imgRectangle672 from "figma:asset/655452b0a01149ac4781ca09db8ea6694aee83dc.png";
import imgRectangle682 from "figma:asset/6a495c03b09cee4b6e6f9d5f7990ff38953e1ec1.png";
import imgServiceCover from "figma:asset/1b511fc75eae2914a5ef65cd1f831dd5b6afb30b.png";
import imgDeshiJamar from "figma:asset/871c154f69889e15b43fb93c8070b6d9a576ac9c.png";
import imgEastCoast from "figma:asset/a5c2b13c70fd5d181d101755999a189183a22bb4.png";
import imgGmeGroup from "figma:asset/e19895d50fa7021662329baf515f32168351767e.png";
import imgKurmitola from "figma:asset/5a953beda881a4340ca9a7d70e4dc6954c4db25b.png";
import imgComilla from "figma:asset/65858cb6ae73a46e49bd05c666de86628d4b0d50.png";
import imgDaffodilComputers from "figma:asset/c21810431d01748d0c7cc59913c98bd2b59ba95e.png";
import imgHokseed from "figma:asset/edadc830852b6f7bb1a0533cb9600a6f136c5e81.png";
import imgCardioCare from "figma:asset/68c265633cca5a94c6ee7f27899077a253634d30.png";
import { Link } from "react-router";
import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Hero Section
function HeroSection() {
  return (
    <section className="relative h-[800px] overflow-hidden bg-black">
      {/* Background Image - Rotated and Positioned */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 flex h-[800px] w-[1920px] items-center justify-center">
        <div className="rotate-90">
          <div className="relative h-[1920px] w-[800px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover" 
                src={imgImage76} 
              />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[14.567%] to-[rgba(0,0,0,0.8)] to-[89.004%]" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px] flex flex-col justify-center gap-10">
        <div className="flex flex-col gap-6 text-white max-w-[796px]">
          <h1 className="font-['Helvetica_Now_Display'] font-medium text-[48px] md:text-[56px] lg:text-[64px] leading-[1.1]">
            Custom Web & App Development
            <br />
            for Scalable Digital Products
          </h1>
          <p className="font-['Inter'] text-[18px] md:text-[20px] leading-[30px]">
            We design and develop high-performance web and mobile applications tailored to your business goals, users, and growth strategy from concept to long-term scalability
          </p>
          <p className="font-['Inter'] font-bold text-[18px] md:text-[20px] leading-[30px]">
            Built for performance, security, and long-term growth—not just launch.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 items-center">
          <PrimaryCTA text="Develop My Website" />

          <button className="px-6 py-3 flex items-center gap-2 text-white font-['Helvetica_Now_Display'] font-medium text-[16px]">
            Talk to A Service Expert
            <svg className="size-4" fill="none" viewBox="0 0 16 16">
              <path d="M12.333 8H3.33301" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p638bf80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

// Trust Section
function TrustSection() {
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
          <p className="font-['Inter'] text-[30px] text-[#3c3c3c] leading-[40px]">
            Trusted by <span className="font-semibold text-[#111]">100+</span> organizations across{" "}
            <span className="font-semibold text-[#111]">Bangladesh</span>,{" "}
            <span className="font-semibold text-[#111]">USA</span>,{" "}
            <span className="font-semibold text-[#111]">UAE</span>, and{" "}
            <span className="font-semibold text-[#111]">Europe</span> for
          </p>
          <p className="font-['Inter'] text-[30px] text-[#3c3c3c] leading-[40px]">
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

// New Challenges Section (Figma Version)
function NewChallengesSection() {
  const challenges = [
    {
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24">
          <path d={svgPathsChallenges2.pbf95080} stroke="white" strokeWidth="1.5" />
          <path d={svgPathsChallenges2.p537f000} stroke="white" strokeWidth="1.5" />
          <path d={svgPathsChallenges2.p1170ac00} stroke="white" strokeWidth="1.5" />
          <path d={svgPathsChallenges2.p34ad5780} stroke="white" strokeWidth="1.5" />
        </svg>
      ),
      title: "Rigid systems that don't scale with growth"
    },
    {
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24">
          <path d={svgPathsChallenges2.p2841e180} stroke="white" strokeWidth="1.5" />
          <path d="M12 15V10" stroke="white" strokeLinecap="round" strokeWidth="1.5" />
          <path d={svgPathsChallenges2.p3ee8cac0} stroke="white" strokeLinecap="round" strokeWidth="1.5" />
        </svg>
      ),
      title: "Poor performance and slow user experiences"
    },
    {
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24">
          <path d={svgPathsChallenges2.p34c98f00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPathsChallenges2.p1e756600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      ),
      title: "Security risks and unstable architectures"
    },
    {
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24">
          <path d={svgPathsChallenges2.p5f2e00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPathsChallenges2.p29b24698} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPathsChallenges2.pbb23980} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPathsChallenges2.p8bd3000} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPathsChallenges2.p26af4d80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M5 20.5H19" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPathsChallenges2.p2aabd000} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      ),
      title: "High maintenance costs from bad foundations"
    },
    {
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24">
          <path d={svgPathsChallenges2.p2d44bb00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPathsChallenges2.p36536c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      ),
      title: "Apps that users abandon due to poor usability"
    }
  ];

  return (
    <section className="py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px] bg-[#f5f5f7]">
      <div className="max-w-[1520px] mx-auto p-[0px] mx-[100px] my-[0px]">
        <div className="flex flex-col gap-[60px] items-center">
          {/* Header */}
          <div className="flex flex-col gap-6 items-center text-center max-w-[1050px]">
            <h2 className="font-['Helvetica_Now_Display'] font-medium text-[#111] text-[48px] md:text-[56px] lg:text-[64px] leading-[1.2]">
              The Challenges We Help You Overcome
            </h2>
            <p className="font-['Inter'] text-[#3c3c3c] text-[16px] leading-[30px]">
              Many businesses struggle with digital products that are slow, hard to scale, or disconnected from real user needs. Off-the-shelf solutions often limit flexibility, while poorly built systems increase long-term costs.
            </p>
          </div>

          {/* Challenge Cards - Responsive Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {challenges.map((challenge, index) => (
              <div 
                key={index} 
                className="bg-white p-5 rounded-[10px] border border-[#d5d5d5] flex flex-col gap-5 hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#3368a4] rounded-[10px] size-10 flex items-center justify-center border border-[rgba(0,0,0,0.1)]">
                  {challenge.icon}
                </div>
                <p className="font-['Helvetica_Now_Display'] font-medium text-[#111] text-[20px] leading-[1.3]">
                  {challenge.title}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <PrimaryCTA text="Schedule a Meeting" />
        </div>
      </div>
    </section>
  );
}

// What This Service Covers Section
function ServiceCoversSection() {
  const capabilities = [
    {
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24">
          <path d={svgPathsService.p2cbf6d00} stroke="#111" strokeWidth="1.5" />
          <path d="M2.5 9H21.5" stroke="#111" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M13 13H17" stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M13 17H15" stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6.99981 6H7.00879" stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.9998 6H11.0088" stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 9V21.5" stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      ),
      title: "Custom Web Application Development"
    },
    {
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24">
          <path d={svgPathsService.p11727d80} stroke="#111" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M11 19H13" stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPathsService.p3efe97c0} stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPathsService.p2c394c00} stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M13 9L11 15" stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      ),
      title: "Mobile App Development (iOS & Android)"
    },
    {
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24">
          <path d={svgPathsService.p3c649980} stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPathsService.p24c19e00} stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M14.5 4L9.5 20" stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      ),
      title: "Backend & API Engineering"
    },
    {
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24">
          <path d={svgPathsService.p18dd4100} stroke="#111" strokeWidth="1.5" />
          <path d="M7 15.0024L7.00868 15" stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPathsService.p25731b80} stroke="#111" strokeWidth="1.5" />
          <path d={svgPathsService.p11486100} stroke="#111" strokeWidth="1.5" />
        </svg>
      ),
      title: "UI/UX-Driven Frontend Development"
    }
  ];

  return (
    <section className="py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px] bg-white">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Image */}
          <div className="w-full lg:w-[50%] xl:w-[51%] relative">
            <img 
              src={imgServiceCover} 
              alt="Service illustration" 
              className="w-full h-full object-cover rounded-[10px]"
            />
            <div className="absolute inset-[-2px] border-2 border-[#4ac4f0] rounded-[12px] pointer-events-none" />
          </div>

          {/* Content */}
          <div className="w-full lg:w-[50%] xl:w-[49%] flex flex-col gap-10">
            {/* Header */}
            <div className="flex flex-col gap-6">
              <h2 className="font-['Helvetica_Now_Display'] font-medium text-[#111] text-[48px] md:text-[56px] lg:text-[64px] leading-[1.2]">
                What This Service Covers
              </h2>
              <p className="font-['Inter'] text-[#3c3c3c] text-[16px] leading-[30px]">
                Our custom web and app development service delivers end-to-end solutions, including scalable web applications, high-performance iOS and Android apps, robust backend and API engineering, and UI/UX-driven frontend development. Every solution is built for security, performance, and long-term growth.
              </p>
            </div>

            {/* Capabilities List */}
            <div className="flex flex-col">
              {capabilities.map((capability, index) => (
                <div 
                  key={index} 
                  className="flex gap-5 items-center py-5 border-b border-[#d5d5d5]"
                >
                  <div className="bg-gradient-to-b from-[#c0eeff] to-[rgba(44,246,152,0.75)] rounded-[10px] size-10 flex items-center justify-center shrink-0 border border-[rgba(0,0,0,0.1)]">
                    {capability.icon}
                  </div>
                  <p className="font-['Inter'] font-semibold text-[#111] text-[20px] md:text-[24px] leading-[30px]">
                    {capability.title}
                  </p>
                </div>
              ))}
            </div>

            {/* View Case Studies Link */}
            <Link 
              to="/case-studies" 
              className="flex items-center gap-2 p-2.5 w-fit hover:opacity-70 transition-opacity"
            >
              <span className="font-['Helvetica_Now_Display'] font-medium text-[#111] text-[16px]">
                View Case Studies
              </span>
              <svg className="size-4" fill="none" viewBox="0 0 16 16">
                <path d="M12.333 8H3.33301" stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPathsService.p638bf80} stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Core Development Capabilities Section
function CoreCapabilitiesSection() {
  const capabilities = [
    {
      title: "Custom Web Applications",
      description: "Secure, scalable web platforms built for performance and growth."
    },
    {
      title: "UX/UI Design",
      description: "User journeys, wireframes, and interfaces focused on clarity and engagement."
    },
    {
      title: "Architecture & Development",
      description: "Clean, scalable code using modern frameworks and best practices."
    },
    {
      title: "Testing & Quality Assurance",
      description: "Performance, security, and usability testing across devices."
    },
    {
      title: "Deployment & Launch",
      description: "Smooth release with infrastructure and monitoring in place."
    },
    {
      title: "Continuous Improvement",
      description: "Ongoing optimization, feature updates, and scaling support."
    }
  ];

  return (
    <section className="relative py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px] bg-[#0d1e32] overflow-hidden">
      {/* Background Gradient Circle */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1940px] h-[1940px] pointer-events-none">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2740 2740">
          <g filter="url(#filter0_f_core_capabilities)">
            <circle cx="1370" cy="1370" fill="#0B396C" r="970" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2740" id="filter0_f_core_capabilities" width="2740" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_core_capabilities" stdDeviation="200" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        <div className="flex flex-col gap-[60px] items-center">
          {/* Header */}
          <div className="flex flex-col gap-5 items-center text-center max-w-[986px]">
            <h2 className="font-['Helvetica_Now_Display'] font-medium text-white text-[48px] md:text-[56px] lg:text-[64px] leading-[1.17]">
              Our Core Development Capabilities
            </h2>
            <p className="font-['Inter'] text-[rgba(255,255,255,0.7)] text-[18px] md:text-[20px] leading-[30px]">
              Our core development capabilities span the entire web and app lifecycle, delivering secure, scalable, and high-performance digital products built for long-term growth.
            </p>
          </div>

          {/* Capabilities Card */}
          <div className="relative w-full bg-[rgba(255,255,255,0.05)] rounded-[10px] overflow-hidden">
            {/* Border overlay */}
            <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.1)] border-solid inset-[-2px] pointer-events-none rounded-[12px]" />
            
            <div className="flex flex-col">
              {capabilities.map((capability, index) => (
                <div 
                  key={index}
                  className="relative"
                >
                  {/* Border between items */}
                  {index < capabilities.length - 1 && (
                    <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
                  )}
                  
                  <div className="flex flex-col gap-4 p-8 md:p-10">
                    <h3 className="font-['Inter'] font-semibold text-white text-[28px] md:text-[32px] lg:text-[36px] leading-[30px]">
                      {capability.title}
                    </h3>
                    <p className="font-['Inter'] text-[rgba(255,255,255,0.7)] text-[18px] md:text-[20px] leading-[30px]">
                      {capability.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link 
            to="/services" 
            className="group relative backdrop-blur-[10px] border border-white px-6 py-3 rounded-[80px] flex items-center gap-2.5 h-[52px] overflow-hidden hover:bg-[rgba(255,255,255,0.1)] transition-colors"
          >
            <div className="absolute inset-0 flex items-center justify-center mix-blend-plus-lighter -top-7 left-1/2 -translate-x-1/2 rotate-[-46.28deg]">
              <div className="w-[152px] h-[30px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                  <g filter="url(#filter0_f_core_cta)" style={{ mixBlendMode: "plus-lighter" }}>
                    <ellipse cx="130" cy="69" fill="white" fillOpacity="0.6" rx="76" ry="15" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_core_cta" width="260" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_core_cta" stdDeviation="27" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <span className="font-['Helvetica_Now_Display'] font-medium text-white text-[16px] relative z-10">
              Not Relevant? Explore More Services 
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// How We Think Section
function HowWeThinkSection() {
  const principles = [
    { number: "01", text: "Designed around real users" },
    { number: "02", text: "Built for performance and security" },
    { number: "03", text: "Structured for future expansion" },
    { number: "04", text: "Easy to maintain and evolve" }
  ];

  return (
    <section className="py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px] bg-white">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
          {/* Left Column - Title & List */}
          <div className="flex-1 flex flex-col gap-[60px]">
            <h2 className="font-['Helvetica_Now_Display'] font-medium text-[#111] text-[48px] md:text-[56px] lg:text-[64px] leading-[1.2]">
              How We Think About Web & App Development
            </h2>
            
            {/* Numbered List */}
            <div className="flex flex-col">
              {principles.map((principle, index) => (
                <div 
                  key={index} 
                  className={`flex gap-4 items-center px-[10px] py-5 ${index < principles.length - 1 ? 'border-b border-[rgba(0,0,0,0.1)]' : ''}`}
                >
                  <div className="bg-gradient-to-b from-[#c0eeff] to-[rgba(44,246,152,0.75)] rounded-[10px] size-10 flex items-center justify-center shrink-0 border border-[rgba(0,0,0,0.1)]">
                    <span className="font-['Inter'] font-semibold text-[#111] text-[14px]">
                      {principle.number}
                    </span>
                  </div>
                  <p className="font-['Inter'] font-semibold text-[#111] text-[20px] md:text-[24px] leading-[30px]">
                    {principle.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image & Text */}
          <div className="flex-1 flex flex-col gap-[60px]">
            <div className="h-[350px] relative rounded-[10px] w-full overflow-hidden bg-[#d9d9d9]">
              <img 
                src={imgRectangle682} 
                alt="Team collaboration" 
                className="absolute h-[243.53%] left-0 top-[-82.76%] w-full object-cover"
              />
            </div>
            <p className="font-['Inter'] text-[#3c3c3c] text-[16px] leading-[30px]">
              We believe great digital products sit at the intersection of business goals, user experience, and engineering excellence. Our approach prioritizes long-term scalability, clean architecture, and real-world usability so your product doesn't just launch, it lasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// How You Can Work With Us Section
function WorkWithUsSection() {
  const engagementModels = [
    {
      image: imgRectangle670,
      title: "Project-Based Development",
      description: "Ideal when requirements are clear and delivery needs to follow a fixed scope, timeline, and budget. We manage the full lifecycle—from planning to launch—with defined milestones, transparent progress, and predictable outcomes.",
      bestFor: "Feature development, platform rebuilds, system integrations"
    },
    {
      image: imgRectangle671,
      title: "Dedicated Development Teams",
      description: "Designed for long-term collaboration, this model provides dedicated engineers who work as an extension of your in-house team. It offers flexibility, faster iteration, and deep product understanding as your platform evolves.",
      bestFor: "Ongoing product development, scaling platforms, long-term roadmaps"
    },
    {
      image: imgRectangle672,
      title: "MVP & Rapid Prototyping",
      description: "Focused on speed and validation, this model helps transform ideas into working MVPs or prototypes quickly. It enables early testing, user feedback, and informed decision-making before full-scale investment.",
      bestFor: "Startups, innovation teams, early-stage product ideas"
    }
  ];

  return (
    <section className="py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px] bg-white">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        <div className="flex flex-col gap-[60px] items-center">
          {/* Header */}
          <div className="flex flex-col gap-6 items-center text-center max-w-[1308px]">
            <h2 className="font-['Helvetica_Now_Display'] font-medium text-[#111] text-[48px] md:text-[56px] lg:text-[64px] leading-[1.17]">
              How You Can Work With Us
            </h2>
            <p className="font-['Inter'] text-[#3c3c3c] text-[16px] leading-[30px] max-w-[1030px]">
              We offer flexible engagement models designed to match your business goals, project complexity, and internal capabilities. Whether you need a clearly defined delivery, long-term engineering support, or rapid validation of a new idea, our collaboration models are built to adapt without locking you into unnecessary overhead.
            </p>
          </div>

          {/* Engagement Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {engagementModels.map((model, index) => (
              <div 
                key={index} 
                className="group bg-[#f5f5f7] rounded-[20px] overflow-hidden flex flex-col p-5 transition-all duration-300 hover:bg-[#e8f9f0] cursor-pointer"
              >
                {/* Image */}
                <div className="h-[200px] overflow-hidden rounded-[10px] mb-4">
                  <img 
                    src={model.image} 
                    alt={model.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 flex-1 mb-4">
                  <h3 className="font-['Helvetica_Now_Display'] font-medium text-[#111] text-[24px] leading-[30px]">
                    {model.title}
                  </h3>
                  <p className="font-['Inter'] text-[#3c3c3c] text-[16px] leading-[24px]">
                    {model.description}
                  </p>
                </div>

                {/* Best for section */}
                <div className="flex flex-col gap-3">
                  <p className="font-['Inter'] text-[#3c3c3c] text-[16px] leading-[24px]">
                    <span className="font-bold">Best for:</span>
                    <br />
                    {model.bestFor}
                  </p>
                  <Link 
                    to="/portfolio" 
                    className="flex items-center gap-2 py-1 hover:opacity-70 transition-opacity w-fit"
                  >
                    <span className="font-['Helvetica_Now_Display'] font-medium text-[#111] text-[16px]">
                      View Portfolio
                    </span>
                    <svg className="size-4" fill="none" viewBox="0 0 16 16">
                      <path d="M12.333 8H3.33301" stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPathsWorkWith.p638bf80} stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// What You Can Expect Section
function ExpectationsSection() {
  const benefits = [
    {
      number: "001",
      icon: (
        <svg className="size-[30px]" fill="none" viewBox="0 0 30 30">
          <path d={svgPaths.p3a88cd00} stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      ),
      title: "Faster time-to-market"
    },
    {
      number: "002",
      icon: (
        <svg className="size-[30px]" fill="none" viewBox="0 0 30 30">
          <path d={svgPaths.p84413c0} stroke="#111" strokeLinecap="round" strokeWidth="1.5" />
        </svg>
      ),
      title: "Reduced long-term maintenance costs"
    },
    {
      number: "003",
      icon: (
        <svg className="size-[30px]" fill="none" viewBox="0 0 30 30">
          <path d={svgPaths.p3c022700} stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      ),
      title: "Improved performance and scalability"
    },
    {
      number: "004",
      icon: (
        <svg className="size-[30px]" fill="none" viewBox="0 0 30 30">
          <path d={svgPaths.p2001ae80} stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      ),
      title: "Better user engagement and retention"
    },
    {
      number: "005",
      icon: (
        <svg className="size-[30px]" fill="none" viewBox="0 0 30 30">
          <path d={svgPaths.p1016b580} stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      ),
      title: "Systems aligned with real business workflows"
    }
  ];

  return (
    <section className="py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px] bg-[#f5f5f7]">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <h2 className="font-['Helvetica_Now_Display'] font-medium text-[#111] text-[48px] md:text-[56px] lg:text-[64px] leading-[1.17]">
                What You Can Expect
              </h2>
              <p className="font-['Inter'] text-[#3c3c3c] text-[16px] leading-[30px] mt-4">
                Our custom web and app solutions deliver measurable impact:
              </p>
            </div>
            <Link 
              to="/services" 
              className="group relative backdrop-blur-[10px] border border-[#111] px-6 py-3 rounded-[80px] flex items-center gap-2 h-[52px] w-fit overflow-hidden hover:bg-[#111] transition-colors"
            >
              {/* Animated light flare on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute h-full w-[100px] bg-gradient-to-r from-transparent via-white/30 to-transparent -left-[100px] group-hover:left-[100%] transition-all duration-700 ease-out blur-sm" />
              </div>
              <span className="font-['Helvetica_Now_Display'] font-medium text-[#111] text-[16px] relative z-10 group-hover:text-white transition-colors">
                Explore All Services
              </span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 rounded-[10px] overflow-hidden">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-[#111] relative overflow-hidden flex flex-col justify-between h-[467px] cursor-pointer">
                {/* Green gradient background that fills from bottom on hover */}
                <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full transition-all duration-700 ease-out bg-[#1BA866] pointer-events-none" />
                
                {/* Content */}
                <div className="relative z-10 p-5">
                  <p className="font-['Inter'] font-semibold text-white text-[20px]">{benefit.number}</p>
                </div>
                
                <div className="relative z-10 flex flex-col items-center justify-center h-[320px]">
                  <div className="bg-white group-hover:bg-[#111] transition-colors duration-300 rounded-full size-[60px] flex items-center justify-center">
                    <div className="group-hover:[&_path]:stroke-white transition-colors duration-300">
                      {benefit.icon}
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10 border-t border-[rgba(255,255,255,0.2)] p-6">
                  <p className="font-['Inter'] font-medium text-white leading-[1.2] text-left text-[32px]">
                    {benefit.title}
                  </p>
                </div>

                {/* Right border (visible on non-last items in desktop) */}
                {index < benefits.length - 1 && (
                  <div aria-hidden="true" className="hidden lg:block absolute border-[rgba(255,255,255,0.2)] border-r border-solid inset-0 pointer-events-none" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "How long does custom web or app development take?",
      answer: "Timeline varies based on complexity, but typical projects range from 3-6 months for MVPs to 9-12 months for enterprise-grade applications."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, we offer comprehensive maintenance packages including bug fixes, security updates, performance monitoring, and feature enhancements."
    },
    {
      question: "Can you work with our existing tech stack?",
      answer: "Absolutely. We integrate with existing systems and can work with a wide range of technologies and frameworks."
    },
    {
      question: "What's your development process?",
      answer: "We follow an agile methodology with sprints, regular demos, and continuous feedback to ensure alignment with your goals."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    null
  );
}

export function CustomWebAppDevelopment() {
  return (
    <main>
      <HeroSection />
      <TrustSection />
      <ServiceCoversSection />
      <NewChallengesSection />
      <HowWeThinkSection />
      <CoreCapabilitiesSection />
      <WorkWithUsSection />
      <ExpectationsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}