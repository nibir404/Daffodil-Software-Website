import { useState } from "react";
import { Link } from "react-router";
import imgSmartBusiness24 from "figma:asset/82fea98771b676968fd7923bf5c8d4b3fee83e3b.png";
import imgSmartHospital from "figma:asset/103c3f953ca2d2b796eaff35c1a88970bf64a633.png";
import imgIUMS from "figma:asset/9bd3b2b073f99b855005837ceef5abf6b0421ef4.png";
import imgSmartEdu from "figma:asset/852433896f6d37b5cf1ca3e1710d06034467c89f.png";
import img1Card from "figma:asset/26e3918204b743d27ab1825b70bda57655f3d24c.png";
import imgVirtualGate from "figma:asset/63e38e685dea7f4fd5a68fc132035ea33a9ec454.png";
import imgStudyAbroad from "figma:asset/b43dc1828ce19a7dc1177d87fb9b8df5f9e107de.png";
import imgScreenshotSB24 from "figma:asset/b9e25d297d7fb4e8e2cf3184ea32529d0e138b30.png";
import imgScreenshotSH from "figma:asset/5c333499f9180027350d2b92cc2260ad9575b289.png";
import imgScreenshotIUMS from "figma:asset/c542578d77a14da9fcd1c8ba602253a8a30ae805.png";
import imgScreenshotSE from "figma:asset/149e53b0d7b32b9e672ed15f489b6b71c522a9b5.png";
import imgScreenshot1C from "figma:asset/a42aa72ca9f4155903794438b10356c8b21c29e1.png";
import imgScreenshotVG from "figma:asset/28a1a7320d5d83c404205043948c37059441468b.png";
import imgScreenshotSA from "figma:asset/0570bb0d3a29d2ca9981d12993efd2d8e453e791.png";

interface ProductItem {
  id: string;
  name: string;
  logo: string;
  description: string;
  modules: string[];
  screenshot: string;
  bgColor: string;
  gradientColor: string;
  hasPage?: boolean; // Add optional flag to indicate if product has a dedicated page
}

const products: ProductItem[] = [
  {
    id: "smart-business-24",
    name: "Smart Business 24",
    logo: imgSmartBusiness24,
    description: "Enterprise Resource Planning (ERP) software that seamlessly integrates all facets of your business operations including accounting, inventory, CRM, HR, and supply chain management into one powerful platform with real-time analytics.",
    modules: ["Sales Modules", "Procurement Modules", "Manufacturing Modules", "Financial Modules", "HR Modules"],
    screenshot: imgScreenshotSB24,
    bgColor: "#4493c5",
    gradientColor: "#4ac4f0",
    hasPage: true, // This product has a dedicated page
  },
  {
    id: "smart-hospital",
    name: "Smart Hospital",
    logo: imgSmartHospital,
    description: "Comprehensive healthcare management system designed for hospitals and clinics. Manage patient records, appointments, billing, inventory, and staff scheduling in one integrated platform.",
    modules: ["Patient Management", "Appointment System", "Billing & Insurance", "Pharmacy Management", "Lab Integration"],
    screenshot: imgScreenshotSH,
    bgColor: "#4493c5",
    gradientColor: "#4ac4f0",
  },
  {
    id: "iums",
    name: "IUMS",
    logo: imgIUMS,
    description: "Integrated University Management System that transforms how universities operate with modules for student information, course management, examinations, finance, human resources, and research administration.",
    modules: ["Core Academic Modules", "Additional Academic Modules", "Administrative Modules", "Accounting & Operational Modules", "Marketing & Communication Modules"],
    screenshot: imgScreenshotIUMS,
    bgColor: "#4493c5",
    gradientColor: "#4ac4f0",
  },
  {
    id: "smart-edu",
    name: "Smart Edu",
    logo: imgSmartEdu,
    description: "Complete education management platform for schools and training centers. Manage classes, track student progress, communicate with parents, and handle administrative tasks efficiently.",
    modules: ["Learning Management", "Attendance Tracking", "Grade Management", "Parent Communication", "Assignment System"],
    screenshot: imgScreenshotSE,
    bgColor: "#4493c5",
    gradientColor: "#4ac4f0",
  },
  {
    id: "1-card",
    name: "1 Card",
    logo: img1Card,
    description: "Unified smart card solution for campuses and corporate environments. Manage payments, access control, attendance, and identity verification through a single card system.",
    modules: ["Payment Gateway", "Access Control", "Attendance System", "ID Management", "Transaction Reporting"],
    screenshot: imgScreenshot1C,
    bgColor: "#4493c5",
    gradientColor: "#4ac4f0",
  },
  {
    id: "virtual-gate",
    name: "Virtual Gate",
    logo: imgVirtualGate,
    description: "All-inclusive virtual event management solution that revolutionizes how events are organized and experienced in the digital space with features for registration, ticketing, virtual booths, networking, and analytics.",
    modules: ["Avatar & Interaction Features", "Virtual Venue & Environment Features", "Engagement & Gamification Features", "Content & Information Sharing", "Supportive Features"],
    screenshot: imgScreenshotVG,
    bgColor: "#4493c5",
    gradientColor: "#4ac4f0",
  },
  {
    id: "study-abroad",
    name: "Study Abroad",
    logo: imgStudyAbroad,
    description: "End-to-end platform for education consultancy and study abroad services. Manage student applications, university placements, visa processing, and documentation in one place.",
    modules: ["Application Management", "University Database", "Document Processing", "Visa Tracking", "Student Portal"],
    screenshot: imgScreenshotSA,
    bgColor: "#4493c5",
    gradientColor: "#4ac4f0",
  },
];

interface ProductsMegamenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProductsMegamenu({ isOpen, onClose }: ProductsMegamenuProps) {
  const [selectedProduct, setSelectedProduct] = useState<string>("smart-business-24");

  if (!isOpen) return null;

  const currentProduct = products.find(prod => prod.id === selectedProduct);

  return (
    <>
      {/* Megamenu */}
      <div className="fixed left-0 right-0 top-20 z-40 pt-1">
        <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
          <div className="bg-[#eef6ff] rounded-[10px] shadow-[0px_0px_40px_0px_rgba(0,0,0,0.15)] overflow-hidden">
            <div className="flex gap-[24px] p-[16px]">
              {/* Left Panel - Products List */}
              <div className="bg-white rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] w-[448px] shrink-0">
                {products.map((product, index) => (
                  <button
                    key={product.id}
                    onMouseEnter={() => setSelectedProduct(product.id)}
                    className={`
                      w-full text-left px-[20px] py-[10px] border-b border-[#dadada] last:border-b-0
                      transition-all duration-200 hover:bg-gradient-to-r hover:from-[#cfffe8] hover:to-white
                      ${selectedProduct === product.id ? 'bg-gradient-to-r from-[#cfffe8] to-white' : ''}
                      ${index === 0 ? 'rounded-t-[10px]' : ''}
                      ${index === products.length - 1 ? 'rounded-b-[10px] border-b-0' : ''}
                    `}
                  >
                    <p className="font-['Helvetica_Now_Display'] text-[36px] text-black leading-normal">
                      {product.name}
                    </p>
                  </button>
                ))}
              </div>

              {/* Right Panel - Product Details & Modules */}
              <div className="flex flex-col justify-between w-[812px] shrink-0">
                {/* Top Content */}
                <div className="flex flex-col gap-[20px]">
                  {/* Product Info */}
                  <div className="flex flex-col gap-[10px]">
                    {/* Logo */}
                    <div className="h-[50px] w-[150px] relative">
                      <img 
                        src={currentProduct?.logo} 
                        alt={currentProduct?.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Description */}
                    <p className="font-['Inter'] font-normal text-[16px] leading-[23px] text-[#3c3c3c]">
                      {currentProduct?.description}
                    </p>
                  </div>

                  {/* Modules & Screenshot */}
                  <div className="flex gap-[10px] items-start">
                    {/* Core Modules */}
                    <div className="flex-1 flex flex-col">
                      <p className="font-['Helvetica_Now_Display'] font-bold text-[24px] text-[#111] leading-normal mb-2">
                        Core Modules
                      </p>
                      <div className="flex flex-col">
                        {currentProduct?.modules.map((module, index) => (
                          <button
                            key={module}
                            className={`
                              flex items-center justify-between py-[10px] h-[50px]
                              border-b border-[rgba(0,0,0,0.1)] transition-all duration-200
                              hover:bg-white hover:px-[20px] hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]
                              ${index === currentProduct.modules.length - 1 ? 'border-b-0' : ''}
                            `}
                          >
                            <p className="font-['Helvetica_Now_Display'] text-[20px] text-black leading-normal">
                              {module}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Screenshot */}
                    <div 
                      className="h-[285px] w-[400px] rounded-[10px] overflow-hidden relative shrink-0"
                      style={{ backgroundColor: currentProduct?.bgColor }}
                    >
                      {/* Gradient Columns */}
                      <div 
                        className="absolute bottom-0 left-0 h-[285px] w-[53px]"
                        style={{ 
                          background: `linear-gradient(to bottom, rgba(255,255,255,0), ${currentProduct?.gradientColor})` 
                        }}
                      />
                      <div 
                        className="absolute bottom-0 left-[53px] h-[285px] w-[53px]"
                        style={{ 
                          background: `linear-gradient(to top, ${currentProduct?.gradientColor}, rgba(255,255,255,0))` 
                        }}
                      />
                      <div 
                        className="absolute bottom-0 left-[106px] h-[285px] w-[53px]"
                        style={{ 
                          background: `linear-gradient(to bottom, rgba(255,255,255,0), ${currentProduct?.gradientColor})` 
                        }}
                      />
                      
                      {/* Product Screenshot */}
                      <div className="absolute left-[11px] top-[15px] w-[378px] h-[255px]">
                        <img 
                          src={currentProduct?.screenshot} 
                          alt={`${currentProduct?.name} Screenshot`}
                          className="w-full h-full object-contain object-left-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Explore Product CTA - Sticks to Bottom */}
                {currentProduct?.hasPage ? (
                  <Link to={`/products/${selectedProduct}`} onClick={onClose}>
                    <button className="backdrop-blur-[10px] h-[52px] rounded-[80px] border border-[#111] px-[24px] py-[6px] relative overflow-hidden group hover:bg-black transition-colors duration-300 self-start">
                      {/* Glow Effect */}
                      <div className="absolute left-[calc(50%-63.37px)] top-[-27.29px] w-[126.735px] h-[130.588px] flex items-center justify-center mix-blend-plus-lighter pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="rotate-[-46.28deg]">
                          <div className="w-[152px] h-[30px]">
                            <div className="absolute inset-[-180%_-35.53%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                                <g filter="url(#filter0_f_products_cta)" style={{ mixBlendMode: "plus-lighter" }}>
                                  <ellipse cx="130" cy="69" fill="white" fillOpacity="0.6" rx="76" ry="15" />
                                </g>
                                <defs>
                                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_products_cta" width="260" x="0" y="0">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                    <feGaussianBlur result="effect1_foregroundBlur_products_cta" stdDeviation="27" />
                                  </filter>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <span className="font-['Helvetica_Now_Display'] font-medium text-[16px] text-[#111] leading-normal relative z-10 group-hover:text-white transition-colors duration-300">
                        Explore Product
                      </span>
                    </button>
                  </Link>
                ) : (
                  <button 
                    className="backdrop-blur-[10px] h-[52px] rounded-[80px] border border-[#111] px-[24px] py-[6px] relative overflow-hidden group hover:bg-gray-200 transition-colors duration-300 self-start cursor-not-allowed opacity-60"
                    disabled
                  >
                    <span className="font-['Helvetica_Now_Display'] font-medium text-[16px] text-[#111] leading-normal relative z-10">
                      Coming Soon
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}