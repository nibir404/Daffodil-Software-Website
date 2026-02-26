import { PrimaryCTA } from "../components/CTAButtons";
import { IndustriesWeServeSection } from "../components/IndustriesWeServeSection";
import CTAFormContent from "../../imports/Frame2085663518";
import imgCtaBackground from "figma:asset/90090fd64c815b759af9b862ff05a9433d159c53.png";

// Hero Section
function IndustriesHero() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden flex items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2847] via-[#233256] to-[#2c4a6d]" />
      
      {/* Decorative gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(44,196,240,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(44,246,152,0.1),transparent_60%)]" />
      
      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 xl:px-[100px] py-16 md:py-20 lg:py-24">
        <div className="max-w-[1520px] mx-auto">
          <div className="max-w-[900px] mx-auto text-center flex flex-col gap-6 md:gap-8">
            {/* Title */}
            <h1 className="font-['Helvetica_Now_Display'] font-medium text-white text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-[1.2]">
              Industries We Build<br />Software For
            </h1>
            
            {/* Description */}
            <p className="font-['Inter'] text-white/90 text-base md:text-lg leading-[1.8] max-w-[720px] mx-auto">
              We collaborate with organizations across diverse sectors, delivering software solutions shaped by real operational needs, regulatory environments, and user demands. This page gives a quick overview of the industries we serve.
            </p>

            {/* CTA Button */}
            <div className="mt-4 flex justify-center">
              <PrimaryCTA text="Start a Project" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Form Section
function CTAFormSection() {
  return (
    <section className="relative w-full min-h-[872px] bg-gradient-to-b from-white to-[#c4eeda] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={imgCtaBackground} 
          alt="CTA Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px] py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <CTAFormContent />
      </div>
    </section>
  );
}

// Main Component
export function Industries() {
  return (
    <div className="w-full bg-white">
      <IndustriesHero />
      <IndustriesWeServeSection />
      <CTAFormSection />
    </div>
  );
}

export default Industries;
