import Hero from "../../imports/Hero-62-1619";
import { CTASection } from "../components/CTASection";
import { WhyMostSoftwareBreaksSection } from "../components/WhyMostSoftwareBreaksSection";
import { OurWayOfThinkingNewSection } from "../components/OurWayOfThinkingNewSection";
import { WhatClientsRelyOnSection } from "../components/WhatClientsRelyOnSection";
import { BuiltWithResponsibilitySection } from "../components/BuiltWithResponsibilitySection";
import { PeopleBehindSystemsNewSection } from "../components/PeopleBehindSystemsNewSection";
import { VisionMissionNewSection } from "../components/VisionMissionNewSection";
import { AboutSectionWrapper } from "../components/AboutSectionWrapper";

export function About() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[650px] lg:h-[800px] overflow-hidden">
        <style>{`
          /* Adjust hero section left margin responsively */
          [data-name="Hero"] > div:last-child {
            left: 24px !important;
          }
          
          @media (min-width: 768px) {
            [data-name="Hero"] > div:last-child {
              left: 48px !important;
            }
          }
          
          @media (min-width: 1024px) {
            [data-name="Hero"] > div:last-child {
              left: 96px !important;
            }
          }
          
          @media (min-width: 1280px) {
            [data-name="Hero"] > div:last-child {
              left: 100px !important;
            }
          }
        `}</style>
        <Hero />
      </div>
      
      {/* Why Most Software Breaks Section - Responsive gap from Hero */}
      <div className="mt-[60px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px]">
        <WhyMostSoftwareBreaksSection />
      </div>
      
      {/* Our Way of Thinking (New Cards Section) - Responsive gap */}
      <div className="mt-[60px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px]">
        <OurWayOfThinkingNewSection />
      </div>
      
      {/* What Clients Rely on Us For - Responsive gap */}
      <div className="mt-[60px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px]">
        <WhatClientsRelyOnSection />
      </div>
      
      {/* Built With Responsibility in Mind (Dark section) - Responsive gap */}
      <div className="mt-[60px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px]">
        <BuiltWithResponsibilitySection />
      </div>
      
      {/* The People Behind the Systems (New Gallery) - No gap */}
      <div>
        <PeopleBehindSystemsNewSection />
      </div>
      
      {/* Vision & Mission Section (New) - Responsive gap */}
      <div className="mt-[60px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px]">
        <VisionMissionNewSection />
      </div>
      
      {/* CTA Section from home page */}
      <CTASection />
    </div>
  );
}
