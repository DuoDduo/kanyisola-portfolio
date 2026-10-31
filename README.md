# Kanyisola Fagbayi - Portfolio

Personal portfolio of **Kanyisola Fagbayi**, AI and machine learning engineer and data scientist.

## Stack

React 19, Vite 6, GSAP, react-icons, self-hosted Geist and Geist Mono, Vercel (hosting, serverless contact form and analytics)

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
api/contact.js   # serverless function behind the contact form
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

## Contact form

The form posts to `api/contact.js`, which sends mail through [Resend](https://resend.com). Set the variables in `.env.example` in Vercel. Until they are set, the form tells visitors the message was not sent and shows her email address. The endpoint only runs on Vercel, so use `vercel dev` to try it locally.

## Security

`vercel.json` sets a strict Content-Security-Policy, blocks framing, and sets HSTS, `nosniff`, Referrer-Policy and Permissions-Policy headers. Secrets live only in Vercel environment variables.
