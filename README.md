# Ayush Kumar Jha — Portfolio

Interactive portfolio with scroll-driven portrait chapters, X-ray hover effects, projects, CV, and certificates.

Daily tracker: https://daily-routine-journal.onrender.com

This repository contains the deployable static build. Publish the root directory on a static host with no build command. The React source is included in portfolio-source.zip for reproducible development.

To edit: extract portfolio-source.zip, run `pnpm install`, then `pnpm exec vite build --config vite.public.config.ts`. Deploy the generated dist-public directory. The app source is app/page.tsx with styles in app/globals.css. Current repository build flattens the generated assets directory and updates those two index.html asset URLs.
