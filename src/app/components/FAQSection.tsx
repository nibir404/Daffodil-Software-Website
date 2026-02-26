import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router";
import svgPaths from "../../assets/svgs/svg-odj93ybx11";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What does Daffodil Software Limited specialize in?",
    answer: "Daffodil Software Limited specializes in custom enterprise software development, ERP implementation (Microsoft Dynamics, SAP, Oracle), AI automation, digital transformation, blockchain solutions, and mobile app development. We serve multiple industries including education, healthcare, finance, manufacturing, and retail with 20+ years of experience."
  },
  {
    question: "Who are the primary clients of Daffodil Software Limited?",
    answer: "Our primary clients include Fortune 500 companies, mid-sized enterprises, educational institutions, healthcare organizations, government agencies, and startups across North America, Europe, and Asia. We've successfully delivered 500+ projects for organizations seeking reliable, scalable software solutions."
  },
  {
    question: "What makes Daffodil Software Limited different from other software companies?",
    answer: "DSL stands out through our proven track record of predictable delivery, deep industry expertise, secure system architecture, long-term support commitment, and comprehensive technology stack. Our team combines technical excellence with business domain knowledge to deliver solutions that drive real business outcomes."
  },
  {
    question: "Does Daffodil Software Limited provide customized solutions or ready-made products?",
    answer: "We provide both. Our core strength lies in developing fully customized enterprise solutions tailored to your specific business needs. Additionally, we offer ready-made products like IUMS (Integrated University Management System) and various industry-specific platforms that can be configured to match your requirements."
  },
  {
    question: "How does Daffodil Software Limited ensure software quality and security?",
    answer: "We implement rigorous quality assurance processes including automated testing, code reviews, security audits, and compliance checks. Our development follows industry best practices like ISO 27001 standards, GDPR compliance, and HIPAA requirements where applicable. We conduct regular penetration testing and vulnerability assessments to ensure robust security."
  },
  {
    question: "Can Daffodil Software Limited handle large-scale and enterprise-level projects?",
    answer: "Absolutely. We have extensive experience managing large-scale enterprise projects with distributed teams, complex integrations, and strict compliance requirements. Our portfolio includes ERP implementations for organizations with 10,000+ users, mission-critical systems for government agencies, and global digital transformation initiatives."
  },
  {
    question: "What technologies does Daffodil Software Limited work with?",
    answer: "Our technology expertise spans across cloud platforms (AWS, Azure, Google Cloud), programming languages (Java, Python, .NET, Node.js, React), databases (SQL Server, Oracle, MongoDB, PostgreSQL), AI/ML frameworks (TensorFlow, PyTorch), blockchain platforms (Ethereum, Hyperledger), and modern DevOps tools."
  },
  {
    question: "Does Daffodil Software Limited offer post-deployment support and maintenance?",
    answer: "Yes, we provide comprehensive post-deployment support including 24/7 monitoring, regular maintenance, security patches, feature enhancements, performance optimization, and dedicated support teams. Our long-term support contracts ensure your systems remain secure, efficient, and up-to-date with evolving business needs."
  }
];

function FAQCard({ 
  faq, 
  index, 
  isOpen, 
  onToggle 
}: { 
  faq: typeof faqs[0]; 
  index: number; 
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      data-faq-card
      data-card-index={index}
      className="absolute top-0 left-0 right-0 w-full opacity-100"
      style={{
        zIndex: index + 1
      }}
    >
      <div className="bg-white rounded-[10px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.1)] overflow-hidden">
        <button
          onClick={onToggle}
          className="flex gap-4 items-start justify-between w-full px-4 md:px-6 py-5 md:py-6 text-left hover:bg-[#f5f5f7] transition-colors"
        >
          <h3 className="font-['Helvetica_Now_Display'] font-medium text-[18px] md:text-[20px] lg:text-[24px] text-[#111] leading-[26px] md:leading-[30px] flex-1">
            {faq.question}
          </h3>
          <ChevronDown 
            className={`size-5 md:size-6 text-[#111] shrink-0 transition-transform duration-300 mt-0.5 md:mt-1 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        {/* Answer - Collapsible */}
        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
            isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 md:px-6 pb-5 md:pb-6 pt-2">
            <p className="font-['Inter'] text-[14px] md:text-[16px] text-[#3c3c3c] leading-[24px] md:leading-[28px]">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Render as normal vertical list
      const cards = container.querySelectorAll('[data-faq-card]');
      cards.forEach((card) => {
        const htmlCard = card as HTMLElement;
        htmlCard.style.position = 'relative';
        htmlCard.style.transform = 'none';
        htmlCard.style.marginBottom = '20px';
      });
      return;
    }

    const cards = gsap.utils.toArray<HTMLElement>('[data-faq-card]');
    const totalCards = cards.length;
    const overlapOffset = 20; // How much cards overlap when stacked
    
    // Define header offset - header height + breathing space
    const headerHeight = 80;
    const breathingSpace = 120;
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
          y: idx * 200, // Start position below (estimated card height + spacing)
          scale: 0.98,
          zIndex: idx + 1
        });
      }
    });

    // Create the main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: `top ${headerOffset}px`,
        end: `+=${totalCards * 100}%`,
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
      }, idx * 0.8); // Stagger timing

      // Scale down previous cards as new ones come on top
      if (idx > 0) {
        cards.slice(0, idx).forEach((prevCard, prevIdx) => {
          tl.to(prevCard, {
            scale: 0.98 - ((idx - prevIdx) * 0.01), // Progressively smaller
            duration: 1,
            ease: "none"
          }, idx * 0.8);
        });
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 items-start">
          {/* Left Column - Header */}
          <div className="bg-[#f5f5f7] flex flex-col gap-5 md:gap-6 p-6 md:p-10 rounded-[10px] lg:sticky lg:top-24 shrink-0 w-full lg:w-[480px]">
            <h2 className="font-['Helvetica_Now_Display'] font-medium text-[36px] md:text-[48px] lg:text-[64px] text-[#111] leading-[1.17]">
              Frequently Asked Questions
            </h2>
            <Link to="/faq">
              <div className="bg-[#01e067] flex gap-[10px] items-center overflow-hidden pl-[24px] pr-[8px] py-[6px] rounded-[80px] relative h-[48px] md:h-[52px] group hover:bg-[#00c757] transition-colors w-fit">
                {/* Light flare animation */}
                <div className="absolute flex h-[130.588px] items-center justify-center left-[calc(50%-105.63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px] group-hover:animate-[flare_0.6s_ease-in-out]">
                  <div className="rotate-[-46.28deg]">
                    <div className="h-[30px] w-[152px]">
                      <div className="absolute inset-[-180%_-35.53%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                          <g filter="url(#filter0_f_faq_cta)" style={{ mixBlendMode: "plus-lighter" }}>
                            <ellipse cx="130" cy="69" fill="white" fillOpacity="0.8" rx="76" ry="15" />
                          </g>
                          <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_faq_cta" width="260" x="0" y="0">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                              <feGaussianBlur result="effect1_foregroundBlur_faq_cta" stdDeviation="27" />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['Helvetica_Now_Display'] font-medium leading-normal relative shrink-0 text-[#111] text-[14px] md:text-[16px] z-10">
                  See All FAQ
                </p>
                <div className="bg-[#111] rounded-full shrink-0 size-[32px] md:size-[36px] flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-90 group-hover:ring-2 group-hover:ring-white">
                  <svg className="size-[14px] md:size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d="M12.3321 8H3.33203" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p16251580} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="flex flex-col flex-1 w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex gap-4 items-start justify-between w-full px-3 md:px-4 py-4 md:py-5 text-left hover:bg-[#f5f5f7] transition-colors"
                >
                  <h3 className="font-['Helvetica_Now_Display'] font-medium text-[18px] md:text-[20px] lg:text-[24px] text-[#111] leading-[26px] md:leading-[30px] flex-1">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`size-5 text-[#111] shrink-0 transition-transform duration-300 mt-0.5 md:mt-1 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {/* Answer - Collapsible */}
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-3 md:px-4 pb-4 md:pb-5 pt-2">
                    <p className="font-['Inter'] text-[14px] md:text-[16px] text-[#3c3c3c] leading-[24px] md:leading-[28px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
