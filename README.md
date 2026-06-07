# Commerce Experience Command Center

Samkit Kothari's resume data presented as a 3D portfolio for frontend, ecommerce, personalization, AI content, and performance engineering.

## Stack

- React + Vite + TypeScript
- React Three Fiber + Drei + Three.js
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Vercel deployment

## Structure

- `src/data/` stores resume-backed content.
- `src/types/` stores shared portfolio types.
- `src/components/layout/` stores page chrome.
- `src/components/sections/` stores page sections.
- `src/components/scene/` stores 3D scene primitives and composition.
- `src/components/ui/` stores reusable presentational components.

## Local Development

```bash
npm install
npm run dev
```

The local machine may block npm registry access. In that case, deploy to Vercel from the repository; Vercel will install dependencies during the build.

## Deployment

1. Push this repository to GitHub.
2. Import it into Vercel.
3. Keep the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Open the deployed URL and verify the 3D command center, resume download, project cards, and contact links.
