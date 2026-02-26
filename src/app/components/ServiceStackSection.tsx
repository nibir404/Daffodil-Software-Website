import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import svgPaths from "../../assets/svgs/svg-6v4yn2fvp3";

// Import service card images
import imgStrategy from "figma:asset/ff46b51640dd59c94f9646f1ca134743027730cb.png";
import imgDesign from "figma:asset/d965d995d3dd93ea32c5cdb198f31c04066d1aad.png";
import imgDevelopment from "figma:asset/77fb045f90fcd7d73bbb4f4889f140000cf2d634.png";
import imgAI from "figma:asset/d858ea1547aa7f7b48680b0265c29cddb6c3f3e1.png";
import imgGrowth from "figma:asset/fcface7d4f9fac4267c6d177316c16720ad1d8cc.png";
import imgMaintain from "figma:asset/8be1977a91719f558694d1f0ebb94a2ad46c6709.png";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface ServiceItem {
  text: string;
}

interface ServiceCard {
  title: string;
  description: string;
  items: ServiceItem[];
  image: string;
}

const serviceCards: ServiceCard[] = [
  {
    title: "Strategy",
    description: "Digital transformation consulting and IT strategy services that align business goals, technology choices, and execution plans.",
    items: [
      { text: "Product Planning" },
      { text: "Digital Transformation" },
      { text: "Lean Development" },
      { text: "Technology Consulting" }
    ],
    image: imgStrategy
  },
  {
    title: "Design",
    description: "UI/UX design services for SaaS, ERP, and enterprise platforms focused on usability, scalability, and conversion.",
    items: [
      { text: "UI/UX Design" },
      { text: "UX Audit" },
      { text: "SaaS and MVP Product Design" },
      { text: "Social Media Design" }
    ],
    image: imgDesign
  },
  {
    title: "Development",
    description: "Custom software development for web, mobile, and enterprise systems using secure, scalable architectures.",
    items: [
      { text: "Custom Web & App Development" },
      { text: "Enterprise Application" },
      { text: "Odoo Implementation" },
      { text: "API & System Integration" }
    ],
    image: imgDevelopment
  },
  {
    title: "AI & Automation",
    description: "AI-powered software and automation solutions that reduce manual work, improve accuracy, and optimize operations.",
    items: [
      { text: "AI & Automation" },
      { text: "AI Implementation" },
      { text: "Custom AI Solutions" }
    ],
    image: imgAI
  },
  {
    title: "Growth & Visibility",
    description: "SEO, performance optimization, and conversion services designed to drive qualified traffic and measurable growth.",
    items: [
      { text: "SEO" },
      { text: "Performance Optimization" },
      { text: "Conversion Optimization" }
    ],
    image: imgGrowth
  },
  {
    title: "Maintain",
    description: "Software maintenance and 24/7 support ensuring system stability, security, and long-term reliability.",
    items: [
      { text: "Software Maintenance" },
      { text: "Software Support" },
      { text: "Project Takeover" }
    ],
    image: imgMaintain
  }
];

function ArrowIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d="M12.333 8H3.33301" stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p638bf80} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ServiceItem({ text, showBorder }: { text: string; showBorder: boolean }) {
  return (
    <div className="content-stretch flex h-[50px] items-center justify-between py-[10px] px-[12px] relative shrink-0 w-full group cursor-pointer transition-all duration-300 hover:bg-[#f0f0f0] rounded-[8px] -mx-[12px] hover:px-[24px]">
      {showBorder && (
        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid left-[12px] right-[12px] bottom-0 pointer-events-none group-hover:opacity-0 transition-opacity" />
      )}
      <p className="font-['Helvetica_Now_Display'] leading-[normal] not-italic relative shrink-0 text-[#111] text-[20px]">
        {text}
      </p>
      <div className="transition-transform duration-300 group-hover:translate-x-1">
        <ArrowIcon />
      </div>
    </div>
  );
}

function StackCard({ 
  card,
  index
}: { 
  card: ServiceCard;
  index: number;
}) {
  return (
    <div 
      data-stack-card
      data-card-index={index}
      className="absolute top-0 left-0 right-0 w-full flex justify-center opacity-100"
      style={{
        zIndex: index + 1
      }}
    >
      <div className="relative bg-white rounded-[10px] shadow-[0px_-20px_54px_0px_rgba(0,0,0,0.15)] border border-[rgba(0,0,0,0.1)] overflow-hidden opacity-100 h-[420px] w-full max-w-[1280px]">
        <div className="content-stretch flex isolate items-start overflow-clip relative rounded-[inherit] w-full bg-white h-full">
          {/* Left side - Content */}
          <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative self-stretch shrink-0 w-[640px] z-[2] bg-white h-full">
            {/* Header */}
            <div className="content-stretch flex flex-col gap-[10px] items-start leading-[normal] not-italic relative shrink-0 w-full">
              <h3 className="font-['Helvetica_Now_Display'] font-medium relative shrink-0 text-[#111] text-[32px] w-full">
                {card.title}
              </h3>
              <p className="font-['Helvetica_Now_Display'] relative shrink-0 text-[#3c3c3c] text-[15px] leading-[22px] w-full">
                {card.description}
              </p>
            </div>

            {/* Items List */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full mt-6">
              {card.items.map((item, idx) => (
                <ServiceItem 
                  key={idx} 
                  text={item.text} 
                  showBorder={idx < card.items.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] z-[1] overflow-hidden self-stretch h-full bg-black">
            <img 
              alt={`${card.title} visualization`}
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full opacity-100" 
              src={card.image} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServiceStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Render as normal vertical list
      const cards = container.querySelectorAll('[data-stack-card]');
      cards.forEach((card, idx) => {
        const htmlCard = card as HTMLElement;
        htmlCard.style.position = 'relative';
        htmlCard.style.transform = 'none';
        htmlCard.style.marginBottom = '40px';
      });
      return;
    }

    const cards = gsap.utils.toArray<HTMLElement>('[data-stack-card]');
    const totalCards = cards.length;
    const overlapOffset = 40; // How much cards overlap when stacked
    
    // Define header offset - header height + breathing space
    const headerHeight = 80; // Approximate header height
    const breathingSpace = 120; // Additional space for visual clarity
    const headerOffset = headerHeight + breathingSpace;

    // Set initial positions
    cards.forEach((card, idx) => {
      if (idx === 0) {
        // First card starts at base position
        gsap.set(card, {
          y: 0,
          scale: 1,
          zIndex: 1
        });
      } else {
        // Other cards start below, stacked vertically
        gsap.set(card, {
          y: idx * 450, // Start position below (card height + spacing)
          scale: 0.98,
          zIndex: idx + 1
        });
      }
    });

    // Create the main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: `top ${headerOffset}px`, // Start after header + offset
        end: `+=${totalCards * 120}%`, // Dynamic based on number of cards
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        // markers: true, // Uncomment for debugging
      }
    });

    // Animate each card (except the first) to slide up and stack
    cards.forEach((card, idx) => {
      if (idx === 0) return; // First card stays in place

      const stackPosition = idx * overlapOffset; // Stacked position with overlap

      // Add animation for this card to the timeline
      tl.to(card, {
        y: stackPosition,
        scale: 1,
        duration: 1,
        ease: "none"
      }, idx * 0.9); // Stagger timing

      // Scale down previous cards as new ones come on top
      if (idx > 0) {
        cards.slice(0, idx).forEach((prevCard, prevIdx) => {
          tl.to(prevCard, {
            scale: 0.98 - ((idx - prevIdx) * 0.01), // Progressively smaller
            duration: 1,
            ease: "none"
          }, idx * 0.9);
        });
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#f5f5f7] pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-24 xl:px-[100px]">
        {/* Section Header */}
        <div className="max-w-[1520px] mx-auto mb-24">
          <div className="content-stretch flex flex-col gap-[24px] items-center justify-center not-italic relative shrink-0 text-[#111] text-center w-full">
            <h2 className="font-['Helvetica_Now_Display'] font-medium leading-[75px] relative shrink-0 text-[64px] max-w-[1308px]">
              Enterprise Software Development & AI Transformation Services
            </h2>
            <p className="font-['Inter'] font-normal leading-[30px] relative shrink-0 text-[16px] max-w-[1030px]">
              We design and build enterprise-grade software systems that scale securely—from custom application development to AI-driven digital transformation. Our services support organizations across finance, healthcare, logistics, education, and SaaS.
            </p>
          </div>
        </div>

        {/* Stacking Cards Container */}
        <div 
          ref={containerRef}
          className="relative w-full h-[600px] max-w-[1600px] mx-auto"
          data-stack-container
        >
          {serviceCards.map((card, index) => (
            <StackCard
              key={index}
              card={card}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
