import { ContactFormCTA } from "../components/ContactFormCTA";
import imgImage22 from "figma:asset/b3a76efb62e40b6c12695c1680be963ca0a490ce.png";
import imgImage23 from "figma:asset/d41a3add220587a395706f0474ccd7f35387d5be.png";
import imgImage25 from "figma:asset/dbd26c38ee66f78dc4c9d30e7c592b4d8058da90.png";
import imgImage24 from "figma:asset/df9b1bedaf9596f52c0e1727e8e704d69d1f1cdc.png";
import imgImage26 from "figma:asset/4fb591e6c3581ef7cd73e2bf37b735a08fc775ff.png";
import imgImage27 from "figma:asset/752f360f2139b21a38c76693f781902e721a41ba.png";
import imgImage28 from "figma:asset/4e76b2d022abf7fe71dfa0196a6d8c5b17f75a0e.png";
import imgImage30 from "figma:asset/6cdc7cc1463db8ebaa820fdcad43a91fb141bb9c.png";
import imgImage1 from "figma:asset/9e79658364ced9f6944de6225d3b0e0e50b5ad3b.png";
import imgImage35 from "figma:asset/2516de018ffa3072ce276d1f94f901c9c0bcc638.png";
import imgImage36 from "figma:asset/aea28bb90ff2bde067f020cdb22dd8d1bb0111e1.png";
import imgImage37 from "figma:asset/a66a1d2c754f12d2b86b1f4f9c26f0df997d2895.png";
import imgImage73 from "figma:asset/0312bcea605fc90dfdf2e50e657b2cd982039955.png";
import imgDeshiJamar from "figma:asset/871c154f69889e15b43fb93c8070b6d9a576ac9c.png";
import imgEastCoast from "figma:asset/a5c2b13c70fd5d181d101755999a189183a22bb4.png";
import imgGmeGroup from "figma:asset/e19895d50fa7021662329baf515f32168351767e.png";
import imgKurmitola from "figma:asset/5a953beda881a4340ca9a7d70e4dc6954c4db25b.png";
import imgComilla from "figma:asset/65858cb6ae73a46e49bd05c666de86628d4b0d50.png";
import imgDaffodilComputers from "figma:asset/c21810431d01748d0c7cc59913c98bd2b59ba95e.png";
import imgHokseed from "figma:asset/edadc830852b6f7bb1a0533cb9600a6f136c5e81.png";
import imgCardioCare from "figma:asset/68c265633cca5a94c6ee7f27899077a253634d30.png";
import imgRectangle698 from "figma:asset/20eeed601e2ef036cc8d70161c230af2ca8cb61c.png";
import svgPaths from "@svgs/svg-bncqmqs37d";
import svgPathsOffices from "@svgs/svg-4ssu756qf4";

// Trusted By Section - From Single Service Page
function TrustedBySection() {
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
    <section className="bg-white py-12 md:py-16 lg:py-20 relative" style={{ position: 'relative' }}>
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px] relative">
        {/* Trust Badges */}
        <div className="text-center mb-10 md:mb-12">
          <p className="font-['Inter'] text-[18px] md:text-[24px] lg:text-[30px] text-[#3c3c3c] leading-[1.4] md:leading-[1.5] lg:leading-[40px]">
            Trusted by <span className="font-semibold text-[#111]">100+</span> organizations across{" "}
            <span className="font-semibold text-[#111]">Bangladesh</span>,{" "}
            <span className="font-semibold text-[#111]">USA</span>,{" "}
            <span className="font-semibold text-[#111]">UAE</span>, and{" "}
            <span className="font-semibold text-[#111]">Europe</span> for
          </p>
          <p className="font-['Inter'] text-[18px] md:text-[24px] lg:text-[30px] text-[#3c3c3c] leading-[1.4] md:leading-[1.5] lg:leading-[40px]">
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

// Contact Info with Map Section - From Figma
function ContactInfoWithMapSection() {
  return (
    <section className="w-full bg-white py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-[40px] items-center px-6 md:px-12 lg:px-24 xl:px-[100px]">
          {/* Left Side - Contact Information */}
          <div className="flex-1 flex flex-col gap-[60px] w-full lg:w-auto">
            {/* Email */}
            <div className="flex flex-col gap-[24px]">
              <p className="font-['Inter'] text-[18px] md:text-[20px] text-[#3c3c3c] leading-[1.5]">
                Send Business Email
              </p>
              <p className="font-['Helvetica_Now_Display'] font-medium text-[36px] md:text-[42px] lg:text-[48px] text-[#111] leading-[1.35]">
                software@daffodil-bd.com
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-[24px]">
              <p className="font-['Inter'] text-[18px] md:text-[20px] text-[#3c3c3c] leading-[1.5]">
                For urgent or time-sensitive discussions, call us at
              </p>
              <div className="font-['Helvetica_Now_Display'] font-medium text-[36px] md:text-[42px] lg:text-[48px] text-[#111] leading-[1.35]">
                <p className="mb-0">+88 02 9116600,</p>
                <p>+8801713493026</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-[24px]">
              <p className="font-['Inter'] text-[18px] md:text-[20px] text-[#3c3c3c] leading-[1.5]">
                For in-person meeting visit us at
              </p>
              <p className="font-['Helvetica_Now_Display'] font-medium text-[36px] md:text-[42px] lg:text-[48px] text-[#111] leading-[1.35] max-w-[697px]">
                Daffodil Tower, 102/1, Shukrabad, Mirpur Road, Dhaka-1207, Bangladesh
              </p>
            </div>
          </div>

          {/* Right Side - Map Image */}
          <div className="w-full lg:w-[983px] h-[500px] md:h-[700px] lg:h-[912px] flex-shrink-0">
            <img 
              src={imgRectangle698} 
              alt="Daffodil Software Location Map" 
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Global Offices Section
function GlobalOfficesSection() {
  const offices = [
    {
      title: "Headquarter",
      location: "Dhaka, Bangladesh",
      address: "Daffodil Tower, 102/1, Shukrabad, Mirpur Road, Dhaka-1207, Bangladesh",
      phone: "+88 02 9116600, +8801713493026",
      email: "software@daffodil-bd.com"
    },
    {
      title: "Asia Pacific Office",
      location: "Kuala Lumpur, Malaysia",
      address: "19A-25-3A(Business Suit), Wisma UOA-1, No. 19, Jalan Pinang 50450, Kuala Lumpur, Malaysia",
      phone: null,
      email: null
    },
    {
      title: "Middle East Office",
      location: "Dubai, UAE",
      address: "541A, Office Tower, Al Ghurair Center, Al Rigga Road, Deira, Dubai, UAE",
      phone: null,
      email: null
    },
    {
      title: "North America Office",
      location: "New York, USA",
      address: "64-01 35 Ave, Queens, NY 11377, New York, USA",
      phone: null,
      email: null
    }
  ];

  return (
    <section className="w-full bg-[#f5f5f7] py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        {/* Section Header */}
        <div className="text-center mb-[40px] md:mb-[60px]">
          <h2 className="font-['Helvetica_Now_Display'] font-medium text-[48px] md:text-[56px] lg:text-[64px] text-[#111] leading-[1.2] mb-[16px] md:mb-[24px]">
            Our Global Offices
          </h2>
          <p className="font-['Inter'] text-[14px] md:text-[16px] text-[#111] leading-[1.875]">
            We're available across different time zones to serve you better
          </p>
        </div>

        {/* Offices List */}
        <div className="flex flex-col gap-[40px]">
          {offices.map((office, index) => (
            <div 
              key={index}
              className="bg-white rounded-[10px] border border-[rgba(0,0,0,0.1)] px-[16px] py-[20px] md:px-[24px] md:py-[24px] lg:px-[32px] lg:py-[28px]"
            >
              <div className="flex flex-col gap-[24px]">
                {/* Office Title and Location */}
                <div className="flex flex-col gap-[10px]">
                  <h3 className="font-['Helvetica_Now_Display'] font-medium text-[28px] md:text-[32px] lg:text-[36px] text-[#111] leading-[1.25]">
                    {office.title}
                  </h3>
                  <p className="font-['Inter'] text-[20px] md:text-[22px] lg:text-[24px] text-[#3c3c3c] leading-[1.25]">
                    {office.location}
                  </p>
                </div>

                {/* Contact Details */}
                <div className="flex flex-col gap-[10px]">
                  {/* Address */}
                  <div className="flex gap-[10px] items-start">
                    <div className="flex-shrink-0 mt-[5px]">
                      <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                        <path d={svgPathsOffices.p1b66e780} stroke="#141B34" strokeLinecap="round" strokeWidth="1.5" />
                        <path d={svgPathsOffices.p32bcd300} stroke="#141B34" strokeWidth="1.5" />
                        <path d={svgPathsOffices.p73df900} stroke="#141B34" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <p className="font-['Inter'] font-medium text-[18px] md:text-[20px] text-[#3c3c3c] leading-[1.5] flex-1">
                      {office.address}
                    </p>
                  </div>

                  {/* Phone - Only for Headquarter */}
                  {office.phone && (
                    <div className="flex gap-[10px] items-center">
                      <div className="flex-shrink-0">
                        <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                          <path d={svgPathsOffices.pd1bb600} stroke="#141B34" strokeLinecap="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <p className="font-['Inter'] font-medium text-[18px] md:text-[20px] text-[#3c3c3c] leading-[1.5]">
                        {office.phone}
                      </p>
                    </div>
                  )}

                  {/* Email - Only for Headquarter */}
                  {office.email && (
                    <div className="flex gap-[10px] items-center">
                      <div className="flex-shrink-0">
                        <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                          <path d={svgPathsOffices.p284e9680} stroke="#141B34" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPathsOffices.p2494fb00} stroke="#141B34" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <p className="font-['Inter'] font-medium text-[18px] md:text-[20px] text-[#3c3c3c] leading-[1.5]">
                        {office.email}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Methods Section
function ContactMethodsSection() {
  return (
    null
  );
}

// Footer Section
function FooterSection() {
  return (
    null
  );
}

// Main Contact Page Component
export function Contact() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section - Contact Form CTA */}
      <ContactFormCTA />
      
      {/* Trusted By Section */}
      <TrustedBySection />
      
      {/* Contact Info with Map Section */}
      <ContactInfoWithMapSection />
      
      {/* Global Offices Section */}
      <GlobalOfficesSection />
      
      {/* Contact Methods Section */}
      <ContactMethodsSection />
      
      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}

export default Contact;
