import svgPaths from "../../assets/svgs/svg-ft5evtsgo9";
import { ArrowRight } from "lucide-react";

interface Industry {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

export function IndustriesWeServeSection() {
  const industries: Industry[] = [
    {
      title: "Education ERP & Management Systems",
      description: "Academic, administrative, and learning systems built for scale, data accuracy, and operational efficiency.",
      icon: <EducationIcon />,
      tags: ["SIS", "LMS", "Academic ERP"],
    },
    {
      title: "Healthcare Software Solutions",
      description: "Secure, compliant digital systems supporting hospitals, clinics, and healthcare operations.",
      icon: <HealthcareIcon />,
      tags: ["HMS", "Clinic Management", "Telemedicine"],
    },
    {
      title: "Retail & E-Commerce Software",
      description: "Reliable, auditable platforms designed for governance, transparency, and nationwide deployment.",
      icon: <RetailIcon />,
      tags: ["Inventory", "POS", "CRM"],
    },
    {
      title: "Manufacturing Software Solutions",
      description: "ERP, workflow, and analytics systems tailored to complex organizational structures.",
      icon: <ManufacturingIcon />,
      tags: ["Production Planning", "Procurement", "ERP"],
    },
    {
      title: "Real Estate Software",
      description: "Commerce, inventory, and customer experience solutions optimized for performance and growth.",
      icon: <RealEstateIcon />,
      tags: ["Tenant Management", "Billing", "Maintenance"],
    },
    {
      title: "Finance Management",
      description: "Next-gen finance and banking systems that move money securely, manage risk intelligently, and scale effortlessly.",
      icon: <FinanceIcon />,
      tags: ["Payroll", "Accounting", "Bank ERP"],
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        {/* Section Header */}
        <div className="flex flex-col gap-6 items-center text-center mb-12 lg:mb-16">
          <h2 className="font-['Helvetica_Now_Display',sans-serif] font-medium text-[48px] lg:text-[64px] leading-[1.2] text-[#111]">
            Industries We Serve
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-base leading-[30px] text-[#3c3c3c] max-w-[720px]">
            We understand that every industry operates differently. Our solutions are tailored to meet sector-specific challenges and compliance needs.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <div className="group bg-white rounded-[10px] border border-[rgba(0,0,0,0.1)] p-8 transition-all duration-300 hover:border-[rgba(44,246,152,0.75)] hover:shadow-lg relative overflow-hidden">
      {/* Icon */}
      <div className="bg-gradient-to-b from-[#2CF698] to-[#4AC4F0] rounded-[10px] size-[80px] flex items-center justify-center mb-6">
        {industry.icon}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <h3 className="font-['Helvetica_Now_Display',sans-serif] font-medium text-xl leading-normal text-[#111]">
          {industry.title}
        </h3>
        <p className="font-['Inter',sans-serif] font-normal text-sm leading-[22px] text-[#3c3c3c]">
          {industry.description}
        </p>

        {/* Tags - visible on hover */}
        <div className="flex items-center justify-between mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2 flex-wrap">
            {industry.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-white border border-[rgba(0,0,0,0.1)] rounded-full px-3 py-1 text-sm font-['Inter',sans-serif] text-[#3c3c3c]"
              >
                {tag}
              </span>
            ))}
          </div>
          <ArrowRight className="size-6 text-[#111] shrink-0 ml-2" />
        </div>
      </div>
    </div>
  );
}

// Icon Components
function EducationIcon() {
  return (
    <svg className="size-9" fill="none" viewBox="0 0 36 36">
      <path d={svgPaths.p6289700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p259b5900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p15fab0d0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function HealthcareIcon() {
  return (
    <svg className="size-9" fill="none" viewBox="0 0 36 36">
      <path d={svgPaths.peb9b400} stroke="white" strokeLinecap="round" strokeWidth="2" />
      <path d={svgPaths.p2076be00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p22d978c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function RetailIcon() {
  return (
    <svg className="size-9" fill="none" viewBox="0 0 36 36">
      <path d={svgPaths.p340faa00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p185b2c80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M9 18L12 19.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M25.5 6L10.5 13.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function ManufacturingIcon() {
  return (
    <svg className="size-9" fill="none" viewBox="0 0 36 36">
      <path d={svgPaths.p1cc37eb0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p2a84e900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p2c09f900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p24534600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M18 9H13.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M22.5 27H18" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M27 18V13.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M9 22.5V18" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function RealEstateIcon() {
  return (
    <svg className="size-9" fill="none" viewBox="0 0 36 36">
      <path d={svgPaths.p23583e00} stroke="white" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p5aec700} stroke="white" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 9H15M12 13.5H15M12 18H15" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p2770bfe0} stroke="white" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function FinanceIcon() {
  return (
    <svg className="size-9" fill="none" viewBox="0 0 36 36">
      <path d={svgPaths.p24d4c900} stroke="white" strokeLinecap="round" strokeWidth="2" />
      <path d={svgPaths.p35edcf00} stroke="white" strokeWidth="2" />
      <path d="M6 33H30" stroke="white" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}
