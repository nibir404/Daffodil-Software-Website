import { PrimaryCTA } from "../components/CTAButtons";
import svgPaths from "../../assets/svgs/svg-w97waj2wxx";
import imgImage22 from "figma:asset/b3a76efb62e40b6c12695c1680be963ca0a490ce.png";
import imgImage23 from "figma:asset/d41a3add220587a395706f0474ccd7f35387d5be.png";
import imgImage25 from "figma:asset/dbd26c38ee66f78dc4c9d30e7c592b4d8058da90.png";
import imgImage24 from "figma:asset/df9b1bedaf9596f52c0e1727e8e704d69d1f1cdc.png";
import imgImage26 from "figma:asset/4fb591e6c3581ef7cd73e2bf37b735a08fc775ff.png";
import imgImage27 from "figma:asset/752f360f2139b21a38c76693f781902e721a41ba.png";
import imgImage28 from "figma:asset/4e76b2d022abf7fe71dfa0196a6d8c5b17f75a0e.png";
import imgImage30 from "figma:asset/6cdc7cc1463db8ebaa820fdcad43a91fb141bb9c.png";
import imgRectangle662 from "figma:asset/ff46b51640dd59c94f9646f1ca134743027730cb.png";
import imgRectangle663 from "figma:asset/d965d995d3dd93ea32c5cdb198f31c04066d1aad.png";
import imgRectangle664 from "figma:asset/77fb045f90fcd7d73bbb4f4889f140000cf2d634.png";
import imgRectangle665 from "figma:asset/d858ea1547aa7f7b48680b0265c29cddb6c3f3e1.png";
import imgRectangle666 from "figma:asset/fcface7d4f9fac4267c6d177316c16720ad1d8cc.png";
import imgRectangle667 from "figma:asset/8be1977a91719f558694d1f0ebb94a2ad46c6709.png";
import imgDeshiJamar from "figma:asset/871c154f69889e15b43fb93c8070b6d9a576ac9c.png";
import imgEastCoast from "figma:asset/a5c2b13c70fd5d181d101755999a189183a22bb4.png";
import imgGmeGroup from "figma:asset/e19895d50fa7021662329baf515f32168351767e.png";
import imgKurmitola from "figma:asset/5a953beda881a4340ca9a7d70e4dc6954c4db25b.png";
import imgComilla from "figma:asset/65858cb6ae73a46e49bd05c666de86628d4b0d50.png";
import imgDaffodilComputers from "figma:asset/c21810431d01748d0c7cc59913c98bd2b59ba95e.png";
import imgHokseed from "figma:asset/edadc830852b6f7bb1a0533cb9600a6f136c5e81.png";
import imgCardioCare from "figma:asset/68c265633cca5a94c6ee7f27899077a253634d30.png";

// Hero Section
function ServicesHero() {
  return (
    <section 
      className="relative w-full min-h-[600px] h-[700px] md:h-[750px] lg:h-[800px] overflow-hidden"
      style={{ 
        backgroundImage: "linear-gradient(-90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), linear-gradient(90deg, rgb(68, 147, 197) 0%, rgb(68, 147, 197) 100%)" 
      }}
    >
      {/* Background gradient accents - hidden on smaller screens */}
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-full left-[1193px] to-[#4ac4f0] w-[242px] hidden lg:block" />
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-full left-[1678px] to-[#4ac4f0] w-[242px] hidden lg:block" />
      <div className="absolute bottom-0 flex h-full items-center justify-center left-[1435px] w-[243px] hidden lg:block">
        <div className="flex-none rotate-180">
          <div className="bg-gradient-to-b from-[rgba(255,255,255,0)] h-full to-[#4ac4f0] w-[243px]" />
        </div>
      </div>

      {/* Content Container */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 px-6 md:px-12 lg:px-24 xl:px-[100px] max-w-full w-full">
        <div className="max-w-[1520px] mx-auto">
          <div className="flex flex-col gap-4 md:gap-6 max-w-[796px]">
            {/* Title */}
            <div className="flex flex-col font-['Helvetica_Now_Display'] text-white leading-normal">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-medium">Software Development &</h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-medium">Digital Transformation Services</h2>
            </div>
            
            {/* Description */}
            <div className="flex flex-col gap-4 md:gap-6">
              <p className="font-['Inter'] text-base md:text-lg lg:text-xl text-white leading-[1.5] md:leading-[30px]">
                Daffodil Software Limited provides custom software development, enterprise solutions, and digital transformation services for organizations across industries. From strategy and engineering to long-term support, our services are built to deliver scalable, secure, and future-ready systems for both local and global clients.
              </p>
              <p className="font-['Inter'] font-bold text-base md:text-lg lg:text-xl text-white leading-[1.5] md:leading-[30px]">
                End-to-end technology services designed to solve real business problems at scale.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-4 w-fit">
              <PrimaryCTA text="Explore All Services" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Trust Section (Single Service Page Version)
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
    <section className="bg-white relative px-[0px] pt-[80px] pb-[0px]" style={{ position: 'relative' }}>
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
            {`\n
              @keyframes scroll {\n
                0% {\n
                  transform: translateX(0);\n
                }\n
                100% {\n
                  transform: translateX(-50%);\n
                }\n
              }\n
              .animate-scroll {\n
                animation: scroll 40s linear infinite;\n
              }\n
              .animate-scroll:hover {\n
                animation-play-state: paused;\n
              }\n
            `}\n
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

// Service Card Component
interface ServiceItem {
  title: string;
  link?: string;
}

interface ServiceCardProps {
  image: string;
  category: string;
  description: string;
  services: ServiceItem[];
}

function ServiceCard({ image, category, description, services }: ServiceCardProps) {
  return (
    <div className="bg-white relative rounded-[10px] w-full">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[inherit] w-full">
        {/* Image */}
        <div className="h-[335px] relative rounded-[10px] shrink-0 w-full z-[2]">
          <img 
            alt={category} 
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" 
            src={image} 
          />
        </div>
        
        {/* Content */}
        <div className="h-[400px] relative shrink-0 w-full z-[1]">
          <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
            {/* Header */}
            <div className="content-stretch flex flex-col gap-[9px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-pre-wrap">
              <p className="font-['Helvetica_Now_Display:Medium',sans-serif] relative shrink-0 text-[36px] text-black w-full">
                {category}
              </p>
              <p className="font-['Helvetica_Now_Display:Regular',sans-serif] relative shrink-0 text-[#3c3c3c] text-[16px] w-full">
                {description}
              </p>
            </div>

            {/* Services List */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="content-stretch flex h-[50px] items-center justify-between py-[10px] px-[12px] relative shrink-0 w-full cursor-pointer group/item transition-all duration-300 hover:bg-[#f0f0f0] rounded-[8px] -mx-[12px] hover:px-[24px]"
                  data-name="Solutions"
                >
                  {/* Border line - only for items that are not the last one */}
                  {index < services.length - 1 && (
                    <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid left-[12px] right-[12px] bottom-0 pointer-events-none group-hover/item:opacity-0 transition-opacity" />
                  )}
                  
                  <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black">
                    {service.title}
                  </p>
                  
                  {/* Arrow Icon */}
                  <div className="relative shrink-0 size-[16px] group-hover/item:translate-x-1 transition-transform duration-300" data-name="Menu/arrow-right-02">
                    {/* Horizontal line */}
                    <div className="absolute bottom-1/2 left-[20.83%] right-[22.92%] top-1/2" data-name="Vector">
                      <div className="absolute inset-[-0.75px_-8.33%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 1.5">
                          <path d="M9.75002 0.75H0.75" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>
                    {/* Arrow head */}
                    <div className="absolute bottom-1/4 left-[54.17%] right-[20.83%] top-1/4" data-name="Vector">
                      <div className="absolute inset-[-9.38%_-18.75%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.50005 9.5001">
                          <path d={svgPaths.p8187a80} stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Border overlay */}
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-[-2px] pointer-events-none rounded-[12px]" />
    </div>
  );
}

// Service Capabilities Section
function ServiceCapabilitiesSection() {
  const services: ServiceCardProps[] = [
    {
      image: imgRectangle662,
      category: "Strategy",
      description: "Digital transformation consulting and IT strategy services that align business goals, technology choices, and execution plans.",
      services: [
        { title: "Product Planning" },
        { title: "Digital Transformation" },
        { title: "Lean Development" },
        { title: "Technology Consulting" }
      ]
    },
    {
      image: imgRectangle663,
      category: "Design",
      description: "UI/UX design services for SaaS, ERP, and enterprise platforms focused on usability, scalability, and conversion.",
      services: [
        { title: "UI/UX Design" },
        { title: "UX Audit" },
        { title: "SaaS and MVP Product Design" },
        { title: "Social Media Design" }
      ]
    },
    {
      image: imgRectangle664,
      category: "Development",
      description: "Custom software development for web, mobile, and enterprise systems using secure, scalable architectures.",
      services: [
        { title: "Custom Web and App Development" },
        { title: "Enterprise Application" },
        { title: "API Development" },
        { title: "AI-powered Integration" }
      ]
    },
    {
      image: imgRectangle665,
      category: "AI & Automation",
      description: "AI-powered solutions and workflow automation that enhance productivity and operational efficiency.",
      services: [
        { title: "AI & ML services" },
        { title: "AI Implementation" },
        { title: "Systems Integration" }
      ]
    },
    {
      image: imgRectangle666,
      category: "Growth & Visibility",
      description: "Digital marketing and growth strategies to increase online visibility, engagement, and conversion.",
      services: [
        { title: "SEO" },
        { title: "Performance Optimization" },
        { title: "Conversion Optimization" }
      ]
    },
    {
      image: imgRectangle667,
      category: "Maintain",
      description: "Ongoing technical support and system maintenance to ensure uptime, security, and continuous improvement.",
      services: [
        { title: "Software Maintenance" },
        { title: "DevOps Support" },
        { title: "Security Audit" },
        { title: "Project Takeover" }
      ]
    }
  ];

  return (
    <section className="bg-[#f5f5f7] pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[120px] pb-[60px] md:pb-[80px] lg:pb-[100px] xl:pb-[120px]">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        {/* Header */}
        <div className="flex flex-col gap-6 items-center justify-center text-center mb-[60px] md:mb-[80px] lg:mb-[100px]">
          <h2 className="font-['Helvetica_Now_Display'] font-medium text-[40px] md:text-[52px] lg:text-[64px] leading-[1.2] text-[#111]">
            Our Service Capabilities
          </h2>
          <p className="font-['Inter'] text-[16px] leading-[30px] text-[#111] max-w-[796px]">
            Comprehensive technology services covering the full software lifecycle.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-[20px]">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              image={service.image}
              category={service.category}
              description={service.description}
              services={service.services}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Main Component
export function Services() {
  return (
    <div className="w-full bg-white overflow-hidden">
      <ServicesHero />
      <TrustSection />
      <ServiceCapabilitiesSection />
    </div>
  );
}

export default Services;
