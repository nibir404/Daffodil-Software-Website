import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { CustomWebAppDevelopment } from "./pages/services/CustomWebAppDevelopment";

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
        path: "services/custom-web-app-development",
        Component: CustomWebAppDevelopment
      },
    ],
  },
]);