# Technical Documentation and Architecture

This document provides a detailed overview of the technical architecture and development patterns used in the Daffodil Software Ltd website project.

## 🏗 Architecture Overview

The project follows a modular React architecture focused on performance, maintainability, and visual excellence.

### 1. **Routing and Layout**

- **React Router 7**: Handles client-side navigation.
- **Root Layout (`src/app/pages/Root.tsx`)**: Contains the global navigation (Header/Footer) and provides the context for all sub-pages using `<Outlet />`.
- **Dynamic Routes**: Support for dynamic content like blog posts and case studies using URL slugs.

### 2. **Component Organization**

- **Page Components (`src/app/pages/`)**: High-level components that correspond to routes. They primarily compose sections from the `components` directory.
- **Section Components (`src/app/components/`)**: Large-scale UI sections (e.g., `Hero`, `CTASection`, `FAQSection`). These are designed to be self-contained and reusable across different pages.
- **Base Components (`src/imports/`)**: Low-level, often pixel-perfect components generated or inspired by Figma designs. Includes stylized frames, buttons, and complex SVG compositions.

### 3. **Design System & Styling**

- **Tailwind CSS 4**: The core styling engine, utilizing the new `@theme` configuration for design tokens.
- **Design Tokens (`src/styles/theme.css`)**:
  - **Colors**: Uses `oklch` for modern, perceptually uniform color definitions (e.g., primary, secondary, destructive).
  - **Typography**:
    - **Headers**: `Helvetica Now Display` (Medium weight).
    - **Body**: `Inter` (Normal/Medium weight).
  - **Animations**: Custom keyframes like `flare`, `bounce-subtle`, and `spin-slow` are integrated into the Tailwind theme.
- **Responsive Design**: Mobile-first approach using Tailwind's breakpoint system.

### 4. **Interaction and Animation**

- **GSAP**: Primary library for scroll-triggered animations and high-performance timelines.
- **Motion (Framer Motion)**: Used for component-level transitions and interactive micro-animations.
- **UI Components**: Built on [Radix UI](https://www.radix-ui.com/) primitives for accessibility and reliability.
- **Optimization**: Use `requestAnimationFrame` and hardware acceleration for smooth 60fps animations.

## 🧱 Component Architecture

### The `ui` Directory (`src/app/components/ui`)

A collection of low-level, reusable primitives (Buttons, Inputs, Dialogs, etc.) compatible with the system's design tokens. These should be your first choice for building more complex sections.

### The `imports` Directory (`src/imports`)

Contains high-fidelity components and complex SVG assets directly translated from Figma. These files often contain large SVG paths and specific layout structures meant to match the design 1:1.

### Navigation & Menus

The site uses highly interactive megamenus (`SolutionsMegamenu.tsx`, `ProductsMegamenu.tsx`, etc.) that are integrated into the main `Header`.

## 🛠 Feature Modules

### Blog & Case Studies

- Content is managed via structured components.
- Slugs are used for SEO-friendly URLs.
- Reusable templates (`SingleBlogPage.tsx`, `SingleCaseStudyTemplatePage.tsx`) ensure visual consistency across dynamic content.

### Interactive Components

- **Embla Carousel**: Powering the testimonials and success story sliders.
- **Radix UI**: Providing accessible foundations for accordions (FAQs) and navigation menus.
- **Recharts**: For dynamic, interactive data visualization in products and reports.

## 🚀 Development Workflow

1. **Adding a New Page**:
   - Create a new component in `src/app/pages/`.
   - Update `src/app/routes.tsx` to include the new path.
   - Compose the page using existing or new components from `src/app/components/`.

2. **Adding a New Component**:
   - For high-level sections, add to `src/app/components/`.
   - For low-level UI elements, prefer `src/imports/` if they are direct translations from Figma.

3. **Styling Guidelines**:
   - Follow the primary brand colors and typography defined in the Figma design.
   - Use absolute positioning sparingly; favor Flexbox and Grid.

## 📈 Performance & SEO

- **Image Optimization**: Use modern formats (WebP/AVIF) and responsive sizes.
- **Meta Tags**: Use semantic HTML5 elements for better SEO.
- **Code Splitting**: Routes are dynamically imported (where applicable) to reduce the initial bundle size.

---

For design specifications, refer to the [Figma design file](https://www.figma.com/design/vCwb5pnlIxpTdYZ8B5H2p1/Daffodil-Software-Ltd).
