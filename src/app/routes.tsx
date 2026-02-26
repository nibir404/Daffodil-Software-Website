import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { CustomWebAppDevelopment } from "./pages/services/CustomWebAppDevelopment";
import SmartBusiness from "./pages/SmartBusiness";
import { UniversityERP } from "./pages/industries/UniversityERP";
import { Services } from "./pages/Services";
import { Products } from "./pages/Products";
import { Industries } from "./pages/Industries";
import { Blog } from "./pages/Blog";
import { SingleBlog } from "./pages/SingleBlog";
import { CaseStudies } from "./pages/CaseStudies";
import { SingleCaseStudy } from "./pages/SingleCaseStudy";
import { FAQ } from "./pages/FAQ";
import { Contact } from "./pages/Contact";
import { TermsAndConditions } from "./pages/TermsAndConditions";

// Placeholder component for routes not yet implemented
function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="font-['Helvetica_Now_Display'] font-medium text-[64px] text-[#111] mb-4">
          Coming Soon
        </h1>
        <p className="font-['Inter'] text-[20px] text-[#3c3c3c] mb-8">
          This page is under development
        </p>
        <a 
          href="/" 
          className="inline-block bg-[#01e067] px-6 py-3 rounded-[80px] font-['Helvetica_Now_Display'] font-medium text-[16px] text-[#111]"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { 
        index: true, 
        Component: Home 
      },
      { 
        path: "about", 
        Component: About 
      },
      {
        path: "services",
        Component: Services
      },
      {
        path: "services/custom-web-app-development",
        Component: CustomWebAppDevelopment
      },
      {
        path: "products",
        Component: Products
      },
      {
        path: "products/smart-business-24",
        Component: SmartBusiness
      },
      {
        path: "industries",
        Component: Industries
      },
      {
        path: "industries/university-erp",
        Component: UniversityERP
      },
      {
        path: "case-studies",
        Component: CaseStudies
      },
      {
        path: "case-studies/:slug",
        Component: SingleCaseStudy
      },
      {
        path: "faq",
        Component: FAQ
      },
      {
        path: "portfolio",
        Component: ComingSoon
      },
      {
        path: "contact",
        Component: Contact
      },
      {
        path: "terms-and-conditions",
        Component: TermsAndConditions
      },
      {
        path: "blog",
        Component: Blog
      },
      {
        path: "blog/:slug",
        Component: SingleBlog
      },
      {
        path: "*",
        Component: ComingSoon
      }
    ],
  },
]);
