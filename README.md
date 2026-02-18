# Daffodil Software Limited - Enterprise Website

## Overview
A comprehensive enterprise website for Daffodil Software Limited (DSL), showcasing 20+ years of software development experience, 500+ delivered projects, and services across multiple industries.

## Features
- 🎨 Modern gradient backgrounds and card layouts
- 📱 Fully responsive design across all devices
- 🌓 Dark mode toggle system
- ⚡ Built with React 18 + Vite
- 🎯 React Router for navigation
- 💅 Tailwind CSS v4 for styling
- 🎭 Motion/React for animations
- 🧩 shadcn/ui component library

## Tech Stack
- **Framework:** React 18.3.1
- **Build Tool:** Vite 6.3.5
- **Styling:** Tailwind CSS 4.1.12
- **Router:** React Router 7.13.0
- **Animations:** Motion 12.23.24
- **UI Components:** Radix UI + shadcn/ui
- **Icons:** Lucide React

## Typography
- **Headings:** Helvetica Now Display
- **Body:** Inter

## Design System
- Consistent responsive padding: `px-6 md:px-12 lg:px-24 xl:px-[100px]`
- Max container width: `max-w-[1520px] mx-auto`
- Responsive gaps: 60px (mobile), 80px (tablet), 100px (desktop), 120px (xl screens)

## Project Structure
```
├── src/
│   ├── app/
│   │   ├── components/        # React components
│   │   │   ├── ui/           # shadcn/ui components
│   │   │   └── figma/        # Figma-specific components
│   │   ├── pages/            # Page components
│   │   │   └── services/     # Service pages
│   │   ├── App.tsx           # Main app component
│   │   └── routes.tsx        # Route configuration
│   ├── imports/              # Figma imports and SVG paths
│   └── styles/               # CSS files
│       ├── fonts.css         # Font imports
│       ├── tailwind.css      # Tailwind configuration
│       ├── theme.css         # Theme variables
│       └── index.css         # Main CSS entry
├── package.json
├── vite.config.ts
└── postcss.config.mjs
```

## Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Important Notes

⚠️ **Figma Asset Imports**: This project was built using Figma Make and uses `figma:asset` imports for images. These are virtual modules that **only work within the Figma Make environment** and will not function in a standard development setup.

To use this code outside of Figma Make, you would need to:
1. Replace all `figma:asset` imports with actual image files
2. Update the import paths to point to local image files
3. Add the corresponding image assets to your project

## Pages

### Home Page
- Hero Section with animated backgrounds
- Trust Section with client logos
- AI Assistant Section
- Service Stack
- Success Stories
- Products showcase
- Delivery Framework
- Technology Expertise
- Why Organizations Choose Us
- Industries We Serve
- Insights
- Testimonials
- FAQ
- CTA Section

### About Page
- Hero Section
- Why Most Software Breaks
- Our Way of Thinking
- What Clients Rely On
- Built With Responsibility
- The People Behind the Systems
- Vision & Mission

### Service Pages
- Custom Web & App Development

## Contributing
This is a private enterprise website for Daffodil Software Limited.

## License
© 2025 Daffodil Software Limited. All rights reserved.

## Contact
Daffodil Tower, 4/2, Sobhanbag, Mirpur Road, Dhaka-1207, Bangladesh