# Faham.dev — Portfolio (React + Vite + Tailwind + Framer Motion)

This repository contains a polished developer portfolio built with React (v19), Vite, Tailwind CSS, Framer Motion, and Lucide icons. The project was originally scaffolded as a Next.js app in earlier versions and has since been migrated to a Vite-based setup. The source is located in `src/` and the public assets are in `public/`.

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:5173 (Vite default) in your browser.

To create a production build:

```bash
npm run build
npm run preview
```

## Project structure (source)

```
src/
├─ components/       # React UI components (Hero, About, Projects, Contact...)
├─ pages/            # Page-level wrappers used by the router (HomePage, AboutPage...)
├─ services/         # Small service modules (e.g., contact API client)
├─ main.jsx          # App entry (router, theme init, toaster)
└─ index.css         # Tailwind imports and global styles

public/              # Static assets (images, icons, resume.pdf, etc.)

package.json         # scripts: dev, build, preview, lint
vite.config.mjs      # Vite config for React
tailwind.config.js   # Tailwind config
postcss.config.js    # PostCSS config
eslint.config.mjs    # ESLint configuration
```

## Where to edit content

- Hero copy: `src/components/Hero.jsx`
- About content: `src/components/About.jsx`
- Skills and projects: `src/components/Skills.jsx`, `src/components/Projects.jsx`
- Contact form: `src/components/Contact.jsx` and `src/services/contact.js`

## Notes about migration and cleanup

- Older Next.js artifacts and references have been cleaned from the repository. The app is now a Vite React project and runs with `vite`.
- Build output (the `dist/` folder) is a generated artifact and is not required in the repository — it has been removed. Rebuild with `npm run build` as needed.

If anything needs to be restored to a Next.js structure instead, say so and this repository can be migrated back — currently everything is stable and verified to build under Vite.
