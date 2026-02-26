import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CTAFormContent from "../../imports/Frame2085663518";
import imgHero from "figma:asset/fc28288454f974da68573e1e2d1cb42c3ee3f345.png";
import imgFeature1 from "figma:asset/ff1064dfbe908babfaf00515ffaf10469e97e4e2.png";
import imgFeature2 from "figma:asset/bf67eebbdbec136fa2e662e204064ae58d822b77.png";
import imgOutcome1 from "figma:asset/14e59cd22c6851ec8f7519c979c45aeaa64613c1.png";
import imgOutcome2 from "figma:asset/27102d6509bbe4cab7db27b2b89d264b62699c3b.png";
import imgScreenshot1 from "figma:asset/381a3d61dd95e3c859bebc4817b937ebd5e5a4ec.png";
import imgScreenshot2 from "figma:asset/0e80fec8d2ba290dee273b54b815368e795db68f.png";
import imgScreenshot3 from "figma:asset/7eec700095a5801a8d36c125093feb68e76824ef.png";
// Related case study card images - matching CaseStudies page
import imgRelated1 from "figma:asset/68a19bf652cfa6adebd1002335c2aed29ed05709.png";
import imgRelated2 from "figma:asset/8f81926c5c669b3a2c3996794f3d06532cfb4a1c.png";
import imgRelated3 from "figma:asset/3faf2925f62a0636744277dd495c7dbc40efda7f.png";
// Recommended case studies images
import imgRecommended1 from "figma:asset/2d1b3acf24bdc2c35328e3002a511525d1a9958b.png";
import imgRecommended2 from "figma:asset/b6dcbbe25d4251535502a3f9814836b7882bd7a8.png";
import imgRecommended3 from "figma:asset/3faf2925f62a0636744277dd495c7dbc40efda7f.png";
import imgRecommended4 from "figma:asset/2ec3445415ad4e49c9b2846cad47e9bf6abde958.png";
import imgCtaBackground from "figma:asset/90090fd64c815b759af9b862ff05a9433d159c53.png";

gsap.registerPlugin(ScrollTrigger);

interface RelatedCaseStudy {
  id: number;
  image: string;
  title: string;
  description: string;
}

const relatedCaseStudies: RelatedCaseStudy[] = [
  {
    id: 1,
    image: imgRelated1,
    title: "Reconciliation and Petty cash",
    description: "The solution provided a cloud-based ERP platform for retail businesses with operational excellence, data security, and customer support."
  },
  {
    id: 2,
    image: imgRelated2,
    title: "Multi-Structure Standard Educational Management System",
    description: "The solution provided a cloud-based ERP platform for retail businesses with operational excellence, data security, and customer support."
  },
  {
    id: 3,
    image: imgRelated3,
    title: "Employee Payroll Management System",
    description: "The solution provided a cloud-based ERP platform for retail businesses with operational excellence, data security, and customer support."
  }
];

export function SingleCaseStudy() {
  const heroRef = useRef(null);
  const feature1Ref = useRef(null);
  const feature2Ref = useRef(null);
  const outcome1Ref = useRef(null);
  const outcome2Ref = useRef(null);
  const screenshot1Ref = useRef(null);
  const screenshot2Ref = useRef(null);
  const screenshot3Ref = useRef(null);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    const currentRef = heroRef.current;
    if (currentRef) {
      const tween = gsap.from(currentRef, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: currentRef,
          start: "top 80%",
          end: "top 50%",
          scrub: true
        }
      });
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger as ScrollTrigger);
    }

    const currentRef1 = feature1Ref.current;
    if (currentRef1) {
      const tween = gsap.from(currentRef1, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: currentRef1,
          start: "top 80%",
          end: "top 50%",
          scrub: true
        }
      });
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger as ScrollTrigger);
    }

    const currentRef2 = feature2Ref.current;
    if (currentRef2) {
      const tween = gsap.from(currentRef2, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: currentRef2,
          start: "top 80%",
          end: "top 50%",
          scrub: true
        }
      });
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger as ScrollTrigger);
    }

    const currentRef3 = outcome1Ref.current;
    if (currentRef3) {
      const tween = gsap.from(currentRef3, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: currentRef3,
          start: "top 80%",
          end: "top 50%",
          scrub: true
        }
      });
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger as ScrollTrigger);
    }

    const currentRef4 = outcome2Ref.current;
    if (currentRef4) {
      const tween = gsap.from(currentRef4, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: currentRef4,
          start: "top 80%",
          end: "top 50%",
          scrub: true
        }
      });
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger as ScrollTrigger);
    }

    const currentRef5 = screenshot1Ref.current;
    if (currentRef5) {
      const tween = gsap.from(currentRef5, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: currentRef5,
          start: "top 80%",
          end: "top 50%",
          scrub: true
        }
      });
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger as ScrollTrigger);
    }

    const currentRef6 = screenshot2Ref.current;
    if (currentRef6) {
      const tween = gsap.from(currentRef6, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: currentRef6,
          start: "top 80%",
          end: "top 50%",
          scrub: true
        }
      });
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger as ScrollTrigger);
    }

    const currentRef7 = screenshot3Ref.current;
    if (currentRef7) {
      const tween = gsap.from(currentRef7, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: currentRef7,
          start: "top 80%",
          end: "top 50%",
          scrub: true
        }
      });
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger as ScrollTrigger);
    }

    return () => {
      // Kill all ScrollTrigger instances
      triggers.forEach(trigger => trigger.kill());
      
      // Kill all tweens
      gsap.killTweensOf([currentRef, currentRef1, currentRef2, currentRef3, currentRef4, currentRef5, currentRef6, currentRef7]);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Project Details Section with Sticky Sidebar */}
      <section className="px-6 md:px-12 lg:px-24 xl:px-[100px] pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 max-w-[1520px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[390px_1fr] gap-8 lg:gap-12 items-start">
          
          {/* Left Sidebar - Project Info (Sticky) */}
          <div className="order-2 lg:order-1 lg:sticky lg:top-24 self-start">
            <div className="bg-[#f5f5f7] rounded-[10px] p-[40px]">
              {/* Company */}
              <div className="mb-6">
                <p className="font-['Helvetica_Now_Display',sans-serif] font-medium text-[20px] text-[#3c3c3c] uppercase mb-4">
                  Company
                </p>
                <p className="font-['Helvetica_Now_Display',sans-serif] font-bold text-[24px] text-[#111] leading-[1.2]">
                  Bangladesh National Cadet Core (BNCC)
                </p>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-black/20 mb-6" />

              {/* Category */}
              <div className="mb-6">
                <p className="font-['Helvetica_Now_Display',sans-serif] font-medium text-[20px] text-[#3c3c3c] uppercase mb-4">
                  Category
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] px-3 py-1.5 rounded-[4px] border border-[rgba(255,255,255,0.1)] font-['Inter',sans-serif] font-bold text-[14px] text-[#111]">
                    Government
                  </span>
                  <span className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] px-3 py-1.5 rounded-[4px] border border-[rgba(255,255,255,0.1)] font-['Inter',sans-serif] font-bold text-[14px] text-[#111]">
                    Web Portal
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-black/20 mb-6" />

              {/* Timeline */}
              <div className="mb-6">
                <p className="font-['Helvetica_Now_Display',sans-serif] font-medium text-[20px] text-[#3c3c3c] uppercase mb-4">
                  Timeline
                </p>
                <p className="font-['Helvetica_Now_Display',sans-serif] font-bold text-[24px] text-[#111]">
                  6 months
                </p>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-black/20 mb-6" />

              {/* We Provide */}
              <div className="mb-6">
                <p className="font-['Helvetica_Now_Display',sans-serif] font-medium text-[20px] text-[#3c3c3c] uppercase mb-4">
                  We Provide
                </p>
                <ul className="list-disc pl-[36px] space-y-2">
                  <li className="font-['Helvetica_Now_Display',sans-serif] font-bold text-[24px] text-[#111] leading-[1.2]">
                    User Research
                  </li>
                  <li className="font-['Helvetica_Now_Display',sans-serif] font-bold text-[24px] text-[#111] leading-[1.2]">
                    UI Design
                  </li>
                  <li className="font-['Helvetica_Now_Display',sans-serif] font-bold text-[24px] text-[#111] leading-[1.2]">
                    Web App Development
                  </li>
                </ul>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-black/20 mb-6" />

              {/* Tech Stack */}
              <div>
                <p className="font-['Helvetica_Now_Display',sans-serif] font-medium text-[20px] text-[#3c3c3c] uppercase mb-4">
                  Tech Stack
                </p>
                <p className="font-['Helvetica_Now_Display',sans-serif] font-bold text-[24px] text-[#111] leading-[1.3]">
                  Python, Django, React, MongoDB, Express, Next.JS, Docker, Jenkins, Kubernetes
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Full Case Study Body */}
          <div className="order-1 lg:order-2 flex flex-col gap-[44px]">
            {/* Project Title & Hero Image */}
            <div className="flex flex-col gap-[32px]">
              <h1 className="font-['Helvetica_Now_Display',sans-serif] font-medium text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] text-[#111]">
                Bangladesh National Cadet Core (BNCC)
              </h1>
              
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-[10px] overflow-hidden border-2 border-[rgba(0,0,0,0.2)]" ref={heroRef}>
                <img
                  src={imgHero}
                  alt="BNCC Project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Project Description */}
            <p className="font-['Inter',sans-serif] font-normal text-[20px] leading-[30px] text-[#3c3c3c]">
              A centralized university management platform designed to connect academic, administrative, and operational functions into a single digital ecosystem supporting efficiency, transparency, and long-term scalability.
            </p>

            {/* Project Overview */}
            <div className="flex flex-col gap-[24px]">
              <h2 className="font-['Helvetica_Now_Display',sans-serif] font-medium text-[48px] leading-[65px] text-[#111]">
                Project Overview
              </h2>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[30px] text-[#3c3c3c]">
                Bangladesh University of Textiles (BUTEX) aimed to modernize its academic and administrative operations through a centralized digital platform. The objective was to replace fragmented systems and manual processes with an integrated solution that could support students, faculty, and administrators across the institution. The project focused on improving efficiency, data accuracy, and coordination while supporting the university's specialized academic structure.
              </p>
            </div>

            {/* Project Scope */}
            <div className="flex flex-col gap-[24px]">
              <h2 className="font-['Helvetica_Now_Display',sans-serif] font-medium text-[48px] leading-[65px] text-[#111]">
                Project Scope
              </h2>
              <div className="font-['Inter',sans-serif] font-normal text-[16px] leading-[30px] text-[#3c3c3c]">
                <p className="mb-[30px]">
                  The project covered the design and implementation of a unified university management system that supports both academic and operational functions. The scope was defined to ensure the platform could handle daily institutional workflows while remaining flexible for future expansion.
                </p>
                <p className="font-['Inter',sans-serif] font-bold text-[20px] leading-[30px] text-[#3c3c3c] mb-[16px]">
                  Included in scope:
                </p>
                <ul className="list-disc pl-[24px] space-y-2">
                  <li className="font-['Inter',sans-serif] font-medium text-[16px] leading-[30px] text-[#3c3c3c]">
                    Digitization of core academic processes
                  </li>
                  <li className="font-['Inter',sans-serif] font-medium text-[16px] leading-[30px] text-[#3c3c3c]">
                    Centralized administrative operations
                  </li>
                  <li className="font-['Inter',sans-serif] font-medium text-[16px] leading-[30px] text-[#3c3c3c]">
                    Role-based access for different user groups
                  </li>
                  <li className="font-['Inter',sans-serif] font-medium text-[16px] leading-[30px] text-[#3c3c3c]">
                    Support for multi-department and multi-campus usage
                  </li>
                  <li className="font-['Inter',sans-serif] font-medium text-[16px] leading-[30px] text-[#3c3c3c]">
                    Integration with existing university systems
                  </li>
                </ul>
              </div>
            </div>

            {/* Challenge */}
            <div className="flex flex-col gap-[24px]">
              <h2 className="font-['Helvetica_Now_Display',sans-serif] font-medium text-[48px] leading-[65px] text-[#111]">
                Challenge
              </h2>
              <div className="font-['Inter',sans-serif] font-normal text-[16px] leading-[30px] text-[#3c3c3c]">
                <p className="mb-[30px]">
                  The project involved several challenges due to the scale and nature of university operations.
                </p>
                <p className="font-['Inter',sans-serif] font-bold text-[20px] leading-[30px] text-[#3c3c3c] mb-[8px]">
                  Legacy System Integration:
                </p>
                <p className="mb-[30px]">
                  Existing systems needed to be connected without disrupting ongoing academic and administrative activities.
                </p>
                <p className="font-['Inter',sans-serif] font-bold text-[20px] leading-[30px] text-[#3c3c3c] mb-[8px]">
                  Specialized Academic Requirements:
                </p>
                <p className="mb-[30px]">
                  The platform had to support textile-specific academic structures, curricula, and evaluation processes.
                </p>
                <p className="font-['Inter',sans-serif] font-bold text-[20px] leading-[30px] text-[#3c3c3c] mb-[8px]">
                  Multi-Campus Coordination:
                </p>
                <p>
                  Managing data consistency and operational control across multiple campuses required careful system design.
                </p>
              </div>
            </div>

            {/* Large Feature Image */}
            <div className="relative h-[650px] rounded-[10px] overflow-hidden" ref={feature1Ref}>
              <img
                src={imgFeature1}
                alt="Project Feature"
                className="w-full h-full object-cover"
              />
            </div>

            {/* What Solution Did We Provide? */}
            <div className="flex flex-col gap-[24px]">
              <h2 className="font-['Helvetica_Now_Display',sans-serif] font-medium text-[48px] leading-[65px] text-[#111]">
                What Solution Did We Provide?
              </h2>
              <div className="font-['Inter',sans-serif] font-normal text-[16px] leading-[30px] text-[#3c3c3c]">
                <p className="mb-[16px]">
                  To address these challenges, a modular and scalable digital platform was designed and implemented.
                </p>
                <ul className="list-disc pl-[24px] space-y-2">
                  <li className="font-['Inter',sans-serif] font-medium text-[16px] leading-[30px] text-[#3c3c3c]">
                    Developed custom APIs to integrate legacy systems while maintaining data integrity
                  </li>
                  <li className="font-['Inter',sans-serif] font-medium text-[16px] leading-[30px] text-[#3c3c3c]">
                    Designed flexible academic modules tailored to textile engineering programs
                  </li>
                  <li className="font-['Inter',sans-serif] font-medium text-[16px] leading-[30px] text-[#3c3c3c]">
                    Implemented role-based access control to support students, faculty, and administrators
                  </li>
                  <li className="font-['Inter',sans-serif] font-medium text-[16px] leading-[30px] text-[#3c3c3c]">
                    Built a distributed system architecture to enable seamless multi-campus operations
                  </li>
                  <li className="font-['Inter',sans-serif] font-medium text-[16px] leading-[30px] text-[#3c3c3c]">
                    Ensured secure data handling, reporting, and centralized oversight
                  </li>
                </ul>
                <p className="mt-[30px]">
                  The solution was designed with adaptability in mind, allowing the university to extend functionality as needs evolve.
                </p>
              </div>
            </div>

            {/* Outcome */}
            <div className="flex flex-col gap-[24px]">
              <h2 className="font-['Helvetica_Now_Display',sans-serif] font-medium text-[48px] leading-[65px] text-[#111]">
                Outcome
              </h2>
              <div className="font-['Inter',sans-serif] font-normal text-[16px] leading-[30px] text-[#3c3c3c]">
                <p className="mb-[30px]">
                  After implementation, the university experienced noticeable improvements in operational efficiency and system usability.
                </p>
                <ul className="list-disc pl-[24px] space-y-2 mb-[30px]">
                  <li className="font-['Inter',sans-serif] font-medium text-[16px] leading-[30px] text-[#3c3c3c]">
                    Reduced dependency on manual processes
                  </li>
                  <li className="font-['Inter',sans-serif] font-medium text-[16px] leading-[30px] text-[#3c3c3c]">
                    Improved accuracy and consistency of academic and administrative data
                  </li>
                  <li className="font-['Inter',sans-serif] font-medium text-[16px] leading-[30px] text-[#3c3c3c]">
                    Faster access to information for faculty and administrators
                  </li>
                  <li className="font-['Inter',sans-serif] font-medium text-[16px] leading-[30px] text-[#3c3c3c]">
                    Better coordination across departments and campuses
                  </li>
                  <li className="font-['Inter',sans-serif] font-medium text-[16px] leading-[30px] text-[#3c3c3c]">
                    Enhanced digital experience for students and staff
                  </li>
                </ul>
                <p>
                  The platform now serves as a reliable foundation for ongoing digital transformation.
                </p>
              </div>
            </div>

            {/* Outcome Images Grid */}
            <div className="flex gap-[44px]">
              <div className="flex-1 relative h-[650px] rounded-[10px] overflow-hidden" ref={outcome1Ref}>
                <img
                  src={imgOutcome1}
                  alt="Outcome 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 relative h-[650px] rounded-[10px] overflow-hidden" ref={outcome2Ref}>
                <img
                  src={imgOutcome2}
                  alt="Outcome 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Conclusion */}
            <div className="flex flex-col gap-[24px]">
              <h2 className="font-['Helvetica_Now_Display',sans-serif] font-medium text-[48px] leading-[65px] text-[#111]">
                Conclusion
              </h2>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[30px] text-[#3c3c3c]">
                The project successfully delivered a centralized, future-ready university management system aligned with BUTEX's academic and operational goals. By addressing both immediate challenges and long-term scalability, the solution supports sustainable growth and improved institutional efficiency. This case study demonstrates how a thoughtfully designed digital platform can transform complex organizational workflows into a streamlined, manageable system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Case Studies - Horizontal Scroll */}
      <RecommendedCaseStudies />

      {/* Contact Form CTA Section */}
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

      {/* Related Case Studies */}
      
    </div>
  );
}

function ProjectInfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-['Inter',sans-serif] font-normal text-[14px] text-[#8d8d8d] mb-1">
        {label}
      </p>
      <p className="font-['Inter',sans-serif] font-medium text-[16px] text-[#111]">
        {value}
      </p>
    </div>
  );
}

interface ContentSectionProps {
  title: string;
  content: string;
  points?: string[];
  metrics?: { label: string; value: string }[];
}

function ContentSection({ title, content, points, metrics }: ContentSectionProps) {
  return (
    <div>
      <h2 className="font-['Helvetica_Now_Display',sans-serif] font-medium text-[32px] md:text-[36px] lg:text-[40px] leading-[1.2] text-[#111] mb-6">
        {title}
      </h2>
      <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] leading-[1.8] text-[#3c3c3c] mb-6">
        {content}
      </p>
      
      {points && (
        <ul className="space-y-3 mb-6">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#01e067] rounded-full mt-2.5" />
              <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] leading-[1.8] text-[#3c3c3c]">
                {point}
              </p>
            </li>
          ))}
        </ul>
      )}

      {metrics && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-6 rounded-[10px] bg-[#f5f5f5]">
              <p className="font-['Helvetica_Now_Display',sans-serif] font-bold text-[32px] md:text-[40px] text-[#01e067] mb-2">
                {metric.value}
              </p>
              <p className="font-['Inter',sans-serif] text-[14px] text-[#3c3c3c]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function RelatedCaseStudyCard({ study }: { study: RelatedCaseStudy }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative h-[280px] rounded-[10px] overflow-hidden mb-4 border-2 border-[rgba(0,0,0,0.2)]">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="font-['Helvetica_Now_Display',sans-serif] font-bold text-[18px] leading-[1.3] text-[#111] mb-2 group-hover:text-[#01e067] transition-colors">
        {study.title}
      </h3>
      <p className="font-['Inter',sans-serif] text-[14px] leading-[1.6] text-[#3c3c3c]">
        {study.description}
      </p>
    </div>
  );
}

// Recommended Case Studies Component with Horizontal Scrolling
function RecommendedCaseStudies() {
  const recommendedCases = [
    {
      id: 1,
      image: imgRecommended1,
      title: "Novo Healthcare and Pharma Ltd",
      description: "Comprehensive ERP for Novo Pharma to streamline and enhance its pharmaceutical operations.",
      tags: ["Healthcare", "Pharmaceutical"]
    },
    {
      id: 2,
      image: imgRecommended2,
      title: "SAHIC (Society for Assistance to Hearing Impaired Children)",
      description: "Smart Hospital Management Solution for SAHIC to automate processes, improve service delivery, and ensure seamless hospital operations.",
      tags: ["Government", "Web Portal"]
    },
    {
      id: 3,
      image: imgRecommended3,
      title: "East Coast Group",
      description: "Complete HR Management system for the East Coast Group, including inventory management, billing, and other module.",
      tags: ["Corporate", "ERP"]
    },
    {
      id: 4,
      image: imgRecommended4,
      title: "HIU - Horseed International University, Somalia",
      description: "Complete university ERP system implemented for an international university in Somalia.",
      tags: ["Education", "International"]
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollTo = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth * 0.8;
      const newPosition = direction === 'left' 
        ? containerRef.current.scrollLeft - scrollAmount
        : containerRef.current.scrollLeft + scrollAmount;
      
      containerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      handleScroll();
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-white">
      {/* Section Header */}
      <div className="px-6 md:px-12 lg:px-24 xl:px-[100px] max-w-[1520px] mx-auto mb-8 md:mb-10 lg:mb-12">
        <h2 className="font-['Helvetica_Now_Display',sans-serif] font-medium text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] text-[#111]">
          Recommended Case Studies
        </h2>
        <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[30px] text-[#3c3c3c] mt-4">
          Explore more success stories showcasing our expertise across diverse industries.
        </p>
      </div>
      
      {/* Scrollable Container */}
      <div className="relative overflow-visible">
        {/* Hide scrollbar styles */}
        <style>
          {`
            .horizontal-scroll-container {
              scrollbar-width: none;
              -ms-overflow-style: none;
              scroll-snap-type: x mandatory;
              scroll-padding-left: 24px;
              scroll-padding-right: 24px;
              cursor: grab;
              -webkit-overflow-scrolling: touch;
            }
            .horizontal-scroll-container:active {
              cursor: grabbing;
            }
            .horizontal-scroll-container::-webkit-scrollbar {
              display: none;
            }
            .scroll-snap-item {
              scroll-snap-align: start;
              scroll-snap-stop: normal;
            }
            @media (min-width: 768px) {
              .horizontal-scroll-container {
                scroll-padding-left: 48px;
                scroll-padding-right: 48px;
              }
            }
            @media (min-width: 1024px) {
              .horizontal-scroll-container {
                scroll-padding-left: 96px;
                scroll-padding-right: 96px;
              }
            }
            @media (min-width: 1280px) {
              .horizontal-scroll-container {
                scroll-padding-left: 100px;
                scroll-padding-right: 100px;
              }
            }
          `}
        </style>

        {/* Left Gradient Fade Overlay */}
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 lg:w-40 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
        )}

        {/* Right Gradient Fade Overlay */}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 lg:w-40 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />
        )}

        {/* Cards Container */}
        <div 
          ref={containerRef}
          className="horizontal-scroll-container flex gap-6 md:gap-8 overflow-x-scroll pl-6 md:pl-12 lg:pl-24 xl:pl-[100px] pr-6 md:pr-12 lg:pr-24 xl:pr-[100px] py-4"
        >
          {recommendedCases.map((caseStudy) => (
            <Link
              key={caseStudy.id}
              to={`/case-studies/${caseStudy.id}`}
              className="scroll-snap-item flex-shrink-0 w-[85vw] md:w-[calc(50vw-40px)] lg:w-[calc(40vw-32px)] max-w-[740px] group cursor-pointer"
            >
              <div className="flex flex-col gap-[16px] h-full">
                {/* Image */}
                <div className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-[10px] overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.2)] border-solid inset-[-2px] pointer-events-none rounded-[12px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-[16px]">
                  <h3 className="font-['Helvetica_Now_Display',sans-serif] font-bold text-[20px] md:text-[22px] lg:text-[24px] leading-[1.2] text-[#111] group-hover:text-[#01e067] transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="font-['Helvetica_Now_Display',sans-serif] font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[1.5] text-[#3c3c3c]">
                    {caseStudy.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-[6px]">
                    {caseStudy.tags.map((tag, index) => (
                      <div key={index} className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] px-[12px] py-[6px] rounded-[4px] border border-[rgba(255,255,255,0.1)]">
                        <p className="font-['Inter',sans-serif] font-bold text-[14px] text-[#111]">
                          {tag}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation Arrows - Desktop Only */}
        {canScrollLeft && (
          <button
            onClick={() => scrollTo('left')}
            className="hidden lg:flex absolute left-4 xl:left-8 top-[200px] md:top-[225px] lg:top-[250px] items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-[rgba(0,0,0,0.1)] hover:bg-[#f5f5f5] hover:scale-110 transition-all duration-300 z-20"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-[#111]" />
          </button>
        )}
        
        {canScrollRight && (
          <button
            onClick={() => scrollTo('right')}
            className="hidden lg:flex absolute right-4 xl:right-8 top-[200px] md:top-[225px] lg:top-[250px] items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-[rgba(0,0,0,0.1)] hover:bg-[#f5f5f5] hover:scale-110 transition-all duration-300 z-20"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-[#111]" />
          </button>
        )}
      </div>
    </section>
  );
}

export default SingleCaseStudy;