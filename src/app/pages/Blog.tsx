import { useState } from "react";
import { Link } from "react-router";
import svgPaths from "../../assets/svgs/svg-kiraieu767";
import imgImage61 from "figma:asset/d80fb2985b8e5fe3ece58610c38ac6e3b7c3fac6.png";
import imgImage62 from "figma:asset/51c3b1a51cb3dc090c475e60ec7af1e01261ddc0.png";
import imgImage63 from "figma:asset/feab9f0144be05738767103bba60379a87da3aa5.png";
import imgImage64 from "figma:asset/1fcc5b99c07bd0832b624012b64c40532492d8d3.png";
import imgImage65 from "figma:asset/8872a7d291c3714b7c3f2a12bc1991e858f11079.png";
import imgRectangle689 from "figma:asset/4da52a89d96f70de821349dad640b3eb999d7534.png";
import CTAFormContent from "../../imports/Frame2085663518";
import imgCtaBackground from "figma:asset/90090fd64c815b759af9b862ff05a9433d159c53.png";

// Blog Hero Section
function BlogHero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#f5f5f7] to-[#b8f0d5] overflow-hidden">
      {/* Container with responsive padding */}
      <div className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] px-6 md:px-12 lg:px-24 xl:px-[100px]">
        <div className="max-w-[1920px] mx-auto">
          {/* Flex container - stacks on mobile, side-by-side on desktop */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-20 py-12 md:py-16 lg:py-20">
            
            {/* Left Content - Title and Description */}
            <div className="w-full lg:w-auto lg:max-w-[733px] flex-shrink-0 z-10">
              <div className="flex flex-col gap-6">
                {/* Title */}
                <div className="flex flex-col font-['Helvetica_Now_Display'] font-medium text-[#111] leading-[1.1]">
                  <h1 className="text-4xl md:text-5xl lg:text-[64px]">
                    Ideas, Insights &
                  </h1>
                  <h1 className="text-4xl md:text-5xl lg:text-[64px]">
                    Engineering Stories
                  </h1>
                </div>

                {/* Description */}
                <div className="font-['Inter'] text-base md:text-lg lg:text-[20px] leading-[1.5] text-[#3c3c3c]">
                  <p className="mb-0">Where software, strategy, and real-world problem-solving collide.</p>
                  <p>Short reads. Sharp thinking. No fluff.</p>
                </div>
              </div>
            </div>

            {/* Right Featured Blog Card */}
            <Link 
              to="/blog/designing-software-that-survives-scale"
              className="relative w-full lg:w-auto lg:flex-1 max-w-full lg:max-w-[927px] h-[500px] md:h-[600px] lg:h-[760px] rounded-[10px] overflow-hidden group"
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 rounded-[10px]">
                <img 
                  alt="Featured blog" 
                  className="absolute inset-0 w-full h-full object-cover rounded-[10px]" 
                  src={imgRectangle689} 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[20%] to-[rgba(0,0,0,0.8)] to-[80%] rounded-[10px] group-hover:to-[rgba(0,0,0,0.85)] transition-all duration-300" />
              </div>

              {/* Border */}
              <div className="absolute inset-[-2px] border-2 border-[rgba(0,0,0,0.1)] border-solid rounded-[12px] pointer-events-none" />

              {/* Tags */}
              <div className="absolute left-4 md:left-6 top-4 md:top-6 flex gap-[6px] items-center z-10">
                <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.3)] px-3 py-1.5 rounded-[10px] relative">
                  <div className="absolute inset-[-1px] border border-[rgba(255,255,255,0.1)] border-solid rounded-[11px] pointer-events-none" />
                  <p className="font-['Inter'] font-bold text-[12px] md:text-[14px] leading-[30px] text-white">Latest</p>
                </div>
                <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.3)] px-3 py-1.5 rounded-[10px] relative">
                  <div className="absolute inset-[-1px] border border-[rgba(255,255,255,0.1)] border-solid rounded-[11px] pointer-events-none" />
                  <p className="font-['Inter'] font-bold text-[12px] md:text-[14px] leading-[30px] text-white">Engineering</p>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 flex flex-col gap-2 md:gap-3 z-10">
                <h2 className="font-['Helvetica_Now_Display'] font-medium text-2xl md:text-3xl lg:text-[40px] leading-[1.2] text-white">
                  Designing Software That Survives Scale
                </h2>
                <p className="font-['Inter'] text-sm md:text-base lg:text-[20px] leading-[1.5] text-white">
                  Most systems fail quietly under growth, not bugs. This article breaks down how early architecture choices decide whether a product scales with confidence or collapses under pressure.
                </p>
                <div className="flex gap-2 md:gap-[15px] items-center py-2 group-hover:gap-3 md:group-hover:gap-[20px] transition-all duration-300">
                  <p className="font-['Helvetica_Now_Display'] font-medium text-sm md:text-[16px] leading-normal text-white">
                    Read Full Article
                  </p>
                  <div className="bg-[#111] rounded-[6px] size-8 md:size-10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <svg className="size-4 md:size-5" fill="none" viewBox="0 0 16 16">
                      <path d="M12.3321 8H3.33203" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M8.66797 12C8.66797 12 12.668 9.05407 12.668 8C12.668 6.94587 8.66797 4 8.66797 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Blog Card Component
interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

function BlogCard({ image, title, description, link }: BlogCardProps) {
  return (
    <Link 
      to={link}
      className="bg-[#f6f6f6] flex-1 min-w-[calc(50%-10px)] h-[500px] relative rounded-[10px] overflow-hidden group hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.15)] transition-all duration-300"
    >
      {/* Background Image with Blur */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover blur-[27px] group-hover:blur-[20px] transition-all duration-300"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] group-hover:bg-[rgba(0,0,0,0.6)] transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="absolute left-[24px] right-[24px] bottom-[24px] flex flex-col gap-[16px] text-white">
        <p className="font-['Helvetica_Now_Display'] font-medium text-[24px] leading-[30px]">
          {title}
        </p>
        <p className="font-['Helvetica_Now_Display'] text-[14px] leading-[24px]">
          {description}{" "}
          <span className="font-['Helvetica_Now_Display'] font-bold underline">
            Read full blog
          </span>
        </p>
      </div>

      {/* Border */}
      <div className="absolute inset-[-5px] border-[5px] border-solid border-white rounded-[15px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] pointer-events-none" />
    </Link>
  );
}

// Filter Section
function FilterSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="sticky top-20 z-30 bg-white border-b border-[rgba(0,0,0,0.1)] py-4">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {/* Category Pills */}
          <div className="flex gap-[10px] items-center flex-wrap">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`h-[44px] px-[16px] rounded-[100px] border border-[rgba(0,0,0,0.1)] transition-all ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-[#cfffe8] to-white"
                  : "bg-white hover:bg-[#f5f5f7]"
              }`}
            >
              <p className="font-['Inter'] text-[16px] text-[#333] leading-[30px]">
                All Blogs
              </p>
            </button>

            <button
              onClick={() => setSelectedCategory("ai")}
              className={`h-[44px] px-[16px] rounded-[80px] border border-[rgba(0,0,0,0.1)] transition-all ${
                selectedCategory === "ai"
                  ? "bg-gradient-to-r from-[#cfffe8] to-white"
                  : "bg-white hover:bg-[#f5f5f7]"
              }`}
            >
              <p className="font-['Inter'] text-[16px] text-[#333] leading-[30px]">
                AI & Intelligent Systems
              </p>
            </button>

            <button
              onClick={() => setSelectedCategory("engineering")}
              className={`h-[44px] px-[16px] rounded-[80px] border border-[rgba(0,0,0,0.1)] transition-all ${
                selectedCategory === "engineering"
                  ? "bg-gradient-to-r from-[#cfffe8] to-white"
                  : "bg-white hover:bg-[#f5f5f7]"
              }`}
            >
              <p className="font-['Inter'] text-[16px] text-[#333] leading-[30px]">
                Engineering & Architecture
              </p>
            </button>
          </div>

          {/* Dropdown - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block w-[450px]">
            <div className="relative w-full border-b border-black py-[10px]">
              <p className="font-['Helvetica_Now_Display'] font-medium text-[16px] text-[#333]">
                Select Your Blog Category
              </p>
              {/* Dropdown icon */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 size-[20px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Blog Grid Section
function BlogGrid() {
  const blogPosts = [
    {
      id: 1,
      image: imgImage61,
      title: "What Makes an Enterprise-Grade Software System? A Practical Guide",
      description: "A practical breakdown of the architecture, security, scalability, and governance standards required to build reliable enterprise software systems.",
      link: "/blog/designing-software-that-survives-scale"
    },
    {
      id: 2,
      image: imgImage62,
      title: "What Makes an Enterprise-Grade Software System? A Practical Guide",
      description: "A practical breakdown of the architecture, security, scalability, and governance standards required to build reliable enterprise software systems.",
      link: "/blog/designing-software-that-survives-scale"
    },
    {
      id: 3,
      image: imgImage63,
      title: "What Makes an Enterprise-Grade Software System? A Practical Guide",
      description: "A practical breakdown of the architecture, security, scalability, and governance standards required to build reliable enterprise software systems.",
      link: "/blog/designing-software-that-survives-scale"
    },
    {
      id: 4,
      image: imgImage64,
      title: "What Makes an Enterprise-Grade Software System? A Practical Guide",
      description: "A practical breakdown of the architecture, security, scalability, and governance standards required to build reliable enterprise software systems.",
      link: "/blog/designing-software-that-survives-scale"
    },
    {
      id: 5,
      image: imgImage65,
      title: "What Makes an Enterprise-Grade Software System? A Practical Guide",
      description: "A practical breakdown of the architecture, security, scalability, and governance standards required to build reliable enterprise software systems.",
      link: "/blog/designing-software-that-survives-scale"
    },
    {
      id: 6,
      image: imgImage61,
      title: "What Makes an Enterprise-Grade Software System? A Practical Guide",
      description: "A practical breakdown of the architecture, security, scalability, and governance standards required to build reliable enterprise software systems.",
      link: "/blog/designing-software-that-survives-scale"
    }
  ];

  return (
    <section className="py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px] bg-white">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        <div className="flex flex-wrap gap-[20px]">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              title={post.title}
              description={post.description}
              link={post.link}
            />
          ))}
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

// Main Blog Component
export function Blog() {
  return (
    <div className="w-full bg-white">
      <BlogHero />
      <FilterSection />
      <BlogGrid />
      <CTAFormSection />
    </div>
  );
}

export default Blog;
