import { PrimaryCTA } from "../components/CTAButtons";
import svgPaths from "../../imports/svg-gc3kdrotiu";

// Import product images
import imgImage32 from "figma:asset/3fb78841a0d9e817e7f89226c881690647824d8e.png";
import imgImage65 from "figma:asset/5a590c7c8feb4668c861120c3d7cd9a8504eb43e.png";
import imgImage66 from "figma:asset/4419057f9864248fbb87e19eb55bb37c791d4dbf.png";
import imgImage67 from "figma:asset/086e2546c120d39e1caa69e055489f60fa97ba73.png";
import imgImage68 from "figma:asset/3cefdc3604938677e97e521faaaeb11d254ff9fd.png";
import imgImage69 from "figma:asset/b7c04969f2a473d5e59062d0035a8fee5c477b30.png";
import imgImage70 from "figma:asset/33505f105e9e5532dfd89920ccab7c6877b70369.png";
import imgImage75 from "figma:asset/c3c82d7da3841ff7a18bc6454bcbd60438c094da.png";

// Import client logos
import imgDeshiJamar from "figma:asset/871c154f69889e15b43fb93c8070b6d9a576ac9c.png";
import imgEastCoast from "figma:asset/a5c2b13c70fd5d181d101755999a189183a22bb4.png";
import imgGmeGroup from "figma:asset/e19895d50fa7021662329baf515f32168351767e.png";
import imgKurmitola from "figma:asset/5a953beda881a4340ca9a7d70e4dc6954c4db25b.png";
import imgComilla from "figma:asset/65858cb6ae73a46e49bd05c666de86628d4b0d50.png";
import imgDaffodilComputers from "figma:asset/c21810431d01748d0c7cc59913c98bd2b59ba95e.png";
import imgHokseed from "figma:asset/edadc830852b6f7bb1a0533cb9600a6f136c5e81.png";
import imgCardioCare from "figma:asset/68c265633cca5a94c6ee7f27899077a253634d30.png";

// Hero Section
function ProductsHero() {
  return (
    <section className="relative w-full h-[800px] overflow-hidden">
      {/* Dark green background */}
      <div className="absolute inset-0 bg-[#173829]" />
      
      {/* Content Container */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 px-6 md:px-12 lg:px-24 xl:px-[100px] max-w-full z-10">
        <div className="max-w-[1520px] mx-auto">
          <div className="flex flex-col gap-10 max-w-[796px]">
            {/* Title */}
            <div className="flex flex-col font-['Helvetica_Now_Display'] text-white leading-normal">
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-medium">Enterprise-Ready Platforms</h1>
              <h2 className="text-4xl md:text-5xl lg:text-[64px] font-medium">Built for Real-World Operations</h2>
            </div>
            
            {/* Description */}
            <p className="font-['Inter'] text-lg md:text-xl text-white leading-[30px]">
              From ERP and university management to hospital operations and payroll systems, our software products power critical business processes with proven reliability, security, and scalability. Built on years of domain expertise and deployed across industries.
            </p>

            {/* CTA Button */}
            <div className="mt-4 w-fit">
              <PrimaryCTA text="See Your Products" />
            </div>
          </div>
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
    <section className="bg-white relative px-[0px] pt-[80px] pb-[0px]">
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

// Product Categories Sidebar
interface Category {
  name: string;
  active?: boolean;
}

function ProductCategoriesSidebar() {
  const categories: Category[] = [
    { name: "All Products", active: true },
    { name: "Enterprise & Operations Platforms" },
    { name: "Industry-Focused Management Systems" },
    { name: "Financial & Compliance Software" },
    { name: "Education & Institutional Solutions" },
    { name: "Healthcare & Service Management Tools" },
    { name: "Analytics, Automation & Intelligence Systems" }
  ];

  return (
    <div className="w-full lg:w-[280px] xl:w-[320px]">
      <div className="flex flex-col gap-[24px] lg:gap-[28px]">
        {/* Header */}
        <div className="flex flex-col gap-[8px]">
          <h2 className="font-['Helvetica_Now_Display'] font-medium text-[28px] lg:text-[32px] text-black leading-tight">
            Product Categories
          </h2>
          <p className="font-['Inter'] text-[14px] text-[#3c3c3c] leading-[20px]">
            Browse products by operational domain and use case
          </p>
        </div>

        {/* Categories List */}
        <nav className="flex flex-col border-t border-[#e5e5e5]">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`relative w-full text-left cursor-pointer transition-all group border-b border-[#e5e5e5] ${
                category.active ? 'bg-gradient-to-r from-[#e6fff3] to-transparent' : 'hover:bg-[#fafafa]'
              }`}
            >
              <div className="flex items-center justify-between px-[12px] py-[16px] lg:py-[18px]">
                <span className={`font-['Helvetica_Now_Display'] font-medium text-[16px] lg:text-[18px] leading-snug transition-colors ${
                  category.active ? 'text-[#01e067]' : 'text-[#111] group-hover:text-[#01e067]'
                }`}>
                  {category.name}
                </span>
                
                {/* Arrow Icon */}
                <svg 
                  className={`size-4 transition-all duration-200 ${
                    category.active ? 'translate-x-1 opacity-100' : 'opacity-40 group-hover:opacity-100 group-hover:translate-x-1'
                  }`}
                  fill="none" 
                  viewBox="0 0 16 16"
                >
                  <path 
                    d="M6 12L10 8L6 4" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </div>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

// Product Card Component
interface ProductModule {
  name: string;
}

interface ProductCardProps {
  logo: string;
  title: string;
  description: string;
  modules: ProductModule[];
  imageColor: string;
  gradientColor: string;
}

function ProductCard({ logo, title, description, modules, imageColor, gradientColor }: ProductCardProps) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start p-[24px] md:p-[32px] lg:p-[40px] relative rounded-[10px] w-full min-h-[500px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      
      {/* Main Content */}
      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
        {/* Top Section - Logo and Description */}
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
          {/* Logo */}
          <div className="h-[40px] md:h-[45px] lg:h-[50px] relative shrink-0 w-[120px] md:w-[135px] lg:w-[150px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt={title} className="absolute h-[224.14%] left-[-10.97%] max-w-none top-[-50.83%] w-[110.74%]" src={logo} />
            </div>
          </div>
          
          {/* Description */}
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] md:leading-[22px] lg:leading-[23px] min-w-full not-italic relative shrink-0 text-[#3c3c3c] text-[14px] md:text-[15px] lg:text-[16px] w-[min-content] whitespace-pre-wrap">
            {description}
          </p>
        </div>

        {/* Middle Section - Modules (Left) and Image (Right) */}
        <div className="content-stretch flex flex-col lg:flex-row gap-[20px] lg:gap-[10px] items-start relative shrink-0 w-full">
          {/* Core Modules List */}
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px w-full lg:min-w-px relative">
            <p className="font-['Helvetica_Now_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[20px] md:text-[22px] lg:text-[24px] mb-2">
              Core Modules
            </p>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="content-stretch flex gap-[10px] min-h-[40px] md:min-h-[45px] lg:h-[50px] items-center py-[8px] md:py-[9px] lg:py-[10px] relative shrink-0 w-full"
                >
                  {index < modules.length - 1 && (
                    <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid left-0 right-0 bottom-0 pointer-events-none" />
                  )}
                  <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] md:text-[18px] lg:text-[20px] text-black">
                    {module.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Product Image */}
          <div 
            className="h-[240px] md:h-[265px] lg:h-[285px] overflow-clip relative rounded-[10px] shrink-0 w-full lg:w-[400px] xl:w-[400px]"
            style={{ backgroundColor: imageColor }}
          >
            {/* Gradient Overlays */}
            <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-full left-0 w-[53px]" style={{ backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0), ${gradientColor})` }} />
            <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-full left-[106px] w-[53px]" style={{ backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0), ${gradientColor})` }} />
            <div className="absolute bottom-0 flex h-full items-center justify-center left-[53px] w-[53px]">
              <div className="flex-none rotate-180">
                <div className="bg-gradient-to-b from-[rgba(255,255,255,0)] h-full w-[53px]" style={{ backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0), ${gradientColor})` }} />
              </div>
            </div>
            {/* Product Screenshot */}
            <div className="absolute h-[90%] left-[11px] top-[5%] w-[calc(100%-22px)]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rounded-[5px]" src={imgImage75} />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button - Secondary CTA Style */}
      <button className="group relative h-[48px] md:h-[50px] lg:h-[52px] rounded-[80px] px-[20px] md:px-[22px] lg:px-[24px] overflow-hidden backdrop-blur-[10px] border border-[#111] transition-all hover:bg-[#111] cursor-pointer w-full md:w-auto">
        {/* Light Flare Effect */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-plus-lighter pointer-events-none">
          <div className="rotate-[-46.28deg]">
            <div className="h-[30px] w-[152px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                <g filter="url(#filter0_f_product_cta)" style={{ mixBlendMode: "plus-lighter" }}>
                  <ellipse cx="130" cy="69" fill="white" fillOpacity="0.6" rx="76" ry="15" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_product_cta" width="260" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_product_cta" stdDeviation="27" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <span className="font-['Helvetica_Now_Display'] font-medium text-[14px] md:text-[15px] lg:text-[16px] text-[#111] group-hover:text-white relative z-10 transition-colors">
          Explore Product
        </span>
      </button>
    </div>
  );
}

// Products Section
function ProductsSection() {
  const products: ProductCardProps[] = [
    {
      logo: imgImage32,
      title: "Smart Business 24",
      description: "Enterprise Resource Planning (ERP) software that seamlessly integrates all facets of your business operations including accounting, inventory, CRM, HR, and supply chain management into one powerful platform with real-time analytics.",
      modules: [
        { name: "Sales Modules" },
        { name: "Procurement Modules" },
        { name: "Manufacturing Modules" },
        { name: "Financial Modules" },
        { name: "HR Modules" }
      ],
      imageColor: "#4493c5",
      gradientColor: "#4ac4f0"
    },
    {
      logo: imgImage65,
      title: "Hospital Management System",
      description: "Comprehensive hospital management system that integrates patient records, appointment scheduling, billing, pharmacy, and laboratory management into one seamless platform, improving healthcare delivery and operational efficiency.",
      modules: [
        { name: "Hospital Modules" },
        { name: "Additional Hospital Modules" },
        { name: "Administrative Modules" },
        { name: "Accounting & Operational Modules" },
        { name: "Marketing & Communication" }
      ],
      imageColor: "#ee1b24",
      gradientColor: "#ad0808"
    },
    {
      logo: imgImage66,
      title: "University ERP",
      description: "Integrated University Management System that transforms how universities operate with modules for student information, course management, examinations, finance, human resources, and research administration.",
      modules: [
        { name: "Core Academic Modules" },
        { name: "Additional Academic Modules" },
        { name: "Administrative Modules" },
        { name: "Accounting & Operational Modules" },
        { name: "Marketing & Communication Modules" }
      ],
      imageColor: "#0498b5",
      gradientColor: "#4ac4f0"
    },
    {
      logo: imgImage67,
      title: "School Management System",
      description: "Comprehensive school and college management software designed to streamline educational institution operations and enhance learning experiences with features like attendance tracking, grade management, and so on.",
      modules: [
        { name: "Academic Modules" },
        { name: "Administrative Modules" },
        { name: "Accounting & Operational" },
        { name: "Marketing & Communication" }
      ],
      imageColor: "#6f7d86",
      gradientColor: "#8c959a"
    },
    {
      logo: imgImage68,
      title: "Payroll Management System",
      description: "Complete payroll and HR management solution that automates salary calculation, tax deductions, benefits administration, and compliance reporting, ensuring accurate and timely payroll processing.",
      modules: [
        { name: "Payroll Processing" },
        { name: "Tax Management" },
        { name: "Benefits Administration" },
        { name: "Time & Attendance" },
        { name: "Compliance Reporting" }
      ],
      imageColor: "#f6aa2f",
      gradientColor: "#f9ca7e"
    },
    {
      logo: imgImage69,
      title: "Billing System",
      description: "Advanced billing and invoicing system with automated payment processing, subscription management, and financial reporting capabilities designed for businesses of all sizes.",
      modules: [
        { name: "Invoice Management" },
        { name: "Payment Processing" },
        { name: "Subscription Management" },
        { name: "Financial Reports" },
        { name: "Tax Calculation" }
      ],
      imageColor: "#ee2d5b",
      gradientColor: "#f47394"
    },
    {
      logo: imgImage70,
      title: "Call Center Management",
      description: "Comprehensive call center solution with advanced features for call routing, agent management, performance tracking, and customer interaction analytics to optimize customer service operations.",
      modules: [
        { name: "Call Routing" },
        { name: "Agent Dashboard" },
        { name: "Performance Analytics" },
        { name: "CRM Integration" },
        { name: "Quality Monitoring" }
      ],
      imageColor: "#4493c5",
      gradientColor: "#4ac4f0"
    }
  ];

  return (
    <section className="bg-white pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[120px] pb-[60px] md:pb-[80px] lg:pb-[100px] xl:pt-[120px]">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] xl:grid-cols-[340px_1fr] gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* Left Column: Sticky Sidebar */}
          <aside className="hidden lg:block lg:sticky lg:top-[100px] lg:self-start lg:z-20 lg:h-fit lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto">
            <ProductCategoriesSidebar />
          </aside>

          {/* Right Column: Scrollable Product Cards */}
          <div className="flex flex-col gap-8 lg:gap-10">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Component
export function Products() {
  return (
    <div className="w-full bg-white">
      <ProductsHero />
      <TrustSection />
      <ProductsSection />
    </div>
  );
}

export default Products;