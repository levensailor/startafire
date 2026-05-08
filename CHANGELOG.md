# Changelog

Feature-level changes (not exhaustive bugfix notes).

## 2026-05-07

- **Album cover flip:** click the hero cover for a 250ms 3D flip to `IMG_5541.png`; click again to flip back.
- **Player layout:** place the label preview gate on the top row of the player card between now-playing and play, with a responsive stack on narrow viewports.
- **Migrate site to Next.js (App Router)** for deployment on Vercel; move static assets and `player.js` under `public/`, add `app/page.tsx` and `app/globals.css`.
