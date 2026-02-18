import { Hero } from "../components/Hero";
import { TrustSection } from "../components/TrustSection";
import { AIAssistantSection } from "../components/AIAssistantSection";
import { ServiceStackSection } from "../components/ServiceStackSection";
import { SuccessStoriesSection } from "../components/SuccessStoriesSection";
import { ProductsSection } from "../components/ProductsSection";
import { DeliveryFrameworkSection } from "../components/DeliveryFrameworkSection";
import { TechnologyExpertiseSection } from "../components/TechnologyExpertiseSection";
import { WhyOrganizationsChooseSection } from "../components/WhyOrganizationsChooseSection";
import { IndustriesWeServeSection } from "../components/IndustriesWeServeSection";
import { InsightsSection } from "../components/InsightsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { FAQSection } from "../components/FAQSection";
import { CTASection } from "../components/CTASection";

export function Home() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <AIAssistantSection />
      <ServiceStackSection />
      <SuccessStoriesSection />
      <ProductsSection />
      <DeliveryFrameworkSection />
      <TechnologyExpertiseSection />
      <WhyOrganizationsChooseSection />
      <IndustriesWeServeSection />
      <InsightsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
