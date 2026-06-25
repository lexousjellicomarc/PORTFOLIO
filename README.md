# Lexus_ji Portfolio

A polished, production-ready portfolio template built with **Next.js 16**, **React**, **Tailwind CSS**, **Framer Motion**, **Swiper**, and **tsParticles**.

## What was fixed and improved

- Updated the project for the current Next.js 16 build flow and fixed the previous trace-collection build hang.
- Replaced the old ESLint setup with an ESLint 9 flat config.
- Removed deprecated particle packages and migrated to `@tsparticles/react` + `@tsparticles/slim`.
- Added a validated `/api/contact` POST endpoint with honeypot spam protection, IP-based rate limiting, strict field-length rejection, optional webhook delivery, JSON responses, and no-JavaScript form redirect handling.
- Removed old template identity, fake placeholder content, and broken placeholder social links from the live UI.
- Split portfolio content into focused files inside `data/` for cleaner editing and lighter client bundles.
- Improved SEO defaults, page-specific metadata, canonical URL support, Open Graph/Twitter metadata, generated robots.txt, generated sitemap.xml, generated site.webmanifest, custom 404 page, and custom 500 page.
- Added a custom document with `<html lang="en">` for better accessibility and SEO.
- Fixed mobile scrolling by replacing locked full-screen overflow behavior with responsive `min-height` sections.
- Improved project grid responsiveness, image sizing, hover/focus states, keyboard accessibility, and about-page tab semantics with stable editable tab IDs.
- Improved accessibility for navigation, buttons, decorative images, active route state, form feedback, skip-to-content behavior, reduced-motion preferences, and focus outlines.
- Cleaned global CSS, Swiper styling, Tailwind configuration, package metadata, and reusable template structure.
- Added a neon LJ logo mark from the provided image and used it for the header identity, generated manifest icon, animated loading screen, favicon, Apple touch icon, and Open Graph preview image.
- Aligned the important portfolio content with the provided resume: summary, skills, work experience, education, services, and featured projects.
- Fixed the mobile home/avatar layout so the avatar is visible on small devices and still works as a larger desktop visual.
- Improved responsive spacing across home, about, services, work, portfolio highlights, contact, sliders, and bottom navigation clearance.
- Cleaned package-lock registry URLs and added an automatic lockfile sanitizer to prevent private/internal registry URLs from being shipped.
- Reworked the old testimonials screen into factual portfolio highlights so the site does not show fake client feedback before you add real testimonials.

## Requirements

- Node.js 20.9+ or newer
- npm 10+ or newer

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Full check

```bash
npm run check
npm run check:routes
npm run verify
npm audit --omit=dev
```


## Useful scripts

```bash
npm run sanitize:lock          # Cleans accidental private/internal registry URLs from package-lock.json
npm run validate:content      # Checks missing public assets, core config values, URLs, project images, env notes, and lockfile safety
npm run generate:public-assets # Regenerates robots.txt, sitemap.xml, and site.webmanifest from data/siteConfig.js
npm run clean                 # Removes the local .next build folder
npm run check                 # Runs content validation, lint, and production build
npm run check:routes          # Starts the production build and checks routes/API behavior
npm run verify                # Runs the full build check and production route/API check
```

## Project structure

```bash
PORTFOLIO-main/
  components/              Reusable UI components
  data/                    Main editable portfolio content and SEO config
  pages/                   Next.js pages, contact API, and error pages
  pages/_document.jsx      HTML language and document shell
  pages/api/contact.js     Contact form API endpoint
  public/                  Images, logo mark, avatar, favicon, generated SEO assets, and static files
  styles/globals.css       Tailwind and global styling
  eslint.config.mjs        ESLint 9 flat config using Next core web vitals
  next.config.js           Next.js production configuration and headers
  package.json             Scripts and dependencies
```

## Editing portfolio content

Most portfolio text, project names, service cards, skills, stats, portfolio highlights, social links, and SEO defaults are inside focused files in `data/`:

```bash
data/siteConfig.js    Site identity, page metadata, and sitemap routes
data/socials.js       Header social links
data/services.js      Services slider content
data/about.js         About tabs and stats
data/projects.js      Work slider projects aligned with resume highlights
data/testimonials.js  Portfolio highlights / testimonial-style content
```

Update these data files first before editing individual components.

## Environment variables

Copy `.env.example` to `.env.local` when you need local environment settings.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
CONTACT_WEBHOOK_URL=https://your-webhook-endpoint.com
CONTACT_WEBHOOK_TOKEN=optional-token
NEXT_PUBLIC_CONTACT_ENDPOINT=
```

`NEXT_PUBLIC_SITE_URL` is used for canonical URLs and for the generated robots.txt, sitemap.xml, and site.webmanifest files. These public SEO files are regenerated automatically during `npm run build`.

`CONTACT_WEBHOOK_URL` is optional. Without it, the contact API still validates form submissions locally and returns a safe response, but it does not deliver messages to an inbox.

## Contact form delivery

The contact form submits to `/api/contact` by default. JavaScript submissions receive JSON responses. Browser fallback submissions without JavaScript are redirected back to `/contact` with a clean status query.

For live delivery, set `CONTACT_WEBHOOK_URL` to an endpoint from your email, automation, or form backend provider. The API sends this JSON payload:

```json
{
  "name": "Sender name",
  "email": "sender@example.com",
  "subject": "Message subject",
  "message": "Message body",
  "submittedAt": "ISO timestamp",
  "source": "Lexus_ji portfolio contact form"
}
```

## Verified commands

```bash
npm ci
npm run validate:content
npm run lint
npm run build
npm audit --omit=dev
npm run start
```

All checks pass with `0 vulnerabilities`. The production route checker also verifies page status codes, generated SEO assets, contact API validation, over-length field rejection, and the no-JavaScript contact redirect. The package lock is also sanitized so it uses public npm registry URLs.


## Deployment note

Deploy this project to a host that supports Next.js server/API routes, such as Netlify or Vercel. A static-only host can render the public pages, but `/api/contact` will not run unless the host supports Next.js server functions.

## v1.9.0 Animation and Scrollable Project UX Notes

This version adds a cooler visual layer without changing the core content structure:

- Animated aurora/grid background across the site.
- Top scroll-progress indicator.
- Enhanced neon LJ loading screen with animated rings.
- Homepage skill ticker and floating tech badges.
- Fully scrollable project showcase for easier browsing when there are many projects.
- Improved project cards with tags, hover shine, custom scrollbar, and mobile-friendly actions.

To add more projects later, edit `data/projects.js`. The project page will remain scrollable automatically.

## v2.0.0 Programmer/Game Theme Animation Notes

This version adds a stronger programmer-inspired, game-style interface layer while keeping the portfolio functional and responsive:

- Added animated code-rain background tokens with Laravel, React, RFID, SQL, Git, build, lint, and audit cues.
- Added a fixed game HUD overlay with corner brackets, build/audit status chips, and a radar scanner on large screens.
- Added a mouse-follow glow layer for desktop devices.
- Added a cyber terminal window on the homepage with animated command/status lines.
- Added game-style stat cards, XP/progress meters, holographic borders, and subtle glitch text effects.
- Reworked services into power-level cards with animated meters and cyber panels.
- Upgraded the Work page into a mission-board style scrollable project list with quest numbers, rank badges, completion meters, tags, and stronger hover/focus effects.
- Kept reduced-motion support so users who prefer less animation are not forced into heavy motion effects.
- Preserved the existing verified route/API checks, SEO assets, contact form behavior, mobile avatar fix, and scrollable project UX.
