import svgPaths from "../assets/svgs/svg-f0ulzcw64y";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center not-italic relative shrink-0 text-center w-[1520px]">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[75px] relative shrink-0 text-[#111] text-[64px]">Our Technology Expertise</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#3c3c3c] text-[16px] w-[720px] whitespace-pre-wrap">We use secure, scalable, modern technologies across web, mobile, and cloud ecosystems.</p>
    </div>
  );
}

function LogosReact() {
  return (
    <div className="h-[21px] relative shrink-0 w-[24px]" data-name="logos:react">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 21">
        <g clipPath="url(#clip0_1_15177)" id="logos:react">
          <path d={svgPaths.p38460f0} fill="var(--fill-0, #00D8FF)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_15177">
            <rect fill="white" height="21" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function React() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[40px]" data-name="React">
      <LogosReact />
    </div>
  );
}

function Tech() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0" data-name="Tech">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <React />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">React</p>
    </div>
  );
}

function LogosFlutter() {
  return (
    <div className="h-[24px] relative shrink-0 w-[19px]" data-name="logos:flutter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 24">
        <g clipPath="url(#clip0_1_13327)" id="logos:flutter">
          <path d={svgPaths.p2faf0720} fill="var(--fill-0, #47C5FB)" id="Vector" />
          <path d={svgPaths.p22b66000} fill="var(--fill-0, #00569E)" id="Vector_2" />
          <path d={svgPaths.p2f029580} fill="var(--fill-0, #00B5F8)" id="Vector_3" />
          <path d={svgPaths.p133bf00} fill="url(#paint0_linear_1_13327)" fillOpacity="0.8" id="Vector_4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_13327" x1="22.0689" x2="261.233" y1="108.913" y2="193.398">
            <stop />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_1_13327">
            <rect fill="white" height="24" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Flutter() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Flutter">
      <LogosFlutter />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Flutter />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Flutter</p>
    </div>
  );
}

function Javascript() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Javascript">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_1_29039)" id="Javascript">
          <path d="M0 0H40V40H0V0Z" fill="var(--fill-0, #F7DF1E)" id="Vector" />
          <path d={svgPaths.p1f040580} fill="var(--fill-0, #111111)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_29039">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Javascript />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">JavaScript</p>
    </div>
  );
}

function Go() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Go">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_1_22574)" id="Go">
          <path d={svgPaths.p510200} fill="var(--fill-0, #00ACC1)" id="Vector" />
          <path d={svgPaths.p2b4cb680} fill="var(--fill-0, #00ACC1)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_22574">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Go />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Go</p>
    </div>
  );
}

function Mongodb() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="mongodb">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="mongodb">
          <path clipRule="evenodd" d={svgPaths.p22b46080} fill="var(--fill-0, #439934)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1ae76600} fill="var(--fill-0, #45A538)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p29635100} fill="var(--fill-0, #46A037)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p3509e100} fill="var(--fill-0, #409433)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p3fd93780} fill="var(--fill-0, #4FAA41)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p123f7300} fill="var(--fill-0, #4AA73C)" fillRule="evenodd" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p1a81c580} fill="var(--fill-0, #57AE47)" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p2aaa1180} fill="var(--fill-0, #60B24F)" fillRule="evenodd" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.p28db59f0} fill="var(--fill-0, #A9AA88)" fillRule="evenodd" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p1ad12c00} fill="var(--fill-0, #B6B598)" fillRule="evenodd" id="Vector_10" />
          <path clipRule="evenodd" d={svgPaths.p151c2440} fill="var(--fill-0, #C2C1A7)" fillRule="evenodd" id="Vector_11" />
          <path clipRule="evenodd" d={svgPaths.p1052800} fill="var(--fill-0, #CECDB7)" fillRule="evenodd" id="Vector_12" />
          <path clipRule="evenodd" d={svgPaths.p64d5dc0} fill="var(--fill-0, #DBDAC7)" fillRule="evenodd" id="Vector_13" />
          <path clipRule="evenodd" d={svgPaths.p14025a00} fill="var(--fill-0, #EBE9DC)" fillRule="evenodd" id="Vector_14" />
          <path clipRule="evenodd" d={svgPaths.p3a4cdfc0} fill="var(--fill-0, #CECDB7)" fillRule="evenodd" id="Vector_15" />
          <path clipRule="evenodd" d={svgPaths.pd090f00} fill="var(--fill-0, #4FAA41)" fillRule="evenodd" id="Vector_16" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Mongodb />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Mongodb</p>
    </div>
  );
}

function DeviconJava() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="devicon:java">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="devicon:java">
          <path d={svgPaths.pb5fef00} fill="var(--fill-0, #0074BD)" id="Vector" />
          <path d={svgPaths.p3af59880} fill="var(--fill-0, #EA2D2E)" id="Vector_2" />
          <path d={svgPaths.p173dec00} fill="var(--fill-0, #0074BD)" id="Vector_3" />
          <path d={svgPaths.p337b800} fill="var(--fill-0, #EA2D2E)" id="Vector_4" />
          <path d={svgPaths.p27b01200} fill="var(--fill-0, #0074BD)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Java() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Java">
      <DeviconJava />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Java />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Java</p>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <path d={svgPaths.p24edac00} fill="var(--fill-0, #F4F2ED)" id="Vector" />
          <path d={svgPaths.p3cec2b80} fill="var(--fill-0, #81CD39)" id="Vector_2" />
          <path d={svgPaths.p41b6200} fill="var(--fill-0, #81CD39)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Nodejs() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Nodejs">
      <Group />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Nodejs />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Node Js</p>
    </div>
  );
}

function Python() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Python">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Python">
          <path d={svgPaths.p3e97f600} fill="var(--fill-0, #0288D1)" id="Vector" />
          <path d={svgPaths.p1d0c0980} fill="var(--fill-0, #FDD835)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Python />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Python</p>
    </div>
  );
}

function Php() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="php">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="php">
          <path d={svgPaths.p276c0000} fill="url(#paint0_radial_1_17950)" id="Vector" />
          <path d={svgPaths.p2ed7980} fill="var(--fill-0, #777BB3)" id="Vector_2" />
          <path d={svgPaths.p38d85730} fill="var(--fill-0, #111111)" id="Vector_3" />
          <path d={svgPaths.p2c35f500} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2b32f400} fill="var(--fill-0, #111111)" id="Vector_5" />
          <path d={svgPaths.p23dbe00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p30934d40} fill="var(--fill-0, #111111)" id="Vector_7" />
          <path d={svgPaths.p3b96fd80} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(12.0081 13.1778) scale(26.2629 26.2629)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_17950" r="1">
            <stop stopColor="#AEB2D5" />
            <stop offset="0.3" stopColor="#AEB2D5" />
            <stop offset="0.75" stopColor="#484C89" />
            <stop offset="1" stopColor="#484C89" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Php />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Php</p>
    </div>
  );
}

function Ruby() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Ruby">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Ruby">
          <path d={svgPaths.pfd66f80} fill="url(#paint0_linear_1_11462)" id="Vector" />
          <path d={svgPaths.p33e0a600} fill="url(#paint1_linear_1_11462)" id="Vector_2" />
          <path d={svgPaths.p229ea400} fill="url(#paint2_linear_1_11462)" id="Vector_3" />
          <path d={svgPaths.p1e2fed00} fill="url(#paint3_linear_1_11462)" id="Vector_4" />
          <path d={svgPaths.p2c486ef0} fill="url(#paint4_linear_1_11462)" id="Vector_5" />
          <path d={svgPaths.p2a2e5680} fill="url(#paint5_linear_1_11462)" id="Vector_6" />
          <path d={svgPaths.p15c11c00} fill="url(#paint6_linear_1_11462)" id="Vector_7" />
          <path d={svgPaths.p34742a00} fill="url(#paint7_linear_1_11462)" id="Vector_8" />
          <path d={svgPaths.p3c0d5e00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p39d14c40} fill="url(#paint8_linear_1_11462)" id="Vector_10" />
          <path d={svgPaths.p3e352280} fill="url(#paint9_linear_1_11462)" id="Vector_11" />
          <path d={svgPaths.p386d5a70} fill="url(#paint10_linear_1_11462)" id="Vector_12" />
          <path d={svgPaths.p18e88080} fill="url(#paint11_linear_1_11462)" id="Vector_13" />
          <path d={svgPaths.p214bc8f0} fill="var(--fill-0, #9E1209)" id="Vector_14" />
          <path d={svgPaths.p3ebbfd20} fill="url(#paint12_radial_1_11462)" id="Vector_15" />
          <path d={svgPaths.p29de4900} fill="url(#paint13_radial_1_11462)" id="Vector_16" />
          <path d={svgPaths.p38b5ff0} fill="url(#paint14_linear_1_11462)" id="Vector_17" />
          <path d={svgPaths.p29f79ef2} fill="url(#paint15_linear_1_11462)" id="Vector_18" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_11462" x1="34.2449" x2="26.308" y1="42.1715" y2="28.1584">
            <stop stopColor="#FB7655" />
            <stop offset="0.41" stopColor="#E42B1E" />
            <stop offset="0.99" stopColor="#990000" />
            <stop offset="1" stopColor="#990000" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_11462" x1="38.1966" x2="27.9675" y1="30.3998" y2="23.5357">
            <stop stopColor="#871101" />
            <stop offset="0.99" stopColor="#911209" />
            <stop offset="1" stopColor="#911209" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_11462" x1="30.0123" x2="19.7836" y1="42.597" y2="35.7329">
            <stop stopColor="#871101" />
            <stop offset="0.99" stopColor="#911209" />
            <stop offset="1" stopColor="#911209" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_11462" x1="8.53602" x2="10.1216" y1="25.4303" y2="35.7359">
            <stop stopColor="white" />
            <stop offset="0.23" stopColor="#E57252" />
            <stop offset="0.46" stopColor="#DE3B20" />
            <stop offset="0.99" stopColor="#A60003" />
            <stop offset="1" stopColor="#A60003" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_11462" x1="19.4441" x2="20.0284" y1="15.8081" y2="26.3256">
            <stop stopColor="white" />
            <stop offset="0.23" stopColor="#E4714E" />
            <stop offset="0.56" stopColor="#BE1A0D" />
            <stop offset="0.99" stopColor="#A80D00" />
            <stop offset="1" stopColor="#A80D00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_11462" x1="29.1212" x2="30.8705" y1="6.08686" y2="13.625">
            <stop stopColor="white" />
            <stop offset="0.18" stopColor="#E46342" />
            <stop offset="0.4" stopColor="#C82410" />
            <stop offset="0.99" stopColor="#A80D00" />
            <stop offset="1" stopColor="#A80D00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_11462" x1="23.7813" x2="31.3184" y1="3.43187" y2="-0.336562">
            <stop stopColor="white" />
            <stop offset="0.54" stopColor="#C81F11" />
            <stop offset="0.99" stopColor="#BF0905" />
            <stop offset="1" stopColor="#BF0905" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_11462" x1="1.92937" x2="2.55" y1="22.8038" y2="29.0147">
            <stop stopColor="white" />
            <stop offset="0.31" stopColor="#DE4024" />
            <stop offset="0.99" stopColor="#BF190B" />
            <stop offset="1" stopColor="#BF190B" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_11462" x1="-2.33518" x2="26.827" y1="30.6936" y2="0.706772">
            <stop stopColor="#BD0012" />
            <stop offset="0.07" stopColor="white" />
            <stop offset="0.17" stopColor="white" />
            <stop offset="0.27" stopColor="#C82F1C" />
            <stop offset="0.33" stopColor="#820C01" />
            <stop offset="0.46" stopColor="#A31601" />
            <stop offset="0.72" stopColor="#B31301" />
            <stop offset="0.99" stopColor="#E82609" />
            <stop offset="1" stopColor="#E82609" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_11462" x1="20.0027" x2="11.2187" y1="33.7178" y2="31.5499">
            <stop stopColor="#8C0C01" />
            <stop offset="0.54" stopColor="#990C00" />
            <stop offset="0.99" stopColor="#A80D0E" />
            <stop offset="1" stopColor="#A80D0E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_11462" x1="35.0891" x2="27.2856" y1="23.1759" y2="16.1822">
            <stop stopColor="#7E110B" />
            <stop offset="0.99" stopColor="#9E0C00" />
            <stop offset="1" stopColor="#9E0C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_11462" x1="37.9552" x2="34.0683" y1="10.3431" y2="6.18748">
            <stop stopColor="#79130D" />
            <stop offset="0.99" stopColor="#9E120B" />
            <stop offset="1" stopColor="#9E120B" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(28.5 16.3159) scale(9.56281 9.56281)" gradientUnits="userSpaceOnUse" id="paint12_radial_1_11462" r="1">
            <stop stopColor="#A80D00" />
            <stop offset="0.99" stopColor="#7E0E08" />
            <stop offset="1" stopColor="#7E0E08" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(15.2593 28.9168) scale(12.7122)" gradientUnits="userSpaceOnUse" id="paint13_radial_1_11462" r="1">
            <stop stopColor="#A30C00" />
            <stop offset="0.99" stopColor="#800E08" />
            <stop offset="1" stopColor="#800E08" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_11462" x1="6.25227" x2="3.08476" y1="38.714" y2="27.9668">
            <stop stopColor="#8B2114" />
            <stop offset="0.43" stopColor="#9E100A" />
            <stop offset="0.99" stopColor="#B3100C" />
            <stop offset="1" stopColor="#B3100C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_11462" x1="30.5542" x2="37.6554" y1="3.10141" y2="6.23609">
            <stop stopColor="#B31000" />
            <stop offset="0.44" stopColor="#910F08" />
            <stop offset="0.99" stopColor="#791C12" />
            <stop offset="1" stopColor="#791C12" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Ruby />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Ruby</p>
    </div>
  );
}

function Rust() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Rust">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Rust">
          <path d={svgPaths.p1b865070} fill="var(--fill-0, #FF7043)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Rust />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Rust</p>
    </div>
  );
}

function Dotnet() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Dotnet">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_1_66930)" id="Dotnet">
          <path d="M0 0H40V40H0V0Z" fill="var(--fill-0, #512BD4)" id="Vector" />
          <path d={svgPaths.p6205700} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_66930">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Dotnet />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">.Net</p>
    </div>
  );
}

function Html() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Html 5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Html 5">
          <path d={svgPaths.p3a5ca080} fill="var(--fill-0, #E44D26)" id="Vector" />
          <path d={svgPaths.p4b45d00} fill="var(--fill-0, #F16529)" id="Vector_2" />
          <path d={svgPaths.pcc91e00} fill="var(--fill-0, #EBEBEB)" id="Vector_3" />
          <path d={svgPaths.p340d8f00} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Html />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">html 5</p>
    </div>
  );
}

function Tailwind() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Tailwind">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Tailwind">
          <path d={svgPaths.p33a12b00} fill="var(--fill-0, #38BDF8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Tailwind />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Tailwind</p>
    </div>
  );
}

function Angular() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Angular">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group">
          <path d={svgPaths.p21ca7400} fill="var(--fill-0, #F4F2ED)" id="Vector" />
          <path d={svgPaths.p32ea9c00} fill="var(--fill-0, #E23237)" id="Vector_2" />
          <path d={svgPaths.p3b8df500} fill="var(--fill-0, #B52E31)" id="Vector_3" />
          <path d={svgPaths.pa3d0c00} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Angular />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Angular</p>
    </div>
  );
}

function Express() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Express">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group">
          <path d={svgPaths.p21ca7400} fill="var(--fill-0, #242938)" id="Vector" />
          <path d={svgPaths.p1edd100} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Express />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Express</p>
    </div>
  );
}

function Redis() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Redis">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Redis">
          <path d={svgPaths.p27b42000} fill="var(--fill-0, #A41E11)" id="Vector" />
          <path d={svgPaths.pfda6b40} fill="var(--fill-0, #D82C20)" id="Vector_2" />
          <path d={svgPaths.p20594800} fill="var(--fill-0, #A41E11)" id="Vector_3" />
          <path d={svgPaths.p9187f80} fill="var(--fill-0, #D82C20)" id="Vector_4" />
          <path d={svgPaths.p65dae80} fill="var(--fill-0, #A41E11)" id="Vector_5" />
          <path d={svgPaths.p3e39b400} fill="var(--fill-0, #D82C20)" id="Vector_6" />
          <path d={svgPaths.p15a13b80} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3fef5a00} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p27ef4300} fill="var(--fill-0, #7A0C00)" id="Vector_9" />
          <path d={svgPaths.p303ce500} fill="var(--fill-0, #AD2115)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Redis />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Redis</p>
    </div>
  );
}

function Mysql() {
  return (
    <div className="h-[27.266px] relative shrink-0 w-[40px]" data-name="Mysql">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 27.2656">
        <g clipPath="url(#clip0_1_40128)" id="Mysql">
          <path d={svgPaths.p1dc24b00} fill="var(--fill-0, #00758F)" id="Vector" />
          <path d={svgPaths.p2ab9f596} fill="var(--fill-0, #F29111)" id="Vector_2" />
          <path d={svgPaths.p522a080} fill="var(--fill-0, #00758F)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_40128">
            <rect fill="white" height="27.2656" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Mysql />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">MySql</p>
    </div>
  );
}

function Docker() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Docker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Docker">
          <path d={svgPaths.p21587ea0} fill="var(--fill-0, #0288D1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Docker />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Docker</p>
    </div>
  );
}

function Kubernetes() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Kubernetes">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group">
          <path d={svgPaths.p21ca7400} fill="var(--fill-0, #326CE5)" id="Vector" />
          <path d={svgPaths.p33ea9280} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="0.006875" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Kubernetes />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Kubernetes</p>
    </div>
  );
}

function Github() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="github">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="github">
          <path d={svgPaths.p1b307f80} fill="var(--fill-0, #111111)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Github />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Github</p>
    </div>
  );
}

function TechStachLeftScroll() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center left-0 overflow-clip top-0 w-[1920px]" data-name="Tech Stach Left Scroll">
      <div className="flex flex-row items-center self-stretch">
        <Tech />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame1 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame2 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame3 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame4 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame5 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame6 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame7 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame8 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame9 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame10 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame11 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame12 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame13 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame14 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame20 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame15 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame16 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame17 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame18 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame19 />
      </div>
    </div>
  );
}

function LogosReact1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[24px]" data-name="logos:react">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 21">
        <g clipPath="url(#clip0_1_15177)" id="logos:react">
          <path d={svgPaths.p38460f0} fill="var(--fill-0, #00D8FF)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_15177">
            <rect fill="white" height="21" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function React1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[40px]" data-name="React">
      <LogosReact1 />
    </div>
  );
}

function Tech1() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0" data-name="Tech">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <React1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">React</p>
    </div>
  );
}

function LogosFlutter1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[19px]" data-name="logos:flutter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 24">
        <g clipPath="url(#clip0_1_13327)" id="logos:flutter">
          <path d={svgPaths.p2faf0720} fill="var(--fill-0, #47C5FB)" id="Vector" />
          <path d={svgPaths.p22b66000} fill="var(--fill-0, #00569E)" id="Vector_2" />
          <path d={svgPaths.p2f029580} fill="var(--fill-0, #00B5F8)" id="Vector_3" />
          <path d={svgPaths.p133bf00} fill="url(#paint0_linear_1_13327)" fillOpacity="0.8" id="Vector_4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_13327" x1="22.0689" x2="261.233" y1="108.913" y2="193.398">
            <stop />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_1_13327">
            <rect fill="white" height="24" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Flutter1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Flutter">
      <LogosFlutter1 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Flutter1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Flutter</p>
    </div>
  );
}

function Javascript1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Javascript">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_1_29039)" id="Javascript">
          <path d="M0 0H40V40H0V0Z" fill="var(--fill-0, #F7DF1E)" id="Vector" />
          <path d={svgPaths.p1f040580} fill="var(--fill-0, #111111)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_29039">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Javascript1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">JavaScript</p>
    </div>
  );
}

function Go1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Go">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_1_22574)" id="Go">
          <path d={svgPaths.p510200} fill="var(--fill-0, #00ACC1)" id="Vector" />
          <path d={svgPaths.p2b4cb680} fill="var(--fill-0, #00ACC1)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_22574">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Go1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Go</p>
    </div>
  );
}

function Mongodb1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="mongodb">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="mongodb">
          <path clipRule="evenodd" d={svgPaths.p22b46080} fill="var(--fill-0, #439934)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1ae76600} fill="var(--fill-0, #45A538)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p29635100} fill="var(--fill-0, #46A037)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p3509e100} fill="var(--fill-0, #409433)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p3fd93780} fill="var(--fill-0, #4FAA41)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p123f7300} fill="var(--fill-0, #4AA73C)" fillRule="evenodd" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p1a81c580} fill="var(--fill-0, #57AE47)" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p2aaa1180} fill="var(--fill-0, #60B24F)" fillRule="evenodd" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.p28db59f0} fill="var(--fill-0, #A9AA88)" fillRule="evenodd" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p1ad12c00} fill="var(--fill-0, #B6B598)" fillRule="evenodd" id="Vector_10" />
          <path clipRule="evenodd" d={svgPaths.p151c2440} fill="var(--fill-0, #C2C1A7)" fillRule="evenodd" id="Vector_11" />
          <path clipRule="evenodd" d={svgPaths.p1052800} fill="var(--fill-0, #CECDB7)" fillRule="evenodd" id="Vector_12" />
          <path clipRule="evenodd" d={svgPaths.p64d5dc0} fill="var(--fill-0, #DBDAC7)" fillRule="evenodd" id="Vector_13" />
          <path clipRule="evenodd" d={svgPaths.p14025a00} fill="var(--fill-0, #EBE9DC)" fillRule="evenodd" id="Vector_14" />
          <path clipRule="evenodd" d={svgPaths.p3a4cdfc0} fill="var(--fill-0, #CECDB7)" fillRule="evenodd" id="Vector_15" />
          <path clipRule="evenodd" d={svgPaths.pd090f00} fill="var(--fill-0, #4FAA41)" fillRule="evenodd" id="Vector_16" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Mongodb1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Mongodb</p>
    </div>
  );
}

function DeviconJava1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="devicon:java">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="devicon:java">
          <path d={svgPaths.pb5fef00} fill="var(--fill-0, #0074BD)" id="Vector" />
          <path d={svgPaths.p3af59880} fill="var(--fill-0, #EA2D2E)" id="Vector_2" />
          <path d={svgPaths.p173dec00} fill="var(--fill-0, #0074BD)" id="Vector_3" />
          <path d={svgPaths.p337b800} fill="var(--fill-0, #EA2D2E)" id="Vector_4" />
          <path d={svgPaths.p27b01200} fill="var(--fill-0, #0074BD)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Java1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Java">
      <DeviconJava1 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Java1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Java</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <path d={svgPaths.p24edac00} fill="var(--fill-0, #F4F2ED)" id="Vector" />
          <path d={svgPaths.p3cec2b80} fill="var(--fill-0, #81CD39)" id="Vector_2" />
          <path d={svgPaths.p41b6200} fill="var(--fill-0, #81CD39)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Nodejs1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Nodejs">
      <Group1 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Nodejs1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Node Js</p>
    </div>
  );
}

function Python1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Python">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Python">
          <path d={svgPaths.p3e97f600} fill="var(--fill-0, #0288D1)" id="Vector" />
          <path d={svgPaths.p1d0c0980} fill="var(--fill-0, #FDD835)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Python1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Python</p>
    </div>
  );
}

function Php1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="php">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="php">
          <path d={svgPaths.p276c0000} fill="url(#paint0_radial_1_17950)" id="Vector" />
          <path d={svgPaths.p2ed7980} fill="var(--fill-0, #777BB3)" id="Vector_2" />
          <path d={svgPaths.p38d85730} fill="var(--fill-0, #111111)" id="Vector_3" />
          <path d={svgPaths.p2c35f500} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2b32f400} fill="var(--fill-0, #111111)" id="Vector_5" />
          <path d={svgPaths.p23dbe00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p30934d40} fill="var(--fill-0, #111111)" id="Vector_7" />
          <path d={svgPaths.p3b96fd80} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(12.0081 13.1778) scale(26.2629 26.2629)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_17950" r="1">
            <stop stopColor="#AEB2D5" />
            <stop offset="0.3" stopColor="#AEB2D5" />
            <stop offset="0.75" stopColor="#484C89" />
            <stop offset="1" stopColor="#484C89" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Php1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Php</p>
    </div>
  );
}

function Ruby1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Ruby">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Ruby">
          <path d={svgPaths.pfd66f80} fill="url(#paint0_linear_1_11462)" id="Vector" />
          <path d={svgPaths.p33e0a600} fill="url(#paint1_linear_1_11462)" id="Vector_2" />
          <path d={svgPaths.p229ea400} fill="url(#paint2_linear_1_11462)" id="Vector_3" />
          <path d={svgPaths.p1e2fed00} fill="url(#paint3_linear_1_11462)" id="Vector_4" />
          <path d={svgPaths.p2c486ef0} fill="url(#paint4_linear_1_11462)" id="Vector_5" />
          <path d={svgPaths.p2a2e5680} fill="url(#paint5_linear_1_11462)" id="Vector_6" />
          <path d={svgPaths.p15c11c00} fill="url(#paint6_linear_1_11462)" id="Vector_7" />
          <path d={svgPaths.p34742a00} fill="url(#paint7_linear_1_11462)" id="Vector_8" />
          <path d={svgPaths.p3c0d5e00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p39d14c40} fill="url(#paint8_linear_1_11462)" id="Vector_10" />
          <path d={svgPaths.p3e352280} fill="url(#paint9_linear_1_11462)" id="Vector_11" />
          <path d={svgPaths.p386d5a70} fill="url(#paint10_linear_1_11462)" id="Vector_12" />
          <path d={svgPaths.p18e88080} fill="url(#paint11_linear_1_11462)" id="Vector_13" />
          <path d={svgPaths.p214bc8f0} fill="var(--fill-0, #9E1209)" id="Vector_14" />
          <path d={svgPaths.p3ebbfd20} fill="url(#paint12_radial_1_11462)" id="Vector_15" />
          <path d={svgPaths.p29de4900} fill="url(#paint13_radial_1_11462)" id="Vector_16" />
          <path d={svgPaths.p38b5ff0} fill="url(#paint14_linear_1_11462)" id="Vector_17" />
          <path d={svgPaths.p29f79ef2} fill="url(#paint15_linear_1_11462)" id="Vector_18" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_11462" x1="34.2449" x2="26.308" y1="42.1715" y2="28.1584">
            <stop stopColor="#FB7655" />
            <stop offset="0.41" stopColor="#E42B1E" />
            <stop offset="0.99" stopColor="#990000" />
            <stop offset="1" stopColor="#990000" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_11462" x1="38.1966" x2="27.9675" y1="30.3998" y2="23.5357">
            <stop stopColor="#871101" />
            <stop offset="0.99" stopColor="#911209" />
            <stop offset="1" stopColor="#911209" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_11462" x1="30.0123" x2="19.7836" y1="42.597" y2="35.7329">
            <stop stopColor="#871101" />
            <stop offset="0.99" stopColor="#911209" />
            <stop offset="1" stopColor="#911209" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_11462" x1="8.53602" x2="10.1216" y1="25.4303" y2="35.7359">
            <stop stopColor="white" />
            <stop offset="0.23" stopColor="#E57252" />
            <stop offset="0.46" stopColor="#DE3B20" />
            <stop offset="0.99" stopColor="#A60003" />
            <stop offset="1" stopColor="#A60003" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_11462" x1="19.4441" x2="20.0284" y1="15.8081" y2="26.3256">
            <stop stopColor="white" />
            <stop offset="0.23" stopColor="#E4714E" />
            <stop offset="0.56" stopColor="#BE1A0D" />
            <stop offset="0.99" stopColor="#A80D00" />
            <stop offset="1" stopColor="#A80D00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_11462" x1="29.1212" x2="30.8705" y1="6.08686" y2="13.625">
            <stop stopColor="white" />
            <stop offset="0.18" stopColor="#E46342" />
            <stop offset="0.4" stopColor="#C82410" />
            <stop offset="0.99" stopColor="#A80D00" />
            <stop offset="1" stopColor="#A80D00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_11462" x1="23.7813" x2="31.3184" y1="3.43187" y2="-0.336562">
            <stop stopColor="white" />
            <stop offset="0.54" stopColor="#C81F11" />
            <stop offset="0.99" stopColor="#BF0905" />
            <stop offset="1" stopColor="#BF0905" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_11462" x1="1.92937" x2="2.55" y1="22.8038" y2="29.0147">
            <stop stopColor="white" />
            <stop offset="0.31" stopColor="#DE4024" />
            <stop offset="0.99" stopColor="#BF190B" />
            <stop offset="1" stopColor="#BF190B" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_11462" x1="-2.33518" x2="26.827" y1="30.6936" y2="0.706772">
            <stop stopColor="#BD0012" />
            <stop offset="0.07" stopColor="white" />
            <stop offset="0.17" stopColor="white" />
            <stop offset="0.27" stopColor="#C82F1C" />
            <stop offset="0.33" stopColor="#820C01" />
            <stop offset="0.46" stopColor="#A31601" />
            <stop offset="0.72" stopColor="#B31301" />
            <stop offset="0.99" stopColor="#E82609" />
            <stop offset="1" stopColor="#E82609" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_11462" x1="20.0027" x2="11.2187" y1="33.7178" y2="31.5499">
            <stop stopColor="#8C0C01" />
            <stop offset="0.54" stopColor="#990C00" />
            <stop offset="0.99" stopColor="#A80D0E" />
            <stop offset="1" stopColor="#A80D0E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_11462" x1="35.0891" x2="27.2856" y1="23.1759" y2="16.1822">
            <stop stopColor="#7E110B" />
            <stop offset="0.99" stopColor="#9E0C00" />
            <stop offset="1" stopColor="#9E0C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_11462" x1="37.9552" x2="34.0683" y1="10.3431" y2="6.18748">
            <stop stopColor="#79130D" />
            <stop offset="0.99" stopColor="#9E120B" />
            <stop offset="1" stopColor="#9E120B" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(28.5 16.3159) scale(9.56281 9.56281)" gradientUnits="userSpaceOnUse" id="paint12_radial_1_11462" r="1">
            <stop stopColor="#A80D00" />
            <stop offset="0.99" stopColor="#7E0E08" />
            <stop offset="1" stopColor="#7E0E08" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(15.2593 28.9168) scale(12.7122)" gradientUnits="userSpaceOnUse" id="paint13_radial_1_11462" r="1">
            <stop stopColor="#A30C00" />
            <stop offset="0.99" stopColor="#800E08" />
            <stop offset="1" stopColor="#800E08" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_11462" x1="6.25227" x2="3.08476" y1="38.714" y2="27.9668">
            <stop stopColor="#8B2114" />
            <stop offset="0.43" stopColor="#9E100A" />
            <stop offset="0.99" stopColor="#B3100C" />
            <stop offset="1" stopColor="#B3100C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_11462" x1="30.5542" x2="37.6554" y1="3.10141" y2="6.23609">
            <stop stopColor="#B31000" />
            <stop offset="0.44" stopColor="#910F08" />
            <stop offset="0.99" stopColor="#791C12" />
            <stop offset="1" stopColor="#791C12" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Ruby1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Ruby</p>
    </div>
  );
}

function Rust1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Rust">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Rust">
          <path d={svgPaths.p1b865070} fill="var(--fill-0, #FF7043)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Rust1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Rust</p>
    </div>
  );
}

function Dotnet1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Dotnet">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_1_66930)" id="Dotnet">
          <path d="M0 0H40V40H0V0Z" fill="var(--fill-0, #512BD4)" id="Vector" />
          <path d={svgPaths.p6205700} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_66930">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Dotnet1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">.Net</p>
    </div>
  );
}

function Html1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Html 5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Html 5">
          <path d={svgPaths.p3a5ca080} fill="var(--fill-0, #E44D26)" id="Vector" />
          <path d={svgPaths.p4b45d00} fill="var(--fill-0, #F16529)" id="Vector_2" />
          <path d={svgPaths.pcc91e00} fill="var(--fill-0, #EBEBEB)" id="Vector_3" />
          <path d={svgPaths.p340d8f00} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Html1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">html 5</p>
    </div>
  );
}

function Tailwind1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Tailwind">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Tailwind">
          <path d={svgPaths.p33a12b00} fill="var(--fill-0, #38BDF8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Tailwind1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Tailwind</p>
    </div>
  );
}

function Angular1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Angular">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group">
          <path d={svgPaths.p21ca7400} fill="var(--fill-0, #F4F2ED)" id="Vector" />
          <path d={svgPaths.p32ea9c00} fill="var(--fill-0, #E23237)" id="Vector_2" />
          <path d={svgPaths.p3b8df500} fill="var(--fill-0, #B52E31)" id="Vector_3" />
          <path d={svgPaths.pa3d0c00} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Angular1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Angular</p>
    </div>
  );
}

function Express1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Express">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group">
          <path d={svgPaths.p21ca7400} fill="var(--fill-0, #242938)" id="Vector" />
          <path d={svgPaths.p1edd100} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Express1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Express</p>
    </div>
  );
}

function Redis1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Redis">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Redis">
          <path d={svgPaths.p27b42000} fill="var(--fill-0, #A41E11)" id="Vector" />
          <path d={svgPaths.pfda6b40} fill="var(--fill-0, #D82C20)" id="Vector_2" />
          <path d={svgPaths.p20594800} fill="var(--fill-0, #A41E11)" id="Vector_3" />
          <path d={svgPaths.p9187f80} fill="var(--fill-0, #D82C20)" id="Vector_4" />
          <path d={svgPaths.p65dae80} fill="var(--fill-0, #A41E11)" id="Vector_5" />
          <path d={svgPaths.p3e39b400} fill="var(--fill-0, #D82C20)" id="Vector_6" />
          <path d={svgPaths.p15a13b80} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3fef5a00} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p27ef4300} fill="var(--fill-0, #7A0C00)" id="Vector_9" />
          <path d={svgPaths.p303ce500} fill="var(--fill-0, #AD2115)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Redis1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Redis</p>
    </div>
  );
}

function Mysql1() {
  return (
    <div className="h-[27.266px] relative shrink-0 w-[40px]" data-name="Mysql">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 27.2656">
        <g clipPath="url(#clip0_1_40128)" id="Mysql">
          <path d={svgPaths.p1dc24b00} fill="var(--fill-0, #00758F)" id="Vector" />
          <path d={svgPaths.p2ab9f596} fill="var(--fill-0, #F29111)" id="Vector_2" />
          <path d={svgPaths.p522a080} fill="var(--fill-0, #00758F)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_40128">
            <rect fill="white" height="27.2656" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Mysql1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">MySql</p>
    </div>
  );
}

function Docker1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Docker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Docker">
          <path d={svgPaths.p21587ea0} fill="var(--fill-0, #0288D1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Docker1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Docker</p>
    </div>
  );
}

function Kubernetes1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Kubernetes">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group">
          <path d={svgPaths.p21ca7400} fill="var(--fill-0, #326CE5)" id="Vector" />
          <path d={svgPaths.p33ea9280} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="0.006875" />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Kubernetes1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Kubernetes</p>
    </div>
  );
}

function Github1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="github">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="github">
          <path d={svgPaths.p1b307f80} fill="var(--fill-0, #111111)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center p-[20px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f5f5f7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Github1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#111] text-[24px]">Github</p>
    </div>
  );
}

function TechStachRightScroll() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center justify-end overflow-clip right-0 top-[100px] w-[1920px]" data-name="Tech Stach Right Scroll">
      <div className="flex flex-row items-center self-stretch">
        <Tech1 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame22 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame24 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame25 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame26 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame27 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame28 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame29 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame30 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame31 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame32 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame33 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame34 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame35 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame36 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame37 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame38 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame39 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame40 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame41 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame42 />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <TechStachLeftScroll />
      <TechStachRightScroll />
      <div className="absolute bg-gradient-to-l from-[rgba(255,255,255,0)] h-[180px] left-0 to-3/4 to-white top-0 w-[136px]" />
      <div className="absolute flex h-[180px] items-center justify-center left-[1784px] top-0 w-[136px]">
        <div className="flex-none rotate-180">
          <div className="bg-gradient-to-l from-[rgba(255,255,255,0)] h-[180px] to-3/4 to-white w-[136px]" />
        </div>
      </div>
    </div>
  );
}

export default function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center relative size-full">
      <Frame />
      <Frame21 />
    </div>
  );
}
