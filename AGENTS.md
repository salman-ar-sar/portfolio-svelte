# AGENTS.md

## Project overview

- Personal portfolio site for Salman A
- Stack: SvelteKit 2, Svelte 5, TypeScript, Tailwind CSS v4
- Main content source: `src/lib/data.ts`
- Main page composition: `src/routes/+page.svelte`

## Key commands

- `pnpm dev` — start local development
- `pnpm build` — create a production build
- `pnpm preview` — preview the production build
- `pnpm check` — run `svelte-check`
- `pnpm lint` — run Prettier check and ESLint
- `pnpm format` — format the repository with Prettier

## Important files

- `src/app.html` — global document shell and favicon links
- `src/app.css` — global styles and Tailwind entry stylesheet
- `src/lib/components/` — portfolio sections and UI pieces
- `src/lib/assets/` — source assets, including the resume PDF
- `static/` — static assets such as favicon images
- `eslint.config.js` — flat ESLint configuration
- `.prettierrc` — Prettier configuration

## Working conventions

- Keep the site as a single-page portfolio unless asked otherwise
- Prefer updating shared content in `src/lib/data.ts` instead of duplicating values across components
- Preserve Svelte 5 runes-style patterns already used in the codebase
- Keep visual changes aligned with the existing dark, neon-accent portfolio aesthetic
- For cursor behavior, avoid custom cursor UI on touch/coarse-pointer devices or when reduced motion is preferred

## Verification

After meaningful changes, run:

1. `pnpm format`
2. `pnpm lint`
3. `pnpm check`
4. `pnpm build`
