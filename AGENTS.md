## Learned User Preferences

- When asked to match a specific live page (for example DistroKid HyperFollow), expect close visual parity: pull or inspect that page’s HTML/CSS and align backdrop blur, overlays, card shape, album art treatment, and block layout—not only colors and fonts.
- The on-page player should be real HTML5 audio with a single playable preview file; every other track stays non-interactive and labeled as coming soon.
- Layout tweaks that must not change a parent container’s size (for example keeping the grey card footprint fixed while enlarging art) should use techniques that preserve layout metrics, such as transform scale with appropriate origin and overflow, rather than only bumping intrinsic widths or padding unless the user explicitly wants the container to grow.

## Learned Workspace Facts

- This repo is a **Next.js** (App Router) CROATOA presave and preview site: `app/page.tsx`, `app/globals.css`, and **`public/player.js`** with cover art and audio under **`public/`** (legacy root `index.html` / `styles.css` are not the source of truth).
- Album presentation centers on `start a fire cover.png` with copy for the release “Start a Fire” and artist name CROATOA; the public release date shown on the page is June 1, 2026.
- The hero cover is a clickable **3D flip** (about **250ms**) between the front cover and the back image **`croatoa-bill-notext.jpg`** from **`public/`**; the back face is shown at a larger on-screen scale than the front, and the same animation applies when flipping back.
- While the back-of-cover photo is visible, the **player** block is stacked higher (via an `html` class) so the **play control** stays **above** the enlarged image and remains clickable.
- The only bundled audio preview is `Clapback.mp3`, wired to the “Clap Back” row; the rest of the tracklist is display-only with coming-soon treatment.
- Pre-save calls to action use the DistroKid HyperFollow URL for this release, including the `ref=release` query variant where a campaign link is needed.
- The current page design omits bio text and band photo galleries; emphasis is cover art, availability line, pre-save, and the player plus tracklist styled after HyperFollow.
