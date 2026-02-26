import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import svgPaths from "../../assets/svgs/svg-ugaw4azmqe";
import imgImage61 from "figma:asset/d80fb2985b8e5fe3ece58610c38ac6e3b7c3fac6.png";
import imgImage62 from "figma:asset/51c3b1a51cb3dc090c475e60ec7af1e01261ddc0.png";
import imgImage63 from "figma:asset/feab9f0144be05738767103bba60379a87da3aa5.png";
import imgImage64 from "figma:asset/1fcc5b99c07bd0832b624012b64c40532492d8d3.png";
import imgImage65 from "figma:asset/8872a7d291c3714b7c3f2a12bc1991e858f11079.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface BlogPost {
  title: string;
  description: string;
  image: string;
}

export function InsightsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const blogPosts: BlogPost[] = [
    {
      title: "What Makes an Enterprise-Grade Software System? A Practical Guide",
      description: "A practical breakdown of the architecture, security, scalability, and governance standards required to build reliable enterprise software systems.",
      image: imgImage61,
    },
    {
      title: "Custom Software vs Off-the-Shelf Solutions: Which Is Right for You?",
      description: "An objective comparison to help enterprises decide when custom software delivers more long-term value than ready-made solutions.",
      image: imgImage62,
    },
    {
      title: "Digital Transformation for Enterprises: Where to Start",
      description: "A strategic guide for organizations planning digital transformation—covering common pitfalls, priorities, and realistic execution paths.",
      image: imgImage63,
    },
    {
      title: "How AI Automation Is Changing Enterprise Operations",
      description: "Explore how AI-driven automation is improving efficiency, reducing costs, and enabling smarter decision-making across enterprises.",
      image: imgImage64,
    },
    {
      title: "Why Enterprise Software Projects Fail—and How to Prevent It",
      description: "Insights into the most common reasons large software projects fail and proven strategies to reduce risk and ensure success.",
      image: imgImage65,
    },
  ];

  useEffect(() => {
    if (!sectionRef.current || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollWidth = container.scrollWidth - container.clientWidth;

    // Only enable GSAP scroll on desktop
    const isMobile = window.innerWidth < 1024;
    
    if (!isMobile && scrollWidth > 0) {
      const scrollTween = gsap.to(container, {
        scrollLeft: scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollWidth * 2}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      return () => {
        const st = scrollTween.scrollTrigger;
        if (st) {
          st.kill();
        }
        scrollTween.kill();
      };
    }
  }, []);

  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkScrollPosition();
    container.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      container.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  const scrollByCard = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    
    const cardWidth = 600; // Card width
    const gap = 24; // Gap between cards
    const scrollAmount = direction === "left" ? -(cardWidth + gap) : (cardWidth + gap);
    
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section ref={sectionRef} className="bg-[#f5f5f7] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1520px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-6 items-center text-center mb-12 lg:mb-16 px-6 md:px-12 lg:px-24 xl:px-[100px]">
          <h2 className="font-['Helvetica_Now_Display',sans-serif] font-medium text-[48px] lg:text-[64px] leading-[1.2] text-[#111] max-w-[1200px]">
            Enterprise Software, AI & Digital Transformation Insights
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-base leading-[30px] text-[#3c3c3c] max-w-[656px]">
            In-depth articles covering custom software development, AI automation, ERP systems, and enterprise digital transformation.
          </p>
        </div>

        {/* Scrollable Cards Container with Gradient Fades */}
        <div className="relative mb-12 lg:mb-16">
          {/* Left Gradient Fade */}
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-32 bg-gradient-to-r from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
          )}

          {/* Right Gradient Fade */}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-32 bg-gradient-to-l from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
          )}

          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scrollByCard("left")}
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full size-12 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#01e067] focus:ring-offset-2"
              aria-label="Previous card"
            >
              <ChevronLeft className="size-6 text-[#111]" />
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scrollByCard("right")}
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full size-12 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#01e067] focus:ring-offset-2"
              aria-label="Next card"
            >
              <ChevronRight className="size-6 text-[#111]" />
            </button>
          )}

          {/* Cards Container with Snap Scrolling */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto px-6 md:px-12 lg:px-24 xl:px-[200px] py-4 snap-x snap-mandatory scroll-smooth"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
            }}
          >
            {blogPosts.map((post, index) => (
              <div key={index} className="snap-start">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center px-6 md:px-12 lg:px-24 xl:px-[200px]">
          <PrimaryCTA />
          <SecondaryCTA />
        </div>
      </div>

      <style>{`
        .snap-x::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="relative flex-none w-[340px] sm:w-[400px] lg:w-[600px] h-[450px] lg:h-[500px] rounded-[10px] overflow-hidden group cursor-pointer shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:scale-[1.02]">
      {/* Background Image with Blur and Overlay */}
      <div className="absolute inset-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover blur-[25px] scale-110"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="absolute left-4 right-4 sm:left-6 sm:right-6 bottom-4 sm:bottom-6 flex flex-col gap-3 sm:gap-4 text-white">
        <h3 className="font-['Helvetica_Now_Display',sans-serif] font-medium text-xl sm:text-2xl leading-[1.25] sm:leading-[30px]">
          {post.title}
        </h3>
        <p className="font-['Helvetica_Now_Display',sans-serif] text-sm leading-6">
          {post.description}{" "}
          <span className="font-['Helvetica_Now_Display',sans-serif] font-bold underline">
            Read full blog
          </span>
        </p>
      </div>

      {/* White Border with Shadow */}
      <div className="absolute inset-0 border-[6px] border-white rounded-[10px] pointer-events-none" />
    </div>
  );
}

function PrimaryCTA() {
  return (
    <button className="group relative bg-[#01e067] h-[52px] rounded-[80px] px-6 pr-2 overflow-hidden flex items-center gap-2.5 hover:bg-[#00cc5c] transition-all">
      {/* Light Flare Effect */}
      <div className="absolute flex h-[130.588px] items-center justify-center left-[calc(50%-105.63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px] group-hover:animate-[flare_0.6s_ease-in-out]">
        <div className="rotate-[-46.28deg]">
          <div className="h-[30px] w-[152px]">
            <div className="absolute inset-[-180%_-35.53%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                <g filter="url(#filter0_f_primary)" style={{ mixBlendMode: "plus-lighter" }}>
                  <ellipse cx="130" cy="69" fill="white" fillOpacity="0.8" rx="76" ry="15" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_primary" width="260" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_primary" stdDeviation="27" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <span className="font-['Helvetica_Now_Display',sans-serif] font-medium text-base text-[#111] relative z-10">
        Schedule a Meeting
      </span>

      {/* Arrow Button */}
      <div className="bg-[#111] rounded-full size-9 flex items-center justify-center shrink-0 relative z-10 transition-all duration-300 group-hover:scale-90 group-hover:ring-2 group-hover:ring-white">
        <svg className="size-4" fill="none" viewBox="0 0 16 16">
          <path d="M12.3321 8H3.33203" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p16251580} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      </div>
    </button>
  );
}

function SecondaryCTA() {
  return (
    <Link to="/blog" className="group relative h-[52px] rounded-[80px] px-6 overflow-hidden backdrop-blur-[10px] border border-[#111] hover:bg-[#111] transition-all duration-300 flex items-center justify-center">
      {/* Animated light flare on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute h-full w-[100px] bg-gradient-to-r from-transparent via-white/30 to-transparent -left-[100px] group-hover:left-[100%] transition-all duration-700 ease-out blur-sm" />
      </div>

      <span className="font-['Helvetica_Now_Display',sans-serif] font-medium text-base text-[#111] group-hover:text-white transition-colors relative z-10">
        Explore All Blogs
      </span>
    </Link>
  );
}
