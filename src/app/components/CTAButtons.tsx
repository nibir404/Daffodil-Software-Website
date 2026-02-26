import svgPaths from "../../assets/svgs/svg-kr2unwykat";
import { Link } from "react-router";

interface PrimaryCTAProps {
  text?: string;
  onClick?: () => void;
  href?: string;
}

export function PrimaryCTA({ text = "Request a Demo", onClick, href = "/contact" }: PrimaryCTAProps) {
  const content = (
    <>
      {/* Light Flare Effect */}
      <div className="absolute flex h-[130.588px] items-center justify-center left-[calc(50%-105.63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px] group-hover:animate-[flare_0.6s_ease-in-out]">
        <div className="rotate-[-46.28deg]">
          <div className="h-[30px] w-[152px]">
            <div className="absolute inset-[-180%_-35.53%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                <g filter="url(#filter0_f_primary_cta)" style={{ mixBlendMode: "plus-lighter" }}>
                  <ellipse cx="130" cy="69" fill="white" fillOpacity="0.8" rx="76" ry="15" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_primary_cta" width="260" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_primary_cta" stdDeviation="27" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <span className="font-['Helvetica_Now_Display'] font-medium text-base text-[#111] relative z-10">
        {text}
      </span>

      {/* Arrow Button */}
      <div className="bg-[#111] rounded-full size-9 flex items-center justify-center shrink-0 relative z-10 transition-all duration-300 group-hover:scale-90 group-hover:ring-2 group-hover:ring-[#111]">
        <svg className="size-4" fill="none" viewBox="0 0 16 16">
          <path d="M12.3321 8H3.33203" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p16251580} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      </div>
    </>
  );

  // If onClick is provided, use a button
  if (onClick) {
    return (
      <button 
        onClick={onClick}
        className="group relative bg-[#01e067] h-[52px] rounded-[80px] px-6 pr-2 overflow-hidden flex items-center gap-2.5 hover:bg-[#00cc5c] transition-all"
      >
        {content}
      </button>
    );
  }

  // Otherwise, use Link to navigate to contact page
  return (
    <Link 
      to={href}
      className="group relative bg-[#01e067] h-[52px] rounded-[80px] px-6 pr-2 overflow-hidden flex items-center gap-2.5 hover:bg-[#00cc5c] transition-all"
    >
      {content}
    </Link>
  );
}

interface SecondaryCTAProps {
  text?: string;
  onClick?: () => void;
  darkMode?: boolean;
}

export function SecondaryCTA({ text = "View All Products", onClick, darkMode = false }: SecondaryCTAProps) {
  return (
    <button 
      onClick={onClick}
      className={`group relative h-[52px] rounded-[80px] px-6 overflow-hidden backdrop-blur-[10px] border transition-all ${
        darkMode 
          ? 'border-white hover:bg-white' 
          : 'border-[#111] hover:bg-[#111]'
      }`}
    >
      {/* Light Flare Effect */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-plus-lighter pointer-events-none">
        <div className="rotate-[-46.28deg]">
          <div className="h-[30px] w-[152px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
              <g filter="url(#filter0_f_secondary_cta)" style={{ mixBlendMode: "plus-lighter" }}>
                <ellipse cx="130" cy="69" fill="white" fillOpacity="0.6" rx="76" ry="15" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_secondary_cta" width="260" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_secondary_cta" stdDeviation="27" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <span className={`font-['Helvetica_Now_Display'] font-medium text-base relative z-10 transition-colors flex items-center gap-2 ${
        darkMode 
          ? 'text-white group-hover:text-[#111]' 
          : 'text-[#111] group-hover:text-white'
      }`}>
        {text}
        {darkMode && (
          <svg className="size-4" fill="none" viewBox="0 0 16 16">
            <path d="M12.3321 8H3.33203" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p16251580} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        )}
      </span>
    </button>
  );
}
