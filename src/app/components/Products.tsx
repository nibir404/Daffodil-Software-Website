import imgRectangle662 from "figma:asset/ff46b51640dd59c94f9646f1ca134743027730cb.png";
import imgRectangle663 from "figma:asset/d965d995d3dd93ea32c5cdb198f31c04066d1aad.png";
import imgRectangle664 from "figma:asset/77fb045f90fcd7d73bbb4f4889f140000cf2d634.png";
import imgRectangle665 from "figma:asset/d858ea1547aa7f7b48680b0265c29cddb6c3f3e1.png";
import imgRectangle666 from "figma:asset/fcface7d4f9fac4267c6d177316c16720ad1d8cc.png";
import imgRectangle667 from "figma:asset/8be1977a91719f558694d1f0ebb94a2ad46c6709.png";
import { ArrowRight } from "lucide-react";

export function Products() {
  const products = [
    {
      image: imgRectangle662,
      title: "Integrated University Management System (IUMS)",
      description: "A comprehensive ERP solution designed for higher education institutions to automate academic and administrative processes from admission to alumni management."
    },
    {
      image: imgRectangle663,
      title: "Unified Payment & Access (1Card)",
      description: "A centralized smart card ecosystem managing secure payments, access control, and identity verification for campuses and corporate environments."
    },
    {
      image: imgRectangle664,
      title: "Virtual Event Platform (Virtual Gate)",
      description: "An immersive virtual venue for hosting global conferences, exhibitions, and networking events with real-time interaction capabilities."
    },
    {
      image: imgRectangle665,
      title: "Central AI & Chatbot Engine",
      description: "An advanced AI infrastructure delivering custom conversational agents, predictive analytics, and automated workflow integration for enterprise."
    },
    {
      image: imgRectangle666,
      title: "Daffodil Ecommerce",
      description: "A scalable, single-vendor ecommerce solution engineered for high-growth retail businesses with robust inventory and order management."
    },
    {
      image: imgRectangle667,
      title: "Blockchain Verification System",
      description: "Tamper-proof digital credential issuance and verification system secured by blockchain technology for academic and professional certificates."
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px]">
        {/* Section Header */}
        <div className="mb-16 max-w-[900px]">
          <h2 className="font-['Helvetica_Now_Display'] font-medium text-[48px] text-[#111] mb-4">
            Future-Ready Products
          </h2>
          <p className="font-['Inter'] text-[18px] text-[#3c3c3c] leading-[30px]">
            Beyond services, we build and evolve digital products designed to meet tomorrow's challenges—scalable, secure, and continuously improving.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-white border border-[rgba(0,0,0,0.1)] rounded-[16px] overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative h-[240px] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-['Helvetica_Now_Display'] font-medium text-[20px] text-[#111] mb-3 leading-tight">
                  {product.title}
                </h3>
                <p className="font-['Inter'] text-[14px] text-[#3c3c3c] leading-[22px] mb-4">
                  {product.description}
                </p>
                <a 
                  href="#"
                  className="inline-flex items-center gap-2 font-['Inter'] text-[14px] text-[#01e067] hover:gap-3 transition-all"
                >
                  View Details
                  <ArrowRight className="size-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
