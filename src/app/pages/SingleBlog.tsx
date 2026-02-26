import { useState } from "react";
import { Link, useParams } from "react-router";
import svgPaths from "../../assets/svgs/svg-r48kauc93f";
import imgRectangle690 from "figma:asset/962581dc4020c3e24e6269c4dda08c7e05bcea3d.png";
import imgImage61 from "figma:asset/d80fb2985b8e5fe3ece58610c38ac6e3b7c3fac6.png";
import imgImage62 from "figma:asset/51c3b1a51cb3dc090c475e60ec7af1e01261ddc0.png";
import imgImage63 from "figma:asset/feab9f0144be05738767103bba60379a87da3aa5.png";
import { InsightsSection } from "../components/InsightsSection";

// Blog data structure
interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  heroImage: string;
  introduction: string[];
  sections: {
    title: string;
    content: string[];
    image?: string;
  }[];
  relatedPosts: {
    id: string;
    title: string;
    description: string;
    image: string;
  }[];
}

// Blog database (in a real app, this would come from an API or CMS)
const blogDatabase: Record<string, BlogPost> = {
  "designing-software-that-survives-scale": {
    slug: "designing-software-that-survives-scale",
    title: "Designing Software That Survives Scale",
    author: "Emily Richardson",
    date: "July 15, 2025",
    readTime: "8 min read",
    category: "Engineering",
    heroImage: imgRectangle690,
    introduction: [
      "Most software systems don't fail when they launch.",
      "They fail when they succeed.",
      "",
      "A product gains users. Features expand. Teams grow. Expectations rise. What once felt simple slowly becomes fragile. Releases feel risky. Fixes take longer than building new features ever did. Eventually, progress slows not because the team is incapable, but because the system resists change.",
      "",
      "This is not a story about bad engineering.",
      "It's a story about unplanned growth.",
      "",
      "In this article, we break down what scaling actually means, why many systems struggle under it, and how teams can design software that grows without exhausting the people building it."
    ],
    sections: [
      {
        title: "What \"Scale\" Actually Means",
        content: [
          "Scale is often misunderstood as a purely technical concern more traffic, more data, more infrastructure. In practice, the hardest scaling problems have little to do with servers. They emerge when more people work on the same system, when requirements change faster than structure, and when decisions made for speed begin to resist progress. User growth stresses performance, data growth stresses storage and retrieval, but team growth stresses clarity, ownership, and decision-making. When systems are not designed to absorb these pressures, friction appears everywhere often long before any system metrics raise alarms."
        ]
      },
      {
        title: "The Hidden Cost of Early Convenience",
        content: [
          "Shortcuts feel harmless at the beginning:",
          "",
          "• Hard-coded logic instead of configuration",
          "• One massive service instead of clear boundaries",
          "• \"We'll refactor later\" instead of intentional design",
          "",
          "Early convenience compounds into long-term friction.",
          "Not because the team lacked skill—but because urgency replaced structure."
        ]
      },
      {
        title: "The Real Source of Complexity",
        content: [
          "Complexity rarely comes from bad decisions. It comes from reasonable decisions made under pressure. A shortcut taken to meet a deadline. A feature added without revisiting earlier assumptions. A workaround that quietly becomes permanent. Each choice makes sense in isolation, yet over time they accumulate into systems that are difficult to reason about and risky to change. This accidental complexity does not improve user value, but it steadily increases the cognitive load on teams. Eventually, progress slows not because the problem is hard, but because understanding the system feels harder than building something new."
        ],
        image: imgRectangle690
      },
      {
        title: "How Teams Experience Scaling Failure",
        content: [
          "Before customers feel pain, teams do. Developers become cautious about touching certain areas of the codebase. Knowledge concentrates around a few individuals. Code reviews turn defensive. Documentation exists, but no one fully trusts it. The system technically works, yet confidence is gone. When teams no longer trust the system, velocity drops even if headcount increases. At this stage, scaling stops being an engineering problem and becomes a people problem—one rooted in uncertainty, fear of side effects, and lack of clarity."
        ]
      }
    ],
    relatedPosts: [
      {
        id: "1",
        title: "What Makes an Enterprise-Grade Software System? A Practical Guide",
        description: "A practical breakdown of the architecture, security, scalability, and governance standards required to build reliable enterprise software systems.",
        image: imgImage61
      },
      {
        id: "2",
        title: "Custom Software vs Off-the-Shelf Solutions: Which Is Right for You?",
        description: "An objective comparison to help enterprises decide when custom software delivers more long-term value than ready-made solutions.",
        image: imgImage62
      },
      {
        id: "3",
        title: "Digital Transformation for Enterprises: Where to Start",
        description: "A strategic guide for organizations planning digital transformation—covering common pitfalls, priorities, and realistic execution paths.",
        image: imgImage63
      }
    ]
  }
};

// Hero Section
function BlogHeroSection({ post }: { post: BlogPost }) {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={post.heroImage} 
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient Overlay - left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.8)] from-[20%] to-[rgba(0,0,0,0)]" />
      </div>

      {/* Border */}
      <div className="absolute inset-[-2px] border-2 border-[rgba(0,0,0,0.1)] pointer-events-none" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="w-full px-6 md:px-12 lg:px-24 xl:px-[200px]">
          <div className="max-w-[733px] flex flex-col gap-8 md:gap-10 lg:gap-[40px]">
            {/* Tags */}
            <div className="flex gap-[6px] items-center">
              <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.3)] px-3 py-1.5 rounded-[10px] relative">
                <div className="absolute inset-[-1px] border border-[rgba(255,255,255,0.1)] rounded-[11px] pointer-events-none" />
                <p className="font-['Inter'] font-bold text-[14px] leading-[30px] text-white">Latest</p>
              </div>
              <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.3)] px-3 py-1.5 rounded-[10px] relative">
                <div className="absolute inset-[-1px] border border-[rgba(255,255,255,0.1)] rounded-[11px] pointer-events-none" />
                <p className="font-['Inter'] font-bold text-[14px] leading-[30px] text-white">{post.category}</p>
              </div>
            </div>

            {/* Title */}
            <div className="flex flex-col pb-5">
              <h1 className="font-['Helvetica_Now_Display'] font-medium text-4xl md:text-5xl lg:text-[64px] leading-normal text-white">
                {post.title}
              </h1>
            </div>

            {/* Author and Date */}
            <div className="font-['Inter'] text-base md:text-[20px] leading-[30px] text-white">
              <span className="font-bold">Author:</span>
              <span> {post.author} | </span>
              <span className="font-bold">Published at</span>
              <span> {post.date}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Share and Newsletter Sidebar
function ShareSidebar() {
  return (
    <aside className="lg:sticky lg:top-[120px] bg-[#f5f5f7] rounded-[10px] p-6 md:p-8 lg:p-[40px] flex flex-col gap-6">
      {/* Share Section */}
      <div className="flex flex-col gap-4">
        <h3 className="font-['Helvetica_Now_Display'] font-bold text-2xl md:text-3xl lg:text-[36px] leading-normal text-[#111]">
          Share This Article
        </h3>
        <div className="flex gap-[10px] items-center h-[48px]">
          <button 
            className="flex items-center justify-center size-[40px] rounded-[30px] border border-[#3c3c3c] hover:bg-[#3c3c3c] transition-all group"
            aria-label="Share on Facebook"
          >
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path 
                clipRule="evenodd" 
                d={svgPaths.p3521b980} 
                fillRule="evenodd" 
                stroke="currentColor"
                className="text-[#111] group-hover:text-white transition-colors"
                strokeLinejoin="round" 
                strokeWidth="1.5" 
              />
            </svg>
          </button>
          <button 
            className="flex items-center justify-center size-[40px] rounded-[30px] border border-[#3c3c3c] hover:bg-[#3c3c3c] transition-all group"
            aria-label="Share on YouTube"
          >
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path 
                d={svgPaths.p38ca2800} 
                stroke="currentColor"
                className="text-[#111] group-hover:text-white transition-colors"
                strokeWidth="1.5" 
              />
              <path 
                d={svgPaths.pfbab680} 
                stroke="currentColor"
                className="text-[#111] group-hover:text-white transition-colors"
                strokeLinejoin="round" 
                strokeWidth="1.5" 
              />
            </svg>
          </button>
          <button 
            className="flex items-center justify-center size-[40px] rounded-[30px] border border-[#3c3c3c] hover:bg-[#3c3c3c] transition-all group"
            aria-label="Share on LinkedIn"
          >
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path 
                d={svgPaths.p30aaad00} 
                stroke="currentColor"
                className="text-[#111] group-hover:text-white transition-colors"
                strokeWidth="1.5" 
              />
              <path 
                d={svgPaths.p3307d700} 
                stroke="currentColor"
                className="text-[#111] group-hover:text-white transition-colors"
                strokeWidth="1.5" 
              />
              <path 
                d={svgPaths.p3eb53b00} 
                stroke="currentColor"
                className="text-[#111] group-hover:text-white transition-colors"
                strokeLinejoin="round" 
                strokeWidth="1.5" 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full relative">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 310 1">
          <path d="M0 0.5H310" stroke="black" strokeOpacity="0.2" />
        </svg>
      </div>

      {/* Newsletter Section */}
      <div className="flex flex-col gap-4">
        <h3 className="font-['Helvetica_Now_Display'] font-medium text-2xl md:text-3xl lg:text-[36px] leading-normal text-[#111]">
          Newsletter
        </h3>
        <button className="h-[52px] rounded-[80px] border border-[#111] flex items-center justify-center px-6 hover:bg-[#111] hover:text-white transition-all group relative overflow-hidden backdrop-blur-[10px]">
          {/* Glow effect */}
          <div className="absolute flex h-[130.588px] items-center justify-center left-[calc(50%-63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="rotate-[-46.28deg]">
              <div className="h-[30px] w-[152px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                  <g filter="url(#filter0_f_newsletter)" style={{ mixBlendMode: "plus-lighter" }}>
                    <ellipse cx="130" cy="69" fill="white" fillOpacity="0.6" rx="76" ry="15" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_newsletter" width="260" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_newsletter" stdDeviation="27" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <span className="font-['Helvetica_Now_Display'] font-medium text-[16px] leading-normal relative z-10">
            Subscribe to Newsletter
          </span>
        </button>
      </div>
    </aside>
  );
}

// Blog Content Section
function BlogContent({ post }: { post: BlogPost }) {
  return (
    <article className="flex flex-col gap-12 md:gap-16 lg:gap-[60px] py-8 md:py-12 lg:py-[120px]">
      {/* Introduction */}
      <div className="flex flex-col gap-6">
        <h2 className="font-['Helvetica_Now_Display'] font-medium text-4xl md:text-5xl lg:text-[64px] leading-[1.17] text-[#111] text-left">
          Introduction
        </h2>
        <div className="font-['Inter'] text-base md:text-[16px] leading-[30px] text-[#3c3c3c]">
          {post.introduction.map((para, idx) => (
            para === "" ? (
              <p key={idx} className="mb-0">&nbsp;</p>
            ) : (
              <p key={idx} className="mb-0">{para}</p>
            )
          ))}
        </div>
      </div>

      {/* Sections */}
      {post.sections.map((section, idx) => (
        <div key={idx} className="flex flex-col gap-6">
          <h2 className="font-['Helvetica_Now_Display'] font-medium text-3xl md:text-4xl lg:text-[48px] leading-[1.35] text-[#111]">
            {section.title}
          </h2>
          
          {/* Check if content has bullets */}
          {section.content.some(line => line.startsWith('•')) ? (
            <div className="font-['Inter'] text-base md:text-[16px] leading-[30px] text-[#3c3c3c]">
              {section.content.map((line, lineIdx) => {
                if (line === "") {
                  return <p key={lineIdx} className="leading-[30px] mb-0">&nbsp;</p>;
                } else if (line.startsWith('•')) {
                  return (
                    <ul key={lineIdx} className="list-disc mb-0">
                      <li className="mb-0 ms-[24px]">
                        <span className="leading-[30px]">{line.substring(2)}</span>
                      </li>
                    </ul>
                  );
                } else {
                  return <p key={lineIdx} className="leading-[30px] mb-0">{line}</p>;
                }
              })}
            </div>
          ) : (
            <div className="font-['Inter'] text-base md:text-[16px] leading-[30px] text-[#3c3c3c] whitespace-pre-wrap">
              {section.content.join('\n')}
            </div>
          )}
          
          {section.image && (
            <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-[10px] overflow-hidden mt-4">
              <img 
                src={section.image} 
                alt={section.title}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          )}
        </div>
      ))}
    </article>
  );
}

// Related Articles Section
function RelatedArticles({ posts }: { posts: BlogPost['relatedPosts'] }) {
  return (
    <section className="py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        <div className="flex flex-col gap-8 md:gap-12 items-center text-center mb-12">
          <h2 className="font-['Helvetica_Now_Display'] font-medium text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-[1.2] text-[#111] max-w-[1200px]">
            Enterprise Software, AI & Digital Transformation Insights
          </h2>
          <p className="font-['Inter'] text-base md:text-[16px] leading-[30px] text-[#3c3c3c] max-w-[656px]">
            In-depth articles covering custom software development, AI automation, ERP systems, and enterprise digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="bg-[#f6f6f6] h-[500px] relative rounded-[10px] overflow-hidden group hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              {/* Background Image with Blur */}
              <div className="absolute inset-0">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover blur-[27px] group-hover:blur-[20px] transition-all duration-300"
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] group-hover:bg-[rgba(0,0,0,0.6)] transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="absolute left-6 right-6 bottom-6 flex flex-col gap-4 text-white">
                <h3 className="font-['Helvetica_Now_Display'] font-medium text-xl md:text-[24px] leading-[1.25]">
                  {post.title}
                </h3>
                <p className="font-['Helvetica_Now_Display'] text-sm md:text-[14px] leading-[24px]">
                  {post.description}{" "}
                  <span className="font-bold underline">Read full blog</span>
                </p>
              </div>

              {/* Border */}
              <div className="absolute inset-[-5px] border-[5px] border-solid border-white rounded-[15px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <Link
            to="/blog"
            className="h-[52px] px-8 rounded-[80px] border-2 border-[#111] flex items-center justify-center hover:bg-[#111] hover:text-white transition-all group"
          >
            <span className="font-['Helvetica_Now_Display'] font-medium text-[16px]">
              Learn more
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Main Single Blog Component
export function SingleBlog() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogDatabase[slug] : null;

  // If blog post not found, show 404
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="font-['Helvetica_Now_Display'] font-medium text-6xl text-[#111] mb-4">
            404
          </h1>
          <p className="font-['Inter'] text-xl text-[#3c3c3c] mb-8">
            Blog post not found
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#01e067] rounded-[80px] font-['Helvetica_Now_Display'] font-medium text-[#111] hover:bg-[#00c757] transition-all"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <BlogHeroSection post={post} />

      {/* Main Content Area */}
      <div className="relative bg-white py-12 md:py-16 lg:py-[120px]">
        <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20">
            {/* Sidebar - Shows on top on mobile, side on desktop */}
            <div className="w-full lg:w-[390px] lg:shrink-0 order-1 lg:order-2">
              <ShareSidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 order-2 lg:order-1 max-w-[1070px]">
              <BlogContent post={post} />
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <InsightsSection />
    </div>
  );
}

export default SingleBlog;
