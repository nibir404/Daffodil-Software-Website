import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import svgPaths from "../../assets/svgs/svg-03xhpw29hf";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function GradientBars() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-[1698.326px] left-[175px] to-[rgba(103,142,192,0.3)] w-[174px]" />
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-[1698.326px] left-[1571px] to-[rgba(103,142,192,0.3)] w-[174px]" />
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-[1830px] left-0 to-[rgba(103,142,192,0.3)] w-[175px]" />
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-[1830px] left-[1745px] to-[rgba(103,142,192,0.3)] w-[175px]" />
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-[1330.176px] left-[349px] to-[rgba(103,142,192,0.3)] w-[175px]" />
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-[1330.176px] left-[1396px] to-[rgba(103,142,192,0.3)] w-[175px]" />
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-[1029.207px] left-[524px] to-[rgba(103,142,192,0.3)] w-[174px]" />
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-[1029.207px] left-[1222px] to-[rgba(103,142,192,0.3)] w-[174px]" />
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-[674.493px] left-[698px] to-[rgba(103,142,192,0.3)] w-[175px]" />
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-[674.493px] left-[1047px] to-[rgba(103,142,192,0.3)] w-[175px]" />
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-[424.581px] left-[873px] to-[rgba(103,142,192,0.3)] w-[174px]" />
    </div>
  );
}

function GlowDot() {
  return (
    <div className="absolute inset-[-256.67%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 368 368">
        <g filter="url(#filter0_di_delivery)" id="Ellipse 153">
          <circle cx="184" cy="184" fill="url(#paint0_linear_delivery)" r="30" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="368" id="filter0_di_delivery" width="368" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="77" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.171898 0 0 0 0 0.966346 0 0 0 0 0.595604 0 0 0 0.75 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_delivery" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_delivery" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="20" dy="9" />
            <feGaussianBlur stdDeviation="12" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.769231 0 0 0 0 1 0 0 0 0 0.926923 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect2_innerShadow_delivery" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_delivery" x1="203.1" x2="164.7" y1="206.9" y2="161.3">
            <stop stopColor="#37F3D3" />
            <stop offset="0.514423" stopColor="#14BF8F" />
            <stop offset="1" stopColor="#B9FAD5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g>
          <path d={svgPaths.p21a5b280} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p12531100} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function WebDesignIcon() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g>
          <path d={svgPaths.p3224c480} stroke="white" strokeLinecap="round" strokeWidth="2.5" />
          <path d={svgPaths.p1395f880} stroke="white" strokeWidth="2.5" />
          <path d={svgPaths.p867c80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p2924a200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M4.16406 10H32.4974" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function MentoringIcon() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g>
          <path d={svgPaths.p1b0f2900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p13b69840} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p34aa7a00} stroke="white" strokeWidth="2.5" />
          <path d={svgPaths.p27ad7900} stroke="white" strokeWidth="2.5" />
          <path d={svgPaths.p34cf3180} stroke="white" strokeLinecap="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function CanvasIcon() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g>
          <path d={svgPaths.p36bc9b80} stroke="white" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M5 28.332H35" stroke="white" strokeLinecap="round" strokeWidth="2.5" />
          <path d={svgPaths.p39d79500} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M20 28.332V34.9987" stroke="white" strokeLinecap="round" strokeWidth="2.5" />
          <path d={svgPaths.p63b0f00} stroke="white" strokeLinecap="round" strokeWidth="2.5" />
          <path d={svgPaths.p3bbd4b00} stroke="white" strokeLinecap="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function TestTubeIcon() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g>
          <path d={svgPaths.p37316d00} stroke="white" strokeWidth="2.5" />
          <path d="M15 26.6681L15.0145 26.6641" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M25 30.004L25.0145 30" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M13.3359 3.33203H26.6693" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p12cb900} stroke="white" strokeLinecap="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

export function DeliveryFrameworkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const bottomMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Show everything immediately without animation
      return;
    }

    const ctx = gsap.context(() => {
      // Header animation - simple fade in on initial view
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true
        }
      });

      // Stage items - animate each step independently as user scrolls
      const stageItems = gsap.utils.toArray<HTMLElement>("[data-stage]");
      
      // Group stages in pairs (icon + text for each step)
      for (let i = 0; i < stageItems.length; i += 2) {
        const textElement = stageItems[i];
        const iconElement = stageItems[i + 1];
        const isRight = textElement.getAttribute("data-stage-position") === "right";
        
        // Animate text content
        gsap.from(textElement, {
          opacity: 0,
          x: isRight ? 40 : -40,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textElement,
            start: "top 75%",
            toggleActions: "play none none none",
            once: true
          }
        });

        // Animate icon
        gsap.from(iconElement, {
          opacity: 0,
          x: isRight ? -40 : 40,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: iconElement,
            start: "top 75%",
            toggleActions: "play none none none",
            once: true
          }
        });
      }

      // Bottom message animation
      gsap.from(bottomMessageRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bottomMessageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0d1e32] relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Gradient Bars Background */}
      <GradientBars />

      {/* Blue Radial Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1318px] h-[1318px] pointer-events-none">
        <div className="absolute inset-[-30.35%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2118 2118">
            <g filter="url(#filter0_f_delivery_bg)">
              <circle cx="1059" cy="1059" fill="#0B396C" r="659" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2118" id="filter0_f_delivery_bg" width="2118" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_delivery_bg" stdDeviation="200" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 xl:px-[100px]">
        <div className="max-w-[1520px] mx-auto">
          {/* Header */}
          <div ref={headerRef} className="flex flex-col gap-6 items-center text-center mb-[100px]">
            <h2 className="font-['Helvetica_Now_Display'] font-medium text-[64px] leading-[75px] text-white">
              Our Delivery Framework
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] leading-[30px] text-white max-w-[702px]">
              Our software development process follows enterprise-grade standards with clear milestones, documentation, and quality assurance.
            </p>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative h-[1125px] w-[1044px] mx-auto mb-[100px]">
            {/* Vertical Line - Structural, no animation */}
            <div className="absolute bg-[rgba(255,255,255,0.2)] h-[1050px] left-1/2 -translate-x-1/2 rounded-[60px] top-[43px] w-[24px]" />

            {/* Glow Dots - Structural, no animation */}
            <div className="absolute left-[492px] size-[60px] top-[13px]">
              <GlowDot />
            </div>
            <div className="absolute left-[492px] size-[60px] top-[273px]">
              <GlowDot />
            </div>
            <div className="absolute left-[492px] size-[60px] top-[533px]">
              <GlowDot />
            </div>
            <div className="absolute left-[492px] size-[60px] top-[793px]">
              <GlowDot />
            </div>
            <div className="absolute left-[492px] size-[60px] top-[1053px]">
              <GlowDot />
            </div>

            {/* Stage 1: Discovery & Consultation */}
            <div data-stage data-stage-position="right" className="absolute left-[572px] top-0 w-[472px]">
              <div className="flex flex-col gap-2">
                <h3 className="font-['Helvetica_Now_Display'] font-medium text-[36px] text-white">
                  Discovery & Consultation
                </h3>
                <p className="font-['Inter'] font-normal text-[20px] text-white">
                  Understanding goals, challenges, and constraints.
                </p>
              </div>
            </div>
            <div data-stage data-stage-position="left" className="absolute bg-[rgba(255,255,255,0.1)] flex items-center justify-center left-[392px] rounded-[10px] size-[80px] top-[3px] border border-[rgba(44,246,152,0.75)]">
              <SearchIcon />
            </div>

            {/* Stage 2: Strategy & Planning */}
            <div data-stage data-stage-position="left" className="absolute left-0 top-[260px] w-[472px] text-right">
              <div className="flex flex-col gap-2 items-end">
                <h3 className="font-['Helvetica_Now_Display'] font-medium text-[36px] text-white">
                  Strategy & Planning
                </h3>
                <p className="font-['Inter'] font-normal text-[20px] text-white">
                  Translating needs into a clear technical roadmap.
                </p>
              </div>
            </div>
            <div data-stage data-stage-position="right" className="absolute bg-[rgba(255,255,255,0.1)] flex items-center justify-center left-[572px] rounded-[10px] size-[80px] top-[263px] border border-[rgba(44,246,152,0.75)]">
              <CanvasIcon />
            </div>

            {/* Stage 3: Design & Development */}
            <div data-stage data-stage-position="right" className="absolute left-[572px] top-[520px] w-[472px]">
              <div className="flex flex-col gap-2">
                <h3 className="font-['Helvetica_Now_Display'] font-medium text-[36px] text-white">
                  Design & Development
                </h3>
                <p className="font-['Inter'] font-normal text-[20px] text-white">
                  Agile execution with transparency and collaboration.
                </p>
              </div>
            </div>
            <div data-stage data-stage-position="left" className="absolute bg-[rgba(255,255,255,0.1)] flex items-center justify-center left-[392px] rounded-[10px] size-[80px] top-[523px] border border-[rgba(44,246,152,0.75)]">
              <WebDesignIcon />
            </div>

            {/* Stage 4: Testing & Deployment */}
            <div data-stage data-stage-position="left" className="absolute left-0 top-[780px] w-[472px] text-right">
              <div className="flex flex-col gap-2 items-end">
                <h3 className="font-['Helvetica_Now_Display'] font-medium text-[36px] text-white">
                  Testing & Deployment
                </h3>
                <p className="font-['Inter'] font-normal text-[20px] text-white">
                  Ensuring quality, security, and performance.
                </p>
              </div>
            </div>
            <div data-stage data-stage-position="right" className="absolute bg-[rgba(255,255,255,0.1)] flex items-center justify-center left-[572px] rounded-[10px] size-[80px] top-[783px] border border-[rgba(44,246,152,0.75)]">
              <TestTubeIcon />
            </div>

            {/* Stage 5: Support & Optimization */}
            <div data-stage data-stage-position="right" className="absolute left-[572px] top-[1040px] w-[472px]">
              <div className="flex flex-col gap-2">
                <h3 className="font-['Helvetica_Now_Display'] font-medium text-[36px] text-white">
                  Support & Optimization
                </h3>
                <p className="font-['Inter'] font-normal text-[20px] text-white">
                  Long-term partnership beyond launch.
                </p>
              </div>
            </div>
            <div data-stage data-stage-position="left" className="absolute bg-[rgba(255,255,255,0.1)] flex items-center justify-center left-[392px] rounded-[10px] size-[80px] top-[1043px] border border-[rgba(44,246,152,0.75)]">
              <MentoringIcon />
            </div>
          </div>

          {/* Bottom Message */}
          <div ref={bottomMessageRef} className="flex justify-center">
            <p className="font-['Helvetica_Now_Display'] font-medium text-[36px] leading-[normal] text-center text-white max-w-[1250px]">
              Every stage is backed by defined milestones, reviews, and quality checks to ensure predictable outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
