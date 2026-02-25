import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import svgPaths from "../../imports/svg-4rzdvkqhyh";
import imgEllipse153 from "figma:asset/f137f12625c1a018397fa711cbe5acddcc0266f2.png";
import imgEllipse154 from "figma:asset/322892a770d94ef850a9d6b3e8a86adc23fbc458.png";
import imgEllipse155 from "figma:asset/4e2e2239a2685f3728a7c603c1f42a6b6d179593.png";

const testimonials = [
  {
    quote: "Implementing the IUMS from Daffodil Software was a game-changer for our campus. The automation of student records and grading systems saved us thousands of man-hours.",
    name: "Dr. Sarah Ahmed",
    position: "Registrar, Eastern University",
    image: imgEllipse153,
  },
  {
    quote: "DSL's team demonstrated exceptional technical prowess in developing our custom blockchain solution. Their attention to security and scalability was impressive.",
    name: "Michael Chen",
    position: "CTO, TechFlow Solutions",
    image: imgEllipse154,
  },
  {
    quote: "The ERP implementation by Daffodil transformed our manufacturing operations. We've seen a 40% improvement in supply chain efficiency and real-time visibility across all departments.",
    name: "Priya Sharma",
    position: "COO, Manufacturing Solutions Inc.",
    image: imgEllipse155,
  },
  {
    quote: "Working with DSL on our AI-powered customer service platform exceeded expectations. Their expertise in machine learning and natural language processing delivered exceptional results.",
    name: "James Patterson",
    position: "VP of Technology, Global Retail Corp",
    image: imgEllipse153,
  },
  {
    quote: "Daffodil's healthcare management system has streamlined our patient care workflows significantly. The integration with existing systems was seamless and the support has been outstanding.",
    name: "Dr. Emily Rodriguez",
    position: "Chief Medical Officer, Metro Health Systems",
    image: imgEllipse154,
  },
];

export function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = window.innerWidth < 640 ? 300 : 493;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-10 md:mb-16 gap-6">
          <div className="max-w-[656px]">
            <h2 className="font-['Helvetica_Now_Display'] font-medium text-[36px] md:text-[48px] lg:text-[64px] text-[#111] mb-3 md:mb-4 leading-[1.17]">
              What Our Clients Say
            </h2>
            <p className="font-['Inter'] text-[14px] md:text-[16px] text-[#3c3c3c] leading-[26px] md:leading-[30px]">
              Hear directly from our satisfied clients
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3 md:gap-4 items-center shrink-0">
            <button
              onClick={() => scroll('left')}
              className="bg-[#8f8f8f] hover:bg-[#111] transition-colors rounded-full size-[36px] md:size-[40px] flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-4 md:size-5 text-white" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="bg-[#01e067] hover:bg-[#00c757] transition-colors rounded-full size-[36px] md:size-[40px] flex items-center justify-center relative overflow-hidden group"
              aria-label="Next testimonial"
            >
              {/* Light flare effect */}
              <div className="absolute flex h-[130.588px] items-center justify-center left-[calc(50%-37.63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px]">
                <div className="rotate-[-46.28deg]">
                  <div className="h-[30px] w-[152px]">
                    <div className="absolute inset-[-180%_-35.53%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                        <g filter="url(#filter0_f_testimonials)" style={{ mixBlendMode: "plus-lighter" }}>
                          <ellipse cx="130" cy="69" fill="white" fillOpacity="0.8" rx="76" ry="15" />
                        </g>
                        <defs>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_testimonials" width="260" x="0" y="0">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_testimonials" stdDeviation="27" />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <ChevronRight className="size-4 md:size-5 text-[#111] relative z-10" />
            </button>
          </div>
        </div>

        {/* Testimonials Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-5 overflow-x-auto overflow-y-visible pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#f5f5f7] flex flex-col gap-4 md:gap-5 p-6 md:p-10 rounded-[10px] shrink-0 w-[300px] sm:w-[400px] md:w-[493px] snap-start"
            >
              {/* Quote Icon */}
              <div className="flex flex-col gap-[12px] md:gap-[15px]">
                <div className="h-[24px] w-[30px] md:h-[30px] md:w-[38px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 30">
                    <path d={svgPaths.p28636380} fill="black" fillOpacity="0.1" />
                  </svg>
                </div>
                
                {/* Quote Text */}
                <p className="font-['Inter'] text-[14px] md:text-[16px] text-[#3c3c3c] leading-[24px] md:leading-[30px]">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex gap-3 md:gap-4 items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="size-[44px] md:size-[50px] rounded-full object-cover"
                />
                <div className="flex flex-col gap-[2px] md:gap-[3px]">
                  <p className="font-['Helvetica_Now_Display'] font-medium text-[20px] md:text-[24px] text-[#111] leading-[26px] md:leading-[30px]">
                    {testimonial.name}
                  </p>
                  <p className="font-['Inter'] text-[14px] md:text-[16px] text-[#3c3c3c] leading-[22px] md:leading-[30px]">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}