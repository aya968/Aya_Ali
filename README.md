# Aya Ali — AI Engineer

A responsive personal portfolio built with Next.js App Router, TypeScript,
Tailwind CSS, Framer Motion, and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Update portfolio content

Projects, skills, domains, capabilities, education-related facts, experience,
certifications, FAQ answers, and profile links live in
[`src/data/portfolio.ts`](src/data/portfolio.ts). Repository links are only
shown as project repositories when a project-specific URL is available.

## Add project demo videos

Copy video files into `public/demos/` using the exact names listed in
[`public/demos/README.md`](public/demos/README.md). Local MP4 and WebM files are
supported; missing files retain a coming-soon placeholder. Demo files are
ignored by Git by default to avoid large commits and deployments.

## Validate and deploy

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Deploy the project by importing its Git repository into Vercel and using the
default Next.js build settings. For larger production videos, use external
video hosting and update the centralized project video sources accordingly.
