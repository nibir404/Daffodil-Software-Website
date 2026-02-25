# Contributing to Daffodil Software Ltd Website

Thank you for contributing to the Daffodil Software Ltd website! This project is a high-performance React application built to showcase the company's products and services.

## 🌿 Branching Strategy

- **`main`**: The production branch. Should always be stable.
- **`develop`**: The integration branch for new features.
- **Feature Branches**: Create branches from `develop` for individual features (e.g., `feature/new-service-page`).

## 🛠 Development Process

1.  **Clone & Install**:
    ```bash
    git clone [repository-url]
    npm install
    ```
2.  **Environment Setup**: Ensure you have the latest Node.js LTS installed.
3.  **Local Development**:
    ```bash
    npm run dev
    ```
4.  **Before Submitting**:
    - Ensure your code follows the [Guidelines](./guidelines/Guidelines.md).
    - Verify that all animations are smooth and performant.
    - Test the responsive layout on mobile, tablet, and desktop viewports.

## 📝 Commit Message Guidelines

We follow a simple commit message convention:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Changes that do not affect the meaning of the code (formatting, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance

Example: `feat: add industry-specific megamenu for education`

## 🎨 Styling & UI

- Always prefer **Tailwind CSS** utility classes.
- If a component requires a very specific design that utility classes can't achieve, use the tokens in `src/styles/theme.css`.
- Ensure all new components are documented in the respective sections of [DEVELOPMENT.md](./DEVELOPMENT.md).

## 🚀 Deployment

The site is built using Vite and can be deployed to any static site host (Vercel, Netlify, etc.) by running:

```bash
npm run build
```

The resulting `dist` folder should be uploaded to the server.
