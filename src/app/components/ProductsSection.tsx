import svgPaths from "../../assets/svgs/svg-zcwyvrsptw";
import imgRectangle670 from "figma:asset/10d143d70f1b9dfd8eb8df14c6467d5846799931.png";
import imgRectangle671 from "figma:asset/d26c9f0b5b44c56e77eea09a8b674b3bc956a70a.png";
import imgRectangle672 from "figma:asset/fba859a23acab86013ea073775377178ad4ebe4f.png";
import imgRectangle673 from "figma:asset/68bd25f7fc1d615fe159732faa55adb4a9ccd973.png";
import imgRectangle674 from "figma:asset/02a8e5c68bbf3a41ccdd0dc482d659ec18c2f88a.png";
import imgRectangle675 from "figma:asset/7db6ad90e3614fee6606132a1000ccc046235670.png";
import imgProduct1 from "figma:asset/251924140614b007a92b7197a5b4d8c4c4359b79.png";
import imgProduct2 from "figma:asset/a8b1e93e0aef5169b109c3e6bf0071c80d154160.png";
import imgProduct3 from "figma:asset/f953e5c9524a18eb1f613a1c25382b02628adba3.png";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Integrated University Management System (IUMS)",
    description: "A comprehensive ERP solution designed for higher education institutions to automate academic and administrative processes from admission to alumni management.",
    image: imgProduct1,
  },
  {
    id: 2,
    title: "Unified Payment & Access (1 Card)",
    description: "A centralized smart card ecosystem managing secure payments, access control, and identity verification for campuses and corporate environments.",
    image: imgProduct2,
  },
  {
    id: 3,
    title: "Virtual Event Platform (Virtual Gate)",
    description: "An immersive virtual venue for hosting global conferences, exhibitions, and networking events with real-time interaction capabilities.",
    image: imgProduct3,
  },
  {
    id: 4,
    title: "Central AI & Chatbot Engine",
    description: "An advanced AI infrastructure delivering custom conversational agents, predictive analytics, and automated workflow integration for enterprise.",
    image: imgRectangle673,
  },
  {
    id: 5,
    title: "Daffodil Ecommerce",
    description: "A scalable, single-vendor ecommerce solution engineered for high-growth retail businesses with robust inventory and order management.",
    image: imgRectangle674,
  },
  {
    id: 6,
    title: "Blockchain Verification System",
    description: "Tamper-proof digital credential issuance and verification system secured by blockchain technology for academic and professional certificates.",
    image: imgRectangle675,
  },
];

function SectionHeader() {
  return (
    <div className="flex flex-col gap-4 items-center text-center max-w-[656px] mx-auto mb-[60px]">
      <h2 className="font-['Helvetica_Now_Display'] font-medium text-[64px] leading-[75px] text-[#111]">
        Future-Ready Products
      </h2>
      <p className="font-['Inter'] font-normal text-[16px] leading-[30px] text-[#3c3c3c]">
        Beyond services, we build and evolve digital products designed to meet tomorrow's challenges scalable, secure, and continuously improving.
      </p>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 16 16">
      <path 
        d="M12.333 8H3.33301" 
        stroke="#111111" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.5" 
      />
      <path 
        d={svgPaths.p638bf80} 
        stroke="#111111" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.5" 
      />
    </svg>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] overflow-hidden h-[503px] flex flex-col group hover:shadow-lg transition-shadow duration-300 relative">
      {/* Card Content */}
      <div className="flex flex-col gap-4 p-5 h-full">
        {/* Product Image */}
        <div className="h-[200px] overflow-hidden rounded-[10px] relative">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="font-['Helvetica_Now_Display'] font-medium text-[24px] leading-[30px] text-[#111]">
            {product.title}
          </h3>
          <p className="font-['Inter'] font-normal text-[16px] leading-[30px] text-[#3c3c3c]">
            {product.description}
          </p>
        </div>

        {/* View Details Button */}
        <button className="flex gap-[10px] items-center py-[10px] group/button hover:gap-3 transition-all duration-300">
          <span className="font-['Helvetica_Now_Display'] font-medium text-[16px] leading-normal text-[#111]">
            View Details
          </span>
          <ArrowRightIcon />
        </button>
      </div>

      {/* Green Glow Effect at Bottom */}
      <div className="absolute left-[-34px] top-[679px] w-[470px] h-[144px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-[-277.78%_-85.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1270 944">
            <g filter="url(#filter0_f_products_glow)">
              <ellipse cx="635" cy="472" fill="#61FAA3" rx="235" ry="72" />
            </g>
            <defs>
              <filter 
                colorInterpolationFilters="sRGB" 
                filterUnits="userSpaceOnUse" 
                height="944" 
                id="filter0_f_products_glow" 
                width="1270" 
                x="0" 
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_products_glow" stdDeviation="200" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function ProductsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="px-6 md:px-12 lg:px-24 xl:px-[100px] relative z-10">
        <div className="max-w-[1520px] mx-auto">
          {/* Section Header */}
          <SectionHeader />

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
