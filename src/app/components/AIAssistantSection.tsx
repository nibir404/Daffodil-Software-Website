import { useState, useEffect } from "react";
import AiFlow from "../../imports/AiFlow";
import glowImage from "figma:asset/9beb2da44c3b28b870e72d4be06a965793fd67ef.png";

export function AIAssistantSection() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-[#1a2847] via-[#233256] to-[#2c4a6d]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15),transparent_70%)]" />

      <div className="px-6 md:px-12 lg:px-24 xl:px-[100px] relative z-10">
        <div className="max-w-[1520px] mx-auto">
          {/* Header - Two Column Layout */}
          <div className="flex items-start justify-between gap-12 mb-12 max-w-[1400px] mx-auto">
            {/* Left: Heading */}
            <div className="w-[955px] shrink-0">
              <h2 className="font-['Helvetica_Now_Display'] font-medium text-[64px] text-white leading-[75px]">
                Looking for quick information?
                <br />
                Ask our smart AI Assistant.
              </h2>
            </div>

            {/* Right: Description */}
            <div className="w-[396px] shrink-0">
              <p className="font-['Inter'] font-normal text-[16px] text-white leading-[30px]">
                Our AI capabilities help teams make faster, smarter decisions across software delivery, operations, and infrastructure. From architecture guidance to workflow optimization, AI works as an assistant—not a black box.
              </p>
            </div>
          </div>

          {/* AI Terminal - Using Figma Design with proper container */}
          <div className="w-full relative" style={{ paddingTop: "40px", paddingBottom: "20px" }}>
            {/* Premium Glow Background */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[800px] pointer-events-none opacity-60">
              <img
                src={glowImage}
                alt=""
                className="w-full h-full object-contain"
                style={{ filter: "blur(40px)" }}
              />
            </div>

            {/* Additional CSS Glow for extra premium feel */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] pointer-events-none">
              <div className="absolute inset-0 bg-gradient-radial from-[rgba(59,130,246,0.3)] via-[rgba(37,99,235,0.15)] to-transparent blur-3xl"></div>
            </div>

            <div className="w-full max-w-[1400px] h-[600px] mx-auto relative z-10">
              <AiFlow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
