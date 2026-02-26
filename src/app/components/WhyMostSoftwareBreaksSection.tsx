import imgRectangle699 from "figma:asset/1d906d583698c3f5b19a949ed669940b63274241.png";

export function WhyMostSoftwareBreaksSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        <div className="flex flex-col lg:flex-row gap-[60px] items-center">
          {/* Image */}
          <div className="relative rounded-[10px] w-full lg:w-[730px] h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden shrink-0">
            <img 
              alt="Technology visualization" 
              className="w-full h-full object-cover rounded-[10px]" 
              src={imgRectangle699}
            />
            <div 
              aria-hidden="true" 
              className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-[-2px] rounded-[12px] pointer-events-none" 
            />
          </div>
          
          {/* Content */}
          <div className="flex flex-col items-start justify-between w-full lg:w-[730px] h-auto lg:h-[700px]">
            {/* Heading */}
            <h2 className="font-['Helvetica_Now_Display'] font-medium leading-[1.15] text-[#111] text-[36px] md:text-[48px] lg:text-[64px] xl:leading-[75px] mb-8 lg:mb-0">
              Why Most Software Breaks  And Why We Don't Build That Way
            </h2>
            
            {/* Body Text */}
            <div className="font-['Inter'] font-normal leading-[28px] md:leading-[32px] lg:leading-[40px] text-[#3c3c3c] text-[18px] md:text-[20px] lg:text-[24px]">
              <p className="mb-0">
                Modern organizations don't fail because of missing features. They fail because systems are built without regard for operational reality—fragmented workflows, unclear ownership, short-term thinking, and poor handover.
              </p>
              <p className="mb-0">&nbsp;</p>
              <p className="font-['Inter'] font-bold mb-0">
                DSL was formed to address this gap.
              </p>
              <p className="mb-0">
                We work at the intersection of business logic, system design, and execution discipline so technology supports decisions instead of complicating them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
