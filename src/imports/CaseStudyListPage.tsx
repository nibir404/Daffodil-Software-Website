import svgPaths from "../assets/svgs/svg-y2oboo8vae";
import imgImage1 from "figma:asset/9e79658364ced9f6944de6225d3b0e0e50b5ad3b.png";
import imgImage35 from "figma:asset/2516de018ffa3072ce276d1f94f901c9c0bcc638.png";
import imgImage36 from "figma:asset/aea28bb90ff2bde067f020cdb22dd8d1bb0111e1.png";
import imgImage37 from "figma:asset/a66a1d2c754f12d2b86b1f4f9c26f0df997d2895.png";
import imgImage73 from "figma:asset/0312bcea605fc90dfdf2e50e657b2cd982039955.png";
import imgRectangle694 from "figma:asset/2bbed7b9aefb2560383a225effcab3706e6f4e96.png";
import imgRectangle695 from "figma:asset/68a19bf652cfa6adebd1002335c2aed29ed05709.png";
import imgRectangle696 from "figma:asset/8f81926c5c669b3a2c3996794f3d06532cfb4a1c.png";
import imgRectangle697 from "figma:asset/3faf2925f62a0636744277dd495c7dbc40efda7f.png";
import imgRectangle698 from "figma:asset/8ba1ff5f04dae926ead6b1f31702c5a441a88e82.png";
import imgRectangle699 from "figma:asset/2ec3445415ad4e49c9b2846cad47e9bf6abde958.png";
import imgRectangle700 from "figma:asset/2d1b3acf24bdc2c35328e3002a511525d1a9958b.png";
import imgRectangle701 from "figma:asset/b6dcbbe25d4251535502a3f9814836b7882bd7a8.png";

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

function Frame15() {
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

function Frame16() {
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

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] relative shrink-0 text-[#111] text-[24px] w-full whitespace-pre-wrap">Solutions</p>
      <Frame16 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative whitespace-pre-wrap">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] relative shrink-0 text-[#111] text-[24px] w-full">Company</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#3c3c3c] text-[16px] w-full">About Us</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#3c3c3c] text-[16px] w-full">Portfolio</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#3c3c3c] text-[16px] w-full">Contact</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative whitespace-pre-wrap">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] relative shrink-0 text-[#111] text-[24px] w-full">Policy</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#3c3c3c] text-[16px] w-full">Terms and Conditions</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#3c3c3c] text-[16px] w-full">Privacy Policy</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#3c3c3c] text-[16px] w-full">Cookie Policy</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-start leading-[30px] min-h-px min-w-px not-italic relative">
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[80px] items-start min-h-px min-w-px relative">
      <Frame15 />
      <Frame17 />
    </div>
  );
}

function Frame22() {
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
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
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
    <div className="bg-black relative rounded-[100px] shrink-0 size-[36px]">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <ArrowRight />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
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
                <g filter="url(#filter0_f_101_1421)" id="Ellipse 2" style={{ mixBlendMode: "plus-lighter" }}>
                  <ellipse cx="130" cy="69" fill="var(--fill-0, white)" fillOpacity="0.8" rx="76" ry="15" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_f_101_1421" width="260" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_101_1421" stdDeviation="27" />
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

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame22 />
      <div className="content-stretch flex h-[52px] items-center overflow-clip relative shrink-0" data-name="Primary CTA">
        <Frame />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[474px]">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px] w-full whitespace-pre-wrap">Contact US</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-full whitespace-pre-wrap">Daffodil Tower, 4/2, Sobhanbag, Mirpur Road, Dhaka-1207</p>
      <Frame21 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[100px] items-start relative shrink-0 w-full">
      <Frame20 />
      <Frame19 />
    </div>
  );
}

function Frame36() {
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

function Facebook() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="facebook-02">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="facebook-02">
          <path clipRule="evenodd" d={svgPaths.p3521b980} fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Youtube() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="youtube">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="youtube">
          <path d={svgPaths.p38ca2800} id="Vector" stroke="var(--stroke-0, #111111)" strokeWidth="1.5" />
          <path d={svgPaths.pfbab680} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Linkedin() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="linkedin-02">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="linkedin-02">
          <path d={svgPaths.p30aaad00} id="Vector" stroke="var(--stroke-0, #111111)" strokeWidth="1.5" />
          <path d={svgPaths.p3307d700} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeWidth="1.5" />
          <path d={svgPaths.p3eb53b00} id="Vector_3" stroke="var(--stroke-0, #111111)" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center justify-end pl-[20px] relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[30px] shrink-0 size-[40px]" data-name="Facebook">
        <div aria-hidden="true" className="absolute border border-[#3c3c3c] border-solid inset-0 pointer-events-none rounded-[30px]" />
        <Facebook />
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[30px] shrink-0 size-[40px]" data-name="Twitter">
        <div aria-hidden="true" className="absolute border border-[#3c3c3c] border-solid inset-0 pointer-events-none rounded-[30px]" />
        <Youtube />
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[30px] shrink-0 size-[40px]" data-name="Linkedin">
        <div aria-hidden="true" className="absolute border border-[#3c3c3c] border-solid inset-0 pointer-events-none rounded-[30px]" />
        <Linkedin />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <Frame36 />
      <div className="flex flex-row items-center self-stretch">
        <Frame25 />
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <Frame35 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[10px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#3c3c3c] text-[16px]">© 2025 Daffodil Software Limited. All rights reserved.</p>
          <Frame34 />
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-start left-[200px] top-[120px] w-[1520px]">
      <Frame18 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1520 1">
            <path d="M0 0.5H1520" id="Vector 1513" stroke="var(--stroke-0, black)" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
      <Frame23 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="-translate-x-1/2 absolute bg-gradient-to-b from-white h-[730px] left-1/2 overflow-clip to-[#c4eeda] top-[3342px] w-[1920px]">
      <Frame24 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="absolute h-[700px] left-0 top-0 w-[740px]">
      <div className="absolute h-[700px] left-0 rounded-[10px] top-0 w-[740px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[135.92%] left-0 max-w-none top-[-31.19%] w-full" src={imgRectangle694} />
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="h-[500px] relative rounded-[10px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame57 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.2)] border-solid inset-[-2px] pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">Government</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">Web Portal</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame26 />
      <Frame37 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#111] text-[24px] w-[min-content] whitespace-pre-wrap">Bangladesh National Cadet Core (BNCC)</p>
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Digital transformation of cadet management system with training records, attendance tracking, and reporting.</p>
      <Frame38 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="absolute h-[700px] left-0 top-0 w-[740px]">
      <div className="absolute h-[700px] left-0 rounded-[10px] top-0 w-[740px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[187.87%] left-0 max-w-none top-[-56.45%] w-full" src={imgRectangle695} />
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="h-[500px] relative rounded-[10px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame61 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.2)] border-solid inset-[-2px] pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">Education</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">Web Portal</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame27 />
      <Frame40 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#111] text-[24px] w-[min-content] whitespace-pre-wrap">Bangladesh University of Textiles (BUTEX)</p>
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Integrated university management system with specialized modules for textile education.</p>
      <Frame39 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[740px]" data-name="Case Study Card">
        <Frame56 />
        <Frame54 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="content-stretch flex flex-col gap-[16px] h-full items-start relative shrink-0 w-[740px]" data-name="Case Study Card">
          <Frame59 />
          <Frame55 />
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="absolute h-[700px] left-0 top-0 w-[740px]">
      <div className="absolute h-[700px] left-0 rounded-[10px] top-0 w-[740px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[132.14%] left-0 max-w-none top-[-0.03%] w-full" src={imgRectangle696} />
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="h-[500px] relative rounded-[10px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame64 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.2)] border-solid inset-[-2px] pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">Healthcare</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">ERP</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame28 />
      <Frame42 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#111] text-[24px] w-[min-content] whitespace-pre-wrap">BCDC - Bakhtunnessa Chowdhury Diabetes Centre</p>
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Comprehensive Hospital Management System for Bcdc to streamline and improve their Hospital’s operations.</p>
      <Frame41 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="absolute h-[700px] left-0 top-0 w-[740px]">
      <div className="absolute h-[700px] left-0 rounded-[10px] top-0 w-[740px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[158.57%] left-0 max-w-none top-0 w-full" src={imgRectangle697} />
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="h-[500px] relative rounded-[10px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame67 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.2)] border-solid inset-[-2px] pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">Corporate</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">ERP</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame29 />
      <Frame44 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#111] text-[24px] w-[min-content] whitespace-pre-wrap">East Coast Group</p>
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Complete HR Management system for the East Coast Group, including inventory management, billing, and other module.</p>
      <Frame43 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[740px]" data-name="Case Study Card">
        <Frame63 />
        <Frame65 />
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[740px]" data-name="Case Study Card">
        <Frame66 />
        <Frame68 />
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="absolute h-[700px] left-0 top-0 w-[740px]">
      <div className="absolute h-[700px] left-0 rounded-[10px] top-0 w-[740px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-full left-[-13.06%] max-w-none top-[-15.15%] w-[126.13%]" src={imgRectangle698} />
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="h-[500px] relative rounded-[10px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame71 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.2)] border-solid inset-[-2px] pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">Restaurant</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">ERP</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame30 />
      <Frame46 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#111] text-[24px] w-[min-content] whitespace-pre-wrap">Green Garden Restaurant</p>
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Custom point-of-sale system with inventory management, table reservations, and customer loyalty features.</p>
      <Frame45 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="absolute h-[700px] left-0 top-0 w-[740px]">
      <div className="absolute h-[700px] left-0 rounded-[10px] top-0 w-[740px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle699} />
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="h-[500px] relative rounded-[10px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame74 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.2)] border-solid inset-[-2px] pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame31() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">Education</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">International</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame31 />
      <Frame48 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#111] text-[24px] w-[min-content] whitespace-pre-wrap">HIU - Horseed International University, Somalia</p>
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Complete university ERP system implemented for an international university in Somalia.</p>
      <Frame47 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] h-[660px] items-start relative shrink-0 w-[740px]" data-name="Case Study Card">
        <Frame70 />
        <Frame72 />
      </div>
      <div className="content-stretch flex flex-col gap-[16px] h-[660px] items-start relative shrink-0 w-[740px]" data-name="Case Study Card">
        <Frame73 />
        <Frame75 />
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="absolute h-[700px] left-0 top-0 w-[740px]">
      <div className="absolute h-[700px] left-0 rounded-[10px] top-0 w-[740px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[92.32%] left-0 max-w-none top-[-2.59%] w-full" src={imgRectangle700} />
        </div>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="h-[500px] relative rounded-[10px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame78 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.2)] border-solid inset-[-2px] pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame32() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">Healthcare</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">Pharmaceutical</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame32 />
      <Frame50 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#111] text-[24px] w-[min-content] whitespace-pre-wrap">Novo Healthcare and Pharma Ltd</p>
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Comprehensive ERP for Novo Pharma to streamline and enhance its pharmaceutical operations.</p>
      <Frame49 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="absolute h-[700px] left-0 top-0 w-[740px]">
      <div className="absolute h-[700px] left-0 rounded-[10px] top-0 w-[740px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[105.71%] left-0 max-w-none top-[-2.86%] w-full" src={imgRectangle701} />
        </div>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="h-[500px] relative rounded-[10px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame81 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.2)] border-solid inset-[-2px] pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">Government</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="backdrop-blur-[67px] bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px]">Web Portal</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame33 />
      <Frame52 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Helvetica_Now_Display:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#111] text-[24px] w-[min-content] whitespace-pre-wrap">SAHIC (Society for Assistance to Hearing Impaired Children)</p>
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Smart Hospital Management Solution for SAHIC to automate processes, improve service delivery, and ensure seamless hospital operations.</p>
      <Frame51 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] h-[660px] items-start relative shrink-0 w-[740px]" data-name="Case Study Card">
        <Frame77 />
        <Frame79 />
      </div>
      <div className="content-stretch flex flex-col gap-[16px] h-[660px] items-start relative shrink-0 w-[740px]" data-name="Case Study Card">
        <Frame80 />
        <Frame82 />
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-start left-[200px] top-[402px] w-[1520px]">
      <Frame58 />
      <Frame62 />
      <Frame69 />
      <Frame76 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica_Now_Display:Medium',sans-serif] items-start justify-center leading-[normal] pb-[20px] relative shrink-0 text-[#111] text-[64px] w-full">
      <p className="relative shrink-0">{`Real Projects. `}</p>
      <p className="relative shrink-0">Real Outcomes.</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center not-italic relative shrink-0 w-full">
      <Frame6 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#3c3c3c] text-[20px] w-full whitespace-pre-wrap">Explore a collection of real-world implementations where complex business challenges were translated into practical, scalable digital solutions. Each case highlights how strategy, technology, and execution came together to deliver measurable impact.</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame10 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[1000px]">
      <Frame8 />
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="absolute left-[50.6px] size-[40px] top-[50.59px]" data-name="arrow-down-02">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="arrow-down-02">
          <path d="M20 30.8367V8.33658" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p18dfdb00} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame53() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-[200px] top-[60px] w-[1520.187px]">
      <Frame7 />
      <div className="relative shrink-0 size-[140px]" data-name="Scroller">
        <div className="absolute left-[30.6px] size-[80px] top-[30.59px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
            <circle cx="40" cy="40" fill="var(--fill-0, #01E067)" id="Ellipse 160" r="40" />
          </svg>
        </div>
        <ArrowDown />
      </div>
    </div>
  );
}

export default function CaseStudyListPage() {
  return (
    <div className="bg-white relative size-full" data-name="Case Study List Page">
      <Frame14 />
      <Frame60 />
      <Frame53 />
    </div>
  );
}
