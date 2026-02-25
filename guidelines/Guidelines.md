# Daffodil Software Ltd - Project Guidelines

This document outlines the coding standards, design principles, and development best practices for the Daffodil Software Ltd website project.

## 🛠 Coding Standard Guidelines

- **React Composition**: Prefer composition over inheritance. Break large components into smaller, focused sub-components within the `src/app/components` directory.
- **Routing**: All new top-level pages MUST be registered in `src/app/routes.tsx`.
- **Imports**: Use absolute imports from `@/` (if configured) or maintain clear relative paths. Group imports by:
  1.  React/Framework
  2.  Third-party libraries
  3.  Internal components
  4.  Styles/Assets
- **TypeScript**: Use interfaces for component props and ensure type safety for all data structures.

## 🎨 Design & Styling Guidelines

- **Tailwind CSS**: Use Tailwind CSS for 90% of styling. Avoid inline styles unless calculating values dynamically.
- **Typography**: Use the brand fonts defined in the design system:
  - Headers: `Helvetica Now Display`
  - Body: `Inter`
- **Colors**: Strictly adhere to the brand palette:
  - Primary Green: `#01e067`
  - Background: `#FFFFFF` or `#F7F7F7` for sections
  - Secondary/Dark: `#111111`
- **Responsive Breakpoints**: Always test layouts at `320px`, `768px`, `1024px`, and `1440px`.

## ⚡ Performance & Animation

- **GSAP & Motion**:
  - Use GSAP for complex timelines and scroll-triggered animations.
  - Use Framer Motion for simple hover effects and component transitions.
- **SVGs**: Keep SVGs optimized. Use the components in `src/imports/` for complex brand assets.

## 📂 Folder Structure Consistency

- `src/app/pages`: Top-level route components only.
- `src/app/components`: Reusable sections and UI patterns.
- `src/imports`: Figma-generated components and large SVG assets. Do not modify these files manually if they are intended to be re-generated; instead, wrap them or use them as-is.

## ✅ Implementation Checklist

- [ ] Does it match the Figma design precisely?
- [ ] Is it responsive across all primary breakpoints?
- [ ] Are animations smooth (60fps)?
- [ ] Does it follow the established folder structure?
- [ ] Are accessibility roles and ARIA labels included where necessary?
