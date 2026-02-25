# Daffodil Software Ltd - Corporate Website

A modern, high-performance corporate website built for Daffodil Software Ltd. This project is a feature-rich React application developed from a specialized Figma design, featuring advanced animations, responsive layouts, and a comprehensive suite of services, products, and industry solutions.

## 🚀 Quick Start

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Build

```bash
npm run build
```

The production-ready bundle will be generated in the `dist/` directory.

## 🛠 Tech Stack

- **Core**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Styling**:
  - [Tailwind CSS 4](https://tailwindcss.com/)
  - [Emotion](https://emotion.sh/) (for MUI/Radix styling)
- **UI Libraries**:
  - [Radix UI](https://www.radix-ui.com/) (Primitives)
  - [Material UI (MUI)](https://mui.com/)
  - [Lucide React](https://lucide.dev/) (Icons)
- **Animations**:
  - [GSAP](https://greensock.com/gsap/)
  - [Motion](https://motion.dev/) (formerly Framer Motion)
- **Components**:
  - [Recharts](https://recharts.org/) (Data Visualization)
  - [Embla Carousel](https://www.embla-carousel.com/)
  - [React Hook Form](https://react-hook-form.com/)

## 📂 Project Structure

```bash
/src
  /app
    /components   # Reusable UI components
    /pages        # Top-level page components
    App.tsx       # Root component with RouterProvider
    routes.tsx    # Application routing definitions
  /imports        # Figma-to-code components and SVG assets
  /styles         # Global CSS and configuration
  main.tsx        # Application entry point
```

## 🎨 Design Reference

The original design for this project can be found on Figma:
[Daffodil Software Ltd - Figma Design](https://www.figma.com/design/vCwb5pnlIxpTdYZ8B5H2p1/Daffodil-Software-Ltd)

## 📄 Documentation

For more detailed information about the architecture and development guidelines, please refer to the [Internal Guidelines](./guidelines/Guidelines.md).
