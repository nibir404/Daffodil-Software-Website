import svgPaths from "../assets/svgs/svg-hb3t842kl2";
import imgImage35 from "figma:asset/2516de018ffa3072ce276d1f94f901c9c0bcc638.png";
import imgImage36 from "figma:asset/aea28bb90ff2bde067f020cdb22dd8d1bb0111e1.png";
import imgImage37 from "figma:asset/a66a1d2c754f12d2b86b1f4f9c26f0df997d2895.png";
import imgImage1 from "figma:asset/9e79658364ced9f6944de6225d3b0e0e50b5ad3b.png";
import imgImage73 from "figma:asset/0312bcea605fc90dfdf2e50e657b2cd982039955.png";

function Frame1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-center justify-center p-[10px] relative rounded-[10px] shrink-0 w-[120px]">
      <div className="aspect-[1024/396] relative shrink-0 w-full" data-name="image 35">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage35} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-center justify-center p-[10px] relative rounded-[10px] shrink-0 w-[120px]">
      <div className="h-[35px] relative shrink-0 w-[100px]" data-name="image 36">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage36} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[10px] shrink-0 w-[120px]">
      <div className="h-[50px] relative shrink-0 w-[100px]" data-name="image 37">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage37} />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[10px] shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <Frame1 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame2 />
      </div>
      <Frame3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <div className="h-[60px] relative shrink-0 w-[116px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] min-w-full not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">A Concern of Daffodil Group. Providing world-class software solutions and IT services since 1998.</p>
      <Frame4 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-start relative shrink-0 text-[#3c3c3c] text-[16px] w-full">
      <p className="min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap">Strategy</p>
      <p className="min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap">Design</p>
      <p className="relative shrink-0">Development</p>
      <p className="relative shrink-0">{`Ai & Automation`}</p>
      <p className="min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap">Growth</p>
      <p className="min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap">Maintain</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] relative shrink-0 text-[#111] text-[24px] w-full whitespace-pre-wrap">Solutions</p>
      <Frame11 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative whitespace-pre-wrap">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] relative shrink-0 text-[#111] text-[24px] w-full">Company</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#3c3c3c] text-[16px] w-full">About Us</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#3c3c3c] text-[16px] w-full">Portfolio</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#3c3c3c] text-[16px] w-full">Contact</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative whitespace-pre-wrap">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] relative shrink-0 text-[#111] text-[24px] w-full">Policy</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#3c3c3c] text-[16px] w-full">Terms and Conditions</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#3c3c3c] text-[16px] w-full">Privacy Policy</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#3c3c3c] text-[16px] w-full">Cookie Policy</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-start leading-[30px] min-h-px min-w-px not-italic relative">
      <Frame6 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[80px] items-start min-h-px min-w-px relative">
      <Frame10 />
      <Frame12 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white h-[52px] relative rounded-[50px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.15)] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#8d8d8d] text-[16px]">Enter your email</p>
        </div>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-right-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right-02">
          <path d="M12.3321 8H3.33203" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p16251580} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#111] relative rounded-[100px] shrink-0 size-[36px]">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <ArrowRight />
      </div>
      <div aria-hidden="true" className="absolute border border-[#111] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#01e067] content-stretch flex gap-[10px] h-full items-center overflow-clip pl-[24px] pr-[8px] py-[6px] relative rounded-[80px] shrink-0">
      <div className="-translate-x-1/2 absolute flex h-[130.588px] items-center justify-center left-[calc(50%-105.63px)] mix-blend-plus-lighter top-[-27.29px] w-[126.735px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-46.28deg]">
          <div className="h-[30px] relative w-[152px]">
            <div className="absolute inset-[-180%_-35.53%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 138">
                <g filter="url(#filter0_f_1_63237)" id="Ellipse 2" style={{ mixBlendMode: "plus-lighter" }}>
                  <ellipse cx="130" cy="69" fill="var(--fill-0, white)" fillOpacity="0.8" rx="76" ry="15" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_1_63237" width="260" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_63237" stdDeviation="27" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[16px]">Schedule a Meeting</p>
      <Frame5 />
    </div>
  );
}

function PrimaryCta() {
  return (
    <div className="content-stretch flex h-[52px] items-center overflow-clip relative shrink-0" data-name="Primary CTA">
      <Frame />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame17 />
      <PrimaryCta />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[474px]">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px] w-full whitespace-pre-wrap">Contact US</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-full whitespace-pre-wrap">Daffodil Tower, 4/2, Sobhanbag, Mirpur Road, Dhaka-1207</p>
      <Frame16 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[100px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame14 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[20px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.2)] border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px]">Find us at</p>
      <div className="h-[48px] relative rounded-[130px] shrink-0 w-[119px]" data-name="image 73">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[130px] size-full" src={imgImage73} />
      </div>
    </div>
  );
}

function Facebook1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="facebook-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="facebook-02">
          <path clipRule="evenodd" d={svgPaths.p3521b980} fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Facebook() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[30px] shrink-0 size-[40px]" data-name="Facebook">
      <div aria-hidden="true" className="absolute border border-[#3c3c3c] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <Facebook1 />
    </div>
  );
}

function Youtube() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="youtube">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="youtube">
          <path d={svgPaths.p38ca2800} id="Vector" stroke="var(--stroke-0, #111111)" strokeWidth="1.5" />
          <path d={svgPaths.pfbab680} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Twitter() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[30px] shrink-0 size-[40px]" data-name="Twitter">
      <div aria-hidden="true" className="absolute border border-[#3c3c3c] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <Youtube />
    </div>
  );
}

function Linkedin1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="linkedin-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="linkedin-02">
          <path d={svgPaths.p30aaad00} id="Vector" stroke="var(--stroke-0, #111111)" strokeWidth="1.5" />
          <path d={svgPaths.p3307d700} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeWidth="1.5" />
          <path d={svgPaths.p3eb53b00} id="Vector_3" stroke="var(--stroke-0, #111111)" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Linkedin() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[30px] shrink-0 size-[40px]" data-name="Linkedin">
      <div aria-hidden="true" className="absolute border border-[#3c3c3c] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <Linkedin1 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center justify-end pl-[20px] relative shrink-0">
      <Facebook />
      <Twitter />
      <Linkedin />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <Frame23 />
      <div className="flex flex-row items-center self-stretch">
        <Frame20 />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <Frame22 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[10px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px]">© 2025 Daffodil Software Limited. All rights reserved.</p>
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-start left-[200px] top-[120px] w-[1520px]">
      <Frame13 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1520 1">
            <path d="M0 0.5H1520" id="Vector 1513" stroke="var(--stroke-0, black)" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
      <Frame18 />
    </div>
  );
}

export default function Frame9() {
  return (
    <div className="bg-gradient-to-b from-white relative size-full to-[#c4eeda]">
      <Frame19 />
    </div>
  );
}
