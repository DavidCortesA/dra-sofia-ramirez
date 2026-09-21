# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A single-page marketing site (Next.js App Router) for a psychologist's private practice in Monterrey, Mexico ("Dra. Sofía Ramírez"). All content and copy is in Spanish (`lang="es"`). It's a static/marketing site — no database, no auth, no API routes.

## Commands

```
npm run dev     # start dev server (Next.js)
npm run build   # production build
npm run start   # serve production build
npm run lint    # next lint (ESLint)
```

There is no test suite configured in this repo.

## Architecture

- **App Router, single page**: `app/page.tsx` composes the entire homepage by stacking section components in order: `Nav`, `Hero`, `About`, `Specialties`, `Process`, `Testimonials`, `Faq`, `Contact`, `Footer`. Each section is a self-contained component in `components/` and is anchored via an `id` (e.g. `#sobre-mi`, `#especialidades`, `#proceso`, `#faq`, `#contacto`) so nav links and CTAs scroll to it (`scroll-behavior: smooth` set globally in `app/globals.css`).
- **Two standalone legal pages**: `app/aviso-de-privacidad/page.tsx` and `app/codigo-de-etica/page.tsx` are separate routes (privacy notice per Mexico's LFPDPPP, and a professional ethics code), each exporting their own `metadata` and following the same visual language as the homepage sections.
- **Client vs. server components**: `app/layout.tsx` and the legal pages are server components (they export `Metadata` for SEO). Every homepage section component starts with `"use client"` because they use Framer Motion animations and/or local state (e.g. `Nav`'s mobile menu, `Contact`'s form state).
- **Contact form**: `components/Contact.tsx` has a fully built form (name/email/phone/topic/message) but `handleSubmit` only simulates a network call (`setTimeout`) — there is no real backend wired up. If asked to make the form functional, an email-sending integration (e.g. Resend, EmailJS) needs to be added. The same component also embeds a YouCanBook.me scheduling iframe (toggled open/closed) — the URL is a real, already-configured booking link.
- **Styling system**: Tailwind with a custom palette defined in `tailwind.config.ts` — semantic color scales `sage`, `beige`, `terracota`, plus `warm.white/cream/sand`, layered on top of the shadcn-style CSS-variable colors (`background`, `primary`, `card`, etc. defined as HSL vars in `app/globals.css`). Custom font families: `font-display` (Cormorant Garamond, for large headings/accents), `font-serif` (Playfair Display), `font-sans` (Inter). Reusable layout utilities are defined in `app/globals.css` under `@layer utilities`: `.container-narrow` (`max-w-5xl`), `.container-wide` (`max-w-7xl`), `.section-padding` (`py-20 md:py-28 px-6 md:px-8`) — sections consistently use one of these instead of ad hoc spacing.
- **Animation conventions**: Framer Motion is used throughout with a repeating pattern — a `fadeUp`/stagger variant object defined per-component, `useInView` (from `framer-motion`) with `once: true` gating scroll-triggered reveals, and `AnimatePresence` for mounted/unmounted UI (mobile menu, calendar iframe, form success state).
- **Images**: `next.config.ts` allowlists `images.unsplash.com` and `plus.unsplash.com` as remote image sources for `next/image` — placeholder stock photography is used throughout; swapping in real photos only requires updating `src` values, not the config, unless a new external host is introduced.
- **Path alias**: `@/*` maps to the project root (see `tsconfig.json`), e.g. `@/components/Nav`.
