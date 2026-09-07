# Ayush Kumar Jha — Portfolio

[Open the live portfolio](https://ayush-kumar-jha.onrender.com/)

Interactive portfolio with scroll-driven portrait chapters, X-ray hover effects, responsive project sections, CV, and certificates.

[Open Daily Routine Tracker](https://daily-routine-journal.onrender.com/)

## Clone and run

Install Node.js 22.13+ (or a newer supported LTS), then:

```sh
git clone https://github.com/AyushKJha/ayush-portfolio.git
cd ayush-portfolio
npm install
npm run dev
```

Vite opens `/source.html`, the development entry. The full editable code is directly in this repository; no ZIP extraction is needed.

## Source files

- `Portfolio.tsx`: React page, content, portrait interaction, and scroll behavior.
- `portfolio.css`: typography, responsive layouts, colors, and animations.
- `main.tsx` and `source.html`: development entry.
- `vite.config.ts`: React and CSS build configuration.
- `finish-build.mjs`: prepares the final HTML and copies the public assets.
- `package.json`: pinned direct dependencies and development/build commands.
- The portrait atlas, CV PDF, and favicon are alongside the source.

## Production build

```sh
npm run build
npm run preview
```

Publish `dist/` on a static host. The existing Render service currently publishes the previously built root `index.html` and its bundled JavaScript/CSS. Editing source does not automatically update those files. To update the hosted site, publish the new `dist/` output and manually deploy on Render, or change Render to build with `npm install && npm run build` and publish `dist`.

`portfolio-source.zip` is an earlier scaffold backup; use the root source files for ongoing development. No API keys are required for this portfolio.
