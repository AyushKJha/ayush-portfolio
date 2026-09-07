# Ayush Kumar Jha — Portfolio

**[Open the live portfolio](https://ayush-kumar-jha.onrender.com)**

Interactive portfolio with scroll-driven portrait chapters, X-ray hover effects, projects, CV, and certificates.

**[Open Daily Routine Tracker](https://daily-routine-journal.onrender.com)**

## Editable code

- [Portfolio.tsx](Portfolio.tsx): the React page, project content, portrait interaction, and scroll behavior.
- [portfolio.css](portfolio.css): responsive layouts, typography, colors, and animation styles.
- [portfolio-source.zip](portfolio-source.zip): complete editable project scaffold, configuration, package versions, lockfile, and public assets.

The two source files above mirror `app/page.tsx` and `app/globals.css` inside the archive. Edit those files in the extracted project to rebuild.

## Run and build

Extract `portfolio-source.zip`, install Node.js 22.13+ and pnpm, then run:

```sh
pnpm install
pnpm exec vite --config vite.public.config.ts
```

To create a deployment build:

```sh
pnpm exec vite build --config vite.public.config.ts
```

Publish the generated `dist-public` directory on a static host. The current root files are the deployable build, with the generated assets folder flattened and the two index.html asset references updated. The existing Render service publishes this repository root with no application build required; use Manual Deploy after changing the deployable files.



