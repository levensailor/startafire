## Learned User Preferences

- When asked to match a specific live page (for example DistroKid HyperFollow), expect close visual parity: pull or inspect that page’s HTML/CSS and align backdrop blur, overlays, card shape, album art treatment, and block layout—not only colors and fonts.
- The on-page player should be real HTML5 audio with a single playable preview file; every other track stays non-interactive and labeled as coming soon.
- Layout tweaks that must not change a parent container’s size (for example keeping the grey card footprint fixed while enlarging art) should use techniques that preserve layout metrics, such as transform scale with appropriate origin and overflow, rather than only bumping intrinsic widths or padding unless the user explicitly wants the container to grow.
- When adding the public band website, do not modify root `app/` or `public/`; add an isolated subfolder (for example `sites/croatoa-live`).
- For the band site at croatoa.live, favor a concise layout: minimal fan signup (Bandsintown iframe with cropped/hidden chrome), logo-only streaming links, and no sections the user has removed (for example tracklist once cut).

## Learned Workspace Facts

- This repo hosts **two** Next.js (App Router) sites: the **Start a Fire** presave/preview at the repository root (`app/page.tsx`, `app/globals.css`, `public/player.js`, assets in `public/`) and the public band site at **`sites/croatoa-live`** (legacy root `index.html` / `styles.css` are not the source of truth for either).
- Album presentation centers on `start a fire cover.png` with copy for the release “Start a Fire” and artist name CROATOA; the public release date shown on the page is June 1, 2026.
- The hero cover is a clickable **3D flip** (about **250ms**) between the front cover and the back image **`croatoa-bill-notext.jpg`** from **`public/`**; the back face is shown at a larger on-screen scale than the front, and the same animation applies when flipping back.
- While the back-of-cover photo is visible, the **player** block is stacked higher (via an `html` class) so the **play control** stays **above** the enlarged image and remains clickable.
- The only bundled audio preview is `Clapback.mp3`, wired to the “Clap Back” row; the rest of the tracklist is display-only with coming-soon treatment.
- Pre-save calls to action use the DistroKid HyperFollow URL for this release, including the `ref=release` query variant where a campaign link is needed.
- The presave page design omits bio text and band photo galleries; emphasis is cover art, availability line, pre-save, and the player plus tracklist styled after HyperFollow.
- Deploy **croatoa.live** from `sites/croatoa-live` (own `package.json`, `lib/site-config.ts`); Vercel **Root Directory** must be `sites/croatoa-live` so the root presave app is not built for that domain.
- The band site hero uses `croatoa-bill-notext.jpg`; bio copy is loaded from `sites/croatoa-live/data/` (sourced from repo `bio.txt`); booking contact is **booking@croatoa.live**.
- Band site playback uses a **Spotify artist embed** (not local MP3); “stream everywhere” links are **service logos only** (no bordered button row).
- Bandsintown on the band site uses artist id **2609891** (events widget plus email-signup iframe from `lib/site-config.ts`); the signup iframe is clipped to show roughly the top **two-thirds** for a minimal embed.
- The band site layout is intentionally concise: **no tracklist section**; fan signup sits in the hero column beside the photo, under the short bio.
