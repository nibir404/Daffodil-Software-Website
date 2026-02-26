import svgPaths from "../../imports/svg-f0ulzcw64y";

// Import technology icon images
import angularIcon from "figma:asset/0563dd966aad880dfc1fc78ab7b4646645baeaa7.png";
import dockerIcon from "figma:asset/06d33d1d0c7787fd913cf9f1fac6bb485e4ab826.png";
import dotnetIcon from "figma:asset/19529c49dd9cce26cbf73298662435ed21764e76.png";
import expressIcon from "figma:asset/fae702d0df03356cc61c5c330ae84e475a934de7.png";
// import flutterIcon from "figma:asset/7935e3a59278b638295f3353a54b44e0b918631.png";
const flutterIcon = ""; // Missing asset stub
import githubIcon from "figma:asset/b77cdfad4c31e9d8641a4827650f6e9e1ad0bf40.png";
import golangIcon from "figma:asset/557ce117ed5bf240f6f60af363b2b4ab4d24d1fe.png";
import html5Icon from "figma:asset/d90a9dbb3a4f78e763a112bc517cdd0ef36a779a.png";
import javaIcon from "figma:asset/a26a62bb9c5372da88ddb08eb3be23dee834a06e.png";
import javascriptIcon from "figma:asset/c30b324c329edd5227b658b4067c648ff87a7987.png";
import kubernetesIcon from "figma:asset/a2f07e93b37543ab727c32877e98a5d7bc60ddb9.png";
import mongodbIcon from "figma:asset/02ae629b8439b4e0430429e1b6f8d746a4a84e1e.png";
import mysqlIcon from "figma:asset/7fc087c6b5bf5359cb15d67dfd181146dcfeb332.png";
import nodejsIcon from "figma:asset/404655d56afc2d23ccbd71f272a27b80a57f4d3c.png";
import phpIcon from "figma:asset/9bea67c5e0228443093b9d85ced998fd78d255bb.png";
import pythonIcon from "figma:asset/74c46314c81f829b7e768b8ae7b3c492b7eedcd7.png";
import reactIcon from "figma:asset/da7473880fc62ad09402812391fe64d8736e1675.png";
import redisIcon from "figma:asset/49f5d9c1f9a33d3a0de83c3972e8a1edd1435ee5.png";
import rubyIcon from "figma:asset/ca018ab51f02d34adba287bf50b49cf834621123.png";
import rustIcon from "figma:asset/4025e1358c8a072ddbefe0d0153a39ae836222ca.png";

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

function LogosReact() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <img src={reactIcon} alt="React" className="size-[40px] object-contain" />
    </div>
  );
}

function LogosFlutter() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <img src={flutterIcon} alt="Flutter" className="size-[40px] object-contain" />
    </div>
  );
}

function LogosJavascript() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <img src={javascriptIcon} alt="JavaScript" className="size-[40px] object-contain" />
    </div>
  );
}

function LogosGolang() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <img src={golangIcon} alt="Go" className="size-[40px] object-contain" />
    </div>
  );
}

function LogosMongodb() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <img src={mongodbIcon} alt="MongoDB" className="size-[40px] object-contain" />
    </div>
  );
}

function LogosJava() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <img src={javaIcon} alt="Java" className="size-[40px] object-contain" />
    </div>
  );
}

function LogosNodejs() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <img src={nodejsIcon} alt="Node.js" className="size-[40px] object-contain" />
    </div>
  );
}

function LogosPython() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <img src={pythonIcon} alt="Python" className="size-[40px] object-contain" />
    </div>
  );
}

function LogosPhp() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <img src={phpIcon} alt="PHP" className="size-[40px] object-contain" />
    </div>
  );
}

function LogosRuby() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <img src={rubyIcon} alt="Ruby" className="size-[40px] object-contain" />
    </div>
  );
}

function LogosRust() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <img src={rustIcon} alt="Rust" className="size-[40px] object-contain" />
    </div>
  );
}

function LogosDotnet() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <img src={dotnetIcon} alt=".NET" className="size-[40px] object-contain" />
    </div>
  );
}

function LogosHtml5() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <img src={html5Icon} alt="HTML5" className="size-[40px] object-contain" />
    </div>
  );
}

function LogosTailwind() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <svg className="size-[40px]" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_tailwind)">
          <path d={svgPaths.p33a12b00} fill="url(#paint0_linear_tailwind)" fillRule="evenodd" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_tailwind" x1="0" x2="40" y1="0" y2="40">
            <stop stopColor="#2298BD" />
            <stop offset="1" stopColor="#0ED7B5" />
          </linearGradient>
          <clipPath id="clip0_tailwind">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogosAngular() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <img src={angularIcon} alt="Angular" className="size-[40px] object-contain" />
    </div>
  );
}

function LogosExpress() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <img src={expressIcon} alt="Express" className="size-[40px] object-contain" />
    </div>
  );
}

function LogosRedis() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <img src={redisIcon} alt="Redis" className="size-[40px] object-contain" />
    </div>
  );
}

function LogosMysql() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <img src={mysqlIcon} alt="MySQL" className="size-[40px] object-contain" />
    </div>
  );
}

function LogosDocker() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <img src={dockerIcon} alt="Docker" className="size-[40px] object-contain" />
    </div>
  );
}

function LogosKubernetes() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <img src={kubernetesIcon} alt="Kubernetes" className="size-[40px] object-contain" />
    </div>
  );
}

function LogosGithub() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <img src={githubIcon} alt="GitHub" className="size-[40px] object-contain" />
    </div>
  );
}

function LogosTypescript() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <rect width="40" height="40" fill="#3178C6" rx="4"/>
        <path d="M20.5 23.5V32.5H22.5V23.5H27.5V21.5H15.5V23.5H20.5Z" fill="white"/>
        <path d="M28.5 24.5C28.5 23.95 28.95 23.5 29.5 23.5H30C30.55 23.5 31 23.95 31 24.5V25C31 25.27 31.11 25.52 31.29 25.71C31.48 25.89 31.73 26 32 26C32.27 26 32.52 25.89 32.71 25.71C32.89 25.52 33 25.27 33 25V24.5C33 22.84 31.66 21.5 30 21.5H29.5C27.84 21.5 26.5 22.84 26.5 24.5V27.5C26.5 29.16 27.84 30.5 29.5 30.5H30C31.66 30.5 33 29.16 33 27.5V27C33 26.73 32.89 26.48 32.71 26.29C32.52 26.11 32.27 26 32 26C31.73 26 31.48 26.11 31.29 26.29C31.11 26.48 31 26.73 31 27V27.5C31 28.05 30.55 28.5 30 28.5H29.5C28.95 28.5 28.5 28.05 28.5 27.5V24.5Z" fill="white"/>
      </svg>
    </div>
  );
}

function LogosPostgresql() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_postgres)">
          <path d="M35.2 28.5C35.2 28.5 34.8 30.5 32.5 31C30.2 31.5 28 30.5 27.5 29.5C27 28.5 27.5 26.5 29 25.5C30.5 24.5 32.5 24 33.5 24C34.5 24 35.2 24.5 35.5 25.5C35.8 26.5 35.2 28.5 35.2 28.5Z" fill="#336791"/>
          <path d="M28.5 10C28.5 8.5 27.5 7 25.5 6.5C23.5 6 21 6.5 19.5 8C18 9.5 17.5 12 18.5 14C19.5 16 21.5 17 23.5 17C25.5 17 27 16 28 14.5C29 13 28.5 11.5 28.5 10Z" fill="#336791"/>
          <path d="M20 18C18 18 16 19 15 21C14 23 14 26 15.5 28.5C17 31 19.5 32.5 22 32.5C24.5 32.5 26.5 31 27.5 29C28.5 27 28.5 24.5 27 22C25.5 19.5 23 18 20 18Z" fill="#336791"/>
        </g>
        <defs>
          <clipPath id="clip0_postgres">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogosAws() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <g>
          <path d="M10 25L12.5 23.5L15 25V27.5L12.5 29L10 27.5V25Z" fill="#FF9900"/>
          <path d="M17 22L19.5 20.5L22 22V24.5L19.5 26L17 24.5V22Z" fill="#FF9900"/>
          <path d="M24 25L26.5 23.5L29 25V27.5L26.5 29L24 27.5V25Z" fill="#FF9900"/>
          <path d="M8 15C8 12 10 10 13 10H27C30 10 32 12 32 15V30H8V15Z" fill="#232F3E"/>
          <rect x="10" y="12" width="20" height="2" fill="#FF9900"/>
        </g>
      </svg>
    </div>
  );
}

function LogosVuejs() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <g>
          <path d="M8 8L20 28L32 8H26L20 18L14 8H8Z" fill="#41B883"/>
          <path d="M14 8L20 18L26 8H20.5L20 8.8L19.5 8H14Z" fill="#35495E"/>
        </g>
      </svg>
    </div>
  );
}

function LogosSwift() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <g>
          <path d="M8 8H32V32H8V8Z" fill="#F05138"/>
          <path d="M28 12C26 14 24 16 22 18C20 16 18 14 16 12C14 14 12 16 12 19C12 22 14 24 16 26C18 28 20 29 22 30C24 29 26 28 28 26C30 24 32 22 32 19C32 16 30 14 28 12Z" fill="white"/>
        </g>
      </svg>
    </div>
  );
}

function LogosKotlin() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <defs>
          <linearGradient id="kotlin_gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E44857"/>
            <stop offset="50%" stopColor="#C711E1"/>
            <stop offset="100%" stopColor="#7F52FF"/>
          </linearGradient>
        </defs>
        <path d="M8 8H32L20 20L32 32H8V8Z" fill="url(#kotlin_gradient)"/>
        <path d="M8 8L20 20L8 32V8Z" fill="url(#kotlin_gradient)" opacity="0.6"/>
      </svg>
    </div>
  );
}

function LogosGraphql() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <g>
          <circle cx="20" cy="12" r="2" fill="#E535AB"/>
          <circle cx="28" cy="16" r="2" fill="#E535AB"/>
          <circle cx="28" cy="24" r="2" fill="#E535AB"/>
          <circle cx="20" cy="28" r="2" fill="#E535AB"/>
          <circle cx="12" cy="24" r="2" fill="#E535AB"/>
          <circle cx="12" cy="16" r="2" fill="#E535AB"/>
          <path d="M20 14L28 18M28 18V22M28 22L20 26M20 26L12 22M12 22V18M12 18L20 14" stroke="#E535AB" strokeWidth="1.5"/>
        </g>
      </svg>
    </div>
  );
}

function LogosAzure() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <defs>
          <linearGradient id="azure_gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0089D6"/>
            <stop offset="100%" stopColor="#0078D4"/>
          </linearGradient>
        </defs>
        <path d="M18 8L8 24H16L22 32L32 12H24L18 8Z" fill="url(#azure_gradient)"/>
      </svg>
    </div>
  );
}

function LogosSqlite() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <g>
          <path d="M12 8H28C30 8 32 10 32 12V28C32 30 30 32 28 32H12C10 32 8 30 8 28V12C8 10 10 8 12 8Z" fill="#003B57"/>
          <path d="M16 16H24V18H16V16ZM16 20H24V22H16V20ZM16 24H20V26H16V24Z" fill="white"/>
        </g>
      </svg>
    </div>
  );
}

function LogosFirebase() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <g>
          <path d="M12 28L16 10L20 18L12 28Z" fill="#FFA000"/>
          <path d="M20 18L24 8L28 28L20 32L12 28L20 18Z" fill="#F57C00"/>
          <path d="M20 18L24 8L26 12L20 18Z" fill="#FFCA28"/>
        </g>
      </svg>
    </div>
  );
}

function LogosElasticsearch() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <g>
          <ellipse cx="20" cy="20" rx="12" ry="10" fill="#FEC514"/>
          <path d="M12 15H28C28 18 26 20 20 20C14 20 12 18 12 15Z" fill="#00BFB3"/>
          <path d="M12 25H28C28 22 26 20 20 20C14 20 12 22 12 25Z" fill="#F04E98"/>
        </g>
      </svg>
    </div>
  );
}

function LogosGitlab() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <g>
          <path d="M20 30L26 18H14L20 30Z" fill="#E24329"/>
          <path d="M14 18L8 12L20 30L14 18Z" fill="#FC6D26"/>
          <path d="M26 18L32 12L20 30L26 18Z" fill="#FC6D26"/>
          <path d="M20 30L14 18H26L20 30Z" fill="#FCA326"/>
        </g>
      </svg>
    </div>
  );
}

function LogosNginx() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <g>
          <rect x="8" y="8" width="24" height="24" rx="2" fill="#009639"/>
          <path d="M16 24V16L24 24V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </svg>
    </div>
  );
}

function LogosJenkins() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <g>
          <circle cx="20" cy="14" r="6" fill="#D24939"/>
          <rect x="14" y="18" width="12" height="14" rx="2" fill="#335061"/>
          <rect x="16" y="22" width="8" height="2" fill="#F0D6B7"/>
          <rect x="16" y="26" width="8" height="2" fill="#F0D6B7"/>
        </g>
      </svg>
    </div>
  );
}

function LogosTerraform() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <g>
          <path d="M12 10L18 14V22L12 18V10Z" fill="#5C4EE5"/>
          <path d="M20 8L26 12V20L20 16V8Z" fill="#5C4EE5"/>
          <path d="M20 22L26 26V34L20 30V22Z" fill="#4040B2"/>
        </g>
      </svg>
    </div>
  );
}

function LogosSass() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <g>
          <ellipse cx="20" cy="18" rx="14" ry="10" fill="#CD6799"/>
          <path d="M18 22C18 24 16 26 14 26C12 26 12 24 12 22C12 20 14 18 16 18C16 18 17 20 18 22Z" fill="white"/>
          <path d="M22 22C22 24 24 26 26 26C28 26 28 24 28 22C28 20 26 18 24 18C24 18 23 20 22 22Z" fill="white"/>
        </g>
      </svg>
    </div>
  );
}

function LogosWebpack() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <g>
          <path d="M20 8L32 14V26L20 32L8 26V14L20 8Z" stroke="#8DD6F9" strokeWidth="1.5" fill="none"/>
          <path d="M20 20L26 16.5V23.5L20 27V20Z" fill="#8DD6F9"/>
          <path d="M20 20L14 16.5V23.5L20 27V20Z" fill="#8DD6F9"/>
        </g>
      </svg>
    </div>
  );
}

function LogosJest() {
  return (
    <div className="flex items-center justify-center size-[40px]">
      <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
        <g>
          <circle cx="20" cy="20" r="12" fill="#C21325"/>
          <path d="M16 16L20 12L24 16V20L20 24L16 20V16Z" fill="white"/>
        </g>
      </svg>
    </div>
  );
}

function TechCard({ tech }: { tech: TechItem }) {
  return (
    <div className="bg-white flex gap-[10px] items-center justify-center px-[20px] py-[12px] rounded-[10px] border border-[#f5f5f7] shrink-0">
      {tech.icon}
      <p className="font-['Inter'] font-normal text-[24px] leading-[30px] text-[#111] whitespace-nowrap">
        {tech.name}
      </p>
    </div>
  );
}

export function TechnologyExpertiseSection() {
  const row1Technologies: TechItem[] = [
    { name: "React", icon: <LogosReact /> },
    { name: "Flutter", icon: <LogosFlutter /> },
    { name: "JavaScript", icon: <LogosJavascript /> },
    { name: "Go", icon: <LogosGolang /> },
    { name: "MongoDB", icon: <LogosMongodb /> },
    { name: "Java", icon: <LogosJava /> },
    { name: "Node.js", icon: <LogosNodejs /> },
    { name: "Python", icon: <LogosPython /> },
    { name: "PHP", icon: <LogosPhp /> },
    { name: "Ruby", icon: <LogosRuby /> },
    { name: "Rust", icon: <LogosRust /> },
  ];

  const row2Technologies: TechItem[] = [
    { name: ".Net", icon: <LogosDotnet /> },
    { name: "HTML5", icon: <LogosHtml5 /> },
    { name: "Tailwind", icon: <LogosTailwind /> },
    { name: "Angular", icon: <LogosAngular /> },
    { name: "Express", icon: <LogosExpress /> },
    { name: "Redis", icon: <LogosRedis /> },
    { name: "MySQL", icon: <LogosMysql /> },
    { name: "Docker", icon: <LogosDocker /> },
    { name: "Kubernetes", icon: <LogosKubernetes /> },
    { name: "GitHub", icon: <LogosGithub /> },
    { name: "TypeScript", icon: <LogosTypescript /> },
    { name: "PostgreSQL", icon: <LogosPostgresql /> },
    { name: "AWS", icon: <LogosAws /> },
    { name: "Vue.js", icon: <LogosVuejs /> },
    { name: "Swift", icon: <LogosSwift /> },
    { name: "Kotlin", icon: <LogosKotlin /> },
    { name: "GraphQL", icon: <LogosGraphql /> },
    { name: "Azure", icon: <LogosAzure /> },
    { name: "SQLite", icon: <LogosSqlite /> },
    { name: "Firebase", icon: <LogosFirebase /> },
    { name: "Elasticsearch", icon: <LogosElasticsearch /> },
    { name: "GitLab", icon: <LogosGitlab /> },
    { name: "Nginx", icon: <LogosNginx /> },
    { name: "Jenkins", icon: <LogosJenkins /> },
    { name: "Terraform", icon: <LogosTerraform /> },
    { name: "Sass", icon: <LogosSass /> },
    { name: "Webpack", icon: <LogosWebpack /> },
    { name: "Jest", icon: <LogosJest /> },
  ];

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
        {/* Header */}
        <div className="flex flex-col gap-6 items-center text-center mb-[80px]">
          <h2 className="font-['Helvetica_Now_Display'] font-medium text-[64px] leading-[75px] text-[#111]">
            Our Technology Expertise
          </h2>
          <p className="font-['Inter'] font-normal text-[16px] leading-[30px] text-[#3c3c3c] max-w-[720px]">
            We use secure, scalable, modern technologies across web, mobile, and cloud ecosystems.
          </p>
        </div>
      </div>

      {/* Scrolling Rows - Full Width Outside Container */}
      <div className="flex flex-col gap-6 w-full">
        {/* Row 1 - Scroll Left */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-scroll-left">
            {[...row1Technologies, ...row1Technologies, ...row1Technologies].map((tech, index) => (
              <TechCard key={`row1-${index}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-scroll-right">
            {[...row2Technologies, ...row2Technologies, ...row2Technologies].map((tech, index) => (
              <TechCard key={`row2-${index}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-33.333% - 8px));
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(calc(-33.333% - 8px));
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
          will-change: transform;
          display: flex;
          gap: 1.5rem;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
          will-change: transform;
          display: flex;
          gap: 1.5rem;
        }
      `}</style>
    </section>
  );
}