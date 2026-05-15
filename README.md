# Start a Fire — CROATOA

**Author:** Jeff Levensailor / CROATOA  

HyperFollow-style presave and preview landing page for the album **Start a Fire**, built with **Next.js** (App Router). Audio files and artwork live in `public/`; UI logic for the player and label preview gate is in `public/player.js`.

## CROATOA band site (croatoa.live)

A separate **official band website** (streaming, Spotify embed, Bandsintown, bio, booking, SEO) lives in **`sites/croatoa-live`**. It does not use the repo-root `app/` or `public/` folders so the presave build stays isolated.

- **Deploy:** [sites/croatoa-live/DEPLOYMENT.md](sites/croatoa-live/DEPLOYMENT.md) — Vercel **Root Directory** `sites/croatoa-live`, framework **Next.js**.
- **URL:** [https://croatoa.live](https://croatoa.live) (after the domain is attached to that Vercel project).

## Deployment (Vercel) — presave app (repo root)

1. Push this repo to GitHub (see branch workflow in [CONTRIBUTING.md](CONTRIBUTING.md)).
2. In the [Vercel Dashboard](https://vercel.com), **Import** the repository.
3. Framework preset: **Next.js** (auto-detected). Root directory: **.** (repository root).
4. Build command: `npm run build` — Output: default (`.next`).
5. Deploy. Production URL will appear on the project overview after the first successful deployment.

**Public asset:** The site is intended to be served from the project root; MP3 previews and cover art are loaded from `/public`.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Band site only (`sites/croatoa-live`)

```bash
cd sites/croatoa-live
npm install
npm run dev
```

```bash
npm run build && npm start
```

Runs the production build locally.
