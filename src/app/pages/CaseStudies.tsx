import { Link } from "react-router";
import imgRectangle694 from "figma:asset/2bbed7b9aefb2560383a225effcab3706e6f4e96.png";
import imgRectangle695 from "figma:asset/68a19bf652cfa6adebd1002335c2aed29ed05709.png";
import imgRectangle696 from "figma:asset/8f81926c5c669b3a2c3996794f3d06532cfb4a1c.png";
import imgRectangle697 from "figma:asset/3faf2925f62a0636744277dd495c7dbc40efda7f.png";
import imgRectangle698 from "figma:asset/8ba1ff5f04dae926ead6b1f31702c5a441a88e82.png";
import imgRectangle699 from "figma:asset/2ec3445415ad4e49c9b2846cad47e9bf6abde958.png";
import imgRectangle700 from "figma:asset/2d1b3acf24bdc2c35328e3002a511525d1a9958b.png";
import imgRectangle701 from "figma:asset/b6dcbbe25d4251535502a3f9814836b7882bd7a8.png";
// Additional case study images
import imgSwapped from "figma:asset/733309fbe146b9b595fdbf3a58dad85114995b59.png";
import imgClario from "figma:asset/12e9cc6531aeb004b03ba228ef55e1451f26ed6e.png";
import imgJaneDoe from "figma:asset/2b2332f909ef9e953d184b3b8b0ab32638ec61a6.png";
import imgDemioAdmin from "figma:asset/24010e964b97ecc4b8f1bb6b839b4e4183186c69.png";
import imgWorkquiet from "figma:asset/27102d6509bbe4cab7db27b2b89d264b62699c3b.png";
import imgExtendedScreen from "figma:asset/381a3d61dd95e3c859bebc4817b937ebd5e5a4ec.png";
import imgQuartile from "figma:asset/0e80fec8d2ba290dee273b54b815368e795db68f.png";
import imgDashboardDark from "figma:asset/7eec700095a5801a8d36c125093feb68e76824ef.png";
// Figma imported components
import Scroller from "../../imports/Scroller-168-226";

// Case Study Data Structure
interface CaseStudy {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    image: imgRectangle694,
    title: "Bangladesh National Cadet Core (BNCC)",
    description: "Digital transformation of cadet management system with training records, attendance tracking, and reporting.",
    tags: ["Government", "Web Portal"]
  },
  {
    id: 2,
    image: imgRectangle695,
    title: "Bangladesh University of Textiles (BUTEX)",
    description: "Integrated university management system with specialized modules for textile education.",
    tags: ["Education", "Web Portal"]
  },
  {
    id: 3,
    image: imgRectangle696,
    title: "BCDC - Bakhtunnessa Chowdhury Diabetes Centre",
    description: "Comprehensive Hospital Management System for Bcdc to streamline and improve their Hospital's operations.",
    tags: ["Healthcare", "ERP"]
  },
  {
    id: 4,
    image: imgRectangle697,
    title: "East Coast Group",
    description: "Complete HR Management system for the East Coast Group, including inventory management, billing, and other module.",
    tags: ["Corporate", "ERP"]
  },
  {
    id: 5,
    image: imgSwapped,
    title: "Swapped - Digital Trading Platform",
    description: "NFT and cryptocurrency trading platform with secure wallet integration and real-time market analytics.",
    tags: ["FinTech", "Blockchain"]
  },
  {
    id: 6,
    image: imgClario,
    title: "Clario - Intelligent Sales Platform",
    description: "AI-powered sales automation platform with predictive analytics, smart automation, and task management.",
    tags: ["SaaS", "AI"]
  },
  {
    id: 7,
    image: imgJaneDoe,
    title: "Xlonia - UX/UI Design Portfolio",
    description: "Modern portfolio platform for creative professionals with project showcase and client management.",
    tags: ["Design", "Portfolio"]
  },
  {
    id: 8,
    image: imgDemioAdmin,
    title: "DemioAdmin - CRM Solution",
    description: "Customer data management platform that transforms business intelligence into sales success.",
    tags: ["CRM", "Enterprise"]
  },
  {
    id: 9,
    image: imgWorkquiet,
    title: "Workquiet - Productivity Platform",
    description: "Focus-driven workspace management tool to eliminate distractions and boost productivity.",
    tags: ["Productivity", "SaaS"]
  },
  {
    id: 10,
    image: imgExtendedScreen,
    title: "Mockline - Professional Mockup Service",
    description: "Extended screen mockup generator for presenting digital designs with professional quality visuals.",
    tags: ["Design Tools", "Web App"]
  },
  {
    id: 11,
    image: imgQuartile,
    title: "Quartile Analytics Dashboard",
    description: "Advanced analytics platform providing real-time insights and data visualization for business intelligence.",
    tags: ["Analytics", "Dashboard"]
  },
  {
    id: 12,
    image: imgDashboardDark,
    title: "Central ROI - Business Intelligence",
    description: "Comprehensive business management dashboard with sales tracking, vendor management, and financial insights.",
    tags: ["Business", "Analytics"]
  }
];

export function CaseStudies() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 xl:px-[100px] py-16 md:py-20 lg:py-24 max-w-[1520px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Hero Text */}
          <div className="flex-1">
            <h1 className="font-['Helvetica_Now_Display',sans-serif] font-medium text-[48px] md:text-[64px] lg:text-[80px] leading-[1.1] text-[#111]">
              Real Projects.<br />Real Outcomes.
            </h1>
            <p className="font-['Inter',sans-serif] font-normal text-base leading-[30px] text-[#3c3c3c] mt-6 max-w-[600px]">
              Explore a collection of real-world implementations where complex business challenges were translated into robust, scalable digital products. Each case study highlights our approach, the tech stack used, and the measurable impact delivered to our clients.
            </p>
          </div>

          {/* Daffodil Logo Badge */}
          <div className="flex-shrink-0">
            <Scroller />
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-6 md:px-12 lg:px-24 xl:px-[100px] pb-20 md:pb-24 lg:pb-32 max-w-[1520px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </section>
    </div>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link to={`/case-studies/${study.id}`} className="group cursor-pointer block">
      {/* Image Container */}
      <div className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-[10px] overflow-hidden mb-4 border-2 border-[rgba(0,0,0,0.2)]">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        <h3 className="font-['Helvetica_Now_Display',sans-serif] font-bold text-[20px] md:text-[24px] leading-[1.2] text-[#111] group-hover:text-[#01e067] transition-colors">
          {study.title}
        </h3>
        
        <p className="font-['Helvetica_Now_Display',sans-serif] font-normal text-[14px] md:text-[16px] leading-[1.5] text-[#3c3c3c]">
          {study.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag, index) => (
            <span
              key={index}
              className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] px-3 py-1.5 rounded-[4px] border border-[rgba(255,255,255,0.1)] font-['Inter',sans-serif] font-bold text-[14px] text-[#111]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default CaseStudies;