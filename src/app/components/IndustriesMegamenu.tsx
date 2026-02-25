import { useState } from "react";
import { Link } from "react-router";
import imgUniversity from "figma:asset/dc0280410ffb7145ca70b042e850c9f3f8acb280.png";
import imgHealthcare from "figma:asset/e1baea158f53cff8efbdf7c5b56f50826b035830.png";
import imgRetail from "figma:asset/bff8417ba417bc04e74df0c216af646259ad3bd9.png";
import imgManufacturing from "figma:asset/c942611951fa3e51bd450d1e98ccb3a46f671a00.png";
import imgRealEstate from "figma:asset/1c0e0ab1c01bd382b9f43e5008fe83cf7e59007f.png";

interface IndustryItem {
  id: string;
  name: string;
  image: string;
  link: string;
}

const industries: IndustryItem[] = [
  { 
    id: "university-erp", 
    name: "University & ERP Management Systems",
    image: imgUniversity,
    link: "/industries/university-erp"
  },
  { 
    id: "healthcare", 
    name: "Healthcare Software Solutions",
    image: imgHealthcare,
    link: "#"
  },
  { 
    id: "retail", 
    name: "Retail & E-Commerce Software",
    image: imgRetail,
    link: "#"
  },
  { 
    id: "manufacturing", 
    name: "Manufacturing Software Solutions",
    image: imgManufacturing,
    link: "#"
  },
  { 
    id: "real-estate", 
    name: "Real Estate Software",
    image: imgRealEstate,
    link: "#"
  },
];

interface IndustriesMegamenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function IndustriesMegamenu({ isOpen, onClose }: IndustriesMegamenuProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("university-erp");

  if (!isOpen) return null;

  const currentIndustry = industries.find(ind => ind.id === selectedIndustry);

  return (
    <>
      {/* Megamenu */}
      <div className="fixed left-0 right-0 top-20 z-40 pt-1">
        <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
          <div className="bg-white rounded-[10px] shadow-[0px_0px_40px_0px_rgba(0,0,0,0.15)] overflow-hidden">
            <div className="flex gap-[24px] p-[24px]">
              {/* Left Panel - Industries List */}
              <div className="flex flex-col flex-1">
                {industries.map((industry, index) => (
                  <Link
                    key={industry.id}
                    to={industry.link}
                    onClick={onClose}
                    onMouseEnter={() => setSelectedIndustry(industry.id)}
                    className={`
                      w-full text-left px-[10px] py-[20px] border-b border-[#dadada] last:border-b-0
                      transition-all duration-200 hover:bg-gradient-to-r hover:from-[#cfffe8] hover:to-white
                      ${selectedIndustry === industry.id ? 'bg-gradient-to-r from-[#cfffe8] to-white' : ''}
                    `}
                  >
                    <p className="font-['Helvetica_Now_Display'] text-[36px] text-black leading-[50px]">
                      {industry.name}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Right Panel - Image */}
              <div className="relative shrink-0 w-[600px] h-[450px] rounded-[10px] overflow-hidden bg-[#061436]">
                <img 
                  src={currentIndustry?.image} 
                  alt={currentIndustry?.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}