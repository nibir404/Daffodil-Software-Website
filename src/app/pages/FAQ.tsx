import { useState, useRef, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { gsap } from "gsap";

interface FAQItem {
  question: string;
  answer: string;
}

interface CategoryFAQs {
  category: string;
  faqs: FAQItem[];
}

const faqData: CategoryFAQs[] = [
  {
    category: "General",
    faqs: [
      {
        question: "What does Daffodil Software Limited specialize in?",
        answer: "Daffodil Software Limited specializes in custom enterprise software development, ERP implementation (Microsoft Dynamics, SAP, Oracle), AI automation, digital transformation, blockchain solutions, and mobile app development. We serve multiple industries including education, healthcare, finance, manufacturing, and retail with 20+ years of experience."
      },
      {
        question: "How long has DSL been in the industry?",
        answer: "We have been providing world-class software solutions and IT services since 1998, accumulating over 25 years of industry experience and delivering hundreds of successful projects globally."
      },
      {
        question: "Where is Daffodil Software Limited located?",
        answer: "Our headquarters is located at Daffodil Tower, 4/2, Sobhanbag, Mirpur Road, Dhaka-1207. We also have regional offices and representative partners globally to serve our international clientele."
      }
    ]
  },
  {
    category: "Services",
    faqs: [
      {
        question: "Does Daffodil Software Limited provide customized solutions or ready-made products?",
        answer: "We provide both. Our core strength lies in developing fully customized enterprise solutions tailored to your specific business needs. Additionally, we offer ready-made products like IUMS (Integrated University Management System) and various industry-specific platforms that can be configured to match your requirements."
      },
      {
        question: "What services do you offer for Digital Transformation?",
        answer: "Our digital transformation services include legacy system modernization, cloud migration, workflow automation, process optimization, and integrating emerging technologies like AI/ML and Blockchain into your existing business ecosystem."
      },
      {
        question: "Can you help with ERP implementation?",
        answer: "Yes, we have a dedicated team for enterprise resource planning (ERP) systems. We specialize in implementing and customizing top-tier ERP platforms like Microsoft Dynamics 365, SAP, and Oracle, as well as building custom ERP solutions for specialized industries."
      }
    ]
  },
  {
    category: "Technology",
    faqs: [
      {
        question: "What technologies does Daffodil Software Limited work with?",
        answer: "Our technology expertise spans across cloud platforms (AWS, Azure, Google Cloud), programming languages (Java, Python, .NET, Node.js, React, Next.js), databases (SQL Server, Oracle, MongoDB, PostgreSQL), AI/ML frameworks (TensorFlow, PyTorch), and modern DevOps tools (Docker, Kubernetes, Jenkins)."
      },
      {
        question: "How do you ensure data security in your applications?",
        answer: "Security is built into our SDLC. We follow OWASP guidelines, implement military-grade encryption, conduct regular vulnerability assessments, and ensure compliance with global standards like GDPR, HIPAA, and ISO 27001. Our systems feature robust role-based access control and secure audit trails."
      },
      {
        question: "Do you build mobile applications for both iOS and Android?",
        answer: "Yes, we develop high-performance mobile applications for both iOS and Android using native technologies as well as cross-platform frameworks like React Native and Flutter, ensuring a seamless user experience across all devices."
      }
    ]
  },
  {
    category: "Process & Delivery",
    faqs: [
      {
        question: "What development methodology do you follow?",
        answer: "We primarily follow Agile methodologies (Scrum/Kanban) to ensure transparency, flexibility, and predictable delivery. This allow us to provide regular updates to our clients, incorporate feedback continuously, and ensure the final product aligns perfectly with business goals."
      },
      {
        question: "How do you manage communication during a project?",
        answer: "We establish clear communication channels through designated project managers. We use specialized tools for project tracking (Jira, Trello), instant communication (Slack, MS Teams), and regular progress meetings (Zoom, Google Meet) to keep all stakeholders informed."
      },
      {
        question: "Can you handle large-scale and enterprise-level projects?",
        answer: "Absolutely. We have extensive experience managing large-scale enterprise projects with distributed teams and complex integrations. Our portfolio includes mission-critical systems for government agencies and global digital transformation initiatives for Fortune 500 companies."
      }
    ]
  },
  {
    category: "Support",
    faqs: [
      {
        question: "Does Daffodil Software Limited offer post-deployment support and maintenance?",
        answer: "Yes, we provide comprehensive post-deployment support including 24/7 monitoring, regular maintenance, security patches, feature enhancements, and performance optimization. Our long-term support contracts are designed to ensure your systems remain secure and efficient."
      },
      {
        question: "How do you handle feature requests after the initial launch?",
        answer: "Post-launch feature requests are handled through our maintenance and enhancement program. We analyze the requirements, provide effort estimates, and implement them in planned update cycles without disrupting the live system."
      }
    ]
  }
];

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const activeFAQs = faqData.find(cat => cat.category === activeCategory)?.faqs || [];

  useEffect(() => {
    if (contentRef.current) {
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 10,
        stagger: 0.05,
        duration: 0.4,
        ease: "power2.out"
      });
    }
    // Reset open index when category changes
    setOpenIndex(0);
  }, [activeCategory]);

  return (
    <div className="bg-white min-h-screen">
      <section className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 items-start">
            
            {/* Left Column - Header and Categories */}
            <div className="bg-[#f5f5f7] flex flex-col gap-8 md:gap-10 p-6 md:p-10 rounded-[10px] lg:sticky lg:top-24 shrink-0 w-full lg:w-[480px]">
              <h1 className="font-['Helvetica_Now_Display'] font-medium text-[36px] md:text-[48px] lg:text-[64px] text-[#111] leading-[1.17]">
                Frequently Asked Questions
              </h1>
              
              {/* Category Navigation */}
              <div className="flex flex-col gap-2">
                <p className="font-['Helvetica_Now_Display'] font-bold text-[14px] uppercase tracking-widest text-[#8d8d8d] mb-4">
                  Filter by Category
                </p>
                <div className="flex flex-col gap-1">
                  {faqData.map((cat) => (
                    <button
                      key={cat.category}
                      onClick={() => setActiveCategory(cat.category)}
                      className={`flex items-center justify-between py-3 md:py-4 px-4 rounded-[8px] text-left transition-all group ${
                        activeCategory === cat.category
                          ? "bg-white text-[#111] shadow-[0px_4px_12px_rgba(0,0,0,0.05)]"
                          : "text-[#3c3c3c] hover:bg-white/50"
                      }`}
                    >
                      <span className={`font-['Helvetica_Now_Display'] font-medium text-[16px] md:text-[18px] transition-colors ${
                        activeCategory === cat.category ? "text-[#01e067]" : "text-[#111]"
                      }`}>
                        {cat.category}
                      </span>
                      <ArrowRight className={`size-4 transition-all duration-300 ${
                        activeCategory === cat.category 
                          ? "translate-x-0 opacity-100 text-[#01e067]" 
                          : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      }`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - FAQ Items */}
            <div className="flex flex-col flex-1 w-full pt-4 md:pt-10">
              <div ref={contentRef} className="flex flex-col">
                {activeFAQs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="flex gap-4 items-start justify-between w-full px-3 md:px-4 py-6 md:py-8 text-left hover:bg-[#f5f5f7] transition-colors rounded-[8px]"
                    >
                      <h3 className="font-['Helvetica_Now_Display'] font-medium text-[18px] md:text-[22px] lg:text-[24px] text-[#111] leading-[1.2] flex-1">
                        {faq.question}
                      </h3>
                      <div className={`mt-1 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                         <ChevronDown className="size-5 md:size-6 text-[#111]" />
                      </div>
                    </button>
                    
                    {/* Answer - Collapsible */}
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                        openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-3 md:px-4 pb-8 md:pb-10 pt-2">
                        <p className="font-['Inter'] text-[15px] md:text-[16px] lg:text-[18px] text-[#3c3c3c] leading-[1.6] md:leading-[1.8] max-w-[800px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
