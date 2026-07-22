# Tcongs Infotech — Digital Studio Website

An original, premium 2026 redesign for Tcongs Infotech. The experience keeps the company’s positioning and service offering intact while moving to an enterprise SaaS visual language: restrained gradients, glass surfaces, editorial typography, motion-led product storytelling and an outcomes-first content hierarchy.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Installation

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Deploy to Vercel

Import this repository into Vercel. The framework is detected automatically and no additional configuration is required.

## Routes

- `/` — Home
- `/capabilities` — Services and capabilities
- `/approach` — Delivery approach
- `/work` — Selected work
- `/about` — Studio story and toolkit
- `/contact` — Project enquiry form

## Notes

- The home page remains the primary landing experience; the navigation now uses dedicated Next.js App Router routes for every main page.
- Light/dark mode is persisted in local storage and respects the visitor’s system preference on first visit.
- The technology strip is a CSS-driven, pause-on-hover marquee with reduced-motion support.
- The contact form is front-end only and prevents submission until it is connected to the preferred CRM or email workflow.
- Visuals are built from CSS and SVG primitives to keep the page lightweight and avoid unnecessary image requests.
