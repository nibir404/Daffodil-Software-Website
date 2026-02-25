import CTAFormContent from "../../imports/Frame2085663518";
import imgCtaBackground from "figma:asset/90090fd64c815b759af9b862ff05a9433d159c53.png";

export function ContactFormCTA() {
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
