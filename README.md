# Sandesh Ram Kedari — Portfolio

React + TypeScript portfolio built with Ant Design (components) and Bootstrap
(grid/layout via `react-bootstrap`), themed as a "status console" — a nod to
the admin dashboards you've actually shipped (School Portal, payroll, etc.).

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The build output lands in `dist/`, ready to deploy to Vercel, Netlify, GitHub
Pages, or any static host.

## Project structure

```
src/
  data/resume.ts       ← all resume content lives here, edit this first
  theme.ts              ← Ant Design theme tokens (colors, radius)
  index.css             ← design tokens + global styles (CSS variables)
  components/
    Navbar.tsx
    Hero.tsx            ← the "career-status.log" console header
    About.tsx
    Experience.tsx       ← Ant Design Timeline
    Projects.tsx         ← Bootstrap grid + Ant Design Tag
    Skills.tsx
    Education.tsx
    Contact.tsx
    Footer.tsx
```

## Customizing

- **Content**: everything text-based (name, roles, project copy, skills) is
  in `src/data/resume.ts` — no need to touch components to update wording.
- **Colors**: edit the CSS variables at the top of `src/index.css`
  (`--ink`, `--teal`, `--amber`, etc.) and the matching `colorPrimary` in
  `src/theme.ts` to keep Ant Design components in sync.
- **Sections**: add or remove a component in `src/App.tsx` to reorder the
  page.

## Deploying

Any static host works since this builds to plain HTML/CSS/JS:

- **Vercel** — import the repo, framework preset "Vite", zero config needed.
- **Netlify** — build command `npm run build`, publish directory `dist`.
- **GitHub Pages** — build, then push `dist/` to a `gh-pages` branch (add
  `base: '/your-repo-name/'` to `vite.config.ts` if deploying to a project
  page rather than a custom domain).
