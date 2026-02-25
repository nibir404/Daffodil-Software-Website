import imgRectangle702 from "figma:asset/94cdf9a025dd363e1c433c680707dcf56ad46447.png";
import imgFrame2085663686 from "figma:asset/020e2391043d25e4fb8dfd86f519c61d4076f745.png";
import imgRectangle703 from "figma:asset/bcb3f6b5465cdc22c16fddaaf0ccf7bb49669674.png";
import imgOfficeImage from "figma:asset/2119e7d7d5f77f0443f6c755970ba68bc94039dd.png";
import imgRectangle704 from "figma:asset/4adda5c41827bb8ec83608487fe9d913897f1776.png";
import imgRectangle705 from "figma:asset/0bdb471f4e78b61b083e8408c051d06192972efb.png";
import imgRectangle706 from "figma:asset/ad53edd4046b2da67540e75c68bc4793f58e55af.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const teamImages = [
  imgRectangle702,
  imgRectangle703,
  imgOfficeImage,
  imgRectangle705,
  imgRectangle706,
];

export function PeopleBehindSystemsNewSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const content = contentRef.current;
    
    if (!scrollContainer || !content) return;

    // Clone and append the content for seamless infinite loop
    const clone = content.cloneNode(true) as HTMLDivElement;
    scrollContainer.appendChild(clone);

    // Calculate the width of the original content
    const scrollWidth = content.offsetWidth;

    // Create the infinite scroll animation
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" }
    });
    
    tl.to(scrollContainer, {
      x: -scrollWidth,
      duration: 40, // Slower, smoother scroll (adjust as needed)
      ease: "none",
    });

    animationRef.current = tl;

    // Pause on hover
    const handleMouseEnter = () => {
      tl.pause();
    };

    const handleMouseLeave = () => {
      tl.play();
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tl.kill();
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      // Remove cloned content
      if (clone.parentNode === scrollContainer) {
        scrollContainer.removeChild(clone);
      }
    };
  }, []);

  return (
    <section className="bg-[#f5f5f7] py-[80px] md:py-[100px] overflow-hidden">
      {/* Header */}
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        <div className="flex flex-col gap-[24px] items-center text-center max-w-[1000px] mx-auto mb-[60px] md:mb-[80px]">
          <h2 className="font-['Helvetica_Now_Display'] font-medium leading-[1.1] text-[#111] text-[36px] md:text-[48px] lg:text-[64px]">
            The People Behind the Systems
          </h2>
          <p className="font-['Inter'] font-normal leading-[30px] text-[#3c3c3c] text-[18px] md:text-[20px]">
            DSL is shaped by engineers, designers, analysts, and architects who think in systems rather than tasks.
          </p>
        </div>
      </div>

      {/* GSAP Horizontal Scrolling Gallery */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-[100px] md:w-[200px] bg-gradient-to-r from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[100px] md:w-[200px] bg-gradient-to-l from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
        
        {/* Scrollable Container with GSAP */}
        <div className="overflow-hidden">
          <div ref={scrollContainerRef} className="flex gap-[16px] pl-6 md:pl-12 lg:pl-24 xl:pl-[100px]">
            <div ref={contentRef} className="flex gap-[16px]">
              {teamImages.map((image, index) => (
                <div
                  key={index}
                  className="relative h-[400px] md:h-[500px] w-[320px] md:w-[430px] rounded-[10px] overflow-hidden flex-shrink-0 group cursor-pointer"
                >
                  <img
                    alt={`Team member ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    src={image}
                  />
                  <div className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-[-2px] pointer-events-none rounded-[12px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}