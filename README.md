# Kanyisola Fagbayi - Portfolio

Personal portfolio of **Kanyisola Fagbayi**, AI and machine learning engineer and data scientist.

## Stack

React 19, Vite 6, GSAP, react-icons, self-hosted Geist and Geist Mono, Vercel (hosting and analytics)

## Running locally

```bash
npm install
npm run dev        # start the dev server at http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build
npm run lint       # ESLint
```

## Project structure

```
src/
  portfolio.js   # all site content, from the CV
  styles/        # tokens.css (design tokens), base.css, sections.css
  motion.js      # opening reveal and quiet scroll reveals
  sections/      # one file per section
  components/    # shared Section wrapper and TechIcon
  hooks/         # active nav section, GitHub stats
  assets/        # portrait and project diagrams
public/          # CV, favicon and social preview image
vercel.json      # security headers and asset caching
```

## Security

`vercel.json` sets a strict Content-Security-Policy, blocks framing, and sets HSTS, `nosniff`, Referrer-Policy and Permissions-Policy headers. The site has no backend and stores no secrets.
