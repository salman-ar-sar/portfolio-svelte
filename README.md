# Salman Portfolio

Personal portfolio site for Salman A, built with SvelteKit, TypeScript, and Tailwind CSS v4.

## Stack

- SvelteKit 2 + Svelte 5
- TypeScript
- Tailwind CSS v4 via `@tailwindcss/vite`
- Prettier + ESLint using the official Svelte CLI add-ons

## What’s in the site

The homepage is a single-page portfolio composed from Svelte components in `src/lib/components/`:

- hero
- about
- experience
- projects
- skills
- education
- contact

Project content and portfolio metadata live in `src/lib/data.ts`.

## Getting started

This repository uses `pnpm`.

```sh
pnpm install
pnpm dev
```

Open the local dev server shown in the terminal, or run:

```sh
pnpm dev -- --open
```

## Scripts

```sh
pnpm dev        # start the dev server
pnpm build      # create a production build
pnpm preview    # preview the production build locally
pnpm check      # run svelte-check
pnpm lint       # run Prettier check + ESLint
pnpm format     # format the codebase with Prettier
```

## Tooling

Linting and formatting were added using the official Svelte CLI add-ons:

```sh
pnpm dlx sv add eslint prettier
```

That setup generates:

- `eslint.config.js` for flat-config ESLint
- `.prettierrc` and `.prettierignore`
- VS Code extension recommendations for Svelte, ESLint, and Prettier

## Important files

- `src/routes/+page.svelte` — page composition and document metadata
- `src/lib/components/` — portfolio sections and UI pieces
- `src/lib/data.ts` — profile data, projects, skills, education, resume URL
- `src/app.html` — global document shell and favicon links
- `src/app.css` — global styles and Tailwind entry stylesheet
- `static/` — static assets like favicons

## Resume and assets

The resume PDF is imported from `src/lib/assets/SalmanAmbalamCheri_Resume.pdf`. The download filename is derived from the generated asset URL so renaming the source file updates the download name automatically.

Favicons are served from `static/`, currently using:

- `static/semicolon.png`
- `static/semicolon-apple.png`

## Deployment note

The project currently uses `@sveltejs/adapter-auto`. Before deploying, switch to the adapter that matches your hosting platform if needed.
