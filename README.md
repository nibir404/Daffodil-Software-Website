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

```
/
├── index.html              # HTML entry point
├── vite.config.ts          # Vite + plugin configuration
├── tsconfig.json           # TypeScript config (app code)
├── tsconfig.node.json      # TypeScript config (Vite/Node tooling)
├── package.json
└── src/
    ├── main.tsx            # React app entry point
    ├── assets.d.ts         # Type declarations for figma:asset/* imports
    ├── app/
    │   ├── App.tsx         # Root component with RouterProvider
    │   ├── routes.tsx      # Application routing definitions
    │   ├── components/     # Reusable/page-level UI components
    │   │   ├── ui/         # shadcn/ui base components
    │   │   └── *.tsx       # Feature-specific section components
    │   └── pages/          # Top-level route page components
    │       ├── Root.tsx    # Root layout (Header + Outlet + Footer)
    │       ├── Home.tsx
    │       ├── About.tsx
    │       └── ...
    ├── imports/            # Auto-generated Figma-to-React components & SVG paths
    │   ├── svg-*.ts        # SVG path data exported from Figma
    │   ├── HomePage.tsx    # Large Figma frame exports (used as base reference)
    │   └── ...
    ├── assets/             # Figma-exported PNG images (referenced via figma:asset/)
    │   └── *.png
    └── styles/
        ├── index.css       # Main CSS entry (imports below)
        ├── fonts.css       # Font-face declarations
        ├── tailwind.css    # Tailwind v4 config
        └── theme.css       # Custom CSS variables / theme tokens
```

## 🗂 Import Aliases

The following path aliases are configured in both `vite.config.ts` and `tsconfig.json`:

| Alias           | Maps To                | Usage                     |
| --------------- | ---------------------- | ------------------------- |
| `@/*`           | `src/*`                | General src imports       |
| `@components/*` | `src/app/components/*` | Section/UI components     |
| `@pages/*`      | `src/app/pages/*`      | Page components           |
| `@imports/*`    | `src/imports/*`        | Figma-generated code      |
| `figma:asset/*` | `src/assets/*`         | Figma-exported PNG images |

### Using Aliases

```tsx
// Instead of relative paths:
import { Hero } from "../../app/components/Hero";

// Use aliases:
import { Hero } from "@components/Hero";
```

## 🖼 Asset Handling

All PNG images exported from Figma live in `src/assets/` and are imported using the `figma:asset/` prefix:

```tsx
import myImage from "figma:asset/abc123.png";
// Resolves to: src/assets/abc123.png
```

If an asset is missing (not exported from Figma), comment out its import and use a stub:

```tsx
// import flutterIcon from 'figma:asset/missing-hash.png';
const flutterIcon = ""; // Missing asset stub
```

## 🎨 Design Reference

The original design for this project can be found on Figma:
[Daffodil Software Ltd - Figma Design](https://www.figma.com/design/vCwb5pnlIxpTdYZ8B5H2p1/Daffodil-Software-Ltd)

## 📄 Documentation

For more detailed information about the architecture and development guidelines, please refer to the [Internal Guidelines](./guidelines/Guidelines.md).
