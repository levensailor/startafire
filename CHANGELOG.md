# Changelog

Feature-level changes (not exhaustive bugfix notes).

## 2026-05-08

- **Player:** while the hero flip shows `croatoa-bill-notext.jpg`, hide the label preview / unlock row and use a two-column player top (now-playing + play).

## 2026-05-07

- **Album cover flip:** 250ms 3D flip to `croatoa-bill-notext.jpg` at 3× cover size; while the photo is visible, the player stacks above it so the play button stays on top and clickable.
- **Player layout:** place the label preview gate on the top row of the player card between now-playing and play, with a responsive stack on narrow viewports.
- **Migrate site to Next.js (App Router)** for deployment on Vercel; move static assets and `player.js` under `public/`, add `app/page.tsx` and `app/globals.css`.
