# Development

## Stack

React 19, Vite 6, GSAP and react-icons, with self-hosted Geist and Geist Mono fonts. Hosted on GitHub Pages.

## Running locally

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

The dev server runs at http://localhost:5173.

## Project structure

```
src/
  portfolio.js   site content
  styles/        tokens.css, base.css, sections.css
  motion.js      page animation
  sections/      one file per section
  components/    Section and TechIcon
  hooks/         active section, GitHub stats
  assets/        portrait and project diagrams
public/          CV, favicon and social preview image
.github/         build and deploy workflow
```

## Updating content

- Text, projects and links: `src/portfolio.js`
- CV: replace `public/Kanyisola_Fagbayi_CV.pdf`
- Colours, type sizes and spacing: `src/styles/tokens.css`

## Deployment

Pushing to `main` builds the site and deploys it to GitHub Pages through `.github/workflows/deploy.yml`.
